import{cN as N,cO as P,cP as b,cQ as v,cR as x,cS as S,cT as R,cU as A,cV as U,cW as O,s as F,cX as J,cY as K,bg as V,cZ as Y,bh as Z,c_ as z}from"./index-1f15e2a2.js";import{i as C}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{p as y}from"./resourceExtension-6a834e10.js";function D(e){const o=(e==null?void 0:e.origins)??[void 0];return(r,n)=>{const s=H(e,r,n);for(const c of o){const i=N(r,c,n);for(const t in s)i[t]=s[t]}}}function H(e,o,r){if((e==null?void 0:e.type)==="resource")return Q(e,o,r);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=z;return{read:n,write:s}}}}function Q(e,o,r){const n=P(o,r);return{type:String,read:(s,c,i)=>{const t=b(s,c,i);return n.type===String?t:typeof n.type=="function"?new n.type({url:t}):void 0},write:{writer(s,c,i,t){if(!t||!t.resources)return typeof s=="string"?void(c[i]=v(s,t)):void(c[i]=s.write({},t));const a=X(s),p=v(a,{...t,verifyItemRelativeUrls:t&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!C(this)||t&&t.origin&&this.originIdOf(r)>S(t.origin)),u={object:this,propertyName:r,value:s,targetUrl:p,dest:c,targetPropertyName:i,context:t,params:e};t&&t.portalItem&&p&&!R(p)?l&&(e!=null&&e.contentAddressed)?g(u):l?T(u):W(u):t&&t.portalItem&&(p==null||A(p)!=null||U(p)||l)?g(u):c[i]=p}}}}function g(e){var h;const{targetUrl:o,params:r,value:n,context:s,dest:c,targetPropertyName:i}=e;if(!s.portalItem)return;const t=O(o),a=I(n,o,s);if(r!=null&&r.contentAddressed&&a.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a})));const p=r!=null&&r.contentAddressed&&a.type==="json"?J(a.jsonString):(t==null?void 0:t.filename)??K(),l=V((r==null?void 0:r.prefix)??(t==null?void 0:t.prefix),p),u=`${l}.${y(a)}`;if(r!=null&&r.contentAddressed&&s.resources&&a.type==="json"){const m=s.resources.toKeep.find(f=>f.resource.path===u)??s.resources.toAdd.find(f=>f.resource.path===u);if(m)return void(c[i]=m.resource.itemRelativeUrl)}const d=s.portalItem.resourceFromPath(u);U(o)&&s.resources&&s.resources.pendingOperations.push(Y(o).then(m=>{d.path=`${l}.${y({type:"blob",blob:m})}`,c[i]=d.itemRelativeUrl}).catch(()=>{}));const j=(r==null?void 0:r.compress)??!1;s.resources&&w({...e,resource:d,content:a,compress:j,updates:s.resources.toAdd}),c[i]=d.itemRelativeUrl}function T(e){const{context:o,targetUrl:r,params:n,value:s,dest:c,targetPropertyName:i}=e;if(!o.portalItem)return;const t=o.portalItem.resourceFromPath(r),a=I(s,r,o),p=y(a),l=Z(t.path),u=(n==null?void 0:n.compress)??!1;p===l?(o.resources&&w({...e,resource:t,content:a,compress:u,updates:o.resources.toUpdate}),c[i]=r):g(e)}function W({context:e,targetUrl:o,dest:r,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}function w({object:e,propertyName:o,updates:r,resource:n,content:s,compress:c}){r.push({resource:n,content:s,compress:c,finish:i=>{_(e,o,i)}})}function I(e,o,r){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}function X(e){return e==null?null:typeof e=="string"?e:e.url}function _(e,o,r){typeof e[o]=="string"?e[o]=r.url:e[o].url=r.url}export{D as j};
