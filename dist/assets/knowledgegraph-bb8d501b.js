import{V as I,ft as y,_ as k,fu as _,ce as N,cD as U,cE as V,cF as j,C as T,cf as C,cg as K,W as M,fv as G,fw as W,fD as Q,fE as L,fF as O}from"./index-02eff6e6.js";import{r as b,a as u,b as f,N as B,k as D,a7 as X,K as z,i as P,J as H,X as E,F as Y,E as Z,a8 as $,U as q}from"./arcadeUtils-0c55ebe6.js";import{l as tt}from"./portalUtils-751d2fd5.js";import{s as nt,m as et,t as at,p as rt,c as it}from"./GraphQueryStreaming-71b5222f.js";import"./ImmutableArray-d5cad66d.js";import"./number-cd6a9aaf.js";import"./featureConversionUtils-aa6583e8.js";let l=null;async function ot(t){const n=N.geometryServiceUrl??"";if(!n){U()||await V();for(const e of t)e.container[e.indexer]=j(e.container[e.indexer],T.WGS84);return}const a=t.map(e=>e.container[e.indexer]),i=new C({geometries:a,outSpatialReference:T.WGS84}),s=await K(n,i);for(let e=0;e<s.length;e++){const r=t[e];r.container[r.indexer]=s[e]}}async function F(t,n){const a=new M({portal:t,id:n});return await a.load(),l===null&&(l=await k(()=>import("./knowledgeGraphService-1b585d58.js").then(i=>i.k),["assets/knowledgeGraphService-1b585d58.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/GraphQueryStreaming-71b5222f.js"])),await l.fetchKnowledgeGraph(a.url)}function S(t,n,a,i,s){if(t===null)return null;if(y(t)||G(t))return t;if(E(t)||E(t))return t.toJSDate();if(Y(t))return t.toStorageFormat();if(Z(t))return t.toStorageString();if($(t)){const e={};for(const r of t.keys())e[r]=S(t.field(r),n,a,i,s),e[r]instanceof W&&s.push({container:e,indexer:r});return e}if(_(t)){const e=t.map(r=>S(r,n,a,i,s));for(let r=0;r<e.length;r++)e[r]instanceof W&&s.push({container:e,indexer:r});return e}return q(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?Q(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return O(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,f.WrongSpatialReference,null)}function R(t,n){if(!t)return null;const a={};for(const i in t)a[i]=g(t[i],n);return a}function g(t,n){return t===null?null:_(t)?t.map(a=>g(a,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:R(t.properties,n)}:t instanceof at?{graphType:"object",properties:R(t.properties,n)}:t instanceof rt?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:R(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(a=>g(a,n)):null}:q(t)?st(t,n):y(t)||G(t)||L(t)?t:null}function ht(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,a){return t.standardFunctionAsync(n,a,(i,s,e)=>{var d,m;if(b(e,2,2,n,a),e[0]===null)throw new u(n,f.PortalRequired,a);if(e[0]instanceof B){const p=D(e[1]);let h;return h=(d=n.services)!=null&&d.portal?n.services.portal:I.getDefault(),F(tt(e[0],h),p)}if(y(e[0])===!1)throw new u(n,f.InvalidParameter,a);const r=D(e[0]);return F(((m=n.services)==null?void 0:m.portal)??I.getDefault(),r)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,a){return t.standardFunctionAsync(n,a,async(i,s,e)=>{var x;b(e,2,4,n,a);const r=e[0];if(!X(r))throw new u(n,f.InvalidParameter,a);const d=e[1];if(!y(d))throw new u(n,f.InvalidParameter,a);l===null&&(l=await k(()=>import("./knowledgeGraphService-1b585d58.js").then(o=>o.k),["assets/knowledgeGraphService-1b585d58.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/GraphQueryStreaming-71b5222f.js"]));let m=null;const p=z(e[2],null);if(!(p instanceof P||p===null))throw new u(n,f.InvalidParameter,a);if(p){let o=[];m=S(p,!0,!1,n,o),o=o.filter(c=>!c.container[c.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:d,bindParameters:m});(((x=r==null?void 0:r.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const A=(await l.executeQueryStreaming(r,h)).resultRowsStream.getReader(),v=[];try{for(;;){const{done:o,value:c}=await A.read();if(o)break;if(_(c))for(const w of c)v.push(g(w,n));else{const w=[];for(const J of c)w.push(g(c[J],n));v.push(w)}}}catch(o){throw o}return P.convertJsonToArcade(v,H(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{ht as registerFunctions};
