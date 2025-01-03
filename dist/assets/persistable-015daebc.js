import{eX as j,eY as P,eZ as N,e_ as U,e$ as x,f0 as R,f1 as S,f2 as A,f3 as w,f4 as O,s as $,f5 as F,b7 as q,ba as z,f6 as J,bb as K,f7 as Y}from"./index-02eff6e6.js";import{i as Z}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{p as g}from"./resourceExtension-a8dabf57.js";function H(e){const s=(e==null?void 0:e.origins)??[void 0];return(t,i)=>{const o=C(e,t,i);for(const l of s){const a=j(t,l,i);for(const n in o)a[n]=o[n]}}}function C(e,s,t){if((e==null?void 0:e.type)==="resource")return V(e,s,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:i,write:o}=Y;return{read:i,write:o}}}}function V(e,s,t){var o,l;const i=P(s,t);return{type:String,read:(a,n,c)=>{const r=N(a,n,c);return i.type===String?r:typeof i.type=="function"?new i.type({url:r}):void 0},write:{isRequired:(l=(o=i.json)==null?void 0:o.write)==null?void 0:l.isRequired,writer(a,n,c,r){if(!(r!=null&&r.resources))return typeof a=="string"?void(n[c]=U(a,r)):void(n[c]=a.write({},r));const f=k(a),p=U(f,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),d=i.type!==String&&(!Z(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>R(r.origin)),u={object:this,propertyName:t,value:a,targetUrl:p,dest:n,targetPropertyName:c,context:r,params:e};r!=null&&r.portalItem&&p&&!S(p)?d&&(e!=null&&e.contentAddressed)?h(u):d?X(u):_(u):r!=null&&r.portalItem&&(p==null||A(p)!=null||w(p)||d)?h(u):n[c]=p}}}}function h(e){var v;const{targetUrl:s,params:t,value:i,context:o,dest:l,targetPropertyName:a}=e;if(!o.portalItem)return;const n=O(s),c=b(i,s,o);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((v=o.messages)==null?void 0:v.push(new $("persistable:contentAddressingUnsupported",`Property "${a}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const r=t!=null&&t.contentAddressed&&c.type==="json"?F(c.jsonString):(n==null?void 0:n.filename)??q(),f=z((t==null?void 0:t.prefix)??(n==null?void 0:n.prefix),r),p=`${f}.${g(c)}`;if(t!=null&&t.contentAddressed&&o.resources&&c.type==="json"){const m=o.resources.toKeep.find(({resource:y})=>y.path===p)??o.resources.toAdd.find(({resource:y})=>y.path===p);if(m)return void(l[a]=m.resource.itemRelativeUrl)}const d=o.portalItem.resourceFromPath(p);w(s)&&o.resources&&o.resources.pendingOperations.push(J(s).then(m=>{d.path=`${f}.${g({type:"blob",blob:m})}`,l[a]=d.itemRelativeUrl}).catch(()=>{}));const u=(t==null?void 0:t.compress)??!1;o.resources&&I({...e,resource:d,content:c,compress:u,updates:o.resources.toAdd}),l[a]=d.itemRelativeUrl}function X(e){const{context:s,targetUrl:t,params:i,value:o,dest:l,targetPropertyName:a}=e;if(!s.portalItem)return;const n=s.portalItem.resourceFromPath(t),c=b(o,t,s),r=g(c),f=K(n.path),p=(i==null?void 0:i.compress)??!1;r===f?(s.resources&&I({...e,resource:n,content:c,compress:p,updates:s.resources.toUpdate}),l[a]=t):h(e)}function _({context:e,targetUrl:s,dest:t,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(s),compress:!1}),t[i]=s)}function I({object:e,propertyName:s,updates:t,resource:i,content:o,compress:l}){const a=n=>{B(e,s,n)};t.push({resource:i,content:o,compress:l,finish:a})}function b(e,s,t){return typeof e=="string"?{type:"url",url:s}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function k(e){return e==null?null:typeof e=="string"?e:e.url}function B(e,s,t){typeof e[s]=="string"?e[s]=t.url:e[s].url=t.url}export{H as v};
