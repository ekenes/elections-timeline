import{X as z,fS as O,O as B,hb as S,hc as C,hd as P,az as L,he as q}from"./index-d2e37ef9.js";import{e as A}from"./mat3f64-221ce671.js";import{p as D,m as N,c as G,g as K,a as Q}from"./meshFeatureSet-1ab6673b.js";import{c as R,x as F,L as U,O as E,i as j,E as V,T as X,u as k}from"./BufferView-b4c48a1a.js";import{t as H,f as J,i as W,o as M}from"./vec32-29d8e2bd.js";import{n as Y,l as Z,o as tt,f as et,r as ot,a as rt,b as v,c as nt,d as st,e as I,g as it,h as lt,i as at}from"./DefaultMaterial_COLOR_GAMMA-4afffca6.js";import{e as ut}from"./types-1305598a.js";import{q as ct}from"./georeference-f07e4376.js";import{n as ft}from"./resourceUtils-29c53688.js";import{D as w}from"./enums-b14466b3.js";import"./imageUtils-c830565a.js";import"./MeshGeoreferencedRelativeVertexSpace-54ba5f48.js";import"./MeshLocalVertexSpace-86e4e2ef.js";import"./earcut-b013cddf.js";import"./Indices-2c5d8aeb.js";import"./deduplicate-8a75d14a.js";import"./plane-6ae34335.js";import"./sphere-bc6b384d.js";import"./ByteSizeUnit-d4757d40.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";import"./triangle-5d228c5f.js";import"./lineSegment-754574f3.js";import"./basicInterfaces-11f56cb3.js";import"./VertexAttribute-c9cc5f8e.js";import"./FeatureLayerSource-53ffa2ff.js";import"./editingSupport-a5109e03.js";import"./normalizeUtils-04844d03.js";import"./normalizeUtilsCommon-a51f3cb3.js";import"./utils-6996243e.js";import"./clientSideDefaults-37f6cacd.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./QueryTask-015c3e97.js";import"./executeForIds-a030a07d.js";import"./query-1b8f0de2.js";import"./pbfQueryUtils-e8f1810f.js";import"./pbf-f29a219b.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-564f5c42.js";import"./executeQueryPBF-69176bd2.js";import"./featureConversionUtils-844127df.js";import"./spatialReferenceEllipsoidUtils-4ab92d3e.js";import"./quat-80b4cbf8.js";function mt(t,o,e){const a=t.typedBuffer,i=t.typedBufferStride,n=o.typedBuffer,c=o.typedBufferStride,l=e?e.count:o.count;let s=(e&&e.dstIndex?e.dstIndex:0)*i,f=(e&&e.srcIndex?e.srcIndex:0)*c;for(let u=0;u<l;++u){for(let r=0;r<9;++r)a[s+r]=n[f+r];s+=i,f+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:mt},Symbol.toStringTag,{value:"Module"}));function pt(t,o,e){const a=t.typedBuffer,i=t.typedBufferStride,n=o.typedBuffer,c=o.typedBufferStride,l=e?e.count:o.count;let s=(e&&e.dstIndex?e.dstIndex:0)*i,f=(e&&e.srcIndex?e.srcIndex:0)*c;for(let u=0;u<l;++u){for(let r=0;r<16;++r)a[s+r]=n[f+r];s+=i,f+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:pt},Symbol.toStringTag,{value:"Module"}));function T(t,o){return new t(new ArrayBuffer(o*t.ElementCount*ut(t.ElementType)))}async function xe(t,o,e){const a={...e,useTransform:(e==null?void 0:e.useTransform)??!0},i=new Y(dt(a)),n=(await Z(i,o,a,!0)).model,c=n.lods.shift(),l=new Map,s=new Map;n.textures.forEach((g,b)=>l.set(b,Tt(g))),n.materials.forEach((g,b)=>s.set(b,yt(g,l)));const f=gt(c);for(const g of f.parts)$t(f,g,s);const{position:u,normal:r,tangent:m,color:p,texCoord0:$}=f.vertexAttributes,h={position:u.typedBuffer,normal:r!=null?r.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:$!=null?$.typedBuffer:null,color:p!=null?p.typedBuffer:null},x=ct(h,t,a);return{transform:x.transform,vertexSpace:x.vertexSpace,components:f.components,spatialReference:t.spatialReference,vertexAttributes:new D({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:h.color,uv:h.uv})}}function dt(t){const o=t==null?void 0:t.resolveFile,e=t==null?void 0:t.requestFile;return o||e?{busy:!1,request:async(a,i,n)=>{const c=(o==null?void 0:o(a))??a;if(e){const s=await e(c,i,n==null?void 0:n.signal);if(s!==void 0)return s}return(await z(c,{responseType:i==="image"?"image":i==="binary"?"array-buffer":"json",signal:n!=null?n.signal:null})).data}}:null}function y(t,o){if(t==null)return"-";const e=t.typedBuffer;return`${O(o,e.buffer,()=>o.size)}/${e.byteOffset}/${e.byteLength}`}function xt(t){return t!=null?t.toString():"-"}function gt(t){let o=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},a=new Map,i=new Map,n=[];for(const c of t.parts){const{attributes:{position:l,normal:s,color:f,tangent:u,texCoord0:r}}=c,m=`
      ${y(l,a)}/
      ${y(s,a)}/
      ${y(f,a)}/
      ${y(u,a)}/
      ${y(r,a)}/
      ${xt(c.transform)}
    `;let p=!1;const $=O(i,m,()=>(p=!0,{start:o,length:l.count}));p&&(o+=l.count),s&&(e.normal=!0),f&&(e.color=!0),u&&(e.tangent=!0),r&&(e.texCoord0=!0),n.push({gltf:c,writeVertices:p,region:$})}return{vertexAttributes:{position:T(X,o),normal:e.normal?T(j,o):null,tangent:e.tangent?T(R,o):null,color:e.color?T(F,o):null,texCoord0:e.texCoord0?T(k,o):null},parts:n,components:[]}}function Tt(t){return new N({data:(ft(t.data),t.data),wrap:vt(t.parameters.wrap)})}function yt(t,o){const e=new B(wt(t.color,t.opacity)),a=t.emissiveFactor?new B(Bt(t.emissiveFactor)):null,i=n=>n?new Q({scale:n.scale?[n.scale[0],n.scale[1]]:[1,1],rotation:q(n.rotation??0),offset:n.offset?[n.offset[0],n.offset[1]]:[0,0]}):null;return new G({color:e,colorTexture:o.get(t.textureColor),normalTexture:o.get(t.textureNormal),emissiveColor:a,emissiveTexture:o.get(t.textureEmissive),occlusionTexture:o.get(t.textureOcclusion),alphaMode:bt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:o.get(t.textureMetallicRoughness),colorTextureTransform:i(t.colorTextureTransform),normalTextureTransform:i(t.normalTextureTransform),occlusionTextureTransform:i(t.occlusionTextureTransform),emissiveTextureTransform:i(t.emissiveTextureTransform),metallicRoughnessTextureTransform:i(t.metallicRoughnessTextureTransform)})}function $t(t,o,e){o.writeVertices&&ht(t,o);const{indices:a,attributes:i,primitiveType:n,material:c}=o.gltf;let l=tt(a||i.position.count,n);const s=o.region.start;if(s){const f=new Uint32Array(l);for(let u=0;u<l.length;u++)f[u]+=s;l=f}t.components.push(new K({faces:l,material:e.get(c),shading:i.normal?"source":"flat",trustSourceNormals:!0}))}function ht(t,o){const{position:e,normal:a,tangent:i,color:n,texCoord0:c}=t.vertexAttributes,l=o.region.start,{attributes:s,transform:f}=o.gltf,u=s.position.count;if(H(e.slice(l,u),s.position,f),s.normal!=null&&a!=null){const r=S(A(),f),m=a.slice(l,u);J(m,s.normal,r),C(r)&&W(m,m)}else a!=null&&et(a,0,0,1,{dstIndex:l,count:u});if(s.tangent!=null&&i!=null){const r=S(A(),f),m=i.slice(l,u);ot(m,s.tangent,r),C(r)&&rt(m,m)}else i!=null&&v(i,0,0,1,1,{dstIndex:l,count:u});if(s.texCoord0!=null&&c!=null?nt(c.slice(l,u),s.texCoord0):c!=null&&st(c,0,0,{dstIndex:l,count:u}),s.color!=null&&n!=null){const r=s.color,m=n.slice(l,u);if(r.elementCount===4)r instanceof R?I(m,r,255):r instanceof F?it(m,r):r instanceof U&&I(m,r,1/256);else{v(m,255,255,255,255);const p=E.fromTypedArray(m.typedBuffer,m.typedBufferStride);r instanceof j?M(p,r,255):r instanceof E?lt(p,r):r instanceof V&&M(p,r,1/256)}}else n!=null&&v(n.slice(l,u),255,255,255,255)}function bt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function vt(t){return{horizontal:_(t.s),vertical:_(t.t)}}function _(t){switch(t){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(t){return t**(1/at)*255}function wt(t,o){return P(d(t[0]),d(t[1]),d(t[2]),o)}function Bt(t){return L(d(t[0]),d(t[1]),d(t[2]))}export{xe as loadGLTFMesh};