import{a as P,c2 as M,c3 as $}from"./index-de9e02e1.js";import{a as C,t as J}from"./OptimizedGeometry-33b2eb0d.js";const v={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(t){return v[t]}function*k(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const n of t.features)n&&(yield n)}}function*x(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const n of t.coordinates)yield*n;break;case"MultiPolygon":for(const n of t.coordinates)for(const o of n)yield*o}}function*A(t,n={}){const{geometryType:o,objectIdField:e}=n;for(const r of t){const{geometry:s,properties:p,id:i}=r;if(s&&b(s.type)!==o)continue;const l=p||{};let c;e&&(c=l[e],i==null||c||(l[e]=c=i)),yield new C(s?Z(new J,s,n):null,l,null,c??void 0)}}function D(t){for(const n of t)if(n.length>2)return!0;return!1}function E(t){return!T(t)}function R(t){return T(t)}function T(t){let n=0;for(let o=0;o<t.length;o++){const e=t[o],r=t[(o+1)%t.length];n+=e[0]*r[1]-r[0]*e[1]}return n<=0}function L(t){const n=t[0],o=t[t.length-1];return n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]||t.push(n),t}function Z(t,n,o){switch(n.type){case"LineString":return H(t,n,o);case"MultiLineString":return q(t,n,o);case"MultiPoint":return z(t,n,o);case"MultiPolygon":return B(t,n,o);case"Point":return K(t,n,o);case"Polygon":return Q(t,n,o)}}function H(t,n,o){return g(t,n.coordinates,o),t}function q(t,n,o){for(const e of n.coordinates)g(t,e,o);return t}function z(t,n,o){return g(t,n.coordinates,o),t}function B(t,n,o){for(const e of n.coordinates){O(t,e[0],o);for(let r=1;r<e.length;r++)I(t,e[r],o)}return t}function K(t,n,o){return S(t,n.coordinates,o),t}function Q(t,n,o){const e=n.coordinates;O(t,e[0],o);for(let r=1;r<e.length;r++)I(t,e[r],o);return t}function O(t,n,o){const e=L(n);E(e)?N(t,e,o):g(t,e,o)}function I(t,n,o){const e=L(n);R(e)?N(t,e,o):g(t,e,o)}function g(t,n,o){for(const e of n)S(t,e,o);t.lengths.push(n.length)}function N(t,n,o){for(let e=n.length-1;e>=0;e--)S(t,n[e],o);t.lengths.push(n.length)}function S(t,n,o){const[e,r,s]=n;t.coords.push(e,r),o.hasZ&&t.coords.push(s||0)}function U(t){switch(typeof t){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function X(t){if(!t)throw new P("geojson-layer:empty","GeoJSON data is empty");if(t.type!=="Feature"&&t.type!=="FeatureCollection")throw new P("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o=typeof n=="string"?n:n.type==="name"?n.properties.name:n.type==="EPSG"?n.properties.code:null,e=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!e.test(o))throw new P("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function Y(t,n={}){const o=[],e=new Set,r=new Set;let s,p=!1,i=null,l=!1,{geometryType:c=null}=n,m=!1;for(const d of k(t)){const{geometry:h,properties:u,id:a}=d;if((!h||(c||(c=b(h.type)),b(h.type)===c))&&(p||(p=D(x(h))),l||(l=a!=null,l&&(s=typeof a,u&&(i=Object.keys(u).filter(y=>u[y]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(y=>u[y]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!m&&u)){let y=!0;for(const f in u){if(e.has(f))continue;const F=u[f];if(F==null){y=!1,r.add(f);continue}const j=U(F);if(j==="unknown"){r.add(f);continue}r.delete(f),e.add(f);const G=M(f);G&&o.push({name:G,alias:f,type:j})}m=y}}const w=M((i==null?void 0:i.length)===1&&i[0]||null)??void 0;if(w){for(const d of o)if(d.name===w&&$(d)){d.type="esriFieldTypeOID";break}}return{fields:o,geometryType:c,hasZ:p,objectIdFieldName:w,objectIdFieldType:s,unknownFields:Array.from(r)}}function _(t,n){return Array.from(A(k(t),n))}export{_ as I,Y as L,X as T,b as s};
