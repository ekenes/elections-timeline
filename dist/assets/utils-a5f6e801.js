import{cI as G,ay as O,aK as j,cJ as z,cK as L,cL as E,cM as P,cN as V,cO as _,f as A,cP as D,cQ as K}from"./index-560772b3.js";import{c as T,B as R}from"./utils-c57a916d.js";let m=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function Q(t,e,o,r){const a=G(o)?O(o):null,c=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new j(i.geometry);return z(e,s,s),i.geometry=a?Y(s,c??0,r[0]):s,i})}function S(t,e=18,o,r,a){const c=new Float64Array(r*a);e=Math.round(D(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const N=K(o);for(const{geometry:h,attributes:M}of t){const{x:$,y:u}=h,I=Math.max(0,$-e),g=Math.max(0,u-e),F=Math.min(a,u+e),y=Math.min(r,$+e),p=+N(M);for(let f=g;f<F;f++)for(let d=I;d<y;d++){const b=f*r+d,w=L(d-$,f-u,e)*p,l=c[b]+=w;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function Z(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:r,ss:a,ms:c}=e.groups;return Number(o)*E.hours+Number(r)*E.minutes+Number(a)*E.seconds+Number(c||0)}async function W(t,e,o=!0){if(!e)return[];const{field:r,field2:a,field3:c,fieldDelimiter:i,fieldInfos:s,timeZone:N}=t,h=r&&(s==null?void 0:s.find(l=>l.name.toLowerCase()===r.toLowerCase())),M=!!h&&P(h),$=!!h&&V(h),u=t.valueExpression,I=t.normalizationType,g=t.normalizationField,F=t.normalizationTotal,y=[],p=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await _();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=p?m.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new A(p.spatialReference)}):null}const b=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&b?{fields:b}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const v=w?{...l,layer:w}:l,C=m.createExecContext(v,d,N);n=m.executeFunction(f,C)}else x&&(n=x[r],a?(n=`${T(n)}${i}${T(x[a])}`,c&&(n=`${n}${i}${T(x[c])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:M&&(n=n?Z(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[g]);n=R(n,I,v,F)}y.push(n)}),y}export{W as b,Q as j,Z as w,S as x};
