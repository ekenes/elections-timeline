import{e4 as v,s as n,U as y,_ as p,e5 as c,bj as b,e6 as w,aA as l}from"./index-7df220b7.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-e7dcda75.js").then(d=>d.o),["assets/objectResourceUtils-e7dcda75.js","assets/devEnvironmentUtils-4eab2a99.js","assets/index-7df220b7.js","assets/index-0e712e80.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-0c48defb.js","assets/vec32-7df98f6c.js","assets/DefaultMaterial_COLOR_GAMMA-49c1040a.js","assets/enums-bdecffa2.js","assets/quat-8d5872f5.js","assets/quatf64-3363c48e.js","assets/resourceUtils-b2f26d89.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-edb4bcce.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-28379f53.js","assets/triangle-faa0afa0.js","assets/sphere-57cc5d4e.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-98322a86.js","assets/VertexAttribute-0e674613.js","assets/Texture-a748c37c.js","assets/InterleavedLayout-98c084fc.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-0bfb7428.js","assets/plane-9393aa09.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-6975534b.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=b(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};