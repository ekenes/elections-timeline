import{d5 as Eo,oO as Fa,p4 as Ba,fI as so,d4 as Da,kb as Va,cg as ja,bu as Io,dW as dt,jc as Gt,bt as M,jd as Ha,df as He,gv as ae,bq as Dt,g0 as G,d_ as le,dY as ie,p5 as Ua,i5 as qa,dg as Je,gA as Ao,aX as Po,du as Vt,gt as Qe,c6 as Wa,ex as Ue,p6 as ka,p7 as Ya,dX as ut,bs as wt,gw as Ne,gu as Ft,lP as fe,lQ as K,dc as Lo,p8 as zo,C as g,D as Me,J as No,cd as Za,bI as Ro,bJ as Xa,s as Go,je as Ka,_ as ot,fU as jt,bf as te,gr as Fo,fY as qe,aU as rt,bZ as Ja,c1 as ht,c3 as Qa,c as ei,fV as ti,kg as oi,hP as ai,aE as ii,j8 as ri,lR as ni,bp as si,ds as li,aP as ci,p9 as di,j4 as Bo,Y as ui,bA as Do,im as Vo,hT as lo,pa as jo,jp as mt,a8 as hi,dq as co,dr as mi,db as fi,mX as uo}from"./index-76dad814.js";import{a as pi}from"./devEnvironmentUtils-5c761adb.js";import{t as Et,e as Ht,o as We}from"./mat3f64-e19cdcb8.js";import{o as ft,r as gi,e as vi}from"./mat4f64-9a8384aa.js";import{c as xi,x as Ho,L as bi,i as Uo,O as Ti,E as yi}from"./BufferView-6edfd8ea.js";import{e as Mi,f as wi,l as ho,o as mo}from"./vec3-e5495f74.js";import{n as Ci,s as fo}from"./vec4-228ad9a1.js";import{n as $i,d as Ie,o as Si,g as Oi,t as _i,h as Ei}from"./DefaultMaterial_COLOR_GAMMA-f73cb4f3.js";import{r as It}from"./resourceUtils-13a1a5f1.js";import{t as Ii}from"./NestedMap-b667f687.js";import{t as Ai,l as qo}from"./Indices-9a848066.js";import{t as Pi}from"./requestImageUtils-91fad5e0.js";import{t as Le}from"./Attribute-422e3b38.js";import{t as Li,N as pe,s as j,O as Wo,e as ge,n as at}from"./basicInterfaces-d9412f98.js";import{s as Re}from"./Util-83a8abcd.js";import{_ as zi,$ as Ye,a0 as ko,h as q,a1 as pt,a2 as ue,a3 as Bt,a4 as Ni,a5 as Ri,m as et,a6 as Gi,a7 as Se,a8 as Fi,p as Bi,a9 as Yo,aa as Di,o as J,q as me,d as Ge,ab as Fe,l as Ke,P as Be,r as Zo,ac as Xo,j as Vi,E as $e,ad as ji,ae as Ut,i as Ct,af as Ko,v as qt,x as Wt,O as kt,B as $t,e as Y,c as Hi,k as Jo,ag as Ui,u as gt,ah as Qo,ai as ea,f as vt,g as ta,aj as qi,R as Wi,ak as ki,al as Yi,am as Zi,z as Xi,an as Ki,C as T,F as we,D as Ji,G as Qi,A as At,ao as er,L as tr,M as or,N as oa}from"./DefaultTechniqueConfiguration-1da06caf.js";import{s as aa,E as ia,U as he}from"./sphere-1b1e14cb.js";import{v as ar}from"./lineSegment-436a8ee5.js";import"./plane-c8d106b8.js";import{e as _}from"./VertexAttribute-ace1421c.js";import{H as ir}from"./InterleavedLayout-44628f12.js";import{n as P,t as Yt,b as k,S as rr,u as xt,c as po,o as Pt,r as nr}from"./NormalAttribute.glsl-f975345b.js";import{o as l,r as S,t as ra}from"./interfaces-3cb63efc.js";import{a as Ce}from"./BindType-d21d71dd.js";import{I as sr,L as lr}from"./orientedBoundingBox-f4e61998.js";import{o as cr,r as dr}from"./doublePrecisionUtils-e3c3d0d8.js";import{n as ce}from"./symbolColorUtils-3f162a1b.js";import{T as Zt,d as Xt,_ as ur}from"./renderState-4d62aace.js";function nt(t,e=!1){return t<=Eo?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function hr(t){t.vertex.code.add(l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.int(ce.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.int(ce.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.int(ce.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.int(ce.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function ke(t){if(t==null)return null;const e=t.offset!=null?t.offset:Fa,o=t.rotation!=null?t.rotation:0,a=t.scale!=null?t.scale:Ba,r=Et(1,0,0,0,1,0,e[0],e[1],1),i=Et(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),s=Et(a[0],0,0,0,a[1],0,0,0,1),u=Ht();return so(u,i,s),so(u,r,u),u}let mr=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},fr=class{constructor(e,o,a){this.name=e,this.lodThreshold=o,this.pivotOffset=a,this.stageResources=new mr,this.numberOfVertices=0}};function pr(t){if(t.length<Eo)return Array.from(t);if(Da(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Va(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let gr=class na{constructor(e,o,a){this.primitiveIndices=e,this._numIndexPerPrimitive=o,this.position=a,this._children=void 0,Re(e.length>=1),Re(a.size===3||a.size===4);const{data:r,size:i,indices:s}=a;Re(s.length%this._numIndexPerPrimitive==0),Re(s.length>=e.length*this._numIndexPerPrimitive);const u=e.length;let d=i*s[this._numIndexPerPrimitive*e[0]];ye.clear(),ye.push(d);const n=Io(r[d],r[d+1],r[d+2]),c=dt(n);for(let p=0;p<u;++p){const v=this._numIndexPerPrimitive*e[p];for(let x=0;x<this._numIndexPerPrimitive;++x){d=i*s[v+x],ye.push(d);let m=r[d];n[0]=Math.min(m,n[0]),c[0]=Math.max(m,c[0]),m=r[d+1],n[1]=Math.min(m,n[1]),c[1]=Math.max(m,c[1]),m=r[d+2],n[2]=Math.min(m,n[2]),c[2]=Math.max(m,c[2])}}this.bbMin=n,this.bbMax=c;const h=Gt(M(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-n[0],c[1]-n[1]),c[2]-n[2]);let f=this.radius*this.radius;for(let p=0;p<ye.length;++p){d=ye.at(p);const v=r[d]-h[0],x=r[d+1]-h[1],m=r[d+2]-h[2],w=v*v+x*x+m*m;if(w<=f)continue;const y=Math.sqrt(w),C=.5*(y-this.radius);this.radius=this.radius+C,f=this.radius*this.radius;const A=C/y;h[0]+=v*A,h[1]+=x*A,h[2]+=m*A}this.center=h,ye.clear()}getChildren(){if(this._children||Ha(this.bbMin,this.bbMax)<=1)return this._children;const e=Gt(M(),this.bbMin,this.bbMax,.5),o=this.primitiveIndices.length,a=new Uint8Array(o),r=new Array(8);for(let c=0;c<8;++c)r[c]=0;const{data:i,size:s,indices:u}=this.position;for(let c=0;c<o;++c){let h=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[c];let p=s*u[f],v=i[p],x=i[p+1],m=i[p+2];for(let w=1;w<this._numIndexPerPrimitive;++w){p=s*u[f+w];const y=i[p],C=i[p+1],A=i[p+2];y<v&&(v=y),C<x&&(x=C),A<m&&(m=A)}v<e[0]&&(h|=1),x<e[1]&&(h|=2),m<e[2]&&(h|=4),a[c]=h,++r[h]}let d=0;for(let c=0;c<8;++c)r[c]>0&&++d;if(d<2)return;const n=new Array(8);for(let c=0;c<8;++c)n[c]=r[c]>0?new Uint32Array(r[c]):void 0;for(let c=0;c<8;++c)r[c]=0;for(let c=0;c<o;++c){const h=a[c];n[h][r[h]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)n[c]!==void 0&&this._children.push(new na(n[c],this._numIndexPerPrimitive,this.position));return this._children}static prune(){ye.prune()}};const ye=new ja({deallocator:null});function vr(t){return t?{p0:dt(t.p0),p1:dt(t.p1),p2:dt(t.p2)}:{p0:M(),p1:M(),p2:M()}}function xr(t,e,o){return He(Lt,e,t),He(go,o,t),.5*ae(Dt(Lt,Lt,go))}new aa(ar);new aa(()=>vr());const Lt=M(),go=M();function br(t,e){if(!t)return!1;const{size:o,data:a,indices:r}=t;G(e,0,0,0),G(X,0,0,0);let i=0,s=0;for(let u=0;u<r.length-2;u+=3){const d=r[u]*o,n=r[u+1]*o,c=r[u+2]*o;G(B,a[d],a[d+1],a[d+2]),G(de,a[n],a[n+1],a[n+2]),G(st,a[c],a[c+1],a[c+2]);const h=xr(B,de,st);h?(le(B,B,de),le(B,B,st),ie(B,B,1/3*h),le(e,e,B),i+=h):(le(X,X,B),le(X,X,de),le(X,X,st),s+=3)}return(s!==0||i!==0)&&(i!==0?(ie(e,e,1/i),!0):s!==0&&(ie(e,X,1/s),!0))}function Tr(t,e){if(!t)return!1;const{size:o,data:a,indices:r}=t;G(e,0,0,0);let i=-1,s=0;for(let u=0;u<r.length;u++){const d=r[u]*o;i!==d&&(e[0]+=a[d],e[1]+=a[d+1],e[2]+=a[d+2],s++),i=d}return s>1&&ie(e,e,1/s),s>0}function yr(t,e,o){if(!t)return!1;G(o,0,0,0),G(X,0,0,0);let a=0,r=0;const{size:i,data:s,indices:u}=t,d=u.length-1,n=d+(e?2:0);for(let c=0;c<n;c+=2){const h=c<d?c+1:0,f=u[c<d?c:d]*i,p=u[h]*i;B[0]=s[f],B[1]=s[f+1],B[2]=s[f+2],de[0]=s[p],de[1]=s[p+1],de[2]=s[p+2],ie(B,le(B,B,de),.5);const v=Ua(B,de);v>0?(le(o,o,ie(B,B,v)),a+=v):a===0&&(le(X,X,B),r++)}return a!==0?(ie(o,o,1/a),!0):r!==0&&(ie(o,X,1/r),!0)}const B=M(),de=M(),st=M(),X=M();let Mr=class{constructor(e){this.channel=e,this.id=qa()}},wr=class extends Mr{constructor(e){super(Li.Highlight),this.highlightGroup=e}},sa=class la extends zi{constructor(e,o,a=null,r=Ye.Mesh,i=null,s=-1){super(),this.material=e,this.mapPositions=a,this.type=r,this.objectAndLayerIdColor=i,this.edgeIndicesLength=s,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[u,d]of o)this._attributes.set(u,{...d,indices:Ai(d.indices)}),u===_.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(u).indices.length:this.edgeIndicesLength)}instantiate(e={}){const o=new la(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((a,r)=>{a.exclusive=!1,o._attributes.set(r,a)}),o._boundingInfo=this._boundingInfo,o.transformation=e.transformation||this.transformation,o}get attributes(){return this._attributes}getMutableAttribute(e){let o=this._attributes.get(e);return o&&!o.exclusive&&(o={...o,exclusive:!0,data:pr(o.data)},this._attributes.set(e,o)),o}setAttributeData(e,o){const a=this._attributes.get(e);a&&this._attributes.set(e,{...a,exclusive:!0,data:o})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ye.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ye.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Je(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const o=this.attributes.get(_.POSITION);return br(o,e)}_computeAttachmentOriginLines(e){const o=this.attributes.get(_.POSITION);return yr(o,Cr(this.material.parameters,o),e)}_computeAttachmentOriginPoints(e){const o=this.attributes.get(_.POSITION);return Tr(o,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(_.POSITION);if(!e||e.indices.length===0)return null;const o=this.type===Ye.Mesh?3:1;Re(e.indices.length%o==0,"Indexing error: "+e.indices.length+" not divisible by "+o);const a=qo(e.indices.length/o);return new gr(a,o,e)}get transformation(){return this._transformation??ft}set transformation(e){this._transformation=e&&e!==ft?gi(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((o,a)=>e(a))}allocateIdAndHighlight(e){const o=new wr(e);return this.addHighlight(o)}addHighlight(e){this.highlights.add(e);const{highlightGroup:o}=e,a=(this._highlightGroupCounts.get(o)??0)+1;return this._highlightGroupCounts.set(o,a),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroup:o}=e,a=this._highlightGroupCounts.get(o)??0;a<=1?this._highlightGroupCounts.delete(o):this._highlightGroupCounts.set(o,a-1)}}};function Cr(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}function $r(t,e){const o=t.fragment;switch(o.code.add(l`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case Z.None:o.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Z.View:o.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Z.WindingOrder:o.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ao(e.doubleSidedMode);case Z.COUNT:}}var Z;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(Z||(Z={}));function Sr({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:o,roughnessFactor:a,emissiveTexture:r,emissiveFactor:i,occlusionTexture:s}){return t==null&&e==null&&r==null&&(i==null||Po(i,Vt))&&s==null&&(a==null||a===1)&&(o==null||o===1)}const ca=Qe(1,1,.5),Or=Qe(0,.6,.2),_r=Qe(0,1,.2);var $;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})($||($={}));function da(t,e){const o=e.pbrMode,a=t.fragment;if(o!==$.Schematic&&o!==$.Disabled&&o!==$.Normal)return void a.code.add(l`void applyPBRFactors() {}`);if(o===$.Disabled)return void a.code.add(l`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(o===$.Schematic)return void a.code.add(l`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:r,hasMetallicRoughnessTextureTransform:i,hasOcclusionTexture:s,hasOcclusionTextureTransform:u,bindType:d}=e;(r||s)&&t.include(ko,e),a.code.add(l`vec3 mrr;
float occlusion;`),r&&a.uniforms.add(d===Ce.Pass?new q("texMetallicRoughness",n=>n.textureMetallicRoughness):new pt("texMetallicRoughness",n=>n.textureMetallicRoughness)),s&&a.uniforms.add(d===Ce.Pass?new q("texOcclusion",n=>n.textureOcclusion):new pt("texOcclusion",n=>n.textureOcclusion)),a.uniforms.add(d===Ce.Pass?new ue("mrrFactors",n=>n.mrrFactors):new Bt("mrrFactors",n=>n.mrrFactors)),a.code.add(l`
    ${S(r,l`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${S(s,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${s?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${S(r,`applyMetallicRoughness(${i?"metallicRoughnessUV":"vuv0"});`)}
      ${S(s,`applyOcclusion(${u?"occlusionUV":"vuv0"});`)}
    }
  `)}let Er=class{constructor(e=!1,o=!0){this.isVerticalRay=e,this.normalRequired=o}};const lt=Wa();function Ir(t,e,o,a,r,i){if(!t.visible)return;const s=Ue(Ur,a,o),u=(n,c,h)=>{i(n,h,c,!1)},d=new Er(!1,e.options.normalRequired);if(t.boundingInfo){Re(t.type===Ye.Mesh);const n=e.tolerance;ua(t.boundingInfo,o,s,n,r,d,u)}else{const n=t.attributes.get(_.POSITION),c=n.indices;Lr(o,s,0,c.length/3,c,n.data,n.stride,r,d,u)}}const Ar=M();function ua(t,e,o,a,r,i,s){if(t==null)return;const u=Br(o,Ar);if(ka(lt,t.bbMin),Ya(lt,t.bbMax),r!=null&&r.applyToAabb(lt),Dr(lt,e,u,a)){const{primitiveIndices:d,position:n}=t,c=d?d.length:n.indices.length/3;if(c>jr){const h=t.getChildren();if(h!==void 0){for(const f of h)ua(f,e,o,a,r,i,s);return}}Pr(e,o,0,c,n.indices,n.data,n.stride,d,r,i,s)}}const Ze=M();function Pr(t,e,o,a,r,i,s,u,d,n,c){const h=t[0],f=t[1],p=t[2],v=e[0],x=e[1],m=e[2],{normalRequired:w}=n;for(let y=o;y<a;++y){const C=u[y],A=3*C,D=s*r[A];let R=i[D],O=i[D+1],N=i[D+2];const I=s*r[A+1];let U=i[I],V=i[I+1],L=i[I+2];const z=s*r[A+2];let W=i[z],E=i[z+1],F=i[z+2];d!=null&&([R,O,N]=d.applyToVertex(R,O,N,y),[U,V,L]=d.applyToVertex(U,V,L,y),[W,E,F]=d.applyToVertex(W,E,F,y));const H=U-R,Q=V-O,oe=L-N,ve=W-R,xe=E-O,re=F-N,be=x*re-xe*m,Te=m*ve-re*v,Oe=v*xe-ve*x,ee=H*be+Q*Te+oe*Oe;if(Math.abs(ee)<=Hr)continue;const _e=h-R,Ot=f-O,_t=p-N,Ee=_e*be+Ot*Te+_t*Oe;if(ee>0){if(Ee<0||Ee>ee)continue}else if(Ee>0||Ee<ee)continue;const ao=Ot*oe-Q*_t,io=_t*H-oe*_e,ro=_e*Q-H*Ot,it=v*ao+x*io+m*ro;if(ee>0){if(it<0||Ee+it>ee)continue}else if(it>0||Ee+it<ee)continue;const no=(ve*ao+xe*io+re*ro)/ee;no>=0&&c(no,C,w?Gr(H,Q,oe,ve,xe,re,Ze):null)}}function Lr(t,e,o,a,r,i,s,u,d,n){const c=e,h=qr,f=Math.abs(c[0]),p=Math.abs(c[1]),v=Math.abs(c[2]),x=f>=p?f>=v?0:2:p>=v?1:2,m=x,w=c[m]<0?2:1,y=(x+w)%3,C=(x+(3-w))%3,A=c[y]/c[m],D=c[C]/c[m],R=1/c[m],O=zr,N=Nr,I=Rr,{normalRequired:U}=d;for(let V=o;V<a;++V){const L=3*V,z=s*r[L];G(h[0],i[z+0],i[z+1],i[z+2]);const W=s*r[L+1];G(h[1],i[W+0],i[W+1],i[W+2]);const E=s*r[L+2];G(h[2],i[E+0],i[E+1],i[E+2]),u&&(ut(h[0],u.applyToVertex(h[0][0],h[0][1],h[0][2],V)),ut(h[1],u.applyToVertex(h[1][0],h[1][1],h[1][2],V)),ut(h[2],u.applyToVertex(h[2][0],h[2][1],h[2][2],V))),Ue(O,h[0],t),Ue(N,h[1],t),Ue(I,h[2],t);const F=O[y]-A*O[m],H=O[C]-D*O[m],Q=N[y]-A*N[m],oe=N[C]-D*N[m],ve=I[y]-A*I[m],xe=I[C]-D*I[m],re=ve*oe-xe*Q,be=F*xe-H*ve,Te=Q*H-oe*F;if((re<0||be<0||Te<0)&&(re>0||be>0||Te>0))continue;const Oe=re+be+Te;if(Oe===0)continue;const ee=re*(R*O[m])+be*(R*N[m])+Te*(R*I[m]);if(ee*Math.sign(Oe)<0)continue;const _e=ee/Oe;_e>=0&&n(_e,V,U?Fr(h):null)}}const zr=M(),Nr=M(),Rr=M();function Gr(t,e,o,a,r,i,s){return G(bt,t,e,o),G(Tt,a,r,i),Dt(s,bt,Tt),wt(s,s),s}function Fr(t){return Ue(bt,t[1],t[0]),Ue(Tt,t[2],t[0]),Dt(Ze,bt,Tt),wt(Ze,Ze),Ze}const bt=M(),Tt=M();function Br(t,e){return G(e,1/t[0],1/t[1],1/t[2])}function Dr(t,e,o,a){return Vr(t,e,o,a,1/0)}function Vr(t,e,o,a,r){const i=(t[0]-a-e[0])*o[0],s=(t[3]+a-e[0])*o[0];let u=Math.min(i,s),d=Math.max(i,s);const n=(t[1]-a-e[1])*o[1],c=(t[4]+a-e[1])*o[1];if(d=Math.min(d,Math.max(n,c)),d<0||(u=Math.max(u,Math.min(n,c)),u>d))return!1;const h=(t[2]-a-e[2])*o[2],f=(t[5]+a-e[2])*o[2];return d=Math.min(d,Math.max(h,f)),!(d<0)&&(u=Math.max(u,Math.min(h,f)),!(u>d)&&u<r)}const jr=1e3,Hr=1e-7,Ur=M(),qr=[M(),M(),M()];let Wr=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=M(),this._tmpMbs=ia(),this._tmpObb=new sr,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=ae(e)}applyToVertex(e,o,a){const r=G(ha,e,o,a),i=G(Zr,e,o,a+this.componentLocalOriginLength),s=this._totalOffset/ae(i);return Ne(this._tmpVertex,r,i,s),this._tmpVertex}applyToAabb(e){const o=this.componentLocalOriginLength,a=e[0],r=e[1],i=e[2]+o,s=e[3],u=e[4],d=e[5]+o,n=Math.abs(a),c=Math.abs(r),h=Math.abs(i),f=Math.abs(s),p=Math.abs(u),v=Math.abs(d),x=.5*(1+Math.sign(a*s))*Math.min(n,f),m=.5*(1+Math.sign(r*u))*Math.min(c,p),w=.5*(1+Math.sign(i*d))*Math.min(h,v),y=Math.max(n,f),C=Math.max(c,p),A=Math.max(h,v),D=Math.sqrt(x*x+m*m+w*w),R=Math.sign(n+a),O=Math.sign(c+r),N=Math.sign(h+i),I=Math.sign(f+s),U=Math.sign(p+u),V=Math.sign(v+d),L=this._totalOffset;if(D<L)return e[0]-=(1-R)*L,e[1]-=(1-O)*L,e[2]-=(1-N)*L,e[3]+=I*L,e[4]+=U*L,e[5]+=V*L,e;const z=L/Math.sqrt(y*y+C*C+A*A),W=L/D,E=W-z,F=-E;return e[0]+=a*(R*F+W),e[1]+=r*(O*F+W),e[2]+=i*(N*F+W),e[3]+=s*(I*E+z),e[4]+=u*(U*E+z),e[5]+=d*(V*E+z),e}applyToMbs(e){const o=ae(he(e)),a=this._totalOffset/o;return Ne(he(this._tmpMbs),he(e),he(e),a),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/o,this._tmpMbs}applyToObb(e){return lr(e,this._totalOffset,this._totalOffset,Ft.Global,this._tmpObb),this._tmpObb}},kr=class{constructor(e=0){this.offset=e,this.sphere=ia(),this.tmpVertex=M()}applyToVertex(e,o,a){const r=this.objectTransform.transform,i=G(ha,e,o,a),s=Je(i,i,r),u=this.offset/ae(s);Ne(s,s,s,u);const d=this.objectTransform.inverse;return Je(this.tmpVertex,s,d),this.tmpVertex}applyToMinMax(e,o){const a=this.offset/ae(e);Ne(e,e,e,a);const r=this.offset/ae(o);Ne(o,o,o,r)}applyToAabb(e){const o=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*o,e[1]+=e[1]*o,e[2]+=e[2]*o;const a=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*a,e[4]+=e[4]*a,e[5]+=e[5]*a,e}applyToBoundingSphere(e){const o=ae(he(e)),a=this.offset/o;return Ne(he(this.sphere),he(e),he(e),a),this.sphere[3]=e[3]+e[3]*this.offset/o,this.sphere}};const vo=new kr;function Yr(t){return t!=null?(vo.offset=t,vo):null}new Wr;const ha=M(),Zr=M();let Xr=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(_.POSITION).indices.length}write(e,o,a,r,i,s){Ni(a,r,this.vertexBufferLayout,e,o,i,s)}};fe.LESS;fe.ALWAYS;const Kr={mask:255},Jr={function:{func:fe.ALWAYS,ref:pe.OutlineVisualElementMask,mask:pe.OutlineVisualElementMask},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.ZERO}},Qr={function:{func:fe.ALWAYS,ref:pe.OutlineVisualElementMask,mask:pe.OutlineVisualElementMask},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.REPLACE}};fe.EQUAL,pe.OutlineVisualElementMask,pe.OutlineVisualElementMask,K.KEEP,K.KEEP,K.KEEP;fe.NOTEQUAL,pe.OutlineVisualElementMask,pe.OutlineVisualElementMask,K.KEEP,K.KEEP,K.KEEP;function xo(t){t.varyings.add("linearDepth","float")}function ma(t){t.vertex.uniforms.add(new et("nearFar",(e,o)=>o.camera.nearFar))}function fa(t){t.vertex.code.add(l`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function pa(t,e){const{vertex:o}=t;switch(e.output){case P.Color:case P.ColorEmission:if(e.receiveShadows)return xo(t),void o.code.add(l`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case P.Shadow:case P.ShadowHighlight:case P.ShadowExcludeHighlight:case P.ViewshedShadow:return t.include(Ri,e),xo(t),ma(t),fa(t),void o.code.add(l`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}o.code.add(l`void forwardLinearDepth() {}`)}function ga(t){t.vertex.code.add(l`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function De(t){fa(t),t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const bo=Ht();function va(t,e){const o=e.hasModelTransformation,a=e.instancedDoublePrecision;o&&(t.vertex.uniforms.add(new Gi("model",i=>i.modelTransformation??ft)),t.vertex.uniforms.add(new Se("normalLocalOriginFromModel",i=>(Lo(bo,i.modelTransformation??ft),bo)))),e.instanced&&a&&(t.attributes.add(_.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(_.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(_.INSTANCEMODEL,"mat3"),t.attributes.add(_.INSTANCEMODELNORMAL,"mat3"));const r=t.vertex;a&&(r.include(Fi,e),r.uniforms.add(new Bt("viewOriginHi",(i,s)=>cr(G(ct,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),ct)),new Bt("viewOriginLo",(i,s)=>dr(G(ct,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),ct)))),r.code.add(l`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?l`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(l`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===P.Normal&&(Bi(r),r.code.add(l`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&r.code.add(l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ct=M();function xa(t,e){e.hasSymbolColors?(t.include(hr),t.attributes.add(_.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(l`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Yo("colorMixMode",o=>Di[o.colorMixMode])),t.vertex.code.add(l`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ba(t,e){e.hasVertexColors?(t.attributes.add(_.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(l`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(l`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(l`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ta(t){t.code.add(l`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function en(t,e){switch(e.output){case P.Shadow:case P.ShadowHighlight:case P.ShadowExcludeHighlight:case P.ViewshedShadow:t.fragment.include(Ta),t.fragment.code.add(l`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function Ve(t,e){tn(t,e,new J("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function tn(t,e,o){const a=t.fragment;switch(e.alphaDiscardMode){case j.Blend:t.fragment.code.add(l`
        #define discardOrAdjustAlpha(color) { if (color.a < ${l.float(me)}) { discard; } }
      `);break;case j.Opaque:a.code.add(l`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case j.Mask:a.uniforms.add(o).code.add(l`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case j.MaskBlend:a.uniforms.add(o).code.add(l`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function ya(t,e){const{vertex:o,fragment:a}=t,r=e.hasColorTexture&&e.alphaDiscardMode!==j.Opaque,{output:i,normalType:s,hasColorTextureTransform:u}=e;switch(i){case P.Depth:Ge(o,e),t.include(De,e),t.include(Be,e),t.include(Fe,e),r&&a.uniforms.add(new q("tex",d=>d.texture)),o.main.add(l`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(Ve,e),a.main.add(l`
          discardBySlice(vpos);
          ${S(r,l`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case P.Shadow:case P.ShadowHighlight:case P.ShadowExcludeHighlight:case P.ViewshedShadow:case P.ObjectAndLayerIdColor:Ge(o,e),t.include(De,e),t.include(Fe,e),t.include(Ke,e),t.include(en,e),t.include(Be,e),t.include(Vi,e),ma(t),t.varyings.add("depth","float"),r&&a.uniforms.add(new q("tex",d=>d.texture)),o.main.add(l`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(Ve,e),a.main.add(l`
          discardBySlice(vpos);
          ${S(r,l`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${i===P.ObjectAndLayerIdColor?l`outputObjectAndLayerIdColor();`:l`outputDepth(depth);`}`);break;case P.Normal:{Ge(o,e),t.include(De,e),t.include(Yt,e),t.include(Xo,e),t.include(Fe,e),t.include(Ke,e),r&&a.uniforms.add(new q("tex",n=>n.texture)),s===k.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const d=s===k.Attribute||s===k.Compressed;o.main.add(l`
          vpos = getVertexInLocalOriginSpace();
          ${d?l`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),t.include(Be,e),t.include(Ve,e),a.main.add(l`
          discardBySlice(vpos);
          ${S(r,l`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${s===k.ScreenDerivative?l`vec3 normal = screenDerivativeNormal(vPositionView);`:l`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case P.Highlight:Ge(o,e),t.include(De,e),t.include(Fe,e),t.include(Ke,e),r&&a.uniforms.add(new q("tex",d=>d.texture)),o.main.add(l`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(Be,e),t.include(Ve,e),t.include(Zo,e),a.main.add(l`
          discardBySlice(vpos);
          ${S(r,l`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          outputHighlight();`)}}function on(t,e){const o=t.fragment;e.hasVertexTangents?(t.attributes.add(_.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===Z.WindingOrder?o.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(l`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==$e.None&&(t.include(ko,e),o.uniforms.add(e.bindType===Ce.Pass?new q("normalTexture",a=>a.textureNormal):new pt("normalTexture",a=>a.textureNormal)),e.hasNormalTextureTransform&&(o.uniforms.add(new et("scale",a=>a.scale??zo)),o.uniforms.add(new Se("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??We))),o.code.add(l`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&o.code.add(l`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(l`return tangentSpace * rawNormal;
}`))}var je,To;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(je||(je={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(To||(To={}));let ze=class extends Za{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this.requireGeometryDepth=!1,this._context=null,this._dirty=!0}initialize(){this.addHandles([Ro(()=>this.view.ready,e=>{var o;e&&((o=this.view._stage)==null||o.renderer.addRenderNode(this))},Xa)])}destroy(){var e,o;(o=(e=this.view._stage)==null?void 0:e.renderer)==null||o.removeRenderNode(this)}render(){throw new Go("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var a,r,i;const e=(r=(a=this._frameBuffer)==null?void 0:a.getTexture())==null?void 0:r.descriptor,o=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(i=o.fbo)==null||i.initializeAndBind(),o}bindRenderTarget(){var e,o;return(o=(e=this._frameBuffer)==null?void 0:e.fbo)==null||o.initializeAndBind(),this._frameBuffer}requestRender(e){var o;e===Wo.UPDATE&&((o=this.view._stage)==null||o.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this._context}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,o){this._context=o,this._frameBuffer=e.find(({name:a})=>a===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};g([Me({constructOnly:!0})],ze.prototype,"view",void 0),g([Me({constructOnly:!0})],ze.prototype,"consumes",void 0),g([Me()],ze.prototype,"produces",void 0),ze=g([No("esri.views.3d.webgl.RenderNode")],ze);const an=ze,rn=3e5,yo=5e5,Mo=new ji;function Ma(t,e=!0){t.attributes.add(_.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.main.add(l`
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?l`uv = position * 0.5 + vec2(0.5);`:""}
  `)}let nn=class extends Ut{constructor(e,o){super(e,"vec2",Ce.Draw,(a,r,i,s)=>a.setUniform2fv(e,o(r,i,s)))}};const zt=4;function sn(){const t=new Ct,e=t.fragment;t.include(Ma);const o=(zt+1)/2,a=1/(2*o*o);return e.include(Ko),e.uniforms.add(new q("depthMap",r=>r.depthTexture),new pt("tex",r=>r.colorTexture),new nn("blurSize",r=>r.blurSize),new J("projScale",(r,i)=>{const s=Ka(i.camera.eye,i.camera.center);return s>5e4?Math.max(0,r.projScale-(s-5e4)):r.projScale})),e.code.add(l`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(l`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${l.int(zt)}; r <= ${l.int(zt)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const ln=Object.freeze(Object.defineProperty({__proto__:null,build:sn},Symbol.toStringTag,{value:"Module"}));let wa=class Ca extends qt{initializeProgram(e){return new Wt(e.rctx,Ca.shader.get().build(),kt)}initializePipeline(){return Zt({colorWrite:Xt})}};wa.shader=new $t(ln,()=>ot(()=>import("./SSAOBlur.glsl-9bfa6a1e.js"),["assets/SSAOBlur.glsl-9bfa6a1e.js","assets/index-76dad814.js","assets/index-d4471cb7.css","assets/interfaces-3cb63efc.js","assets/VertexAttribute-ace1421c.js","assets/BindType-d21d71dd.js","assets/DefaultTechniqueConfiguration-1da06caf.js","assets/mat3f64-e19cdcb8.js","assets/NormalAttribute.glsl-f975345b.js","assets/mat4f64-9a8384aa.js","assets/requestImageUtils-91fad5e0.js","assets/basicInterfaces-d9412f98.js","assets/Util-83a8abcd.js","assets/BufferView-6edfd8ea.js","assets/sphere-1b1e14cb.js","assets/plane-c8d106b8.js","assets/quatf64-81e039e4.js","assets/lineSegment-436a8ee5.js","assets/renderState-4d62aace.js","assets/devEnvironmentUtils-5c761adb.js","assets/vec3-e5495f74.js","assets/vec4-228ad9a1.js","assets/DefaultMaterial_COLOR_GAMMA-f73cb4f3.js","assets/Indices-9a848066.js","assets/resourceUtils-13a1a5f1.js","assets/NestedMap-b667f687.js","assets/Attribute-422e3b38.js","assets/InterleavedLayout-44628f12.js","assets/types-1305598a.js","assets/orientedBoundingBox-f4e61998.js","assets/quat-20f4ba14.js","assets/spatialReferenceEllipsoidUtils-7b1f8778.js","assets/computeTranslationToOriginAndRotation-b9200a03.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-3f162a1b.js"]));const cn="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let dn=class extends ra{constructor(){super(...arguments),this.projScale=1}},un=class extends dn{constructor(){super(...arguments),this.intensity=1}},hn=class extends ra{},mn=class extends hn{constructor(){super(...arguments),this.blurSize=jt()}};function fn(t){t.fragment.uniforms.add(new Y("projInfo",(e,o)=>pn(o.camera))),t.fragment.uniforms.add(new et("zScale",(e,o)=>gn(o.camera))),t.fragment.code.add(l`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function pn(t){const e=t.projectionMatrix;return e[11]===0?te(wo,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):te(wo,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const wo=Fo();function gn(t){return t.projectionMatrix[11]===0?qe(Co,0,1):qe(Co,1,0)}const Co=jt(),$o=16;function vn(){const t=new Ct,e=t.fragment;return t.include(Ma),t.include(fn),e.include(Ko),e.uniforms.add(new J("radius",(o,a)=>Kt(a.camera))).code.add(l`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(l`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new q("normalMap",o=>o.normalTexture),new q("depthMap",o=>o.depthTexture),new J("projScale",o=>o.projScale),new q("rnm",o=>o.noiseTexture),new et("rnmScale",(o,a)=>qe(So,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new J("intensity",o=>o.intensity),new et("screenSize",(o,a)=>qe(So,a.camera.fullWidth,a.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.main.add(l`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${l.int($o)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${l.int($o)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),t}function Kt(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const So=jt(),xn=Object.freeze(Object.defineProperty({__proto__:null,build:vn,getRadius:Kt},Symbol.toStringTag,{value:"Module"}));let $a=class Sa extends qt{initializeProgram(e){return new Wt(e.rctx,Sa.shader.get().build(),kt)}initializePipeline(){return Zt({colorWrite:Xt})}};$a.shader=new $t(xn,()=>ot(()=>import("./SSAO.glsl-df040b33.js"),["assets/SSAO.glsl-df040b33.js","assets/index-76dad814.js","assets/index-d4471cb7.css","assets/interfaces-3cb63efc.js","assets/VertexAttribute-ace1421c.js","assets/BindType-d21d71dd.js","assets/DefaultTechniqueConfiguration-1da06caf.js","assets/mat3f64-e19cdcb8.js","assets/NormalAttribute.glsl-f975345b.js","assets/mat4f64-9a8384aa.js","assets/requestImageUtils-91fad5e0.js","assets/basicInterfaces-d9412f98.js","assets/Util-83a8abcd.js","assets/BufferView-6edfd8ea.js","assets/sphere-1b1e14cb.js","assets/plane-c8d106b8.js","assets/quatf64-81e039e4.js","assets/lineSegment-436a8ee5.js","assets/renderState-4d62aace.js","assets/devEnvironmentUtils-5c761adb.js","assets/vec3-e5495f74.js","assets/vec4-228ad9a1.js","assets/DefaultMaterial_COLOR_GAMMA-f73cb4f3.js","assets/Indices-9a848066.js","assets/resourceUtils-13a1a5f1.js","assets/NestedMap-b667f687.js","assets/Attribute-422e3b38.js","assets/InterleavedLayout-44628f12.js","assets/types-1305598a.js","assets/orientedBoundingBox-f4e61998.js","assets/quat-20f4ba14.js","assets/spatialReferenceEllipsoidUtils-7b1f8778.js","assets/computeTranslationToOriginAndRotation-b9200a03.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-3f162a1b.js"]));const Xe=2;let Ae=class extends an{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=rt(0),this._passParameters=new un,this._drawParameters=new mn}initialize(){const e=Uint8Array.from(atob(cn),a=>a.charCodeAt(0)),o=new Ja;o.wrapMode=ht.CLAMP_TO_EDGE,o.pixelFormat=Qa.RGB,o.wrapMode=ht.REPEAT,o.hasMipmap=!0,o.width=32,o.height=32,this._passParameters.noiseTexture=new ei(this.renderingContext,o,e),this._ssaoTechnique=this.techniques.acquire($a,Mo,null,!0),this._blurTechnique=this.techniques.acquire(wa,Mo,null,!0),this.addHandles(Ro(()=>this.isEnabled(),()=>this._enableTime=rt(0)))}destroy(){this._passParameters.noiseTexture=ti(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const o=this.bindParameters,a=e.find(({name:D})=>D==="normals"),r=a==null?void 0:a.getTexture(),i=a==null?void 0:a.getTexture(oi),s=this.fboCache,u=o.camera,d=u.fullViewport[2],n=u.fullViewport[3],c=Math.round(d/Xe),h=Math.round(n/Xe);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=rt(performance.now()),this.requestRender(),s.acquire(c,h,"ssao",je.RED);this._enableTime===0&&(this._enableTime=rt(performance.now()));const f=this.renderingContext,p=this.view.qualitySettings.fadeDuration,v=u.relativeElevation,x=ii((yo-v)/(yo-rn),0,1),m=p>0?Math.min(p,performance.now()-this._enableTime)/p:1,w=m*x;this._passParameters.normalTexture=r,this._passParameters.depthTexture=i,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*bn/Kt(u)**6*w;const y=s.acquire(d,n,"ssao input",je.RG);f.bindFramebuffer(y.fbo),f.setViewport(0,0,d,n),f.bindTechnique(this._ssaoTechnique,o,this._passParameters,this._drawParameters),f.screen.draw();const C=s.acquire(c,h,"ssao blur",je.RED);f.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=y.getTexture(),qe(this._drawParameters.blurSize,0,Xe/n),f.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters),f.setViewport(0,0,c,h),f.screen.draw(),y.release();const A=s.acquire(c,h,"ssao",je.RED);return f.bindFramebuffer(A.fbo),f.setViewport(0,0,d,n),f.setClearColor(1,1,1,0),f.clear(ai.COLOR),this._drawParameters.colorTexture=C.getTexture(),qe(this._drawParameters.blurSize,Xe/d,0),f.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters),f.setViewport(0,0,c,h),f.screen.draw(),f.setViewport4fv(u.fullViewport),C.release(),m<1&&this.requestRender(Wo.UPDATE),A}};g([Me()],Ae.prototype,"consumes",void 0),g([Me()],Ae.prototype,"produces",void 0),g([Me({constructOnly:!0})],Ae.prototype,"techniques",void 0),g([Me({constructOnly:!0})],Ae.prototype,"isEnabled",void 0),Ae=g([No("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ae);const bn=.5;function Jt(t,e){const o=t.fragment;e.receiveAmbientOcclusion?(o.uniforms.add(new q("ssaoTex",(a,r)=>{var i;return(i=r.ssao)==null?void 0:i.getTexture()})),o.constants.add("blurSizePixelsInverse","float",1/Xe),o.code.add(l`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(l`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Tn(t,e){const o=t.fragment,a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(o.uniforms.add(new ue("lightingAmbientSH0",(r,i)=>G(Oo,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),o.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(o.uniforms.add(new Y("lightingAmbientSH_R",(r,i)=>te(ne,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new Y("lightingAmbientSH_G",(r,i)=>te(ne,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new Y("lightingAmbientSH_B",(r,i)=>te(ne,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),o.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(o.uniforms.add(new ue("lightingAmbientSH0",(r,i)=>G(Oo,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new Y("lightingAmbientSH_R1",(r,i)=>te(ne,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new Y("lightingAmbientSH_G1",(r,i)=>te(ne,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new Y("lightingAmbientSH_B1",(r,i)=>te(ne,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new Y("lightingAmbientSH_R2",(r,i)=>te(ne,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new Y("lightingAmbientSH_G2",(r,i)=>te(ne,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new Y("lightingAmbientSH_B2",(r,i)=>te(ne,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),o.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==$.Normal&&e.pbrMode!==$.Schematic||o.code.add(l`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Oo=M(),ne=Fo();function yt(t){t.uniforms.add(new ue("mainLightDirection",(e,o)=>o.lighting.mainLight.direction))}function tt(t){t.uniforms.add(new ue("mainLightIntensity",(e,o)=>o.lighting.mainLight.intensity))}function yn(t){yt(t.fragment),tt(t.fragment),t.fragment.code.add(l`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Mn(t){const e=t.fragment.code;e.add(l`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(l`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(l`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Oa(t){const e=3.141592653589793,o=.3183098861837907;t.vertex.constants.add("PI","float",e),t.fragment.constants.add("PI","float",e),t.fragment.constants.add("LIGHT_NORMALIZATION","float",o),t.fragment.constants.add("INV_PI","float",o),t.fragment.constants.add("HALF_PI","float",1.570796326794897),t.fragment.constants.add("TWO_PI","float",6.28318530717958)}function Qt(t,e){const o=t.fragment.code;t.include(Oa),e.pbrMode!==$.Normal&&e.pbrMode!==$.Schematic&&e.pbrMode!==$.Simplified&&e.pbrMode!==$.TerrainWithWater||(o.add(l`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(l`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==$.Normal&&e.pbrMode!==$.Schematic||(t.include(Mn),o.add(l`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(l`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(l`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(l`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}const wn=.4;function eo(t){t.constants.add("ambientBoostFactor","float",wn)}function to(t){t.uniforms.add(new J("lightingGlobalFactor",(e,o)=>o.lighting.globalFactor))}function _a(t,e){const o=t.fragment;switch(t.include(Jt,e),e.pbrMode!==$.Disabled&&t.include(Qt,e),t.include(Tn,e),t.include(Oa),o.code.add(l`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===$.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),eo(o),to(o),yt(o),o.code.add(l`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?l`normalize(vPosWorld)`:l`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),tt(o),o.code.add(l`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case $.Disabled:case $.WaterOnIntegratedMesh:case $.Water:t.include(yn),o.code.add(l`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case $.Normal:case $.Schematic:o.code.add(l`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(l`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?o.uniforms.add(new Hi("hasFillLights",(a,r)=>r.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(l`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new J("lightingSpecularStrength",(a,r)=>r.lighting.mainLight.specularStrength),new J("lightingEnvironmentStrength",(a,r)=>r.lighting.mainLight.environmentStrength)).code.add(l`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(l`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==$.Schematic||e.hasColorTexture?l`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:l`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case $.Simplified:case $.TerrainWithWater:yt(o),tt(o),o.code.add(l`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Ao(e.pbrMode);case $.COUNT:}}class Cn extends Ut{constructor(e,o,a){super(e,"mat4",Ce.Draw,(r,i,s,u)=>r.setUniformMatrix4fv(e,o(i,s,u)),a)}}class $n extends Ut{constructor(e,o,a){super(e,"mat4",Ce.Pass,(r,i,s)=>r.setUniformMatrix4fv(e,o(i,s)),a)}}function Ea(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new $n("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),Aa(t))}function Ia(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Cn("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),Aa(t))}function Aa(t){const e=t.fragment;e.include(Ta),e.uniforms.add(new q("shadowMap",(o,a)=>a.shadowMap.depthTexture),new Yo("numCascades",(o,a)=>a.shadowMap.numCascades),new Y("cascadeDistances",(o,a)=>a.shadowMap.cascadeDistances)).code.add(l`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Sn(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new Se("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix??We)).code.add(l`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardColorUV(){}`)}function On(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==$e.None?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new Se("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??We)).code.add(l`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardNormalUV(){}`)}function _n(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==$e.None?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new Se("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix??We)).code.add(l`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardEmissiveUV(){}`)}function En(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==$e.None?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new Se("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix??We)).code.add(l`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardOcclusionUV(){}`)}function In(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==$e.None?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new Se("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix??We)).code.add(l`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardMetallicRoughnessUV(){}`)}function Pa(t){t.include(Jo),t.code.add(l`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.int(ce.Multiply)}) {
        return allMixed;
      }
      if (mode == ${l.int(ce.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int(ce.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.int(ce.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int(ce.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function La(t,e){t.include(Zo,e),t.include(Ui,e),t.fragment.include(Jo);const o=e.output===P.ObjectAndLayerIdColor,a=rr(e.output),r=xt(e.output)&&e.oitPass===gt.ColorAlpha,i=xt(e.output)&&e.oitPass!==gt.ColorAlpha,s=e.discardInvisibleFragments;let u=0;(i||a||r)&&t.outputs.add("fragColor","vec4",u++),a&&t.outputs.add("fragEmission","vec4",u++),r&&t.outputs.add("fragAlpha","float",u++),t.fragment.code.add(l`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${S(o,l`finalColor.a = 1.0;`)}

      ${S(s,l`if (finalColor.a < ${l.float(me)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${S(r,l`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${S(i,"fragColor = finalColor;")}
      ${S(a,"fragEmission = getEmissions();")}
      outputHighlight();
      ${S(o,"outputObjectAndLayerIdColor();")}
    }
  `)}function An(t){const e=new Ct,{vertex:o,fragment:a,varyings:r}=e,{output:i,normalType:s,offsetBackfaces:u,instancedColor:d,spherical:n,receiveShadows:c,snowCover:h,pbrMode:f}=t,{multipassEnabled:p,textureAlphaPremultiplied:v,instancedDoublePrecision:x,hasVertexColors:m,hasVertexTangents:w}=t,{hasColorTexture:y,hasNormalTexture:C,hasNormalTextureTransform:A,hasColorTextureTransform:D}=t;if(Ge(o,t),e.include(Qo),r.add("vpos","vec3"),e.include(Ke,t),e.include(va,t),e.include(ea,t),e.include(Sn,t),!xt(i))return e.include(ya,t),e;e.include(On,t),e.include(_n,t),e.include(En,t),e.include(In,t),vt(o,t),e.include(Yt,t),e.include(De,t);const R=s===k.Attribute||s===k.Compressed;return R&&u&&e.include(ga),e.include(on,t),e.include(Xo,t),d&&e.attributes.add(_.INSTANCECOLOR,"vec4"),r.add("vPositionLocal","vec3"),e.include(Fe,t),e.include(pa,t),e.include(xa,t),e.include(ba,t),o.uniforms.add(new Y("externalColor",O=>O.externalColor)),r.add("vcolorExt","vec4"),p&&r.add("depth","float"),o.main.add(l`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${S(d,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${l.float(me)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        vPositionLocal = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        ${S(R,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
        vpos = addVerticalOffset(vpos, localOrigin);
        ${S(w,"vTangent = dpTransformVertexTangent(tangent);")}
        gl_Position = transformPosition(proj, view, vpos);
        ${R&&u?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
      }

      ${S(p,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();
      forwardColorUV();
      forwardNormalUV();
      forwardEmissiveUV();
      forwardOcclusionUV();
      forwardMetallicRoughnessUV();`),e.include(_a,t),e.include(Jt,t),e.include(Ve,t),e.include(x?Ea:Ia,t),e.include(ta,t),e.include(Be,t),e.include(La,t),vt(a,t),a.uniforms.add(o.uniforms.get("localOrigin"),new ue("ambient",O=>O.ambient),new ue("diffuse",O=>O.diffuse),new J("opacity",O=>O.opacity),new J("layerOpacity",O=>O.layerOpacity)),y&&a.uniforms.add(new q("tex",O=>O.texture)),e.include(da,t),e.include(Qt,t),a.include(Pa),e.include($r,t),eo(a),to(a),tt(a),a.main.add(l`
      discardBySlice(vpos);
      ${S(p,"terrainDepthTest(depth);")}
      ${y?l`
              vec4 texColor = texture(tex, ${D?"colorUV":"vuv0"});
              ${S(v,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${s===k.ScreenDerivative?l`vec3 normal = screenDerivativeNormal(vPositionLocal);`:l`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${c?"readShadowMap(vpos, linearDepth)":S(n,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${S(m,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${S(m,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${C?`mat3 tangentSpace = computeTangentSpace(${w?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${A?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${n?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${S(h,l`
              float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
              albedo = mix(albedo, vec3(1), snow);
              shadingNormal = mix(shadingNormal, normal, snow);
              ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${f===$.Normal||f===$.Schematic?l`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${S(h,l`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${h?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),e}const Pn=Object.freeze(Object.defineProperty({__proto__:null,build:An},Symbol.toStringTag,{value:"Module"}));class Ln extends qi{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ca,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ge.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Vt,this.instancedDoublePrecision=!1,this.normalType=k.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Qe(.2,.2,.2),this.diffuse=Qe(.8,.8,.8),this.externalColor=ri(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=M(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=at.Less,this.textureAlphaMode=j.Blend,this.textureAlphaCutoff=me,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Wi.Occlude,this.isDecoration=!1}}let oo=class za extends qt{initializeProgram(e,o){return this._initializeProgram(e,o,za.shader)}_initializeProgram(e,o,a){return new Wt(e.rctx,a.get().build(o),kt)}_makePipeline(e,o){const{oitPass:a,output:r,transparent:i,cullFace:s,customDepthTest:u,hasOccludees:d,enableOffset:n}=e,c=a===gt.NONE,h=a===gt.FrontFace;return Zt({blending:xt(r)&&i?ki(a):null,culling:Nn(e)?ur(s):null,depthTest:{func:Yi(a,zn(u))},depthWrite:Zi(e),drawBuffers:r===P.Depth?{buffers:[ni.NONE]}:Xi(a,r),colorWrite:Xt,stencilWrite:d?Kr:null,stencilTest:d?o?Qr:Jr:null,polygonOffset:c||h?null:Ki(n)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function zn(t){return t===at.Lequal?fe.LEQUAL:fe.LESS}function Nn(t){return t.cullFace!==ge.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}oo.shader=new $t(Pn,()=>ot(()=>import("./DefaultMaterial.glsl-63c07733.js"),["assets/DefaultMaterial.glsl-63c07733.js","assets/NormalAttribute.glsl-f975345b.js","assets/index-76dad814.js","assets/index-d4471cb7.css","assets/interfaces-3cb63efc.js","assets/VertexAttribute-ace1421c.js","assets/mat3f64-e19cdcb8.js","assets/mat4f64-9a8384aa.js","assets/BindType-d21d71dd.js","assets/symbolColorUtils-3f162a1b.js","assets/DefaultTechniqueConfiguration-1da06caf.js","assets/requestImageUtils-91fad5e0.js","assets/basicInterfaces-d9412f98.js","assets/Util-83a8abcd.js","assets/BufferView-6edfd8ea.js","assets/sphere-1b1e14cb.js","assets/plane-c8d106b8.js","assets/quatf64-81e039e4.js","assets/lineSegment-436a8ee5.js","assets/renderState-4d62aace.js","assets/devEnvironmentUtils-5c761adb.js","assets/vec3-e5495f74.js","assets/vec4-228ad9a1.js","assets/DefaultMaterial_COLOR_GAMMA-f73cb4f3.js","assets/Indices-9a848066.js","assets/resourceUtils-13a1a5f1.js","assets/NestedMap-b667f687.js","assets/Attribute-422e3b38.js","assets/InterleavedLayout-44628f12.js","assets/types-1305598a.js","assets/orientedBoundingBox-f4e61998.js","assets/quat-20f4ba14.js","assets/spatialReferenceEllipsoidUtils-7b1f8778.js","assets/computeTranslationToOriginAndRotation-b9200a03.js","assets/doublePrecisionUtils-e3c3d0d8.js"]));class b extends Ji{constructor(e,o){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=o,this.alphaDiscardMode=j.Opaque,this.doubleSidedMode=Z.None,this.pbrMode=$.Disabled,this.cullFace=ge.None,this.normalType=k.Attribute,this.customDepthTest=at.Less,this.emissionSource=we.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===we.Texture||this.hasOcclusionTexture||this.hasNormalTexture?$e.Default:$e.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}g([T({count:j.COUNT})],b.prototype,"alphaDiscardMode",void 0),g([T({count:Z.COUNT})],b.prototype,"doubleSidedMode",void 0),g([T({count:$.COUNT})],b.prototype,"pbrMode",void 0),g([T({count:ge.COUNT})],b.prototype,"cullFace",void 0),g([T({count:k.COUNT})],b.prototype,"normalType",void 0),g([T({count:at.COUNT})],b.prototype,"customDepthTest",void 0),g([T({count:we.COUNT})],b.prototype,"emissionSource",void 0),g([T()],b.prototype,"hasVertexColors",void 0),g([T()],b.prototype,"hasSymbolColors",void 0),g([T()],b.prototype,"hasVerticalOffset",void 0),g([T()],b.prototype,"hasSlicePlane",void 0),g([T()],b.prototype,"hasSliceHighlight",void 0),g([T()],b.prototype,"hasColorTexture",void 0),g([T()],b.prototype,"hasMetallicRoughnessTexture",void 0),g([T()],b.prototype,"hasOcclusionTexture",void 0),g([T()],b.prototype,"hasNormalTexture",void 0),g([T()],b.prototype,"hasScreenSizePerspective",void 0),g([T()],b.prototype,"hasVertexTangents",void 0),g([T()],b.prototype,"hasOccludees",void 0),g([T()],b.prototype,"multipassEnabled",void 0),g([T()],b.prototype,"hasModelTransformation",void 0),g([T()],b.prototype,"offsetBackfaces",void 0),g([T()],b.prototype,"vvSize",void 0),g([T()],b.prototype,"vvColor",void 0),g([T()],b.prototype,"receiveShadows",void 0),g([T()],b.prototype,"receiveAmbientOcclusion",void 0),g([T()],b.prototype,"textureAlphaPremultiplied",void 0),g([T()],b.prototype,"instanced",void 0),g([T()],b.prototype,"instancedColor",void 0),g([T()],b.prototype,"instancedDoublePrecision",void 0),g([T()],b.prototype,"writeDepth",void 0),g([T()],b.prototype,"transparent",void 0),g([T()],b.prototype,"enableOffset",void 0),g([T()],b.prototype,"cullAboveGround",void 0),g([T()],b.prototype,"snowCover",void 0),g([T()],b.prototype,"hasColorTextureTransform",void 0),g([T()],b.prototype,"hasEmissionTextureTransform",void 0),g([T()],b.prototype,"hasNormalTextureTransform",void 0),g([T()],b.prototype,"hasOcclusionTextureTransform",void 0),g([T()],b.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Rn(t){const e=new Ct,{vertex:o,fragment:a,varyings:r}=e,{output:i,offsetBackfaces:s,instancedColor:u,multipassEnabled:d,pbrMode:n,snowCover:c,spherical:h}=t,f=n===$.Normal||n===$.Schematic;if(Ge(o,t),e.include(Qo),r.add("vpos","vec3"),e.include(Ke,t),e.include(va,t),e.include(ea,t),i===P.Color&&(vt(e.vertex,t),e.include(Yt,t),e.include(De,t),s&&e.include(ga),u&&e.attributes.add(_.INSTANCECOLOR,"vec4"),r.add("vNormalWorld","vec3"),r.add("localvpos","vec3"),d&&r.add("depth","float"),e.include(Fe,t),e.include(pa,t),e.include(xa,t),e.include(ba,t),o.uniforms.add(new Y("externalColor",p=>p.externalColor)),r.add("vcolorExt","vec4"),o.main.add(l`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${S(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${l.float(me)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${S(s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${S(d,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),i===P.Color){const{hasColorTexture:p,hasColorTextureTransform:v,receiveShadows:x}=t;e.include(_a,t),e.include(Jt,t),e.include(Ve,t),e.include(t.instancedDoublePrecision?Ea:Ia,t),e.include(ta,t),e.include(Be,t),e.include(La,t),vt(e.fragment,t),yt(a),eo(a),to(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new ue("ambient",m=>m.ambient),new ue("diffuse",m=>m.diffuse),new J("opacity",m=>m.opacity),new J("layerOpacity",m=>m.layerOpacity)),p&&a.uniforms.add(new q("tex",m=>m.texture)),e.include(da,t),e.include(Qt,t),a.include(Pa),tt(a),a.main.add(l`
      discardBySlice(vpos);
      ${S(d,"terrainDepthTest(depth);")}
      vec4 texColor = ${p?`texture(tex, ${v?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${S(p,`${S(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${x?"readShadowMap(vpos, linearDepth)":h?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?l`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${S(c,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${l`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${S(f,`vec3 normalGround = ${h?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${f?l`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${S(c,l`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${c?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return e.include(ya,t),e}const Gn=Object.freeze(Object.defineProperty({__proto__:null,build:Rn},Symbol.toStringTag,{value:"Module"}));class St extends oo{initializeProgram(e,o){return this._initializeProgram(e,o,St.shader)}}St.shader=new $t(Gn,()=>ot(()=>import("./RealisticTree.glsl-bfad8453.js"),["assets/RealisticTree.glsl-bfad8453.js","assets/NormalAttribute.glsl-f975345b.js","assets/index-76dad814.js","assets/index-d4471cb7.css","assets/interfaces-3cb63efc.js","assets/VertexAttribute-ace1421c.js","assets/mat3f64-e19cdcb8.js","assets/mat4f64-9a8384aa.js","assets/BindType-d21d71dd.js","assets/symbolColorUtils-3f162a1b.js","assets/DefaultTechniqueConfiguration-1da06caf.js","assets/requestImageUtils-91fad5e0.js","assets/basicInterfaces-d9412f98.js","assets/Util-83a8abcd.js","assets/BufferView-6edfd8ea.js","assets/sphere-1b1e14cb.js","assets/plane-c8d106b8.js","assets/quatf64-81e039e4.js","assets/lineSegment-436a8ee5.js","assets/renderState-4d62aace.js","assets/devEnvironmentUtils-5c761adb.js","assets/vec3-e5495f74.js","assets/vec4-228ad9a1.js","assets/DefaultMaterial_COLOR_GAMMA-f73cb4f3.js","assets/Indices-9a848066.js","assets/resourceUtils-13a1a5f1.js","assets/NestedMap-b667f687.js","assets/Attribute-422e3b38.js","assets/InterleavedLayout-44628f12.js","assets/types-1305598a.js","assets/orientedBoundingBox-f4e61998.js","assets/quat-20f4ba14.js","assets/spatialReferenceEllipsoidUtils-7b1f8778.js","assets/computeTranslationToOriginAndRotation-b9200a03.js","assets/doublePrecisionUtils-e3c3d0d8.js"]));class Mt extends Qi{constructor(e,o){super(e,Bn),this.supportsEdges=!0,this.produces=new Map([[At.OPAQUE_MATERIAL,a=>(po(a)||Pt(a))&&!this.parameters.transparent],[At.TRANSPARENT_MATERIAL,a=>(po(a)||Pt(a))&&this.parameters.transparent&&this.parameters.writeDepth],[At.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>(nr(a)||Pt(a))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Vn(this.parameters),this._configuration=new b(o.spherical,o.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==P.Shadow&&e!==P.ShadowExcludeHighlight&&e!==P.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<me)return!1;const{hasInstancedColor:o,hasVertexColors:a,hasSymbolColors:r,vvColor:i}=e,s=o||i||r,u=e.colorMixMode==="replace",d=e.opacity>=me;if(a&&s)return u||d;const n=e.externalColor&&e.externalColor[3]>=me;return a?u?n:d:s?u||d:u?n:d}get hasEmissions(){return!!this.parameters.emissiveTextureId||!Po(this.parameters.emissiveFactor,Vt)}getConfiguration(e,o){const a=this.parameters,{treeRendering:r,doubleSided:i,doubleSidedType:s}=a;return this._configuration.output=e,this._configuration.hasNormalTexture=!r&&!!a.normalTextureId,this._configuration.hasColorTexture=!!a.textureId,this._configuration.hasVertexTangents=!r&&a.hasVertexTangents,this._configuration.instanced=a.isInstanced,this._configuration.instancedDoublePrecision=a.instancedDoublePrecision,this._configuration.vvSize=!!a.vvSize,this._configuration.hasVerticalOffset=a.verticalOffset!=null,this._configuration.hasScreenSizePerspective=a.screenSizePerspective!=null,this._configuration.hasSlicePlane=a.hasSlicePlane,this._configuration.hasSliceHighlight=a.hasSliceHighlight,this._configuration.alphaDiscardMode=a.textureAlphaMode,this._configuration.normalType=r?k.Attribute:a.normalType,this._configuration.transparent=a.transparent,this._configuration.writeDepth=a.writeDepth,a.customDepthTest!=null&&(this._configuration.customDepthTest=a.customDepthTest),this._configuration.hasOccludees=a.hasOccludees,this._configuration.cullFace=a.hasSlicePlane?ge.None:a.cullFace,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=!r&&a.modelTransformation!=null,this._configuration.hasVertexColors=a.hasVertexColors,this._configuration.hasSymbolColors=a.hasSymbolColors,this._configuration.doubleSidedMode=r?Z.WindingOrder:i&&s==="normal"?Z.View:i&&s==="winding-order"?Z.WindingOrder:Z.None,this._configuration.instancedColor=a.hasInstancedColor,this._configuration.receiveShadows=a.receiveShadows&&a.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=a.receiveAmbientOcclusion&&o.ssao!=null,this._configuration.vvColor=!!a.vvColor,this._configuration.textureAlphaPremultiplied=!!a.textureAlphaPremultiplied,this._configuration.pbrMode=a.usePBR?a.isSchematic?$.Schematic:$.Normal:$.Disabled,this._configuration.hasMetallicRoughnessTexture=!r&&!!a.metallicRoughnessTextureId,this._configuration.emissionSource=r?we.None:a.emissiveTextureId!=null?we.Texture:a.usePBR?we.Value:we.None,this._configuration.hasOcclusionTexture=!r&&!!a.occlusionTextureId,this._configuration.offsetBackfaces=!(!a.transparent||!a.offsetTransparentBackfaces),this._configuration.oitPass=o.oitPass,this._configuration.enableOffset=o.camera.relativeElevation<er,this._configuration.snowCover=Dn(o),this._configuration.hasColorTextureTransform=!!a.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!a.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!a.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!a.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!a.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,o,a,r,i,s){if(this.parameters.verticalOffset!=null){const u=a.camera;G(Rt,o[12],o[13],o[14]);let d=null;switch(a.viewingMode){case Ft.Global:d=wt(_o,Rt);break;case Ft.Local:d=ut(_o,Un)}let n=0;const c=He(qn,Rt,u.eye),h=ae(c),f=ie(c,c,1/h);let p=null;this.parameters.screenSizePerspective&&(p=si(d,f)),n+=tr(u,h,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),ie(d,d,n),li(Nt,d,a.transform.inverseRotation),r=He(jn,r,Nt),i=He(Hn,i,Nt)}Ir(e,a,r,i,Yr(a.verticalOffset),s)}createGLMaterial(e){return new Fn(e)}createBufferWriter(){return new Xr(this._vertexBufferLayout)}}class Fn extends or{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled,hasOccludees:e.hasOccludees});const o=this._material.parameters;this.updateTexture(o.textureId);const a=e.camera.viewInverseTransposeMatrix;return G(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?St:oo,e)}}class Bn extends Ln{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function Dn(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}function Vn(t){const e=ir().vec3f(_.POSITION);return t.normalType===k.Compressed?e.vec2i16(_.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(_.NORMAL),t.hasVertexTangents&&e.vec4f(_.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(_.UV0),t.hasVertexColors&&e.vec4u8(_.COLOR),t.hasSymbolColors&&e.vec4u8(_.SYMBOLCOLOR),ci("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(_.OBJECTANDLAYERIDCOLOR),e}const jn=M(),Hn=M(),Un=Io(0,0,1),_o=M(),Nt=M(),Rt=M(),qn=M(),se=()=>hi.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Wn(t,e){const o=await kn(t,e),a=await Jn(o.textureDefinitions??{},e);let r=0;for(const i in a)if(a.hasOwnProperty(i)){const s=a[i];r+=s!=null&&s.image?s.image.width*s.image.height*4:0}return{resource:o,textures:a,size:r+di(o)}}async function kn(t,e){const o=e==null?void 0:e.streamDataRequester;if(o)return Yn(t,o,e);const a=await Bo(ui(t,e));if(a.ok===!0)return a.value.data;Do(a.error),Na(a.error)}async function Yn(t,e,o){const a=await Bo(e.request(t,"json",o));if(a.ok===!0)return a.value;Do(a.error),Na(a.error.details.url)}function Na(t){throw new Go("",`Request for object resource failed: ${t}`)}function Zn(t){const e=t.params,o=e.topology;let a=!0;switch(e.vertexAttributes||(se().warn("Geometry must specify vertex attributes"),a=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const s in e.vertexAttributes){const u=i[s];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(se().warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),a=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(se().warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),a=!1)):(se().warn(`Indexed geometry does not specify face indices for '${s}' attribute`),a=!1)}}else se().warn("Indexed geometries must specify faces"),a=!1;break}default:se().warn(`Unsupported topology '${o}'`),a=!1}t.params.material||(se().warn("Geometry requires material"),a=!1);const r=t.params.vertexAttributes;for(const i in r)r[i].values||(se().warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function Xn(t,e){var v,x;const o=new Array,a=new Array,r=new Array,i=new Ii,s=t.resource,u=Vo.parse(s.version||"1.0","wosr");es.validate(u);const d=s.model.name,n=s.model.geometries,c=s.materialDefinitions??{},h=t.textures;let f=0;const p=new Map;for(let m=0;m<n.length;m++){const w=n[m];if(!Zn(w))continue;const y=Qn(w),C=w.params.vertexAttributes,A=[],D=E=>{if(w.params.topology==="PerAttributeArray")return null;const F=w.params.faces;for(const H in F)if(H===E)return F[H].values;return null},R=C[_.POSITION],O=R.values.length/R.valuesPerElement;for(const E in C){const F=C[E],H=F.values,Q=D(E)??qo(O);A.push([E,new Le(H,Q,F.valuesPerElement,!0)])}const N=y.texture,I=h&&h[N];if(I&&!p.has(N)){const{image:E,parameters:F}=I,H=new oa(E,F);a.push(H),p.set(N,H)}const U=p.get(N),V=U?U.id:void 0,L=y.material;let z=i.get(L,N);if(z==null){const E=c[L.slice(L.lastIndexOf("/")+1)].params;E.transparency===1&&(E.transparency=0);const F=I&&I.alphaChannelUsage,H=E.transparency>0||F==="transparency"||F==="maskAndTransparency",Q=I?Ra(I.alphaChannelUsage):void 0,oe={ambient:lo(E.diffuse),diffuse:lo(E.diffuse),opacity:1-(E.transparency||0),transparent:H,textureAlphaMode:Q,textureAlphaCutoff:.33,textureId:V,initTextureTransparent:!0,doubleSided:!0,cullFace:ge.None,colorMixMode:E.externalColorMixMode||"tint",textureAlphaPremultiplied:(I==null?void 0:I.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(oe,e.materialParameters),z=new Mt(oe,e),i.set(L,N,z)}r.push(z);const W=new sa(z,A);f+=((x=(v=A.find(E=>E[0]===_.POSITION))==null?void 0:v[1])==null?void 0:x.indices.length)??0,o.push(W)}return{engineResources:[{name:d,stageResources:{textures:a,materials:r,geometries:o},pivotOffset:s.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Kn(o)}}function Kn(t){const e=jo();return t.forEach(o=>{const a=o.boundingInfo;a!=null&&(mt(e,a.bbMin),mt(e,a.bbMax))}),e}async function Jn(t,e){const o=new Array;for(const i in t){const s=t[i],u=s.images[0].data;if(!u){se().warn("Externally referenced texture data is not yet supported");continue}const d=s.encoding+";base64,"+u,n="/textureDefinitions/"+i,c=s.channels==="rgba"?s.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:ht.REPEAT,t:ht.REPEAT},preMultiplyAlpha:Ra(c)!==j.Opaque},f=e!=null&&e.disableTextures?Promise.resolve(null):Pi(d,e);o.push(f.then(p=>({refId:n,image:p,parameters:h,alphaChannelUsage:c})))}const a=await Promise.all(o),r={};for(const i of a)r[i.refId]=i;return r}function Ra(t){switch(t){case"mask":return j.Mask;case"maskAndTransparency":return j.MaskBlend;case"none":return j.Opaque;default:return j.Blend}}function Qn(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const es=new Vo(1,2,"wosr");async function ts(t,e){var h;const o=Ga(pi(t));if(o.fileType==="wosr"){const f=await(e.cache?e.cache.loadWOSR(o.url,e):Wn(o.url,e)),{engineResources:p,referenceBoundingBox:v}=Xn(f,e);return{lods:p,referenceBoundingBox:v,isEsriSymbolResource:!1,isWosr:!0}}let a;if(e.cache)a=await e.cache.loadGLTF(o.url,e,!!e.usePBR);else{const{loadGLTF:f}=await ot(()=>import("./loader-62f84d80.js"),["assets/loader-62f84d80.js","assets/index-76dad814.js","assets/index-d4471cb7.css","assets/mat4f64-9a8384aa.js","assets/quat-20f4ba14.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/BufferView-6edfd8ea.js","assets/resourceUtils-13a1a5f1.js","assets/basicInterfaces-d9412f98.js"]);a=await f(new $i(e.streamDataRequester),o.url,e,e.usePBR)}const r=(h=a.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,i=a.meta.isEsriSymbolResource&&r!=null&&a.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,ns(a,r));const s=!!e.usePBR,u=a.meta.isEsriSymbolResource?{usePBR:s,isSchematic:!1,treeRendering:i,mrrFactors:_r}:{usePBR:s,isSchematic:!1,treeRendering:!1,mrrFactors:ca},d={...e.materialParameters,treeRendering:i},{engineResources:n,referenceBoundingBox:c}=os(a,u,d,e,o.specifiedLodIndex);return{lods:n,referenceBoundingBox:c,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function Ga(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function os(t,e,o,a,r){const i=t.model,s=new Array,u=new Map,d=new Map,n=i.lods.length,c=jo();return i.lods.forEach((h,f)=>{const p=a.skipHighLods===!0&&(n>1&&f===0||n>3&&f===1)||a.skipHighLods===!1&&r!=null&&f!==r;if(p&&f!==0)return;const v=new fr(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(x=>{const m=p?new Mt({},a):as(i,x,v,e,o,u,d,a),{geometry:w,vertexCount:y}=is(x,m??new Mt({},a)),C=w.boundingInfo;C!=null&&f===0&&(mt(c,C.bbMin),mt(c,C.bbMax)),m!=null&&(v.stageResources.geometries.push(w),v.numberOfVertices+=y)}),p||s.push(v)}),{engineResources:s,referenceBoundingBox:c}}function as(t,e,o,a,r,i,s,u){var v,x;const d=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=t.materials.get(e.material),c=e.attributes.texCoord0!=null,h=e.attributes.normal!=null;if(n==null)return null;const f=rs(n.alphaMode);if(!i.has(d)){if(c){const I=(U,V=!1)=>{if(U!=null&&!s.has(U)){const L=t.textures.get(U);if(L!=null){const z=L.data;s.set(U,new oa(It(z)?z.data:z,{...L.parameters,preMultiplyAlpha:!It(z)&&V,encoding:It(z)&&z.encoding!=null?z.encoding:void 0}))}}};I(n.textureColor,f!==j.Opaque),I(n.textureNormal),I(n.textureOcclusion),I(n.textureEmissive),I(n.textureMetallicRoughness)}const m=n.color[0]**(1/Ie),w=n.color[1]**(1/Ie),y=n.color[2]**(1/Ie),C=n.emissiveFactor[0]**(1/Ie),A=n.emissiveFactor[1]**(1/Ie),D=n.emissiveFactor[2]**(1/Ie),R=n.textureColor!=null&&c?s.get(n.textureColor):null,O=Sr({normalTexture:n.textureNormal,metallicRoughnessTexture:n.textureMetallicRoughness,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,emissiveTexture:n.textureEmissive,emissiveFactor:n.emissiveFactor,occlusionTexture:n.textureOcclusion}),N=((v=n.normalTextureTransform)==null?void 0:v.scale)!=null?(x=n.normalTextureTransform)==null?void 0:x.scale:zo;i.set(d,new Mt({...a,transparent:f===j.Blend,customDepthTest:at.Lequal,textureAlphaMode:f,textureAlphaCutoff:n.alphaCutoff,diffuse:[m,w,y],ambient:[m,w,y],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?ge.None:ge.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:h?k.Attribute:k.ScreenDerivative,castShadows:!0,receiveShadows:n.receiveShadows,receiveAmbientOcclusion:n.receiveAmbientOcclustion,textureId:R!=null?R.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:n.textureNormal!=null&&c?s.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:R!=null&&!!R.parameters.preMultiplyAlpha,occlusionTextureId:n.textureOcclusion!=null&&c?s.get(n.textureOcclusion).id:void 0,emissiveTextureId:n.textureEmissive!=null&&c?s.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:n.textureMetallicRoughness!=null&&c?s.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[C,A,D],mrrFactors:O?Or:[n.metallicFactor,n.roughnessFactor,a.mrrFactors[2]],isSchematic:O,colorTextureTransformMatrix:ke(n.colorTextureTransform),normalTextureTransformMatrix:ke(n.normalTextureTransform),scale:[N[0],N[1]],occlusionTextureTransformMatrix:ke(n.occlusionTextureTransform),emissiveTextureTransformMatrix:ke(n.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:ke(n.metallicRoughnessTextureTransform),...r},u))}const p=i.get(d);if(o.stageResources.materials.push(p),c){const m=w=>{w!=null&&o.stageResources.textures.push(s.get(w))};m(n.textureColor),m(n.textureNormal),m(n.textureOcclusion),m(n.textureEmissive),m(n.textureMetallicRoughness)}return p}function is(t,e){const o=t.attributes.position.count,a=Si(t.indices||o,t.primitiveType),r=nt(3*o),{typedBuffer:i,typedBufferStride:s}=t.attributes.position;Mi(r,i,t.transform,3,s);const u=[[_.POSITION,new Le(r,a,3,!0)]];if(t.attributes.normal!=null){const n=nt(3*o),{typedBuffer:c,typedBufferStride:h}=t.attributes.normal;Lo(Pe,t.transform),wi(n,c,Pe,3,h),co(Pe)&&ho(n,n),u.push([_.NORMAL,new Le(n,a,3,!0)])}if(t.attributes.tangent!=null){const n=nt(4*o),{typedBuffer:c,typedBufferStride:h}=t.attributes.tangent;mi(Pe,t.transform),Ci(n,c,Pe,4,h),co(Pe)&&ho(n,n,4),u.push([_.TANGENT,new Le(n,a,4,!0)])}if(t.attributes.texCoord0!=null){const n=nt(2*o),{typedBuffer:c,typedBufferStride:h}=t.attributes.texCoord0;Oi(n,c,2,h),u.push([_.UV0,new Le(n,a,2,!0)])}const d=t.attributes.color;if(d!=null){const n=new Uint8Array(4*o);d.elementCount===4?d instanceof xi?fo(n,d,255):d instanceof Ho?_i(n,d):d instanceof bi&&fo(n,d,1/256):(n.fill(255),d instanceof Uo?mo(n,d.typedBuffer,255,4,d.typedBufferStride):t.attributes.color instanceof Ti?Ei(n,d.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof yi&&mo(n,d.typedBuffer,1/256,4,d.typedBufferStride)),u.push([_.COLOR,new Le(n,a,4,!0)])}return{geometry:new sa(e,u),vertexCount:o}}const Pe=Ht();function rs(t){switch(t){case"BLEND":return j.Blend;case"MASK":return j.Mask;case"OPAQUE":case null:case void 0:return j.Opaque}}function ns(t,e){for(let o=0;o<t.model.lods.length;++o){const a=t.model.lods[o];for(const r of a.parts){const i=r.attributes.normal;if(i==null)return;const s=r.attributes.position,u=s.count,d=M(),n=M(),c=M(),h=new Uint8Array(4*u),f=new Float64Array(3*u),p=fi(vi(),r.transform);let v=0,x=0;for(let m=0;m<u;m++){s.getVec(m,n),i.getVec(m,d),Je(n,n,r.transform),He(c,n,e.center),uo(c,c,e.radius);const w=c[2],y=ae(c),C=Math.min(.45+.55*y*y,1);uo(c,c,e.radius),p!==null&&Je(c,c,p),wt(c,c),o+1!==t.model.lods.length&&t.model.lods.length>1&&Gt(c,c,d,w>-1?.2:Math.min(-4*w-3.8,1)),f[v]=c[0],f[v+1]=c[1],f[v+2]=c[2],v+=3,h[x]=255*C,h[x+1]=255*C,h[x+2]=255*C,h[x+3]=255,x+=4}r.attributes.normal=new Uo(f),r.attributes.color=new Ho(h)}}}const Xs=Object.freeze(Object.defineProperty({__proto__:null,fetch:ts,parseUrl:Ga},Symbol.toStringTag,{value:"Module"}));export{An as J,Rn as R,vn as a,Kt as d,sn as f,Xs as o};
