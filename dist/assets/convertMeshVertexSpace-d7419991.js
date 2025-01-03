import{a1 as p,s as m,a8 as s}from"./index-02eff6e6.js";import{p as a}from"./MeshVertexAttributes-322694de.js";import{B as n}from"./vertexSpaceConversion-19816ce6.js";import"./mat3f64-e19cdcb8.js";import"./mat4f64-9a8384aa.js";import"./spatialReferenceEllipsoidUtils-16e47544.js";import"./computeTranslationToOriginAndRotation-e412a98d.js";import"./projectPointToVector-4f128583.js";import"./meshVertexSpaceUtils-4a324c69.js";import"./MeshLocalVertexSpace-795f86db.js";import"./vec3-9cc00b38.js";import"./BufferView-ca9895dd.js";import"./vec4-4d59ff29.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};