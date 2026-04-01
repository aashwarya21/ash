/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="168",Sp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ou=0,_l=1,lu=2,Tp=3,Ep=0,Dl=1,cu=2,oi=3,Ri=0,Nt=1,li=2,Ai=0,vr=1,vl=2,xl=3,yl=4,hu=5,Wi=100,uu=101,du=102,pu=103,mu=104,fu=200,gu=201,_u=202,vu=203,mn=204,fn=205,xu=206,yu=207,Mu=208,Su=209,bu=210,Tu=211,Eu=212,wu=213,Au=214,Cu=0,Ru=1,Pu=2,Bs=3,Lu=4,Iu=5,Uu=6,Du=7,na=0,Nu=1,Ou=2,Ci=0,Fu=1,Bu=2,zu=3,ku=4,Vu=5,Hu=6,Gu=7,Ml="attached",Wu="detached",jn=300,Pi=301,Xi=302,zs=303,ks=304,ls=306,Vs=1e3,Jt=1001,Hs=1002,Mt=1003,Nl=1004,wp=1004,Kr=1005,Ap=1005,lt=1006,Rs=1007,Cp=1007,ci=1008,Rp=1008,mi=1009,Ol=1010,Fl=1011,ss=1012,qn=1013,Li=1014,Tt=1015,hi=1016,Yn=1017,Zn=1018,Sr=1020,Bl=35902,zl=1021,kl=1022,Dt=1023,Vl=1024,Hl=1025,xr=1026,br=1027,Jn=1028,oa=1029,Gl=1030,Kn=1031,Pp=1032,$n=1033,Ps=33776,Ls=33777,Is=33778,Us=33779,gn=35840,_n=35841,vn=35842,xn=35843,yn=36196,Mn=37492,Sn=37496,bn=37808,Tn=37809,En=37810,wn=37811,An=37812,Cn=37813,Rn=37814,Pn=37815,Ln=37816,In=37817,Un=37818,Dn=37819,Nn=37820,On=37821,Ds=36492,Fn=36494,Bn=36495,Wl=36283,zn=36284,kn=36285,Vn=36286,Xu=2200,ju=2201,qu=2202,Gs=2300,Hn=2301,un=2302,mr=2400,fr=2401,Ws=2402,Qn=2500,Xl=2501,Yu=0,Zu=1,Sl=2,Ju=3200,Ku=3201,Lp=3202,Ip=3203,qi=0,$u=1,Ti="",Zt="srgb",Ui="srgb-linear",eo="display-p3",la="display-p3-linear",Xs="linear",it="srgb",js="rec709",qs="p3",Up=0,ur=7680,Dp=7681,Np=7682,Op=7683,Fp=34055,Bp=34056,zp=5386,kp=512,Vp=513,Hp=514,Gp=515,Wp=516,Xp=517,jp=518,bl=519,Qu=512,ed=513,td=514,jl=515,id=516,rd=517,sd=518,ad=519,Ys=35044,qp=35048,Yp=35040,Zp=35045,Jp=35049,Kp=35041,$p=35046,Qp=35050,em=35042,tm="100",Tl="300 es",ui=2e3,Zs=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const yr=Math.PI/180,as=180/Math.PI;function Xt(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[a&255]+Et[a>>8&255]+Et[a>>16&255]+Et[a>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function ot(a,e,t){return Math.max(e,Math.min(t,a))}function ql(a,e){return(a%e+e)%e}function im(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function rm(a,e,t){return a!==e?(t-a)/(e-a):0}function Ns(a,e,t){return(1-t)*a+t*e}function sm(a,e,t,i){return Ns(a,e,1-Math.exp(-t*i))}function am(a,e=1){return e-Math.abs(ql(a,e*2)-e)}function nm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function om(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function lm(a,e){return a+Math.floor(Math.random()*(e-a+1))}function cm(a,e){return a+Math.random()*(e-a)}function hm(a){return a*(.5-Math.random())}function um(a){a!==void 0&&(Cc=a);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(a){return a*yr}function pm(a){return a*as}function mm(a){return(a&a-1)===0&&a!==0}function fm(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function gm(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function _m(a,e,t,i,r){const s=Math.cos,n=Math.sin,o=s(t/2),l=n(t/2),c=s((e+i)/2),h=n((e+i)/2),d=s((e-i)/2),u=n((e-i)/2),p=s((i-e)/2),f=n((i-e)/2);switch(r){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*f,l*p,o*c);break;case"YXY":a.set(l*p,o*h,l*f,o*c);break;case"ZYZ":a.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ut(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ve(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const vm={DEG2RAD:yr,RAD2DEG:as,generateUUID:Xt,clamp:ot,euclideanModulo:ql,mapLinear:im,inverseLerp:rm,lerp:Ns,damp:sm,pingpong:am,smoothstep:nm,smootherstep:om,randInt:lm,randFloat:cm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:pm,isPowerOfTwo:mm,ceilPowerOfTwo:fm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:_m,normalize:Ve,denormalize:Ut};class Y{constructor(e=0,t=0){Y.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*i-n*r+e.x,this.y=s*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,n,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,n,o,l,c)}set(e,t,i,r,s,n,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=n,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],_=r[0],g=r[3],m=r[6],x=r[1],v=r[4],y=r[7],R=r[2],E=r[5],w=r[8];return s[0]=n*_+o*x+l*R,s[3]=n*g+o*v+l*E,s[6]=n*m+o*y+l*w,s[1]=c*_+h*x+d*R,s[4]=c*g+h*v+d*E,s[7]=c*m+h*y+d*w,s[2]=u*_+p*x+f*R,s[5]=u*g+p*v+f*E,s[8]=u*m+p*y+f*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*n*h-t*o*c-i*s*h+i*o*l+r*s*c-r*n*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*n-o*c,u=o*l-h*s,p=c*s-n*l,f=t*d+i*u+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*n)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(n*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,n,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*n+c*o)+n+e,-r*c,r*l,-r*(-c*n+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new ke;function nd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}const xm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function $r(a,e){return new xm[a](e)}function Js(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function od(){const a=Js("canvas");return a.style.display="block",a}const Rc={};function is(a){a in Rc||(Rc[a]=!0,console.warn(a))}function ym(a,e,t){return new Promise(function(i,r){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:r();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Pc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[Ui]:{transfer:Xs,primaries:js,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[Zt]:{transfer:it,primaries:js,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[la]:{transfer:Xs,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(Lc),fromReference:a=>a.applyMatrix3(Pc)},[eo]:{transfer:it,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(Lc),fromReference:a=>a.applyMatrix3(Pc).convertLinearToSRGB()}},Mm=new Set([Ui,la]),Ye={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Mm.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=ps[e].toReference,r=ps[t].fromReference;return r(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return ps[a].primaries},getTransfer:function(a){return a===Ti?Xs:ps[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray(ps[e].luminanceCoefficients)}};function rs(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Io(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Pr;class ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Js("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let n=0;n<s.length;n++)s[n]=rs(s[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sm=0;class gr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Xt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let n=0,o=r.length;n<o;n++)r[n].isDataTexture?s.push(Uo(r[n].image)):s.push(Uo(r[n]))}else s=Uo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ld.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bm=0;class ct extends fi{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,i=Jt,r=Jt,s=lt,n=ci,o=Dt,l=mi,c=ct.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Xt(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=n,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jn)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=jn;ct.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*s,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*s,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*s,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const n=e.elements,o=n[0],l=n[4],c=n[8],h=n[1],d=n[5],u=n[9],p=n[2],f=n[6],_=n[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+f)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,x=(d+1)/2,v=(_+1)/2,y=(l+h)/4,R=(c+p)/4,E=(u+f)/4;return m>x&&m>v?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=y/i,s=R/i):x>v?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=y/r,s=E/r):v<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),i=R/s,r=E/s),this.set(i,r,s,t),this}let g=Math.sqrt((f-u)*(f-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(f-u)/g,this.y=(c-p)/g,this.z=(h-l)/g,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cd extends fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ct(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const n=i.count;for(let o=0;o<n;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends cd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class to extends ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tm extends ii{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new to(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Yl extends ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends ii{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Yl(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class zt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,n,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=s[n+0],p=s[n+1],f=s[n+2],_=s[n+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=f,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==f){let g=1-o;const m=l*u+c*p+h*f+d*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,m*x);g=Math.sin(g*E)/R,o=Math.sin(o*E)/R}const y=o*x;if(l=l*g+u*y,c=c*g+p*y,h=h*g+f*y,d=d*g+_*y,g===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,n){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[n],u=s[n+1],p=s[n+2],f=s[n+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,n=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),u=l(i/2),p=l(r/2),f=l(s/2);switch(n){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],n=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(n-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+n)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+n)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(n-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,n=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+n*o+r*c-s*l,this._y=r*h+n*l+s*o-i*c,this._z=s*h+n*c+i*l-r*o,this._w=n*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,n=this._w;let o=n*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=n,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*n+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=n*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,n=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*n,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*n,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*n,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,n=e.y,o=e.z,l=e.w,c=2*(n*r-o*i),h=2*(o*t-s*r),d=2*(s*i-n*t);return this.x=t+l*c+n*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,n=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*n-i*l,this.z=i*o-r*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new C,Ic=new zt;class Ot{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=s.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,$t):$t.fromBufferAttribute(s,n),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,n=r.length;s<n;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),xa.subVectors(this.max,ms),Lr.subVectors(e.a,ms),Ir.subVectors(e.b,ms),Ur.subVectors(e.c,ms),Ni.subVectors(Ir,Lr),Oi.subVectors(Ur,Ir),Qi.subVectors(Lr,Ur);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-Qi.z,Qi.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,Qi.z,0,-Qi.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-Qi.y,Qi.x,0];return!No(t,Lr,Ir,Ur,xa)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Lr,Ir,Ur,xa))?!1:(ya.crossVectors(Ni,Oi),t=[ya.x,ya.y,ya.z],No(t,Lr,Ir,Ur,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new C,new C,new C,new C,new C,new C,new C,new C],$t=new C,va=new Ot,Lr=new C,Ir=new C,Ur=new C,Ni=new C,Oi=new C,Qi=new C,ms=new C,xa=new C,ya=new C,er=new C;function No(a,e,t,i,r){for(let s=0,n=a.length-3;s<=n;s+=3){er.fromArray(a,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),h=i.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wm=new Ot,fs=new C,Oo=new C;class Ct{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,n=e.length;s<n;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Oo)),this.expandByPoint(fs.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new C,Fo=new C,Ma=new C,Fi=new C,Bo=new C,Sa=new C,zo=new C;class cs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fo.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Fo);const s=e.distanceTo(t)*.5,n=-this.direction.dot(Ma),o=Fi.dot(this.direction),l=-Fi.dot(Ma),c=Fi.lengthSq(),h=Math.abs(1-n*n);let d,u,p,f;if(h>0)if(d=n*l-o,u=n*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){const _=1/h;d*=_,u*=_,p=d*(d+n*u+2*o)+u*(n*d+u+2*l)+c}else u=s,d=Math.max(0,-(n*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(n*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-n*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(n*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=n>0?-s:s,d=Math.max(0,-(n*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fo).addScaledVector(Ma,u),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const n=Math.sqrt(s-r),o=i-n,l=i+n;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,n,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||s>r||((s>i||isNaN(i))&&(i=s),(n<r||isNaN(r))&&(r=n),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,s){Bo.subVectors(t,e),Sa.subVectors(i,e),zo.crossVectors(Bo,Sa);let n=this.direction.dot(zo),o;if(n>0){if(r)return null;o=1}else if(n<0)o=-1,n=-n;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(Sa.crossVectors(Fi,Sa));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Fi));if(c<0||l+c>n)return null;const h=-o*Fi.dot(zo);return h<0?null:this.at(h/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,i,r,s,n,o,l,c,h,d,u,p,f,_,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,n,o,l,c,h,d,u,p,f,_,g)}set(e,t,i,r,s,n,o,l,c,h,d,u,p,f,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),n=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,n=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=n*h,p=n*d,f=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=f+p*c,t[10]=n*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,f=c*h,_=c*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=n*c,t[1]=n*d,t[5]=n*h,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=n*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,f=c*h,_=c*d;t[0]=u-_*o,t[4]=-n*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=n*h,t[9]=_-u*o,t[2]=-n*c,t[6]=o,t[10]=n*l}else if(e.order==="ZYX"){const u=n*h,p=n*d,f=o*h,_=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=n*l}else if(e.order==="YZX"){const u=n*l,p=n*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=n*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){const u=n*l,p=n*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=n*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,Cm)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Bi.crossVectors(i,Ht),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Bi.crossVectors(i,Ht)),Bi.normalize(),ba.crossVectors(Ht,Bi),r[0]=Bi.x,r[4]=ba.x,r[8]=Ht.x,r[1]=Bi.y,r[5]=ba.y,r[9]=Ht.y,r[2]=Bi.z,r[6]=ba.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],_=i[6],g=i[10],m=i[14],x=i[3],v=i[7],y=i[11],R=i[15],E=r[0],w=r[4],P=r[8],b=r[12],M=r[1],I=r[5],O=r[9],F=r[13],V=r[2],W=r[6],H=r[10],$=r[14],G=r[3],oe=r[7],fe=r[11],Re=r[15];return s[0]=n*E+o*M+l*V+c*G,s[4]=n*w+o*I+l*W+c*oe,s[8]=n*P+o*O+l*H+c*fe,s[12]=n*b+o*F+l*$+c*Re,s[1]=h*E+d*M+u*V+p*G,s[5]=h*w+d*I+u*W+p*oe,s[9]=h*P+d*O+u*H+p*fe,s[13]=h*b+d*F+u*$+p*Re,s[2]=f*E+_*M+g*V+m*G,s[6]=f*w+_*I+g*W+m*oe,s[10]=f*P+_*O+g*H+m*fe,s[14]=f*b+_*F+g*$+m*Re,s[3]=x*E+v*M+y*V+R*G,s[7]=x*w+v*I+y*W+R*oe,s[11]=x*P+v*O+y*H+R*fe,s[15]=x*b+v*F+y*$+R*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],n=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],f=e[3],_=e[7],g=e[11],m=e[15];return f*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*p-i*l*p)+_*(+t*l*p-t*c*u+s*n*u-r*n*p+r*c*h-s*l*h)+g*(+t*c*d-t*o*p-s*n*d+i*n*p+s*o*h-i*c*h)+m*(-r*o*h-t*l*d+t*o*u+r*n*d-i*n*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],g=e[14],m=e[15],x=d*g*c-_*u*c+_*l*p-o*g*p-d*l*m+o*u*m,v=f*u*c-h*g*c-f*l*p+n*g*p+h*l*m-n*u*m,y=h*_*c-f*d*c+f*o*p-n*_*p-h*o*m+n*d*m,R=f*d*l-h*_*l-f*o*u+n*_*u+h*o*g-n*d*g,E=t*x+i*v+r*y+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(_*u*s-d*g*s-_*r*p+i*g*p+d*r*m-i*u*m)*w,e[2]=(o*g*s-_*l*s+_*r*c-i*g*c-o*r*m+i*l*m)*w,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*p-i*l*p)*w,e[4]=v*w,e[5]=(h*g*s-f*u*s+f*r*p-t*g*p-h*r*m+t*u*m)*w,e[6]=(f*l*s-n*g*s-f*r*c+t*g*c+n*r*m-t*l*m)*w,e[7]=(n*u*s-h*l*s+h*r*c-t*u*c-n*r*p+t*l*p)*w,e[8]=y*w,e[9]=(f*d*s-h*_*s-f*i*p+t*_*p+h*i*m-t*d*m)*w,e[10]=(n*_*s-f*o*s+f*i*c-t*_*c-n*i*m+t*o*m)*w,e[11]=(h*o*s-n*d*s-h*i*c+t*d*c+n*i*p-t*o*p)*w,e[12]=R*w,e[13]=(h*_*r-f*d*r+f*i*u-t*_*u-h*i*g+t*d*g)*w,e[14]=(f*o*r-n*_*r-f*i*l+t*_*l+n*i*g-t*o*g)*w,e[15]=(n*d*r-h*o*r+h*i*l-t*d*l-n*i*u+t*o*u)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,n=e.x,o=e.y,l=e.z,c=s*n,h=s*o;return this.set(c*n+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*n,0,c*l-r*o,h*l+r*n,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,n){return this.set(1,i,s,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,n=t._y,o=t._z,l=t._w,c=s+s,h=n+n,d=o+o,u=s*c,p=s*h,f=s*d,_=n*h,g=n*d,m=o*d,x=l*c,v=l*h,y=l*d,R=i.x,E=i.y,w=i.z;return r[0]=(1-(_+m))*R,r[1]=(p+y)*R,r[2]=(f-v)*R,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(u+m))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(f+v)*w,r[9]=(g-x)*w,r[10]=(1-(u+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const n=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const l=1/s,c=1/n,h=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=c,Qt.elements[5]*=c,Qt.elements[6]*=c,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),i.x=s,i.y=n,i.z=o,this}makePerspective(e,t,i,r,s,n,o=ui){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let p,f;if(o===ui)p=-(n+s)/(n-s),f=-2*n*s/(n-s);else if(o===Zs)p=-n/(n-s),f=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,n,o=ui){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(n-s),u=(t+e)*c,p=(i+r)*h;let f,_;if(o===ui)f=(n+s)*d,_=-2*d;else if(o===Zs)f=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Dr=new C,Qt=new Le,Am=new C(0,0,0),Cm=new C(1,1,1),Bi=new C,ba=new C,Ht=new C,Uc=new Le,Dc=new zt;class jt{constructor(e=0,t=0,i=0,r=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],n=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-n,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rm=0;const Nc=new C,Nr=new zt,yi=new Le,Ta=new C,gs=new C,Pm=new C,Lm=new zt,Oc=new C(1,0,0),Fc=new C(0,1,0),Bc=new C(0,0,1),zc={type:"added"},Im={type:"removed"},Or={type:"childadded",child:null},ko={type:"childremoved",child:null};let et=class dn extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new C,t=new jt,i=new zt,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new ke}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(gs,Ta,this.up):yi.lookAt(Ta,gs,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(yi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Im),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,Pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=n(e.geometries),l=n(e.materials),c=n(e.textures),h=n(e.images),d=n(e.shapes),u=n(e.skeletons),p=n(e.animations),f=n(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function n(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};et.DEFAULT_UP=new C(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new C,Mi=new C,Vo=new C,Si=new C,Fr=new C,Br=new C,kc=new C,Ho=new C,Go=new C,Wo=new C;class Wt{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ei.subVectors(e,t),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ei.subVectors(r,t),Mi.subVectors(i,t),Vo.subVectors(e,t);const n=ei.dot(ei),o=ei.dot(Mi),l=ei.dot(Vo),c=Mi.dot(Mi),h=Mi.dot(Vo),d=n*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,f=(n*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,r,s,n,o,l){return this.getBarycoord(e,t,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(n,Si.y),l.addScaledVector(o,Si.z),l)}static isFrontFacing(e,t,i,r){return ei.subVectors(i,t),Mi.subVectors(e,t),ei.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ei.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let n,o;Fr.subVectors(r,i),Br.subVectors(s,i),Ho.subVectors(e,i);const l=Fr.dot(Ho),c=Br.dot(Ho);if(l<=0&&c<=0)return t.copy(i);Go.subVectors(e,r);const h=Fr.dot(Go),d=Br.dot(Go);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return n=l/(l-h),t.copy(i).addScaledVector(Fr,n);Wo.subVectors(e,s);const p=Fr.dot(Wo),f=Br.dot(Wo);if(f>=0&&p<=f)return t.copy(s);const _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Br,o);const g=h*f-p*d;if(g<=0&&d-h>=0&&p-f>=0)return kc.subVectors(s,r),o=(d-h)/(d-h+(p-f)),t.copy(r).addScaledVector(kc,o);const m=1/(g+_+u);return n=_*m,o=u*m,t.copy(i).addScaledVector(Fr,n).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Xo(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=ql(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,n=2*i-s;this.r=Xo(n,s,e+1/3),this.g=Xo(n,s,e),this.b=Xo(n,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=r[1],o=r[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ye.fromWorkingColorSpace(wt.copy(this),e),Math.round(ot(wt.r*255,0,255))*65536+Math.round(ot(wt.g*255,0,255))*256+Math.round(ot(wt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,n=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+n)/2;if(o===n)l=0,c=0;else{const d=n-o;switch(c=h<=.5?d/(n+o):d/(2-n-o),n){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Zt){Ye.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ea);const i=Ns(zi.h,Ea.h,t),r=Ns(zi.s,Ea.s,t),s=Ns(zi.l,Ea.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new me;me.NAMES=hd;let Um=0;class Rt extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Xt(),this.name="",this.type="Material",this.blending=vr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mn,this.blendDst=fn,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mn&&(i.blendSrc=this.blendSrc),this.blendDst!==fn&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const n=[];for(const o in s){const l=s[o];delete l.metadata,n.push(l)}return n}if(t){const s=r(e.textures),n=r(e.images);s.length>0&&(i.textures=s),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yi extends Rt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ei=Dm();function Dm(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)n[l]=l<<23;n[31]=1199570944,n[32]=2147483648;for(let l=33;l<63;++l)n[l]=2147483648+(l-32<<23);n[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:n,offsetTable:o}}function Bt(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=ot(a,-65504,65504),Ei.floatView[0]=a;const e=Ei.uint32View[0],t=e>>23&511;return Ei.baseTable[t]+((e&8388607)>>Ei.shiftTable[t])}function ws(a){const e=a>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[e]+(a&1023)]+Ei.exponentTable[e],Ei.floatView[0]}const As={toHalfFloat:Bt,fromHalfFloat:ws},ft=new C,wa=new Y;class $e{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ys,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return is("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ut(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ut(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ut(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ut(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ut(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ys&&(e.usage=this.usage),e}}class Nm extends $e{constructor(e,t,i){super(new Int8Array(e),t,i)}}class Om extends $e{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Fm extends $e{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class Bm extends $e{constructor(e,t,i){super(new Int16Array(e),t,i)}}class Zl extends $e{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zm extends $e{constructor(e,t,i){super(new Int32Array(e),t,i)}}class Jl extends $e{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class km extends $e{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=ws(this.array[e*this.itemSize]);return this.normalized&&(t=Ut(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=Bt(t),this}getY(e){let t=ws(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ut(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=Bt(t),this}getZ(e){let t=ws(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ut(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=Bt(t),this}getW(e){let t=ws(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ut(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=Bt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array)),this.array[e+0]=Bt(t),this.array[e+1]=Bt(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=Bt(t),this.array[e+1]=Bt(i),this.array[e+2]=Bt(r),this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[e+0]=Bt(t),this.array[e+1]=Bt(i),this.array[e+2]=Bt(r),this.array[e+3]=Bt(s),this}}class Se extends $e{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vm=0;const Yt=new Le,jo=new et,zr=new C,Gt=new Ot,_s=new Ot,yt=new C;class Ge extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?Jl:Zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const o=t[s];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Gt.min,_s.min),Gt.expandByPoint(yt),yt.addVectors(Gt.max,_s.max),Gt.expandByPoint(yt)):(Gt.expandByPoint(_s.min),Gt.expandByPoint(_s.max))}Gt.getCenter(i);let r=0;for(let s=0,n=e.count;s<n;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,n=t.length;s<n;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),yt.add(zr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));const n=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new C,l[P]=new C;const c=new C,h=new C,d=new C,u=new Y,p=new Y,f=new Y,_=new C,g=new C;function m(P,b,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,b),f.fromBufferAttribute(s,M),h.sub(c),d.sub(c),p.sub(u),f.sub(u);const I=1/(p.x*f.y-f.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(I),o[P].add(_),o[b].add(_),o[M].add(_),l[P].add(g),l[b].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,O=M.count;for(let F=I,V=I+O;F<V;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new C,y=new C,R=new C,E=new C;function w(P){R.fromBufferAttribute(r,P),E.copy(R);const b=o[P];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(E,b);const M=y.dot(l[P])<0?-1:1;n.setXYZW(P,v.x,v.y,v.z,M)}for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,O=M.count;for(let F=I,V=I+O;F<V;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new C,s=new C,n=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,p=e.count;u<p;u+=3){const f=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),n.fromBufferAttribute(t,g),h.subVectors(n,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),n.fromBufferAttribute(t,u+2),h.subVectors(n,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,f=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let m=0;m<h;m++)u[f++]=c[p++]}return new $e(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let o=0,l=n.length;o<l;o++){const c=n[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let c=0,h=n.length;c<h;c++){const d=n[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new Le,tr=new cs,Aa=new Ct,Hc=new C,kr=new C,Vr=new C,Hr=new C,qo=new C,Ca=new C,Ra=new Y,Pa=new Y,La=new Y,Gc=new C,Wc=new C,Xc=new C,Ia=new C,Ua=new C;class gt extends et{constructor(e=new Ge,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(qo.fromBufferAttribute(d,e),n?Ca.addScaledVector(qo,h):Ca.addScaledVector(qo.sub(t),h))}t.add(Ca)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(Aa.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Aa,Hc)===null||tr.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(Vc.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,n=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(n))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=n[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,R=v;y<R;y+=3){const E=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);r=Da(this,m,e,i,c,h,d,E,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const x=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);r=Da(this,n,e,i,c,h,d,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=n[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,R=v;y<R;y+=3){const E=y,w=y+1,P=y+2;r=Da(this,m,e,i,c,h,d,E,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const x=g,v=g+1,y=g+2;r=Da(this,n,e,i,c,h,d,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Hm(a,e,t,i,r,s,n,o){let l;if(e.side===Nt?l=i.intersectTriangle(n,s,r,!0,o):l=i.intersectTriangle(r,s,n,e.side===Ri,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:a}}function Da(a,e,t,i,r,s,n,o,l,c){a.getVertexPosition(o,kr),a.getVertexPosition(l,Vr),a.getVertexPosition(c,Hr);const h=Hm(a,e,t,i,kr,Vr,Hr,Ia);if(h){r&&(Ra.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,l),La.fromBufferAttribute(r,c),h.uv=Wt.getInterpolation(Ia,kr,Vr,Hr,Ra,Pa,La,new Y)),s&&(Ra.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,l),La.fromBufferAttribute(s,c),h.uv1=Wt.getInterpolation(Ia,kr,Vr,Hr,Ra,Pa,La,new Y)),n&&(Gc.fromBufferAttribute(n,o),Wc.fromBufferAttribute(n,l),Xc.fromBufferAttribute(n,c),h.normal=Wt.getInterpolation(Ia,kr,Vr,Hr,Gc,Wc,Xc,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};Wt.getNormal(kr,Vr,Hr,d.normal),h.face=d}return h}class wr extends Ge{constructor(e=1,t=1,i=1,r=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:n};const o=this;r=Math.floor(r),s=Math.floor(s),n=Math.floor(n);const l=[],c=[],h=[],d=[];let u=0,p=0;f("z","y","x",-1,-1,i,t,e,n,s,0),f("z","y","x",1,-1,i,t,-e,n,s,1),f("x","z","y",1,1,e,i,t,r,n,2),f("x","z","y",1,-1,e,i,-t,r,n,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function f(_,g,m,x,v,y,R,E,w,P,b){const M=y/w,I=R/P,O=y/2,F=R/2,V=E/2,W=w+1,H=P+1;let $=0,G=0;const oe=new C;for(let fe=0;fe<H;fe++){const Re=fe*I-F;for(let Xe=0;Xe<W;Xe++){const Ze=Xe*M-O;oe[_]=Ze*x,oe[g]=Re*v,oe[m]=V,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[m]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Xe/w),d.push(1-fe/P),$+=1}}for(let fe=0;fe<P;fe++)for(let Re=0;Re<w;Re++){const Xe=u+Re+W*fe,Ze=u+Re+W*(fe+1),X=u+(Re+1)+W*(fe+1),te=u+(Re+1)+W*fe;l.push(Xe,Ze,te),l.push(Ze,X,te),G+=6}o.addGroup(p,G,b),p+=G,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(a){const e={};for(let t=0;t<a.length;t++){const i=ns(a[t]);for(const r in i)e[r]=i[r]}return e}function Gm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ud(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const dd={clone:ns,merge:It};var Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Rt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ro extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new C,jc=new Y,qc=new Y;class bt extends ro{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,jc,qc),t.subVectors(qc,jc)}setViewOffset(e,t,i,r,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const n=this.view;if(this.view!==null&&this.view.enabled){const l=n.fullWidth,c=n.fullHeight;s+=n.offsetX*r/l,t-=n.offsetY*i/c,r*=n.width/l,i*=n.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Wr=1;class pd extends et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bt(Gr,Wr,e,t);r.layers=this.layers,this.add(r);const s=new bt(Gr,Wr,e,t);s.layers=this.layers,this.add(s);const n=new bt(Gr,Wr,e,t);n.layers=this.layers,this.add(n);const o=new bt(Gr,Wr,e,t);o.layers=this.layers,this.add(o);const l=new bt(Gr,Wr,e,t);l.layers=this.layers,this.add(l);const c=new bt(Gr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,n,o,l]=t;for(const c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,n,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class ca extends ct{constructor(e,t,i,r,s,n,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,i,r,s,n,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class md extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ca(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Ai});s.uniforms.tEquirect.value=t;const n=new gt(r,s),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=lt),new pd(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(s)}}const Yo=new C,jm=new C,qm=new ke;class Gi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yo.subVectors(i,t).cross(jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qm.getNormalMatrix(e),r=this.coplanarPoint(Yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Ct,Na=new C;class ha{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,n=new Gi){this.planes=[e,t,i,r,s,n]}set(e,t,i,r,s,n){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(n),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui){const i=this.planes,r=e.elements,s=r[0],n=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],f=r[9],_=r[10],g=r[11],m=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,u-c,g-p,y-m).normalize(),i[1].setComponents(l+s,u+c,g+p,y+m).normalize(),i[2].setComponents(l+n,u+h,g+f,y+x).normalize(),i[3].setComponents(l-n,u-h,g-f,y-x).normalize(),i[4].setComponents(l-o,u-d,g-_,y-v).normalize(),t===ui)i[5].setComponents(l+o,u+d,g+_,y+v).normalize();else if(t===Zs)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let a=null,e=!1,t=null,i=null;function r(s,n){t(s,n),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Ym(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=a.HALF_FLOAT:p=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=a.SHORT;else if(c instanceof Uint32Array)p=a.UNSIGNED_INT;else if(c instanceof Int32Array)p=a.INT;else if(c instanceof Int8Array)p=a.BYTE;else if(c instanceof Uint8Array)p=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(a.bindBuffer(c,o),d.count===-1&&u.length===0&&a.bufferSubData(c,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){const _=u[p];a.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(a.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:n}}class hs extends Ge{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,n=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*u-n;for(let v=0;v<c;v++){const y=v*d-s;f.push(y,-x,0),_.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const v=x+c*m,y=x+c*(m+1),R=x+1+c*(m+1),E=x+1+c*m;p.push(v,y,E),p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jm=`#ifdef USE_ALPHAHASH
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
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r_=`#define DISTANCE
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
}`,s_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,__=`#define PHONG
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
}`,v_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,x_=`#define STANDARD
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
}`,y_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,M_=`#define TOON
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
}`,S_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,b_=`uniform float size;
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
}`,T_=`uniform vec3 diffuse;
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
}`,E_=`#include <common>
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
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,A_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,C_=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Zm,alphahash_pars_fragment:Jm,alphamap_fragment:Km,alphamap_pars_fragment:$m,alphatest_fragment:Qm,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:rf,batching_pars_vertex:sf,batching_vertex:af,begin_vertex:nf,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:ff,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Ef,colorspace_fragment:wf,colorspace_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Hf,envmap_vertex:If,fog_vertex:Uf,fog_pars_vertex:Df,fog_fragment:Nf,fog_pars_fragment:Of,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:kf,lights_pars_begin:Vf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:jf,lights_physical_fragment:qf,lights_physical_pars_fragment:Yf,lights_fragment_begin:Zf,lights_fragment_maps:Jf,lights_fragment_end:Kf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ig,map_pars_fragment:rg,map_particle_fragment:sg,map_particle_pars_fragment:ag,metalnessmap_fragment:ng,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:fg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:bg,packing:Tg,premultiplied_alpha_fragment:Eg,project_vertex:wg,dithering_fragment:Ag,dithering_pars_fragment:Cg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Ug,shadowmask_pars_fragment:Dg,skinbase_vertex:Ng,skinning_pars_vertex:Og,skinning_vertex:Fg,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:kg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Hg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:jg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Kg,backgroundCube_frag:$g,cube_vert:Qg,cube_frag:e_,depth_vert:t_,depth_frag:i_,distanceRGBA_vert:r_,distanceRGBA_frag:s_,equirect_vert:a_,equirect_frag:n_,linedashed_vert:o_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:h_,meshlambert_vert:u_,meshlambert_frag:d_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:f_,meshnormal_frag:g_,meshphong_vert:__,meshphong_frag:v_,meshphysical_vert:x_,meshphysical_frag:y_,meshtoon_vert:M_,meshtoon_frag:S_,points_vert:b_,points_frag:T_,shadow_vert:E_,shadow_frag:w_,sprite_vert:A_,sprite_frag:C_},ce={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ti={basic:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new me(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new me(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:It([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:It([ce.lights,ce.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ti.physical={uniforms:It([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Oa={r:0,b:0,g:0},rr=new jt,R_=new Le;function P_(a,e,t,i,r,s,n){const o=new me(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function f(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const y=f(x);y===null?m(o,l):y&&y.isColor&&(m(y,1),v=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,n):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(a.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function g(x,v){const y=f(v);y&&(y.isCubeTexture||y.mapping===ls)?(h===void 0&&(h=new gt(new wr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ns(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(v.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(rr)),h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==it,(d!==y||u!==y.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=a.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gt(new hs(2,2),new ri({name:"BackgroundMaterial",uniforms:ns(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(Oa,ud(a)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,v,n)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:g}}function L_(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,n=!1;function o(M,I,O,F,V){let W=!1;const H=d(F,O,I);s!==H&&(s=H,c(s.object)),W=p(M,F,O,V),W&&f(M,F,O,V),V!==null&&e.update(V,a.ELEMENT_ARRAY_BUFFER),(W||n)&&(n=!1,y(M,I,O,F),V!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function h(M){return a.deleteVertexArray(M)}function d(M,I,O){const F=O.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let W=V[I.id];W===void 0&&(W={},V[I.id]=W);let H=W[F];return H===void 0&&(H=u(l()),W[F]=H),H}function u(M){const I=[],O=[],F=[];for(let V=0;V<t;V++)I[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,I,O,F){const V=s.attributes,W=I.attributes;let H=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){const oe=V[G];let fe=W[G];if(fe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function f(M,I,O,F){const V={},W=I.attributes;let H=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){let oe=W[G];oe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),V[G]=fe,H++}s.attributes=V,s.attributesNum=H,s.index=F}function _(){const M=s.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function g(M){m(M,0)}function m(M,I){const O=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;O[M]=1,F[M]===0&&(a.enableVertexAttribArray(M),F[M]=1),V[M]!==I&&(a.vertexAttribDivisor(M,I),V[M]=I)}function x(){const M=s.newAttributes,I=s.enabledAttributes;for(let O=0,F=I.length;O<F;O++)I[O]!==M[O]&&(a.disableVertexAttribArray(O),I[O]=0)}function v(M,I,O,F,V,W,H){H===!0?a.vertexAttribIPointer(M,I,O,V,W):a.vertexAttribPointer(M,I,O,F,V,W)}function y(M,I,O,F){_();const V=F.attributes,W=O.getAttributes(),H=I.defaultAttributeValues;for(const $ in W){const G=W[$];if(G.location>=0){let oe=V[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const fe=oe.normalized,Re=oe.itemSize,Xe=e.get(oe);if(Xe===void 0)continue;const Ze=Xe.buffer,X=Xe.type,te=Xe.bytesPerElement,de=X===a.INT||X===a.UNSIGNED_INT||oe.gpuType===qn;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Ie=pe.stride,Ce=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)m(G.location+Ne,pe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)g(G.location+Ne);a.bindBuffer(a.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<G.locationSize;Ne++)v(G.location+Ne,Re/G.locationSize,X,fe,Ie*te,(Ce+Re/G.locationSize*Ne)*te,de)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<G.locationSize;pe++)g(G.location+pe);a.bindBuffer(a.ARRAY_BUFFER,Ze);for(let pe=0;pe<G.locationSize;pe++)v(G.location+pe,Re/G.locationSize,X,fe,Re*te,Re/G.locationSize*pe*te,de)}}else if(H!==void 0){const fe=H[$];if(fe!==void 0)switch(fe.length){case 2:a.vertexAttrib2fv(G.location,fe);break;case 3:a.vertexAttrib3fv(G.location,fe);break;case 4:a.vertexAttrib4fv(G.location,fe);break;default:a.vertexAttrib1fv(G.location,fe)}}}}x()}function R(){P();for(const M in i){const I=i[M];for(const O in I){const F=I[O];for(const V in F)h(F[V].object),delete F[V];delete I[O]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const O in I){const F=I[O];for(const V in F)h(F[V].object),delete F[V];delete I[O]}delete i[M.id]}function w(M){for(const I in i){const O=i[I];if(O[M.id]===void 0)continue;const F=O[M.id];for(const V in F)h(F[V].object),delete F[V];delete O[M.id]}}function P(){b(),n=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function I_(a,e,t){let i;function r(c){i=c}function s(c,h){a.drawArrays(i,c,h),t.update(h,i,1)}function n(c,h,d){d!==0&&(a.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)n(c[f],h[f],u[f]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];for(let _=0;_<u.length;_++)t.update(f,i,u[_])}}this.setMode=r,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function U_(a,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(E){return!(E!==Dt&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const w=E===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==mi&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Tt&&!w)}function l(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:R}}function D_(a){const e=this;let t=null,i=0,r=!1,s=!1;const n=new Gi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const f=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=a.get(d);if(!r||f===null||f.length===0||s&&!g)s?h(null):c();else{const x=s?0:i,v=x*4;let y=m.clippingState||null;l.value=y,y=h(f,u,v,p);for(let R=0;R!==v;++R)y[R]=t[R];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,f){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const m=p+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=p;v!==_;++v,y+=4)n.copy(d[v]).applyMatrix4(x,o),n.normal.toArray(g,y),g[y+3]=n.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function N_(a){let e=new WeakMap;function t(n,o){return o===zs?n.mapping=Pi:o===ks&&(n.mapping=Xi),n}function i(n){if(n&&n.isTexture){const o=n.mapping;if(o===zs||o===ks)if(e.has(n)){const l=e.get(n).texture;return t(l,n.mapping)}else{const l=n.image;if(l&&l.height>0){const c=new md(l.height);return c.fromEquirectangularTexture(a,n),e.set(n,c),n.addEventListener("dispose",r),t(c.texture,n.mapping)}else return null}}return n}function r(n){const o=n.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class so extends ro{constructor(e=-1,t=1,i=1,r=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,n=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,n=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,n,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,Yc=[.125,.215,.35,.446,.526,.582],pr=20,Zo=new so,Zc=new me;let Jo=null,Ko=0,$o=0,Qo=!1;const dr=(1+Math.sqrt(5))/2,Xr=1/dr,Jc=[new C(-dr,Xr,0),new C(dr,Xr,0),new C(-Xr,0,dr),new C(Xr,0,dr),new C(0,dr,-Xr),new C(0,dr,Xr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Ko,$o),this._renderer.xr.enabled=Qo,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:lt,minFilter:lt,generateMipmaps:!1,type:hi,format:Dt,colorSpace:Ui,depthBuffer:!1},r=Kc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(s)),this._blurMaterial=F_(s,e,t)}return r}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,r){const s=new bt(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Zc),l.toneMapping=Ci,l.autoClear=!1;const d=new Yi({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),u=new gt(new wr,d);let p=!1;const f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Zc),p=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(s.up.set(0,n[_],0),s.lookAt(o[_],0,0)):g===1?(s.up.set(0,0,n[_]),s.lookAt(0,o[_],0)):(s.up.set(0,n[_],0),s.lookAt(0,0,o[_]));const m=this._cubeSize;Fa(r,g*m,_>2?m:0,m,m),l.setRenderTarget(r),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pi||e.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,n=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(n,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const n=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jc[(r-s-1)%Jc.length];this._blur(e,s-1,s,n,o)}t.autoClear=i}_blur(e,t,i,r,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",s),this._halfBlur(n,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,n,o){const l=this._renderer,c=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new gt(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,f=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pr-1),_=s/f,g=isFinite(s)?1+Math.floor(h*_):pr;g>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pr}`);const m=[];let x=0;for(let w=0;w<pr;++w){const P=w/_,b=Math.exp(-P*P/2);m.push(b),w===0?x+=b:w<g&&(x+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=n==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=f,u.mipInt.value=v-i;const y=this._sizeLods[r],R=3*y*(r>v-Qr?r-v+Qr:0),E=4*(this._cubeSize-y);Fa(t,R,E,3*y,2*y),l.setRenderTarget(t),l.render(d,Zo)}}function O_(a){const e=[],t=[],i=[];let r=a;const s=a-Qr+1+Yc.length;for(let n=0;n<s;n++){const o=Math.pow(2,r);t.push(o);let l=1/o;n>a-Qr?l=Yc[n-a+Qr-1]:n===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,f=6,_=3,g=2,m=1,x=new Float32Array(_*f*p),v=new Float32Array(g*f*p),y=new Float32Array(m*f*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,P=E>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(b,_*f*E),v.set(u,g*f*E);const M=[E,E,E,E,E,E];y.set(M,m*f*E)}const R=new Ge;R.setAttribute("position",new $e(x,_)),R.setAttribute("uv",new $e(v,g)),R.setAttribute("faceIndex",new $e(y,m)),e.push(R),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kc(a,e,t){const i=new ii(a,e,t);return i.texture.mapping=ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function F_(a,e,t){const i=new Float32Array(pr),r=new C(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function $c(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Qc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B_(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===zs||l===ks,h=l===Pi||l===Xi;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new El(a)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new El(a)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:n}}function z_(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&is("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function k_(a,e,t,i){const r={},s=new WeakMap;function n(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const f in u.attributes)e.remove(u.attributes[f]);for(const f in u.morphAttributes){const _=u.morphAttributes[f];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}u.removeEventListener("dispose",n),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",n),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],a.ARRAY_BUFFER);const p=d.morphAttributes;for(const f in p){const _=p[f];for(let g=0,m=_.length;g<m;g++)e.update(_[g],a.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,f=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const R=x[v+0],E=x[v+1],w=x[v+2];u.push(R,E,E,w,w,R)}}else if(f!==void 0){const x=f.array;_=f.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const R=v+0,E=v+1,w=v+2;u.push(R,E,E,w,w,R)}}else return;const g=new(nd(u)?Jl:Zl)(u,1);g.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function V_(a,e,t){let i;function r(u){i=u}let s,n;function o(u){s=u.type,n=u.bytesPerElement}function l(u,p){a.drawElements(i,p,s,u*n),t.update(p,i,1)}function c(u,p,f){f!==0&&(a.drawElementsInstanced(i,p,s,u*n,f),t.update(p,i,f))}function h(u,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,f);let _=0;for(let g=0;g<f;g++)_+=p[g];t.update(_,i,1)}function d(u,p,f,_){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/n,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,_,0,f);let m=0;for(let x=0;x<f;x++)m+=p[x];for(let x=0;x<_.length;x++)t.update(m,i,_[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function H_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,n,o){switch(t.calls++,n){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function G_(a,e,t){const i=new WeakMap,r=new Ke;function s(n,o,l){const c=n.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*E*4*d),P=new to(w,R,E,d);P.type=Tt,P.needsUpdate=!0;const b=y*4;for(let M=0;M<d;M++){const I=m[M],O=x[M],F=v[M],V=R*E*4*M;for(let W=0;W<I.count;W++){const H=W*b;f===!0&&(r.fromBufferAttribute(I,W),w[V+H+0]=r.x,w[V+H+1]=r.y,w[V+H+2]=r.z,w[V+H+3]=0),_===!0&&(r.fromBufferAttribute(O,W),w[V+H+4]=r.x,w[V+H+5]=r.y,w[V+H+6]=r.z,w[V+H+7]=0),g===!0&&(r.fromBufferAttribute(F,W),w[V+H+8]=r.x,w[V+H+9]=r.y,w[V+H+10]=r.z,w[V+H+11]=F.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new Y(R,E)},i.set(o,u),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",n.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(a,"morphTargetBaseInfluence",f),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function W_(a,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function n(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:n}}class $l extends ct{constructor(e,t,i,r,s,n,o,l,c,h=xr){if(h!==xr&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=Li),i===void 0&&h===br&&(i=Sr),super(null,r,s,n,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gd=new ct,eh=new $l(1,1),_d=new to,vd=new Yl,xd=new ca,th=[],ih=[],rh=new Float32Array(16),sh=new Float32Array(9),ah=new Float32Array(4);function us(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let s=th[r];if(s===void 0&&(s=new Float32Array(r),th[r]=s),e!==0){i.toArray(s,0);for(let n=1,o=0;n!==e;++n)o+=t,a[n].toArray(s,o)}return s}function vt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function xt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function ao(a,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function X_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function j_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2fv(this.addr,e),xt(t,e)}}function q_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;a.uniform3fv(this.addr,e),xt(t,e)}}function Y_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4fv(this.addr,e),xt(t,e)}}function Z_(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;ah.set(i),a.uniformMatrix2fv(this.addr,!1,ah),xt(t,i)}}function J_(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;sh.set(i),a.uniformMatrix3fv(this.addr,!1,sh),xt(t,i)}}function K_(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;rh.set(i),a.uniformMatrix4fv(this.addr,!1,rh),xt(t,i)}}function $_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Q_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2iv(this.addr,e),xt(t,e)}}function ev(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;a.uniform3iv(this.addr,e),xt(t,e)}}function tv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4iv(this.addr,e),xt(t,e)}}function iv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function rv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2uiv(this.addr,e),xt(t,e)}}function sv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;a.uniform3uiv(this.addr,e),xt(t,e)}}function av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4uiv(this.addr,e),xt(t,e)}}function nv(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r);let s;this.type===a.SAMPLER_2D_SHADOW?(eh.compareFunction=jl,s=eh):s=gd,t.setTexture2D(e||s,r)}function ov(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vd,r)}function lv(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xd,r)}function cv(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_d,r)}function hv(a){switch(a){case 5126:return X_;case 35664:return j_;case 35665:return q_;case 35666:return Y_;case 35674:return Z_;case 35675:return J_;case 35676:return K_;case 5124:case 35670:return $_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(a,e){a.uniform1fv(this.addr,e)}function dv(a,e){const t=us(e,this.size,2);a.uniform2fv(this.addr,t)}function pv(a,e){const t=us(e,this.size,3);a.uniform3fv(this.addr,t)}function mv(a,e){const t=us(e,this.size,4);a.uniform4fv(this.addr,t)}function fv(a,e){const t=us(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function gv(a,e){const t=us(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _v(a,e){const t=us(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function vv(a,e){a.uniform1iv(this.addr,e)}function xv(a,e){a.uniform2iv(this.addr,e)}function yv(a,e){a.uniform3iv(this.addr,e)}function Mv(a,e){a.uniform4iv(this.addr,e)}function Sv(a,e){a.uniform1uiv(this.addr,e)}function bv(a,e){a.uniform2uiv(this.addr,e)}function Tv(a,e){a.uniform3uiv(this.addr,e)}function Ev(a,e){a.uniform4uiv(this.addr,e)}function wv(a,e,t){const i=this.cache,r=e.length,s=ao(t,r);vt(i,s)||(a.uniform1iv(this.addr,s),xt(i,s));for(let n=0;n!==r;++n)t.setTexture2D(e[n]||gd,s[n])}function Av(a,e,t){const i=this.cache,r=e.length,s=ao(t,r);vt(i,s)||(a.uniform1iv(this.addr,s),xt(i,s));for(let n=0;n!==r;++n)t.setTexture3D(e[n]||vd,s[n])}function Cv(a,e,t){const i=this.cache,r=e.length,s=ao(t,r);vt(i,s)||(a.uniform1iv(this.addr,s),xt(i,s));for(let n=0;n!==r;++n)t.setTextureCube(e[n]||xd,s[n])}function Rv(a,e,t){const i=this.cache,r=e.length,s=ao(t,r);vt(i,s)||(a.uniform1iv(this.addr,s),xt(i,s));for(let n=0;n!==r;++n)t.setTexture2DArray(e[n]||_d,s[n])}function Pv(a){switch(a){case 5126:return uv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return fv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return bv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Rv}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hv(t.type)}}class Iv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}}class Uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,n=r.length;s!==n;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const el=/(\w+)(\])?(\[|\.)?/g;function nh(a,e){a.seq.push(e),a.map[e.id]=e}function Dv(a,e,t){const i=a.name,r=i.length;for(el.lastIndex=0;;){const s=el.exec(i),n=el.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&n+2===r){nh(t,c===void 0?new Lv(o,a,e):new Iv(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Uv(o),nh(t,h)),t=h}}}class pn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),n=e.getUniformLocation(t,s.name);Dv(s,n,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,n=t.length;s!==n;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const n=e[r];n.id in t&&i.push(n)}return i}}function oh(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Nv=37297;let Ov=0;function Fv(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=r;n<s;n++){const o=n+1;i.push(`${o===e?">":" "} ${o}: ${t[n]}`)}return i.join(`
`)}function Bv(a){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(a);let i;switch(e===t?i="":e===qs&&t===js?i="LinearDisplayP3ToLinearSRGB":e===js&&t===qs&&(i="LinearSRGBToLinearDisplayP3"),a){case Ui:case la:return[i,"LinearTransferOETF"];case Zt:case eo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function lh(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fv(a.getShaderSource(e),n)}else return r}function zv(a,e){const t=Bv(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kv(a,e){let t;switch(e){case Fu:t="Linear";break;case Bu:t="Reinhard";break;case zu:t="Cineon";break;case ku:t="ACESFilmic";break;case Hu:t="AgX";break;case Gu:t="Neutral";break;case Vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new C;function Vv(){Ye.getLuminanceCoefficients(Ba);const a=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Gv(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wv(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=a.getActiveAttrib(e,r),n=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[n]={type:s.type,location:a.getAttribLocation(e,n),locationSize:o}}return t}function Cs(a){return a!==""}function ch(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(a){return a.replace(Xv,qv)}const jv=new Map;function qv(a,e){let t=He[e];if(t===void 0){const i=jv.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(a){return a.replace(Yv,Zv)}function Zv(a,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dh(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Kv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Pi:case Xi:e="ENVMAP_TYPE_CUBE";break;case ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case Nu:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function e0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function t0(a,e,t,i){const r=a.getContext(),s=t.defines;let n=t.vertexShader,o=t.fragmentShader;const l=Jv(t),c=Kv(t),h=$v(t),d=Qv(t),u=e0(t),p=Hv(t),f=Gv(s),_=r.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Cs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Cs).join(`
`),m.length>0&&(m+=`
`)):(g=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),m=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?He.tonemapping_pars_fragment:"",t.toneMapping!==Ci?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,zv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),n=wl(n),n=ch(n,t),n=hh(n,t),o=wl(o),o=ch(o,t),o=hh(o,t),n=uh(n),o=uh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+g+n,y=x+m+o,R=oh(r,r.VERTEX_SHADER,v),E=oh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(I){if(a.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(E).trim();let W=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,_,R,E);else{const $=lh(r,R,"vertex"),G=lh(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+$+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||V==="")&&(H=!1);H&&(I.diagnostics={runnable:W,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:V,prefix:m}})}r.deleteShader(R),r.deleteShader(E),P=new pn(r,_),b=Wv(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Nv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let i0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new s0(e),t.set(e,i)),i}}class s0{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}}function a0(a,e,t,i,r,s,n){const o=new io,l=new r0,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,O,F){const V=O.fog,W=F.geometry,H=b.isMeshStandardMaterial?O.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=$&&$.mapping===ls?$.image.height:null,oe=f[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Re=fe!==void 0?fe.length:0;let Xe=0;W.morphAttributes.position!==void 0&&(Xe=1),W.morphAttributes.normal!==void 0&&(Xe=2),W.morphAttributes.color!==void 0&&(Xe=3);let Ze,X,te,de;if(oe){const Je=ti[oe];Ze=Je.vertexShader,X=Je.fragmentShader}else Ze=b.vertexShader,X=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),de=l.getFragmentShaderID(b);const pe=a.getRenderTarget(),Ie=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,Ne=!!b.map,Q=!!b.matcap,A=!!$,se=!!b.aoMap,he=!!b.lightMap,re=!!b.bumpMap,ae=!!b.normalMap,Pe=!!b.displacementMap,ge=!!b.emissiveMap,Te=!!b.metalnessMap,L=!!b.roughnessMap,S=b.anisotropy>0,B=b.clearcoat>0,q=b.dispersion>0,K=b.iridescence>0,Z=b.sheen>0,we=b.transmission>0,ue=S&&!!b.anisotropyMap,ve=B&&!!b.clearcoatMap,Fe=B&&!!b.clearcoatNormalMap,ie=B&&!!b.clearcoatRoughnessMap,ye=K&&!!b.iridescenceMap,je=K&&!!b.iridescenceThicknessMap,Be=Z&&!!b.sheenColorMap,xe=Z&&!!b.sheenRoughnessMap,ze=!!b.specularMap,We=!!b.specularColorMap,st=!!b.specularIntensityMap,U=we&&!!b.transmissionMap,ne=we&&!!b.thicknessMap,j=!!b.gradientMap,J=!!b.alphaMap,le=b.alphaTest>0,Ae=!!b.alphaHash,tt=!!b.extensions;let dt=Ci;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(dt=a.toneMapping);const St={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:X,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ui,alphaToCoverage:!!b.alphaToCoverage,map:Ne,matcap:Q,envMap:A,envMapMode:A&&$.mapping,envMapCubeUVHeight:G,aoMap:se,lightMap:he,bumpMap:re,normalMap:ae,displacementMap:u&&Pe,emissiveMap:ge,normalMapObjectSpace:ae&&b.normalMapType===$u,normalMapTangentSpace:ae&&b.normalMapType===qi,metalnessMap:Te,roughnessMap:L,anisotropy:S,anisotropyMap:ue,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ie,dispersion:q,iridescence:K,iridescenceMap:ye,iridescenceThicknessMap:je,sheen:Z,sheenColorMap:Be,sheenRoughnessMap:xe,specularMap:ze,specularColorMap:We,specularIntensityMap:st,transmission:we,transmissionMap:U,thicknessMap:ne,gradientMap:j,opaque:b.transparent===!1&&b.blending===vr&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:Ae,combine:b.combine,mapUv:Ne&&_(b.map.channel),aoMapUv:se&&_(b.aoMap.channel),lightMapUv:he&&_(b.lightMap.channel),bumpMapUv:re&&_(b.bumpMap.channel),normalMapUv:ae&&_(b.normalMap.channel),displacementMapUv:Pe&&_(b.displacementMap.channel),emissiveMapUv:ge&&_(b.emissiveMap.channel),metalnessMapUv:Te&&_(b.metalnessMap.channel),roughnessMapUv:L&&_(b.roughnessMap.channel),anisotropyMapUv:ue&&_(b.anisotropyMap.channel),clearcoatMapUv:ve&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(b.sheenRoughnessMap.channel),specularMapUv:ze&&_(b.specularMap.channel),specularColorMapUv:We&&_(b.specularColorMap.channel),specularIntensityMapUv:st&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:ne&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ae||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ne||J),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===li,flipSided:b.side===Nt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&b.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(M,b),v(M,b),M.push(a.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function y(b){const M=f[b.type];let I;if(M){const O=ti[M];I=dd.clone(O.uniforms)}else I=b.uniforms;return I}function R(b,M){let I;for(let O=0,F=h.length;O<F;O++){const V=h[O];if(V.cacheKey===M){I=V,++I.usedTimes;break}}return I===void 0&&(I=new t0(a,M,b,s),h.push(I)),I}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:P}}function n0(){let a=new WeakMap;function e(n){return a.has(n)}function t(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function i(n){a.delete(n)}function r(n,o,l){a.get(n)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function o0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ph(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function mh(){const a=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function n(d,u,p,f,_,g){let m=a[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:f,renderOrder:d.renderOrder,z:_,group:g},a[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=f,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}function o(d,u,p,f,_,g){const m=n(d,u,p,f,_,g);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):t.push(m)}function l(d,u,p,f,_,g){const m=n(d,u,p,f,_,g);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||o0),i.length>1&&i.sort(u||ph),r.length>1&&r.sort(u||ph)}function h(){for(let d=e,u=a.length;d<u;d++){const p=a[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function l0(){let a=new WeakMap;function e(i,r){const s=a.get(i);let n;return s===void 0?(n=new mh,a.set(i,[n])):r>=s.length?(n=new mh,s.push(n)):n=s[r],n}function t(){a=new WeakMap}return{get:e,dispose:t}}function c0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new me};break;case"SpotLight":t={position:new C,direction:new C,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function h0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let u0=0;function d0(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function p0(a){const e=new c0,t=h0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const r=new C,s=new Le,n=new Le;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,f=0,_=0,g=0,m=0,x=0,v=0,y=0,R=0,E=0,w=0;c.sort(d0);for(let b=0,M=c.length;b<M;b++){const I=c[b],O=I.color,F=I.intensity,V=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*F,d+=O.g*F,u+=O.b*F;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],F);w++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=H,p++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(O).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;const $=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,$.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=W,y++}_++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=H,g++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const $=I.shadow,G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[f]=G,i.pointShadowMap[f]=W,i.pointShadowMatrix[f]=I.shadow.matrix,v++}i.point[f]=H,f++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(F),H.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[m]=H,m++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=f,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,P.directionalLength=p,P.pointLength=f,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=w,i.version=u0++)}function l(c,h){let d=0,u=0,p=0,f=0,_=0;const g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),n.identity(),s.copy(v.matrixWorld),s.premultiply(g),n.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(n),y.halfHeight.applyMatrix4(n),f++}else if(v.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function fh(a){const e=new p0(a),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function n(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function m0(a){let e=new WeakMap;function t(r,s=0){const n=e.get(r);let o;return n===void 0?(o=new fh(a),e.set(r,[o])):s>=n.length?(o=new fh(a),n.push(o)):o=n[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Ql extends Rt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ec extends Rt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _0(a,e,t){let i=new ha;const r=new Y,s=new Y,n=new Ke,o=new Ql({depthPacking:Ku}),l=new ec,c={},h=t.maxTextureSize,d={[Ri]:Nt,[Nt]:Ri,[li]:li},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:f0,fragmentShader:g0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ge;f.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let m=this.type;this.render=function(E,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=a.getRenderTarget(),M=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),O=a.state;O.setBlending(Ai),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=m!==oi&&this.type===oi,V=m===oi&&this.type!==oi;for(let W=0,H=E.length;W<H;W++){const $=E[W],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||F===!0||V===!0){const Re=this.type!==oi?{minFilter:Mt,magFilter:Mt}:{};G.map!==null&&G.map.dispose(),G.map=new ii(r.x,r.y,Re),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}a.setRenderTarget(G.map),a.clear();const fe=G.getViewportCount();for(let Re=0;Re<fe;Re++){const Xe=G.getViewport(Re);n.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),O.viewport(n),G.updateMatrices($,Re),i=G.getFrustum(),y(w,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&x(G,P),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,a.setRenderTarget(b,M,I)};function x(E,w){const P=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(r.x,r.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(w,null,P,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(w,null,P,p,_,null)}function v(E,w,P,b){let M=null;const I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=M.uuid,F=w.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let W=V[F];W===void 0&&(W=M.clone(),V[F]=W,w.addEventListener("dispose",R)),M=W}if(M.visible=w.visible,M.wireframe=w.wireframe,b===oi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=a.properties.get(M);O.light=P}return M}function y(E,w,P,b,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===oi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const O=e.update(E),F=E.material;if(Array.isArray(F)){const V=O.groups;for(let W=0,H=V.length;W<H;W++){const $=V[W],G=F[$.materialIndex];if(G&&G.visible){const oe=v(E,G,b,M);E.onBeforeShadow(a,E,w,P,O,oe,$),a.renderBufferDirect(P,null,O,oe,E,$),E.onAfterShadow(a,E,w,P,O,oe,$)}}}else if(F.visible){const V=v(E,F,b,M);E.onBeforeShadow(a,E,w,P,O,V,null),a.renderBufferDirect(P,null,O,V,E,null),E.onAfterShadow(a,E,w,P,O,V,null)}}const I=E.children;for(let O=0,F=I.length;O<F;O++)y(I[O],w,P,b,M)}function R(E){E.target.removeEventListener("dispose",R);for(const w in c){const P=c[w],b=E.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function v0(a){function e(){let U=!1;const ne=new Ke;let j=null;const J=new Ke(0,0,0,0);return{setMask:function(le){j!==le&&!U&&(a.colorMask(le,le,le,le),j=le)},setLocked:function(le){U=le},setClear:function(le,Ae,tt,dt,St){St===!0&&(le*=dt,Ae*=dt,tt*=dt),ne.set(le,Ae,tt,dt),J.equals(ne)===!1&&(a.clearColor(le,Ae,tt,dt),J.copy(ne))},reset:function(){U=!1,j=null,J.set(-1,0,0,0)}}}function t(){let U=!1,ne=null,j=null,J=null;return{setTest:function(le){le?de(a.DEPTH_TEST):pe(a.DEPTH_TEST)},setMask:function(le){ne!==le&&!U&&(a.depthMask(le),ne=le)},setFunc:function(le){if(j!==le){switch(le){case Cu:a.depthFunc(a.NEVER);break;case Ru:a.depthFunc(a.ALWAYS);break;case Pu:a.depthFunc(a.LESS);break;case Bs:a.depthFunc(a.LEQUAL);break;case Lu:a.depthFunc(a.EQUAL);break;case Iu:a.depthFunc(a.GEQUAL);break;case Uu:a.depthFunc(a.GREATER);break;case Du:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}j=le}},setLocked:function(le){U=le},setClear:function(le){J!==le&&(a.clearDepth(le),J=le)},reset:function(){U=!1,ne=null,j=null,J=null}}}function i(){let U=!1,ne=null,j=null,J=null,le=null,Ae=null,tt=null,dt=null,St=null;return{setTest:function(Je){U||(Je?de(a.STENCIL_TEST):pe(a.STENCIL_TEST))},setMask:function(Je){ne!==Je&&!U&&(a.stencilMask(Je),ne=Je)},setFunc:function(Je,_i,ni){(j!==Je||J!==_i||le!==ni)&&(a.stencilFunc(Je,_i,ni),j=Je,J=_i,le=ni)},setOp:function(Je,_i,ni){(Ae!==Je||tt!==_i||dt!==ni)&&(a.stencilOp(Je,_i,ni),Ae=Je,tt=_i,dt=ni)},setLocked:function(Je){U=Je},setClear:function(Je){St!==Je&&(a.clearStencil(Je),St=Je)},reset:function(){U=!1,ne=null,j=null,J=null,le=null,Ae=null,tt=null,dt=null,St=null}}}const r=new e,s=new t,n=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],p=null,f=!1,_=null,g=null,m=null,x=null,v=null,y=null,R=null,E=new me(0,0,0),w=0,P=!1,b=null,M=null,I=null,O=null,F=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const $=a.getParameter(a.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),W=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=H>=2);let G=null,oe={};const fe=a.getParameter(a.SCISSOR_BOX),Re=a.getParameter(a.VIEWPORT),Xe=new Ke().fromArray(fe),Ze=new Ke().fromArray(Re);function X(U,ne,j,J){const le=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(U,Ae),a.texParameteri(U,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(U,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let tt=0;tt<j;tt++)U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY?a.texImage3D(ne,0,a.RGBA,1,1,J,0,a.RGBA,a.UNSIGNED_BYTE,le):a.texImage2D(ne+tt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,le);return Ae}const te={};te[a.TEXTURE_2D]=X(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=X(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=X(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=X(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),n.setClear(0),de(a.DEPTH_TEST),s.setFunc(Bs),re(!1),ae(_l),de(a.CULL_FACE),se(Ai);function de(U){c[U]!==!0&&(a.enable(U),c[U]=!0)}function pe(U){c[U]!==!1&&(a.disable(U),c[U]=!1)}function Ie(U,ne){return h[U]!==ne?(a.bindFramebuffer(U,ne),h[U]=ne,U===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=ne),U===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(U,ne){let j=u,J=!1;if(U){j=d.get(ne),j===void 0&&(j=[],d.set(ne,j));const le=U.textures;if(j.length!==le.length||j[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,tt=le.length;Ae<tt;Ae++)j[Ae]=a.COLOR_ATTACHMENT0+Ae;j.length=le.length,J=!0}}else j[0]!==a.BACK&&(j[0]=a.BACK,J=!0);J&&a.drawBuffers(j)}function Ne(U){return p!==U?(a.useProgram(U),p=U,!0):!1}const Q={[Wi]:a.FUNC_ADD,[uu]:a.FUNC_SUBTRACT,[du]:a.FUNC_REVERSE_SUBTRACT};Q[pu]=a.MIN,Q[mu]=a.MAX;const A={[fu]:a.ZERO,[gu]:a.ONE,[_u]:a.SRC_COLOR,[mn]:a.SRC_ALPHA,[bu]:a.SRC_ALPHA_SATURATE,[Mu]:a.DST_COLOR,[xu]:a.DST_ALPHA,[vu]:a.ONE_MINUS_SRC_COLOR,[fn]:a.ONE_MINUS_SRC_ALPHA,[Su]:a.ONE_MINUS_DST_COLOR,[yu]:a.ONE_MINUS_DST_ALPHA,[Tu]:a.CONSTANT_COLOR,[Eu]:a.ONE_MINUS_CONSTANT_COLOR,[wu]:a.CONSTANT_ALPHA,[Au]:a.ONE_MINUS_CONSTANT_ALPHA};function se(U,ne,j,J,le,Ae,tt,dt,St,Je){if(U===Ai){f===!0&&(pe(a.BLEND),f=!1);return}if(f===!1&&(de(a.BLEND),f=!0),U!==hu){if(U!==_||Je!==P){if((g!==Wi||v!==Wi)&&(a.blendEquation(a.FUNC_ADD),g=Wi,v=Wi),Je)switch(U){case vr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case vl:a.blendFunc(a.ONE,a.ONE);break;case xl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case yl:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case vl:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case xl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case yl:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,x=null,y=null,R=null,E.set(0,0,0),w=0,_=U,P=Je}return}le=le||ne,Ae=Ae||j,tt=tt||J,(ne!==g||le!==v)&&(a.blendEquationSeparate(Q[ne],Q[le]),g=ne,v=le),(j!==m||J!==x||Ae!==y||tt!==R)&&(a.blendFuncSeparate(A[j],A[J],A[Ae],A[tt]),m=j,x=J,y=Ae,R=tt),(dt.equals(E)===!1||St!==w)&&(a.blendColor(dt.r,dt.g,dt.b,St),E.copy(dt),w=St),_=U,P=!1}function he(U,ne){U.side===li?pe(a.CULL_FACE):de(a.CULL_FACE);let j=U.side===Nt;ne&&(j=!j),re(j),U.blending===vr&&U.transparent===!1?se(Ai):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;n.setTest(J),J&&(n.setMask(U.stencilWriteMask),n.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),n.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(a.SAMPLE_ALPHA_TO_COVERAGE):pe(a.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){b!==U&&(U?a.frontFace(a.CW):a.frontFace(a.CCW),b=U)}function ae(U){U!==ou?(de(a.CULL_FACE),U!==M&&(U===_l?a.cullFace(a.BACK):U===lu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):pe(a.CULL_FACE),M=U}function Pe(U){U!==I&&(W&&a.lineWidth(U),I=U)}function ge(U,ne,j){U?(de(a.POLYGON_OFFSET_FILL),(O!==ne||F!==j)&&(a.polygonOffset(ne,j),O=ne,F=j)):pe(a.POLYGON_OFFSET_FILL)}function Te(U){U?de(a.SCISSOR_TEST):pe(a.SCISSOR_TEST)}function L(U){U===void 0&&(U=a.TEXTURE0+V-1),G!==U&&(a.activeTexture(U),G=U)}function S(U,ne,j){j===void 0&&(G===null?j=a.TEXTURE0+V-1:j=G);let J=oe[j];J===void 0&&(J={type:void 0,texture:void 0},oe[j]=J),(J.type!==U||J.texture!==ne)&&(G!==j&&(a.activeTexture(j),G=j),a.bindTexture(U,ne||te[U]),J.type=U,J.texture=ne)}function B(){const U=oe[G];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){Xe.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),Xe.copy(U))}function xe(U){Ze.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),Ze.copy(U))}function ze(U,ne){let j=l.get(ne);j===void 0&&(j=new WeakMap,l.set(ne,j));let J=j.get(U);J===void 0&&(J=a.getUniformBlockIndex(ne,U.name),j.set(U,J))}function We(U,ne){const j=l.get(ne).get(U);o.get(ne)!==j&&(a.uniformBlockBinding(ne,j,U.__bindingPointIndex),o.set(ne,j))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},G=null,oe={},h={},d=new WeakMap,u=[],p=null,f=!1,_=null,g=null,m=null,x=null,v=null,y=null,R=null,E=new me(0,0,0),w=0,P=!1,b=null,M=null,I=null,O=null,F=null,Xe.set(0,0,a.canvas.width,a.canvas.height),Ze.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),n.reset()}return{buffers:{color:r,depth:s,stencil:n},enable:de,disable:pe,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:Ne,setBlending:se,setMaterial:he,setFlipSided:re,setCullFace:ae,setLineWidth:Pe,setPolygonOffset:ge,setScissorTest:Te,activeTexture:L,bindTexture:S,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:ye,texImage3D:je,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:Fe,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:Be,viewport:xe,reset:st}}function x0(a,e){const t=a.image&&a.image.width?a.image.width/a.image.height:1;return t>e?(a.repeat.x=1,a.repeat.y=t/e,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2):(a.repeat.x=e/t,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0),a}function y0(a,e){const t=a.image&&a.image.width?a.image.width/a.image.height:1;return t>e?(a.repeat.x=e/t,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0):(a.repeat.x=1,a.repeat.y=t/e,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2),a}function M0(a){return a.repeat.x=1,a.repeat.y=1,a.offset.x=0,a.offset.y=0,a}function Al(a,e,t,i){const r=S0(i);switch(t){case zl:return a*e;case Vl:return a*e;case Hl:return a*e*2;case Jn:return a*e/r.components*r.byteLength;case oa:return a*e/r.components*r.byteLength;case Gl:return a*e*2/r.components*r.byteLength;case Kn:return a*e*2/r.components*r.byteLength;case kl:return a*e*3/r.components*r.byteLength;case Dt:return a*e*4/r.components*r.byteLength;case $n:return a*e*4/r.components*r.byteLength;case Ps:case Ls:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Is:case Us:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case _n:case xn:return Math.max(a,16)*Math.max(e,8)/4;case gn:case vn:return Math.max(a,8)*Math.max(e,8)/2;case yn:case Mn:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Sn:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bn:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Tn:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case En:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wn:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case An:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Cn:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Rn:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Pn:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ln:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case In:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Un:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Dn:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Nn:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case On:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ds:case Fn:case Bn:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Wl:case zn:return Math.ceil(a/4)*Math.ceil(e/4)*8;case kn:case Vn:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S0(a){switch(a){case mi:case Ol:return{byteLength:1,components:1};case ss:case Fl:case hi:return{byteLength:2,components:1};case Yn:case Zn:return{byteLength:2,components:4};case Li:case qn:case Tt:return{byteLength:4,components:1};case Bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}const b0={contain:x0,cover:y0,fill:M0,getByteLength:Al};function T0(a,e,t,i,r,s,n){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(L,S){return p?new OffscreenCanvas(L,S):Js("canvas")}function _(L,S,B){let q=1;const K=Te(L);if((K.width>B||K.height>B)&&(q=B/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(q*K.width),we=Math.floor(q*K.height);d===void 0&&(d=f(Z,we));const ue=S?f(Z,we):d;return ue.width=Z,ue.height=we,ue.getContext("2d").drawImage(L,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+we+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Mt&&L.minFilter!==lt}function m(L){a.generateMipmap(L)}function x(L,S,B,q,K=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=S;if(S===a.RED&&(B===a.FLOAT&&(Z=a.R32F),B===a.HALF_FLOAT&&(Z=a.R16F),B===a.UNSIGNED_BYTE&&(Z=a.R8)),S===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(Z=a.R8UI),B===a.UNSIGNED_SHORT&&(Z=a.R16UI),B===a.UNSIGNED_INT&&(Z=a.R32UI),B===a.BYTE&&(Z=a.R8I),B===a.SHORT&&(Z=a.R16I),B===a.INT&&(Z=a.R32I)),S===a.RG&&(B===a.FLOAT&&(Z=a.RG32F),B===a.HALF_FLOAT&&(Z=a.RG16F),B===a.UNSIGNED_BYTE&&(Z=a.RG8)),S===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(Z=a.RG8UI),B===a.UNSIGNED_SHORT&&(Z=a.RG16UI),B===a.UNSIGNED_INT&&(Z=a.RG32UI),B===a.BYTE&&(Z=a.RG8I),B===a.SHORT&&(Z=a.RG16I),B===a.INT&&(Z=a.RG32I)),S===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(Z=a.RGB9_E5),S===a.RGBA){const we=K?Xs:Ye.getTransfer(q);B===a.FLOAT&&(Z=a.RGBA32F),B===a.HALF_FLOAT&&(Z=a.RGBA16F),B===a.UNSIGNED_BYTE&&(Z=we===it?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return(Z===a.R16F||Z===a.R32F||Z===a.RG16F||Z===a.RG32F||Z===a.RGBA16F||Z===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(L,S){let B;return L?S===null||S===Li||S===Sr?B=a.DEPTH24_STENCIL8:S===Tt?B=a.DEPTH32F_STENCIL8:S===ss&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===Sr?B=a.DEPTH_COMPONENT24:S===Tt?B=a.DEPTH_COMPONENT32F:S===ss&&(B=a.DEPTH_COMPONENT16),B}function y(L,S){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mt&&L.minFilter!==lt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function R(L){const S=L.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&h.delete(S)}function E(L){const S=L.target;S.removeEventListener("dispose",E),b(S)}function w(L){const S=i.get(L);if(S.__webglInit===void 0)return;const B=L.source,q=u.get(B);if(q){const K=q[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(L),Object.keys(q).length===0&&u.delete(B)}i.remove(L)}function P(L){const S=i.get(L);a.deleteTexture(S.__webglTexture);const B=L.source,q=u.get(B);delete q[S.__cacheKey],n.memory.textures--}function b(L){const S=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let K=0;K<S.__webglFramebuffer[q].length;K++)a.deleteFramebuffer(S.__webglFramebuffer[q][K]);else a.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)a.deleteFramebuffer(S.__webglFramebuffer[q]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=L.textures;for(let q=0,K=B.length;q<K;q++){const Z=i.get(B[q]);Z.__webglTexture&&(a.deleteTexture(Z.__webglTexture),n.memory.textures--),i.remove(B[q])}i.remove(L)}let M=0;function I(){M=0}function O(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function F(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function V(L,S){const B=i.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){const q=L.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(B,L,S);return}}t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+S)}function W(L,S){const B=i.get(L);if(L.version>0&&B.__version!==L.version){Ze(B,L,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+S)}function H(L,S){const B=i.get(L);if(L.version>0&&B.__version!==L.version){Ze(B,L,S);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+S)}function $(L,S){const B=i.get(L);if(L.version>0&&B.__version!==L.version){X(B,L,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+S)}const G={[Vs]:a.REPEAT,[Jt]:a.CLAMP_TO_EDGE,[Hs]:a.MIRRORED_REPEAT},oe={[Mt]:a.NEAREST,[Nl]:a.NEAREST_MIPMAP_NEAREST,[Kr]:a.NEAREST_MIPMAP_LINEAR,[lt]:a.LINEAR,[Rs]:a.LINEAR_MIPMAP_NEAREST,[ci]:a.LINEAR_MIPMAP_LINEAR},fe={[Qu]:a.NEVER,[ad]:a.ALWAYS,[ed]:a.LESS,[jl]:a.LEQUAL,[td]:a.EQUAL,[sd]:a.GEQUAL,[id]:a.GREATER,[rd]:a.NOTEQUAL};function Re(L,S){if(S.type===Tt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===lt||S.magFilter===Rs||S.magFilter===Kr||S.magFilter===ci||S.minFilter===lt||S.minFilter===Rs||S.minFilter===Kr||S.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,G[S.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,G[S.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,G[S.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,oe[S.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mt||S.minFilter!==Kr&&S.minFilter!==ci||S.type===Tt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(L,S){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",R));const q=S.source;let K=u.get(q);K===void 0&&(K={},u.set(q,K));const Z=F(S);if(Z!==L.__cacheKey){K[Z]===void 0&&(K[Z]={texture:a.createTexture(),usedTimes:0},n.memory.textures++,B=!0),K[Z].usedTimes++;const we=K[L.__cacheKey];we!==void 0&&(K[L.__cacheKey].usedTimes--,we.usedTimes===0&&P(S)),L.__cacheKey=Z,L.__webglTexture=K[Z].texture}return B}function Ze(L,S,B){let q=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=a.TEXTURE_3D);const K=Xe(L,S),Z=S.source;t.bindTexture(q,L.__webglTexture,a.TEXTURE0+B);const we=i.get(Z);if(Z.version!==we.__version||K===!0){t.activeTexture(a.TEXTURE0+B);const ue=Ye.getPrimaries(Ye.workingColorSpace),ve=S.colorSpace===Ti?null:Ye.getPrimaries(S.colorSpace),Fe=S.colorSpace===Ti||ue===ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ie=_(S.image,!1,r.maxTextureSize);ie=ge(S,ie);const ye=s.convert(S.format,S.colorSpace),je=s.convert(S.type);let Be=x(S.internalFormat,ye,je,S.colorSpace,S.isVideoTexture);Re(q,S);let xe;const ze=S.mipmaps,We=S.isVideoTexture!==!0,st=we.__version===void 0||K===!0,U=Z.dataReady,ne=y(S,ie);if(S.isDepthTexture)Be=v(S.format===br,S.type),st&&(We?t.texStorage2D(a.TEXTURE_2D,1,Be,ie.width,ie.height):t.texImage2D(a.TEXTURE_2D,0,Be,ie.width,ie.height,0,ye,je,null));else if(S.isDataTexture)if(ze.length>0){We&&st&&t.texStorage2D(a.TEXTURE_2D,ne,Be,ze[0].width,ze[0].height);for(let j=0,J=ze.length;j<J;j++)xe=ze[j],We?U&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,xe.width,xe.height,ye,je,xe.data):t.texImage2D(a.TEXTURE_2D,j,Be,xe.width,xe.height,0,ye,je,xe.data);S.generateMipmaps=!1}else We?(st&&t.texStorage2D(a.TEXTURE_2D,ne,Be,ie.width,ie.height),U&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,je,ie.data)):t.texImage2D(a.TEXTURE_2D,0,Be,ie.width,ie.height,0,ye,je,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&st&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,Be,ze[0].width,ze[0].height,ie.depth);for(let j=0,J=ze.length;j<J;j++)if(xe=ze[j],S.format!==Dt)if(ye!==null)if(We){if(U)if(S.layerUpdates.size>0){const le=Al(xe.width,xe.height,S.format,S.type);for(const Ae of S.layerUpdates){const tt=xe.data.subarray(Ae*le/xe.data.BYTES_PER_ELEMENT,(Ae+1)*le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,Ae,xe.width,xe.height,1,ye,tt,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,ie.depth,ye,xe.data,0,0)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,j,Be,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,ie.depth,ye,je,xe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,j,Be,xe.width,xe.height,ie.depth,0,ye,je,xe.data)}else{We&&st&&t.texStorage2D(a.TEXTURE_2D,ne,Be,ze[0].width,ze[0].height);for(let j=0,J=ze.length;j<J;j++)xe=ze[j],S.format!==Dt?ye!==null?We?U&&t.compressedTexSubImage2D(a.TEXTURE_2D,j,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(a.TEXTURE_2D,j,Be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,xe.width,xe.height,ye,je,xe.data):t.texImage2D(a.TEXTURE_2D,j,Be,xe.width,xe.height,0,ye,je,xe.data)}else if(S.isDataArrayTexture)if(We){if(st&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,Be,ie.width,ie.height,ie.depth),U)if(S.layerUpdates.size>0){const j=Al(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const le=ie.data.subarray(J*j/ie.data.BYTES_PER_ELEMENT,(J+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ye,je,le)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,je,ie.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,ie.width,ie.height,ie.depth,0,ye,je,ie.data);else if(S.isData3DTexture)We?(st&&t.texStorage3D(a.TEXTURE_3D,ne,Be,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,je,ie.data)):t.texImage3D(a.TEXTURE_3D,0,Be,ie.width,ie.height,ie.depth,0,ye,je,ie.data);else if(S.isFramebufferTexture){if(st)if(We)t.texStorage2D(a.TEXTURE_2D,ne,Be,ie.width,ie.height);else{let j=ie.width,J=ie.height;for(let le=0;le<ne;le++)t.texImage2D(a.TEXTURE_2D,le,Be,j,J,0,ye,je,null),j>>=1,J>>=1}}else if(ze.length>0){if(We&&st){const j=Te(ze[0]);t.texStorage2D(a.TEXTURE_2D,ne,Be,j.width,j.height)}for(let j=0,J=ze.length;j<J;j++)xe=ze[j],We?U&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,ye,je,xe):t.texImage2D(a.TEXTURE_2D,j,Be,ye,je,xe);S.generateMipmaps=!1}else if(We){if(st){const j=Te(ie);t.texStorage2D(a.TEXTURE_2D,ne,Be,j.width,j.height)}U&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ye,je,ie)}else t.texImage2D(a.TEXTURE_2D,0,Be,ye,je,ie);g(S)&&m(q),we.__version=Z.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function X(L,S,B){if(S.image.length!==6)return;const q=Xe(L,S),K=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+B);const Z=i.get(K);if(K.version!==Z.__version||q===!0){t.activeTexture(a.TEXTURE0+B);const we=Ye.getPrimaries(Ye.workingColorSpace),ue=S.colorSpace===Ti?null:Ye.getPrimaries(S.colorSpace),ve=S.colorSpace===Ti||we===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!Fe&&!ie?ye[J]=_(S.image[J],!0,r.maxCubemapSize):ye[J]=ie?S.image[J].image:S.image[J],ye[J]=ge(S,ye[J]);const je=ye[0],Be=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),ze=x(S.internalFormat,Be,xe,S.colorSpace),We=S.isVideoTexture!==!0,st=Z.__version===void 0||q===!0,U=K.dataReady;let ne=y(S,je);Re(a.TEXTURE_CUBE_MAP,S);let j;if(Fe){We&&st&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ne,ze,je.width,je.height);for(let J=0;J<6;J++){j=ye[J].mipmaps;for(let le=0;le<j.length;le++){const Ae=j[le];S.format!==Dt?Be!==null?We?U&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Ae.width,Ae.height,Be,Ae.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Ae.width,Ae.height,Be,xe,Ae.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,ze,Ae.width,Ae.height,0,Be,xe,Ae.data)}}}else{if(j=S.mipmaps,We&&st){j.length>0&&ne++;const J=Te(ye[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ne,ze,J.width,J.height)}for(let J=0;J<6;J++)if(ie){We?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Be,xe,ye[J].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,ye[J].width,ye[J].height,0,Be,xe,ye[J].data);for(let le=0;le<j.length;le++){const Ae=j[le].image[J].image;We?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ae.width,Ae.height,Be,xe,Ae.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,ze,Ae.width,Ae.height,0,Be,xe,Ae.data)}}else{We?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Be,xe,ye[J]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Be,xe,ye[J]);for(let le=0;le<j.length;le++){const Ae=j[le];We?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Be,xe,Ae.image[J]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,ze,Be,xe,Ae.image[J])}}}g(S)&&m(a.TEXTURE_CUBE_MAP),Z.__version=K.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function te(L,S,B,q,K,Z){const we=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),ve=x(B.internalFormat,we,ue,B.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>Z),ie=Math.max(1,S.height>>Z);K===a.TEXTURE_3D||K===a.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,ve,Fe,ie,S.depth,0,we,ue,null):t.texImage2D(K,Z,ve,Fe,ie,0,we,ue,null)}t.bindFramebuffer(a.FRAMEBUFFER,L),ae(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,K,i.get(B).__webglTexture,0,re(S)):(K===a.TEXTURE_2D||K>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,K,i.get(B).__webglTexture,Z),t.bindFramebuffer(a.FRAMEBUFFER,null)}function de(L,S,B){if(a.bindRenderbuffer(a.RENDERBUFFER,L),S.depthBuffer){const q=S.depthTexture,K=q&&q.isDepthTexture?q.type:null,Z=v(S.stencilBuffer,K),we=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=re(S);ae(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ue,Z,S.width,S.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,ue,Z,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Z,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,L)}else{const q=S.textures;for(let K=0;K<q.length;K++){const Z=q[K],we=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),ve=x(Z.internalFormat,we,ue,Z.colorSpace),Fe=re(S);B&&ae(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,ve,S.width,S.height):ae(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Fe,ve,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ve,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function pe(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const B=i.get(S.depthTexture).__webglTexture,q=re(S);if(S.depthTexture.format===xr)ae(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,B,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,B,0);else if(S.depthTexture.format===br)ae(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,B,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const S=i.get(L),B=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const q=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=q}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,L)}else if(B){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=a.createRenderbuffer(),de(S.__webglDepthbuffer[q],L,!1);else{const K=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[q];a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),de(S.__webglDepthbuffer,L,!1);else{const q=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,q,a.RENDERBUFFER,K)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ce(L,S,B){const q=i.get(L);S!==void 0&&te(q.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&Ie(L)}function Ne(L){const S=L.texture,B=i.get(L),q=i.get(S);L.addEventListener("dispose",E);const K=L.textures,Z=L.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=S.version,n.memory.textures++),Z){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let ve=0;ve<S.mipmaps.length;ve++)B.__webglFramebuffer[ue][ve]=a.createFramebuffer()}else B.__webglFramebuffer[ue]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)B.__webglFramebuffer[ue]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(we)for(let ue=0,ve=K.length;ue<ve;ue++){const Fe=i.get(K[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=a.createTexture(),n.memory.textures++)}if(L.samples>0&&ae(L)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<K.length;ue++){const ve=K[ue];B.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const Fe=s.convert(ve.format,ve.colorSpace),ie=s.convert(ve.type),ye=x(ve.internalFormat,Fe,ie,ve.colorSpace,L.isXRRenderTarget===!0),je=re(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,je,ye,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),de(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Z){t.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),Re(a.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)te(B.__webglFramebuffer[ue][ve],L,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else te(B.__webglFramebuffer[ue],L,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(S)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ue=0,ve=K.length;ue<ve;ue++){const Fe=K[ue],ie=i.get(Fe);t.bindTexture(a.TEXTURE_2D,ie.__webglTexture),Re(a.TEXTURE_2D,Fe),te(B.__webglFramebuffer,L,Fe,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,0),g(Fe)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let ue=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ue,q.__webglTexture),Re(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)te(B.__webglFramebuffer[ve],L,S,a.COLOR_ATTACHMENT0,ue,ve);else te(B.__webglFramebuffer,L,S,a.COLOR_ATTACHMENT0,ue,0);g(S)&&m(ue),t.unbindTexture()}L.depthBuffer&&Ie(L)}function Q(L){const S=L.textures;for(let B=0,q=S.length;B<q;B++){const K=S[B];if(g(K)){const Z=L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,we=i.get(K).__webglTexture;t.bindTexture(Z,we),m(Z),t.unbindTexture()}}}const A=[],se=[];function he(L){if(L.samples>0){if(ae(L)===!1){const S=L.textures,B=L.width,q=L.height;let K=a.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=i.get(L),ue=S.length>1;if(ue)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(a.FRAMEBUFFER,we.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,we.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=a.STENCIL_BUFFER_BIT)),ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const Fe=i.get(S[ve]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Fe,0)}a.blitFramebuffer(0,0,B,q,0,0,B,q,K,a.NEAREST),l===!0&&(A.length=0,se.length=0,A.push(a.COLOR_ATTACHMENT0+ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(A.push(Z),se.push(Z),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,se)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(a.FRAMEBUFFER,we.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const Fe=i.get(S[ve]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,we.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.TEXTURE_2D,Fe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function re(L){return Math.min(r.maxSamples,L.samples)}function ae(L){const S=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(L){const S=n.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function ge(L,S){const B=L.colorSpace,q=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==Ui&&B!==Ti&&(Ye.getTransfer(B)===it?(q!==Dt||K!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Ce,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ae}function yd(a,e){function t(i,r=Ti){let s;const n=Ye.getTransfer(r);if(i===mi)return a.UNSIGNED_BYTE;if(i===Yn)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Zn)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Bl)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Ol)return a.BYTE;if(i===Fl)return a.SHORT;if(i===ss)return a.UNSIGNED_SHORT;if(i===qn)return a.INT;if(i===Li)return a.UNSIGNED_INT;if(i===Tt)return a.FLOAT;if(i===hi)return a.HALF_FLOAT;if(i===zl)return a.ALPHA;if(i===kl)return a.RGB;if(i===Dt)return a.RGBA;if(i===Vl)return a.LUMINANCE;if(i===Hl)return a.LUMINANCE_ALPHA;if(i===xr)return a.DEPTH_COMPONENT;if(i===br)return a.DEPTH_STENCIL;if(i===Jn)return a.RED;if(i===oa)return a.RED_INTEGER;if(i===Gl)return a.RG;if(i===Kn)return a.RG_INTEGER;if(i===$n)return a.RGBA_INTEGER;if(i===Ps||i===Ls||i===Is||i===Us)if(n===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gn||i===_n||i===vn||i===xn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_n)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yn||i===Mn||i===Sn)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yn||i===Mn)return n===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bn||i===Tn||i===En||i===wn||i===An||i===Cn||i===Rn||i===Pn||i===Ln||i===In||i===Un||i===Dn||i===Nn||i===On)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===En)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===An)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ln)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===In)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Un)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nn)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===On)return n===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ds||i===Fn||i===Bn)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ds)return n===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fn)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bn)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===zn||i===kn||i===Vn)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ds)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zn)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}class Md extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E0={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,n=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
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

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ct,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ri({vertexShader:w0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R0 extends fi{constructor(e,t){super();const i=this;let r=null,s=1,n=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null;const _=new C0,g=t.getContextAttributes();let m=null,x=null;const v=[],y=[],R=new Y;let E=null;const w=new bt;w.layers.enable(1),w.viewport=new Ke;const P=new bt;P.layers.enable(2),P.viewport=new Ke;const b=[w,P],M=new Md;M.layers.enable(1),M.layers.enable(2);let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=v[X];return te===void 0&&(te=new tl,v[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=v[X];return te===void 0&&(te=new tl,v[X]=te),te.getGripSpace()},this.getHand=function(X){let te=v[X];return te===void 0&&(te=new tl,v[X]=te),te.getHandSpace()};function F(X){const te=y.indexOf(X.inputSource);if(te===-1)return;const de=v[te];de!==void 0&&(de.update(X.inputSource,X.frame,c||n),de.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let X=0;X<v.length;X++){const te=y[X];te!==null&&(y[X]=null,v[X].disconnect(te))}I=null,O=null,_.reset(),e.setRenderTarget(m),p=null,u=null,d=null,r=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ii(p.framebufferWidth,p.framebufferHeight,{format:Dt,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,de=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?br:xr,de=g.stencil?Sr:Li);const Ie={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(Ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ii(u.textureWidth,u.textureHeight,{format:Dt,type:mi,depthTexture:new $l(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,n=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(X){for(let te=0;te<X.removed.length;te++){const de=X.removed[te],pe=y.indexOf(de);pe>=0&&(y[pe]=null,v[pe].disconnect(de))}for(let te=0;te<X.added.length;te++){const de=X.added[te];let pe=y.indexOf(de);if(pe===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=y.length){y.push(de),pe=Ce;break}else if(y[Ce]===null){y[Ce]=de,pe=Ce;break}if(pe===-1)break}const Ie=v[pe];Ie&&Ie.connect(de)}}const H=new C,$=new C;function G(X,te,de){H.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const pe=H.distanceTo($),Ie=te.projectionMatrix.elements,Ce=de.projectionMatrix.elements,Ne=Ie[14]/(Ie[10]-1),Q=Ie[14]/(Ie[10]+1),A=(Ie[9]+1)/Ie[5],se=(Ie[9]-1)/Ie[5],he=(Ie[8]-1)/Ie[0],re=(Ce[8]+1)/Ce[0],ae=Ne*he,Pe=Ne*re,ge=pe/(-he+re),Te=ge*-he;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Te),X.translateZ(ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const L=Ne+ge,S=Q+ge,B=ae-Te,q=Pe+(pe-Te),K=A*Q/S*L,Z=se*Q/S*L;X.projectionMatrix.makePerspective(B,q,K,Z,L,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function oe(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,de=X.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(de=_.depthFar)),M.near=P.near=w.near=te,M.far=P.far=w.far=de,(I!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far);const pe=X.parent,Ie=M.cameras;oe(M,pe);for(let Ce=0;Ce<Ie.length;Ce++)oe(Ie[Ce],pe);Ie.length===2?G(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),fe(X,M,pe)};function fe(X,te,de){de===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=as*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Re=null;function Xe(X,te){if(h=te.getViewerPose(c||n),f=te,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let pe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Ce=0;Ce<de.length;Ce++){const Ne=de[Ce];let Q=null;if(p!==null)Q=p.getViewport(Ne);else{const se=d.getViewSubImage(u,Ne);Q=se.viewport,Ce===0&&(e.setRenderTargetTextures(x,se.colorTexture,u.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(x))}let A=b[Ce];A===void 0&&(A=new bt,A.layers.enable(Ce),A.viewport=new Ke,b[Ce]=A),A.matrix.fromArray(Ne.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ne.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(Q.x,Q.y,Q.width,Q.height),Ce===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(A)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ce=d.getDepthInformation(de[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let de=0;de<v.length;de++){const pe=y[de],Ie=v[de];pe!==null&&Ie!==void 0&&Ie.update(pe,te,c||n)}Re&&Re(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),f=null}const Ze=new fd;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(X){Re=X},this.dispose=function(){}}}const sr=new jt,P0=new Le;function L0(a,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ud(a)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),f(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(n(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,sr.copy(y),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(sr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function n(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I0(a,e,t,i){let r={},s={},n=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(f(x),y=h(x),r[x.id]=y,x.addEventListener("dispose",g));const R=v.program;i.updateUBOMapping(x,R);const E=e.render.frame;s[x.id]!==E&&(u(x),s[x.id]=E)}function h(x){const v=d();x.__bindingPointIndex=v;const y=a.createBuffer(),R=x.__size,E=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,y),a.bufferData(a.UNIFORM_BUFFER,R,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,y),y}function d(){for(let x=0;x<o;x++)if(n.indexOf(x)===-1)return n.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=r[x.id],y=x.uniforms,R=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,M=P.length;b<M;b++){const I=P[b];if(p(I,E,b,R)===!0){const O=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let W=0;W<F.length;W++){const H=F[W],$=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,a.bufferSubData(a.UNIFORM_BUFFER,O+V,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,O,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(x,v,y,R){const E=x.value,w=v+"_"+y;if(R[w]===void 0)return typeof E=="number"||typeof E=="boolean"?R[w]=E:R[w]=E.clone(),!0;{const P=R[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function f(x){const v=x.uniforms;let y=0;const R=16;for(let w=0,P=v.length;w<P;w++){const b=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,I=b.length;M<I;M++){const O=b[M],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,W=F.length;V<W;V++){const H=F[V],$=_(H),G=y%R,oe=G%$.boundary,fe=G+oe;y+=oe,fe!==0&&R-fe<$.storage&&(y+=R-fe),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}const E=y%R;return E>0&&(y+=R-E),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=n.indexOf(v.__bindingPointIndex);n.splice(y,1),a.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const x in r)a.deleteBuffer(r[x]);n=[],r={},s={}}return{bind:l,update:c,dispose:m}}class U0{constructor(e={}){const{canvas:t=od(),context:i=null,depth:r=!0,stencil:s=!1,alpha:n=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=n;const p=new Uint32Array(4),f=new Int32Array(4);let _=null,g=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let y=!1,R=0,E=0,w=null,P=-1,b=null;const M=new Ke,I=new Ke;let O=null;const F=new me(0);let V=0,W=t.width,H=t.height,$=1,G=null,oe=null;const fe=new Ke(0,0,W,H),Re=new Ke(0,0,W,H);let Xe=!1;const Ze=new ha;let X=!1,te=!1;const de=new Le,pe=new C,Ie=new Ke,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Q(){return w===null?$:1}let A=i;function se(T,D){return t.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",le,!1),A===null){const D="webgl2";if(A=se(D,T),A===null)throw se(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,re,ae,Pe,ge,Te,L,S,B,q,K,Z,we,ue,ve,Fe,ie,ye,je,Be,xe,ze,We,st;function U(){he=new z_(A),he.init(),ze=new yd(A,he),re=new U_(A,he,e,ze),ae=new v0(A),Pe=new H_(A),ge=new n0,Te=new T0(A,he,ae,ge,re,ze,Pe),L=new N_(v),S=new B_(v),B=new Ym(A),We=new L_(A,B),q=new k_(A,B,Pe,We),K=new W_(A,q,B,Pe),je=new G_(A,re,Te),Fe=new D_(ge),Z=new a0(v,L,S,he,re,We,Fe),we=new L0(v,ge),ue=new l0,ve=new m0(he),ye=new P_(v,L,S,ae,K,u,l),ie=new _0(v,K,re),st=new I0(A,Pe,re,ae),Be=new I_(A,he,Pe),xe=new V_(A,he,Pe),Pe.programs=Z.programs,v.capabilities=re,v.extensions=he,v.properties=ge,v.renderLists=ue,v.shadowMap=ie,v.state=ae,v.info=Pe}U();const ne=new R0(v,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(W,H,!1))},this.getSize=function(T){return T.set(W,H)},this.setSize=function(T,D,z=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,H=D,t.width=Math.floor(T*$),t.height=Math.floor(D*$),z===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(W*$,H*$).floor()},this.setDrawingBufferSize=function(T,D,z){W=T,H=D,$=z,t.width=Math.floor(T*z),t.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,D,z,k){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,D,z,k),ae.viewport(M.copy(fe).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,D,z,k){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,D,z,k),ae.scissor(I.copy(Re).multiplyScalar($).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){ae.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(T=!0,D=!0,z=!0){let k=0;if(T){let N=!1;if(w!==null){const ee=w.texture.format;N=ee===$n||ee===Kn||ee===oa}if(N){const ee=w.texture.type,_e=ee===mi||ee===Li||ee===ss||ee===Sr||ee===Yn||ee===Zn,Me=ye.getClearColor(),be=ye.getClearAlpha(),Oe=Me.r,De=Me.g,Ue=Me.b;_e?(p[0]=Oe,p[1]=De,p[2]=Ue,p[3]=be,A.clearBufferuiv(A.COLOR,0,p)):(f[0]=Oe,f[1]=De,f[2]=Ue,f[3]=be,A.clearBufferiv(A.COLOR,0,f))}else k|=A.COLOR_BUFFER_BIT}D&&(k|=A.DEPTH_BUFFER_BIT),z&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),ve.dispose(),ge.dispose(),L.dispose(),S.dispose(),K.dispose(),We.dispose(),st.dispose(),Z.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ni),ne.removeEventListener("sessionend",Mc),Ki.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Pe.autoReset,D=ie.enabled,z=ie.autoUpdate,k=ie.needsUpdate,N=ie.type;U(),Pe.autoReset=T,ie.enabled=D,ie.autoUpdate=z,ie.needsUpdate=k,ie.type=N}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){const D=T.target;D.removeEventListener("dispose",Ae),tt(D)}function tt(T){dt(T),ge.remove(T)}function dt(T){const D=ge.get(T).programs;D!==void 0&&(D.forEach(function(z){Z.releaseProgram(z)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,k,N,ee){D===null&&(D=Ce);const _e=N.isMesh&&N.matrixWorld.determinant()<0,Me=vp(T,D,z,k,N);ae.setMaterial(k,_e);let be=z.index,Oe=1;if(k.wireframe===!0){if(be=q.getWireframeAttribute(z),be===void 0)return;Oe=2}const De=z.drawRange,Ue=z.attributes.position;let Qe=De.start*Oe,pt=(De.start+De.count)*Oe;ee!==null&&(Qe=Math.max(Qe,ee.start*Oe),pt=Math.min(pt,(ee.start+ee.count)*Oe)),be!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,be.count)):Ue!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Ue.count));const ht=pt-Qe;if(ht<0||ht===1/0)return;We.setup(N,k,Me,z,be);let _t,rt=Be;if(be!==null&&(_t=B.get(be),rt=xe,rt.setIndex(_t)),N.isMesh)k.wireframe===!0?(ae.setLineWidth(k.wireframeLinewidth*Q()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(N.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),ae.setLineWidth(Ee*Q()),N.isLineSegments?rt.setMode(A.LINES):N.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else N.isPoints?rt.setMode(A.POINTS):N.isSprite&&rt.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,Pt=N._multiDrawCounts,$i=N._multiDrawCount,Kt=be?B.get(be).bytesPerElement:1,Rr=ge.get(k).currentProgram.getUniforms();for(let Vt=0;Vt<$i;Vt++)Rr.setValue(A,"_gl_DrawID",Vt),rt.render(Ee[Vt]/Kt,Pt[Vt])}else if(N.isInstancedMesh)rt.renderInstances(Qe,ht,N.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Pt=Math.min(z.instanceCount,Ee);rt.renderInstances(Qe,ht,Pt)}else rt.render(Qe,ht)};function St(T,D,z){T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=Nt,T.needsUpdate=!0,_a(T,D,z),T.side=Ri,T.needsUpdate=!0,_a(T,D,z),T.side=li):_a(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),g=ve.get(z),g.init(D),x.push(g),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const k=new Set;return T.traverse(function(N){const ee=N.material;if(ee)if(Array.isArray(ee))for(let _e=0;_e<ee.length;_e++){const Me=ee[_e];St(Me,z,N),k.add(Me)}else St(ee,z,N),k.add(ee)}),x.pop(),g=null,k},this.compileAsync=function(T,D,z=null){const k=this.compile(T,D,z);return new Promise(N=>{function ee(){if(k.forEach(function(_e){ge.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){N(T);return}setTimeout(ee,10)}he.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Je=null;function _i(T){Je&&Je(T)}function ni(){Ki.stop()}function Mc(){Ki.start()}const Ki=new fd;Ki.setAnimationLoop(_i),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(T){Je=T,ne.setAnimationLoop(T),T===null?Ki.stop():Ki.start()},ne.addEventListener("sessionstart",ni),ne.addEventListener("sessionend",Mc),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(D),D=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,D,w),g=ve.get(T,x.length),g.init(D),x.push(g),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ze.setFromProjectionMatrix(de),te=this.localClippingEnabled,X=Fe.init(this.clippingPlanes,te),_=ue.get(T,m.length),_.init(),m.push(_),ne.enabled===!0&&ne.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Ao(ee,D,-1/0,v.sortObjects)}Ao(T,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,oe),Ne=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ne&&ye.addToRenderList(_,T),this.info.render.frame++,X===!0&&Fe.beginShadows();const z=g.state.shadowsArray;ie.render(z,T,D),X===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,N=_.transmissive;if(g.setupLights(),D.isArrayCamera){const ee=D.cameras;if(N.length>0)for(let _e=0,Me=ee.length;_e<Me;_e++){const be=ee[_e];bc(k,N,T,be)}Ne&&ye.render(T);for(let _e=0,Me=ee.length;_e<Me;_e++){const be=ee[_e];Sc(_,T,be,be.viewport)}}else N.length>0&&bc(k,N,T,D),Ne&&ye.render(T),Sc(_,T,D);w!==null&&(Te.updateMultisampleRenderTarget(w),Te.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,D),We.resetDefaultState(),P=-1,b=null,x.pop(),x.length>0?(g=x[x.length-1],X===!0&&Fe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ao(T,D,z,k){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ze.intersectsSprite(T)){k&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const ee=K.update(T),_e=T.material;_e.visible&&_.push(T,ee,_e,z,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ze.intersectsObject(T))){const ee=K.update(T),_e=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),Ie.copy(ee.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const Me=ee.groups;for(let be=0,Oe=Me.length;be<Oe;be++){const De=Me[be],Ue=_e[De.materialIndex];Ue&&Ue.visible&&_.push(T,ee,Ue,z,Ie.z,De)}}else _e.visible&&_.push(T,ee,_e,z,Ie.z,null)}}const N=T.children;for(let ee=0,_e=N.length;ee<_e;ee++)Ao(N[ee],D,z,k)}function Sc(T,D,z,k){const N=T.opaque,ee=T.transmissive,_e=T.transparent;g.setupLightsView(z),X===!0&&Fe.setGlobalState(v.clippingPlanes,z),k&&ae.viewport(M.copy(k)),N.length>0&&ga(N,D,z),ee.length>0&&ga(ee,D,z),_e.length>0&&ga(_e,D,z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function bc(T,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[k.id]===void 0&&(g.state.transmissionRenderTarget[k.id]=new ii(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?hi:mi,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const N=g.state.transmissionRenderTarget[k.id],ee=k.viewport||M;N.setSize(ee.z,ee.w);const _e=v.getRenderTarget();v.setRenderTarget(N),v.getClearColor(F),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ne&&ye.render(z);const Me=v.toneMapping;v.toneMapping=Ci;const be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),g.setupLightsView(k),X===!0&&Fe.setGlobalState(v.clippingPlanes,k),ga(T,z,k),Te.updateMultisampleRenderTarget(N),Te.updateRenderTargetMipmap(N),he.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let De=0,Ue=D.length;De<Ue;De++){const Qe=D[De],pt=Qe.object,ht=Qe.geometry,_t=Qe.material,rt=Qe.group;if(_t.side===li&&pt.layers.test(k.layers)){const Ee=_t.side;_t.side=Nt,_t.needsUpdate=!0,Tc(pt,z,k,ht,_t,rt),_t.side=Ee,_t.needsUpdate=!0,Oe=!0}}Oe===!0&&(Te.updateMultisampleRenderTarget(N),Te.updateRenderTargetMipmap(N))}v.setRenderTarget(_e),v.setClearColor(F,V),be!==void 0&&(k.viewport=be),v.toneMapping=Me}function ga(T,D,z){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=T.length;N<ee;N++){const _e=T[N],Me=_e.object,be=_e.geometry,Oe=k===null?_e.material:k,De=_e.group;Me.layers.test(z.layers)&&Tc(Me,D,z,be,Oe,De)}}function Tc(T,D,z,k,N,ee){T.onBeforeRender(v,D,z,k,N,ee),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,D,z,k,T,ee),N.transparent===!0&&N.side===li&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,v.renderBufferDirect(z,D,k,N,T,ee),N.side=Ri,N.needsUpdate=!0,v.renderBufferDirect(z,D,k,N,T,ee),N.side=li):v.renderBufferDirect(z,D,k,N,T,ee),T.onAfterRender(v,D,z,k,N,ee)}function _a(T,D,z){D.isScene!==!0&&(D=Ce);const k=ge.get(T),N=g.state.lights,ee=g.state.shadowsArray,_e=N.state.version,Me=Z.getParameters(T,N.state,ee,D,z),be=Z.getProgramCacheKey(Me);let Oe=k.programs;k.environment=T.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(T.isMeshStandardMaterial?S:L).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ae),Oe=new Map,k.programs=Oe);let De=Oe.get(be);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===_e)return wc(T,Me),De}else Me.uniforms=Z.getUniforms(T),T.onBeforeCompile(Me,v),De=Z.acquireProgram(Me,be),Oe.set(be,De),k.uniforms=Me.uniforms;const Ue=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Fe.uniform),wc(T,Me),k.needsLights=yp(T),k.lightsStateVersion=_e,k.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function Ec(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=pn.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function wc(T,D){const z=ge.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function vp(T,D,z,k,N){D.isScene!==!0&&(D=Ce),Te.resetTextureUnits();const ee=D.fog,_e=k.isMeshStandardMaterial?D.environment:null,Me=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ui,be=(k.isMeshStandardMaterial?S:L).get(k.envMap||_e),Oe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,pt=!!z.morphAttributes.color;let ht=Ci;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=v.toneMapping);const _t=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=_t!==void 0?_t.length:0,Ee=ge.get(k),Pt=g.state.lights;if(X===!0&&(te===!0||T!==b)){const qt=T===b&&k.id===P;Fe.setState(k,T,qt)}let $i=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Pt.state.version||Ee.outputColorSpace!==Me||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==be||k.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Fe.numPlanes||Ee.numIntersection!==Fe.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==De||Ee.morphTargets!==Ue||Ee.morphNormals!==Qe||Ee.morphColors!==pt||Ee.toneMapping!==ht||Ee.morphTargetsCount!==rt)&&($i=!0):($i=!0,Ee.__version=k.version);let Kt=Ee.currentProgram;$i===!0&&(Kt=_a(k,D,N));let Rr=!1,Vt=!1,Co=!1;const mt=Kt.getUniforms(),Di=Ee.uniforms;if(ae.useProgram(Kt.program)&&(Rr=!0,Vt=!0,Co=!0),k.id!==P&&(P=k.id,Vt=!0),Rr||b!==T){mt.setValue(A,"projectionMatrix",T.projectionMatrix),mt.setValue(A,"viewMatrix",T.matrixWorldInverse);const qt=mt.map.cameraPosition;qt!==void 0&&qt.setValue(A,pe.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&mt.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&mt.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Vt=!0,Co=!0)}if(N.isSkinnedMesh){mt.setOptional(A,N,"bindMatrix"),mt.setOptional(A,N,"bindMatrixInverse");const qt=N.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),mt.setValue(A,"boneTexture",qt.boneTexture,Te))}N.isBatchedMesh&&(mt.setOptional(A,N,"batchingTexture"),mt.setValue(A,"batchingTexture",N._matricesTexture,Te),mt.setOptional(A,N,"batchingIdTexture"),mt.setValue(A,"batchingIdTexture",N._indirectTexture,Te),mt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(A,"batchingColorTexture",N._colorsTexture,Te));const Ro=z.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0)&&je.update(N,z,Kt),(Vt||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,mt.setValue(A,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Di.envMap.value=be,Di.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Di.envMapIntensity.value=D.environmentIntensity),Vt&&(mt.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&xp(Di,Co),ee&&k.fog===!0&&we.refreshFogUniforms(Di,ee),we.refreshMaterialUniforms(Di,k,$,H,g.state.transmissionRenderTarget[T.id]),pn.upload(A,Ec(Ee),Di,Te)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pn.upload(A,Ec(Ee),Di,Te),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&mt.setValue(A,"center",N.center),mt.setValue(A,"modelViewMatrix",N.modelViewMatrix),mt.setValue(A,"normalMatrix",N.normalMatrix),mt.setValue(A,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qt=k.uniformsGroups;for(let Po=0,Mp=qt.length;Po<Mp;Po++){const Ac=qt[Po];st.update(Ac,Kt),st.bind(Ac,Kt)}}return Kt}function xp(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function yp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,D,z){ge.get(T.texture).__webglTexture=D,ge.get(T.depthTexture).__webglTexture=z;const k=ge.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const z=ge.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){w=T,R=D,E=z;let k=!0,N=null,ee=!1,_e=!1;if(T){const Me=ge.get(T);if(Me.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(A.FRAMEBUFFER,null),k=!1;else if(Me.__webglFramebuffer===void 0)Te.setupRenderTarget(T);else if(Me.__hasExternalTextures)Te.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&ge.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const Oe=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[D])?N=Oe[D][z]:N=Oe[D],ee=!0):T.samples>0&&Te.useMultisampledRTT(T)===!1?N=ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[z]:N=Oe,M.copy(T.viewport),I.copy(T.scissor),O=T.scissorTest}else M.copy(fe).multiplyScalar($).floor(),I.copy(Re).multiplyScalar($).floor(),O=Xe;if(ae.bindFramebuffer(A.FRAMEBUFFER,N)&&k&&ae.drawBuffers(T,N),ae.viewport(M),ae.scissor(I),ae.setScissorTest(O),ee){const Me=ge.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,z)}else if(_e){const Me=ge.get(T.texture),be=D||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,be)}P=-1},this.readRenderTargetPixels=function(T,D,z,k,N,ee,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){ae.bindFramebuffer(A.FRAMEBUFFER,Me);try{const be=T.texture,Oe=be.format,De=be.type;if(!re.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-k&&z>=0&&z<=T.height-N&&A.readPixels(D,z,k,N,ze.convert(Oe),ze.convert(De),ee)}finally{const be=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,D,z,k,N,ee,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){ae.bindFramebuffer(A.FRAMEBUFFER,Me);try{const be=T.texture,Oe=be.format,De=be.type;if(!re.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-k&&z>=0&&z<=T.height-N){const Ue=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),A.readPixels(D,z,k,N,ze.convert(Oe),ze.convert(De),0),A.flush();const Qe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await ym(A,Qe,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee)}finally{A.deleteBuffer(Ue),A.deleteSync(Qe)}return ee}}finally{const be=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(T,D=null,z=0){T.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),N=Math.floor(T.image.width*k),ee=Math.floor(T.image.height*k),_e=D!==null?D.x:0,Me=D!==null?D.y:0;Te.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,_e,Me,N,ee),ae.unbindTexture()},this.copyTextureToTexture=function(T,D,z=null,k=null,N=0){T.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let ee,_e,Me,be,Oe,De;z!==null?(ee=z.max.x-z.min.x,_e=z.max.y-z.min.y,Me=z.min.x,be=z.min.y):(ee=T.image.width,_e=T.image.height,Me=0,be=0),k!==null?(Oe=k.x,De=k.y):(Oe=0,De=0);const Ue=ze.convert(D.format),Qe=ze.convert(D.type);Te.setTexture2D(D,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const pt=A.getParameter(A.UNPACK_ROW_LENGTH),ht=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_t=A.getParameter(A.UNPACK_SKIP_PIXELS),rt=A.getParameter(A.UNPACK_SKIP_ROWS),Ee=A.getParameter(A.UNPACK_SKIP_IMAGES),Pt=T.isCompressedTexture?T.mipmaps[N]:T.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Pt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Me),A.pixelStorei(A.UNPACK_SKIP_ROWS,be),T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,N,Oe,De,ee,_e,Ue,Qe,Pt.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,N,Oe,De,Pt.width,Pt.height,Ue,Pt.data):A.texSubImage2D(A.TEXTURE_2D,N,Oe,De,ee,_e,Ue,Qe,Pt),A.pixelStorei(A.UNPACK_ROW_LENGTH,pt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ht),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_t),A.pixelStorei(A.UNPACK_SKIP_ROWS,rt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ee),N===0&&D.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z=null,k=null,N=0){T.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],D=arguments[3],N=arguments[4]||0);let ee,_e,Me,be,Oe,De,Ue,Qe,pt;const ht=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(ee=z.max.x-z.min.x,_e=z.max.y-z.min.y,Me=z.max.z-z.min.z,be=z.min.x,Oe=z.min.y,De=z.min.z):(ee=ht.width,_e=ht.height,Me=ht.depth,be=0,Oe=0,De=0),k!==null?(Ue=k.x,Qe=k.y,pt=k.z):(Ue=0,Qe=0,pt=0);const _t=ze.convert(D.format),rt=ze.convert(D.type);let Ee;if(D.isData3DTexture)Te.setTexture3D(D,0),Ee=A.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Te.setTexture2DArray(D,0),Ee=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const Pt=A.getParameter(A.UNPACK_ROW_LENGTH),$i=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Kt=A.getParameter(A.UNPACK_SKIP_PIXELS),Rr=A.getParameter(A.UNPACK_SKIP_ROWS),Vt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ht.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ht.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,be),A.pixelStorei(A.UNPACK_SKIP_ROWS,Oe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,De),T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Ee,N,Ue,Qe,pt,ee,_e,Me,_t,rt,ht.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(Ee,N,Ue,Qe,pt,ee,_e,Me,_t,ht.data):A.texSubImage3D(Ee,N,Ue,Qe,pt,ee,_e,Me,_t,rt,ht),A.pixelStorei(A.UNPACK_ROW_LENGTH,Pt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,$i),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Kt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Rr),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Vt),N===0&&D.generateMipmaps&&A.generateMipmap(Ee),ae.unbindTexture()},this.initRenderTarget=function(T){ge.get(T).__webglFramebuffer===void 0&&Te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Te.setTextureCube(T,0):T.isData3DTexture?Te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Te.setTexture2DArray(T,0):Te.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){R=0,E=0,w=null,ae.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===la?"display-p3":"srgb"}}class no{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new no(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sd extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lo{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ys,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return is("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new C;class Tr{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ut(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ut(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ut(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ut(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ut(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tc extends Rt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let jr;const vs=new C,qr=new C,Yr=new C,Zr=new Y,xs=new Y,bd=new Le,za=new C,ys=new C,ka=new C,gh=new Y,il=new Y,_h=new Y;class Td extends et{constructor(e=new tc){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lo(t,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new Tr(i,3,0,!1)),jr.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=jr,this.material=e,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),bd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const n=this.center;Va(za.set(-.5,-.5,0),Yr,n,qr,r,s),Va(ys.set(.5,-.5,0),Yr,n,qr,r,s),Va(ka.set(.5,.5,0),Yr,n,qr,r,s),gh.set(0,0),il.set(1,0),_h.set(1,1);let o=e.ray.intersectTriangle(za,ys,ka,!1,vs);if(o===null&&(Va(ys.set(-.5,.5,0),Yr,n,qr,r,s),il.set(0,1),o=e.ray.intersectTriangle(za,ka,ys,!1,vs),o===null))return;const l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:Wt.getInterpolation(vs,za,ys,ka,gh,il,_h,new Y),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Va(a,e,t,i,r,s){Zr.subVectors(a,t).addScalar(.5).multiply(i),r!==void 0?(xs.x=s*Zr.x-r*Zr.y,xs.y=r*Zr.x+s*Zr.y):xs.copy(Zr),a.copy(e),a.x+=xs.x,a.y+=xs.y,a.applyMatrix4(bd)}const Ha=new C,vh=new C;class Ed extends et{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Ha.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ha);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ha.setFromMatrixPosition(e.matrixWorld),vh.setFromMatrixPosition(this.matrixWorld);const i=Ha.distanceTo(vh)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let n=t[r].distance;if(t[r].object.visible&&(n-=n*t[r].hysteresis),i>=n)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const n=i[r];t.object.levels.push({object:n.object.uuid,distance:n.distance,hysteresis:n.hysteresis})}return t}}const xh=new C,yh=new Ke,Mh=new Ke,D0=new C,Sh=new Le,Ga=new C,rl=new Ct,bh=new Le,sl=new cs;class wd extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ml,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ot),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ct),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(r),e.ray.intersectsSphere(rl)!==!1&&(bh.copy(r).invert(),sl.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;yh.fromBufferAttribute(r.attributes.skinIndex,e),Mh.fromBufferAttribute(r.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const n=Mh.getComponent(s);if(n!==0){const o=yh.getComponent(s);Sh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(D0.copy(xh).applyMatrix4(Sh),n)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ic extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class di extends ct{constructor(e=null,t=1,i=1,r,s,n,o,l,c=Mt,h=Mt,d,u){super(null,n,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new Le,N0=new Le;class co{constructor(e=[],t=[]){this.uuid=Xt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,n=e.length;s<n;s++){const o=e[s]?e[s].matrixWorld:N0;Th.multiplyMatrices(o,t[s]),Th.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new co(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new di(t,e,e,Dt,Tt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let n=t[s];n===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),n=new ic),this.bones.push(n),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const n=t[r];e.bones.push(n.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class os extends $e{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new Le,Eh=new Le,Wa=[],wh=new Ot,O0=new Le,Ms=new gt,Ss=new Ct;class Ad extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,O0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),wh.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ct),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Ss.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,n=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[n+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),e.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),Eh.multiplyMatrices(i,Jr),Ms.matrixWorld=Eh,Ms.raycast(e,Wa);for(let n=0,o=Wa.length;n<o;n++){const l=Wa[n];l.instanceId=s,l.object=this,t.push(l)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(r*this.count),r,this.count,Jn,Tt));const s=this.morphTexture.source.data.data;let n=0;for(let c=0;c<i.length;c++)n+=i[c];const o=this.geometry.morphTargetsRelative?1:1-n,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function F0(a,e){return a.z-e.z}function B0(a,e){return e.z-a.z}class z0{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const n=r[this.index];s.push(n),this.index++,n.start=e.start,n.count=e.count,n.z=t,n.index=i}reset(){this.list.length=0,this.index=0}}const Vi=new Le,al=new Le,k0=new Le,V0=new me(1,1,1),Ah=new Le,nl=new ha,Xa=new Ot,ar=new Ct,bs=new C,Ch=new C,H0=new C,ol=new z0,At=new gt,ja=[];function G0(a,e,t=0){const i=e.itemSize;if(a.isInterleavedBufferAttribute||a.array.constructor!==e.array.constructor){const r=a.count;for(let s=0;s<r;s++)for(let n=0;n<i;n++)e.setComponent(s+t,n,a.getComponent(s,n))}else e.array.set(a.array,t*i);e.needsUpdate=!0}class Cd extends gt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,i=t*2,r){super(new Ge,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new di(t,e,e,Dt,Tt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new di(t,e,e,oa,Li);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new di(t,e,e,Dt,Tt);i.colorSpace=Ye.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const n=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=n,h=new o.constructor(i*l),d=new $e(h,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new $e(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const r=e.getAttribute(i),s=t.getAttribute(i);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,Vi),this.getBoundingBoxAt(s,Xa).applyMatrix4(Vi),e.union(Xa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ct);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,Vi),this.getBoundingSphereAt(s,ar).applyMatrix4(Vi),e.union(ar)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,i=this._matricesTexture,r=i.image.data;k0.toArray(r,t*16),i.needsUpdate=!0;const s=this._colorsTexture;return s&&(V0.toArray(s.image.data,t*4),s.needsUpdate=!0),t}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const n=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=n[n.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(i===-1?r.indexCount=c.count:r.indexCount=i,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._geometryCount;return this._geometryCount++,n.push(r),o.push({start:h?r.indexStart:r.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Ot,sphereInitialized:!1,sphere:new Ct}),this.setGeometryAt(d,e),d}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,r=i.getIndex()!==null,s=i.getIndex(),n=t.getIndex(),o=this._reservedRanges[e];if(r&&n.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const p in i.attributes){const f=t.getAttribute(p),_=i.getAttribute(p);G0(f,_,l);const g=f.itemSize;for(let m=f.count,x=c;m<x;m++){const v=l+m;for(let y=0;y<g;y++)_.setComponent(v,y,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(r){const p=o.indexStart;for(let f=0;f<n.count;f++)s.setX(p+f,l+n.getX(f));for(let f=n.count,_=o.indexCount;f<_;f++)s.setX(p+f,l);s.needsUpdate=!0,s.addUpdateRange(p,o.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const d=this._drawRanges[e],u=t.getAttribute("position");return d.count=r?n.count:u.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this._bounds[e],r=i.box,s=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const n=s.index,o=s.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let d=c;n&&(d=n.getX(d)),r.expandByPoint(bs.fromBufferAttribute(o,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this._bounds[e],r=i.sphere,s=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Xa),Xa.getCenter(r.center);const n=s.index,o=s.attributes.position,l=this._drawRanges[e];let c=0;for(let h=l.start,d=l.start+l.count;h<d;h++){let u=h;n&&(u=n.getX(u)),bs.fromBufferAttribute(o,u),c=Math.max(c,r.center.distanceToSquared(bs))}r.radius=Math.sqrt(c),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const i=this._drawInfo,r=this._matricesTexture,s=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._drawInfo,r=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const i=this._colorsTexture,r=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(r,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){const i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){const i=this._drawInfo;return e>=i.length||i[e].active===!1||i[e].visible===t?this:(i[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const i=this._drawInfo,r=this._drawRanges,s=this.matrixWorld,n=this.geometry;At.material=this.material,At.geometry.index=n.index,At.geometry.attributes=n.attributes,At.geometry.boundingBox===null&&(At.geometry.boundingBox=new Ot),At.geometry.boundingSphere===null&&(At.geometry.boundingSphere=new Ct);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=r[c];At.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,At.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,At.geometry.boundingBox),this.getBoundingSphereAt(c,At.geometry.boundingSphere),At.raycast(e,ja);for(let d=0,u=ja.length;d<u;d++){const p=ja[d];p.object=this,p.batchId=o,t.push(p)}ja.length=0}At.material=null,At.geometry.index=null,At.geometry.attributes={},At.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const n=r.getIndex(),o=n===null?1:n.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._drawRanges,u=this.perObjectFrustumCulled,p=this._indirectTexture,f=p.image.data;u&&(Ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),nl.setFromProjectionMatrix(Ah,e.coordinateSystem));let _=0;if(this.sortObjects){al.copy(this.matrixWorld).invert(),bs.setFromMatrixPosition(i.matrixWorld).applyMatrix4(al),Ch.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(al);for(let x=0,v=l.length;x<v;x++)if(l[x].visible&&l[x].active){const y=l[x].geometryIndex;this.getMatrixAt(x,Vi),this.getBoundingSphereAt(y,ar).applyMatrix4(Vi);let R=!1;if(u&&(R=!nl.intersectsSphere(ar)),!R){const E=H0.subVectors(ar.center,bs).dot(Ch);ol.push(d[y],E,x)}}const g=ol.list,m=this.customSort;m===null?g.sort(s.transparent?B0:F0):m.call(this,g,i);for(let x=0,v=g.length;x<v;x++){const y=g[x];c[_]=y.start*o,h[_]=y.count,f[_]=y.index,_++}ol.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let v=!1;if(u&&(this.getMatrixAt(g,Vi),this.getBoundingSphereAt(x,ar).applyMatrix4(Vi),v=!nl.intersectsSphere(ar)),!v){const y=d[x];c[_]=y.start*o,h[_]=y.count,f[_]=g,_++}}p.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,s,n){this.onBeforeRender(e,null,r,s,n)}}class Ft extends Rt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gn=new C,Wn=new C,Rh=new Le,Ts=new cs,qa=new Ct,ll=new C,Ph=new C;class ji extends et{constructor(e=new Ge,t=new Ft){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Gn.fromBufferAttribute(t,r-1),Wn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Gn.distanceTo(Wn);e.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;Rh.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Rh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,n.start),p=Math.min(h.count,n.start+n.count);for(let f=u,_=p-1;f<_;f+=c){const g=h.getX(f),m=h.getX(f+1),x=Ya(this,e,Ts,l,g,m);x&&t.push(x)}if(this.isLineLoop){const f=h.getX(p-1),_=h.getX(u),g=Ya(this,e,Ts,l,f,_);g&&t.push(g)}}else{const u=Math.max(0,n.start),p=Math.min(d.count,n.start+n.count);for(let f=u,_=p-1;f<_;f+=c){const g=Ya(this,e,Ts,l,f,f+1);g&&t.push(g)}if(this.isLineLoop){const f=Ya(this,e,Ts,l,p-1,u);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}}function Ya(a,e,t,i,r,s){const n=a.geometry.attributes.position;if(Gn.fromBufferAttribute(n,r),Wn.fromBufferAttribute(n,s),t.distanceSqToSegment(Gn,Wn,ll,Ph)>i)return;ll.applyMatrix4(a.matrixWorld);const o=e.ray.origin.distanceTo(ll);if(!(o<e.near||o>e.far))return{distance:o,point:Ph.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,object:a}}const Lh=new C,Ih=new C;class gi extends ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Lh.fromBufferAttribute(t,r),Ih.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Lh.distanceTo(Ih);e.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rd extends ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rc extends Rt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uh=new Le,Cl=new cs,Za=new Ct,Ja=new C;class Pd extends et{constructor(e=new Ge,t=new rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Uh.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(Uh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,f=u;p<f;p++){const _=c.getX(p);Ja.fromBufferAttribute(h,_),Dh(Ja,_,l,r,e,t,this)}}else{const d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,f=u;p<f;p++)Ja.fromBufferAttribute(h,p),Dh(Ja,p,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}}function Dh(a,e,t,i,r,s,n){const o=Cl.distanceSqToPoint(a);if(o<t){const l=new C;Cl.closestPointToPoint(a,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:n})}}class W0 extends ct{constructor(e,t,i,r,s,n,o,l,c){super(e,t,i,r,s,n,o,l,c),this.isVideoTexture=!0,this.minFilter=n!==void 0?n:lt,this.magFilter=s!==void 0?s:lt,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class X0 extends ct{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Mt,this.minFilter=Mt,this.generateMipmaps=!1,this.needsUpdate=!0}}class ho extends ct{constructor(e,t,i,r,s,n,o,l,c,h,d,u){super(null,n,o,l,c,h,r,s,d,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class j0 extends ho{constructor(e,t,i,r,s,n){super(e,t,i,s,n),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Jt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class q0 extends ho{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Pi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Y0 extends ct{constructor(e,t,i,r,s,n,o,l,c){super(e,t,i,r,s,n,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let n;t?n=t:n=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-n,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===n)return r/(s-1);const h=i[r],d=i[r+1]-h,u=(n-h)/d;return(r+u)/(s-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),n=this.getPoint(r),o=t||(s.isVector2?new Y:new C);return o.copy(n).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,r=[],s=[],n=[],o=new C,l=new Le;for(let p=0;p<=e;p++){const f=p/e;r[p]=this.getTangentAt(f,new C)}s[0]=new C,n[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),n[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),n[p]=n[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}n[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),n[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uo extends si{constructor(e=0,t=0,i=1,r=1,s=0,n=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=n,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Y){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const n=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(n?s=0:s=r),this.aClockwise===!0&&!n&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ld extends uo{constructor(e,t,i,r,s,n){super(e,t,i,i,r,s,n),this.isArcCurve=!0,this.type="ArcCurve"}}function sc(){let a=0,e=0,t=0,i=0;function r(s,n,o,l){a=s,e=o,t=-3*s+3*n-2*o-l,i=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,c){r(n,o,c*(o-s),c*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,c,h,d){let u=(n-s)/c-(o-s)/(c+h)+(o-n)/h,p=(o-n)/h-(l-n)/(h+d)+(l-o)/d;u*=h,p*=h,r(n,o,u,p)},calc:function(s){const n=s*s,o=n*s;return a+e*s+t*n+i*o}}}const Ka=new C,cl=new sc,hl=new sc,ul=new sc;class Id extends si{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,n=(s-(this.closed?0:1))*e;let o=Math.floor(n),l=n-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Ka.subVectors(r[0],r[1]).add(r[0]),c=Ka);const d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ka.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),cl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,f,_,g),hl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,f,_,g),ul.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,f,_,g)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ul.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(cl.calc(l),hl.calc(l),ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nh(a,e,t,i,r){const s=(i-e)*.5,n=(r-t)*.5,o=a*a,l=a*o;return(2*t-2*i+s+n)*l+(-3*t+3*i-2*s-n)*o+s*a+t}function Z0(a,e){const t=1-a;return t*t*e}function J0(a,e){return 2*(1-a)*a*e}function K0(a,e){return a*a*e}function Os(a,e,t,i){return Z0(a,e)+J0(a,t)+K0(a,i)}function $0(a,e){const t=1-a;return t*t*t*e}function Q0(a,e){const t=1-a;return 3*t*t*a*e}function ex(a,e){return 3*(1-a)*a*a*e}function tx(a,e){return a*a*a*e}function Fs(a,e,t,i,r){return $0(a,e)+Q0(a,t)+ex(a,i)+tx(a,r)}class ac extends si{constructor(e=new Y,t=new Y,i=new Y,r=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,n=this.v2,o=this.v3;return i.set(Fs(e,r.x,s.x,n.x,o.x),Fs(e,r.y,s.y,n.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ud extends si{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,n=this.v2,o=this.v3;return i.set(Fs(e,r.x,s.x,n.x,o.x),Fs(e,r.y,s.y,n.y,o.y),Fs(e,r.z,s.z,n.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nc extends si{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends si{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oc extends si{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,n=this.v2;return i.set(Os(e,r.x,s.x,n.x),Os(e,r.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lc extends si{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,n=this.v2;return i.set(Os(e,r.x,s.x,n.x),Os(e,r.y,s.y,n.y),Os(e,r.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cc extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const i=t,r=this.points,s=(r.length-1)*e,n=Math.floor(s),o=s-n,l=r[n===0?n:n-1],c=r[n],h=r[n>r.length-2?r.length-1:n+1],d=r[n>r.length-3?r.length-1:n+2];return i.set(Nh(o,l.x,c.x,h.x,d.x),Nh(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Y().fromArray(r))}return this}}var Xn=Object.freeze({__proto__:null,ArcCurve:Ld,CatmullRomCurve3:Id,CubicBezierCurve:ac,CubicBezierCurve3:Ud,EllipseCurve:uo,LineCurve:nc,LineCurve3:Dd,QuadraticBezierCurve:oc,QuadraticBezierCurve3:lc,SplineCurve:cc});class Nd extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xn[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const n=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-n/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const n=s[r],o=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,l=n.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Xn[r.type]().fromJSON(r))}return this}}class Ks extends Nd{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new nc(this.currentPoint.clone(),new Y(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new oc(this.currentPoint.clone(),new Y(e,t),new Y(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,n){const o=new ac(this.currentPoint.clone(),new Y(e,t),new Y(i,r),new Y(s,n));return this.curves.push(o),this.currentPoint.set(s,n),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new cc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,n){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,n),this}absarc(e,t,i,r,s,n){return this.absellipse(e,t,i,i,r,s,n),this}ellipse(e,t,i,r,s,n,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,n,o,l),this}absellipse(e,t,i,r,s,n,o,l){const c=new uo(e,t,i,r,s,n,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ua extends Ge{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ot(r,0,Math.PI*2);const s=[],n=[],o=[],l=[],c=[],h=1/t,d=new C,u=new Y,p=new C,f=new C,_=new C;let g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,p.x=m*1,p.y=-g,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,p.x=m*1,p.y=-g,p.z=m*0,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(f)}for(let x=0;x<=t;x++){const v=i+x*h*r,y=Math.sin(v),R=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*R,n.push(d.x,d.y,d.z),u.x=x/t,u.y=E/(e.length-1),o.push(u.x,u.y);const w=l[3*E+0]*y,P=l[3*E+1],b=l[3*E+0]*R;c.push(w,P,b)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,R=y,E=y+e.length,w=y+e.length+1,P=y+1;s.push(R,E,P),s.push(w,P,E)}this.setIndex(s),this.setAttribute("position",new Se(n,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.points,e.segments,e.phiStart,e.phiLength)}}class po extends ua{constructor(e=1,t=1,i=4,r=8){const s=new Ks;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new po(e.radius,e.length,e.capSegments,e.radialSegments)}}class mo extends Ge{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],n=[],o=[],l=[],c=new C,h=new Y;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),n.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(n[u]/e+1)/2,h.y=(n[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Se(n,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ds extends Ge{constructor(e=1,t=1,i=1,r=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let f=0;const _=[],g=i/2;let m=0;x(),n===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(p,2));function x(){const y=new C,R=new C;let E=0;const w=(t-e)/i;for(let P=0;P<=s;P++){const b=[],M=P/s,I=M*(t-e)+e;for(let O=0;O<=r;O++){const F=O/r,V=F*l+o,W=Math.sin(V),H=Math.cos(V);R.x=I*W,R.y=-M*i+g,R.z=I*H,d.push(R.x,R.y,R.z),y.set(W,w,H).normalize(),u.push(y.x,y.y,y.z),p.push(F,1-M),b.push(f++)}_.push(b)}for(let P=0;P<r;P++)for(let b=0;b<s;b++){const M=_[b][P],I=_[b+1][P],O=_[b+1][P+1],F=_[b][P+1];h.push(M,I,F),h.push(I,O,F),E+=6}c.addGroup(m,E,0),m+=E}function v(y){const R=f,E=new Y,w=new C;let P=0;const b=y===!0?e:t,M=y===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,g*M,0),u.push(0,M,0),p.push(.5,.5),f++;const I=f;for(let O=0;O<=r;O++){const F=O/r*l+o,V=Math.cos(F),W=Math.sin(F);w.x=b*W,w.y=g*M,w.z=b*V,d.push(w.x,w.y,w.z),u.push(0,M,0),E.x=V*.5+.5,E.y=W*.5*M+.5,p.push(E.x,E.y),f++}for(let O=0;O<r;O++){const F=R+O,V=I+O;y===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(m,P,y===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fo extends ds{constructor(e=1,t=1,i=32,r=1,s=!1,n=0,o=Math.PI*2){super(0,e,t,i,r,s,n,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(e){return new fo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi extends Ge{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],n=[];o(r),c(i),h(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(n,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,y=new C,R=new C;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],y),p(t[E+2],R),l(v,y,R,x)}function l(x,v,y,R){const E=R+1,w=[];for(let P=0;P<=E;P++){w[P]=[];const b=x.clone().lerp(y,P/E),M=v.clone().lerp(y,P/E),I=E-P;for(let O=0;O<=I;O++)O===0&&P===E?w[P][O]=b:w[P][O]=b.clone().lerp(M,O/I)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){const M=Math.floor(b/2);b%2===0?(u(w[P][M+1]),u(w[P+1][M]),u(w[P][M])):(u(w[P][M+1]),u(w[P+1][M+1]),u(w[P+1][M]))}}function c(x){const v=new C;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const x=new C;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=g(x)/2/Math.PI+.5,R=m(x)/Math.PI+.5;n.push(y,1-R)}f(),d()}function d(){for(let x=0;x<n.length;x+=6){const v=n[x+0],y=n[x+2],R=n[x+4],E=Math.max(v,y,R),w=Math.min(v,y,R);E>.9&&w<.1&&(v<.2&&(n[x+0]+=1),y<.2&&(n[x+2]+=1),R<.2&&(n[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function p(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function f(){const x=new C,v=new C,y=new C,R=new C,E=new Y,w=new Y,P=new Y;for(let b=0,M=0;b<s.length;b+=9,M+=6){x.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),E.set(n[M+0],n[M+1]),w.set(n[M+2],n[M+3]),P.set(n[M+4],n[M+5]),R.copy(x).add(v).add(y).divideScalar(3);const I=g(R);_(E,M+0,x,I),_(w,M+2,v,I),_(P,M+4,y,I)}}function _(x,v,y,R){R<0&&x.x===1&&(n[v]=x.x-1),y.x===0&&y.z===0&&(n[v]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.vertices,e.indices,e.radius,e.details)}}class go extends Zi{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,n,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new go(e.radius,e.detail)}}const $a=new C,Qa=new C,dl=new C,en=new Wt;class Od extends Ge{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(yr*t),s=e.getIndex(),n=e.getAttribute("position"),o=s?s.count:n.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),d={},u=[];for(let p=0;p<o;p+=3){s?(l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:f,b:_,c:g}=en;if(f.fromBufferAttribute(n,l[0]),_.fromBufferAttribute(n,l[1]),g.fromBufferAttribute(n,l[2]),en.getNormal(dl),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const x=(m+1)%3,v=h[m],y=h[x],R=en[c[m]],E=en[c[x]],w=`${v}_${y}`,P=`${y}_${v}`;P in d&&d[P]?(dl.dot(d[P].normal)<=r&&(u.push(R.x,R.y,R.z),u.push(E.x,E.y,E.z)),d[P]=null):w in d||(d[w]={index0:l[m],index1:l[x],normal:dl.clone()})}}for(const p in d)if(d[p]){const{index0:f,index1:_}=d[p];$a.fromBufferAttribute(n,f),Qa.fromBufferAttribute(n,_),u.push($a.x,$a.y,$a.z),u.push(Qa.x,Qa.y,Qa.z)}this.setAttribute("position",new Se(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Mr extends Ks{constructor(e){super(e),this.uuid=Xt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ks().fromJSON(r))}return this}}const ix={triangulate:function(a,e,t=2){const i=e&&e.length,r=i?e[0]*t:a.length;let s=Fd(a,0,r,t,!0);const n=[];if(!s||s.next===s.prev)return n;let o,l,c,h,d,u,p;if(i&&(s=ox(a,e,s,t)),a.length>80*t){o=c=a[0],l=h=a[1];for(let f=t;f<r;f+=t)d=a[f],u=a[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return $s(s,n,t,o,l,p,0),n}};function Fd(a,e,t,i,r){let s,n;if(r===vx(a,e,t,i)>0)for(s=e;s<t;s+=i)n=Oh(s,a[s],a[s+1],n);else for(s=t-i;s>=e;s-=i)n=Oh(s,a[s],a[s+1],n);return n&&_o(n,n.next)&&(ea(n),n=n.next),n}function Er(a,e){if(!a)return a;e||(e=a);let t=a,i;do if(i=!1,!t.steiner&&(_o(t,t.next)||at(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $s(a,e,t,i,r,s,n){if(!a)return;!n&&s&&dx(a,i,r,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?sx(a,i,r,s):rx(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),ea(a),a=c.next,o=c.next;continue}if(a=c,a===o){n?n===1?(a=ax(Er(a),e,t),$s(a,e,t,i,r,s,2)):n===2&&nx(a,e,t,i,r,s):$s(Er(a),e,t,i,r,s,1);break}}}function rx(a){const e=a.prev,t=a,i=a.next;if(at(e,t,i)>=0)return!1;const r=e.x,s=t.x,n=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<n?r:n:s<n?s:n,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>n?r:n:s>n?s:n,p=o>l?o>c?o:c:l>c?l:c;let f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&ts(r,o,s,l,n,c,f.x,f.y)&&at(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function sx(a,e,t,i){const r=a.prev,s=a,n=a.next;if(at(r,s,n)>=0)return!1;const o=r.x,l=s.x,c=n.x,h=r.y,d=s.y,u=n.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,m=Rl(p,f,e,t,i),x=Rl(_,g,e,t,i);let v=a.prevZ,y=a.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=g&&v!==r&&v!==n&&ts(o,h,l,d,c,u,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=_&&y.y>=f&&y.y<=g&&y!==r&&y!==n&&ts(o,h,l,d,c,u,y.x,y.y)&&at(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=g&&v!==r&&v!==n&&ts(o,h,l,d,c,u,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=g&&y!==r&&y!==n&&ts(o,h,l,d,c,u,y.x,y.y)&&at(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ax(a,e,t){let i=a;do{const r=i.prev,s=i.next.next;!_o(r,s)&&Bd(r,i,i.next,s)&&Qs(r,s)&&Qs(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),ea(i),ea(i.next),i=a=s),i=i.next}while(i!==a);return Er(i)}function nx(a,e,t,i,r,s){let n=a;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&fx(n,o)){let l=zd(n,o);n=Er(n,n.next),l=Er(l,l.next),$s(n,e,t,i,r,s,0),$s(l,e,t,i,r,s,0);return}o=o.next}n=n.next}while(n!==a)}function ox(a,e,t,i){const r=[];let s,n,o,l,c;for(s=0,n=e.length;s<n;s++)o=e[s]*i,l=s<n-1?e[s+1]*i:a.length,c=Fd(a,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(mx(c));for(r.sort(lx),s=0;s<r.length;s++)t=cx(r[s],t);return t}function lx(a,e){return a.x-e.x}function cx(a,e){const t=hx(a,e);if(!t)return e;const i=zd(t,a);return Er(i,i.next),Er(t,t.next)}function hx(a,e){let t=e,i=-1/0,r;const s=a.x,n=a.y;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>i&&(i=u,r=t.x<t.next.x?t:t.next,u===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ts(n<c?s:i,n,l,c,n<c?i:s,n,t.x,t.y)&&(d=Math.abs(n-t.y)/(s-t.x),Qs(t,a)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&ux(r,t)))&&(r=t,h=d)),t=t.next;while(t!==o);return r}function ux(a,e){return at(a.prev,a,e.prev)<0&&at(e.next,a,a.next)<0}function dx(a,e,t,i){let r=a;do r.z===0&&(r.z=Rl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==a);r.prevZ.nextZ=null,r.prevZ=null,px(r)}function px(a){let e,t,i,r,s,n,o,l,c=1;do{for(t=a,a=null,s=null,n=0;t;){for(n++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:a=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(n>1);return a}function Rl(a,e,t,i,r){return a=(a-t)*r|0,e=(e-i)*r|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function mx(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function ts(a,e,t,i,r,s,n,o){return(r-n)*(e-o)>=(a-n)*(s-o)&&(a-n)*(i-o)>=(t-n)*(e-o)&&(t-n)*(s-o)>=(r-n)*(i-o)}function fx(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!gx(a,e)&&(Qs(a,e)&&Qs(e,a)&&_x(a,e)&&(at(a.prev,a,e.prev)||at(a,e.prev,e))||_o(a,e)&&at(a.prev,a,a.next)>0&&at(e.prev,e,e.next)>0)}function at(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function _o(a,e){return a.x===e.x&&a.y===e.y}function Bd(a,e,t,i){const r=rn(at(a,e,t)),s=rn(at(a,e,i)),n=rn(at(t,i,a)),o=rn(at(t,i,e));return!!(r!==s&&n!==o||r===0&&tn(a,t,e)||s===0&&tn(a,i,e)||n===0&&tn(t,a,i)||o===0&&tn(t,e,i))}function tn(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function rn(a){return a>0?1:a<0?-1:0}function gx(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Bd(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Qs(a,e){return at(a.prev,a,a.next)<0?at(a,e,a.next)>=0&&at(a,a.prev,e)>=0:at(a,e,a.prev)<0||at(a,a.next,e)<0}function _x(a,e){let t=a,i=!1;const r=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==a);return i}function zd(a,e){const t=new Pl(a.i,a.x,a.y),i=new Pl(e.i,e.x,e.y),r=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Oh(a,e,t,i){const r=new Pl(a,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ea(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Pl(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vx(a,e,t,i){let r=0;for(let s=e,n=t-i;s<t;s+=i)r+=(a[n]-a[s])*(a[s+1]+a[n+1]),n=s;return r}class pi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Fh(e),Bh(i,e);let n=e.length;t.forEach(Fh);for(let l=0;l<t.length;l++)r.push(n),n+=t[l].length,Bh(i,t[l]);const o=ix.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Fh(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Bh(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class vo extends Ge{constructor(e=new Mr([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];n(c)}this.setAttribute("position",new Se(r,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals();function n(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:xx;let v,y=!1,R,E,w,P;m&&(v=m.getSpacedPoints(h),y=!0,u=!1,R=m.computeFrenetFrames(h,!1),E=new C,w=new C,P=new C),u||(g=0,p=0,f=0,_=0);const b=o.extractPoints(c);let M=b.shape;const I=b.holes;if(!pi.isClockWise(M)){M=M.reverse();for(let Q=0,A=I.length;Q<A;Q++){const se=I[Q];pi.isClockWise(se)&&(I[Q]=se.reverse())}}const O=pi.triangulateShape(M,I),F=M;for(let Q=0,A=I.length;Q<A;Q++){const se=I[Q];M=M.concat(se)}function V(Q,A,se){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(A,se)}const W=M.length,H=O.length;function $(Q,A,se){let he,re,ae;const Pe=Q.x-A.x,ge=Q.y-A.y,Te=se.x-Q.x,L=se.y-Q.y,S=Pe*Pe+ge*ge,B=Pe*L-ge*Te;if(Math.abs(B)>Number.EPSILON){const q=Math.sqrt(S),K=Math.sqrt(Te*Te+L*L),Z=A.x-ge/q,we=A.y+Pe/q,ue=se.x-L/K,ve=se.y+Te/K,Fe=((ue-Z)*L-(ve-we)*Te)/(Pe*L-ge*Te);he=Z+Pe*Fe-Q.x,re=we+ge*Fe-Q.y;const ie=he*he+re*re;if(ie<=2)return new Y(he,re);ae=Math.sqrt(ie/2)}else{let q=!1;Pe>Number.EPSILON?Te>Number.EPSILON&&(q=!0):Pe<-Number.EPSILON?Te<-Number.EPSILON&&(q=!0):Math.sign(ge)===Math.sign(L)&&(q=!0),q?(he=-ge,re=Pe,ae=Math.sqrt(S)):(he=Pe,re=ge,ae=Math.sqrt(S/2))}return new Y(he/ae,re/ae)}const G=[];for(let Q=0,A=F.length,se=A-1,he=Q+1;Q<A;Q++,se++,he++)se===A&&(se=0),he===A&&(he=0),G[Q]=$(F[Q],F[se],F[he]);const oe=[];let fe,Re=G.concat();for(let Q=0,A=I.length;Q<A;Q++){const se=I[Q];fe=[];for(let he=0,re=se.length,ae=re-1,Pe=he+1;he<re;he++,ae++,Pe++)ae===re&&(ae=0),Pe===re&&(Pe=0),fe[he]=$(se[he],se[ae],se[Pe]);oe.push(fe),Re=Re.concat(fe)}for(let Q=0;Q<g;Q++){const A=Q/g,se=p*Math.cos(A*Math.PI/2),he=f*Math.sin(A*Math.PI/2)+_;for(let re=0,ae=F.length;re<ae;re++){const Pe=V(F[re],G[re],he);de(Pe.x,Pe.y,-se)}for(let re=0,ae=I.length;re<ae;re++){const Pe=I[re];fe=oe[re];for(let ge=0,Te=Pe.length;ge<Te;ge++){const L=V(Pe[ge],fe[ge],he);de(L.x,L.y,-se)}}}const Xe=f+_;for(let Q=0;Q<W;Q++){const A=u?V(M[Q],Re[Q],Xe):M[Q];y?(w.copy(R.normals[0]).multiplyScalar(A.x),E.copy(R.binormals[0]).multiplyScalar(A.y),P.copy(v[0]).add(w).add(E),de(P.x,P.y,P.z)):de(A.x,A.y,0)}for(let Q=1;Q<=h;Q++)for(let A=0;A<W;A++){const se=u?V(M[A],Re[A],Xe):M[A];y?(w.copy(R.normals[Q]).multiplyScalar(se.x),E.copy(R.binormals[Q]).multiplyScalar(se.y),P.copy(v[Q]).add(w).add(E),de(P.x,P.y,P.z)):de(se.x,se.y,d/h*Q)}for(let Q=g-1;Q>=0;Q--){const A=Q/g,se=p*Math.cos(A*Math.PI/2),he=f*Math.sin(A*Math.PI/2)+_;for(let re=0,ae=F.length;re<ae;re++){const Pe=V(F[re],G[re],he);de(Pe.x,Pe.y,d+se)}for(let re=0,ae=I.length;re<ae;re++){const Pe=I[re];fe=oe[re];for(let ge=0,Te=Pe.length;ge<Te;ge++){const L=V(Pe[ge],fe[ge],he);y?de(L.x,L.y+v[h-1].y,v[h-1].x+se):de(L.x,L.y,d+se)}}}Ze(),X();function Ze(){const Q=r.length/3;if(u){let A=0,se=W*A;for(let he=0;he<H;he++){const re=O[he];pe(re[2]+se,re[1]+se,re[0]+se)}A=h+g*2,se=W*A;for(let he=0;he<H;he++){const re=O[he];pe(re[0]+se,re[1]+se,re[2]+se)}}else{for(let A=0;A<H;A++){const se=O[A];pe(se[2],se[1],se[0])}for(let A=0;A<H;A++){const se=O[A];pe(se[0]+W*h,se[1]+W*h,se[2]+W*h)}}i.addGroup(Q,r.length/3-Q,0)}function X(){const Q=r.length/3;let A=0;te(F,A),A+=F.length;for(let se=0,he=I.length;se<he;se++){const re=I[se];te(re,A),A+=re.length}i.addGroup(Q,r.length/3-Q,1)}function te(Q,A){let se=Q.length;for(;--se>=0;){const he=se;let re=se-1;re<0&&(re=Q.length-1);for(let ae=0,Pe=h+g*2;ae<Pe;ae++){const ge=W*ae,Te=W*(ae+1),L=A+he+ge,S=A+re+ge,B=A+re+Te,q=A+he+Te;Ie(L,S,B,q)}}}function de(Q,A,se){l.push(Q),l.push(A),l.push(se)}function pe(Q,A,se){Ce(Q),Ce(A),Ce(se);const he=r.length/3,re=x.generateTopUV(i,r,he-3,he-2,he-1);Ne(re[0]),Ne(re[1]),Ne(re[2])}function Ie(Q,A,se,he){Ce(Q),Ce(A),Ce(he),Ce(A),Ce(se),Ce(he);const re=r.length/3,ae=x.generateSideWallUV(i,r,re-6,re-3,re-2,re-1);Ne(ae[0]),Ne(ae[1]),Ne(ae[3]),Ne(ae[1]),Ne(ae[2]),Ne(ae[3])}function Ce(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Ne(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return yx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,n=e.shapes.length;s<n;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Xn[r.type]().fromJSON(r)),new vo(i,e.options)}}const xx={generateTopUV:function(a,e,t,i,r){const s=e[t*3],n=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new Y(s,n),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(a,e,t,i,r,s){const n=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[r*3],p=e[r*3+1],f=e[r*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(n-c)?[new Y(n,1-l),new Y(c,1-d),new Y(u,1-f),new Y(_,1-m)]:[new Y(o,1-l),new Y(h,1-d),new Y(p,1-f),new Y(g,1-m)]}};function yx(a,e,t){if(t.shapes=[],Array.isArray(a))for(let i=0,r=a.length;i<r;i++){const s=a[i];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xo extends Zi{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xo(e.radius,e.detail)}}class da extends Zi{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new da(e.radius,e.detail)}}class yo extends Ge{constructor(e=.5,t=1,i=32,r=1,s=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:n},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/r,p=new C,f=new Y;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const m=s+g/i*n;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let m=0;m<i;m++){const x=m+g,v=x,y=x+i+1,R=x+i+2,E=x+1;o.push(v,y,E),o.push(y,R,E)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mo extends Ge{constructor(e=new Mr([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],n=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(n,2));function c(h){const d=r.length/3,u=h.extractPoints(t);let p=u.shape;const f=u.holes;pi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){const x=f[g];pi.isClockWise(x)===!0&&(f[g]=x.reverse())}const _=pi.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){const x=f[g];p=p.concat(x)}for(let g=0,m=p.length;g<m;g++){const x=p[g];r.push(x.x,x.y,0),s.push(0,0,1),n.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],v=x[0]+d,y=x[1]+d,R=x[2]+d;i.push(v,y,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Mx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const n=t[e.shapes[r]];i.push(n)}return new Mo(i,e.curveSegments)}}function Mx(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,i=a.length;t<i;t++){const r=a[t];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e}class pa extends Ge{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:n,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(n+o,Math.PI);let c=0;const h=[],d=new C,u=new C,p=[],f=[],_=[],g=[];for(let m=0;m<=i;m++){const x=[],v=m/i;let y=0;m===0&&n===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(r+E*s)*Math.sin(n+v*o),d.y=e*Math.cos(n+v*o),d.z=e*Math.sin(r+E*s)*Math.sin(n+v*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(E+y,1-v),x.push(c++)}h.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const v=h[m][x+1],y=h[m][x],R=h[m+1][x],E=h[m+1][x+1];(m!==0||n>0)&&p.push(v,y,E),(m!==i-1||l<Math.PI)&&p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class So extends Zi{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new So(e.radius,e.detail)}}class bo extends Ge{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const n=[],o=[],l=[],c=[],h=new C,d=new C,u=new C;for(let p=0;p<=i;p++)for(let f=0;f<=r;f++){const _=f/r*s,g=p/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=r;f++){const _=(r+1)*p+f-1,g=(r+1)*(p-1)+f-1,m=(r+1)*(p-1)+f,x=(r+1)*p+f;n.push(_,g,x),n.push(g,m,x)}this.setIndex(n),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class To extends Ge{constructor(e=1,t=.4,i=64,r=8,s=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:n},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],h=[],d=new C,u=new C,p=new C,f=new C,_=new C,g=new C,m=new C;for(let v=0;v<=i;++v){const y=v/i*s*Math.PI*2;x(y,s,n,e,p),x(y+.01,s,n,e,f),g.subVectors(f,p),m.addVectors(f,p),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let R=0;R<=r;++R){const E=R/r*Math.PI*2,w=-t*Math.cos(E),P=t*Math.sin(E);d.x=p.x+(w*m.x+P*_.x),d.y=p.y+(w*m.y+P*_.y),d.z=p.z+(w*m.z+P*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(v/i),h.push(R/r)}}for(let v=1;v<=i;v++)for(let y=1;y<=r;y++){const R=(r+1)*(v-1)+(y-1),E=(r+1)*v+(y-1),w=(r+1)*v+y,P=(r+1)*(v-1)+y;o.push(R,E,P),o.push(E,w,P)}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2));function x(v,y,R,E,w){const P=Math.cos(v),b=Math.sin(v),M=R/y*v,I=Math.cos(M);w.x=E*(2+I)*.5*P,w.y=E*(2+I)*b*.5,w.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Eo extends Ge{constructor(e=new lc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const n=e.computeFrenetFrames(t,s);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;const o=new C,l=new C,c=new Y;let h=new C;const d=[],u=[],p=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(p,2));function _(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),x(),m()}function g(v){h=e.getPointAt(v/t,h);const y=n.normals[v],R=n.binormals[v];for(let E=0;E<=r;E++){const w=E/r*Math.PI*2,P=Math.sin(w),b=-Math.cos(w);l.x=b*y.x+P*R.x,l.y=b*y.y+P*R.y,l.z=b*y.z+P*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=r;y++){const R=(r+1)*(v-1)+(y-1),E=(r+1)*v+(y-1),w=(r+1)*v+y,P=(r+1)*(v-1)+y;f.push(R,E,P),f.push(E,w,P)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=r;y++)c.x=v/t,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Eo(new Xn[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class kd extends Ge{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new C,s=new C;if(e.index!==null){const n=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,p=d.count;for(let f=u,_=u+p;f<_;f+=3)for(let g=0;g<3;g++){const m=o.getX(f+g),x=o.getX(f+(g+1)%3);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),zh(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const n=e.attributes.position;for(let o=0,l=n.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(n,h),s.fromBufferAttribute(n,d),zh(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function zh(a,e,t){const i=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var kh=Object.freeze({__proto__:null,BoxGeometry:wr,CapsuleGeometry:po,CircleGeometry:mo,ConeGeometry:fo,CylinderGeometry:ds,DodecahedronGeometry:go,EdgesGeometry:Od,ExtrudeGeometry:vo,IcosahedronGeometry:xo,LatheGeometry:ua,OctahedronGeometry:da,PlaneGeometry:hs,PolyhedronGeometry:Zi,RingGeometry:yo,ShapeGeometry:Mo,SphereGeometry:pa,TetrahedronGeometry:So,TorusGeometry:bo,TorusKnotGeometry:To,TubeGeometry:Eo,WireframeGeometry:kd});class Vd extends Rt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hd extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hc extends Rt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gd extends hc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wd extends Rt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xd extends Rt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jd extends Rt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class qd extends Rt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yd extends Rt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends Ft{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function _r(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Jd(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Kd(a){function e(r,s){return a[r]-a[s]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Ll(a,e,t){const i=a.length,r=new a.constructor(i);for(let s=0,n=0;n!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[n++]=a[o+l]}return r}function uc(a,e,t,i){let r=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[r++];if(s===void 0)return;let n=s[i];if(n!==void 0)if(Array.isArray(n))do n=s[i],n!==void 0&&(e.push(s.time),t.push.apply(t,n)),s=a[r++];while(s!==void 0);else if(n.toArray!==void 0)do n=s[i],n!==void 0&&(e.push(s.time),n.toArray(t,t.length)),s=a[r++];while(s!==void 0);else do n=s[i],n!==void 0&&(e.push(s.time),t.push(n)),s=a[r++];while(s!==void 0)}function Sx(a,e,t,i,r=30){const s=a.clone();s.name=e;const n=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let p=0;p<c.times.length;++p){const f=c.times[p]*r;if(!(f<t||f>=i)){d.push(c.times[p]);for(let _=0;_<h;++_)u.push(c.values[p*h+_])}}d.length!==0&&(c.times=_r(d,c.times.constructor),c.values=_r(u,c.values.constructor),n.push(c))}s.tracks=n;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function bx(a,e=0,t=a,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let n=0;n<r;++n){const o=t.tracks[n],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const f=o.times.length-1;let _;if(s<=o.times[0]){const m=h,x=d-h;_=o.values.slice(m,x)}else if(s>=o.times[f]){const m=f*d+h,x=m+d-h;_=o.values.slice(m,x)}else{const m=o.createInterpolant(),x=h,v=d-h;m.evaluate(s),_=m.resultBuffer.slice(x,v)}l==="quaternion"&&new zt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const x=m*p+u;if(l==="quaternion")zt.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const v=p-u*2;for(let y=0;y<v;++y)c.values[x+y]-=_[y]}}}return a.blendMode=Xl,a}const Tx={convertArray:_r,isTypedArray:Jd,getKeyframeOrder:Kd,sortedArray:Ll,flattenJSON:uc,subclip:Sx,makeClipAdditive:bx};class ma{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}n=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}n=i,i=0;break i}break e}for(;i<n;){const o=i+n>>>1;e<t[o]?n=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let n=0;n!==r;++n)t[n]=i[s+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $d extends ma{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mr,endingEnd:mr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,n=e+1,o=r[s],l=r[n];if(o===void 0)switch(this.getSettings_().endingStart){case fr:s=e,o=2*t-i;break;case Ws:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fr:n=e,l=2*i-t;break;case Ws:n=1,l=i+r[1]-r[0];break;default:n=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=n*h}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),_=f*f,g=_*f,m=-u*g+2*u*_-u*f,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*f+1,v=(-1-p)*g+(1.5+p)*_+.5*f,y=p*g-p*_;for(let R=0;R!==o;++R)s[R]=m*n[h+R]+x*n[c+R]+v*n[l+R]+y*n[d+R];return s}}class dc extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=n[c+u]*d+n[l+u]*h;return s}}class Qd extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $d(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Hn:t=this.InterpolantFactoryMethodLinear;break;case un:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Hn;case this.InterpolantFactoryMethodSmooth:return un}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,n=r-1;for(;s!==r&&i[s]<e;)++s;for(;n!==-1&&i[n]>t;)--n;if(++n,s!==0||n!==r){s>=n&&(n=Math.max(n,1),s=n-1);const o=this.getValueSize();this.times=i.slice(s,n),this.values=this.values.slice(s*o,n*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(n!==null&&n>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,n),e=!1;break}n=l}if(r!==void 0&&Jd(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===un,s=e.length-1;let n=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let f=0;f!==i;++f){const _=t[d+f];if(_!==t[u+f]||_!==t[p+f]){l=!0;break}}}if(l){if(o!==n){e[n]=e[o];const d=o*i,u=n*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++n}}if(s>0){e[n]=e[s];for(let o=s*i,l=n*i,c=0;c!==i;++c)t[l+c]=t[o+c];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Hn;class Ar extends ai{constructor(e,t,i){super(e,t,i)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Gs;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class pc extends ai{}pc.prototype.ValueTypeName="color";class ta extends ai{}ta.prototype.ValueTypeName="number";class ep extends ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)zt.slerpFlat(s,0,n,c-o,n,c,l);return s}}class fa extends ai{InterpolantFactoryMethodLinear(e){return new ep(this.times,this.values,this.getValueSize(),e)}}fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends ai{constructor(e,t,i){super(e,t,i)}}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Gs;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class ia extends ai{}ia.prototype.ValueTypeName="vector";class ra{constructor(e="",t=-1,i=[],r=Qn){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Xt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,o=i.length;n!==o;++n)t.push(wx(i[n]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,n=i.length;s!==n;++s)t.push(ai.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,n=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Kd(l);l=Ll(l,1,h),c=Ll(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),n.push(new ta(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=r[d];u||(r[d]=u=[]),u.push(c)}}const n=[];for(const o in r)n.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return n}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,u,p,f){if(u.length!==0){const _=[],g=[];uc(u,_,g,p),_.length!==0&&f.push(new h(d,_,g))}},r=[],s=e.name||"default",n=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let f=0;f<d[p].morphTargets.length;f++)u[d[p].morphTargets[f]]=-1;for(const f in u){const _=[],g=[];for(let m=0;m!==d[p].morphTargets.length;++m){const x=d[p];_.push(x.time),g.push(x.morphTarget===f?1:0)}r.push(new ta(".morphTargetInfluence["+f+"]",_,g))}l=u.length*n}else{const u=".bones["+t[h].name+"]";i(ia,u+".position",d,"pos",r),i(fa,u+".quaternion",d,"rot",r),i(ia,u+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ex(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ta;case"vector":case"vector2":case"vector3":case"vector4":return ia;case"color":return pc;case"quaternion":return fa;case"bool":case"boolean":return Ar;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function wx(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ex(a.type);if(a.times===void 0){const t=[],i=[];uc(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const wi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class mc{constructor(e,t,i){const r=this;let s=!1,n=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,n,o),s=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,o),n===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}}const tp=new mc;class kt{constructor(e){this.manager=e!==void 0?e:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kt.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class Ax extends Error{constructor(e,t){super(e),this.response=t}}class Ii extends kt{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:r});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:r});const n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(n).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=bi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,f=p!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){d.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let E=0,w=h.length;E<w;E++){const P=h[E];P.onProgress&&P.onProgress(R)}m.enqueue(y),x()}},v=>{m.error(v)})}}});return new Response(g)}else throw new Ax(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{wi.add(e,c);const h=bi[e];delete bi[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cx extends kt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new Ii(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=ra.parse(e[i]);t.push(r)}return t}}class Rx extends kt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=[],o=new ho,l=new Ii(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const p=s.parse(u,!0);n[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(o.minFilter=lt),o.image=n,o.format=p.format,o.needsUpdate=!0,t&&t(o))},i,r)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=s.parse(d,!0);if(u.isCubemap){const p=u.mipmaps.length/u.mipmapCount;for(let f=0;f<p;f++){n[f]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)n[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+_]),n[f].format=u.format,n[f].width=u.width,n[f].height=u.height}o.image=n}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=lt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,r);return o}}class sa extends kt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=wi.get(e);if(n!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0),n;const o=Js("img");function l(){h(),wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Px extends kt{constructor(e){super(e)}load(e,t,i,r){const s=new ca;s.colorSpace=Zt;const n=new sa(this.manager);n.setCrossOrigin(this.crossOrigin),n.setPath(this.path);let o=0;function l(c){n.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class ip extends kt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new di,o=new Ii(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?n.image=c.image:c.data!==void 0&&(n.image.width=c.width,n.image.height=c.height,n.image.data=c.data),n.wrapS=c.wrapS!==void 0?c.wrapS:Jt,n.wrapT=c.wrapT!==void 0?c.wrapT:Jt,n.magFilter=c.magFilter!==void 0?c.magFilter:lt,n.minFilter=c.minFilter!==void 0?c.minFilter:lt,n.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(n.colorSpace=c.colorSpace),c.flipY!==void 0&&(n.flipY=c.flipY),c.format!==void 0&&(n.format=c.format),c.type!==void 0&&(n.type=c.type),c.mipmaps!==void 0&&(n.mipmaps=c.mipmaps,n.minFilter=ci),c.mipmapCount===1&&(n.minFilter=lt),c.generateMipmaps!==void 0&&(n.generateMipmaps=c.generateMipmaps),n.needsUpdate=!0,t&&t(n,c)},i,r),n}}class Lx extends kt{constructor(e){super(e)}load(e,t,i,r){const s=new ct,n=new sa(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ji extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class rp extends Ji{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pl=new Le,Vh=new C,Hh=new C;class fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ix extends fc{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=as*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sp extends Ji{constructor(e,t,i=0,r=Math.PI/3,s=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.distance=i,this.angle=r,this.penumbra=s,this.decay=n,this.map=null,this.shadow=new Ix}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gh=new Le,Es=new C,ml=new C;class Ux extends fc{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),i.position.copy(Es),ml.copy(i.position),ml.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ml),i.updateMatrixWorld(),r.makeTranslation(-Es.x,-Es.y,-Es.z),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class ap extends Ji{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dx extends fc{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class np extends Ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new Dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class op extends Ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lp extends Ji{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class cp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.282095),t.addScaledVector(n[1],.488603*r),t.addScaledVector(n[2],.488603*s),t.addScaledVector(n[3],.488603*i),t.addScaledVector(n[4],1.092548*(i*r)),t.addScaledVector(n[5],1.092548*(r*s)),t.addScaledVector(n[6],.315392*(3*s*s-1)),t.addScaledVector(n[7],1.092548*(i*s)),t.addScaledVector(n[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.886227),t.addScaledVector(n[1],2*.511664*r),t.addScaledVector(n[2],2*.511664*s),t.addScaledVector(n[3],2*.511664*i),t.addScaledVector(n[4],2*.429043*i*r),t.addScaledVector(n[5],2*.429043*r*s),t.addScaledVector(n[6],.743125*s*s-.247708),t.addScaledVector(n[7],2*.429043*i*s),t.addScaledVector(n[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}class hp extends Ji{constructor(e=new cp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class wo extends kt{constructor(e){super(e),this.textures={}}load(e,t,i,r){const s=this,n=new Ii(s.manager);n.setPath(s.path),n.setRequestHeader(s.requestHeader),n.setWithCredentials(s.withCredentials),n.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=wo.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const n=e.uniforms[s];switch(r.uniforms[s]={},n.type){case"t":r.uniforms[s].value=i(n.value);break;case"c":r.uniforms[s].value=new me().setHex(n.value);break;case"v2":r.uniforms[s].value=new Y().fromArray(n.value);break;case"v3":r.uniforms[s].value=new C().fromArray(n.value);break;case"v4":r.uniforms[s].value=new Ke().fromArray(n.value);break;case"m3":r.uniforms[s].value=new ke().fromArray(n.value);break;case"m4":r.uniforms[s].value=new Le().fromArray(n.value);break;default:r.uniforms[s].value=n.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new Y().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new Y().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Vd,SpriteMaterial:tc,RawShaderMaterial:Hd,ShaderMaterial:ri,PointsMaterial:rc,MeshPhysicalMaterial:Gd,MeshStandardMaterial:hc,MeshPhongMaterial:Wd,MeshToonMaterial:Xd,MeshNormalMaterial:jd,MeshLambertMaterial:qd,MeshDepthMaterial:Ql,MeshDistanceMaterial:ec,MeshBasicMaterial:Yi,MeshMatcapMaterial:Yd,LineDashedMaterial:Zd,LineBasicMaterial:Ft,Material:Rt};return new t[e]}}class Il{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class up extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dp extends kt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new Ii(s.manager);n.setPath(s.path),n.setRequestHeader(s.requestHeader),n.setWithCredentials(s.withCredentials),n.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(u,p){if(t[p]!==void 0)return t[p];const f=u.interleavedBuffers[p],_=s(u,f.buffer),g=$r(f.type,_),m=new lo(g,f.stride);return m.uuid=f.uuid,t[p]=m,m}function s(u,p){if(i[p]!==void 0)return i[p];const f=u.arrayBuffers[p],_=new Uint32Array(f).buffer;return i[p]=_,_}const n=e.isInstancedBufferGeometry?new up:new Ge,o=e.data.index;if(o!==void 0){const u=$r(o.type,o.array);n.setIndex(new $e(u,1))}const l=e.data.attributes;for(const u in l){const p=l[u];let f;if(p.isInterleavedBufferAttribute){const _=r(e.data,p.data);f=new Tr(_,p.itemSize,p.offset,p.normalized)}else{const _=$r(p.type,p.array),g=p.isInstancedBufferAttribute?os:$e;f=new g(_,p.itemSize,p.normalized)}p.name!==void 0&&(f.name=p.name),p.usage!==void 0&&f.setUsage(p.usage),n.setAttribute(u,f)}const c=e.data.morphAttributes;if(c)for(const u in c){const p=c[u],f=[];for(let _=0,g=p.length;_<g;_++){const m=p[_];let x;if(m.isInterleavedBufferAttribute){const v=r(e.data,m.data);x=new Tr(v,m.itemSize,m.offset,m.normalized)}else{const v=$r(m.type,m.array);x=new $e(v,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),f.push(x)}n.morphAttributes[u]=f}e.data.morphTargetsRelative&&(n.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,p=h.length;u!==p;++u){const f=h[u];n.addGroup(f.start,f.count,f.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const u=new C;d.center!==void 0&&u.fromArray(d.center),n.boundingSphere=new Ct(u,d.radius)}return e.name&&(n.name=e.name),e.userData&&(n.userData=e.userData),n}}class Nx extends kt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=this.path===""?Il.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const o=new Ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?Il.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new Ii(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const n=await s.loadAsync(e,t),o=JSON.parse(n),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),n=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,n),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(const u in n)if(n[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),n=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,n),l=this.parseObject(e.object,r,o,n,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new Mr().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,n=e.length;s<n;s++){const o=new co().fromJSON(e[s],r);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new dp;for(let s=0,n=e.length;s<n;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in kh?o=kh[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const s=new wo;s.setTextures(t);for(let n=0,o=e.length;n<o;n++){const l=e[n];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),r[l.uuid]=i[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=ra.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const i=this,r={};let s;function n(l){return i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return n(h)}else return l.data?{data:$r(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new mc(t);s=new sa(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const p=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o(g);m!==null&&(m instanceof HTMLImageElement?p.push(m):p.push(new di(m.data,m.width,m.height)))}r[d.uuid]=new gr(p)}else{const p=o(d.url);r[d.uuid]=new gr(p)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function s(n){if(typeof n=="string"){const o=n,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return n.data?{data:$r(n.type,n.data),width:n.width,height:n.height}:null}if(e!==void 0&&e.length>0){r=new sa(this.manager),r.setCrossOrigin(this.crossOrigin);for(let n=0,o=e.length;n<o;n++){const l=e[n],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d],f=await s(p);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new di(f.data,f.width,f.height)))}i[l.uuid]=new gr(h)}else{const h=await s(l.url);i[l.uuid]=new gr(h)}}}return i}parseTextures(e,t){function i(s,n){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),n[s])}const r={};if(e!==void 0)for(let s=0,n=e.length;s<n;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new ca,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new di:h=new ct,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,Ox)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],Wh),h.wrapT=i(o.wrap[1],Wh)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,Xh)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,Xh)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),r[o.uuid]=h}return r}parseObject(e,t,i,r,s){let n;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const p=[];for(let f=0,_=u.length;f<_;f++){const g=u[f];i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),p.push(i[g])}return p}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}function c(u){return r[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),r[u]}let h,d;switch(e.type){case"Scene":n=new Sd,e.background!==void 0&&(Number.isInteger(e.background)?n.background=new me(e.background):n.background=c(e.background)),e.environment!==void 0&&(n.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?n.fog=new oo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(n.fog=new no(e.fog.color,e.fog.density)),e.fog.name!==""&&(n.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(n.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(n.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&n.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(n.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&n.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":n=new bt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(n.focus=e.focus),e.zoom!==void 0&&(n.zoom=e.zoom),e.filmGauge!==void 0&&(n.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(n.filmOffset=e.filmOffset),e.view!==void 0&&(n.view=Object.assign({},e.view));break;case"OrthographicCamera":n=new so(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(n.zoom=e.zoom),e.view!==void 0&&(n.view=Object.assign({},e.view));break;case"AmbientLight":n=new op(e.color,e.intensity);break;case"DirectionalLight":n=new np(e.color,e.intensity),n.target=e.target||"";break;case"PointLight":n=new ap(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":n=new lp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":n=new sp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),n.target=e.target||"";break;case"HemisphereLight":n=new rp(e.color,e.groundColor,e.intensity);break;case"LightProbe":n=new hp().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),n=new wd(h,d),e.bindMode!==void 0&&(n.bindMode=e.bindMode),e.bindMatrix!==void 0&&n.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(n.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),n=new gt(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);const u=e.count,p=e.instanceMatrix,f=e.instanceColor;n=new Ad(h,d,u),n.instanceMatrix=new os(new Float32Array(p.array),16),f!==void 0&&(n.instanceColor=new os(new Float32Array(f.array),f.itemSize));break;case"BatchedMesh":h=o(e.geometry),d=l(e.material),n=new Cd(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),n.geometry=h,n.perObjectFrustumCulled=e.perObjectFrustumCulled,n.sortObjects=e.sortObjects,n._drawRanges=e.drawRanges,n._reservedRanges=e.reservedRanges,n._visibility=e.visibility,n._active=e.active,n._bounds=e.bounds.map(_=>{const g=new Ot;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new Ct;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),n._maxInstanceCount=e.maxInstanceCount,n._maxVertexCount=e.maxVertexCount,n._maxIndexCount=e.maxIndexCount,n._geometryInitialized=e.geometryInitialized,n._geometryCount=e.geometryCount,n._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(n._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":n=new Ed;break;case"Line":n=new ji(o(e.geometry),l(e.material));break;case"LineLoop":n=new Rd(o(e.geometry),l(e.material));break;case"LineSegments":n=new gi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":n=new Pd(o(e.geometry),l(e.material));break;case"Sprite":n=new Td(l(e.material));break;case"Group":n=new es;break;case"Bone":n=new ic;break;default:n=new et}if(n.uuid=e.uuid,e.name!==void 0&&(n.name=e.name),e.matrix!==void 0?(n.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(n.matrixAutoUpdate=e.matrixAutoUpdate),n.matrixAutoUpdate&&n.matrix.decompose(n.position,n.quaternion,n.scale)):(e.position!==void 0&&n.position.fromArray(e.position),e.rotation!==void 0&&n.rotation.fromArray(e.rotation),e.quaternion!==void 0&&n.quaternion.fromArray(e.quaternion),e.scale!==void 0&&n.scale.fromArray(e.scale)),e.up!==void 0&&n.up.fromArray(e.up),e.castShadow!==void 0&&(n.castShadow=e.castShadow),e.receiveShadow!==void 0&&(n.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(n.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(n.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(n.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(n.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&n.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(n.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(n.visible=e.visible),e.frustumCulled!==void 0&&(n.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(n.renderOrder=e.renderOrder),e.userData!==void 0&&(n.userData=e.userData),e.layers!==void 0&&(n.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let p=0;p<u.length;p++)n.add(this.parseObject(u[p],t,i,r,s))}if(e.animations!==void 0){const u=e.animations;for(let p=0;p<u.length;p++){const f=u[p];n.animations.push(s[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(n.autoUpdate=e.autoUpdate);const u=e.levels;for(let p=0;p<u.length;p++){const f=u[p],_=n.getObjectByProperty("uuid",f.object);_!==void 0&&n.addLevel(_,f.distance,f.hysteresis)}}return n}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new et}})}}const Ox={UVMapping:jn,CubeReflectionMapping:Pi,CubeRefractionMapping:Xi,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:ks,CubeUVReflectionMapping:ls},Wh={RepeatWrapping:Vs,ClampToEdgeWrapping:Jt,MirroredRepeatWrapping:Hs},Xh={NearestFilter:Mt,NearestMipmapNearestFilter:Nl,NearestMipmapLinearFilter:Kr,LinearFilter:lt,LinearMipmapNearestFilter:Rs,LinearMipmapLinearFilter:ci};class Fx extends kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=wi.get(e);if(n!==void 0){if(s.manager.itemStart(e),n.then){n.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0),n}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return wi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),wi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(e,l),s.manager.itemStart(e)}}let sn;class gc{static getContext(){return sn===void 0&&(sn=new(window.AudioContext||window.webkitAudioContext)),sn}static setContext(e){sn=e}}class Bx extends kt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new Ii(this.manager);n.setResponseType("arraybuffer"),n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(l){try{const c=l.slice(0);gc.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},i,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}const jh=new Le,qh=new Le,nr=new Le;class zx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,nr.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,s=t.near*Math.tan(yr*t.fov*.5)/t.zoom;let n,o;qh.elements[12]=-i,jh.elements[12]=i,n=-s*t.aspect+r,o=s*t.aspect+r,nr.elements[0]=2*t.near/(o-n),nr.elements[8]=(o+n)/(o-n),this.cameraL.projectionMatrix.copy(nr),n=-s*t.aspect-r,o=s*t.aspect-r,nr.elements[0]=2*t.near/(o-n),nr.elements[8]=(o+n)/(o-n),this.cameraR.projectionMatrix.copy(nr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(qh),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(jh)}}class pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yh(){return(typeof performance>"u"?Date:performance).now()}const or=new C,Zh=new zt,kx=new C,lr=new C;class Vx extends et{constructor(){super(),this.type="AudioListener",this.context=gc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new pp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(or,Zh,kx),lr.set(0,0,-1).applyQuaternion(Zh),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(or.x,r),t.positionY.linearRampToValueAtTime(or.y,r),t.positionZ.linearRampToValueAtTime(or.z,r),t.forwardX.linearRampToValueAtTime(lr.x,r),t.forwardY.linearRampToValueAtTime(lr.y,r),t.forwardZ.linearRampToValueAtTime(lr.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(or.x,or.y,or.z),t.setOrientation(lr.x,lr.y,lr.z,i.x,i.y,i.z)}}class mp extends et{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const cr=new C,Jh=new zt,Hx=new C,hr=new C;class Gx extends mp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(cr,Jh,Hx),hr.set(0,0,1).applyQuaternion(Jh);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(cr.x,i),t.positionY.linearRampToValueAtTime(cr.y,i),t.positionZ.linearRampToValueAtTime(cr.z,i),t.orientationX.linearRampToValueAtTime(hr.x,i),t.orientationY.linearRampToValueAtTime(hr.y,i),t.orientationZ.linearRampToValueAtTime(hr.z,i)}else t.setPosition(cr.x,cr.y,cr.z),t.setOrientation(hr.x,hr.y,hr.z)}}class Wx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class fp{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,n;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,n=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,n=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,n=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=n,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let n=this.cumulativeWeight;if(n===0){for(let o=0;o!==r;++o)i[s+o]=i[o];n=t}else{n+=t;const o=t/n;this._mixBufferRegion(i,s,0,o,r)}this.cumulativeWeight=n}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,n=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}n>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,n=r;s!==n;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let n=0;n!==s;++n)e[t+n]=e[i+n]}_slerp(e,t,i,r){zt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const n=this._workIndex*s;zt.multiplyQuaternionsFlat(e,n,e,t,e,i),zt.slerpFlat(e,t,e,t,e,n,r)}_lerp(e,t,i,r,s){const n=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*n+e[i+o]*r}}_lerpAdditive(e,t,i,r,s){for(let n=0;n!==s;++n){const o=t+n;e[o]=e[o]+e[i+n]*r}}}const _c="\\[\\]\\.:\\/",Xx=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",jx="[^"+_c.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",vc),Yx=/(WCOD+)?/.source.replace("WCOD",jx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Kx=new RegExp("^"+qx+Yx+Zx+Jx+"$"),$x=["material","materials","bones","map"];class Qx{constructor(e,t,i){const r=i||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class qe{constructor(e,t,i){this.path=t,this.parsedPath=i||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,i):new qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){const t=Kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);$x.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let n=0;n<s.length;n++){const o=s[n];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const n=e[r];if(n===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=Qx;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ey{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Xt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,n=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],p=u.uuid;let f=t[p];if(f===void 0){f=l++,t[p]=f,e.push(u);for(let _=0,g=n;_!==g;++_)s[_].push(new qe(u,i[_],r[_]))}else if(f<c){o=e[f];const _=--c,g=e[_];t[g.uuid]=f,e[f]=g,t[p]=_,e[_]=u;for(let m=0,x=n;m!==x;++m){const v=s[m],y=v[_];let R=v[f];v[f]=y,R===void 0&&(R=new qe(u,i[m],r[m])),v[_]=R}}else e[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_;for(let n=0,o=arguments.length;n!==o;++n){const l=arguments[n],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const d=s++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let p=0,f=r;p!==f;++p){const _=i[p],g=_[d],m=_[h];_[h]=g,_[d]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_,n=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<s){const u=--s,p=e[u],f=--n,_=e[f];t[p.uuid]=d,e[d]=p,t[_.uuid]=u,e[u]=_,e.pop();for(let g=0,m=r;g!==m;++g){const x=i[g],v=x[u],y=x[f];x[d]=v,x[u]=y,x.pop()}}else{const u=--n,p=e[u];u>0&&(t[p.uuid]=d),e[d]=p,e.pop();for(let f=0,_=r;f!==_;++f){const g=i[f];g[d]=g[u],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const s=this._bindings;if(r!==void 0)return s[r];const n=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);r=s.length,i[e]=r,n.push(e),o.push(t),s.push(d);for(let u=h,p=l.length;u!==p;++u){const f=l[u];d[u]=new qe(f,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,s=this._parsedPaths,n=this._bindings,o=n.length-1,l=n[o],c=e[o];t[c]=i,n[i]=l,n.pop(),s[i]=s[o],s.pop(),r[i]=r[o],r.pop()}}}class gp{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,n=s.length,o=new Array(n),l={endingStart:mr,endingEnd:mr};for(let c=0;c!==n;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(n),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ju,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,n=s/r,o=r/s;e.warp(1,n,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,n=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/n,c[1]=t/n,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const n=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xl:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(n),c[h].accumulateAdditive(o);break;case Qn:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(n),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const n=i===qu;if(e===0)return s===-1?r:n&&(s&1)===1?t-r:r;if(i===Xu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,n)):this._setEndings(this.repetitions===0,!0,n)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,n)}else this._setEndings(!1,!1,n);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(n&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=fr,r.endingEnd=fr):(e?r.endingStart=this.zeroSlopeAtStart?fr:mr:r.endingStart=Ws,t?r.endingEnd=this.zeroSlopeAtEnd?fr:mr:r.endingEnd=Ws)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let n=this._weightInterpolant;n===null&&(n=r._lendControlInterpolant(),this._weightInterpolant=n);const o=n.parameterPositions,l=n.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const ty=new Float32Array(1);class iy extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,n=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=r[d],p=u.name;let f=h[p];if(f!==void 0)++f.referenceCount,n[d]=f;else{if(f=n[d],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;f=new fp(qe.create(i,p,_),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),n[d]=f}o[d].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let n=s[t];if(n===void 0)n={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=n;else{const o=n.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),n.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,n=this._actionsByClip,o=n[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete n[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let n=r[t];n===void 0&&(n={},r[t]=n),n[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,n=this._bindingsByRootAndName,o=n[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete n[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new dc(new Float32Array(2),new Float32Array(2),1,ty),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let n=typeof e=="string"?ra.findByName(r,e):e;const o=n!==null?n.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(n!==null?i=n.blendMode:i=Qn),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],n===null&&(n=c._clip)}if(n===null)return null;const h=new gp(this,n,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?ra.findByName(i,e):e,n=s?s.uuid:e,o=this._actionsByClip[n];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),n=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,n);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(n);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const n=s.knownActions;for(let o=0,l=n.length;o!==l;++o){const c=n[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const n in i){const o=i[n].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const n in s){const o=s[n];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class xc{constructor(e){this.value=e}clone(){return new xc(this.value.clone===void 0?this.value:this.value.clone())}}let ry=0;class sy extends fi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:ry++}),this.name="",this.usage=Ys,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++){const s=Array.isArray(t[i])?t[i]:[t[i]];for(let n=0;n<s.length;n++)this.uniforms.push(s[n].clone())}return this}clone(){return new this.constructor().copy(this)}}class ay extends lo{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class ny{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Kh=new Le;class oy{constructor(e,t,i=0,r=1/0){this.ray=new cs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(e,t=!0,i=[]){return Ul(e,this,i,t),i.sort($h),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ul(e[r],this,i,t);return i.sort($h),i}}function $h(a,e){return a.distance-e.distance}function Ul(a,e,t,i){let r=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=a.children;for(let n=0,o=s.length;n<o;n++)Ul(s[n],e,t,!0)}}class ly{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cy{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class yc{constructor(e,t,i,r){yc.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}const Qh=new Y;class hy{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const eu=new C,an=new C;class uy{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){eu.subVectors(e,this.start),an.subVectors(this.end,this.start);const i=an.dot(an);let r=an.dot(eu)/i;return t&&(r=ot(r,0,1)),r}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const tu=new C;class dy extends et{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ge,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let n=0,o=1,l=32;n<l;n++,o++){const c=n/l*Math.PI*2,h=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Se(r,3));const s=new Ft({fog:!1,toneMapped:!1});this.cone=new gi(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),tu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(tu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Hi=new C,nn=new Le,fl=new Le;class py extends gi{constructor(e){const t=_p(e),i=new Ge,r=[],s=[],n=new me(0,0,1),o=new me(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(n.r,n.g,n.b),s.push(o.r,o.g,o.b))}i.setAttribute("position",new Se(r,3)),i.setAttribute("color",new Se(s,3));const l=new Ft({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");fl.copy(this.root.matrixWorld).invert();for(let s=0,n=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(nn.multiplyMatrices(fl,o.matrixWorld),Hi.setFromMatrixPosition(nn),r.setXYZ(n,Hi.x,Hi.y,Hi.z),nn.multiplyMatrices(fl,o.parent.matrixWorld),Hi.setFromMatrixPosition(nn),r.setXYZ(n+1,Hi.x,Hi.y,Hi.z),n+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function _p(a){const e=[];a.isBone===!0&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,_p(a.children[t]));return e}class my extends gt{constructor(e,t,i){const r=new pa(t,4,2),s=new Yi({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const fy=new C,iu=new me,ru=new me;class gy extends et{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const r=new da(t);r.rotateY(Math.PI*.5),this.material=new Yi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),n=new Float32Array(s.count*3);r.setAttribute("color",new $e(n,3)),this.add(new gt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");iu.copy(this.light.color),ru.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const s=i<r/2?iu:ru;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(fy.setFromMatrixPosition(this.light.matrixWorld).negate())}}class _y extends gi{constructor(e=10,t=10,i=4473924,r=8947848){i=new me(i),r=new me(r);const s=t/2,n=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,f=-o;u<=t;u++,f+=n){l.push(-o,0,f,o,0,f),l.push(f,0,-o,f,0,o);const _=u===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Ge;h.setAttribute("position",new Se(l,3)),h.setAttribute("color",new Se(c,3));const d=new Ft({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vy extends gi{constructor(e=10,t=16,i=8,r=64,s=4473924,n=8947848){s=new me(s),n=new me(n);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),p=Math.sin(u)*e,f=Math.cos(u)*e;o.push(0,0,0),o.push(p,0,f);const _=d&1?s:n;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<i;d++){const u=d&1?s:n,p=e-e/i*d;for(let f=0;f<r;f++){let _=f/r*(Math.PI*2),g=Math.sin(_)*p,m=Math.cos(_)*p;o.push(g,0,m),l.push(u.r,u.g,u.b),_=(f+1)/r*(Math.PI*2),g=Math.sin(_)*p,m=Math.cos(_)*p,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new Ge;c.setAttribute("position",new Se(o,3)),c.setAttribute("color",new Se(l,3));const h=new Ft({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const su=new C,on=new C,au=new C;class xy extends et{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Ge;r.setAttribute("position",new Se([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Ft({fog:!1,toneMapped:!1});this.lightPlane=new ji(r,s),this.add(this.lightPlane),r=new Ge,r.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new ji(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),su.setFromMatrixPosition(this.light.matrixWorld),on.setFromMatrixPosition(this.light.target.matrixWorld),au.subVectors(on,su),this.lightPlane.lookAt(on),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(on),this.targetLine.scale.z=au.length()}}const ln=new C,nt=new ro;class yy extends gi{constructor(e){const t=new Ge,i=new Ft({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],n={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(f,_){l(f),l(_)}function l(f){r.push(0,0,0),s.push(0,0,0),n[f]===void 0&&(n[f]=[]),n[f].push(r.length/3-1)}t.setAttribute("position",new Se(r,3)),t.setAttribute("color",new Se(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=n,this.update();const c=new me(16755200),h=new me(16711680),d=new me(43775),u=new me(16777215),p=new me(3355443);this.setColors(c,h,d,u,p)}setColors(e,t,i,r,s){const n=this.geometry.getAttribute("color");n.setXYZ(0,e.r,e.g,e.b),n.setXYZ(1,e.r,e.g,e.b),n.setXYZ(2,e.r,e.g,e.b),n.setXYZ(3,e.r,e.g,e.b),n.setXYZ(4,e.r,e.g,e.b),n.setXYZ(5,e.r,e.g,e.b),n.setXYZ(6,e.r,e.g,e.b),n.setXYZ(7,e.r,e.g,e.b),n.setXYZ(8,e.r,e.g,e.b),n.setXYZ(9,e.r,e.g,e.b),n.setXYZ(10,e.r,e.g,e.b),n.setXYZ(11,e.r,e.g,e.b),n.setXYZ(12,e.r,e.g,e.b),n.setXYZ(13,e.r,e.g,e.b),n.setXYZ(14,e.r,e.g,e.b),n.setXYZ(15,e.r,e.g,e.b),n.setXYZ(16,e.r,e.g,e.b),n.setXYZ(17,e.r,e.g,e.b),n.setXYZ(18,e.r,e.g,e.b),n.setXYZ(19,e.r,e.g,e.b),n.setXYZ(20,e.r,e.g,e.b),n.setXYZ(21,e.r,e.g,e.b),n.setXYZ(22,e.r,e.g,e.b),n.setXYZ(23,e.r,e.g,e.b),n.setXYZ(24,t.r,t.g,t.b),n.setXYZ(25,t.r,t.g,t.b),n.setXYZ(26,t.r,t.g,t.b),n.setXYZ(27,t.r,t.g,t.b),n.setXYZ(28,t.r,t.g,t.b),n.setXYZ(29,t.r,t.g,t.b),n.setXYZ(30,t.r,t.g,t.b),n.setXYZ(31,t.r,t.g,t.b),n.setXYZ(32,i.r,i.g,i.b),n.setXYZ(33,i.r,i.g,i.b),n.setXYZ(34,i.r,i.g,i.b),n.setXYZ(35,i.r,i.g,i.b),n.setXYZ(36,i.r,i.g,i.b),n.setXYZ(37,i.r,i.g,i.b),n.setXYZ(38,r.r,r.g,r.b),n.setXYZ(39,r.r,r.g,r.b),n.setXYZ(40,s.r,s.g,s.b),n.setXYZ(41,s.r,s.g,s.b),n.setXYZ(42,s.r,s.g,s.b),n.setXYZ(43,s.r,s.g,s.b),n.setXYZ(44,s.r,s.g,s.b),n.setXYZ(45,s.r,s.g,s.b),n.setXYZ(46,s.r,s.g,s.b),n.setXYZ(47,s.r,s.g,s.b),n.setXYZ(48,s.r,s.g,s.b),n.setXYZ(49,s.r,s.g,s.b),n.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;nt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ut("c",t,e,nt,0,0,-1),ut("t",t,e,nt,0,0,1),ut("n1",t,e,nt,-i,-r,-1),ut("n2",t,e,nt,i,-r,-1),ut("n3",t,e,nt,-i,r,-1),ut("n4",t,e,nt,i,r,-1),ut("f1",t,e,nt,-i,-r,1),ut("f2",t,e,nt,i,-r,1),ut("f3",t,e,nt,-i,r,1),ut("f4",t,e,nt,i,r,1),ut("u1",t,e,nt,i*.7,r*1.1,-1),ut("u2",t,e,nt,-i*.7,r*1.1,-1),ut("u3",t,e,nt,0,r*2,-1),ut("cf1",t,e,nt,-i,0,1),ut("cf2",t,e,nt,i,0,1),ut("cf3",t,e,nt,0,-r,1),ut("cf4",t,e,nt,0,r,1),ut("cn1",t,e,nt,-i,0,-1),ut("cn2",t,e,nt,i,0,-1),ut("cn3",t,e,nt,0,-r,-1),ut("cn4",t,e,nt,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ut(a,e,t,i,r,s,n){ln.set(r,s,n).unproject(i);const o=e[a];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],ln.x,ln.y,ln.z)}}const cn=new Ot;class My extends gi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new Ge;s.setIndex(new $e(i,1)),s.setAttribute("position",new $e(r,3)),super(s,new Ft({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&cn.setFromObject(this.object),cn.isEmpty())return;const t=cn.min,i=cn.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sy extends gi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ge;s.setIndex(new $e(i,1)),s.setAttribute("position",new Se(r,3)),super(s,new Ft({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class by extends ji{constructor(e,t=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],n=new Ge;n.setAttribute("position",new Se(s,3)),n.computeBoundingSphere(),super(n,new Ft({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ge;l.setAttribute("position",new Se(o,3)),l.computeBoundingSphere(),this.add(new gt(l,new Yi({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const nu=new C;let hn,gl;class Ty extends et{constructor(e=new C(0,0,1),t=new C(0,0,0),i=1,r=16776960,s=i*.2,n=s*.2){super(),this.type="ArrowHelper",hn===void 0&&(hn=new Ge,hn.setAttribute("position",new Se([0,0,0,0,1,0],3)),gl=new ds(0,.5,1,5,1),gl.translate(0,-.5,0)),this.position.copy(t),this.line=new ji(hn,new Ft({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new gt(gl,new Yi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,n)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{nu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(nu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ey extends gi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ge;r.setAttribute("position",new Se(t,3)),r.setAttribute("color",new Se(i,3));const s=new Ft({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new me,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wy{constructor(){this.type="ShapePath",this.color=new me,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ks,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,n){return this.currentPath.bezierCurveTo(e,t,i,r,s,n),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let v=0,y=m.length;v<y;v++){const R=m[v],E=new Mr;E.curves=R.curves,x.push(E)}return x}function i(m,x){const v=x.length;let y=!1;for(let R=v-1,E=0;E<v;R=E++){let w=x[R],P=x[E],b=P.x-w.x,M=P.y-w.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(w=x[E],b=-b,P=x[R],M=-M),m.y<w.y||m.y>P.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const I=M*(m.x-w.x)-b*(m.y-w.y);if(I===0)return!0;if(I<0)continue;y=!y}}else{if(m.y!==w.y)continue;if(P.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=P.x)return!0}}return y}const r=pi.isClockWise,s=this.subPaths;if(s.length===0)return[];let n,o,l;const c=[];if(s.length===1)return o=s[0],l=new Mr,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const d=[],u=[];let p=[],f=0,_;u[f]=void 0,p[f]=[];for(let m=0,x=s.length;m<x;m++)o=s[m],_=o.getPoints(),n=r(_),n=e?!n:n,n?(!h&&u[f]&&f++,u[f]={s:new Mr,p:_},u[f].s.curves=o.curves,h&&f++,p[f]=[]):p[f].push({h:o,p:_[0]});if(!u[0])return t(s);if(u.length>1){let m=!1,x=0;for(let v=0,y=u.length;v<y;v++)d[v]=[];for(let v=0,y=u.length;v<y;v++){const R=p[v];for(let E=0;E<R.length;E++){const w=R[E];let P=!0;for(let b=0;b<u.length;b++)i(w.p,u[b].p)&&(v!==b&&x++,P?(P=!1,d[b].push(w)):m=!0);P&&d[v].push(w)}}x>0&&m===!1&&(p=d)}let g;for(let m=0,x=u.length;m<x;m++){l=u[m].s,c.push(l),g=p[m];for(let v=0,y=g.length;v<y;v++)l.holes.push(g[v].h)}return c}}class Ay extends fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class Cy extends ii{constructor(e=1,t=1,i=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:i}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const Ry=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ku,AddEquation:Wi,AddOperation:Ou,AdditiveAnimationBlendMode:Xl,AdditiveBlending:vl,AgXToneMapping:Hu,AlphaFormat:zl,AlwaysCompare:ad,AlwaysDepth:Ru,AlwaysStencilFunc:bl,AmbientLight:op,AnimationAction:gp,AnimationClip:ra,AnimationLoader:Cx,AnimationMixer:iy,AnimationObjectGroup:ey,AnimationUtils:Tx,ArcCurve:Ld,ArrayCamera:Md,ArrowHelper:Ty,AttachedBindMode:Ml,Audio:mp,AudioAnalyser:Wx,AudioContext:gc,AudioListener:Vx,AudioLoader:Bx,AxesHelper:Ey,BackSide:Nt,BasicDepthPacking:Ju,BasicShadowMap:Ep,BatchedMesh:Cd,Bone:ic,BooleanKeyframeTrack:Ar,Box2:hy,Box3:Ot,Box3Helper:Sy,BoxGeometry:wr,BoxHelper:My,BufferAttribute:$e,BufferGeometry:Ge,BufferGeometryLoader:dp,ByteType:Ol,Cache:wi,Camera:ro,CameraHelper:yy,CanvasTexture:Y0,CapsuleGeometry:po,CatmullRomCurve3:Id,CineonToneMapping:zu,CircleGeometry:mo,ClampToEdgeWrapping:Jt,Clock:pp,Color:me,ColorKeyframeTrack:pc,ColorManagement:Ye,CompressedArrayTexture:j0,CompressedCubeTexture:q0,CompressedTexture:ho,CompressedTextureLoader:Rx,ConeGeometry:fo,ConstantAlphaFactor:wu,ConstantColorFactor:Tu,Controls:Ay,CubeCamera:pd,CubeReflectionMapping:Pi,CubeRefractionMapping:Xi,CubeTexture:ca,CubeTextureLoader:Px,CubeUVReflectionMapping:ls,CubicBezierCurve:ac,CubicBezierCurve3:Ud,CubicInterpolant:$d,CullFaceBack:_l,CullFaceFront:lu,CullFaceFrontBack:Tp,CullFaceNone:ou,Curve:si,CurvePath:Nd,CustomBlending:hu,CustomToneMapping:Vu,CylinderGeometry:ds,Cylindrical:cy,Data3DTexture:Yl,DataArrayTexture:to,DataTexture:di,DataTextureLoader:ip,DataUtils:As,DecrementStencilOp:Op,DecrementWrapStencilOp:Bp,DefaultLoadingManager:tp,DepthFormat:xr,DepthStencilFormat:br,DepthTexture:$l,DetachedBindMode:Wu,DirectionalLight:np,DirectionalLightHelper:xy,DiscreteInterpolant:Qd,DisplayP3ColorSpace:eo,DodecahedronGeometry:go,DoubleSide:li,DstAlphaFactor:xu,DstColorFactor:Mu,DynamicCopyUsage:Qp,DynamicDrawUsage:qp,DynamicReadUsage:Jp,EdgesGeometry:Od,EllipseCurve:uo,EqualCompare:td,EqualDepth:Lu,EqualStencilFunc:Hp,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:ks,Euler:jt,EventDispatcher:fi,ExtrudeGeometry:vo,FileLoader:Ii,Float16BufferAttribute:km,Float32BufferAttribute:Se,FloatType:Tt,Fog:oo,FogExp2:no,FramebufferTexture:X0,FrontSide:Ri,Frustum:ha,GLBufferAttribute:ny,GLSL1:tm,GLSL3:Tl,GreaterCompare:id,GreaterDepth:Uu,GreaterEqualCompare:sd,GreaterEqualDepth:Iu,GreaterEqualStencilFunc:jp,GreaterStencilFunc:Wp,GridHelper:_y,Group:es,HalfFloatType:hi,HemisphereLight:rp,HemisphereLightHelper:gy,IcosahedronGeometry:xo,ImageBitmapLoader:Fx,ImageLoader:sa,ImageUtils:ld,IncrementStencilOp:Np,IncrementWrapStencilOp:Fp,InstancedBufferAttribute:os,InstancedBufferGeometry:up,InstancedInterleavedBuffer:ay,InstancedMesh:Ad,Int16BufferAttribute:Bm,Int32BufferAttribute:zm,Int8BufferAttribute:Nm,IntType:qn,InterleavedBuffer:lo,InterleavedBufferAttribute:Tr,Interpolant:ma,InterpolateDiscrete:Gs,InterpolateLinear:Hn,InterpolateSmooth:un,InvertStencilOp:zp,KeepStencilOp:ur,KeyframeTrack:ai,LOD:Ed,LatheGeometry:ua,Layers:io,LessCompare:ed,LessDepth:Pu,LessEqualCompare:jl,LessEqualDepth:Bs,LessEqualStencilFunc:Gp,LessStencilFunc:Vp,Light:Ji,LightProbe:hp,Line:ji,Line3:uy,LineBasicMaterial:Ft,LineCurve:nc,LineCurve3:Dd,LineDashedMaterial:Zd,LineLoop:Rd,LineSegments:gi,LinearDisplayP3ColorSpace:la,LinearFilter:lt,LinearInterpolant:dc,LinearMipMapLinearFilter:Rp,LinearMipMapNearestFilter:Cp,LinearMipmapLinearFilter:ci,LinearMipmapNearestFilter:Rs,LinearSRGBColorSpace:Ui,LinearToneMapping:Fu,LinearTransfer:Xs,Loader:kt,LoaderUtils:Il,LoadingManager:mc,LoopOnce:Xu,LoopPingPong:qu,LoopRepeat:ju,LuminanceAlphaFormat:Hl,LuminanceFormat:Vl,MOUSE:Sp,Material:Rt,MaterialLoader:wo,MathUtils:vm,Matrix2:yc,Matrix3:ke,Matrix4:Le,MaxEquation:mu,Mesh:gt,MeshBasicMaterial:Yi,MeshDepthMaterial:Ql,MeshDistanceMaterial:ec,MeshLambertMaterial:qd,MeshMatcapMaterial:Yd,MeshNormalMaterial:jd,MeshPhongMaterial:Wd,MeshPhysicalMaterial:Gd,MeshStandardMaterial:hc,MeshToonMaterial:Xd,MinEquation:pu,MirroredRepeatWrapping:Hs,MixOperation:Nu,MultiplyBlending:yl,MultiplyOperation:na,NearestFilter:Mt,NearestMipMapLinearFilter:Ap,NearestMipMapNearestFilter:wp,NearestMipmapLinearFilter:Kr,NearestMipmapNearestFilter:Nl,NeutralToneMapping:Gu,NeverCompare:Qu,NeverDepth:Cu,NeverStencilFunc:kp,NoBlending:Ai,NoColorSpace:Ti,NoToneMapping:Ci,NormalAnimationBlendMode:Qn,NormalBlending:vr,NotEqualCompare:rd,NotEqualDepth:Du,NotEqualStencilFunc:Xp,NumberKeyframeTrack:ta,Object3D:et,ObjectLoader:Nx,ObjectSpaceNormalMap:$u,OctahedronGeometry:da,OneFactor:gu,OneMinusConstantAlphaFactor:Au,OneMinusConstantColorFactor:Eu,OneMinusDstAlphaFactor:yu,OneMinusDstColorFactor:Su,OneMinusSrcAlphaFactor:fn,OneMinusSrcColorFactor:vu,OrthographicCamera:so,P3Primaries:qs,PCFShadowMap:Dl,PCFSoftShadowMap:cu,PMREMGenerator:El,Path:Ks,PerspectiveCamera:bt,Plane:Gi,PlaneGeometry:hs,PlaneHelper:by,PointLight:ap,PointLightHelper:my,Points:Pd,PointsMaterial:rc,PolarGridHelper:vy,PolyhedronGeometry:Zi,PositionalAudio:Gx,PropertyBinding:qe,PropertyMixer:fp,QuadraticBezierCurve:oc,QuadraticBezierCurve3:lc,Quaternion:zt,QuaternionKeyframeTrack:fa,QuaternionLinearInterpolant:ep,RED_GREEN_RGTC2_Format:kn,RED_RGTC1_Format:Wl,REVISION:aa,RGBADepthPacking:Ku,RGBAFormat:Dt,RGBAIntegerFormat:$n,RGBA_ASTC_10x10_Format:Dn,RGBA_ASTC_10x5_Format:Ln,RGBA_ASTC_10x6_Format:In,RGBA_ASTC_10x8_Format:Un,RGBA_ASTC_12x10_Format:Nn,RGBA_ASTC_12x12_Format:On,RGBA_ASTC_4x4_Format:bn,RGBA_ASTC_5x4_Format:Tn,RGBA_ASTC_5x5_Format:En,RGBA_ASTC_6x5_Format:wn,RGBA_ASTC_6x6_Format:An,RGBA_ASTC_8x5_Format:Cn,RGBA_ASTC_8x6_Format:Rn,RGBA_ASTC_8x8_Format:Pn,RGBA_BPTC_Format:Ds,RGBA_ETC2_EAC_Format:Sn,RGBA_PVRTC_2BPPV1_Format:xn,RGBA_PVRTC_4BPPV1_Format:vn,RGBA_S3TC_DXT1_Format:Ls,RGBA_S3TC_DXT3_Format:Is,RGBA_S3TC_DXT5_Format:Us,RGBDepthPacking:Lp,RGBFormat:kl,RGBIntegerFormat:Pp,RGB_BPTC_SIGNED_Format:Fn,RGB_BPTC_UNSIGNED_Format:Bn,RGB_ETC1_Format:yn,RGB_ETC2_Format:Mn,RGB_PVRTC_2BPPV1_Format:_n,RGB_PVRTC_4BPPV1_Format:gn,RGB_S3TC_DXT1_Format:Ps,RGDepthPacking:Ip,RGFormat:Gl,RGIntegerFormat:Kn,RawShaderMaterial:Hd,Ray:cs,Raycaster:oy,Rec709Primaries:js,RectAreaLight:lp,RedFormat:Jn,RedIntegerFormat:oa,ReinhardToneMapping:Bu,RenderTarget:cd,RepeatWrapping:Vs,ReplaceStencilOp:Dp,ReverseSubtractEquation:du,RingGeometry:yo,SIGNED_RED_GREEN_RGTC2_Format:Vn,SIGNED_RED_RGTC1_Format:zn,SRGBColorSpace:Zt,SRGBTransfer:it,Scene:Sd,ShaderChunk:He,ShaderLib:ti,ShaderMaterial:ri,ShadowMaterial:Vd,Shape:Mr,ShapeGeometry:Mo,ShapePath:wy,ShapeUtils:pi,ShortType:Fl,Skeleton:co,SkeletonHelper:py,SkinnedMesh:wd,Source:gr,Sphere:Ct,SphereGeometry:pa,Spherical:ly,SphericalHarmonics3:cp,SplineCurve:cc,SpotLight:sp,SpotLightHelper:dy,Sprite:Td,SpriteMaterial:tc,SrcAlphaFactor:mn,SrcAlphaSaturateFactor:bu,SrcColorFactor:_u,StaticCopyUsage:$p,StaticDrawUsage:Ys,StaticReadUsage:Zp,StereoCamera:zx,StreamCopyUsage:em,StreamDrawUsage:Yp,StreamReadUsage:Kp,StringKeyframeTrack:Cr,SubtractEquation:uu,SubtractiveBlending:xl,TOUCH:bp,TangentSpaceNormalMap:qi,TetrahedronGeometry:So,Texture:ct,TextureLoader:Lx,TextureUtils:b0,TorusGeometry:bo,TorusKnotGeometry:To,Triangle:Wt,TriangleFanDrawMode:Sl,TriangleStripDrawMode:Zu,TrianglesDrawMode:Yu,TubeGeometry:Eo,UVMapping:jn,Uint16BufferAttribute:Zl,Uint32BufferAttribute:Jl,Uint8BufferAttribute:Om,Uint8ClampedBufferAttribute:Fm,Uniform:xc,UniformsGroup:sy,UniformsLib:ce,UniformsUtils:dd,UnsignedByteType:mi,UnsignedInt248Type:Sr,UnsignedInt5999Type:Bl,UnsignedIntType:Li,UnsignedShort4444Type:Yn,UnsignedShort5551Type:Zn,UnsignedShortType:ss,VSMShadowMap:oi,Vector2:Y,Vector3:C,Vector4:Ke,VectorKeyframeTrack:ia,VideoTexture:W0,WebGL3DRenderTarget:Em,WebGLArrayRenderTarget:Tm,WebGLCoordinateSystem:ui,WebGLCubeRenderTarget:md,WebGLMultipleRenderTargets:Cy,WebGLRenderTarget:ii,WebGLRenderer:U0,WebGLUtils:yd,WebGPUCoordinateSystem:Zs,WireframeGeometry:kd,WrapAroundEnding:Ws,ZeroCurvatureEnding:mr,ZeroFactor:fu,ZeroSlopeEnding:fr,ZeroStencilOp:Up,createCanvasElement:od},Symbol.toStringTag,{value:"Module"})),Py=parseInt(aa.replace(/\D+/g,""));function Ly(a,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=a.getIndex(),r=a.getAttribute("position"),s=i?i.count:r.count;let n=0;const o=Object.keys(a.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"];for(let _=0,g=o.length;_<g;_++){const m=o[_];l[m]=[];const x=a.morphAttributes[m];x&&(c[m]=new Array(x.length).fill(0).map(()=>[]))}const u=Math.log10(1/e),p=Math.pow(10,u);for(let _=0;_<s;_++){const g=i?i.getX(_):_;let m="";for(let x=0,v=o.length;x<v;x++){const y=o[x],R=a.getAttribute(y),E=R.itemSize;for(let w=0;w<E;w++)m+=`${~~(R[d[w]](g)*p)},`}if(m in t)h.push(t[m]);else{for(let x=0,v=o.length;x<v;x++){const y=o[x],R=a.getAttribute(y),E=a.morphAttributes[y],w=R.itemSize,P=l[y],b=c[y];for(let M=0;M<w;M++){const I=d[M];if(P.push(R[I](g)),E)for(let O=0,F=E.length;O<F;O++)b[O].push(E[O][I](g))}}t[m]=n,h.push(n),n++}}const f=a.clone();for(let _=0,g=o.length;_<g;_++){const m=o[_],x=a.getAttribute(m),v=new x.array.constructor(l[m]),y=new $e(v,x.itemSize,x.normalized);if(f.setAttribute(m,y),m in c)for(let R=0;R<c[m].length;R++){const E=a.morphAttributes[m][R],w=new E.array.constructor(c[m][R]),P=new $e(w,E.itemSize,E.normalized);f.morphAttributes[m][R]=P}}return f.setIndex(h),f}function Iy(a,e){if(e===Yu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Sl||e===Zu){let t=a.getIndex();if(t===null){const n=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)n.push(l);a.setIndex(n),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,r=[];if(t)if(e===Sl)for(let n=1;n<=i;n++)r.push(t.getX(0)),r.push(t.getX(n)),r.push(t.getX(n+1));else for(let n=0;n<i;n++)n%2===0?(r.push(t.getX(n)),r.push(t.getX(n+1)),r.push(t.getX(n+2))):(r.push(t.getX(n+2)),r.push(t.getX(n+1)),r.push(t.getX(n)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Uy extends ip{constructor(e){super(e),this.type=hi}parse(e){const t=function(m,x){switch(m){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=`
`,r=function(m,x,v){x=x||1024;let y=m.pos,R=-1,E=0,w="",P=String.fromCharCode.apply(null,new Uint16Array(m.subarray(y,y+128)));for(;0>(R=P.indexOf(i))&&E<x&&y<m.byteLength;)w+=P,E+=P.length,y+=128,P+=String.fromCharCode.apply(null,new Uint16Array(m.subarray(y,y+128)));return-1<R?(m.pos+=E+R+1,w+P.slice(0,R)):!1},s=function(m){const x=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,E=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,w={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,b;for((m.pos>=m.byteLength||!(P=r(m)))&&t(1,"no header found"),(b=P.match(x))||t(3,"bad initial token"),w.valid|=1,w.programtype=b[1],w.string+=P+`
`;P=r(m),P!==!1;){if(w.string+=P+`
`,P.charAt(0)==="#"){w.comments+=P+`
`;continue}if((b=P.match(v))&&(w.gamma=parseFloat(b[1])),(b=P.match(y))&&(w.exposure=parseFloat(b[1])),(b=P.match(R))&&(w.valid|=2,w.format=b[1]),(b=P.match(E))&&(w.valid|=4,w.height=parseInt(b[1],10),w.width=parseInt(b[2],10)),w.valid&2&&w.valid&4)break}return w.valid&2||t(3,"missing format specifier"),w.valid&4||t(3,"missing image size specifier"),w},n=function(m,x,v){const y=x;if(y<8||y>32767||m[0]!==2||m[1]!==2||m[2]&128)return new Uint8Array(m);y!==(m[2]<<8|m[3])&&t(3,"wrong scanline width");const R=new Uint8Array(4*x*v);R.length||t(4,"unable to allocate buffer space");let E=0,w=0;const P=4*y,b=new Uint8Array(4),M=new Uint8Array(P);let I=v;for(;I>0&&w<m.byteLength;){w+4>m.byteLength&&t(1),b[0]=m[w++],b[1]=m[w++],b[2]=m[w++],b[3]=m[w++],(b[0]!=2||b[1]!=2||(b[2]<<8|b[3])!=y)&&t(3,"bad rgbe scanline format");let O=0,F;for(;O<P&&w<m.byteLength;){F=m[w++];const W=F>128;if(W&&(F-=128),(F===0||O+F>P)&&t(3,"bad scanline data"),W){const H=m[w++];for(let $=0;$<F;$++)M[O++]=H}else M.set(m.subarray(w,w+F),O),O+=F,w+=F}const V=y;for(let W=0;W<V;W++){let H=0;R[E]=M[W+H],H+=y,R[E+1]=M[W+H],H+=y,R[E+2]=M[W+H],H+=y,R[E+3]=M[W+H],E+=4}I--}return R},o=function(m,x,v,y){const R=m[x+3],E=Math.pow(2,R-128)/255;v[y+0]=m[x+0]*E,v[y+1]=m[x+1]*E,v[y+2]=m[x+2]*E,v[y+3]=1},l=function(m,x,v,y){const R=m[x+3],E=Math.pow(2,R-128)/255;v[y+0]=As.toHalfFloat(Math.min(m[x+0]*E,65504)),v[y+1]=As.toHalfFloat(Math.min(m[x+1]*E,65504)),v[y+2]=As.toHalfFloat(Math.min(m[x+2]*E,65504)),v[y+3]=As.toHalfFloat(1)},c=new Uint8Array(e);c.pos=0;const h=s(c),d=h.width,u=h.height,p=n(c.subarray(c.pos),d,u);let f,_,g;switch(this.type){case Tt:g=p.length/4;const m=new Float32Array(g*4);for(let v=0;v<g;v++)o(p,v*4,m,v*4);f=m,_=Tt;break;case hi:g=p.length/4;const x=new Uint16Array(g*4);for(let v=0;v<g;v++)l(p,v*4,x,v*4);f=x,_=hi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:d,height:u,data:f,header:h.string,gamma:h.gamma,exposure:h.exposure,type:_}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(n,o){switch(n.type){case Tt:case hi:"colorSpace"in n?n.colorSpace="srgb-linear":n.encoding=3e3,n.minFilter=lt,n.magFilter=lt,n.generateMipmaps=!1,n.flipY=!0;break}t&&t(n,o)}return super.load(e,s,i,r)}}export{$e as $,Ad as A,li as B,Rs as C,Nl as D,Yi as E,Fx as F,ku as G,Ge as H,Le as I,Jt as J,Kr as K,qe as L,Mt as M,wd as N,Ot as O,Il as P,gt as Q,C as R,Sd as S,Iy as T,U0 as U,Vs as V,gi as W,ji as X,Y,Rd as Z,Pd as _,np as a,Rp as a$,es as a0,vm as a1,so as a2,co as a3,ra as a4,ic as a5,Gs as a6,Hn as a7,Tr as a8,ia as a9,ri as aA,di as aB,Jn as aC,Dt as aD,oy as aE,cu as aF,oi as aG,Dl as aH,Ep as aI,Pi as aJ,Nt as aK,Ai as aL,xc as aM,aa as aN,ro as aO,jt as aP,Ru as aQ,io as aR,Ly as aS,Ry as aT,Px as aU,qp as aV,ip as aW,xo as aX,As as aY,mc as aZ,jn as a_,ta as aa,fa as ab,Ri as ac,ma as ad,Py as ae,Ct as af,Zu as ag,Sl as ah,Y0 as ai,pa as aj,hi as ak,Ci as al,md as am,mi as an,Zt as ao,$l as ap,br as aq,Sr as ar,Li as as,ii as at,jd as au,Tt as av,Ju as aw,fi as ax,Ui as ay,Ti as az,bt as b,hs as b0,qn as b1,Fl as b2,Ol as b3,Uy as c,kt as d,Ii as e,Gd as f,me as g,zt as h,iy as i,ju as j,et as k,Lx as l,lo as m,ap as n,os as o,pp as p,ci as q,lt as r,sp as s,Hs as t,ct as u,rc as v,Rt as w,Ft as x,hc as y,zs as z};
