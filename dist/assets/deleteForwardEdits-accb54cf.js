import{s as n,ax as f,b$ as u,c0 as p,U as m}from"./index-7df220b7.js";async function $(i,s,a,e){if(!s)throw new n("post:missing-guid","guid for version is missing");const t=f(i),o=a.toJSON(),r=u(t.query,{query:p({...o,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:c}=await m(d,r);return c.success}export{$ as deleteForwardEdits};
