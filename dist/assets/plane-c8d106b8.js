import{i7 as v,fU as q,bt as E,gr as L,aX as A,df as m,bs as p,bp as S,bq as x,dY as l,d_ as w,aE as y}from"./index-76dad814.js";import{e as H}from"./mat3f64-e19cdcb8.js";import{e as Q}from"./mat4f64-9a8384aa.js";import{e as Y}from"./quatf64-81e039e4.js";class c{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&v(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new c(q)}static createVec3f64(){return new c(E)}static createVec4f64(){return new c(L)}static createMat3f64(){return new c(H)}static createMat4f64(){return new c(Q)}static createQuatf64(){return new c(Y)}get test(){}}c.createVec2f64();const D=c.createVec3f64(),j=c.createVec4f64();c.createMat3f64();const nt=c.createMat4f64(),st=c.createQuatf64();function V(t=_){return[t[0],t[1],t[2],t[3]]}function it(t=_[0],e=_[1],r=_[2],n=_[3]){return X(t,e,r,n,j.get())}function z(t,e){return X(e[0],e[1],e[2],e[3],t)}function It(t){return t}function X(t,e,r,n,s=V()){return s[0]=t,s[1]=e,s[2]=r,s[3]=n,s}function K(t,e,r){const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return r[0]=e[0]*s,r[1]=e[1]*s,r[2]=e[2]*s,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function W(t,e,r,n=V()){const s=r[0]-e[0],N=r[1]-e[1],i=r[2]-e[2],I=t[0]-e[0],R=t[1]-e[1],b=t[2]-e[2],O=N*b-i*R,g=i*I-s*b,U=s*R-N*I,C=O*O+g*g+U*U,P=Math.abs(C-1)>1e-5&&C>1e-12?1/Math.sqrt(C):1;return n[0]=O*P,n[1]=g*P,n[2]=U*P,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function Z(t,e,r,n=0,s=Math.floor(r*(1/3)),N=Math.floor(r*(2/3))){if(r<3)return!1;e(T,n);let i=s,I=!1;for(;i<r-1&&!I;)e(f,i),i++,I=!A(T,f);if(!I)return!1;for(i=Math.max(i,N),I=!1;i<r&&!I;)e(o,i),i++,m(h,T,f),p(h,h),m(M,f,o),p(M,M),I=!A(T,o)&&!A(f,o)&&Math.abs(S(h,M))<k;return I?(W(T,f,o,t),!0):(n!==0||s!==1||N!==2)&&Z(t,e,r,0,1,2)}const k=.99619469809,T=E(),f=E(),o=E(),h=E(),M=E();function ct(t,e,r){return e!==t&&z(t,e),t[3]=-S(t,r),t}function at(t,e,r,n){return x(o,e,t),K(r,o,n)}function ut(t,e,r){return e!=null&&F($(t,e.origin,e.direction,G,r))}function Nt(t,e,r){return F($(t,e.origin,e.vector,u.NONE,r))}function ot(t,e,r){return F($(t,e.origin,e.vector,u.CLAMP,r))}function ft(t,e){return d(t,e)>=0}function Et(t,e,r){const n=l(D.get(),t,-t[3]),s=B(t,m(D.get(),e,n),D.get());return w(r,s,n),r}function B(t,e,r){const n=l(D.get(),t,S(t,e));return m(r,e,n),r}function d(t,e){return S(t,e)+t[3]}var a;function F(t){return t===a.INTERSECTS_INSIDE_OUT||t===a.INTERSECTS_OUTSIDE_IN}function $(t,e,r,n,s){const N=S(t,r),i=d(t,e);if(N===0)return i>=0?a.INSIDE:a.OUTSIDE;let I=-i/N;return n&u.CLAMP&&(I=y(I,0,1)),!(n&u.INFINITE_MIN)&&I<0||!(n&u.INFINITE_MAX)&&I>1?i>=0?a.INSIDE:a.OUTSIDE:(w(s,e,l(s,r,I)),i>=0?a.INTERSECTS_INSIDE_OUT:a.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(a||(a={}));const _=[0,0,1,0];var u;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(u||(u={}));u.INFINITE_MIN|u.INFINITE_MAX;const G=u.INFINITE_MAX;export{it as D,Et as H,V as M,z as O,at as P,X as U,D as c,nt as f,It as h,st as o,Nt as q,Z as v,ot as w,ut as x,ct as y,ft as z};
