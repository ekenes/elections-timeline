import{s as N,ca as R,aB as D,aC as y,cb as h,cc as U,cd as j,ce as P,cf as O,cg as k,ch as d,ci as S,cj as v,ck as A}from"./index-09dc31eb.js";import{c as B,a as w}from"./devEnvironmentUtils-5c761adb.js";function q(e,t,l,a){const n=e.name;return n==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName==="Esri2DPointSymbolsStyle"?M(n,t,a):R(e,t,a).then(s=>E(s,n,t,l,A,a))}function C(e,t){return t.items.find(l=>l.name===e)}function E(e,t,l,a,n,s){var f,g;const o=(l==null?void 0:l.portal)!=null?l.portal:D.getDefault(),b={portal:o,url:y(e.baseUrl),origin:"portal-item"},i=C(t,e.data);if(!i){const u=`The symbol name '${t}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",u,{symbolName:t}))}let m=h(n(i,a),b),c=((f=i.thumbnail)==null?void 0:f.href)??null;const p=(g=i.thumbnail)==null?void 0:g.imageData;B()&&(m=w(m)??"",c=w(c));const x={portal:o,url:y(U(m)),origin:"portal-item"};return j(m,s).then(u=>{const F=a==="cimRef"?P(u.data):u.data,r=O(F,x);if(r&&k(r)){if(c){const I=h(c,b);r.thumbnail=new d({url:I})}else p&&(r.thumbnail=new d({url:`data:image/png;base64,${p}`}));e.styleUrl?r.styleOrigin=new S({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new S({portal:l.portal,styleName:e.styleName,name:t}))}return r})}function M(e,t,l){const a=v.replaceAll(/\{SymbolName\}/gi,e),n=t.portal!=null?t.portal:D.getDefault();return j(a,l).then(s=>{const o=P(s.data);return O(o,{portal:n,url:y(U(a)),origin:"portal-item"})})}export{E as fetchSymbolFromStyle,C as getStyleItemFromStyle,q as resolveWebStyleSymbol};
