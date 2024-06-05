import{dq as x,dr as b,ds as N,dt as v,du as P,dv as A,dw as S,dx as R,dy as U,dz as O,s as F,dA as z,d7 as C,bE as J,dB as K,bF as q,dC as B}from"./index-7df220b7.js";import{i as E}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{p as y}from"./resourceExtension-f1f279b0.js";function Q(e){const o=(e==null?void 0:e.origins)??[void 0];return(r,n)=>{const s=H(e,r,n);for(const a of o){const i=x(r,a,n);for(const t in s)i[t]=s[t]}}}function H(e,o,r){if((e==null?void 0:e.type)==="resource")return V(e,o,r);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=B;return{read:n,write:s}}}}function V(e,o,r){const n=b(o,r);return{type:String,read:(s,a,i)=>{const t=N(s,a,i);return n.type===String?t:typeof n.type=="function"?new n.type({url:t}):void 0},write:{writer(s,a,i,t){if(!(t!=null&&t.resources))return typeof s=="string"?void(a[i]=v(s,t)):void(a[i]=s.write({},t));const c=k(s),d=v(c,{...t,verifyItemRelativeUrls:t!=null&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},P.NO),l=n.type!==String&&(!E(this)||(t==null?void 0:t.origin)&&this.originIdOf(r)>A(t.origin)),p={object:this,propertyName:r,value:s,targetUrl:d,dest:a,targetPropertyName:i,context:t,params:e};t!=null&&t.portalItem&&d&&!S(d)?l&&(e!=null&&e.contentAddressed)?g(p):l?Y(p):Z(p):t!=null&&t.portalItem&&(d==null||R(d)!=null||U(d)||l)?g(p):a[i]=d}}}}function g(e){var h;const{targetUrl:o,params:r,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const t=O(o),c=I(n,o,s);if(r!=null&&r.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const d=r!=null&&r.contentAddressed&&c.type==="json"?z(c.jsonString):(t==null?void 0:t.filename)??C(),l=J((r==null?void 0:r.prefix)??(t==null?void 0:t.prefix),d),p=`${l}.${y(c)}`;if(r!=null&&r.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(f=>f.resource.path===p)??s.resources.toAdd.find(f=>f.resource.path===p);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(p);U(o)&&s.resources&&s.resources.pendingOperations.push(K(o).then(m=>{u.path=`${l}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(r==null?void 0:r.compress)??!1;s.resources&&w({...e,resource:u,content:c,compress:j,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function Y(e){const{context:o,targetUrl:r,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const t=o.portalItem.resourceFromPath(r),c=I(s,r,o),d=y(c),l=q(t.path),p=(n==null?void 0:n.compress)??!1;d===l?(o.resources&&w({...e,resource:t,content:c,compress:p,updates:o.resources.toUpdate}),a[i]=r):g(e)}function Z({context:e,targetUrl:o,dest:r,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}function w({object:e,propertyName:o,updates:r,resource:n,content:s,compress:a}){r.push({resource:n,content:s,compress:a,finish:i=>{D(e,o,i)}})}function I(e,o,r){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}function k(e){return e==null?null:typeof e=="string"?e:e.url}function D(e,o,r){typeof e[o]=="string"?e[o]=r.url:e[o].url=r.url}export{Q as j};
