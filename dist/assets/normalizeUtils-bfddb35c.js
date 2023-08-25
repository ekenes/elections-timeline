import{c9 as X,X as k,dz as Z,aj as D,m as V,aZ as W,Z as C,a8 as O,fU as M,aF as P,fV as _,s as B}from"./index-1f15e2a2.js";import{r as z,o as A,i as R,s as F}from"./normalizeUtilsCommon-ef5c4fb2.js";import{f as E,r as G,o as H}from"./utils-22dd68a0.js";async function K(t,s,f,n){const e=E(t),c=s[0].spatialReference,l={...n,query:{...e.query,f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:X(s[0]),geometries:s}),cutter:JSON.stringify(f)}},o=await k(e.path+"/cut",l),{cutIndexes:u,geometries:y=[]}=o.data;return{cutIndexes:u,geometries:y.map(h=>{const x=Z(h);return x.spatialReference=c,x})}}async function Q(t,s,f){const n=typeof t=="string"?D(t):t,e=s[0].spatialReference,c=X(s[0]),l={...f,query:{...n.query,f:"json",sr:e.wkid??JSON.stringify(e),geometries:JSON.stringify(G(s))}},{data:o}=await k(n.path+"/simplify",l);return H(o.geometries,c,e)}const T=V.getLogger("esri.geometry.support.normalizeUtils");function Y(t){return t.type==="polygon"}function tt(t){return t[0].type==="polygon"}function et(t){return t[0].type==="polyline"}function st(t,s){if(!(t instanceof O||t instanceof P)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw T.error(e),new B(e)}const f=A(t),n=[];for(const e of f){const c=[];n.push(c),c.push([e[0][0],e[0][1]]);for(let l=0;l<e.length-1;l++){const o=e[l][0],u=e[l][1],y=e[l+1][0],h=e[l+1][1],x=Math.sqrt((y-o)*(y-o)+(h-u)*(h-u)),a=(h-u)/x,m=(y-o)/x,p=x/s;if(p>1){for(let j=1;j<=p-1;j++){const S=j*s,r=m*S+o,i=a*S+u;c.push([r,i])}const w=(x+Math.floor(p-1)*s)/2,I=m*w+o,J=a*w+u;c.push([I,J])}c.push([y,h])}}return Y(t)?new P({rings:n,spatialReference:t.spatialReference}):new O({paths:n,spatialReference:t.spatialReference})}function b(t,s,f){if(s){const n=st(t,1e6);t=_(n,!0)}return f&&(t=F(t,f)),t}function U(t,s,f){if(Array.isArray(t)){const n=t[0];if(n>s){const e=R(n,s);t[0]=n+e*(-2*s)}else if(n<f){const e=R(n,f);t[0]=n+e*(-2*f)}}else{const n=t.x;if(n>s){const e=R(n,s);t=t.clone().offset(e*(-2*s),0)}else if(n<f){const e=R(n,f);t=t.clone().offset(e*(-2*f),0)}}return t}function nt(t,s){let f=-1;for(let n=0;n<s.cutIndexes.length;n++){const e=s.cutIndexes[n],c=s.geometries[n],l=A(c);for(let o=0;o<l.length;o++){const u=l[o];u.some(y=>{if(y[0]<180)return!0;{let h=0;for(let a=0;a<u.length;a++){const m=u[a][0];h=m>h?m:h}h=Number(h.toFixed(9));const x=-360*R(h,180);for(let a=0;a<u.length;a++){const m=c.getPoint(o,a);c.setPoint(o,a,m.clone().offset(x,0))}return!0}})}if(e===f){if(tt(t))for(const o of A(c))t[e]=t[e].addRing(o);else if(et(t))for(const o of A(c))t[e]=t[e].addPath(o)}else f=e,t[e]=c}return t}async function ot(t,s,f){if(!Array.isArray(t))return ot([t],s);s&&typeof s!="string"&&T.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n=typeof s=="string"?s:(s==null?void 0:s.url)??W.geometryServiceUrl;let e,c,l,o,u,y,h,x,a=0;const m=[],p=[];for(const r of t)if(r!=null)if(e||(e=r.spatialReference,c=C(e),l=e.isWebMercator,y=l?102100:4326,o=z[y].maxX,u=z[y].minX,h=z[y].plus180Line,x=z[y].minus180Line),c)if(r.type==="mesh")p.push(r);else if(r.type==="point")p.push(U(r.clone(),o,u));else if(r.type==="multipoint"){const i=r.clone();i.points=i.points.map(g=>U(g,o,u)),p.push(i)}else if(r.type==="extent"){const i=r.clone()._normalize(!1,!1,c);p.push(i.rings?new P(i):i)}else if(r.extent){const i=r.extent,g=R(i.xmin,u)*(2*o);let d=g===0?r.clone():F(r.clone(),g);i.offset(g,0),i.intersects(h)&&i.xmax!==o?(a=i.xmax>a?i.xmax:a,d=b(d,l),m.push(d),p.push("cut")):i.intersects(x)&&i.xmin!==u?(a=i.xmax*(2*o)>a?i.xmax*(2*o):a,d=b(d,l,360),m.push(d),p.push("cut")):p.push(d)}else p.push(r.clone());else p.push(r);else p.push(r);let w=R(a,o),I=-90;const J=w,j=new O;for(;w>0;){const r=360*w-180;j.addPath([[r,I],[r,-1*I]]),I*=-1,w--}if(m.length>0&&J>0){const r=nt(m,await K(n,m,j,f)),i=[],g=[];for(let $=0;$<p.length;$++){const N=p[$];if(N!=="cut")g.push(N);else{const v=r.shift(),q=t[$];q!=null&&q.type==="polygon"&&q.rings&&q.rings.length>1&&v.rings.length>=q.rings.length?(i.push(v),g.push("simplify")):g.push(l?M(v):v)}}if(!i.length)return g;const d=await Q(n,i,f),L=[];for(let $=0;$<g.length;$++){const N=g[$];N!=="simplify"?L.push(N):L.push(l?M(d.shift()):d.shift())}return L}const S=[];for(let r=0;r<p.length;r++){const i=p[r];if(i!=="cut")S.push(i);else{const g=m.shift();S.push(l===!0?M(g):g)}}return S}function ct(t,s){const f=C(s);if(f){const[n,e]=f.valid,c=e-n;if(t<n)for(;t<n;)t+=c;if(t>e)for(;t>e;)t-=c}return t}export{ot as b,ct as v};
