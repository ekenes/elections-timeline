import{dv as v,a8 as I,am as S,ag as w,aZ as g}from"./index-02eff6e6.js";import{F as T,x as Q,j as h}from"./queryUtils-60c4a6a9.js";import{c as j,G as q,V as E}from"./QueryEngine-23d98145.js";import{I as M}from"./timeSupport-4d47519e.js";async function G(e,i,m){const a=v(m),{point:t,distance:n,returnEdge:p,vertexMode:o}=i;if(!p&&o==="none")return{candidates:[]};let s=I(i.query);s=await e.schedule(()=>T(s,e.definitionExpression,e.spatialReference),a),s=await e.reschedule(()=>j(s,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference}),a);const u=!S(t.spatialReference,e.spatialReference);u&&await Q(t.spatialReference,e.spatialReference);const f=typeof n=="number"?n:n.x,d=typeof n=="number"?n:n.y,y={xmin:t.x-f,xmax:t.x+f,ymin:t.y-d,ymax:t.y+d,spatialReference:t.spatialReference},r=u?h(y,e.spatialReference):y;if(!r)return{candidates:[]};const x=(await w(g(t),null,{signal:a}))[0],c=(await w(g(r),null,{signal:a}))[0];if(x==null||c==null)return{candidates:[]};const l=new q(await e.reschedule(()=>e.searchFeatures(E(c.toJSON())),a),s,e);await e.reschedule(()=>e.executeObjectIdsQuery(l),a),await e.reschedule(()=>e.executeTimeQuery(l),a),await e.reschedule(()=>e.executeAttributesQuery(l),a),await e.reschedule(()=>O(e,l,a),a);const R=x.toJSON(),b=u?h(R,e.spatialReference):R,F=u?Math.max(r.xmax-r.xmin,r.ymax-r.ymin)/2:n;return l.createSnappingResponse({...i,point:b,distance:F},t.spatialReference)}async function O(e,i,m){var o;const{query:a}=i,{spatialRel:t}=a;if(!((o=i==null?void 0:i.items)!=null&&o.length)||!a.geometry||!t)return;const n=await M(t,a.geometry,e.geometryType,e.hasZ,e.hasM),p=await e.runSpatialFilter(i.items,s=>n(s.geometry),m);i.items=p}export{G as u};