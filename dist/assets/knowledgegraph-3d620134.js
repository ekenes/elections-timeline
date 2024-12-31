import{C as x,_ as k,$ as C,bF as J,bG as K,bH as V,f as I,p as M,n as Q,S as U,eU as P,R as j,eW as H}from"./index-fc6a9042.js";import{a as W,b as c,r as p,I as L,m as T,G as y,ab as O,P as X,N as G,U as _,A as z,E as A,X as D,w as B,v as Y,ac as Z,ad as F,ae as $}from"./arcadeUtils-1b3c2b40.js";import{l as tt}from"./portalUtils-845bbc94.js";import{s as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-55ce2d60.js";import"./TimeOnly-b4fd9a3f.js";import"./ImmutableArray-d5cad66d.js";import"./number-8b36810f.js";import"./featureConversionUtils-eabf19f1.js";let f=null;async function ot(t){const n=C.geometryServiceUrl??"";if(!n){J()||await K();for(const e of t)e.container[e.indexer]=V(e.container[e.indexer],I.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new M({geometries:r,outSpatialReference:I.WGS84}),s=await Q(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function E(t,n){const r=new U({portal:t,id:n});return await r.load(),f===null&&(f=await k(()=>import("./knowledgeGraphService-7050044d.js").then(i=>i.k),["assets/knowledgeGraphService-7050044d.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/GraphQueryStreaming-55ce2d60.js"])),await f.fetchKnowledgeGraph(r.url)}function R(t,n,r,i,s){if(t===null)return null;if(y(t)||A(t))return t;if(D(t)||D(t))return t.toJSDate();if(B(t))return t.toStorageFormat();if(Y(t))return t.toStorageString();if(Z(t)){const e={};for(const a of t.keys())e[a]=R(t.field(a),n,r,i,s),e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(_(t)){const e=t.map(a=>R(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof P&&s.push({container:e,indexer:a});return e}return F(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?j(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return H(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new c(n,p.WrongSpatialReference,null)}function v(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:_(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:v(t.properties,n)}:t instanceof rt?{graphType:"object",properties:v(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:v(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:F(t)?st(t,n):y(t)||A(t)||$(t)?t:null}function gt(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var d,m;if(W(e,2,2,n,r),e[0]===null)throw new c(n,p.PortalRequired,r);if(e[0]instanceof L){const u=T(e[1]);let h;return h=(d=n.services)!=null&&d.portal?n.services.portal:x.getDefault(),E(tt(e[0],h),u)}if(y(e[0])===!1)throw new c(n,p.InvalidParameter,r);const a=T(e[0]);return E(((m=n.services)==null?void 0:m.portal)??x.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var b;W(e,2,4,n,r);const a=e[0];if(!O(a))throw new c(n,p.InvalidParameter,r);const d=e[1];if(!y(d))throw new c(n,p.InvalidParameter,r);f===null&&(f=await k(()=>import("./knowledgeGraphService-7050044d.js").then(o=>o.k),["assets/knowledgeGraphService-7050044d.js","assets/index-fc6a9042.js","assets/index-d85835aa.css","assets/GraphQueryStreaming-55ce2d60.js"]));let m=null;const u=X(e[2],null);if(!(u instanceof G||u===null))throw new c(n,p.InvalidParameter,r);if(u){let o=[];m=R(u,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:d,bindParameters:m});(((b=a==null?void 0:a.serviceDefinition)==null?void 0:b.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const q=(await f.executeQueryStreaming(a,h)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await q.read();if(o)break;if(_(l))for(const w of l)S.push(g(w,n));else{const w=[];for(const N of l)w.push(g(l[N],n));S.push(w)}}}catch(o){throw o}return G.convertJsonToArcade(S,z(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{gt as registerFunctions};