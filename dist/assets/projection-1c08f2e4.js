import{cH as g,cI as _,cJ as j,cK as S,cL as E,cM as x,aU as v,cN as R,bf as b,cO as U,cP as W,aq as q,cQ as B,cR as J,cS as Y,aV as L,cT as z,cU as H,cV as I}from"./index-5bdaa4d1.js";import{e as K}from"./mat3f64-e19cdcb8.js";import{o as M,e as Q}from"./mat4f64-9a8384aa.js";import{a as C}from"./spatialReferenceEllipsoidUtils-60cb8a01.js";import{u as V}from"./computeTranslationToOriginAndRotation-4eca75e2.js";import{t as G,o as D}from"./DoubleArray-bf43bbb1.js";import{i as F,T as N}from"./BufferView-8a76b2a2.js";import{f as X,l as $,e as k}from"./vec3-ed78143c.js";import{n as Z}from"./vec4-2b6545d2.js";const mr="Projection may be possible after calling projection.load().";function pr(r,o,t,a){r.error(`Failed to project from (wkid:${o.wkid}) to (wkid:${t.wkid}).${a?" ":""}${a}`)}function Tr(r,o,t,a,e){return O(A.TO_PCPF,F.fromTypedArray(r),u.NORMAL,N.fromTypedArray(o),N.fromTypedArray(t),a,F.fromTypedArray(e))?e:null}function Pr(r,o,t,a,e){return O(A.FROM_PCPF,F.fromTypedArray(r),u.NORMAL,N.fromTypedArray(o),N.fromTypedArray(t),a,F.fromTypedArray(e))?e:null}function yr(r,o,t){return g(r,o,0,t,C(o),0,r.length/3)?t:null}function Ar(r,o,t){return g(r,C(t),0,o,t,0,r.length/3)?o:null}function Fr(r,o,t){return _(f,t),X(o,r,f),j(f)&&$(o,o),o}function Nr(r,o,t){return S(f,t),Z(o,r,f),j(f)&&$(o,o,4),o}function Mr(r,o,t,a){const e=o===u.NORMAL;return w(r,o,t,(s,l)=>{const n=Math.cos(I(s));l[0]=e?n:1/n,l[1]=1},a)}function dr(r,o,t,a){const e=o===u.NORMAL;return w(r,o,t,(s,l)=>{const n=Math.cosh(-s/H.radius);l[0]=1,l[1]=e?n:1/n},a)}function w(r,o,t,a,e){const s=o===u.NORMAL?3:4,l=[0,0];for(let n=0,m=1;n<r.length;n+=s,m+=3){a(t[m],l);const i=r[n]*l[0],p=r[n+1]*l[1],c=r[n+2],P=1/Math.sqrt(i*i+p*p+c*c);e[n]=i*P,e[n+1]=p*P,e[n+2]=c*P,s===4&&(e[n+3]=r[n+3])}return e}function gr(r,o,t,a,e){if(!O(A.TO_PCPF,F.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),u.TANGENT,N.fromTypedArray(o),N.fromTypedArray(t),a,F.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let s=3;s<r.length;s+=4)e[s]=r[s];return e}function Cr(r,o,t,a,e){if(!O(A.FROM_PCPF,F.fromTypedArray(r,16),u.TANGENT,N.fromTypedArray(o),N.fromTypedArray(t),a,F.fromTypedArray(e,16)))return null;for(let s=3;s<r.length;s+=4)e[s]=r[s];return e}var u,A;function h(r,o,t,a,e){switch(V(a,t,y,a),r===A.FROM_PCPF&&z(y,y),o){case u.NORMAL:return _(e,y);case u.TANGENT:return S(e,y)}}function O(r,o,t,a,e,s,l){if(!o)return;const n=a.count,m=C(s);if(tr(s))for(let i=0;i<n;i++)e.getVec(i,d),o.getVec(i,T),E(T,T,h(r,t,d,m,f)),l.setVec(i,T);else for(let i=0;i<n;i++){e.getVec(i,d),o.getVec(i,T);const p=x(a.get(i,1));let c=Math.cos(p);t===u.TANGENT!=(r===A.TO_PCPF)&&(c=1/c),h(r,t,d,m,f),r===A.TO_PCPF?(f[0]*=c,f[1]*=c,f[2]*=c,f[3]*=c,f[4]*=c,f[5]*=c):(f[0]*=c,f[3]*=c,f[6]*=c,f[1]*=c,f[4]*=c,f[7]*=c),E(T,T,f),v(T,T),l.setVec(i,T)}return l}function Or(r){return r.vertexSpace.type==="local"?rr(r):or(r)}function rr({vertexSpace:r,transform:o,inSpatialReference:t,outSpatialReference:a,localMode:e,outPositions:s,positions:l}){const n=r.origin??R,m=r.origin!=null?(o==null?void 0:o.localMatrix)??M:M,i=C(t),p=a.isWebMercator&&e||!b(t,i)?t:i;V(t,n,y,p),U(y,y,m);const c=s??G(l.length);return k(c,l,y),g(c,p,0,c,a,0,c.length/3),c}function or({vertexSpace:r,transform:o,outPositions:t,positions:a,inSpatialReference:e,outSpatialReference:s}){const l=r.origin!=null?(o==null?void 0:o.localMatrix)??M:M,n=t??G(a.length);W(l,M)?D(n,a):k(n,a,l);const m=r.origin??R;if(!q(m,R)){const[i,p,c]=m;for(let P=0;P<n.length;P+=3)n[P]+=i,n[P+1]+=p,n[P+2]+=c}return g(n,e,0,n,s,0,n.length/3)?n:null}function tr(r){return r.isWGS84||B(r)||J(r)||Y(r)}(function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"})(u||(u={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(A||(A={}));const d=L(),T=L(),y=Q(),f=K();export{u as VectorType,mr as loadProjectErrorMessage,pr as logProjectionError,Or as project,Ar as projectFromPCPF,Pr as projectNormalFromPCPF,Tr as projectNormalToPCPF,Cr as projectTangentFromPCPF,gr as projectTangentToPCPF,yr as projectToPCPF,Fr as transformNormal,Nr as transformTangent,Mr as transformVectorENUPlateCarree,dr as transformVectorWMPlateCarree};