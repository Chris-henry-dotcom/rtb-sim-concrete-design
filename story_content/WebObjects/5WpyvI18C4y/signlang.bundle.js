var SignLang=(()=>{var ya=Object.defineProperty;var nh=Object.getOwnPropertyDescriptor;var ih=Object.getOwnPropertyNames;var rh=Object.prototype.hasOwnProperty;var sh=(i,e)=>{for(var t in e)ya(i,t,{get:e[t],enumerable:!0})},ah=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ih(e))!rh.call(i,r)&&r!==t&&ya(i,r,{get:()=>e[r],enumerable:!(n=nh(e,r))||n.enumerable});return i};var oh=i=>ah(ya({},"__esModule",{value:!0}),i);var P_={};sh(P_,{ALPHA:()=>ha,DIGIT:()=>zr,HS:()=>xi,LEX:()=>Mt,LOC:()=>Vr,Rig:()=>or,SignBox:()=>ma,Signer:()=>hr,compile:()=>pa,fingerspell:()=>hl,loadAvatar:()=>ca,planFit:()=>Ku,planGloss:()=>ii});var Oo="160";var lh=0,vl=1,ch=2;var iu=1,uh=2,An=3,qn=0,Yt=1,hn=2;var Gn=0,Wi=1,xl=2,yl=3,wl=4,hh=5,hi=100,dh=101,fh=102,Ml=103,Sl=104,ph=200,mh=201,gh=202,_h=203,to=204,no=205,vh=206,xh=207,yh=208,wh=209,Mh=210,Sh=211,bh=212,Eh=213,Th=214,Ah=0,Rh=1,Ch=2,vs=3,Lh=4,Ph=5,Ih=6,Dh=7,$s=0,Uh=1,Nh=2,Wn=0,Bh=1,Fh=2,Oh=3,ko=4,kh=5,zh=6,bl="attached",Hh="detached",ru=300,Yi=301,Zi=302,Mr=303,io=304,Qs=306,Ki=1e3,qt=1001,ro=1002,Pt=1003,El=1004;var wa=1005;var en=1006,Vh=1007;var Sr=1008;var Xn=1009,Gh=1010,Wh=1011,zo=1012,su=1013,Vn=1014,Cn=1015,br=1016,au=1017,ou=1018,fi=1020,Xh=1021,tn=1023,qh=1024,Yh=1025,pi=1026,Ji=1027,Zh=1028,lu=1029,Kh=1030,cu=1031,uu=1033,Ma=33776,Sa=33777,ba=33778,Ea=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,hu=36196,Ll=37492,Pl=37496,Il=37808,Dl=37809,Ul=37810,Nl=37811,Bl=37812,Fl=37813,Ol=37814,kl=37815,zl=37816,Hl=37817,Vl=37818,Gl=37819,Wl=37820,Xl=37821,Ta=36492,ql=36494,Yl=36495,Jh=36283,Zl=36284,Kl=36285,Jl=36286;var xs=2300,ys=2301,Aa=2302,$l=2400,Ql=2401,jl=2402,$h=2500;var du=3e3,mi=3001,Qh=3200,jh=3201,js=0,ed=1,nn="",ut="srgb",In="srgb-linear",Ho="display-p3",ea="display-p3-linear",ws="linear",ht="srgb",Ms="rec709",Ss="p3";var Si=7680;var ec=519,td=512,nd=513,id=514,fu=515,rd=516,sd=517,ad=518,od=519,tc=35044;var nc="300 es",so=1035,Ln=2e3,bs=2001,Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=1234567,vr=Math.PI/180,$i=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function Vo(i,e){return(i%e+e)%e}function ld(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function cd(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function ud(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function hd(i,e=1){return e-Math.abs(Vo(i,e*2)-e)}function dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function md(i,e){return i+Math.random()*(e-i)}function gd(i){return i*(.5-Math.random())}function _d(i){i!==void 0&&(ic=i);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vd(i){return i*vr}function xd(i){return i*$i}function ao(i){return(i&i-1)===0&&i!==0}function yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Es(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wd(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var at={DEG2RAD:vr,RAD2DEG:$i,generateUUID:ei,clamp:It,euclideanModulo:Vo,mapLinear:ld,inverseLerp:cd,lerp:xr,damp:ud,pingpong:hd,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:_d,degToRad:vd,radToDeg:xd,isPowerOfTwo:ao,ceilPowerOfTwo:yd,floorPowerOfTwo:Es,setQuaternionFromProperEuler:wd,normalize:Vt,denormalize:ki},We=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],x=r[0],g=r[3],m=r[6],y=r[1],v=r[4],b=r[7],L=r[2],R=r[5],C=r[8];return s[0]=a*x+o*y+l*L,s[3]=a*g+o*v+l*R,s[6]=a*m+o*b+l*C,s[1]=c*x+u*y+h*L,s[4]=c*g+u*v+h*R,s[7]=c*m+u*b+h*C,s[2]=d*x+f*y+_*L,s[5]=d*g+f*v+_*R,s[8]=d*m+f*b+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+n*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new ze;function pu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Er("canvas");return i.style.display="block",i}var rc={};function yr(i){i in rc||(rc[i]=!0,console.warn(i))}var sc=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ac=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[In]:{transfer:ws,primaries:Ms,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:ht,primaries:Ms,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ea]:{transfer:ws,primaries:Ss,toReference:i=>i.applyMatrix3(ac),fromReference:i=>i.applyMatrix3(sc)},[Ho]:{transfer:ht,primaries:Ss,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ac),fromReference:i=>i.applyMatrix3(sc).convertLinearToSRGB()}},Sd=new Set([In,ea]),st={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Xr[e].toReference,r=Xr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===nn?ws:Xr[i].transfer}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Ts=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Er("canvas")),bi.width=e.width,bi.height=e.height;let n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bd=0,As=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(La(r[a].image)):s.push(La(r[a]))}else s=La(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ts.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ed=0,Ut=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=qt,r=qt,s=en,a=Sr,o=tn,l=Xn,c=i.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ei(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mi?ut:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?mi:du}set encoding(e){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?ut:nn}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ru;Ut.DEFAULT_ANISOTROPY=1;var Je=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(f+1)/2,L=(m+1)/2,R=(u+d)/4,C=(h+x)/4,B=(_+g)/4;return v>b&&v>L?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=C/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=R/r,s=B/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=C/s,r=B/s),this.set(n,r,s,t),this}let y=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?ut:nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new As(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rs=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lo=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],f=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==_){let g=1-o,m=l*d+c*f+u*_+h*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let L=Math.sqrt(v),R=Math.atan2(L,m*y);g=Math.sin(g*R)/L,o=Math.sin(o*R)/L}let b=o*y;if(l=l*g+d*b,c=c*g+f*b,u=u*g+_*b,h=h*g+x*b,g===1-o){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new I,oc=new Ze,Zn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Yr.subVectors(this.max,fr),Ei.subVectors(e.a,fr),Ti.subVectors(e.b,fr),Ai.subVectors(e.c,fr),Fn.subVectors(Ti,Ei),On.subVectors(Ai,Ti),ai.subVectors(Ei,Ai);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ai.z,ai.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ai.z,0,-ai.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ai.y,ai.x,0];return!Ia(t,Ei,Ti,Ai,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Ei,Ti,Ai,Yr))?!1:(Zr.crossVectors(Fn,On),t=[Zr.x,Zr.y,Zr.z],Ia(t,Ei,Ti,Ai,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,qr=new Zn,Ei=new I,Ti=new I,Ai=new I,Fn=new I,On=new I,ai=new I,fr=new I,Yr=new I,Zr=new I,oi=new I;function Ia(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){oi.fromArray(i,s);let o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Td=new Zn,pr=new I,Da=new I,Kn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Td.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Da)),this.expandByPoint(pr.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new I,Ua=new I,Kr=new I,kn=new I,Na=new I,Jr=new I,Ba=new I,Tr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ua.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ua);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=kn.dot(this.direction),l=-kn.dot(Kr),c=kn.lengthSq(),u=Math.abs(1-a*a),h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ua).addScaledVector(Kr,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);let n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,s){Na.subVectors(t,e),Jr.subVectors(n,e),Ba.crossVectors(Na,Jr);let a=this.direction.dot(Ba),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);let l=o*this.direction.dot(Jr.crossVectors(kn,Jr));if(l<0)return null;let c=o*this.direction.dot(Na.cross(kn));if(c<0||l+c>a)return null;let u=-o*kn.dot(Ba);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,_,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,_,x,g)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,_,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,f=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,_=c*u,x=c*h;t[0]=d+x*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,_=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Rd)}lookAt(e,t,n){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),zn.crossVectors(n,Kt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),zn.crossVectors(n,Kt)),zn.normalize(),$r.crossVectors(Kt,zn),r[0]=zn.x,r[4]=$r.x,r[8]=Kt.x,r[1]=zn.y,r[5]=$r.y,r[9]=Kt.y,r[2]=zn.z,r[6]=$r.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],x=n[6],g=n[10],m=n[14],y=n[3],v=n[7],b=n[11],L=n[15],R=r[0],C=r[4],B=r[8],M=r[12],T=r[1],V=r[5],Y=r[9],te=r[13],D=r[2],U=r[6],F=r[10],Z=r[14],q=r[3],X=r[7],K=r[11],$=r[15];return s[0]=a*R+o*T+l*D+c*q,s[4]=a*C+o*V+l*U+c*X,s[8]=a*B+o*Y+l*F+c*K,s[12]=a*M+o*te+l*Z+c*$,s[1]=u*R+h*T+d*D+f*q,s[5]=u*C+h*V+d*U+f*X,s[9]=u*B+h*Y+d*F+f*K,s[13]=u*M+h*te+d*Z+f*$,s[2]=_*R+x*T+g*D+m*q,s[6]=_*C+x*V+g*U+m*X,s[10]=_*B+x*Y+g*F+m*K,s[14]=_*M+x*te+g*Z+m*$,s[3]=y*R+v*T+b*D+L*q,s[7]=y*C+v*V+b*U+L*X,s[11]=y*B+v*Y+b*F+L*K,s[15]=y*M+v*te+b*Z+L*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],x=e[7],g=e[11],m=e[15];return _*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*f-n*l*f)+x*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+g*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+m*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],x=e[13],g=e[14],m=e[15],y=h*g*c-x*d*c+x*l*f-o*g*f-h*l*m+o*d*m,v=_*d*c-u*g*c-_*l*f+a*g*f+u*l*m-a*d*m,b=u*x*c-_*h*c+_*o*f-a*x*f-u*o*m+a*h*m,L=_*h*l-u*x*l-_*o*d+a*x*d+u*o*g-a*h*g,R=t*y+n*v+r*b+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=y*C,e[1]=(x*d*s-h*g*s-x*r*f+n*g*f+h*r*m-n*d*m)*C,e[2]=(o*g*s-x*l*s+x*r*c-n*g*c-o*r*m+n*l*m)*C,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*f-n*l*f)*C,e[4]=v*C,e[5]=(u*g*s-_*d*s+_*r*f-t*g*f-u*r*m+t*d*m)*C,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*m-t*l*m)*C,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*C,e[8]=b*C,e[9]=(_*h*s-u*x*s-_*n*f+t*x*f+u*n*m-t*h*m)*C,e[10]=(a*x*s-_*o*s+_*n*c-t*x*c-a*n*m+t*o*m)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*C,e[12]=L*C,e[13]=(u*x*r-_*h*r+_*n*d-t*x*d-u*n*g+t*h*g)*C,e[14]=(_*o*r-a*x*r-_*n*l+t*x*l+a*n*g-t*o*g)*C,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,x=a*u,g=a*h,m=o*h,y=l*c,v=l*u,b=l*h,L=n.x,R=n.y,C=n.z;return r[0]=(1-(x+m))*L,r[1]=(f+b)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(f-b)*R,r[5]=(1-(d+m))*R,r[6]=(g+y)*R,r[7]=0,r[8]=(_+v)*C,r[9]=(g-y)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Ri.set(r[0],r[1],r[2]).length(),a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);let c=1/s,u=1/a,h=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Ln){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),f,_;if(o===Ln)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===bs)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ln){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,f=(n+r)*u,_,x;if(o===Ln)_=(a+s)*h,x=-2*h;else if(o===bs)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new I,cn=new xe,Ad=new I(0,0,0),Rd=new I(1,1,1),zn=new I,$r=new I,Kt=new I,lc=new xe,cc=new Ze,Wt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cd=0,uc=new I,Ci=new Ze,Sn=new xe,Qr=new I,mr=new I,Ld=new I,Pd=new Ze,hc=new I(1,0,0),dc=new I(0,1,0),fc=new I(0,0,1),Id={type:"added"},Dd={type:"removed"},mt=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Wt,n=new Ze,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new ze}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(mr,Qr,this.up):Sn.lookAt(Qr,mr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Id)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new I,bn=new I,Fa=new I,En=new I,Li=new I,Pi=new I,pc=new I,Oa=new I,ka=new I,za=new I,jr=!1,zi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),bn.subVectors(n,t),Fa.subVectors(e,t);let a=un.dot(un),o=un.dot(bn),l=un.dot(Fa),c=bn.dot(bn),u=bn.dot(Fa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,r,s,a,o,l){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),bn.subVectors(e,t),un.cross(bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),un.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Li.subVectors(r,n),Pi.subVectors(s,n),Oa.subVectors(e,n);let l=Li.dot(Oa),c=Pi.dot(Oa);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,r);let u=Li.dot(ka),h=Pi.dot(ka);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Li,a);za.subVectors(e,s);let f=Li.dot(za),_=Pi.dot(za);if(_>=0&&f<=_)return t.copy(s);let x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Pi,o);let g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return pc.subVectors(s,r),o=(h-u)/(h-u+(f-_)),t.copy(r).addScaledVector(pc,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Li,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},es={h:0,s:0,l:0};function Ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=Vo(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ha(a,s,e+1/3),this.g=Ha(a,s,e),this.b=Ha(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return st.fromWorkingColorSpace(Ot.copy(this),e),Math.round(It(Ot.r*255,0,255))*65536+Math.round(It(Ot.g*255,0,255))*256+Math.round(It(Ot.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=ut){st.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,r=Ot.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(es);let n=xr(Hn.h,es.h,t),r=xr(Hn.s,es.s,t),s=xr(Hn.l,es.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Me;Me.NAMES=mu;var Ud=0,mn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Wi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ls=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new I,ts=new We,rn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var Qi=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ps=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Nd=0,jt=new xe,Va=new mt,Ii=new I,Jt=new Zn,gr=new Zn,Ct=new I,sn=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?Ps:Qi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Jt.min,gr.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,gr.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(gr.min),Jt.expandByPoint(gr.max))}Jt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Ct.add(Ii)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new I,u[T]=new I;let h=new I,d=new I,f=new I,_=new We,x=new We,g=new We,m=new I,y=new I;function v(T,V,Y){h.fromArray(r,T*3),d.fromArray(r,V*3),f.fromArray(r,Y*3),_.fromArray(a,T*2),x.fromArray(a,V*2),g.fromArray(a,Y*2),d.sub(h),f.sub(h),x.sub(_),g.sub(_);let te=1/(x.x*g.y-g.x*x.y);isFinite(te)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(te),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(te),c[T].add(m),c[V].add(m),c[Y].add(m),u[T].add(y),u[V].add(y),u[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,V=b.length;T<V;++T){let Y=b[T],te=Y.start,D=Y.count;for(let U=te,F=te+D;U<F;U+=3)v(n[U+0],n[U+1],n[U+2])}let L=new I,R=new I,C=new I,B=new I;function M(T){C.fromArray(s,T*3),B.copy(C);let V=c[T];L.copy(V),L.sub(C.multiplyScalar(C.dot(V))).normalize(),R.crossVectors(B,V);let te=R.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=te}for(let T=0,V=b.length;T<V;++T){let Y=b[T],te=Y.start,D=Y.count;for(let U=te,F=te+D;U<F;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=new xe,li=new Tr,ns=new Kn,gc=new I,Di=new I,Ui=new I,Ni=new I,Ga=new I,is=new I,rs=new We,ss=new We,as=new We,_c=new I,vc=new I,xc=new I,os=new I,ls=new I,$t=class extends mt{constructor(e=new sn,t=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(Ga.fromBufferAttribute(h,e),a?is.addScaledVector(Ga,u):is.addScaledVector(Ga.sub(t),u))}t.add(is)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(ns.containsPoint(li.origin)===!1&&(li.intersectSphere(ns,gc)===null||li.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(s).invert(),li.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let g=d[_],m=a[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,L=v;b<L;b+=3){let R=o.getX(b),C=o.getX(b+1),B=o.getX(b+2);r=cs(this,m,e,n,c,u,h,R,C,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=_,m=x;g<m;g+=3){let y=o.getX(g),v=o.getX(g+1),b=o.getX(g+2);r=cs(this,a,e,n,c,u,h,y,v,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let g=d[_],m=a[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,L=v;b<L;b+=3){let R=b,C=b+1,B=b+2;r=cs(this,m,e,n,c,u,h,R,C,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=_,m=x;g<m;g+=3){let y=g,v=g+1,b=g+2;r=cs(this,a,e,n,c,u,h,y,v,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Bd(i,e,t,n,r,s,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===qn,o),l===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Di),i.getVertexPosition(l,Ui),i.getVertexPosition(c,Ni);let u=Bd(i,e,t,n,Di,Ui,Ni,os);if(u){r&&(rs.fromBufferAttribute(r,o),ss.fromBufferAttribute(r,l),as.fromBufferAttribute(r,c),u.uv=zi.getInterpolation(os,Di,Ui,Ni,rs,ss,as,new We)),s&&(rs.fromBufferAttribute(s,o),ss.fromBufferAttribute(s,l),as.fromBufferAttribute(s,c),u.uv1=zi.getInterpolation(os,Di,Ui,Ni,rs,ss,as,new We),u.uv2=u.uv1),a&&(_c.fromBufferAttribute(a,o),vc.fromBufferAttribute(a,l),xc.fromBufferAttribute(a,c),u.normal=zi.getInterpolation(os,Di,Ui,Ni,_c,vc,xc,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};zi.getNormal(Di,Ui,Ni,h.normal),u.face=h}return u}var Ar=class i extends sn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function _(x,g,m,y,v,b,L,R,C,B,M){let T=b/C,V=L/B,Y=b/2,te=L/2,D=R/2,U=C+1,F=B+1,Z=0,q=0,X=new I;for(let K=0;K<F;K++){let $=K*V-te;for(let ie=0;ie<U;ie++){let W=ie*T-Y;X[x]=W*y,X[g]=$*v,X[m]=D,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=R>0?1:-1,u.push(X.x,X.y,X.z),h.push(ie/C),h.push(1-K/B),Z+=1}}for(let K=0;K<B;K++)for(let $=0;$<C;$++){let ie=d+$+U*K,W=d+$+U*(K+1),J=d+($+1)+U*(K+1),ae=d+($+1)+U*K;l.push(ie,W,ae),l.push(W,J,ae),q+=6}o.addGroup(f,q,M),f+=q,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=ji(i[t]);for(let r in n)e[r]=n[r]}return e}function Fd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gu(i){return i.getRenderTarget()===null?i.outputColorSpace:st.workingColorSpace}var Od={clone:ji,merge:Gt},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Is=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bt=class extends Is{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bi=-90,Fi=1,co=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bt(Bi,Fi,e,t);r.layers=this.layers,this.add(r);let s=new bt(Bi,Fi,e,t);s.layers=this.layers,this.add(s);let a=new bt(Bi,Fi,e,t);a.layers=this.layers,this.add(a);let o=new bt(Bi,Fi,e,t);o.layers=this.layers,this.add(o);let l=new bt(Bi,Fi,e,t);l.layers=this.layers,this.add(l);let c=new bt(Bi,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ds=class extends Ut{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uo=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?ut:nn),this.texture=new Ds(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Gn});s.uniforms.tEquirect.value=t;let a=new $t(r,s),o=t.minFilter;return t.minFilter===Sr&&(t.minFilter=en),new co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Wa=new I,Hd=new I,Vd=new ze,Rn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Wa.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vd.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new Kn,us=new I,Rr=class{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],_=r[9],x=r[10],g=r[11],m=r[12],y=r[13],v=r[14],b=r[15];if(n[0].setComponents(l-s,d-c,g-f,b-m).normalize(),n[1].setComponents(l+s,d+c,g+f,b+m).normalize(),n[2].setComponents(l+a,d+u,g+_,b+y).normalize(),n[3].setComponents(l-a,d-u,g-_,b-y).normalize(),n[4].setComponents(l-o,d-h,g-x,b-v).normalize(),t===Ln)n[5].setComponents(l+o,d+h,g+x,b+v).normalize();else if(t===bs)n[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _u(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gd(i,e){let t=e.isWebGL2,n=new WeakMap;function r(c,u){let h=c.array,d=c.usage,f=h.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){let d=u.array,f=u._updateRange,_=u.updateRanges;if(i.bindBuffer(h,c),f.count===-1&&_.length===0&&i.bufferSubData(h,0,d),_.length!==0){for(let x=0,g=_.length;x<g;x++){let m=_[x];t?i.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}var ho=class i extends sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*d-a;for(let v=0;v<c;v++){let b=v*h-s;_.push(b,-y,0),x.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let v=y+c*m,b=y+c*(m+1),L=y+1+c*(m+1),R=y+1+c*m;f.push(v,b,R),f.push(b,L,R)}this.setIndex(f),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pf=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Xf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ap=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Qp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,l0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,u0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d0=`#define PHONG
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
}`,f0=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,g0=`#define TOON
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
}`,_0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,v0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,w0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ke={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:Zd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:$d,batching_pars_vertex:Qd,batching_vertex:jd,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:rf,bumpmap_pars_fragment:sf,clipping_planes_fragment:af,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:uf,color_pars_fragment:hf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:wf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Ef,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Rf,fog_pars_vertex:Cf,fog_fragment:Lf,fog_pars_fragment:Pf,gradientmap_pars_fragment:If,lightmap_fragment:Df,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Bf,lights_pars_begin:Ff,lights_toon_fragment:kf,lights_toon_pars_fragment:zf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:$f,map_fragment:Qf,map_pars_fragment:jf,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphcolor_vertex:rp,morphnormal_vertex:sp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:up,normal_pars_vertex:hp,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:wp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Lp,skinning_pars_vertex:Pp,skinning_vertex:Ip,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Bp,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:kp,uv_pars_fragment:zp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:Zp,cube_frag:Kp,depth_vert:Jp,depth_frag:$p,distanceRGBA_vert:Qp,distanceRGBA_frag:jp,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:r0,meshbasic_frag:s0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:u0,meshnormal_frag:h0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:v0,points_frag:x0,shadow_vert:y0,shadow_frag:w0,sprite_vert:M0,sprite_frag:S0},se={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},pn={basic:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Gt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Gt([se.lights,se.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};pn.physical={uniforms:Gt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var hs={r:0,b:0,g:0};function b0(i,e,t,n,r,s,a){let o=new Me(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(g,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qs)?(u===void 0&&(u=new $t(new Ar(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=st.getTransfer(v.colorSpace)!==ht,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $t(new ho(2,2),new Un({name:"BackgroundMaterial",uniforms:ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,m){g.getRGB(hs,gu(i)),n.buffers.color.setClear(hs.r,hs.g,hs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(o,l)},render:_}}function E0(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null),c=l,u=!1;function h(D,U,F,Z,q){let X=!1;if(a){let K=x(Z,F,U);c!==K&&(c=K,f(c.object)),X=m(D,Z,F,q),X&&y(D,Z,F,q)}else{let K=U.wireframe===!0;(c.geometry!==Z.id||c.program!==F.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=F.id,c.wireframe=K,X=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,B(D,U,F,Z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,U,F){let Z=F.wireframe===!0,q=o[D.id];q===void 0&&(q={},o[D.id]=q);let X=q[U.id];X===void 0&&(X={},q[U.id]=X);let K=X[Z];return K===void 0&&(K=g(d()),X[Z]=K),K}function g(D){let U=[],F=[],Z=[];for(let q=0;q<r;q++)U[q]=0,F[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:Z,object:D,attributes:{},index:null}}function m(D,U,F,Z){let q=c.attributes,X=U.attributes,K=0,$=F.getAttributes();for(let ie in $)if($[ie].location>=0){let J=q[ie],ae=X[ie];if(ae===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function y(D,U,F,Z){let q={},X=U.attributes,K=0,$=F.getAttributes();for(let ie in $)if($[ie].location>=0){let J=X[ie];J===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),q[ie]=ae,K++}c.attributes=q,c.attributesNum=K,c.index=Z}function v(){let D=c.newAttributes;for(let U=0,F=D.length;U<F;U++)D[U]=0}function b(D){L(D,0)}function L(D,U){let F=c.newAttributes,Z=c.enabledAttributes,q=c.attributeDivisors;F[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),q[D]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),q[D]=U)}function R(){let D=c.newAttributes,U=c.enabledAttributes;for(let F=0,Z=U.length;F<Z;F++)U[F]!==D[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function C(D,U,F,Z,q,X,K){K===!0?i.vertexAttribIPointer(D,U,F,q,X):i.vertexAttribPointer(D,U,F,Z,q,X)}function B(D,U,F,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=Z.attributes,X=F.getAttributes(),K=U.defaultAttributeValues;for(let $ in X){let ie=X[$];if(ie.location>=0){let W=q[$];if(W===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let J=W.normalized,ae=W.itemSize,me=t.get(W);if(me===void 0)continue;let pe=me.buffer,Ie=me.type,Fe=me.bytesPerElement,Ce=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||W.gpuType===su);if(W.isInterleavedBufferAttribute){let Qe=W.data,O=Qe.stride,kt=W.offset;if(Qe.isInstancedInterleavedBuffer){for(let be=0;be<ie.locationSize;be++)L(ie.location+be,Qe.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let be=0;be<ie.locationSize;be++)b(ie.location+be);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let be=0;be<ie.locationSize;be++)C(ie.location+be,ae/ie.locationSize,Ie,J,O*Fe,(kt+ae/ie.locationSize*be)*Fe,Ce)}else{if(W.isInstancedBufferAttribute){for(let Qe=0;Qe<ie.locationSize;Qe++)L(ie.location+Qe,W.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Qe=0;Qe<ie.locationSize;Qe++)b(ie.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Qe=0;Qe<ie.locationSize;Qe++)C(ie.location+Qe,ae/ie.locationSize,Ie,J,ae*Fe,ae/ie.locationSize*Qe*Fe,Ce)}}else if(K!==void 0){let J=K[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(ie.location,J);break;case 3:i.vertexAttrib3fv(ie.location,J);break;case 4:i.vertexAttrib4fv(ie.location,J);break;default:i.vertexAttrib1fv(ie.location,J)}}}}R()}function M(){Y();for(let D in o){let U=o[D];for(let F in U){let Z=U[F];for(let q in Z)_(Z[q].object),delete Z[q];delete U[F]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;let U=o[D.id];for(let F in U){let Z=U[F];for(let q in Z)_(Z[q].object),delete Z[q];delete U[F]}delete o[D.id]}function V(D){for(let U in o){let F=o[U];if(F[D.id]===void 0)continue;let Z=F[D.id];for(let q in Z)_(Z[q].object),delete Z[q];delete F[D.id]}}function Y(){te(),u=!0,c!==l&&(c=l,f(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:b,disableUnusedAttributes:R}}function T0(i,e,t,n){let r=n.isWebGL2,s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function A0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=a||e.has("OES_texture_float"),L=v&&b,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:R}}function R0(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Rn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{let y=s?0:n,v=y*4,b=m.clippingState||null;l.value=b,b=u(_,d,v,f);for(let L=0;L!==v;++L)b[L]=t[L];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,_!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,b=f;v!==x;++v,b+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function C0(i){let e=new WeakMap;function t(a,o){return o===Mr?a.mapping=Yi:o===io&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mr||o===io)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new uo(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var er=class extends Is{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hi=4,yc=[.125,.215,.35,.446,.526,.582],di=20,Xa=new er,wc=new Me,qa=null,Ya=0,Za=0,ui=(1+Math.sqrt(5))/2,Oi=1/ui,Mc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ui,Oi),new I(0,ui,-Oi),new I(Oi,0,ui),new I(-Oi,0,ui),new I(ui,Oi,0),new I(-ui,Oi,0)],Us=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,Za),e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:br,format:tn,colorSpace:In,depthBuffer:!1},r=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=P0(s,e,t)}return r}_compileMaterial(e){let t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,r){let o=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(wc),u.toneMapping=Wn,u.autoClear=!1;let f=new Ls({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new $t(new Ar,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(wc),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;ds(r,y*v,m>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Yi||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mc[(r-1)%Mc.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new $t(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*di-1),x=s/_,g=isFinite(s)?1+Math.floor(u*x):di;g>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${di}`);let m=[],y=0;for(let C=0;C<di;++C){let B=C/x,M=Math.exp(-B*B/2);m.push(M),C===0?y+=M:C<g&&(y+=2*M)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let b=this._sizeLods[r],L=3*b*(r>v-Hi?r-v+Hi:0),R=4*(this._cubeSize-b);ds(t,L,R,3*b,2*b),l.setRenderTarget(t),l.render(h,Xa)}};function L0(i){let e=[],t=[],n=[],r=i,s=i-Hi+1+yc.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Hi?l=yc[a-i+Hi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,x=3,g=2,m=1,y=new Float32Array(x*_*f),v=new Float32Array(g*_*f),b=new Float32Array(m*_*f);for(let R=0;R<f;R++){let C=R%3*2/3-1,B=R>2?0:-1,M=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];y.set(M,x*_*R),v.set(d,g*_*R);let T=[R,R,R,R,R,R];b.set(T,m*_*R)}let L=new sn;L.setAttribute("position",new rn(y,x)),L.setAttribute("uv",new rn(v,g)),L.setAttribute("faceIndex",new rn(b,m)),e.push(L),r>Hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sc(i,e,t){let n=new Dn(i,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function P0(i,e,t){let n=new Float32Array(di),r=new I(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ec(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function I0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Mr||l===io,u=l===Yi||l===Zi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Us(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Us(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function U0(i,e,t,n){let r={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let x=d.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let _ in d)e.update(d[_],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let _ in f){let x=f[_];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,_=h.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,b=y.length;v<b;v+=3){let L=y[v+0],R=y[v+1],C=y[v+2];d.push(L,R,R,C,C,L)}}else if(_!==void 0){let y=_.array;x=_.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let L=v+0,R=v+1,C=v+2;d.push(L,R,R,C,C,L)}}else return;let g=new(pu(d)?Ps:Qi)(d,1);g.version=x;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function N0(i,e,t,n){let r=n.isWebGL2,s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,_){i.drawElements(s,_,o,f*l),t.update(_,s,1)}function h(f,_,x){if(x===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,_,o,f*l,x),t.update(_,s,x)}function d(f,_,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(f[m]/l,_[m]);else{g.multiDrawElementsWEBGL(s,_,0,o,f,0,x);let m=0;for(let y=0;y<x;y++)m+=_[y];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function B0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F0(i,e){return i[0]-e[0]}function O0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function k0(i,e,t){let n={},r=new Float32Array(8),s=new WeakMap,a=new Je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=f!==void 0?f.length:0,x=s.get(u);if(x===void 0||x.count!==_){let D=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],B=0;y===!0&&(B=1),v===!0&&(B=2),b===!0&&(B=3);let M=u.attributes.position.count*B,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let V=new Float32Array(M*T*4*_),Y=new Rs(V,M,T,_);Y.type=Cn,Y.needsUpdate=!0;let te=B*4;for(let U=0;U<_;U++){let F=L[U],Z=R[U],q=C[U],X=M*T*4*U;for(let K=0;K<F.count;K++){let $=K*te;y===!0&&(a.fromBufferAttribute(F,K),V[X+$+0]=a.x,V[X+$+1]=a.y,V[X+$+2]=a.z,V[X+$+3]=0),v===!0&&(a.fromBufferAttribute(Z,K),V[X+$+4]=a.x,V[X+$+5]=a.y,V[X+$+6]=a.z,V[X+$+7]=0),b===!0&&(a.fromBufferAttribute(q,K),V[X+$+8]=a.x,V[X+$+9]=a.y,V[X+$+10]=a.z,V[X+$+11]=q.itemSize===4?a.w:1)}}x={count:_,texture:Y,size:new We(M,T)},s.set(u,x),u.addEventListener("dispose",D)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let m=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,_=n[u.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<f;v++){let b=_[v];b[0]=v,b[1]=d[v]}_.sort(O0);for(let v=0;v<8;v++)v<f&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(F0);let x=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let b=o[v],L=b[0],R=b[1];L!==Number.MAX_SAFE_INTEGER&&R?(x&&u.getAttribute("morphTarget"+v)!==x[L]&&u.setAttribute("morphTarget"+v,x[L]),g&&u.getAttribute("morphNormal"+v)!==g[L]&&u.setAttribute("morphNormal"+v,g[L]),r[v]=R,m+=R):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}let y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function z0(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var Ns=class extends Ut{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=Vn),n===void 0&&u===Ji&&(n=fi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vu=new Ut,xu=new Ns(1,1);xu.compareFunction=fu;var yu=new Rs,wu=new lo,Mu=new Ds,Tc=[],Ac=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Lc=new Float32Array(4);function sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Tc[r];if(s===void 0&&(s=new Float32Array(r),Tc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function X0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),Tt(t,n)}}function q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Tt(t,n)}}function Y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Rc.set(n),i.uniformMatrix4fv(this.addr,!1,Rc),Tt(t,n)}}function Z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function nm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?xu:vu;t.setTexture2D(e||s,r)}function im(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||wu,r)}function rm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Mu,r)}function sm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yu,r)}function am(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return Q0;case 36294:return j0;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}function om(i,e){i.uniform1fv(this.addr,e)}function lm(i,e){let t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function cm(i,e){let t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function um(i,e){let t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function hm(i,e){let t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dm(i,e){let t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fm(i,e){let t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pm(i,e){i.uniform1iv(this.addr,e)}function mm(i,e){i.uniform2iv(this.addr,e)}function gm(i,e){i.uniform3iv(this.addr,e)}function _m(i,e){i.uniform4iv(this.addr,e)}function vm(i,e){i.uniform1uiv(this.addr,e)}function xm(i,e){i.uniform2uiv(this.addr,e)}function ym(i,e){i.uniform3uiv(this.addr,e)}function wm(i,e){i.uniform4uiv(this.addr,e)}function Mm(i,e,t){let n=this.cache,r=e.length,s=ta(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vu,s[a])}function Sm(i,e,t){let n=this.cache,r=e.length,s=ta(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wu,s[a])}function bm(i,e,t){let n=this.cache,r=e.length,s=ta(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mu,s[a])}function Em(i,e,t){let n=this.cache,r=e.length,s=ta(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||yu,s[a])}function Tm(i){switch(i){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return hm;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return xm;case 36295:return ym;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Em}}var fo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=am(t.type)}},po=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}},mo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function Pc(i,e){i.seq.push(e),i.map[e.id]=e}function Am(i,e,t){let n=i.name,r=n.length;for(Ka.lastIndex=0;;){let s=Ka.exec(n),a=Ka.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pc(t,c===void 0?new fo(o,i,e):new po(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new mo(o),Pc(t,h)),t=h}}}var qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Am(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Ic(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Rm=37297,Cm=0;function Lm(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Pm(i){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i),n;switch(e===t?n="":e===Ss&&t===Ms?n="LinearDisplayP3ToLinearSRGB":e===Ms&&t===Ss&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case ea:return[n,"LinearTransferOETF"];case ut:case Ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Lm(i.getShaderSource(e),a)}else return r}function Im(i,e){let t=Pm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dm(i,e){let t;switch(e){case Bh:t="Linear";break;case Fh:t="Reinhard";break;case Oh:t="OptimizedCineon";break;case ko:t="ACESFilmic";break;case zh:t="AgX";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Um(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function Nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vi).join(`
`)}function Bm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vi(i){return i!==""}function Uc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Om,zm)}var km=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zm(i,e){let t=ke[e];if(t===void 0){let n=km.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return go(t)}var Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(Hm,Vm)}function Vm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Wm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function qm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $s:e="ENVMAP_BLENDING_MULTIPLY";break;case Uh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function Ym(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zm(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Gm(t),c=Wm(t),u=Xm(t),h=qm(t),d=Ym(t),f=t.isWebGL2?"":Um(t),_=Nm(t),x=Bm(s),g=r.createProgram(),m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vi).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vi).join(`
`),y.length>0&&(y+=`
`)):(m=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),y=[f,Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Im("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=go(a),a=Uc(a,t),a=Nc(a,t),o=go(o),o=Uc(o,t),o=Nc(o,t),a=Bc(a),o=Bc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=v+m+a,L=v+y+o,R=Ic(r,r.VERTEX_SHADER,b),C=Ic(r,r.FRAGMENT_SHADER,L);r.attachShader(g,R),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function B(Y){if(i.debug.checkShaderErrors){let te=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(R).trim(),U=r.getShaderInfoLog(C).trim(),F=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,R,C);else{let q=Dc(r,R,"vertex"),X=Dc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+q+`
`+X)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(D===""||U==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:F,programLog:te,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:y}})}r.deleteShader(R),r.deleteShader(C),M=new qi(r,g),T=Fm(r,g)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,Rm)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=C,this}var Km=0,_o=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vo(e),t.set(e,n)),n}},vo=class{constructor(e){this.id=Km++,this.code=e,this.usedTimes=0}};function Jm(i,e,t,n,r,s,a){let o=new Cs,l=new _o,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,T,V,Y,te){let D=Y.fog,U=te.geometry,F=M.isMeshStandardMaterial?Y.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),q=Z&&Z.mapping===Qs?Z.image.height:null,X=_[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$=K!==void 0?K.length:0,ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let W,J,ae,me;if(X){let zt=pn[X];W=zt.vertexShader,J=zt.fragmentShader}else W=M.vertexShader,J=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);let pe=i.getRenderTarget(),Ie=te.isInstancedMesh===!0,Fe=te.isBatchedMesh===!0,Ce=!!M.map,Qe=!!M.matcap,O=!!Z,kt=!!M.aoMap,be=!!M.lightMap,Ue=!!M.bumpMap,ge=!!M.normalMap,dt=!!M.displacementMap,He=!!M.emissiveMap,E=!!M.metalnessMap,w=!!M.roughnessMap,z=M.anisotropy>0,ee=M.clearcoat>0,j=M.iridescence>0,ne=M.sheen>0,_e=M.transmission>0,ce=z&&!!M.anisotropyMap,de=ee&&!!M.clearcoatMap,Ae=ee&&!!M.clearcoatNormalMap,Ve=ee&&!!M.clearcoatRoughnessMap,Q=j&&!!M.iridescenceMap,rt=j&&!!M.iridescenceThicknessMap,Ke=ne&&!!M.sheenColorMap,De=ne&&!!M.sheenRoughnessMap,we=!!M.specularMap,fe=!!M.specularColorMap,Oe=!!M.specularIntensityMap,nt=_e&&!!M.transmissionMap,gt=_e&&!!M.thicknessMap,qe=!!M.gradientMap,re=!!M.alphaMap,P=M.alphaTest>0,oe=!!M.alphaHash,le=!!M.extensions,Le=!!U.attributes.uv1,Ee=!!U.attributes.uv2,ot=!!U.attributes.uv3,lt=Wn;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(lt=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:J,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:In,map:Ce,matcap:Qe,envMap:O,envMapMode:O&&Z.mapping,envMapCubeUVHeight:q,aoMap:kt,lightMap:be,bumpMap:Ue,normalMap:ge,displacementMap:d&&dt,emissiveMap:He,normalMapObjectSpace:ge&&M.normalMapType===ed,normalMapTangentSpace:ge&&M.normalMapType===js,metalnessMap:E,roughnessMap:w,anisotropy:z,anisotropyMap:ce,clearcoat:ee,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ve,iridescence:j,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:ne,sheenColorMap:Ke,sheenRoughnessMap:De,specularMap:we,specularColorMap:fe,specularIntensityMap:Oe,transmission:_e,transmissionMap:nt,thicknessMap:gt,gradientMap:qe,opaque:M.transparent===!1&&M.blending===Wi,alphaMap:re,alphaTest:P,alphaHash:oe,combine:M.combine,mapUv:Ce&&x(M.map.channel),aoMapUv:kt&&x(M.aoMap.channel),lightMapUv:be&&x(M.lightMap.channel),bumpMapUv:Ue&&x(M.bumpMap.channel),normalMapUv:ge&&x(M.normalMap.channel),displacementMapUv:dt&&x(M.displacementMap.channel),emissiveMapUv:He&&x(M.emissiveMap.channel),metalnessMapUv:E&&x(M.metalnessMap.channel),roughnessMapUv:w&&x(M.roughnessMap.channel),anisotropyMapUv:ce&&x(M.anisotropyMap.channel),clearcoatMapUv:de&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:fe&&x(M.specularColorMap.channel),specularIntensityMapUv:Oe&&x(M.specularIntensityMap.channel),transmissionMapUv:nt&&x(M.transmissionMap.channel),thicknessMapUv:gt&&x(M.thicknessMap.channel),alphaMapUv:re&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ee,vertexUv3s:ot,pointsUvs:te.isPoints===!0&&!!U.attributes.uv&&(Ce||re),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let V in M.defines)T.push(V),T.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(y(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){let T=_[M.type],V;if(T){let Y=pn[T];V=Od.clone(Y.uniforms)}else V=M.uniforms;return V}function L(M,T){let V;for(let Y=0,te=c.length;Y<te;Y++){let D=c[Y];if(D.cacheKey===T){V=D,++V.usedTimes;break}}return V===void 0&&(V=new Zm(i,T,M,s),c.push(V)),V}function R(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:B}}function $m(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kc(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,_,x,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function o(h,d,f,_,x,g){let m=a(h,d,f,_,x,g);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(h,d,f,_,x,g){let m=a(h,d,f,_,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Qm),n.length>1&&n.sort(d||Oc),r.length>1&&r.sort(d||Oc)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function jm(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new kc,i.set(n,[a])):r>=s.length?(a=new kc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function eg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Me};break;case"SpotLight":t={position:new I,direction:new I,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function tg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ng=0;function ig(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rg(i,e){let t=new eg,n=tg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);let s=new I,a=new xe,o=new xe;function l(u,h){let d=0,f=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,g=0,m=0,y=0,v=0,b=0,L=0,R=0,C=0,B=0,M=0;u.sort(ig);let T=h===!0?Math.PI:1;for(let Y=0,te=u.length;Y<te;Y++){let D=u[Y],U=D.color,F=D.intensity,Z=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*F*T,f+=U.g*F*T,_+=U.b*F*T;else if(D.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(D.sh.coefficients[X],F);M++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){let K=D.shadow,$=n.get(D);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=D.shadow.matrix,b++}r.directional[x]=X,x++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(F*T),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,r.spot[m]=X;let K=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,K.updateMatrices(D),D.castShadow&&B++),r.spotLightMatrix[m]=K.matrix,D.castShadow){let $=n.get(D);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,r.spotShadow[m]=$,r.spotShadowMap[m]=q,R++}m++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=X,y++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),X.distance=D.distance,X.decay=D.decay,D.castShadow){let K=D.shadow,$=n.get(D);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,r.pointShadow[g]=$,r.pointShadowMap[g]=q,r.pointShadowMatrix[g]=D.shadow.matrix,L++}r.point[g]=X,g++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(F*T),X.groundColor.copy(D.groundColor).multiplyScalar(F*T),r.hemi[v]=X,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=_;let V=r.hash;(V.directionalLength!==x||V.pointLength!==g||V.spotLength!==m||V.rectAreaLength!==y||V.hemiLength!==v||V.numDirectionalShadows!==b||V.numPointShadows!==L||V.numSpotShadows!==R||V.numSpotMaps!==C||V.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=y,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+C-B,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=M,V.directionalLength=x,V.pointLength=g,V.spotLength=m,V.rectAreaLength=y,V.hemiLength=v,V.numDirectionalShadows=b,V.numPointShadows=L,V.numSpotShadows=R,V.numSpotMaps=C,V.numLightProbes=M,r.version=ng++)}function c(u,h){let d=0,f=0,_=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let b=u[y];if(b.isDirectionalLight){let L=r.directional[d];L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),d++}else if(b.isSpotLight){let L=r.spot[_];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),_++}else if(b.isRectAreaLight){let L=r.rectArea[x];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(m),o.identity(),a.copy(b.matrixWorld),a.premultiply(m),o.extractRotation(a),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let L=r.point[f];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let L=r.hemi[g];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:r}}function zc(i,e){let t=new rg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sg(i,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),l;return o===void 0?(l=new zc(i,e),t.set(s,[l])):a>=o.length?(l=new zc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}var xo=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yo=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function lg(i,e,t){let n=new Rr,r=new We,s=new We,a=new Je,o=new xo({depthPacking:jh}),l=new yo,c={},u=t.maxTextureSize,h={[qn]:Yt,[Yt]:qn,[hn]:hn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ag,fragmentShader:og}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new sn;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $t(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let m=this.type;this.render=function(R,C,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),T=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Gn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let te=m!==An&&this.type===An,D=m===An&&this.type!==An;for(let U=0,F=R.length;U<F;U++){let Z=R[U],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let X=q.getFrameExtents();if(r.multiply(X),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,q.mapSize.y=s.y)),q.map===null||te===!0||D===!0){let $=this.type!==An?{minFilter:Pt,magFilter:Pt}:{};q.map!==null&&q.map.dispose(),q.map=new Dn(r.x,r.y,$),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let K=q.getViewportCount();for(let $=0;$<K;$++){let ie=q.getViewport($);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),Y.viewport(a),q.updateMatrices(Z,$),n=q.getFrustum(),b(C,B,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===An&&y(q,B),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,T,V)};function y(R,C){let B=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,B,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,B,f,x,null)}function v(R,C,B,M){let T=null,V=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)T=V;else if(T=B.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let Y=T.uuid,te=C.uuid,D=c[Y];D===void 0&&(D={},c[Y]=D);let U=D[te];U===void 0&&(U=T.clone(),D[te]=U,C.addEventListener("dispose",L)),T=U}if(T.visible=C.visible,T.wireframe=C.wireframe,M===An?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Y=i.properties.get(T);Y.light=B}return T}function b(R,C,B,M,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===An)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let te=e.update(R),D=R.material;if(Array.isArray(D)){let U=te.groups;for(let F=0,Z=U.length;F<Z;F++){let q=U[F],X=D[q.materialIndex];if(X&&X.visible){let K=v(R,X,M,T);R.onBeforeShadow(i,R,C,B,te,K,q),i.renderBufferDirect(B,null,te,K,R,q),R.onAfterShadow(i,R,C,B,te,K,q)}}}else if(D.visible){let U=v(R,D,M,T);R.onBeforeShadow(i,R,C,B,te,U,null),i.renderBufferDirect(B,null,te,U,R,null),R.onAfterShadow(i,R,C,B,te,U,null)}}let Y=R.children;for(let te=0,D=Y.length;te<D;te++)b(Y[te],C,B,M,T)}function L(R){R.target.removeEventListener("dispose",L);for(let B in c){let M=c[B],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function cg(i,e,t){let n=t.isWebGL2;function r(){let P=!1,oe=new Je,le=null,Le=new Je(0,0,0,0);return{setMask:function(Ee){le!==Ee&&!P&&(i.colorMask(Ee,Ee,Ee,Ee),le=Ee)},setLocked:function(Ee){P=Ee},setClear:function(Ee,ot,lt,At,zt){zt===!0&&(Ee*=At,ot*=At,lt*=At),oe.set(Ee,ot,lt,At),Le.equals(oe)===!1&&(i.clearColor(Ee,ot,lt,At),Le.copy(oe))},reset:function(){P=!1,le=null,Le.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,le=null,Le=null;return{setTest:function(Ee){Ee?Fe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Ee){oe!==Ee&&!P&&(i.depthMask(Ee),oe=Ee)},setFunc:function(Ee){if(le!==Ee){switch(Ee){case Ah:i.depthFunc(i.NEVER);break;case Rh:i.depthFunc(i.ALWAYS);break;case Ch:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Lh:i.depthFunc(i.EQUAL);break;case Ph:i.depthFunc(i.GEQUAL);break;case Ih:i.depthFunc(i.GREATER);break;case Dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ee}},setLocked:function(Ee){P=Ee},setClear:function(Ee){Le!==Ee&&(i.clearDepth(Ee),Le=Ee)},reset:function(){P=!1,oe=null,le=null,Le=null}}}function a(){let P=!1,oe=null,le=null,Le=null,Ee=null,ot=null,lt=null,At=null,zt=null;return{setTest:function(ct){P||(ct?Fe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(ct){oe!==ct&&!P&&(i.stencilMask(ct),oe=ct)},setFunc:function(ct,Ht,fn){(le!==ct||Le!==Ht||Ee!==fn)&&(i.stencilFunc(ct,Ht,fn),le=ct,Le=Ht,Ee=fn)},setOp:function(ct,Ht,fn){(ot!==ct||lt!==Ht||At!==fn)&&(i.stencilOp(ct,Ht,fn),ot=ct,lt=Ht,At=fn)},setLocked:function(ct){P=ct},setClear:function(ct){zt!==ct&&(i.clearStencil(ct),zt=ct)},reset:function(){P=!1,oe=null,le=null,Le=null,Ee=null,ot=null,lt=null,At=null,zt=null}}}let o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap,d={},f={},_=new WeakMap,x=[],g=null,m=!1,y=null,v=null,b=null,L=null,R=null,C=null,B=null,M=new Me(0,0,0),T=0,V=!1,Y=null,te=null,D=null,U=null,F=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=X>=2);let $=null,ie={},W=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),ae=new Je().fromArray(W),me=new Je().fromArray(J);function pe(P,oe,le,Le){let Ee=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<le;lt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(oe+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return ot}let Ie={};Ie[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(i.DEPTH_TEST),l.setFunc(vs),He(!1),E(vl),Fe(i.CULL_FACE),ge(Gn);function Fe(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Ce(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Qe(P,oe){return f[P]!==oe?(i.bindFramebuffer(P,oe),f[P]=oe,n&&(P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(P,oe){let le=x,Le=!1;if(P)if(le=_.get(oe),le===void 0&&(le=[],_.set(oe,le)),P.isWebGLMultipleRenderTargets){let Ee=P.texture;if(le.length!==Ee.length||le[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,lt=Ee.length;ot<lt;ot++)le[ot]=i.COLOR_ATTACHMENT0+ot;le.length=Ee.length,Le=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Le=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function kt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let be={[hi]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};if(n)be[Ml]=i.MIN,be[Sl]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(be[Ml]=P.MIN_EXT,be[Sl]=P.MAX_EXT)}let Ue={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[Mh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[vh]:i.DST_ALPHA,[_h]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[wh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Sh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(P,oe,le,Le,Ee,ot,lt,At,zt,ct){if(P===Gn){m===!0&&(Ce(i.BLEND),m=!1);return}if(m===!1&&(Fe(i.BLEND),m=!0),P!==hh){if(P!==y||ct!==V){if((v!==hi||R!==hi)&&(i.blendEquation(i.FUNC_ADD),v=hi,R=hi),ct)switch(P){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,L=null,C=null,B=null,M.set(0,0,0),T=0,y=P,V=ct}return}Ee=Ee||oe,ot=ot||le,lt=lt||Le,(oe!==v||Ee!==R)&&(i.blendEquationSeparate(be[oe],be[Ee]),v=oe,R=Ee),(le!==b||Le!==L||ot!==C||lt!==B)&&(i.blendFuncSeparate(Ue[le],Ue[Le],Ue[ot],Ue[lt]),b=le,L=Le,C=ot,B=lt),(At.equals(M)===!1||zt!==T)&&(i.blendColor(At.r,At.g,At.b,zt),M.copy(At),T=zt),y=P,V=!1}function dt(P,oe){P.side===hn?Ce(i.CULL_FACE):Fe(i.CULL_FACE);let le=P.side===Yt;oe&&(le=!le),He(le),P.blending===Wi&&P.transparent===!1?ge(Gn):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Le=P.stencilWrite;c.setTest(Le),Le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){Y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),Y=P)}function E(P){P!==lh?(Fe(i.CULL_FACE),P!==te&&(P===vl?i.cullFace(i.BACK):P===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),te=P}function w(P){P!==D&&(q&&i.lineWidth(P),D=P)}function z(P,oe,le){P?(Fe(i.POLYGON_OFFSET_FILL),(U!==oe||F!==le)&&(i.polygonOffset(oe,le),U=oe,F=le)):Ce(i.POLYGON_OFFSET_FILL)}function ee(P){P?Fe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function j(P){P===void 0&&(P=i.TEXTURE0+Z-1),$!==P&&(i.activeTexture(P),$=P)}function ne(P,oe,le){le===void 0&&($===null?le=i.TEXTURE0+Z-1:le=$);let Le=ie[le];Le===void 0&&(Le={type:void 0,texture:void 0},ie[le]=Le),(Le.type!==P||Le.texture!==oe)&&($!==le&&(i.activeTexture(le),$=le),i.bindTexture(P,oe||Ie[P]),Le.type=P,Le.texture=oe)}function _e(){let P=ie[$];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(P){ae.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function nt(P){me.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),me.copy(P))}function gt(P,oe){let le=h.get(oe);le===void 0&&(le=new WeakMap,h.set(oe,le));let Le=le.get(P);Le===void 0&&(Le=i.getUniformBlockIndex(oe,P.name),le.set(P,Le))}function qe(P,oe){let Le=h.get(oe).get(P);u.get(oe)!==Le&&(i.uniformBlockBinding(oe,Le,P.__bindingPointIndex),u.set(oe,Le))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},$=null,ie={},f={},_=new WeakMap,x=[],g=null,m=!1,y=null,v=null,b=null,L=null,R=null,C=null,B=null,M=new Me(0,0,0),T=0,V=!1,Y=null,te=null,D=null,U=null,F=null,ae.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:Ce,bindFramebuffer:Qe,drawBuffers:O,useProgram:kt,setBlending:ge,setMaterial:dt,setFlipSided:He,setCullFace:E,setLineWidth:w,setPolygonOffset:z,setScissorTest:ee,activeTexture:j,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:we,texImage3D:fe,updateUBOMapping:gt,uniformBlockBinding:qe,texStorage2D:Ke,texStorage3D:De,texSubImage2D:Ae,texSubImage3D:Ve,compressedTexSubImage2D:Q,compressedTexSubImage3D:rt,scissor:Oe,viewport:nt,reset:re}}function ug(i,e,t,n,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,w){return f?new OffscreenCanvas(E,w):Er("canvas")}function x(E,w,z,ee){let j=1;if((E.width>ee||E.height>ee)&&(j=ee/Math.max(E.width,E.height)),j<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ne=w?Es:Math.floor,_e=ne(j*E.width),ce=ne(j*E.height);h===void 0&&(h=_(_e,ce));let de=z?_(_e,ce):h;return de.width=_e,de.height=ce,de.getContext("2d").drawImage(E,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+ce+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return ao(E.width)&&ao(E.height)}function m(E){return o?!1:E.wrapS!==qt||E.wrapT!==qt||E.minFilter!==Pt&&E.minFilter!==en}function y(E,w){return E.generateMipmaps&&w&&E.minFilter!==Pt&&E.minFilter!==en}function v(E){i.generateMipmap(E)}function b(E,w,z,ee,j=!1){if(o===!1)return w;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=w;if(w===i.RED&&(z===i.FLOAT&&(ne=i.R32F),z===i.HALF_FLOAT&&(ne=i.R16F),z===i.UNSIGNED_BYTE&&(ne=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ne=i.R8UI),z===i.UNSIGNED_SHORT&&(ne=i.R16UI),z===i.UNSIGNED_INT&&(ne=i.R32UI),z===i.BYTE&&(ne=i.R8I),z===i.SHORT&&(ne=i.R16I),z===i.INT&&(ne=i.R32I)),w===i.RG&&(z===i.FLOAT&&(ne=i.RG32F),z===i.HALF_FLOAT&&(ne=i.RG16F),z===i.UNSIGNED_BYTE&&(ne=i.RG8)),w===i.RGBA){let _e=j?ws:st.getTransfer(ee);z===i.FLOAT&&(ne=i.RGBA32F),z===i.HALF_FLOAT&&(ne=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ne=_e===ht?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function L(E,w,z){return y(E,z)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function R(E){return E===Pt||E===El||E===wa?i.NEAREST:i.LINEAR}function C(E){let w=E.target;w.removeEventListener("dispose",C),M(w),w.isVideoTexture&&u.delete(w)}function B(E){let w=E.target;w.removeEventListener("dispose",B),V(w)}function M(E){let w=n.get(E);if(w.__webglInit===void 0)return;let z=E.source,ee=d.get(z);if(ee){let j=ee[w.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(E),Object.keys(ee).length===0&&d.delete(z)}n.remove(E)}function T(E){let w=n.get(E);i.deleteTexture(w.__webglTexture);let z=E.source,ee=d.get(z);delete ee[w.__cacheKey],a.memory.textures--}function V(E){let w=E.texture,z=n.get(E),ee=n.get(w);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(z.__webglFramebuffer[j]))for(let ne=0;ne<z.__webglFramebuffer[j].length;ne++)i.deleteFramebuffer(z.__webglFramebuffer[j][ne]);else i.deleteFramebuffer(z.__webglFramebuffer[j]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[j])}else{if(Array.isArray(z.__webglFramebuffer))for(let j=0;j<z.__webglFramebuffer.length;j++)i.deleteFramebuffer(z.__webglFramebuffer[j]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let j=0;j<z.__webglColorRenderbuffer.length;j++)z.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[j]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let j=0,ne=w.length;j<ne;j++){let _e=n.get(w[j]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(w[j])}n.remove(w),n.remove(E)}let Y=0;function te(){Y=0}function D(){let E=Y;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),Y+=1,E}function U(E){let w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function F(E,w){let z=n.get(E);if(E.isVideoTexture&&dt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(z,E,w);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function Z(E,w){let z=n.get(E);if(E.version>0&&z.__version!==E.version){ae(z,E,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function q(E,w){let z=n.get(E);if(E.version>0&&z.__version!==E.version){ae(z,E,w);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function X(E,w){let z=n.get(E);if(E.version>0&&z.__version!==E.version){me(z,E,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}let K={[Ki]:i.REPEAT,[qt]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},$={[Pt]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[wa]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Vh]:i.LINEAR_MIPMAP_NEAREST,[Sr]:i.LINEAR_MIPMAP_LINEAR},ie={[td]:i.NEVER,[od]:i.ALWAYS,[nd]:i.LESS,[fu]:i.LEQUAL,[id]:i.EQUAL,[ad]:i.GEQUAL,[rd]:i.GREATER,[sd]:i.NOTEQUAL};function W(E,w,z){if(z?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[w.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,$[w.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,$[w.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==qt||w.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(w.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(w.minFilter)),w.minFilter!==Pt&&w.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Pt||w.minFilter!==wa&&w.minFilter!==Sr||w.type===Cn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function J(E,w){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",C));let ee=w.source,j=d.get(ee);j===void 0&&(j={},d.set(ee,j));let ne=U(w);if(ne!==E.__cacheKey){j[ne]===void 0&&(j[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ne].usedTimes++;let _e=j[E.__cacheKey];_e!==void 0&&(j[E.__cacheKey].usedTimes--,_e.usedTimes===0&&T(w)),E.__cacheKey=ne,E.__webglTexture=j[ne].texture}return z}function ae(E,w,z){let ee=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=i.TEXTURE_3D);let j=J(E,w),ne=w.source;t.bindTexture(ee,E.__webglTexture,i.TEXTURE0+z);let _e=n.get(ne);if(ne.version!==_e.__version||j===!0){t.activeTexture(i.TEXTURE0+z);let ce=st.getPrimaries(st.workingColorSpace),de=w.colorSpace===nn?null:st.getPrimaries(w.colorSpace),Ae=w.colorSpace===nn||ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ve=m(w)&&g(w.image)===!1,Q=x(w.image,Ve,!1,r.maxTextureSize);Q=He(w,Q);let rt=g(Q)||o,Ke=s.convert(w.format,w.colorSpace),De=s.convert(w.type),we=b(w.internalFormat,Ke,De,w.colorSpace,w.isVideoTexture);W(ee,w,rt);let fe,Oe=w.mipmaps,nt=o&&w.isVideoTexture!==!0&&we!==hu,gt=_e.__version===void 0||j===!0,qe=L(w,Q,rt);if(w.isDepthTexture)we=i.DEPTH_COMPONENT,o?w.type===Cn?we=i.DEPTH_COMPONENT32F:w.type===Vn?we=i.DEPTH_COMPONENT24:w.type===fi?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:w.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pi&&we===i.DEPTH_COMPONENT&&w.type!==zo&&w.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Vn,De=s.convert(w.type)),w.format===Ji&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,w.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=fi,De=s.convert(w.type))),gt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,Ke,De,null));else if(w.isDataTexture)if(Oe.length>0&&rt){nt&&gt&&t.texStorage2D(i.TEXTURE_2D,qe,we,Oe[0].width,Oe[0].height);for(let re=0,P=Oe.length;re<P;re++)fe=Oe[re],nt?t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe.width,fe.height,Ke,De,fe.data):t.texImage2D(i.TEXTURE_2D,re,we,fe.width,fe.height,0,Ke,De,fe.data);w.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(i.TEXTURE_2D,qe,we,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Ke,De,Q.data)):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,Ke,De,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,we,Oe[0].width,Oe[0].height,Q.depth);for(let re=0,P=Oe.length;re<P;re++)fe=Oe[re],w.format!==tn?Ke!==null?nt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,Q.depth,Ke,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,we,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,Q.depth,Ke,De,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,we,fe.width,fe.height,Q.depth,0,Ke,De,fe.data)}else{nt&&gt&&t.texStorage2D(i.TEXTURE_2D,qe,we,Oe[0].width,Oe[0].height);for(let re=0,P=Oe.length;re<P;re++)fe=Oe[re],w.format!==tn?Ke!==null?nt?t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,fe.width,fe.height,Ke,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe.width,fe.height,Ke,De,fe.data):t.texImage2D(i.TEXTURE_2D,re,we,fe.width,fe.height,0,Ke,De,fe.data)}else if(w.isDataArrayTexture)nt?(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,we,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ke,De,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,Ke,De,Q.data);else if(w.isData3DTexture)nt?(gt&&t.texStorage3D(i.TEXTURE_3D,qe,we,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ke,De,Q.data)):t.texImage3D(i.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,Ke,De,Q.data);else if(w.isFramebufferTexture){if(gt)if(nt)t.texStorage2D(i.TEXTURE_2D,qe,we,Q.width,Q.height);else{let re=Q.width,P=Q.height;for(let oe=0;oe<qe;oe++)t.texImage2D(i.TEXTURE_2D,oe,we,re,P,0,Ke,De,null),re>>=1,P>>=1}}else if(Oe.length>0&&rt){nt&&gt&&t.texStorage2D(i.TEXTURE_2D,qe,we,Oe[0].width,Oe[0].height);for(let re=0,P=Oe.length;re<P;re++)fe=Oe[re],nt?t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ke,De,fe):t.texImage2D(i.TEXTURE_2D,re,we,Ke,De,fe);w.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(i.TEXTURE_2D,qe,we,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke,De,Q)):t.texImage2D(i.TEXTURE_2D,0,we,Ke,De,Q);y(w,rt)&&v(ee),_e.__version=ne.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function me(E,w,z){if(w.image.length!==6)return;let ee=J(E,w),j=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let ne=n.get(j);if(j.version!==ne.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);let _e=st.getPrimaries(st.workingColorSpace),ce=w.colorSpace===nn?null:st.getPrimaries(w.colorSpace),de=w.colorSpace===nn||_e===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,Ve=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Ae&&!Ve?Q[re]=x(w.image[re],!1,!0,r.maxCubemapSize):Q[re]=Ve?w.image[re].image:w.image[re],Q[re]=He(w,Q[re]);let rt=Q[0],Ke=g(rt)||o,De=s.convert(w.format,w.colorSpace),we=s.convert(w.type),fe=b(w.internalFormat,De,we,w.colorSpace),Oe=o&&w.isVideoTexture!==!0,nt=ne.__version===void 0||ee===!0,gt=L(w,rt,Ke);W(i.TEXTURE_CUBE_MAP,w,Ke);let qe;if(Ae){Oe&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,gt,fe,rt.width,rt.height);for(let re=0;re<6;re++){qe=Q[re].mipmaps;for(let P=0;P<qe.length;P++){let oe=qe[P];w.format!==tn?De!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,De,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,De,we,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,fe,oe.width,oe.height,0,De,we,oe.data)}}}else{qe=w.mipmaps,Oe&&nt&&(qe.length>0&&gt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,gt,fe,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(Ve){Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,De,we,Q[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,Q[re].width,Q[re].height,0,De,we,Q[re].data);for(let P=0;P<qe.length;P++){let le=qe[P].image[re].image;Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,le.width,le.height,De,we,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,fe,le.width,le.height,0,De,we,le.data)}}else{Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,we,Q[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,De,we,Q[re]);for(let P=0;P<qe.length;P++){let oe=qe[P];Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,De,we,oe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,fe,De,we,oe.image[re])}}}y(w,Ke)&&v(i.TEXTURE_CUBE_MAP),ne.__version=j.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function pe(E,w,z,ee,j,ne){let _e=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),de=b(z.internalFormat,_e,ce,z.colorSpace);if(!n.get(w).__hasExternalTextures){let Ve=Math.max(1,w.width>>ne),Q=Math.max(1,w.height>>ne);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ne,de,Ve,Q,w.depth,0,_e,ce,null):t.texImage2D(j,ne,de,Ve,Q,0,_e,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ge(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,n.get(z).__webglTexture,0,Ue(w)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,n.get(z).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(E,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),w.depthBuffer&&!w.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||ge(w)){let j=w.depthTexture;j&&j.isDepthTexture&&(j.type===Cn?ee=i.DEPTH_COMPONENT32F:j.type===Vn&&(ee=i.DEPTH_COMPONENT24));let ne=Ue(w);ge(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,ee,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ee,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(w.depthBuffer&&w.stencilBuffer){let ee=Ue(w);z&&ge(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,w.width,w.height):ge(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let j=0;j<ee.length;j++){let ne=ee[j],_e=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),de=b(ne.internalFormat,_e,ce,ne.colorSpace),Ae=Ue(w);z&&ge(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,de,w.width,w.height):ge(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,de,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,de,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let ee=n.get(w.depthTexture).__webglTexture,j=Ue(w);if(w.depthTexture.format===pi)ge(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(w.depthTexture.format===Ji)ge(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ce(E){let w=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Fe(w.__webglFramebuffer,E)}else if(z){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=i.createRenderbuffer(),Ie(w.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Ie(w.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(E,w,z){let ee=n.get(E);w!==void 0&&pe(ee.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ce(E)}function O(E){let w=E.texture,z=n.get(E),ee=n.get(w);E.addEventListener("dispose",B),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=w.version,a.memory.textures++);let j=E.isWebGLCubeRenderTarget===!0,ne=E.isWebGLMultipleRenderTargets===!0,_e=g(E)||o;if(j){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let de=0;de<w.mipmaps.length;de++)z.__webglFramebuffer[ce][de]=i.createFramebuffer()}else z.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)z.__webglFramebuffer[ce]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ne)if(r.drawBuffers){let ce=E.texture;for(let de=0,Ae=ce.length;de<Ae;de++){let Ve=n.get(ce[de]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ge(E)===!1){let ce=ne?w:[w];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){let Ae=ce[de];z.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[de]);let Ve=s.convert(Ae.format,Ae.colorSpace),Q=s.convert(Ae.type),rt=b(Ae.internalFormat,Ve,Q,Ae.colorSpace,E.isXRRenderTarget===!0),Ke=Ue(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,z.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),W(i.TEXTURE_CUBE_MAP,w,_e);for(let ce=0;ce<6;ce++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)pe(z.__webglFramebuffer[ce][de],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else pe(z.__webglFramebuffer[ce],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(w,_e)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let ce=E.texture;for(let de=0,Ae=ce.length;de<Ae;de++){let Ve=ce[de],Q=n.get(Ve);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),W(i.TEXTURE_2D,Ve,_e),pe(z.__webglFramebuffer,E,Ve,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),y(Ve,_e)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),W(ce,w,_e),o&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)pe(z.__webglFramebuffer[de],E,w,i.COLOR_ATTACHMENT0,ce,de);else pe(z.__webglFramebuffer,E,w,i.COLOR_ATTACHMENT0,ce,0);y(w,_e)&&v(ce),t.unbindTexture()}E.depthBuffer&&Ce(E)}function kt(E){let w=g(E)||o,z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,j=z.length;ee<j;ee++){let ne=z[ee];if(y(ne,w)){let _e=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(ne).__webglTexture;t.bindTexture(_e,ce),v(_e),t.unbindTexture()}}}function be(E){if(o&&E.samples>0&&ge(E)===!1){let w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],z=E.width,ee=E.height,j=i.COLOR_BUFFER_BIT,ne=[],_e=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(E),de=E.isWebGLMultipleRenderTargets===!0;if(de)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){ne.push(i.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&ne.push(_e);let Ve=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ve===!1&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]),Ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),de){let Q=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,ee,0,0,z,ee,j,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]);let Ve=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ue(E){return Math.min(r.maxSamples,E.samples)}function ge(E){let w=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function dt(E){let w=a.render.frame;u.get(E)!==w&&(u.set(E,w),E.update())}function He(E,w){let z=E.colorSpace,ee=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===so||z!==In&&z!==nn&&(st.getTransfer(z)===ht?o===!1?e.has("EXT_sRGB")===!0&&ee===tn?(E.format=so,E.minFilter=en,E.generateMipmaps=!1):w=Ts.sRGBToLinear(w):(ee!==tn||j!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}this.allocateTextureUnit=D,this.resetTextureUnits=te,this.setTexture2D=F,this.setTexture2DArray=Z,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Qe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ge}function hg(i,e,t){let n=t.isWebGL2;function r(s,a=nn){let o,l=st.getTransfer(a);if(s===Xn)return i.UNSIGNED_BYTE;if(s===au)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ou)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Gh)return i.BYTE;if(s===Wh)return i.SHORT;if(s===zo)return i.UNSIGNED_SHORT;if(s===su)return i.INT;if(s===Vn)return i.UNSIGNED_INT;if(s===Cn)return i.FLOAT;if(s===br)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xh)return i.ALPHA;if(s===tn)return i.RGBA;if(s===qh)return i.LUMINANCE;if(s===Yh)return i.LUMINANCE_ALPHA;if(s===pi)return i.DEPTH_COMPONENT;if(s===Ji)return i.DEPTH_STENCIL;if(s===so)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Zh)return i.RED;if(s===lu)return i.RED_INTEGER;if(s===Kh)return i.RG;if(s===cu)return i.RG_INTEGER;if(s===uu)return i.RGBA_INTEGER;if(s===Ma||s===Sa||s===ba||s===Ea)if(l===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tl||s===Al||s===Rl||s===Cl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ll||s===Pl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ll)return l===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Pl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===Dl||s===Ul||s===Nl||s===Bl||s===Fl||s===Ol||s===kl||s===zl||s===Hl||s===Vl||s===Gl||s===Wl||s===Xl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Il)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ul)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ol)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ta||s===ql||s===Yl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ta)return l===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jh||s===Zl||s===Kl||s===Jl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ta)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}var wo=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pn=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dg={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mo=class extends Yn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null,x=t.getContextAttributes(),g=null,m=null,y=[],v=[],b=new We,L=null,R=new bt;R.layers.enable(1),R.viewport=new Je;let C=new bt;C.layers.enable(2),C.viewport=new Je;let B=[R,C],M=new wo;M.layers.enable(1),M.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=y[W];return J===void 0&&(J=new wr,y[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=y[W];return J===void 0&&(J=new wr,y[W]=J),J.getGripSpace()},this.getHand=function(W){let J=y[W];return J===void 0&&(J=new wr,y[W]=J),J.getHandSpace()};function Y(W){let J=v.indexOf(W.inputSource);if(J===-1)return;let ae=y[J];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||a),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function te(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",D);for(let W=0;W<y.length;W++){let J=v[W];J!==null&&(v[W]=null,y[W].disconnect(J))}T=null,V=null,e.setRenderTarget(g),f=null,d=null,h=null,r=null,m=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",te),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Dn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ae=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=x.stencil?Ji:pi,ae=x.stencil?fi:Vn);let pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Dn(d.textureWidth,d.textureHeight,{format:tn,type:Xn,depthTexture:new Ns(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ie=e.properties.get(m);Ie.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(W){for(let J=0;J<W.removed.length;J++){let ae=W.removed[J],me=v.indexOf(ae);me>=0&&(v[me]=null,y[me].disconnect(ae))}for(let J=0;J<W.added.length;J++){let ae=W.added[J],me=v.indexOf(ae);if(me===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=v.length){v.push(ae),me=Ie;break}else if(v[Ie]===null){v[Ie]=ae,me=Ie;break}if(me===-1)break}let pe=y[me];pe&&pe.connect(ae)}}let U=new I,F=new I;function Z(W,J,ae){U.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(ae.matrixWorld);let me=U.distanceTo(F),pe=J.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Fe=pe[14]/(pe[10]-1),Ce=pe[14]/(pe[10]+1),Qe=(pe[9]+1)/pe[5],O=(pe[9]-1)/pe[5],kt=(pe[8]-1)/pe[0],be=(Ie[8]+1)/Ie[0],Ue=Fe*kt,ge=Fe*be,dt=me/(-kt+be),He=dt*-kt;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(dt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let E=Fe+dt,w=Ce+dt,z=Ue-He,ee=ge+(me-He),j=Qe*Ce/w*E,ne=O*Ce/w*E;W.projectionMatrix.makePerspective(z,ee,j,ne,E,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;M.near=C.near=R.near=W.near,M.far=C.far=R.far=W.far,(T!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,V=M.far);let J=W.parent,ae=M.cameras;q(M,J);for(let me=0;me<ae.length;me++)q(ae[me],J);ae.length===2?Z(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),X(W,M,J)};function X(W,J,ae){ae===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=$i*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let K=null;function $(W,J){if(u=J.getViewerPose(c||a),_=J,u!==null){let ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let me=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let pe=0;pe<ae.length;pe++){let Ie=ae[pe],Fe=null;if(f!==null)Fe=f.getViewport(Ie);else{let Qe=h.getViewSubImage(d,Ie);Fe=Qe.viewport,pe===0&&(e.setRenderTargetTextures(m,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(m))}let Ce=B[pe];Ce===void 0&&(Ce=new bt,Ce.layers.enable(pe),Ce.viewport=new Je,B[pe]=Ce),Ce.matrix.fromArray(Ie.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ie.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),pe===0&&(M.matrix.copy(Ce.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(Ce)}}for(let ae=0;ae<y.length;ae++){let me=v[ae],pe=y[ae];me!==null&&pe!==void 0&&pe.update(me,J,c||a)}K&&K(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let ie=new _u;ie.setAnimationLoop($),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}};function fg(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Yt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Yt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pg(i,e,t,n){let r={},s={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=r[y.id];b===void 0&&(_(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",g));let L=v.program;n.updateUBOMapping(y,L);let R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function u(y){let v=h();y.__bindingPointIndex=v;let b=i.createBuffer(),L=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=r[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,C=b.length;R<C;R++){let B=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,T=B.length;M<T;M++){let V=B[M];if(f(V,R,M,L)===!0){let Y=V.__offset,te=Array.isArray(V.value)?V.value:[V.value],D=0;for(let U=0;U<te.length;U++){let F=te[U],Z=x(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Y+D,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,b,L){let R=y.value,C=v+"_"+b;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{let B=L[C];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return L[C]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function _(y){let v=y.uniforms,b=0,L=16;for(let C=0,B=v.length;C<B;C++){let M=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,V=M.length;T<V;T++){let Y=M[T],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let D=0,U=te.length;D<U;D++){let F=te[D],Z=x(F),q=b%L;q!==0&&L-q<Z.boundary&&(b+=L-q),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=Z.storage}}}let R=b%L;return R>0&&(b+=L-R),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}var Cr=class{constructor(e={}){let{canvas:t=Md(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),_=new Int32Array(4),x=null,g=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;let v=this,b=!1,L=0,R=0,C=null,B=-1,M=null,T=new Je,V=new Je,Y=null,te=new Me(0),D=0,U=t.width,F=t.height,Z=1,q=null,X=null,K=new Je(0,0,U,F),$=new Je(0,0,U,F),ie=!1,W=new Rr,J=!1,ae=!1,me=null,pe=new xe,Ie=new We,Fe=new I,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return C===null?Z:1}let O=n;function kt(S,N){for(let H=0;H<S.length;H++){let G=S[H],k=t.getContext(G,N);if(k!==null)return k}return null}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),O=kt(N,S),O===null)throw kt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let be,Ue,ge,dt,He,E,w,z,ee,j,ne,_e,ce,de,Ae,Ve,Q,rt,Ke,De,we,fe,Oe,nt;function gt(){be=new D0(O),Ue=new A0(O,be,e),be.init(Ue),fe=new hg(O,be,Ue),ge=new cg(O,be,Ue),dt=new B0(O),He=new $m,E=new ug(O,be,ge,He,Ue,fe,dt),w=new C0(v),z=new I0(v),ee=new Gd(O,Ue),Oe=new E0(O,be,ee,Ue),j=new U0(O,ee,dt,Oe),ne=new z0(O,j,ee,dt),Ke=new k0(O,Ue,E),Ve=new R0(He),_e=new Jm(v,w,z,be,Ue,Oe,Ve),ce=new fg(v,He),de=new jm,Ae=new sg(be,Ue),rt=new b0(v,w,z,ge,ne,d,l),Q=new lg(v,ne,Ue),nt=new pg(O,dt,Ue,ge),De=new T0(O,be,dt,Ue),we=new N0(O,be,dt,Ue),dt.programs=_e.programs,v.capabilities=Ue,v.extensions=be,v.properties=He,v.renderLists=de,v.shadowMap=Q,v.state=ge,v.info=dt}gt();let qe=new Mo(v,O);this.xr=qe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(U,F,!1))},this.getSize=function(S){return S.set(U,F)},this.setSize=function(S,N,H=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,F=N,t.width=Math.floor(S*Z),t.height=Math.floor(N*Z),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(U*Z,F*Z).floor()},this.setDrawingBufferSize=function(S,N,H){U=S,F=N,Z=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,N,H,G){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,N,H,G),ge.viewport(T.copy(K).multiplyScalar(Z).floor())},this.getScissor=function(S){return S.copy($)},this.setScissor=function(S,N,H,G){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,N,H,G),ge.scissor(V.copy($).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){ge.setScissorTest(ie=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,N=!0,H=!0){let G=0;if(S){let k=!1;if(C!==null){let ue=C.texture.format;k=ue===uu||ue===cu||ue===lu}if(k){let ue=C.texture.type,ve=ue===Xn||ue===Vn||ue===zo||ue===fi||ue===au||ue===ou,Te=rt.getClearColor(),Pe=rt.getClearAlpha(),Ge=Te.r,Ne=Te.g,Be=Te.b;ve?(f[0]=Ge,f[1]=Ne,f[2]=Be,f[3]=Pe,O.clearBufferuiv(O.COLOR,0,f)):(_[0]=Ge,_[1]=Ne,_[2]=Be,_[3]=Pe,O.clearBufferiv(O.COLOR,0,_))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),Ae.dispose(),He.dispose(),w.dispose(),z.dispose(),ne.dispose(),Oe.dispose(),nt.dispose(),_e.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",zt),qe.removeEventListener("sessionend",ct),me&&(me.dispose(),me=null),Ht.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let S=dt.autoReset,N=Q.enabled,H=Q.autoUpdate,G=Q.needsUpdate,k=Q.type;gt(),dt.autoReset=S,Q.enabled=N,Q.autoUpdate=H,Q.needsUpdate=G,Q.type=k}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){let N=S.target;N.removeEventListener("dispose",le),Le(N)}function Le(S){Ee(S),He.remove(S)}function Ee(S){let N=He.get(S).programs;N!==void 0&&(N.forEach(function(H){_e.releaseProgram(H)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,G,k,ue){N===null&&(N=Ce);let ve=k.isMesh&&k.matrixWorld.determinant()<0,Te=Qu(S,N,H,G,k);ge.setMaterial(G,ve);let Pe=H.index,Ge=1;if(G.wireframe===!0){if(Pe=j.getWireframeAttribute(H),Pe===void 0)return;Ge=2}let Ne=H.drawRange,Be=H.attributes.position,yt=Ne.start*Ge,Zt=(Ne.start+Ne.count)*Ge;ue!==null&&(yt=Math.max(yt,ue.start*Ge),Zt=Math.min(Zt,(ue.start+ue.count)*Ge)),Pe!==null?(yt=Math.max(yt,0),Zt=Math.min(Zt,Pe.count)):Be!=null&&(yt=Math.max(yt,0),Zt=Math.min(Zt,Be.count));let Rt=Zt-yt;if(Rt<0||Rt===1/0)return;Oe.setup(k,G,Te,H,Pe);let yn,ft=De;if(Pe!==null&&(yn=ee.get(Pe),ft=we,ft.setIndex(yn)),k.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Qe()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(k.isLine){let Ye=G.linewidth;Ye===void 0&&(Ye=1),ge.setLineWidth(Ye*Qe()),k.isLineSegments?ft.setMode(O.LINES):k.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else k.isPoints?ft.setMode(O.POINTS):k.isSprite&&ft.setMode(O.TRIANGLES);if(k.isBatchedMesh)ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ft.renderInstances(yt,Rt,k.count);else if(H.isInstancedBufferGeometry){let Ye=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ga=Math.min(H.instanceCount,Ye);ft.renderInstances(yt,Rt,ga)}else ft.render(yt,Rt)};function ot(S,N,H){S.transparent===!0&&S.side===hn&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,Wr(S,N,H),S.side=qn,S.needsUpdate=!0,Wr(S,N,H),S.side=hn):Wr(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),g=Ae.get(H),g.init(),y.push(g),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),S!==H&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights(v._useLegacyLights);let G=new Set;return S.traverse(function(k){let ue=k.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let Te=ue[ve];ot(Te,H,k),G.add(Te)}else ot(ue,H,k),G.add(ue)}),y.pop(),g=null,G},this.compileAsync=function(S,N,H=null){let G=this.compile(S,N,H);return new Promise(k=>{function ue(){if(G.forEach(function(ve){He.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){k(S);return}setTimeout(ue,10)}be.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let lt=null;function At(S){lt&&lt(S)}function zt(){Ht.stop()}function ct(){Ht.start()}let Ht=new _u;Ht.setAnimationLoop(At),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(S){lt=S,qe.setAnimationLoop(S),S===null?Ht.stop():Ht.start()},qe.addEventListener("sessionstart",zt),qe.addEventListener("sessionend",ct),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(N),N=qe.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,C),g=Ae.get(S,y.length),g.init(),y.push(g),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,J=Ve.init(this.clippingPlanes,ae),x=de.get(S,m.length),x.init(),m.push(x),fn(S,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(q,X),this.info.render.frame++,J===!0&&Ve.beginShadows();let H=g.state.shadowsArray;if(Q.render(H,S,N),J===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(x,S),g.setupLights(v._useLegacyLights),N.isArrayCamera){let G=N.cameras;for(let k=0,ue=G.length;k<ue;k++){let ve=G[k];dl(x,S,ve,ve.viewport)}}else dl(x,S,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,N),Oe.resetDefaultState(),B=-1,M=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function fn(S,N,H,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){G&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);let ve=ne.update(S),Te=S.material;Te.visible&&x.push(S,ve,Te,H,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){let ve=ne.update(S),Te=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Fe.copy(ve.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(Te)){let Pe=ve.groups;for(let Ge=0,Ne=Pe.length;Ge<Ne;Ge++){let Be=Pe[Ge],yt=Te[Be.materialIndex];yt&&yt.visible&&x.push(S,ve,yt,H,Fe.z,Be)}}else Te.visible&&x.push(S,ve,Te,H,Fe.z,null)}}let ue=S.children;for(let ve=0,Te=ue.length;ve<Te;ve++)fn(ue[ve],N,H,G)}function dl(S,N,H,G){let k=S.opaque,ue=S.transmissive,ve=S.transparent;g.setupLightsView(H),J===!0&&Ve.setGlobalState(v.clippingPlanes,H),ue.length>0&&$u(k,ue,N,H),G&&ge.viewport(T.copy(G)),k.length>0&&Gr(k,N,H),ue.length>0&&Gr(ue,N,H),ve.length>0&&Gr(ve,N,H),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function $u(S,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ue=Ue.isWebGL2;me===null&&(me=new Dn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?br:Xn,minFilter:Sr,samples:ue?4:0})),v.getDrawingBufferSize(Ie),ue?me.setSize(Ie.x,Ie.y):me.setSize(Es(Ie.x),Es(Ie.y));let ve=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(te),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();let Te=v.toneMapping;v.toneMapping=Wn,Gr(S,H,G),E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me);let Pe=!1;for(let Ge=0,Ne=N.length;Ge<Ne;Ge++){let Be=N[Ge],yt=Be.object,Zt=Be.geometry,Rt=Be.material,yn=Be.group;if(Rt.side===hn&&yt.layers.test(G.layers)){let ft=Rt.side;Rt.side=Yt,Rt.needsUpdate=!0,fl(yt,H,G,Zt,Rt,yn),Rt.side=ft,Rt.needsUpdate=!0,Pe=!0}}Pe===!0&&(E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me)),v.setRenderTarget(ve),v.setClearColor(te,D),v.toneMapping=Te}function Gr(S,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,ue=S.length;k<ue;k++){let ve=S[k],Te=ve.object,Pe=ve.geometry,Ge=G===null?ve.material:G,Ne=ve.group;Te.layers.test(H.layers)&&fl(Te,N,H,Pe,Ge,Ne)}}function fl(S,N,H,G,k,ue){S.onBeforeRender(v,N,H,G,k,ue),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(v,N,H,G,S,ue),k.transparent===!0&&k.side===hn&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,v.renderBufferDirect(H,N,G,k,S,ue),k.side=qn,k.needsUpdate=!0,v.renderBufferDirect(H,N,G,k,S,ue),k.side=hn):v.renderBufferDirect(H,N,G,k,S,ue),S.onAfterRender(v,N,H,G,k,ue)}function Wr(S,N,H){N.isScene!==!0&&(N=Ce);let G=He.get(S),k=g.state.lights,ue=g.state.shadowsArray,ve=k.state.version,Te=_e.getParameters(S,k.state,ue,N,H),Pe=_e.getProgramCacheKey(Te),Ge=G.programs;G.environment=S.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(S.isMeshStandardMaterial?z:w).get(S.envMap||G.environment),Ge===void 0&&(S.addEventListener("dispose",le),Ge=new Map,G.programs=Ge);let Ne=Ge.get(Pe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===ve)return ml(S,Te),Ne}else Te.uniforms=_e.getUniforms(S),S.onBuild(H,Te,v),S.onBeforeCompile(Te,v),Ne=_e.acquireProgram(Te,Pe),Ge.set(Pe,Ne),G.uniforms=Te.uniforms;let Be=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=Ve.uniform),ml(S,Te),G.needsLights=eh(S),G.lightsStateVersion=ve,G.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function pl(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=qi.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ml(S,N){let H=He.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Qu(S,N,H,G,k){N.isScene!==!0&&(N=Ce),E.resetTextureUnits();let ue=N.fog,ve=G.isMeshStandardMaterial?N.environment:null,Te=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:In,Pe=(G.isMeshStandardMaterial?z:w).get(G.envMap||ve),Ge=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!H.morphAttributes.position,yt=!!H.morphAttributes.normal,Zt=!!H.morphAttributes.color,Rt=Wn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Rt=v.toneMapping);let yn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=yn!==void 0?yn.length:0,Ye=He.get(G),ga=g.state.lights;if(J===!0&&(ae===!0||S!==M)){let Qt=S===M&&G.id===B;Ve.setState(G,S,Qt)}let _t=!1;G.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ga.state.version||Ye.outputColorSpace!==Te||k.isBatchedMesh&&Ye.batching===!1||!k.isBatchedMesh&&Ye.batching===!0||k.isInstancedMesh&&Ye.instancing===!1||!k.isInstancedMesh&&Ye.instancing===!0||k.isSkinnedMesh&&Ye.skinning===!1||!k.isSkinnedMesh&&Ye.skinning===!0||k.isInstancedMesh&&Ye.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ye.instancingColor===!1&&k.instanceColor!==null||Ye.envMap!==Pe||G.fog===!0&&Ye.fog!==ue||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ve.numPlanes||Ye.numIntersection!==Ve.numIntersection)||Ye.vertexAlphas!==Ge||Ye.vertexTangents!==Ne||Ye.morphTargets!==Be||Ye.morphNormals!==yt||Ye.morphColors!==Zt||Ye.toneMapping!==Rt||Ue.isWebGL2===!0&&Ye.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,Ye.__version=G.version);let ri=Ye.currentProgram;_t===!0&&(ri=Wr(G,N,k));let gl=!1,dr=!1,_a=!1,Bt=ri.getUniforms(),si=Ye.uniforms;if(ge.useProgram(ri.program)&&(gl=!0,dr=!0,_a=!0),G.id!==B&&(B=G.id,dr=!0),gl||M!==S){Bt.setValue(O,"projectionMatrix",S.projectionMatrix),Bt.setValue(O,"viewMatrix",S.matrixWorldInverse);let Qt=Bt.map.cameraPosition;Qt!==void 0&&Qt.setValue(O,Fe.setFromMatrixPosition(S.matrixWorld)),Ue.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,dr=!0,_a=!0)}if(k.isSkinnedMesh){Bt.setOptional(O,k,"bindMatrix"),Bt.setOptional(O,k,"bindMatrixInverse");let Qt=k.skeleton;Qt&&(Ue.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Bt.setValue(O,"boneTexture",Qt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Bt.setOptional(O,k,"batchingTexture"),Bt.setValue(O,"batchingTexture",k._matricesTexture,E));let va=H.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&Ue.isWebGL2===!0)&&Ke.update(k,H,ri),(dr||Ye.receiveShadow!==k.receiveShadow)&&(Ye.receiveShadow=k.receiveShadow,Bt.setValue(O,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(si.envMap.value=Pe,si.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),dr&&(Bt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&ju(si,_a),ue&&G.fog===!0&&ce.refreshFogUniforms(si,ue),ce.refreshMaterialUniforms(si,G,Z,F,me),qi.upload(O,pl(Ye),si,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qi.upload(O,pl(Ye),si,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Bt.setValue(O,"center",k.center),Bt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Bt.setValue(O,"normalMatrix",k.normalMatrix),Bt.setValue(O,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Qt=G.uniformsGroups;for(let xa=0,th=Qt.length;xa<th;xa++)if(Ue.isWebGL2){let _l=Qt[xa];nt.update(_l,ri),nt.bind(_l,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function ju(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function eh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,N,H){He.get(S.texture).__webglTexture=N,He.get(S.depthTexture).__webglTexture=H;let G=He.get(S);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let H=He.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){C=S,L=N,R=H;let G=!0,k=null,ue=!1,ve=!1;if(S){let Pe=He.get(S);Pe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):Pe.__webglFramebuffer===void 0?E.setupRenderTarget(S):Pe.__hasExternalTextures&&E.rebindTextures(S,He.get(S.texture).__webglTexture,He.get(S.depthTexture).__webglTexture);let Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ve=!0);let Ne=He.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?k=Ne[N][H]:k=Ne[N],ue=!0):Ue.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?k=He.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[H]:k=Ne,T.copy(S.viewport),V.copy(S.scissor),Y=S.scissorTest}else T.copy(K).multiplyScalar(Z).floor(),V.copy($).multiplyScalar(Z).floor(),Y=ie;if(ge.bindFramebuffer(O.FRAMEBUFFER,k)&&Ue.drawBuffers&&G&&ge.drawBuffers(S,k),ge.viewport(T),ge.scissor(V),ge.setScissorTest(Y),ue){let Pe=He.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,H)}else if(ve){let Pe=He.get(S.texture),Ge=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,H||0,Ge)}B=-1},this.readRenderTargetPixels=function(S,N,H,G,k,ue,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=He.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){ge.bindFramebuffer(O.FRAMEBUFFER,Te);try{let Pe=S.texture,Ge=Pe.format,Ne=Pe.type;if(Ge!==tn&&fe.convert(Ge)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Ne===br&&(be.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ne!==Xn&&fe.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Cn&&(Ue.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&H>=0&&H<=S.height-k&&O.readPixels(N,H,G,k,fe.convert(Ge),fe.convert(Ne),ue)}finally{let Pe=C!==null?He.get(C).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(S,N,H=0){let G=Math.pow(2,-H),k=Math.floor(N.image.width*G),ue=Math.floor(N.image.height*G);E.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,S.x,S.y,k,ue),ge.unbindTexture()},this.copyTextureToTexture=function(S,N,H,G=0){let k=N.image.width,ue=N.image.height,ve=fe.convert(H.format),Te=fe.convert(H.type);E.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,S.x,S.y,k,ue,ve,Te,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,S.x,S.y,ve,Te,N.image),G===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H,G,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=S.max.x-S.min.x+1,ve=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Pe=fe.convert(G.format),Ge=fe.convert(G.type),Ne;if(G.isData3DTexture)E.setTexture3D(G,0),Ne=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Ne=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let Be=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zt=O.getParameter(O.UNPACK_SKIP_PIXELS),Rt=O.getParameter(O.UNPACK_SKIP_ROWS),yn=O.getParameter(O.UNPACK_SKIP_IMAGES),ft=H.isCompressedTexture?H.mipmaps[k]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Ne,k,N.x,N.y,N.z,ue,ve,Te,Pe,Ge,ft.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,k,N.x,N.y,N.z,ue,ve,Te,Pe,ft.data)):O.texSubImage3D(Ne,k,N.x,N.y,N.z,ue,ve,Te,Pe,Ge,ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yn),k===0&&G.generateMipmaps&&O.generateMipmap(Ne),ge.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){L=0,R=0,C=null,ge.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ho?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?mi:du}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?ut:In}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},So=class extends Cr{};So.prototype.isWebGL1Renderer=!0;var Bs=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Hc=new I,Vc=new Je,Gc=new Je,mg=new I,Wc=new xe,fs=new I,Ja=new Kn,Xc=new xe,$a=new Tr,Fs=class extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bl,this.bindMatrix=new xe,this.bindMatrixInverse=new xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fs),this.boundingBox.expandByPoint(fs)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fs),this.boundingSphere.expandByPoint(fs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(r),e.ray.intersectsSphere(Ja)!==!1&&(Xc.copy(r).invert(),$a.copy(e.ray).applyMatrix4(Xc),!(this.boundingBox!==null&&$a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$a)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Vc.fromBufferAttribute(r.attributes.skinIndex,e),Gc.fromBufferAttribute(r.attributes.skinWeight,e),Hc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Gc.getComponent(s);if(a!==0){let o=Vc.getComponent(s);Wc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mg.copy(Hc).applyMatrix4(Wc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},tr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},bo=class extends Ut{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Pt,u=Pt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qc=new xe,gg=new xe,Os=class i{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:gg;qc.multiplyMatrices(o,t[s]),qc.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new bo(t,e,e,tn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new tr),this.bones.push(a),this.boneInverses.push(new xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}};var Lr=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yc=new I,Zc=new I,Kc=new xe,Qa=new Tr,ps=new Kn,ks=class extends mt{constructor(e=new sn,t=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Yc.fromBufferAttribute(t,r-1),Zc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;Kc.copy(r).invert(),Qa.copy(e.ray).applyMatrix4(Kc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,f=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){let m=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let v=m,b=y-1;v<b;v+=f){let L=_.getX(v),R=_.getX(v+1);if(c.fromBufferAttribute(g,L),u.fromBufferAttribute(g,R),Qa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=m,b=y-1;v<b;v+=f){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Qa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};var zs=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);let u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new We:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,r=[],s=[],a=[],o=new I,l=new xe;for(let f=0;f<=e;f++){let _=f/e;r[f]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(It(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(It(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var _g={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Su(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,f;if(n&&(s=Mg(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let _=t;_<r;_+=t)h=i[_],d=i[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Pr(s,a,t,o,l,f,0),a}};function Su(i,e,t,n,r){let s,a;if(r===Dg(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Jc(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Jc(s,i[s],i[s+1],a);return a&&na(a,a.next)&&(Dr(a),a=a.next),a}function gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(na(t,t.next)||pt(t.prev,t,t.next)===0)){if(Dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Ag(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?xg(i,n,r,s):vg(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yg(gi(i),e,t),Pr(i,e,t,n,r,s,2)):a===2&&wg(i,e,t,n,r,s):Pr(gi(i),e,t,n,r,s,1);break}}}function vg(i){let e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&Gi(r,o,s,l,a,c,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xg(i,e,t,n){let r=i.prev,s=i,a=i.next;if(pt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,x=o>l?o>c?o:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=Eo(f,_,e,t,n),y=Eo(x,g,e,t,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=m&&b&&b.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=_&&v.y<=g&&v!==r&&v!==a&&Gi(o,u,l,h,c,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=f&&b.x<=x&&b.y>=_&&b.y<=g&&b!==r&&b!==a&&Gi(o,u,l,h,c,d,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=_&&v.y<=g&&v!==r&&v!==a&&Gi(o,u,l,h,c,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=_&&b.y<=g&&b!==r&&b!==a&&Gi(o,u,l,h,c,d,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function yg(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!na(r,s)&&bu(r,n,n.next,s)&&Ir(r,s)&&Ir(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Dr(n),Dr(n.next),n=i=s),n=n.next}while(n!==i);return gi(n)}function wg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lg(a,o)){let l=Eu(a,o);a=gi(a,a.next),l=gi(l,l.next),Pr(a,e,t,n,r,s,0),Pr(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Mg(i,e,t,n){let r=[],s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Su(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Cg(c));for(r.sort(Sg),s=0;s<r.length;s++)t=bg(r[s],t);return t}function Sg(i,e){return i.x-e.x}function bg(i,e){let t=Eg(i,e);if(!t)return e;let n=Eu(t,i);return gi(n,n.next),gi(t,t.next)}function Eg(i,e){let t=e,n=-1/0,r,s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Gi(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Ir(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Tg(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function Tg(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function Ag(i,e,t,n){let r=i;do r.z===0&&(r.z=Eo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Rg(r)}function Rg(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Eo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Pg(i,e)&&(Ir(i,e)&&Ir(e,i)&&Ig(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||na(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function na(i,e){return i.x===e.x&&i.y===e.y}function bu(i,e,t,n){let r=gs(pt(i,e,t)),s=gs(pt(i,e,n)),a=gs(pt(t,n,i)),o=gs(pt(t,n,e));return!!(r!==s&&a!==o||r===0&&ms(i,t,e)||s===0&&ms(i,n,e)||a===0&&ms(t,i,n)||o===0&&ms(t,e,n))}function ms(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gs(i){return i>0?1:i<0?-1:0}function Pg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function Ig(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Eu(i,e){let t=new To(i.i,i.x,i.y),n=new To(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Jc(i,e,t,n){let r=new To(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function To(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dg(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}var Hs=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];$c(e),Qc(n,e);let a=e.length;t.forEach($c);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Qc(n,t[l]);let o=_g.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function $c(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ur=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var nr=class extends mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vs=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _s(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ug(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ng(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function jc(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Tu(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var ir=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends ir{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ql:s=e,o=2*t-n;break;case jl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:a=e,l=2*n-t;break;case jl:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(r-t),x=_*_,g=x*_,m=-d*g+2*d*x-d*_,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-f)*g+(1.5+f)*x+.5*_,b=f*g-f*x;for(let L=0;L!==o;++L)s[L]=m*a[u+L]+y*a[c+L]+v*a[l+L]+b*a[h+L];return s}},Ro=class extends ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},Co=class extends ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case Aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ug(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Aa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){let x=t[h+_];if(x!==t[d+_]||x!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=ys;var Jn=class extends an{};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=xs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends an{};Gs.prototype.ValueTypeName="color";var $n=class extends an{};$n.prototype.ValueTypeName="number";var Lo=class extends ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ze.slerpFlat(s,0,a,c-o,a,c,l);return s}},gn=class extends an{InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};gn.prototype.ValueTypeName="quaternion";gn.prototype.DefaultInterpolation=ys;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends an{};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=xs;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends an{};jn.prototype.ValueTypeName="vector";var Ws=class{constructor(e,t=-1,n,r=$h){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Fg(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(an.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=Ng(l);l=jc(l,1,u),c=jc(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new $n(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,_,x){if(f.length!==0){let g=[],m=[];Tu(f,g,m,_),g.length!==0&&x.push(new h(d,g,m))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)f[d[_].morphTargets[x]]=-1;for(let x in f){let g=[],m=[];for(let y=0;y!==d[_].morphTargets.length;++y){let v=d[_];g.push(v.time),m.push(v.morphTarget===x?1:0)}r.push(new $n(".morphTargetInfluence["+x+"]",g,m))}l=f.length*a}else{let f=".bones["+t[h].name+"]";n(jn,f+".position",d,"pos",r),n(gn,f+".quaternion",d,"rot",r),n(jn,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Bg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $n;case"vector":case"vector2":case"vector3":case"vector4":return jn;case"color":return Gs;case"quaternion":return gn;case"bool":case"boolean":return Jn;case"string":return Qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bg(i.type);if(i.times===void 0){let t=[],n=[];Tu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Xs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Po=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}},Og=new Po,_n=class{constructor(e){this.manager=e!==void 0?e:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_n.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},Io=class extends Error{constructor(e,t){super(e),this.response=t}},qs=class extends _n{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Xs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:r});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Tn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,_=f!==0,x=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:b})=>{if(v)m.close();else{x+=b.byteLength;let L=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let R=0,C=u.length;R<C;R++){let B=u[R];B.onProgress&&B.onProgress(L)}m.enqueue(b),y()}})}}});return new Response(g)}else throw new Io(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Xs.add(e,c);let u=Tn[e];delete Tn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Tn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Do=class extends _n{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Xs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Er("img");function l(){u(),Xs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var rr=class extends _n{constructor(e){super(e)}load(e,t,n,r){let s=new Ut,a=new Do(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},_i=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ys=class extends _i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ja=new xe,eu=new I,tu=new I,Nr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uo=class extends Nr{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=$i*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Zs=class extends _i{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Uo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nu=new xe,_r=new I,eo=new I,No=class extends Nr{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),r.makeTranslation(-_r.x,-_r.y,-_r.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},Br=class extends _i{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new No}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bo=class extends Nr{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends _i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Bo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ks=class extends _i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Js=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wo="\\[\\]\\.:\\/",kg=new RegExp("["+Wo+"]","g"),Xo="[^"+Wo+"]",zg="[^"+Wo.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Xo),Vg=/(WCOD+)?/.source.replace("WCOD",zg),Gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),Wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),Xg=new RegExp("^"+Hg+Vg+Gg+Wg+"$"),qg=["material","materials","bones","map"],Fo=class{constructor(e,t,n){let r=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(e){let t=Xg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);qg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Fo;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);var Au=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},Yg=function(i){return new Worker(i)};try{URL.revokeObjectURL(Au(""))}catch{Au=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Yg=function(e){return new Worker(e,{type:"module"})}}var on=Uint8Array,ti=Uint16Array,Zo=Uint32Array,Ru=new on([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cu=new on([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zg=new on([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lu=function(i,e){for(var t=new ti(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Zo(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Pu=Lu(Ru,2),Iu=Pu[0],Kg=Pu[1];Iu[28]=258,Kg[258]=28;var Du=Lu(Cu,0),Jg=Du[0],U_=Du[1],Ko=new ti(32768);for(je=0;je<32768;++je)Nn=(je&43690)>>>1|(je&21845)<<1,Nn=(Nn&52428)>>>2|(Nn&13107)<<2,Nn=(Nn&61680)>>>4|(Nn&3855)<<4,Ko[je]=((Nn&65280)>>>8|(Nn&255)<<8)>>>1;var Nn,je,Fr=function(i,e,t){for(var n=i.length,r=0,s=new ti(e);r<n;++r)++s[i[r]-1];var a=new ti(e);for(r=0;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new ti(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Ko[h]>>>l]=c}else for(o=new ti(n),r=0;r<n;++r)i[r]&&(o[r]=Ko[a[i[r]-1]++]>>>15-i[r]);return o},Or=new on(288);for(je=0;je<144;++je)Or[je]=8;var je;for(je=144;je<256;++je)Or[je]=9;var je;for(je=256;je<280;++je)Or[je]=7;var je;for(je=280;je<288;++je)Or[je]=8;var je,Uu=new on(32);for(je=0;je<32;++je)Uu[je]=5;var je;var $g=Fr(Or,9,1);var Qg=Fr(Uu,5,1),qo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},dn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Yo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},jg=function(i){return(i/8|0)+(i&7&&1)},e_=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof ti?ti:i instanceof Zo?Zo:on)(t-e);return n.set(i.subarray(e,t)),n},t_=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new on(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new on(n*3));var a=function(me){var pe=e.length;if(me>pe){var Ie=new on(Math.max(pe*2,me));Ie.set(e),e=Ie}},o=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,d=t.m,f=t.n,_=n*8;do{if(!u){t.f=o=dn(i,l,1);var x=dn(i,l+1,3);if(l+=3,x)if(x==1)u=$g,h=Qg,d=9,f=5;else if(x==2){var v=dn(i,l,31)+257,b=dn(i,l+10,15)+4,L=v+dn(i,l+5,31)+1;l+=14;for(var R=new on(L),C=new on(19),B=0;B<b;++B)C[Zg[B]]=dn(i,l+B*3,7);l+=b*3;for(var M=qo(C),T=(1<<M)-1,V=Fr(C,M,1),B=0;B<L;){var Y=V[dn(i,l,T)];l+=Y&15;var g=Y>>>4;if(g<16)R[B++]=g;else{var te=0,D=0;for(g==16?(D=3+dn(i,l,3),l+=2,te=R[B-1]):g==17?(D=3+dn(i,l,7),l+=3):g==18&&(D=11+dn(i,l,127),l+=7);D--;)R[B++]=te}}var U=R.subarray(0,v),F=R.subarray(v);d=qo(U),f=qo(F),u=Fr(U,d,1),h=Fr(F,f,1)}else throw"invalid block type";else{var g=jg(l)+4,m=i[g-4]|i[g-3]<<8,y=g+m;if(y>n){if(s)throw"unexpected EOF";break}r&&a(c+m),e.set(i.subarray(g,y),c),t.b=c+=m,t.p=l=y*8;continue}if(l>_){if(s)throw"unexpected EOF";break}}r&&a(c+131072);for(var Z=(1<<d)-1,q=(1<<f)-1,X=l;;X=l){var te=u[Yo(i,l)&Z],K=te>>>4;if(l+=te&15,l>_){if(s)throw"unexpected EOF";break}if(!te)throw"invalid length/literal";if(K<256)e[c++]=K;else if(K==256){X=l,u=null;break}else{var $=K-254;if(K>264){var B=K-257,ie=Ru[B];$=dn(i,l,(1<<ie)-1)+Iu[B],l+=ie}var W=h[Yo(i,l)&q],J=W>>>4;if(!W)throw"invalid distance";l+=W&15;var F=Jg[J];if(J>3){var ie=Cu[J];F+=Yo(i,l)&(1<<ie)-1,l+=ie}if(l>_){if(s)throw"unexpected EOF";break}r&&a(c+131072);for(var ae=c+$;c<ae;c+=4)e[c]=e[c-F],e[c+1]=e[c+1-F],e[c+2]=e[c+2-F],e[c+3]=e[c+3-F];c=ae}}t.l=u,t.p=X,t.b=c,u&&(o=1,t.m=d,t.d=h,t.n=f)}while(!o);return c==e.length?e:e_(e,0,c)};var n_=new on(0);var i_=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Nu(i,e){return t_((i_(i),i.subarray(2,-4)),e)}var r_=typeof TextDecoder<"u"&&new TextDecoder,s_=0;try{r_.decode(n_,{stream:!0}),s_=1}catch{}function Bu(i,e,t){let n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,a=Math.floor((r+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:r=a,a=Math.floor((r+s)/2);return a}function o_(i,e,t,n){let r=[],s=[],a=[];r[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[i+1-o],a[o]=n[i+o]-e;let l=0;for(let c=0;c<o;++c){let u=a[c+1],h=s[o-c],d=r[c]/(u+h);r[c]=l+u*d,l=h*d}r[o]=l}return r}function Fu(i,e,t,n){let r=Bu(i,n,e),s=o_(r,n,i,e),a=new Je(0,0,0,0);for(let o=0;o<=i;++o){let l=t[r-i+o],c=s[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function l_(i,e,t,n,r){let s=[];for(let h=0;h<=t;++h)s[h]=0;let a=[];for(let h=0;h<=n;++h)a[h]=s.slice(0);let o=[];for(let h=0;h<=t;++h)o[h]=s.slice(0);o[0][0]=1;let l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let d=0;for(let f=0;f<h;++f){let _=c[f+1],x=l[h-f];o[h][f]=_+x;let g=o[f][h-1]/o[h][f];o[f][h]=d+_*g,d=x*g}o[h][h]=d}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let d=0,f=1,_=[];for(let x=0;x<=t;++x)_[x]=s.slice(0);_[0][0]=1;for(let x=1;x<=n;++x){let g=0,m=h-x,y=t-x;h>=x&&(_[f][0]=_[d][0]/o[y+1][m],g=_[f][0]*o[m][y]);let v=m>=-1?1:-m,b=h-1<=y?x-1:t-h;for(let R=v;R<=b;++R)_[f][R]=(_[d][R]-_[d][R-1])/o[y+1][m+R],g+=_[f][R]*o[m+R][y];h<=y&&(_[f][x]=-_[d][x-1]/o[y+1][h],g+=_[f][x]*o[h][y]),a[x][h]=g;let L=d;d=f,f=L}}let u=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)a[h][d]*=u;u*=t-h}return a}function c_(i,e,t,n,r){let s=r<i?r:i,a=[],o=Bu(i,n,e),l=l_(o,n,i,s,e),c=[];for(let u=0;u<t.length;++u){let h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=s;++u){let h=c[o-i].clone().multiplyScalar(l[u][0]);for(let d=1;d<=i;++d)h.add(c[o-i+d].clone().multiplyScalar(l[u][d]));a[u]=h}for(let u=s+1;u<=r+1;++u)a[u]=new Je(0,0,0);return a}function u_(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function h_(i){let e=i.length,t=[],n=[];for(let s=0;s<e;++s){let a=i[s];t[s]=new I(a.x,a.y,a.z),n[s]=a.w}let r=[];for(let s=0;s<e;++s){let a=t[s].clone();for(let o=1;o<=s;++o)a.sub(r[s-o].clone().multiplyScalar(u_(s,o)*n[o]));r[s]=a.divideScalar(n[0])}return r}function Ou(i,e,t,n,r){let s=c_(i,e,t,n,r);return h_(s)}var ra=class extends zs{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let a=0;a<n.length;++a){let o=n[a];this.controlPoints[a]=new Je(o.x,o.y,o.z,o.w)}}getPoint(e,t=new I){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Fu(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new I){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Ou(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}};var Xe,wt,Xt,aa=class extends _n{constructor(e){super(e)}load(e,t,n,r){let s=this,a=s.path===""?Js.extractUrlBase(e):s.path,o=new qs(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(f_(e))Xe=new nl().parse(e);else{let r=Vu(e);if(!p_(r))throw new Error("THREE.FBXLoader: Unknown format.");if(ku(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+ku(r));Xe=new tl().parse(r)}let n=new rr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Qo(n,this.manager).parse(Xe)}},Qo=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){wt=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new jo().parse(r);return this.parseScene(r,s,n),Xt}parseConnections(){let e=new Map;return"Connections"in Xe&&Xe.Connections.connections.forEach(function(n){let r=n[0],s=n[1],a=n[2];e.has(r)||e.set(r,{parents:[],children:[]});let o={ID:s,relationship:a};e.get(r).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});let l={ID:r,relationship:a};e.get(s).children.push(l)}),e}parseImages(){let e={},t={};if("Video"in Xe.Objects){let n=Xe.Objects.Video;for(let r in n){let s=n[r],a=parseInt(r);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){let o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){let c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(let n in e){let r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase(),s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{let a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){let t=new Map;if("Texture"in Xe.Objects){let n=Xe.Objects.Texture;for(let r in n){let s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let r=e.WrapModeU,s=e.WrapModeV,a=r!==void 0?r.value:0,o=s!==void 0?s.value:0;if(n.wrapS=a===0?Ki:qt,n.wrapT=o===0?Ki:qt,"Scaling"in e){let l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){let l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n,r=this.textureLoader.path,s=wt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a,o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){let l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new Ut):(l.setPath(this.textureLoader.path),a=l.load(n))}else if(o==="dds"){let l=this.manager.getHandler(".dds");l===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",e.RelativeFilename),a=new Ut):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new Ut):a=this.textureLoader.load(n);return this.textureLoader.setPath(r),a}parseMaterials(e){let t=new Map;if("Material"in Xe.Objects){let n=Xe.Objects.Material;for(let r in n){let s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!wt.has(n))return null;let a=this.parseParameters(e,t,n),o;switch(s.toLowerCase()){case"phong":o=new nr;break;case"lambert":o=new Vs;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new nr;break}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Me().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Me().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Me().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Me().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Me().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Me().fromArray(e.SpecularColor.value).convertSRGBToLinear());let s=this;return wt.get(n).children.forEach(function(a){let o=a.relationship;switch(o){case"Bump":r.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,a.ID),r.map!==void 0&&(r.map.colorSpace=ut);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,a.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=ut);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,a.ID),r.envMap!==void 0&&(r.envMap.mapping=Mr,r.envMap.colorSpace=ut);break;case"SpecularColor":r.specularMap=s.getTexture(t,a.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=ut);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,a.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),r}getTexture(e,t){return"LayeredTexture"in Xe.Objects&&t in Xe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=wt.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in Xe.Objects){let n=Xe.Objects.Deformer;for(let r in n){let s=n[r],a=wt.get(parseInt(r));if(s.attrType==="Skin"){let o=this.parseSkeleton(a,n);o.ID=r,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[r]=o}else if(s.attrType==="BlendShape"){let o={id:r};o.rawTargets=this.parseMorphTargets(a,n),o.id=r,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(r){let s=t[r.ID];if(s.attrType!=="Cluster")return;let a={ID:r.ID,indices:[],weights:[],transformLink:new xe().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let s=e.children[r],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=wt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Xt=new Pn;let r=this.parseModels(e.skeletons,t,n),s=Xe.Objects.Model,a=this;r.forEach(function(l){let c=s[l.ID];a.setLookAtProperties(l,c),wt.get(l.ID).parents.forEach(function(h){let d=r.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&Xt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),Xt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);let c=zu(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});let o=new el().parse();Xt.children.length===1&&Xt.children[0].isGroup&&(Xt.children[0].animations=o,Xt=Xt.children[0]),Xt.animations=o}parseModels(e,t,n){let r=new Map,s=Xe.Objects.Model;for(let a in s){let o=parseInt(a),l=s[a],c=wt.get(o),u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new tr;break;case"Null":default:u=new Pn;break}u.name=l.attrName?it.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=o}this.getTransformData(u,l),r.set(o,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(a){for(let o in t){let l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){let h=s;s=new tr,s.matrixWorld.copy(c.transformLink),s.name=r?it.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){let s=Xe.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new mt;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);let c=o/l,u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);let h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new bt(u,c,s,a),h!==null&&t.setFocalLength(h);break;case 1:t=new er(-o/2,o/2,l/2,-l/2,s,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new mt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){let s=Xe.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new mt;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Me().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);let l=1;switch(r){case 0:t=new Br(s,a,o,l);break;case 1:t=new vi(s,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=at.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=at.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Zs(s,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Br(s,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,a=null,o=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new nr({name:_n.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new Fs(s,a),r.normalizeSkinWeights()):r=new $t(s,a),r}createCurve(e,t){let n=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),r=new Lr({name:_n.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new ks(n,r)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Hu(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&wt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){let s=Xe.Objects.Model[r.ID];if("Lcl_Translation"in s){let a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Xt.add(e.target)):e.lookAt(new I().fromArray(a))}}})}bindSkeleton(e,t,n){let r=this.parsePoseNodes();for(let s in e){let a=e[s];wt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){let c=l.ID;wt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Os(a.bones),r[h.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in Xe.Objects){let t=Xe.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new xe().fromArray(s.Matrix.a)}):e[r.Node]=new xe().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Xe){if("AmbientColor"in Xe.GlobalSettings){let e=Xe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let s=new Me(t,n,r).convertSRGBToLinear();Xt.add(new Ks(s,1))}}"UnitScaleFactor"in Xe.GlobalSettings&&(Xt.userData.unitScaleFactor=Xe.GlobalSettings.UnitScaleFactor.value)}}},jo=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in Xe.Objects){let n=Xe.Objects.Geometry;for(let r in n){let s=wt.get(parseInt(r)),a=this.parseGeometry(s,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,s=[],a=e.parents.map(function(h){return Xe.Objects.Model[h.ID]});if(a.length===0)return;let o=e.children.reduce(function(h,d){return r[d.ID]!==void 0&&(h=r[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});let l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Hu(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);let u=zu(c);return this.genGeometry(t,o,s,u)}genGeometry(e,t,n,r){let s=new sn;e.attrName&&(s.name=e.attrName);let a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Dt(o.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new Dt(o.colors,3)),t&&(s.setAttribute("skinIndex",new Qi(o.weightsIndices,4)),s.setAttribute("skinWeight",new Dt(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){let c=new ze().getNormalMatrix(r),u=new Dt(o.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){let h=u===0?"uv":`uv${u}`;s.setAttribute(h,new Dt(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,d){h!==c&&(s.addGroup(u,d-u,c),c=h,u=d)}),s.groups.length>0){let h=s.groups[s.groups.length-1],d=h.start+h.count;d!==o.materialIndex.length&&s.addGroup(d,o.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:s,weight:r.weights[o]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,s=!1,a=[],o=[],l=[],c=[],u=[],h=[],d=this;return e.vertexIndices.forEach(function(f,_){let x,g=!1;f<0&&(f=f^-1,g=!0);let m=[],y=[];if(a.push(f*3,f*3+1,f*3+2),e.color){let v=sa(_,n,f,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(v){y.push(v.weight),m.push(v.id)}),y.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);let v=[0,0,0,0],b=[0,0,0,0];y.forEach(function(L,R){let C=L,B=m[R];b.forEach(function(M,T,V){if(C>M){V[T]=C,C=M;let Y=v[T];v[T]=B,B=Y}})}),m=v,y=b}for(;y.length<4;)y.push(0),m.push(0);for(let v=0;v<4;++v)u.push(y[v]),h.push(m[v])}if(e.normal){let v=sa(_,n,f,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=sa(_,n,f,e.material)[0],x<0&&(d.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(v,b){let L=sa(_,n,f,v);c[b]===void 0&&(c[b]=[]),c[b].push(L[0]),c[b].push(L[1])}),r++,g&&(d.genFace(t,e,a,x,o,l,c,u,h,r),n++,r=0,a=[],o=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){let t=new I(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],s=e[(n+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new I(0,1,0):new I(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,n){return new We(e.dot(t),e.dot(n))}genFace(e,t,n,r,s,a,o,l,c,u){let h;if(u>3){let d=[];for(let g=0;g<n.length;g+=3)d.push(new I(t.vertexPositions[n[g]],t.vertexPositions[n[g+1]],t.vertexPositions[n[g+2]]));let{tangent:f,bitangent:_}=this.getNormalTangentAndBitangent(d),x=[];for(let g of d)x.push(this.flattenVertex(g,f,_));h=Hs.triangulateShape(x,[])}else h=[[0,1,2]];for(let[d,f,_]of h)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[_*3]]),e.vertex.push(t.vertexPositions[n[_*3+1]]),e.vertex.push(t.vertexPositions[n[_*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[_*4]),e.vertexWeights.push(l[_*4+1]),e.vertexWeights.push(l[_*4+2]),e.vertexWeights.push(l[_*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[_*4]),e.weightsIndices.push(c[_*4+1]),e.weightsIndices.push(c[_*4+2]),e.weightsIndices.push(c[_*4+3])),t.color&&(e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2]),e.colors.push(a[_*3]),e.colors.push(a[_*3+1]),e.colors.push(a[_*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[_*3]),e.normal.push(s[_*3+1]),e.normal.push(s[_*3+2])),t.uv&&t.uv.forEach(function(x,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(o[g][d*2]),e.uvs[g].push(o[g][d*2+1]),e.uvs[g].push(o[g][f*2]),e.uvs[g].push(o[g][f*2+1]),e.uvs[g].push(o[g][_*2]),e.uvs[g].push(o[g][_*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let s=this;n.forEach(function(a){a.rawTargets.forEach(function(o){let l=Xe.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,o.name)})})}genMorphGeometry(e,t,n,r,s){let a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let _=0;_<l.length;_++){let x=l[_]*3;u[x]=o[_*3],u[x+1]=o[_*3+1],u[x+2]=o[_*3+2]}let h={vertexIndices:a,vertexPositions:u},d=this.genBuffers(h),f=new Dt(d.vertex,3);f.name=s||n.attrName,f.applyMatrix4(r),e.morphAttributes.position.push(f)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new Me;a<r.length;a+=4)o.fromArray(r,a).convertSRGBToLinear().toArray(r,a);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let r=e.Materials.a,s=[];for(let a=0;a<r.length;++a)s.push(a);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new sn;let n=t-1,r=e.KnotVector.a,s=[],a=e.Points.a;for(let h=0,d=a.length;h<d;h+=4)s.push(new Je().fromArray(a,h));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=r.length-1-o;for(let h=0;h<n;++h)s.push(s[h])}let u=new ra(n,r,s,o,l).getPoints(s.length*12);return new sn().setFromPoints(u)}},el=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Xe.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=Xe.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){let t=Xe.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(m_),values:t[n].KeyValueFloat.a},s=wt.get(r.id);if(s!==void 0){let a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=r:o.match(/Y/)?e.get(a).curves.y=r:o.match(/Z/)?e.get(a).curves.z=r:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=r)}}}parseAnimationLayers(e){let t=Xe.Objects.AnimationLayer,n=new Map;for(let r in t){let s=[],a=wt.get(parseInt(r));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){let u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){let h=wt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){let d=Xe.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}let f={modelName:d.attrName?it.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Xt.traverse(function(_){_.ID===d.id&&(f.transform=_.matrix,_.userData.transformData&&(f.eulerOrder=_.userData.transformData.eulerOrder))}),f.transform||(f.transform=new xe),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){let h=wt.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,d=wt.get(h).parents[0].ID,f=wt.get(d).parents[0].ID,_=wt.get(f).parents[0].ID,x=Xe.Objects.Model[_],g={modelName:x.attrName?it.sanitizeNodeName(x.attrName):"",morphName:Xe.Objects.Deformer[h].attrName};s[c]=g}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){let t=Xe.Objects.AnimationStack,n={};for(let r in t){let s=wt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let a=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new Ws(e.name,-1,t)}generateTracks(e){let t=[],n=new I,r=new I;if(e.transform&&e.transform.decompose(n,new Ze,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){let s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,r){let s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,n);return new jn(e+"."+r,s,a)}generateRotationTrack(e,t,n,r,s){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let h=this.interpolateRotations(t.x,t.y,t.z,s);a=h[0],o=h[1]}n!==void 0&&(n=n.map(at.degToRad),n.push(s),n=new Wt().fromArray(n),n=new Ze().setFromEuler(n)),r!==void 0&&(r=r.map(at.degToRad),r.push(s),r=new Wt().fromArray(r),r=new Ze().setFromEuler(r).invert());let l=new Ze,c=new Wt,u=[];if(!o||!a)return new gn(e+".quaternion",[],[]);for(let h=0;h<o.length;h+=3)c.set(o[h],o[h+1],o[h+2],s),l.setFromEuler(c),n!==void 0&&l.premultiply(n),r!==void 0&&l.multiply(r),h>2&&new Ze().fromArray(u,(h-3)/3*4).dot(l)<0&&l.set(-l.x,-l.y,-l.z,-l.w),l.toArray(u,h/3*4);return new gn(e+".quaternion",a,u)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=Xt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new $n(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){let a=t[s];a!==r&&(t[n]=a,r=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let r=n,s=[],a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){let u=t.x.values[a];s.push(u),r[0]=u}else s.push(r[0]);if(o!==-1){let u=t.y.values[o];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){let u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e,t,n,r){let s=[],a=[];s.push(e.times[0]),a.push(at.degToRad(e.values[0])),a.push(at.degToRad(t.values[0])),a.push(at.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){let l=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let c=l.map(at.degToRad),u=[e.values[o],t.values[o],n.values[o]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;let h=u.map(at.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let x=Math.max(...f)/180,g=new Wt(...c,r),m=new Wt(...h,r),y=new Ze().setFromEuler(g),v=new Ze().setFromEuler(m);y.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);let b=e.times[o-1],L=e.times[o]-b,R=new Ze,C=new Wt;for(let B=0;B<1;B+=1/x)R.copy(y.clone().slerp(v.clone(),B)),s.push(b+B*L),C.setFromQuaternion(R,r),a.push(C.x),a.push(C.y),a.push(C.z)}else s.push(e.times[o]),a.push(at.degToRad(e.values[o])),a.push(at.degToRad(t.values[o])),a.push(at.degToRad(n.values[o]))}return[s,a]}},tl=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new la,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){let a=r.match(/^[\s\t]*;/),o=r.match(/^[\s\t]*$/);if(a||o)return;let l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=s)):typeof a.id=="number"?(o[n]={},o[n][a.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());let a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){let l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]),h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),r="connections",s=[c,u],__(s,h),a[r]===void 0&&(a[r]=[])}r==="Node"&&(a.id=s),r in a&&Array.isArray(a[r])?a[r].push(s):r!=="a"?a[r]=s:a.a=s,this.setCurrentProp(a,r),r==="a"&&s.slice(-1)!==","&&(a.a=$o(s))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=$o(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],a=r[1],o=r[2],l=r[3],c=r[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=$o(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}},nl=class{parse(e){let t=new oa(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let r=new la;for(;!this.endOfContent(t);){let s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),o=e.getString(a);if(r===0)return null;let l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));let c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){let d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){let r=[];n.propertyList.forEach(function(s,a){a!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1],a=n.propertyList[2],o=n.propertyList[3],l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let r=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}let o=Nu(new Uint8Array(e.getArrayBuffer(a))),l=new oa(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},oa=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},la=class{add(e,t){this[e]=t}};function f_(i){let e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===Vu(i,0,e.length)}function p_(i){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(r){let s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function ku(i){let e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function m_(i){return i/46186158e3}var g_=[];function sa(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);let s=r*n.dataSize,a=s+n.dataSize;return v_(g_,n.buffer,s,a)}var Jo=new Wt,ar=new I;function zu(i){let e=new xe,t=new xe,n=new xe,r=new xe,s=new xe,a=new xe,o=new xe,l=new xe,c=new xe,u=new xe,h=new xe,d=new xe,f=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(ar.fromArray(i.translation)),i.preRotation){let T=i.preRotation.map(at.degToRad);T.push(i.eulerOrder||Wt.DEFAULT_ORDER),t.makeRotationFromEuler(Jo.fromArray(T))}if(i.rotation){let T=i.rotation.map(at.degToRad);T.push(i.eulerOrder||Wt.DEFAULT_ORDER),n.makeRotationFromEuler(Jo.fromArray(T))}if(i.postRotation){let T=i.postRotation.map(at.degToRad);T.push(i.eulerOrder||Wt.DEFAULT_ORDER),r.makeRotationFromEuler(Jo.fromArray(T)),r.invert()}i.scale&&s.scale(ar.fromArray(i.scale)),i.scalingOffset&&o.setPosition(ar.fromArray(i.scalingOffset)),i.scalingPivot&&a.setPosition(ar.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(ar.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(ar.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));let _=t.clone().multiply(n).multiply(r),x=new xe;x.extractRotation(u);let g=new xe;g.copyPosition(u);let m=g.clone().invert().multiply(u),y=x.clone().invert().multiply(m),v=s,b=new xe;if(f===0)b.copy(x).multiply(_).multiply(y).multiply(v);else if(f===1)b.copy(x).multiply(y).multiply(_).multiply(v);else{let V=new xe().scale(new I().setFromMatrixScale(h)).clone().invert(),Y=y.clone().multiply(V);b.copy(x).multiply(_).multiply(Y).multiply(v)}let L=c.clone().invert(),R=a.clone().invert(),C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(L).multiply(o).multiply(a).multiply(s).multiply(R),B=new xe().copyPosition(C),M=u.clone().multiply(B);return d.copyPosition(M),C=d.clone().multiply(b),C.premultiply(u.invert()),C}function Hu(i){i=i||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function $o(i){return i.split(",").map(function(t){return parseFloat(t)})}function Vu(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function __(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function v_(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}async function ca(i="./assets/",e="png"){let t=new rr,n={};await Promise.all(["f014_opacity_color","f014_head_color","f014_body_color","f014_head_normal","f014_body_normal"].map(async u=>{n[u+".png"]=await t.loadAsync(i+u+(u.includes("opacity")?".png":"."+e))}));let r=(u,h=!0)=>{let d=n[u];return h&&(d.colorSpace=ut),d.anisotropy=4,d},s=await new aa().loadAsync(i+"avatar.fbx"),a=null;s.traverse(u=>{u.isMesh&&(a=u,u.frustumCulled=!1,u.castShadow=!1,u.material=(Array.isArray(u.material)?u.material:[u.material]).map(h=>{let d=h.name;if(d.includes("opacity"))return new Ur({name:d,map:r("f014_opacity_color.png"),transparent:!0,alphaTest:.35,side:hn,roughness:.8,metalness:0});let f=d.includes("head");return new Ur({name:d,map:r(f?"f014_head_color.png":"f014_body_color.png"),normalMap:r(f?"f014_head_normal.png":"f014_body_normal.png",!1),normalScale:new We(.6,.6),roughness:f?.62:.78,metalness:0})}))});let o={};s.traverse(u=>{u.isBone&&(o[u.name.replace(/^Bip01_?/,"").replace(/_/g," ").trim()]=u)});let l={};for(let u in a.morphTargetDictionary)l[u.replace(/^blendShape1\./,"")]=a.morphTargetDictionary[u];s.scale.setScalar(.01),s.updateMatrixWorld(!0);let c={};for(let u in o)c[u]=o[u].quaternion.clone();return{root:s,mesh:a,bones:o,morph:l,rest:c}}var vt=(i=0,e=0,t=0)=>new I(i,e,t),il=["1","2","3","4"],ua=Math.PI/180,or=class i{constructor(e){this.A=e,this.B=e.bones,e.root.updateMatrixWorld(!0),this.restW={},this.restP={};for(let t in this.B){let n=this.B[t];this.restW[t]=n.getWorldQuaternion(new Ze),this.restP[t]=n.getWorldPosition(vt())}this.side={};for(let t of["L","R"])this.side[t]=this._setupSide(t);this.morphW=e.mesh.morphTargetInfluences}b(e){return this.B[e]}_setupSide(e){let t=d=>this.restP[e+" "+d],n=t("Hand"),r=t("Finger2").clone().sub(n).normalize(),s=t("Finger1").clone().sub(t("Finger4")).normalize(),a=e==="L"?vt().crossVectors(r,s):vt().crossVectors(s,r);a.normalize(),s.crossVectors(a,r).multiplyScalar(e==="L"?-1:1).normalize();let o=t("Forearm").distanceTo(t("UpperArm")),l=t("Hand").distanceTo(t("Forearm")),c={s:e,dir0:r,n0:a,across0:vt().crossVectors(r,a).normalize(),lenU:o,lenF:l,fing:{}},u=vt().crossVectors(r,a).normalize();for(let d of il){c.fing[d]=[];for(let f of["","1","2"]){let _=e+" Finger"+d+f,x=this.restW[_].clone().invert(),g=u.clone().applyQuaternion(x).normalize(),m=a.clone().applyQuaternion(x).normalize();c.fing[d].push({name:_,ax:g,spr:m,sign:1})}}for(let d of il){let f=this.B[e+" Finger"+d],_=this.B[e+" Finger"+d+"2"],x=_.getWorldPosition(vt()),g=f.quaternion.clone();f.quaternion.multiply(new Ze().setFromAxisAngle(c.fing[d][0].ax,20*ua)),f.updateMatrixWorld(!0);let y=_.getWorldPosition(vt()).sub(x).dot(a)>0?1:-1;f.quaternion.copy(g),f.updateMatrixWorld(!0),c.fing[d].forEach(v=>v.sign=y)}let h=t("Finger01").clone().sub(t("Finger0")).normalize();return c.thumbRest=this.toHand(c,h),c.thumbLen=[t("Finger0").distanceTo(t("Finger01")),t("Finger01").distanceTo(t("Finger02"))],c}toHand(e,t){return vt(t.dot(e.dir0),t.dot(e.n0),t.dot(this._acr(e)))}_acr(e){let t=vt().crossVectors(e.dir0,e.n0).normalize();return this.restP[e.s+" Finger1"].clone().sub(this.restP[e.s+" Finger4"]).dot(t)>0?t:t.negate()}setWorldQuat(e,t){e.parent.updateWorldMatrix(!0,!1);let n=e.parent.getWorldQuaternion(new Ze);e.quaternion.copy(n.invert().multiply(t)),e.updateMatrixWorld(!0)}static frameRot(e,t,n,r){let s=new xe().makeBasis(e,t,vt().crossVectors(e,t)),a=new xe().makeBasis(n,r,vt().crossVectors(n,r));return new Ze().setFromRotationMatrix(a.multiply(s.transpose()))}static ortho(e,t){let n=e.clone().normalize(),r=t.clone().sub(n.clone().multiplyScalar(t.dot(n))).normalize();return[n,r]}resetBody(){for(let e in this.B)this.B[e].quaternion.copy(this.A.rest[e]);this.A.root.updateMatrixWorld(!0)}solveArm(e,t,n,r,s=.5){let a=this.side[e],o=this.B[e+" UpperArm"],l=this.B[e+" Forearm"],c=this.B[e+" Hand"];o.parent.updateWorldMatrix(!0,!1),o.quaternion.copy(this.A.rest[e+" UpperArm"]),l.quaternion.copy(this.A.rest[e+" Forearm"]),c.quaternion.copy(this.A.rest[e+" Hand"]),o.updateMatrixWorld(!0);let u=o.getWorldPosition(vt()),h=t.clone().sub(u),d=h.length(),f=a.lenU,_=a.lenF,x=(f+_)*.999;d>x&&(h.setLength(x),d=x),d<Math.abs(f-_)+.001&&(h.setLength(Math.abs(f-_)+.001),d=h.length());let g=h.clone().normalize(),m=(f*f+d*d-_*_)/(2*f*d),y=Math.acos(at.clamp(m,-1,1)),v=n.clone().sub(g.clone().multiplyScalar(n.dot(g))).normalize(),b=u.clone().add(g.clone().multiplyScalar(Math.cos(y)*f)).add(v.clone().multiplyScalar(Math.sin(y)*f)),L=u.clone().add(h),R=this.restP[e+" Forearm"].clone().sub(this.restP[e+" UpperArm"]).normalize(),C=this.restP[e+" Hand"].clone().sub(this.restP[e+" Forearm"]).normalize(),B=C.clone().sub(R.clone().multiplyScalar(C.dot(R))),M=b.clone().sub(u).normalize(),T=L.clone().sub(b).normalize(),V=B.lengthSq()>1e-6?B.normalize():a.n0.clone(),Y=T.clone().sub(M.clone().multiplyScalar(T.dot(M)));Y=Y.lengthSq()>1e-6?Y.normalize():v.clone();let te=i.frameRot(R,V,M,Y);this.setWorldQuat(o,te.clone().multiply(this.restW[e+" UpperArm"])),l.updateMatrixWorld(!0);let D=this.B[e+" Hand"].getWorldPosition(vt()).sub(b).normalize(),U=new Ze().setFromUnitVectors(D,T),F=l.getWorldQuaternion(new Ze),Z=U.multiply(F);if(r){let q,X;if(r.q)q=r.q.clone(),X=a.n0.clone().applyQuaternion(q.clone().multiply(this.restW[e+" Hand"].clone().invert()));else{let ae=i.ortho(r.F,r.N);X=ae[1],q=i.frameRot(a.dir0,a.n0,ae[0],X).multiply(this.restW[e+" Hand"])}let K=Z.clone().multiply(this.restW[e+" Forearm"].clone().invert()),$=a.n0.clone().applyQuaternion(K),ie=T.clone(),W=$.sub(ie.clone().multiplyScalar($.dot(ie))).normalize(),J=X.clone().sub(ie.clone().multiplyScalar(X.dot(ie))).normalize();if(W.lengthSq()>.5&&J.lengthSq()>.5){let ae=Math.atan2(vt().crossVectors(W,J).dot(ie),W.dot(J));Z=new Ze().setFromAxisAngle(ie,ae*s).multiply(Z)}this.setWorldQuat(l,Z),this.setWorldQuat(c,q)}else this.setWorldQuat(l,Z);return{E:b,W:L}}applyHandshape(e,t){let n=this.side[e];for(let g of il){let m=t.f[g]||[0,0,0,0];n.fing[g].forEach((y,v)=>{let b=this.B[y.name],L=this.A.rest[y.name].clone();v===0&&m[3]&&L.multiply(new Ze().setFromAxisAngle(y.spr,m[3]*ua*(e==="L"?1:-1)*1)),L.multiply(new Ze().setFromAxisAngle(y.ax,m[v]*ua*y.sign)),b.quaternion.copy(L)})}let r=t.t,s=this.B[e+" Hand"];s.updateMatrixWorld(!0);let a=this.B[e+" Finger0"],o=this.B[e+" Finger01"],l=this.B[e+" Finger02"];a.quaternion.copy(this.A.rest[e+" Finger0"]),o.quaternion.copy(this.A.rest[e+" Finger01"]),l.quaternion.copy(this.A.rest[e+" Finger02"]),a.updateMatrixWorld(!0);let c=s.getWorldQuaternion(new Ze).multiply(this.restW[e+" Hand"].clone().invert()),u=this._acr(n),h=g=>vt().addScaledVector(n.dir0,g[0]).addScaledVector(n.n0,g[1]).addScaledVector(u,g[2]).normalize().applyQuaternion(c),d=this.B[e+" Finger01"].getWorldPosition(vt()).sub(a.getWorldPosition(vt())).normalize(),f=h(r.d),_=new Ze().setFromUnitVectors(d,f).multiply(a.getWorldQuaternion(new Ze));this.setWorldQuat(a,_);let x=n.n0.clone().applyQuaternion(c);for(let[g,m]of[[o,r.f1||0],[l,r.f2||0]]){g.updateMatrixWorld(!0);let y=g===o?l:null,v=(y?y.getWorldPosition(vt()):g.getWorldPosition(vt()).clone().add(f.clone().multiplyScalar(.03))).sub(g.getWorldPosition(vt())).normalize(),b=h(r.b||[-.1,.25,-1]),L=vt().crossVectors(v,b).normalize();if(L.lengthSq()<.5)continue;let R=new Ze().setFromAxisAngle(L,m*ua).multiply(g.getWorldQuaternion(new Ze));this.setWorldQuat(g,R)}}handPoints(e){let t=u=>this.B[e+" "+u].getWorldPosition(vt()),n=u=>{let h=t("Finger"+u+"2"),d=t("Finger"+u+"1");return h.clone().add(h.clone().sub(d).multiplyScalar(.9))},r=t("Hand"),s=r.clone().lerp(t("Finger2").clone().lerp(t("Finger3"),.5),.55),a=this.B[e+" Hand"].getWorldQuaternion(new Ze).multiply(this.restW[e+" Hand"].clone().invert()),o=this.side[e].n0.clone().applyQuaternion(a);s.addScaledVector(o,.012);let l=t("Finger02"),c=t("Finger01");return{wrist:r,palm:s,N:o,index:n("1"),middle:n("2"),pinky:n("4"),thumb:l.clone().add(l.clone().sub(c).multiplyScalar(.9)),knuckle:t("Finger2"),back:s.clone().addScaledVector(o,-.035)}}handQuat(e,t,n){let r=this.side[e],s=i.ortho(t,n);return i.frameRot(r.dir0,r.n0,s[0],s[1]).multiply(this.restW[e+" Hand"])}setMorph(e,t){let n=this.A.morph[e];n!==void 0&&(this.morphW[n]=t)}};var Re=[88,100,65,0],Se=(i,e,t,n=0)=>[i,e,t,n],ye=(i=0)=>[0,0,0,i],rl={1:Re,2:Re,3:Re,4:Re},vn={d:[.45,.55,.1],f1:50,f2:35,b:[-.1,.2,-1]},x_={d:[.9,.2,.4],f1:0,f2:5},Gu={d:[.5,.42,-.15],f1:38,f2:25,b:[.05,.1,-1]},lr={d:[.25,.1,1],f1:0,f2:0},xi={B:{f:{1:ye(-2),2:ye(),3:ye(),4:ye(2)},t:Gu},OPEN_B:{f:{1:ye(-2),2:ye(),3:ye(),4:ye(2)},t:{d:[.55,.1,.85],f1:0,f2:0}},BENT_B:{f:{1:Se(80,5,0),2:Se(80,5,0),3:Se(80,5,0),4:Se(80,5,0)},t:{d:[.7,.2,.6],f1:0,f2:0}},5:{f:{1:ye(-12),2:ye(-3),3:ye(4),4:ye(14)},t:lr},CLAW_5:{f:{1:Se(25,65,40,-12),2:Se(25,65,40,-3),3:Se(25,65,40,4),4:Se(25,65,40,14)},t:{d:[.35,.4,.85],f1:25,f2:20}},BENT_5:{f:{1:Se(50,10,5,-10),2:Se(50,10,5,-3),3:Se(50,10,5,4),4:Se(50,10,5,12)},t:lr},4:{f:{1:ye(-8),2:ye(-2),3:ye(3),4:ye(10)},t:Gu},C:{f:{1:Se(30,45,25),2:Se(30,45,25),3:Se(30,45,25),4:Se(30,45,25)},t:{d:[.45,.6,.55],f1:15,f2:10,b:[.5,.5,-.5]}},O:{f:{1:Se(55,75,45),2:Se(55,78,45),3:Se(55,78,45),4:Se(55,78,45)},t:{d:[.55,.7,.35],f1:28,f2:20,b:[.45,.55,-.6]}},FLAT_O:{f:{1:Se(60,15,5),2:Se(60,15,5),3:Se(60,15,5),4:Se(60,15,5)},t:{d:[.75,.6,.3],f1:10,f2:5}},S:{f:rl,t:vn},A:{f:rl,t:x_},10:{f:rl,t:{d:[1,-.05,.25],f1:0,f2:0}},E:{f:{1:Se(30,100,75),2:Se(30,100,75),3:Se(30,100,75),4:Se(30,100,75)},t:{d:[.4,.55,-.05],f1:60,f2:40,b:[-.1,.1,-1]}},M:{f:{1:Se(75,70,30),2:Se(75,70,30),3:Se(75,70,30),4:Re},t:{d:[.5,.75,-.5],f1:35,f2:20}},N:{f:{1:Se(75,70,30),2:Se(75,70,30),3:Re,4:Re},t:{d:[.5,.75,-.4],f1:35,f2:20}},T:{f:{1:Se(70,85,40),2:Re,3:Re,4:Re},t:{d:[.6,.75,-.15],f1:25,f2:15}},1:{f:{1:ye(),2:Re,3:Re,4:Re},t:vn},D:{f:{1:ye(),2:Se(55,70,45),3:Se(60,75,45),4:Se(65,80,45)},t:{d:[.5,.8,.1],f1:30,f2:25}},L:{f:{1:ye(),2:Re,3:Re,4:Re},t:lr},G:{f:{1:ye(),2:Re,3:Re,4:Re},t:{d:[.85,.3,.35],f1:0,f2:0}},X:{f:{1:Se(15,90,60),2:Re,3:Re,4:Re},t:vn},V:{f:{1:ye(-10),2:ye(8),3:Re,4:Re},t:vn},BENT_V:{f:{1:Se(30,80,40,-10),2:Se(30,80,40,8),3:Re,4:Re},t:vn},U:{f:{1:ye(-1),2:ye(1),3:Re,4:Re},t:vn},H:{f:{1:ye(-1),2:ye(1),3:Re,4:Re},t:vn},R:{f:{1:ye(3),2:ye(-4),3:Re,4:Re},t:vn},K:{f:{1:ye(-4),2:Se(40,5,0,6),3:Re,4:Re},t:{d:[.6,.6,.2],f1:5,f2:0}},2:{f:{1:ye(-10),2:ye(8),3:Re,4:Re},t:vn},3:{f:{1:ye(-10),2:ye(8),3:Re,4:Re},t:lr},W:{f:{1:ye(-10),2:ye(),3:ye(10),4:Re},t:{d:[.5,.8,-.35],f1:30,f2:25}},6:{f:{1:ye(-10),2:ye(),3:ye(10),4:Se(60,70,40)},t:{d:[.55,.75,-.45],f1:30,f2:25}},7:{f:{1:ye(-10),2:ye(),3:Se(60,70,40),4:ye(10)},t:{d:[.55,.75,-.25],f1:30,f2:25}},8:{f:{1:ye(-10),2:Se(60,70,40),3:ye(4),4:ye(10)},t:{d:[.55,.75,0],f1:30,f2:25}},9:{f:{1:Se(55,60,40),2:ye(-2),3:ye(4),4:ye(10)},t:{d:[.5,.8,.3],f1:30,f2:25}},F:{f:{1:Se(55,60,40),2:ye(-2),3:ye(4),4:ye(10)},t:{d:[.5,.8,.3],f1:30,f2:25}},I:{f:{1:Re,2:Re,3:Re,4:ye(5)},t:vn},Y:{f:{1:Re,2:Re,3:Re,4:ye(12)},t:lr},ILY:{f:{1:ye(-5),2:Re,3:Re,4:ye(12)},t:lr},REST:{f:{1:Se(15,20,10,-2),2:Se(18,24,12),3:Se(20,26,12,2),4:Se(22,28,14,4)},t:{d:[.6,.35,.6],f1:10,f2:10}}};var p=(i,e,t,n,r,s="palm",a={})=>({at:i,off:e,hs:t,F:n,N:r,c:s,...a});var et=(i,e)=>{let t=[];for(let n=0;n<e;n++)t.push(...i);return t},xt=(i=[0,-.04,.03])=>[p("center",i,"B","fwd+in","up","palm")],Lt=(i=[0,-.04,.03])=>[p("center",i,"B","fwd+in","down","palm")],yi=(i=[.03,0,.03])=>[p("center",i,"B","fwd+0.5up","in","palm")],kr=(i=[.03,0,.04])=>[p("center",i,"1","up","in","palm")],sl={AND:{w:["and"],dur:.4,R:[p("neutral",[-.02,0,0],"5","in","back","palm"),p("neutral",[.08,0,0],"FLAT_O","in","back","palm")]},ON:{w:["on","onto","upon"],dur:.4,R:[p("center",[.02,.06,.04],"B","fwd+in","down","palm"),p("center",[.01,-.02,.04],"B","fwd+in","down","palm")],L:Lt([0,-.05,.04])},IT:{w:["it","that","there"],dur:.35,R:[p("neutral",[.02,-.02,.05],"1","fwd+down","down","index"),p("neutral",[.04,-.04,.12],"1","fwd+down","down","index")]},THIS:{w:["this","these","here"],dur:.4,R:[p("neutral",[0,-.02,.06],"1","down+fwd","in","index"),p("neutral",[0,-.07,.06],"1","down+fwd","in","index")]},THEY:{w:["they","them","their","those"],dur:.45,R:[p("neutral",[-.04,0,.08],"1","fwd","down","index"),p("neutral",[.08,0,.08],"1","fwd","down","index")]},EVERY:{w:["every","each","all of"],dur:.6,R:[p("center",[.02,.07,.04],"A","up","in","palm"),p("center",[.02,0,.04],"A","up","in","palm"),p("center",[.02,.07,.04],"A","up","in","palm"),p("center",[.02,0,.04],"A","up","in","palm")],L:[p("center",[.03,0,.03],"A","up","in","palm")]},ALL:{w:["all","whole","entire","everything"],dur:.55,R:[p("center",[.12,.04,.06],"B","up","back","palm"),p("center",[0,-.06,.12],"B","up+in","back+down","palm"),p("center",[0,-.06,.05],"B","in","back","back")],L:[p("center",[0,-.02,.03],"B","up+in","back","palm")]},BOTH:{w:["both"],dur:.5,R:[p("center",[.01,.05,.05],"V","up","back","palm"),p("center",[.01,-.07,.05],"V","up","back","palm")],L:[p("center",[0,0,.07],"C","fwd+in","up","palm")]},SAME:{w:["same","equal","equally","match","matches","identical","like"],dur:.45,R:[p("neutral",[.05,0,.02],"1","fwd","down","index"),p("neutral",[-.06,0,.02],"1","fwd","down","index")],L:[p("neutral",[-.06,0,.02],"1","fwd","down","index")]},OTHER:{w:["other","another","opposite"],dur:.4,R:[p("neutral",[-.02,0,0],"A","fwd","in","palm"),p("neutral",[.06,0,.02],"10","up+out","up","palm")]},WHAT:{w:["what"],dur:.5,face:{brows:"down"},R:et([p("neutral",[0,-.02,0],"5","fwd+out","up","palm"),p("neutral",[.03,-.02,0],"5","fwd+out","up","palm")],2),L:"mirror"},WHERE:{w:["where"],dur:.5,face:{brows:"down"},R:et([p("neutral",[0,.08,0],"1","up","fwd","palm"),p("neutral",[.04,.08,0],"1","up+out","fwd","palm")],2)},WHY:{w:["why"],dur:.5,face:{brows:"down"},R:[p("forehead",[.03,0,.01],"B","up+in","back","middle"),p("forehead",[.06,-.1,.12],"Y","up","back","palm")]},WHEN:{w:["when","while","during","as soon as"],dur:.5,R:[p("center",[.05,.07,.07],"1","fwd+in","down","index"),p("center",[.01,.05,.05],"1","fwd+in","down","index")],L:kr([.01,0,.05])},WHICH:{w:["which"],dur:.5,R:[p("neutral",[0,.04,0],"A","up","in","palm"),p("neutral",[0,-.03,0],"A","up","in","palm")],L:[p("neutral",[0,-.03,0],"A","up","in","palm"),p("neutral",[0,.04,0],"A","up","in","palm")]},NOT:{w:["not","don't","dont","isn't","no longer"],dur:.4,face:{shake:1,neg:1},R:[p("chin",[0,-.02,0],"10","up","in","thumb"),p("chin",[.02,-.04,.15],"10","up","in","thumb")]},NO:{w:["no","none"],dur:.45,face:{shake:1,neg:1},R:[p("neutral_hi",[0,0,0],"V","fwd+up","down","palm"),p("neutral_hi",[0,-.02,0],"FLAT_O","fwd+up","down","palm")]},NEVER:{w:["never"],dur:.55,face:{neg:1},R:[p("neutral_hi",[-.02,.04,0],"B","up","in","palm"),p("neutral_hi",[.03,0,0],"B","up","in","palm"),p("neutral_hi",[-.01,-.05,0],"B","up","in","palm"),p("neutral_hi",[.05,-.1,0],"B","up","in","palm")]},CAN:{w:["can","could","able","possible"],dur:.4,R:[p("neutral",[0,.04,0],"S","fwd","down","palm"),p("neutral",[0,-.05,0],"S","fwd","down","palm")],L:"mirror"},CANNOT:{w:["cannot","can't","cant","unable"],dur:.45,face:{neg:1},R:[p("center",[.06,.06,.04],"1","fwd+in","down","index"),p("center",[0,-.04,.06],"1","fwd+in","down","index")],L:kr([.02,0,.05])},MUST:{w:["must","should","need","needs","have to","required","necessary"],dur:.45,face:{serious:1},R:[p("neutral",[0,.04,0],"X","fwd","down","index"),p("neutral",[0,-.05,0],"X","fwd+down","down","index")]},WILL:{w:["will","future","later","you'll","shall"],dur:.45,R:[p("cheek",[.03,0,0],"B","up","in","palm"),p("cheek",[.06,.02,.15],"B","up+fwd","in","palm")]},HAVE:{w:["have","has","had","own"],dur:.4,R:[p("chest",[.07,0,.12],"BENT_B","in+back","back","middle"),p("chest",[.04,0,.02],"BENT_B","in+back","back","middle")],L:"mirror"},GIVE:{w:["give","gives","hand over","handed","pass"],dur:.45,R:[p("chest",[.04,0,.1],"FLAT_O","up+fwd","up","palm"),p("neutral",[0,0,.12],"FLAT_O","fwd","up","palm")]},TAKE:{w:["take","takes","pick up","collect","get","gets"],dur:.45,R:[p("far",[0,.02,0],"5","fwd","down","palm"),p("neutral",[0,0,-.06],"S","fwd","down","palm")]},KEEP:{w:["keep","keeps","kept","stay","remain"],dur:.45,R:[p("center",[0,.06,.05],"K","fwd+in","in","palm"),p("center",[0,.03,.05],"K","fwd+in","in","palm")],L:[p("center",[0,0,.05],"K","fwd+in","in","palm")]},DO:{w:["do","doing","action","actions","act"],dur:.5,R:et([p("neutral",[.02,0,0],"C","fwd","down","palm"),p("neutral",[.06,0,0],"C","fwd","down","palm")],2),L:"mirror"},HAPPEN:{w:["happen","happened","happens","event"],dur:.45,R:[p("neutral",[0,0,0],"1","fwd","up","palm"),p("neutral",[0,0,.03],"1","fwd","down","palm")],L:"mirror"},GOOD:{w:["good","well","fine","nice"],dur:.45,face:{smile:1},R:[p("chin",[0,-.01,0],"B","up","back","middle"),p("neutral",[0,0,.08],"B","up+fwd","back+up","palm")]},WRONG:{w:["wrong","wrongly","mistake","error","incorrect"],dur:.4,face:{neg:1},R:[p("chin",[0,0,.05],"Y","up","back","palm"),p("chin",[0,0,0],"Y","up","back","palm")]},RIGHT:{w:["correct","correctly","right","proper","properly","accurate"],dur:.45,R:[p("center",[0,.09,.05],"1","fwd+in","in","palm"),p("center",[0,.03,.05],"1","fwd+in","in","palm")],L:[p("center",[0,0,.05],"1","fwd+in","in","palm")]},EXACT:{w:["exactly","exact","precise","precisely"],dur:.5,R:[p("center",[0,.08,.05],"X","fwd+in","down","index"),p("center",[0,.02,.05],"X","fwd+in","down","index")],L:[p("center",[0,0,.05],"X","fwd+in","up","index")]},READY:{w:["ready","prepared","set up"],dur:.5,R:[p("neutral",[-.04,0,0],"R","fwd","down","palm"),p("neutral",[.06,0,0],"R","fwd","down","palm")],L:"mirror"},FINISH:{w:["done","finish","finished","complete","completed","already"],dur:.45,R:[p("neutral_hi",[0,0,0],"5","up","back","palm"),p("neutral_hi",[.04,-.02,.04],"5","up+out","fwd","palm")],L:"mirror"},NOW:{w:["now","today","current","currently"],dur:.4,R:[p("neutral",[0,.04,0],"Y","fwd","up","palm"),p("neutral",[0,-.04,0],"Y","fwd","up","palm")],L:"mirror"},THEN:{w:["then","next step"],dur:.45,R:[p("center",[.03,.06,.06],"1","fwd+in","down","index"),p("center",[.03,.06,.02],"1","fwd+in","down","index")],L:[p("center",[0,0,.05],"L","up","in","palm")]},NEXT:{w:["next","following","onward","on to"],dur:.45,R:[p("center",[0,.03,0],"BENT_B","up+in","fwd","palm"),p("center",[0,.03,.12],"BENT_B","up+in","fwd","palm")],L:[p("center",[0,0,.05],"BENT_B","up+in","back","palm")]},BEFORE:{w:["before","previous","earlier","prior"],dur:.45,R:[p("center",[.02,.01,.06],"BENT_B","up+in","back","back"),p("center",[.03,.01,-.06],"BENT_B","up+in","back","back")],L:[p("center",[.02,0,.08],"BENT_B","up+in","back","palm")]},AFTER:{w:["after","afterwards","once"],dur:.45,R:[p("center",[.04,.03,.02],"B","fwd+in","down","palm"),p("center",[.04,.03,.14],"B","fwd+in","down","palm")],L:[p("center",[0,0,.05],"B","in","back","back")]},LAST:{w:["last","final","finally"],dur:.45,R:[p("center",[.03,.08,.06],"I","fwd+in","down","pinky"),p("center",[.03,0,.07],"I","fwd+in","down","pinky")],L:[p("center",[0,0,.05],"I","up","back","palm")]},FIRST:{w:["first","firstly","begin with"],dur:.4,R:[p("center",[.05,.05,.08],"1","fwd+in","down","index"),p("center",[.02,.06,.06],"1","fwd+in","down","index")],L:[p("center",[0,0,.05],"10","up","back","palm")]},AGAIN:{w:["again","repeat","redo","once more"],dur:.45,R:[p("center",[.05,.08,.04],"BENT_B","in","up","palm"),p("center",[0,.03,.04],"BENT_B","down","down","middle")],L:xt()},ALWAYS:{w:["always","every time","constantly"],dur:.55,R:[p("neutral",[0,.03,0],"1","up+fwd","up","palm"),p("neutral",[.04,0,0],"1","up+fwd","up","palm"),p("neutral",[0,-.03,0],"1","up+fwd","up","palm"),p("neutral",[-.04,0,0],"1","up+fwd","up","palm"),p("neutral",[0,.03,0],"1","up+fwd","up","palm")]},ONLY:{w:["only","just","alone"],dur:.45,R:[p("neutral_hi",[0,0,0],"1","up","fwd","palm"),p("neutral_hi",[0,-.02,0],"1","up","back","palm")]},MORE:{w:["more","extra","add","additional","further"],dur:.45,R:[p("center",[0,0,.12],"FLAT_O","in+fwd","in","thumb"),p("center",[0,0,.06],"FLAT_O","in+fwd","in","thumb")],L:[p("center",[0,0,.06],"FLAT_O","in+fwd","in","thumb")]},THAN:{w:["than"],dur:.4,R:[p("center",[0,.03,.06],"B","fwd+in","down","palm"),p("center",[0,-.05,.06],"B","fwd+in","down","palm")],L:Lt([0,0,.05])},NOTHING:{w:["nothing","none","empty"],dur:.45,face:{neg:1},R:[p("neutral",[0,0,0],"O","up","in","palm"),p("neutral",[.08,-.02,.03],"O","up+out","in","palm")],L:"mirror"},ANY:{w:["any","anything","whichever"],dur:.45,R:[p("neutral",[0,0,0],"10","up","back","palm"),p("neutral",[.05,0,.02],"10","out+down","down","palm")]},OR:{w:["or","either"],dur:.45,R:[p("center",[.03,.06,.07],"1","fwd+in","down","index"),p("center",[.03,.02,.07],"1","fwd+in","down","index")],L:[p("center",[0,0,.05],"L","up","back","palm")]},BY:{w:["by","using a"],dur:.35,R:[p("neutral",[0,0,0],"B","fwd","in","palm"),p("neutral",[0,0,.06],"B","fwd","in","palm")]},FOR:{w:["for","purpose"],dur:.45,R:[p("forehead",[.045,0,0],"1","up+in","back","index"),p("forehead",[.06,-.04,.14],"1","fwd","down","index")]},FROM:{w:["from"],dur:.45,R:[p("center",[0,.03,.08],"X","up","back","index"),p("center",[0,.03,-.02],"X","up","back","index")],L:kr([0,0,.09])},IN:{w:["in","into","inside","within"],dur:.4,R:[p("center",[0,.08,.06],"FLAT_O","down","in","palm"),p("center",[0,.02,.06],"FLAT_O","down","in","palm")],L:[p("center",[0,-.01,.06],"C","fwd+in","up","palm")]},OUT:{w:["out","outside","exit","outer","external"],dur:.4,R:[p("center",[0,0,.06],"5","down","in","palm"),p("center",[0,.1,.06],"FLAT_O","down","in","palm")],L:[p("center",[0,-.01,.06],"C","fwd+in","up","palm")]},OFF:{w:["off","remove","removed","take off","away from"],dur:.4,R:[p("center",[0,.02,.06],"B","fwd+in","down","palm"),p("center",[.06,.08,.1],"B","fwd+in","down","palm")],L:Lt([0,0,.05])},OVER:{w:["over","above","across the top"],dur:.45,R:[p("center",[-.06,.08,.06],"B","fwd+in","down","palm"),p("center",[.08,.08,.06],"B","fwd+in","down","palm")],L:Lt([0,0,.05])},UNDER:{w:["under","below","beneath","underneath"],dur:.45,R:[p("center",[.02,-.06,.04],"A","up","in","palm"),p("center",[.02,-.06,.1],"A","up","in","palm")],L:Lt([0,0,.06])},BETWEEN:{w:["between","among"],dur:.5,R:et([p("center",[0,.03,.05],"B","fwd+in","in","palm"),p("center",[.03,.03,.05],"B","fwd+in","in","palm")],2),L:[p("center",[0,0,.05],"V","fwd+in","in","palm")]},THROUGH:{w:["through","thru","via"],dur:.45,R:[p("center",[.05,0,.03],"B","fwd+in","in","palm"),p("center",[-.05,-.02,.06],"B","fwd+in","in","palm")],L:yi([0,0,.05])},ACROSS:{w:["across","cross","crosses","crossing"],dur:.45,R:[p("center",[.06,.04,.04],"B","fwd+in","in","palm"),p("center",[-.08,.04,.08],"B","fwd+in","in","palm")],L:Lt([0,0,.05])},ALONG:{w:["along","alongside","runs along","parallel"],dur:.5,R:[p("center",[-.02,.03,0],"B","fwd+in","down","palm"),p("center",[-.02,.03,.2],"B","fwd+in","down","palm")],L:[p("center",[0,0,0],"B","fwd","down","palm")]},AGAINST:{w:["against","flush","flush with","touching"],dur:.4,R:[p("center",[.12,0,.06],"B","up","in","palm"),p("center",[.03,0,.06],"B","up","in","middle")],L:yi([.02,0,.06])},BESIDE:{w:["beside","next to","near","close","nearby"],dur:.45,R:[p("center",[.12,0,.05],"BENT_B","fwd+in","back","back"),p("center",[.05,0,.05],"BENT_B","fwd+in","back","back")],L:[p("center",[.02,0,.06],"BENT_B","fwd+in","back","palm")]},APART:{w:["apart","separate","spacing","space","gap","centres","centers"],dur:.45,R:[p("center",[.02,0,.05],"BENT_B","fwd","in","back"),p("center",[.13,0,.05],"BENT_B","fwd","in","back")],L:"mirror"},TOGETHER:{w:["together","joined","join","connect","connected","joint","joints"],dur:.45,R:[p("center",[.08,0,.05],"A","fwd","in","palm"),p("center",[.02,0,.05],"A","fwd","in","palm")],L:"mirror"},AROUND:{w:["round","around","all round"],dur:.55,R:[p("center",[0,.1,.1],"1","down","in","index"),p("center",[.06,.1,.04],"1","down","in","index"),p("center",[0,.1,-.02],"1","down","in","index"),p("center",[-.06,.1,.04],"1","down","in","index"),p("center",[0,.1,.1],"1","down","in","index")],L:kr([0,0,.04])},UP:{w:["up","upward","upwards","raise","rise","rises"],dur:.4,R:[p("neutral_hi",[0,-.04,0],"1","up","fwd","palm"),p("neutral_hi",[0,.05,0],"1","up","fwd","palm")]},DOWN:{w:["down","downward","downwards","lower","lowered"],dur:.4,R:[p("neutral",[0,.03,0],"1","down","back","palm"),p("neutral",[0,-.06,0],"1","down","back","palm")]},LEFT:{w:["left"],dur:.4,R:[p("neutral",[.02,0,0],"L","up","fwd","palm"),p("neutral",[-.1,0,0],"L","up","fwd","palm")]},RIGHTDIR:{w:["right side","to the right"],dur:.4,R:[p("neutral",[0,0,0],"R","up","fwd","palm"),p("neutral",[.1,0,0],"R","up","fwd","palm")]},HIGH:{w:["high","higher","top","upper","tall","height"],dur:.4,R:[p("neutral_hi",[0,-.03,0],"BENT_B","in","down","palm"),p("neutral_hi",[0,.07,0],"BENT_B","in","down","palm")]},LOW:{w:["low","bottom","lowest","base"],dur:.4,R:[p("neutral",[0,0,0],"BENT_B","in","down","palm"),p("neutral_lo",[0,-.06,0],"BENT_B","in","down","palm")]},MIDDLE:{w:["middle","centre","center","central","centred","half","centreline"],dur:.5,R:[p("center",[0,.08,.05],"BENT_B","down","in","middle"),p("center",[0,0,.05],"BENT_B","down","in","middle")],L:xt()},SIDE:{w:["side","sides","beside it"],dur:.45,R:[p("neutral",[.05,.06,0],"B","fwd","in","palm"),p("neutral",[.05,-.06,0],"B","fwd","in","palm")]},EDGE:{w:["edge","edges","rim","border"],dur:.45,R:[p("center",[.02,.02,0],"B","fwd+in","in","palm"),p("center",[.02,.02,.12],"B","fwd+in","in","palm")],L:xt([0,0,.05])},CORNER:{w:["corner","corners","angle"],dur:.45,R:[p("center",[.06,.02,.12],"B","fwd+in","down","middle"),p("center",[0,0,.1],"B","fwd+in","down","middle")],L:[p("center",[0,0,.1],"B","fwd+in","down","middle")]},END:{w:["end","ends","tip","tips"],dur:.45,R:[p("center",[0,.03,.02],"B","fwd+in","down","palm"),p("center",[0,-.06,.18],"B","fwd+in+down","down","palm")],L:[p("center",[0,0,.05],"B","fwd+in","in","palm")]},FAR:{w:["far","distant","away"],dur:.45,R:[p("neutral",[0,0,0],"A","fwd","in","palm"),p("far",[.03,.03,.12],"A","fwd","in","palm")]},NORTH:{w:["north","northern"],dur:.4,R:[p("neutral",[0,-.02,0],"N","up","fwd","palm"),p("neutral_hi",[0,.04,0],"N","up","fwd","palm")]},SOUTH:{w:["south","southern"],dur:.4,R:[p("neutral_hi",[0,0,0],"S","up","fwd","palm"),p("neutral",[0,-.04,0],"S","up","fwd","palm")]},EAST:{w:["east","eastern"],dur:.4,R:[p("neutral",[0,0,0],"E","up","fwd","palm"),p("neutral",[.1,0,0],"E","up","fwd","palm")]},WEST:{w:["west","western"],dur:.4,R:[p("neutral",[.04,0,0],"W","up","fwd","palm"),p("neutral",[-.06,0,0],"W","up","fwd","palm")]},STRAIGHT:{w:["straight","straightness","direct","aligned","line up","lined up"],dur:.45,R:[p("neutral",[0,.03,-.05],"B","fwd","in","palm"),p("neutral",[0,.03,.12],"B","fwd","in","palm")]},LEVEL:{w:["level","levels","horizontal","even"],dur:.5,R:[p("center",[.03,0,.05],"B","fwd+in","down","palm"),p("center",[.15,0,.05],"B","fwd+in","down","palm")],L:"mirror"},FLAT:{w:["flat","smooth","surface"],dur:.45,R:[p("center",[0,.03,0],"B","fwd","down","palm"),p("center",[.12,.03,.08],"B","fwd","down","palm")],L:Lt([0,0,.03])},DIAGONAL:{w:["diagonal","diagonally","slope","slopes","sloping","pitch","fall","falls"],dur:.45,R:[p("neutral_hi",[-.05,.05,0],"B","in+0.5down","down+out","palm"),p("neutral",[.08,-.05,0],"B","in+0.5down","down+out","palm")]},UPRIGHT:{w:["upright","vertical","vertically","plumb","stand up"],dur:.45,R:[p("center",[.02,0,.05],"1","up","in","palm"),p("center",[.02,.12,.05],"1","up","in","palm")],L:xt([0,-.04,.05])},GO:{w:["go","goes","going","went","run","runs","travel","proceed","continue"],dur:.45,R:[p("neutral",[0,.04,0],"1","up","fwd","palm"),p("far",[0,0,.08],"1","fwd","down","palm")],L:"mirror"},COME:{w:["come","comes","came","bring","brings","return","back to"],dur:.45,R:[p("far",[0,0,.08],"1","fwd","down","palm"),p("neutral",[0,.04,-.04],"1","up","back","palm")],L:"mirror"},BACK:{w:["back","backward","behind","reverse"],dur:.4,R:[p("shoulder",[0,.03,.12],"10","up+back","in","palm"),p("shoulder",[0,.05,.03],"10","back","in","palm")]},MOVE:{w:["move","moves","moved","shift","swing","swung","slide","slides"],dur:.45,R:[p("neutral",[-.04,0,0],"FLAT_O","down","back","palm"),p("neutral",[.08,.02,.06],"FLAT_O","down","back","palm")],L:"mirror"},PUT:{w:["put","place","placed","set","lay","lays","laid","position","positions","positioned","sit","sits","seat","land","landed","rest","rests"],dur:.45,R:[p("neutral",[0,.04,-.04],"FLAT_O","down+fwd","down","palm"),p("neutral",[0,-.02,.08],"FLAT_O","down+fwd","down","palm")],L:"mirror"},HOLD:{w:["hold","holds","held","grip","support","supports"],dur:.45,R:[p("neutral",[0,.02,0],"C","in","back","palm"),p("neutral",[0,0,-.02],"S","in","back","palm")],L:"mirror"},LIFT:{w:["lift","lifted","lifting","raise up","hoist","hoisted"],dur:.5,R:[p("neutral_lo",[0,0,0],"B","fwd","up","palm"),p("neutral_hi",[0,.04,0],"B","fwd","up","palm")],L:"mirror"},CARRY:{w:["carry","carried","carries","transport"],dur:.5,R:[p("neutral",[0,0,0],"BENT_B","fwd","up","palm"),p("neutral",[.12,.02,.02],"BENT_B","fwd","up","palm")],L:[p("neutral",[-.06,0,0],"BENT_B","fwd","up","palm"),p("neutral",[.05,.02,.02],"BENT_B","fwd","up","palm")]},PULL:{w:["pull","pulled","drag","draw back","tension","tighten"],dur:.45,R:[p("neutral",[0,0,.14],"C","in","back","palm"),p("neutral",[0,0,-.02],"S","in","back","palm")],L:[p("neutral",[0,-.02,.18],"C","in","back","palm"),p("neutral",[0,-.02,.02],"S","in","back","palm")]},PUSH:{w:["push","pushed","press","pressed"],dur:.45,R:[p("neutral",[0,0,-.02],"B","up","fwd","palm"),p("neutral",[0,0,.13],"B","up","fwd","palm")],L:"mirror"},DROP:{w:["drop","dropped","let go","release","released"],dur:.4,R:[p("neutral",[0,.03,0],"FLAT_O","down","back","palm"),p("neutral",[0,-.03,.02],"5","down","back","palm")]},STOP:{w:["stop","stops","halt","stopped"],dur:.4,R:[p("center",[0,.12,.05],"B","fwd","in","palm"),p("center",[0,.01,.05],"B","fwd","in","palm")],L:xt([0,-.01,.05])},OPEN:{w:["open","opens","opened"],dur:.45,R:[p("center",[.01,.03,.05],"B","up+fwd","fwd","palm"),p("center",[.1,.03,.03],"B","up+fwd","fwd+in","palm")],L:"mirror"},CLOSE:{w:["close","closes","closed","shut"],dur:.45,R:[p("center",[.1,.03,.03],"B","up+fwd","fwd+in","palm"),p("center",[.01,.03,.05],"B","up+fwd","fwd","palm")],L:"mirror"},CHECK:{w:["check","checks","checked","inspect","inspected","inspection","examine","verify"],dur:.55,R:[p("eye",[.04,-.04,.04],"1","up","back","index"),p("center",[0,.02,.06],"1","down+fwd","in","index"),p("center",[0,.02,.15],"1","down+fwd","in","index")],L:xt([0,-.02,.08])},MEASURE:{w:["measure","measured","measures","measurement","tape","tapes","tape measure"],dur:.5,R:et([p("center",[.01,.02,.06],"Y","fwd","down","thumb"),p("center",[.06,.02,.06],"Y","fwd","down","thumb")],2),L:"mirror"},MARK:{w:["mark","marks","marked","marking","draw","draws","drawing","write","pencil"],dur:.5,R:[p("center",[.02,.03,.05],"FLAT_O","down+fwd","in","index"),p("center",[.02,.01,.12],"FLAT_O","down+fwd","in","index")],L:xt([0,-.01,.07])},CUT:{w:["cut","cuts","cutting","saw","sawn","trim","trimmed"],dur:.55,R:et([p("center",[.02,0,0],"B","fwd","in","palm"),p("center",[.02,0,.12],"B","fwd","in","palm")],2),L:Lt([0,-.03,.06])},FIX:{w:["fix","fixed","fixing","repair","secure","secured","fasten","fastened","attach","attached"],dur:.5,R:et([p("center",[.03,0,.05],"FLAT_O","in","in","index"),p("center",[.05,.02,.06],"FLAT_O","in+down","in","index")],2),L:"mirror"},NAIL:{w:["nail","nails","nailed","nailing","hammer","hammered"],dur:.55,R:et([p("center",[.02,.1,.06],"S","fwd+in","in","palm"),p("center",[.02,.03,.06],"S","fwd+in","in","palm")],2),L:[p("center",[0,-.02,.06],"A","fwd+in","in","palm")]},DRILL:{w:["drill","drilled","drilling","bore"],dur:.5,R:[p("center",[.03,.02,0],"L","in+fwd","down","index"),p("center",[.01,.02,.05],"L","in+fwd","down","index")],L:yi([0,0,.07])},BOLT:{w:["bolt","bolts","bolted","screw","screws","screwed"],dur:.5,R:[p("center",[.02,.03,.05],"V","down","in","index"),p("center",[.02,.03,.05],"V","down","back","index"),p("center",[.02,.03,.05],"V","down","in","index")],L:xt([0,-.03,.05])},TIE:{w:["tie","tied","ties","knot","lash","lashed"],dur:.55,R:[p("center",[.03,.02,.05],"H","in","back","palm"),p("center",[0,.05,.05],"H","in","down","palm"),p("center",[.07,0,.05],"H","out","back","palm")],L:[p("center",[.03,.02,.05],"H","in","back","palm"),p("center",[0,0,.05],"H","in","up","palm"),p("center",[.07,0,.05],"H","out","back","palm")]},CLEAN:{w:["clean","cleaned","sweep","swept","clear"],dur:.45,R:[p("center",[0,.03,0],"B","fwd+in","down","palm"),p("center",[0,.03,.14],"B","fwd+in","down","palm")],L:xt([0,0,.05])},BRUSH:{w:["brush","brushed","paint","painted","coat","coats","coated","apply","applied"],dur:.55,R:et([p("center",[.01,.06,.06],"H","down+fwd","in","index"),p("center",[.01,-.03,.06],"H","down+fwd","in","index")],2),L:yi([0,0,.06])},STACK:{w:["stack","stacked","pile","store","stored"],dur:.5,R:[p("center",[.03,-.02,.05],"B","fwd+in","down","palm"),p("center",[.03,.06,.05],"B","fwd+in","down","palm"),p("center",[.03,.14,.05],"B","fwd+in","down","palm")],L:xt([0,-.06,.05])},READ:{w:["read","reads","reading","readings"],dur:.5,R:et([p("center",[0,.07,.07],"V","down","in","index"),p("center",[0,0,.07],"V","down","in","index")],2),L:yi([0,.02,.06])},LEARN:{w:["learn","learns","study","understand"],dur:.5,R:[p("center",[0,0,.07],"5","down","down","palm"),p("forehead",[0,0,.01],"FLAT_O","back","down","index",{noTilt:1})],L:xt([0,-.02,.06])},PRACTICE:{w:["practise","practice","practising","training","exercise"],dur:.55,R:et([p("center",[0,.03,.03],"A","fwd+in","down","palm"),p("center",[0,.03,.11],"A","fwd+in","down","palm")],2),L:kr([0,0,.06])},EXPLORE:{w:["explore","explored","exploring","discover","look around","search"],dur:.6,R:[p("eye",[.04,-.04,.05],"V","up","back","index"),p("neutral",[-.03,.06,.1],"V","fwd","down","index"),p("neutral",[.06,.05,.12],"V","fwd","down","index")]},KNOW:{w:["know","knows","aware"],dur:.4,R:[p("forehead",[.04,0,.04],"B","up+in","back","middle"),p("forehead",[.05,0,.005],"B","up+in","back","middle")]},THINK:{w:["think","remember","consider"],dur:.4,R:[p("forehead",[.05,0,.05],"1","up+in","back","index"),p("temple",[0,0,0],"1","up+in","back","index")]},WANT:{w:["want","wants","like to"],dur:.45,R:[p("neutral",[0,0,.1],"CLAW_5","fwd","up","palm"),p("neutral",[0,0,0],"CLAW_5","fwd","up","palm")],L:"mirror"},HELP:{w:["help","helps","assist"],dur:.45,R:[p("center",[0,.02,.05],"10","up","in","palm"),p("center",[0,.1,.05],"10","up","in","palm")],L:[p("center",[0,-.02,.05],"B","fwd+in","up","palm"),p("center",[0,.06,.05],"B","fwd+in","up","palm")]},TEST:{w:["test","tested","try","tries","trial"],dur:.55,R:[p("neutral_hi",[.02,0,0],"X","up","fwd","palm"),p("neutral",[.02,-.04,.08],"X","up+fwd","fwd","palm")],L:"mirror"},SHOWME:{w:["tell","tells","say","says","explain","explains","describe"],dur:.45,R:[p("chin",[0,0,.03],"1","up","back","index"),p("chin",[.02,-.04,.16],"1","up+fwd","back","index")]},LISTEN:{w:["listen","hear","audio","narration","sound"],dur:.45,R:[p("ear",[.05,0,.03],"C","up","in","palm"),p("ear",[.035,0,.02],"C","up","in","palm")]},SIGN:{w:["sign","signs","signing","sign language"],dur:.55,R:[p("neutral_hi",[0,.03,0],"1","up+in","fwd","palm"),p("neutral_hi",[0,-.03,.04],"1","up+in","fwd","palm"),p("neutral_hi",[0,.03,.04],"1","up+in","fwd","palm")],L:[p("neutral_hi",[0,-.03,.04],"1","up+in","fwd","palm"),p("neutral_hi",[0,.03,0],"1","up+in","fwd","palm"),p("neutral_hi",[0,-.03,.04],"1","up+in","fwd","palm")]},SIT:{w:["sit on","sits on","bears on","stands on"],dur:.4,R:[p("center",[0,.08,.05],"H","fwd+in","down","middle"),p("center",[0,.02,.05],"BENT_V","fwd+in","down","middle")],L:[p("center",[0,0,.05],"H","fwd+in","down","palm")]},STAND:{w:["stand","stands","standing","stood"],dur:.4,R:[p("center",[0,.08,.05],"V","down","back","index"),p("center",[0,.02,.05],"V","down","back","index")],L:xt([0,-.01,.05])},FALLDOWN:{w:["fall over","falls over","collapse","collapses","topple"],dur:.5,face:{neg:1},R:[p("center",[0,.03,.05],"V","down","back","index"),p("center",[.1,-.02,.08],"V","out+up","up","index")],L:xt([0,-.01,.05])},BREAK:{w:["break","breaks","broken","crack","cracks","split","splits"],dur:.45,face:{neg:1},R:[p("center",[.03,0,.05],"S","fwd","down","palm"),p("center",[.06,-.03,.05],"S","fwd+out","in","palm")],L:"mirror"},DRY:{w:["dry","dried","drying"],dur:.45,R:[p("chin",[.04,0,0],"X","in","down","index"),p("chin",[-.04,0,0],"X","in","down","index")]},WAIT:{w:["wait","waiting","pause"],dur:.5,R:et([p("neutral",[.06,0,.04],"5","fwd+in","up","palm"),p("neutral",[.06,.01,.04],"BENT_5","fwd+in","up","palm")],2),L:[p("neutral",[0,0,.02],"5","fwd+in","up","palm")]},COVER:{w:["cover","covers","covered","protect","protects","protected"],dur:.45,R:[p("center",[0,.05,0],"B","fwd+in","down","palm"),p("center",[0,.03,.1],"B","fwd+in","down","palm")],L:[p("center",[0,0,.05],"S","fwd+in","down","palm")]},SEAL:{w:["seal","sealed","sealant","sealing","waterproof"],dur:.45,R:[p("center",[0,.06,.05],"A","down","in","thumb"),p("center",[0,.01,.05],"A","down","in","thumb")],L:xt([0,-.02,.05])},CLIP:{w:["clip","clips","clipped","clamp","clamps","clamped"],dur:.45,R:[p("center",[0,.03,.05],"C","fwd+in","in","palm"),p("center",[0,.02,.05],"FLAT_O","fwd+in","in","palm")],L:Lt([0,0,.05])},OVERLAP:{w:["lap","laps","overlap","overlaps","lapped"],dur:.45,R:[p("center",[-.06,.04,.05],"B","fwd+in","down","palm"),p("center",[.03,.02,.05],"B","fwd+in","down","palm")],L:Lt([.03,0,.05])},SNAP:{w:["snap","snapped","flick"],dur:.4,R:[p("neutral",[0,.02,0],"F","up","fwd","palm"),p("neutral",[0,0,.02],"L","up","fwd","palm")]},STRETCH:{w:["stretch","stretched","taut","pulled tight"],dur:.5,R:[p("center",[.02,0,.05],"S","fwd","in","palm"),p("center",[.16,0,.05],"S","fwd","in","palm")],L:"mirror"},TIGHT:{w:["tight","tightly","firm","firmly","secure","solid","strong"],dur:.45,R:[p("neutral",[0,.04,0],"CLAW_5","fwd+up","back","palm"),p("neutral",[0,-.03,0],"S","fwd+up","back","palm")],L:"mirror"},ZOOM:{w:["zoom","enlarge","closer"],dur:.45,R:[p("neutral_hi",[0,0,.05],"C","up","in","palm"),p("neutral_hi",[0,0,-.04],"C","up","in","palm")],L:"mirror"},TURN:{w:["turn","turns","rotate","rotates","rotation","spin"],dur:.5,R:[p("neutral",[0,0,.05],"1","down","back","index"),p("neutral",[.04,0,0],"1","down","back","index"),p("neutral",[0,0,-.04],"1","down","back","index"),p("neutral",[-.04,0,0],"1","down","back","index")]},THING:{w:["item","items","thing","things","object","objects"],dur:.45,R:[p("neutral",[0,0,0],"B","fwd","up","palm"),p("neutral",[.06,-.02,0],"B","fwd","up","palm"),p("neutral",[.12,0,0],"B","fwd","up","palm")]},TOOL:{w:["tool","tools","equipment","instrument"],dur:.5,R:et([p("center",[0,.02,.05],"T","up","fwd","palm"),p("center",[0,-.04,.05],"T","up","fwd","palm")],2),L:yi([0,0,.06])},MATERIAL:{w:["material","materials","stuff","supplies"],dur:.5,R:[p("neutral",[0,.04,0],"M","fwd","down","palm"),p("neutral",[.06,0,0],"M","fwd","down","palm"),p("neutral",[.12,.04,0],"M","fwd","down","palm")]},WOOD:{w:["wood","timber","timbers","wooden","lumber","board","boards","plank"],dur:.55,R:et([p("center",[.03,.02,0],"B","fwd+in","in","palm"),p("center",[.03,.02,.09],"B","fwd+in","in","palm")],2),L:Lt([0,-.02,.04])},METAL:{w:["metal","steel","iron","tin","galvanised"],dur:.45,R:et([p("chin",[0,-.03,.01],"X","in","down","index"),p("chin",[0,-.03,.04],"X","in","down","index")],2)},WATER:{w:["water","wet","liquid"],dur:.45,R:et([p("chin",[.01,0,.02],"W","up+in","in","index"),p("chin",[.01,0,0],"W","up+in","in","index")],2)},RAIN:{w:["rain","rainwater","rains","raining"],dur:.5,R:et([p("neutral_hi",[0,.06,0],"CLAW_5","fwd","down","palm"),p("neutral",[0,-.02,0],"CLAW_5","fwd","down","palm")],2),L:"mirror"},WIND:{w:["wind","winds","windy","blow","blows","air"],dur:.55,R:et([p("neutral_hi",[.02,0,0],"5","up","in","palm"),p("neutral_hi",[.1,0,0],"5","up","in","palm")],2),L:"mirror"},GROUND:{w:["ground","floor","earth","soil"],dur:.45,R:[p("neutral_lo",[0,0,0],"B","fwd","down","palm"),p("neutral_lo",[.14,0,0],"B","fwd","down","palm")],L:"mirror"},HOUSE:{w:["house","building","buildings","home"],dur:.6,R:[p("center_hi",[.02,.06,.02],"B","in+up","down+out","middle"),p("center_hi",[.1,-.03,.02],"B","up","in","palm"),p("center",[.1,-.03,.02],"B","up","in","palm")],L:"mirror"},WALL:{w:["wall","walls","brickwork","masonry"],dur:.5,R:[p("neutral",[-.05,.02,0],"B","up","fwd","palm"),p("neutral",[.08,.02,0],"B","up","fwd","palm")],L:"mirror"},LINE:{w:["line","lines","string","strings","string line","chalk line","cord"],dur:.45,R:[p("center",[.02,.03,.05],"I","fwd","in","pinky"),p("center",[.17,.03,.05],"I","fwd","in","pinky")],L:"mirror"},ROPE:{w:["rope","ropes","cable","cables"],dur:.5,R:[p("center",[.02,0,.05],"R","fwd","in","palm"),p("center",[.17,0,.05],"R","fwd","in","palm")],L:"mirror"},SQUARE:{w:["square","squared","squaring","right angle","rectangle"],dur:.6,R:[p("center",[0,.08,.05],"1","fwd","down","index"),p("center",[.1,.08,.05],"1","fwd","down","index"),p("center",[.1,-.02,.05],"1","fwd","down","index")],L:[p("center",[0,.08,.05],"1","fwd","down","index"),p("center",[.1,.08,.05],"1","fwd","down","index"),p("center",[.1,-.02,.05],"1","fwd","down","index")]},SIZE:{w:["size","sizes","dimension","dimensions"],dur:.45,R:[p("center",[.02,0,.05],"Y","fwd","down","thumb"),p("center",[.12,0,.05],"Y","fwd","down","thumb")],L:"mirror"},LONG:{w:["long","length","lengths","longer","length of"],dur:.5,R:[p("center",[.06,0,.05],"1","up+in","down","index"),p("center",[-.1,.12,.1],"1","up+in","down","index")],L:[p("center",[-.02,.06,.06],"B","out+up","down","palm")]},SHORT:{w:["short","shorter","small","little","tiny"],dur:.45,R:et([p("center",[0,.03,.05],"H","fwd+in","in","middle"),p("center",[0,.03,.09],"H","fwd+in","in","middle")],2),L:[p("center",[0,0,.07],"H","fwd+in","in","palm")]},BIG:{w:["big","large","wide","width"],dur:.45,R:[p("neutral",[-.02,0,0],"L","fwd","in","palm"),p("neutral",[.1,0,0],"L","fwd","in","palm")],L:"mirror"},HALFOF:{w:["half of","halfway"],dur:.45,R:[p("neutral",[0,0,0],"H","in","back","palm"),p("neutral",[0,-.03,0],"H","in","down","palm")]},FULL:{w:["full","filled","fill"],dur:.45,R:[p("center",[0,.03,.05],"B","fwd+in","down","palm"),p("center",[-.06,.03,.05],"B","fwd+in","down","palm")],L:[p("center",[0,0,.05],"S","fwd+in","down","palm")]},SHAPE:{w:["shape","shapes","outline","outlined","outlines","pattern","template","jig"],dur:.55,R:[p("neutral_hi",[0,0,0],"A","up","fwd","palm"),p("neutral",[.04,-.06,0],"A","up","fwd","palm"),p("neutral_lo",[0,-.06,0],"A","up","fwd","palm")],L:"mirror"},PIECE:{w:["piece","pieces","part","parts","member","members","component","components","section"],dur:.45,R:[p("center",[.03,.02,.08],"B","fwd+in","in","palm"),p("center",[.03,.02,.04],"BENT_B","fwd+in","in","palm")],L:xt([0,-.02,.06])},PLACEN:{w:["site","place","location","area","zone","spot","workplace"],dur:.55,R:[p("neutral",[-.02,0,.06],"P","fwd+in","down","palm"),p("neutral",[.06,-.02,0],"P","fwd+in","down","palm"),p("neutral",[-.02,-.04,-.04],"P","fwd+in","down","palm")],L:"mirror"},TIME:{w:["time","times","minute","minutes"],dur:.4,R:[p("center",[0,.05,.05],"X","down","in","index"),p("center",[0,.01,.05],"X","down","in","index")],L:Lt([0,-.01,.05])},NAME:{w:["name","names","named","label","labels","labelled","tag","tags","tagged"],dur:.45,R:et([p("center",[0,.04,.05],"H","in+fwd","in","middle"),p("center",[0,.01,.05],"H","in+fwd","in","middle")],2),L:[p("center",[0,0,.05],"H","in+fwd","in","palm")]},LIST:{w:["list","lists","checklist"],dur:.55,R:[p("center",[0,.1,.06],"BENT_B","in","back","middle"),p("center",[0,.03,.06],"BENT_B","in","back","middle"),p("center",[0,-.04,.06],"BENT_B","in","back","middle")],L:[p("center",[.03,.04,.03],"B","up","out","palm")]},CARD:{w:["card","cards","panel","box"],dur:.45,R:[p("center",[0,0,.05],"L","up","fwd","palm"),p("center",[.1,0,.05],"L","up","fwd","palm")],L:"mirror"},BUTTON:{w:["button","buttons","icon"],dur:.4,R:[p("chest",[0,.05,.04],"F","up","back","index"),p("chest",[0,.05,0],"F","up","back","index")]},COMPUTER_MOUSE:{w:["mouse","cursor","pointer"],dur:.5,R:et([p("center",[.04,.02,.04],"BENT_5","fwd","down","palm"),p("center",[.07,.02,.09],"BENT_5","fwd","down","palm")],2),L:xt([0,-.03,.06])},CAMERA:{w:["camera","view","views","screen"],dur:.45,R:[p("eye",[.07,-.02,.06],"C","up","in","palm"),p("eye",[.07,-.02,.06],"X","up","in","palm")]},ARROW:{w:["arrow","arrows"],dur:.45,R:[p("neutral",[0,0,0],"1","fwd+out","down","index"),p("neutral",[.08,0,.04],"1","fwd+out","down","index")]},COLOR:{w:["colour","color","colours"],dur:.45,R:et([p("chin",[0,-.01,.02],"5","up","back","index"),p("chin",[.01,-.01,.02],"BENT_5","up","back","index")],2)},GREEN:{w:["green"],dur:.45,R:et([p("neutral_hi",[0,0,0],"G","up","in","palm"),p("neutral_hi",[0,0,0],"G","up","in+fwd","palm")],2)},RED:{w:["red"],dur:.4,R:[p("chin",[0,.03,.01],"1","up","back","index"),p("chin",[0,-.02,.01],"X","up","back","index")]},BLUE:{w:["blue"],dur:.45,R:et([p("neutral_hi",[0,0,0],"B","up","in","palm"),p("neutral_hi",[0,0,0],"B","up","in+fwd","palm")],2)},HAND:{w:["hand","hands","manual","by hand"],dur:.45,R:[p("center",[.02,.03,.04],"B","in","back","palm"),p("center",[.02,0,.08],"B","in","back","palm")],L:[p("center",[0,0,.04],"B","in","back","back")]},SAFE:{w:["safe","safely","safety"],dur:.45,R:[p("center",[.02,0,.05],"S","up","in","palm"),p("center",[.1,0,.05],"S","up","fwd","palm")],L:"mirror"},DANGER:{w:["danger","dangerous","risk","hazard"],dur:.45,face:{brows:"down"},R:et([p("center",[0,0,.05],"A","up","in","thumb"),p("center",[0,.07,.03],"A","up","in","thumb")],2),L:[p("center",[0,0,.03],"S","up","back","back")]},WAY:{w:["way","ways","method","route","path","road"],dur:.45,R:[p("neutral",[0,0,0],"B","fwd","in","palm"),p("neutral",[0,0,.15],"B","fwd","in","palm")],L:"mirror"},CASE:{w:["case","example","if"],dur:.45,R:[p("neutral_hi",[0,0,0],"F","up","in","palm"),p("neutral",[0,.02,0],"F","up","in","palm")],L:[p("neutral",[0,.02,0],"F","up","in","palm"),p("neutral_hi",[0,0,0],"F","up","in","palm")]},TEMPORARY:{w:["temporary","temporarily","for now"],dur:.45,R:[p("center",[0,0,.05],"H","fwd","in","palm"),p("center",[0,0,.11],"H","fwd","in","palm")],L:[p("center",[0,-.02,.06],"H","fwd+in","in","palm")]},PERMANENT:{w:["permanent","permanently","forever","final position"],dur:.5,R:[p("neutral",[0,.02,-.03],"Y","fwd","down","palm"),p("neutral",[0,-.02,.12],"Y","fwd","down","palm")],L:"mirror"},NEW:{w:["new","fresh"],dur:.45,R:[p("center",[.06,0,.06],"BENT_B","in","up","palm"),p("center",[-.04,.03,.06],"BENT_B","in","up","palm")],L:xt([0,-.02,.06])},TWO:{w:["two","second","twice"],dur:.35,R:[p("neutral_hi",[0,0,0],"2","up","back","palm")]},THREE:{w:["three","third"],dur:.35,R:[p("neutral_hi",[0,0,0],"3","up","back","palm")]},FOUR:{w:["four","fourth"],dur:.35,R:[p("neutral_hi",[0,0,0],"4","up","back","palm")]},FIVE:{w:["five","fifth"],dur:.35,R:[p("neutral_hi",[0,0,0],"5","up","back","palm")]},SIX:{w:["six"],dur:.35,R:[p("neutral_hi",[0,0,0],"6","up","fwd","palm")]},SEVEN:{w:["seven"],dur:.35,R:[p("neutral_hi",[0,0,0],"7","up","fwd","palm")]},EIGHT:{w:["eight"],dur:.35,R:[p("neutral_hi",[0,0,0],"8","up","fwd","palm")]},NINE:{w:["nine"],dur:.35,R:[p("neutral_hi",[0,0,0],"9","up","fwd","palm")]},TEN:{w:["ten"],dur:.45,R:[p("neutral_hi",[0,0,0],"10","up","in","palm"),p("neutral_hi",[0,0,0],"10","up","fwd+in","palm"),p("neutral_hi",[0,0,0],"10","up","in","palm")]},HUNDRED:{w:["hundred","hundreds"],dur:.4,R:[p("neutral_hi",[0,0,0],"1","up","back","palm"),p("neutral_hi",[0,-.01,.03],"C","up","in","palm")]},THOUSAND:{w:["thousand","thousands"],dur:.45,R:[p("center",[0,.06,.06],"BENT_B","down","in","middle"),p("center",[0,0,.06],"BENT_B","down","in","middle")],L:xt()},MILLIMETRE:{w:["millimetres","millimetre","mm","millimeters","millimeter"],dur:.45,R:[p("fs",[0,0,0],"M","up","fwd","palm"),p("fs",[.02,0,0],"M","up","fwd","palm")]},METRE:{w:["metres","metre","m","meters","meter"],dur:.35,R:[p("fs",[0,0,0],"M","up","fwd","palm"),p("fs",[0,-.02,.02],"M","up","fwd","palm")]},DEGREE:{w:["degrees","degree"],dur:.45,R:[p("neutral_hi",[0,0,0],"O","up","in+0.5fwd","palm"),p("neutral_hi",[0,.03,0],"O","up","in+0.5fwd","palm")]},LITRE:{w:["litre","litres","l","liter"],dur:.35,R:[p("fs",[0,0,0],"L","up","fwd","palm")]},TRUSS:{w:["truss","trusses"],prov:1,dur:.65,R:[p("center_hi",[0,.07,.06],"1","down+out","fwd","index"),p("center",[.13,0,.06],"1","down+out","fwd","index"),p("center",[0,0,.06],"1","in","fwd","index")],L:"mirror"},RAFTER:{w:["rafter","rafters","pattern rafter"],prov:1,dur:.5,R:[p("center_hi",[0,.06,.05],"B","out+down","in+down","middle"),p("center",[.16,-.02,.05],"B","out+down","in+down","middle")]},TIEBEAM:{w:["tie beam","tie beams","ceiling joist"],prov:1,dur:.55,R:[p("center",[0,-.02,.05],"H","out","down","palm"),p("center",[.16,-.02,.05],"H","out","down","palm")],L:"mirror"},BEAM:{w:["beam","beams","joist","joists","bearer","bearers"],prov:1,dur:.5,R:[p("center",[0,0,.05],"H","out","down","palm"),p("center",[.16,0,.05],"H","out","down","palm")],L:"mirror"},KINGPOST:{w:["king post","king posts","kingpost"],prov:1,dur:.6,R:[p("center",[0,-.04,.05],"K","up","in","palm"),p("center",[0,.12,.05],"K","up","in","palm")]},POST:{w:["post","posts","stud","studs","upright"],prov:1,dur:.45,R:[p("center",[0,-.04,.05],"H","up","in","palm"),p("center",[0,.1,.05],"H","up","in","palm")]},STRUT:{w:["strut","struts","brace","braces","bracing","braced"],prov:1,dur:.5,R:[p("center",[0,-.02,.05],"H","up+out","in+up","palm"),p("center",[.1,.1,.05],"H","up+out","in+up","palm")]},PURLIN:{w:["purlin","purlins","batten","battens"],prov:1,dur:.55,R:[p("center_hi",[0,-.04,.05],"H","out","down","palm"),p("center_hi",[.17,-.04,.05],"H","out","down","palm")],L:[p("center",[0,0,.05],"B","out+0.6up","in+up","palm")]},WALLPLATE:{w:["wall plate","wall plates","plate","plates","base plate","base plates"],prov:1,dur:.55,R:[p("center",[0,.04,.03],"H","out","down","palm"),p("center",[.16,.04,.03],"H","out","down","palm")],L:[p("center",[0,0,.05],"B","out","fwd","palm")]},RIDGE:{w:["ridge","ridges","apex","apexes","peak","top of the truss"],prov:1,dur:.55,R:[p("center_hi",[.12,-.05,.05],"B","in+up","down+out","middle"),p("center_hi",[.02,.05,.05],"B","in+up","down+out","middle")],L:"mirror"},GABLE:{w:["gable","gables","gable end","gable ends"],prov:1,dur:.6,R:[p("center_hi",[.02,.07,.05],"B","in+up","fwd","middle"),p("center",[.14,-.02,.05],"B","in+up","fwd","middle"),p("center",[0,-.02,.05],"B","up","fwd","palm")],L:"mirror"},EAVES:{w:["eaves","eave","overhang","overhangs"],prov:1,dur:.55,R:[p("neutral_hi",[-.04,0,0],"B","out+0.5down","down","palm"),p("neutral",[.1,-.02,.08],"B","out+0.5down","down","palm")]},FASCIA:{w:["fascia","fascias","fascia board","barge board","barge boards","bargeboard","barge"],prov:1,dur:.55,R:[p("center",[0,.03,.08],"B","out","fwd","palm"),p("center",[.17,.03,.08],"B","out","fwd","palm")],L:"mirror"},GUTTER:{w:["gutter","gutters","guttering","channel"],prov:1,dur:.55,R:[p("center",[0,0,.06],"C","out","up","palm"),p("center",[.18,-.02,.06],"C","out","up","palm")],L:"mirror"},DOWNPIPE:{w:["downpipe","downpipes","down pipe","pipe","pipes"],prov:1,dur:.55,R:[p("neutral_hi",[0,0,0],"C","in","down","palm"),p("neutral_lo",[0,-.02,0],"C","in","down","palm")]},OUTLET:{w:["outlet","outlets","drain","drains","downpipe outlet"],prov:1,dur:.5,R:[p("center",[0,0,.06],"O","down","in","palm"),p("center",[0,-.08,.06],"O","down","in","palm")],L:[p("center",[0,0,.06],"C","out","up","palm")]},BRACKET:{w:["bracket","brackets","gutter bracket","gutter brackets","hanger"],prov:1,dur:.5,R:[p("center",[0,.02,.06],"C","out","up","palm"),p("center",[0,.02,.03],"C","out","up","palm")],L:yi([0,.03,.02])},SHEET:{w:["sheet","sheets","roof sheet","roof sheets","roofing sheet","iron sheet","cgi"],prov:1,dur:.55,R:et([p("center",[0,.03,.04],"B","out","down","palm"),p("center",[.06,.03,.08],"B","out","down","palm")],2),L:xt([0,0,.05])},RIDGECAP:{w:["ridge cover","ridge cap","ridge capping","flashing","flashings"],prov:1,dur:.55,R:[p("center_hi",[0,.03,.04],"BENT_B","down","back","palm"),p("center_hi",[0,.03,.14],"BENT_B","down","back","palm")]},HEEL:{w:["heel","heels","heel joint","heel joints"],prov:1,dur:.5,R:[p("center",[.02,.02,.05],"B","in+up","down+in","palm"),p("center",[.02,-.02,.05],"B","in+up","down+in","palm")],L:Lt([.04,-.04,.05])},BIRDSMOUTH:{w:["birdsmouth","birdsmouths","bird's mouth","notch","notches"],prov:1,dur:.5,R:[p("center",[.02,.02,.05],"G","fwd+in","down","index"),p("center",[.02,.02,.05],"G","fwd+in","down","index",{}),p("center",[.02,.02,.05],"X","fwd+in","down","index")],L:Lt([0,-.02,.05])},GUSSET:{w:["gusset plate","gusset plates","gusset","gussets","gang nail","nail plate","cleat","cleats","strap","straps"],prov:1,dur:.5,R:[p("center",[.02,0,.07],"B","up","back","palm"),p("center",[.02,0,.05],"B","up","back","palm")],L:[p("center",[0,0,.03],"S","up","back","back")]},WASHER:{w:["washer","washers"],prov:1,dur:.4,R:[p("neutral",[0,0,0],"O","up","fwd","palm"),p("neutral",[0,0,.02],"F","up","fwd","palm")]},SCAFFOLD:{w:["scaffold","scaffolding","platform","platforms","trestle","trestles","ladder","ladders"],prov:1,dur:.6,R:[p("neutral_lo",[0,0,0],"V","up","fwd","palm"),p("neutral",[0,.03,0],"V","up","fwd","palm"),p("neutral_hi",[0,.03,0],"V","up","fwd","palm")],L:[p("neutral_lo",[0,.05,0],"V","up","fwd","palm"),p("neutral",[0,.08,0],"V","up","fwd","palm"),p("neutral_hi",[0,0,0],"V","up","fwd","palm")]},CORRUGATION:{w:["corrugation","corrugations","crest","crests","rib","ribs"],prov:1,dur:.6,R:[p("center",[-.04,.03,.05],"B","fwd","down","palm"),p("center",[0,0,.05],"B","fwd","down","palm"),p("center",[.04,.03,.05],"B","fwd","down","palm"),p("center",[.08,0,.05],"B","fwd","down","palm")]},PRESERVATIVE:{w:["preservative","preservatives","treatment","treated","treat","creosote"],prov:1,dur:.55,R:et([p("center",[.01,.06,.06],"H","down+fwd","in","index"),p("center",[.01,-.03,.06],"H","down+fwd","in","index")],2),L:Lt([0,-.04,.04])},GRAIN:{w:["grain","wood grain"],prov:1,dur:.5,R:[p("center",[-.02,0,0],"4","fwd","down","palm"),p("center",[-.02,0,.14],"4","fwd","down","palm")],L:Lt([0,-.03,.04])},LASER:{w:["laser","laser level"],prov:1,dur:.5,R:[p("neutral",[0,0,0],"1","fwd","down","index"),p("far",[0,0,.1],"1","fwd","down","index")]},SPIRITLEVEL:{w:["spirit level","bubble","bubbles"],prov:1,dur:.5,R:[p("center",[0,.04,.05],"F","out","fwd","index"),p("center",[.03,.04,.05],"F","out","fwd","index")],L:[p("center",[0,0,.05],"B","out","fwd","palm")]},CHALK:{w:["chalk","chalk reel"],prov:1,dur:.45,R:et([p("center",[0,.02,.06],"A","fwd","in","thumb"),p("center",[.06,.02,.06],"A","fwd","in","thumb")],2),L:xt([0,-.02,.06])},SPAN:{w:["span","spans","distance"],dur:.5,R:[p("center",[.02,0,.05],"B","fwd","in","palm"),p("center",[.17,0,.05],"B","fwd","in","palm")],L:"mirror"},TAIL:{w:["tail","tails","rafter tail"],prov:1,dur:.45,R:[p("center",[.06,0,.05],"1","out+down","fwd","index"),p("center",[.16,-.05,.05],"1","out+down","fwd","index")],L:Lt([.04,.02,.05])},DRIP:{w:["drip","drips","dripping","drop of water"],dur:.5,R:et([p("neutral",[0,0,0],"S","down","back","palm"),p("neutral",[0,-.04,0],"1","down","back","index")],2)},WASTE:{w:["waste","off-cut","offcut","offcuts","swarf","rubbish","dirt","dust"],dur:.45,R:[p("center",[0,.02,.06],"FLAT_O","down+fwd","in","palm"),p("center",[.08,-.05,.12],"5","down+fwd","in","palm")],L:xt([0,-.03,.06])},BLOCK:{w:["block","blocks","blocking","packer","packers","brick","bricks"],dur:.45,R:[p("center",[0,.05,.05],"B","fwd+in","down","palm"),p("center",[0,.02,.05],"B","fwd+in","down","palm")],L:[p("center",[0,-.04,.05],"B","fwd+in","up","palm")]},TRAY:{w:["tray","trays","bucket","buckets","tin","container"],dur:.45,R:[p("center",[0,0,.05],"C","fwd","in","palm"),p("center",[0,0,.05],"C","fwd","in","palm")],L:"mirror"},BLADE:{w:["blade","blades","saw blade","knife"],dur:.45,R:et([p("center",[0,.03,.03],"H","fwd+in","in","palm"),p("center",[0,.03,.11],"H","fwd+in","in","palm")],2),L:[p("center",[0,0,.06],"H","fwd+in","in","palm")]},STOCK:{w:["stock","supply"],dur:.45,R:[p("center",[0,.04,.05],"B","fwd+in","down","palm"),p("center",[0,.12,.05],"B","fwd+in","down","palm")],L:xt([0,-.04,.05])},WORKER:{w:["carpenter","carpenters","worker","workers","builder","builders","roofer","roofers","team"],dur:.6,R:[p("center",[.03,.02,0],"S","fwd+in","down","palm"),p("center",[.03,-.02,0],"S","fwd+in","down","palm"),p("neutral",[.04,.08,-.04],"B","fwd","in","palm"),p("neutral",[.04,-.1,-.04],"B","fwd","in","palm")],L:[p("center",[0,-.06,.04],"S","fwd+in","down","palm"),p("center",[0,-.06,.04],"S","fwd+in","down","palm"),p("neutral",[.04,.08,-.04],"B","fwd","in","palm"),p("neutral",[.04,-.1,-.04],"B","fwd","in","palm")]},FOOT:{w:["foot","feet","footing"],dur:.45,R:[p("center",[0,.02,.06],"FLAT_O","down","in","palm"),p("center",[0,-.06,.06],"FLAT_O","down","in","palm")],L:Lt([0,-.08,.06])},FRAME:{w:["frame","frames","framing","structure","assembly","assembled","assemble"],dur:.6,R:[p("center",[.03,0,.05],"4","in","back","palm"),p("center",[.03,.08,.05],"4","in","back","palm")],L:[p("center",[.03,.08,.05],"4","in","back","palm"),p("center",[.03,0,.05],"4","in","back","palm")]},WEIGHT:{w:["weight","heavy","load","loads","balance","balanced"],dur:.5,R:[p("neutral",[0,.03,0],"B","fwd","up","palm"),p("neutral",[0,-.05,0],"B","fwd","up","palm")],L:"mirror"}};var A=(i,e,t,n,r,s="palm",a={})=>({at:i,off:e,hs:t,F:n,N:r,c:s,...a}),Nt=(i,e)=>{let t=[];for(let n=0;n<e;n++)t.push(...i);return t},Bn=(i=[0,-.04,.04])=>[A("center",i,"B","fwd+in","up","palm")],cr=(i=[0,-.04,.04])=>[A("center",i,"B","fwd+in","down","palm")],Wu=(i=[.03,0,.04])=>[A("center",i,"B","fwd+0.5up","in","palm")],al={SIMULATION:{w:["simulation","simulations","simulator"],prov:1,dur:.5,R:[A("fs",[0,0,0],"S","up","fwd","palm"),A("fs",[.01,0,0],"I","up","fwd","palm"),A("fs",[.02,0,0],"M","up","fwd","palm")]},POINT:{w:["point","points","pointed","dot","spot on"],dur:.4,R:[A("center",[0,.08,.06],"1","down","in","index"),A("center",[0,.01,.06],"1","down","in","index")],L:Bn([0,-.02,.06])},FACE:{w:["face","faces","surface","surfaces"],dur:.45,R:[A("cheek",[0,.03,.04],"1","up+in","back","index"),A("chin",[.03,.02,.03],"1","up+in","back","index"),A("cheek",[0,.03,.04],"1","up+in","back","index")]},HOOK:{w:["hook","hooks","hooked","hooking","catch","catches","caught"],dur:.45,R:[A("center",[0,.06,.05],"X","fwd+in","down","index"),A("center",[0,.01,.05],"X","fwd+in","down","index")],L:[A("center",[0,-.02,.05],"X","fwd+in","up","index")]},VERGE:{w:["verge","verges","verge flashing"],prov:1,dur:.5,R:[A("neutral_hi",[0,.03,0],"B","down+out","fwd","palm"),A("neutral",[.08,-.03,0],"B","down+out","fwd","palm")]},FIT:{w:["fit","fits","fitted","fitting","insert","inserted","slot","slots"],dur:.45,R:[A("center",[.02,.07,.05],"B","fwd+in","down","palm"),A("center",[.01,.02,.05],"B","fwd+in","down","palm")],L:[A("center",[0,-.01,.05],"C","fwd+in","up","palm")]},LID:{w:["lid","lids","cap","caps"],dur:.45,R:[A("center",[0,.08,.05],"B","fwd+in","down","palm"),A("center",[0,.03,.05],"B","fwd+in","down","palm")],L:[A("center",[0,-.02,.05],"C","fwd+in","in","palm")]},UNTIL:{w:["until","till","up to"],dur:.5,R:[A("center",[.06,.04,0],"1","up+fwd","in","index"),A("center",[.01,.06,.08],"1","fwd+in","down","index")],L:[A("center",[0,.03,.09],"1","up","out+fwd","palm")]},ABOUT:{w:["about","approximately","around about","roughly"],dur:.5,R:[A("center",[0,.02,.12],"1","in","down","index"),A("center",[.05,.05,.08],"1","in","down","index"),A("center",[0,.08,.04],"1","in","down","index")],L:[A("center",[0,.03,.05],"FLAT_O","fwd+in","in","palm")]},LIE:{w:["lie","lies","lying","flat on"],dur:.45,R:[A("center",[0,.07,.05],"V","fwd+in","up","palm"),A("center",[0,.02,.05],"V","fwd+in","up","palm")],L:Bn([0,-.01,.05])},BITE:{w:["bite","bites","grip into","dig in","dig"],dur:.45,R:[A("neutral",[0,.03,0],"CLAW_5","fwd","down","palm"),A("neutral",[0,-.02,0],"CLAW_5","fwd+down","down","palm")]},STAKE:{w:["stake","stakes","peg","pegs","pin","pins"],prov:1,dur:.45,R:[A("neutral",[0,.04,0],"1","down","back","index"),A("neutral_lo",[0,-.02,0],"1","down","back","index")]},ROW:{w:["row","rows","course","courses","layer","layers"],dur:.5,R:[A("center",[0,0,.05],"BENT_B","fwd","in","back"),A("center",[.16,0,.05],"BENT_B","fwd","in","back")],L:"mirror"},STILL:{w:["still","yet","remains"],dur:.45,R:[A("neutral",[0,.02,0],"Y","fwd","down","palm"),A("neutral",[0,-.03,.1],"Y","fwd","down","palm")]},SPLASH:{w:["splash","splashes","spill","spills","spilled","spray"],dur:.45,R:[A("neutral",[0,0,0],"S","fwd","down","palm"),A("neutral",[.04,.04,.05],"5","fwd+up","up","palm")],L:"mirror"},BEAD:{w:["bead","beads","strip","strips","run of sealant"],prov:1,dur:.5,R:[A("center",[0,.02,.05],"F","fwd","in","index"),A("center",[.16,.02,.05],"F","fwd","in","index")],L:[A("center",[0,.02,.05],"F","fwd","in","index")]},SOAK:{w:["soak","soaks","soaked","absorb","absorbs","penetrate","penetrates"],dur:.5,R:[A("center",[0,.05,.05],"5","down","down","palm"),A("center",[0,0,.05],"FLAT_O","down","down","palm")],L:cr([0,-.04,.05])},STICK:{w:["stick","sticks","stuck","glue","adhere"],dur:.45,R:[A("center",[0,.06,.05],"H","down","in","middle"),A("center",[0,.01,.05],"H","down","in","middle")],L:Bn([0,-.01,.05])},SKEW:{w:["skew","skewed","twisted","crooked","out of square","not straight"],dur:.5,face:{neg:1},R:[A("neutral",[0,.04,0],"B","fwd","in","palm"),A("neutral",[.04,-.02,.06],"B","fwd+out","in+down","palm")]},BINDER:{w:["binder","binders","stiffener","longitudinal tie"],prov:1,dur:.5,R:[A("center_hi",[0,-.06,0],"H","fwd","down","palm"),A("center_hi",[0,-.06,.16],"H","fwd","down","palm")]},CONTROL:{w:["control","controls","controlled","manage","operate"],dur:.55,R:Nt([A("neutral",[0,0,.02],"X","fwd","in","palm"),A("neutral",[0,0,.08],"X","fwd","in","palm")],2),L:[A("neutral",[0,0,.08],"X","fwd","in","palm"),A("neutral",[0,0,.02],"X","fwd","in","palm"),A("neutral",[0,0,.08],"X","fwd","in","palm"),A("neutral",[0,0,.02],"X","fwd","in","palm")]},HANG:{w:["hang","hangs","hanging","hung","suspend"],dur:.45,R:[A("center",[0,.05,.05],"X","fwd+in","down","index"),A("center",[0,.02,.05],"X","fwd+in","down","index")],L:[A("center",[0,.03,.05],"1","fwd+in","down","palm")]},GAUGE:{w:["gauge","gauges","reading","dial"],dur:.45,R:[A("center",[0,.03,.06],"G","up","fwd","index"),A("center",[.03,.05,.06],"G","up+out","fwd","index")],L:Wu([0,0,.05])},CIRCLE:{w:["circular","circle","circles","round shape","ring"],dur:.55,R:[A("neutral",[0,.05,0],"1","fwd","down","index"),A("neutral",[.05,0,0],"1","fwd","down","index"),A("neutral",[0,-.05,0],"1","fwd","down","index"),A("neutral",[-.05,0,0],"1","fwd","down","index"),A("neutral",[0,.05,0],"1","fwd","down","index")]},TONGUE:{w:["tongue","tongues","blade of the square"],prov:1,dur:.4,R:[A("mouth",[0,-.01,.03],"1","up","back","index"),A("mouth",[0,-.01,0],"1","up","back","index")]},MAKE:{w:["make","makes","made","making","create","creates","form","forms","formed","produce"],dur:.45,R:Nt([A("center",[0,.06,.05],"S","fwd+in","in","palm"),A("center",[0,.06,.05],"S","fwd+in","back","palm")],2),L:[A("center",[0,0,.05],"S","fwd+in","in","palm")]},SMOKE:{w:["smoking","smoke","cigarette","cigarettes"],dur:.45,R:Nt([A("mouth",[.01,0,.02],"V","up+in","back","index"),A("mouth",[.04,0,.08],"V","up+in","back","index")],2)},FIRE:{w:["fire","flame","flames","flammable","burn","burns","burning"],dur:.55,face:{brows:"down"},R:Nt([A("neutral",[0,-.02,0],"5","up","back","palm"),A("neutral",[0,.07,0],"5","up","back","palm")],2),L:[A("neutral",[0,.07,0],"5","up","back","palm"),A("neutral",[0,-.02,0],"5","up","back","palm"),A("neutral",[0,.07,0],"5","up","back","palm"),A("neutral",[0,-.02,0],"5","up","back","palm")]},POISON:{w:["toxic","poison","poisonous","fumes","solvent","chemical","chemicals"],dur:.5,face:{neg:1},R:[A("chest",[0,.08,.06],"BENT_V","up+in","back","palm"),A("chest",[0,.08,.02],"BENT_V","up+in","back","palm")],L:[A("chest",[0,.06,.04],"BENT_V","up+in","back","palm")]},ROT:{w:["rot","rots","rotting","rotten","decay","rust","rusts","rusting"],dur:.5,face:{neg:1},R:[A("center",[0,.03,.05],"FLAT_O","down","in","palm"),A("center",[.02,0,.07],"5","down","in","palm")],L:Bn([0,-.04,.05])},SHADE:{w:["shade","shaded","shadow","out of the sun"],dur:.45,R:[A("neutral_hi",[0,.06,0],"B","fwd","down","palm"),A("neutral_hi",[0,.02,.05],"B","fwd","down","palm")]},SUN:{w:["sun","sunlight","heat","hot"],dur:.45,R:[A("neutral_hi",[0,.1,0],"FLAT_O","up+fwd","down","palm"),A("neutral_hi",[0,.04,.02],"5","down+fwd","down","palm")]},HOLE:{w:["hole","holes","opening"],dur:.45,R:[A("center",[0,.05,.06],"1","down","in","index"),A("center",[0,0,.06],"1","down","in","index")],L:[A("center",[0,-.01,.06],"O","fwd","up","palm")]},SPANNER:{w:["spanner","spanners","wrench","socket"],dur:.5,R:[A("center",[.03,.02,.05],"V","in+fwd","down","index"),A("center",[.03,.02,.05],"V","in+fwd","back","index"),A("center",[.03,.02,.05],"V","in+fwd","down","index")],L:[A("center",[0,0,.05],"1","up","in","palm")]},CLAW:{w:["claw","claws","claw hammer"],dur:.4,R:[A("neutral",[0,.02,0],"BENT_V","fwd","down","palm"),A("neutral",[0,.02,-.04],"BENT_V","fwd+up","down","palm")]},MEET:{w:["meet","meets","meeting","join up","converge"],dur:.45,R:[A("center",[.1,0,.05],"1","up","in","palm"),A("center",[.02,0,.05],"1","up","in","palm")],L:"mirror"},UPSIDE:{w:["upside down","upside","inverted","flip","flipped"],dur:.45,R:[A("neutral",[0,0,0],"B","fwd","down","palm"),A("neutral",[0,0,0],"B","fwd","up","palm")]},NOBODY:{w:["nobody","no one","no-one"],dur:.5,face:{shake:1,neg:1},R:[A("neutral",[0,0,0],"O","up","in","palm"),A("neutral",[.08,-.02,.03],"O","up+out","in","palm")],L:"mirror"},LEAN:{w:["lean","leans","leaning","leaned","tilt","tilts","tilted","sag","sags","sagged"],dur:.45,R:[A("center",[0,.06,.05],"V","down","back","index"),A("center",[.06,.03,.05],"V","down+in","back","index")],L:Bn([0,-.02,.05])},ERECT:{w:["erect","erected","erecting","stand up","raise into place","put up"],dur:.5,R:[A("center",[.02,0,.08],"1","fwd","down","palm"),A("center",[.02,.06,.05],"1","up","in","palm")],L:Bn([0,-.03,.05])},BAR:{w:["bar","bars","rod","rods","tool bar","toolbar","lever","levered"],dur:.45,R:[A("center",[.02,0,.05],"G","out","fwd","index"),A("center",[.14,0,.05],"G","out","fwd","index")],L:"mirror"},WORD:{w:["word","words","text","caption","captions","cc","message","messages"],dur:.45,R:[A("center",[.02,.05,.05],"G","up","in","index"),A("center",[.02,.03,.05],"G","up","in","index")],L:[A("center",[0,.03,.05],"1","up","out","palm")]},RESULT:{w:["result","results","outcome","effect"],dur:.45,R:[A("center",[.02,.03,0],"R","fwd","down","palm"),A("center",[.02,-.01,.12],"R","fwd+down","down","palm")],L:cr([0,-.03,.05])},REAL:{w:["real","really","true","actual","actually"],dur:.45,R:[A("chin",[0,-.01,.01],"1","up","in","index"),A("chin",[0,0,.16],"1","up+fwd","in","index")]},UNDO:{w:["undo","undid","cancel","take back"],dur:.5,R:[A("center",[0,.06,.06],"1","fwd+in","down","index"),A("center",[.05,0,.06],"1","fwd+in","down","index"),A("center",[-.04,0,.06],"1","fwd+in","down","index")],L:Bn([0,-.02,.06])},TICK:{w:["tick","ticks","ticked","check mark"],dur:.4,R:[A("neutral",[-.03,.02,0],"1","fwd","down","index"),A("neutral",[0,-.02,0],"1","fwd","down","index"),A("neutral",[.06,.06,0],"1","fwd","down","index")]},INSTRUCTION:{w:["instructions","instruction","guidance","directions","rules"],dur:.55,R:[A("neutral",[0,.02,-.02],"X","fwd","in","index"),A("neutral",[.02,0,.12],"X","fwd","in","index")],L:"mirror"},POUR:{w:["pour","pours","poured","pouring"],dur:.45,R:[A("neutral",[0,.04,0],"A","up","in","palm"),A("neutral",[0,.02,0],"A","in+up","down","palm")]},PLUS:{w:["plus","and also","add on"],dur:.4,R:[A("center",[.03,.03,.06],"1","in","back","palm"),A("center",[0,.03,.06],"1","in","back","palm")],L:[A("center",[0,0,.07],"1","up","back","palm")]},REACH:{w:["reach","reaches","reached","arrive","arrives","get to"],dur:.45,R:[A("neutral",[0,0,-.02],"BENT_B","fwd","back","back"),A("far",[0,.02,.06],"BENT_B","fwd","back","back")]},DEEP:{w:["deep","depth","thick","thickness"],dur:.45,R:[A("center",[0,.06,.06],"1","down","in","index"),A("center",[0,-.06,.06],"1","down","in","index")],L:cr([0,0,.06])},WITHOUT:{w:["without","no need for"],dur:.45,R:[A("center",[.035,0,.05],"A","fwd","in","palm"),A("center",[.1,-.02,.06],"5","fwd+out","in","palm")],L:"mirror"},INSECT:{w:["insect","insects","termite","termites","borer","borers","bug","bugs"],dur:.45,R:Nt([A("nose",[0,-.01,.03],"3","in+up","in","thumb"),A("nose",[0,-.01,.03],"3","in","in","thumb")],2)},BENT:{w:["bent","bend","bends","bending","curved","curve"],dur:.45,R:[A("neutral",[0,.02,0],"B","up","in","palm"),A("neutral",[0,0,.02],"BENT_B","up","in","palm")]},DARK:{w:["dark","darker","darkened"],dur:.45,R:[A("eye",[.02,.05,.08],"B","up+in","back","palm"),A("eye",[0,-.05,.06],"B","up+in","back","palm")],L:"mirror"},BROWN:{w:["brown"],dur:.4,R:[A("cheek",[0,.03,.02],"B","up","in","palm"),A("cheek",[0,-.05,.02],"B","up","in","palm")]},DIP:{w:["dip","dipped","dipping","immerse"],dur:.45,R:[A("center",[0,.1,.05],"FLAT_O","down","in","palm"),A("center",[0,.02,.05],"FLAT_O","down","in","palm"),A("center",[0,.1,.05],"FLAT_O","down","in","palm")],L:[A("center",[0,-.01,.05],"C","fwd+in","up","palm")]},TOOMUCH:{w:["excess","too","too much","overflow","surplus"],dur:.45,R:[A("center",[0,.03,.05],"BENT_B","fwd+in","down","palm"),A("center",[.1,.06,.05],"BENT_B","fwd+in","down","palm")],L:cr([0,0,.05])},BIT:{w:["bit","bits","drill bit","a little"],dur:.4,R:[A("neutral",[0,0,0],"10","up","fwd","thumb"),A("neutral",[0,0,0],"A","up","fwd","thumb")]},HEAD:{w:["head","heads"],dur:.4,R:[A("temple",[0,.03,.03],"BENT_B","up","in","middle"),A("cheek",[.02,-.03,0],"BENT_B","up","in","middle")]},NUT:{w:["nut","nuts","lock nut"],prov:1,dur:.45,R:[A("center",[0,.03,.06],"C","down","in","palm"),A("center",[0,.03,.06],"C","down","back","palm")],L:[A("center",[0,-.01,.06],"1","up","in","palm")]},ENOUGH:{w:["enough","sufficient","plenty"],dur:.45,R:[A("center",[-.02,.05,.06],"B","fwd+in","down","palm"),A("center",[.02,.05,.14],"B","fwd+in","down","palm")],L:[A("center",[0,0,.06],"S","fwd+in","in","palm")]},FINGER:{w:["finger","fingers","thumb"],dur:.4,R:[A("center",[.03,.05,.05],"1","in","down","index"),A("center",[.03,.03,.05],"1","in","down","index")],L:[A("center",[0,.03,.05],"5","up","back","palm")]},FOLLOW:{w:["follow","follows","followed","track","tracks","progress"],dur:.45,R:[A("center",[.03,0,-.04],"A","fwd","in","palm"),A("center",[.03,0,.12],"A","fwd","in","palm")],L:[A("center",[0,0,.05],"A","fwd","in","palm"),A("center",[0,0,.2],"A","fwd","in","palm")]},PER:{w:["per","each one"],dur:.45,R:[A("center",[.02,.08,.05],"A","up","in","palm"),A("center",[.02,.01,.05],"A","up","in","palm")],L:[A("center",[.03,0,.04],"A","up","in","palm")]},FLAG:{w:["flag","flags","marker","warning"],dur:.5,R:Nt([A("neutral_hi",[0,.02,0],"B","out+up","fwd","palm"),A("neutral_hi",[0,.02,0],"B","out+up","fwd+in","palm")],2),L:[A("neutral",[.08,-.05,0],"1","up","in","palm")]},VALLEY:{w:["valley","valleys","trough","troughs"],prov:1,dur:.5,R:[A("neutral_hi",[-.06,.03,0],"B","in+down","up+in","palm"),A("neutral",[0,-.03,0],"B","in+down","up+in","palm")],L:"mirror"},STAIN:{w:["stain","stains","stained","streak","streaks","mark on","dirty"],dur:.45,face:{neg:1},R:[A("center",[0,.05,.06],"5","down","down","palm"),A("center",[0,.01,.06],"CLAW_5","down","down","palm")],L:Bn([0,-.02,.06])},PAGE:{w:["page","pages","screen page"],dur:.45,R:[A("center",[0,.02,.06],"A","up","in","thumb"),A("center",[0,.06,.06],"A","up","in","thumb")],L:Wu([0,0,.06])},SCROLL:{w:["scroll","scrolls","scrolling","wheel"],dur:.5,R:Nt([A("neutral",[0,.02,0],"1","fwd","down","index"),A("neutral",[0,-.02,0],"X","fwd","down","index")],2)},ALOUD:{w:["aloud","out loud","voice","speak","speaks","spoken"],dur:.45,R:[A("chin",[0,-.01,.03],"5","up","back","palm"),A("neutral_hi",[.03,0,.1],"5","up+fwd","back","palm")]},DETAIL:{w:["detail","details","detailed","specific"],dur:.45,R:Nt([A("center",[0,.05,.05],"G","down","in","index"),A("center",[0,0,.05],"G","down","in","index")],2),L:Bn([0,-.02,.05])},GREY:{w:["grey","gray"],dur:.45,R:Nt([A("center",[.02,0,0],"5","in","back","palm"),A("center",[.02,0,.06],"5","in","back","palm")],2),L:[A("center",[.02,0,.06],"5","in","back","palm"),A("center",[.02,0,0],"5","in","back","palm"),A("center",[.02,0,.06],"5","in","back","palm"),A("center",[.02,0,0],"5","in","back","palm")]},BROOM:{w:["broom","brooms","brush off"],dur:.5,R:Nt([A("center",[0,-.02,.06],"S","down","in","palm"),A("center",[.08,-.04,.06],"S","down","in","palm")],2),L:[A("center",[-.02,.06,.04],"S","down","in","palm"),A("center",[.04,.05,.04],"S","down","in","palm"),A("center",[-.02,.06,.04],"S","down","in","palm"),A("center",[.04,.05,.04],"S","down","in","palm")]},LEAVE:{w:["leave","leaves","left in place"],dur:.45,R:[A("neutral",[0,.04,0],"5","fwd","down","palm"),A("neutral",[0,-.02,.06],"5","fwd+down","down","palm")],L:"mirror"},PLAN:{w:["plan","plans","layout","design","drawing plan"],dur:.5,R:[A("center",[.06,0,0],"B","fwd","in","palm"),A("center",[.06,0,.14],"B","fwd","in","palm")],L:"mirror"},MANY:{w:["many","lots","several","much","most"],dur:.45,R:Nt([A("neutral",[0,0,0],"S","up","up","palm"),A("neutral",[0,.02,.02],"5","up","up","palm")],2),L:"mirror"},BODY:{w:["body","bodies"],dur:.45,R:[A("chest",[.04,.04,.02],"B","in","back","palm"),A("stomach",[.04,.04,.02],"B","in","back","palm")],L:"mirror"},ROLL:{w:["roll","rolls","rolled","coil","coiled","unwind","unroll","reel"],dur:.55,R:[A("center",[0,.06,.08],"1","in","back","palm"),A("center",[0,0,.11],"1","in","back","palm"),A("center",[0,-.03,.06],"1","in","back","palm"),A("center",[0,.03,.03],"1","in","back","palm")],L:[A("center",[0,0,.03],"1","in","back","palm"),A("center",[0,.05,.06],"1","in","back","palm"),A("center",[0,0,.1],"1","in","back","palm"),A("center",[0,-.04,.06],"1","in","back","palm")]},WALK:{w:["walk","walks","walking","climb","climbs","climbing","step on"],dur:.5,R:Nt([A("neutral",[0,.02,0],"B","fwd","down","palm"),A("neutral",[0,-.02,.05],"B","fwd","down","palm")],2),L:[A("neutral",[0,-.02,.05],"B","fwd","down","palm"),A("neutral",[0,.02,0],"B","fwd","down","palm"),A("neutral",[0,-.02,.05],"B","fwd","down","palm"),A("neutral",[0,.02,0],"B","fwd","down","palm")]},BUT:{w:["but","however","although","except"],dur:.45,R:[A("center",[.01,0,.06],"1","up+fwd","fwd","palm"),A("center",[.1,0,.06],"1","up+fwd","fwd","palm")],L:"mirror"},NUMBER:{w:["number","numbers","numbered","count","counts","counted"],dur:.45,R:[A("center",[0,.04,.06],"FLAT_O","in","back","palm"),A("center",[0,.04,.06],"FLAT_O","in","fwd","palm")],L:[A("center",[0,.04,.06],"FLAT_O","in","fwd","palm"),A("center",[0,.04,.06],"FLAT_O","in","back","palm")]},WHO:{w:["who","whom","whose"],dur:.45,face:{brows:"down"},R:Nt([A("chin",[0,0,.04],"L","up","in","thumb"),A("chin",[0,0,.04],"X","up","in","thumb")],2)},MAYBE:{w:["may","maybe","might","perhaps","possibly","would"],dur:.5,R:Nt([A("neutral",[0,.03,0],"B","fwd","up","palm"),A("neutral",[0,-.03,0],"B","fwd","up","palm")],1),L:[A("neutral",[0,-.03,0],"B","fwd","up","palm"),A("neutral",[0,.03,0],"B","fwd","up","palm")]},HELMET:{w:["helmet","helmets","hard hat","harness","harnesses","lifeline","guardrail","guard rail","guard","barrier"],prov:1,dur:.5,R:[A("temple",[.05,.07,.02],"C","up+in","in","palm"),A("temple",[.05,.03,.02],"C","up+in","in","palm")],L:"mirror"},TOWARD:{w:["towards","toward","to face"],dur:.45,R:[A("neutral",[.06,.03,0],"1","in+fwd","down","index"),A("center",[.01,.03,.1],"1","in+fwd","down","index")],L:y_()},SWITCH:{w:["switch","switches","turn on","turn off","toggle","power","powers"],dur:.4,R:[A("neutral",[0,.02,0],"A","up","fwd","thumb"),A("neutral",[0,-.02,0],"A","up","fwd","thumb")]},EASY:{w:["easy","easily","simple","freely"],dur:.45,R:Nt([A("center",[0,0,.06],"BENT_B","fwd+in","up","back"),A("center",[0,.05,.08],"BENT_B","fwd+in","up","back")],2),L:[A("center",[0,-.02,.06],"BENT_B","fwd+in","up","palm")]},SHARP:{w:["sharp","sharpen","sharpened","pointed"],dur:.4,R:[A("center",[0,.02,.06],"BENT_5","down","down","palm"),A("center",[.06,.04,.06],"BENT_5","out","down","palm")],L:cr([0,-.02,.05])},STIFF:{w:["stiff","rigid","hard","strength","strong"],dur:.45,R:[A("neutral",[0,.04,0],"BENT_V","fwd","down","palm"),A("neutral",[0,0,0],"BENT_V","fwd","down","palm")],L:[A("neutral",[0,-.01,0],"S","fwd","down","palm")]},GENTLE:{w:["gently","gentle","slowly","slow","steadily","carefully","careful","steady"],dur:.55,R:[A("center",[0,.03,.03],"B","fwd+in","down","palm"),A("center",[0,.03,.15],"B","fwd+in","down","palm")],L:cr([0,0,.06])},WRAP:{w:["wrap","wrapped","wraps","loop","loops","hitch","hitches"],dur:.55,R:[A("center",[0,.05,.08],"B","in","down","palm"),A("center",[.05,0,.05],"B","down","in","palm"),A("center",[0,-.05,.03],"B","out","up","palm")],L:[A("center",[0,0,.05],"S","fwd+in","in","palm")]},SPREAD:{w:["spread","spreads","divide","divided","distribute","evenly"],dur:.45,R:[A("neutral",[-.02,0,0],"FLAT_O","fwd","down","palm"),A("neutral",[.08,-.02,.04],"5","fwd+out","down","palm")],L:"mirror"},ATTACK:{w:["attack","attacks","damage","damaged","harm"],dur:.45,face:{brows:"down"},R:[A("center",[.05,.03,.12],"S","fwd+in","down","palm"),A("center",[0,.03,.06],"S","fwd+in","down","palm")],L:[A("center",[0,.03,.05],"1","up","out","palm")]},DIRECTIONS4:{w:["zero","nil"],dur:.35,R:[A("neutral_hi",[0,0,0],"O","up","in+0.5fwd","palm")]},ELEVEN:{w:["eleven"],dur:.45,R:Nt([A("neutral_hi",[0,0,0],"S","up","back","palm"),A("neutral_hi",[0,0,0],"1","up","back","palm")],2)},TWELVE:{w:["twelve"],dur:.45,R:Nt([A("neutral_hi",[0,0,0],"S","up","back","palm"),A("neutral_hi",[0,0,0],"V","up","back","palm")],2)},NAME_IMANI:{w:["imani"],dur:.4,R:[A("neutral_hi",[0,0,0],"I","up","fwd","palm"),A("neutral_hi",[0,-.03,.02],"I","up","fwd","palm")],nameSign:1}};function y_(){return[A("center",[0,.03,.12],"1","up","in","palm")]}var tt=(i,e,t,n,r,s="palm",a={})=>({at:i,off:e,hs:t,F:n,N:r,c:s,...a}),ol={GLOVE:{w:["glove","gloves","gloved"],dur:.55,R:[tt("center",[.02,.03,.14],"OPEN_B","fwd+in","down","palm"),tt("center",[.02,.03,.03],"OPEN_B","fwd+in","down","palm")],L:[tt("center",[.02,-.01,.08],"OPEN_B","fwd+in","down","palm")]},GOGGLES:{w:["goggles","safety glasses","glasses"],dur:.5,prov:1,R:[tt("eye",[.035,0,.13],"C","up","back+0.4in","index"),tt("eye",[.035,0,.085],"C","up","back+0.4in","index")],L:"mirror"},EYE:{w:["eye","eyes"],dur:.4,R:[tt("eye",[.02,-.03,.08],"1","back+up","in","index"),tt("eye",[.02,-.02,.04],"1","back+up","in","index")]},EARDEF:{w:["ear defenders","ear muffs","ear protection"],prov:1,dur:.55,R:[tt("ear",[.06,0,0],"C","up","in","palm"),tt("ear",[.025,0,0],"C","up","in","palm")],L:"mirror"},EAR:{w:["ear","ears"],dur:.4,R:[tt("ear",[.03,-.01,.02],"1","up","in","index"),tt("ear",[.015,-.01,.01],"1","up","in","index")]},MASK:{w:["mask","masks","dust mask","respirator"],dur:.5,R:[tt("mouth",[0,-.02,.13],"C","up+in","back","palm"),tt("mouth",[0,-.015,.07],"C","up+in","back","palm")]},BOOT:{w:["boot","boots","shoe","shoes","safety boots"],dur:.5,R:[tt("center",[.045,-.05,.02],"S","fwd","in","palm"),tt("center",[.012,-.05,.02],"S","fwd","in","palm"),tt("center",[.045,-.05,.02],"S","fwd","in","palm"),tt("center",[.012,-.05,.02],"S","fwd","in","palm")],L:"mirror"},WHITE:{w:["white"],dur:.5,R:[tt("chest",[0,0,.03],"5","in+0.3up","back","palm"),tt("chest",[0,0,.15],"FLAT_O","in+0.3up","back","palm")]},WASH:{w:["wash","washes","washed","wipe","wiped","wipes","soap"],dur:.55,R:[tt("center",[.02,0,.06],"A","fwd+in","down","palm"),tt("center",[.05,0,.04],"A","fwd+in","down","palm"),tt("center",[0,0,.08],"A","fwd+in","down","palm")],L:[tt("center",[.02,-.04,.06],"A","fwd+in","up","palm")]},SKIN:{w:["skin"],dur:.45,R:[tt("cheek",[.04,-.04,.05],"F","up+in","back","index"),tt("cheek",[.05,-.05,.09],"F","up+in","back","index")]},WEAR:{w:["wear","wears","wearing","worn","put on","overalls"],dur:.5,R:[tt("chest",[.03,.02,.05],"5","up+in","back","palm"),tt("chest",[.03,-.06,.05],"5","up+in","back","palm")],L:"mirror"},CONTINUOUS:{w:["continuous","continuously","all the way"],dur:.6,R:[tt("center",[0,.02,.05],"Y","fwd+in","down","palm"),tt("center",[.12,0,.08],"Y","fwd+in","down","palm")],L:[tt("center",[0,-.02,.05],"Y","fwd+in","down","palm")]}};var he=(i,e,t,n,r,s,a={})=>({at:i,off:e,hs:t,F:n,N:r,c:s,...a}),$e=(i,e="up",t="fwd",n=[0,0,0])=>({R:[he("fs",n,i,e,t,"palm")]}),ha={a:$e("A"),b:$e("B"),c:$e("C","up","in+0.4fwd"),d:$e("D"),e:$e("E"),f:$e("F"),g:$e("G","in","back"),h:$e("H","in","back"),i:$e("I"),j:{R:[he("fs",[0,.02,0],"I","up","fwd","palm"),he("fs",[-.02,-.04,0],"I","up+in","in","palm"),he("fs",[-.04,-.03,0],"I","up+in","back","palm")]},k:$e("K"),l:$e("L"),m:$e("M"),n:$e("N"),o:$e("O","up","in+0.5fwd"),p:$e("K","down+fwd","in"),q:$e("G","down","in"),r:$e("R"),s:$e("S"),t:$e("T"),u:$e("U"),v:$e("V"),w:$e("W"),x:$e("X","up","in+fwd"),y:$e("Y"),z:{R:[he("fs",[.03,.03,0],"1","up+fwd","fwd","index"),he("fs",[-.03,.03,0],"1","up+fwd","fwd","index"),he("fs",[.03,-.03,0],"1","up+fwd","fwd","index"),he("fs",[-.03,-.03,0],"1","up+fwd","fwd","index")]}},zr={0:$e("O","up","in+0.5fwd"),1:$e("1","up","back"),2:$e("2","up","back"),3:$e("3","up","back"),4:$e("4","up","back"),5:$e("5","up","back"),6:$e("6"),7:$e("7"),8:$e("8"),9:$e("9")},Mt={WELCOME:{w:["welcome"],dur:.75,face:{smile:1},R:[he("side",[0,0,.05],"OPEN_B","out+fwd","up","palm"),he("waist",[0,.06,.1],"OPEN_B","in+fwd","up+0.3in","palm")]},ROOF:{w:["roof","roofs","roofing"],dur:.6,R:[he("center_hi",[.025,.06,.02],"B","in+0.7up","down+out","middle"),he("center_hi",[.13,-.07,.02],"B","in+0.7up","down+out","middle")],L:"mirror"},BUILD:{w:["build","construction","construct","building","built"],dur:.8,R:[he("center",[.01,-.02,.02],"BENT_B","fwd+in","down","palm"),he("center",[.01,.06,.04],"BENT_B","fwd+in","down","palm"),he("center",[.01,.14,.02],"BENT_B","fwd+in","down","palm")],L:[he("center",[.01,.02,.04],"BENT_B","fwd+in","down","palm"),he("center",[.01,.1,.02],"BENT_B","fwd+in","down","palm"),he("center",[.01,.1,.03],"BENT_B","fwd+in","down","palm")]},CHOOSE:{w:["choose","select","pick","chosen"],dur:.6,R:[he("far",[0,.04,0],"5","fwd+up","in+down","index"),he("neutral",[0,.06,-.06],"F","up+fwd","in","index")]},WORK:{w:["work","task","tasks","job","working"],dur:.7,R:[he("center",[.03,.02,0],"S","fwd+in","down","palm"),he("center",[.03,-.02,0],"S","fwd+in","down","palm"),he("center",[.03,.02,0],"S","fwd+in","down","palm"),he("center",[.03,-.02,0],"S","fwd+in","down","palm")],L:[he("center",[0,-.07,.04],"S","fwd+in","down","palm")]},SEE:{w:["see","look","view","watch","seen","sees"],dur:.5,R:[he("eye",[.06,-.06,.05],"V","up","back","index",{noTilt:1}),he("eye",[.09,-.13,.33],"V","fwd+0.3up","back+down","index")]},ITS:{w:["its","his","her","their"],dur:.4,R:[he("neutral",[0,.02,-.03],"B","up","fwd","palm"),he("neutral",[.03,.02,.06],"B","up","fwd","palm")]},YOUR:{w:["your","yours"],dur:.4,R:[he("center",[.02,.04,-.02],"B","up","fwd","palm"),he("center",[.02,.04,.09],"B","up","fwd","palm")]},STEP:{w:["step","steps","stage"],dur:.8,R:[he("neutral",[0,-.03,-.05],"B","fwd","down","palm"),he("neutral",[0,.02,.01],"B","fwd","down","palm"),he("neutral",[0,-.03,.06],"B","fwd","down","palm"),he("neutral",[0,.02,.11],"B","fwd","down","palm"),he("neutral",[0,-.03,.16],"B","fwd","down","palm")]},CLICK:{w:["click","press","clicks","tap"],dur:.55,R:[he("neutral",[0,.02,0],"1","fwd+down","down","index"),he("neutral",[0,-.025,0],"X","fwd+down","down","index"),he("neutral",[0,.02,0],"1","fwd+down","down","index"),he("neutral",[0,-.025,0],"X","fwd+down","down","index")]},START:{w:["start","begin","starts","beginning"],dur:.6,R:[he("center",[.02,.03,.04],"1","in+fwd","down","index"),he("center",[.02,.03,.04],"1","in+fwd","back","index")],L:[he("center",[.03,0,.03],"B","fwd+0.5up","in","palm")]},WITH:{w:["with"],dur:.45,R:[he("center",[.09,0,0],"A","fwd","in","palm"),he("center",[.035,0,0],"A","fwd","in","palm")],L:"mirror"},ONE:{w:["one","1"],dur:.4,R:[he("neutral_hi",[0,0,0],"1","up","back","palm")]},USE:{w:["use","using","used","uses"],dur:.6,R:[he("center",[.03,.05,.02],"U","up","fwd","palm"),he("center",[.06,.08,.03],"U","up","fwd","palm"),he("center",[.03,.11,.02],"U","up","fwd","palm"),he("center",[0,.08,.03],"U","up","fwd","palm"),he("center",[.03,.05,.02],"U","up","fwd","palm")],L:[he("center",[0,-.04,.03],"S","fwd+in","down","palm")]},PERSON:{w:["person","people","er"],dur:.45,R:[he("neutral",[.04,.08,-.04],"B","fwd","in","palm"),he("neutral",[.04,-.1,-.04],"B","fwd","in","palm")],L:"mirror"},GUIDE:{w:["guide","lead","guides","guided"],dur:.7,R:[he("center",[0,.01,.06],"FLAT_O","fwd+down","in","palm"),he("center",[.07,.03,.22],"FLAT_O","fwd+down","in","palm")],L:[he("center",[-.01,-.01,.01],"B","fwd+in","in","palm"),he("center",[-.07,.01,.17],"B","fwd+in","in","palm")]},SHOW:{w:["show","shows","showing","display","demonstrate"],dur:.6,R:[he("center",[.02,.02,.06],"1","in+fwd","down","index"),he("center",[.06,.02,.2],"1","in+fwd","down","index")],L:[he("center",[.02,0,.05],"B","up","out+fwd","palm"),he("center",[-.02,0,.19],"B","up","out+fwd","palm")]},YOU:{w:["you"],dur:.35,R:[he("neutral",[0,.02,0],"1","fwd","down","index"),he("neutral",[0,.02,.07],"1","fwd","down","index")]},HOW:{w:["how"],dur:.55,face:{brows:"down"},R:[he("center",[.025,0,.03],"BENT_B","down+fwd","back","knuckle"),he("center",[.06,.03,.09],"BENT_B","fwd+up","up","knuckle")],L:"mirror"}};for(let i in sl)Mt[i]||(Mt[i]=sl[i]);for(let i in al)Mt[i]||(Mt[i]=al[i]);for(let i in ol)Mt[i]||(Mt[i]=ol[i]);var Xu={BENT:["fold","folds","folded"],NAIL:["drive","drives","driven","strike"],STOP:["settle","settles","settled"],POST:["staff","staffs"],IN:["inner"],HIGH:["highest"],SHORT:["few"]};for(let i in Xu)if(Mt[i])for(let e of Xu[i])Mt[i].w.includes(e)||Mt[i].w.push(e);var Hr=(i=0,e=0,t=0)=>new I(i,e,t),Vr={neutral:[.12,1.22,.33],neutral_hi:[.12,1.36,.31],neutral_lo:[.1,1.1,.3],center:[0,1.24,.33],center_hi:[0,1.4,.32],center_lo:[0,1.1,.3],far:[.12,1.25,.45],side:[.32,1.2,.32],chest:[.03,1.32,.135],chest_side:[.09,1.33,.13],stomach:[.03,1.12,.15],waist:[.1,1.04,.17],shoulder:[.15,1.41,.08],shoulder_opp:[-.13,1.41,.09],chin:[0,1.5,.088],mouth:[0,1.545,.097],nose:[0,1.585,.105],eye:[.032,1.615,.09],forehead:[.015,1.665,.092],temple:[.066,1.645,.05],cheek:[.055,1.56,.078],ear:[.082,1.595,0],head_top:[0,1.74,0],neck:[0,1.465,.078],fs:[.15,1.37,.3],rest:[.075,1.05,.2]},w_={up:[0,1,0],down:[0,-1,0],fwd:[0,0,1],back:[0,0,-1],out:[1,0,0],in:[-1,0,0]};function ul(i){if(Array.isArray(i))return i.slice();let e=[0,0,0];for(let t of i.split("+")){let n=/^(-?[\d.]+)?([a-z]+)$/.exec(t.trim()),r=n[1]?+n[1]:1,s=w_[n[2]];for(let a=0;a<3;a++)e[a]+=s[a]*r}return e}var Zu=i=>i==="R"?-1:1,ll=(i,e)=>Hr(e[0]*Zu(i),e[1],e[2]).normalize(),M_=(i,e)=>Hr(e[0]*Zu(i),e[1],e[2]),S_=new Set(["ITS","IT","THIS","THEY","BY","AND","ON","IN","WITH","FOR","FROM","THAN","THEN","PERSON","YOUR","OF","ONE","SAME","ALL","EVERY","NOW","OR","OVER","OUT","AGAINST","TO"]),b_=new Set(["forehead","temple","eye","cheek","chin","mouth","nose","ear","head_top"]),da={F:"up",N:"fwd",hs:"B",c:"palm"},wi=i=>({p:Vr.rest,F:"in+0.35down+0.3fwd",N:"back+0.6up+0.2in",hs:"REST",c:"wrist",rest:!0});function qu(i,e){let t=typeof e.at=="string"?Vr[e.at]:e.at||Vr.neutral;if(!t)throw new Error("unknown location "+e.at);let n=e.off||[0,0,0],r=e.F||da.F;if(b_.has(e.at)&&!e.noTilt){let s=ul(r);s[1]>.3&&s[2]>-.2&&(r=[s[0],s[1],s[2]-.55*Math.hypot(s[0],s[1],s[2])])}return{p:[t[0]+n[0],t[1]+n[1],t[2]+n[2]],F:r,N:e.N||da.N,hs:e.hs||da.hs,c:e.c||da.c,t:e.t}}var E_=i=>({...i});function ii(i,e={}){let t=e.timing,n=e.lag??.12,r=e.speed||1,s=(e.transition??.16)/r,a=t?.1:.35,o={R:[],L:[]},l=[],c=[],u=[],h=[],d=(m,y,v)=>o[m].push({...v,t:y});d("R",0,wi("R")),d("L",0,wi("L"));let f=r,_=null,x=[];for(let m=0;m<i.length;m++){let y=i[m];if(y.pause){h.push(a+.05),t||(a+=y.pause/r);continue}let v=y.sign;if(t&&S_.has(y.g)&&y.wi!==void 0&&t.times[y.wi]&&a+.16-(t.times[y.wi][0]+n)>(y.anchor?.35:.2)){x.push(y.g);continue}let b=v.dur||.25+.22*Math.max(1,v.R.length-1),L=y.tr!==void 0?y.tr:e.transition??.16,R;if(t&&y.anchor&&y.wi!==void 0&&t.times[y.wi]){let U=t.times[y.wi][0]+n,F=a+L/f-U;f=at.clamp(1+F/.35,.9,F>.9?2:F>.5?1.8:1.65);let Z=a+L/f;if(U>Z+.9){let q=o.R[o.R.length-1];U-Z>1.6?(d("R",a+.35,{...q,hold:!0}),d("R",U-.45,wi("R")),v.L&&(o.L[o.L.length-1].rest||d("L",U-.45,wi("L")))):d("R",U-L/f,{...q,hold:!0})}R=Math.max(Z,U)}else t||(f=r),R=a+L/f/(y.fs&&_&&_.wi===y.wi?_.f:1);if(t&&y.fs&&y.wi!==void 0&&t.times[y.wi]&&(!_||_.wi!==y.wi)){let U=0,F=0;for(let K=m;K<i.length&&i[K].wi===y.wi&&!i[K].pause;K++){let $=i[K].sign;U+=($.dur||.3)+(i[K].tr??.09),F++}let[Z,q]=t.times[y.wi],X=Math.max((q-Z)*1.25+.2,F*.11);_={wi:y.wi,f:Math.max(1,Math.min(2.6,U/f/X))}}let C=y.fs&&_&&_.wi===y.wi?_.f:1,B=b/f/C,M=R+B,T=v.R.map(U=>qu("R",U)),V=U=>{let F=o[U][o[U].length-1];F.rest&&F.t<R-L/f-.05&&d(U,R-L/f-.08,{...F})};V("R"),v.L&&V("L");let Y=null;v.L==="mirror"?Y=T.map(E_):Array.isArray(v.L)&&(Y=v.L.map(U=>qu("L",U)));let te=T.length,D=T.map((U,F)=>U.t!==void 0?R+U.t*B:R+(te===1?0:F/(te-1))*B);if(T.forEach((U,F)=>d("R",D[F],U)),te===1&&d("R",M,{...T[0],hold:!0}),Y){let U=Y.length;Y.forEach((F,Z)=>d("L",F.t!==void 0?R+F.t*B:R+(U===1?0:Z/(U-1))*B,F)),U===1&&d("L",M,{...Y[0],hold:!0})}else{let U=o.L[o.L.length-1];U.rest||d("L",Math.min(M,U.t+.45),wi("L"))}v.face&&l.push({t0:R-.1,t1:M+.1,face:v.face}),!t&&y.word&&c.push({t0:R,t1:y.mouthDur?R+y.mouthDur*(B+(y.tr??s)):M,word:y.word}),u.push({t0:R,t1:M,g:y.g,word:y.word,wi:y.wi,anchor:y.anchor}),a=M+(y.hold||0)}if(t)for(let m=0;m<t.times.length;m++){let y=t.tokens?t.tokens[m]:"",[v,b]=t.times[m]||[];v!==void 0&&y&&c.push({t0:v,t1:b,word:y})}return a+=.35,d("R",a,wi("R")),d("L",a,wi("L")),{dur:Math.max(a+.3,t?t.dur+.2:0),tracks:o,face:l,mouth:c,events:u,pauses:h,skipped:x,sentenceFace:e.face,speed:f}}var ni=100,ur=24;function T_(i){let e=[];for(let t of["1","2","3","4"])e.push(...i.f[t]||[0,0,0,0]);return e.push(...i.t.d,i.t.f1||0,i.t.f2||0,...i.t.b||[-.1,.25,-1]),e}function A_(i){let e={};return["1","2","3","4"].forEach((t,n)=>e[t]=i.slice(n*4,n*4+4)),{f:e,t:{d:i.slice(16,19),f1:i[19],f2:i[20],b:i.slice(21,24)}}}function fa(i,e,t,n){if(n<.5)return i;let r=Math.ceil(n*3),s=[],a=0;for(let l=-r;l<=r;l++){let c=Math.exp(-(l*l)/(2*n*n));s.push(c),a+=c}let o=new Float32Array(i.length);for(let l=0;l<t;l++)for(let c=0;c<e;c++){let u=0;for(let h=-r;h<=r;h++){let d=Math.min(t-1,Math.max(0,l+h));u+=i[d*e+c]*s[h+r]}o[l*e+c]=u/a}return i.set(o),i}var cl=i=>i*i*i*(i*(i*6-15)+10),hr=class{constructor(e,t){this.A=e,this.rig=t,this.err={R:0,L:0}}keyWrist(e,t,n){let r=this.rig,s=M_(e,t.p);if(t.c==="wrist")return s;r.resetBody();let a=this.pole(e,s),o=r.restP[e+" UpperArm"],l=(r.side[e].lenU+r.side[e].lenF)*.9,c=s.clone();for(let h=0;h<5;h++){let d=c.clone().sub(o);d.length()>l&&c.copy(d.setLength(l).add(o)),r.solveArm(e,c,a,{q:n},.6),r.applyHandshape(e,xi[t.hs]||xi.B);let f=r.handPoints(e),_=s.clone().sub(f[t.c]||f.palm);if(c.add(_),_.length()<.0015)break}let u=c.clone().sub(o);return u.length()>l&&c.copy(u.setLength(l).add(o)),c}pole(e,t){let n=at.clamp((t.y-1.3)/.35,0,1);return ll(e,[.45-.15*n,-1,.05+.35*n])}bake(e){let t=this.rig,n=Math.ceil(e.dur*ni)+2,r={n,hands:{}};for(let l of["R","L"]){let c=[];for(let y of e.tracks[l])c.length&&y.t<=c[c.length-1].t+.001?c[c.length-1]=y:c.push(y);let u=c.map(y=>{let v=t.handQuat(l,ll(l,ul(y.F)),ll(l,ul(y.N)));return{t:y.t,q:v,W:this.keyWrist(l,y,v),h:T_(xi[y.hs]||xi.B),stop:!!(y.hold||y.rest)}}),h=u.map((y,v)=>{if(v===0||v===u.length-1||y.stop)return Hr();let b=u[v-1],L=u[v+1],R=L.W.clone().sub(b.W).multiplyScalar(1/Math.max(.02,L.t-b.t)),C=y.W.clone().sub(b.W),B=L.W.clone().sub(y.W),M=C.length()>1e-4&&B.length()>1e-4?C.normalize().dot(B.normalize()):1;return R.multiplyScalar(M<-.2?.15:M<.3?.55:.9)}),d=new Float32Array(n*3),f=new Float32Array(n*4),_=new Float32Array(n*ur),x=0,g=new Ze,m=null;for(let y=0;y<n;y++){let v=y/ni;for(;x<u.length-2&&u[x+1].t<=v;)x++;let b=u[x],L=u[Math.min(x+1,u.length-1)],R=Math.max(.001,L.t-b.t),C=b===L?0:at.clamp((v-b.t)/R,0,1),B=C*C,M=B*C,T=2*M-3*B+1,V=M-2*B+C,Y=-2*M+3*B,te=M-B,D=b.W.clone().multiplyScalar(T).addScaledVector(h[x],V*R).addScaledVector(L.W,Y).addScaledVector(h[Math.min(x+1,u.length-1)],te*R);d.set([D.x,D.y,D.z],y*3),g.copy(b.q).slerp(L.q,cl(C)),m&&m.dot(g)<0&&g.set(-g.x,-g.y,-g.z,-g.w),f.set([g.x,g.y,g.z,g.w],y*4),m=g.clone();let U=cl(Math.min(1,C*1.6));for(let F=0;F<ur;F++)_[y*ur+F]=b.h[F]+(L.h[F]-b.h[F])*U}fa(d,3,n,.032*ni),fa(f,4,n,.035*ni),fa(_,ur,n,.022*ni),r.hands[l]={W:d,Q:f,H:_}}let s=new Float32Array(n*6);for(let l=0;l<n;l++){let c=r.hands.R.W.subarray(l*3,l*3+3),u=r.hands.L.W.subarray(l*3,l*3+3),h=_=>at.clamp((_-1.28)*.55,0,.16),d=(c[0]+u[0])/2,f=Math.max(c[1],u[1]);s.set([h(c[1]),h(u[1]),at.clamp(d*.35,-.07,.07),at.clamp((Math.max(c[2],u[2])-.25)*.12,-.02,.03),at.clamp(c[0]*.12,-.05,.05),at.clamp((1.32-f)*.08,-.03,.04)],l*6)}let a=Math.round(.06*ni),o=new Float32Array(n*6);for(let l=0;l<n;l++)o.set(s.subarray(Math.max(0,l-a)*6,Math.max(0,l-a)*6+6),l*6);return fa(o,6,n,.12*ni),r.body=o,e.baked=r,r}frameAt(e,t,n,r){let s=at.clamp(n*ni,0,r-1.001),a=Math.floor(s),o=s-a,l=[];for(let c=0;c<t;c++)l.push(e[a*t+c]*(1-o)+e[(a+1)*t+c]*o);return l}apply(e,t){let n=e.baked||this.bake(e),r=this.rig,s=this.A.bones;r.resetBody();let[a,o,l,c,u,h]=this.frameAt(n.body,6,t,n.n),d=s.Spine2,f=s.Spine1,_=s.Head,x=s.Neck;f.rotateY(l*.5),d.rotateY(l*.5),d.rotateX(c+.012*Math.sin(t*1.6)),s.Pelvis&&s.Pelvis.rotateZ(.006*Math.sin(t*.35)),x.rotateY(u*.4),_.rotateY(u*.6-.025*Math.sin(t*.55)),_.rotateX(h),_.rotateZ(.02*Math.sin(t*.4));let g=0;for(let m of e.events){let y=t-(m.t1-.05);y>-.25&&y<.25&&(g+=Math.exp(-(y*y)/.006)*.018)}_.rotateX(g);for(let m of e.face)if(t>=m.t0&&t<=m.t1){let y=(t-m.t0)/(m.t1-m.t0),v=Math.sin(Math.PI*y);m.face.nod&&_.rotateX(.09*v*Math.sin(y*Math.PI*2*m.face.nod)),m.face.shake&&_.rotateY(.13*v*Math.sin(y*Math.PI*2*m.face.shake)),m.face.brows==="up"&&_.rotateX(-.04*v)}for(let[m,y]of[["R",a],["L",o]]){let v=s[m+" Clavicle"];v.updateMatrixWorld(!0);let b=new Ze().setFromAxisAngle(Hr(0,0,1),(m==="R"?-1:1)*y).multiply(v.getWorldQuaternion(new Ze));r.setWorldQuat(v,b)}this.A.root.updateMatrixWorld(!0);for(let m of["R","L"]){let y=n.hands[m],v=this.frameAt(y.W,3,t,n.n),b=this.frameAt(y.Q,4,t,n.n),L=new Ze(b[0],b[1],b[2],b[3]).normalize(),R=Hr(v[0],v[1],v[2]);r.solveArm(m,R,this.pole(m,R),{q:L},.6);let C=this.frameAt(y.H,ur,t,n.n);for(let B=1;B<4;B++){let M=this.frameAt(y.H,ur,t-.012*B,n.n);for(let T=0;T<4;T++)C[B*4+T]=M[B*4+T]}r.applyHandshape(m,A_(C))}this.applyFace(e,t),this.A.root.updateMatrixWorld(!0)}applyFace(e,t){let n=this.rig,r=n.morphW;for(let l=0;l<r.length;l++)r[l]=0;let s=(l,c)=>n.setMorph(l,Math.min(1,(n.morphW[this.A.morph[l]]||0)+c));s("AK_44_MouthSmileLeft",.16),s("AK_45_MouthSmileRight",.16),s("AU_06_CheekRaiser",.1),s("AK_03_BrowInnerUp",.08);let a=l=>{let c=t-l;return c>0&&c<.2?Math.sin(c/.2*Math.PI):0},o=0;for(let l=1.3;l<e.dur;l+=3.1+.9*Math.abs(Math.sin(l*7.3)))o=Math.max(o,a(l));for(let l of e.pauses||[])o=Math.max(o,a(l));s("AK_09_EyeBlinkLeft",o),s("AK_10_EyeBlinkRight",o);for(let l of e.face){let c=Math.min(1,Math.max(0,Math.min((t-l.t0)/.18,(l.t1-t)/.18)));if(c<=0)continue;let u=cl(c),h=l.face;h.brows==="up"&&(s("AK_03_BrowInnerUp",.6*u),s("AK_04_BrowOuterUpLeft",.55*u),s("AK_05_BrowOuterUpRight",.55*u),s("AK_21_EyeWideLeft",.25*u),s("AK_22_EyeWideRight",.25*u)),h.brows==="down"&&(s("AK_01_BrowDownLeft",.6*u),s("AK_02_BrowDownRight",.6*u),s("AK_19_EyeSquintLeft",.25*u),s("AK_20_EyeSquintRight",.25*u)),h.smile&&(s("AK_44_MouthSmileLeft",.35*u),s("AK_45_MouthSmileRight",.35*u),s("AU_06_CheekRaiser",.3*u)),h.serious&&(s("AK_36_MouthPressLeft",.25*u),s("AK_37_MouthPressRight",.25*u)),h.neg&&(s("AK_30_MouthFrownLeft",.35*u),s("AK_31_MouthFrownRight",.35*u),s("AK_01_BrowDownLeft",.25*u),s("AK_02_BrowDownRight",.25*u))}for(let l of e.mouth)if(t>=l.t0-.06&&t<=l.t1+.06){let c=R_(l.word),u=Math.max(.05,l.t1-l.t0),h=(t-l.t0)/u*c.length-.5;for(let d=0;d<c.length;d++){let f=h-d,_=Math.exp(-f*f*2.2)*(c[d]==="00_Sil"?.2:.5);_>.01&&s("AA_VI_"+c[d],_)}}}},Yu={a:"10_aa",e:"11_E",i:"12_I",o:"13_O",u:"14_U",y:"12_I",p:"01_PP",b:"01_PP",m:"01_PP",f:"02_FF",v:"02_FF",t:"04_DD",d:"04_DD",n:"08_nn",l:"08_nn",k:"05_KK",g:"05_KK",c:"05_KK",q:"05_KK",s:"07_SS",z:"07_SS",x:"07_SS",r:"09_RR",w:"14_U",h:"10_aa",j:"06_CH"};function R_(i){i=(i||"").toLowerCase().replace(/th/g,"\xFE").replace(/ch|sh/g,"j");let e=[];for(let n of i)n==="\xFE"?e.push("03_TH"):Yu[n]&&e.push(Yu[n]);let t=Math.max(1,Math.ceil(e.length/5));return e.filter((n,r)=>r%t===0).concat(["00_Sil"]).slice(0,6)}function Ku(i,e,t={}){if(t.timing)return ii(i,t);let n=ii(i,t);if(!e)return n;let r=Math.min(1.5,Math.max(1,(n.dur-.6)/e));return r>1.01&&(n=ii(i,{...t,speed:r})),n.speed=r,n}var C_=new Set(["a","an","the","to","is","are","am","be","been","being","was","were","of","so","does","did","s","at","as","also","very","just","its own","let","lets","into the"]),xn=null,Ju={zero:0,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};function L_(){xn=new Map;let i=[];for(let e in Mt)for(let t of Mt[e].w||[])t.includes(" ")?i.push([t.split(" "),e]):xn.has(t)||xn.set(t,e);i.sort((e,t)=>t[0].length-e[0].length),xn.multi=i}function Mi(i){if(xn.has(i))return xn.get(i);let e=[];i.endsWith("ies")&&e.push(i.slice(0,-3)+"y"),i.endsWith("es")&&e.push(i.slice(0,-2)),i.endsWith("s")&&e.push(i.slice(0,-1)),i.endsWith("ing")&&e.push(i.slice(0,-3),i.slice(0,-3)+"e",i.slice(0,-4)),i.endsWith("ed")&&e.push(i.slice(0,-2),i.slice(0,-1),i.slice(0,-3)),i.endsWith("ly")&&e.push(i.slice(0,-2));for(let t of e)if(xn.has(t))return xn.get(t);return null}function pa(i,e={}){xn||L_();let t=[],n=[],r=i.replace(/\s+/g," ").split(/(?<=[.!?:;])\s+/),s=0;for(let a of r){let o=(a.match(/[A-Za-z]+(?:'[a-z]+)?|\d+(?:\.\d+)?/g)||[]).map(d=>d.toLowerCase().replace(/'s$/,"")),l=t.length,c=0,u=Array.prototype.push;t.push=function(...d){for(let f of d)f._ti=c;return u.apply(this,d)};for(let d=0;d<o.length;d++){c=d;let f=null;for(let[m,y]of xn.multi)if(m.every((v,b)=>o[d+b]===v)){f=[m.length,y];break}if(f){t.push({g:f[1],sign:Mt[f[1]],word:o.slice(d,d+f[0]).join(" ")}),d+=f[0]-1;continue}let _=o[d];if(/^\d/.test(_)){let m=(b,L)=>t.push({g:"#"+b,sign:{...zr[b],dur:.2},word:L,fs:!0,tr:.09}),y=/^(\d+?)(000|00)$/.exec(_),v=y&&Mt[y[2]==="000"?"THOUSAND":"HUNDRED"];y&&v&&y[1]!=="0"?([...y[1]].forEach((b,L)=>m(b,L?"":_)),t.push({g:y[2]==="000"?"THOUSAND":"HUNDRED",sign:v,word:"",fs:!0})):[..._.replace(".","")].forEach((b,L)=>m(b,L?"":_));continue}if(C_.has(_))continue;if(Ju[_]!==void 0&&!Mi(_)){[...String(Ju[_])].forEach((m,y)=>t.push({g:"#"+m,sign:{...zr[m],dur:.2},word:y?"":_,fs:!0,tr:.09}));continue}let x=Mi(_);if(!x&&_.endsWith("er")&&Mi(_.slice(0,-2))){t.push({g:Mi(_.slice(0,-2)),sign:Mt[Mi(_.slice(0,-2))],word:_}),t.push({g:"PERSON",sign:Mt.PERSON,word:""});continue}if(!x&&_.endsWith("r")&&Mi(_.slice(0,-1))){let m=Mi(_.slice(0,-1));t.push({g:m,sign:Mt[m],word:_}),t.push({g:"PERSON",sign:Mt.PERSON,word:""});continue}if(x){t.push({g:x,sign:Mt[x],word:_});continue}n.push(_);let g=e.seen||(e.seen=new Set);hl(t,g.has(_)&&_.length>6?_.slice(0,3):_,_),g.add(_)}delete t.push;let h=-1;for(let d=l;d<t.length;d++){let f=t[d]._ti;t[d].wi=s+f,t[d].anchor=f!==h,h=f,delete t[d]._ti}s+=o.length,t.length&&t.push({pause:.25})}return{seq:t,unknown:n}}function hl(i,e,t=e){let n=e.toLowerCase().replace(/[^a-z]/g,""),r=n.length>6;[...n].forEach((s,a)=>{let o=ha[s],l=a*.006,c=a>0&&n[a-1]===s?.03:0,u={...o,dur:o.R.length>1?.32:r?.12:.16,R:o.R.map(h=>({...h,off:[(h.off?h.off[0]:0)+l+c,h.off?h.off[1]:0,h.off?h.off[2]:0]}))};i.push({g:"fs-"+s,sign:u,word:a===0?t:"",fs:!0,tr:.09,mouthDur:a===0?n.length:0})})}var ma=class{constructor(e={}){this.o={base:"sign/",narr:"narr/",size:420,...e},this.plan=null,this.ready=!1,this.cache={}}init(){return this._init||(this._init=this._doInit())}async _doInit(){let e=this.o.size,t=this.canvas=document.createElement("canvas");t.className="signbox-canvas";let n=this.r=new Cr({canvas:t,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(1),n.setSize(e,e,!1),n.outputColorSpace=ut,n.toneMapping=ko,t.style.width="100%",t.style.height="100%";let r=this.sc=new Bs;r.add(new Ys(16777215,9076080,1.5));let s=new vi(16777215,2);s.position.set(.8,1.6,3),r.add(s);let a=new vi(12571903,.8);a.position.set(-2,1,1),r.add(a),this.cam=new bt(27,1,.05,20),this.cam.position.set(0,1.4,1.58),this.cam.lookAt(0,1.385,0),this.A=await ca(this.o.base,"jpg"),r.add(this.A.root),this.rig=new or(this.A),this.S=new hr(this.A,this.rig),this.idle=ii([],{}),this.idle.dur=1,this.S.bake(this.idle),this.t0=performance.now(),this.ready=!0,this.loop()}attach(e){e&&this.canvas&&this.canvas.parentNode!==e&&e.appendChild(this.canvas)}async timing(e){if(e in this.cache)return this.cache[e];let t=null;try{let n=await fetch(this.o.narr+e+".words.json");n.ok&&(t=await n.json())}catch{}return this.cache[e]=t}async play(e,t,n){let r=this.playId=(this.playId||0)+1;if(!this.ready){try{await this.init()}catch{return}if(r!==this.playId)return}let s=await this.timing(e);if(r!==this.playId)return;let a=pa(s?s.text:t),o=ii(a.seq,s?{timing:s}:{});this.S.bake(o),this.plan=o,this.clock=n,this.start=performance.now()}stop(){this.playId=(this.playId||0)+1,this.plan=null}loop(){requestAnimationFrame(()=>this.loop());let e=performance.now();if(this.last&&e-this.last<30||(this.last=e,!this.canvas.isConnected||document.hidden))return;let t=this.idle,n=(e-this.t0)/1e3;if(this.plan){let r=this.clock?this.clock():null;(r==null||!isFinite(r))&&(r=(e-this.start)/1e3),r>this.plan.dur?this.plan=null:(t=this.plan,n=r)}t===this.idle?(this.S.apply(t,Math.min(n,.99)),this.idleBreath(n)):this.S.apply(t,n),this.r.render(this.sc,this.cam)}idleBreath(e){let t=this.A.bones;t.Spine2.rotateX(.012*Math.sin(e*1.5)),t.Head.rotateY(.03*Math.sin(e*.5)),t.Head.rotateZ(.015*Math.sin(e*.37));let n=e%4.1,r=n>3.9?Math.sin((n-3.9)/.2*Math.PI):0;this.rig.setMorph("AK_09_EyeBlinkLeft",r),this.rig.setMorph("AK_10_EyeBlinkRight",r),this.A.root.updateMatrixWorld(!0)}};return oh(P_);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.6.9
  *)
*/
