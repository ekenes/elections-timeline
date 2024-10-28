import{bA as h,f as d,aZ as y,Q as S,aK as N,ev as l,a7 as D}from"./index-560772b3.js";import{$ as g}from"./Mesh-72dfd867.js";import{N as M,o as w,i as F}from"./MeshTransform-1cb49c46.js";import{s as T}from"./infoFor3D-24efd44a.js";import"./imageUtils-29916bfe.js";import"./MeshVertexAttributes-f8a5dffe.js";import"./MeshLocalVertexSpace-0cd5741a.js";import"./meshVertexSpaceUtils-ca27512e.js";import"./earcut-243c9ad1.js";import"./DoubleArray-d69ee1b2.js";import"./Indices-de576f22.js";import"./plane-c25c441d.js";import"./mat3f64-e19cdcb8.js";import"./mat4f64-9a8384aa.js";import"./quatf64-81e039e4.js";import"./deduplicate-8148487f.js";import"./projection-d4d25dbb.js";import"./spatialReferenceEllipsoidUtils-c292e74e.js";import"./computeTranslationToOriginAndRotation-ccdd968f.js";import"./BufferView-7aeecc0e.js";import"./vec3-f374383d.js";import"./vec4-8ac9835b.js";import"./vertexSpaceConversion-5f65e6b5.js";import"./quat-aa2799ad.js";const I=()=>D.getLogger("esri.rest.support.meshFeatureSet");function nt(t,e,r){const o=r.features;r.features=[],delete r.geometryType;const n=h.fromJSON(r);if(n.geometryType="mesh",!r.assetMaps)return n;const s=b(e,r.assetMaps),i=t.sourceSpatialReference??d.WGS84,m=r.globalIdFieldName,{outFields:a}=t,c=a!=null&&a.length>0?A(a.includes("*")?null:new Set(a)):()=>({});for(const u of o){const p=L(u,m,i,e,s);n.features.push(new y({geometry:p,attributes:c(u)}))}return n}function A(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function L(t,e,r,o,n){const s=t.attributes[e],i=n.get(s);if(i==null||!t.geometry)return null;const m=O(t,r,o),a=S.fromJSON(t.geometry);a.spatialReference=r;const c=$(t.attributes,o),u=r.isGeographic?"local":"georeferenced",p=x(i);return p?g.createWithExternalSource(m,p,{extent:a,transform:c,vertexSpace:u}):g.createIncomplete(m,{extent:a,transform:c,vertexSpace:u})}function O({attributes:t},e,{transformFieldRoles:r}){const o=t[r.originX],n=t[r.originY],s=t[r.originZ];return new N({x:o,y:n,z:s,spatialReference:e})}function $(t,{transformFieldRoles:e}){return new M({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotationAxis:[t[e.rotationX],-t[e.rotationZ],t[e.rotationY]],rotationAngle:t[e.rotationDeg],scale:[t[e.scaleX],t[e.scaleZ],t[e.scaleY]]})}var f;function b(t,e){const r=new Map;for(const o of e){const n=o.parentGlobalId;if(n==null)continue;const s=o.assetName,i=o.assetType,m=o.assetHash,a=o.assetURL,c=o.conversionStatus,u=o.seqNo,p=T(i,t.supportedFormats);if(!p){I().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const E=l(r,n,()=>({files:new Map}));l(E.files,s,()=>({name:s,type:i,mimeType:p,status:P(c),parts:[]})).parts[u]={hash:m,url:a}}return r}function x(t){const e=Array.from(t.files.values()),r=new Array;for(const o of e){if(o.status!==f.COMPLETED)return null;const n=new Array;for(const s of o.parts){if(!s)return null;n.push(new w(s.url,s.hash))}r.push(new F(o.name,o.mimeType,n))}return r}function P(t){switch(t){case"COMPLETED":case"SUBMITTED":return f.COMPLETED;case"INPROGRESS":return f.PENDING;default:return f.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(f||(f={}));export{b as assetMapFromAssetMapsJSON,L as extractMesh,nt as meshFeatureSetFromJSON};
