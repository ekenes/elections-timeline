import{X as p,eJ as l,aG as f,w as m}from"./index-a1a1303e.js";import{t as j}from"./query-0fb2e4ab.js";import"./pbfQueryUtils-61f7b846.js";import"./pbf-75d66840.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";function R(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function S(r,t,e){const n=await y(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...n,data:c}}async function F(r,t,e){const n=await y(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,t,e={},n){const o=j({...r.query,f:"json",...n,...R(t,n)});return p(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function g(r,t,e){t=l.from(t);const n=f(r);return S(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(c=>a[c]=m.fromJSON(s[c])),a})}async function q(r,t,e){t=l.from(t);const n=f(r);return F(n,t,{...e}).then(o=>o.data)}export{g as executeRelationshipQuery,q as executeRelationshipQueryForCount};
