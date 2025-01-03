import{s as w,c3 as R,V as D,N as y,c4 as h,c5 as U,c6 as P,c7 as j,c8 as O,c9 as v,ca as d,cb as S,cc as A,cd as E}from"./index-02eff6e6.js";import{c as M,a as N}from"./devEnvironmentUtils-5c761adb.js";function z(t,e,l,a){const n=t.name;return n==null?Promise.reject(new w("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?W(n,e,a):R(t,e,a).then(s=>V(s,n,e,l,E,a))}function T(t,e){return e.items.find(l=>l.name===t)}function V(t,e,l,a,n,s){var f,g;const o=(l==null?void 0:l.portal)!=null?l.portal:D.getDefault(),p={portal:o,url:y(t.baseUrl),origin:"portal-item"},m=T(e,t.data);if(!m){const u=`The symbol name '${e}' could not be found`;return Promise.reject(new w("symbolstyleutils:symbol-name-not-found",u,{symbolName:e}))}let i=h(n(m,a),p),c=((f=m.thumbnail)==null?void 0:f.href)??null;const b=(g=m.thumbnail)==null?void 0:g.imageData;M()&&(i=N(i)??"",c=N(c));const x={portal:o,url:y(U(i)),origin:"portal-item"};return P(i,s).then(u=>{const F=a==="cimRef"?j(u.data):u.data,r=O(F,x);if(r&&v(r)){if(c){const I=h(c,p);r.thumbnail=new d({url:I})}else b&&(r.thumbnail=new d({url:`data:image/png;base64,${b}`}));t.styleUrl?r.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(r.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return r})}function W(t,e,l){const a=A.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:D.getDefault();return P(a,l).then(s=>{const o=j(s.data);return O(o,{portal:n,url:y(U(a)),origin:"portal-item"})})}export{V as fetchSymbolFromStyle,T as getStyleItemFromStyle,z as resolveWebStyleSymbol};
