import{f as a,cZ as k,c_ as u,c$ as d,d0 as m,d1 as i,d2 as l}from"./index-560772b3.js";const C=new a(k),n=new a(u),e=new a(d),x=new a(m);function D(t){const f=r.get(t);if(f)return f;let s=C;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,c=t.latestWkid;if(o!=null||c!=null)i(o)||i(c)?s=n:(l(o)||l(c))&&(s=e);else{const p=t.wkt2??t.wkt;if(p){const w=p.toUpperCase();w===U?s=n:w===$&&(s=e)}}}return r.set(t,s),s}const r=new Map,U=n.wkt.toUpperCase(),$=e.wkt.toUpperCase();export{D as a,x as w};