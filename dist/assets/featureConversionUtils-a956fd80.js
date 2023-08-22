import{s as un,_ as ln,a1 as cn,a2 as an,$ as fn,a as Z,a8 as hn,a9 as dn,aa as mn,ab as gn}from"./index-de9e02e1.js";import{t as T,a as F}from"./OptimizedGeometry-33b2eb0d.js";import{e as yn}from"./OptimizedFeatureSet-1d1ac4b9.js";function p(n,r){return n?r?4:3:r?3:2}const x=un.getLogger("esri.layers.graphics.featureConversionUtils"),B={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},pn=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o},$=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o,n[e+2]=r[t+2]},bn=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o,n[e+2]=r[t+3]},wn=(n,r,e,t,s,o)=>{n[e]=s,n[e+1]=o,n[e+2]=r[t+2],n[e+3]=r[t+3]};function U(n,r,e,t){if(n){if(e)return r&&t?wn:$;if(r&&t)return bn}else if(r&&t)return $;return pn}function z({scale:n,translate:r},e){return Math.round((e-r[0])/n[0])}function E({scale:n,translate:r},e){return Math.round((r[1]-e)/n[1])}function q({scale:n,translate:r},e,t){return e*n[t]+r[t]}function Un(n,r,e){return n?r?e?A(n):S(n):e?_(n):j(n):null}function j(n){const r=n.coords;return{x:r[0],y:r[1]}}function D(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n}function S(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2]}}function In(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n}function _(n){const r=n.coords;return{x:r[0],y:r[1],m:r[2]}}function Mn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.m,n}function A(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function Gn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n.coords[3]=r.m,n}function Nn(n,r,e,t){let s=j;e&&t?s=A:e?s=S:t&&(s=_);for(const o of r){const{geometry:u,attributes:l}=o,i=u!=null?s(u):null;n.push({attributes:l,geometry:i})}return n}function R(n,r){return n&&r?Gn:n?In:r?Mn:D}function H(n,r,e,t,s){const o=R(e,t);for(const{geometry:u,attributes:l}of r){const i=u!=null?o(new T,u):null;n.push(new F(i,l,null,s?l[s]:void 0))}return n}function Sn(n,r,e=R(r.z!=null,r.m!=null)){return e(n,r)}function Tn(n,r,e,t){for(const{geometry:s,attributes:o}of r)n.push({attributes:o,geometry:s!=null?J(s,e,t):null});return n}function J(n,r,e){if(n==null)return null;const t=p(r,e),s=[];for(let o=0;o<n.coords.length;o+=t){const u=[];for(let l=0;l<t;l++)u.push(n.coords[o+l]);s.push(u)}return r?e?{points:s,hasZ:r,hasM:e}:{points:s,hasZ:r}:e?{points:s,hasM:e}:{points:s}}function K(n,r,e,t,s){const o=p(e,t);for(const{geometry:u,attributes:l}of r){const i=u!=null?Q(new T,u,o):null;n.push(new F(i,l,null,s?l[s]:void 0))}return n}function Q(n,r,e=p(r.hasZ,r.hasM)){n.lengths[0]=r.points.length;const t=n.coords;let s=0;for(const o of r.points)for(let u=0;u<e;u++)t[s++]=o[u];return n}function Pn(n,r,e,t){for(const{geometry:s,attributes:o}of r)n.push({attributes:o,geometry:s!=null?W(s,e,t):null});return n}function W(n,r,e){if(!n)return null;const t=p(r,e),{coords:s,lengths:o}=n,u=[];let l=0;for(const i of o){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<t;h++)f.push(s[l++]);c.push(f)}u.push(c)}return r?e?{paths:u,hasZ:r,hasM:e}:{paths:u,hasZ:r}:e?{paths:u,hasM:e}:{paths:u}}function X(n,r,e,t,s){const o=p(e,t);for(const{geometry:u,attributes:l}of r){const i=u!=null?nn(new T,u,o):null;n.push(new F(i,l,null,s?l[s]:void 0))}return n}function nn(n,r,e=p(r.hasZ,r.hasM)){const{lengths:t,coords:s}=n;let o=0;for(const u of r.paths){for(const l of u)for(let i=0;i<e;i++)s[o++]=l[i];t.push(u.length)}return n}function Fn(n,r,e,t){for(const{geometry:s,attributes:o,centroid:u}of r){const l=s!=null?rn(s,e,t):null;if(u!=null){const i=j(u);n.push({attributes:o,centroid:i,geometry:l})}else n.push({attributes:o,geometry:l})}return n}function rn(n,r,e){if(!n)return null;const t=p(r,e),{coords:s,lengths:o}=n,u=[];let l=0;for(const i of o){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<t;h++)f.push(s[l++]);c.push(f)}u.push(c)}return r?e?{rings:u,hasZ:r,hasM:e}:{rings:u,hasZ:r}:e?{rings:u,hasM:e}:{rings:u}}function en(n,r,e,t,s){for(const{geometry:o,centroid:u,attributes:l}of r){const i=o!=null?tn(new T,o,e,t):null,c=s?l[s]:void 0;u!=null?n.push(new F(i,l,D(new T,u),c)):n.push(new F(i,l,null,c))}return n}function tn(n,r,e=r.hasZ,t=r.hasM){return Zn(n,r.rings,e,t)}function Zn(n,r,e,t){const s=p(e,t),{lengths:o,coords:u}=n;let l=0;N(n);for(const i of r){for(const c of i)for(let a=0;a<s;a++)u[l++]=c[a];o.push(i.length)}return n}const P=[],k=[];function _n(n,r,e,t,s){P[0]=n;const[o]=on(k,P,r,e,t,s);return G(P),G(k),o}function on(n,r,e,t,s,o){if(G(n),!e){for(const u of r){const l=o?u.attributes[o]:void 0;n.push(new F(null,u.attributes,null,l))}return n}switch(e){case"esriGeometryPoint":return H(n,r,t,s,o);case"esriGeometryMultipoint":return K(n,r,t,s,o);case"esriGeometryPolyline":return X(n,r,t,s,o);case"esriGeometryPolygon":return en(n,r,t,s,o);default:x.error("convertToFeatureSet:unknown-geometry",new Z(`Unable to parse unknown geometry type '${e}'`)),G(n)}return n}function An(n,r,e,t,s,o){const u=n.length;switch(e){case"esriGeometryPoint":H(n,r,t,s,o);break;case"esriGeometryMultipoint":K(n,r,t,s,o);break;case"esriGeometryPolyline":X(n,r,t,s,o);break;case"esriGeometryPolygon":en(n,r,t,s,o);break;default:x.error("convertToFeatureSet:unknown-geometry",new Z(`Unable to parse unknown geometry type '${e}'`))}for(let l=0;l<r.length;l++)n[l+u].geometryType=e,n[l+u].insertAfter=r[l].insertAfter,n[l+u].groupId=r[l].groupId;return n}function Rn(n,r,e,t){k[0]=n,sn(P,k,r,e,t);const s=P[0];return G(P),G(k),s}function Vn(n,r,e){if(n==null)return null;const t=new T;return"hasZ"in n&&r==null&&(r=n.hasZ),"hasM"in n&&e==null&&(e=n.hasM),ln(n)?R(r??n.z!=null,e??n.m!=null)(t,n):cn(n)?tn(t,n,r,e):an(n)?nn(t,n,p(r,e)):fn(n)?Q(t,n,p(r,e)):void x.error("convertFromGeometry:unknown-geometry",new Z(`Unable to parse unknown geometry type '${n}'`))}function xn(n,r,e,t){const s=n&&("coords"in n?n:n.geometry);if(s==null)return null;switch(r){case"esriGeometryPoint":{let o=j;return e&&t?o=A:e?o=S:t&&(o=_),o(s)}case"esriGeometryMultipoint":return J(s,e,t);case"esriGeometryPolyline":return W(s,e,t);case"esriGeometryPolygon":return rn(s,e,t);default:return x.error("convertToGeometry:unknown-geometry",new Z(`Unable to parse unknown geometry type '${r}'`)),null}}function kn(n,r){for(const e of r)n.push({attributes:e.attributes});return n}function sn(n,r,e,t,s){if(G(n),e==null)return kn(n,r);switch(e){case"esriGeometryPoint":return Nn(n,r,t,s);case"esriGeometryMultipoint":return Tn(n,r,t,s);case"esriGeometryPolyline":return Pn(n,r,t,s);case"esriGeometryPolygon":return Fn(n,r,t,s);default:x.error("convertToFeatureSet:unknown-geometry",new Z(`Unable to parse unknown geometry type '${e}'`))}return n}function Yn(n){const{objectIdFieldName:r,spatialReference:e,transform:t,fields:s,hasM:o,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=n,d={features:sn([],l,i,u,o),fields:s,geometryType:i,objectIdFieldName:r,spatialReference:e,uniqueIdField:a,queryGeometry:xn(f,h,!1,!1)};return t&&(d.transform=t),c&&(d.exceededTransferLimit=c),o&&(d.hasM=o),u&&(d.hasZ=u),d}function $n(n,r){const e=new yn,{hasM:t,hasZ:s,features:o,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=n;return f&&(e.fields=f),e.geometryType=i??null,e.objectIdFieldName=u??r??null,e.spatialReference=l??null,e.objectIdFieldName?(o&&on(e.features,o,i,s,t,e.objectIdFieldName),c&&(e.exceededTransferLimit=c),t&&(e.hasM=t),s&&(e.hasZ=s),a&&(e.transform=a),e):(x.error(new Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),e)}function Cn(n){const{transform:r,features:e,hasM:t,hasZ:s}=n;if(!r)return n;for(const o of e)o.geometry!=null&&O(o.geometry,o.geometry,t,s,r),o.centroid!=null&&O(o.centroid,o.centroid,t,s,r);return n.transform=null,n}function On(n,r){const{geometryType:e,features:t,hasM:s,hasZ:o}=r;if(!n)return r;for(let u=0;u<t.length;u++){const l=t[u],i=l.weakClone();i.geometry=new T,C(i.geometry,l.geometry,s,o,e,n),l.centroid&&(i.centroid=new T,C(i.centroid,l.centroid,s,o,"esriGeometryPoint",n)),t[u]=i}return r.transform=n,r}function C(n,r,e,t,s,o,u=e,l=t){if(N(n),r==null||!r.coords.length)return null;const i=B[s],{coords:c,lengths:a}=r,f=p(e,t),h=p(e&&u,t&&l),d=U(e,t,u,l);if(!a.length)return d(n.coords,c,0,0,z(o,c[0]),E(o,c[1])),N(n,f,0),n;let m,y,w,I,b=0,g=0,M=g;for(const V of a){if(V<i)continue;let v=0;g=M,w=m=z(o,c[b]),I=y=E(o,c[b+1]),d(n.coords,c,g,b,w,I),v++,b+=f,g+=h;for(let Y=1;Y<V;Y++,b+=f)w=z(o,c[b]),I=E(o,c[b+1]),w===m&&I===y||(d(n.coords,c,g,b,w-m,I-y),g+=h,v++,m=w,y=I);v>=i&&(n.lengths.push(v),M=g)}return G(n.coords,M),n.coords.length?n:null}function Bn(n,r,e,t,s,o,u=e,l=t){if(N(n),!r||!r.coords.length)return null;const i=B[s],{coords:c,lengths:a}=r,f=p(e,t),h=p(e&&u,t&&l),d=U(e,t,u,l);if(!a.length)return d(n.coords,c,0,0,c[0],c[1]),N(n,f,0),n;let m=0;const y=o*o;for(const w of a){if(w<i){m+=w*f;continue}const I=n.coords.length/h,b=m,g=m+(w-1)*f;d(n.coords,c,n.coords.length,b,c[b],c[b+1]),L(n.coords,c,f,y,d,b,g),d(n.coords,c,n.coords.length,g,c[g],c[g+1]);const M=n.coords.length/h-I;M>=i?n.lengths.push(M):G(n.coords,I*h),m+=w*f}return n.coords.length?n:null}function vn(n,r,e,t){const s=n[r],o=n[r+1],u=n[e],l=n[e+1],i=n[t],c=n[t+1];let a=u,f=l,h=i-a,d=c-f;if(h!==0||d!==0){const m=((s-a)*h+(o-f)*d)/(h*h+d*d);m>1?(a=i,f=c):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=o-f,h*h+d*d}function L(n,r,e,t,s,o,u){let l,i=t,c=0;for(let a=o+e;a<u;a+=e)l=vn(r,a,o,u),l>i&&(c=a,i=l);i>t&&(c-o>e&&L(n,r,e,t,s,o,c),s(n,r,n.length,c,r[c],r[c+1]),u-c>e&&L(n,r,e,t,s,c,u))}function Dn(n,r,e,t){if(r==null||!r.coords||!r.coords.length)return null;const s=p(e,t);let o=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(r&&r.coords){const c=r.coords;for(let a=0;a<c.length;a+=s){const f=c[a],h=c[a+1];o=Math.min(o,f),l=Math.max(l,f),u=Math.min(u,h),i=Math.max(i,h)}}return hn(n)?dn(n,o,u,l,i):mn(o,u,l,i,n),n}function O(n,r,e,t,s){const{coords:o,lengths:u}=r,l=p(e,t);if(!o.length)return n!==r&&N(n),n;gn(s);const{originPosition:i,scale:c,translate:a}=s,f=zn;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)n.coords[y]=q(f,o[y],y);return n!==r&&N(n,l,0),n}let m=0;for(let y=0;y<u.length;y++){const w=u[y];n.lengths[y]=w;for(let g=0;g<l;++g)n.coords[m+g]=q(f,o[m+g],g);let I=n.coords[m],b=n.coords[m+1];m+=l;for(let g=1;g<w;g++,m+=l){I+=o[m]*h[0],b+=o[m+1]*h[1],n.coords[m]=I,n.coords[m+1]=b;for(let M=2;M<l;++M)n.coords[m+M]=q(f,o[m+M],M)}}return n!==r&&N(n,o.length,u.length),n}function Hn(n,r,e,t,s,o){if(N(n),n.lengths.push(...r.lengths),e===s&&t===o)for(let u=0;u<r.coords.length;u++)n.coords.push(r.coords[u]);else{const u=p(e,t),l=U(e,t,s,o),i=r.coords;for(let c=0;c<i.length;c+=u)l(n.coords,i,n.coords.length,c,i[c],i[c+1])}return n}function jn(n,r,e,t){let s=0,o=n[t*r],u=n[t*(r+1)];for(let l=1;l<e;l++){const i=o+n[t*(r+l)],c=u+n[t*(r+l)+1],a=(i-o)*(c+u);o=i,u=c,s+=a}return .5*s}function Jn(n,r){const{coords:e,lengths:t}=n;let s=0,o=0;for(let u=0;u<t.length;u++){const l=t[u];o+=jn(e,s,l,r),s+=l}return Math.abs(o)}function N(n,r=0,e=0){G(n.lengths,e),G(n.coords,r)}function G(n,r=0){n.length!==r&&(n.length=r)}const zn={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{W as $,nn as C,rn as H,O as I,tn as K,Sn as L,z as M,Jn as N,Un as P,Zn as Q,J as U,On as a,Hn as b,Yn as c,Bn as d,on as e,Cn as f,E as g,C as h,$n as i,Rn as n,An as o,Vn as r,xn as s,_n as t,Dn as y};
