var x_=Object.defineProperty;var y_=(s,t,e)=>t in s?x_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Gt=(s,t,e)=>y_(s,typeof t!="symbol"?t+"":t,e);var Kp=0,hf=1,Qp=2;var Pa=1,kc=2,Mo=3,tr=0,Rn=1,Fi=2,Tr=0,bo=1,Ia=2,uf=3,ff=4,jp=5;var Er=100,tm=101,em=102,nm=103,im=104,sm=200,rm=201,om=202,am=203,df=204,pf=205,lm=206,cm=207,hm=208,um=209,fm=210,dm=211,pm=212,mm=213,gm=214,tc=0,ec=1,nc=2,fo=3,ic=4,sc=5,rc=6,oc=7,mf=0,_m=1,vm=2,is=0,gf=1,_f=2,vf=3,Da=4,xf=5,yf=6,Sf=7;var Mf=300,Ar=301,wo=302,Vc=303,Gc=304,ac=1e3,ts=1001,lc=1002,vn=1003,xm=1004;var La=1005;var xn=1006,Hc=1007;var Ts=1008;var Vn=1009,bf=1010,wf=1011,To=1012,Wc=1013,yi=1014,Ui=1015,Si=1016,Xc=1017,qc=1018,Cr=1020,Tf=35902,Ef=35899,Af=1021,Cf=1022,Mi=1023,ys=1026,Es=1027,Yc=1028,Zc=1029,er=1030,Jc=1031;var $c=1033,Na=33776,Fa=33777,Ua=33778,Oa=33779,Kc=35840,Qc=35841,jc=35842,th=35843,eh=36196,nh=37492,ih=37496,sh=37488,rh=37489,Ba=37490,oh=37491,ah=37808,lh=37809,ch=37810,hh=37811,uh=37812,fh=37813,dh=37814,ph=37815,mh=37816,gh=37817,_h=37818,vh=37819,xh=37820,yh=37821,Sh=36492,Mh=36494,bh=36495,wh=36283,Th=36284,za=36285,Eh=36286;var ra=2300,cc=2301,Ql=2302,ju=2303,tf=2400,ef=2401,nf=2402;var ym=3200;var Ah=0,Sm=1,As="",Kn="srgb",oa="srgb-linear",aa="linear",Se="srgb";var jl=7680;var Mm=519,bm=512,wm=513,Tm=514,Rf=515,Em=516,Am=517,Pf=518,If=519,Cm=35044;var Df="300 es",Di=2e3,po=2001;function S_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function M_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function la(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rm(){let s=la("canvas");return s.style.display="block",s}var xp={},mo=null;function Lf(...s){let t="THREE."+s.shift();mo?mo("log",t,...s):console.log(t,...s)}function Pm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Wt(...s){s=Pm(s);let t="THREE."+s.shift();if(mo)mo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=Pm(s);let t="THREE."+s.shift();if(mo)mo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function na(...s){let t=s.join(" ");t in xp||(xp[t]=!0,Wt(...s))}function Im(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Dm={[tc]:tc,[nc]:rc,[ic]:ic,[fo]:sc,[ec]:ec,[rc]:nc,[oc]:oc,[sc]:fo},es=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cu=Math.PI/180,hc=180/Math.PI;function ka(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function he(s,t,e){return Math.max(t,Math.min(e,s))}function b_(s,t){return(s%t+t)%t}function Ru(s,t,e){return(1-e)*s+e*t}function Lm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function w_(s,t){if(t.constructor===Float32Array)return s;let e=Nf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function T_(s,t){if(t.constructor===Float32Array)return s;let e=Nf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var kf=class kf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kf.prototype.isVector2=!0;var zt=kf,yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*v;m<0&&(f=-f,u=-u,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),b=Math.sin(x);g=Math.sin(g*x)/b,a=Math.sin(a*x)/b,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+v*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+v*a;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vf=class Vf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pu.copy(this).projectOnVector(t),this.sub(Pu)}reflect(t){return this.sub(Pu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vf.prototype.isVector3=!0;var U=Vf,Pu=new U,yp=new yn,Gf=class Gf{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],v=i[0],m=i[3],g=i[6],x=i[1],b=i[4],y=i[7],T=i[2],w=i[5],_=i[8];return r[0]=o*v+a*x+l*T,r[3]=o*m+a*b+l*w,r[6]=o*g+a*y+l*_,r[1]=c*v+h*x+d*T,r[4]=c*m+h*b+d*w,r[7]=c*g+h*y+d*_,r[2]=f*v+u*x+p*T,r[5]=f*m+u*b+p*w,r[8]=f*g+u*y+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Iu.makeScale(t,e)),this}rotate(t){return na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Iu.makeRotation(-t)),this}translate(t,e){return na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Iu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;var Yt=Gf,Iu=new Yt,Sp=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mp=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){let s={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(i.r=uo(i.r),i.g=uo(i.g),i.b=uo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===As?aa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[oa]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:Sp,fromXYZ:Mp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Sp,fromXYZ:Mp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}var pe=E_();function xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Kr,uc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Kr===void 0&&(Kr=la("canvas")),Kr.width=t.width,Kr.height=t.height;let i=Kr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Kr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},A_=0,go=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Du(i[o].image)):r.push(Du(i[o]))}else r=Du(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var C_=0,Lu=new U,ai=class s extends es{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ts,i=ts,r=xn,o=Ts,a=Mi,l=Vn,c=s.DEFAULT_ANISOTROPY,h=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ka(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lu).x}get height(){return this.source.getSize(Lu).y}get depth(){return this.source.getSize(Lu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Mf;ai.DEFAULT_ANISOTROPY=1;var Hf=class Hf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(u+1)/2,T=(g+1)/2,w=(h+f)/4,_=(d+v)/4,S=(p+m)/4;return b>y&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=_/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=S/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=S/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hf.prototype.isVector4=!0;var Be=Hf,fc=class extends es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new ai({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new go(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends fc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ca=class extends ai{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dc=class extends ai{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zc=class zc{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Qr.setFromMatrixColumn(t,0).length(),r=1/Qr.setFromMatrixColumn(t,1).length(),o=1/Qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,v=c*d;e[0]=f+v*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R_,t,P_)}lookAt(t,e,n){let i=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Gs.crossVectors(n,_i),Gs.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Gs.crossVectors(n,_i)),Gs.normalize(),Rl.crossVectors(_i,Gs),i[0]=Gs.x,i[4]=Rl.x,i[8]=_i.x,i[1]=Gs.y,i[5]=Rl.y,i[9]=_i.y,i[2]=Gs.z,i[6]=Rl.z,i[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],b=n[7],y=n[11],T=n[15],w=i[0],_=i[4],S=i[8],R=i[12],C=i[1],D=i[5],N=i[9],G=i[13],I=i[2],W=i[6],Y=i[10],V=i[14],rt=i[3],X=i[7],P=i[11],ot=i[15];return r[0]=o*w+a*C+l*I+c*rt,r[4]=o*_+a*D+l*W+c*X,r[8]=o*S+a*N+l*Y+c*P,r[12]=o*R+a*G+l*V+c*ot,r[1]=h*w+d*C+f*I+u*rt,r[5]=h*_+d*D+f*W+u*X,r[9]=h*S+d*N+f*Y+u*P,r[13]=h*R+d*G+f*V+u*ot,r[2]=p*w+v*C+m*I+g*rt,r[6]=p*_+v*D+m*W+g*X,r[10]=p*S+v*N+m*Y+g*P,r[14]=p*R+v*G+m*V+g*ot,r[3]=x*w+b*C+y*I+T*rt,r[7]=x*_+b*D+y*W+T*X,r[11]=x*S+b*N+y*Y+T*P,r[15]=x*R+b*G+y*V+T*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],v=t[7],m=t[11],g=t[15],x=l*u-c*f,b=a*u-c*d,y=a*f-l*d,T=o*u-c*h,w=o*f-l*h,_=o*d-a*h;return e*(v*x-m*b+g*y)-n*(p*x-m*T+g*w)+i*(p*b-v*T+g*_)-r*(p*y-v*w+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],v=t[13],m=t[14],g=t[15],x=e*a-n*o,b=e*l-i*o,y=e*c-r*o,T=n*l-i*a,w=n*c-r*a,_=i*c-r*l,S=h*v-d*p,R=h*m-f*p,C=h*g-u*p,D=d*m-f*v,N=d*g-u*v,G=f*g-u*m,I=x*G-b*N+y*D+T*C-w*R+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/I;return t[0]=(a*G-l*N+c*D)*W,t[1]=(i*N-n*G-r*D)*W,t[2]=(v*_-m*w+g*T)*W,t[3]=(f*w-d*_-u*T)*W,t[4]=(l*C-o*G-c*R)*W,t[5]=(e*G-i*C+r*R)*W,t[6]=(m*y-p*_-g*b)*W,t[7]=(h*_-f*y+u*b)*W,t[8]=(o*N-a*C+c*S)*W,t[9]=(n*C-e*N-r*S)*W,t[10]=(p*w-v*y+g*x)*W,t[11]=(d*y-h*w-u*x)*W,t[12]=(a*R-o*D-l*S)*W,t[13]=(e*D-n*R+i*S)*W,t[14]=(v*b-p*T-m*x)*W,t[15]=(h*T-d*b+f*x)*W,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,v=o*h,m=o*d,g=a*d,x=l*c,b=l*h,y=l*d,T=n.x,w=n.y,_=n.z;return i[0]=(1-(v+g))*T,i[1]=(u+y)*T,i[2]=(p-b)*T,i[3]=0,i[4]=(u-y)*w,i[5]=(1-(f+g))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(p+b)*_,i[9]=(m-x)*_,i[10]=(1-(f+v))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qr.set(i[0],i[1],i[2]).length(),a=Qr.set(i[4],i[5],i[6]).length(),l=Qr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xi.copy(this);let c=1/o,h=1/a,d=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,e.setFromRotationMatrix(Xi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Di,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===Di)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===po)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Di,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===Di)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===po)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zc.prototype.isMatrix4=!0;var _e=zc,Qr=new U,Xi=new _e,R_=new U(0,0,0),P_=new U(1,1,1),Gs=new U,Rl=new U,_i=new U,bp=new _e,wp=new yn,Ss=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wp.setFromEuler(this),this.setFromQuaternion(wp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},I_=0,Tp=new U,jr=new yn,ps=new _e,Pl=new U,$o=new U,D_=new U,L_=new yn,Ep=new U(1,0,0),Ap=new U(0,1,0),Cp=new U(0,0,1),Rp={type:"added"},N_={type:"removed"},to={type:"childadded",child:null},Nu={type:"childremoved",child:null},on=class s extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new Ss,n=new yn,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Yt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(Ep,t)}rotateY(t){return this.rotateOnAxis(Ap,t)}rotateZ(t){return this.rotateOnAxis(Cp,t)}translateOnAxis(t,e){return Tp.copy(t).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ep,t)}translateY(t){return this.translateOnAxis(Ap,t)}translateZ(t){return this.translateOnAxis(Cp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pl.copy(t):Pl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt($o,Pl,this.up):ps.lookAt(Pl,$o,this.up),this.quaternion.setFromRotationMatrix(ps),i&&(ps.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(ps),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rp),to.child=t,this.dispatchEvent(to),to.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N_),Nu.child=t,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rp),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,D_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,L_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new U(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},F_={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Fu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=b_(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fu(o,r,t+1/3),this.g=Fu(o,r,t),this.b=Fu(o,r,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=Kn){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){let n=Nm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return pe.workingToColorSpace(On.copy(this),t),Math.round(he(On.r*255,0,255))*65536+Math.round(he(On.g*255,0,255))*256+Math.round(he(On.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(On.copy(this),e);let n=On.r,i=On.g,r=On.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(On.copy(this),e),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Kn){pe.workingToColorSpace(On.copy(this),t);let e=On.r,n=On.g,i=On.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hs),this.setHSL(Hs.h+t,Hs.s+e,Hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hs),t.getHSL(Il);let n=Ru(Hs.h,Il.h,e),i=Ru(Hs.s,Il.s,e),r=Ru(Hs.l,Il.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Xt;Xt.NAMES=Nm;var ha=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qi=new U,ms=new U,Uu=new U,gs=new U,eo=new U,no=new U,Pp=new U,Ou=new U,Bu=new U,zu=new U,ku=new Be,Vu=new Be,Gu=new Be,Ys=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qi.subVectors(t,e),i.cross(qi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qi.subVectors(i,e),ms.subVectors(n,e),Uu.subVectors(t,e);let o=qi.dot(qi),a=qi.dot(ms),l=qi.dot(Uu),c=ms.dot(ms),h=ms.dot(Uu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ku.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),ku.fromBufferAttribute(t,e),Vu.fromBufferAttribute(t,n),Gu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ku,r.x),o.addScaledVector(Vu,r.y),o.addScaledVector(Gu,r.z),o}static isFrontFacing(t,e,n,i){return qi.subVectors(n,e),ms.subVectors(t,e),qi.cross(ms).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),qi.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;eo.subVectors(i,n),no.subVectors(r,n),Ou.subVectors(t,n);let l=eo.dot(Ou),c=no.dot(Ou);if(l<=0&&c<=0)return e.copy(n);Bu.subVectors(t,i);let h=eo.dot(Bu),d=no.dot(Bu);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(eo,o);zu.subVectors(t,r);let u=eo.dot(zu),p=no.dot(zu);if(p>=0&&u<=p)return e.copy(r);let v=u*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(no,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Pp.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(Pp,a);let g=1/(m+v+f);return o=v*g,a=f*g,e.copy(n).addScaledVector(eo,o).addScaledVector(no,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ns=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yi):Yi.fromBufferAttribute(r,o),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dl.copy(n.boundingBox)),Dl.applyMatrix4(t.matrixWorld),this.union(Dl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Ll.subVectors(this.max,Ko),io.subVectors(t.a,Ko),so.subVectors(t.b,Ko),ro.subVectors(t.c,Ko),Ws.subVectors(so,io),Xs.subVectors(ro,so),vr.subVectors(io,ro);let e=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-vr.z,vr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,vr.z,0,-vr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-vr.y,vr.x,0];return!Hu(e,io,so,ro,Ll)||(e=[1,0,0,0,1,0,0,0,1],!Hu(e,io,so,ro,Ll))?!1:(Nl.crossVectors(Ws,Xs),e=[Nl.x,Nl.y,Nl.z],Hu(e,io,so,ro,Ll))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new U,new U,new U,new U,new U,new U,new U,new U],Yi=new U,Dl=new ns,io=new U,so=new U,ro=new U,Ws=new U,Xs=new U,vr=new U,Ko=new U,Ll=new U,Nl=new U,xr=new U;function Hu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xr.fromArray(s,r);let a=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),l=t.dot(xr),c=e.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var rn=new U,Fl=new zt,U_=0,zn=class extends es{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cm,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=t!==void 0?Nf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fl.fromBufferAttribute(this,e),Fl.applyMatrix3(t),this.setXY(e,Fl.x,Fl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):w_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):T_(t,this.array)}};var ua=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fa=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Oe=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},O_=new ns,Qo=new U,Wu=new U,Ms=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):O_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);let e=Qo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(Wu)),this.expandByPoint(Qo.copy(t.center).sub(Wu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},B_=0,Ii=new _e,Xu=new on,oo=new U,vi=new ns,jo=new ns,_n=new U,An=class s extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S_(t)?fa:ua)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,n){return Ii.makeTranslation(t,e,n),this.applyMatrix4(Ii),this}scale(t,e,n){return Ii.makeScale(t,e,n),this.applyMatrix4(Ii),this}lookAt(t){return Xu.lookAt(t),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];vi.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(vi.min,jo.min),vi.expandByPoint(_n),_n.addVectors(vi.max,jo.max),vi.expandByPoint(_n)):(vi.expandByPoint(jo.min),vi.expandByPoint(jo.max))}vi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_n.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_n));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_n.fromBufferAttribute(a,c),l&&(oo.fromBufferAttribute(t,c),_n.add(oo)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let h=new U,d=new U,f=new U,u=new zt,p=new zt,v=new zt,m=new U,g=new U;function x(R,C,D){c[R]=c[C]=c[D]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),d.sub(h),f.sub(h),p.sub(u),v.sub(u);let N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(N),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(N),a[R].add(m),a[C].add(m),a[D].add(m),l[R].add(g),l[C].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,C=b.length;R<C;++R){let D=b[R],N=D.start,G=D.count;for(let I=N,W=N+G;I<W;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new U,T=new U,w=new U,_=new U;function S(R){w.fromBufferAttribute(i,R),_.copy(w);let C=a[R];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(_,C);let N=T.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,N)}for(let R=0,C=n.count;R<C;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new zn(f,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qu=new U,z_=new U,k_=new Yt,Zi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=qu.subVectors(n,e).cross(z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||k_.getNormalMatrix(t),i=this.coplanarPoint(qu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},V_=0,bs=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=bo,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=pf,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jl,this.stencilZFail=jl,this.stencilZPass=jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new U,Yu=new U,Ul=new U,Ol=new U,xo=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yu.copy(t).add(e).multiplyScalar(.5),Ul.copy(e).sub(t).normalize(),Ol.copy(this.origin).sub(Yu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ul),a=Ol.dot(this.direction),l=-Ol.dot(Ul),c=Ol.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let v=1/h;d*=v,f*=v,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Yu).addScaledVector(Ul,f),u}intersectSphere(t,e){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let n=vs.dot(this.direction),i=vs.dot(vs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,x=n.y-o.y,b=n.z-o.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(h),_,S,R,C,D,N,G,I,W,Y,V,rt;if(y>=T&&y>=w?(R=l,N=d,W=p,rt=g,l>=0?(_=c,S=h,C=f,D=u,G=v,I=m,Y=x,V=b):(_=h,S=c,C=u,D=f,G=m,I=v,Y=b,V=x)):T>=w?(R=c,N=f,W=v,rt=x,c>=0?(_=h,S=l,C=u,D=d,G=m,I=p,Y=b,V=g):(_=l,S=h,C=d,D=u,G=p,I=m,Y=g,V=b)):(R=h,N=u,W=m,rt=b,h>=0?(_=l,S=c,C=d,D=f,G=p,I=v,Y=g,V=x):(_=c,S=l,C=f,D=d,G=v,I=p,Y=x,V=g)),R===0)return null;let X=_/R,P=S/R,ot=1/R,wt=C-X*N,kt=D-P*N,K=G-X*W,gt=I-P*W,xt=Y-X*rt,Et=V-P*rt,pt=xt*gt-Et*K,Lt=wt*Et-kt*xt,ue=K*kt-gt*wt;if(i){if(pt<0||Lt<0||ue<0)return null}else if((pt<0||Lt<0||ue<0)&&(pt>0||Lt>0||ue>0))return null;let Ct=pt+Lt+ue;if(Ct===0)return null;let Ht=ot*(pt*N+Lt*W+ue*rt);return(Ct>0?Ht<0:Ht>0)?null:this.at(Ht/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pc=class extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ip=new _e,yr=new xo,Bl=new Ms,Dp=new U,zl=new U,kl=new U,Vl=new U,Zu=new U,Gl=new U,Lp=new U,Hl=new U,Me=class extends on{constructor(t=new An,e=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Gl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Zu.fromBufferAttribute(d,t),o?Gl.addScaledVector(Zu,h):Gl.addScaledVector(Zu.sub(e),h))}e.add(Gl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(r),yr.copy(t.ray).recast(t.near),!(Bl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Bl,Dp)===null||yr.origin.distanceToSquared(Dp)>(t.far-t.near)**2))&&(Ip.copy(r).invert(),yr.copy(t.ray).applyMatrix4(Ip),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=x,T=b;y<T;y+=3){let w=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);i=Wl(this,g,t,n,c,h,d,w,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){let x=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);i=Wl(this,o,t,n,c,h,d,x,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=x,T=b;y<T;y+=3){let w=y,_=y+1,S=y+2;i=Wl(this,g,t,n,c,h,d,w,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){let x=m,b=m+1,y=m+2;i=Wl(this,o,t,n,c,h,d,x,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function G_(s,t,e,n,i,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===tr,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Hl);return c<e.near||c>e.far?null:{distance:c,point:Hl.clone(),object:s}}function Wl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,zl),s.getVertexPosition(l,kl),s.getVertexPosition(c,Vl);let h=G_(s,t,e,n,zl,kl,Vl,Lp);if(h){let d=new U;Ys.getBarycoord(Lp,zl,kl,Vl,d),i&&(h.uv=Ys.getInterpolatedAttribute(i,a,l,c,d,new zt)),r&&(h.uv1=Ys.getInterpolatedAttribute(r,a,l,c,d,new zt)),o&&(h.normal=Ys.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Ys.getNormal(zl,kl,Vl,f.normal),h.face=f,h.barycoord=d}return h}var da=class extends ai{constructor(t=null,e=1,n=1,i,r,o,a,l,c=vn,h=vn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends zn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ao=new _e,Np=new _e,Xl=[],Fp=new ns,H_=new _e,ta=new Me,ea=new Ms,pa=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,H_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ao),Fp.copy(t.boundingBox).applyMatrix4(ao),this.boundingBox.union(Fp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ao),ea.copy(t.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(ea)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),t.ray.intersectsSphere(ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ao),Np.multiplyMatrices(n,ao),ta.matrixWorld=Np,ta.raycast(t,Xl);for(let o=0,a=Xl.length;o<a;o++){let l=Xl[o];l.instanceId=r,l.object=this,e.push(l)}Xl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new da(new Float32Array(i*this.count),i,this.count,Yc,Ui));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new Ms,W_=new zt(.5,.5),ql=new U,Js=class{constructor(t=new Zi,e=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],b=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,u-h,g-p,T-x).normalize(),i[1].setComponents(c+o,u+h,g+p,T+x).normalize(),i[2].setComponents(c+a,u+d,g+v,T+b).normalize(),i[3].setComponents(c-a,u-d,g-v,T-b).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,u-f,g-m,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-m,T-y).normalize(),e===Di)i[5].setComponents(c+l,u+f,g+m,T+y).normalize();else if(e===po)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);let e=W_.distanceTo(t.center);return Sr.radius=.7071067811865476+e,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ql.x=i.normal.x>0?t.max.x:t.min.x,ql.y=i.normal.y>0?t.max.y:t.min.y,ql.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ql)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Up=new _e,mc=class s{constructor(){this.coordinateSystem=Di,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Up.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Js),n[i].setFromProjectionMatrix(Up,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Js),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var gc=class extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Op=new _e,sf=new xo,Yl=new Ms,Zl=new U,ma=class extends on{constructor(t=new An,e=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(i),Yl.radius+=r,t.ray.intersectsSphere(Yl)===!1)return;Op.copy(i).invert(),sf.copy(t.ray).applyMatrix4(Op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,v=u;p<v;p++){let m=c.getX(p);Zl.fromBufferAttribute(d,m),Bp(Zl,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,v=u;p<v;p++)Zl.fromBufferAttribute(d,p),Bp(Zl,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bp(s,t,e,n,i,r,o){let a=sf.distanceSqToPoint(s);if(a<e){let l=new U;sf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ga=class extends ai{constructor(t=[],e=Ar,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ji=class extends ai{constructor(t,e,n=yi,i,r,o,a=vn,l=vn,c,h=ys,d=1){if(h!==ys&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_a=class extends Ji{constructor(t,e=yi,n=Ar,i,r,o=vn,a=vn,l,c=ys){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},va=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kn=class s extends An{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function p(v,m,g,x,b,y,T,w,_,S,R){let C=y/_,D=T/S,N=y/2,G=T/2,I=w/2,W=_+1,Y=S+1,V=0,rt=0,X=new U;for(let P=0;P<Y;P++){let ot=P*D-G;for(let wt=0;wt<W;wt++){let kt=wt*C-N;X[v]=kt*x,X[m]=ot*b,X[g]=I,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[g]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(wt/_),d.push(1-P/S),V+=1}}for(let P=0;P<S;P++)for(let ot=0;ot<_;ot++){let wt=f+ot+W*P,kt=f+ot+W*(P+1),K=f+(ot+1)+W*(P+1),gt=f+(ot+1)+W*P;l.push(wt,kt,gt),l.push(kt,K,gt),rt+=6}a.addGroup(u,rt,R),u+=rt,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var br=class s extends An{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,v=[],m=n/2,g=0;x(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(u,2));function x(){let y=new U,T=new U,w=0,_=(e-t)/n;for(let S=0;S<=r;S++){let R=[],C=S/r,D=C*(e-t)+t;for(let N=0;N<=i;N++){let G=N/i,I=G*l+a,W=Math.sin(I),Y=Math.cos(I);T.x=D*W,T.y=-C*n+m,T.z=D*Y,d.push(T.x,T.y,T.z),y.set(W,_,Y).normalize(),f.push(y.x,y.y,y.z),u.push(G,1-C),R.push(p++)}v.push(R)}for(let S=0;S<i;S++)for(let R=0;R<r;R++){let C=v[R][S],D=v[R+1][S],N=v[R+1][S+1],G=v[R][S+1];(t>0||R!==0)&&(h.push(C,D,G),w+=3),(e>0||R!==r-1)&&(h.push(D,N,G),w+=3)}c.addGroup(g,w,0),g+=w}function b(y){let T=p,w=new zt,_=new U,S=0,R=y===!0?t:e,C=y===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*C,0),f.push(0,C,0),u.push(.5,.5),p++;let D=p;for(let N=0;N<=i;N++){let I=N/i*l+a,W=Math.cos(I),Y=Math.sin(I);_.x=R*Y,_.y=m*C,_.z=R*W,d.push(_.x,_.y,_.z),f.push(0,C,0),w.x=W*.5+.5,w.y=Y*.5*C+.5,u.push(w.x,w.y),p++}for(let N=0;N<i;N++){let G=T+N,I=D+N;y===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _c=class s extends An{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let b=new U,y=new U,T=new U;for(let w=0;w<e.length;w+=3)u(e[w+0],b),u(e[w+1],y),u(e[w+2],T),l(b,y,T,x)}function l(x,b,y,T){let w=T+1,_=[];for(let S=0;S<=w;S++){_[S]=[];let R=x.clone().lerp(y,S/w),C=b.clone().lerp(y,S/w),D=w-S;for(let N=0;N<=D;N++)N===0&&S===w?_[S][N]=R:_[S][N]=R.clone().lerp(C,N/D)}for(let S=0;S<w;S++)for(let R=0;R<2*(w-S)-1;R++){let C=Math.floor(R/2);R%2===0?(f(_[S][C+1]),f(_[S+1][C]),f(_[S][C])):(f(_[S][C+1]),f(_[S+1][C+1]),f(_[S+1][C]))}}function c(x){let b=new U;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(x),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let x=new U;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let y=m(x)/2/Math.PI+.5,T=g(x)/Math.PI+.5;o.push(y,1-T)}p(),d()}function d(){for(let x=0;x<o.length;x+=6){let b=o[x+0],y=o[x+2],T=o[x+4],w=Math.max(b,y,T),_=Math.min(b,y,T);w>.9&&_<.1&&(b<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function u(x,b){let y=x*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let x=new U,b=new U,y=new U,T=new U,w=new zt,_=new zt,S=new zt;for(let R=0,C=0;R<r.length;R+=9,C+=6){x.set(r[R+0],r[R+1],r[R+2]),b.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),w.set(o[C+0],o[C+1]),_.set(o[C+2],o[C+3]),S.set(o[C+4],o[C+5]),T.copy(x).add(b).add(y).divideScalar(3);let D=m(T);v(w,C+0,x,D),v(_,C+2,b,D),v(S,C+4,y,D)}}function v(x,b,y,T){T<0&&x.x===1&&(o[b]=x.x-1),y.x===0&&y.z===0&&(o[b]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new zt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],r=[],o=[],a=new U,l=new _e;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(he(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},xa=class extends Li{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vc=class extends xa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ff(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var zp=new U,kp=new U,Ju=new Ff,$u=new Ff,Ku=new Ff,Ni=class extends Li{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(kp.subVectors(i[0],i[1]).add(i[0]),c=kp);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(zp.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=zp),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Ju.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,v,m),$u.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,v,m),Ku.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Ju.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),$u.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ku.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Ju.calc(l),$u.calc(l),Ku.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vp(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function X_(s,t){let e=1-s;return e*e*t}function q_(s,t){return 2*(1-s)*s*t}function Y_(s,t){return s*s*t}function ia(s,t,e,n){return X_(s,t)+q_(s,e)+Y_(s,n)}function Z_(s,t){let e=1-s;return e*e*e*t}function J_(s,t){let e=1-s;return 3*e*e*s*t}function $_(s,t){return 3*(1-s)*s*s*t}function K_(s,t){return s*s*s*t}function sa(s,t,e,n,i){return Z_(s,t)+J_(s,e)+$_(s,n)+K_(s,i)}var xc=class extends Li{constructor(t=new zt,e=new zt,n=new zt,i=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new zt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sa(t,i.x,r.x,o.x,a.x),sa(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yc=class extends Li{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sa(t,i.x,r.x,o.x,a.x),sa(t,i.y,r.y,o.y,a.y),sa(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sc=class extends Li{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends Li{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bc=class extends Li{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ia(t,i.x,r.x,o.x),ia(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends Li{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ia(t,i.x,r.x,o.x),ia(t,i.y,r.y,o.y),ia(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends Li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Vp(a,l.x,c.x,h.x,d.x),Vp(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new zt().fromArray(i))}return this}},Q_=Object.freeze({__proto__:null,ArcCurve:vc,CatmullRomCurve3:Ni,CubicBezierCurve:xc,CubicBezierCurve3:yc,EllipseCurve:xa,LineCurve:Sc,LineCurve3:Mc,QuadraticBezierCurve:bc,QuadraticBezierCurve3:ya,SplineCurve:wc});var Sa=class s extends _c{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ws=class s extends An{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let x=g*f-o;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-x,0),v.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let b=x+c*g,y=x+c*(g+1),T=x+1+c*(g+1),w=x+1+c*g;u.push(b,y,w),u.push(y,T,w)}this.setIndex(u),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ma=class s extends An{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,f=new U,u=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let x=[],b=g/n,y=o+b*a,T=t*Math.cos(y),w=Math.sqrt(t*t-T*T),_=0;g===0&&o===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let R=S/e,C=i+R*r;d.x=-w*Math.cos(C),d.y=T,d.z=w*Math.sin(C),p.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(R+_,1-b),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){let b=h[g][x+1],y=h[g][x],T=h[g+1][x],w=h[g+1][x+1];(g!==0||o>0)&&u.push(b,y,w),(g!==n-1||l<Math.PI)&&u.push(y,T,w)}this.setIndex(u),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $s=class s extends An{constructor(t=new ya(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new zt,h=new U,d=[],f=[],u=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(u,2));function v(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),x(),g()}function m(b){h=t.getPointAt(b/e,h);let y=o.normals[b],T=o.binormals[b];for(let w=0;w<=i;w++){let _=w/i*Math.PI*2,S=Math.sin(_),R=-Math.cos(_);l.x=R*y.x+S*T.x,l.y=R*y.y+S*T.y,l.z=R*y.z+S*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=i;y++){let T=(i+1)*(b-1)+(y-1),w=(i+1)*b+(y-1),_=(i+1)*b+y,S=(i+1)*(b-1)+y;p.push(T,w,S),p.push(w,_,S)}}function x(){for(let b=0;b<=e;b++)for(let y=0;y<=i;y++)c.x=b/e,c.y=y/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Q_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Rr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Gp(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Gp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Gn(s){let t={};for(let e=0;e<s.length;e++){let n=Rr(s[e]);for(let i in n)t[i]=n[i]}return t}function Gp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function j_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Uf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Fm={clone:Rr,merge:Gn},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ev=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=ev,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=j_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tc=class extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ec=class extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ac=class extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Jl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tf,endingEnd:tf}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ef:r=t,a=2*e-n;break;case nf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ef:o=t,l=2*n-e;break;case nf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,b=(-1-u)*m+(1.5+u)*v+.5*p,y=u*m-u*v;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+x*o[c+T]+b*o[l+T]+y*o[d+T];return r}},Rc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Pc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ic=class extends Ks{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=u*f+p*2,x=d[g],b=d[g+1],y=t*f+p*2,T=h[y],w=h[y+1],_=iv(n,e,x,T,i);r[p]=Um(_,v,b,w,m)}return r}};function Um(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function nv(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function iv(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Um(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=nv(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var xi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Jl(t.settings)&&(n.settings={inTangents:lo(t.settings.inTangents,Array),outTangents:lo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ic(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case cc:e=this.InterpolantFactoryMethodLinear;break;case Ql:e=this.InterpolantFactoryMethodSmooth;break;case ju:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Ql;case this.InterpolantFactoryMethodBezier:return ju}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Jl(this.settings)&&(Hp(this.settings.inTangents,t),Hp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Jl(this.settings)&&(Wp(this.settings.inTangents,t),Wp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&M_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ql,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let v=e[d+p];if(v!==e[f+p]||v!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Jl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Hp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Wp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=cc;var Qs=class extends xi{constructor(t,e,n){super(t,e,n)}};Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=ra;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};Dc.prototype.ValueTypeName="color";var Lc=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};Lc.prototype.ValueTypeName="number";var Nc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ba=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends xi{constructor(t,e,n){super(t,e,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=ra;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};Fc.prototype.ValueTypeName="vector";var Uc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new Uc,Oc=class{constructor(t){this.manager=t!==void 0?t:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var yo=class extends on{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wa=class extends yo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qu=new _e,Xp=new U,qp=new U,Ta=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xp),qp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===po||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Qu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$l=new U,Kl=new yn,ji=new U,wr=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($l,Kl,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($l,Kl,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qs=new U,Yp=new zt,Zp=new zt,Bn=class extends wr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qs.x,qs.y).multiplyScalar(-t/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qs.x,qs.y).multiplyScalar(-t/qs.z)}getViewSize(t,e){return this.getViewBounds(t,Yp,Zp),e.subVectors(Zp,Yp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rf=class extends Ta{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}},Ea=class extends yo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Aa=class extends wr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},of=class extends Ta{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new of}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var co=-90,ho=1,So=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bn(co,ho,t,e);i.layers=this.layers,this.add(i);let r=new Bn(co,ho,t,e);r.layers=this.layers,this.add(r);let o=new Bn(co,ho,t,e);o.layers=this.layers,this.add(o);let a=new Bn(co,ho,t,e);a.layers=this.layers,this.add(a);let l=new Bn(co,ho,t,e);l.layers=this.layers,this.add(l);let c=new Bn(co,ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Bc=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Of="\\[\\]\\.:\\/",sv=new RegExp("["+Of+"]","g"),Bf="[^"+Of+"]",rv="[^"+Of.replace("\\.","")+"]",ov=/((?:WC+[\/:])*)/.source.replace("WC",Bf),av=/(WCOD+)?/.source.replace("WCOD",rv),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bf),cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bf),hv=new RegExp("^"+ov+av+lv+cv+"$"),uv=["material","materials","bones","map"],af=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sv,"")}static parseTrackName(t){let e=hv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);uv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=af;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vw=new Float32Array(1);var Jp=new _e,Ra=class{constructor(t,e,n=0,i=1/0){this.ray=new xo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jp),this}intersectObject(t,e=!0,n=[]){return lf(t,this,n,e),n.sort($p),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)lf(t[i],this,n,e);return n.sort($p),n}};function $p(s,t){return s.distance-t.distance}function lf(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)lf(r[o],t,e,!0)}}var Wf=class Wf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Wf.prototype.isMatrix2=!0;var cf=Wf;function zf(s,t,e,n){let i=fv(n);switch(e){case Af:return s*t;case Yc:return s*t/i.components*i.byteLength;case Zc:return s*t/i.components*i.byteLength;case er:return s*t*2/i.components*i.byteLength;case Jc:return s*t*2/i.components*i.byteLength;case Cf:return s*t*3/i.components*i.byteLength;case Mi:return s*t*4/i.components*i.byteLength;case $c:return s*t*4/i.components*i.byteLength;case Na:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qc:case th:return Math.max(s,16)*Math.max(t,8)/4;case Kc:case jc:return Math.max(s,8)*Math.max(t,8)/2;case eh:case nh:case sh:case rh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ih:case Ba:case oh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ch:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ph:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case mh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sh:case Mh:case bh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wh:case Th:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case Eh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fv(s){switch(s){case Vn:case bf:return{byteLength:1,components:1};case To:case wf:case Si:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case yi:case Wc:case Ui:return{byteLength:4,components:1};case Tf:case Ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rg(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pv(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],v=d[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let v=d[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Av=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ox=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,My=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,by=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ly=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:mv,alphahash_pars_fragment:gv,alphamap_fragment:_v,alphamap_pars_fragment:vv,alphatest_fragment:xv,alphatest_pars_fragment:yv,aomap_fragment:Sv,aomap_pars_fragment:Mv,batching_pars_vertex:bv,batching_vertex:wv,begin_vertex:Tv,beginnormal_vertex:Ev,bsdfs:Av,iridescence_fragment:Cv,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Pv,clipping_planes_pars_fragment:Iv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Lv,color_fragment:Nv,color_pars_fragment:Fv,color_pars_vertex:Uv,color_vertex:Ov,common:Bv,defaultnormal_vertex:zv,displacementmap_pars_vertex:kv,displacementmap_vertex:Vv,emissivemap_fragment:Gv,emissivemap_pars_fragment:Hv,colorspace_fragment:Wv,colorspace_pars_fragment:Xv,envmap_fragment:qv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:Zv,envmap_pars_vertex:Jv,envmap_physical_pars_fragment:ox,envmap_vertex:$v,fog_vertex:Kv,fog_pars_vertex:Qv,fog_fragment:jv,fog_pars_fragment:tx,gradientmap_pars_fragment:ex,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,lightprobes_pars_fragment:gx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:yx,map_fragment:Sx,map_pars_fragment:Mx,map_particle_fragment:bx,map_particle_pars_fragment:wx,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Ax,morphcolor_vertex:Cx,morphnormal_vertex:Rx,morphtarget_pars_vertex:Px,morphtarget_vertex:Ix,normal_fragment_begin:Dx,normal_fragment_maps:Lx,normal_pars_fragment:Nx,normal_pars_vertex:Fx,normal_vertex:Ux,normalmap_pars_fragment:Ox,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Vx,opaque_fragment:Gx,packing:Hx,premultiplied_alpha_fragment:Wx,project_vertex:Xx,dithering_fragment:qx,dithering_pars_fragment:Yx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:$x,shadowmap_pars_vertex:Kx,shadowmap_vertex:Qx,shadowmask_pars_fragment:jx,skinbase_vertex:ty,skinning_pars_vertex:ey,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:vy,cube_frag:xy,depth_vert:yy,depth_frag:Sy,distance_vert:My,distance_frag:by,equirect_vert:wy,equirect_frag:Ty,linedashed_vert:Ey,linedashed_frag:Ay,meshbasic_vert:Cy,meshbasic_frag:Ry,meshlambert_vert:Py,meshlambert_frag:Iy,meshmatcap_vert:Dy,meshmatcap_frag:Ly,meshnormal_vert:Ny,meshnormal_frag:Fy,meshphong_vert:Uy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:ky,meshtoon_frag:Vy,points_vert:Gy,points_frag:Hy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:Yy},Rt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},rs={basic:{uniforms:Gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Gn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Gn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Gn([Rt.points,Rt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Gn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Gn([Rt.common,Rt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Gn([Rt.sprite,Rt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Gn([Rt.common,Rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Gn([Rt.lights,Rt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};rs.physical={uniforms:Gn([rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Ch={r:0,b:0,g:0},Zy=new _e,og=new Yt;og.set(-1,0,0,0,1,0,0,0,1);function Jy(s,t,e,n,i,r){let o=new Xt(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(x){let b=!1,y=u(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(x,b){let y=u(b);y&&y.isCubeTexture?(c===void 0&&(c=new Me(new kn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Rr(rs.backgroundCube.uniforms),vertexShader:rs.backgroundCube.vertexShader,fragmentShader:rs.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(og),c.material.toneMapped=pe.getTransfer(y.colorSpace)!==Se,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Me(new ws(2,2),new Cn({name:"BackgroundMaterial",uniforms:Rr(rs.background.uniforms),vertexShader:rs.background.vertexShader,fragmentShader:rs.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=pe.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(Ch,Uf(s)),e.buffers.color.setClear(Ch.r,Ch.g,Ch.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:v,dispose:g}}function $y(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(D,N,G,I,W){let Y=!1,V=d(D,I,G,N);r!==V&&(r=V,c(r.object)),Y=u(D,I,G,W),Y&&p(D,I,G,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(D,N,G,I),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,N,G,I){let W=I.wireframe===!0,Y=n[N.id];Y===void 0&&(Y={},n[N.id]=Y);let V=D.isInstancedMesh===!0?D.id:0,rt=Y[V];rt===void 0&&(rt={},Y[V]=rt);let X=rt[G.id];X===void 0&&(X={},rt[G.id]=X);let P=X[W];return P===void 0&&(P=f(l()),X[W]=P),P}function f(D){let N=[],G=[],I=[];for(let W=0;W<e;W++)N[W]=0,G[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,N,G,I){let W=r.attributes,Y=N.attributes,V=0,rt=G.getAttributes();for(let X in rt)if(rt[X].location>=0){let ot=W[X],wt=Y[X];if(wt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),ot===void 0||ot.attribute!==wt||wt&&ot.data!==wt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function p(D,N,G,I){let W={},Y=N.attributes,V=0,rt=G.getAttributes();for(let X in rt)if(rt[X].location>=0){let ot=Y[X];ot===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor));let wt={};wt.attribute=ot,ot&&ot.data&&(wt.data=ot.data),W[X]=wt,V++}r.attributes=W,r.attributesNum=V,r.index=I}function v(){let D=r.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function m(D){g(D,0)}function g(D,N){let G=r.newAttributes,I=r.enabledAttributes,W=r.attributeDivisors;G[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),W[D]!==N&&(s.vertexAttribDivisor(D,N),W[D]=N)}function x(){let D=r.newAttributes,N=r.enabledAttributes;for(let G=0,I=N.length;G<I;G++)N[G]!==D[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function b(D,N,G,I,W,Y,V){V===!0?s.vertexAttribIPointer(D,N,G,W,Y):s.vertexAttribPointer(D,N,G,I,W,Y)}function y(D,N,G,I){v();let W=I.attributes,Y=G.getAttributes(),V=N.defaultAttributeValues;for(let rt in Y){let X=Y[rt];if(X.location>=0){let P=W[rt];if(P===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let ot=P.normalized,wt=P.itemSize,kt=t.get(P);if(kt===void 0)continue;let K=kt.buffer,gt=kt.type,xt=kt.bytesPerElement,Et=gt===s.INT||gt===s.UNSIGNED_INT||P.gpuType===Wc;if(P.isInterleavedBufferAttribute){let pt=P.data,Lt=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,ue=P.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Ct=0;Ct<X.locationSize;Ct++)g(X.location+Ct,pt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)m(X.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Ct=0;Ct<X.locationSize;Ct++)b(X.location+Ct,wt/X.locationSize,gt,ot,Lt*xt,(ue+wt/X.locationSize*Ct)*xt,Et)}else{if(P.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)g(X.location+pt,P.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let pt=0;pt<X.locationSize;pt++)b(X.location+pt,wt/X.locationSize,gt,ot,wt*xt,wt/X.locationSize*pt*xt,Et)}}else if(V!==void 0){let ot=V[rt];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(X.location,ot);break;case 3:s.vertexAttrib3fv(X.location,ot);break;case 4:s.vertexAttrib4fv(X.location,ot);break;default:s.vertexAttrib1fv(X.location,ot)}}}}x()}function T(){R();for(let D in n){let N=n[D];for(let G in N){let I=N[G];for(let W in I){let Y=I[W];for(let V in Y)h(Y[V].object),delete Y[V];delete I[W]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let G in N){let I=N[G];for(let W in I){let Y=I[W];for(let V in Y)h(Y[V].object),delete Y[V];delete I[W]}}delete n[D.id]}function _(D){for(let N in n){let G=n[N];for(let I in G){let W=G[I];if(W[D.id]===void 0)continue;let Y=W[D.id];for(let V in Y)h(Y[V].object),delete Y[V];delete W[D.id]}}}function S(D){for(let N in n){let G=n[N],I=D.isInstancedMesh===!0?D.id:0,W=G[I];if(W!==void 0){for(let Y in W){let V=W[Y];for(let rt in V)h(V[rt].object),delete V[rt];delete W[Y]}delete G[I],Object.keys(G).length===0&&delete n[N]}}}function R(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ky(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Mi&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Vn&&_!==Ui&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:T,samples:w}}function jy(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Zi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,b=x*4,y=g.clippingState||null;l.value=y,y=h(p,f,b,u);for(let T=0;T!==b;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=u+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=u;b!==v;++b,y+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ha=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ga(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Tr});r.uniforms.tEquirect.value=e;let o=new Me(i,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=xn),new So(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Bm=256,tS=3,eS=20,ag=256,lg=16,nS=3,iS=new U,sS=new Xt,Ph=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new So(1,10,null),this._boxMesh=new Me(new kn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=iS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(sS));let m=new So(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Bm,Lm(t))}_fromTexture(t,e){t.mapping===Ar||t.mapping===wo?this._setSize(t.image.length===0?Bm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=zm(t,!1,!1),n=Math.log2(t)-tS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ar||t.mapping===wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=km()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=rS(),this._integrationMaterial=oS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-nS)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(ag*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=aS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function zm(s,t,e){return new Ha(s,{minFilter:Ts,generateMipmaps:t,type:Si,colorSpace:oa,depthBuffer:e})}function Wa(s,t,e){return new Cn({name:s,uniforms:t,vertexShader:jt.cube_vert,fragmentShader:e,side:Rn,blending:Tr,depthTest:!1,depthWrite:!1})}function rS(){return Wa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ag}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function oS(){return Wa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function aS(){return Wa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${eS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function km(){return Wa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vm(){return Wa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function lS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Vc||u===Gc)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new Ha(p.height);return v.fromEquirectangularTexture(s,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===Vc||u===Gc,v=u===Ar||u===wo;if(p||v){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ph(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Ph(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Vc?f.mapping=Ar:u===Gc&&(f.mapping=wo),f}function l(f){let u=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function cS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&na("WebGLRenderer: "+n+" extension not supported."),i}}}function hS(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)t.update(v[m],s.ARRAY_BUFFER)}function d(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,b=m.count>=65535?fa:ua,y=new b(Math.ceil(x/3)*6,1),T=y.array;if(v!==null){let _=v.array;g=v.version;for(let S=0,R=0;S<x;S+=3){let C=_[S+0],D=_[S+1],N=_[S+2];T[R++]=C,T[R++]=D,T[R++]=D,T[R++]=N,T[R++]=N,T[R++]=C}}else{g=m.version;for(let _=0,S=0;_<x;_+=3){let R=_+0,C=_+1,D=_+2;T[S++]=R,T[S++]=C,T[S++]=C,T[S++]=D,T[S++]=D,T[S++]=R}}y.version=g;let w=r.get(p);w&&t.remove(w),r.set(p,y)}function f(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function uS(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fS(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dS(s,t,e){let n=new WeakMap,i=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*d),_=new ca(w,y,T,d);_.type=Ui,_.needsUpdate=!0;let S=b*4;for(let C=0;C<d;C++){let D=m[C],N=g[C],G=x[C],I=y*T*4*C;for(let W=0;W<D.count;W++){let Y=W*S;u===!0&&(i.fromBufferAttribute(D,W),w[I+Y+0]=i.x,w[I+Y+1]=i.y,w[I+Y+2]=i.z,w[I+Y+3]=0),p===!0&&(i.fromBufferAttribute(N,W),w[I+Y+4]=i.x,w[I+Y+5]=i.y,w[I+Y+6]=i.z,w[I+Y+7]=0),v===!0&&(i.fromBufferAttribute(G,W),w[I+Y+8]=i.x,w[I+Y+9]=i.y,w[I+Y+10]=i.z,w[I+Y+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new zt(y,T)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function pS(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var mS={[gf]:"LINEAR_TONE_MAPPING",[_f]:"REINHARD_TONE_MAPPING",[vf]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[yf]:"AGX_TONE_MAPPING",[Sf]:"NEUTRAL_TONE_MAPPING",[xf]:"CUSTOM_TONE_MAPPING"};function gS(s,t,e,n,i,r){let o=new En(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new An;h.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let d=new Tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Me(h,d),u=new Aa(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,x=null,b=[],y=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<b.length;_++){let S=b[_];S.setSize&&S.setSize(T,w)}},this.setEffects=function(T){b=T,y=b.length>0&&b[0].isRenderPass===!0;let w=o.width,_=o.height;b.length>0&&a===null&&(a=new En(w,_,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new En(w,_,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&b.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ji(w,_),r===!0&&(c.format=Es,c.type=Cr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<b.length;R++){let C=b[R];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(m||T.toneMapping===is&&b.length===0)return!1;if(x=w,w!==null){let _=w.width,S=w.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=is,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=g,m=!0;let _=o,S=a;for(let R=0;R<b.length;R++){let C=b[R];C.enabled!==!1&&(C.render(T,S,_,w),C.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==T.outputColorSpace||v!==T.toneMapping){p=T.outputColorSpace,v=T.toneMapping,d.defines={},pe.getTransfer(p)===Se&&(d.defines.SRGB_TRANSFER="");let R=mS[v];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(f,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var cg=new ai,hg=new Ji(1,1),ug=new _a(1),fg=new ca,dg=new dc,pg=new ga,Gm=[],Hm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function Ao(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Gm[i];if(r===void 0&&(r=new Float32Array(i),Gm[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function dn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Dh(s,t){let e=Hm[t];e===void 0&&(e=new Int32Array(t),Hm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _S(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2fv(this.addr,t),dn(e,t)}}function xS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;s.uniform3fv(this.addr,t),dn(e,t)}}function yS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4fv(this.addr,t),dn(e,t)}}function SS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;qm.set(n),s.uniformMatrix2fv(this.addr,!1,qm),dn(e,n)}}function MS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Xm.set(n),s.uniformMatrix3fv(this.addr,!1,Xm),dn(e,n)}}function bS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Wm.set(n),s.uniformMatrix4fv(this.addr,!1,Wm),dn(e,n)}}function wS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function TS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2iv(this.addr,t),dn(e,t)}}function ES(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3iv(this.addr,t),dn(e,t)}}function AS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4iv(this.addr,t),dn(e,t)}}function CS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function RS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2uiv(this.addr,t),dn(e,t)}}function PS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3uiv(this.addr,t),dn(e,t)}}function IS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4uiv(this.addr,t),dn(e,t)}}function Lh(s){return s.version===0&&(s.compareFunction=If,s.needsUpdate=!0),s}function DS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Lh(hg):r=cg,e.setTexture2D(t||r,i)}function LS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dg,i)}function NS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Lh(ug):r=pg,e.setTextureCube(t||r,i)}function FS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fg,i)}function US(s){switch(s){case 5126:return _S;case 35664:return vS;case 35665:return xS;case 35666:return yS;case 35674:return SS;case 35675:return MS;case 35676:return bS;case 5124:case 35670:return wS;case 35667:case 35671:return TS;case 35668:case 35672:return ES;case 35669:case 35673:return AS;case 5125:return CS;case 36294:return RS;case 36295:return PS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return FS}}function OS(s,t){s.uniform1fv(this.addr,t)}function BS(s,t){let e=Ao(t,this.size,2);s.uniform2fv(this.addr,e)}function zS(s,t){let e=Ao(t,this.size,3);s.uniform3fv(this.addr,e)}function kS(s,t){let e=Ao(t,this.size,4);s.uniform4fv(this.addr,e)}function VS(s,t){let e=Ao(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function GS(s,t){let e=Ao(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function HS(s,t){let e=Ao(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function WS(s,t){s.uniform1iv(this.addr,t)}function XS(s,t){s.uniform2iv(this.addr,t)}function qS(s,t){s.uniform3iv(this.addr,t)}function YS(s,t){s.uniform4iv(this.addr,t)}function ZS(s,t){s.uniform1uiv(this.addr,t)}function JS(s,t){s.uniform2uiv(this.addr,t)}function $S(s,t){s.uniform3uiv(this.addr,t)}function KS(s,t){s.uniform4uiv(this.addr,t)}function QS(s,t,e){let n=this.cache,i=t.length,r=Dh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Lh(hg):o=cg;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function jS(s,t,e){let n=this.cache,i=t.length,r=Dh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||dg,r[o])}function tM(s,t,e){let n=this.cache,i=t.length,r=Dh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Lh(ug):o=pg;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function eM(s,t,e){let n=this.cache,i=t.length,r=Dh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fg,r[o])}function nM(s){switch(s){case 5126:return OS;case 35664:return BS;case 35665:return zS;case 35666:return kS;case 35674:return VS;case 35675:return GS;case 35676:return HS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return qS;case 35669:case 35673:return YS;case 5125:return ZS;case 36294:return JS;case 36295:return $S;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}var Yf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=US(e.type)}},Zf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}},Jf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Xf=/(\w+)(\])?(\[|\.)?/g;function Ym(s,t){s.seq.push(t),s.map[t.id]=t}function iM(s,t,e){let n=s.name,i=n.length;for(Xf.lastIndex=0;;){let r=Xf.exec(n),o=Xf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ym(e,c===void 0?new Yf(a,s,t):new Zf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Jf(a),Ym(e,d)),e=d}}}var Eo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);iM(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Zm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sM=37297,rM=0;function oM(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jm=new Yt;function aM(s){pe._getMatrix(Jm,pe.workingColorSpace,s);let t=`mat3( ${Jm.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case aa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $m(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+oM(s.getShaderSource(t),a)}else return r}function lM(s,t){let e=aM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var cM={[gf]:"Linear",[_f]:"Reinhard",[vf]:"Cineon",[Da]:"ACESFilmic",[yf]:"AgX",[Sf]:"Neutral",[xf]:"Custom"};function hM(s,t){let e=cM[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rh=new U;function uM(){pe.getLuminanceCoefficients(Rh);let s=Rh.x.toFixed(4),t=Rh.y.toFixed(4),e=Rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function dM(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pM(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ga(s){return s!==""}function Km(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(mM,gM)}function gM(s,t){let e=jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return $f(e)}var _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(s){return s.replace(_M,vM)}function vM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tg(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var xM={[Pa]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function yM(s){return xM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var SM={[wo]:"ENVMAP_MODE_REFRACTION"};function MM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":SM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bM={[mf]:"ENVMAP_BLENDING_MULTIPLY",[_m]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};function wM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bM[s.combine]||"ENVMAP_BLENDING_NONE"}function TM(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=MM(e),d=wM(e),f=fM(e),u=dM(r),p=i.createProgram(),v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ga).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ga).join(`
`),m.length>0&&(m+=`
`)):(v=[tg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),m=[tg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==is?"#define TONE_MAPPING":"",e.toneMapping!==is?jt.tonemapping_pars_fragment:"",e.toneMapping!==is?hM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,lM("linearToOutputTexel",e.outputColorSpace),uM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ga).join(`
`)),o=$f(o),o=Km(o,e),o=Qm(o,e),a=$f(a),a=Km(a,e),a=Qm(a,e),o=jm(o),a=jm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+v+o,b=g+m+a,y=Zm(i,i.VERTEX_SHADER,x),T=Zm(i,i.FRAGMENT_SHADER,b);i.attachShader(p,y),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",N=i.getShaderInfoLog(y)||"",G=i.getShaderInfoLog(T)||"",I=D.trim(),W=N.trim(),Y=G.trim(),V=!0,rt=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,T);else{let X=$m(i,y,"vertex"),P=$m(i,T,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+X+`
`+P)}else I!==""?Wt("WebGLProgram: Program Info Log:",I):(W===""||Y==="")&&(rt=!1);rt&&(C.diagnostics={runnable:V,programLog:I,vertexShader:{log:W,prefix:v},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(y),i.deleteShader(T),_=new Eo(i,p),S=pM(i,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,sM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var EM=0,Kf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qf(t),e.set(t,n)),n}},Qf=class{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}};function AM(s){return s===er||s===Ba||s===za}function CM(s,t,e,n,i,r){let o=new _o,a=new Kf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,R,C,D,N){let G=C.fog,I=D.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||W,Y),rt=f[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ot=P!==void 0?P.length:0,wt=0;I.morphAttributes.position!==void 0&&(wt=1),I.morphAttributes.normal!==void 0&&(wt=2),I.morphAttributes.color!==void 0&&(wt=3);let kt,K,gt,xt;if(rt){let lt=rs[rt];kt=lt.vertexShader,K=lt.fragmentShader}else{kt=_.vertexShader,K=_.fragmentShader;let lt=a.getVertexShaderStage(_),Pt=a.getFragmentShaderStage(_);a.update(_,lt,Pt),gt=lt.id,xt=Pt.id}let Et=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),Lt=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,Ct=!!_.map,Ht=!!_.matcap,Dt=!!V,Nt=Dt&&V.isPMREMTexture===!0,Kt=!!_.aoMap,oe=!!_.lightMap,Q=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,Ae=!!_.displacementMap,ae=!!_.emissiveMap,Qt=!!_.metalnessMap,ne=!!_.roughnessMap,Te=_.anisotropy>0,z=_.clearcoat>0,le=_.diffuseRoughness>0,yt=_.dispersion>0,k=_.retroreflectivity>0,F=_.iridescence>0,st=_.sheen>0,Z=_.transmission>0,ht=Te&&!!_.anisotropyMap,A=z&&!!_.clearcoatMap,M=z&&!!_.clearcoatNormalMap,B=z&&!!_.clearcoatRoughnessMap,tt=le&&!!_.diffuseRoughnessMap,J=F&&!!_.iridescenceMap,dt=F&&!!_.iridescenceThicknessMap,ut=st&&!!_.sheenColorMap,H=st&&!!_.sheenRoughnessMap,it=!!_.specularMap,ft=!!_.specularColorMap,L=!!_.specularIntensityMap,nt=Z&&!!_.transmissionMap,et=Z&&!!_.thicknessMap,vt=!!_.gradientMap,_t=!!_.alphaMap,St=_.alphaTest>0,mt=!!_.alphaHash,Mt=!!_.extensions,ct=is;_.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ct=s.toneMapping);let at=Nt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,bt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:K,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,instancingMorph:Lt&&D.morphTexture!==null,outputColorSpace:Et===null?s.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:Ht,envMap:Dt,envMapMode:Dt&&V.mapping,envMapPMREM:Nt,envMapMaxLod:Nt?at.length-1:null,envMapSize:Nt?at[0].width:null,aoMap:Kt,lightMap:oe,bumpMap:Q,normalMap:$t,displacementMap:Ae,emissiveMap:ae,normalMapObjectSpace:$t&&_.normalMapType===Sm,normalMapTangentSpace:$t&&_.normalMapType===Ah,packedNormalMap:$t&&_.normalMapType===Ah&&AM(_.normalMap.format),metalnessMap:Qt,roughnessMap:ne,anisotropy:Te,anisotropyMap:ht,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:le,diffuseRoughnessMap:tt,dispersion:yt,retroreflection:k,iridescence:F,iridescenceMap:J,iridescenceThicknessMap:dt,sheen:st,sheenColorMap:ut,sheenRoughnessMap:H,specularMap:it,specularColorMap:ft,specularIntensityMap:L,transmission:Z,transmissionMap:nt,thicknessMap:et,gradientMap:vt,opaque:_.transparent===!1&&_.blending===bo&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:St,alphaHash:mt,combine:_.combine,mapUv:Ct&&u(_.map.channel),aoMapUv:Kt&&u(_.aoMap.channel),lightMapUv:oe&&u(_.lightMap.channel),bumpMapUv:Q&&u(_.bumpMap.channel),normalMapUv:$t&&u(_.normalMap.channel),displacementMapUv:Ae&&u(_.displacementMap.channel),emissiveMapUv:ae&&u(_.emissiveMap.channel),metalnessMapUv:Qt&&u(_.metalnessMap.channel),roughnessMapUv:ne&&u(_.roughnessMap.channel),anisotropyMapUv:ht&&u(_.anisotropyMap.channel),clearcoatMapUv:A&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:tt&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:H&&u(_.sheenRoughnessMap.channel),specularMapUv:it&&u(_.specularMap.channel),specularColorMapUv:ft&&u(_.specularColorMap.channel),specularIntensityMapUv:L&&u(_.specularIntensityMap.channel),transmissionMapUv:nt&&u(_.transmissionMap.channel),thicknessMapUv:et&&u(_.thicknessMap.channel),alphaMapUv:_t&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($t||Te),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ct||_t),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:wt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(lt=>lt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:ae&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fi,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let S=f[_.type],R;if(S){let C=rs[S];R=Fm.clone(C.uniforms)}else R=_.uniforms;return R}function b(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new TM(s,S,_,i),c.push(R),h.set(S,R)),R}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:w}}function RM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function PM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function eg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ng(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,v,m,g){let x=s[t];return x===void 0?(x={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},s[t]=x):(x.id=f.id,x.object=f,x.geometry=u,x.material=p,x.materialVariant=o(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=g),t++,x}function l(f,u,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let b=a(f,u,p,v,m,g);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function c(f,u,p,v,m,g){let x=a(f,u,p,v,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function h(f,u){e.length>1&&e.sort(f||PM),n.length>1&&n.sort(u||eg),i.length>1&&i.sort(u||eg)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function IM(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ng,s.set(n,[o])):i>=r.length?(o=new ng,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function DM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Xt};break;case"SpotLight":e={position:new U,direction:new U,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function LM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var NM=0;function FM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function UM(s){let t=new DM,e=LM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new _e,o=new _e;function a(c){let h=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,p=0,v=0,m=0,g=0,x=0,b=0,y=0,T=0,w=0,_=0,S=0,R=0,C=0;c.sort(FM);for(let N=0,G=c.length;N<G;N++){let I=c[N],W=I.color,Y=I.intensity,V=I.distance,rt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===er?rt=I.shadow.map.texture:rt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*Y,d+=W.g*Y,f+=W.b*Y;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],Y);C++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,ot=e.get(I);ot.shadowIntensity=P.intensity,ot.shadowBias=P.bias,ot.shadowNormalBias=P.normalBias,ot.shadowRadius=P.radius,ot.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=ot,n.sunShadowMap[p]=rt;let wt=P.getViewportCount();for(let kt=0;kt<wt;kt++)n.sunShadowMatrix[v+kt]=P.getMatrix(kt),n.sunShadowCascade[v+kt]=P._cascadeData[kt];v+=wt,p++}n.sun[u]=X,u++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,ot=e.get(I);ot.shadowIntensity=P.intensity,ot.shadowBias=P.bias,ot.shadowNormalBias=P.normalBias,ot.shadowRadius=P.radius,ot.shadowMapSize=P.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(W).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[x]=X;let P=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,P.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[x]=P.matrix,I.castShadow){let ot=e.get(I);ot.shadowIntensity=P.intensity,ot.shadowBias=P.bias,ot.shadowNormalBias=P.normalBias,ot.shadowRadius=P.radius,ot.shadowMapSize=P.mapSize,n.spotShadow[x]=ot,n.spotShadowMap[x]=rt,_++}x++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(W).multiplyScalar(Y),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=X,b++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let P=I.shadow,ot=e.get(I);ot.shadowIntensity=P.intensity,ot.shadowBias=P.bias,ot.shadowNormalBias=P.normalBias,ot.shadowRadius=P.radius,ot.shadowMapSize=P.mapSize,ot.shadowCameraNear=P.camera.near,ot.shadowCameraFar=P.camera.far,n.pointShadow[g]=ot,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(Y),X.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[y]=X,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.sunLength=u,D.directionalLength=m,D.pointLength=g,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=C,n.version=NM++)}function l(c,h){let d=0,f=0,u=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){let y=c[x];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function ig(s){let t=new UM(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OM(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new ig(s),t.set(i,[a])):r>=o.length?(a=new ig(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],VM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],sg=new _e,Va=new U,qf=new U;function GM(s,t,e){let n=new Js,i=new zt,r=new zt,o=new Be,a=new Ec,l=new Ac,c={},h=e.maxTextureSize,d={[tr]:Rn,[Rn]:tr,[Fi]:Fi},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new An;p.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Me(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let g=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===kc&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pa);let R=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Tr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=w.length;I<W;I++){let Y=w[I],V=Y.shadow;if(V===void 0){Wt("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let rt=V.getFrameExtents();i.multiply(rt),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,V.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Mo){if(Y.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new En(i.x,i.y,{format:er,type:Si,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Ji(i.x,i.y,Ui),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=ys,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn}else Y.isPointLight?(V.map=new Ha(i.x),V.map.depthTexture=new _a(i.x,yi)):(V.map=new En(i.x,i.y),V.map.depthTexture=new Ji(i.x,i.y,yi)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=ys,this.type===Pa?(V.map.depthTexture.compareFunction=X?Pf:Rf,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let P=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,S);let ot=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let wt=0;wt<P;wt++){let kt=V.getCamera(wt);if(Y.isPointLight){let K=V.camera,gt=V.matrix,xt=Y.distance||K.far;xt!==K.far&&(K.far=xt,K.updateProjectionMatrix()),Va.setFromMatrixPosition(Y.matrixWorld),K.position.copy(Va),qf.copy(K.position),qf.add(kM[wt]),K.up.copy(VM[wt]),K.lookAt(qf),K.updateMatrixWorld(),gt.makeTranslation(-Va.x,-Va.y,-Va.z),sg.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(sg,K.coordinateSystem,K.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(V.map),s.clear());let K=V.getViewport(wt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),N.viewport(o)}n=V.getFrustum(wt),y(_,S,kt,Y,ot,this.type)}V.isPointLightShadow!==!0&&this.type===Mo&&x(V,S),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(R,C,D)};function x(w,_){let S=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new En(i.x,i.y,{format:er,type:Si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(_,null,S,f,v,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(_,null,S,u,v,null)}function b(w,_,S,R){let C=null,D=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=C.uuid,G=_.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let W=I[G];W===void 0&&(W=C.clone(),I[G]=W,_.addEventListener("dispose",T)),C=W}if(C.visible=_.visible,C.wireframe=_.wireframe,R===Mo?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=s.properties.get(C);N.light=S}return C}function y(w,_,S,R,C,D){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Mo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=t.update(w),W=w.material;if(Array.isArray(W)){let Y=I.groups;for(let V=0,rt=Y.length;V<rt;V++){let X=Y[V],P=W[X.materialIndex];if(P&&P.visible){let ot=b(w,P,R,D);w.onBeforeShadow(s,w,_,S,I,ot,X),s.renderBufferDirect(S,null,I,ot,w,X),w.onAfterShadow(s,w,_,S,I,ot,X)}}}else if(W.visible){let Y=b(w,W,R,D);w.onBeforeShadow(s,w,_,S,I,Y,null),s.renderBufferDirect(S,null,I,Y,w,null),w.onAfterShadow(s,w,_,S,I,Y,null)}}let G=w.children;for(let I=0,W=G.length;I<W;I++)y(G[I],_,S,R,C,D)}function T(w){w.target.removeEventListener("dispose",T);for(let S in c){let R=c[S],C=w.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function HM(s,t){function e(){let L=!1,nt=new Be,et=null,vt=new Be(0,0,0,0);return{setMask:function(_t){et!==_t&&!L&&(s.colorMask(_t,_t,_t,_t),et=_t)},setLocked:function(_t){L=_t},setClear:function(_t,St,mt,Mt,ct){ct===!0&&(_t*=Mt,St*=Mt,mt*=Mt),nt.set(_t,St,mt,Mt),vt.equals(nt)===!1&&(s.clearColor(_t,St,mt,Mt),vt.copy(nt))},reset:function(){L=!1,et=null,vt.set(-1,0,0,0)}}}function n(){let L=!1,nt=!1,et=null,vt=null,_t=null;return{setReversed:function(St){if(nt!==St){let mt=t.get("EXT_clip_control");St?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),nt=St;let Mt=_t;_t=null,this.setClear(Mt)}},getReversed:function(){return nt},setTest:function(St){St?pt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(St){et!==St&&!L&&(s.depthMask(St),et=St)},setFunc:function(St){if(nt&&(St=Dm[St]),vt!==St){switch(St){case tc:s.depthFunc(s.NEVER);break;case ec:s.depthFunc(s.ALWAYS);break;case nc:s.depthFunc(s.LESS);break;case fo:s.depthFunc(s.LEQUAL);break;case ic:s.depthFunc(s.EQUAL);break;case sc:s.depthFunc(s.GEQUAL);break;case rc:s.depthFunc(s.GREATER);break;case oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=St}},setLocked:function(St){L=St},setClear:function(St){_t!==St&&(_t=St,nt&&(St=1-St),s.clearDepth(St))},reset:function(){L=!1,et=null,vt=null,_t=null,nt=!1}}}function i(){let L=!1,nt=null,et=null,vt=null,_t=null,St=null,mt=null,Mt=null,ct=null;return{setTest:function(at){L||(at?pt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(at){nt!==at&&!L&&(s.stencilMask(at),nt=at)},setFunc:function(at,bt,lt){(et!==at||vt!==bt||_t!==lt)&&(s.stencilFunc(at,bt,lt),et=at,vt=bt,_t=lt)},setOp:function(at,bt,lt){(St!==at||mt!==bt||Mt!==lt)&&(s.stencilOp(at,bt,lt),St=at,mt=bt,Mt=lt)},setLocked:function(at){L=at},setClear:function(at){ct!==at&&(s.clearStencil(at),ct=at)},reset:function(){L=!1,nt=null,et=null,vt=null,_t=null,St=null,mt=null,Mt=null,ct=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],v=null,m=!1,g=null,x=null,b=null,y=null,T=null,w=null,_=null,S=new Xt(0,0,0),R=0,C=!1,D=null,N=null,G=null,I=null,W=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,rt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=rt>=2);let P=null,ot={},wt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),K=new Be().fromArray(wt),gt=new Be().fromArray(kt);function xt(L,nt,et,vt){let _t=new Uint8Array(4),St=s.createTexture();s.bindTexture(L,St),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<et;mt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(nt+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return St}let Et={};Et[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(s.DEPTH_TEST),o.setFunc(fo),Q(!1),$t(hf),pt(s.CULL_FACE),Kt(Tr);function pt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Lt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ue(L,nt){return f[L]!==nt?(s.bindFramebuffer(L,nt),f[L]=nt,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=nt),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ct(L,nt){let et=p,vt=!1;if(L){et=u.get(nt),et===void 0&&(et=[],u.set(nt,et));let _t=L.textures;if(et.length!==_t.length||et[0]!==s.COLOR_ATTACHMENT0){for(let St=0,mt=_t.length;St<mt;St++)et[St]=s.COLOR_ATTACHMENT0+St;et.length=_t.length,vt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,vt=!0);vt&&s.drawBuffers(et)}function Ht(L){return v!==L?(s.useProgram(L),v=L,!0):!1}let Dt={[Er]:s.FUNC_ADD,[tm]:s.FUNC_SUBTRACT,[em]:s.FUNC_REVERSE_SUBTRACT};Dt[nm]=s.MIN,Dt[im]=s.MAX;let Nt={[sm]:s.ZERO,[rm]:s.ONE,[om]:s.SRC_COLOR,[df]:s.SRC_ALPHA,[fm]:s.SRC_ALPHA_SATURATE,[hm]:s.DST_COLOR,[lm]:s.DST_ALPHA,[am]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[um]:s.ONE_MINUS_DST_COLOR,[cm]:s.ONE_MINUS_DST_ALPHA,[dm]:s.CONSTANT_COLOR,[pm]:s.ONE_MINUS_CONSTANT_COLOR,[mm]:s.CONSTANT_ALPHA,[gm]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(L,nt,et,vt,_t,St,mt,Mt,ct,at){if(L===Tr){m===!0&&(Lt(s.BLEND),m=!1);return}if(m===!1&&(pt(s.BLEND),m=!0),L!==jp){if(L!==g||at!==C){if((x!==Er||T!==Er)&&(s.blendEquation(s.FUNC_ADD),x=Er,T=Er),at)switch(L){case bo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ia:s.blendFunc(s.ONE,s.ONE);break;case uf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ff:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",L);break}else switch(L){case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ia:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uf:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ff:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",L);break}b=null,y=null,w=null,_=null,S.set(0,0,0),R=0,g=L,C=at}return}_t=_t||nt,St=St||et,mt=mt||vt,(nt!==x||_t!==T)&&(s.blendEquationSeparate(Dt[nt],Dt[_t]),x=nt,T=_t),(et!==b||vt!==y||St!==w||mt!==_)&&(s.blendFuncSeparate(Nt[et],Nt[vt],Nt[St],Nt[mt]),b=et,y=vt,w=St,_=mt),(Mt.equals(S)===!1||ct!==R)&&(s.blendColor(Mt.r,Mt.g,Mt.b,ct),S.copy(Mt),R=ct),g=L,C=!1}function oe(L,nt){L.side===Fi?Lt(s.CULL_FACE):pt(s.CULL_FACE);let et=L.side===Rn;nt&&(et=!et),Q(et),L.blending===bo&&L.transparent===!1?Kt(Tr):Kt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let vt=L.stencilWrite;a.setTest(vt),vt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function $t(L){L!==Kp?(pt(s.CULL_FACE),L!==N&&(L===hf?s.cullFace(s.BACK):L===Qp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),N=L}function Ae(L){L!==G&&(V&&s.lineWidth(L),G=L)}function ae(L,nt,et){L?(pt(s.POLYGON_OFFSET_FILL),(I!==nt||W!==et)&&(I=nt,W=et,o.getReversed()&&(nt=-nt,et=-et),s.polygonOffset(nt,et))):Lt(s.POLYGON_OFFSET_FILL)}function Qt(L){L?pt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function ne(L){L===void 0&&(L=s.TEXTURE0+Y-1),P!==L&&(s.activeTexture(L),P=L)}function Te(L,nt,et){et===void 0&&(P===null?et=s.TEXTURE0+Y-1:et=P);let vt=ot[et];vt===void 0&&(vt={type:void 0,texture:void 0},ot[et]=vt),(vt.type!==L||vt.texture!==nt)&&(P!==et&&(s.activeTexture(et),P=et),s.bindTexture(L,nt||Et[L]),vt.type=L,vt.texture=nt)}function z(){let L=ot[P];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function yt(){try{s.compressedTexImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function k(){try{s.texSubImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function F(){try{s.texSubImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function st(){try{s.compressedTexSubImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function ht(){try{s.texStorage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function M(){try{s.texImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function B(){try{s.texImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function tt(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function J(L,nt){d[L]!==nt&&(s.pixelStorei(L,nt),d[L]=nt)}function dt(L){K.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function ut(L){gt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),gt.copy(L))}function H(L,nt){let et=c.get(nt);et===void 0&&(et=new WeakMap,c.set(nt,et));let vt=et.get(L);vt===void 0&&(vt=s.getUniformBlockIndex(nt,L.name),s.uniformBlockBinding(nt,vt,vt),et.set(L,vt))}function it(L,nt,et){let _t=c.get(nt).get(L);l[_t]!==et&&(s.bindBufferBase(s.UNIFORM_BUFFER,_t,et),l[_t]=et)}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,ot={},f={},l={},u=new WeakMap,p=[],v=null,m=!1,g=null,x=null,b=null,y=null,T=null,w=null,_=null,S=new Xt(0,0,0),R=0,C=!1,D=null,N=null,G=null,I=null,W=null,K.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Lt,bindFramebuffer:ue,drawBuffers:Ct,useProgram:Ht,setBlending:Kt,setMaterial:oe,setFlipSided:Q,setCullFace:$t,setLineWidth:Ae,setPolygonOffset:ae,setScissorTest:Qt,activeTexture:ne,bindTexture:Te,unbindTexture:z,compressedTexImage2D:le,compressedTexImage3D:yt,texImage2D:M,texImage3D:B,pixelStorei:J,getParameter:tt,updateUBOMapping:H,uniformBlockBinding:it,texStorage2D:ht,texStorage3D:A,texSubImage2D:k,texSubImage3D:F,compressedTexSubImage2D:st,compressedTexSubImage3D:Z,scissor:dt,viewport:ut,reset:ft}}function WM(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,v=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):la("canvas")}function x(A,M,B){let tt=1,J=ht(A);if((J.width>B||J.height>B)&&(tt=B/Math.max(J.width,J.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let dt=Math.floor(tt*J.width),ut=Math.floor(tt*J.height);f===void 0&&(f=g(dt,ut));let H=M?g(dt,ut):f;return H.width=dt,H.height=ut,H.getContext("2d").drawImage(A,0,0,dt,ut),Wt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+dt+"x"+ut+")."),H}else return"data"in A&&Wt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function b(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,M,B,tt,J,dt=!1){if(A!==null){if(s[A]!==void 0)return s[A];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;tt&&(ut=t.get("EXT_texture_norm16"),ut||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=M;if(M===s.RED&&(B===s.FLOAT&&(H=s.R32F),B===s.HALF_FLOAT&&(H=s.R16F),B===s.UNSIGNED_BYTE&&(H=s.R8),B===s.UNSIGNED_SHORT&&ut&&(H=ut.R16_EXT),B===s.SHORT&&ut&&(H=ut.R16_SNORM_EXT)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(H=s.R8UI),B===s.UNSIGNED_SHORT&&(H=s.R16UI),B===s.UNSIGNED_INT&&(H=s.R32UI),B===s.BYTE&&(H=s.R8I),B===s.SHORT&&(H=s.R16I),B===s.INT&&(H=s.R32I)),M===s.RG&&(B===s.FLOAT&&(H=s.RG32F),B===s.HALF_FLOAT&&(H=s.RG16F),B===s.UNSIGNED_BYTE&&(H=s.RG8),B===s.UNSIGNED_SHORT&&ut&&(H=ut.RG16_EXT),B===s.SHORT&&ut&&(H=ut.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(H=s.RG8UI),B===s.UNSIGNED_SHORT&&(H=s.RG16UI),B===s.UNSIGNED_INT&&(H=s.RG32UI),B===s.BYTE&&(H=s.RG8I),B===s.SHORT&&(H=s.RG16I),B===s.INT&&(H=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(H=s.RGB8UI),B===s.UNSIGNED_SHORT&&(H=s.RGB16UI),B===s.UNSIGNED_INT&&(H=s.RGB32UI),B===s.BYTE&&(H=s.RGB8I),B===s.SHORT&&(H=s.RGB16I),B===s.INT&&(H=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),B===s.UNSIGNED_INT&&(H=s.RGBA32UI),B===s.BYTE&&(H=s.RGBA8I),B===s.SHORT&&(H=s.RGBA16I),B===s.INT&&(H=s.RGBA32I)),M===s.RGB&&(B===s.UNSIGNED_SHORT&&ut&&(H=ut.RGB16_EXT),B===s.SHORT&&ut&&(H=ut.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),M===s.RGBA){let it=dt?aa:pe.getTransfer(J);B===s.FLOAT&&(H=s.RGBA32F),B===s.HALF_FLOAT&&(H=s.RGBA16F),B===s.UNSIGNED_BYTE&&(H=it===Se?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ut&&(H=ut.RGBA16_EXT),B===s.SHORT&&ut&&(H=ut.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function _(A,M){let B;return A?M===null||M===yi||M===Cr?B=s.DEPTH24_STENCIL8:M===Ui?B=s.DEPTH32F_STENCIL8:M===To&&(B=s.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===Cr?B=s.DEPTH_COMPONENT24:M===Ui?B=s.DEPTH_COMPONENT32F:M===To&&(B=s.DEPTH_COMPONENT16),B}function S(A,M){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=new WeakRef(A);n.get(A).__ref=M,p.add(M),v.register(A,M,M)}function C(A){let M=n.get(A).__ref;M!==void 0&&(p.delete(M),v.unregister(M))}function D(A){G(A.target)}function N(A){I(A.target)}function G(A){A.removeEventListener("dispose",D),C(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",N),C(A),rt(A)}function W(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):G(M))}p.clear(),d.clear()}function Y(A){let M=n.get(A);if(M.__webglInit===void 0)return;let B=A.source,tt=u.get(B);if(tt){let J=tt[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(A),Object.keys(tt).length===0&&u.delete(B)}n.remove(A)}function V(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let B=A.source,tt=u.get(B);delete tt[M.__cacheKey],o.memory.textures--}function rt(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&G(B),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let dt=0;dt<M.__webglFramebuffer[J].length;dt++)s.deleteFramebuffer(M.__webglFramebuffer[J][dt]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let tt=A.textures;for(let J=0,dt=tt.length;J<dt;J++){let ut=n.get(tt[J]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(tt[J])}n.remove(A)}let X=0;function P(){X=0}function ot(){return X}function wt(A){X=A}function kt(){let A=X;return A>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,A}function K(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function gt(A,M){let B=n.get(A);if(A.isVideoTexture&&st(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let tt=A.image;if(tt===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,A,M);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function xt(A,M){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){oe(B,A,M);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function Et(A,M){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){oe(B,A,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function pt(A,M){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}let Lt={[ac]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[lc]:s.MIRRORED_REPEAT},ue={[vn]:s.NEAREST,[xm]:s.NEAREST_MIPMAP_NEAREST,[La]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Hc]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},Ct={[bm]:s.NEVER,[If]:s.ALWAYS,[wm]:s.LESS,[Rf]:s.LEQUAL,[Tm]:s.EQUAL,[Pf]:s.GEQUAL,[Em]:s.GREATER,[Am]:s.NOTEQUAL};function Ht(A,M){if(M.type===Ui&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===Hc||M.magFilter===La||M.magFilter===Ts||M.minFilter===xn||M.minFilter===Hc||M.minFilter===La||M.minFilter===Ts)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Lt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Lt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Lt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==La&&M.minFilter!==Ts||M.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Dt(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D),R(M));let tt=M.source,J=u.get(tt);J===void 0&&(J={},u.set(tt,J));let dt=K(M);if(dt!==A.__cacheKey){J[dt]===void 0&&(J[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[dt].usedTimes++;let ut=J[A.__cacheKey];ut!==void 0&&(J[A.__cacheKey].usedTimes--,ut.usedTimes===0&&V(M)),A.__cacheKey=dt,A.__webglTexture=J[dt].texture}return B}function Nt(A,M,B){return Math.floor(Math.floor(A/B)/M)}function Kt(A,M,B,tt){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,B,tt,M.data);else{dt.sort((L,nt)=>L.start-nt.start);let ut=0;for(let L=1;L<dt.length;L++){let nt=dt[ut],et=dt[L],vt=nt.start+nt.count,_t=Nt(et.start,M.width,4),St=Nt(nt.start,M.width,4);et.start<=vt+1&&_t===St&&Nt(et.start+et.count-1,M.width,4)===_t?nt.count=Math.max(nt.count,et.start+et.count-nt.start):(++ut,dt[ut]=et)}dt.length=ut+1;let H=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let L=0,nt=dt.length;L<nt;L++){let et=dt[L],vt=Math.floor(et.start/4),_t=Math.ceil(et.count/4),St=vt%M.width,mt=Math.floor(vt/M.width),Mt=_t,ct=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,St),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt),e.texSubImage2D(s.TEXTURE_2D,0,St,mt,Mt,ct,B,tt,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,H),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function oe(A,M,B){let tt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=s.TEXTURE_3D);let J=Dt(A,M),dt=M.source;e.bindTexture(tt,A.__webglTexture,s.TEXTURE0+B);let ut=n.get(dt);if(dt.version!==ut.__version||J===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ct=pe.getPrimaries(pe.workingColorSpace),at=M.colorSpace===As?null:pe.getPrimaries(M.colorSpace),bt=M.colorSpace===As||ct===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let it=x(M.image,!1,i.maxTextureSize);it=Z(M,it);let ft=r.convert(M.format,M.colorSpace),L=r.convert(M.type),nt=w(M.internalFormat,ft,L,M.normalized,M.colorSpace,M.isVideoTexture);Ht(tt,M);let et,vt=M.mipmaps,_t=M.isVideoTexture!==!0,St=ut.__version===void 0||J===!0,mt=dt.dataReady,Mt=S(M,it);if(M.isDepthTexture)nt=_(M.format===Es,M.type),St&&(_t?e.texStorage2D(s.TEXTURE_2D,1,nt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,nt,it.width,it.height,0,ft,L,null));else if(M.isDataTexture)if(vt.length>0){_t&&St&&e.texStorage2D(s.TEXTURE_2D,Mt,nt,vt[0].width,vt[0].height);for(let ct=0,at=vt.length;ct<at;ct++)et=vt[ct],_t?mt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,et.width,et.height,ft,L,et.data):e.texImage2D(s.TEXTURE_2D,ct,nt,et.width,et.height,0,ft,L,et.data);M.generateMipmaps=!1}else _t?(St&&e.texStorage2D(s.TEXTURE_2D,Mt,nt,it.width,it.height),mt&&Kt(M,it,ft,L)):e.texImage2D(s.TEXTURE_2D,0,nt,it.width,it.height,0,ft,L,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){_t&&St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,nt,vt[0].width,vt[0].height,it.depth);for(let ct=0,at=vt.length;ct<at;ct++)if(et=vt[ct],M.format!==Mi)if(ft!==null)if(_t){if(mt)if(M.layerUpdates.size>0){let bt=zf(et.width,et.height,M.format,M.type);for(let lt of M.layerUpdates){let Pt=et.data.subarray(lt*bt/et.data.BYTES_PER_ELEMENT,(lt+1)*bt/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,lt,et.width,et.height,1,ft,Pt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,et.width,et.height,it.depth,ft,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,nt,et.width,et.height,it.depth,0,et.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?mt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,et.width,et.height,it.depth,ft,L,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,nt,et.width,et.height,it.depth,0,ft,L,et.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{_t&&St&&e.texStorage2D(s.TEXTURE_2D,Mt,nt,vt[0].width,vt[0].height);for(let ct=0,at=vt.length;ct<at;ct++)et=vt[ct],M.format!==Mi?ft!==null?_t?mt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,et.width,et.height,ft,et.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,nt,et.width,et.height,0,et.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?mt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,et.width,et.height,ft,L,et.data):e.texImage2D(s.TEXTURE_2D,ct,nt,et.width,et.height,0,ft,L,et.data)}else if(M.isDataArrayTexture)if(_t){if(St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,nt,it.width,it.height,it.depth),mt)if(M.layerUpdates.size>0){let ct=zf(it.width,it.height,M.format,M.type);for(let at of M.layerUpdates){let bt=it.data.subarray(at*ct/it.data.BYTES_PER_ELEMENT,(at+1)*ct/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,it.width,it.height,1,ft,L,bt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,L,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,it.width,it.height,it.depth,0,ft,L,it.data);else if(M.isData3DTexture)_t?(St&&e.texStorage3D(s.TEXTURE_3D,Mt,nt,it.width,it.height,it.depth),mt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,L,it.data)):e.texImage3D(s.TEXTURE_3D,0,nt,it.width,it.height,it.depth,0,ft,L,it.data);else if(M.isFramebufferTexture){if(St)if(_t)e.texStorage2D(s.TEXTURE_2D,Mt,nt,it.width,it.height);else{let ct=it.width,at=it.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(s.TEXTURE_2D,bt,nt,ct,at,0,ft,L,null),ct>>=1,at>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let ct=s.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),it.parentNode!==ct){ct.appendChild(it),d.add(M),ct.onpaint=at=>{let bt=at.changedElements;for(let lt of d)bt.includes(lt.image)&&(lt.needsUpdate=!0)},ct.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let bt=s.RGBA,lt=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,lt,Pt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(vt.length>0){if(_t&&St){let ct=ht(vt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,nt,ct.width,ct.height)}for(let ct=0,at=vt.length;ct<at;ct++)et=vt[ct],_t?mt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,ft,L,et):e.texImage2D(s.TEXTURE_2D,ct,nt,ft,L,et);M.generateMipmaps=!1}else if(_t){if(St){let ct=ht(it);e.texStorage2D(s.TEXTURE_2D,Mt,nt,ct.width,ct.height)}mt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,L,it)}else e.texImage2D(s.TEXTURE_2D,0,nt,ft,L,it);b(M)&&M.mipmapsAutoUpdate===!0&&y(tt),ut.__version=dt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Q(A,M,B){if(M.image.length!==6)return;let tt=Dt(A,M),J=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let dt=n.get(J);if(J.version!==dt.__version||tt===!0){e.activeTexture(s.TEXTURE0+B);let ut=pe.getPrimaries(pe.workingColorSpace),H=M.colorSpace===As?null:pe.getPrimaries(M.colorSpace),it=M.colorSpace===As||ut===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ft=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,nt=[];for(let lt=0;lt<6;lt++)!ft&&!L?nt[lt]=x(M.image[lt],!0,i.maxCubemapSize):nt[lt]=L?M.image[lt].image:M.image[lt],nt[lt]=Z(M,nt[lt]);let et=nt[0],vt=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),St=w(M.internalFormat,vt,_t,M.normalized,M.colorSpace),mt=M.isVideoTexture!==!0,Mt=dt.__version===void 0||tt===!0,ct=J.dataReady,at=S(M,et);Ht(s.TEXTURE_CUBE_MAP,M);let bt;if(M.isDepthTexture){if(St=_(M.format===Es,M.type),Mt)if(mt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,St,et.width,et.height);else for(let lt=0;lt<6;lt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,St,et.width,et.height,0,vt,_t,null)}else if(ft){mt&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,St,et.width,et.height);for(let lt=0;lt<6;lt++){bt=nt[lt].mipmaps;for(let Pt=0;Pt<bt.length;Pt++){let ce=bt[Pt];M.format!==Mi?vt!==null?mt?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,ce.width,ce.height,vt,ce.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,St,ce.width,ce.height,0,ce.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,ce.width,ce.height,vt,_t,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,St,ce.width,ce.height,0,vt,_t,ce.data)}}}else{if(bt=M.mipmaps,mt&&Mt){bt.length>0&&at++;let lt=ht(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,St,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(L){mt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,nt[lt].width,nt[lt].height,vt,_t,nt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,St,nt[lt].width,nt[lt].height,0,vt,_t,nt[lt].data);for(let Pt=0;Pt<bt.length;Pt++){let Zt=bt[Pt].image[lt].image;mt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,Zt.width,Zt.height,vt,_t,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,St,Zt.width,Zt.height,0,vt,_t,Zt.data)}}else{mt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,vt,_t,nt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,St,vt,_t,nt[lt]);for(let Pt=0;Pt<bt.length;Pt++){let ce=bt[Pt];mt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,vt,_t,ce.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,St,vt,_t,ce.image[lt])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),dt.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $t(A,M,B,tt,J,dt){let ut=r.convert(B.format,B.colorSpace),H=r.convert(B.type),it=w(B.internalFormat,ut,H,B.normalized,B.colorSpace),ft=n.get(M),L=n.get(B);if(L.__renderTarget=M,!ft.__hasExternalTextures){let nt=Math.max(1,M.width>>dt),et=Math.max(1,M.height>>dt);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,dt,it,nt,et,M.depth,0,ut,H,null):e.texImage2D(J,dt,it,nt,et,0,ut,H,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),F(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,J,L.__webglTexture,0,k(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,J,L.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(A,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let tt=M.depthTexture,J=tt&&tt.isDepthTexture?tt.type:null,dt=_(M.stencilBuffer,J),ut=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;F(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),dt,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,A)}else{let tt=M.textures;for(let J=0;J<tt.length;J++){let dt=tt[J],ut=r.convert(dt.format,dt.colorSpace),H=r.convert(dt.type),it=w(dt.internalFormat,ut,H,dt.normalized,dt.colorSpace);F(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),it,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),it,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,it,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(A,M,B){let tt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(M.depthTexture);J.__renderTarget=M;let dt=tt?M.depthTexture.image[0]:M.depthTexture.image;(!J.__webglTexture||dt.width!==M.width||dt.height!==M.height)&&(dt.width=M.width,dt.height=M.height,M.depthTexture.needsUpdate=!0),tt?pt(M.depthTexture,0):gt(M.depthTexture,0);let ut=J.__webglTexture,H=k(M),it=tt?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,ft=M.depthTexture.format===Es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ys)F(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,it,ut,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,ft,it,ut,0);else if(M.depthTexture.format===Es)F(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,it,ut,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,ft,it,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(A){let M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let tt=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",J)};tt.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=tt}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let tt=0;tt<6;tt++)ae(M.__webglFramebuffer[tt],A,tt);else A.texture.mipmaps.length>0?ae(M.__webglFramebuffer[0],A,0):ae(M.__webglFramebuffer,A,0);else if(B){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=s.createRenderbuffer(),Ae(M.__webglDepthbuffer[tt],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,dt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ae(M.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,dt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(A,M,B){let tt=n.get(A);M!==void 0&&$t(tt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Qt(A)}function Te(A){let M=A.texture,B=n.get(A),tt=n.get(M);A.addEventListener("dispose",N),R(A);let J=A.textures,dt=A.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=M.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let H=0;H<6;H++)if(M.mipmaps.length>0){B.__webglFramebuffer[H]=[];for(let it=0;it<M.mipmaps.length;it++)B.__webglFramebuffer[H][it]=s.createFramebuffer()}else B.__webglFramebuffer[H]=s.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let H=0;H<M.mipmaps.length;H++)B.__webglFramebuffer[H]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ut)for(let H=0,it=J.length;H<it;H++){let ft=n.get(J[H]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&F(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let H=0;H<J.length;H++){let it=J[H];B.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[H]);let ft=r.convert(it.format,it.colorSpace),L=r.convert(it.type),nt=w(it.internalFormat,ft,L,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),et=k(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,nt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,B.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,M);for(let H=0;H<6;H++)if(M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)$t(B.__webglFramebuffer[H][it],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,it);else $t(B.__webglFramebuffer[H],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);b(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let H=0,it=J.length;H<it;H++){let ft=J[H],L=n.get(ft),nt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,L.__webglTexture),Ht(nt,ft),$t(B.__webglFramebuffer,A,ft,s.COLOR_ATTACHMENT0+H,nt,0),b(ft)&&y(nt)}e.unbindTexture()}else{let H=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(H=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(H,tt.__webglTexture),Ht(H,M),M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)$t(B.__webglFramebuffer[it],A,M,s.COLOR_ATTACHMENT0,H,it);else $t(B.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,H,0);b(M)?y(H):M.mipmaps.length>0&&s.texParameteri(H,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Qt(A)}function z(A){let M=A.textures;for(let B=0,tt=M.length;B<tt;B++){let J=M[B];if(b(J)&&J.mipmapsAutoUpdate===!0){let dt=T(A),ut=n.get(J).__webglTexture;e.bindTexture(dt,ut),y(dt),e.unbindTexture()}}}let le=[];function yt(A){if(A.samples>0){if(F(A)===!1){let M=A.textures,B=A.width,tt=A.height,J=s.COLOR_BUFFER_BIT,dt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(A),H=M.length>1;if(H)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let L=n.get(M[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,B,tt,0,0,B,tt,J,s.NEAREST),l===!0&&(le.length=0,le.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&le.push(dt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let L=n.get(M[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function k(A){return Math.min(i.maxSamples,A.samples)}function F(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Z(A,M){let B=A.colorSpace,tt=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==oa&&B!==As&&(pe.getTransfer(B)===Se?(tt!==Mi||J!==Vn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",B)),M}function ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=P,this.getTextureUnits=ot,this.setTextureUnits=wt,this.setTexture2D=gt,this.setTexture2DArray=xt,this.setTexture3D=Et,this.setTextureCube=pt,this.rebindTextures=ne,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=F,this.dispose=W}function XM(s,t){function e(n,i=As){let r,o=pe.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Xc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ef)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===bf)return s.BYTE;if(n===wf)return s.SHORT;if(n===To)return s.UNSIGNED_SHORT;if(n===Wc)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===Ui)return s.FLOAT;if(n===Si)return s.HALF_FLOAT;if(n===Af)return s.ALPHA;if(n===Cf)return s.RGB;if(n===Mi)return s.RGBA;if(n===ys)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===Yc)return s.RED;if(n===Zc)return s.RED_INTEGER;if(n===er)return s.RG;if(n===Jc)return s.RG_INTEGER;if(n===$c)return s.RGBA_INTEGER;if(n===Na||n===Fa||n===Ua||n===Oa)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kc||n===Qc||n===jc||n===th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eh||n===nh||n===ih||n===sh||n===rh||n===Ba||n===oh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eh||n===nh)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ih)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sh)return r.COMPRESSED_R11_EAC;if(n===rh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ba)return r.COMPRESSED_RG11_EAC;if(n===oh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ah||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===_h||n===vh||n===xh||n===yh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ah)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ch)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ph)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_h)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sh||n===Mh||n===bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sh)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===Th||n===za||n===Eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends es{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,v=typeof XRWebGLBinding<"u",m=new jf,g={},x=e.getContextAttributes(),b=null,y=null,T=[],w=[],_=new zt,S=null,R=null,C=new Bn;C.viewport=new Be;let D=new Bn;D.viewport=new Be;let N=[C,D],G=new Bc,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let gt=T[K];return gt===void 0&&(gt=new vo,T[K]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(K){let gt=T[K];return gt===void 0&&(gt=new vo,T[K]=gt),gt.getGripSpace()},this.getHand=function(K){let gt=T[K];return gt===void 0&&(gt=new vo,T[K]=gt),gt.getHandSpace()};function Y(K){let gt=w.indexOf(K.inputSource);if(gt===-1)return;let xt=T[gt];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",rt);for(let K=0;K<T.length;K++){let gt=w[K];gt!==null&&(w[K]=null,T[K].disconnect(gt))}I=null,W=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(b),u=null,f=null,d=null,i=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",V),i.addEventListener("inputsourceschange",rt),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Et=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?Es:ys,Et=x.stencil?Cr:yi);let Lt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new En(f.textureWidth,f.textureHeight,{format:Mi,type:Vn,depthTexture:new Ji(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new En(u.framebufferWidth,u.framebufferHeight,{format:Mi,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(K){for(let gt=0;gt<K.removed.length;gt++){let xt=K.removed[gt],Et=w.indexOf(xt);Et>=0&&(w[Et]=null,T[Et].disconnect(xt))}for(let gt=0;gt<K.added.length;gt++){let xt=K.added[gt],Et=w.indexOf(xt);if(Et===-1){for(let Lt=0;Lt<T.length;Lt++)if(Lt>=w.length){w.push(xt),Et=Lt;break}else if(w[Lt]===null){w[Lt]=xt,Et=Lt;break}if(Et===-1)break}let pt=T[Et];pt&&pt.connect(xt)}}function X(K,gt){gt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(gt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let gt=K.near,xt=K.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),G.near=D.near=C.near=gt,G.far=D.far=C.far=xt,(I!==G.near||W!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,W=G.far),G.layers.mask=K.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Et=K.parent,pt=G.cameras;X(G,Et);for(let Lt=0;Lt<pt.length;Lt++)X(pt[Lt],Et);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),P(K,G,Et)};function P(K,gt,xt){xt===null?K.matrix.copy(gt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(gt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=hc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return g[K]};let ot=null;function wt(K,gt){if(h=gt.getViewerPose(c||o),p=gt,h!==null){let xt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Et=!1;xt.length!==G.cameras.length&&(G.cameras.length=0,Et=!0);for(let Ct=0;Ct<xt.length;Ct++){let Ht=xt[Ct],Dt=null;if(u!==null)Dt=u.getViewport(Ht);else{let Kt=d.getViewSubImage(f,Ht);Dt=Kt.viewport,Ct===0&&(t.setRenderTargetTextures(y,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(y))}let Nt=N[Ct];Nt===void 0&&(Nt=new Bn,Nt.layers.enable(Ct),Nt.viewport=new Be,N[Ct]=Nt),Nt.matrix.fromArray(Ht.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ht.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ct===0&&(G.matrix.copy(Nt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Et===!0&&G.cameras.push(Nt)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Ct=d.getDepthInformation(xt[0]);Ct&&Ct.isValid&&Ct.texture&&m.init(Ct,i.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<xt.length;Ct++){let Ht=xt[Ct].camera;if(Ht){let Dt=g[Ht];Dt||(Dt=new va,g[Ht]=Dt);let Nt=d.getCameraImage(Ht);Dt.sourceTexture=Nt}}}}for(let xt=0;xt<T.length;xt++){let Et=w[xt],pt=T[xt];Et!==null&&pt!==void 0&&pt.update(Et,gt,c||o)}ot&&ot(K,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),p=null}let kt=new rg;kt.setAnimationLoop(wt),this.setAnimationLoop=function(K){ot=K},this.dispose=function(){}}},ZM=new _e,mg=new Yt;mg.set(-1,0,0,0,1,0,0,0,1);function JM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Uf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),b=x.envMap,y=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $M(s,t,e,n){let i={},r={};function o(x,b){let y=b.program;n.uniformBlockBinding(x,y,i[x.id])}function a(x,b){let y=i[x.id];y===void 0&&(p(x),y=l(x),i[x.id]=y,x.addEventListener("dispose",m));let T=b.program;n.updateUBOMapping(x,T);let w=t.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){let b=s.createBuffer(),y=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function c(x){let b=i[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,_=y.length;w<_;w++){let S=y[w];if(Array.isArray(S))for(let R=0,C=S.length;R<C;R++)h(S[R],w,R,T);else h(S,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,b,y,T){if(f(x,b,y,T)===!0){let w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let R=0;R<_.length;R++){let C=_[R],D=v(C,!0);d(C,x.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,x.__data)}}function d(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function f(x,b,y,T){let w=x.value,_=b+"_"+y;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let S=T[_],R=!1;for(let C=0;C<w.length;C++)u(w[C],S,C)===!0&&(R=!0);return R}return u(w,T,_)}function u(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{let T=b[y];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function p(x){let b=x.uniforms,y=0,T=16;for(let _=0,S=b.length;_<S;_++){let R=Array.isArray(b[_])?b[_]:[b[_]];for(let C=0,D=R.length;C<D;C++){let N=R[C],G=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(b[_])||Array.isArray(N.value),W=y;for(let V=0,rt=G.length;V<rt;V++){let X=G[V],P=v(X,I),ot=y%T,wt=ot%P.boundary,kt=ot+wt;y+=wt,kt!==0&&T-kt<P.storage&&(y+=T-kt),V===0&&(W=y),y+=P.storage}let Y=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new Y((y-W)/Float32Array.BYTES_PER_ELEMENT),N.__offset=W}}let w=y%T;return w>0&&(y+=T-w),x.__size=y,x.__cache={},this}function v(x,b){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){let b=x.target;b.removeEventListener("dispose",m),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(let x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:o,update:a,dispose:g}}var KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ss=null;function QM(){return ss===null&&(ss=new da(KM,16,16,er,Si),ss.name="DFG_LUT",ss.minFilter=xn,ss.magFilter=xn,ss.wrapS=ts,ss.wrapT=ts,ss.generateMipmaps=!1,ss.needsUpdate=!0),ss}var Ih=class{constructor(t={}){let{canvas:e=Rm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Vn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=u,m=new Set([$c,Jc,Zc]),g=new Set([Vn,yi,To,Cr,Xc,qc]),x=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,N=null,G=null,I=null,W=null;this._outputColorSpace=Kn;let Y=0,V=0,rt=null,X=-1,P=null,ot=new Be,wt=new Be,kt=null,K=new Xt(0),gt=0,xt=e.width,Et=e.height,pt=1,Lt=null,ue=null,Ct=new Be(0,0,xt,Et),Ht=new Be(0,0,xt,Et),Dt=!1,Nt=new Js,Kt=new mc,oe=!1,Q=!1,$t=new _e,Ae=new U,ae=new Be,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Te(){return rt===null?pt:1}let z=n;function le(E,O){return e.getContext(E,O)}let yt,k,F,st,Z,ht,A,M,B,tt,J,dt,ut,H,it,ft,L,nt,et,vt,_t,St,mt;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),z===null){let O="webgl2";if(z=le(O,E),z===null)throw le(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Mt()}catch(E){throw e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),qt("WebGLRenderer: "+E.message),E}function Mt(){yt=new cS(z),yt.init(),_t=new XM(z,yt),k=new Qy(z,yt,t,_t),F=new HM(z,yt),k.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),G=z.createFramebuffer(),I=z.createFramebuffer(),W=z.createFramebuffer(),st=new fS(z),Z=new RM,ht=new WM(z,yt,F,Z,k,_t,st),A=new lS(C),M=new pv(z),St=new $y(z,M),B=new hS(z,M,st,St),tt=new pS(z,B,M,St,st),nt=new dS(z,k,ht),it=new jy(Z),J=new CM(C,A,yt,k,St,it),dt=new JM(C,Z),ut=new IM,H=new OM(yt),L=new Jy(C,A,F,tt,p,l),ft=new GM(C,tt,k),mt=new $M(z,st,k,F),et=new Ky(z,yt,st),vt=new uS(z,yt,st),st.programs=J.programs,C.capabilities=k,C.extensions=yt,C.properties=Z,C.renderLists=ut,C.shadowMap=ft,C.state=F,C.info=st}v!==Vn&&(R=new gS(v,e.width,e.height,a,i,r));let ct=new td(C,z);this.xr=ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(E){E!==void 0&&(pt=E,this.setSize(xt,Et,!1))},this.getSize=function(E){return E.set(xt,Et)},this.setSize=function(E,O,j=!0){if(ct.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=E,Et=O,e.width=Math.floor(E*pt),e.height=Math.floor(O*pt),j===!0&&(e.style.width=E+"px",e.style.height=O+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(xt*pt,Et*pt).floor()},this.setDrawingBufferSize=function(E,O,j){xt=E,Et=O,pt=j,e.width=Math.floor(E*j),e.height=Math.floor(O*j),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(v===Vn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ot)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,O,j,q){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,O,j,q),F.viewport(ot.copy(Ct).multiplyScalar(Te()).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,O,j,q){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,O,j,q),F.scissor(wt.copy(Ht).multiplyScalar(Te()).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){F.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){Lt=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,j=!0){let q=0;if(E){let $=!1;if(rt!==null){let At=rt.texture.format;$=m.has(At)}if($){let At=rt.texture.type,Ut=g.has(At),Tt=L.getClearColor(),It=L.getClearAlpha(),Vt=Tt.r,Jt=Tt.g,fe=Tt.b;Ut?(x[0]=Vt,x[1]=Jt,x[2]=fe,x[3]=It,z.clearBufferuiv(z.COLOR,0,x)):(b[0]=Vt,b[1]=Jt,b[2]=fe,b[3]=It,z.clearBufferiv(z.COLOR,0,b))}else q|=z.COLOR_BUFFER_BIT}O&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),L.dispose(),ut.dispose(),H.dispose(),ht.dispose(),Z.dispose(),A.dispose(),tt.dispose(),B.dispose(),St.dispose(),mt.dispose(),J.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ce),ct.removeEventListener("sessionend",ye),cn.stop()};function at(E){E.preventDefault(),Lf("WebGLRenderer: Context Lost."),D=!0}function bt(){Lf("WebGLRenderer: Context Restored."),D=!1;let E=st.autoReset,O=ft.enabled,j=ft.autoUpdate,q=ft.needsUpdate,$=ft.type;Mt(),st.autoReset=E,ft.enabled=O,ft.autoUpdate=j,ft.needsUpdate=q,ft.type=$}function lt(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pt(E){let O=E.target;O.removeEventListener("dispose",Pt),ce(O)}function ce(E){Zt(E),Z.remove(E)}function Zt(E){let O=Z.get(E).programs;O!==void 0&&(O.forEach(function(j){J.releaseProgram(j)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,j,q,$,At){O===null&&(O=Qt);let Ut=$.isMesh&&$.matrixWorld.determinantAffine()<0,Tt=Pi(E,O,j,q,$);F.setMaterial(q,Ut);let It=j.index,Vt=1;if(q.wireframe===!0){if(It=B.getWireframeAttribute(j),It===void 0)return;Vt=2}let Jt=j.drawRange,fe=j.attributes.position,Ot=Jt.start*Vt,de=(Jt.start+Jt.count)*Vt;At!==null&&(Ot=Math.max(Ot,At.start*Vt),de=Math.min(de,(At.start+At.count)*Vt)),It!==null?(Ot=Math.max(Ot,0),de=Math.min(de,It.count)):fe!=null&&(Ot=Math.max(Ot,0),de=Math.min(de,fe.count));let sn=de-Ot;if(sn<0||sn===1/0)return;St.setup($,q,Tt,j,It);let De,Pe=et;if(It!==null&&(De=M.get(It),Pe=vt,Pe.setIndex(De)),$.isMesh)q.wireframe===!0?(F.setLineWidth(q.wireframeLinewidth*Te()),Pe.setMode(z.LINES)):Pe.setMode(z.TRIANGLES);else if($.isLine){let Nn=q.linewidth;Nn===void 0&&(Nn=1),F.setLineWidth(Nn*Te()),$.isLineSegments?Pe.setMode(z.LINES):$.isLineLoop?Pe.setMode(z.LINE_LOOP):Pe.setMode(z.LINE_STRIP)}else $.isPoints?Pe.setMode(z.POINTS):$.isSprite&&Pe.setMode(z.TRIANGLES);if($.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))Pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Nn=$._multiDrawStarts,Bt=$._multiDrawCounts,$n=$._multiDrawCount,xe=It?M.get(It).bytesPerElement:1,gr=Z.get(q).currentProgram.getUniforms();for(let Fn=0;Fn<$n;Fn++)gr.setValue(z,"_gl_DrawID",Fn),Pe.render(Nn[Fn]/xe,Bt[Fn])}else if($.isInstancedMesh)Pe.renderInstances(Ot,sn,$.count);else if(j.isInstancedBufferGeometry){let Nn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bt=Math.min(j.instanceCount,Nn);Pe.renderInstances(Ot,sn,Bt)}else Pe.render(Ot,sn)};function Fe(E,O,j,q){N!==null&&E.isNodeMaterial&&N.setObject(q,E),oe===!0&&it.setState(E,j,!1),E.transparent===!0&&E.side===Fi&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,gi(E,O,q),E.side=tr,E.needsUpdate=!0,gi(E,O,q),E.side=Fi):gi(E,O,q)}this.compile=function(E,O,j=null){j===null&&(j=E),N!==null&&N.renderStart(E,O,j),w=H.get(j),w.init(O),S.push(w),j.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),E!==j&&E.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),Q=this.localClippingEnabled,oe=it.init(this.clippingPlanes,Q),oe===!0&&it.setGlobalState(this.clippingPlanes,O),N!==null&&ft.render(w.state.shadowsArray,j,O);let q=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let At=$.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){let Tt=At[Ut];Fe(Tt,j,O,$),q.add(Tt)}else Fe(At,j,O,$),q.add(At)}),w=S.pop(),N!==null&&N.renderEnd(),q},this.compileAsync=function(E,O,j=null){let q=this.compile(E,O,j);return new Promise($=>{function At(){if(q.forEach(function(Ut){let It=Z.get(Ut).currentProgram;(It===void 0||It.isReady())&&q.delete(Ut)}),q.size===0){$(E);return}setTimeout(At,10)}yt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let en=null;function Ue(E){en&&en(E)}function Ce(){cn.stop()}function ye(){cn.start()}let cn=new rg;cn.setAnimationLoop(Ue),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(E){en=E,ct.setAnimationLoop(E),E===null?cn.stop():cn.start()},ct.addEventListener("sessionstart",Ce),ct.addEventListener("sessionend",ye),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(E,O);let j=ct.enabled===!0&&ct.isPresenting===!0,q=R!==null&&(rt===null||j)&&R.begin(C,rt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,O,rt),w=H.get(E,S.length),w.init(O),w.state.textureUnits=ht.getTextureUnits(),S.push(w),$t.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Kt.setFromArrayCamera(O):Nt.setFromProjectionMatrix($t,Di,O.reversedDepth),Q=this.localClippingEnabled,oe=it.init(this.clippingPlanes,Q),T=ut.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let Ut=C.xr.getDepthSensingMesh();Ut!==null&&Re(Ut,O,-1/0,C.sortObjects)}Re(E,O,0,C.sortObjects),T.finish(),N!==null&&N.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Lt,ue),ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ne&&L.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),oe===!0&&it.beginShadows();let $=w.state.shadowsArray;if(ft.render($,E,O),oe===!0&&it.endShadows(),(q&&R.hasRenderPass())===!1){let Ut=T.opaque,Tt=T.transmissive;if(w.setupLights(),O.isArrayCamera){let It=O.cameras;if(Tt.length>0)for(let Vt=0,Jt=It.length;Vt<Jt;Vt++){let fe=It[Vt];mi(Ut,Tt,E,fe)}ne&&L.render(E);for(let Vt=0,Jt=It.length;Vt<Jt;Vt++){let fe=It[Vt];Ln(T,E,fe,fe.viewport)}}else Tt.length>0&&mi(Ut,Tt,E,O),ne&&L.render(E),Ln(T,E,O)}rt!==null&&V===0&&(ht.updateMultisampleRenderTarget(rt),ht.updateRenderTargetMipmap(rt)),q&&R.end(C),E.isScene===!0&&E.onAfterRender(C,E,O),St.resetDefaultState(),X=-1,P=null,S.pop(),S.length>0?(w=S[S.length-1],ht.setTextureUnits(w.state.textureUnits),oe===!0&&it.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,N!==null&&N.renderEnd()};function Re(E,O,j,q){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ut=O.isArrayCamera?Kt:Nt;if(!E.frustumCulled||E.intersectsFrustum(Ut)){q&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4($t);let Tt=tt.update(E),It=E.material;It.visible&&T.push(E,Tt,It,j,ae.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Ut=O.isArrayCamera?Kt:Nt;if(!E.frustumCulled||E.intersectsFrustum(Ut)){let Tt=tt.update(E),It=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ae.copy(Tt.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4($t)),Array.isArray(It)){let Vt=Tt.groups;for(let Jt=0,fe=Vt.length;Jt<fe;Jt++){let Ot=Vt[Jt],de=It[Ot.materialIndex];de&&de.visible&&T.push(E,Tt,de,j,ae.z,Ot,O)}}else It.visible&&T.push(E,Tt,It,j,ae.z,null,O)}}}let At=E.children;for(let Ut=0,Tt=At.length;Ut<Tt;Ut++)Re(At[Ut],O,j,q)}function Ln(E,O,j,q){let{opaque:$,transmissive:At,transparent:Ut}=E;w.setupLightsView(j),oe===!0&&it.setGlobalState(C.clippingPlanes,j),q&&F.viewport(ot.copy(q)),$.length>0&&Ye($,O,j),At.length>0&&Ye(At,O,j),Ut.length>0&&Ye(Ut,O,j),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function mi(E,O,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let Ot=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new En(1,1,{generateMipmaps:!0,type:Ot?Si:Vn,minFilter:Ts,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let At=w.state.transmissionRenderTarget[q.id],Ut=q.viewport||ot;At.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);let Tt=C.getRenderTarget(),It=C.getActiveCubeFace(),Vt=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(K),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),ne&&L.render(j);let Jt=C.toneMapping;C.toneMapping=is;let fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),oe===!0&&it.setGlobalState(C.clippingPlanes,q),Ye(E,j,q),ht.updateMultisampleRenderTarget(At),ht.updateRenderTargetMipmap(At),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let de=0,sn=O.length;de<sn;de++){let De=O[de],{object:Pe,geometry:Nn,material:Bt,group:$n}=De;if(Bt.side===Fi&&Pe.layers.test(q.layers)){let xe=Bt.side;Bt.side=Rn,Bt.needsUpdate=!0,nn(Pe,j,q,Nn,Bt,$n),Bt.side=xe,Bt.needsUpdate=!0,Ot=!0}}Ot===!0&&(ht.updateMultisampleRenderTarget(At),ht.updateRenderTargetMipmap(At))}C.setRenderTarget(Tt,It,Vt),C.setClearColor(K,gt),fe!==void 0&&(q.viewport=fe),C.toneMapping=Jt}function Ye(E,O,j){let q=O.isScene===!0?O.overrideMaterial:null;for(let $=0,At=E.length;$<At;$++){let Ut=E[$],{object:Tt,geometry:It,group:Vt}=Ut,Jt=Ut.material;Jt.allowOverride===!0&&q!==null&&(Jt=q),Tt.layers.test(j.layers)&&nn(Tt,O,j,It,Jt,Vt)}}function nn(E,O,j,q,$,At){N!==null&&$.isNodeMaterial&&N.setObject(E,$),E.onBeforeRender(C,O,j,q,$,At),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(C,O,j,q,E,At),$.transparent===!0&&$.side===Fi&&$.forceSinglePass===!1?($.side=Rn,$.needsUpdate=!0,C.renderBufferDirect(j,O,q,$,E,At),$.side=tr,$.needsUpdate=!0,C.renderBufferDirect(j,O,q,$,E,At),$.side=Fi):C.renderBufferDirect(j,O,q,$,E,At),E.onAfterRender(C,O,j,q,$,At)}function hn(E){let O=0;for(let j of E)j.texture!==null&&O++;return O}function gi(E,O,j){O.isScene!==!0&&(O=Qt);let q=Z.get(E),$=w.state.lights,At=w.state.shadowsArray,Ut=$.state.version,Tt=J.getParameters(E,$.state,At,O,j,w.state.lightProbeGridArray),It=J.getProgramCacheKey(Tt),Vt=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let Jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=A.get(E.envMap||q.environment,Jt),q.envMapRotation=q.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",Pt),Vt=new Map,q.programs=Vt,q.programVariants=new Map);let fe=Vt.get(It);if(fe!==void 0){if(q.currentProgram===fe&&q.lightsStateVersion===Ut)return Ze(E,Tt),fe}else Tt.uniforms=J.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,j,Tt),E.onBeforeCompile(Tt,C),fe=J.acquireProgram(Tt,It),Vt.set(It,fe),q.uniforms=Tt.uniforms;let Ot=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=it.uniform),Ze(E,Tt),q.needsLights=Al(E),q.lightsStateVersion=Ut,q.needsLights&&(Ot.ambientLightColor.value=$.state.ambient,Ot.lightProbe.value=$.state.probe,Ot.sunLights.value=$.state.sun,Ot.sunLightShadows.value=$.state.sunShadow,Ot.directionalLights.value=$.state.directional,Ot.directionalLightShadows.value=$.state.directionalShadow,Ot.spotLights.value=$.state.spot,Ot.spotLightShadows.value=$.state.spotShadow,Ot.rectAreaLights.value=$.state.rectArea,Ot.ltc_1.value=$.state.rectAreaLTC1,Ot.ltc_2.value=$.state.rectAreaLTC2,Ot.pointLights.value=$.state.point,Ot.pointLightShadows.value=$.state.pointShadow,Ot.hemisphereLights.value=$.state.hemi,Ot.sunShadowMatrix.value=$.state.sunShadowMatrix,Ot.sunShadowCascade.value=$.state.sunShadowCascade,Ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ot.spotLightMatrix.value=$.state.spotLightMatrix,Ot.spotLightMap.value=$.state.spotLightMap,Ot.pointShadowMatrix.value=$.state.pointShadowMatrix),q.numLightProbeGrids=hn(w.state.lightProbeGridArray),q.currentProgram=fe,q.uniformsList=null,fe}function $r(E,O,j,q,$){let At=Z.get(E),Ut=At.currentProgram.id+","+q+","+$,Tt=At.programVariants.get(Ut);return Tt===void 0?(Tt=gi(E,O,j),At.programVariants.set(Ut,Tt)):(At.currentProgram=Tt,At.uniformsList=null,At.outputColorSpace=q,At.toneMapping=$),Tt}function un(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Eo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ze(E,O){let j=Z.get(E);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Pi(E,O,j,q,$){O.isScene!==!0&&(O=Qt),ht.resetTextureUnits();let At=O.fog,Ut=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,Tt=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:pe.workingColorSpace,It=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Vt=A.get(q.envMap||Ut,It),Jt=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,fe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!j.morphAttributes.position,de=!!j.morphAttributes.normal,sn=!!j.morphAttributes.color,De=is;q.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(De=C.toneMapping);let Pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Nn=Pe!==void 0?Pe.length:0,Bt=Z.get(q),$n=w.state.lights;if(oe===!0&&(Q===!0||E!==P)){let Ge=E===P&&q.id===X;it.setState(q,E,Ge)}let xe=!1,gr=!1;q.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==$n.state.version||$.isBatchedMesh&&Bt.batching===!1||!$.isBatchedMesh&&Bt.batching===!0||$.isBatchedMesh&&Bt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Bt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Bt.instancing===!1||!$.isInstancedMesh&&Bt.instancing===!0||$.isSkinnedMesh&&Bt.skinning===!1||!$.isSkinnedMesh&&Bt.skinning===!0||$.isInstancedMesh&&Bt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Bt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Bt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Bt.instancingMorph===!1&&$.morphTexture!==null||Bt.envMap!==Vt||q.fog===!0&&Bt.fog!==At||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==it.numPlanes||Bt.numIntersection!==it.numIntersection)||Bt.vertexAlphas!==Jt||Bt.vertexTangents!==fe||Bt.morphTargets!==Ot||Bt.morphNormals!==de||Bt.morphColors!==sn||Bt.morphTargetsCount!==Nn||Bt.numLightProbeGrids!==hn(w.state.lightProbeGridArray)?xe=!0:(Bt.outputColorSpace!==Tt||Bt.toneMapping!==De)&&(gr=!0):(xe=!0,Bt.__version=q.version);let Fn=Bt.currentProgram;(xe===!0||gr===!0)&&(Fn=gr===!0?$r(q,O,$,Tt,De):gi(q,O,$),N&&q.isNodeMaterial&&N.onUpdateProgram(q,Fn,Bt));let Cl=!1,Vs=!1,_r=!1,ge=Fn.getUniforms(),wn=Bt.uniforms;if(F.useProgram(Fn.program)&&(Cl=!0,Vs=!0,_r=!0),q.id!==X&&(X=q.id,Vs=!0),Cl||P!==E){F.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(z,"projectionMatrix",E.projectionMatrix),ge.setValue(z,"viewMatrix",E.matrixWorldInverse);let gn=ge.map.cameraPosition;gn!==void 0&&gn.setValue(z,Ae.setFromMatrixPosition(E.matrixWorld)),k.logarithmicDepthBuffer&&ge.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ge.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,Vs=!0,_r=!0)}if(Bt.needsLights&&($n.state.sunShadowMap.length>0&&ge.setValue(z,"sunShadowMap",$n.state.sunShadowMap,ht),$n.state.directionalShadowMap.length>0&&ge.setValue(z,"directionalShadowMap",$n.state.directionalShadowMap,ht),$n.state.spotShadowMap.length>0&&ge.setValue(z,"spotShadowMap",$n.state.spotShadowMap,ht),$n.state.pointShadowMap.length>0&&ge.setValue(z,"pointShadowMap",$n.state.pointShadowMap,ht)),$.isSkinnedMesh){ge.setOptional(z,$,"bindMatrix"),ge.setOptional(z,$,"bindMatrixInverse");let Ge=$.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ge.setValue(z,"boneTexture",Ge.boneTexture,ht))}$.isBatchedMesh&&(ge.setOptional(z,$,"batchingTexture"),ge.setValue(z,"batchingTexture",$._matricesTexture,ht),ge.setOptional(z,$,"batchingIdTexture"),ge.setValue(z,"batchingIdTexture",$._indirectTexture,ht),ge.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&ge.setValue(z,"batchingColorTexture",$._colorsTexture,ht));let Wi=j.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&nt.update($,j,Fn),(Vs||Bt.receiveShadow!==$.receiveShadow)&&(Bt.receiveShadow=$.receiveShadow,ge.setValue(z,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null&&(wn.envMapIntensity.value=O.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=QM()),Vs){if(ge.setValue(z,"toneMappingExposure",C.toneMappingExposure),Bt.needsLights&&Jo(wn,_r),At&&q.fog===!0&&dt.refreshFogUniforms(wn,At),dt.refreshMaterialUniforms(wn,q,pt,Et,w.state.transmissionRenderTarget[E.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){let Ge=y,gn=0;for(let ds of w.state.lightProbeGridArray)ds.texture!==null&&(Ge.textures[gn]=ds.texture,Ge.min[gn]=ds.boundingBox.min,Ge.max[gn]=ds.boundingBox.max,Ge.resolution[gn]=ds.resolution,gn++);for(let ds in Ge)Ge[ds].length=gn;wn.probesSH.value=Ge.textures,wn.probesMin.value=Ge.min,wn.probesMax.value=Ge.max,wn.probesResolution.value=Ge.resolution}Eo.upload(z,un(Bt),wn,ht)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Eo.upload(z,un(Bt),wn,ht),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ge.setValue(z,"center",$.center),ge.setValue(z,"modelViewMatrix",$.modelViewMatrix),ge.setValue(z,"normalMatrix",$.normalMatrix),ge.setValue(z,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let Ge=q.uniformsGroups;for(let gn=0,ds=Ge.length;gn<ds;gn++){let vp=Ge[gn];mt.update(vp,Fn),mt.bind(vp,Fn)}}return Fn}function Jo(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Al(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(E,O,j){let q=Z.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=O,Z.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let j=Z.get(E);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,j=0){rt=E,Y=O,V=j;let q=null,$=!1,At=!1;if(E){let Tt=Z.get(E);if(Tt.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(z.FRAMEBUFFER,Tt.__webglFramebuffer),ot.copy(E.viewport),wt.copy(E.scissor),kt=E.scissorTest,F.viewport(ot),F.scissor(wt),F.setScissorTest(kt),X=-1;return}else if(Tt.__webglFramebuffer===void 0)ht.setupRenderTarget(E);else if(Tt.__hasExternalTextures)ht.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Jt=E.depthTexture;if(Tt.__boundDepthTexture!==Jt){if(Jt!==null&&Z.has(Jt)&&(E.width!==Jt.image.width||E.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(E)}}let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(At=!0);let Vt=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?q=Vt[O][j]:q=Vt[O],$=!0):E.samples>0&&ht.useMultisampledRTT(E)===!1?q=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?q=Vt[j]:q=Vt,ot.copy(E.viewport),wt.copy(E.scissor),kt=E.scissorTest}else ot.copy(Ct).multiplyScalar(pt).floor(),wt.copy(Ht).multiplyScalar(pt).floor(),kt=Dt;if(j!==0&&(q=G),F.bindFramebuffer(z.FRAMEBUFFER,q)&&F.drawBuffers(E,q),F.viewport(ot),F.scissor(wt),F.setScissorTest(kt),$){let Tt=Z.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,j)}else if(At){let Tt=O;for(let It=0;It<E.textures.length;It++){let Vt=Z.get(E.textures[It]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+It,Vt.__webglTexture,j,Tt)}}else if(E!==null&&j!==0){let Tt=Z.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tt.__webglTexture,j)}X=-1};function ks(E){let O=Z.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=k.textureFormatReadable(E.format),O.__typeReadable=k.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,j,q,$,At,Ut,Tt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It){F.bindFramebuffer(z.FRAMEBUFFER,It);try{let Vt=E.textures[Tt],Jt=Vt.format,fe=Vt.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt);let Ot=ks(Vt);if(Ot.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-q&&j>=0&&j<=E.height-$&&z.readPixels(O,j,q,$,_t.convert(Jt),_t.convert(fe),At)}finally{let Vt=rt!==null?Z.get(rt).__webglFramebuffer:null;F.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(E,O,j,q,$,At,Ut,Tt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It)if(O>=0&&O<=E.width-q&&j>=0&&j<=E.height-$){F.bindFramebuffer(z.FRAMEBUFFER,It);let Vt=E.textures[Tt],Jt=Vt.format,fe=Vt.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt);let Ot=ks(Vt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,de),z.bufferData(z.PIXEL_PACK_BUFFER,At.byteLength,z.STREAM_READ),z.readPixels(O,j,q,$,_t.convert(Jt),_t.convert(fe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let sn=rt!==null?Z.get(rt).__webglFramebuffer:null;F.bindFramebuffer(z.FRAMEBUFFER,sn);let De=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Im(z,De,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,de),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,At),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(de),z.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,j=0){let q=Math.pow(2,-j),$=Math.floor(E.image.width*q),At=Math.floor(E.image.height*q),Ut=O!==null?O.x:0,Tt=O!==null?O.y:0;ht.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Ut,Tt,$,At),F.unbindTexture()},this.copyTextureToTexture=function(E,O,j=null,q=null,$=0,At=0){let Ut,Tt,It,Vt,Jt,fe,Ot,de,sn,De=E.isCompressedTexture?E.mipmaps[At]:E.image;if(j!==null)Ut=j.max.x-j.min.x,Tt=j.max.y-j.min.y,It=j.isBox3?j.max.z-j.min.z:1,Vt=j.min.x,Jt=j.min.y,fe=j.isBox3?j.min.z:0;else{let ge=Math.pow(2,-$);Ut=Math.floor(De.width*ge),Tt=Math.floor(De.height*ge),E.isDataArrayTexture?It=De.depth:E.isData3DTexture?It=Math.floor(De.depth*ge):It=1,Vt=0,Jt=0,fe=0}q!==null?(Ot=q.x,de=q.y,sn=q.z):(Ot=0,de=0,sn=0);let Pe=_t.convert(O.format),Nn=_t.convert(O.type),Bt;O.isData3DTexture?(ht.setTexture3D(O,0),Bt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ht.setTexture2DArray(O,0),Bt=z.TEXTURE_2D_ARRAY):(ht.setTexture2D(O,0),Bt=z.TEXTURE_2D),F.activeTexture(z.TEXTURE0),F.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let $n=F.getParameter(z.UNPACK_ROW_LENGTH),xe=F.getParameter(z.UNPACK_IMAGE_HEIGHT),gr=F.getParameter(z.UNPACK_SKIP_PIXELS),Fn=F.getParameter(z.UNPACK_SKIP_ROWS),Cl=F.getParameter(z.UNPACK_SKIP_IMAGES);F.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),F.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),F.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),F.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),F.pixelStorei(z.UNPACK_SKIP_IMAGES,fe);let Vs=E.isDataArrayTexture||E.isData3DTexture,_r=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let ge=Z.get(E),wn=Z.get(O),Wi=Z.get(ge.__renderTarget),Ge=Z.get(wn.__renderTarget);F.bindFramebuffer(z.READ_FRAMEBUFFER,Wi.__webglFramebuffer),F.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let gn=0;gn<It;gn++)Vs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,$,fe+gn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,At,sn+gn)),z.blitFramebuffer(Vt,Jt,Vt+Ut,Jt+Tt,Ot,de,Ot+Ut,de+Tt,z.DEPTH_BUFFER_BIT,z.NEAREST);F.bindFramebuffer(z.READ_FRAMEBUFFER,null),F.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||Z.has(E)){let ge=Z.get(E),wn=Z.get(O);F.bindFramebuffer(z.READ_FRAMEBUFFER,I),F.bindFramebuffer(z.DRAW_FRAMEBUFFER,W);for(let Wi=0;Wi<It;Wi++)Vs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ge.__webglTexture,$,fe+Wi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,$),_r?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wn.__webglTexture,At,sn+Wi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wn.__webglTexture,At),$!==0?z.blitFramebuffer(Vt,Jt,Vt+Ut,Jt+Tt,Ot,de,Ot+Ut,de+Tt,z.COLOR_BUFFER_BIT,z.NEAREST):_r?z.copyTexSubImage3D(Bt,At,Ot,de,sn+Wi,Vt,Jt,Ut,Tt):z.copyTexSubImage2D(Bt,At,Ot,de,Vt,Jt,Ut,Tt);F.bindFramebuffer(z.READ_FRAMEBUFFER,null),F.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _r?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Bt,At,Ot,de,sn,Ut,Tt,It,Pe,Nn,De.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Bt,At,Ot,de,sn,Ut,Tt,It,Pe,De.data):z.texSubImage3D(Bt,At,Ot,de,sn,Ut,Tt,It,Pe,Nn,De):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,At,Ot,de,Ut,Tt,Pe,Nn,De.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,At,Ot,de,De.width,De.height,Pe,De.data):z.texSubImage2D(z.TEXTURE_2D,At,Ot,de,Ut,Tt,Pe,Nn,De);F.pixelStorei(z.UNPACK_ROW_LENGTH,$n),F.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe),F.pixelStorei(z.UNPACK_SKIP_PIXELS,gr),F.pixelStorei(z.UNPACK_SKIP_ROWS,Fn),F.pixelStorei(z.UNPACK_SKIP_IMAGES,Cl),At===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(Bt),F.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&ht.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ht.setTextureCube(E,0):E.isData3DTexture?ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ht.setTexture2DArray(E,0):ht.setTexture2D(E,0),F.unbindTexture()},this.resetState=function(){Y=0,V=0,rt=null,F.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};function Cs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wg(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$a={duration:.5,overwrite:!1,delay:0},gd,Pn,ze,Bi=1e8,Ee=1/Bi,ld=Math.PI*2,jM=ld/4,tb=0,Tg=Math.sqrt,eb=Math.cos,nb=Math.sin,pn=function(t){return typeof t=="string"},Je=function(t){return typeof t=="function"},Ps=function(t){return typeof t=="number"},Xh=function(t){return typeof t>"u"},ls=function(t){return typeof t=="object"},hi=function(t){return t!==!1},_d=function(){return typeof window<"u"},Nh=function(t){return Je(t)||pn(t)},Eg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,ib=/random\([^)]+\)/g,sb=/,\s*/g,gg=/(?:-?\.?\d|\.)+/gi,vd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ed=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xd=/[+-]=-?[.\d]+/,rb=/[^,'"\[\]\s]+/gi,ob=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,os,cd,yd,wi={},Bh={},Ag,Cg=function(t){return(Bh=Ro(t,wi))&&Xn},qh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ka=function(t,e){return!e&&console.warn(t)},Rg=function(t,e){return t&&(wi[t]=e)&&Bh&&(Bh[t]=e)||wi},Qa=function(){return 0},ab={suppressEvents:!0,isStart:!0,kill:!1},Fh={suppressEvents:!0,kill:!1},lb={suppressEvents:!0},Sd={},ir=[],hd={},Pg,li={},nd={},_g=30,Uh=[],Md="",bd=function(t){var e=t[0],n,i;if(ls(e)||Je(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Uh.length;i--&&!Uh[i].targetTest(e););n=Uh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ad(t[i],n)))||t.splice(i,1);return t},sr=function(t){return t._gsap||bd(zi(t))[0]._gsap},wd=function(t,e,n){return(n=t[e])&&Je(n)?t[e]():Xh(n)&&t.getAttribute&&t.getAttribute(e)||n},Qn=function(t,e){return(t=t.split(",")).forEach(e)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},Nr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},cb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},zh=function(){var t=ir.length,e=ir.slice(0),n,i;for(hd={},ir.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Td=function(t){return!!(t._initted||t._startAt||t.add)},Ig=function(t,e,n,i){ir.length&&!Pn&&zh(),t.render(e,n,i||!!(Pn&&e<0&&Td(t))),ir.length&&!Pn&&zh()},Dg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(rb).length<2?e:pn(t)?t.trim():t},Lg=function(t){return t},Ti=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ro=function(t,e){for(var n in e)t[n]=e[n];return t},vg=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ls(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},kh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ya=function(t){var e=t.parent||We,n=t.keyframes?hb(Wn(t.keyframes)):Ti;if(hi(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ub=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ng=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Yh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Pr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},fb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ud=function(t,e,n,i){return t._startAt&&(Pn?t._startAt.revert(Fh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},db=function s(t){return!t||t._ts&&s(t.parent)},xg=function(t){return t._repeat?Po(t._tTime,t=t.duration()+t._rDelay)*t:0},Po=function(t,e){var n=Math.floor(t=He(t/e));return t&&n===t?n-1:n},Vh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zh=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Jh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zh(t),n._dirty||Pr(n,t)),t},Fg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Vh(t.rawTime(),e),(!e._dur||nl(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Pr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},as=function(t,e,n,i){return e.parent&&rr(e),e._start=He((Ps(n)?n:!n&&Gh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==We?Oi(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ng(t,e,"_first","_last",t._sort?"_start":0),Gh(e)||(t._recent=e),i||Fg(t,e),t._ts<0&&Jh(t,t._tTime),t},Ug=function(t,e){return(wi.ScrollTrigger||qh("scrollTrigger",e))&&wi.ScrollTrigger.create(e,t)},Og=function(t,e,n,i,r){if(Pd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pg!==ci.frame)return ir.push(t),t._lazy=[r,i],1},pb=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Gh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mb=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&pb(t)&&!(!t._initted&&Gh(t))||(t._ts<0||t._dp._ts<0)&&!Gh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=nl(0,t._tDur,e),h=Po(l,a),t._yoyo&&h&1&&(o=1-o),h!==Po(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Pn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Og(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ud(t,e,n,!0),t._onUpdate&&!n&&bi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&bi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rr(t,1),!n&&!Pn&&(bi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},gb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Io=function(t,e,n,i){var r=t._repeat,o=He(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:He(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Jh(t,t._tTime=t._tDur*a),t.parent&&Zh(t),n||Pr(t.parent,t),t},yg=function(t){return t instanceof Hn?Pr(t):Io(t,t._dur)},_b={_start:0,endTime:Qa,totalDuration:Qa},Oi=function s(t,e,n){var i=t.labels,r=t._recent||_b,o=t.duration()>=Bi?r.endTime(!1):t._dur,a,l,c;return pn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Wn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Za=function(t,e,n){var i=Ps(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=hi(l.vars.inherit)&&l.parent;o.immediateRender=hi(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Qe(e[0],o,e[r+1])},or=function(t,e){return t||t===0?e(t):e},nl=function(t,e,n){return n<t?t:n>e?e:n},In=function(t,e){return!pn(t)||!(e=ob.exec(t))?"":e[1]},vb=function(t,e,n){return or(n,function(i){return nl(t,e,i)})},fd=[].slice,Bg=function(t,e){return t&&ls(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ls(t[0]))&&!t.nodeType&&t!==os},xb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return pn(i)&&!e||Bg(i,1)?(r=n).push.apply(r,zi(i)):n.push(i)})||n},zi=function(t,e,n){return ze&&!e&&ze.selector?ze.selector(t):pn(t)&&!n&&(cd||!Do())?fd.call((e||yd).querySelectorAll(t),0):Wn(t)?xb(t,n):Bg(t)?fd.call(t,0):t?[t]:[]},dd=function(t){return t=zi(t)[0]||Ka("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return zi(e,n.querySelectorAll?n:n===t?Ka("Invalid scope")||yd.createElement("div"):t)}},zg=function(t){return t.sort(function(){return .5-Math.random()})},kg=function(t){if(Je(t))return t;var e=ls(t)?t:{each:t},n=Ir(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return pn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,p){var v=(p||e).length,m=o[v],g,x,b,y,T,w,_,S,R;if(!m){if(R=e.grid==="auto"?0:(e.grid||[1,Bi])[1],!R){for(_=-Bi;_<(_=p[R++].getBoundingClientRect().left)&&R<v;);R<v&&R--}for(m=o[v]=[],g=l?Math.min(R,v)*h-.5:i%R,x=R===Bi?0:l?v*d/R-.5:i/R|0,_=0,S=Bi,w=0;w<v;w++)b=w%R-g,y=x-(w/R|0),m[w]=T=c?Math.abs(c==="y"?y:b):Tg(b*b+y*y),T>_&&(_=T),T<S&&(S=T);i==="random"&&zg(m),m.max=_-S,m.min=S,m.v=v=(parseFloat(e.amount)||parseFloat(e.each)*(R>v?v-1:c?c==="y"?v/R:R:Math.max(R,v/R))||0)*(i==="edges"?-1:1),m.b=v<0?r-v:r,m.u=In(e.amount||e.each)||0,n=n&&v<0?Db(n):n}return v=(m[f]-m.min)/m.max||0,He(m.b+(n?n(v):v)*m.v)+m.u}},pd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ps(n)?0:In(n))}},Vg=function(t,e){var n=Wn(t),i,r;return!n&&ls(t)&&(i=n=t.radius||Bi,t.values?(t=zi(t.values),(r=!Ps(t[0]))&&(i*=i)):t=pd(t.increment)),or(e,n?Je(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Bi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Ps(o)?h:h+In(o)}:pd(t))},Gg=function(t,e,n,i){return or(Wn(t)?!e:n===!0?!!(n=0):!i,function(){return Wn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},yb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Sb=function(t,e){return function(n){return t(parseFloat(n))+(e||In(n))}},Mb=function(t,e,n){return Wg(t,e,0,1,n)},Hg=function(t,e,n){return or(n,function(i){return t[~~e(i)]})},bb=function s(t,e,n){var i=e-t;return Wn(t)?Hg(t,s(0,t.length),e):or(n,function(r){return(i+(r-t)%i)%i+t})},wb=function s(t,e,n){var i=e-t,r=i*2;return Wn(t)?Hg(t,s(0,t.length-1),e):or(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Lo=function(t){return t.replace(ib,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(sb);return Gg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Wg=function(t,e,n,i,r){var o=e-t,a=i-n;return or(r,function(l){return n+((l-t)/o*a||0)})},Tb=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=pn(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Wn(t)&&!Wn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var v=Math.min(f,~~p);return h[v](p-v)},n=e}else i||(t=Ro(Wn(t)?[]:{},t));if(!h){for(l in e)Cd.call(a,t,l,"get",e[l]);r=function(p){return Ld(p,a)||(o?t.p:t)}}}return or(n,r)},Sg=function(t,e,n){var i=t.labels,r=Bi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},bi=function(t,e,n){var i=t.vars,r=i[e],o=ze,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ir.length&&zh(),a&&(ze=a),h=l?r.apply(c,l):r.call(c),ze=o,h},Xa=function(t){return rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pn),t.progress()<1&&bi(t,"onInterrupt"),t},Co,Xg=[],qg=function(t){if(t)if(t=!t.name&&t.default||t,_d()||t.headless){var e=t.name,n=Je(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Qa,render:Ld,add:Cd,kill:Gb,modifier:Vb,rawVars:0},o={targetTest:0,get:0,getSetter:$h,aliases:{},register:0};if(Do(),t!==i){if(li[e])return;Ti(i,Ti(kh(t,r),o)),Ro(i.prototype,Ro(r,kh(t,o))),li[i.prop=e]=i,t.targetTest&&(Uh.push(i),Sd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Rg(e,i),t.register&&t.register(Xn,i,jn)}else Xg.push(t)},Ie=255,qa={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},id=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ie+.5|0},Yg=function(t,e,n){var i=t?Ps(t)?[t>>16,t>>8&Ie,t&Ie]:0:qa.black,r,o,a,l,c,h,d,f,u,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),qa[t])i=qa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ie,i&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(gg),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=id(l+1/3,r,o),i[1]=id(l,r,o),i[2]=id(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(vd),n&&i.length<4&&(i[3]=1),i}else i=t.match(gg)||qa.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Ie,o=i[1]/Ie,a=i[2]/Ie,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Zg=function(t){var e=[],n=[],i=-1;return t.split(Rs).forEach(function(r){var o=r.match(Lr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Mg=function(t,e,n){var i="",r=(t+i).match(Rs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=Yg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Zg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Rs,"1").split(Lr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Rs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},Rs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in qa)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Eb=/hsl[a]?\(/,Ed=function(t){var e=t.join(" "),n;if(Rs.lastIndex=0,Rs.test(e))return n=Eb.test(e),t[1]=Mg(t[1],n),t[0]=Mg(t[0],n,Zg(t[1])),!0},ja,ci=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,p=function v(m){var g=s()-i,x=m===!0,b,y,T,w;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,b=T-o,(b>0||x)&&(w=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=b+(b>=r?0:r-b),y=1),x||(l=c(v)),y)for(u=0;u<a.length;u++)a[u](T,f,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ag&&(!cd&&_d()&&(os=cd=window,yd=os.document||{},wi.gsap=Xn,(os.gsapVersions||(os.gsapVersions=[])).push(Xn.version),Cg(Bh||os.GreenSockGlobals||!os.gsap&&os||{}),Xg.forEach(qg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ja=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ja=0,c=Qa},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,x){var b=g?function(y,T,w,_){m(y,T,w,_),d.remove(b)}:m;return d.remove(m),a[x?"unshift":"push"](b),Do(),b},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),Do=function(){return!ja&&ci.wake()},me={},Ab=/^[\d.\-M][\d.\-,\s]/,Cb=/["']/g,Rb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Cb,"").trim():+c,i=l.substr(a+1).trim();return e},Pb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ib=function(t){var e=(t+"").split("("),n=me[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Rb(e[1])]:Pb(t).split(",").map(Dg)):me._CE&&Ab.test(t)?me._CE("",t):n},Db=function(t){return function(e){return 1-t(1-e)}},Ir=function(t,e){return t&&(Je(t)?t:me[t]||Ib(t))||e},Fr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Qn(t,function(a){me[a]=wi[a]=r,me[o=a.toLowerCase()]=n;for(var l in r)me[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=me[a+"."+l]=r[l]}),r},Jg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},sd=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ld*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*nb((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Jg(a);return r=ld/r,l.config=function(c,h){return s(t,c,h)},l},rd=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Jg(n);return i.config=function(r){return s(t,r)},i};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Fr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});me.Linear.easeNone=me.none=me.Linear.easeIn;Fr("Elastic",sd("in"),sd("out"),sd());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Fr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Fr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Fr("Circ",function(s){return-(Tg(1-s*s)-1)});Fr("Sine",function(s){return s===1?1:-eb(s*jM)+1});Fr("Back",rd("in"),rd("out"),rd());me.SteppedEase=me.steps=wi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ee;return function(a){return((i*nl(0,o,a)|0)+r)*n}}};$a.ease=me["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Md+=s+","+s+"Params,"});var Ad=function(t,e){this.id=tb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:wd,this.set=e?e.getSetter:$h},tl=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Io(this,+e.duration,1,1),this.data=e.data,ze&&(this._ctx=ze,ze.data.push(this)),ja||ci.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Do(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Jh(this,n),!r._dp||r.parent||Fg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&as(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ig(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Po(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Vh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(nl(-Math.abs(this._delay),a,r),i!==!1),Zh(this),fb(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Do(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Ee,o;if(r)for(this._tTime-=Ee,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Ee){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=He(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&as(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(hi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=lb);var i=Pn;return Pn=n,Td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yg(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yg(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Oi(this,n),hi(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hi(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Je(n)?n:Lg,l=function(){var h=i.then;i.then=null,r&&r(),Je(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Xa(this)},s})();Ti(tl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var Hn=(function(s){wg(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=hi(n.sortChildren),We&&as(n.parent||We,Cs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ug(Cs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Za(0,arguments,this),this},e.from=function(i,r,o){return Za(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Za(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ya(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qe(i,r,Oi(this,o),1),this},e.call=function(i,r,o){return as(this,Qe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qe(i,o,Oi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ya(o).immediateRender=hi(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Ya(a).immediateRender=hi(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:He(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,p,v,m,g,x,b,y,T,w,_;if(this!==We&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,b=this._ts,g=!b,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=He(h%m),h===l?(v=this._repeat,f=c):(T=He(h/m),v=~~T,v&&v===T&&(f=c,v--),f>c&&(f=c)),T=Po(this._tTime,m),!a&&this._tTime&&T!==v&&this._tTime-T*m-this._dur<=0&&(T=v),w&&v&1&&(f=c-f,_=1),v!==T&&!this._lock){var S=w&&T&1,R=S===(w&&v&1);if(v<T&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:He(v*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,T=v),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=gb(this,He(a),He(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(bi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&x!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){x=0,p&&(h+=this._zTime=-Ee);break}}u=p}else{u=this._last;for(var C=i<0?i:f;u;){if(p=u._prev,(u._act||C<=u._end)&&u._ts&&x!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,r,o||Pn&&Td(u)),f!==this._time||!this._ts&&!g){x=0,p&&(h+=this._zTime=C?-Ee:Ee);break}}u=p}}if(x&&!r&&(this.pause(),x.render(f>=a?0:-Ee)._zTime=f>=a?1:-1,this._ts))return this._start=y,Zh(this),this.render(i,r,o);this._onUpdate&&!r&&bi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&rr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(bi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ps(r)||(r=Oi(this,r,i)),!(i instanceof tl)){if(Wn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(pn(i))return this.addLabel(i,r);if(Je(i))i=Qe.delayedCall(0,i);else return this}return this!==i?as(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return pn(i)?this.removeLabel(i):Je(i)?this.killTweensOf(i):(i.parent===this&&Yh(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(ci.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Oi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Qe.delayedCall(0,r||Qa,o);return a.data="isPause",this._hasPause=1,as(this,a,Oi(this,i))},e.removePause=function(i){var r=this._first;for(i=Oi(this,i);r;)r._start===i&&r.data==="isPause"&&rr(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=zi(i),l=this._first,c=Ps(r),h;l;)l instanceof Qe?cb(l._targets,a)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Oi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=Qe.to(o,Ti({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Io(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},r));return f?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ti({startAt:{time:Oi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sg(this,Oi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sg(this,Oi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=He(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Pr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Bi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,as(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=He(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Io(o,o===We&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(We._ts&&(Ig(We,Vh(i,We)),Pg=ci.frame),ci.frame>=_g){_g+=ui.autoSleep||120;var r=We._first;if((!r||!r._ts)&&ui.autoSleep&&ci._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ci.sleep()}}},t})(tl);Ti(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lb=function(t,e,n,i,r,o,a){var l=new jn(this._pt,t,e,0,1,Dd,null,r),c=0,h=0,d,f,u,p,v,m,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Lo(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(ed)||[];d=ed.exec(i);)p=d[0],v=i.substring(c,d.index),u?u=(u+1)%5:v.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:m,c:p.charAt(1)==="="?Nr(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=ed.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(xd.test(i)||g)&&(l.e=0),this._pt=l,l},Cd=function(t,e,n,i,r,o,a,l,c,h){Je(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:Je(d)?c?t[e.indexOf("set")||!Je(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Je(d)?c?Bb:Kg:Id,p;if(pn(i)&&(~i.indexOf("random(")&&(i=Lo(i)),i.charAt(1)==="="&&(p=Nr(f,i)+(In(f)||0),(p||p===0)&&(i=p))),!h||f!==i||md)return!isNaN(f*i)&&i!==""?(p=new jn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?kb:Qg,0,u),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&qh(e,i),Lb.call(this,t,e,f,i,u,l||ui.stringFilter,c))},Nb=function(t,e,n,i,r){if(Je(t)&&(t=Ja(t,r,e,n,i)),!ls(t)||t.style&&t.nodeType||Wn(t)||Eg(t))return pn(t)?Ja(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ja(t[a],r,e,n,i);return o},Rd=function(t,e,n,i,r,o){var a,l,c,h;if(li[t]&&(a=new li[t]).init(r,a.rawVars?e[t]:Nb(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new jn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Co))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},nr,md,Pd=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,p=t._dur,v=t._startAt,m=t._targets,g=t.parent,x=g&&g.data==="nested"?g.vars.targets:m,b=t._overwrite==="auto"&&!gd,y=t.timeline,T=i.easeReverse||d,w,_,S,R,C,D,N,G,I,W,Y,V,rt;if(y&&(!f||!r)&&(r="none"),t._ease=Ir(r,$a.ease),t._rEase=T&&(Ir(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(G=m[0]?sr(m[0]).harness:0,V=G&&i[G.prop],w=kh(i,Sd),v&&(v._zTime<0&&v.progress(1),e<0&&h&&a&&!u?v.render(-1,!0):v.revert(h&&p?Fh:ab),v._lazy=0),o){if(rr(t._startAt=Qe.set(m,Ti({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!v&&hi(l),startAt:null,delay:0,onUpdate:c&&function(){return bi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pn||!a&&!u)&&t._startAt.revert(Fh),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!v){if(e&&(a=!1),S=Ti({overwrite:!1,data:"isFromStart",lazy:a&&!v&&hi(l),immediateRender:a,stagger:0,parent:g},w),V&&(S[G.prop]=V),rr(t._startAt=Qe.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pn?t._startAt.revert(Fh):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&hi(l)||l&&!p,_=0;_<m.length;_++){if(C=m[_],N=C._gsap||bd(m)[_]._gsap,t._ptLookup[_]=W={},hd[N.id]&&ir.length&&zh(),Y=x===m?_:x.indexOf(C),G&&(I=new G).init(C,V||w,t,Y,x)!==!1&&(t._pt=R=new jn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){W[X]=R}),I.priority&&(D=1)),!G||V)for(S in w)li[S]&&(I=Rd(S,w,t,Y,C,x))?I.priority&&(D=1):W[S]=R=Cd.call(t,C,S,"get",w[S],Y,x,0,i.stringFilter);t._op&&t._op[_]&&t.kill(C,t._op[_]),b&&t._pt&&(nr=t,We.killTweensOf(C,W,t.globalTime(e)),rt=!t.parent,nr=0),t._pt&&l&&(hd[N.id]=1)}D&&Nd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!rt,f&&e<=0&&y.render(Bi,!0,!0)},Fb=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return md=1,t.vars[e]="+=0",Pd(t,a),md=0,l?Ka(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=$e(n)+In(d.e)),d.b&&(d.b=h.s+In(d.b))},Ub=function(t,e){var n=t[0]?sr(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ro({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Ob=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Wn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ja=function(t,e,n,i,r){return Je(t)?t.call(e,n,i,r):pn(t)&&~t.indexOf("random(")?Lo(t):t},Hh=Md+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",$g={};Qn(Hh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return $g[s]=1});Hh=Hh.split(",");var Qe=(function(s){wg(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ya(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,v=l.defaults,m=l.scrollTrigger,g=i.parent||We,x=(Wn(n)||Eg(n)?Ps(n[0]):"length"in i)?[n]:zi(n),b,y,T,w,_,S,R,C;if(a._targets=x.length?bd(x):Ka("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||f||Nh(c)||Nh(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(b=a.timeline=new Hn({data:"nested",defaults:v||{},targets:g&&g.data==="nested"?g.vars.targets:x}),b.kill(),b.parent=b._dp=Cs(a),b._start=0,f||Nh(c)||Nh(h)){if(w=x.length,R=f&&kg(f),ls(f))for(_ in f)~Hh.indexOf(_)&&(C||(C={}),C[_]=f[_]);for(y=0;y<w;y++)T=kh(i,$g),T.stagger=0,D&&(T.easeReverse=D),C&&Ro(T,C),S=x[y],T.duration=+Ja(c,Cs(a),y,S,x),T.delay=(+Ja(h,Cs(a),y,S,x)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),b.to(S,T,R?R(y,S,x):0),b._ease=me.none;b.duration()?c=h=0:a.timeline=0}else if(p){Ya(Ti(b.vars.defaults,{ease:"none"})),b._ease=Ir(p.ease||i.ease||"none");var N=0,G,I,W;if(Wn(p))p.forEach(function(Y){return b.to(x,Y,">")}),b.duration();else{T={};for(_ in p)_==="ease"||_==="easeEach"||Ob(_,p[_],T,p.easeEach);for(_ in T)for(G=T[_].sort(function(Y,V){return Y.t-V.t}),N=0,y=0;y<G.length;y++)I=G[y],W={ease:I.e,duration:(I.t-(y?G[y-1].t:0))/100*c},W[_]=I.v,b.to(x,W,N),N+=W.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return u===!0&&!gd&&(nr=Cs(a),We.killTweensOf(x),nr=0),as(g,Cs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===He(g._time)&&hi(d)&&db(Cs(a))&&g.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-h)||0)),m&&Ug(Cs(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ee&&!h?l:i<Ee?0:i,f,u,p,v,m,g,x,b;if(!c)mb(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,r,o);if(f=He(d%v),d===l?(p=this._repeat,f=c):(m=He(d/v),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=Po(this._tTime,v),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(He(v*p),!0).invalidate()._lock=0)}if(!this._initted){if(Og(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(bi(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(x,u.d),u=u._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ud(this,i,r,o),bi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&bi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ud(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&rr(this,1),!r&&!(h&&!a)&&(d||a||g)&&(bi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){ja||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Pd(this,c),h=this._ease(c/this._dur),Fb(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Jh(this,0),this.parent||Ng(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,nr&&nr.vars.overwrite!==!0)._first||Xa(this),this.parent&&o!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?zi(i):a,c=this._ptLookup,h=this._pt,d,f,u,p,v,m,g;if((!r||r==="all")&&ub(a,l))return r==="all"&&(this._pt=0),Xa(this);for(d=this._op=this._op||[],r!=="all"&&(pn(r)&&(v={},Qn(r,function(x){return v[x]=1}),r=v),r=Ub(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,p=f,u={}):(u=d[g]=d[g]||{},p=r);for(v in p)m=f&&f[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&Yh(this,m,"_pt"),delete f[v]),u!=="all"&&(u[v]=1)}return this._initted&&!this._pt&&h&&Xa(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Za(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Za(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return We.killTweensOf(i,r,o)},t})(tl);Ti(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(s){Qe[s]=function(){var t=new Hn,e=fd.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Id=function(t,e,n){return t[e]=n},Kg=function(t,e,n){return t[e](n)},Bb=function(t,e,n,i){return t[e](i.fp,n)},zb=function(t,e,n){return t.setAttribute(e,n)},$h=function(t,e){return Je(t[e])?Kg:Xh(t[e])&&t.setAttribute?zb:Id},Qg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},kb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Dd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ld=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Vb=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Gb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Yh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Hb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Nd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},jn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Qg,this.d=l||this,this.set=c||Id,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Hb,this.m=n,this.mt=r,this.tween=i},s})();Qn(Md+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Sd[s]=1});wi.TweenMax=wi.TweenLite=Qe;wi.TimelineLite=wi.TimelineMax=Hn;We=new Hn({sortChildren:!1,defaults:$a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=Ed;var Dr=[],Oh={},Wb=[],bg=0,Xb=0,od=function(t){return(Oh[t]||Wb).map(function(e){return e()})},el=function(){var t=Date.now(),e=[];t-bg>2&&(od("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=os.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),od("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bg=t,od("matchMedia"))},jg=(function(){function s(e,n){this.selector=n&&dd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Xb++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Je(n)&&(r=i,i=n,n=Je);var o=this,a=function(){var c=ze,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=dd(r)),ze=o,d=i.apply(o,arguments),Je(d)&&o._r.push(d),ze=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Je?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ze;ze=null,n(this),ze=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(el):a.removeEventListener("change",el)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),qb=(function(){function s(e){this.contexts=[],this.scope=e,ze&&ze.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ls(n)||(n={matches:n});var o=new jg(0,r||this.scope),a=o.conditions={},l,c,h;ze&&!o.selector&&(o.selector=ze.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=os.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(el):l.addEventListener("change",el),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Wh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return qg(i)})},timeline:function(t){return new Hn(t)},getTweensOf:function(t,e){return We.getTweensOf(t,e)},getProperty:function(t,e,n,i){pn(t)&&(t=zi(t)[0]);var r=sr(t||{}).get,o=n?Lg:Dg;return n==="native"&&(n=""),t&&(e?o((li[e]&&li[e].get||r)(t,e,n,i)):function(a,l,c){return o((li[a]&&li[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=zi(t),t.length>1){var i=t.map(function(h){return Xn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=li[e],a=sr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Co._pt=0,d.init(t,n?h+n:h,Co,0,[t]),d.render(1,d),Co._pt&&Ld(1,Co)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Xn.to(t,Ti((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return We.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ir(t.ease,$a.ease)),vg($a,t||{})},config:function(t){return vg(ui,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!li[a]&&!wi[a]&&Ka(e+" effect requires "+a+" plugin.")}),nd[e]=function(a,l,c){return n(zi(a),Ti(l||{},r),c)},o&&(Hn.prototype[e]=function(a,l,c){return this.add(nd[e](a,ls(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){me[t]=Ir(e)},parseEase:function(t,e){return arguments.length?Ir(t,e):me},getById:function(t){return We.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Hn(t),i,r;for(n.smoothChildTiming=hi(t.smoothChildTiming),We.remove(n),n._dp=0,n._time=n._tTime=We._time,i=We._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qe&&i.vars.onComplete===i._targets[0]))&&as(n,i,i._start-i._delay),i=r;return as(We,n,0),n},context:function(t,e){return t?new jg(t,e):ze},matchMedia:function(t){return new qb(t)},matchMediaRefresh:function(){return Dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||el()},addEventListener:function(t,e){var n=Oh[t]||(Oh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Oh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:bb,wrapYoyo:wb,distribute:kg,random:Gg,snap:Vg,normalize:Mb,getUnit:In,clamp:vb,splitColor:Yg,toArray:zi,selector:dd,mapRange:Wg,pipe:yb,unitize:Sb,interpolate:Tb,shuffle:zg},install:Cg,effects:nd,ticker:ci,updateRoot:Hn.updateRoot,plugins:li,globalTimeline:We,core:{PropTween:jn,globals:Rg,Tween:Qe,Timeline:Hn,Animation:tl,getCache:sr,_removeLinkedListItem:Yh,reverting:function(){return Pn},context:function(t){return t&&ze&&(ze.data.push(t),t._ctx=ze),ze},suppressOverwrites:function(t){return gd=t}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Wh[s]=Qe[s]});ci.add(Hn.updateRoot);Co=Wh.to({},{duration:0});var Yb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Zb=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Yb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ad=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(pn(r)&&(l={},Qn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Zb(a,r)}}}},Xn=Wh.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ad("roundProps",pd),ad("modifiers"),ad("snap",Vg))||Wh;Qe.version=Hn.version=Xn.version="3.15.1";Ag=1;_d()&&Do();var Jb=me.Power0,$b=me.Power1,Kb=me.Power2,Qb=me.Power3,jb=me.Power4,t1=me.Linear,e1=me.Quad,n1=me.Cubic,i1=me.Quart,s1=me.Quint,r1=me.Strong,o1=me.Elastic,a1=me.Back,l1=me.SteppedEase,c1=me.Bounce,h1=me.Sine,u1=me.Expo,f1=me.Circ;var t0,ar,Fo,kd,zr,d1,e0,Vd,p1=function(){return typeof window<"u"},Ds={},Br=180/Math.PI,Uo=Math.PI/180,No=Math.atan2,n0=1e8,Gd=/([A-Z])/g,m1=/(left|right|width|margin|padding|x)/i,g1=/[\s,\(]\S/,cs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ud=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},v1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},x1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},y1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},h0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},u0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},S1=function(t,e,n){return t.style[e]=n},M1=function(t,e,n){return t.style.setProperty(e,n)},b1=function(t,e,n){return t._gsap[e]=n},w1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},T1=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},E1=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Xe="transform",fi=Xe+"Origin",A1=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ds&&r){if(this.tfm=this.tfm||{},t!=="transform")t=cs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Is(i,a)}):this.tfm[t]=o.x?o[t]:Is(i,t),t===fi&&(this.tfm.zOrigin=o.zOrigin);else return cs.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fi,e,"")),t=Xe}(r||e)&&this.props.push(t,e,r[t])},f0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},C1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Gd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Vd(),(!r||!r.isStart)&&!n[Xe]&&(f0(n),i.zOrigin&&n[fi]&&(n[fi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},d0=function(t,e){var n={target:t,props:[],revert:C1,save:A1};return t._gsap||Xn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},p0,Od=function(t,e){var n=ar.createElementNS?ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return n&&n.style?n:ar.createElement(t)},Ei=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Gd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Oo(e)||e,1)||""},i0="O,Moz,ms,Ms,Webkit".split(","),Oo=function(t,e,n){var i=e||zr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(i0[o]+t in r););return o<0?null:(o===3?"ms":o>=0?i0[o]:"")+t},Bd=function(){p1()&&window.document&&(t0=window,ar=t0.document,Fo=ar.documentElement,zr=Od("div")||{style:{}},d1=Od("div"),Xe=Oo(Xe),fi=Xe+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",p0=!!Oo("perspective"),Vd=Xn.core.reverting,kd=1)},s0=function(t){var e=t.ownerSVGElement,n=Od("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Fo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Fo.removeChild(n),r},r0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},m0=function(t){var e,n;try{e=t.getBBox()}catch{e=s0(t),n=1}return e&&(e.width||e.height)||n||(e=s0(t)),e&&!e.width&&!e.x&&!e.y?{x:+r0(t,["x","cx","x1"])||0,y:+r0(t,["y","cy","y1"])||0,width:0,height:0}:e},g0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&m0(t))},cr=function(t,e){if(e){var n=t.style,i;e in Ds&&e!==fi&&(e=Xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Gd,"-$1").toLowerCase())):n.removeAttribute(e)}},lr=function(t,e,n,i,r,o){var a=new jn(t._pt,e,n,0,1,o?u0:h0);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},o0={deg:1,rad:1,turn:1},R1={grid:1,flex:1},hr=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=zr.style,l=m1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",p,v,m,g;if(i===o||!r||o0[i]||o0[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&g0(t),(u||o==="%")&&(Ds[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],$e(u?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:i),v=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(v=(t.ownerSVGElement||{}).parentNode),(!v||v===ar||!v.appendChild)&&(v=ar.body),m=v._gsap,m&&u&&m.width&&l&&m.time===ci.time&&!m.uncache)return $e(r/m.width*d);if(u&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+i,p=t[h],x?t.style[e]=x:cr(t,e)}else(u||o==="%")&&!R1[Ei(v,"display")]&&(a.position=Ei(t,"position")),v===t&&(a.position="static"),v.appendChild(zr),p=zr[h],v.removeChild(zr),a.position="absolute";return l&&u&&(m=sr(v),m.time=ci.time,m.width=v[h]),$e(f?p*r/d:p&&r?d/p*r:0)},Is=function(t,e,n,i){var r;return kd||Bd(),e in cs&&e!=="transform"&&(e=cs[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ds[e]&&e!=="transform"?(r=rl(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Qh(Ei(t,fi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Kh[e]&&Kh[e](t,e,n)||Ei(t,e)||wd(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?hr(t,e,r,n)+n:r},P1=function(t,e,n,i){if(!n||n==="none"){var r=Oo(e,t,1),o=r&&Ei(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Ei(t,"borderTopColor"))}var a=new jn(this._pt,t.style,e,0,1,Dd),l=0,c=0,h,d,f,u,p,v,m,g,x,b,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ei(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=t.style[e],t.style[e]=i,i=Ei(t,e)||i,v?t.style[e]=v:cr(t,e)),h=[n,i],Ed(h),n=h[0],i=h[1],f=n.match(Lr)||[],T=i.match(Lr)||[],T.length){for(;d=Lr.exec(i);)m=d[0],x=i.substring(l,d.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(v=f[c++]||"")&&(u=parseFloat(v)||0,y=v.substr((u+"").length),m.charAt(1)==="="&&(m=Nr(u,m)+y),g=parseFloat(m),b=m.substr((g+"").length),l=Lr.lastIndex-b.length,b||(b=b||ui.units[e]||y,l===i.length&&(i+=b,a.e+=b)),y!==b&&(u=hr(t,e,v,b)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:u,c:g-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?u0:h0;return xd.test(i)&&(a.e=0),this._pt=a,a},a0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=a0[n]||n,e[1]=a0[i]||i,e.join(" ")},D1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ds[a]&&(l=1,a=a==="transformOrigin"?fi:Xe),cr(n,a);l&&(cr(n,Xe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rl(n,1),o.uncache=1,f0(i)))}},Kh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new jn(t._pt,e,n,0,0,D1);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},sl=[1,0,0,1,0,0],_0={},v0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},l0=function(t){var e=Ei(t,Xe);return v0(e)?sl:e.substr(7).match(vd).map($e)},Hd=function(t,e){var n=t._gsap||sr(t),i=t.style,r=l0(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?sl:r):(r===sl&&!t.offsetParent&&t!==Fo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Fo.appendChild(t)),r=l0(t),l?i.display=l:cr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Fo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},zd=function(t,e,n,i,r,o){var a=t._gsap,l=r||Hd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],p=l[1],v=l[2],m=l[3],g=l[4],x=l[5],b=e.split(" "),y=parseFloat(b[0])||0,T=parseFloat(b[1])||0,w,_,S,R;n?l!==sl&&(_=u*m-p*v)&&(S=y*(m/_)+T*(-v/_)+(v*x-m*g)/_,R=y*(-p/_)+T*(u/_)-(u*x-p*g)/_,y=S,T=R):(w=m0(t),y=w.x+(~b[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(b[1]||b[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(g=y-c,x=T-h,a.xOffset=d+(g*u+x*v)-g,a.yOffset=f+(g*p+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[fi]="0px 0px",o&&(lr(o,a,"xOrigin",c,y),lr(o,a,"yOrigin",h,T),lr(o,a,"xOffset",d,a.xOffset),lr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},rl=function(t,e){var n=t._gsap||new Ad(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ei(t,fi)||"0",h,d,f,u,p,v,m,g,x,b,y,T,w,_,S,R,C,D,N,G,I,W,Y,V,rt,X,P,ot,wt,kt,K,gt;return h=d=f=v=m=g=x=b=y=0,u=p=1,n.svg=!!(t.getCTM&&g0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),_=Hd(t,n.svg),n.svg&&(n.uncache?(rt=t.getBBox(),c=n.xOrigin-rt.x+"px "+(n.yOrigin-rt.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),zd(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,_)),T=n.xOrigin||0,w=n.yOrigin||0,_!==sl&&(D=_[0],N=_[1],G=_[2],I=_[3],h=W=_[4],d=Y=_[5],_.length===6?(u=Math.sqrt(D*D+N*N),p=Math.sqrt(I*I+G*G),v=D||N?No(N,D)*Br:0,x=G||I?No(G,I)*Br+v:0,x&&(p*=Math.abs(Math.cos(x*Uo))),n.svg&&(h-=T-(T*D+w*G),d-=w-(T*N+w*I))):(gt=_[6],kt=_[7],P=_[8],ot=_[9],wt=_[10],K=_[11],h=_[12],d=_[13],f=_[14],S=No(gt,wt),m=S*Br,S&&(R=Math.cos(-S),C=Math.sin(-S),V=W*R+P*C,rt=Y*R+ot*C,X=gt*R+wt*C,P=W*-C+P*R,ot=Y*-C+ot*R,wt=gt*-C+wt*R,K=kt*-C+K*R,W=V,Y=rt,gt=X),S=No(-G,wt),g=S*Br,S&&(R=Math.cos(-S),C=Math.sin(-S),V=D*R-P*C,rt=N*R-ot*C,X=G*R-wt*C,K=I*C+K*R,D=V,N=rt,G=X),S=No(N,D),v=S*Br,S&&(R=Math.cos(S),C=Math.sin(S),V=D*R+N*C,rt=W*R+Y*C,N=N*R-D*C,Y=Y*R-W*C,D=V,W=rt),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,g=180-g),u=$e(Math.sqrt(D*D+N*N+G*G)),p=$e(Math.sqrt(Y*Y+gt*gt)),S=No(W,Y),x=Math.abs(S)>2e-4?S*Br:0,y=K?1/(K<0?-K:K):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!v0(Ei(t,Xe)),V&&t.setAttribute("transform",V))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(u*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=$e(u),n.scaleY=$e(p),n.rotation=$e(v)+a,n.rotationX=$e(m)+a,n.rotationY=$e(g)+a,n.skewX=x+a,n.skewY=b+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[fi]=Qh(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?N1:p0?x0:L1,n.uncache=0,n},Qh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fd=function(t,e,n){var i=In(e);return $e(parseFloat(e)+parseFloat(hr(t,"x",n+"px",i)))+i},L1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,x0(t,e)},Ur="0deg",il="0px",Or=") ",x0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,p=n.scaleX,v=n.scaleY,m=n.transformPerspective,g=n.force3D,x=n.target,b=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(b&&(d!==Ur||h!==Ur)){var w=parseFloat(h)*Uo,_=Math.sin(w),S=Math.cos(w),R;w=parseFloat(d)*Uo,R=Math.cos(w),o=Fd(x,o,_*R*-b),a=Fd(x,a,-Math.sin(w)*-b),l=Fd(x,l,S*R*-b+b)}m!==il&&(y+="perspective("+m+Or),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==il||a!==il||l!==il)&&(y+=l!==il||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Or),c!==Ur&&(y+="rotate("+c+Or),h!==Ur&&(y+="rotateY("+h+Or),d!==Ur&&(y+="rotateX("+d+Or),(f!==Ur||u!==Ur)&&(y+="skew("+f+", "+u+Or),(p!==1||v!==1)&&(y+="scale("+p+", "+v+Or),x.style[Xe]=y||"translate(0, 0)"},N1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,p=n.xOrigin,v=n.yOrigin,m=n.xOffset,g=n.yOffset,x=n.forceCSS,b=parseFloat(o),y=parseFloat(a),T,w,_,S,R;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Uo,c*=Uo,T=Math.cos(l)*d,w=Math.sin(l)*d,_=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Uo,R=Math.tan(c-h),R=Math.sqrt(1+R*R),_*=R,S*=R,h&&(R=Math.tan(h),R=Math.sqrt(1+R*R),T*=R,w*=R)),T=$e(T),w=$e(w),_=$e(_),S=$e(S)):(T=d,S=f,w=_=0),(b&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=hr(u,"x",o,"px"),y=hr(u,"y",a,"px")),(p||v||m||g)&&(b=$e(b+p-(p*T+v*_)+m),y=$e(y+v-(p*w+v*S)+g)),(i||r)&&(R=u.getBBox(),b=$e(b+i/100*R.width),y=$e(y+r/100*R.height)),R="matrix("+T+","+w+","+_+","+S+","+b+","+y+")",u.setAttribute("transform",R),x&&(u.style[Xe]=R)},F1=function(t,e,n,i,r){var o=360,a=pn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Br:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*n0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*n0)%o-~~(c/o)*o)),t._pt=f=new jn(t._pt,e,n,i,c,_1),f.e=h,f.u="deg",t._props.push(n),f},c0=function(t,e){for(var n in e)t[n]=e[n];return t},U1=function(t,e,n){var i=c0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xe]=e,a=rl(n,1),cr(n,Xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xe],o[Xe]=e,a=rl(n,1),o[Xe]=c);for(l in Ds)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=In(c),p=In(h),d=u!==p?hr(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new jn(t._pt,a,l,d,f-d,Ud),t._pt.u=p||0,t._props.push(l));c0(a,i)};Qn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Kh[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(p){return Is(a,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(p,v){return u[p]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,u,d)}});var Wd={name:"css",register:Bd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,p,v,m,g,x,b,y,T,w,_,S,R;kd||Bd(),this.styles=this.styles||d0(t),S=this.styles.props,this.tween=n;for(v in e)if(v!=="autoRound"&&(h=e[v],!(li[v]&&Rd(v,e,n,i,t,r)))){if(u=typeof h,p=Kh[v],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Lo(h)),p)p(this,t,v,h,n)&&(_=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(v)+"").trim(),h+="",Rs.lastIndex=0,Rs.test(c)||(m=In(c),g=In(h),g?m!==g&&(c=hr(t,v,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,v),o.push(v),S.push(v,0,a[v]);else if(u!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,t,r):l[v],pn(c)&&~c.indexOf("random(")&&(c=Lo(c)),In(c+"")||c==="auto"||(c+=ui.units[v]||In(Is(t,v))||""),(c+"").charAt(1)==="="&&(c=Is(t,v))):c=Is(t,v),f=parseFloat(c),x=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),d=parseFloat(h),v in cs&&(v==="autoAlpha"&&(f===1&&Is(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),lr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=cs[v],~v.indexOf(",")&&(v=v.split(",")[0]))),b=v in Ds,b){if(this.styles.save(v),R=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=Ei(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=Ei(t,"perspective"),C?t.style.perspective=C:cr(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||rl(t,e.parseTransform),w=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new jn(this._pt,a,Xe,0,1,T.renderTransform,T,0,-1),y.dep=1),v==="scale")this._pt=new jn(this._pt,T,"scaleY",T.scaleY,(x?Nr(T.scaleY,x+d):d)-T.scaleY||0,Ud),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){S.push(fi,0,a[fi]),h=I1(h),T.svg?zd(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&lr(this,T,"zOrigin",T.zOrigin,g),lr(this,a,v,Qh(c),Qh(h)));continue}else if(v==="svgOrigin"){zd(t,h,1,w,0,this);continue}else if(v in _0){F1(this,T,v,f,x?Nr(f,x+h):h);continue}else if(v==="smoothOrigin"){lr(this,T,"smooth",T.smooth,h);continue}else if(v==="force3D"){T[v]=h;continue}else if(v==="transform"){U1(this,h,t);continue}}else v in a||(v=Oo(v)||v);if(b||(d||d===0)&&(f||f===0)&&!g1.test(h)&&v in a)m=(c+"").substr((f+"").length),d||(d=0),g=In(h)||(v in ui.units?ui.units[v]:m),m!==g&&(f=hr(t,v,c,g)),this._pt=new jn(this._pt,b?T:a,v,f,(x?Nr(f,x+d):d)-f,!b&&(g==="px"||v==="zIndex")&&e.autoRound!==!1?y1:Ud),this._pt.u=g||0,b&&R!==h?(this._pt.b=c,this._pt.e=R,this._pt.r=x1):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=v1);else if(v in a)P1.call(this,t,v,c,x?x+h:h);else if(v in t)this.add(t,v,c||t[v],x?x+h:h,i,r);else if(v!=="parseTransform"){qh(v,h);continue}b||(v in a?S.push(v,0,a[v]):typeof t[v]=="function"?S.push(v,2,t[v]()):S.push(v,1,c||t[v])),o.push(v)}}_&&Nd(this)},render:function(t,e){if(e.tween._time||!Vd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Is,aliases:cs,getSetter:function(t,e,n){var i=cs[e];return i&&i.indexOf(",")<0&&(e=i),e in Ds&&e!==fi&&(t._gsap.x||Is(t,"x"))?n&&e0===n?e==="scale"?w1:b1:(e0=n||{})&&(e==="scale"?T1:E1):t.style&&!Xh(t.style[e])?S1:~e.indexOf("-")?M1:$h(t,e)},core:{_removeProperty:cr,_getMatrix:Hd}};Xn.utils.checkPrefix=Oo;Xn.core.getStyleSaver=d0;(function(s,t,e,n){var i=Qn(s+","+t+","+e,function(r){Ds[r]=1});Qn(t,function(r){ui.units[r]="deg",_0[r]=1}),cs[i[13]]=s+","+t,Qn(n,function(r){var o=r.split(":");cs[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ui.units[s]="px"});Xn.registerPlugin(Wd);var Ls=Xn.registerPlugin(Wd)||Xn,GA=Ls.core.Tween;function y0(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function O1(s,t,e){return t&&y0(s.prototype,t),e&&y0(s,e),s}var Dn,eu,B1,di,ur,fr,zo,M0,kr,ko,b0,Ns,$i,w0,T0=function(){return Dn||typeof window<"u"&&(Dn=window.gsap)&&Dn.registerPlugin&&Dn},E0=1,Bo=[],te=[],Ki=[],al=Date.now,Xd=function(t,e){return e},z1=function(){var t=ko.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,Ki),te=n,Ki=i,Xd=function(o,a){return e[o](a)}},Us=function(t,e){return~Ki.indexOf(t)&&Ki[Ki.indexOf(t)+1][e]},ll=function(t){return!!~b0.indexOf(t)},ei=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},ti=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},jh="scrollLeft",tu="scrollTop",qd=function(){return Ns&&Ns.isPressed||te.cache++},nu=function(t,e){var n=function i(r){if(r||r===0){E0&&di.history.scrollRestoration!=="manual"&&(di.history.scrollRestoration="manual");var o=Ns&&Ns.isPressed;r=i.v=Math.round(r)||(Ns&&Ns.iOS?1:0),t(r),i.cacheID=te.cache,o&&Xd("ss",r)}else(e||te.cache!==i.cacheID||Xd("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},qn={s:jh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nu(function(s){return arguments.length?di.scrollTo(s,an.sc()):di.pageXOffset||ur[jh]||fr[jh]||zo[jh]||0})},an={s:tu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:nu(function(s){return arguments.length?di.scrollTo(qn.sc(),s):di.pageYOffset||ur[tu]||fr[tu]||zo[tu]||0})},ni=function(t,e){return(e&&e._ctx&&e._ctx.selector||Dn.utils.toArray)(t)[0]||(typeof t=="string"&&Dn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},k1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Fs=function(t,e){var n=e.s,i=e.sc;ll(t)&&(t=ur.scrollingElement||fr);var r=te.indexOf(t),o=i===an.sc?1:2;!~r&&(r=te.push(t)-1),te[r+o]||ei(t,"scroll",qd);var a=te[r+o],l=a||(te[r+o]=nu(Us(t,n),!0)||(ll(t)?i:nu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Dn.getProperty(t,"scrollBehavior")==="smooth"),l},iu=function(t,e,n){var i=t,r=t,o=al(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,v){var m=al();v||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(p){var v=a,m=r,g=al();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-v)*1e3};return{update:h,reset:d,getVelocity:f}},ol=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},S0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},A0=function(){ko=Dn.core.globals().ScrollTrigger,ko&&ko.core&&z1()},C0=function(t){return Dn=t||T0(),!eu&&Dn&&typeof document<"u"&&document.body&&(di=window,ur=document,fr=ur.documentElement,zo=ur.body,b0=[di,ur,fr,zo],B1=Dn.utils.clamp,w0=Dn.core.context||function(){},kr="onpointerenter"in zo?"pointer":"mouse",M0=Ke.isTouch=di.matchMedia&&di.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in di||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=Ke.eventTypes=("ontouchstart"in fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return E0=0},500),eu=1),ko||A0(),eu};qn.op=an;te.cache=0;var Ke=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){eu||C0(Dn)||console.warn("Please gsap.registerPlugin(Observer)"),ko||A0();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,v=n.event,m=n.onDragStart,g=n.onDragEnd,x=n.onDrag,b=n.onPress,y=n.onRelease,T=n.onRight,w=n.onLeft,_=n.onUp,S=n.onDown,R=n.onChangeX,C=n.onChangeY,D=n.onChange,N=n.onToggleX,G=n.onToggleY,I=n.onHover,W=n.onHoverEnd,Y=n.onMove,V=n.ignoreCheck,rt=n.isNormalizer,X=n.onGestureStart,P=n.onGestureEnd,ot=n.onWheel,wt=n.onEnable,kt=n.onDisable,K=n.onClick,gt=n.scrollSpeed,xt=n.capture,Et=n.allowClicks,pt=n.lockAxis,Lt=n.onLockAxis;this.target=a=ni(a)||fr,this.vars=n,u&&(u=Dn.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,gt=gt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(di.getComputedStyle(zo).lineHeight)||22);var ue,Ct,Ht,Dt,Nt,Kt,oe,Q=this,$t=0,Ae=0,ae=n.passive||!h&&n.passive!==!1,Qt=Fs(a,qn),ne=Fs(a,an),Te=Qt(),z=ne(),le=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$i[0]==="pointerdown",yt=ll(a),k=a.ownerDocument||ur,F=[0,0,0],st=[0,0,0],Z=0,ht=function(){return Z=al()},A=function(Mt,ct){return(Q.event=Mt)&&u&&k1(Mt.target,u)||ct&&le&&Mt.pointerType!=="touch"||V&&V(Mt,ct)},M=function(){Q._vx.reset(),Q._vy.reset(),Ct.pause(),d&&d(Q)},B=function(){var Mt=Q.deltaX=S0(F),ct=Q.deltaY=S0(st),at=Math.abs(Mt)>=i,bt=Math.abs(ct)>=i;D&&(at||bt)&&D(Q,Mt,ct,F,st),at&&(T&&Q.deltaX>0&&T(Q),w&&Q.deltaX<0&&w(Q),R&&R(Q),N&&Q.deltaX<0!=$t<0&&N(Q),$t=Q.deltaX,F[0]=F[1]=F[2]=0),bt&&(S&&Q.deltaY>0&&S(Q),_&&Q.deltaY<0&&_(Q),C&&C(Q),G&&Q.deltaY<0!=Ae<0&&G(Q),Ae=Q.deltaY,st[0]=st[1]=st[2]=0),(Dt||Ht)&&(Y&&Y(Q),Ht&&(m&&Ht===1&&m(Q),x&&x(Q),Ht=0),Dt=!1),Kt&&!(Kt=!1)&&Lt&&Lt(Q),Nt&&(ot(Q),Nt=!1),ue=0},tt=function(Mt,ct,at){F[at]+=Mt,st[at]+=ct,Q._vx.update(Mt),Q._vy.update(ct),c?ue||(ue=requestAnimationFrame(B)):B()},J=function(Mt,ct){pt&&!oe&&(Q.axis=oe=Math.abs(Mt)>Math.abs(ct)?"x":"y",Kt=!0),oe!=="y"&&(F[2]+=Mt,Q._vx.update(Mt,!0)),oe!=="x"&&(st[2]+=ct,Q._vy.update(ct,!0)),c?ue||(ue=requestAnimationFrame(B)):B()},dt=function(Mt){if(!A(Mt,1)){Mt=ol(Mt,h);var ct=Mt.clientX,at=Mt.clientY,bt=ct-Q.x,lt=at-Q.y,Pt=Q.isDragging;Q.x=ct,Q.y=at,(Pt||(bt||lt)&&(Math.abs(Q.startX-ct)>=r||Math.abs(Q.startY-at)>=r))&&(Ht||(Ht=Pt?2:1),Pt||(Q.isDragging=!0),J(bt,lt))}},ut=Q.onPress=function(mt){A(mt,1)||mt&&mt.button||(Q.axis=oe=null,Ct.pause(),Q.isPressed=!0,mt=ol(mt),$t=Ae=0,Q.startX=Q.x=mt.clientX,Q.startY=Q.y=mt.clientY,Q._vx.reset(),Q._vy.reset(),ei(rt?a:k,$i[1],dt,ae,!0),Q.deltaX=Q.deltaY=0,b&&b(Q))},H=Q.onRelease=function(mt){if(!A(mt,1)){ti(rt?a:k,$i[1],dt,!0);var Mt=!isNaN(Q.y-Q.startY),ct=Q.isDragging,at=ct&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),bt=ol(mt);!at&&Mt&&(Q._vx.reset(),Q._vy.reset(),h&&Et&&Dn.delayedCall(.08,function(){if(al()-Z>300&&!mt.defaultPrevented){if(mt.target.click)mt.target.click();else if(k.createEvent){var lt=k.createEvent("MouseEvents");lt.initMouseEvent("click",!0,!0,di,1,bt.screenX,bt.screenY,bt.clientX,bt.clientY,!1,!1,!1,!1,0,null),mt.target.dispatchEvent(lt)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,d&&ct&&!rt&&Ct.restart(!0),Ht&&B(),g&&ct&&g(Q),y&&y(Q,at)}},it=function(Mt){return Mt.touches&&Mt.touches.length>1&&(Q.isGesturing=!0)&&X(Mt,Q.isDragging)},ft=function(){return(Q.isGesturing=!1)||P(Q)},L=function(Mt){if(!A(Mt)){var ct=Qt(),at=ne();tt((ct-Te)*gt,(at-z)*gt,1),Te=ct,z=at,d&&Ct.restart(!0)}},nt=function(Mt){if(!A(Mt)){Mt=ol(Mt,h),ot&&(Nt=!0);var ct=(Mt.deltaMode===1?l:Mt.deltaMode===2?di.innerHeight:1)*p;tt(Mt.deltaX*ct,Mt.deltaY*ct,0),d&&!rt&&Ct.restart(!0)}},et=function(Mt){if(!A(Mt)){var ct=Mt.clientX,at=Mt.clientY,bt=ct-Q.x,lt=at-Q.y;Q.x=ct,Q.y=at,Dt=!0,d&&Ct.restart(!0),(bt||lt)&&J(bt,lt)}},vt=function(Mt){Q.event=Mt,I(Q)},_t=function(Mt){Q.event=Mt,W(Q)},St=function(Mt){return A(Mt)||ol(Mt,h)&&K(Q)};Ct=Q._dc=Dn.delayedCall(f||.25,M).pause(),Q.deltaX=Q.deltaY=0,Q._vx=iu(0,50,!0),Q._vy=iu(0,50,!0),Q.scrollX=Qt,Q.scrollY=ne,Q.isDragging=Q.isGesturing=Q.isPressed=!1,w0(this),Q.enable=function(mt){return Q.isEnabled||(ei(yt?k:a,"scroll",qd),o.indexOf("scroll")>=0&&ei(yt?k:a,"scroll",L,ae,xt),o.indexOf("wheel")>=0&&ei(a,"wheel",nt,ae,xt),(o.indexOf("touch")>=0&&M0||o.indexOf("pointer")>=0)&&(ei(a,$i[0],ut,ae,xt),ei(k,$i[2],H),ei(k,$i[3],H),Et&&ei(a,"click",ht,!0,!0),K&&ei(a,"click",St),X&&ei(k,"gesturestart",it),P&&ei(k,"gestureend",ft),I&&ei(a,kr+"enter",vt),W&&ei(a,kr+"leave",_t),Y&&ei(a,kr+"move",et)),Q.isEnabled=!0,Q.isDragging=Q.isGesturing=Q.isPressed=Dt=Ht=!1,Q._vx.reset(),Q._vy.reset(),Te=Qt(),z=ne(),mt&&mt.type&&ut(mt),wt&&wt(Q)),Q},Q.disable=function(){Q.isEnabled&&(Bo.filter(function(mt){return mt!==Q&&ll(mt.target)}).length||ti(yt?k:a,"scroll",qd),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),ti(rt?a:k,$i[1],dt,!0)),ti(yt?k:a,"scroll",L,xt),ti(a,"wheel",nt,xt),ti(a,$i[0],ut,xt),ti(k,$i[2],H),ti(k,$i[3],H),ti(a,"click",ht,!0),ti(a,"click",St),ti(k,"gesturestart",it),ti(k,"gestureend",ft),ti(a,kr+"enter",vt),ti(a,kr+"leave",_t),ti(a,kr+"move",et),Q.isEnabled=Q.isPressed=Q.isDragging=!1,kt&&kt(Q))},Q.kill=Q.revert=function(){Q.disable();var mt=Bo.indexOf(Q);mt>=0&&Bo.splice(mt,1),Ns===Q&&(Ns=0)},Bo.push(Q),rt&&ll(a)&&(Ns=Q),Q.enable(v)},O1(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ke.version="3.15.1";Ke.create=function(s){return new Ke(s)};Ke.register=C0;Ke.getAll=function(){return Bo.slice()};Ke.getById=function(s){return Bo.filter(function(t){return t.vars.id===s})[0]};T0()&&Dn.registerPlugin(Ke);var Ft,Wo,se,we,Ri,be,op,xu,Sl,ml,hl,su,Yn,Mu,jd,si,R0,P0,Xo,q0,Yd,Y0,ii,tp,Z0,J0,dr,ep,ap,qo,lp,pr,np,Zd,ru=1,Zn=Date.now,Jd=Zn(),Gi=0,ul=0,I0=function(t,e,n){var i=Ci(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},D0=function(t,e){return e&&(!Ci(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},V1=function s(){return ul&&requestAnimationFrame(s)},L0=function(){return Mu=1},N0=function(){return Mu=0},hs=function(t){return t},fl=function(t){return Math.round(t*1e5)/1e5||0},$0=function(){return typeof window<"u"},K0=function(){return Ft||$0()&&(Ft=window.gsap)&&Ft.registerPlugin&&Ft},qr=function(t){return!!~op.indexOf(t)},Q0=function(t){return(t==="Height"?lp:se["inner"+t])||Ri["client"+t]||be["client"+t]},j0=function(t){return Us(t,"getBoundingClientRect")||(qr(t)?function(){return vu.width=se.innerWidth,vu.height=lp,vu}:function(){return Os(t)})},G1=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Us(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Q0(r):t["client"+r])||0}},H1=function(t,e){return!e||~Ki.indexOf(t)?j0(t):function(){return vu}},us=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Us(t,n))?o()-j0(t)()[r]:qr(t)?(Ri[n]||be[n])-Q0(i):t[n]-t["offset"+i])},ou=function(t,e){for(var n=0;n<Xo.length;n+=3)(!e||~e.indexOf(Xo[n+1]))&&t(Xo[n],Xo[n+1],Xo[n+2])},Ci=function(t){return typeof t=="string"},Jn=function(t){return typeof t=="function"},dl=function(t){return typeof t=="number"},Vr=function(t){return typeof t=="object"},cl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Vo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Go=Math.abs,t_="left",e_="top",cp="right",hp="bottom",Hr="width",Wr="height",gl="Right",_l="Left",vl="Top",xl="Bottom",ln="padding",ki="margin",Zo="Width",up="Height",mn="px",Vi=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},W1=function(t){var e=Vi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},F0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Os=function(t,e){var n=e&&Vi(t)[jd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ft.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},yu=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},n_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},X1=function(t){return function(e){return Ft.utils.snap(n_(t),e)}},fp=function(t){var e=Ft.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},q1=function(t){return function(e,n){return fp(n_(t))(e,n.direction)}},au=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},Mn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},Sn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},lu=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},U0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cu={toggleActions:"play",anticipatePin:0},Su={top:0,left:0,center:.5,bottom:1,right:1},pu=function(t,e){if(Ci(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Su?Su[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},hu=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,p=we.createElement("div"),v=qr(n)||Us(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=v?be:n.tagName==="IFRAME"?n.contentDocument.body:n,x=t.indexOf("start")!==-1,b=x?c:h,y="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&v?"fixed;":"absolute;"),(m||l||!v)&&(y+=(i===an?cp:hp)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],mu(p,0,i,x),p},mu=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Zo]=1,r["border"+a+Zo]=0,r[n.p]=e+"px",Ft.set(t,r)},ie=[],ip={},Ml,O0=function(){return Zn()-Gi>34&&(Ml||(Ml=requestAnimationFrame(Bs)))},Ho=function(){(!ii||!ii.isPressed||ii.startX>be.clientWidth)&&(te.cache++,ii?Ml||(Ml=requestAnimationFrame(Bs)):Bs(),Gi||Zr("scrollStart"),Gi=Zn())},$d=function(){J0=se.innerWidth,Z0=se.innerHeight},pl=function(t){te.cache++,(t===!0||!Yn&&!Y0&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!tp||J0!==se.innerWidth||Math.abs(se.innerHeight-Z0)>se.innerHeight*.25))&&xu.restart(!0)},Yr={},Y1=[],i_=function s(){return Sn(ee,"scrollEnd",s)||Gr(!0)},Zr=function(t){return Yr[t]&&Yr[t].map(function(e){return e()})||Y1},Ai=[],s_=function(t){for(var e=0;e<Ai.length;e+=5)(!t||Ai[e+4]&&Ai[e+4].query===t)&&(Ai[e].style.cssText=Ai[e+1],Ai[e].getBBox&&Ai[e].setAttribute("transform",Ai[e+2]||""),Ai[e+3].uncache=1)},r_=function(){te.cache++,te.forEach(function(t){return Jn(t)&&(t.rec=t())})},dp=function(t,e){var n;for(si=0;si<ie.length;si++)n=ie[si],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));pr=!0,e&&s_(e),e||Zr("revert")},o_=function(t,e){te.cache++,(e||!ri)&&te.forEach(function(n){return Jn(n)&&n.cacheID++&&(n.rec=0)}),Ci(t)&&(ap=t,se.history.scrollRestoration!==t&&(se.history.scrollRestoration=t))},ri,Xr=0,B0,Z1=function(){if(B0!==Xr){var t=B0=Xr;requestAnimationFrame(function(){return t===Xr&&Gr(!0)})}},a_=function(){be.appendChild(qo),lp=!ii&&qo.offsetHeight||se.innerHeight,be.removeChild(qo)},z0=function(t){return Sl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Gr=function(t,e){if(Ri=we.documentElement,be=we.body,op=[se,we,Ri,be],Gi&&!t&&!pr){Mn(ee,"scrollEnd",i_);return}a_(),ri=ee.isRefreshing=!0,pr||r_();var n=Zr("refreshInit");q0&&ee.sort(),e||dp(),te.forEach(function(i){Jn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),pr=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),np=1,z0(!0),ie.forEach(function(i){var r=us(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),z0(!1),np=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){Jn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),o_(ap,1),xu.pause(),Xr++,ri=2,Bs(2),ie.forEach(function(i){return Jn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ri=ee.isRefreshing=!1,Zr("refresh")},sp=0,gu=1,yl,Bs=function(t){if(t===2||!ri&&!pr){ee.isUpdating=!0,yl&&yl.update(0);var e=ie.length,n=Zn(),i=n-Jd>=50,r=e&&ie[0].scroll();if(gu=sp>r?-1:1,ri||(sp=r),i&&(Gi&&!Mu&&n-Gi>200&&(Gi=0,Zr("scrollEnd")),hl=Jd,Jd=n),gu<0){for(si=e;si-- >0;)ie[si]&&ie[si].update(0,i);gu=1}else for(si=0;si<e;si++)ie[si]&&ie[si].update(0,i);ee.isUpdating=!1}Ml=0},rp=[t_,e_,hp,cp,ki+xl,ki+gl,ki+vl,ki+_l,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_u=rp.concat([Hr,Wr,"boxSizing","max"+Zo,"max"+up,"position",ki,ln,ln+vl,ln+gl,ln+xl,ln+_l]),J1=function(t,e,n){Yo(n);var i=t._gsap;if(i.spacerIsNative)Yo(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Kd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=rp.length,o=e.style,a=t.style,l;r--;)l=rp[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hp]=a[cp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Hr]=yu(t,qn)+mn,o[Wr]=yu(t,an)+mn,o[ln]=a[ki]=a[e_]=a[t_]="0",Yo(i),a[Hr]=a["max"+Zo]=n[Hr],a[Wr]=a["max"+up]=n[Wr],a[ln]=n[ln],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},$1=/([A-Z])/g,Yo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ft.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace($1,"-$1").toLowerCase())}},uu=function(t){for(var e=_u.length,n=t.style,i=[],r=0;r<e;r++)i.push(_u[r],n[_u[r]]);return i.t=t,i},K1=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},vu={left:0,top:0},k0=function(t,e,n,i,r,o,a,l,c,h,d,f,u,p){Jn(t)&&(t=t(l)),Ci(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?pu("0"+t.substr(3),n):0));var v=u?u.time():0,m,g,x;if(u&&u.seek(0),isNaN(t)||(t=+t),dl(t))u&&(t=Ft.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&mu(a,n,i,!0);else{Jn(e)&&(e=e(l));var b=(t||"0").split(" "),y,T,w,_;x=ni(e,l)||be,y=Os(x)||{},(!y||!y.left&&!y.top)&&Vi(x).display==="none"&&(_=x.style.display,x.style.display="block",y=Os(x),_?x.style.display=_:x.style.removeProperty("display")),T=pu(b[0],y[i.d]),w=pu(b[1]||"0",n),t=y[i.p]-c[i.p]-h+T+r-w,a&&mu(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var S=t+n,R=o._isStart;m="scroll"+i.d2,mu(o,S,i,R&&S>20||!R&&(d?Math.max(be[m],Ri[m]):o.parentNode[m])<=S+1),d&&(c=Os(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+mn))}return u&&x&&(m=Os(x),u.seek(f),g=Os(x),u._caScrollDist=m[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(v),u?t:Math.round(t)},Q1=/(webkit|moz|length|cssText|inset)/i,V0=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===be){t._stOrig=r.cssText,a=Vi(t);for(o in a)!+o&&!Q1.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ft.core.getCache(t).uncache=1,e.appendChild(t)}},l_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},fu=function(t,e,n){var i={};i[e.p]="+="+n,Ft.set(t,i)},G0=function(t,e){var n=Fs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,p={};c=c||n();var v=l_(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return v(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){te.cache++,o.tween&&Bs()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Ft.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Mn(t,"wheel",n.wheelHandler),ee.isTouch&&Mn(t,"touchmove",n.wheelHandler),r},ee=(function(){function s(e,n){Wo||s.register(Ft)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ep(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ul){this.update=this.refresh=this.kill=hs;return}n=F0(Ci(n)||dl(n)||n.nodeType?{trigger:n}:n,cu);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,p=r.pinSpacing,v=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,x=r.onSnapComplete,b=r.once,y=r.snap,T=r.pinReparent,w=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,R=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?qn:an,D=!d&&d!==0,N=ni(n.scroller||se),G=Ft.core.getCache(N),I=qr(N),W=("pinType"in n?n.pinType:Us(N,"pinType")||I&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=D&&n.toggleActions.split(" "),rt="markers"in n?n.markers:cu.markers,X=I?0:parseFloat(Vi(N)["border"+C.p2+Zo])||0,P=this,ot=n.onRefreshInit&&function(){return n.onRefreshInit(P)},wt=G1(N,I,C),kt=H1(N,I),K=0,gt=0,xt=0,Et=Fs(N,C),pt,Lt,ue,Ct,Ht,Dt,Nt,Kt,oe,Q,$t,Ae,ae,Qt,ne,Te,z,le,yt,k,F,st,Z,ht,A,M,B,tt,J,dt,ut,H,it,ft,L,nt,et,vt,_t;if(P._startClamp=P._endClamp=!1,P._dir=C,m*=45,P.scroller=N,P.scroll=_?_.time.bind(_):Et,Ct=Et(),pr&&Et.rec==null&&(Et.rec=Ct),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(q0=1,n.refreshPriority===-9999&&(yl=P)),G.tweenScroll=G.tweenScroll||{top:G0(N,an),left:G0(N,qn)},P.tweenTo=pt=G.tweenScroll[C.p],P.scrubDuration=function(at){it=dl(at)&&at,it?H?H.duration(at):H=Ft.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:it,paused:!0,onComplete:function(){return g&&g(P)}}):(H&&H.progress(1).kill(),H=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),dt=0,l||(l=i.vars.id)),y&&((!Vr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in be.style&&Ft.set(I?[be,Ri]:N,{scrollBehavior:"auto"}),te.forEach(function(at){return Jn(at)&&at.target===(I?we.scrollingElement||Ri:N)&&(at.smooth=!1)}),ue=Jn(y.snapTo)?y.snapTo:y.snapTo==="labels"?X1(i):y.snapTo==="labelsDirectional"?q1(i):y.directional!==!1?function(at,bt){return fp(y.snapTo)(at,Zn()-gt<500?0:bt.direction)}:Ft.utils.snap(y.snapTo),ft=y.duration||{min:.1,max:2},ft=Vr(ft)?ml(ft.min,ft.max):ml(ft,ft),L=Ft.delayedCall(y.delay||it/2||.1,function(){var at=Et(),bt=Zn()-gt<500,lt=pt.tween;if((bt||Math.abs(P.getVelocity())<10)&&!lt&&!Mu&&K!==at){var Pt=(at-Dt)/Qt,ce=i&&!D?i.totalProgress():Pt,Zt=bt?0:(ce-ut)/(Zn()-hl)*1e3||0,Fe=Ft.utils.clamp(-Pt,1-Pt,Go(Zt/2)*Zt/.185),en=Pt+(y.inertia===!1?0:Fe),Ue,Ce,ye=y,cn=ye.onStart,Re=ye.onInterrupt,Ln=ye.onComplete;if(Ue=ue(en,P),dl(Ue)||(Ue=en),Ce=Math.max(0,Math.round(Dt+Ue*Qt)),at<=Nt&&at>=Dt&&Ce!==at){if(lt&&!lt._initted&&lt.data<=Go(Ce-at))return;y.inertia===!1&&(Fe=Ue-Pt),pt(Ce,{duration:ft(Go(Math.max(Go(en-ce),Go(Ue-ce))*.185/Zt/.05||0)),ease:y.ease||"power3",data:Go(Ce-at),onInterrupt:function(){return L.restart(!0)&&Re&&Vo(P,Re)},onComplete:function(){P.update(),K=Et(),i&&!D&&(H?H.resetTo("totalProgress",Ue,i._tTime/i._tDur):i.progress(Ue)),dt=ut=i&&!D?i.totalProgress():P.progress,x&&x(P),Ln&&Vo(P,Ln)}},at,Fe*Qt,Ce-at-Fe*Qt),cn&&Vo(P,cn,pt.tween)}}else P.isActive&&K!==at&&L.restart(!0)}).pause()),l&&(ip[l]=P),f=P.trigger=ni(f||u!==!0&&u),_t=f&&f._gsap&&f._gsap.stRevert,_t&&(_t=_t(P)),u=u===!0?f:ni(u),Ci(a)&&(a={targets:f,className:a}),u&&(p===!1||p===ki||(p=!p&&u.parentNode&&u.parentNode.style&&Vi(u.parentNode).display==="flex"?!1:ln),P.pin=u,Lt=Ft.core.getCache(u),Lt.spacer?ne=Lt.pinState:(w&&(w=ni(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Lt.spacerIsNative=!!w,w&&(Lt.spacerState=uu(w))),Lt.spacer=le=w||we.createElement("div"),le.classList.add("pin-spacer"),l&&le.classList.add("pin-spacer-"+l),Lt.pinState=ne=uu(u)),n.force3D!==!1&&Ft.set(u,{force3D:!0}),P.spacer=le=Lt.spacer,J=Vi(u),ht=J[p+C.os2],k=Ft.getProperty(u),F=Ft.quickSetter(u,C.a,mn),Kd(u,le,J),z=uu(u)),rt){Ae=Vr(rt)?F0(rt,U0):U0,Q=hu("scroller-start",l,N,C,Ae,0),$t=hu("scroller-end",l,N,C,Ae,0,Q),yt=Q["offset"+C.op.d2];var St=ni(Us(N,"content")||N);Kt=this.markerStart=hu("start",l,St,C,Ae,yt,0,_),oe=this.markerEnd=hu("end",l,St,C,Ae,yt,0,_),_&&(vt=Ft.quickSetter([Kt,oe],C.a,mn)),!W&&!(Ki.length&&Us(N,"fixedMarkers")===!0)&&(W1(I?be:N),Ft.set([Q,$t],{force3D:!0}),M=Ft.quickSetter(Q,C.a,mn),tt=Ft.quickSetter($t,C.a,mn))}if(_){var mt=_.vars.onUpdate,Mt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){P.update(0,0,1),mt&&mt.apply(_,Mt||[])})}if(P.previous=function(){return ie[ie.indexOf(P)-1]},P.next=function(){return ie[ie.indexOf(P)+1]},P.revert=function(at,bt){if(!bt)return P.kill(!0);var lt=at!==!1||!P.enabled,Pt=Yn;lt!==P.isReverted&&(lt&&(nt=Math.max(Et(),P.scroll.rec||0),xt=P.progress,et=i&&i.progress()),Kt&&[Kt,oe,Q,$t].forEach(function(ce){return ce.style.display=lt?"none":"block"}),lt&&(Yn=P,P.update(lt)),u&&(!T||!P.isActive)&&(lt?J1(u,le,ne):Kd(u,le,Vi(u),A)),lt||P.update(lt),Yn=Pt,P.isReverted=lt)},P.refresh=function(at,bt,lt,Pt){if(!((Yn||!P.enabled)&&!bt)){if(u&&at&&Gi){Mn(s,"scrollEnd",i_);return}!ri&&ot&&ot(P),Yn=P,pt.tween&&!lt&&(pt.tween.kill(),pt.tween=0),H&&H.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(q){return q.vars.immediateRender&&q.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ce=wt(),Zt=kt(),Fe=_?_.duration():us(N,C),en=Qt<=.01||!Qt,Ue=0,Ce=Pt||0,ye=Vr(lt)?lt.end:n.end,cn=n.endTrigger||f,Re=Vr(lt)?lt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Ln=P.pinnedContainer=n.pinnedContainer&&ni(n.pinnedContainer,P),mi=f&&Math.max(0,ie.indexOf(P))||0,Ye=mi,nn,hn,gi,$r,un,Ze,Pi,Jo,Al,ks,E,O,j;for(rt&&Vr(lt)&&(O=Ft.getProperty(Q,C.p),j=Ft.getProperty($t,C.p));Ye-- >0;)Ze=ie[Ye],Ze.end||Ze.refresh(0,1)||(Yn=P),Pi=Ze.pin,Pi&&(Pi===f||Pi===u||Pi===Ln)&&!Ze.isReverted&&(ks||(ks=[]),ks.unshift(Ze),Ze.revert(!0,!0)),Ze!==ie[Ye]&&(mi--,Ye--);for(Jn(Re)&&(Re=Re(P)),Re=I0(Re,"start",P),Dt=k0(Re,f,ce,C,Et(),Kt,Q,P,Zt,X,W,Fe,_,P._startClamp&&"_startClamp")||(u?-.001:0),Jn(ye)&&(ye=ye(P)),Ci(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(Ci(Re)?Re.split(" ")[0]:"")+ye:(Ue=pu(ye.substr(2),ce),ye=Ci(Re)?Re:(_?Ft.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Dt):Dt)+Ue,cn=f)),ye=I0(ye,"end",P),Nt=Math.max(Dt,k0(ye||(cn?"100% 0":Fe),cn,ce,C,Et()+Ue,oe,$t,P,Zt,X,W,Fe,_,P._endClamp&&"_endClamp"))||-.001,Ue=0,Ye=mi;Ye--;)Ze=ie[Ye]||{},Pi=Ze.pin,Pi&&Ze.start-Ze._pinPush<=Dt&&!_&&Ze.end>0&&(nn=Ze.end-(P._startClamp?Math.max(0,Ze.start):Ze.start),(Pi===f&&Ze.start-Ze._pinPush<Dt||Pi===Ln)&&isNaN(Re)&&(Ue+=nn*(1-Ze.progress)),Pi===u&&(Ce+=nn));if(Dt+=Ue,Nt+=Ue,P._startClamp&&(P._startClamp+=Ue),P._endClamp&&!ri&&(P._endClamp=Nt||-.001,Nt=Math.min(Nt,us(N,C))),Qt=Nt-Dt||(Dt-=.01)&&.001,en&&(xt=Ft.utils.clamp(0,1,Ft.utils.normalize(Dt,Nt,nt))),P._pinPush=Ce,Kt&&Ue&&(nn={},nn[C.a]="+="+Ue,Ln&&(nn[C.p]="-="+Et()),Ft.set([Kt,oe],nn)),u&&!(np&&P.end>=us(N,C)))nn=Vi(u),$r=C===an,gi=Et(),st=parseFloat(k(C.a))+Ce,!Fe&&Nt>1&&(E=(I?we.scrollingElement||Ri:N).style,E={style:E,value:E["overflow"+C.a.toUpperCase()]},I&&Vi(be)["overflow"+C.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+C.a.toUpperCase()]="scroll")),Kd(u,le,nn),z=uu(u),hn=Os(u,!0),Jo=W&&Fs(N,$r?qn:an)(),p?(A=[p+C.os2,Qt+Ce+mn],A.t=le,Ye=p===ln?yu(u,C)+Qt+Ce:0,Ye&&(A.push(C.d,Ye+mn),le.style.flexBasis!=="auto"&&(le.style.flexBasis=Ye+mn)),Yo(A),Ln&&ie.forEach(function(q){q.pin===Ln&&q.vars.pinSpacing!==!1&&(q._subPinOffset=!0)}),W&&Et(nt)):(Ye=yu(u,C),Ye&&le.style.flexBasis!=="auto"&&(le.style.flexBasis=Ye+mn)),W&&(un={top:hn.top+($r?gi-Dt:Jo)+mn,left:hn.left+($r?Jo:gi-Dt)+mn,boxSizing:"border-box",position:"fixed"},un[Hr]=un["max"+Zo]=Math.ceil(hn.width)+mn,un[Wr]=un["max"+up]=Math.ceil(hn.height)+mn,un[ki]=un[ki+vl]=un[ki+gl]=un[ki+xl]=un[ki+_l]="0",un[ln]=nn[ln],un[ln+vl]=nn[ln+vl],un[ln+gl]=nn[ln+gl],un[ln+xl]=nn[ln+xl],un[ln+_l]=nn[ln+_l],Te=K1(ne,un,T),ri&&Et(0)),i?(Al=i._initted,Yd(1),i.render(i.duration(),!0,!0),Z=k(C.a)-st+Qt+Ce,B=Math.abs(Qt-Z)>1,W&&B&&Te.splice(Te.length-2,2),i.render(0,!0,!0),Al||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yd(0)):Z=Qt,E&&(E.value?E.style["overflow"+C.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+C.a));else if(f&&Et()&&!_)for(hn=f.parentNode;hn&&hn!==be;)hn._pinOffset&&(Dt-=hn._pinOffset,Nt-=hn._pinOffset),hn=hn.parentNode;ks&&ks.forEach(function(q){return q.revert(!1,!0)}),P.start=Dt,P.end=Nt,Ct=Ht=ri?nt:Et(),!_&&!ri&&!pr&&(Ct<nt&&Et(nt),P.scroll.rec=0),P.revert(!1,!0),gt=Zn(),L&&(K=-1,L.restart(!0)),Yn=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(en||xt!==P.progress||_||v||i&&!i._initted)&&(i&&!D&&(i._initted||xt||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Dt<-.001&&!xt?Ft.utils.normalize(Dt,Nt,0):xt,!0),P.progress=en||(Ct-Dt)/Qt===xt?0:xt),u&&p&&(le._pinOffset=Math.round(P.progress*Z)),H&&H.invalidate(),isNaN(O)||(O-=Ft.getProperty(Q,C.p),j-=Ft.getProperty($t,C.p),fu(Q,C,O),fu(Kt,C,O-(Pt||0)),fu($t,C,j),fu(oe,C,j-(Pt||0))),en&&!ri&&P.update(),h&&!ri&&!ae&&(ae=!0,h(P),ae=!1)}},P.getVelocity=function(){return(Et()-Ht)/(Zn()-hl)*1e3||0},P.endAnimation=function(){cl(P.callbackAnimation),i&&(H?H.progress(1):i.paused()?D||cl(i,P.direction<0,1):cl(i,i.reversed()))},P.labelToScroll=function(at){return i&&i.labels&&(Dt||P.refresh()||Dt)+i.labels[at]/i.duration()*Qt||0},P.getTrailing=function(at){var bt=ie.indexOf(P),lt=P.direction>0?ie.slice(0,bt).reverse():ie.slice(bt+1);return(Ci(at)?lt.filter(function(Pt){return Pt.vars.preventOverlaps===at}):lt).filter(function(Pt){return P.direction>0?Pt.end<=Dt:Pt.start>=Nt})},P.update=function(at,bt,lt){if(!(_&&!lt&&!at)){var Pt=ri===!0?nt:P.scroll(),ce=at?0:(Pt-Dt)/Qt,Zt=ce<0?0:ce>1?1:ce||0,Fe=P.progress,en,Ue,Ce,ye,cn,Re,Ln,mi;if(bt&&(Ht=Ct,Ct=_?Et():Pt,y&&(ut=dt,dt=i&&!D?i.totalProgress():Zt)),m&&u&&!Yn&&!ru&&Gi&&(!Zt&&Dt<Pt+(Pt-Ht)/(Zn()-hl)*m?Zt=1e-4:Zt===1&&Nt>Pt+(Pt-Ht)/(Zn()-hl)*m&&(Zt=.9999)),Zt!==Fe&&P.enabled){if(en=P.isActive=!!Zt&&Zt<1,Ue=!!Fe&&Fe<1,Re=en!==Ue,cn=Re||!!Zt!=!!Fe,P.direction=Zt>Fe?1:-1,P.progress=Zt,cn&&!Yn&&(Ce=Zt&&!Fe?0:Zt===1?1:Fe===1?2:3,D&&(ye=!Re&&V[Ce+1]!=="none"&&V[Ce+1]||V[Ce],mi=i&&(ye==="complete"||ye==="reset"||ye in i))),R&&(Re||mi)&&(mi||d||!i)&&(Jn(R)?R(P):P.getTrailing(R).forEach(function(gi){return gi.endAnimation()})),D||(H&&!Yn&&!ru?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",Zt,i._tTime/i._tDur):(H.vars.totalProgress=Zt,H.invalidate().restart())):i&&i.totalProgress(Zt,!!(Yn&&(gt||at)))),u){if(at&&p&&(le.style[p+C.os2]=ht),!W)F(fl(st+Z*Zt));else if(cn){if(Ln=!at&&Zt>Fe&&Nt+1>Pt&&Pt+1>=us(N,C),T)if(!at&&(en||Ln)){var Ye=Os(u,!0),nn=Pt-Dt;V0(u,be,Ye.top+(C===an?nn:0)+mn,Ye.left+(C===an?0:nn)+mn)}else V0(u,le);Yo(en||Ln?Te:z),B&&Zt<1&&en||F(st+(Zt===1&&!Ln?Z:0))}}y&&!pt.tween&&!Yn&&!ru&&L.restart(!0),a&&(Re||b&&Zt&&(Zt<1||!Zd))&&Sl(a.targets).forEach(function(gi){return gi.classList[en||b?"add":"remove"](a.className)}),o&&!D&&!at&&o(P),cn&&!Yn?(D&&(mi&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),o&&o(P)),(Re||!Zd)&&(c&&Re&&Vo(P,c),Y[Ce]&&Vo(P,Y[Ce]),b&&(Zt===1?P.kill(!1,1):Y[Ce]=0),Re||(Ce=Zt===1?1:3,Y[Ce]&&Vo(P,Y[Ce]))),S&&!en&&Math.abs(P.getVelocity())>(dl(S)?S:2500)&&(cl(P.callbackAnimation),H?H.progress(1):cl(i,ye==="reverse"?1:!Zt,1))):D&&o&&!Yn&&o(P)}if(tt){var hn=_?Pt/_.duration()*(_._caScrollDist||0):Pt;M(hn+(Q._isFlipped?1:0)),tt(hn)}vt&&vt(-Pt/_.duration()*(_._caScrollDist||0))}},P.enable=function(at,bt){P.enabled||(P.enabled=!0,Mn(N,"resize",pl),I||Mn(N,"scroll",Ho),ot&&Mn(s,"refreshInit",ot),at!==!1&&(P.progress=xt=0,Ct=Ht=K=Et()),bt!==!1&&P.refresh())},P.getTween=function(at){return at&&pt?pt.tween:H},P.setPositions=function(at,bt,lt,Pt){if(_){var ce=_.scrollTrigger,Zt=_.duration(),Fe=ce.end-ce.start;at=ce.start+Fe*at/Zt,bt=ce.start+Fe*bt/Zt}P.refresh(!1,!1,{start:D0(at,lt&&!!P._startClamp),end:D0(bt,lt&&!!P._endClamp)},Pt),P.update()},P.adjustPinSpacing=function(at){if(A&&at){var bt=A.indexOf(C.d)+1;A[bt]=parseFloat(A[bt])+at+mn,A[1]=parseFloat(A[1])+at+mn,Yo(A)}},P.disable=function(at,bt){if(at!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,bt||H&&H.pause(),nt=0,Lt&&(Lt.uncache=1),ot&&Sn(s,"refreshInit",ot),L&&(L.pause(),pt.tween&&pt.tween.kill()&&(pt.tween=0)),!I)){for(var lt=ie.length;lt--;)if(ie[lt].scroller===N&&ie[lt]!==P)return;Sn(N,"resize",pl),I||Sn(N,"scroll",Ho)}},P.kill=function(at,bt){P.disable(at,bt),H&&!bt&&H.kill(),l&&delete ip[l];var lt=ie.indexOf(P);lt>=0&&ie.splice(lt,1),lt===si&&gu>0&&si--,lt=0,ie.forEach(function(Pt){return Pt.scroller===P.scroller&&(lt=1)}),lt||ri||pr||(P.scroll.rec=0),i&&(i.scrollTrigger=null,at&&i.revert({kill:!1}),bt||i.kill()),Kt&&[Kt,oe,Q,$t].forEach(function(Pt){return Pt.parentNode&&Pt.parentNode.removeChild(Pt)}),yl===P&&(yl=0),u&&(Lt&&(Lt.uncache=1),lt=0,ie.forEach(function(Pt){return Pt.pin===u&&lt++}),lt||(Lt.spacer=0)),n.onKill&&n.onKill(P)},ie.push(P),P.enable(!1,!1),_t&&_t(P),i&&i.add&&!Qt){var ct=P.update;P.update=function(){P.update=ct,te.cache++,Dt||Nt||P.refresh()},Ft.delayedCall(.01,P.update),Qt=.01,Dt=Nt=0}else P.refresh();u&&Z1()},s.register=function(n){return Wo||(Ft=n||K0(),$0()&&window.document&&s.enable(),Wo=ul),Wo},s.defaults=function(n){if(n)for(var i in n)cu[i]=n[i];return cu},s.disable=function(n,i){ul=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),Sn(se,"wheel",Ho),Sn(we,"scroll",Ho),clearInterval(su),Sn(we,"touchcancel",hs),Sn(be,"touchstart",hs),au(Sn,we,"pointerdown,touchstart,mousedown",L0),au(Sn,we,"pointerup,touchend,mouseup",N0),xu.kill(),ou(Sn);for(var r=0;r<te.length;r+=3)lu(Sn,te[r],te[r+1]),lu(Sn,te[r],te[r+2])},s.enable=function(){if(se=window,we=document,Ri=we.documentElement,be=we.body,Ft){if(Sl=Ft.utils.toArray,ml=Ft.utils.clamp,ep=Ft.core.context||hs,Yd=Ft.core.suppressOverwrites||hs,ap=se.history.scrollRestoration||"auto",sp=se.pageYOffset||0,Ft.core.globals("ScrollTrigger",s),be){ul=1,qo=document.createElement("div"),qo.style.height="100vh",qo.style.position="absolute",a_(),V1(),Ke.register(Ft),s.isTouch=Ke.isTouch,dr=Ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tp=Ke.isTouch===1,Mn(se,"wheel",Ho),op=[se,we,Ri,be],Ft.matchMedia?(s.matchMedia=function(h){var d=Ft.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Ft.addEventListener("matchMediaInit",function(){r_(),dp()}),Ft.addEventListener("matchMediaRevert",function(){return s_()}),Ft.addEventListener("matchMedia",function(){Gr(0,1),Zr("matchMedia")}),Ft.matchMedia().add("(orientation: portrait)",function(){return $d(),$d})):console.warn("Requires GSAP 3.11.0 or later"),$d(),Mn(we,"scroll",Ho);var n=be.hasAttribute("style"),i=be.style,r=i.borderTopStyle,o=Ft.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Os(be),an.m=Math.round(a.top+an.sc())||0,qn.m=Math.round(a.left+qn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),su=setInterval(O0,250),Ft.delayedCall(.5,function(){return ru=0}),Mn(we,"touchcancel",hs),Mn(be,"touchstart",hs),au(Mn,we,"pointerdown,touchstart,mousedown",L0),au(Mn,we,"pointerup,touchend,mouseup",N0),jd=Ft.utils.checkPrefix("transform"),_u.push(jd),Wo=Zn(),xu=Ft.delayedCall(.2,Gr).pause(),Xo=[we,"visibilitychange",function(){var h=se.innerWidth,d=se.innerHeight;we.hidden?(R0=h,P0=d):(R0!==h||P0!==d)&&pl()},we,"DOMContentLoaded",Gr,se,"load",Gr,se,"resize",pl],ou(Mn),ie.forEach(function(h){return h.enable(0,1)}),l=0;l<te.length;l+=3)lu(Sn,te[l],te[l+1]),lu(Sn,te[l],te[l+2])}else if(we){var c=function h(){s.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Zd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(su)||(su=i)&&setInterval(O0,i),"ignoreMobileResize"in n&&(tp=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ou(Sn)||ou(Mn,n.autoRefreshEvents||"none"),Y0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=ni(n),o=te.indexOf(r),a=qr(r);~o&&te.splice(o,a?6:2),i&&(a?Ki.unshift(se,i,be,i,Ri,i):Ki.unshift(r,i))},s.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Ci(n)?ni(n):n).getBoundingClientRect(),a=o[r?Hr:Wr]*i||0;return r?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},s.positionInViewport=function(n,i,r){Ci(n)&&(n=ni(n));var o=n.getBoundingClientRect(),a=o[r?Hr:Wr],l=i==null?a/2:i in Su?Su[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},s.killAll=function(n){if(ie.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Yr.killAll||[];Yr={},i.forEach(function(r){return r()})}},s})();ee.version="3.15.1";ee.saveStyles=function(s){return s?Sl(s).forEach(function(t){if(t&&t.style){var e=Ai.indexOf(t);e>=0&&Ai.splice(e,5),Ai.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ft.core.getCache(t),ep())}}):Ai};ee.revert=function(s,t){return dp(!s,t)};ee.create=function(s,t){return new ee(s,t)};ee.refresh=function(s){return s?pl(!0):(Wo||ee.register())&&Gr(!0)};ee.update=function(s){return++te.cache&&Bs(s===!0?2:0)};ee.clearScrollMemory=o_;ee.maxScroll=function(s,t){return us(s,t?qn:an)};ee.getScrollFunc=function(s,t){return Fs(ni(s),t?qn:an)};ee.getById=function(s){return ip[s]};ee.getAll=function(){return ie.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ee.isScrolling=function(){return!!Gi};ee.snapDirectional=fp;ee.addEventListener=function(s,t){var e=Yr[s]||(Yr[s]=[]);~e.indexOf(t)||e.push(t)};ee.removeEventListener=function(s,t){var e=Yr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ee.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Ft.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Jn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Jn(r)&&(r=r(),Mn(ee,"refresh",function(){return r=t.batchMax()})),Sl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ee.create(c))}),e};var H0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Qd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ke.isTouch?" pinch-zoom":""):"none",t===Ri&&s(be,e)},du={auto:1,scroll:1},j1=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ft.core.getCache(r),a=Zn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==be&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(du[(l=Vi(r)).overflowY]||du[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!qr(r)&&(du[(l=Vi(r)).overflowY]||du[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},c_=function(t,e,n,i){return Ke.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&j1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Mn(we,Ke.eventTypes[0],X0,!1,!0)},onDisable:function(){return Sn(we,Ke.eventTypes[0],X0,!0)}})},tw=/(input|label|select|textarea)/i,W0,X0=function(t){var e=tw.test(t.target.tagName);(e||W0)&&(t._gsapAllow=!0,W0=e)},ew=function(t){Vr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=ni(t.target)||Ri,h=Ft.core.globals().ScrollSmoother,d=h&&h.get(),f=dr&&(t.content&&ni(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Fs(c,an),p=Fs(c,qn),v=1,m=(Ke.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,g=0,x=Jn(i)?function(){return i(a)}:function(){return i||2.8},b,y,T=c_(c,t.type,!0,r),w=function(){return y=!1},_=hs,S=hs,R=function(){l=us(c,an),S=ml(dr?1:0,l),n&&(_=ml(0,us(c,qn))),b=Xr},C=function(){f._gsap.y=fl(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var rt=fl(a.deltaY/2),X=S(u.v-rt);if(f&&X!==u.v+u.offset){u.offset=X-u.v;var P=fl((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",u.cacheID=te.cache,Bs()}return!0}u.offset&&C(),y=!0},N,G,I,W,Y=function(){R(),N.isActive()&&N.vars.scrollY>l&&(u()>l?N.progress(1)&&u(l):N.resetTo("scrollY",l))};return f&&Ft.set(f,{y:"+=0"}),t.ignoreCheck=function(V){return dr&&V.type==="touchmove"&&D(V)||v>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){y=!1;var V=v;v=fl((se.visualViewport&&se.visualViewport.scale||1)/m),N.pause(),V!==v&&Qd(c,v>1.01?!0:n?!1:"x"),G=p(),I=u(),R(),b=Xr},t.onRelease=t.onGestureStart=function(V,rt){if(u.offset&&C(),!rt)W.restart(!0);else{te.cache++;var X=x(),P,ot;n&&(P=p(),ot=P+X*.05*-V.velocityX/.227,X*=H0(p,P,ot,us(c,qn)),N.vars.scrollX=_(ot)),P=u(),ot=P+X*.05*-V.velocityY/.227,X*=H0(u,P,ot,us(c,an)),N.vars.scrollY=S(ot),N.invalidate().duration(X).play(.01),(dr&&N.vars.scrollY>=l||P>=l-1)&&Ft.to({},{onUpdate:Y,duration:X})}o&&o(V)},t.onWheel=function(){N._ts&&N.pause(),Zn()-g>1e3&&(b=0,g=Zn())},t.onChange=function(V,rt,X,P,ot){if(Xr!==b&&R(),rt&&n&&p(_(P[2]===rt?G+(V.startX-V.x):p()+rt-P[1])),X){u.offset&&C();var wt=ot[2]===X,kt=wt?I+V.startY-V.y:u()+X-ot[1],K=S(kt);wt&&kt!==K&&(I+=K-kt),u(K)}(X||rt)&&Bs()},t.onEnable=function(){Qd(c,n?!1:"x"),ee.addEventListener("refresh",Y),Mn(se,"resize",Y),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){Qd(c,!0),Sn(se,"resize",Y),ee.removeEventListener("refresh",Y),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ke(t),a.iOS=dr,dr&&!u()&&u(1),dr&&Ft.ticker.add(hs),W=a._dc,N=Ft.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:l_(u,u(),function(){return N.pause()})},onUpdate:Bs,onComplete:W.vars.onComplete}),a};ee.sort=function(s){if(Jn(s))return ie.sort(s);var t=se.pageYOffset||0;return ee.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),ie.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ee.observe=function(s){return new Ke(s)};ee.normalizeScroll=function(s){if(typeof s>"u")return ii;if(s===!0&&ii)return ii.enable();if(s===!1){ii&&ii.kill(),ii=s;return}var t=s instanceof Ke?s:ew(s);return ii&&ii.target===t.target&&ii.kill(),qr(t.target)&&(ii=t),t};ee.core={_getVelocityProp:iu,_inputObserver:c_,_scrollers:te,_proxies:Ki,bridge:{ss:function(){Gi||Zr("scrollStart"),Gi=Zn()},ref:function(){return Yn}}};K0()&&Ft.registerPlugin(ee);var h_="1.3.27";function d_(s,t,e){return Math.max(s,Math.min(t,e))}function nw(s,t,e){return(1-e)*s+e*t}function iw(s,t,e,n){return nw(s,t,1-Math.exp(-e*n))}function sw(s,t){return(s%t+t)%t}var rw=class{constructor(){Gt(this,"isRunning",!1);Gt(this,"value",0);Gt(this,"from",0);Gt(this,"to",0);Gt(this,"currentTime",0);Gt(this,"lerp");Gt(this,"duration");Gt(this,"easing");Gt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=d_(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iw(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function ow(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var aw=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Gt(this,"width",0);Gt(this,"height",0);Gt(this,"scrollHeight",0);Gt(this,"scrollWidth",0);Gt(this,"debouncedResize");Gt(this,"wrapperResizeObserver");Gt(this,"contentResizeObserver");Gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=ow(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},p_=class{constructor(){Gt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},lw=100/6,mr={passive:!1};function u_(s,t){return s===1?lw:s===2?t:1}var cw=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Gt(this,"touchStart",{x:0,y:0});Gt(this,"lastDelta",{x:0,y:0});Gt(this,"window",{width:0,height:0});Gt(this,"emitter",new p_);Gt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Gt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Gt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Gt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=u_(n,this.window.width),r=u_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,mr),this.element.addEventListener("touchstart",this.onTouchStart,mr),this.element.addEventListener("touchmove",this.onTouchMove,mr),this.element.addEventListener("touchend",this.onTouchEnd,mr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,mr),this.element.removeEventListener("touchstart",this.onTouchStart,mr),this.element.removeEventListener("touchmove",this.onTouchMove,mr),this.element.removeEventListener("touchend",this.onTouchEnd,mr)}},f_=s=>Math.min(1,1.001-2**(-10*s)),m_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:v=!0,prevent:m,virtualScroll:g,overscroll:x=!0,autoRaf:b=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:R=!1,respectReducedMotion:C=!0}={}){Gt(this,"_isScrolling",!1);Gt(this,"_isStopped",!1);Gt(this,"_isLocked",!1);Gt(this,"_preventNextNativeScrollEvent",!1);Gt(this,"_resetVelocityTimeout",null);Gt(this,"_rafId",null);Gt(this,"_isDraggingSelection",!1);Gt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Gt(this,"isTouching");Gt(this,"isIos");Gt(this,"time",0);Gt(this,"userData",{});Gt(this,"lastVelocity",0);Gt(this,"velocity",0);Gt(this,"direction",0);Gt(this,"options");Gt(this,"targetScroll");Gt(this,"animatedScroll");Gt(this,"animate",new rw);Gt(this,"emitter",new p_);Gt(this,"dimensions");Gt(this,"virtualScroll");Gt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Gt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Gt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Gt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=h_,window.lenis||(window.lenis={}),window.lenis.version=h_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=f_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:p,autoResize:v,prevent:m,virtualScroll:g,overscroll:x,autoRaf:b,anchors:y,autoToggle:T,allowNestedScroll:w,naiveDimensions:S,stopInertiaOnNavigate:R,respectReducedMotion:C},this.dimensions=new aw(s,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new cw(e,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let v=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);f=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=d_(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=f_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),v||this.emit(),v&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,p;if(n-(i.time??0)>2e3){i.time=Date.now();let w=window.getComputedStyle(s);if(i.computedStyle=w,r=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=d>u,l=f>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let v=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,x,b,y,T;if(v==="horizontal")m=Math.round(s.scrollLeft),g=d-u,x=t,b=r,y=a,T=c;else if(v==="vertical")m=Math.round(s.scrollTop),g=f-p,x=e,b=o,y=l,T=h;else return!1;return!T&&(m>=g||m<=0)?!0:(x>0?m<g:m>0)&&b&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?sw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var bl=new U;function Hi(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;bl.copy(t),bl[n]=0,bl.normalize();let c=.5*o/(o+a),h=1-bl.angleTo(s)/l;return Math.sign(bl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var bu=class s extends kn{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,v=new U,m=.5/o;for(let g=0,x=0;g<d.length;g+=3,x+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),u[x+0]=Hi(v,c,"z","y",r,n),u[x+1]=1-Hi(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),u[x+0]=1-Hi(v,c,"z","y",r,n),u[x+1]=1-Hi(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),u[x+0]=1-Hi(v,c,"x","z",r,t),u[x+1]=Hi(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[x+0]=1-Hi(v,c,"x","z",r,t),u[x+1]=1-Hi(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[x+0]=1-Hi(v,c,"x","y",r,t),u[x+1]=1-Hi(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),u[x+0]=Hi(v,c,"x","y",r,t),u[x+1]=1-Hi(v,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var g_=new Xt("#B4412A"),hw=`
float msHash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float msNoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(msHash(i + vec3(0,0,0)), msHash(i + vec3(1,0,0)), f.x),
                 mix(msHash(i + vec3(0,1,0)), msHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(msHash(i + vec3(0,0,1)), msHash(i + vec3(1,0,1)), f.x),
                 mix(msHash(i + vec3(0,1,1)), msHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float msFbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++) { s += a * msNoise(p); p *= 2.03; a *= 0.5; } return s; }
`;function Jr(s={}){let t=new ve({color:16777215,roughness:1,metalness:0}),e={uFronte:{value:0},uAsse:{value:(s.asse||new U(0,1,0)).clone().normalize()},uCorsa:{value:[s.da??0,s.a??1]},uVecchio:{value:new Xt(s.vecchio??"#8d8a83")},uNuovo:{value:new Xt(s.nuovo??"#eceeed")},uBordo:{value:g_.clone().multiplyScalar(3.2)},uMacchie:{value:s.macchie??.6},uRuvido:{value:[s.ruvidoVecchio??.95,s.ruvidoNuovo??.82]},uBicolore:{value:s.bicolore?1:0},uDissolvi:{value:s.dissolvi?1:0},uTrama:{value:s.trama??.04}};return t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMsPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 msW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          msW = instanceMatrix * msW;
        #endif
        vMsPos = (modelMatrix * msW).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vMsPos;
        uniform float uFronte; uniform vec3 uAsse; uniform vec2 uCorsa;
        uniform vec3 uVecchio; uniform vec3 uNuovo; uniform vec3 uBordo;
        uniform float uMacchie; uniform vec2 uRuvido; uniform float uBicolore;
        uniform float uDissolvi; uniform float uTrama;
        float msT; float msD;
        ${hw}`).replace("#include <color_fragment>",`#include <color_fragment>
        float msS = dot(vMsPos, uAsse);
        float msF = mix(uCorsa.x, uCorsa.y, uFronte);
        msD = msS - msF;
        float msN = msFbm(vMsPos * 1.7);
        // il fronte non \xE8 una riga perfetta: avanza con un bordo leggermente frastagliato
        float msDj = msD + (msN - 0.5) * 0.18;
        msT = 1.0 - smoothstep(-0.015, 0.015, msDj);
        if (uDissolvi > 0.5 && msT > 0.5) discard;
        // vecchio: colore spento, macchie d'umidit\xE0 e colature verso il basso
        float msMacchia = smoothstep(0.42, 0.78, msFbm(vMsPos * vec3(0.9, 0.35, 0.9) + 3.1));
        float msColata = smoothstep(0.55, 0.9, msNoise(vec3(vMsPos.x * 6.0, vMsPos.y * 0.6, vMsPos.z * 6.0)));
        vec3 msOld = uVecchio * (1.0 - uMacchie * (0.32 * msMacchia + 0.14 * msColata)) * (0.92 + 0.16 * msN);
        // nuovo: tinta pulita con una grana appena percettibile
        vec3 msNew = uNuovo;
        if (uBicolore > 0.5) {
          float y = vMsPos.y;
          float zoccolo = 1.0 - step(2.6, y);
          // fasce marcapiano all'altezza dei solai (ogni 3 m)
          float fascia = step(fract((y + 0.12) / 3.0) * 3.0, 0.32) * step(2.0, y);
          msNew = mix(vec3(0.93, 0.935, 0.925), vec3(0.47, 0.5, 0.51), max(zoccolo, fascia));
        }
        msNew *= 1.0 - uTrama + uTrama * 2.0 * msNoise(vMsPos * 38.0);
        diffuseColor.rgb = mix(msOld, msNew, msT);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(uRuvido.x, uRuvido.y, msT);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float msAttivo = step(0.0005, uFronte) * step(uFronte, 0.9995);
        float msLinea = exp(-abs(msDj) * 26.0) * msAttivo;
        totalEmissiveRadiance += uBordo * msLinea * (uDissolvi > 0.5 ? 1.6 : 1.0);`)},t.customProgramCacheKey=()=>"rinnovo",t}function wu(s={}){let t=new ve({color:s.colore??16777215,roughness:s.ruvido??.6,metalness:0}),e={uPosa:{value:0},uCaduta:{value:s.caduta??.7},uDurata:{value:s.durata??.18},uTogli:{value:s.togli?1:0},uVaria:{value:s.varia??.12},uBordo:{value:g_.clone().multiplyScalar(2.2)}};return t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        attribute float aRitardo; attribute float aTono;
        uniform float uPosa; uniform float uCaduta; uniform float uDurata; uniform float uTogli;
        varying float vMsQ; varying float vMsTono;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float q = clamp((uPosa - aRitardo * (1.0 - uDurata)) / uDurata, 0.0, 1.0);
        if (uTogli > 0.5) q = 1.0 - q;
        // discesa morbida con un piccolo assestamento finale ("si posa come un mattone")
        float e = 1.0 - pow(1.0 - q, 3.0);
        float rimbalzo = sin(q * 3.14159) * 0.06 * (1.0 - q);
        transformed *= max(e, 0.0001);
        transformed.y += (1.0 - e) * uCaduta + rimbalzo;
        vMsQ = q; vMsTono = aTono;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uVaria; uniform vec3 uBordo; uniform float uTogli;
        varying float vMsQ; varying float vMsTono;`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vMsQ < 0.002) discard;
        diffuseColor.rgb *= 1.0 + (vMsTono - 0.5) * uVaria * 2.0;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uBordo * smoothstep(0.0, 0.4, vMsQ) * (1.0 - smoothstep(0.55, 1.0, vMsQ)) * (1.0 - uTogli) * 0.9;`)},t.customProgramCacheKey=()=>"posa",t}function Tu(s){let t=new ve({color:1118481,roughness:.5,emissive:new Xt(s)}),e={uTraccia:{value:0},uLuce:{value:1}};return t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vMsL;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMsL = uv.x;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vMsL; uniform float uTraccia; uniform float uLuce;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (vMsL > uTraccia) discard;
        float testa = exp(-(uTraccia - vMsL) * 40.0);
        totalEmissiveRadiance *= (1.3 + testa * 5.0) * uLuce;`)},t.customProgramCacheKey=()=>"traccia",t}var re=[.3,3.3,6.3,9.3],Eu=2.7,qe=-6,je=6,ke=-3.5,bn=3.5,tn=.3,Qi=-1,wl=12,Ne={taglio:"#2a3238",solaio:"#b9bdbb",vecchioMuro:"#9c968b",nuovoMuro:["#eef0ee","#e9ece9","#f1f0ea"],bagnoNuovo:"#e4e8e6",vecchioEst:"#8a8780",pavVecchio:"#7f7c76",gres:"#c9cbc7",rovere:"#a8875f",piastrBagno:"#dfe4e2",coppoVecchio:"#6f5e52",coppoNuovo:"#a8553a",telaioVecchio:"#4b3a2c",telaioNuovo:"#30373c",vetro:"#9fb7c4",elettrico:"#F2B71D",idraulico:"#2E7CE0"};function oi(s,t,e,n,i,r,o,a=!0){let l=new Me(new kn(s,t,e),n);return l.position.set(i,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Ve(s,t,e,n,i,r,o,a=!0){return oi(t-s,n-e,r-i,o,(s+t)/2,(e+n)/2,(i+r)/2,a)}function Tl(s,t,e,n,i,r,o,a,l,c){let h=[],d=(p,v,m,g)=>{v-p<.001||g-m<.001||h.push(t==="x"?Ve(p,v,m,g,o,a,c):Ve(o,a,m,g,p,v,c))},f=[...l].sort((p,v)=>p.c-v.c),u=e;for(let p of f){let v=p.c-p.w/2,m=p.c+p.w/2;d(u,v,i,r),d(v,m,i,p.y0),d(v,m,p.y1,r),u=m}return d(u,n,i,r),h.forEach(p=>s.add(p)),h}function pi(s){let t=Math.sin(s*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function pp(s,t,e){let n=new pa(s,t,e.length),i=new on,r=new Float32Array(e.length),o=new Float32Array(e.length);return e.forEach((a,l)=>{i.position.copy(a.pos),i.quaternion.copy(a.q||new yn),i.scale.set(1,1,1),i.updateMatrix(),n.setMatrixAt(l,i.matrix),r[l]=a.ritardo,o[l]=a.tono??pi(l*3.1)}),s.setAttribute("aRitardo",new Zs(r,1)),s.setAttribute("aTono",new Zs(o,1)),n.receiveShadow=!0,n.frustumCulled=!1,n}function __(s,{leggera:t=!1}={}){let e={},n=new Tn;s.add(n);let i=new Me(new Ma(160,32,16),new Cn({side:Rn,depthWrite:!1,uniforms:{uSera:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uSera; varying vec3 vP;
        void main(){
          float h = clamp(vP.y * 1.6 + 0.08, 0.0, 1.0);
          vec3 basso = mix(vec3(0.88, 0.92, 0.94), vec3(1.0, 0.8, 0.6), uSera);
          vec3 alto = mix(vec3(0.42, 0.6, 0.82), vec3(0.34, 0.4, 0.62), uSera);
          vec3 c = mix(basso, alto, pow(h, 0.8));
          vec3 sole = normalize(mix(vec3(0.55, 0.45, 0.7), vec3(0.75, 0.12, 0.65), uSera));
          c += pow(max(dot(vP, sole), 0.0), 18.0) * mix(vec3(0.25, 0.22, 0.16), vec3(0.6, 0.3, 0.1), uSera);
          gl_FragColor = vec4(c * 1.05, 1.0);
        }`}));s.add(i),e.cielo=i,s.fog=new ha(new Xt("#dbe5ea"),50,150),e.fog=s.fog;let r=new wa("#dfe9f0","#a9a296",1.05);s.add(r),e.emi=r;let o=new Ca("#fff0da",3.4);o.position.set(16,24,20),o.target.position.set(0,5,0),o.castShadow=!0,o.shadow.mapSize.set(t?1024:2048,t?1024:2048);let a=o.shadow.camera;a.left=-18,a.right=18,a.top=18,a.bottom=-10,a.near=5,a.far=70,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.radius=4,s.add(o,o.target),e.sole=o;let l=new Me(new ws(320,320),new ve({color:"#b7b4aa",roughness:1}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,s.add(l);let c=Ve(-14,14,0,.14,3.5,7.2,new ve({color:"#cfccc4",roughness:.95}),!1),h=Ve(-14,14,0,.16,7.2,7.45,new ve({color:"#e2dfd8",roughness:.9}),!1),d=Ve(-60,60,0,.02,7.45,15.5,new ve({color:"#5d6266",roughness:.92}),!1);s.add(c,h,d);let f=new ve({color:"#e9e7e0",roughness:.8});for(let k=-58;k<60;k+=5)s.add(Ve(k,k+2.4,.02,.035,11.35,11.55,f,!1));let u=Ve(-14,14,0,.06,-12,-3.5,new ve({color:"#9aa58a",roughness:1}),!1);s.add(u);let p=new ve({color:"#7d8f6e",roughness:.95,flatShading:!0}),v=new ve({color:"#6b5a4b",roughness:1});[[-10.5,5.6,1.15],[10.8,5.4,1],[-11.5,-6.5,1.3],[12,-7,1.2]].forEach(([k,F,st],Z)=>{let ht=new Me(new br(.12*st,.16*st,2.4*st,7),v);ht.position.set(k,1.2*st,F),ht.castShadow=!0;let A=new Me(new Sa(1.5*st,1),p);A.position.set(k,3.2*st,F),A.rotation.set(pi(Z)*3,pi(Z+9)*3,0),A.castShadow=!0,s.add(ht,A)});let m=new Tn,g=new Me(new br(.05,.07,4.6,8),new ve({color:"#2f363b",roughness:.6}));g.position.y=2.3;let x=oi(.7,.12,.25,g.material,.3,4.6,0),b=new ve({color:"#ffffff",emissive:new Xt("#ffcf8a"),emissiveIntensity:0}),y=oi(.5,.04,.18,b,.35,4.52,0,!1);m.add(g,x,y),m.position.set(8.4,.14,6.6),m.rotation.y=Math.PI,s.add(m),e.lampada=b;let T=new ve({color:Ne.taglio,roughness:.9}),w=new ve({color:Ne.solaio,roughness:.95});e.pittura=[0,1,2].map(k=>Jr({vecchio:Ne.vecchioMuro,nuovo:Ne.nuovoMuro[k],asse:new U(1,.05,0),da:qe-.6,a:je+.6,macchie:.75,trama:.03}));let _=Jr({vecchio:Ne.vecchioEst,nuovo:Ne.vecchioEst,macchie:.9});e.cappottoMat=Jr({vecchio:Ne.vecchioEst,nuovo:"#ffffff",asse:new U(0,1,0),da:-.4,a:10.2,macchie:.9,bicolore:!0,trama:.05});let S=[w,w,w,w,T,w];re.forEach((k,F)=>{let st=new Me(new kn(je-qe,.3,bn-ke),S);st.position.set(0,k-.15,0),st.castShadow=st.receiveShadow=!0,n.add(st)}),n.add(Ve(qe-.1,je+.1,0,.12,ke-.1,bn,T)),e.finestre=[];let R=k=>[{c:-3.6,w:1.4,y0:k+.9,y1:k+2.25},{c:2.6,w:1.6,y0:k+.9,y1:k+2.25}],C=k=>[{c:-1.6,w:1.3,y0:k+.9,y1:k+2.25},{c:1.7,w:1.3,y0:k+.9,y1:k+2.25}];for(let k=0;k<3;k++){let F=re[k],st=re[k]+Eu,Z=e.pittura[k];Tl(n,"x",qe,je,F,st,ke,ke+tn,R(F),Z).forEach(J=>J.material=[Z,Z,Z,Z,Z,_]),R(F).forEach(J=>e.finestre.push({x:J.c,z:ke+tn/2,y0:J.y0,y1:J.y1,w:J.w,rotY:0,fuori:new U(0,0,-1),piano:k})),Tl(n,"z",ke,bn,F,st,je-tn,je,C(F),Z).forEach(J=>J.material=[_,Z,Z,Z,T,Z]),C(F).forEach(J=>e.finestre.push({x:je-tn/2,z:J.c,y0:J.y0,y1:J.y1,w:J.w,rotY:-Math.PI/2,fuori:new U(1,0,0),piano:k}));let M=Ve(qe,qe+tn,F,st,ke,bn,[Z,_,Z,Z,T,Z]);n.add(M);let B={c:1.6,w:.9,y0:F,y1:F+2.1};Tl(n,"z",ke+tn,bn,F,st,Qi-.06,Qi+.06,[B],Z).forEach(J=>J.material=[Z,Z,Z,Z,T,Z]),k===2&&(e.tappoPorta=Jr({vecchio:Ne.vecchioMuro,nuovo:Ne.vecchioMuro,asse:new U(0,-1,0),da:-(F+2.2),a:-(F-.1),dissolvi:!0,macchie:.75}),n.add(Ve(Qi-.06,Qi+.06,F,F+2.1,B.c-B.w/2,B.c+B.w/2,e.tappoPorta)))}n.add(Ve(qe,qe+tn,re[3],re[3]+.6,ke,bn,[_,_,w,w,T,w])),n.add(Ve(je-tn,je,re[3],re[3]+.6,ke,bn,[_,_,w,w,T,w]));{let k=new An,F=re[3]+.6,st=new Float32Array([qe,F,ke+.15,je,F,ke+.15,0,wl-.15,ke+.15]);k.setAttribute("position",new zn(st,3)),k.computeVertexNormals();let Z=new Me(k,_);Z.receiveShadow=!0,n.add(Z)}e.tramezzoMat=Jr({vecchio:Ne.vecchioMuro,nuovo:Ne.vecchioMuro,asse:new U(0,-1,0),da:-(re[1]+Eu+.2),a:-(re[1]-.2),dissolvi:!0,macchie:.85}),n.add(Ve(2.4,2.52,re[1],re[1]+Eu,ke+tn,bn,[e.tramezzoMat,e.tramezzoMat,e.tramezzoMat,e.tramezzoMat,T,e.tramezzoMat])),e.filiVecchi=new Tn;let D=new ve({color:"#1b1b1b",roughness:.6});[[[-5.6,2.7,-3.12],[-4.4,2.35,-3.12],[-3,2.62,-3.12],[-1.6,2.3,-3.12],[-1.2,1.4,-3.12]],[[.2,5.6,-3.12],[1.4,5.25,-3.12],[3,5.55,-3.12],[4.6,5.2,-3.12],[5.5,5.5,-3.12]],[[-5.6,8.6,-3.12],[-4,8.15,-3.12],[-2.4,8.55,-3.12]]].forEach(k=>{let F=new Ni(k.map(st=>new U(...st)));e.filiVecchi.add(new Me(new $s(F,40,.022,5),D))}),n.add(e.filiVecchi),e.cavi=[],e.tubi=[];let G=ke+tn+.04;for(let k=0;k<3;k++){let F=re[k],st=[[-5.5,F+2.45,G],[-3.6,F+2.45,G],[-1.5,F+2.45,G],[.6,F+2.45,G],[2.6,F+2.45,G],[5.4,F+2.45,G]],Z=Tu(Ne.elettrico);e.cavi.push(Z),n.add(new Me(new $s(new Ni(st.map(ht=>new U(...ht)),!1,"catmullrom",.01),64,.035,6),Z)),[-4.6,-.3,1.2,4.4].forEach((ht,A)=>{let M=A%2?F+1.1:F+.35,B=new Ni([new U(ht,F+2.45,G),new U(ht,(F+2.45+M)/2,G),new U(ht,M,G)]),tt=Tu(Ne.elettrico);e.cavi.push(tt),n.add(new Me(new $s(B,12,.03,6),tt)),n.add(oi(.14,.14,.03,new ve({color:"#f4f4f2",roughness:.5}),ht,M,G+.02,!1))})}let I=(k,F=.05)=>{let st=Tu(Ne.idraulico);e.tubi.push(st),n.add(new Me(new $s(new Ni(k.map(Z=>new U(...Z)),!1,"catmullrom",.02),48,F,8),st))};I([[-1.6,.35,G+.04],[-1.6,3.4,G+.04],[-1.6,6.4,G+.04]],.07),I([[-1.6,.6,G+.04],[-3,.6,G+.04],[-4.6,.6,G+.04],[-4.6,.95,G+.04]]),I([[-1.6,3.6,G+.04],[-2.8,3.6,G+.04],[-4.2,3.6,G+.04],[-4.2,4.2,G+.04]]),I([[-1.6,3.5,G+.04],[-1.6,3.5,-1.2],[-3.6,3.45,-.5]]),e.quadri=[];for(let k=0;k<3;k++){let F=new ve({color:"#e8e6e1",roughness:.4,emissive:new Xt(Ne.elettrico),emissiveIntensity:0});e.quadri.push(F),n.add(oi(.42,.52,.08,F,-.3,re[k]+1.55,G+.03,!1))}let W=new ve({color:Ne.pavVecchio,roughness:1}),Y=[[0,qe+tn,Qi-.06,"gres"],[0,Qi+.06,je-tn,"parquet"],[1,qe+tn,Qi-.06,"bagno"],[1,Qi+.06,je-tn,"parquet"],[2,qe+tn,Qi-.06,"parquet"],[2,Qi+.06,je-tn,"parquet"]],V=ke+tn,rt=bn-.02,X={gres:[],parquet:[],bagno:[],pareteBagno:[]},P=t?1.5:1;Y.forEach(([k,F,st,Z],ht)=>{let A=re[k];n.add(Ve(F,st,A,A+.012,V,bn,W,!1));let M=ht/Y.length,B=A+.035;if(Z==="parquet"){let tt=.19*P,J=1.2*P,dt=0;for(let ut=V+tt/2;ut<rt;ut+=tt,dt++){let H=pi(dt+ht*31)*J%J;for(let it=F-H;it<st;it+=J){let ft=Math.max(it,F),L=Math.min(it+J,st);L-ft<.08||X.parquet.push({pos:new U((ft+L)/2,B,ut),sx:L-ft-.012,ritardo:M*.82+(ut-V)/(rt-V)*.16+pi(dt*7+it)*.015})}}}else{let tt=(Z==="bagno"?.3:.6)*P,J=0;for(let dt=V+tt/2;dt<rt;dt+=tt,J++)for(let ut=F+tt/2;ut<st;ut+=tt)X[Z==="bagno"?"bagno":"gres"].push({pos:new U(ut,B,dt),ritardo:M*.82+(dt-V)/(rt-V)*.16+(ut-F)*.004})}});{let k=re[1],F=.3*P;for(let st=k+F/2;st<k+2.2;st+=F)for(let Z=qe+tn+F/2;Z<Qi-.06;Z+=F)Z>-4.35&&Z<-2.85&&st>k+.9||X.pareteBagno.push({pos:new U(Z,st,ke+tn+.02),q:new yn().setFromAxisAngle(new U(1,0,0),Math.PI/2),ritardo:.36+(st-k)/2.2*.14+Z*.002});for(let st=k+F/2;st<k+2.2;st+=F)for(let Z=ke+tn+F/2;Z<bn;Z+=F)X.pareteBagno.push({pos:new U(qe+tn+.02,st,Z),q:new yn().setFromAxisAngle(new U(0,0,-1),Math.PI/2),ritardo:.36+(st-k)/2.2*.14+(Z+3)*.002})}e.posa=[];let ot=(k,F,st,Z,ht=!1)=>{if(!Z.length)return;let A=wu({colore:F,ruvido:st,caduta:.6,durata:.12,varia:F===Ne.rovere?.22:.06});e.posa.push(A);let M=pp(k,A,Z);if(ht){let B=new on;Z.forEach((tt,J)=>{B.position.copy(tt.pos),B.quaternion.copy(tt.q||new yn),B.scale.set(tt.sx/(1.2*P),1,1),B.updateMatrix(),M.setMatrixAt(J,B.matrix)})}n.add(M)};ot(new kn(1.2*P,.04,.19*P-.012),Ne.rovere,.55,X.parquet,!0),ot(new kn(.6*P-.012,.04,.6*P-.012),Ne.gres,.42,X.gres),ot(new kn(.3*P-.01,.035,.3*P-.01),Ne.piastrBagno,.25,X.bagno),ot(new kn(.3*P-.01,.025,.3*P-.01),"#f1f3f2",.2,X.pareteBagno);let wt=new ve({color:Ne.telaioVecchio,roughness:.85}),kt=new ve({color:"#7d8a8c",roughness:.4,transparent:!0,opacity:.55}),K=new ve({color:Ne.telaioNuovo,roughness:.45});e.vetroNuovo=new ve({color:Ne.vetro,roughness:.08,metalness:.1,transparent:!0,opacity:.4,emissive:new Xt("#ffc98a"),emissiveIntensity:0}),e.serramenti=[];let gt=new ve({color:"#d9d6cf",roughness:.7});e.finestre.forEach((k,F)=>{let st=k.w,Z=k.y1-k.y0,ht=(tt,J,dt)=>{let ut=new Tn,H=.07;ut.add(oi(st,H,.12,tt,0,Z/2-H/2,0,!1),oi(st,H,.12,tt,0,-Z/2+H/2,0,!1)),ut.add(oi(H,Z,.12,tt,-st/2+H/2,0,0,!1),oi(H,Z,.12,tt,st/2-H/2,0,0,!1));let it=[];return[-1,1].forEach(ft=>{let L=new Tn,nt=st/2-H,et=new Tn;et.add(oi(nt,.06,.06,tt,ft*-nt/2,Z/2-H-.03,0,!1),oi(nt,.06,.06,tt,ft*-nt/2,-Z/2+H+.03,0,!1)),et.add(oi(.06,Z-2*H,.06,tt,ft*-.03,0,0,!1),oi(.06,Z-2*H,.06,tt,ft*-(nt-.03),0,0,!1));let vt=oi(nt-.08,Z-2*H-.08,.012,J,ft*-nt/2,0,0,!1);vt.castShadow=!1,L.add(et,vt),L.position.set(ft*(st/2-H),0,0),ut.add(L),it.push({anta:L,lato:ft}),dt||(L.rotation.y=ft*(.08+pi(F+ft)*.25))}),ut.position.set(k.x,(k.y0+k.y1)/2,k.z),ut.rotation.y=k.rotY,ut.userData.servizio="serramenti",n.add(ut),{g:ut,ante:it}},A=ht(wt,kt,!1),M=ht(K,e.vetroNuovo,!0),B=oi(st+.16,.05,.36,gt,0,-Z/2-.025,.12,!1);M.g.add(B),e.serramenti.push({f:k,vecchio:A,nuovo:M,base:M.g.position.clone(),ritardo:(k.piano*2+F%2)/6})});let xt=re[3]+.6,Et=Math.atan2(wl-xt,6.6),pt=Math.hypot(6.6,wl-xt)+.08,Lt=new ve({color:"#8c7560",roughness:.9});e.falde=[],[-1,1].forEach(k=>{let F=new Tn,st=new Me(new kn(pt,.22,bn-ke+.9),[Lt,Lt,Lt,Lt,T,Lt]);st.castShadow=st.receiveShadow=!0,st.position.set(0,-.11,0),F.add(st),F.position.set(k*3.3,(xt+wl)/2,-.1),F.rotation.z=-k*Et,F.userData.servizio="rifacimento-tetti",n.add(F),e.falde.push(F)}),n.add(Ve(2.3,3,10.6,12.6,-1.8,-1.1,new ve({color:"#8f8a82",roughness:1})));let ue=k=>{let F=new br(k,k,.46*P,8,1,!0,0,Math.PI);return F.rotateZ(Math.PI/2),F.rotateY(0),F},Ct=[],Ht=[],Dt=.4*P,Nt=.28*P,Kt=Math.floor(pt/Dt),oe=Math.floor((bn-ke+.8)/Nt);e.falde.forEach((k,F)=>{k.updateMatrixWorld(!0);let st=F===0?-1:1;for(let Z=0;Z<Kt;Z++)for(let ht=0;ht<oe;ht++){let A=st*(-pt/2+Dt/2+Z*Dt)*-1,M=-(bn-ke+.8)/2+Nt/2+ht*Nt,tt=new U(A,.06,M).clone().applyMatrix4(k.matrixWorld),J=new yn().setFromRotationMatrix(new _e().extractRotation(k.matrixWorld));if(J.multiply(new yn().setFromAxisAngle(new U(0,0,1),st*.06)),Ct.push({pos:tt,q:J,ritardo:Z/Kt*.85+ht*.004+F*.02}),pi(Z*41+ht*7+F)>.07){let dt=J.clone().multiply(new yn().setFromAxisAngle(new U(0,1,0),(pi(Z+ht*3)-.5)*.25));Ht.push({pos:tt.clone().add(new U(0,(pi(ht+Z)-.5)*.04,0)),q:dt,ritardo:(1-Z/Kt)*.85+ht*.003,tono:pi(Z*3+ht)})}}}),e.tegoleNuove=wu({colore:Ne.coppoNuovo,ruvido:.75,caduta:1.4,durata:.15,varia:.14}),e.tegoleVecchie=wu({colore:Ne.coppoVecchio,ruvido:1,caduta:1.6,durata:.15,varia:.35,togli:!0}),e.tegoleVecchie.userData.u.uPosa.value=0,e.tegoleNuove.side=e.tegoleVecchie.side=Fi;let Q=pp(ue(.155*P),e.tegoleNuove,Ct),$t=pp(ue(.155*P),e.tegoleVecchie,Ht);Q.castShadow=$t.castShadow=!0,Q.userData.servizio=$t.userData.servizio="rifacimento-tetti",n.add(Q,$t),e.cappotti=[];let Ae=(k,F,st)=>{let Z=new Tn,ht=st>0?0:-.16,A=ht+.16,M=[e.cappottoMat,e.cappottoMat,e.cappottoMat,e.cappottoMat,T,e.cappottoMat];for(let B=0;B<3;B++){let tt=re[B],J=B===0?.12:tt,dt=tt+3;Tl(Z,"z",ke-.15,bn,J,dt,ht,A,st>0?C(tt):[],e.cappottoMat).forEach(H=>H.material=M)}Z.add(Ve(ht,A,re[3],re[3]+.6,ke-.15,bn,M)),Z.position.x=st>0?F:k,Z.userData.servizio="facciate-e-cappotto-termico",Z.traverse(B=>B.userData.servizio="facciate-e-cappotto-termico"),n.add(Z),e.cappotti.push({g:Z,verso:st})};Ae(qe,je,1),Ae(qe,je,-1),e.cappotti.forEach(k=>k.g.scale.x=.05),e.fronte=[];let ae=Jr({vecchio:"#ffffff",nuovo:"#ffffff",asse:new U(0,-1,0),da:-20,a:20,bicolore:!0,trama:.05});ae.userData.u.uFronte.value=1;let Qt=e.vetroNuovo;for(let k=0;k<3;k++){let F=new Tn,st=re[k],Z=k===0?.12:st-.3,ht=[{c:-3.8,w:1.3,y0:st+.9,y1:st+2.25},{c:-.2,w:1,y0:k===0?st:st+.9,y1:st+2.25},{c:3.4,w:1.6,y0:st+.9,y1:st+2.25}];if(Tl(F,"x",qe-.16,je+.16,Z,st+Eu,0,.3,ht,ae),ht.forEach(A=>{F.add(Ve(A.c-A.w/2+.05,A.c+A.w/2-.05,A.y0+.05,A.y1-.05,.12,.14,Qt,!1)),F.add(Ve(A.c-.03,A.c+.03,A.y0,A.y1,.1,.18,K,!1)),F.add(Ve(A.c-A.w/2,A.c+A.w/2,A.y0-.03,A.y0,.1,.18,K,!1)),F.add(Ve(A.c-A.w/2,A.c+A.w/2,A.y1,A.y1+.03,.1,.18,K,!1)),k>0&&F.add(Ve(A.c-A.w/2-.1,A.c+A.w/2+.1,A.y0-.06,A.y0-.02,.1,.45,gt,!1))}),k>0){F.add(Ve(1.5,5.3,st-.3,st-.12,.3,1.5,gt)),F.add(Ve(1.5,5.3,st+.85,st+.9,1.45,1.5,K,!1));for(let A=1.6;A<5.3;A+=.42)F.add(Ve(A,A+.03,st-.12,st+.85,1.46,1.49,K,!1))}F.position.z=bn-.02,F.userData.servizio="facciate-e-cappotto-termico",F.visible=!1,n.add(F),e.fronte.push(F)}{let k=new An,F=re[3]-.3,st=new Float32Array([qe-.16,F,0,je+.16,F,0,je+.16,re[3]+.6,0,qe-.16,F,0,je+.16,re[3]+.6,0,qe-.16,re[3]+.6,0,qe-.16,re[3]+.6,0,je+.16,re[3]+.6,0,0,wl-.12,0]);k.setAttribute("position",new zn(st,3)),k.computeVertexNormals();let Z=new Me(k,ae);Z.position.z=bn+.28,Z.visible=!1,Z.castShadow=!0,Z.userData.servizio="facciate-e-cappotto-termico",n.add(Z),e.frontone=Z}e.arredi=[];let ne=(k,F,st,Z,ht,A,M,B=.06)=>{let tt=new Me(new bu(k,F,st,2,B),new ve({color:Z,roughness:.8}));tt.position.set(ht,A+F/2,M),tt.castShadow=!0,tt.receiveShadow=!0,tt.scale.setScalar(1e-4),n.add(tt),e.arredi.push(tt)};ne(3.6,.9,.62,"#e9e7e2",-3.5,re[0],-2.85),ne(1.4,.75,.9,"#9a7b5b",-3.4,re[0],.6),ne(2.4,.42,.95,"#56616a",2.4,re[0],-1.2,.12),ne(2.4,.5,.25,"#56616a",2.4,re[0]+.4,-1.6,.1),ne(1.7,.55,.75,"#f5f6f5",-4.6,re[1],1.8,.14),ne(.8,.82,.5,"#f5f6f5",-3.2,re[1],-2.95),ne(2.6,.42,1,"#b8a58e",1.6,re[1],.9,.12),ne(1.2,.4,.7,"#2f363b",4.1,re[1],-1.4),ne(1.7,.5,2.1,"#e7e1d6",-3.6,re[2],-1.8,.1),ne(1.9,.5,2.1,"#d9d3c8",2.4,re[2],-1.9,.1),ne(1.9,.9,.12,"#8a7158",2.4,re[2],-3.08),e.luciInterne=[0,1,2].map(k=>{let F=new Ea("#ffc78a",0,9,1.6);return F.position.set(.5,re[k]+2.3,.5),n.add(F),F});let Te=t?140:360,z=new Float32Array(Te*3),le=new Float32Array(Te);for(let k=0;k<Te;k++)z[k*3]=qe+.5+pi(k)*(je-qe-1),z[k*3+1]=.4+pi(k+100)*9,z[k*3+2]=ke+.5+pi(k+200)*6.5,le[k]=pi(k+300)*6.28;let yt=new An;return yt.setAttribute("position",new zn(z,3)),yt.setAttribute("aFase",new zn(le,1)),e.polvere=new ma(yt,new Cn({transparent:!0,depthWrite:!1,blending:Ia,uniforms:{uT:{value:0},uA:{value:1},uPx:{value:1}},vertexShader:`attribute float aFase; uniform float uT; uniform float uPx; varying float vA;
        void main(){
          vec3 p = position;
          p.x += sin(uT * 0.21 + aFase) * 0.35; p.y += sin(uT * 0.13 + aFase * 1.7) * 0.25 + mod(uT * 0.05 + aFase, 1.0) * 0.2;
          p.z += cos(uT * 0.17 + aFase) * 0.3;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (2.0 + 2.5 * fract(aFase * 3.7)) * uPx * (16.0 / -mv.z);
          vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(uT * 0.8 + aFase * 4.0));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform float uA; varying float vA;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
          gl_FragColor = vec4(vec3(1.0, 0.86, 0.66) * 0.55, (1.0 - d * 4.0) * vA * uA); }`})),e.polvere.frustumCulled=!1,s.add(e.polvere),e.interattivi=[],n.traverse(k=>{k.isMesh&&k.userData.servizio&&e.interattivi.push(k)}),e.serramenti.forEach(k=>k.nuovo.g.traverse(F=>{F.userData.servizio="serramenti",F.isMesh&&e.interattivi.push(F)})),e.fronte.forEach(k=>k.traverse(F=>{F.isMesh&&(F.userData.servizio=F.material===Qt||F.material===K?"serramenti":"facciate-e-cappotto-termico",e.interattivi.push(F))})),e.falde.forEach(k=>k.traverse(F=>{F.isMesh&&(F.userData.servizio="rifacimento-tetti",e.interattivi.push(F))})),e.cappotti.forEach(k=>k.g.traverse(F=>{F.isMesh&&(F.userData.servizio="facciate-e-cappotto-termico",e.interattivi.push(F))})),e.interattivi.push(Q),e}var zs=s=>s<=0?0:s>=1?1:1-Math.pow(1-s,3),fs=s=>Math.min(1,Math.max(0,s));function v_(s,t,e){s.tramezzoMat.userData.u.uFronte.value=t.tramezzo,s.tappoPorta.userData.u.uFronte.value=t.porta,s.filiVecchi.visible=t.vecchiFili>.01,s.filiVecchi.scale.setScalar(Math.max(.001,t.vecchiFili)),s.filiVecchi.position.set(0,(1-t.vecchiFili)*.4,0),s.cavi.forEach((i,r)=>{i.userData.u.uTraccia.value=fs(t.cavi*1.25-r%5*.06),i.userData.u.uLuce.value=t.impiantiLuce}),s.tubi.forEach((i,r)=>{i.userData.u.uTraccia.value=fs(t.tubi*1.2-r*.05),i.userData.u.uLuce.value=t.impiantiLuce}),s.quadri.forEach((i,r)=>i.emissiveIntensity=fs(t.quadri*3-r)*1.4*(.35+.65*t.impiantiLuce)),s.posa.forEach(i=>i.userData.u.uPosa.value=t.posa),s.pittura.forEach((i,r)=>i.userData.u.uFronte.value=t.pittura[r]),s.serramenti.forEach(i=>{let r=i.f.fuori,o=fs((t.finVecchie-i.ritardo*.5)/.5);i.vecchio.g.visible=o<.999,i.vecchio.g.position.set(i.base.x+r.x*zs(o)*1.6,i.base.y+zs(o)*.3,i.base.z+r.z*zs(o)*1.6);let a=fs((t.finNuove-i.ritardo*.5)/.5);i.nuovo.g.visible=a>.001;let l=zs(a);i.nuovo.g.position.set(i.base.x+r.x*(1-l)*1.8,i.base.y,i.base.z+r.z*(1-l)*1.8);let c=fs((t.chiusura-i.ritardo*.4)/.6);i.nuovo.ante.forEach(({anta:h,lato:d})=>h.rotation.y=d*(1-zs(c))*1.1)}),s.tegoleVecchie.userData.u.uPosa.value=t.tettoVecchio,s.tegoleNuove.userData.u.uPosa.value=t.tettoNuovo,s.cappottoMat.userData.u.uFronte.value=t.cappotto,s.cappotti.forEach(i=>i.g.scale.x=.05+.95*zs(fs(t.cappotto*1.4))),s.fronte.forEach((i,r)=>{let o=fs((t.facciata-r*.22)/.56);i.visible=o>.001;let a=zs(o);i.position.y=(1-a)*-.6,i.position.z=3.48+(1-a)*5.5,i.scale.setScalar(.94+.06*a)});{let i=fs((t.facciata-.6)/.4),r=zs(i);s.frontone.visible=i>.001,s.frontone.position.z=3.78+(1-r)*5.5}s.arredi.forEach((i,r)=>i.scale.setScalar(Math.max(1e-4,zs(fs(t.arredi*1.6-r*.05)))));let n=t.sera;s.cielo.material.uniforms.uSera.value=n,s.fog.color.setRGB(.86+.12*n,.9-.08*n,.92-.3*n),s.sole.color.setRGB(1,.94-.24*n,.85-.4*n),s.sole.intensity=3.4-1.6*n,s.sole.position.set(16+8*n,24-13*n,20-4*n),s.emi.intensity=1.05-.45*n,s.emi.color.setRGB(.87+.1*n,.91-.05*n,.94-.18*n),s.vetroNuovo.emissiveIntensity=t.luci*2.2,s.lampada.emissiveIntensity=t.luci*4,s.luciInterne.forEach(i=>i.intensity=t.luci*14),s.polvere.material.uniforms.uT.value=e,s.polvere.material.uniforms.uA.value=t.polvere,s.polvere.visible=t.polvere>.01&&s.polvereAttiva!==!1}var mp={ristrutturazioni:[2.45,4.9,1.6],"impianti-elettrici-ed-idraulici":[-1.6,2.8,-3.1],rivestimenti:[3.6,3.35,1.4],imbiancature:[-3.2,8.1,-3.15],serramenti:[6.05,5.2,1.7],"rifacimento-tetti":[3.2,11,.5],"facciate-e-cappotto-termico":[6.2,2.4,-2.2]};var gp=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,uw=`
uniform sampler2D tCol; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tCol, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor = vec4(c * smoothstep(0.85, 1.6, l), 1.0);
}`,fw=`
uniform sampler2D tCol; uniform vec2 uDir; varying vec2 vUv;
void main(){
  vec3 s = texture2D(tCol, vUv).rgb * 0.227;
  s += texture2D(tCol, vUv + uDir * 1.385).rgb * 0.316;
  s += texture2D(tCol, vUv - uDir * 1.385).rgb * 0.316;
  s += texture2D(tCol, vUv + uDir * 3.23).rgb * 0.07;
  s += texture2D(tCol, vUv - uDir * 3.23).rgb * 0.07;
  gl_FragColor = vec4(s, 1.0);
}`,dw=`
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
        // un campione pi\xF9 vicino del fuoco non sporca un pixel a fuoco
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
}`,Au=class{constructor(t,{hdr:e=!0,msaa:n=4}={}){this.r=t,this.tipo=e?Si:Vn,this.scena=new En(1,1,{type:this.tipo,format:Mi,samples:n}),this.scena.depthTexture=new Ji(1,1,yi);let i={type:this.tipo,minFilter:xn,magFilter:xn};this.a=new En(1,1,i),this.b=new En(1,1,i),this.cam=new wr,this.quad=new Me(new ws(2,2)),this.quad.frustumCulled=!1,this.sq=new Mr,this.sq.add(this.quad),this.mSoglia=new Cn({vertexShader:gp,fragmentShader:uw,uniforms:{tCol:{value:null}}}),this.mSfoca=new Cn({vertexShader:gp,fragmentShader:fw,uniforms:{tCol:{value:null},uDir:{value:new zt}}}),this.mFinale=new Cn({vertexShader:gp,fragmentShader:dw,uniforms:{tCol:{value:this.scena.texture},tDepth:{value:this.scena.depthTexture},tBloom:{value:this.a.texture},uRes:{value:new zt(1,1)},uNear:{value:.1},uFar:{value:200},uFuoco:{value:20},uCampo:{value:12},uSfocatura:{value:0},uBloom:{value:.6},uTempo:{value:0},uGrana:{value:.025},uEsposizione:{value:1.12}}}),this.bloom=!0,this.dof=!0}setSize(t,e){this.scena.setSize(t,e);let n=Math.max(1,Math.round(t/4)),i=Math.max(1,Math.round(e/4));this.a.setSize(n,i),this.b.setSize(n,i),this.mFinale.uniforms.uRes.value.set(t,e),this.qw=n,this.qh=i}passa(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.sq,this.cam)}render(t,e,n,i){let r=this.r;r.setRenderTarget(this.scena),r.render(t,e);let o=this.mFinale.uniforms;if(this.bloom){this.mSoglia.uniforms.tCol.value=this.scena.texture,this.passa(this.mSoglia,this.a);for(let a=0;a<2;a++)this.mSfoca.uniforms.tCol.value=this.a.texture,this.mSfoca.uniforms.uDir.value.set(1/this.qw,0),this.passa(this.mSfoca,this.b),this.mSfoca.uniforms.tCol.value=this.b.texture,this.mSfoca.uniforms.uDir.value.set(0,1/this.qh),this.passa(this.mSfoca,this.a);o.uBloom.value=.55}else o.uBloom.value=0;o.uNear.value=e.near,o.uFar.value=e.far,o.uFuoco.value=i,o.uSfocatura.value=this.dof?5*(r.getPixelRatio()||1):0,o.uTempo.value=n,this.passa(this.mFinale,null)}};Ls.registerPlugin(ee);var El=[[0,[19,9.4,35],[0,5.6,0],1],[.09,[18,9,33.4],[0,5.6,0],1],[.18,[8.5,7.8,21],[.8,5.4,-.2],.25],[.34,[-3.5,5.2,18],[-1,3.4,-2],0],[.49,[3.5,10.5,15.5],[-.2,2.6,-.6],0],[.62,[-7,8.6,18],[-.6,5.6,-1.2],0],[.73,[20,6.6,13.5],[3.2,5,0],0],[.85,[19,17.5,20],[1,7.8,0],.2],[1,[20.5,8,32.5],[0,5.8,0],1]],pw=s=>s+(s*s*(3-2*s)-s)*.7,_p=class{constructor(){this.p=El.map(t=>t[0]),this.pos=new Ni(El.map(t=>new U(...t[1])),!1,"centripetal"),this.guarda=new Ni(El.map(t=>new U(...t[2])),!1,"centripetal"),this.n=El.length-1,this.sposta=El.map(t=>t[3])}spazio(t){let e=0;for(;e<this.n-1&&t>this.p[e+1];)e++;let n=Math.min(1,Math.max(0,(t-this.p[e])/(this.p[e+1]-this.p[e]))),i=n*n*(3-2*n);return this.sposta[e]+(this.sposta[e+1]-this.sposta[e])*i}t(t){let e=0;for(;e<this.n-1&&t>this.p[e+1];)e++;let n=Math.min(1,Math.max(0,(t-this.p[e])/(this.p[e+1]-this.p[e])));return(e+pw(n))/this.n}};function mw(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function gC(s,t={}){let e=t.fotogramma;if(!mw())return null;let n=s.querySelector(".hero__canvas"),i=JSON.parse(document.getElementById("hero-fasi")?.textContent||"[]"),r=e===void 0&&(window.matchMedia("(pointer: coarse)").matches||window.innerWidth<760),o=new Ih({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:e!==void 0});o.outputColorSpace=Kn,o.toneMapping=Da,o.shadowMap.enabled=!0,o.shadowMap.type=kc,n.appendChild(o.domElement);let a=new Mr,l=new Bn(32,1,.5,260),c=__(a,{leggera:r}),h=new Au(o,{hdr:!0,msaa:r?0:4}),d=e!==void 0?3:r?1:3,f=1.5;function u(){h.dof=d>=3&&!r,h.bloom=d>=2||r&&d>=1,c.polvereAttiva=d>=1;let yt=e!==void 0?1:Math.min(window.devicePixelRatio||1,d===0?1:f);o.getPixelRatio()!==yt&&(o.setPixelRatio(yt),b())}let p=[];function v(yt){if(e!==void 0||d===0||(p.push(yt),p.length<50))return;let k=p.reduce((F,st)=>F+st,0)/p.length;p.length=0,k>23&&(d--,u())}let m=1,g=1,x=1;function b(){m=n.clientWidth||window.innerWidth,g=n.clientHeight||window.innerHeight,x=m/g,o.setSize(m,g,!1);let yt=o.getPixelRatio();h.setSize(Math.round(m*yt),Math.round(g*yt)),l.aspect=x,l.fov=x<1?38:32,l.updateProjectionMatrix(),c.polvere.material.uniforms.uPx.value=yt,Dt=!0}let y={polvere:1,vecchiFili:1,tramezzo:0,porta:0,cavi:0,tubi:0,quadri:0,impiantiLuce:1,posa:0,pittura:[0,0,0],finVecchie:0,finNuove:0,chiusura:0,tettoVecchio:0,tettoNuovo:0,cappotto:0,arredi:0,facciata:0,sera:0,luci:0},T=Ls.timeline({paused:!0,defaults:{ease:"none"}}),w=(yt,k,F,st,Z="power1.inOut")=>T.to(y,{[yt]:st,duration:F-k,ease:Z},k);w("tramezzo",.11,.19,1),w("porta",.16,.24,1),w("polvere",.2,.4,0),w("vecchiFili",.25,.29,0),w("cavi",.27,.38,1),w("tubi",.29,.4,1),w("quadri",.35,.41,1),w("posa",.43,.555,1),T.to(y.pittura,{0:1,duration:.05,ease:"power1.inOut"},.565),T.to(y.pittura,{1:1,duration:.05,ease:"power1.inOut"},.592),T.to(y.pittura,{2:1,duration:.055,ease:"power1.inOut"},.62),w("impiantiLuce",.56,.665,0),w("finVecchie",.685,.72,1),w("finNuove",.7,.745,1),w("chiusura",.74,.775,1),w("tettoVecchio",.785,.825,1),w("tettoNuovo",.81,.865,1),w("cappotto",.835,.895,1),w("arredi",.87,.905,1),w("facciata",.905,.958,1),w("sera",.915,1,1),w("luci",.95,1,1),T.to({},{duration:0},1);let _=new _p,S=new U,R=new U,C=new U,D={az:0,azT:0,el:0,elT:0},N=0;function G(yt,k){let F=_.t(yt);_.pos.getPoint(F,l.position),_.guarda.getPoint(F,S);let st=x>=1.5?1:1+(1.5/x-1)*.32;if(R.subVectors(l.position,S).multiplyScalar(st),(D.az||D.el)&&(R.applyAxisAngle(new U(0,1,0),D.az),R.y+=D.el*6),N=(yt<.12?1:.35)*(e===void 0?1:0),R.x+=Math.sin(k*.25)*.35*N,R.y+=Math.sin(k*.19)*.18*N,x>1.15){let Z=_.spazio(yt)*Math.min(1,(x-1.15)*2.5)*.36*R.length()*Math.tan(l.fov*Math.PI/360)*x;C.set(R.z,0,-R.x).normalize(),S.addScaledVector(C,-Z)}l.position.copy(S).add(R),x<1&&(S.y+=.2*R.length()*Math.tan(l.fov*Math.PI/360)*_.spazio(yt)),l.lookAt(S)}let I=Array.from(s.querySelectorAll("[data-servizio]")),W=s.querySelector(".hero__etichetta"),Y=W&&W.querySelector(".hero__etichetta-testo"),V=s.querySelector("[data-fase-nome]"),rt=s.querySelector("[data-fase-testo]"),X=s.querySelector("[data-fase-link]"),P=s.querySelector(".hero__avanzamento span"),ot=-1,wt=new U;function kt(yt){let k=i.findIndex(ht=>yt>=ht.da&&yt<ht.a);k<0&&(k=i.length-1);let F=yt<.075?"intro":yt>.93?"fine":"fasi";if(s.dataset.stato!==F&&(s.dataset.stato=F),P&&(P.style.transform=`scaleX(${yt.toFixed(4)})`),k!==ot){ot=k;let ht=i[k]||{};V&&(V.textContent=ht.nome||""),rt&&(rt.textContent=ht.testo||""),X&&(ht.url?(X.href=ht.url,X.hidden=!1,X.textContent=ht.link||"Scopri il servizio"):X.hidden=!0),I.forEach(A=>{let M=A.dataset.servizio,B=(ht.servizi||[]).includes(M),tt=i.slice(0,k).some(J=>(J.servizi||[]).includes(M))||F==="fine";A.classList.toggle("is-attivo",B),A.classList.toggle("is-fatto",tt&&!B),B?A.setAttribute("aria-current","step"):A.removeAttribute("aria-current")}),Y&&(Y.textContent=ht.servizi&&ht.servizi.length&&ht.etichetta||""),s.dataset.fase=String(k)}let st=i[k]||{},Z=st.servizi&&st.servizi[0];if(W&&Z&&mp[Z]&&F==="fasi"){wt.set(...mp[Z]).project(l);let ht=(wt.x*.5+.5)*m,A=(-wt.y*.5+.5)*g,M=wt.z<1&&ht>20&&ht<m-40&&A>40&&A<g-20,B=(yt-st.da)/(st.a-st.da),tt=M&&B>.12&&B<.92;W.style.transform=`translate3d(${ht.toFixed(1)}px, ${A.toFixed(1)}px, 0)`,W.classList.toggle("is-visibile",tt),W.classList.toggle("is-sinistra",ht>m*.62)}else W&&W.classList.remove("is-visibile")}let K=new Ra,gt=new zt,xt=s.querySelector(".hero__suggerimento"),Et=Object.fromEntries(I.map(yt=>[yt.dataset.servizio,{nome:yt.dataset.nome||yt.textContent.trim(),href:yt.getAttribute("href")}])),pt=null,Lt=null,ue=()=>s.dataset.stato==="fine",Ct=o.domElement;Ct.addEventListener("pointerdown",yt=>{ue()&&(pt={x:yt.clientX,y:yt.clientY,az:D.azT,el:D.elT,mosso:!1})}),window.addEventListener("pointerup",()=>{pt&&!pt.mosso&&Lt&&Et[Lt]&&(window.location.href=Et[Lt].href),pt=null}),Ct.addEventListener("pointermove",yt=>{if(!ue())return;if(pt){let Z=yt.clientX-pt.x,ht=yt.clientY-pt.y;Math.abs(Z)+Math.abs(ht)>4&&(pt.mosso=!0),D.azT=Math.max(-.95,Math.min(.6,pt.az-Z*.005)),yt.pointerType==="mouse"&&(D.elT=Math.max(-.2,Math.min(.5,pt.el+ht*.003))),Dt=!0;return}if(yt.pointerType!=="mouse")return;let k=Ct.getBoundingClientRect();gt.set((yt.clientX-k.left)/k.width*2-1,-((yt.clientY-k.top)/k.height)*2+1),K.setFromCamera(gt,l);let F=K.intersectObjects(c.interattivi,!1)[0],st=F&&(F.object.userData.servizio||F.object.parent?.userData.servizio);Lt=st||null,Ct.style.cursor=st?"pointer":"grab",xt&&(st&&Et[st]?(xt.textContent=Et[st].nome,xt.style.transform=`translate3d(${(yt.clientX-k.left).toFixed(0)}px, ${(yt.clientY-k.top).toFixed(0)}px, 0)`,xt.classList.add("is-visibile")):xt.classList.remove("is-visibile"))}),Ct.addEventListener("pointerleave",()=>xt&&xt.classList.remove("is-visibile"));let Ht=!0,Dt=!0,Nt=-1,Kt=0,oe=0,Q=!1,$t=performance.now();function Ae(yt){if(Q)return;let k=(yt-$t)/1e3,F=e!==void 0?e:T.progress();Math.abs(F-Nt)>1e-5&&(Nt=F,oe=yt,Dt=!0),!ue()&&(D.azT||D.elT)&&(D.azT=0,D.elT=0),D.az+=(D.azT-D.az)*.08,D.el+=(D.elT-D.el)*.08,Math.abs(D.azT-D.az)>5e-4&&(Dt=!0);let st=yt-oe>1200&&!pt;if(st&&yt-Kt<48&&!Dt)return;let Z=Kt?yt-Kt:16;Kt=yt,Dt=!1,v_(c,y,k),G(F,k),kt(F),h.render(a,l,k,l.position.distanceTo(S)),st||v(Z)}if(b(),u(),e!==void 0){T.progress(e),document.documentElement.dataset.fotogramma="carica";let yt=0,k=()=>{Ae(performance.now()+4e3),++yt<4?requestAnimationFrame(k):(window.__msSagoma=gw(l,m,g),document.documentElement.dataset.fotogramma="pronto")};return requestAnimationFrame(k),{renderer:o}}let ae=new m_({lerp:.1,anchors:!0,autoRaf:!1});ae.on("scroll",ee.update);let Qt=yt=>ae.raf(yt*1e3);Ls.ticker.add(Qt),Ls.ticker.lagSmoothing(0);let ne=ee.create({trigger:s,start:"top top",end:"bottom bottom",animation:T,scrub:.7}),Te=()=>{Ht&&!document.hidden&&Ae(performance.now())};Ls.ticker.add(Te);let z=new IntersectionObserver(yt=>{Ht=yt[0].isIntersecting});z.observe(s);let le=new ResizeObserver(()=>b());return le.observe(n),requestAnimationFrame(()=>{Ae(performance.now()),s.classList.add("is-3d-pronto")}),{lenis:ae,vaiA(yt){let k=ne.start+(ne.end-ne.start)*yt;ae.scrollTo(k,{duration:1.6})},distruggi(){Q=!0,Ls.ticker.remove(Te),Ls.ticker.remove(Qt),ne.kill(),ae.destroy(),z.disconnect(),le.disconnect(),o.dispose()}}}function gw(s,t,e){let n=(a,l,c)=>{let h=new U(a,l,c).project(s);return`${((h.x*.5+.5)*t).toFixed(1)} ${((-h.y*.5+.5)*e).toFixed(1)}`},i=[],r=(...a)=>i.push("M"+a.map(l=>n(...l)).join("L"));return r([-6,0,3.5],[-6,9.9,3.5],[-6.6,9.75,3.5+.35],[0,12,3.5+.35],[6.6,9.75,3.5+.35],[6,9.9,3.5],[6,0,3.5]),r([6,0,3.5],[6,0,-3.5],[6,9.9,-3.5],[6.6,9.75,-3.85],[0,12,-3.85],[0,12,3.5+.35]),r([6.6,9.75,3.5+.35],[6.6,9.75,-3.85]),[3.3,6.3,9.3].forEach(a=>r([-6,a,3.5],[6,a,3.5])),[.3,3.3,6.3].forEach(a=>r([-1,a,3.5],[-1,a+2.7,3.5])),[.3,3.3,6.3].forEach(a=>[-1.6,1.7].forEach(l=>r([6,a+.9,l-.65],[6,a+2.25,l-.65],[6,a+2.25,l+.65],[6,a+.9,l+.65],[6,a+.9,l-.65]))),r([-14,0,3.5],[14,0,3.5]),i.join("")}export{gC as avvia};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
