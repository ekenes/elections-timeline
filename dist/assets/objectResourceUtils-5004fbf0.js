import{a as Ui}from"./devEnvironmentUtils-4eab2a99.js";import{ez as Ao,ey as Hi,gS as ji,g7 as Co,el as z,cp as fe,co as ve,lK as Wi,ax as L,h_ as Re,lL as ki,lM as qi,lN as nr,dQ as et,T as qr,_ as Et,e9 as Xi,m as Ar,ew as Yi,cV as Xr,af as Ji,eA as lt,jy as ct,cr as Yr,lO as Zi,g1 as Ki,g4 as Qi,dR as zt,s as Cr,hO as ea,g6 as tt,gX as Be,dB as ta,ko as ra,a_ as oa,lP as ia,lQ as aa,c0 as na,c2 as wr,ae as sa,i3 as la,az as qe,eP as de,eQ as ke,eR as Jr,eM as Zr,eN as ca,lR as da,eL as Vt,lS as wo,lT as Oo,bE as ua,cq as ha,ip as Yt,cm as Xe,jv as pr,n as p,hb as fr,bR as ae,hY as Or,hd as Rr,q as H,t as Ro,b4 as Mo,hp as ma,fL as Mr,eo as Ke,v as pa,fg as fa,cs as va,ig as vr,cl as ga,b$ as xa,em as Ta,K as _a,gQ as Io,X as ba,ct as Lo,gb as $o,lU as Po,hz as Ut,ii as Ea,kp as Kr,g8 as Sa}from"./index-d2e37ef9.js";import{e as Jt}from"./mat3f64-221ce671.js";import{o as Ht,r as ya,e as Zt}from"./mat4f64-1413b4a7.js";import{x as Kt,c as gr,y as Aa,u as Ca,q as wa,i as jt,L as Oa,O as Ra,E as Ma}from"./BufferView-b4c48a1a.js";import{r as Ia,n as La,u as Qr}from"./vec32-29d8e2bd.js";import{l as $a,n as Pa,i as je,o as Na,j as Da,k as Fa,u as eo,t as Ba,m as Ga}from"./DefaultMaterial_COLOR_GAMMA-4afffca6.js";import{n as sr}from"./resourceUtils-29c53688.js";import{e as za}from"./byteSizeEstimations-7cf1c05d.js";import{t as Va}from"./NestedMap-1b5db22e.js";import{t as No}from"./requestImageUtils-2b64f044.js";import{t as Ua,u as pt,a as xr,i as Ha,N as Me,s as Y,e as Ie,n as St}from"./basicInterfaces-11f56cb3.js";import{y as to,t as ja,s as k}from"./Indices-2c5d8aeb.js";import{w as Wa,e as ze,o as ka}from"./triangle-5d228c5f.js";import{E as h}from"./VertexAttribute-c9cc5f8e.js";import{f as Ce,G as ue,L as ge,D as oe,E as qa,I as Le,O as le,P as yt,U as Qt,B as ro,_ as Xa}from"./enums-b14466b3.js";import{T as Ye,E as Ya,e as xe,b as Ja}from"./Texture-e5406621.js";import{H as Za}from"./InterleavedLayout-d6a33207.js";import{o as s,n as At,W as Ir,_ as Lr,a as Qe,c as Ka,A as Qa,h as en,l as tn,b as rn,d as on,S as an}from"./OrderIndependentTransparency-e18a4b09.js";import{_ as Do}from"./sphere-bc6b384d.js";import{H as nn,e as sn,n as ye}from"./orientedBoundingBox-976124d2.js";import{o as ln,r as cn}from"./doublePrecisionUtils-e3c3d0d8.js";import{a as oo}from"./FramebufferObject-b6a8caf3.js";let We=class{constructor(e,r,o=!1,i=r){this.data=e,this.size=r,this.exclusive=o,this.stride=i}};function dn(t){if(t.length<Ao)return Array.from(t);if(Hi(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return ji(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let $r=class{constructor(){this.id=Co()}};function un(t,e,r){if(!t||!e)return!1;const{size:o,data:i}=t;z(r,0,0,0),z(ne,0,0,0);let a=0,n=0;for(let l=0;l<e.length-2;l+=3){const c=e[l]*o,d=e[l+1]*o,u=e[l+2]*o;z(X,i[c],i[c+1],i[c+2]),z(Ae,i[d],i[d+1],i[d+2]),z(wt,i[u],i[u+1],i[u+2]);const m=Wa(X,Ae,wt);m?(fe(X,X,Ae),fe(X,X,wt),ve(X,X,1/3*m),fe(r,r,X),a+=m):(fe(ne,ne,X),fe(ne,ne,Ae),fe(ne,ne,wt),n+=3)}return(n!==0||a!==0)&&(a!==0?(ve(r,r,1/a),!0):n!==0&&(ve(r,ne,1/n),!0))}function hn(t,e,r){if(!t||!e)return!1;const{size:o,data:i}=t;z(r,0,0,0);let a=-1,n=0;for(let l=0;l<e.length;l++){const c=e[l]*o;a!==c&&(r[0]+=i[c],r[1]+=i[c+1],r[2]+=i[c+2],n++),a=c}return n>1&&ve(r,r,1/n),n>0}function mn(t,e,r,o){if(!t)return!1;z(o,0,0,0),z(ne,0,0,0);let i=0,a=0;const{size:n,data:l}=t,c=e?e.length-1:l.length/n-1,d=c+(r?2:0);for(let u=0;u<d;u+=2){const m=u<c?u:c,v=u<c?u+1:0,f=(e?e[m]:m)*n,x=(e?e[v]:v)*n;X[0]=l[f],X[1]=l[f+1],X[2]=l[f+2],Ae[0]=l[x],Ae[1]=l[x+1],Ae[2]=l[x+2],ve(X,fe(X,X,Ae),.5);const A=Wi(X,Ae);A>0?(fe(o,o,ve(X,X,A)),i+=A):i===0&&(fe(ne,ne,X),a++)}return i!==0?(ve(o,o,1/i),!0):a!==0&&(ve(o,ne,1/a),!0)}const X=L(),Ae=L(),wt=L(),ne=L();let pn=class{constructor(e){this.channel=e,this.id=Co()}};function fn(t,e){return t==null&&(t=[]),t.push(e),t}function vn(t,e){if(t==null)return null;const r=t.filter(o=>o!==e);return r.length===0?null:r}let Fo=class Bo extends $r{constructor(e,r,o=[],i=null,a=ze.Mesh,n=null,l=-1){super(),this.material=e,this.mapPositions=i,this.type=a,this.objectAndLayerIdColor=n,this.edgeIndicesLength=l,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[c,d]of r)d&&this._vertexAttributes.set(c,{...d});if(o==null||o.length===0){const c=gn(this._vertexAttributes),d=to(c);this.edgeIndicesLength=this.edgeIndicesLength<0?c:this.edgeIndicesLength;for(const u of this._vertexAttributes.keys())this._indices.set(u,d)}else for(const[c,d]of o)d&&(this._indices.set(c,ja(d)),c===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(c).length:this.edgeIndicesLength))}instantiate(e={}){const r=new Bo(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((o,i)=>{o.exclusive=!1,r._vertexAttributes.set(i,o)}),this._indices.forEach((o,i)=>r._indices.set(i,o)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:dn(r.data)},this._vertexAttributes.set(e,r)),r}setAttributeData(e,r){const o=this._vertexAttributes.get(e);o&&this._vertexAttributes.set(e,{...o,exclusive:!0,data:r})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===ze.Mesh?this._computeAttachmentOriginTriangles(e):this.type===ze.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Re(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),o=this.vertexAttributes.get(h.POSITION);return un(o,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(h.POSITION),o=this.indices.get(h.POSITION);return mn(r,o,o&&xn(this.material.parameters,r,o),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),o=this.vertexAttributes.get(h.POSITION);return hn(o,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION),r=this.vertexAttributes.get(h.POSITION);if(!e||e.length===0||!r)return null;const o=this.type===ze.Mesh?3:1;k(e.length%o==0,"Indexing error: "+e.length+" not divisible by "+o);const i=to(e.length/o);return new ka(i,o,e,r)}get transformation(){return this._transformation??Ht}set transformation(e){this._transformation=e&&e!==Ht?ya(e):null}addHighlight(){const e=new pn(Ua.Highlight);return this.highlights=fn(this.highlights,e),e}removeHighlight(e){this.highlights=vn(this.highlights,e)}};function gn(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function xn(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}function Ot(t,e=!1){return t<=Ao?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function nt(t){if(t==null)return null;const e=t.offset!=null?t.offset:ki,r=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:qi,i=nr(1,0,0,0,1,0,e[0],e[1],1),a=nr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=nr(o[0],0,0,0,o[1],0,0,0,1),l=et();return qr(l,a,n),qr(l,i,l),l}let Tn=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},_n=class{constructor(e,r,o){this.name=e,this.lodThreshold=r,this.pivotOffset=o,this.stageResources=new Tn,this.numberOfVertices=0}};function bn(){if(lr==null){const t=e=>Xi(`esri/libs/basisu/${e}`);lr=Et(()=>import("./basis_transcoder-107a421b.js"),["assets/basis_transcoder-107a421b.js","assets/index-d2e37ef9.js","assets/index-0e712e80.css"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return lr}let lr;var Ge;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ge||(Ge={}));let he=null,Rt=null;async function Go(){return Rt==null&&(Rt=bn(),he=await Rt),Rt}function En(t,e){if(he==null)return t.byteLength;const r=new he.BasisFile(new Uint8Array(t)),o=Vo(r)?zo(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),o}function Sn(t,e){if(he==null)return t.byteLength;const r=new he.KTX2File(new Uint8Array(t)),o=Uo(r)?zo(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),o}function zo(t,e,r,o,i){const a=Ya(e?Ce.COMPRESSED_RGBA8_ETC2_EAC:Ce.COMPRESSED_RGB8_ETC2),n=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*o*a*n)}function Vo(t){return t.getNumImages()>=1&&!t.isUASTC()}function Uo(t){return t.getFaces()>=1&&t.isETC1S()}async function yn(t,e,r){he==null&&(he=await Go());const o=new he.BasisFile(new Uint8Array(r));if(!Vo(o))return null;o.startTranscoding();const i=Ho(t,e,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(a,n)=>o.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>o.transcodeImage(l,0,a,n,0,0));return o.close(),o.delete(),i}async function An(t,e,r){he==null&&(he=await Go());const o=new he.KTX2File(new Uint8Array(r));if(!Uo(o))return null;o.startTranscoding();const i=Ho(t,e,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(a,n)=>o.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>o.transcodeImage(l,a,0,0,n,0,-1,-1));return o.close(),o.delete(),i}function Ho(t,e,r,o,i,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:d}=t.capabilities,[u,m]=c?o?[Ge.ETC2_RGBA,Ce.COMPRESSED_RGBA8_ETC2_EAC]:[Ge.ETC1_RGB,Ce.COMPRESSED_RGB8_ETC2]:d?o?[Ge.BC3_RGBA,Ce.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ge.BC1_RGB,Ce.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ge.RGBA32,ue.RGBA],v=e.hasMipmap?r:Math.min(1,r),f=[];for(let x=0;x<v;x++)f.push(new Uint8Array(n(x,u))),l(x,u,f[x]);return e.internalFormat=m,e.hasMipmap=f.length>1,e.samplingMode=e.hasMipmap?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,e.width=i,e.height=a,new Ye(t,e,{type:"compressed",levels:f})}const Mt=Ar.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Cn=542327876,wn=131072,On=4;function Pr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Rn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const Mn=Pr("DXT1"),In=Pr("DXT3"),Ln=Pr("DXT5"),$n=31,Pn=0,Nn=1,Dn=2,Fn=3,Bn=4,Gn=7,zn=20,Vn=21;function Un(t,e,r){const o=Hn(r,e.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:l}=o;return e.samplingMode=i.levels.length>1?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=n,e.height=l,new Ye(t,e,i)}function Hn(t,e){const r=new Int32Array(t,0,$n);if(r[Pn]!==Cn)return Mt.error("Invalid magic number in DDS header"),null;if(!(r[zn]&On))return Mt.error("Unsupported format, must contain a FourCC code"),null;const o=r[Vn];let i,a;switch(o){case Mn:i=8,a=Ce.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case In:i=16,a=Ce.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ln:i=16,a=Ce.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Mt.error("Unsupported FourCC code:",Rn(o)),null}let n=1,l=r[Bn],c=r[Fn];!(3&l)&&!(3&c)||(Mt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const d=l,u=c;let m,v;r[Dn]&wn&&e!==!1&&(n=Math.max(1,r[Gn]));let f=r[Nn]+4;const x=[];for(let A=0;A<n;++A)v=(l+3>>2)*(c+3>>2)*i,m=new Uint8Array(t,f,v),x.push(m),f+=v,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:x},internalFormat:a,width:d,height:u}}let jo=class extends $r{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=ze.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Yi,this._parameters=r||{},this._parameters.mipmap=this._parameters.mipmap!==!1,this._parameters.noUnpackFlip=this._parameters.noUnpackFlip||!1,this._parameters.preMultiplyAlpha=this._parameters.preMultiplyAlpha||!1,this._parameters.wrap=this._parameters.wrap||{s:oe.REPEAT,t:oe.REPEAT},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Xr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const o=()=>{e.removeEventListener("canplay",o),e.play()};e.addEventListener("canplay",o)}}}_startPreloadImageElement(e){Ji(e.src)||Xr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new xe;return r.wrapMode=this._parameters.wrap??oe.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||jn(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new Ye(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(lt(r)||ct(r))&&this._parameters.encoding===pt.DDS_ENCODING?this._loadFromDDSData(e,r):(lt(r)||ct(r))&&this._parameters.encoding===pt.KTX2_ENCODING?this._loadFromKTX2(e,r):(lt(r)||ct(r))&&this._parameters.encoding===pt.BASIS_ENCODING?this._loadFromBasis(e,r):ct(r)?this._loadFromPixelData(e,r):lt(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<ft.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=Un(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>An(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(e,r){return this._loadAsync(()=>yn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(e,r){k(this._parameters.width>0&&this._parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=this._parameters.components===1?ue.LUMINANCE:this._parameters.components===3?ue.RGB:ue.RGBA,o.width=this._parameters.width??0,o.height=this._parameters.height??0,this._glTexture=new Ye(e,o,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async o=>{const i=await No(r,{signal:o});return Yr(o),this._loadFromImage(e,i)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async o=>{const i=await Zi(r,r.src,!1,o);return Yr(o),this._loadFromImage(e,i)})}_loadFromVideoElement(e,r){return r.readyState>=ft.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(o=>new Promise((i,a)=>{const n=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),ea(d)},l=()=>{r.readyState>=ft.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,r)))},c=u=>{n(),a(u||new Cr("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=Ki(o,()=>c(Qi()))}))}_loadFromImage(e,r){const o=Wo(r);this._parameters.width=o.width,this._parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===3?ue.RGB:ue.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new Ye(e,i,r),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const o=e(r.signal);this._loadingPromise=o;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=zt(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function jn(t,e){if(t==null)return 0;if(lt(t)||ct(t))return e.encoding===pt.KTX2_ENCODING?Sn(t,!!e.mipmap):e.encoding===pt.BASIS_ENCODING?En(t,!!e.mipmap):t.byteLength;const{width:r,height:o}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Wo(t):e;return(e.mipmap?4/3:1)*r*o*(e.components||4)||0}function Wo(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var ft;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(ft||(ft={}));var E;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(E||(E={}));function er(t,e){switch(e.normalType){case V.Compressed:t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case V.Attribute:t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case V.ScreenDerivative:t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:tt(e.normalType);case V.COUNT:case V.Ground:}}var V;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(V||(V={}));function Wn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:tt(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));var Q;function Je(t,e){switch(e.textureCoordinateType){case Q.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Q.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Q.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:tt(e.textureCoordinateType);case Q.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case Q.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(Q||(Q={}));function kn(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function ko(t,e){switch(t.include(Je,e),e.textureCoordinateType){case Q.Default:case Q.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case Q.Atlas:return t.include(kn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:tt(e.textureCoordinateType);case Q.None:case Q.COUNT:return}}var I;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(I||(I={}));let K=class{constructor(e,r,o,i,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={[I.Pass]:null,[I.Draw]:null},i)switch(o){case I.Pass:this.bind[I.Pass]=i;break;case I.Draw:this.bind[I.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},me=class extends K{constructor(e,r){super(e,"vec3",I.Draw,(o,i,a,n)=>o.setUniform3fv(e,r(i,a,n)))}},J=class extends K{constructor(e,r){super(e,"vec3",I.Pass,(o,i,a)=>o.setUniform3fv(e,r(i,a)))}},vt=class extends K{constructor(e,r){super(e,"sampler2D",I.Draw,(o,i,a)=>o.bindTexture(e,r(i,a)))}},Z=class extends K{constructor(e,r){super(e,"sampler2D",I.Pass,(o,i,a)=>o.bindTexture(e,r(i,a)))}},qn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return xr.LOADED}},Xn=class extends qn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Be(this._texture),this._textureNormal=Be(this._textureNormal),this._textureEmissive=Be(this._textureEmissive),this._textureOcclusion=Be(this._textureOcclusion),this._textureMetallicRoughness=Be(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?xr.LOADED:xr.LOADING}get textureBindParameters(){return new Yn(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Be(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const o=this._textureRepository.acquire(e);if(ta(o))return++this._numLoading,void o.then(i=>{if(this._disposed)return Be(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(o)}},Yn=class extends At{constructor(e=null,r=null,o=null,i=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=a}};var R;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(R||(R={}));function qo(t,e){const r=t.fragment,o=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===R.Normal&&o&&t.include(ko,e),e.pbrMode!==R.Schematic)if(e.pbrMode!==R.Disabled){if(e.pbrMode===R.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(i===I.Pass?new Z("texMetallicRoughness",a=>a.textureMetallicRoughness):new vt("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(i===I.Pass?new Z("texEmission",a=>a.textureEmissive):new vt("texEmission",a=>a.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(i===I.Pass?new Z("texOcclusion",a=>a.textureOcclusion):new vt("texOcclusion",a=>a.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),i===I.Pass?r.uniforms.add(new J("emissionFactor",a=>a.emissiveFactor),new J("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new me("emissionFactor",a=>a.emissiveFactor),new me("mrrFactors",a=>a.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?s`applyEmission(${e.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?s`applyOcclusion(${e.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const tr=new Map([[h.POSITION,0],[h.NORMAL,1],[h.NORMALCOMPRESSED,1],[h.UV0,2],[h.COLOR,3],[h.COLORFEATUREATTRIBUTE,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.INSTANCEOBJECTANDLAYERIDCOLOR,7],[h.INSTANCEMODEL,8],[h.INSTANCEMODELNORMAL,12],[h.INSTANCEMODELORIGINHI,11],[h.INSTANCEMODELORIGINLO,15]]);function Jn(t){return Math.abs(t*t*t)}function Zn(t,e,r){const o=r.parameters;return cr.scale=Math.min(o.divisor/(e-o.offset),1),cr.factor=Jn(t),cr}function Kn(t,e){return ra(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function Qn(t,e,r,o){return Kn(t,Zn(e,r,o))}const cr={scale:0,factor:0,minScaleFactor:0},It=oa();function es(t,e,r,o,i,a){if(t.visible)if(t.boundingInfo){k(t.type===ze.Mesh);const n=e.tolerance;Xo(t.boundingInfo,r,o,n,i,a)}else{const n=t.indices.get(h.POSITION),l=t.vertexAttributes.get(h.POSITION);Jo(r,o,0,n.length/3,n,l,void 0,i,a)}}const ts=L();function Xo(t,e,r,o,i,a){if(t==null)return;const n=os(e,r,ts);if(ia(It,t.bbMin),aa(It,t.bbMax),i!=null&&i.applyToAabb(It),is(It,e,n,o)){const{primitiveIndices:l,indices:c,position:d}=t,u=l?l.length:c.length/3;if(u>ds){const m=t.getChildren();if(m!==void 0){for(const v of m)Xo(v,e,r,o,i,a);return}}Jo(e,r,0,u,c,d,l,i,a)}}const Yo=L();function Jo(t,e,r,o,i,a,n,l,c){if(n)return rs(t,e,r,o,i,a,n,l,c);const{data:d,stride:u}=a,m=t[0],v=t[1],f=t[2],x=e[0]-m,A=e[1]-v,P=e[2]-f;for(let N=r,B=3*r;N<o;++N){let w=u*i[B++],O=d[w++],$=d[w++],T=d[w];w=u*i[B++];let C=d[w++],M=d[w++],S=d[w];w=u*i[B++];let y=d[w++],F=d[w++],_=d[w];l!=null&&([O,$,T]=l.applyToVertex(O,$,T,N),[C,M,S]=l.applyToVertex(C,M,S,N),[y,F,_]=l.applyToVertex(y,F,_,N));const D=C-O,G=M-$,W=S-T,q=y-O,Te=F-$,_e=_-T,$e=A*_e-Te*P,rt=P*q-_e*x,ot=x*Te-q*A,ce=D*$e+G*rt+W*ot;if(Math.abs(ce)<=Number.EPSILON)continue;const ie=m-O,Pe=v-$,Ne=f-T,pe=ie*$e+Pe*rt+Ne*ot;if(ce>0){if(pe<0||pe>ce)continue}else if(pe>0||pe<ce)continue;const be=Pe*W-G*Ne,it=Ne*D-W*ie,at=ie*G-D*Pe,De=x*be+A*it+P*at;if(ce>0){if(De<0||pe+De>ce)continue}else if(De>0||pe+De<ce)continue;const Fe=(q*be+Te*it+_e*at)/ce;Fe>=0&&c(Fe,Zo(D,G,W,q,Te,_e,Yo),N,!1)}}function rs(t,e,r,o,i,a,n,l,c){const{data:d,stride:u}=a,m=t[0],v=t[1],f=t[2],x=e[0]-m,A=e[1]-v,P=e[2]-f;for(let N=r;N<o;++N){const B=n[N];let w=3*B,O=u*i[w++],$=d[O++],T=d[O++],C=d[O];O=u*i[w++];let M=d[O++],S=d[O++],y=d[O];O=u*i[w];let F=d[O++],_=d[O++],D=d[O];l!=null&&([$,T,C]=l.applyToVertex($,T,C,N),[M,S,y]=l.applyToVertex(M,S,y,N),[F,_,D]=l.applyToVertex(F,_,D,N));const G=M-$,W=S-T,q=y-C,Te=F-$,_e=_-T,$e=D-C,rt=A*$e-_e*P,ot=P*Te-$e*x,ce=x*_e-Te*A,ie=G*rt+W*ot+q*ce;if(Math.abs(ie)<=Number.EPSILON)continue;const Pe=m-$,Ne=v-T,pe=f-C,be=Pe*rt+Ne*ot+pe*ce;if(ie>0){if(be<0||be>ie)continue}else if(be>0||be<ie)continue;const it=Ne*q-W*pe,at=pe*G-q*Pe,De=Pe*W-G*Ne,Fe=x*it+A*at+P*De;if(ie>0){if(Fe<0||be+Fe>ie)continue}else if(Fe>0||be+Fe<ie)continue;const kr=(Te*it+_e*at+$e*De)/ie;kr>=0&&c(kr,Zo(G,W,q,Te,_e,$e,Yo),B,!1)}}const io=L(),ao=L();function Zo(t,e,r,o,i,a,n){return z(io,t,e,r),z(ao,o,i,a),na(n,io,ao),wr(n,n),n}function os(t,e,r){return z(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function is(t,e,r,o){return as(t,e,r,o,1/0)}function as(t,e,r,o,i){const a=(t[0]-o-e[0])*r[0],n=(t[3]+o-e[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const d=(t[1]-o-e[1])*r[1],u=(t[4]+o-e[1])*r[1];if(c=Math.min(c,Math.max(d,u)),c<0||(l=Math.max(l,Math.min(d,u)),l>c))return!1;const m=(t[2]-o-e[2])*r[2],v=(t[5]+o-e[2])*r[2];return c=Math.min(c,Math.max(m,v)),!(c<0)&&(l=Math.max(l,Math.min(m,v)),!(l>c)&&l<i)}function ns(t,e,r,o,i){let a=(r.screenLength||0)*t.pixelRatio;i!=null&&(a=Qn(a,o,e,i));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return sa(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Ko(t,e){const r=e?Ko(e):{};for(const o in t){let i=t[o];i&&i.forEach&&(i=ls(i)),i==null&&o in r||(r[o]=i)}return r}function ss(t,e){let r=!1;for(const o in e){const i=e[o];i!==void 0&&(Array.isArray(i)?t[o]===null?(t[o]=i.slice(),r=!0):la(t[o],i)&&(r=!0):t[o]!==i&&(r=!0,t[o]=i))}return r}function ls(t){const e=[];return t.forEach(r=>e.push(r)),e}const cs={multiply:1,ignore:2,replace:3,tint:4},ds=1e3;let us=class extends $r{constructor(e,r){super(),this.type=ze.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=tr,this._pp0=qe(0,0,1),this._pp1=qe(0,0,0),this._parameters=Ko(e,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ss(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.isDecoration||e.bindParameters.decorations===Ha.ON)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get isDecoration(){return this.parameters.isDecoration}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository!=null&&this.repository.materialChanged(this)}intersectDraped(e,r,o,i,a,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,r,o,this._pp0,this._pp1,a)}};var Tr;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(Tr||(Tr={}));var Ve;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.ANTIALIASING=10]="ANTIALIASING",t[t.SSAO=11]="SSAO",t[t.HIGHLIGHT=12]="HIGHLIGHT",t[t.SHADOW_HIGHLIGHT=13]="SHADOW_HIGHLIGHT",t[t.ENVIRONMENT_OPAQUE=14]="ENVIRONMENT_OPAQUE",t[t.ENVIRONMENT_TRANSPARENT=15]="ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=16]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=17]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=18]="HUD_MATERIAL",t[t.LABEL_MATERIAL=19]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=20]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=21]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=22]="DRAPED_MATERIAL",t[t.DRAPED_WATER=23]="DRAPED_WATER",t[t.VOXEL=24]="VOXEL",t[t.MAX_SLOTS=25]="MAX_SLOTS"})(Ve||(Ve={}));let hs=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=L(),this._mbs=Do(),this._obb=nn(),this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=de(e)}applyToVertex(e,r,o){const i=z(_r,e,r,o),a=z(so,e,r,o+this.componentLocalOriginLength),n=this._totalOffset/de(a);return ke(this._tmpVertex,i,a,n),this._tmpVertex}applyToAabb(e){const r=z(_r,e[0],e[1],e[2]+this.componentLocalOriginLength),o=z(so,e[3],e[4],e[5]+this.componentLocalOriginLength),i=Jr(fs,r),a=Jr(vs,o),n=Zr(gs,r),l=Zr(xs,o),c=ca(lo,n,l);c[0]=i[0]*a[0]<0?0:c[0],c[1]=i[1]*a[1]<0?0:c[1],c[2]=i[2]*a[2]<0?0:c[2];const d=de(c);if(d<this._totalOffset)return e[0]-=r[0]<0?this._totalOffset:0,e[1]-=r[1]<0?this._totalOffset:0,e[2]-=r[2]<0?this._totalOffset:0,e[3]+=o[0]>0?this._totalOffset:0,e[4]+=o[1]>0?this._totalOffset:0,e[5]+=o[2]>0?this._totalOffset:0,e;const u=da(lo,n,l),m=de(u),v=this._totalOffset/m,f=this._totalOffset/d;return e[0]+=r[0]*(r[0]>0?v:f),e[1]+=r[1]*(r[1]>0?v:f),e[2]+=r[2]*(r[2]>0?v:f),e[3]+=o[0]*(o[0]<0?v:f),e[4]+=o[1]*(o[1]<0?v:f),e[5]+=o[2]*(o[2]<0?v:f),e}applyToMbs(e){const r=de(e),o=this._totalOffset/r;return ke(this._mbs,e,e,o),this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){return sn(e,this._totalOffset,this._totalOffset,Vt.Global,this._obb),this._obb}},ms=class{constructor(e=0){this.offset=e,this.sphere=Do(),this.tmpVertex=L()}applyToVertex(e,r,o){const i=this.objectTransform.transform,a=z(_r,e,r,o),n=Re(a,a,i),l=this.offset/de(n);ke(n,n,n,l);const c=this.objectTransform.inverse;return Re(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(e,r){const o=this.offset/de(e);ke(e,e,e,o);const i=this.offset/de(r);ke(r,r,r,i)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const r=de(e),o=this.offset/r;return ke(this.sphere,e,e,o),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const no=new ms;function ps(t){return t!=null?(no.offset=t,no):null}new hs;const _r=L(),so=L(),fs=L(),vs=L(),gs=L(),xs=L(),lo=L();function co(t,e,r,o){const i=r.typedBuffer,a=r.typedBufferStride,n=t.length;o*=a;for(let l=0;l<n;++l){const c=2*t[l];i[o]=e[c],i[o+1]=e[c+1],o+=a}}function Qo(t,e,r,o,i){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(o*=n,i==null||i===1)for(let c=0;c<l;++c){const d=3*t[c];a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],o+=n}else for(let c=0;c<l;++c){const d=3*t[c];for(let u=0;u<i;++u)a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],o+=n}}function ei(t,e,r,o,i=1){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(o*=n,i===1)for(let c=0;c<l;++c){const d=4*t[c];a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],a[o+3]=e[d+3],o+=n}else for(let c=0;c<l;++c){const d=4*t[c];for(let u=0;u<i;++u)a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],a[o+3]=e[d+3],o+=n}}function Ts(t,e,r,o,i,a=1){if(!r)return void Qo(t,e,o,i,a);const n=o.typedBuffer,l=o.typedBufferStride,c=t.length,d=r[0],u=r[1],m=r[2],v=r[4],f=r[5],x=r[6],A=r[8],P=r[9],N=r[10],B=r[12],w=r[13],O=r[14];i*=l;let $=0,T=0,C=0;const M=wo(r)?S=>{$=e[S]+B,T=e[S+1]+w,C=e[S+2]+O}:S=>{const y=e[S],F=e[S+1],_=e[S+2];$=d*y+v*F+A*_+B,T=u*y+f*F+P*_+w,C=m*y+x*F+N*_+O};if(a===1)for(let S=0;S<c;++S)M(3*t[S]),n[i]=$,n[i+1]=T,n[i+2]=C,i+=l;else for(let S=0;S<c;++S){M(3*t[S]);for(let y=0;y<a;++y)n[i]=$,n[i+1]=T,n[i+2]=C,i+=l}}function _s(t,e,r,o,i,a=1){if(!r)return void Qo(t,e,o,i,a);const n=r,l=o.typedBuffer,c=o.typedBufferStride,d=t.length,u=n[0],m=n[1],v=n[2],f=n[4],x=n[5],A=n[6],P=n[8],N=n[9],B=n[10],w=!Oo(n),O=1e-6,$=1-O;i*=c;let T=0,C=0,M=0;const S=wo(n)?y=>{T=e[y],C=e[y+1],M=e[y+2]}:y=>{const F=e[y],_=e[y+1],D=e[y+2];T=u*F+f*_+P*D,C=m*F+x*_+N*D,M=v*F+A*_+B*D};if(a===1)if(w)for(let y=0;y<d;++y){S(3*t[y]);const F=T*T+C*C+M*M;if(F<$&&F>O){const _=1/Math.sqrt(F);l[i]=T*_,l[i+1]=C*_,l[i+2]=M*_}else l[i]=T,l[i+1]=C,l[i+2]=M;i+=c}else for(let y=0;y<d;++y)S(3*t[y]),l[i]=T,l[i+1]=C,l[i+2]=M,i+=c;else for(let y=0;y<d;++y){if(S(3*t[y]),w){const F=T*T+C*C+M*M;if(F<$&&F>O){const _=1/Math.sqrt(F);T*=_,C*=_,M*=_}}for(let F=0;F<a;++F)l[i]=T,l[i+1]=C,l[i+2]=M,i+=c}}function bs(t,e,r,o,i,a=1){if(!r)return void ei(t,e,o,i,a);const n=r,l=o.typedBuffer,c=o.typedBufferStride,d=t.length,u=n[0],m=n[1],v=n[2],f=n[4],x=n[5],A=n[6],P=n[8],N=n[9],B=n[10],w=!Oo(n),O=1e-6,$=1-O;if(i*=c,a===1)for(let T=0;T<d;++T){const C=4*t[T],M=e[C],S=e[C+1],y=e[C+2],F=e[C+3];let _=u*M+f*S+P*y,D=m*M+x*S+N*y,G=v*M+A*S+B*y;if(w){const W=_*_+D*D+G*G;if(W<$&&W>O){const q=1/Math.sqrt(W);_*=q,D*=q,G*=q}}l[i]=_,l[i+1]=D,l[i+2]=G,l[i+3]=F,i+=c}else for(let T=0;T<d;++T){const C=4*t[T],M=e[C],S=e[C+1],y=e[C+2],F=e[C+3];let _=u*M+f*S+P*y,D=m*M+x*S+N*y,G=v*M+A*S+B*y;if(w){const W=_*_+D*D+G*G;if(W<$&&W>O){const q=1/Math.sqrt(W);_*=q,D*=q,G*=q}}for(let W=0;W<a;++W)l[i]=_,l[i+1]=D,l[i+2]=G,l[i+3]=F,i+=c}}function Es(t,e,r,o,i,a=1){const n=o.typedBuffer,l=o.typedBufferStride,c=t.length;if(i*=l,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let d=0;d<c;++d){const u=3*t[d];for(let m=0;m<a;++m)n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=255,i+=l}else for(let d=0;d<c;++d){const u=4*t[d];for(let m=0;m<a;++m)n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=e[u+3],i+=l}else{if(r===4){for(let d=0;d<c;++d){const u=4*t[d];n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=e[u+3],i+=l}return}for(let d=0;d<c;++d){const u=3*t[d];n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=255,i+=l}}else{n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3];const d=new Uint32Array(o.typedBuffer.buffer,o.start),u=l/4,m=d[i/=4];i+=u;const v=c*a;for(let f=1;f<v;++f)d[i]=m,i+=u}}function Ss(t,e,r,o){const i=r.typedBuffer,a=r.typedBufferStride,n=t.length,l=e[0];o*=a;for(let c=0;c<n;++c)i[o]=l,o+=a}function ys(t,e,r,o,i=1){const a=e.typedBuffer,n=e.typedBufferStride;if(o*=n,i===1)for(let l=0;l<r;++l)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n;else for(let l=0;l<r;++l)for(let c=0;c<i;++c)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n}function As(t,e,r,o,i,a){for(const n of e.fields.keys()){const l=t.vertexAttributes.get(n),c=t.indices.get(n);if(l&&c)Cs(n,l,c,r,o,i,a);else if(n===h.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const d=t.indices.get(h.POSITION);if(k(!!d,`No buffer view for ${n}`),d){const u=d.length,m=i.getField(n,Kt);ys(t.objectAndLayerIdColor,m,u,a)}}}}function Cs(t,e,r,o,i,a,n){switch(t){case h.POSITION:{k(e.size===3);const l=a.getField(t,jt);k(!!l,`No buffer view for ${t}`),l&&Ts(r,e.data,o,l,n);break}case h.NORMAL:{k(e.size===3);const l=a.getField(t,jt);k(!!l,`No buffer view for ${t}`),l&&_s(r,e.data,i,l,n);break}case h.NORMALCOMPRESSED:{k(e.size===2);const l=a.getField(t,wa);k(!!l,`No buffer view for ${t}`),l&&co(r,e.data,l,n);break}case h.UV0:{k(e.size===2);const l=a.getField(t,Ca);k(!!l,`No buffer view for ${t}`),l&&co(r,e.data,l,n);break}case h.COLOR:case h.SYMBOLCOLOR:{const l=a.getField(t,Kt);k(!!l,`No buffer view for ${t}`),k(e.size===3||e.size===4),!l||e.size!==3&&e.size!==4||Es(r,e.data,e.size,l,n);break}case h.COLORFEATUREATTRIBUTE:{const l=a.getField(t,Aa);k(!!l,`No buffer view for ${t}`),k(e.size===1),l&&e.size===1&&Ss(r,e.data,l,n);break}case h.TANGENT:{k(e.size===4);const l=a.getField(t,gr);k(!!l,`No buffer view for ${t}`),l&&bs(r,e.data,i,l,n);break}case h.PROFILERIGHT:case h.PROFILEUP:case h.PROFILEVERTEXANDNORMAL:case h.FEATUREVALUE:{k(e.size===4);const l=a.getField(t,gr);k(!!l,`No buffer view for ${t}`),l&&ei(r,e.data,l,n)}}}let ws=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,o,i,a){As(o,this.vertexBufferLayout,e,r,i,a)}};function Nr(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function ti({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let ri=class extends K{constructor(e,r){super(e,"mat3",I.Draw,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Oe=class extends K{constructor(e,r){super(e,"mat3",I.Pass,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Ze=class extends K{constructor(e,r){super(e,"mat4",I.Pass,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function oi(t,e){t.include(Nr);const r=t.vertex;r.include(ti,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new J("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new J("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new Oe("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Ze("transformProjFromView",o=>o.transformProjFromView),new ri("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new me("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new me("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new J("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Os extends At{constructor(){super(...arguments),this.transformWorldFromViewTH=L(),this.transformWorldFromViewTL=L(),this.transformViewFromCameraRelativeRS=Jt(),this.transformProjFromView=Zt()}}function ii(t,e){switch(e.normalType){case V.Attribute:case V.Compressed:t.include(er,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new ri("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Oe("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case V.Ground:t.include(oi,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case V.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:tt(e.normalType);case V.COUNT:}}let Rs=class extends Os{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Jt()}};const Ms=.1,Dr=.001;let rr=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Fr=class{constructor(e,r,o){this.release=o,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=zt(this._program),this._pipeline=this._configuration=null}reload(e){zt(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,o){e.setPipelineState(this.getPipelineState(r,o))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return qa.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},Br=class{constructor(e,r,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new ua({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Ja()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(r==null||r.glName==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let o=this._textures.get(e);return o==null?(o=this._allocTextureUnit(r),this._textures.set(e,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Le.LESS;Le.ALWAYS;const Is={mask:255},Ls={function:{func:Le.ALWAYS,ref:Me.OutlineVisualElementMask,mask:Me.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.ZERO}},$s={function:{func:Le.ALWAYS,ref:Me.OutlineVisualElementMask,mask:Me.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.REPLACE}};Le.EQUAL,Me.OutlineVisualElementMask,Me.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;Le.NOTEQUAL,Me.OutlineVisualElementMask,Me.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;function Ps({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:a,occlusionTexture:n}){return t==null&&e==null&&i==null&&(a==null||ha(a,Yt))&&n==null&&(o==null||o===1)&&(r==null||r===1||r===0)}const ai=[1,1,.5],Ns=[0,.6,.2],Ds=[0,1,.2];let we=class extends K{constructor(e,r){super(e,"vec2",I.Pass,(o,i,a)=>o.setUniform2fv(e,r(i,a)))}};function uo(t){t.varyings.add("linearDepth","float")}function ni(t){t.vertex.uniforms.add(new we("nearFar",(e,r)=>r.camera.nearFar))}function si(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function li(t,e){const{vertex:r}=t;switch(e.output){case E.Color:if(e.receiveShadows)return uo(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case E.Depth:case E.Shadow:case E.ShadowHighlight:case E.ShadowExcludeHighlight:return t.include(oi,e),uo(t),ni(t),si(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function ci(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ue(t,e){Fs(t,e,new me("slicePlaneOrigin",(r,o)=>Bs(e,r,o)),new me("slicePlaneBasis1",(r,o)=>{var i;return ho(e,r,o,(i=o.slicePlane)==null?void 0:i.basis1)}),new me("slicePlaneBasis2",(r,o)=>{var i;return ho(e,r,o,(i=o.slicePlane)==null?void 0:i.basis2)}))}function Fs(t,e,...r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const o=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(o),t.fragment.code.add(o),t.fragment.code.add(a)}function di(t,e,r){return t.instancedDoublePrecision?z(Gs,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ui(t,e){return t!=null?Xe(Wt,e.origin,t):e.origin}function hi(t,e,r){return t.hasSliceTranslatedView?e!=null?pr(zs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Bs(t,e,r){if(r.slicePlane==null)return Yt;const o=di(t,e,r),i=ui(o,r.slicePlane),a=hi(t,o,r);return a!=null?Re(Wt,i,a):i}function ho(t,e,r,o){if(o==null||r.slicePlane==null)return Yt;const i=di(t,e,r),a=ui(i,r.slicePlane),n=hi(t,i,r);return n!=null?(fe(st,o,a),Re(Wt,a,n),Re(st,st,n),Xe(st,st,Wt)):o}const Gs=L(),Wt=L(),st=L(),zs=Zt();function gt(t){si(t),t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let ee=class extends K{constructor(e,r){super(e,"float",I.Pass,(o,i,a)=>o.setUniform1f(e,r(i,a)))}},Vs=class extends K{constructor(e,r){super(e,"mat4",I.Draw,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function bt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Yt):t.uniforms.add(new me("cameraPosition",(r,o)=>z(mi,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function xt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Ze("proj",(o,i)=>i.camera.projectionMatrix),new Vs("view",(o,i)=>pr(mo,i.camera.viewMatrix,o.origin)),new me("localOrigin",o=>o.origin));const r=o=>z(mi,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Ze("proj",(o,i)=>i.camera.projectionMatrix),new Ze("view",(o,i)=>pr(mo,i.camera.viewMatrix,r(i))),new J("localOrigin",(o,i)=>r(i)))}const mo=Zt(),mi=L();function Us(t){t.uniforms.add(new Ze("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let Hs=class extends At{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const o of e)r[o]=this[o];return r}};function g(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,i=t.count||2,a=Math.ceil(Math.log2(i)),n=e._parameterBits??[0];let l=0;for(;n[l]+a>16;)l++,l>=n.length&&n.push(0);e._parameterBits=n;const c=n[l],d=(1<<a)-1<<c;n[l]+=a,Object.defineProperty(e,r,{get(){return this[o]},set(u){if(this[o]!==u&&(this[o]=u,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+u<<c&d,typeof u!="number"&&typeof u!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof u)}})}}}let br=class extends Hs{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};p([g()],br.prototype,"instancedDoublePrecision",void 0),p([g()],br.prototype,"hasModelTransformation",void 0);const po=Jt();function pi(t,e){const r=e.hasModelTransformation,o=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Ze("model",a=>a.modelTransformation??Ht)),t.vertex.uniforms.add(new Oe("normalLocalOriginFromModel",a=>(fr(po,a.modelTransformation??Ht),po)))),e.instanced&&o&&(t.attributes.add(h.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(h.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(h.INSTANCEMODEL,"mat3"),t.attributes.add(h.INSTANCEMODELNORMAL,"mat3"));const i=t.vertex;o&&(i.include(ti,e),i.uniforms.add(new me("viewOriginHi",(a,n)=>ln(z(Lt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Lt)),new me("viewOriginLo",(a,n)=>cn(z(Lt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Lt)))),i.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * normalize(instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===E.Normal&&(Us(i),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${o?"return normalize((viewNormal * vec4(instanceModelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Lt=L();function js(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(ye.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(ye.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(ye.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(ye.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let fi=class extends K{constructor(e,r){super(e,"int",I.Pass,(o,i,a)=>o.setUniform1i(e,r(i,a)))}};function vi(t,e){e.hasSymbolColors?(t.include(js),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new fi("colorMixMode",r=>cs[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function gi(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ws(t){t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function ks(t){t.uniforms.add(new J("screenSizePerspectiveAlignment",e=>qs(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function qs(t){return z(Xs,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Xs=L();let te=class extends K{constructor(e,r){super(e,"vec4",I.Pass,(o,i,a)=>o.setUniform4fv(e,r(i,a)))}};function xi(t,e){const r=t.vertex;e.hasVerticalOffset?(Js(r),e.hasScreenSizePerspective&&(t.include(Ws),ks(r),bt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ys=Or();function Js(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return ae(Ys,a*l,n,o,i)}))}function Zs(t,e){const r=e.output===E.ObjectAndLayerIdColor,o=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),o?t.attributes.add(h.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Ti(t){t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function _i(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ks(t,e){switch(e.output){case E.Shadow:case E.ShadowHighlight:case E.ShadowExcludeHighlight:t.fragment.include(Ti),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case E.Depth:t.fragment.include(_i),t.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const Qs=Rr(1,1,0,1),el=Rr(1,0,1,1);function tl(t){t.fragment.uniforms.add(new Z("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",Qs).add("unoccludedHighlightFlag","vec4",el),t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let rl=class extends K{constructor(e,r,o){super(e,"vec4",I.Pass,(i,a,n)=>i.setUniform4fv(e,r(a,n)),o)}},ol=class extends K{constructor(e,r,o){super(e,"float",I.Pass,(i,a,n)=>i.setUniform1fv(e,r(a,n)),o)}},U=class extends Mo{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};p([H()],U.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),p([H()],U.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),p([H()],U.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),p([H()],U.prototype,"DECONFLICTOR_SHOW_GRID",void 0),p([H()],U.prototype,"LABELS_SHOW_BORDER",void 0),p([H()],U.prototype,"TEXT_SHOW_BASELINE",void 0),p([H()],U.prototype,"TEXT_SHOW_BORDER",void 0),p([H()],U.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),p([H()],U.prototype,"OVERLAY_SHOW_CENTER",void 0),p([H()],U.prototype,"SHOW_POI",void 0),p([H()],U.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),p([H()],U.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),p([H()],U.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),p([H()],U.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),p([H()],U.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),p([H()],U.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),p([H()],U.prototype,"I3S_TREE_SHOW_TILES",void 0),p([H()],U.prototype,"I3S_SHOW_MODIFICATIONS",void 0),p([H()],U.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),p([H()],U.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),p([H()],U.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),p([H()],U.prototype,"LINE_WIREFRAMES",void 0),U=p([Ro("esri.views.3d.support.DebugFlags")],U);new U;var fo,vo;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(fo||(fo={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(vo||(vo={}));const dr=8;function Tt(t,e){const{vertex:r,attributes:o}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&o.add(h.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new J("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new J("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new J("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new J("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new Oe("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new J("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",dr),r.uniforms.add(new ol("vvColorValues",i=>i.vvColor.values,dr),new rl("vvColorColors",i=>i.vvColor.colors,dr)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function il(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Dr)}) { discard; } }
  `)}function He(t,e){al(t,e,new ee("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function al(t,e,r){const o=t.fragment;switch(e.alphaDiscardMode!==Y.Mask&&e.alphaDiscardMode!==Y.MaskBlend||o.uniforms.add(r),e.alphaDiscardMode){case Y.Blend:return t.include(il);case Y.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Y.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Y.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function bi(t,e){const{vertex:r,fragment:o}=t,i=e.hasColorTexture&&e.alphaDiscardMode!==Y.Opaque;switch(e.output){case E.Depth:case E.Shadow:case E.ShadowHighlight:case E.ShadowExcludeHighlight:case E.ObjectAndLayerIdColor:xt(r,e),t.include(gt,e),t.include(Je,e),t.include(Tt,e),t.include(Ks,e),t.include(Ue,e),t.include(Zs,e),ni(t),t.varyings.add("depth","float"),i&&o.uniforms.add(new Z("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(He,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===E.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case E.Normal:{xt(r,e),t.include(gt,e),t.include(er,e),t.include(ii,e),t.include(Je,e),t.include(Tt,e),i&&o.uniforms.add(new Z("tex",n=>n.texture)),e.normalType===V.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const a=e.normalType===V.Attribute||e.normalType===V.Compressed;r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${a?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Ue,e),t.include(He,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===V.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case E.Highlight:xt(r,e),t.include(gt,e),t.include(Je,e),t.include(Tt,e),i&&o.uniforms.add(new Z("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(Ue,e),t.include(He,e),t.include(tl,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function nl(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==Q.None&&(t.include(ko,e),r.uniforms.add(e.pbrTextureBindType===I.Pass?new Z("normalTexture",o=>o.textureNormal):new vt("normalTexture",o=>o.textureNormal)),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}var se;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(se||(se={}));const Nt=new xe;Nt.pixelFormat=ue.RED,Nt.internalFormat=yt.R8,Nt.wrapMode=oe.CLAMP_TO_EDGE;const Dt=new xe;Dt.pixelFormat=ue.RG,Dt.internalFormat=yt.RG8,Dt.wrapMode=oe.CLAMP_TO_EDGE;const Ft=new xe;Ft.internalFormat=yt.RGBA4,Ft.dataType=Qt.UNSIGNED_SHORT_4_4_4_4,Ft.wrapMode=oe.CLAMP_TO_EDGE;const Ei=new xe;Ei.wrapMode=oe.CLAMP_TO_EDGE;const dt=new xe;dt.wrapMode=oe.CLAMP_TO_EDGE,dt.samplingMode=ge.LINEAR_MIPMAP_LINEAR,dt.hasMipmap=!0,dt.maxAnisotropy=8;const ut=new xe;ut.pixelFormat=ue.RED,ut.dataType=Qt.HALF_FLOAT,ut.internalFormat=yt.R16F,ut.samplingMode=ge.NEAREST;const Bt=new xe;Bt.dataType=Qt.HALF_FLOAT,Bt.internalFormat=yt.RGBA16F,Bt.samplingMode=ge.NEAREST;se.RED+"",se.RG+"",se.RGBA4+"",se.RGBA+"",se.RGBA_MIPMAP+"",se.R16F+"",se.RGBA16F+"";var _t;(function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH24_BUFFER=1]="DEPTH24_BUFFER",t[t.DEPTH16_BUFFER=2]="DEPTH16_BUFFER"})(_t||(_t={}));const ht=new xe;ht.pixelFormat=ue.DEPTH_STENCIL,ht.dataType=Qt.UNSIGNED_INT_24_8,ht.samplingMode=ge.NEAREST,ht.wrapMode=oe.CLAMP_TO_EDGE;_t.DEPTH_STENCIL_TEXTURE+"",_t.DEPTH24_BUFFER+"",new oo(ro.DEPTH_COMPONENT24,4),_t.DEPTH16_BUFFER+"",new oo(ro.DEPTH_COMPONENT16,4);let sl=class extends Mo{consumes(e){return!1}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}},ll=class extends sl{};function Si(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Gr(t){t.include(_i),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}let cl=class extends K{constructor(e,r){super(e,"vec2",I.Draw,(o,i,a,n)=>o.setUniform2fv(e,r(i,a,n)))}};const yi=Ar.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Ai=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==r){yi.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const a of Object.keys(o))o[a]!==e[a]&&i.add(a);for(const a of Object.keys(e))o[a]!==e[a]&&i.add(a);i.forEach(a=>console.error(`  ${a}: current ${o[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},or=class extends Ai{constructor(){super(...arguments),this.vertex=new go,this.fragment=new go,this.attributes=new hl,this.varyings=new ml,this.extensions=new Er,this.constants=new j,this.outputs=new Ci}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),c=e==="vertex"?fl:pl,d=this.constants.generateSource().concat(a.constants.generateSource()),u=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${c}

${d.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${u.join(`
`)}

${l.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[I.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[I.Pass];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n)=>{for(let l=0;l<i;++l)o[l](e,a,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[I.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[I.Draw];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n,l)=>{for(let c=0;c<i;++c)o[c](e,a,n,l)}}},dl=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Cr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else yi.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},ul=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},go=class extends Ai{constructor(){super(...arguments),this.uniforms=new dl,this.code=new ul,this.constants=new j}get builder(){return this}},hl=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},ml=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&k(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((o,i)=>r.push(e==="vertex"?`out ${o} ${i};`:`in ${o} ${i};`)),r}},Er=class Sr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Sr.ALLOWLIST_VERTEX:Sr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};Er.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Er.ALLOWLIST_VERTEX=[];let Ci=class wi{constructor(){this._entries=new Map}add(e,r,o=0){const i=this._entries.get(o);i?k(i.name===e&&i.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];if(this._entries.size===0)return wi.DEFAULT_OUTPUT;const r=new Array;return this._entries.forEach((o,i)=>r.push(`layout(location = ${i}) out ${o.type} ${o.name};`)),r}};Ci.DEFAULT_OUTPUT=["layout(location = 0) out vec4 fragColor;"];class j{constructor(){this._entries=new Set}add(e,r,o){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=j._numberToFloatStr(o);break;case"int":i=j._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${j._numberToFloatStr(o[0])},                            ${j._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${j._numberToFloatStr(o[0])},                            ${j._numberToFloatStr(o[1])},                            ${j._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${j._numberToFloatStr(o[0])},                            ${j._numberToFloatStr(o[1])},                            ${j._numberToFloatStr(o[2])},                            ${j._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${j._numberToIntStr(o[0])},                             ${j._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${j._numberToIntStr(o[0])},                             ${j._numberToIntStr(o[1])},                             ${j._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${j._numberToIntStr(o[0])},                             ${j._numberToIntStr(o[1])},                             ${j._numberToIntStr(o[2])},                             ${j._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(o,a=>j._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const pl=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,fl=`precision highp float;
precision highp sampler2D;`,ur=4;function vl(){const t=new or,e=t.fragment;t.include(Si);const r=(ur+1)/2,o=1/(2*r*r);return e.include(Gr),e.uniforms.add(new Z("depthMap",i=>i.depthTexture),new vt("tex",i=>i.colorTexture),new cl("blurSize",i=>i.blurSize),new ee("projScale",(i,a)=>{const n=ma(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale}),new we("nearFar",(i,a)=>a.camera.nearFar)),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(ur)}; r <= ${s.int(ur)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const gl=Object.freeze(Object.defineProperty({__proto__:null,build:vl},Symbol.toStringTag,{value:"Module"}));let Oi=class Ri extends Fr{initializeProgram(e){return new Br(e.rctx,Ri.shader.get().build(),tr)}initializePipeline(){return Ir({colorWrite:Lr})}};Oi.shader=new rr(gl,()=>Et(()=>import("./SSAOBlur.glsl-c120b4e4.js"),["assets/SSAOBlur.glsl-c120b4e4.js","assets/index-d2e37ef9.js","assets/index-0e712e80.css","assets/OrderIndependentTransparency-e18a4b09.js","assets/enums-b14466b3.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-c9cc5f8e.js","assets/devEnvironmentUtils-4eab2a99.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-b4c48a1a.js","assets/vec32-29d8e2bd.js","assets/DefaultMaterial_COLOR_GAMMA-4afffca6.js","assets/quat-80b4cbf8.js","assets/quatf64-3363c48e.js","assets/resourceUtils-29c53688.js","assets/Indices-2c5d8aeb.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-2b64f044.js","assets/triangle-5d228c5f.js","assets/sphere-bc6b384d.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-754574f3.js","assets/Texture-e5406621.js","assets/InterleavedLayout-d6a33207.js","assets/types-1305598a.js","assets/orientedBoundingBox-976124d2.js","assets/plane-6ae34335.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-b6a8caf3.js"]));const xl="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Tl=class extends At{constructor(){super(...arguments),this.projScale=1}},_l=class extends Tl{constructor(){super(...arguments),this.intensity=1}},bl=class extends At{},El=class extends bl{constructor(){super(...arguments),this.blurSize=Mr()}};function Sl(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>yl(r))),t.fragment.uniforms.add(new we("zScale",(e,r)=>Mi(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function yl(t){const e=t.camera.projectionMatrix;return e[11]===0?ae(xo,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):ae(xo,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const xo=Or();function Mi(t){return t.camera.projectionMatrix[11]===0?Ke(To,0,1):Ke(To,1,0)}const To=Mr(),_o=16;function Al(){const t=new or,e=t.fragment;return t.include(Si),e.include(Gr),t.include(Sl),e.uniforms.add(new ee("radius",(r,o)=>zr(o.camera))),e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new we("nearFar",(r,o)=>o.camera.nearFar),new Z("normalMap",r=>r.normalTexture),new Z("depthMap",r=>r.depthTexture),new we("zScale",(r,o)=>Mi(o)),new ee("projScale",r=>r.projScale),new Z("rnm",r=>r.noiseTexture),new we("rnmScale",(r,o)=>Ke(bo,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new ee("intensity",r=>r.intensity),new we("screenSize",(r,o)=>Ke(bo,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(_o)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(_o)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function zr(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const bo=Mr(),Cl=Object.freeze(Object.defineProperty({__proto__:null,build:Al,getRadius:zr},Symbol.toStringTag,{value:"Module"}));let Ii=class Li extends Fr{initializeProgram(e){return new Br(e.rctx,Li.shader.get().build(),tr)}initializePipeline(){return Ir({colorWrite:Lr})}};Ii.shader=new rr(Cl,()=>Et(()=>import("./SSAO.glsl-84e71811.js"),["assets/SSAO.glsl-84e71811.js","assets/index-d2e37ef9.js","assets/index-0e712e80.css","assets/OrderIndependentTransparency-e18a4b09.js","assets/enums-b14466b3.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-c9cc5f8e.js","assets/devEnvironmentUtils-4eab2a99.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-b4c48a1a.js","assets/vec32-29d8e2bd.js","assets/DefaultMaterial_COLOR_GAMMA-4afffca6.js","assets/quat-80b4cbf8.js","assets/quatf64-3363c48e.js","assets/resourceUtils-29c53688.js","assets/Indices-2c5d8aeb.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-2b64f044.js","assets/triangle-5d228c5f.js","assets/sphere-bc6b384d.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-754574f3.js","assets/Texture-e5406621.js","assets/InterleavedLayout-d6a33207.js","assets/types-1305598a.js","assets/orientedBoundingBox-976124d2.js","assets/plane-6ae34335.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-b6a8caf3.js"]));var yr;(function(t){t[t.Antialiasing=0]="Antialiasing",t[t.HighQualityTransparency=1]="HighQualityTransparency",t[t.HighResolutionVoxel=2]="HighResolutionVoxel",t[t.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",t[t.SSAO=4]="SSAO",t[t.WaterReflection=5]="WaterReflection",t[t.HighResolutionShadows=6]="HighResolutionShadows",t[t.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(yr||(yr={}));const mt=2;let $t=class extends ll{constructor(e){super(e),this.renderSlots=[Ve.SSAO],this._context=null,this._passParameters=new _l,this._drawParameters=new El}produces(){return this._enableTime!=null&&this._context!=null}consumes(e){return this.produces()&&(e===E.Depth||e===E.Normal)}initializeRenderContext(e){this._context=e,this.addHandles([pa(()=>{var r;return this.view.qualitySettings.ambientOcclusion||((r=this._context)==null?void 0:r.isFeatureEnabled(yr.SSAO))},r=>r?this._enable():this._disable(),fa)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=zt(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var o;if(this._enableTime!=null||!this._context)return;const e=Uint8Array.from(atob(xl),i=>i.charCodeAt(0)),r=new xe;r.wrapMode=oe.CLAMP_TO_EDGE,r.pixelFormat=ue.RGB,r.wrapMode=oe.REPEAT,r.hasMipmap=!0,r.width=32,r.height=32,this._passParameters.noiseTexture=new Ye(this._context.renderContext.rctx,r,e),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ii)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(Oi)),this._enableTime=va(0),(o=this._context)==null||o.requestRender()}render(e,r,o,i){var O;const a=e.bindParameters,n=(O=a.linearDepth)==null?void 0:O.colorTexture;if(this._enableTime==null||this._context==null||n==null||!(o!=null&&o.normalTexture))return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=e.time);const l=e.rctx,c=a.camera,d=this.view.qualitySettings.fadeDuration,u=d>0?Math.min(d,e.time-this._enableTime)/d:1;this._passParameters.normalTexture=o.normalTexture,this._passParameters.depthTexture=n,this._passParameters.projScale=1/c.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*wl/zr(c)**6*u;const m=c.fullViewport[2],v=c.fullViewport[3],f=m/mt,x=v/mt,A=this._context.fbos,P=A.acquire(se.RED,m,v);l.bindFramebuffer(P.fbo),l.setViewport(0,0,m,v),l.bindTechnique(this._ssaoTechnique,this._passParameters,a).bindDraw(this._drawParameters,a,this._passParameters),l.screen.draw();const N=l.bindTechnique(this._blurTechnique,this._passParameters,a);l.setViewport(0,0,f,x);const B=A.acquire(se.RED,f,x);l.bindFramebuffer(B.fbo),this._drawParameters.colorTexture=P.colorTexture,Ke(this._drawParameters.blurSize,0,mt/v),N.bindDraw(this._drawParameters,a,this._passParameters),l.setViewport(0,0,f,x),l.screen.draw(),P.release();const w=A.acquire(se.RED,f,x);return l.bindFramebuffer(w.fbo),l.setViewport(0,0,m,v),l.setClearColor(1,1,1,0),l.clear(Xa.COLOR_BUFFER_BIT),l.setViewport(0,0,f,x),this._drawParameters.colorTexture=B.colorTexture,Ke(this._drawParameters.blurSize,mt/m,0),N.bindDraw(this._drawParameters,a,this._passParameters),l.screen.draw(),l.setViewport4fv(c.fullViewport),B.release(),u<1&&this._context.requestRender(),w}};p([H({constructOnly:!0})],$t.prototype,"view",void 0),p([H()],$t.prototype,"_context",void 0),$t=p([Ro("esri.views.3d.webgl-engine.lib.SSAO")],$t);const wl=.5;function Vr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Z("ssaoTex",(o,i)=>{var a;return(a=i.ssao)==null?void 0:a.colorTexture})),r.constants.add("blurSizePixelsInverse","float",1/mt),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ol(t,e){const r=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new J("lightingAmbientSH0",(i,a)=>z(Eo,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new te("lightingAmbientSH_R",(i,a)=>ae(Ee,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(i,a)=>ae(Ee,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(i,a)=>ae(Ee,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(r.uniforms.add(new J("lightingAmbientSH0",(i,a)=>z(Eo,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(i,a)=>ae(Ee,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(i,a)=>ae(Ee,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(i,a)=>ae(Ee,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(i,a)=>ae(Ee,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(i,a)=>ae(Ee,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(i,a)=>ae(Ee,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==R.Normal&&e.pbrMode!==R.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Eo=L(),Ee=Or();function Ur(t){t.uniforms.add(new J("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function ir(t){t.uniforms.add(new J("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function So(t){Ur(t.fragment),ir(t.fragment),t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Rl(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function $i(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Hr(t,e){const r=t.fragment.code;t.include($i),e.pbrMode!==R.Normal&&e.pbrMode!==R.Schematic&&e.pbrMode!==R.Terrain&&e.pbrMode!==R.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==R.Normal&&e.pbrMode!==R.Schematic||(t.include(Rl),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Ml=class extends K{constructor(e,r){super(e,"bool",I.Pass,(o,i,a)=>o.setUniform1b(e,r(i,a)))}};const Il=.4;function jr(t){t.constants.add("ambientBoostFactor","float",Il)}function Wr(t){t.uniforms.add(new ee("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Pi(t,e){const r=t.fragment;switch(t.include(Vr,e),e.pbrMode!==R.Disabled&&t.include(Hr,e),t.include(Ol,e),t.include($i),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===R.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),jr(r),Wr(r),Ur(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ir(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case R.Disabled:case R.WaterOnIntegratedMesh:case R.Water:t.include(So),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case R.Normal:case R.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Ml("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new ee("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new ee("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===R.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case R.Terrain:case R.TerrainWithWater:t.include(So),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:tt(e.pbrMode);case R.COUNT:}}function kt(t,e){e.multipassEnabled&&(t.fragment.include(Gr),t.fragment.uniforms.add(new Z("terrainDepthTexture",(r,o)=>{var i;return(i=o.multipassTerrain.linearDepth)==null?void 0:i.colorTexture})),t.fragment.uniforms.add(new we("nearFar",(r,o)=>o.camera.nearFar)),t.fragment.uniforms.add(new we("inverseViewport",(r,o)=>o.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Ll extends K{constructor(e,r,o){super(e,"mat4",I.Draw,(i,a,n,l)=>i.setUniformMatrix4fv(e,r(a,n,l)),o)}}let $l=class extends K{constructor(e,r,o){super(e,"mat4",I.Pass,(i,a,n)=>i.setUniformMatrix4fv(e,r(a,n)),o)}};function Ni(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new $l("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Fi(t))}function Di(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Ll("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Fi(t))}function Fi(t){const e=t.fragment;e.include(Ti),e.uniforms.add(new Z("shadowMapTex",(r,o)=>o.shadowMap.depthTexture),new fi("numCascades",(r,o)=>o.shadowMap.numCascades),new te("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}function Pl(t){t.vertex.uniforms.add(new Oe("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix!=null?e.colorTextureTransformMatrix:et())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Nl(t){t.vertex.uniforms.add(new Oe("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix!=null?e.normalTextureTransformMatrix:et())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Dl(t){t.vertex.uniforms.add(new Oe("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix!=null?e.emissiveTextureTransformMatrix:et())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Fl(t){t.vertex.uniforms.add(new Oe("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix!=null?e.occlusionTextureTransformMatrix:et())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Bl(t){t.vertex.uniforms.add(new Oe("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix!=null?e.metallicRoughnessTextureTransformMatrix:et())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Gl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function qt(t){t.include(Gl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(ye.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(ye.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(ye.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(ye.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(ye.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function zl(t){const e=new or,{vertex:r,fragment:o,varyings:i}=e;if(xt(r,t),e.include(Nr),i.add("vpos","vec3"),e.include(Tt,t),e.include(pi,t),e.include(xi,t),t.hasColorTextureTransform&&e.include(Pl),t.output===E.Color||t.output===E.Alpha){t.hasNormalTextureTransform&&e.include(Nl),t.hasEmissionTextureTransform&&e.include(Dl),t.hasOcclusionTextureTransform&&e.include(Fl),t.hasMetallicRoughnessTextureTransform&&e.include(Bl),bt(r,t),e.include(er,t),e.include(gt,t);const a=t.normalType===V.Attribute||t.normalType===V.Compressed;a&&t.offsetBackfaces&&e.include(ci),e.include(nl,t),e.include(ii,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),e.include(Je,t),e.include(li,t),e.include(vi,t),e.include(gi,t),r.uniforms.add(new te("externalColor",n=>n.externalColor)),i.add("vcolorExt","vec4"),t.multipassEnabled&&i.add("depth","float"),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Dr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(t.output){case E.Alpha:e.include(Ue,t),e.include(He,t),e.include(kt,t),o.uniforms.add(new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Z("tex",a=>a.texture)),o.include(qt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case E.Color:e.include(Ue,t),e.include(Pi,t),e.include(Vr,t),e.include(He,t),e.include(t.instancedDoublePrecision?Ni:Di,t),e.include(kt,t),bt(o,t),o.uniforms.add(r.uniforms.get("localOrigin"),new J("ambient",a=>a.ambient),new J("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Z("tex",a=>a.texture)),e.include(qo,t),e.include(Hr,t),o.include(qt),e.include(Wn,t),jr(o),Wr(o),ir(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===V.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===R.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===R.Normal||t.pbrMode===R.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Qe.Color?s`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return e.include(bi,t),e}const Vl=Object.freeze(Object.defineProperty({__proto__:null,build:zl},Symbol.toStringTag,{value:"Module"}));let Ul=class extends Rs{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=vr(ai),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ie.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=qe(0,0,0),this.instancedDoublePrecision=!1,this.normalType=V.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=qe(.2,.2,.2),this.diffuse=qe(.8,.8,.8),this.externalColor=Rr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=L(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=St.Less,this.textureAlphaMode=Y.Blend,this.textureAlphaCutoff=Ms,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Tr.Occlude,this.isDecoration=!1}};class Ct extends Fr{initializeConfiguration(e,r){r.spherical=e.viewingMode===Vt.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?Q.Default:Q.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Ct.shader)}_initializeProgram(e,r){return new Br(e.rctx,r.get().build(this.configuration),tr)}_convertDepthTestFunction(e){return e===St.Lequal?Le.LEQUAL:Le.LESS}_makePipeline(e,r){const o=this.configuration,i=e===Qe.NONE,a=e===Qe.FrontFace;return Ir({blending:o.output!==E.Color&&o.output!==E.Alpha||!o.transparent?null:i?Ka:Qa(e),culling:Hl(o)?en(o.cullFace):null,depthTest:{func:tn(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(i||a)&&o.writeDepth?rn:null,colorWrite:Lr,stencilWrite:o.hasOccludees?Is:null,stencilTest:o.hasOccludees?r?$s:Ls:null,polygonOffset:i||a?null:on(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function Hl(t){return t.cullFace!==Ie.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Ct.shader=new rr(Vl,()=>Et(()=>import("./DefaultMaterial.glsl-4ed943bb.js"),["assets/DefaultMaterial.glsl-4ed943bb.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/index-d2e37ef9.js","assets/index-0e712e80.css","assets/OrderIndependentTransparency-e18a4b09.js","assets/enums-b14466b3.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-c9cc5f8e.js","assets/orientedBoundingBox-976124d2.js","assets/quat-80b4cbf8.js","assets/quatf64-3363c48e.js","assets/plane-6ae34335.js","assets/sphere-bc6b384d.js","assets/ByteSizeUnit-d4757d40.js","assets/devEnvironmentUtils-4eab2a99.js","assets/BufferView-b4c48a1a.js","assets/vec32-29d8e2bd.js","assets/DefaultMaterial_COLOR_GAMMA-4afffca6.js","assets/resourceUtils-29c53688.js","assets/Indices-2c5d8aeb.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-2b64f044.js","assets/triangle-5d228c5f.js","assets/lineSegment-754574f3.js","assets/Texture-e5406621.js","assets/InterleavedLayout-d6a33207.js","assets/types-1305598a.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-b6a8caf3.js"]));let Gt=class extends br{};p([g({constValue:!0})],Gt.prototype,"hasSliceHighlight",void 0),p([g({constValue:!1})],Gt.prototype,"hasSliceInVertexProgram",void 0),p([g({constValue:I.Pass})],Gt.prototype,"pbrTextureBindType",void 0);class b extends Gt{constructor(){super(...arguments),this.output=E.Color,this.alphaDiscardMode=Y.Opaque,this.doubleSidedMode=re.None,this.pbrMode=R.Disabled,this.cullFace=Ie.None,this.transparencyPassType=Qe.NONE,this.normalType=V.Attribute,this.textureCoordinateType=Q.None,this.customDepthTest=St.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}p([g({count:E.COUNT})],b.prototype,"output",void 0),p([g({count:Y.COUNT})],b.prototype,"alphaDiscardMode",void 0),p([g({count:re.COUNT})],b.prototype,"doubleSidedMode",void 0),p([g({count:R.COUNT})],b.prototype,"pbrMode",void 0),p([g({count:Ie.COUNT})],b.prototype,"cullFace",void 0),p([g({count:Qe.COUNT})],b.prototype,"transparencyPassType",void 0),p([g({count:V.COUNT})],b.prototype,"normalType",void 0),p([g({count:Q.COUNT})],b.prototype,"textureCoordinateType",void 0),p([g({count:St.COUNT})],b.prototype,"customDepthTest",void 0),p([g()],b.prototype,"spherical",void 0),p([g()],b.prototype,"hasVertexColors",void 0),p([g()],b.prototype,"hasSymbolColors",void 0),p([g()],b.prototype,"hasVerticalOffset",void 0),p([g()],b.prototype,"hasSlicePlane",void 0),p([g()],b.prototype,"hasSliceHighlight",void 0),p([g()],b.prototype,"hasColorTexture",void 0),p([g()],b.prototype,"hasMetallicRoughnessTexture",void 0),p([g()],b.prototype,"hasEmissionTexture",void 0),p([g()],b.prototype,"hasOcclusionTexture",void 0),p([g()],b.prototype,"hasNormalTexture",void 0),p([g()],b.prototype,"hasScreenSizePerspective",void 0),p([g()],b.prototype,"hasVertexTangents",void 0),p([g()],b.prototype,"hasOccludees",void 0),p([g()],b.prototype,"multipassEnabled",void 0),p([g()],b.prototype,"hasModelTransformation",void 0),p([g()],b.prototype,"offsetBackfaces",void 0),p([g()],b.prototype,"vvSize",void 0),p([g()],b.prototype,"vvColor",void 0),p([g()],b.prototype,"receiveShadows",void 0),p([g()],b.prototype,"receiveAmbientOcclusion",void 0),p([g()],b.prototype,"textureAlphaPremultiplied",void 0),p([g()],b.prototype,"instanced",void 0),p([g()],b.prototype,"instancedColor",void 0),p([g()],b.prototype,"objectAndLayerIdColorInstanced",void 0),p([g()],b.prototype,"instancedDoublePrecision",void 0),p([g()],b.prototype,"doublePrecisionRequiresObfuscation",void 0),p([g()],b.prototype,"writeDepth",void 0),p([g()],b.prototype,"transparent",void 0),p([g()],b.prototype,"enableOffset",void 0),p([g()],b.prototype,"cullAboveGround",void 0),p([g()],b.prototype,"snowCover",void 0),p([g()],b.prototype,"hasColorTextureTransform",void 0),p([g()],b.prototype,"hasEmissionTextureTransform",void 0),p([g()],b.prototype,"hasNormalTextureTransform",void 0),p([g()],b.prototype,"hasOcclusionTextureTransform",void 0),p([g()],b.prototype,"hasMetallicRoughnessTextureTransform",void 0),p([g({constValue:!0})],b.prototype,"hasVvInstancing",void 0),p([g({constValue:!1})],b.prototype,"useCustomDTRExponentForWater",void 0),p([g({constValue:!1})],b.prototype,"supportsTextureAtlas",void 0),p([g({constValue:!0})],b.prototype,"useFillLights",void 0);function jl(t){const e=new or,{vertex:r,fragment:o,varyings:i}=e;return xt(r,t),e.include(Nr),i.add("vpos","vec3"),e.include(Tt,t),e.include(pi,t),e.include(xi,t),t.output!==E.Color&&t.output!==E.Alpha||(bt(e.vertex,t),e.include(er,t),e.include(gt,t),t.offsetBackfaces&&e.include(ci),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.multipassEnabled&&i.add("depth","float"),e.include(Je,t),e.include(li,t),e.include(vi,t),e.include(gi,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),i.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Dr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===E.Alpha&&(e.include(Ue,t),e.include(He,t),e.include(kt,t),o.uniforms.add(new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Z("tex",a=>a.texture)),o.include(qt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),t.output===E.Color&&(e.include(Ue,t),e.include(Pi,t),e.include(Vr,t),e.include(He,t),e.include(t.instancedDoublePrecision?Ni:Di,t),e.include(kt,t),bt(e.fragment,t),Ur(o),jr(o),Wr(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new J("ambient",a=>a.ambient),new J("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Z("tex",a=>a.texture)),e.include(qo,t),e.include(Hr,t),o.include(qt),ir(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===R.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===R.Normal||t.pbrMode===R.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===R.Normal||t.pbrMode===R.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Qe.Color?s`fragColor = premultiplyAlpha(fragColor);`:s``}
      }
    `)),e.include(bi,t),e}const Wl=Object.freeze(Object.defineProperty({__proto__:null,build:jl},Symbol.toStringTag,{value:"Module"}));class ar extends Ct{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=V.Attribute,r.doubleSidedMode=re.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ar.shader)}}ar.shader=new rr(Wl,()=>Et(()=>import("./RealisticTree.glsl-2ee82c87.js"),["assets/RealisticTree.glsl-2ee82c87.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/index-d2e37ef9.js","assets/index-0e712e80.css","assets/OrderIndependentTransparency-e18a4b09.js","assets/enums-b14466b3.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-c9cc5f8e.js","assets/orientedBoundingBox-976124d2.js","assets/quat-80b4cbf8.js","assets/quatf64-3363c48e.js","assets/plane-6ae34335.js","assets/sphere-bc6b384d.js","assets/ByteSizeUnit-d4757d40.js","assets/devEnvironmentUtils-4eab2a99.js","assets/BufferView-b4c48a1a.js","assets/vec32-29d8e2bd.js","assets/DefaultMaterial_COLOR_GAMMA-4afffca6.js","assets/resourceUtils-29c53688.js","assets/Indices-2c5d8aeb.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-2b64f044.js","assets/triangle-5d228c5f.js","assets/lineSegment-754574f3.js","assets/Texture-e5406621.js","assets/InterleavedLayout-d6a33207.js","assets/types-1305598a.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-b6a8caf3.js"]));let Xt=class extends us{constructor(e){super(e,Xl),this.supportsEdges=!0,this._configuration=new b,this._vertexBufferLayout=Yl(this.parameters)}isVisibleForOutput(e){return e!==E.Shadow&&e!==E.ShadowExcludeHighlight&&e!==E.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:r,hasVertexColors:o,hasSymbolColors:i,vvColor:a}=e,n=e.colorMixMode==="replace",l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0,d=r||a||i;return o&&d?n||l:o?n?c:l:d?n||l:n?c:l}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ie.None:this.parameters.cullFace,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e!==E.Color&&e!==E.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=re.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?re.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=r.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?R.Schematic:R.Normal:R.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<an,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,o,i,a,n){if(this.parameters.verticalOffset!=null){const l=o.camera;z(mr,r[12],r[13],r[14]);let c=null;switch(o.viewingMode){case Vt.Global:c=wr(yo,mr);break;case Vt.Local:c=ga(yo,Kl)}let d=0;const u=Xe(Ql,mr,l.eye),m=de(u),v=ve(u,u,1/m);let f=null;this.parameters.screenSizePerspective&&(f=xa(c,v)),d+=ns(l,m,this.parameters.verticalOffset,f??0,this.parameters.screenSizePerspective),ve(c,c,d),Ta(hr,c,o.transform.inverseRotation),i=Xe(Jl,i,hr),a=Xe(Zl,a,hr)}es(e,o,i,a,ps(o.verticalOffset),n)}produces(e,r){return r===E.Color||r===E.Alpha||r===E.Depth||r===E.Normal||r===E.Shadow||r===E.ShadowHighlight||r===E.ShadowExcludeHighlight||r===E.Highlight||r===E.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?Ve.TRANSPARENT_MATERIAL:Ve.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ve.OPAQUE_MATERIAL)||e===Ve.DRAPED_MATERIAL:!1}createGLMaterial(e){return new kl(e)}createBufferWriter(){return new ws(this._vertexBufferLayout)}},kl=class extends Xn{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==E.Color&&this._output!==E.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const o=e.camera.viewInverseTransposeMatrix;return z(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?ar:Ct,e)}},ql=class extends Ul{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Xl=new ql;function Yl(t){const e=Za().vec3f(h.POSITION);return t.normalType===V.Compressed?e.vec2i16(h.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(h.NORMAL),t.hasVertexTangents&&e.vec4f(h.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(h.UV0),t.hasVertexColors&&e.vec4u8(h.COLOR),t.hasSymbolColors&&e.vec4u8(h.SYMBOLCOLOR),_a("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}const Jl=L(),Zl=L(),Kl=qe(0,0,1),yo=L(),hr=L(),mr=L(),Ql=L(),Se=Ar.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ec(t,e){const r=await tc(t,e),o=await nc(r.textureDefinitions??{},e);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const n=o[a];i+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:i+za(r)}}async function tc(t,e){const r=e!=null&&e.streamDataRequester;if(r)return rc(t,r,e);const o=await Io(ba(t,e));if(o.ok===!0)return o.value.data;Lo(o.error),Bi(o.error)}async function rc(t,e,r){const o=await Io(e.request(t,"json",r));if(o.ok===!0)return o.value;Lo(o.error),Bi(o.error.details.url)}function Bi(t){throw new Cr("",`Request for object resource failed: ${t}`)}function oc(t){const e=t.params,r=e.topology;let o=!0;switch(e.vertexAttributes||(Se.warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Se.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),o=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Se.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),o=!1)):(Se.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Se.warn("Indexed geometries must specify faces"),o=!1;break}default:Se.warn(`Unsupported topology '${r}'`),o=!1}t.params.material||(Se.warn("Geometry requires material"),o=!1);const i=t.params.vertexAttributes;for(const a in i)i[a].values||(Se.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function ic(t,e){var x;const r=new Array,o=new Array,i=new Array,a=new Va,n=t.resource,l=$o.parse(n.version||"1.0","wosr");lc.validate(l);const c=n.model.name,d=n.model.geometries,u=n.materialDefinitions??{},m=t.textures;let v=0;const f=new Map;for(let A=0;A<d.length;A++){const P=d[A];if(!oc(P))continue;const N=sc(P),B=P.params.vertexAttributes,w=[];for(const _ in B){const D=B[_],G=D.values;w.push([_,new We(G,D.valuesPerElement,!0)])}const O=[];if(P.params.topology!=="PerAttributeArray"){const _=P.params.faces;for(const D in _)O.push([D,_[D].values])}const $=N.texture,T=m&&m[$];if(T&&!f.has($)){const{image:_,parameters:D}=T,G=new jo(_,D);o.push(G),f.set($,G)}const C=f.get($),M=C?C.id:void 0,S=N.material;let y=a.get(S,$);if(y==null){const _=u[S.substring(S.lastIndexOf("/")+1)].params;_.transparency===1&&(_.transparency=0);const D=T&&T.alphaChannelUsage,G=_.transparency>0||D==="transparency"||D==="maskAndTransparency",W=T?Gi(T.alphaChannelUsage):void 0,q={ambient:vr(_.diffuse),diffuse:vr(_.diffuse),opacity:1-(_.transparency||0),transparent:G,textureAlphaMode:W,textureAlphaCutoff:.33,textureId:M,initTextureTransparent:!0,doubleSided:!0,cullFace:Ie.None,colorMixMode:_.externalColorMixMode||"tint",textureAlphaPremultiplied:(T==null?void 0:T.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParamsMixin&&Object.assign(q,e.materialParamsMixin),y=new Xt(q),a.set(S,$,y)}i.push(y);const F=new Fo(y,w,O);v+=((x=O.find(_=>_[0]===h.POSITION))==null?void 0:x[1].length)??0,r.push(F)}return{engineResources:[{name:c,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:ac(r)}}function ac(t){const e=Po();return t.forEach(r=>{const o=r.boundingInfo;o!=null&&(Ut(e,o.bbMin),Ut(e,o.bbMax))}),e}async function nc(t,e){const r=new Array;for(const a in t){const n=t[a],l=n.images[0].data;if(!l){Se.warn("Externally referenced texture data is not yet supported");continue}const c=n.encoding+";base64,"+l,d="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:oe.REPEAT,t:oe.REPEAT},preMultiplyAlpha:Gi(u)!==Y.Opaque},v=e!=null&&e.disableTextures?Promise.resolve(null):No(c,e);r.push(v.then(f=>({refId:d,image:f,parameters:m,alphaChannelUsage:u})))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}function Gi(t){switch(t){case"mask":return Y.Mask;case"maskAndTransparency":return Y.MaskBlend;case"none":return Y.Opaque;default:return Y.Blend}}function sc(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const lc=new $o(1,2,"wosr");async function cc(t,e){var m;const r=zi(Ui(t));if(r.fileType==="wosr"){const v=await(e.cache?e.cache.loadWOSR(r.url,e):ec(r.url,e)),{engineResources:f,referenceBoundingBox:x}=ic(v,e);return{lods:f,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):$a(new Pa(e.streamDataRequester),r.url,e,e.usePBR)),i=(m=o.model.meta)==null?void 0:m.ESRI_proxyEllipsoid,a=o.meta.isEsriSymbolResource&&i!=null&&o.meta.uri.includes("/RealisticTrees/");a&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,mc(o,i));const n=!!e.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[...Ds]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[...ai]},c={...e.materialParamsMixin,treeRendering:a},{engineResources:d,referenceBoundingBox:u}=Vi(o,l,c,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:u,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function zi(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Vi(t,e,r,o){const i=t.model,a=new Array,n=new Map,l=new Map,c=i.lods.length,d=Po();return i.lods.forEach((u,m)=>{const v=o.skipHighLods===!0&&(c>1&&m===0||c>3&&m===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&m!==o.singleLodIndex;if(v&&m!==0)return;const f=new _n(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(x=>{const A=v?new Xt({}):dc(i,x,f,e,r,n,l),{geometry:P,vertexCount:N}=uc(x,A??new Xt({})),B=P.boundingInfo;B!=null&&m===0&&(Ut(d,B.bbMin),Ut(d,B.bbMax)),A!=null&&(f.stageResources.geometries.push(P),f.numberOfVertices+=N)}),v||a.push(f)}),{engineResources:a,referenceBoundingBox:d}}function dc(t,e,r,o,i,a,n){const l=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),c=t.materials.get(e.material),d=e.attributes.texCoord0!=null,u=e.attributes.normal!=null;if(c==null)return null;const m=hc(c.alphaMode);if(!a.has(l)){if(d){const $=(T,C=!1)=>{if(T!=null&&!n.has(T)){const M=t.textures.get(T);if(M!=null){const S=M.data;n.set(T,new jo(sr(S)?S.data:S,{...M.parameters,preMultiplyAlpha:!sr(S)&&C,encoding:sr(S)&&S.encoding!=null?S.encoding:void 0}))}}};$(c.textureColor,m!==Y.Opaque),$(c.textureNormal),$(c.textureOcclusion),$(c.textureEmissive),$(c.textureMetallicRoughness)}const f=c.color[0]**(1/je),x=c.color[1]**(1/je),A=c.color[2]**(1/je),P=c.emissiveFactor[0]**(1/je),N=c.emissiveFactor[1]**(1/je),B=c.emissiveFactor[2]**(1/je),w=c.textureColor!=null&&d?n.get(c.textureColor):null,O=Ps({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion});a.set(l,new Xt({...o,transparent:m===Y.Blend,customDepthTest:St.Lequal,textureAlphaMode:m,textureAlphaCutoff:c.alphaCutoff,diffuse:[f,x,A],ambient:[f,x,A],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?Ie.None:Ie.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:u?V.Attribute:V.ScreenDerivative,castShadows:!0,textureId:w!=null?w.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:c.textureNormal!=null&&d?n.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:w!=null&&!!w.parameters.preMultiplyAlpha,occlusionTextureId:c.textureOcclusion!=null&&d?n.get(c.textureOcclusion).id:void 0,emissiveTextureId:c.textureEmissive!=null&&d?n.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:c.textureMetallicRoughness!=null&&d?n.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[P,N,B],mrrFactors:O?[...Ns]:[c.metallicFactor,c.roughnessFactor,o.mrrFactors[2]],isSchematic:O,colorTextureTransformMatrix:nt(c.colorTextureTransform),normalTextureTransformMatrix:nt(c.normalTextureTransform),occlusionTextureTransformMatrix:nt(c.occlusionTextureTransform),emissiveTextureTransformMatrix:nt(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:nt(c.metallicRoughnessTextureTransform),...i}))}const v=a.get(l);if(r.stageResources.materials.push(v),d){const f=x=>{x!=null&&r.stageResources.textures.push(n.get(x))};f(c.textureColor),f(c.textureNormal),f(c.textureOcclusion),f(c.textureEmissive),f(c.textureMetallicRoughness)}return v}function uc(t,e){const r=t.attributes.position.count,o=Na(t.indices||r,t.primitiveType),i=Ot(3*r),{typedBuffer:a,typedBufferStride:n}=t.attributes.position;Ia(i,a,t.transform,3,n);const l=[[h.POSITION,new We(i,3,!0)]],c=[[h.POSITION,o]];if(t.attributes.normal!=null){const d=Ot(3*r),{typedBuffer:u,typedBufferStride:m}=t.attributes.normal;fr(Pt,t.transform),La(d,u,Pt,3,m),l.push([h.NORMAL,new We(d,3,!0)]),c.push([h.NORMAL,o])}if(t.attributes.tangent!=null){const d=Ot(4*r),{typedBuffer:u,typedBufferStride:m}=t.attributes.tangent;fr(Pt,t.transform),Da(d,u,Pt,4,m),l.push([h.TANGENT,new We(d,4,!0)]),c.push([h.TANGENT,o])}if(t.attributes.texCoord0!=null){const d=Ot(2*r),{typedBuffer:u,typedBufferStride:m}=t.attributes.texCoord0;Fa(d,u,2,m),l.push([h.UV0,new We(d,2,!0)]),c.push([h.UV0,o])}if(t.attributes.color!=null){const d=new Uint8Array(4*r);t.attributes.color.elementCount===4?t.attributes.color instanceof gr?eo(d,t.attributes.color,255):t.attributes.color instanceof Kt?Ba(d,t.attributes.color):t.attributes.color instanceof Oa&&eo(d,t.attributes.color,1/256):(d.fill(255),t.attributes.color instanceof jt?Qr(d,t.attributes.color,255,4):t.attributes.color instanceof Ra?Ga(d,t.attributes.color.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof Ma&&Qr(d,t.attributes.color,1/256,4)),l.push([h.COLOR,new We(d,4,!0)]),c.push([h.COLOR,o])}return{geometry:new Fo(e,l,c),vertexCount:r}}const Pt=Jt();function hc(t){switch(t){case"BLEND":return Y.Blend;case"MASK":return Y.Mask;case"OPAQUE":case null:case void 0:return Y.Opaque}}function mc(t,e){for(let r=0;r<t.model.lods.length;++r){const o=t.model.lods[r];for(const i of o.parts){const a=i.attributes.normal;if(a==null)return;const n=i.attributes.position,l=n.count,c=L(),d=L(),u=L(),m=new Uint8Array(4*l),v=new Float64Array(3*l),f=Ea(Zt(),i.transform);let x=0,A=0;for(let P=0;P<l;P++){n.getVec(P,d),a.getVec(P,c),Re(d,d,i.transform),Xe(u,d,e.center),Kr(u,u,e.radius);const N=u[2],B=de(u),w=Math.min(.45+.55*B*B,1);Kr(u,u,e.radius),f!==null&&Re(u,u,f),wr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&Sa(u,u,c,N>-1?.2:Math.min(-4*N-3.8,1)),v[x]=u[0],v[x+1]=u[1],v[x+2]=u[2],x+=3,m[A]=255*w,m[A+1]=255*w,m[A+2]=255*w,m[A+3]=255,A+=4}i.attributes.normal=new jt(v),i.attributes.color=new Kt(m)}}}const zd=Object.freeze(Object.defineProperty({__proto__:null,fetch:cc,gltfToEngineResources:Vi,parseUrl:zi},Symbol.toStringTag,{value:"Module"}));export{zl as H,jl as I,Al as d,zr as m,zd as o,vl as u};