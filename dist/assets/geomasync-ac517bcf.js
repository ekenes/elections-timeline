import{b9 as un,X as V,dJ as d,aU as S,aS as R,aK as x,aR as b,aT as W,dK as q,ar as E,dY as cn,aV as fn}from"./index-a1a1303e.js";import{M as o,t as h,u as H,X as K,Q as X,c as L,V as A,b as F,g as j,H as J,J as w,a6 as B,a7 as Z,a8 as k,y as N,v as sn,a9 as on,aa as dn,z as Q,N as D,k as C,ab as wn,ac as M}from"./arcadeUtils-4c521855.js";import{t as l,e as u,c as P,r as O,a as p}from"./TimeOnly-36610d4e.js";import{l as Y}from"./portalUtils-5021de55.js";import{A as hn,h as mn,S as yn,m as pn,x as vn,p as gn,O as Pn,g as In,R as An,D as Fn,b as Nn,E as Rn,k as bn,y as xn,w as Sn,W as G,K as _,F as T,M as z,d as On,C as $,U as nn,B as jn,L as Jn,P as Dn,v as Cn,H as en,N as rn,J as Mn,j as Tn,T as Un,V as Ln}from"./geometryEngineAsync-2a433dfd.js";import"./number-ca5937fa.js";import"./arcadeTimeUtils-13bc9096.js";import"./featureConversionUtils-b3c52e9d.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function tn(t,e,r){var a;if(!((a=un)==null?void 0:a.findCredential(t.restUrl)))return null;if(t.loadStatus==="loaded"&&e===""&&t.user&&t.user.sourceJSON&&r===!1)return t.user.sourceJSON;const s={responseType:"json",query:{f:"json"}};if(r&&(s.query.returnUserLicenseTypeExtensions=!0),e===""){const i=await V(t.restUrl+"/community/self",s);if(i.data){const f=i.data;if(f&&f.username)return f}return null}const n=await V(t.restUrl+"/community/users/"+e,s);if(n.data){const i=n.data;return i.error?null:i}return null}function an(t){return cn.indexOf("4.")===0?b.fromExtent(t):new b({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function I(t,e,r){if(h(t,2,2,e,r),!(t[0]instanceof d&&t[1]instanceof d)){if(!(t[0]instanceof d&&t[1]===null)){if(!(t[1]instanceof d&&t[0]===null)){if(t[0]!==null||t[1]!==null)throw new l(e,u.InvalidParameter,r)}}}}async function ln(t,e){if(t.type!=="polygon"&&t.type!=="polyline"&&t.type!=="extent")return 0;let r=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(r=wn(t.spatialReference)/fn(t.spatialReference));let c=0;if(t.type==="polyline")for(const n of t.paths)for(let a=1;a<n.length;a++)c+=M(n[a],n[a-1],r);else if(t.type==="polygon")for(const n of t.rings){for(let a=1;a<n.length;a++)c+=M(n[a],n[a-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=M(n[0],n[n.length-1],r))}else t.type==="extent"&&(c+=2*M([t.xmin,t.ymin,0],[t.xmax,t.ymin,0],r),c+=2*M([t.xmin,t.ymin,0],[t.xmin,t.ymax,0],r),c*=2,c+=4*Math.abs(w(t.zmax,0)*r-w(t.zmin,0)*r));const s=new R({hasZ:!1,hasM:!1,spatialReference:t.spatialReference,paths:[[0,0],[0,c]]});return T(s,e)}function Bn(t){t.mode==="async"&&(t.functions.disjoint=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]===null||n[1]===null||hn(n[0],n[1])))},t.functions.intersects=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&mn(n[0],n[1])))},t.functions.touches=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&yn(n[0],n[1])))},t.functions.crosses=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&pn(n[0],n[1])))},t.functions.within=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&vn(n[0],n[1])))},t.functions.contains=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&gn(n[0],n[1])))},t.functions.overlaps=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},t.functions.equals=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(h(n,2,2,e,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?In(n[0],n[1]):(H(n[0])&&H(n[1])||!!(K(n[0])&&K(n[1])||X(n[0])&&X(n[1])))&&n[0].equals(n[1]))))},t.functions.relate=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,3,3,e,r),n[0]instanceof d&&n[1]instanceof d)return An(n[0],n[1],L(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new l(e,u.InvalidParameter,r)})},t.functions.intersection=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]===null||n[1]===null?null:Fn(n[0],n[1])))},t.functions.union=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{const a=[];if((n=o(n)).length===0)throw new l(e,u.WrongNumberOfParameters,r);if(n.length===1)if(A(n[0])){const i=o(n[0]);for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof d))throw new l(e,u.InvalidParameter,r);a.push(i[f])}}else{if(!F(n[0])){if(n[0]instanceof d)return j(P(n[0]),e.spatialReference);if(n[0]===null)return null;throw new l(e,u.InvalidParameter,r)}{const i=o(n[0].toArray());for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof d))throw new l(e,u.InvalidParameter,r);a.push(i[f])}}}else for(let i=0;i<n.length;i++)if(n[i]!==null){if(!(n[i]instanceof d))throw new l(e,u.InvalidParameter,r);a.push(n[i])}return a.length===0?null:Nn(a)})},t.functions.difference=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:Rn(n[0],n[1])))},t.functions.symmetricdifference=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>(I(n=o(n),e,r),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):bn(n[0],n[1])))},t.functions.clip=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[1]instanceof S)&&n[1]!==null)throw new l(e,u.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return n[1]===null?null:xn(n[0],n[1])})},t.functions.cut=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[1]instanceof R)&&n[1]!==null)throw new l(e,u.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return n[1]===null?[P(n[0])]:Sn(n[0],n[1])})},t.functions.area=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumArea(O(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new l(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=B(n[0],e.spatialReference);return a===null?0:G(a,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return G(n[0],O(w(n[1],-1)))})},t.functions.areageodetic=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumArea(O(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new l(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=B(n[0],e.spatialReference);return a===null?0:_(a,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return _(n[0],O(w(n[1],-1)))})},t.functions.length=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumLength(p(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new l(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=Z(n[0],e.spatialReference);return a===null?0:T(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return T(n[0],p(w(n[1],-1)))})},t.functions.length3d=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const a=Z(n[0],e.spatialReference);return a===null?0:a.hasZ===!0?ln(a,p(w(n[1],-1))):T(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return n[0].hasZ===!0?ln(n[0],p(w(n[1],-1))):T(n[0],p(w(n[1],-1)))})},t.functions.lengthgeodetic=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumLength(p(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new l(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=Z(n[0],e.spatialReference);return a===null?0:z(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return z(n[0],p(w(n[1],-1)))})},t.functions.distance=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{n=o(n),h(n,2,3,e,r);let a=n[0];(A(n[0])||F(n[0]))&&(a=k(n[0],e.spatialReference));let i=n[1];if((A(n[1])||F(n[1]))&&(i=k(n[1],e.spatialReference)),!(a instanceof d))throw new l(e,u.InvalidParameter,r);if(!(i instanceof d))throw new l(e,u.InvalidParameter,r);return On(a,i,p(w(n[2],-1)))})},t.functions.distancegeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{n=o(n),h(n,2,3,e,r);const a=n[0],i=n[1];if(!(a instanceof x))throw new l(e,u.InvalidParameter,r);if(!(i instanceof x))throw new l(e,u.InvalidParameter,r);const f=new R({paths:[],spatialReference:a.spatialReference});return f.addPath([a,i]),z(f,p(w(n[2],-1)))})},t.functions.densify=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);const a=N(n[1]);if(isNaN(a))throw new l(e,u.InvalidParameter,r);if(a<=0)throw new l(e,u.InvalidParameter,r);return n[0]instanceof b||n[0]instanceof R?$(n[0],a,p(w(n[2],-1))):n[0]instanceof S?$(an(n[0]),a,p(w(n[2],-1))):n[0]})},t.functions.densifygeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);const a=N(n[1]);if(isNaN(a))throw new l(e,u.InvalidParameter,r);if(a<=0)throw new l(e,u.InvalidParameter,r);return n[0]instanceof b||n[0]instanceof R?nn(n[0],a,p(w(n[2],-1))):n[0]instanceof S?nn(an(n[0]),a,p(w(n[2],-1))):n[0]})},t.functions.generalize=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,4,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);const a=N(n[1]);if(isNaN(a))throw new l(e,u.InvalidParameter,r);return jn(n[0],a,sn(w(n[2],!0)),p(w(n[3],-1)))})},t.functions.buffer=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);const a=N(n[1]);if(isNaN(a))throw new l(e,u.InvalidParameter,r);return a===0?P(n[0]):Jn(n[0],a,p(w(n[2],-1)))})},t.functions.buffergeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);const a=N(n[1]);if(isNaN(a))throw new l(e,u.InvalidParameter,r);return a===0?P(n[0]):Dn(n[0],a,p(w(n[2],-1)))})},t.functions.offset=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,2,6,e,r),n[0]===null)return null;if(!(n[0]instanceof b||n[0]instanceof R))throw new l(e,u.InvalidParameter,r);const a=N(n[1]);if(isNaN(a))throw new l(e,u.InvalidParameter,r);const i=N(w(n[4],10));if(isNaN(i))throw new l(e,u.InvalidParameter,r);const f=N(w(n[5],0));if(isNaN(f))throw new l(e,u.InvalidParameter,r);return Cn(n[0],a,p(w(n[2],-1)),L(w(n[3],"round")).toLowerCase(),i,f)})},t.functions.rotate=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{n=o(n),h(n,2,3,e,r);let a=n[0];if(a===null)return null;if(!(a instanceof d))throw new l(e,u.InvalidParameter,r);a instanceof S&&(a=b.fromExtent(a));const i=N(n[1]);if(isNaN(i))throw new l(e,u.InvalidParameter,r);const f=w(n[2],null);if(f===null)return en(a,i);if(f instanceof x)return en(a,i,f);throw new l(e,u.InvalidParameter,r)})},t.functions.centroid=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;let a=n[0];if((A(n[0])||F(n[0]))&&(a=k(n[0],e.spatialReference)),a===null)return null;if(!(a instanceof d))throw new l(e,u.InvalidParameter,r);return a instanceof x?j(P(n[0]),e.spatialReference):a instanceof b?a.centroid:a instanceof R?on(a):a instanceof W?dn(a):a instanceof S?a.center:null})},t.functions.multiparttosinglepart=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{n=o(n),h(n,1,1,e,r);const a=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);if(n[0]instanceof x)return[j(P(n[0]),e.spatialReference)];if(n[0]instanceof S)return[j(P(n[0]),e.spatialReference)];const i=await rn(n[0]);if(i instanceof b){const f=[],y=[];for(let m=0;m<i.rings.length;m++)if(i.isClockwise(i.rings[m])){const v=q({rings:[i.rings[m]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(v)}else y.push({ring:i.rings[m],pt:i.getPoint(m,0)});for(let m=0;m<y.length;m++)for(let v=0;v<f.length;v++)if(f[v].contains(y[m].pt)){f[v].addRing(y[m].ring);break}return f}if(i instanceof R){const f=[];for(let y=0;y<i.paths.length;y++){const m=q({paths:[i.paths[y]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(m)}return f}if(n[0]instanceof W){const f=j(P(n[0]),e.spatialReference);for(let y=0;y<f.points.length;y++)a.push(f.getPoint(y));return a}return null})},t.functions.issimple=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return Mn(n[0])})},t.functions.simplify=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return rn(n[0])})},t.functions.convexhull=function(e,r){return t.standardFunctionAsync(e,r,(c,s,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new l(e,u.InvalidParameter,r);return Tn(n[0])})},t.functions.getuser=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{h(n,0,2,e,r);let a=w(n[1],""),i=a===!0;if(a=a===!0||a===!1?"":L(a),n.length===0||n[0]instanceof Q){let y=null;y=e.services&&e.services.portal?e.services.portal:E.getDefault(),n.length>0&&(y=Y(n[0],y));const m=await tn(y,a,i);if(m){const v=JSON.parse(JSON.stringify(m));for(const g of["lastLogin","created","modified"])v[g]!==void 0&&v[g]!==null&&(v[g]=new Date(v[g]));return D.convertObjectToArcadeDictionary(v,C(e))}return null}let f=null;if(J(n[0])&&(f=n[0]),f){if(i=!1,a)return null;await f.load();const y=await f.getOwningSystemUrl();if(!y){if(!a){const g=await f.getIdentityUser();return g?D.convertObjectToArcadeDictionary({username:g},C(e)):null}return null}let m=null;m=e.services&&e.services.portal?e.services.portal:E.getDefault(),m=Y(new Q(y),m);const v=await tn(m,a,i);if(v){const g=JSON.parse(JSON.stringify(v));for(const U of["lastLogin","created","modified"])g[U]!==void 0&&g[U]!==null&&(g[U]=new Date(g[U]));return D.convertObjectToArcadeDictionary(g,C(e))}return null}throw new l(e,u.InvalidParameter,r)})}),t.functions.nearestcoordinate=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new l(e,u.InvalidParameter,r);if(!(n[1]instanceof x||n[1]===null))throw new l(e,u.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const a=await Un(n[0],n[1]);return a===null?null:D.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},C(e),!1,!0)})},t.functions.nearestvertex=function(e,r){return t.standardFunctionAsync(e,r,async(c,s,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new l(e,u.InvalidParameter,r);if(!(n[1]instanceof x||n[1]===null))throw new l(e,u.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const a=await Ln(n[0],n[1]);return a===null?null:D.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},C(e),!1,!0)})}}export{Bn as registerFunctions};
