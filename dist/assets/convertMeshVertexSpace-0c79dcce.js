import{aa as p,s,aQ as i}from"./index-f5007bd6.js";import{l as a}from"./MeshVertexAttributes-028b7452.js";import{M as n}from"./vertexSpaceConversion-5946bdb0.js";import"./mat3f64-e19cdcb8.js";import"./mat4f64-9a8384aa.js";import"./spatialReferenceEllipsoidUtils-54a59d9c.js";import"./computeTranslationToOriginAndRotation-4dfe58e0.js";import"./meshVertexSpaceUtils-c65fae84.js";import"./MeshLocalVertexSpace-a0523d8a.js";import"./vec3-4583783e.js";import"./projection-bf46e51c.js";import"./DoubleArray-46d2e554.js";import"./BufferView-c6cf13de.js";import"./vec4-6059145a.js";async function S(t,r,m){await Promise.resolve(),p(m);const o=n(t,r);if(!o)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=t.cloneAndModifyVertexAttributes(new a({...o,uv:i(t.vertexAttributes.uv),color:i(t.vertexAttributes.color)}),r);return e.transform=null,e}export{S as convertMeshVertexSpace};
