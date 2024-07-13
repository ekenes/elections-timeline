import{h as z,dj as H,U as F,de as P,gS as C,gT as D,gU as E,cV as G,gV as R,dT as I,x as a,y as u,bR as X,aV as J,gW as K,aW as L,dd as h,gX as Q,cT as Y,fy as Z,z as _}from"./index-5bdaa4d1.js";import{c as tt,u as rt,i as st}from"./infoFor3D-24efd44a.js";import{e as N}from"./mat4f64-9a8384aa.js";import{v as S,I as y,x as et}from"./quat-e7437b61.js";import{e as g}from"./quatf64-81e039e4.js";class O{constructor(r,s,e){this.assetName=r,this.assetMimeType=s,this.parts=e}equals(r){return this===r||this.assetName===r.assetName&&this.assetMimeType===r.assetMimeType&&z(this.parts,r.parts,(s,e)=>s.equals(e))}isOnService(r){return this.parts.every(s=>s.isOnService(r))}makeHash(){let r="";for(const s of this.parts)r+=s.partHash;return r}async toBlob(r){const{parts:s}=this;if(s.length===1)return s[0].toBlob(r);const e=await Promise.all(s.map(c=>c.toBlob(r)));return H(r),new Blob(e)}}class pt{constructor(r,s){this.partUrl=r,this.partHash=s}equals(r){return this===r||this.partUrl===r.partUrl&&this.partHash===r.partHash}isOnService(r){return this.partUrl.startsWith(`${r.path}/assets/`)}async toBlob(r){const{data:s}=await F(this.partUrl,{responseType:"blob"});return H(r),s}}function ft(t){return nt(t==null?void 0:t.source)}function v(t){return Array.isArray(t)?t.every(r=>r instanceof O):!1}const x=/^(model\/gltf\+json)|(model\/gltf-binary)$/,d=/\.(gltf|glb)/i;function nt(t){return t?Array.isArray(t)?t.some(M):M(t):!1}function M(t){if(t instanceof File){const{type:r,name:s}=t;return x.test(r)||d.test(s)}return x.test(t.assetMimeType)||d.test(t.assetName)}function yt(t,r){if(!t)return!1;const{source:s}=t;return at(s,r)}function mt(t,r){if(t===r)return!0;const{source:s}=t,{source:e}=r;if(s===e)return!0;if(v(s)&&v(e)){if(s.length!==e.length)return!1;const c=(i,b)=>i.assetName<b.assetName?-1:i.assetName>b.assetName?1:0,A=[...s].sort(c),k=[...e].sort(c);for(let i=0;i<A.length;++i)if(!A[i].equals(k[i]))return!1;return!0}return!1}function at(t,r){if(Array.isArray(t)){const s=t;return s.length>0&&s.every(e=>T(e,r))}return T(t,r)}function T(t,r){return t instanceof O&&t.isOnService(r)}function $t(t,r){return t instanceof File?tt(t,r):rt(t.assetMimeType,r)??st(t.assetName,r)}function gt(t){return Array.isArray(t)?t:[t]}function At(t){return!!t.original}function o(t=W){return[t[0],t[1],t[2],t[3]]}function f(t,r,s=o()){return P(s,t),s[3]=r,s}function bt(t,r=o()){const s=R(l,t);return V(r,I(S(r,s))),r}function w(t,r,s=o()){return y(l,t,m(t)),y(U,r,m(r)),et(l,U,l),V(s,I(S(s,l)))}function Nt(t,r,s,e=o()){return f(C,t,p),f(D,r,j),f(E,s,B),w(p,j,p),w(p,B,e),e}function vt(t){return t}function ot(t){return t[3]}function m(t){return G(t[3])}function V(t,r){return t[3]=r,t}const W=[0,0,1,0],l=g(),U=g();o();const p=o(),j=o(),B=o();var $;let n=$=class extends X{constructor(t){super(t),this.translation=J(),this.rotationAxis=K(W),this.rotationAngle=0,this.scale=L(1,1,1)}get rotation(){return f(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=h(t),this.rotationAngle=ot(t)}get localMatrix(){const t=N();return y(q,this.rotation,m(this.rotation)),Q(t,q,this.translation,this.scale),t}get localMatrixInverse(){return Y(N(),this.localMatrix)}equals(t){return this===t||t!=null&&Z(this.localMatrix,t.localMatrix)}clone(){const t={translation:h(this.translation),rotationAxis:h(this.rotationAxis),rotationAngle:this.rotationAngle,scale:h(this.scale)};return new $(t)}};a([u({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"translation",void 0),a([u({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAxis",void 0),a([u({type:Number,nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAngle",void 0),a([u({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"scale",void 0),a([u()],n.prototype,"rotation",null),a([u()],n.prototype,"localMatrix",null),a([u()],n.prototype,"localMatrixInverse",null),n=$=a([_("esri.geometry.support.MeshTransform")],n);const q=g(),xt=n;export{gt as A,xt as N,$t as a,o as b,m as c,vt as d,yt as h,O as i,bt as k,pt as o,ft as u,At as v,Nt as w,mt as y};