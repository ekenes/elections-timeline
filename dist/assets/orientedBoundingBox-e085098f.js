import{e4 as et,e6 as lt,aF as d,gT as kt,aG as St,iv as Kt,ei as Z,hh as q,iw as mt,ix as At,iy as Ut,iz as pt,ib as ta,gL as aa,iA as sa,iB as Ct,dI as jt,iC as Rt,iD as ia,eV as Xt,eU as ea,iE as na,iF as oa,iG as ra,eT as ha,ek as Ft,hi as gt,iH as ca,iI as ua,gd as Tt}from"./index-02eff6e6.js";import{t as da,e as fa}from"./mat3f64-e19cdcb8.js";import{e as la}from"./mat4f64-9a8384aa.js";import{X as ma,O as U,x as _a}from"./quat-eaa78af8.js";import{r as Bt,e as xt}from"./quatf64-216ddd5a.js";import{a as _t}from"./spatialReferenceEllipsoidUtils-16e47544.js";import{m as ga}from"./computeTranslationToOriginAndRotation-e412a98d.js";import{c as vt,o as ba,O as It}from"./plane-53ccce62.js";class yt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class Ja extends yt{constructor(t,a,s,n=!1,o=s){super(t,s,o),this.indices=a,this.exclusive=n}}const nt=1e-6,ot=d(),bt=d();function $a(i,t){const{data:a,size:s}=i,n=a.length/s;if(n<=0)return;const o=new wa(i);wt(ot,o.minProj,o.maxProj),dt(ot,ot,.5),y(bt,o.maxProj,o.minProj);const r=Nt(bt),c=new qa;c.quality=r,n<14&&(i=new yt(new Float64Array(o.buffer,112,42),3));const e=d(),h=d(),b=d(),m=d(),S=d(),A=d(),$=d();switch(Ma(o,i,$,e,h,b,m,S,A,c)){case 1:return void Ht(ot,bt,t);case 2:return void pa(i,m,t)}Pa(i,$,e,h,b,m,S,A,c),Dt(i,c.b0,c.b1,c.b2,at,st);const E=d();y(E,st,at),c.quality=Nt(E),c.quality<r?Wt(c.b0,c.b1,c.b2,at,st,E,t):Ht(ot,bt,t)}function Ma(i,t,a,s,n,o,r,c,e,h){return ja(i,s,n),qt(s,n)<nt?1:(y(r,s,n),g(r,r),xa(t,s,r,o)<nt?2:(y(c,n,o),g(c,c),y(e,o,s),g(e,e),V(a,c,r),g(a,a),W(t,a,r,c,e,h),0))}const rt=d(),ht=d(),I=d(),p=d(),N=d(),Y=d(),R=d(),X=d();function Pa(i,t,a,s,n,o,r,c,e){za(i,t,a,rt,ht),rt[0]!==void 0&&(y(I,rt,a),g(I,I),y(p,rt,s),g(p,p),y(N,rt,n),g(N,N),V(Y,p,o),g(Y,Y),V(R,N,r),g(R,R),V(X,I,c),g(X,X),W(i,Y,o,p,I,e),W(i,R,r,N,p,e),W(i,X,c,I,N,e)),ht[0]!==void 0&&(y(I,ht,a),g(I,I),y(p,ht,s),g(p,p),y(N,ht,n),g(N,N),V(Y,p,o),g(Y,Y),V(R,N,r),g(R,R),V(X,I,c),g(X,X),W(i,Y,o,p,I,e),W(i,R,r,N,p,e),W(i,X,c,I,N,e))}function ja(i,t,a){let s=qt(i.maxVert[0],i.minVert[0]),n=0;for(let o=1;o<7;++o){const r=qt(i.maxVert[o],i.minVert[o]);r>s&&(s=r,n=o)}z(t,i.minVert[n]),z(a,i.maxVert[n])}const w=[0,0,0];function xa(i,t,a,s){const{data:n,size:o}=i;let r=Number.NEGATIVE_INFINITY,c=0;for(let e=0;e<n.length;e+=o){w[0]=n[e]-t[0],w[1]=n[e+1]-t[1],w[2]=n[e+2]-t[2];const h=a[0]*w[0]+a[1]*w[1]+a[2]*w[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=w[0]*w[0]+w[1]*w[1]+w[2]*w[2]-h*h/b;m>r&&(r=m,c=e)}return z(s,n,c),r}const _=kt();function za(i,t,a,s,n){Ia(i,t,_,n,s);const o=Jt(a,t);_[1]-nt<=o&&(s[0]=void 0),_[0]+nt>=o&&(n[0]=void 0)}const Qt=d(),Et=d(),Gt=d(),J=d(),L=d(),$t=d();function W(i,t,a,s,n,o){if(Zt(t)<nt)return;V(Qt,a,t),V(Et,s,t),V(Gt,n,t),tt(i,t,_),L[1]=_[0],J[1]=_[1],$t[1]=J[1]-L[1];const r=[a,s,n],c=[Qt,Et,Gt];for(let e=0;e<3;++e){tt(i,r[e],_),L[0]=_[0],J[0]=_[1],tt(i,c[e],_),L[2]=_[0],J[2]=_[1],$t[0]=J[0]-L[0],$t[2]=J[2]-L[2];const h=Nt($t);h<o.quality&&(z(o.b0,r[e]),z(o.b1,t),z(o.b2,c[e]),o.quality=h)}}const Sa=d();function tt(i,t,a){const{data:s,size:n}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){const r=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],r),a[1]=Math.max(a[1],r)}}function Ia(i,t,a,s,n){const{data:o,size:r}=i;z(s,o),z(n,s),a[0]=Jt(Sa,t),a[1]=a[0];for(let c=r;c<o.length;c+=r){const e=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];e<a[0]&&(a[0]=e,z(s,o,c)),e>a[1]&&(a[1]=e,z(n,o,c))}}function Ht(i,t,a){a.center=i,a.halfSize=et(t,t,.5),a.quaternion=Bt}const G=d(),k=d(),ct=d(),at=d(),st=d(),Ot=d();function pa(i,t,a){z(G,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?G[0]=0:Math.abs(t[1])>Math.abs(t[2])?G[1]=0:G[2]=0,Zt(G)<nt&&(G[0]=G[1]=G[2]=1),V(k,t,G),g(k,k),V(ct,t,k),g(ct,ct),Dt(i,t,k,ct,at,st),y(Ot,st,at),Wt(t,k,ct,at,st,Ot,a)}function Dt(i,t,a,s,n,o){tt(i,t,_),n[0]=_[0],o[0]=_[1],tt(i,a,_),n[1]=_[0],o[1]=_[1],tt(i,s,_),n[2]=_[0],o[2]=_[1]}const B=d(),ut=d(),Mt=d(),v=da(1,0,0,0,1,0,0,0,1),Na=xt();function Wt(i,t,a,s,n,o,r){v[0]=i[0],v[1]=i[1],v[2]=i[2],v[3]=t[0],v[4]=t[1],v[5]=t[2],v[6]=a[0],v[7]=a[1],v[8]=a[2],r.quaternion=ya(Na,v),wt(B,s,n),dt(B,B,.5),dt(ut,i,B[0]),dt(Mt,t,B[1]),wt(ut,ut,Mt),dt(Mt,a,B[2]),r.center=lt(ut,ut,Mt),r.halfSize=et(B,o,.5)}const P=7;let wa=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let e=0;e<P;++e)this.minVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.maxVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const n=new Array(P),o=new Array(P),{data:r,size:c}=t;for(let e=0;e<r.length;e+=c){let h=r[e];h<this.minProj[0]&&(this.minProj[0]=h,n[0]=e),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=e),h=r[e+1],h<this.minProj[1]&&(this.minProj[1]=h,n[1]=e),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=e),h=r[e+2],h<this.minProj[2]&&(this.minProj[2]=h,n[2]=e),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=e),h=r[e]+r[e+1]+r[e+2],h<this.minProj[3]&&(this.minProj[3]=h,n[3]=e),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=e),h=r[e]+r[e+1]-r[e+2],h<this.minProj[4]&&(this.minProj[4]=h,n[4]=e),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=e),h=r[e]-r[e+1]+r[e+2],h<this.minProj[5]&&(this.minProj[5]=h,n[5]=e),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=e),h=r[e]-r[e+1]-r[e+2],h<this.minProj[6]&&(this.minProj[6]=h,n[6]=e),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=e)}for(let e=0;e<P;++e){let h=n[e];z(this.minVert[e],r,h),h=o[e],z(this.maxVert[e],r,h)}}},qa=class{constructor(){this.b0=St(1,0,0),this.b1=St(0,1,0),this.b2=St(0,0,1),this.quality=0}};function Nt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function wt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function y(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function dt(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function z(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],n=t[1],o=t[2],r=a[0],c=a[1],e=a[2];i[0]=n*e-o*c,i[1]=o*r-s*e,i[2]=s*c-n*r}function g(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Zt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function qt(i,t){const a=t[0]-i[0],s=t[1]-i[1],n=t[2]-i[2];return a*a+s*s+n*n}function Jt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ya(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,o=(s+2)%3;let r=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);i[s]=.5*r,r=.5/r,i[3]=(t[3*n+o]-t[3*o+n])*r,i[n]=(t[3*n+s]+t[3*s+n])*r,i[o]=(t[3*o+s]+t[3*s+o])*r}return i}class ft{constructor(t=Kt,a=Ha,s=Bt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return Z(vt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return Z(vt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return ma(ba.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],q(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(O);return U(l,a),q(u,u,l),mt(u,u),H[0]=Math.min(u[0],this._data[3]),H[1]=Math.min(u[1],this._data[4]),H[2]=Math.min(u[2],this._data[5]),At(H,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],o=n+a;return!(Ut(u)>o*o)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],q(u,u,l),mt(u,u),H[0]=Math.min(u[0],s[3]),H[1]=Math.min(u[1],s[4]),H[2]=Math.min(u[2],s[5]),At(H,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(It(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,o=l;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const r=q(u,u,l),c=q(H,a,l);let e=-1/0,h=1/0;const b=this.getHalfSize(it);for(let m=0;m<3;m++){const S=r[m],A=c[m],$=b[m]+s;if(Math.abs(A)>1e-6){const E=($-S)/A,M=(-$-S)/A;e=Math.max(e,Math.min(E,M)),h=Math.min(h,Math.max(E,M))}else if(S>$||S<-$)return!1}return e<=h}projectedArea(t,a,s,n){const o=this.getQuaternion(O);U(l,o),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],q(u,u,l);const r=this.getHalfSize(it),c=u[0]<-r[0]?-1:u[0]>r[0]?1:0,e=u[1]<-r[1]?-1:u[1]>r[1]?1:0,h=u[2]<-r[2]?-1:u[2]>r[2]?1:0,b=Math.abs(c)+Math.abs(e)+Math.abs(h);if(b===0)return 1/0;const m=b===1?4:6,S=6*(c+3*e+9*h+13);pt(K,o),ta(K,K,r);const A=this.getCenter(T);for(let M=0;M<m;M++){const zt=Ca[S+M];Z(u,((1&zt)<<1)-1,(2&zt)-1,((4&zt)>>1)-1),aa(u,u,K),lt(D,A,u),D[3]=1,sa(D,D,a);const Vt=1/Math.max(1e-6,D[3]);C[2*M]=D[0]*Vt,C[2*M+1]=D[1]*Vt}const $=2*m-2;let E=C[0]*(C[3]-C[$+1])+C[$]*(C[1]-C[$-1]);for(let M=2;M<$;M+=2)E+=C[M]*(C[M+3]-C[M-1]);return Math.abs(E)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(O);return U(l,a),q(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(It(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(It(t))}toAaBoundingBox(t){const a=this.getQuaternion(O),s=pt(K,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),r=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-r,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+r}transform(t,a,s,n=0,o=_t(s),r=_t(a),c=Rt(a,r)){if(s===o)a.isGeographic?Qa(this,t,a,n,r):va(this,t,a,n,r,c);else if(a.isWGS84&&(s.isWebMercator||Ct(s)))Fa(a,this,s,t,n);else if(a.isWebMercator&&Ct(s))Ta(a,this,s,t,n);else{const e=this.getCenter(T);e[2]+=n,jt(e,a,0,e,s,0),t.center=e,this!==t&&(t.quaternion=this.getQuaternion(O),t.halfSize=this.getHalfSize(it))}}}const l=xt(),O=xt(),Va=xt(),u=d(),H=d(),D=ia();function Aa(i,t=new ft){return $a(i,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Ca=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)i[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function Ka(i,t,a,s,n){const o=i.getQuaternion(O);n.quaternion=o,U(l,o);const r=i.getCenter(T),c=i.getHalfSize(it);if(s===ra.Global){q(f,r,l),mt(F,f),ha(x,F,c),Xt(x,F,x);const e=Ft(x);lt(x,F,c);const h=Ft(x);if(e<a)n.center=r,Z(f,a,a,a),n.halfSize=lt(f,c,f);else{const b=h>0?1+t/h:1,m=e>0?1+a/e:1,S=(m+b)/2,A=(m-b)/2;et(x,F,A),n.halfSize=gt(x,x,c,S),et(x,F,S),gt(x,x,c,A),ca(f,f),ua(f,x,f);const $=i.getQuaternion(Va);n.center=q(f,f,$)}}else{n.center=gt(f,r,Tt,(a+t)/2);const e=q(f,Tt,l);mt(e,e),n.halfSize=gt(F,c,e,(a-t)/2)}return n}function Fa(i,t,a,s,n){t.getCenter(T),T[2]+=n;const o=_t(a);jt(T,i,0,T,o,0),Lt(o,t,T,a,s)}function Ta(i,t,a,s,n){t.getCenter(T),T[2]+=n,Lt(i,t,T,a,s)}function Lt(i,t,a,s,n){const o=t.getQuaternion(O),r=pt(K,o),c=t.getHalfSize(it);for(let e=0;e<8;++e){for(let h=0;h<3;++h)Q[h]=c[h]*(e&1<<h?-1:1);for(let h=0;h<3;++h){let b=a[h];for(let m=0;m<3;++m)b+=Q[m]*r[3*m+h];Pt[3*e+h]=b}}jt(Pt,i,0,Pt,s,0,8),Aa(Ea,n)}function va(i,t,a,s,n=_t(a),o=Rt(a,n)){i.getCorners(Yt),i.getCenter(Q),Q[2]+=s,ga(a,Q,j,n),t.setCenter(j[12],j[13],j[14]);const r=2*Math.sqrt(1+j[0]+j[5]+j[10]);l[0]=(j[6]-j[9])/r,l[1]=(j[8]-j[2])/r,l[2]=(j[1]-j[4])/r,l[3]=.25*r;const c=i.getQuaternion(O);t.quaternion=_a(l,l,c),U(l,l),Z(F,0,0,0);const e=t.getCenter(Ga);for(const h of Yt)h[2]+=s,o(h,0,h,0),Xt(f,h,e),q(f,f,l),mt(f,f),ea(F,F,f);t.halfSize=F}function Qa(i,t,a,s,n=_t(a)){const o=na(a),r=1+Math.max(0,s)/(o.radius+i.centerZ);i.getCenter(Q),Q[2]+=s,jt(Q,a,0,Q,n,0),t.center=Q;const c=i.getQuaternion(O);t.quaternion=c,U(l,c),Z(f,0,0,1),q(f,f,l);const e=i.getHalfSize(it);Z(f,e[0]*Math.abs(f[0]),e[1]*Math.abs(f[1]),e[2]*Math.abs(f[2])),et(f,f,o.inverseFlattening),lt(f,e,f),t.halfSize=et(f,f,r)}const Pt=new Array(24),Ea=new yt(Pt,3),Q=d(),T=d(),Ga=d(),it=d(),K=fa(),j=la(),Yt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),F=d(),x=d(),Ha=oa(-1,-1,-1);export{ft as I,Ka as L,Ja as t};
