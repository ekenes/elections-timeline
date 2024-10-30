import{hC as g,fA as p,bh as f,hv as V,aM as l,dE as $,bg as b,bd as X}from"./index-560772b3.js";import{e as C}from"./mat3f64-e19cdcb8.js";import{e as x}from"./mat4f64-9a8384aa.js";import{e as L}from"./quatf64-81e039e4.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&g(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r(p)}static createVec3f64(){return new r(f)}static createVec4f64(){return new r(V)}static createMat3f64(){return new r(C)}static createMat4f64(){return new r(x)}static createQuatf64(){return new r(L)}get test(){}}r.createVec2f64();const Y=r.createVec3f64();r.createVec4f64();r.createMat3f64();const Z=r.createMat4f64(),j=r.createQuatf64();function d(t=Q){return[t[0],t[1],t[2],t[3]]}function B(t){return t}function v(t,e,i,s=d()){const h=i[0]-e[0],I=i[1]-e[1],a=i[2]-e[2],c=t[0]-e[0],w=t[1]-e[1],T=t[2]-e[2],_=I*T-a*w,E=a*c-h*T,P=h*w-I*c,A=_*_+E*E+P*P,F=Math.abs(A-1)>1e-5&&A>1e-12?1/Math.sqrt(A):1;return s[0]=_*F,s[1]=E*F,s[2]=P*F,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function y(t,e,i,s=0,h=Math.floor(i*(1/3)),I=Math.floor(i*(2/3))){if(i<3)return!1;e(o,s);let a=h,c=!1;for(;a<i-1&&!c;)e(n,a),a++,c=!l(o,n);if(!c)return!1;for(a=Math.max(a,I),c=!1;a<i&&!c;)e(N,a),a++,$(u,o,n),b(u,u),$(m,n,N),b(m,m),c=!l(o,N)&&!l(n,N)&&Math.abs(X(u,m))<O;return c?(v(o,n,N,t),!0):(s!==0||h!==1||I!==2)&&y(t,e,i,0,1,2)}const O=.99619469809,o=f(),n=f(),N=f(),u=f(),m=f(),Q=[0,0,1,0];var M;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(M||(M={}));M.INFINITE_MIN|M.INFINITE_MAX;M.INFINITE_MAX;export{d as E,B as F,y as X,Y as c,Z as f,j as o};