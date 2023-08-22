import{ac as P,fw as R,fB as B,gS as S,gT as C,gU as z,aJ as L,gV as D}from"./index-de9e02e1.js";import{e as A}from"./mat3f64-221ce671.js";import{p as N,m as q,c as G,g as U,a as V}from"./meshFeatureSet-a2cea55d.js";import{c as O,x as j,L as J,O as E,i as F,E as K,T as Q,u as k}from"./BufferView-73c4141d.js";import{t as H,f as W,i as X,o as M}from"./vec32-eae9dabb.js";import{n as Y,l as Z,o as tt,f as et,r as ot,a as rt,b as v,c as nt,d as st,e as I,g as at,h as lt,i as it}from"./DefaultMaterial_COLOR_GAMMA-5bbb5e83.js";import{e as ut}from"./types-1305598a.js";import{q as ct}from"./georeference-56823faa.js";import{t as ft}from"./resourceUtils-1d112ccb.js";import{D as w}from"./enums-b14466b3.js";import"./imageUtils-c2d0d1ae.js";import"./MeshGeoreferencedRelativeVertexSpace-c0a3d294.js";import"./MeshLocalVertexSpace-5d652c92.js";import"./earcut-0b70cd4d.js";import"./Indices-9b0eac0e.js";import"./deduplicate-06ab73c7.js";import"./FeatureLayerSource-01904c44.js";import"./mat4f64-1413b4a7.js";import"./editingSupport-09af1d05.js";import"./normalizeUtils-9deeb3c4.js";import"./normalizeUtilsCommon-3579e597.js";import"./utils-5b434a69.js";import"./clientSideDefaults-782202b2.js";import"./QueryEngineCapabilities-42e44ded.js";import"./QueryTask-631a6048.js";import"./executeForIds-aa1abe00.js";import"./query-8c72b5f2.js";import"./pbfQueryUtils-4437fe49.js";import"./pbf-61f8d833.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-ee98f30d.js";import"./executeQueryPBF-95398315.js";import"./featureConversionUtils-a956fd80.js";import"./spatialReferenceEllipsoidUtils-49ab3cb2.js";import"./quat-4d486893.js";import"./quatf64-3363c48e.js";import"./basicInterfaces-4ab7cc6a.js";function mt(t,o,e){const a=t.typedBuffer,s=t.typedBufferStride,n=o.typedBuffer,f=o.typedBufferStride,l=e?e.count:o.count;let i=(e&&e.dstIndex?e.dstIndex:0)*s,c=(e&&e.srcIndex?e.srcIndex:0)*f;for(let u=0;u<l;++u){for(let r=0;r<9;++r)a[i+r]=n[c+r];i+=s,c+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:mt},Symbol.toStringTag,{value:"Module"}));function pt(t,o,e){const a=t.typedBuffer,s=t.typedBufferStride,n=o.typedBuffer,f=o.typedBufferStride,l=e?e.count:o.count;let i=(e&&e.dstIndex?e.dstIndex:0)*s,c=(e&&e.srcIndex?e.srcIndex:0)*f;for(let u=0;u<l;++u){for(let r=0;r<16;++r)a[i+r]=n[c+r];i+=s,c+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:pt},Symbol.toStringTag,{value:"Module"}));function T(t,o){return new t(new ArrayBuffer(o*t.ElementCount*ut(t.ElementType)))}async function ue(t,o,e){const a={...e,useTransform:(e==null?void 0:e.useTransform)??!0},s=new Y(dt(a)),n=(await Z(s,o,a,!0)).model,f=n.lods.shift(),l=new Map,i=new Map;n.textures.forEach((g,h)=>l.set(h,Tt(g))),n.materials.forEach((g,h)=>i.set(h,$t(g,l)));const c=gt(f);for(const g of c.parts)yt(c,g,i);const{position:u,normal:r,tangent:m,color:p,texCoord0:y}=c.vertexAttributes,b={position:u.typedBuffer,normal:r!=null?r.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:y!=null?y.typedBuffer:null,color:p!=null?p.typedBuffer:null},x=ct(b,t,a);return{transform:x.transform,vertexSpace:x.vertexSpace,components:c.components,spatialReference:t.spatialReference,vertexAttributes:new N({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:b.color,uv:b.uv})}}function dt(t){const o=t==null?void 0:t.resolveFile;return o?{busy:!1,request:async(e,a,s)=>{const n=o(e);return(await P(n,{responseType:a==="image"?"image":a==="binary"?"array-buffer":"json",signal:s!=null?s.signal:null})).data}}:null}function $(t,o){if(t==null)return"-";const e=t.typedBuffer;return`${R(o,e.buffer,()=>o.size)}/${e.byteOffset}/${e.byteLength}`}function xt(t){return t!=null?t.toString():"-"}function gt(t){let o=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},a=new Map,s=new Map,n=[];for(const f of t.parts){const{attributes:{position:l,normal:i,color:c,tangent:u,texCoord0:r}}=f,m=`
      ${$(l,a)}/
      ${$(i,a)}/
      ${$(c,a)}/
      ${$(u,a)}/
      ${$(r,a)}/
      ${xt(f.transform)}
    `;let p=!1;const y=R(s,m,()=>(p=!0,{start:o,length:l.count}));p&&(o+=l.count),i&&(e.normal=!0),c&&(e.color=!0),u&&(e.tangent=!0),r&&(e.texCoord0=!0),n.push({gltf:f,writeVertices:p,region:y})}return{vertexAttributes:{position:T(Q,o),normal:e.normal?T(F,o):null,tangent:e.tangent?T(O,o):null,color:e.color?T(j,o):null,texCoord0:e.texCoord0?T(k,o):null},parts:n,components:[]}}function Tt(t){return new q({data:(ft(t.data),t.data),wrap:vt(t.parameters.wrap)})}function $t(t,o){const e=new B(wt(t.color,t.opacity)),a=t.emissiveFactor?new B(Bt(t.emissiveFactor)):null,s=n=>n?new V({scale:n.scale?[n.scale[0],n.scale[1]]:[1,1],rotation:D(n.rotation??0),offset:n.offset?[n.offset[0],n.offset[1]]:[0,0]}):null;return new G({color:e,colorTexture:o.get(t.textureColor),normalTexture:o.get(t.textureNormal),emissiveColor:a,emissiveTexture:o.get(t.textureEmissive),occlusionTexture:o.get(t.textureOcclusion),alphaMode:ht(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:o.get(t.textureMetallicRoughness),colorTextureTransform:s(t.colorTextureTransform),normalTextureTransform:s(t.normalTextureTransform),occlusionTextureTransform:s(t.occlusionTextureTransform),emissiveTextureTransform:s(t.emissiveTextureTransform),metallicRoughnessTextureTransform:s(t.metallicRoughnessTextureTransform)})}function yt(t,o,e){o.writeVertices&&bt(t,o);const{indices:a,attributes:s,primitiveType:n,material:f}=o.gltf;let l=tt(a||s.position.count,n);const i=o.region.start;if(i){const c=new Uint32Array(l);for(let u=0;u<l.length;u++)c[u]+=i;l=c}t.components.push(new U({faces:l,material:e.get(f),shading:s.normal?"source":"flat",trustSourceNormals:!0}))}function bt(t,o){const{position:e,normal:a,tangent:s,color:n,texCoord0:f}=t.vertexAttributes,l=o.region.start,{attributes:i,transform:c}=o.gltf,u=i.position.count;if(H(e.slice(l,u),i.position,c),i.normal!=null&&a!=null){const r=S(A(),c),m=a.slice(l,u);W(m,i.normal,r),C(r)&&X(m,m)}else a!=null&&et(a,0,0,1,{dstIndex:l,count:u});if(i.tangent!=null&&s!=null){const r=S(A(),c),m=s.slice(l,u);ot(m,i.tangent,r),C(r)&&rt(m,m)}else s!=null&&v(s,0,0,1,1,{dstIndex:l,count:u});if(i.texCoord0!=null&&f!=null?nt(f.slice(l,u),i.texCoord0):f!=null&&st(f,0,0,{dstIndex:l,count:u}),i.color!=null&&n!=null){const r=i.color,m=n.slice(l,u);if(r.elementCount===4)r instanceof O?I(m,r,255):r instanceof j?at(m,r):r instanceof J&&I(m,r,1/256);else{v(m,255,255,255,255);const p=E.fromTypedArray(m.typedBuffer,m.typedBufferStride);r instanceof F?M(p,r,255):r instanceof E?lt(p,r):r instanceof K&&M(p,r,1/256)}}else n!=null&&v(n.slice(l,u),255,255,255,255)}function ht(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function vt(t){return{horizontal:_(t.s),vertical:_(t.t)}}function _(t){switch(t){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(t){return t**(1/it)*255}function wt(t,o){return z(d(t[0]),d(t[1]),d(t[2]),o)}function Bt(t){return L(d(t[0]),d(t[1]),d(t[2]))}export{ue as loadGLTFMesh};
