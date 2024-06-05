import{e as It}from"./deduplicate-cf6e1df2.js";import{H as D}from"./InterleavedLayout-98c084fc.js";import{e as f}from"./VertexAttribute-0e674613.js";import{C as V}from"./enums-bdecffa2.js";import{t as Ot}from"./VertexElementDescriptor-2925c6af.js";import{i7 as nt,ig as At,hG as dt,eL as W,cN as ot,cq as z,ih as ht,ii as St,cr as ft,cO as rt,ct as ut,aA as w,cR as Tt,i6 as Et}from"./index-7df220b7.js";function j(t,e=0){const o=t.stride;return Array.from(t.fields.keys()).map(s=>{const r=t.fields.get(s),c=r.constructor.ElementCount,g=wt(r.constructor.ElementType),a=r.offset,p=!(!r.optional||!r.optional.glNormalized);return new Ot(s,c,g,a,o,p,e)})}function wt(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:V.UNSIGNED_BYTE,u16:V.UNSIGNED_SHORT,u32:V.UNSIGNED_INT,i8:V.BYTE,i16:V.SHORT,i32:V.INT,f32:V.FLOAT},$t=D().vec3f(f.POSITION).u16(f.COMPONENTINDEX),yt=D().vec2u8(f.SIDENESS);j(yt);const G=D().vec3f(f.POSITION0).vec3f(f.POSITION1).vec3f(f.NORMAL).u16(f.COMPONENTINDEX).u8(f.VARIANTOFFSET,{glNormalized:!0}).u8(f.VARIANTSTROKE).u8(f.VARIANTEXTENSION,{glNormalized:!0}),K=D().vec3f(f.POSITION0).vec3f(f.POSITION1).vec3f(f.NORMALA).vec3f(f.NORMALB).u16(f.COMPONENTINDEX).u8(f.VARIANTOFFSET,{glNormalized:!0}).u8(f.VARIANTSTROKE).u8(f.VARIANTEXTENSION,{glNormalized:!0});f.POSITION0,f.POSITION1,f.COMPONENTINDEX,f.VARIANTOFFSET,f.VARIANTSTROKE,f.VARIANTEXTENSION,f.NORMAL,f.NORMALA,f.NORMALB,f.SIDENESS;const L=-1;var st;function Rt(t,e,o,s=Dt){const r=t.vertices.position,c=t.vertices.componentIndex,g=nt(s.anglePlanar),a=nt(s.angleSignificantEdge),p=Math.cos(a),l=Math.cos(g),u=k.edge,O=u.position0,A=u.position1,I=u.faceNormal0,v=u.faceNormal1,d=xt(t),$=Mt(t),n=$.length/4,i=e.allocate(n);let N=0;const m=n,h=o.allocate(m);let E=0,y=0,S=0;const Q=At(0,n),_=new Float32Array(n);_.forEach((P,T,F)=>{r.getVec($[4*T],O),r.getVec($[4*T+1],A),F[T]=dt(O,A)}),Q.sort((P,T)=>_[T]-_[P]);const Z=new Array,tt=new Array;for(let P=0;P<n;P++){const T=Q[P],F=_[T],H=$[4*T],pt=$[4*T+1],M=$[4*T+2],C=$[4*T+3],et=C===L;if(r.getVec(H,O),r.getVec(pt,A),et)W(I,d[3*M],d[3*M+1],d[3*M+2]),ot(v,I),u.componentIndex=c.get(H),u.cosAngle=z(I,v);else{if(W(I,d[3*M],d[3*M+1],d[3*M+2]),W(v,d[3*C],d[3*C+1],d[3*C+2]),u.componentIndex=c.get(H),u.cosAngle=z(I,v),Lt(u,l))continue;u.cosAngle<-.9999&&ot(v,I)}y+=F,S++,et||Vt(u,p)?(e.write(i,N++,u),Z.push(F)):Pt(u,g)&&(o.write(h,E++,u),tt.push(F))}const Nt=new Float32Array(Z.reverse()),mt=new Float32Array(tt.reverse());return{regular:{instancesData:e.trim(i,N),lodInfo:{lengths:Nt}},silhouette:{instancesData:o.trim(h,E),lodInfo:{lengths:mt}},averageEdgeLength:y/S}}function Vt(t,e){return t.cosAngle<e}function Lt(t,e){return t.cosAngle>e}function Pt(t,e){const o=ht(t.cosAngle),s=k.fwd,r=k.ortho;return St(s,t.position1,t.position0),o*(z(ft(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function Mt(t){const e=t.faces.length/3,o=t.faces,s=t.neighbors;let r=0;for(let a=0;a<e;a++){const p=s[3*a],l=s[3*a+1],u=s[3*a+2],O=o[3*a],A=o[3*a+1],I=o[3*a+2];r+=p===L||O<A?1:0,r+=l===L||A<I?1:0,r+=u===L||I<O?1:0}const c=new Int32Array(4*r);let g=0;for(let a=0;a<e;a++){const p=s[3*a],l=s[3*a+1],u=s[3*a+2],O=o[3*a],A=o[3*a+1],I=o[3*a+2];(p===L||O<A)&&(c[g++]=O,c[g++]=A,c[g++]=a,c[g++]=p),(l===L||A<I)&&(c[g++]=A,c[g++]=I,c[g++]=a,c[g++]=l),(u===L||I<O)&&(c[g++]=I,c[g++]=O,c[g++]=a,c[g++]=u)}return c}function xt(t){const e=t.faces.length/3,o=t.vertices.position,s=t.faces,r=X.v0,c=X.v1,g=X.v2,a=new Float32Array(3*e);for(let p=0;p<e;p++){const l=s[3*p],u=s[3*p+1],O=s[3*p+2];o.getVec(l,r),o.getVec(u,c),o.getVec(O,g),rt(c,c,r),rt(g,g,r),ft(r,c,g),ut(r,r),a[3*p]=r[0],a[3*p+1]=r[1],a[3*p+2]=r[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(st||(st={}));const k={edge:{position0:w(),position1:w(),faceNormal0:w(),faceNormal1:w(),componentIndex:0,cosAngle:0},ortho:w(),fwd:w()},X={v0:w(),v1:w(),v2:w()},Dt={anglePlanar:4,angleSignificantEdge:35};function it(t,e,o){const s=e/3,r=new Uint32Array(o+1),c=new Uint32Array(o+1),g=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<s;n++){const i=t[3*n],N=t[3*n+1],m=t[3*n+2];g(i,N),g(N,m),g(m,i)}let a=0,p=0;for(let n=0;n<o;n++){const i=r[n+1],N=c[n+1];r[n+1]=a,c[n+1]=p,a+=i,p+=N}const l=new Uint32Array(6*s),u=r[o],O=(n,i,N)=>{if(n<i){const m=r[n+1]++;l[2*m]=i,l[2*m+1]=N}else{const m=c[i+1]++;l[2*u+2*m]=n,l[2*u+2*m+1]=N}};for(let n=0;n<s;n++){const i=t[3*n],N=t[3*n+1],m=t[3*n+2];O(i,N,n),O(N,m,n),O(m,i,n)}const A=(n,i)=>{const N=2*n,m=i-n;for(let h=1;h<m;h++){const E=l[N+2*h],y=l[N+2*h+1];let S=h-1;for(;S>=0&&l[N+2*S]>E;S--)l[N+2*S+2]=l[N+2*S],l[N+2*S+3]=l[N+2*S+1];l[N+2*S+2]=E,l[N+2*S+3]=y}};for(let n=0;n<o;n++)A(r[n],r[n+1]),A(u+c[n],u+c[n+1]);const I=new Int32Array(3*s),v=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,d=(n,i)=>{const N=v(n,i);I[3*i+N]=-1},$=(n,i,N,m)=>{const h=v(n,i);I[3*i+h]=m;const E=v(N,m);I[3*m+E]=i};for(let n=0;n<o;n++){let i=r[n];const N=r[n+1];let m=c[n];const h=c[n+1];for(;i<N&&m<h;){const E=l[2*i],y=l[2*u+2*m];E===y?($(n,l[2*i+1],y,l[2*u+2*m+1]),i++,m++):E<y?(d(n,l[2*i+1]),i++):(d(y,l[2*u+2*m+1]),m++)}for(;i<N;)d(n,l[2*i+1]),i++;for(;m<h;)d(l[2*u+2*m],l[2*u+2*m+1]),m++}return I}let gt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?_t:Ft}write(e,o,s){const r=this._edgeHashFunction(s);b.seed=r;const c=b.getIntRange(0,255),g=b.getIntRange(0,this.settings.variants-1),a=.7,p=b.getFloat(),l=255*(.5*Ct(-(1-Math.min(p/a,1))+Math.max(0,p-a)/(1-a),1.2)+.5);e.position0.setVec(o,s.position0),e.position1.setVec(o,s.position1),e.componentIndex.set(o,s.componentIndex),e.variantOffset.set(o,c),e.variantStroke.set(o,g),e.variantExtension.set(o,l)}trim(e,o){return e.slice(0,o)}};const J=new Float32Array(6),B=new Uint32Array(J.buffer),R=new Uint32Array(1);function Ft(t){const e=J;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],R[0]=5381;for(let o=0;o<B.length;o++)R[0]=31*R[0]+B[o];return R[0]}function _t(t){const e=J;e[0]=x(t.position0[0]),e[1]=x(t.position0[1]),e[2]=x(t.position0[2]),e[3]=x(t.position1[0]),e[4]=x(t.position1[1]),e[5]=x(t.position1[2]),R[0]=5381;for(let o=0;o<B.length;o++)R[0]=31*R[0]+B[o];return R[0]}const ct=1e4;function x(t){return Math.round(t*ct)/ct}function Ct(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}let q=class{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return G.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),Tt(U,s.faceNormal0,s.faceNormal1),ut(U,U),e.normal.setVec(o,U)}trim(e,o){return this._commonWriter.trim(e,o)}};q.Layout=G,q.glLayout=j(G,1);class Y{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),e.normalA.setVec(o,s.faceNormal0),e.normalB.setVec(o,s.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}Y.Layout=K,Y.glLayout=j(K,1);const U=w(),b=new Et;function qt(t){const e=Ut(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return at.updateSettings(t.writerSettings),lt.updateSettings(t.writerSettings),Rt(e,at,lt)}function Ut(t,e,o,s){if(e){const g=it(o,s,t.count);return new bt(o,s,g,t)}const r=It(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:s}),c=it(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:$t.createView(r.buffer)}}class bt{constructor(e,o,s,r){this.faces=e,this.facesLength=o,this.neighbors=s,this.vertices=r}}const at=new q,lt=new Y,Yt=D().vec3f(f.POSITION0).vec3f(f.POSITION1),jt=D().vec3f(f.POSITION0).vec3f(f.POSITION1).u16(f.COMPONENTINDEX);export{$t as T,Yt as d,qt as f,jt as m,Rt as p,Ut as u};
