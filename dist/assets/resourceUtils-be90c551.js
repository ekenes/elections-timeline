import{a8 as g,_ as v,a9 as S,aa as y,s as E,ab as P}from"./index-bb199e66.js";import{getSiblingOfSameTypeI as $,contentToBlob as m}from"./resourceUtils-cbcb89b7.js";async function R(s,t,a){const r=await w(s,t,a);await I(r,t,a)}async function T(s,t,a,r,o){const c=await w(a,r,o);await s.update({data:t}),await I(c,r,o)}async function w(s,t,a){if(!(t!=null&&t.resources))return;const r=t.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=t.portalItem;const o=new Set(t.resources.toKeep.map(e=>e.resource.path)),c=new Set,f=[];o.forEach(e=>{r.delete(e),s.paths.push(e)});const u=[],h=[],p=[];for(const e of t.resources.toUpdate)if(r.delete(e.resource.path),o.has(e.resource.path)||c.has(e.resource.path)){const{resource:n,content:_,finish:d}=e,i=$(n,g());s.paths.push(i.path),u.push({resource:i,content:await m(_),compress:e.compress}),d&&p.push(()=>d(i))}else{s.paths.push(e.resource.path),h.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&p.push(()=>n(e.resource)),c.add(e.resource.path)}for(const e of t.resources.toAdd)if(s.paths.push(e.resource.path),r.has(e.resource.path))r.delete(e.resource.path);else{u.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&p.push(()=>n(e.resource))}if(u.length||h.length){const{addOrUpdateResources:e}=await v(()=>import("./resourceUtils-cbcb89b7.js"),["assets/resourceUtils-cbcb89b7.js","assets/index-bb199e66.js","assets/index-d85835aa.css"]);await e(t.portalItem,u,"add",a),await e(t.portalItem,h,"update",a)}if(p.forEach(e=>e()),f.length===0)return r;const l=await S(f);if(y(a),l.length>0)throw new E("save:resources","Failed to save one or more resources",{errors:l});return r}async function I(s,t,a){if(!s||!t.portalItem)return;const r=[];for(const o of s){const c=t.portalItem.resourceFromPath(o);r.push(c.portalItem.removeResource(c,a))}await P(r)}export{T as n,R as p};