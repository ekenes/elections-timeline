import{bE as j,az as C,ck as g,g8 as A,ax as f,g9 as N,cm as z,eP as k,c0 as q}from"./index-d2e37ef9.js";import{s as I}from"./Indices-2c5d8aeb.js";import{s as T}from"./sphere-bc6b384d.js";import{v as E}from"./lineSegment-754574f3.js";var O;(function(i){i[i.Layer=0]="Layer",i[i.Object=1]="Object",i[i.Mesh=2]="Mesh",i[i.Line=3]="Line",i[i.Point=4]="Point",i[i.Material=5]="Material",i[i.Texture=6]="Texture",i[i.COUNT=7]="COUNT"})(O||(O={}));class U{constructor(h,p,u,a){this.primitiveIndices=h,this._numIndexPerPrimitive=p,this.indices=u,this.position=a,this._children=void 0,I(h.length>=1),I(u.length%this._numIndexPerPrimitive==0),I(u.length>=h.length*this._numIndexPerPrimitive),I(a.size===3||a.size===4);const{data:n,size:P}=a,_=h.length;let e=P*u[this._numIndexPerPrimitive*h[0]];x.clear(),x.push(e);const t=C(n[e],n[e+1],n[e+2]),s=g(t);for(let o=0;o<_;++o){const m=this._numIndexPerPrimitive*h[o];for(let c=0;c<this._numIndexPerPrimitive;++c){e=P*u[m+c],x.push(e);let r=n[e];t[0]=Math.min(r,t[0]),s[0]=Math.max(r,s[0]),r=n[e+1],t[1]=Math.min(r,t[1]),s[1]=Math.max(r,s[1]),r=n[e+2],t[2]=Math.min(r,t[2]),s[2]=Math.max(r,s[2])}}this.bbMin=t,this.bbMax=s;const l=A(f(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(s[0]-t[0],s[1]-t[1]),s[2]-t[2]);let d=this.radius*this.radius;for(let o=0;o<x.length;++o){e=x.at(o);const m=n[e]-l[0],c=n[e+1]-l[1],r=n[e+2]-l[2],M=m*m+c*c+r*r;if(M<=d)continue;const b=Math.sqrt(M),v=.5*(b-this.radius);this.radius=this.radius+v,d=this.radius*this.radius;const w=v/b;l[0]+=m*w,l[1]+=c*w,l[2]+=r*w}this.center=l,x.clear()}getChildren(){if(this._children||N(this.bbMin,this.bbMax)<=1)return this._children;const h=A(f(),this.bbMin,this.bbMax,.5),p=this.primitiveIndices.length,u=new Uint8Array(p),a=new Array(8);for(let t=0;t<8;++t)a[t]=0;const{data:n,size:P}=this.position;for(let t=0;t<p;++t){let s=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[t];let d=P*this.indices[l],o=n[d],m=n[d+1],c=n[d+2];for(let r=1;r<this._numIndexPerPrimitive;++r){d=P*this.indices[l+r];const M=n[d],b=n[d+1],v=n[d+2];M<o&&(o=M),b<m&&(m=b),v<c&&(c=v)}o<h[0]&&(s|=1),m<h[1]&&(s|=2),c<h[2]&&(s|=4),u[t]=s,++a[s]}let _=0;for(let t=0;t<8;++t)a[t]>0&&++_;if(_<2)return;const e=new Array(8);for(let t=0;t<8;++t)e[t]=a[t]>0?new Uint32Array(a[t]):void 0;for(let t=0;t<8;++t)a[t]=0;for(let t=0;t<p;++t){const s=u[t];e[s][a[s]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)e[t]!==void 0&&this._children.push(new U(e[t],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){x.prune()}}const x=new j({deallocator:null});function V(i){return i?{p0:g(i.p0),p1:g(i.p1),p2:g(i.p2)}:{p0:f(),p1:f(),p2:f()}}function G(i,h,p){return z(y,h,i),z(L,p,i),k(q(y,y,L))/2}new T(E);new T(()=>V());const y=f(),L=f();export{O as e,U as o,G as w};