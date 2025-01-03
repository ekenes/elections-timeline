import{d as q}from"./ClassBreaksDefinition-0149e616.js";import{$ as C}from"./index-02eff6e6.js";const w=()=>C.getLogger("esri.rest.support.generateRendererUtils");function x(n,t){return Number(n.toFixed(t))}function E(n,t){const{normalizationTotal:e}=n;return{classBreaks:B(n,t),normalizationTotal:e}}function B(n,t){const e=n.definition,{classificationMethod:a,normalizationType:l,definedInterval:m}=e,s=e.breakCount??1,i=[];let o=n.values;if(o.length===0)return[];o=o.sort((c,r)=>c-r);const[p,d]=t??[o.at(0),o.at(-1)];if(a==="equal-interval")if(o.length>=s){const c=(d-p)/s;let r=p;for(let u=1;u<s;u++){const f=x(p+u*c,6);i.push({minValue:r,maxValue:f,label:g(r,f,l)}),r=f}i.push({minValue:r,maxValue:d,label:g(r,d,l)})}else o.forEach(c=>{i.push({minValue:c,maxValue:c,label:g(c,c,l)})});else if(a==="natural-breaks"){const c=O(o),r=n.valueFrequency||c.valueFrequency,u=U(c.uniqueValues,r,s);let f=p;for(let h=1;h<s;h++)if(c.uniqueValues.length>h){const V=x(c.uniqueValues[u[h]],6);i.push({minValue:f,maxValue:V,label:g(f,V,l)}),f=V}i.push({minValue:f,maxValue:d,label:g(f,d,l)})}else if(a==="quantile")if(o.length>=s&&p!==d){let c=p,r=Math.ceil(o.length/s),u=0;for(let f=1;f<s;f++){let h=r+u-1;h>o.length&&(h=o.length-1),h<0&&(h=0),i.push({minValue:c,maxValue:o[h],label:g(c,o[h],l)}),c=o[h],u+=r,r=Math.ceil((o.length-u)/(s-f))}i.push({minValue:c,maxValue:d,label:g(c,d,l)})}else{let c=-1;for(let r=0;r<o.length;r++){const u=o[r];u!==c&&(c=u,i.push({minValue:c,maxValue:u,label:g(c,u,l)}),c=u)}}else if(a==="standard-deviation"){const c=L(o),r=A(o,c);if(r===0)i.push({minValue:o[0],maxValue:o[0],label:g(o[0],o[0],l)});else{const u=G(p,d,s,c,r)*r;let f=0,h=p;for(let b=s;b>=1;b--){const v=x(c-(b-.5)*u,6);i.push({minValue:h,maxValue:v,label:g(h,v,l)}),h=v,f++}let V=x(c+.5*u,6);i.push({minValue:h,maxValue:V,label:g(h,V,l)}),h=V,f++;for(let b=1;b<=s;b++)V=f===2*s?d:x(c+(b+.5)*u,6),i.push({minValue:h,maxValue:V,label:g(h,V,l)}),h=V,f++}}else if(a==="defined-interval"){if(!m)return i;const[c,r]=t??[o.at(0),o.at(-1)],u=Math.ceil((r-c)/m);let f=c;for(let h=1;h<u;h++){const V=x(c+h*m,6);i.push({minValue:f,maxValue:V,label:g(f,V,l)}),f=V}i.push({minValue:f,maxValue:r,label:g(f,r,l)})}return i}function g(n,t,e){let a=null;return a=n===t?e&&e==="percent-of-total"?n+"%":n.toString():e&&e==="percent-of-total"?n+"% - "+t+"%":n+" - "+t,a}function O(n){const t=[],e=[];let a=Number.MIN_VALUE,l=1,m=-1;for(let s=0;s<n.length;s++){const i=n[s];i===a?(l++,e[m]=l):i!==null&&(t.push(i),a=i,l=1,e.push(l),m++)}return{uniqueValues:t,valueFrequency:e}}function U(n,t,e){const a=n.length,l=[];e>a&&(e=a);for(let s=0;s<e;s++)l.push(Math.round(s*a/e-1));l.push(a-1);let m=S(l,n,t,e);return P(m.mean,m.sdcm,l,n,t,e)&&(m=S(l,n,t,e)),l}function S(n,t,e,a){let l=[],m=[],s=[],i=0;const o=[],p=[];for(let u=0;u<a;u++){const f=T(u,n,t,e);o.push(f.sbMean),p.push(f.sbSdcm),i+=p[u]}let d,c=i,r=!0;for(;r||i<c;){r=!1,l=[];for(let u=0;u<a;u++)l.push(n[u]);for(let u=0;u<a;u++)for(let f=n[u]+1;f<=n[u+1];f++)if(d=t[f],u>0&&f!==n[u+1]&&Math.abs(d-o[u])>Math.abs(d-o[u-1]))n[u]=f;else if(u<a-1&&n[u]!==f-1&&Math.abs(d-o[u])>Math.abs(d-o[u+1])){n[u+1]=f-1;break}c=i,i=0,m=[],s=[];for(let u=0;u<a;u++){m.push(o[u]),s.push(p[u]);const f=T(u,n,t,e);o[u]=f.sbMean,p[u]=f.sbSdcm,i+=p[u]}}if(i>c){for(let u=0;u<a;u++)n[u]=l[u],o[u]=m[u],p[u]=s[u];i=c}return{mean:o,sdcm:p}}function P(n,t,e,a,l,m){let s=0,i=0,o=0,p=0,d=!0;for(let c=0;c<2&&d;c++){c===0&&(d=!1);for(let r=0;r<m-1;r++)for(;e[r+1]+1!==e[r+2];){e[r+1]=e[r+1]+1;const u=T(r,e,a,l);o=u.sbMean,s=u.sbSdcm;const f=T(r+1,e,a,l);if(p=f.sbMean,i=f.sbSdcm,!(s+i<t[r]+t[r+1])){e[r+1]=e[r+1]-1;break}t[r]=s,t[r+1]=i,n[r]=o,n[r+1]=p,d=!0}for(let r=m-1;r>0;r--)for(;e[r]!==e[r-1]+1;){e[r]=e[r]-1;const u=T(r-1,e,a,l);o=u.sbMean,s=u.sbSdcm;const f=T(r,e,a,l);if(p=f.sbMean,i=f.sbSdcm,!(s+i<t[r-1]+t[r])){e[r]=e[r]+1;break}t[r-1]=s,t[r]=i,n[r-1]=o,n[r]=p,d=!0}}return d}function G(n,t,e,a,l){let m=Math.max(a-n,t-a)/l/e;return m=m>=1?1:m>=.5?.5:.25,m}function L(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t/=n.length,t}function A(n,t){let e=0;for(let a=0;a<n.length;a++){const l=n[a];e+=(l-t)*(l-t)}return e/=n.length,Math.sqrt(e)}function T(n,t,e,a){let l=0,m=0;for(let o=t[n]+1;o<=t[n+1];o++){const p=a[o];l+=e[o]*p,m+=p}m<=0&&w().warn("Exception in Natural Breaks calculation");const s=l/m;let i=0;for(let o=t[n]+1;o<=t[n+1];o++)i+=a[o]*(e[o]-s)**2;return{sbMean:s,sbSdcm:i}}const _="<Null>",Y="equal-interval",j=1,Q=5,R=10,H=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,J=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),K=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),W=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function y(n){return n==null||typeof n=="string"&&!n?_:n}function X(n){const t=n.normalizationField!=null||n.normalizationType!=null,e=n.minValue!=null||n.maxValue!=null,a=!!n.sqlExpression&&n.supportsSQLExpression;return!t&&!e&&!a}function bn(n){var s,i;const{outStatisticTypes:t}=n,e=n.returnDistinct?[...new Set(n.values)]:n.values,a=e.filter(o=>o!=null).sort(),l=a.length,m={count:l,min:a[0],max:a[l-1]};return n.supportsNullCount&&(m.nullcount=e.length-l),!n.percentileParams||(s=t==null?void 0:t.include)!=null&&s.length&&!t.include.includes("median")||(i=t==null?void 0:t.exclude)!=null&&i.length&&t.exclude.includes("median")||(m.median=N(e,n.percentileParams)),m}function Z(n){var h,V;const{values:t,useSampleStdDev:e,supportsNullCount:a,outStatisticTypes:l}=n;let m=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,i=null,o=null,p=null,d=null,c=0;const r=n.minValue==null?-1/0:n.minValue,u=n.maxValue==null?1/0:n.maxValue;for(const b of t)Number.isFinite(b)?b>=r&&b<=u&&(i=i===null?b:i+b,m=Math.min(m,b),s=Math.max(s,b),c++):typeof b=="string"&&c++;if(c&&i!=null){o=i/c;let b=0;for(const v of t)Number.isFinite(v)&&v>=r&&v<=u&&(b+=(v-o)**2);d=e?c>1?b/(c-1):0:c>0?b/c:0,p=Math.sqrt(d)}else m=null,s=null;const f={avg:o,count:c,max:s,min:m,stddev:p,sum:i,variance:d};return a&&(f.nullcount=t.length-c),!n.percentileParams||(h=l==null?void 0:l.include)!=null&&h.length&&!l.include.includes("median")||(V=l==null?void 0:l.exclude)!=null&&V.length&&l.exclude.includes("median")||(f.median=N(t,n.percentileParams)),f}function N(n,t){const{fieldType:e,value:a,orderBy:l,isDiscrete:m}=t,s=nn(e,l==="desc");if((n=[...n].filter(u=>u!=null).sort((u,f)=>s(u,f))).length===0)return null;if(a<=0)return n[0];if(a>=1)return n[n.length-1];const i=(n.length-1)*a,o=Math.floor(i),p=o+1,d=i%1,c=n[o],r=n[p];return p>=n.length||m||typeof c=="string"||typeof r=="string"?c:c*(1-d)+r*d}function nn(n,t){if(n){if(J.has(n))return D(t);if(K.has(n))return I(t,!1);if(n==="esriFieldTypeTimestampOffset")return ln(t);const s=I(t,!0);if(n==="esriFieldTypeString")return s;if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID")return(i,o)=>s($(i),$(o))}const e=t?1:-1,a=D(t),l=I(t,!0),m=k(t);return(s,i)=>typeof s=="number"&&typeof i=="number"?a(s,i):typeof s=="string"&&typeof i=="string"?l(s,i):m(s,i)??e}const F=(n,t)=>n==null?t==null?0:1:t==null?-1:null,M=(n,t)=>n==null?t==null?0:-1:t==null?1:null;function k(n){return n?F:M}const tn=(n,t)=>M(n,t)??(n===t?0:new Date(n).getTime()-new Date(t).getTime()),en=(n,t)=>F(n,t)??(n===t?0:new Date(t).getTime()-new Date(n).getTime());function ln(n){return n?en:tn}const an=(n,t)=>M(n,t)??(n===t?0:n<t?-1:1),un=(n,t)=>F(n,t)??(n===t?0:n<t?1:-1);function I(n,t){if(!t)return n?un:an;const e=k(n);return n?(a,l)=>{const m=e(a,l);return m??((a=a.toUpperCase())>(l=l.toUpperCase())?-1:a<l?1:0)}:(a,l)=>{const m=e(a,l);return m??((a=a.toUpperCase())<(l=l.toUpperCase())?-1:a>l?1:0)}}const on=(n,t)=>F(n,t)??t-n,rn=(n,t)=>M(n,t)??n-t;function D(n){return n?on:rn}function $(n){return n.slice(24,36)+n.slice(19,23)+n.slice(16,18)+n.slice(14,16)+n.slice(11,13)+n.slice(9,11)+n.slice(6,8)+n.slice(4,6)+n.slice(2,4)+n.slice(0,2)}function gn(n,t,e){var l,m;let a;for(a in n)(l=t==null?void 0:t.include)!=null&&l.length&&!t.include.includes(a)||(m=t==null?void 0:t.exclude)!=null&&m.length&&t.exclude.includes(a)?delete n[a]:W.includes(a)&&(Number.isFinite(n[a])||(n[a]=null));return e&&["avg","stddev","variance"].forEach(s=>{n[s]!=null&&(n[s]=Math.ceil(n[s]??0))}),n}function vn(n){const t={};for(let e of n)(e==null||typeof e=="string"&&e.trim()==="")&&(e=null),t[e]==null?t[e]={count:1,data:e}:t[e].count++;return{count:t}}function z(n){return(n==null?void 0:n.type)!=="coded-value"?[]:n.codedValues.map(t=>t.code)}function xn(n,t,e,a){const l=n.count,m=[];if(e&&t){const s=[],i=z(t[0]);for(const o of i)if(t[1]){const p=z(t[1]);for(const d of p)if(t[2]){const c=z(t[2]);for(const r of c)s.push(`${y(o)}${a}${y(d)}${a}${y(r)}`)}else s.push(`${y(o)}${a}${y(d)}`)}else s.push(o);for(const o of s)l.hasOwnProperty(o)||(l[o]={data:o,count:0})}for(const s in l){const i=l[s];m.push({value:i.data,count:i.count,label:i.label})}return{uniqueValueInfos:m}}function Tn(n,t,e,a){let l=null;switch(t){case"log":n!==0&&(l=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&a!==0&&(l=n/a*100);break;case"field":Number.isFinite(e)&&e!==0&&(l=n/e);break;case"natural-log":n>0&&(l=Math.log(n));break;case"square-root":n>0&&(l=n**.5)}return l}function sn(n,t,e){const a=mn({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,definedInterval:t.definedInterval,breakCount:t.numClasses||Q});return n=cn(n,t.minValue,t.maxValue),E({definition:a,values:n,normalizationTotal:t.normalizationTotal},e)}function cn(n,t,e){const a=t??-1/0,l=e??1/0;return n.filter(m=>Number.isFinite(m)&&m>=a&&m<=l)}function mn(n){const{breakCount:t,field:e,normalizationField:a,normalizationType:l}=n,m=n.classificationMethod||Y,s=m==="standard-deviation"?n.standardDeviationInterval||j:void 0,i=m==="defined-interval"?n.definedInterval:void 0;return new q({breakCount:t,classificationField:e,classificationMethod:m,normalizationField:l==="field"?a:void 0,normalizationType:l,standardDeviationInterval:s,definedInterval:i})}function yn(n,t){var o,p;let e=n.classBreaks;const a=e.length,l=(o=e[0])==null?void 0:o.minValue,m=(p=e[a-1])==null?void 0:p.maxValue,s=t==="standard-deviation",i=H;return e=e.map(d=>{const c=d.label,r={minValue:d.minValue,maxValue:d.maxValue,label:c};if(s&&c){const u=c.match(i),f=(u==null?void 0:u.map(h=>+h.trim()))??[];f.length===2?(r.minStdDev=f[0],r.maxStdDev=f[1],f[0]<0&&f[1]>0&&(r.hasAvg=!0)):f.length===1&&(c.includes("<")?(r.minStdDev=null,r.maxStdDev=f[0]):c.includes(">")&&(r.minStdDev=f[0],r.maxStdDev=null))}return r}),{minValue:l,maxValue:m,classBreakInfos:e,normalizationTotal:n.normalizationTotal}}function Fn(n,t){const e=fn(n,t);if(e.min==null&&e.max==null)return{bins:[],minValue:e.min,maxValue:e.max,normalizationTotal:t.normalizationTotal};const a=e.intervals,l=e.min??0,m=e.max??0,s=a.map((i,o)=>({minValue:a[o][0],maxValue:a[o][1],count:0}));for(const i of n)if(i!=null&&i>=l&&i<=m){const o=dn(a,i);o>-1&&s[o].count++}return{bins:s,minValue:l,maxValue:m,normalizationTotal:t.normalizationTotal}}function fn(n,t,e=!1){const{field:a,classificationMethod:l,standardDeviationInterval:m,definedInterval:s,normalizationType:i,normalizationField:o,normalizationTotal:p,minValue:d,maxValue:c}=t,r=t.numBins||R;let u=null,f=null,h=null;if((!l||l==="equal-interval")&&!i){if(d!=null&&c!=null)u=d,f=c;else{const V=Z({values:n,minValue:d,maxValue:c,useSampleStdDev:!i,supportsNullCount:X({normalizationType:i,normalizationField:o,minValue:d,maxValue:c})});u=V.min??null,f=V.max??null}h=pn(u??0,f??0,r)}else{const{classBreaks:V}=sn(n,{field:a,normalizationType:i,normalizationField:o,normalizationTotal:p,classificationMethod:l,standardDeviationInterval:m,definedInterval:s,minValue:d,maxValue:c,numClasses:r},d!=null&&c!=null?[d,c]:void 0);u=V[0].minValue,f=V[V.length-1].maxValue,h=V.map(b=>[b.minValue,b.maxValue])}if(e){const V=h.at(-1)[1];h.push([V,V])}return{min:u,max:f,intervals:h}}function dn(n,t){let e=-1;for(let a=n.length-1;a>=0;a--)if(t>=n[a][0]){e=a;break}return e}function pn(n,t,e){const a=(t-n)/e,l=[];let m,s=n;for(let i=1;i<=e;i++)m=s+a,m=Number(m.toFixed(16)),l.push([s,i===e?t:m]),s=m;return l}export{xn as $,Tn as B,gn as C,sn as E,fn as G,dn as L,yn as P,Fn as U,X as d,bn as f,nn as g,vn as k,y as m,Z as p,N as v};