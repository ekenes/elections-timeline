import{y as l,u as o,i as a,c,l as p,p as _,o as y,m as F,T as m,h as g,a as w,b,d as v,A as E,O as x,x as A,g as $,w as H,E as I,L as T,B as M,F as O,I as k,U as D,j as z,V as B,M as G,S as V,k as j,q as C,v as q,z as J,C as K,D as N,G as S,H as P}from"./BufferView-ca9895dd.js";import{e as f}from"./types-1305598a.js";import{s as Q}from"./Util-dd4663f8.js";class h{constructor(t,e){this.layout=t,this.buffer=typeof e=="number"?new ArrayBuffer(e*t.stride):e;for(const i of t.fields.keys()){const s=t.fields.get(i);this[i]=new s.constructor(this.buffer,s.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const i=this[t];return i&&i.elementCount===e.ElementCount&&i.elementType===e.ElementType?i:null}slice(t,e){return new h(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e=0,i=0,s=t.count){const r=this.stride;if(r%4==0){const d=new Uint32Array(t.buffer,e*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(d)}else{const d=new Uint8Array(t.buffer,e*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(d)}return this}get cachedMemory(){return this.byteLength}dispose(){}}class u{constructor(t){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach(e=>this._fields.set(e[0],{...e[1],constructor:W(e[1].constructor)})))}freeze(){return this}vec2f(t,e){return this._appendField(t,o,e),this}vec2f64(t,e){return this._appendField(t,F,e),this}vec3f(t,e){return this._appendField(t,a,e),this}vec3f64(t,e){return this._appendField(t,m,e),this}vec4f(t,e){return this._appendField(t,c,e),this}vec4f64(t,e){return this._appendField(t,g,e),this}mat3f(t,e){return this._appendField(t,p,e),this}mat3f64(t,e){return this._appendField(t,w,e),this}mat4f(t,e){return this._appendField(t,_,e),this}mat4f64(t,e){return this._appendField(t,b,e),this}vec4u8(t,e){return this._appendField(t,A,e),this}f32(t,e){return this._appendField(t,l,e),this}f64(t,e){return this._appendField(t,y,e),this}u8(t,e){return this._appendField(t,v,e),this}u16(t,e){return this._appendField(t,$,e),this}i8(t,e){return this._appendField(t,z,e),this}vec2i8(t,e){return this._appendField(t,B,e),this}vec2i16(t,e){return this._appendField(t,C,e),this}vec2u8(t,e){return this._appendField(t,E,e),this}vec4u16(t,e){return this._appendField(t,T,e),this}u32(t,e){return this._appendField(t,M,e),this}_appendField(t,e,i){if(this._fields.has(t))return void Q(!1,`${t} already added to vertex buffer layout`);const s=e.ElementCount*f(e.ElementType),r=this._stride;this._stride+=s,this._fields.set(t,{size:s,constructor:e,offset:r,optional:i})}createBuffer(t){return new h(this,t)}createView(t){return new h(this,t)}clone(){const t=new u;return t._stride=this._stride,t._fields=new Map,this._fields.forEach((e,i)=>t._fields.set(i,e)),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach(e=>t=Math.max(t,f(e.constructor.ElementType))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function tt(){return new u}class et{constructor(t){this.fields=new Array,t.fields.forEach((e,i)=>{const s={...e,constructor:L(e.constructor)};this.fields.push([i,s])}),this.stride=t.stride}}const R=[l,o,a,c,p,_,y,F,m,g,w,b,v,E,x,A,$,H,I,T,M,O,k,D,z,B,G,V,j,C,q,J,K,N,S,P];function L(n){return`${n.ElementType}_${n.ElementCount}`}function W(n){return U.get(n)}const U=new Map;R.forEach(n=>U.set(L(n),n));export{tt as H,et as I};