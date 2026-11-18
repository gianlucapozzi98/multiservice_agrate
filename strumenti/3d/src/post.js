/*
 * Post-produzione minima, scritta a mano per restare leggera (niente EffectComposer):
 *   scena -> target HDR con profondità
 *   bagliore: soglia e sfocatura a 1/4 di risoluzione (si spegne con la qualità)
 *   composizione: profondità di campo leggera, bagliore, tone mapping ACES, sRGB,
 *                 vignettatura e grana sottile.
 */
import {
  Camera,
  DepthTexture,
  HalfFloatType,
  LinearFilter,
  Mesh,
  PlaneGeometry,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  UnsignedByteType,
  UnsignedIntType,
  Vector2,
  WebGLRenderTarget,
} from "three";

const VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const SOGLIA = /* glsl */ `
uniform sampler2D tCol; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tCol, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor = vec4(c * smoothstep(0.85, 1.6, l), 1.0);
}`;

const SFOCA = /* glsl */ `
uniform sampler2D tCol; uniform vec2 uDir; varying vec2 vUv;
void main(){
  vec3 s = texture2D(tCol, vUv).rgb * 0.227;
  s += texture2D(tCol, vUv + uDir * 1.385).rgb * 0.316;
  s += texture2D(tCol, vUv - uDir * 1.385).rgb * 0.316;
  s += texture2D(tCol, vUv + uDir * 3.23).rgb * 0.07;
  s += texture2D(tCol, vUv - uDir * 3.23).rgb * 0.07;
  gl_FragColor = vec4(s, 1.0);
}`;

const FINALE = /* glsl */ `
uniform sampler2D tCol; uniform sampler2D tDepth; uniform sampler2D tBloom;
uniform vec2 uRes; uniform float uNear; uniform float uFar;
uniform float uFuoco; uniform float uCampo; uniform float uSfocatura;
uniform float uBloom; uniform float uTempo; uniform float uGrana; uniform float uEsposizione;
varying vec2 vUv;
float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear)); }
vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
const vec2 DISCO[12] = vec2[12](
  vec2(-0.326,-0.406), vec2(-0.840,-0.074), vec2(-0.696,0.457), vec2(-0.203,0.621),
  vec2(0.962,-0.195), vec2(0.473,-0.480), vec2(0.519,0.767), vec2(0.185,-0.893),
  vec2(0.507,0.064), vec2(0.896,0.412), vec2(-0.322,-0.933), vec2(-0.792,-0.598));
void main(){
  vec3 c = texture2D(tCol, vUv).rgb;
  if (uSfocatura > 0.0) {
    float z = lin(texture2D(tDepth, vUv).x);
    float coc = clamp(abs(z - uFuoco) / uCampo - 0.15, 0.0, 1.0) * uSfocatura;
    if (coc > 0.05) {
      vec3 acc = c; float w = 1.0;
      for (int i = 0; i < 12; i++) {
        vec2 o = DISCO[i] * coc / uRes;
        float zs = lin(texture2D(tDepth, vUv + o).x);
        // un campione più vicino del fuoco non sporca un pixel a fuoco
        float k = zs < z - 0.5 ? 0.35 : 1.0;
        acc += texture2D(tCol, vUv + o).rgb * k; w += k;
      }
      c = acc / w;
    }
  }
  c += texture2D(tBloom, vUv).rgb * uBloom;
  c = aces(c * uEsposizione);
  c = pow(c, vec3(1.0 / 2.2));
  vec2 q = vUv - 0.5;
  c *= 1.0 - dot(q, q) * 0.55;
  c += (rnd(vUv * uRes + fract(uTempo) * 61.0) - 0.5) * uGrana;
  gl_FragColor = vec4(c, 1.0);
}`;

export class Post {
  constructor(renderer, { hdr = true, msaa = 4 } = {}) {
    this.r = renderer;
    this.tipo = hdr ? HalfFloatType : UnsignedByteType;
    this.scena = new WebGLRenderTarget(1, 1, { type: this.tipo, format: RGBAFormat, samples: msaa });
    this.scena.depthTexture = new DepthTexture(1, 1, UnsignedIntType);
    const opz = { type: this.tipo, minFilter: LinearFilter, magFilter: LinearFilter };
    this.a = new WebGLRenderTarget(1, 1, opz);
    this.b = new WebGLRenderTarget(1, 1, opz);
    this.cam = new Camera();
    this.quad = new Mesh(new PlaneGeometry(2, 2));
    this.quad.frustumCulled = false;
    this.sq = new Scene();
    this.sq.add(this.quad);
    this.mSoglia = new ShaderMaterial({ vertexShader: VERT, fragmentShader: SOGLIA, uniforms: { tCol: { value: null } } });
    this.mSfoca = new ShaderMaterial({ vertexShader: VERT, fragmentShader: SFOCA, uniforms: { tCol: { value: null }, uDir: { value: new Vector2() } } });
    this.mFinale = new ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FINALE,
      uniforms: {
        tCol: { value: this.scena.texture },
        tDepth: { value: this.scena.depthTexture },
        tBloom: { value: this.a.texture },
        uRes: { value: new Vector2(1, 1) },
        uNear: { value: 0.1 },
        uFar: { value: 200 },
        uFuoco: { value: 20 },
        uCampo: { value: 12 },
        uSfocatura: { value: 0 },
        uBloom: { value: 0.6 },
        uTempo: { value: 0 },
        uGrana: { value: 0.025 },
        uEsposizione: { value: 1.12 },
      },
    });
    this.bloom = true;
    this.dof = true;
  }

  setSize(w, h) {
    this.scena.setSize(w, h);
    const qw = Math.max(1, Math.round(w / 4)), qh = Math.max(1, Math.round(h / 4));
    this.a.setSize(qw, qh);
    this.b.setSize(qw, qh);
    this.mFinale.uniforms.uRes.value.set(w, h);
    this.qw = qw;
    this.qh = qh;
  }

  passa(mat, target) {
    this.quad.material = mat;
    this.r.setRenderTarget(target);
    this.r.render(this.sq, this.cam);
  }

  render(scene, camera, tempo, fuoco) {
    const r = this.r;
    r.setRenderTarget(this.scena);
    r.render(scene, camera);
    const u = this.mFinale.uniforms;
    if (this.bloom) {
      this.mSoglia.uniforms.tCol.value = this.scena.texture;
      this.passa(this.mSoglia, this.a);
      for (let i = 0; i < 2; i++) {
        this.mSfoca.uniforms.tCol.value = this.a.texture;
        this.mSfoca.uniforms.uDir.value.set(1 / this.qw, 0);
        this.passa(this.mSfoca, this.b);
        this.mSfoca.uniforms.tCol.value = this.b.texture;
        this.mSfoca.uniforms.uDir.value.set(0, 1 / this.qh);
        this.passa(this.mSfoca, this.a);
      }
      u.uBloom.value = 0.55;
    } else {
      u.uBloom.value = 0;
    }
    u.uNear.value = camera.near;
    u.uFar.value = camera.far;
    u.uFuoco.value = fuoco;
    u.uSfocatura.value = this.dof ? 5.0 * (r.getPixelRatio() || 1) : 0;
    u.uTempo.value = tempo;
    this.passa(this.mFinale, null);
  }
}
