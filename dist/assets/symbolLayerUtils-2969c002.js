import{dT as y,s,Y as p,_ as b,dU as l,bR as w,dV as _,bh as h}from"./index-560772b3.js";let a=f();function f(){return new y(50)}function x(){a=f()}async function B(e,r){var i,t;if((i=e.resource)!=null&&i.href)return g(e.resource.href).then(n=>[n.width,n.height]);if((t=e.resource)!=null&&t.primitive)return r!=null?[r,r]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e){return p(e,{responseType:"image"}).then(r=>r.data)}async function R(e,r=null){var t,n;if(!e.isPrimitive){const o=(t=e.resource)==null?void 0:t.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const u=a.get(o);if(u!==void 0)return u;const{fetch:m}=await b(()=>import("./objectResourceUtils-57198b05.js").then(v=>v.o),["assets/objectResourceUtils-57198b05.js","assets/devEnvironmentUtils-e93e420d.js","assets/index-560772b3.js","assets/index-d85835aa.css","assets/mat3f64-e19cdcb8.js","assets/mat4f64-9a8384aa.js","assets/BufferView-7aeecc0e.js","assets/vec3-f374383d.js","assets/vec4-8ac9835b.js","assets/DefaultMaterial_COLOR_GAMMA-194e2007.js","assets/enums-2e633670.js","assets/quat-aa2799ad.js","assets/quatf64-81e039e4.js","assets/resourceUtils-66f16497.js","assets/basicInterfaces-d9412f98.js","assets/Indices-de576f22.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-990959e1.js","assets/orientedBoundingBox-24149228.js","assets/spatialReferenceEllipsoidUtils-c292e74e.js","assets/computeTranslationToOriginAndRotation-ccdd968f.js","assets/plane-c25c441d.js","assets/Util-f3f9ef9e.js","assets/sphere-6bf401a6.js","assets/lineSegment-c8c8485b.js","assets/VertexAttribute-c2df436e.js","assets/Texture-2049af6f.js","assets/InterleavedLayout-794e5a98.js","assets/types-1305598a.js","assets/NormalAttribute.glsl-3032190c.js","assets/interfaces-8918b36f.js","assets/BindType-d21d71dd.js","assets/renderState-303ecedc.js","assets/doublePrecisionUtils-e3c3d0d8.js"]),d=await m(o,{disableTextures:!0}),c=l(d.referenceBoundingBox,h());return a.put(o,c),c}if(!((n=e.resource)!=null&&n.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const i=w(_(e.resource.primitive));if(r!=null)for(let o=0;o<i.length;o++)i[o]*=r;return l(i,h())}export{x as clearBoundingBoxCache,B as computeIconLayerResourceSize,R as computeObjectLayerResourceSize};