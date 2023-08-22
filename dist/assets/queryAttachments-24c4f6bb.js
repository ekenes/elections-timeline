import{cj as h,ck as f,ac as p}from"./index-de9e02e1.js";import{t as d}from"./query-8c72b5f2.js";import{l}from"./AttachmentInfo-a14a95f9.js";import"./normalizeUtils-9deeb3c4.js";import"./normalizeUtilsCommon-3579e597.js";import"./utils-5b434a69.js";import"./pbfQueryUtils-4437fe49.js";import"./pbf-61f8d833.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";function j(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function z(n,t){const o={};for(const a of t){const{parentObjectId:e,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(f(`${n.path}/${e}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:e,parentGlobalId:s}),o[e]?o[e].push(m):o[e]=[m]}}return o}function G(n,t,o){let a={query:d({...n.query,f:"json",...j(t)})};return o&&(a={...o,...a,query:{...o.query,...a.query}}),p(n.path+"/queryAttachments",a).then(e=>e.data.attachmentGroups)}async function S(n,t,o){const{objectIds:a}=t,e=[];for(const s of a)e.push(p(n.path+"/"+s+"/attachments",o));return Promise.all(e).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{G as executeAttachmentQuery,S as fetchAttachments,z as processAttachmentQueryResult};