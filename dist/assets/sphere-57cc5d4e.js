import{ij as C,ik as F,il as H,im as J,cM as x,aA as g,cN as T,cO as m,cq as j,cR as w,cQ as p,f8 as f,ih as v,io as U,cp as Q,cf as A,hn as N,o as W,ce as tt,hG as Y,cr as E,ip as et,iq as it,cP as st,ir as $,ct as nt,is as V,eL as O,gM as rt,gL as ot,f9 as ct}from"./index-7df220b7.js";import{E as ut}from"./ByteSizeUnit-d4757d40.js";import{n as at}from"./mat3f64-221ce671.js";import{n as ft}from"./mat4f64-1413b4a7.js";import{n as ht}from"./quatf64-3363c48e.js";class mt{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&C(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,R));e++)this._items.push(this._allocator())}}const R=1024;let l=class a{constructor(e,i,s){this._itemByteSize=e,this._itemCreate=i,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){this._itemsPtr===0&&C(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const i=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this._itemCreate(i,s*this._itemByteSize));this._buffers.push(i)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=_){return new a(16,F,e)}static createVec3f64(e=_){return new a(24,H,e)}static createVec4f64(e=_){return new a(32,J,e)}static createMat3f64(e=_){return new a(72,at,e)}static createMat4f64(e=_){return new a(128,ft,e)}static createQuatf64(e=_){return new a(32,ht,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const _=4*ut.KILOBYTES;l.createVec2f64();const h=l.createVec3f64();l.createVec4f64();l.createMat3f64();const _t=l.createMat4f64();l.createQuatf64();function Z(t){return t?L(x(t.origin),x(t.direction)):L(g(),g())}function L(t,e){return{origin:t,direction:e}}function Gt(t,e){const i=pt.get();return i.origin=t,i.direction=e,i}function gt(t,e,i=Z()){return T(i.origin,t),m(i.direction,e,t),i}function lt(t,e,i){const s=j(t.direction,m(i,e,t.origin));return w(i,t.origin,p(i,t.direction,s)),i}const pt=new mt(()=>Z());function Pt(t,e){const i=j(t,e)/(f(t)*f(e));return-v(i)}const Mt=P();function P(){return U()}const $t=Q,dt=Q;function k(t,e=P()){return A(e,t)}function wt(t,e){return N(t[0],t[1],t[2],e)}function yt(t){return t}function Bt(t){t[0]=t[1]=t[2]=t[3]=0}function St(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function y(t){return t[3]}function bt(t){return t}function At(t,e,i,s){return N(t,e,i,s)}function zt(t,e,i){return t!==i&&T(i,t),i[3]=t[3]+e,i}function qt(t,e,i){return W.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===i?i:k(t,i)}function B(t,e,i){if(e==null||!G(t,e,d))return!1;let{t0:s,t1:n}=d;if((s<0||n<s&&n>0)&&(s=n),s<0)return!1;if(i){const{origin:r,direction:o}=e;i[0]=r[0]+o[0]*s,i[1]=r[1]+o[1]*s,i[2]=r[2]+o[2]*s}return!0}function xt(t,e,i){const s=gt(e,i);if(!G(t,s,d))return[];const{origin:n,direction:r}=s,{t0:o,t1:c}=d,u=M=>{const S=g();return ct(S,n,r,M),q(t,S,S)};return Math.abs(o-c)<tt()?[u(o)]:[u(o),u(c)]}const d={t0:0,t1:0};function G(t,e,i){const{origin:s,direction:n}=e,r=Et;r[0]=s[0]-t[0],r[1]=s[1]-t[1],r[2]=s[2]-t[2];const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(o===0)return!1;const c=2*(n[0]*r[0]+n[1]*r[1]+n[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const M=Math.sqrt(u);return i.t0=(-c-M)/(2*o),i.t1=(-c+M)/(2*o),!0}const Et=g();function Vt(t,e){return B(t,e,null)}function Ot(t,e,i){if(B(t,e,i))return i;const s=I(t,e,h.get());return w(i,e.origin,p(h.get(),e.direction,Y(e.origin,s)/f(e.direction))),i}function I(t,e,i){const s=h.get(),n=_t.get();E(s,e.origin,e.direction);const r=y(t);E(i,s,e.origin),p(i,i,1/f(i)*r);const o=K(t,e.origin),c=Pt(e.origin,i);return et(n,c+o,s),it(i,i,n),i}function Rt(t,e,i){return B(t,e,i)?i:(lt(e,t,i),q(t,i,i))}function q(t,e,i){const s=m(h.get(),e,t),n=p(h.get(),s,t[3]/f(s));return w(i,n,t)}function Lt(t,e){const i=m(h.get(),e,t),s=st(i),n=t[3]*t[3];return Math.sqrt(Math.abs(s-n))}function K(t,e){const i=m(h.get(),e,t),s=f(i),n=y(t),r=n+Math.abs(n-s);return v(n/r)}const b=g();function X(t,e,i,s){const n=m(b,e,t);switch(i){case $.X:{const r=V(n,b)[2];return O(s,-Math.sin(r),Math.cos(r),0)}case $.Y:{const r=V(n,b),o=r[1],c=r[2],u=Math.sin(o);return O(s,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case $.Z:return nt(s,n);default:return}}function D(t,e){const i=m(z,e,t);return f(i)-t[3]}function Ct(t,e,i,s){const n=D(t,e),r=X(t,e,$.Z,z),o=p(z,r,i-n);return w(s,e,o)}function Tt(t,e){const i=rt(t,e),s=y(t);return i<=s*s}function jt(t,e,i=P()){const s=Y(t,e),n=t[3],r=e[3];return s+r<n?(A(i,t),i):s+n<r?(A(i,e),i):(ot(i,t,e,(s+r-n)/(2*s)),i[3]=(s+n+r)/2,i)}const z=g(),vt=P();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:Mt,altitudeAt:D,angleToSilhouette:K,axisAt:X,clear:Bt,closestPoint:Rt,closestPointOnSilhouette:I,containsPoint:Tt,copy:k,create:P,distanceToSilhouette:Lt,elevate:zt,equals:dt,exactEquals:$t,fromCenterAndRadius:wt,fromRadius:St,fromValues:At,getCenter:bt,getRadius:y,intersectLine:xt,intersectRay:B,intersectRayClosestSilhouette:Ot,intersectsRay:Vt,projectPoint:q,setAltitudeAt:Ct,setExtent:qt,tmpSphere:vt,union:jt,wrap:yt},Symbol.toStringTag,{value:"Module"}));export{y as B,P as E,Vt as J,k as T,bt as U,h as c,Z as d,Tt as i,Gt as p,mt as s};