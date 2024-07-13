import{e as St}from"./deduplicate-6ede85a9.js";import{H as F}from"./InterleavedLayout-81eab27c.js";import{e as l}from"./VertexAttribute-c2df436e.js";import{C as V}from"./enums-2e633670.js";import{t as Ot}from"./VertexElementDescriptor-2925c6af.js";import{aV as T,bH as tt,i0 as Et,fo as k,de as rt,aR as K,h_ as At,jg as Tt,aS as dt,df as it,aU as ht,cV as Nt,a4 as wt,di as $t,iM as Mt}from"./index-5bdaa4d1.js";function et(t,e=0){const s=t.stride;return Array.from(t.fields.keys()).map(o=>{var a;const r=t.fields.get(o),c=r.constructor.ElementCount,d=yt(r.constructor.ElementType),h=r.offset,g=((a=r.optional)==null?void 0:a.glNormalized)??!1;return new Ot(o,c,d,h,s,g,e)})}function yt(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:V.UNSIGNED_BYTE,u16:V.UNSIGNED_SHORT,u32:V.UNSIGNED_INT,i8:V.BYTE,i16:V.SHORT,i32:V.INT,f32:V.FLOAT},Rt=F().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(),Pt=F().vec2u8(l.SIDENESS).freeze();et(Pt);const j=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze(),Y=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze();l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMALCOMPRESSED,l.NORMAL2COMPRESSED,l.SIDENESS;let Vt=class{constructor(){this.position0=T(),this.position1=T(),this.faceNormal0=T(),this.faceNormal1=T(),this.componentIndex=0,this.cosAngle=0}};const H=-1;function xt(t,e,s){const o=t.vertices.position,r=t.vertices.componentIndex,c=S.position0,d=S.position1,h=S.faceNormal0,g=S.faceNormal1,{edges:a,normals:p}=Ct(t),m=a.length/4,E=e.allocate(m);let P=0;const B=m,w=s==null?void 0:s.allocate(B);let _=0,n=0,i=0;z.length=0;for(let N=0;N<m;++N){const M=4*N;o.getVec(a.data[M],c),o.getVec(a.data[M+1],d);const D=z.pushNew();D.index=4*N,D.length=Et(c,d)}z.sort((N,M)=>M.length-N.length);const f=new Array,u=new Array;z.forAll(({length:N,index:M})=>{const D=a.data[M],It=a.data[M+1],nt=a.data[M+2],st=a.data[M+3],ot=st===H;if(o.getVec(D,c),o.getVec(It,d),ot){const A=3*nt;k(h,p.data[A],p.data[A+1],p.data[A+2]),rt(g,h),S.componentIndex=r.get(D),S.cosAngle=K(h,g)}else{let A=3*nt;if(k(h,p.data[A],p.data[A+1],p.data[A+2]),A=3*st,k(g,p.data[A],p.data[A+1],p.data[A+2]),S.componentIndex=r.get(D),S.cosAngle=K(h,g),Lt(S,_t))return;S.cosAngle<-.9999&&rt(g,h)}n+=N,i++,ot||Dt(S,Ut)?(e.write(E,P++,S),f.push(N)):bt(S,gt)&&(w&&s&&s.write(w,_++,S),u.push(N))});const O=new Float32Array(f.reverse()),$=new Float32Array(u.reverse()),y=w&&s?{instancesData:w.slice(0,_),lodInfo:{lengths:$}}:void 0;return{regular:{instancesData:E.slice(0,P),lodInfo:{lengths:O}},silhouette:y,averageEdgeLength:n/i}}function Dt(t,e){return t.cosAngle<e}function Lt(t,e){return t.cosAngle>e}function bt(t,e){const s=At(t.cosAngle);return Tt(at,t.position1,t.position0),s*(K(dt(Bt,t.faceNormal0,t.faceNormal1),at)>0?-1:1)>e}function Ct(t){const e=t.faces.length/3,s=t.faces,o=t.neighbors,r=t.vertices.position;I.length=G.length=0;for(let c=0;c<e;c++){const d=3*c,h=o[d],g=o[d+1],a=o[d+2],p=s[d],m=s[d+1],E=s[d+2];r.getVec(p,x),r.getVec(m,U),r.getVec(E,X),it(U,U,x),it(X,X,x),dt(x,U,X),ht(x,x),G.pushArray(x),(h===H||p<m)&&(I.push(p),I.push(m),I.push(c),I.push(h)),(g===H||m<E)&&(I.push(m),I.push(E),I.push(c),I.push(g)),(a===H||E<p)&&(I.push(E),I.push(p),I.push(c),I.push(a))}return{edges:I,normals:G}}class Ft{constructor(){this.index=0,this.length=0}}const z=new tt({allocator:t=>t||new Ft,deallocator:null}),I=new tt({deallocator:null}),G=new tt({deallocator:null}),S=new Vt,Bt=T(),at=T(),x=T(),U=T(),X=T(),gt=Nt(4),_t=Math.cos(gt),zt=Nt(35),Ut=Math.cos(zt);function ct(t,e,s){const o=e/3,r=new Uint32Array(s+1),c=new Uint32Array(s+1),d=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<o;n++){const i=t[3*n],f=t[3*n+1],u=t[3*n+2];d(i,f),d(f,u),d(u,i)}let h=0,g=0;for(let n=0;n<s;n++){const i=r[n+1],f=c[n+1];r[n+1]=h,c[n+1]=g,h+=i,g+=f}const a=new Uint32Array(6*o),p=r[s],m=(n,i,f)=>{if(n<i){const u=r[n+1]++;a[2*u]=i,a[2*u+1]=f}else{const u=c[i+1]++;a[2*p+2*u]=n,a[2*p+2*u+1]=f}};for(let n=0;n<o;n++){const i=t[3*n],f=t[3*n+1],u=t[3*n+2];m(i,f,n),m(f,u,n),m(u,i,n)}const E=(n,i)=>{const f=2*n,u=i-n;for(let O=1;O<u;O++){const $=a[f+2*O],y=a[f+2*O+1];let N=O-1;for(;N>=0&&a[f+2*N]>$;N--)a[f+2*N+2]=a[f+2*N],a[f+2*N+3]=a[f+2*N+1];a[f+2*N+2]=$,a[f+2*N+3]=y}};for(let n=0;n<s;n++)E(r[n],r[n+1]),E(p+c[n],p+c[n+1]);const P=new Int32Array(3*o),B=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,w=(n,i)=>{const f=B(n,i);P[3*i+f]=-1},_=(n,i,f,u)=>{const O=B(n,i);P[3*i+O]=u;const $=B(f,u);P[3*u+$]=i};for(let n=0;n<s;n++){let i=r[n];const f=r[n+1];let u=c[n];const O=c[n+1];for(;i<f&&u<O;){const $=a[2*i],y=a[2*p+2*u];$===y?(_(n,a[2*i+1],y,a[2*p+2*u+1]),i++,u++):$<y?(w(n,a[2*i+1]),i++):(w(y,a[2*p+2*u+1]),u++)}for(;i<f;)w(n,a[2*i+1]),i++;for(;u<O;)w(a[2*p+2*u],a[2*p+2*u+1]),u++}return P}function J(t,e,s,o,r,c=2){const d=1/(Math.abs(s)+Math.abs(o)+Math.abs(r)),h=s*d,g=o*d,a=r<=0?(h>=0?1:-1)*(1-Math.abs(g)):h,p=r<=0?(g>=0?1:-1)*(1-Math.abs(h)):g,m=e*c;t[m]=lt(a),t[m+1]=lt(p)}function lt(t){return wt(Math.round(32767*t),-32767,32767)}const q=.7;let mt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?Wt:Xt}write(e,s,o){W.seed=this._edgeHashFunction(o);const r=W.getIntRange(0,255),c=W.getIntRange(0,this.settings.variants-1),d=W.getFloat(),h=255*(.5*Ht(-(1-Math.min(d/q,1))+Math.max(0,d-q)/(1-q),1.2)+.5);e.position0.setVec(s,o.position0),e.position1.setVec(s,o.position1),e.componentIndex.set(s,o.componentIndex),e.variantOffset.set(s,r),e.variantStroke.set(s,c),e.variantExtension.set(s,h)}};const v=new Float32Array(6),R=new Uint32Array(v.buffer),C=new Uint32Array(1);function Xt(t){return v[0]=t.position0[0],v[1]=t.position0[1],v[2]=t.position0[2],v[3]=t.position1[0],v[4]=t.position1[1],v[5]=t.position1[2],C[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],C[0]}function Wt(t){const e=v;e[0]=L(t.position0[0]),e[1]=L(t.position0[1]),e[2]=L(t.position0[2]),e[3]=L(t.position1[0]),e[4]=L(t.position1[1]),e[5]=L(t.position1[2]),C[0]=5381;for(let s=0;s<R.length;s++)C[0]=31*C[0]+R[s];return C[0]}const ut=1e4;function L(t){return Math.round(t*ut)/ut}function Ht(t,e){return Math.abs(t)**e*Math.sign(t)}class Q{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return j.createBuffer(e)}write(e,s,o){this._commonWriter.write(e,s,o),$t(b,o.faceNormal0,o.faceNormal1),ht(b,b);const{typedBuffer:r,typedBufferStride:c}=e.normalCompressed;J(r,s,b[0],b[1],b[2],c)}}Q.Layout=j,Q.glLayout=et(j,1);class Z{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return Y.createBuffer(e)}write(e,s,o){this._commonWriter.write(e,s,o);{const{typedBuffer:r,typedBufferStride:c}=e.normalCompressed;J(r,s,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],c)}{const{typedBuffer:r,typedBufferStride:c}=e.normal2Compressed;J(r,s,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],c)}}}Z.Layout=Y,Z.glLayout=et(Y,1);const b=T(),W=new Mt;function ee(t){const e=kt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ft.updateSettings(t.writerSettings),pt.updateSettings(t.writerSettings),xt(e,ft,pt)}function kt(t,e,s,o){if(e){const d=ct(s,o,t.count);return new Gt(s,o,d,t)}const r=St(t.buffer,t.stride/4,{originalIndices:s,originalIndicesLength:o}),c=ct(r.indices,o,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:Rt.createView(r.buffer)}}class Gt{constructor(e,s,o,r){this.faces=e,this.facesLength=s,this.neighbors=o,this.vertices=r}}const ft=new Q,pt=new Z,ne=F().vec3f(l.POSITION0).vec3f(l.POSITION1),se=F().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{Rt as E,ne as d,ee as f,se as m,xt as p,kt as u};
