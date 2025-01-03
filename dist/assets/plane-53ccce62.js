import{aB as o,ek as x,em as k,aE as _,aC as l,aF as N,kh as j,gT as z,iD as B,ei as A,e3 as M,e4 as L,e6 as Q,bG as G,a0 as V}from"./index-02eff6e6.js";import{e as J}from"./mat3f64-e19cdcb8.js";import{e as K}from"./mat4f64-9a8384aa.js";import{e as W}from"./quatf64-216ddd5a.js";function X(t,e){return o(t,e)/x(t)}function Nt(t,e){const r=o(t,e)/(x(t)*x(e));return-k(r)}function Et(t,e,r){_(C,t),_(v,e);const n=o(C,v),a=k(n),s=l(C,C,v);return o(s,r)<0?2*Math.PI-a:a}const C=N(),v=N();let S=class E{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&j(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new E(z)}static createVec3f64(){return new E(N)}static createVec4f64(){return new E(B)}static createMat3f64(){return new E(J)}static createMat4f64(){return new E(K)}static createQuatf64(){return new E(W)}get test(){}};const ht=S.createVec2f64(),f=S.createVec3f64(),Y=S.createVec4f64();S.createMat3f64();const Tt=S.createMat4f64(),_t=S.createQuatf64();function Mt(t){const e=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],r=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],n=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(e,r,n))}function St(t,e){const r=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),n=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),a=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return A(t,r,n,a),t}function Z(t,e,r){Math.abs(t[0])>Math.abs(t[1])?A(e,0,1,0):A(e,1,0,0),l(r,t,e),l(e,r,t),_(r,r),_(e,e)}function y(t=g){return[t[0],t[1],t[2],t[3]]}function mt(t=g[0],e=g[1],r=g[2],n=g[3]){return H(t,e,r,n,Y.get())}function tt(t,e){return H(e[0],e[1],e[2],e[3],t)}function $t(t){return t}function H(t,e,r,n,a=y()){return a[0]=t,a[1]=e,a[2]=r,a[3]=n,a}function et(t,e,r){const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function rt(t,e,r,n=y()){const a=r[0]-e[0],s=r[1]-e[1],c=r[2]-e[2],i=t[0]-e[0],D=t[1]-e[1],O=t[2]-e[2],m=s*O-c*D,R=c*i-a*O,q=a*D-s*i,w=m*m+R*R+q*q,p=Math.abs(w-1)>1e-5&&w>1e-12?1/Math.sqrt(w):1;return n[0]=m*p,n[1]=R*p,n[2]=q*p,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function nt(t,e,r,n=0,a=Math.floor(r*(1/3)),s=Math.floor(r*(2/3))){if(r<3)return!1;e($,n);let c=a,i=!1;for(;c<r-1&&!i;)e(T,c),c++,i=!V($,T);if(!i)return!1;for(c=Math.max(c,s),i=!1;c<r&&!i;)e(h,c),c++,M(P,$,T),_(P,P),M(U,T,h),_(U,U),i=!V($,h)&&!V(T,h)&&Math.abs(o(P,U))<at;return i?(rt($,T,h,t),!0):(n!==0||a!==1||s!==2)&&nt(t,e,r,0,1,2)}const at=.99619469809,$=N(),T=N(),h=N(),P=N(),U=N();function gt(t,e,r){return e!==t&&tt(t,e),t[3]=-o(t,r),t}function Dt(t,e,r,n){return l(h,e,t),et(r,h,n)}function Ot(t,e,r,n){return F(b(t,e,M(f.get(),r,e),ct,n))}function Ct(t,e,r){return e!=null&&F(b(t,e.origin,e.direction,st,r))}function Pt(t,e,r){return F(b(t,e.origin,e.vector,u.NONE,r))}function Ut(t,e,r){return F(b(t,e.origin,e.vector,u.CLAMP,r))}function lt(t,e){return d(t,e)>=0}function At(t,e,r){const n=L(f.get(),t,-t[3]),a=it(t,M(f.get(),e,n),f.get());return Q(r,a,n),r}function Ft(t,e,r,n){const a=t,s=f.get(),c=f.get();Z(a,s,c);const i=M(f.get(),r,e),D=X(s,i),O=X(c,i),m=X(a,i);return A(n,D,O,m)}function it(t,e,r){const n=L(f.get(),t,o(t,e));return M(r,e,n),r}function bt(t,e){return Math.abs(d(t,e))}function d(t,e){return o(t,e)+t[3]}var I;function F(t){return t===I.INTERSECTS_INSIDE_OUT||t===I.INTERSECTS_OUTSIDE_IN}function b(t,e,r,n,a){const s=o(t,r),c=d(t,e);if(s===0)return c>=0?I.INSIDE:I.OUTSIDE;let i=-c/s;return n&u.CLAMP&&(i=G(i,0,1)),!(n&u.INFINITE_MIN)&&i<0||!(n&u.INFINITE_MAX)&&i>1?c>=0?I.INSIDE:I.OUTSIDE:(Q(a,e,L(a,r,i)),c>=0?I.INTERSECTS_INSIDE_OUT:I.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(I||(I={}));const g=[0,0,1,0];var u;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(u||(u={}));const ct=u.INFINITE_MIN|u.INFINITE_MAX,st=u.INFINITE_MAX;export{mt as D,At as H,Ft as J,y as M,$t as O,Dt as P,bt as Q,H as U,d as V,Tt as a,Nt as b,f as c,Z as d,X as f,St as g,tt as h,Ot as k,et as l,Mt as m,_t as o,rt as p,Pt as q,Y as r,ht as t,Et as u,nt as v,Ut as w,Ct as x,gt as y,lt as z};
