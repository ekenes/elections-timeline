import{dA as li,a7 as To,r as m,q as F,w as ur,d1 as ci,aF as $,hd as Ft,iD as zt,he as _o,ek as ge,ei as X,hi as Be,iG as er,ep as ut,oc as bo,bG as hr,i as di,d4 as ui,l1 as Eo,bH as So,bm as It,aG as $t,bx as Et,ir as de,il as Nr,is as ne,a0 as hi,iv as Ke,iF as ht,e6 as wo,e3 as nt,m7 as tr,gW as Mo,ar as ae,qy as Te,lA as yo,cv as mi,cw as Ao,s as _e,gN as Pe,gT as Bt,$ as fi,_ as xt,bW as St,cN as pi,cR as mt,cT as $e,g as qe,k_ as Co,ie as Oo,kc as Oe,fy as Io,dK as $o,iK as No,n8 as Po,cu as Ro,hj as ve,cQ as Xe,kY as Lo,dw as Do,f3 as Pr,jT as Fo,bh as rt,hg as it,a1 as Rr,rh as zo,ij as Bo,hS as Vo,lK as Uo,cW as Go,eV as ke,ri as Ho,rj as jo,e7 as Ct,aC as vi,aE as mr,rk as gi,rl as xi,e4 as Lr,aB as Wo,gL as qo,e2 as ko,iM as Dr,iN as Yo,bi as Xo}from"./index-02eff6e6.js";import{t as Zo}from"./requestImageUtils-cfb17578.js";import{s as be,i as fe,a as rr,O as ir,e as Tt,n as Vt,u as Ve}from"./basicInterfaces-cbf2757f.js";import{_ as et}from"./TextureFormat-60b88abd.js";import{s as H}from"./Util-dd4663f8.js";import{H as Ko}from"./InterleavedLayout-c541ee63.js";import{b as pe,a as Q,t as Ut,H as fr,n as z,u as Ee,c as Fr,o as Yt,r as Jo}from"./NormalAttribute.glsl-335d8cbf.js";import{o as l,t as Je,r as P}from"./interfaces-d79e913c.js";import{e as f}from"./VertexAttribute-c957ed9e.js";import{a as I}from"./BindType-d21d71dd.js";import"./boundedPlane-a4f1fcdc.js";import{E as Ti,U as xe}from"./sphere-098e4920.js";import{B as Gt,o as Qo,g as Ht,r as ea,c as ta,p as ra,f as ia}from"./renderState-95c3e7c2.js";import{e as _t,o as Qe}from"./mat3f64-e19cdcb8.js";import{e as pr,o as zr}from"./mat4f64-9a8384aa.js";import{I as oa,L as aa}from"./orientedBoundingBox-e085098f.js";import{x as _i,c as Br,y as na,u as sa,q as la,i as Vr}from"./BufferView-ca9895dd.js";import{o as ca,r as da}from"./doublePrecisionUtils-e3c3d0d8.js";function $l(t,e=!1){return t<=li?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function ua(t){t.vertex.code.add(l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.int(pe.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.int(pe.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.int(pe.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.int(pe.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let K=class{constructor(e,r,i,o,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={[I.Pass]:null,[I.Draw]:null},o)switch(i){case I.Pass:this.bind[I.Pass]=o;break;case I.Draw:this.bind[I.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},ft=class extends K{constructor(e,r){super(e,"sampler2D",I.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function ha(){return!!To("enable-feature:objectAndLayerId-rendering")}function bi({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(l`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(l`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let re=class extends K{constructor(e,r){super(e,"vec3",I.Draw,(i,o,a,n)=>i.setUniform3fv(e,r(o,a,n)))}},k=class extends K{constructor(e,r){super(e,"vec3",I.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}},Ei=class extends K{constructor(e,r){super(e,"mat3",I.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}},ue=class extends K{constructor(e,r){super(e,"mat3",I.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}},Ye=class extends K{constructor(e,r){super(e,"mat4",I.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}},G=class extends ci{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([F()],G.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([F()],G.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([F()],G.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([F()],G.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([F()],G.prototype,"LABELS_SHOW_BORDER",void 0),m([F()],G.prototype,"TEXT_SHOW_BASELINE",void 0),m([F()],G.prototype,"TEXT_SHOW_BORDER",void 0),m([F()],G.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([F()],G.prototype,"OVERLAY_SHOW_CENTER",void 0),m([F()],G.prototype,"SHOW_POI",void 0),m([F()],G.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([F()],G.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([F()],G.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([F()],G.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([F()],G.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([F()],G.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([F()],G.prototype,"I3S_TREE_SHOW_TILES",void 0),m([F()],G.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([F()],G.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([F()],G.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([F()],G.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([F()],G.prototype,"LINE_WIREFRAMES",void 0),G=m([ur("esri.views.3d.support.debugFlags")],G);const Vl=new G;var st;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",t[t.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",t[t.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",t[t.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",t[t.HUD_MATERIAL=12]="HUD_MATERIAL",t[t.LABEL_MATERIAL=13]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=14]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",t[t.DRAPED_WATER=17]="DRAPED_WATER",t[t.VOXEL=18]="VOXEL",t[t.MAX_SLOTS=19]="MAX_SLOTS"})(st||(st={}));function vr(t){t.attributes.add(f.POSITION,"vec3"),t.vertex.code.add(l`vec3 positionModel() { return position; }`)}function ma(t,e){t.include(vr);const r=t.vertex;r.include(bi,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new k("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new ue("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new Ye("transformProjFromView",i=>i.transformProjFromView),new Ei("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new re("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new re("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(l`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(l`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?l`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let fa=class extends Je{constructor(){super(...arguments),this.transformWorldFromViewTH=$(),this.transformWorldFromViewTL=$(),this.transformViewFromCameraRelativeRS=_t(),this.transformProjFromView=pr()}},pa=class extends Je{constructor(){super(...arguments),this.transformWorldFromModelRS=_t(),this.transformWorldFromModelTH=$(),this.transformWorldFromModelTL=$()}};function Si(t,e){switch(e.normalType){case Q.Attribute:case Q.Compressed:t.include(Ut,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Ei("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ue("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(l`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Q.ScreenDerivative:t.vertex.code.add(l`void forwardNormal() {}`);break;default:Ft(e.normalType);case Q.COUNT:}}let va=class extends fa{constructor(){super(...arguments),this.transformNormalViewFromGlobal=_t()}},ga=class extends pa{constructor(){super(...arguments),this.transformNormalGlobalFromModel=_t(),this.toMapSpace=zt()}},wi=class{constructor(){this.id=_o()}};const Mi=new Map([[f.POSITION,0],[f.NORMAL,1],[f.NORMALCOMPRESSED,1],[f.UV0,2],[f.COLOR,3],[f.COLORFEATUREATTRIBUTE,3],[f.SIZE,4],[f.TANGENT,4],[f.CENTEROFFSETANDDISTANCE,5],[f.SYMBOLCOLOR,5],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.INSTANCEOBJECTANDLAYERIDCOLOR,7],[f.ROTATION,8],[f.INSTANCEMODEL,8],[f.INSTANCEMODELNORMAL,12],[f.INSTANCEMODELORIGINHI,11],[f.INSTANCEMODELORIGINLO,15]]);let xa=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=$(),this._tmpMbs=Ti(),this._tmpObb=new oa,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=ge(e)}applyToVertex(e,r,i){const o=X(yi,e,r,i),a=X(ba,e,r,i+this.componentLocalOriginLength),n=this._totalOffset/ge(a);return Be(this._tmpVertex,o,a,n),this._tmpVertex}applyToAabb(e){const r=this.componentLocalOriginLength,i=e[0],o=e[1],a=e[2]+r,n=e[3],s=e[4],c=e[5]+r,u=Math.abs(i),d=Math.abs(o),h=Math.abs(a),v=Math.abs(n),g=Math.abs(s),p=Math.abs(c),x=.5*(1+Math.sign(i*n))*Math.min(u,v),T=.5*(1+Math.sign(o*s))*Math.min(d,g),V=.5*(1+Math.sign(a*c))*Math.min(h,p),R=Math.max(u,v),B=Math.max(d,g),L=Math.max(h,p),D=Math.sqrt(x*x+T*T+V*V),M=Math.sign(u+i),b=Math.sign(d+o),E=Math.sign(h+a),C=Math.sign(v+n),O=Math.sign(g+s),_=Math.sign(p+c),w=this._totalOffset;if(D<w)return e[0]-=(1-M)*w,e[1]-=(1-b)*w,e[2]-=(1-E)*w,e[3]+=C*w,e[4]+=O*w,e[5]+=_*w,e;const y=w/Math.sqrt(R*R+B*B+L*L),U=w/D,j=U-y,q=-j;return e[0]+=i*(M*q+U),e[1]+=o*(b*q+U),e[2]+=a*(E*q+U),e[3]+=n*(C*j+y),e[4]+=s*(O*j+y),e[5]+=c*(_*j+y),e}applyToMbs(e){const r=ge(xe(e)),i=this._totalOffset/r;return Be(xe(this._tmpMbs),xe(e),xe(e),i),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/r,this._tmpMbs}applyToObb(e){return aa(e,this._totalOffset,this._totalOffset,er.Global,this._tmpObb),this._tmpObb}},Ta=class{constructor(e=0){this.offset=e,this.sphere=Ti(),this.tmpVertex=$()}applyToVertex(e,r,i){const o=this.objectTransform.transform,a=X(yi,e,r,i),n=ut(a,a,o),s=this.offset/ge(n);Be(n,n,n,s);const c=this.objectTransform.inverse;return ut(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(e,r){const i=this.offset/ge(e);Be(e,e,e,i);const o=this.offset/ge(r);Be(r,r,r,o)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=ge(xe(e)),i=this.offset/r;return Be(xe(this.sphere),xe(e),xe(e),i),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const Ur=new Ta;function _a(t){return t!=null?(Ur.offset=t,Ur):null}new xa;const yi=$(),ba=$();function Ea(t){return Math.abs(t*t*t)}function Ai(t,e,r){const i=r.parameters;return Xt.scale=Math.min(i.divisor/(e-i.offset),1),Xt.factor=Ea(t),Xt}function Ci(t,e){return bo(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function Sa(t,e,r){const i=Ai(t,e,r);return i.minScaleFactor=0,Ci(1,i)}function Yl(t,e,r,i){i.scale=Sa(t,e,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function Xl(t,e,r=[0,0]){const i=Math.min(Math.max(e.scale,e.minScaleFactor),1);return r[0]=t[0]*i,r[1]=t[1]*i,r}function wa(t,e,r,i){return Ci(t,Ai(e,r,i))}const Xt={scale:0,factor:0,minScaleFactor:0};function Ma(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;o!=null&&(a=wa(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return hr(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Gr(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?Array.isArray(t[i])&&di(o,t[i])||(t[i]=o.slice(),r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}const ya={multiply:1,ignore:2,replace:3,tint:4};let jt=class{constructor(e,r){this._module=e,this._load=r}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},Hr=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new ui({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Eo()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){var e;this._context.useProgram(this),this._textures.forEach((r,i)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(i,r.unit)}),(e=this._fragmentUniforms)==null||e.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},gr=class{constructor(e,r,i,o,a=Mi){this.release=o,this.locations=a,this.primitiveType=So.TRIANGLES,this.key=r.key,this._program=new Hr(e.rctx,i.get().build(r),a),this._pipeline=this.initializePipeline(r),this.reload=async n=>{if(n&&await i.reload(),!this.key.equals(r.key))throw new Error("Configuration was changed after construction, cannot reload shader");It(this._program),this._program=new Hr(e.rctx,i.get().build(r),a),this._pipeline=this.initializePipeline(r)}}destroy(){this._program=It(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,r){return this._pipeline}initializePipeline(e){return Gt({blending:Qo,colorWrite:Ht})}};var pt;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(pt||(pt={}));let Aa=class extends wi{constructor(e,r){super(),this.type=pt.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=Mi,this._pp0=$t(0,0,1),this._pp1=$t(0,0,0),this._parameters=new r,Gr(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Gr(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){var e;(e=this.repository)==null||e.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,r,i,o,a,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,r,i,this._pp0,this._pp1,a)}};var or;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(or||(or={}));var Y;(function(t){t[t.NONE=0]="NONE",t[t.ColorAlpha=1]="ColorAlpha",t[t.FrontFace=2]="FrontFace",t[t.COUNT=3]="COUNT"})(Y||(Y={}));const Oi=ea(Et.ONE,Et.ZERO,Et.ONE,Et.ONE_MINUS_SRC_ALPHA);function ec(t){return t===Y.FrontFace?null:Oi}function Ca(t){switch(t){case Y.NONE:return ta;case Y.ColorAlpha:return Oi;case Y.FrontFace:case Y.COUNT:return null}}function Oa(t){if(t.draped)return null;switch(t.oitPass){case Y.NONE:case Y.FrontFace:return t.writeDepth?ra:null;case Y.ColorAlpha:case Y.COUNT:return null}}const Ia=5e5,$a={factor:-1,units:-2};function Na(t){return t?$a:null}function Pa(t,e=de.LESS){return t===Y.NONE||t===Y.FrontFace?e:de.LEQUAL}function Ra(t,e){const r=fr(e);return t===Y.ColorAlpha||r?{buffers:[Nr.COLOR_ATTACHMENT0,Nr.COLOR_ATTACHMENT1]}:null}de.LESS;de.ALWAYS;const La={mask:255},Da={function:{func:de.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.ZERO}},Fa={function:{func:de.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.REPLACE}};de.EQUAL,be.OutlineVisualElementMask,be.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;de.NOTEQUAL,be.OutlineVisualElementMask,be.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;function tc({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:a,occlusionTexture:n}){return t==null&&e==null&&o==null&&(a==null||hi(a,Ke))&&n==null&&(i==null||i===1)&&(r==null||r===1)}const za=ht(1,1,.5),rc=ht(0,.6,.2),ic=ht(0,1,.2);let Ze=class extends K{constructor(e,r){super(e,"vec2",I.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}};function jr(t){t.varyings.add("linearDepth","float")}function Ii(t){t.vertex.uniforms.add(new Ze("nearFar",(e,r)=>r.camera.nearFar))}function $i(t){t.vertex.code.add(l`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Ni(t,e){const{vertex:r}=t;switch(e.output){case z.Color:case z.ColorEmission:if(e.receiveShadows)return jr(t),void r.code.add(l`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case z.Shadow:case z.ShadowHighlight:case z.ShadowExcludeHighlight:case z.ViewshedShadow:return t.include(ma,e),jr(t),Ii(t),$i(t),void r.code.add(l`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(l`void forwardLinearDepth() {}`)}function Pi(t){t.vertex.code.add(l`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ue(t,e){Va(t,e,new re("slicePlaneOrigin",(r,i)=>zi(e,r,i)),new re("slicePlaneBasis1",(r,i)=>{var o;return Nt(e,r,i,(o=i.slicePlane)==null?void 0:o.basis1)}),new re("slicePlaneBasis2",(r,i)=>{var o;return Nt(e,r,i,(o=i.slicePlane)==null?void 0:o.basis2)}))}function ac(t,e){Ri(t,e,new re("slicePlaneOrigin",(r,i)=>zi(e,r,i)),new re("slicePlaneBasis1",(r,i)=>{var o;return Nt(e,r,i,(o=i.slicePlane)==null?void 0:o.basis1)}),new re("slicePlaneBasis2",(r,i)=>{var o;return Nt(e,r,i,(o=i.slicePlane)==null?void 0:o.basis2)}))}const Ba=l`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
bool rejectBySlice(vec3 pos) {
return sliceByPlane(pos);
}`;function Ri(t,e,...r){e.hasSlicePlane?(t.uniforms.add(...r),t.code.add(Ba)):t.code.add("bool rejectBySlice(vec3 pos) { return false; }")}function Va(t,e,...r){Ri(t,e,...r),e.hasSlicePlane?t.code.add(`
    void discardBySlice(vec3 pos) {
      if (sliceByPlane(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):t.code.add(l`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function Li(t,e,r){return t.instancedDoublePrecision?X(Ua,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Di(t,e){return t!=null?nt(Pt,e.origin,t):e.origin}function Fi(t,e,r){return t.hasSliceTranslatedView?e!=null?tr(Ga,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function zi(t,e,r){if(r.slicePlane==null)return Ke;const i=Li(t,e,r),o=Di(i,r.slicePlane),a=Fi(t,i,r);return a!=null?ut(Pt,o,a):o}function Nt(t,e,r,i){if(i==null||r.slicePlane==null)return Ke;const o=Li(t,e,r),a=Di(o,r.slicePlane),n=Fi(t,o,r);return n!=null?(wo(tt,i,a),ut(Pt,a,n),ut(tt,tt,n),nt(tt,tt,Pt)):i}const Ua=$(),Pt=$(),tt=$(),Ga=pr();function Ge(t){$i(t),t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let oe=class extends K{constructor(e,r){super(e,"float",I.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}},Ha=class extends K{constructor(e,r){super(e,"mat4",I.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}};function vt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Ke):t.uniforms.add(new re("cameraPosition",(r,i)=>X(Bi,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function He(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Ye("proj",(i,o)=>o.camera.projectionMatrix),new Ha("view",(i,o)=>tr(Wr,o.camera.viewMatrix,i.origin)),new re("localOrigin",i=>i.origin));const r=i=>X(Bi,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Ye("proj",(i,o)=>o.camera.projectionMatrix),new Ye("view",(i,o)=>tr(Wr,o.camera.viewMatrix,r(o))),new k("localOrigin",(i,o)=>r(o)))}const Wr=pr(),Bi=$();function ja(t){t.uniforms.add(new Ye("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function lc(t){t.uniforms.add(new oe("pixelRatio",(e,r)=>r.camera.pixelRatio/r.overlayStretch))}const qr=_t();function Vi(t,e){const r=e.hasModelTransformation,i=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Ye("model",a=>a.modelTransformation??zr)),t.vertex.uniforms.add(new ue("normalLocalOriginFromModel",a=>(Mo(qr,a.modelTransformation??zr),qr)))),e.instanced&&i&&(t.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(f.INSTANCEMODEL,"mat3"),t.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const o=t.vertex;i&&(o.include(bi,e),o.uniforms.add(new re("viewOriginHi",(a,n)=>ca(X(wt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),wt)),new re("viewOriginLo",(a,n)=>da(X(wt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),wt)))),o.code.add(l`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?l`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(l`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===z.Normal&&(ja(o),o.code.add(l`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&o.code.add(l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const wt=$();let xr=class extends K{constructor(e,r){super(e,"int",I.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}};function Ui(t,e){e.hasSymbolColors?(t.include(ua),t.attributes.add(f.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(l`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new xr("colorMixMode",r=>ya[r.colorMixMode])),t.vertex.code.add(l`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}var J;function Ne(t,e){switch(e.textureCoordinateType){case J.Default:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case J.Compressed:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case J.Atlas:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(f.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Ft(e.textureCoordinateType);case J.None:return void t.vertex.code.add(l`void forwardTextureCoordinates() {}`);case J.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(J||(J={}));function Gi(t,e){e.hasVertexColors?(t.attributes.add(f.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(l`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(l`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(l`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Wa(t){t.vertex.code.add(l`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(l`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(l`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(l`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(l`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(l`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function dc(t){t.uniforms.add(new k("screenSizePerspective",e=>Hi(e.screenSizePerspective)))}function qa(t){t.uniforms.add(new k("screenSizePerspectiveAlignment",e=>Hi(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Hi(t){return X(ka,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const ka=$();let te=class extends K{constructor(e,r){super(e,"vec4",I.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}};function ji(t,e){const r=t.vertex;e.hasVerticalOffset?(Xa(r),e.hasScreenSizePerspective&&(t.include(Wa),qa(r),vt(t.vertex,e)),r.code.add(l`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?l`vec3 worldNormal = normalize(worldPos + localOrigin);`:l`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?l`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ya=zt();function Xa(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),s=r.camera.pixelRatio||1;return ae(Ya,a*s,n,i,o)}))}function Za(t,e){if(e.output!==z.ObjectAndLayerIdColor)return t.vertex.code.add(l`void forwardObjectAndLayerIdColor() {}`),void t.fragment.code.add(l`void outputObjectAndLayerIdColor() {}`);const r=e.objectAndLayerIdColorInstanced;t.varyings.add("objectAndLayerIdColorVarying","vec4"),t.attributes.add(r?f.INSTANCEOBJECTANDLAYERIDCOLOR:f.OBJECTANDLAYERIDCOLOR,"vec4"),t.vertex.code.add(l`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),t.fragment.code.add(l`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function Wi(t){t.code.add(l`const float MAX_RGBA4_FLOAT =
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
}`)}function Ka(t,e){switch(e.output){case z.Shadow:case z.ShadowHighlight:case z.ShadowExcludeHighlight:case z.ViewshedShadow:t.fragment.include(Wi),t.fragment.code.add(l`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}let Ja=class extends K{constructor(e,r){super(e,"ivec2",I.Pass,(i,o,a)=>i.setUniform2iv(e,r(o,a)))}},Z=class extends K{constructor(e,r){super(e,"sampler2D",I.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function qi(t,e){const{fragment:r}=t;e.output===z.Highlight?(r.uniforms.add(new Z("depthTexture",(i,o)=>o.mainDepth),new Z("highlightTexture",(i,o)=>o.highlightMixTexture),new xr("highlightLevel",(i,o)=>o.highlightLevel??0),new Ja("highlightMixOrigin",(i,o)=>o.highlightMixOrigin)),t.outputs.add("fragHighlight","vec2",0),r.code.add(l`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),e.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(l`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
uint occludedOrMask = isHighlightOccluded() ? 0xaau : 0u;
uvec2 added = uvec2(highlightToAdd * 255.0);
uvec2 masked = (added & uvec2(occlusionAndMask)) | (uvec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(l`void calculateOcclusionAndOutputHighlight() {}`)}let Qa=class extends K{constructor(e,r,i){super(e,"vec4",I.Pass,(o,a,n)=>o.setUniform4fv(e,r(a,n)),i)}},en=class extends K{constructor(e,r,i){super(e,"float",I.Pass,(o,a,n)=>o.setUniform1fv(e,r(a,n)),i)}};var kr,Yr;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(kr||(kr={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(Yr||(Yr={}));function vc(t,e,r){if(!e.vvSize)return X(t,1,1,1),t;for(let i=0;i<3;++i){const o=e.vvSize.offset[i]+r[0]*e.vvSize.factor[i];t[i]=hr(o,e.vvSize.minSize[i],e.vvSize.maxSize[i])}return t}const Zt=8;function lt(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(f.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new k("vvSizeMinSize",o=>o.vvSize.minSize)),r.uniforms.add(new k("vvSizeMaxSize",o=>o.vvSize.maxSize)),r.uniforms.add(new k("vvSizeOffset",o=>o.vvSize.offset)),r.uniforms.add(new k("vvSizeFactor",o=>o.vvSize.factor)),r.uniforms.add(new ue("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new k("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(l`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?l`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Zt),r.uniforms.add(new en("vvColorValues",o=>o.vvColor.values,Zt),new Qa("vvColorColors",o=>o.vvColor.colors,Zt)),r.code.add(l`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?l`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l`vec4 vvColor() { return vec4(1.0); }`)}function je(t,e){tn(t,e,new oe("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function tn(t,e,r){const i=t.fragment,o=e.alphaDiscardMode,a=o===fe.Blend;o!==fe.Mask&&o!==fe.MaskBlend||i.uniforms.add(r),i.code.add(l`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${o===fe.Opaque?"color.a = 1.0;":`if (color.a < ${a?l.float(Te):"textureAlphaCutoff"}) {
              discard;
             } ${P(o===fe.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function ki(t,e){const{vertex:r,fragment:i}=t,o=e.hasColorTexture&&e.alphaDiscardMode!==fe.Opaque,{output:a,normalType:n,hasColorTextureTransform:s}=e;switch(a){case z.Depth:He(r,e),t.include(Ge,e),t.fragment.include(Ue,e),t.include(Ne,e),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(l`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(je,e),i.main.add(l`
        discardBySlice(vpos);
        ${P(o,l`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case z.Shadow:case z.ShadowHighlight:case z.ShadowExcludeHighlight:case z.ViewshedShadow:case z.ObjectAndLayerIdColor:He(r,e),t.include(Ge,e),t.include(Ne,e),t.include(lt,e),t.include(Ka,e),t.fragment.include(Ue,e),t.include(Za,e),Ii(t),t.varyings.add("depth","float"),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(l`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(je,e),i.main.add(l`
        discardBySlice(vpos);
        ${P(o,l`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${a===z.ObjectAndLayerIdColor?l`outputObjectAndLayerIdColor();`:l`outputDepth(depth);`}`);break;case z.Normal:{He(r,e),t.include(Ge,e),t.include(Ut,e),t.include(Si,e),t.include(Ne,e),t.include(lt,e),o&&i.uniforms.add(new Z("tex",u=>u.texture)),n===Q.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const c=n===Q.Attribute||n===Q.Compressed;r.main.add(l`
        vpos = getVertexInLocalOriginSpace();
        ${c?l`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),t.fragment.include(Ue,e),t.include(je,e),i.main.add(l`
        discardBySlice(vpos);
        ${P(o,l`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${n===Q.ScreenDerivative?l`vec3 normal = screenDerivativeNormal(vPositionView);`:l`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case z.Highlight:He(r,e),t.include(Ge,e),t.include(Ne,e),t.include(lt,e),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(l`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.fragment.include(Ue,e),t.include(je,e),t.include(qi,e),i.main.add(l`
        discardBySlice(vpos);
        ${P(o,l`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function rn(t){t.fragment.code.add(l`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Tr(t,e){const{textureCoordinateType:r}=e;if(r===J.None||r===J.COUNT)return;t.include(Ne,e);const i=r===J.Atlas;i&&t.include(rn),t.fragment.code.add(l`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function on(t,e){const r=t.fragment;switch(r.code.add(l`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case ie.None:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ie.View:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ie.WindingOrder:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ft(e.doubleSidedMode);case ie.COUNT:}}var ie;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(ie||(ie={}));function an(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(f.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===ie.WindingOrder?r.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(l`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),e.textureCoordinateType!==J.None&&(t.include(Tr,e),r.uniforms.add(e.bindType===I.Pass?new Z("normalTexture",i=>i.textureNormal):new ft("normalTexture",i=>i.textureNormal)),e.hasNormalTextureTransform&&(r.uniforms.add(new Ze("scale",i=>i.scale??yo)),r.uniforms.add(new ue("normalTextureTransformMatrix",i=>i.normalTextureTransformMatrix??Qe))),r.code.add(l`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&r.code.add(l`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(l`return tangentSpace * rawNormal;
}`))}var ar,ct;(function(t){t.OPAQUE="opaque-color",t.TRANSPARENT="transparent-color",t.COMPOSITE="composite-color",t.FINAL="final-color"})(ar||(ar={})),function(t){t.SSAO="ssao",t.LASERLINES="laserline-color",t.ANTIALIASING="aa-color",t.HIGHLIGHTS="highlight-color",t.MAGNIFIER="magnifier-color",t.OCCLUDED="occluded-color",t.VIEWSHED="viewshed-color",t.OPAQUE_ENVIRONMENT="opaque-environment-color",t.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(ct||(ct={}));var We,Xr;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(We||(We={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Xr||(Xr={}));let ze=class extends ci{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=ar.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([mi(()=>this.view.ready,e=>{var r;e&&((r=this.view._stage)==null||r.renderer.addRenderNode(this))},Ao)])}destroy(){var e,r;(r=(e=this.view._stage)==null?void 0:e.renderer)==null||r.removeRenderNode(this)}precompile(){}render(){throw new _e("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var i,o,a;const e=(o=(i=this._frameBuffer)==null?void 0:i.getTexture())==null?void 0:o.descriptor,r=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(a=r.fbo)==null||a.initializeAndBind(),r}bindRenderTarget(){var e,r;return(r=(e=this._frameBuffer)==null?void 0:e.fbo)==null||r.initializeAndBind(),this._frameBuffer}requestRender(e){var r;e===rr.UPDATE&&((r=this.view._stage)==null||r.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){var e;return(e=this.view._stage)==null?void 0:e.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find(({name:r})=>r===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};m([F({constructOnly:!0})],ze.prototype,"view",void 0),m([F({constructOnly:!0})],ze.prototype,"consumes",void 0),m([F()],ze.prototype,"produces",void 0),ze=m([ur("esri.views.3d.webgl.RenderNode")],ze);const nn=ze,sn=3e5,Zr=5e5;function Yi(t,e=!0){t.attributes.add(f.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.main.add(l`
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?l`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function _r(t){t.uniforms.add(new Ze("zProjectionMap",(e,r)=>ln(r.camera))),t.code.add(l`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),t.code.add(l`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),t.code.add(l`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function ln(t){const e=t.projectionMatrix;return Pe(cn,e[14],e[10])}const cn=Bt();let dn=class extends K{constructor(e,r){super(e,"vec2",I.Draw,(i,o,a,n)=>i.setUniform2fv(e,r(o,a,n)))}};const un=()=>fi.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Xi=class{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}},Wt=class extends Xi{constructor(){super(...arguments),this.vertex=new Kr,this.fragment=new Kr,this.attributes=new pn,this.varyings=new vn,this.extensions=new nr,this.outputs=new lr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),s=a.code.generateSource(),c=a.main.generateSource(),u=e==="vertex"?Tn:xn,d=a.constants.generateSource(),h=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${u}

${d.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${h.join(`
`)}

${s.join(`
`)}

${c.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[I.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[I.Pass];n&&r.set(a.name,n)});const i=Array.from(r.values()),o=i.length;return(a,n)=>{for(let s=0;s<o;++s)i[s](e,a,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[I.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[I.Draw];n&&r.set(a.name,n)});const i=Array.from(r.values()),o=i.length;return(a,n,s)=>{for(let c=0;c<o;++c)i[c](e,s,a,n)}}},hn=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new _e(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else un().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},mn=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];throw new _e("Shader does not contain main function body.")}},fn=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},Kr=class extends Xi{constructor(){super(...arguments),this.uniforms=new hn(this),this.main=new mn(this),this.code=new fn(this),this.constants=new gn(this)}get builder(){return this}},pn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},vn=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&H(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,o)=>r.push(e==="vertex"?`out ${i} ${o};`:`in ${i} ${o};`)),r}},nr=class sr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?sr.ALLOWLIST_VERTEX:sr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};nr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],nr.ALLOWLIST_VERTEX=[];let lr=class cr{constructor(){this._entries=new Map}add(e,r,i=0){const o=this._entries.get(i);o?H(o.name===e&&o.type===r,`Fragment shader output location ${i} occupied`):this._entries.set(i,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:cr.DEFAULT_NAME,type:cr.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((i,o)=>r.push(`layout(location = ${o}) out ${i.type} ${i.name};`)),r}};lr.DEFAULT_TYPE="vec4",lr.DEFAULT_NAME="fragColor";let gn=class W{constructor(e){this._stage=e,this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=W._numberToFloatStr(i);break;case"int":o=W._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${W._numberToFloatStr(i[0])},                            ${W._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${W._numberToFloatStr(i[0])},                            ${W._numberToFloatStr(i[1])},                            ${W._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${W._numberToFloatStr(i[0])},                            ${W._numberToFloatStr(i[1])},                            ${W._numberToFloatStr(i[2])},                            ${W._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${W._numberToIntStr(i[0])},                             ${W._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${W._numberToIntStr(i[0])},                             ${W._numberToIntStr(i[1])},                             ${W._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${W._numberToIntStr(i[0])},                             ${W._numberToIntStr(i[1])},                             ${W._numberToIntStr(i[2])},                             ${W._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>W._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const xn=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
#endif`,Tn=`precision highp float;
precision highp sampler2D;`,Kt=4;function _n(){const t=new Wt,e=t.fragment;t.include(Yi);const r=(Kt+1)/2,i=1/(2*r*r);return e.include(_r),e.uniforms.add(new Z("depthMap",o=>o.depthTexture),new ft("tex",o=>o.colorTexture),new dn("blurSize",o=>o.blurSize),new oe("projScale",(o,a)=>{const n=a.camera.distance;return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale})),e.code.add(l`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(l`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${l.int(Kt)}; r <= ${l.int(Kt)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const bn=Object.freeze(Object.defineProperty({__proto__:null,build:_n},Symbol.toStringTag,{value:"Module"}));let Jr=class extends gr{constructor(e,r,i){super(e,r,new jt(bn,()=>xt(()=>import("./SSAOBlur.glsl-9fcd59c2.js"),["assets/SSAOBlur.glsl-9fcd59c2.js","assets/interfaces-d79e913c.js","assets/VertexAttribute-c957ed9e.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/BindType-d21d71dd.js","assets/requestImageUtils-cfb17578.js","assets/basicInterfaces-cbf2757f.js","assets/TextureFormat-60b88abd.js","assets/Util-dd4663f8.js","assets/InterleavedLayout-c541ee63.js","assets/BufferView-ca9895dd.js","assets/types-1305598a.js","assets/NormalAttribute.glsl-335d8cbf.js","assets/boundedPlane-a4f1fcdc.js","assets/sphere-098e4920.js","assets/mat3f64-e19cdcb8.js","assets/plane-53ccce62.js","assets/mat4f64-9a8384aa.js","assets/quatf64-216ddd5a.js","assets/lineSegment-adddbca3.js","assets/renderState-95c3e7c2.js","assets/orientedBoundingBox-e085098f.js","assets/quat-eaa78af8.js","assets/spatialReferenceEllipsoidUtils-16e47544.js","assets/computeTranslationToOriginAndRotation-e412a98d.js","assets/doublePrecisionUtils-e3c3d0d8.js"])),i)}initializePipeline(){return Gt({colorWrite:Ht})}};const En="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Sn=class extends Je{constructor(){super(...arguments),this.projScale=1}},wn=class extends Sn{constructor(){super(...arguments),this.intensity=1}},Mn=class extends Je{},yn=class extends Mn{constructor(){super(...arguments),this.blurSize=Bt()}};function An(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>Cn(r.camera))),t.fragment.uniforms.add(new Ze("zScale",(e,r)=>On(r.camera))),t.fragment.code.add(l`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Cn(t){const e=t.projectionMatrix;return e[11]===0?ae(Qr,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):ae(Qr,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Qr=zt();function On(t){return t.projectionMatrix[11]===0?Pe(ei,0,1):Pe(ei,1,0)}const ei=Bt(),ti=16;function In(){const t=new Wt,e=t.fragment;return t.include(Yi),t.include(An),e.include(_r),e.uniforms.add(new oe("radius",(r,i)=>br(i.camera))).code.add(l`vec3 sphere[16] = vec3[16](
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
}`),e.uniforms.add(new Z("normalMap",r=>r.normalTexture),new Z("depthMap",r=>r.depthTexture),new oe("projScale",r=>r.projScale),new Z("rnm",r=>r.noiseTexture),new Ze("rnmScale",(r,i)=>Pe(ri,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new oe("intensity",r=>r.intensity),new Ze("screenSize",(r,i)=>Pe(ri,i.camera.fullWidth,i.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.main.add(l`
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

      for(int i = 0; i < ${l.int(ti)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${l.int(ti)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),t}function br(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const ri=Bt(),$n=Object.freeze(Object.defineProperty({__proto__:null,build:In,getRadius:br},Symbol.toStringTag,{value:"Module"}));let ii=class extends gr{constructor(e,r,i){super(e,r,new jt($n,()=>xt(()=>import("./SSAO.glsl-eda29093.js"),["assets/SSAO.glsl-eda29093.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/interfaces-d79e913c.js","assets/VertexAttribute-c957ed9e.js","assets/BindType-d21d71dd.js","assets/requestImageUtils-cfb17578.js","assets/basicInterfaces-cbf2757f.js","assets/TextureFormat-60b88abd.js","assets/Util-dd4663f8.js","assets/InterleavedLayout-c541ee63.js","assets/BufferView-ca9895dd.js","assets/types-1305598a.js","assets/NormalAttribute.glsl-335d8cbf.js","assets/boundedPlane-a4f1fcdc.js","assets/sphere-098e4920.js","assets/mat3f64-e19cdcb8.js","assets/plane-53ccce62.js","assets/mat4f64-9a8384aa.js","assets/quatf64-216ddd5a.js","assets/lineSegment-adddbca3.js","assets/renderState-95c3e7c2.js","assets/orientedBoundingBox-e085098f.js","assets/quat-eaa78af8.js","assets/spatialReferenceEllipsoidUtils-16e47544.js","assets/computeTranslationToOriginAndRotation-e412a98d.js","assets/doublePrecisionUtils-e3c3d0d8.js"])),i)}initializePipeline(){return Gt({colorWrite:Ht})}};const ot=2;let Fe=class extends nn{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=ct.SSAO,this.isEnabled=()=>!1,this._enableTime=St(0),this._passParameters=new wn,this._drawParameters=new yn}initialize(){const e=Uint8Array.from(atob(En),i=>i.charCodeAt(0)),r=new pi;r.wrapMode=mt.CLAMP_TO_EDGE,r.pixelFormat=$e.RGB,r.wrapMode=mt.REPEAT,r.hasMipmap=!0,r.width=32,r.height=32,this._passParameters.noiseTexture=new qe(this.renderingContext,r,e),this.techniques.precompile(ii),this.techniques.precompile(Jr),this.addHandles(mi(()=>this.isEnabled(),()=>this._enableTime=St(0)))}destroy(){this._passParameters.noiseTexture=It(this._passParameters.noiseTexture)}render(e){const r=this.bindParameters,i=e.find(({name:b})=>b==="normals"),o=i==null?void 0:i.getTexture(),a=i==null?void 0:i.getTexture(Co),n=this.fboCache,s=r.camera,c=s.fullViewport[2],u=s.fullViewport[3],d=Math.round(c/ot),h=Math.round(u/ot),v=this.techniques.acquire(ii),g=this.techniques.acquire(Jr);if(!v.compiled||!g.compiled)return this._enableTime=St(performance.now()),this.requestRender(rr.UPDATE),v.release(),g.release(),n.acquire(d,h,ct.SSAO,We.RED);this._enableTime===0&&(this._enableTime=St(performance.now()));const p=this.renderingContext,x=this.view.qualitySettings.fadeDuration,T=s.relativeElevation,V=hr((Zr-T)/(Zr-sn),0,1),R=x>0?Math.min(x,performance.now()-this._enableTime)/x:1,B=R*V;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Nn/br(s)**6*B;const L=n.acquire(c,u,"ssao input",We.RG);p.bindFramebuffer(L.fbo),p.setViewport(0,0,c,u),p.bindTechnique(v,r,this._passParameters,this._drawParameters),p.screen.draw(),v.release();const D=n.acquire(d,h,"ssao blur",We.RED);p.bindFramebuffer(D.fbo),this._drawParameters.colorTexture=L.getTexture(),Pe(this._drawParameters.blurSize,0,ot/u),p.bindTechnique(g,r,this._passParameters,this._drawParameters),p.setViewport(0,0,d,h),p.screen.draw(),L.release();const M=n.acquire(d,h,ct.SSAO,We.RED);return p.bindFramebuffer(M.fbo),p.setViewport(0,0,c,u),p.setClearColor(1,1,1,0),p.clear(Oo.COLOR),this._drawParameters.colorTexture=D.getTexture(),Pe(this._drawParameters.blurSize,ot/c,0),p.bindTechnique(g,r,this._passParameters,this._drawParameters),p.setViewport(0,0,d,h),p.screen.draw(),g.release(),p.setViewport4fv(s.fullViewport),D.release(),R<1&&this.requestRender(rr.UPDATE),M}};m([F()],Fe.prototype,"consumes",void 0),m([F()],Fe.prototype,"produces",void 0),m([F({constructOnly:!0})],Fe.prototype,"techniques",void 0),m([F({constructOnly:!0})],Fe.prototype,"isEnabled",void 0),Fe=m([ur("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Fe);const Nn=.5;function Er(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Z("ssaoTex",(i,o)=>{var a;return(a=o.ssao)==null?void 0:a.getTexture()})),r.constants.add("blurSizePixelsInverse","float",1/ot),r.code.add(l`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(l`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}let Pn=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,r){return this._techniques.acquire(e,this._material.getConfiguration(this._output,r))}ensureResources(e){return ir.LOADED}},Rn=class extends Pn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){super.dispose(),this._texture=Oe(this._texture),this._textureNormal=Oe(this._textureNormal),this._textureEmissive=Oe(this._textureEmissive),this._textureOcclusion=Oe(this._textureOcclusion),this._textureMetallicRoughness=Oe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?ir.LOADED:ir.LOADING}get textureBindParameters(){return new Dn(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Oe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textures.acquire(e);if(Io(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Oe(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}},Ln=class extends Je{constructor(e=null){super(),this.textureEmissive=e}},Dn=class extends Ln{constructor(e=null,r=null,i=null,o=null,a=null,n,s){super(i),this.texture=e,this.textureNormal=r,this.textureOcclusion=o,this.textureMetallicRoughness=a,this.scale=n,this.normalTextureTransformMatrix=s}};var N;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(N||(N={}));function Zi(t,e){const r=e.pbrMode,i=t.fragment;if(r!==N.Schematic&&r!==N.Disabled&&r!==N.Normal)return void i.code.add(l`void applyPBRFactors() {}`);if(r===N.Disabled)return void i.code.add(l`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===N.Schematic)return void i.code.add(l`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:n,hasOcclusionTextureTransform:s,bindType:c}=e;(o||n)&&t.include(Tr,e),i.code.add(l`vec3 mrr;
float occlusion;`),o&&i.uniforms.add(c===I.Pass?new Z("texMetallicRoughness",u=>u.textureMetallicRoughness):new ft("texMetallicRoughness",u=>u.textureMetallicRoughness)),n&&i.uniforms.add(c===I.Pass?new Z("texOcclusion",u=>u.textureOcclusion):new ft("texOcclusion",u=>u.textureOcclusion)),i.uniforms.add(c===I.Pass?new k("mrrFactors",u=>u.mrrFactors):new re("mrrFactors",u=>u.mrrFactors)),i.code.add(l`
    ${P(o,l`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${P(n,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${n?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${P(o,`applyMetallicRoughness(${a?"metallicRoughnessUV":"vuv0"});`)}
      ${P(n,`applyOcclusion(${s?"occlusionUV":"vuv0"});`)}
    }
  `)}function Fn(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new k("lightingAmbientSH0",(o,a)=>X(oi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new te("lightingAmbientSH_R",(o,a)=>ae(me,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(o,a)=>ae(me,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(o,a)=>ae(me,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):i===2&&(r.uniforms.add(new k("lightingAmbientSH0",(o,a)=>X(oi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(o,a)=>ae(me,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(o,a)=>ae(me,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(o,a)=>ae(me,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(o,a)=>ae(me,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(o,a)=>ae(me,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(o,a)=>ae(me,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||r.code.add(l`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const oi=$(),me=zt();function Rt(t){t.uniforms.add(new k("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function gt(t){t.uniforms.add(new k("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function zn(t){Rt(t.fragment),gt(t.fragment),t.fragment.code.add(l`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Bn(t){const e=t.fragment.code;e.add(l`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}function Ki(t){const e=3.141592653589793,r=.3183098861837907;t.vertex.constants.add("PI","float",e),t.fragment.constants.add("PI","float",e),t.fragment.constants.add("LIGHT_NORMALIZATION","float",r),t.fragment.constants.add("INV_PI","float",r),t.fragment.constants.add("HALF_PI","float",1.570796326794897),t.fragment.constants.add("TWO_PI","float",6.28318530717958)}function Sr(t,e){const r=t.fragment.code;t.include(Ki),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic&&e.pbrMode!==N.Simplified&&e.pbrMode!==N.TerrainWithWater||(r.add(l`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(l`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||(t.include(Bn),r.add(l`struct PBRShadingInfo
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
};`),r.add(l`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(l`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(l`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Vn=class extends K{constructor(e,r){super(e,"bool",I.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}};const Un=.4;function wr(t){t.constants.add("ambientBoostFactor","float",Un)}function Mr(t){t.uniforms.add(new oe("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Ji(t,e){const r=t.fragment;switch(t.include(Er,e),e.pbrMode!==N.Disabled&&t.include(Sr,e),t.include(Fn,e),t.include(Ki),r.code.add(l`
    const float GAMMA_SRGB = ${l.float($o)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),wr(r),Mr(r),Rt(r),r.code.add(l`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?l`normalize(vPosWorld)`:l`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),gt(r),r.code.add(l`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:t.include(zn),r.code.add(l`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(l`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(l`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Vn("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(l`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new oe("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new oe("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)).code.add(l`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(l`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==N.Schematic||e.hasColorTexture?l`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:l`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Simplified:case N.TerrainWithWater:Rt(r),gt(r),r.code.add(l`const float roughnessTerrain = 0.5;
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
}`);break;default:Ft(e.pbrMode);case N.COUNT:}}let Gn=class extends K{constructor(e,r,i){super(e,"mat4",I.Draw,(o,a,n,s)=>o.setUniformMatrix4fv(e,r(a,n,s)),i)}},Hn=class extends K{constructor(e,r,i){super(e,"mat4",I.Pass,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}};function Qi(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Hn("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),to(t))}function eo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Gn("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),to(t))}function to(t){const e=t.fragment;e.include(Wi),e.uniforms.add(new Z("shadowMap",(r,i)=>i.shadowMap.depthTexture),new xr("numCascades",(r,i)=>i.shadowMap.numCascades),new te("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)).code.add(l`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function ro(t,{occlusionPass:e,terrainDepthTest:r,cullAboveTerrain:i}){const o=t.vertex,a=t.fragment;if(!r)return o.code.add("void forwardViewPosDepth(vec3 pos) {}"),void a.code.add(`${e?"bool":"void"} discardByTerrainDepth() { ${P(e,"return false;")}}`);t.varyings.add("viewPosDepth","float"),o.code.add(`void forwardViewPosDepth(vec3 pos) {
    viewPosDepth = pos.z;
  }`),a.include(_r),a.uniforms.add(new Z("terrainDepthTexture",(n,s)=>{var c;return(c=s.terrainDepth)==null?void 0:c.attachment})),a.code.add(l`
    ${e?"bool":"void"} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${e?"return viewPosDepth < linearDepth && depth < 1.0;":`if(viewPosDepth ${i?">":"<="} linearDepth) discard;`}
    }`)}function jn(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new ue("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??Qe)).code.add(l`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardColorUV(){}`)}function Wn(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new ue("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??Qe)).code.add(l`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardNormalUV(){}`)}function qn(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new ue("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??Qe)).code.add(l`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardEmissiveUV(){}`)}function kn(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new ue("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??Qe)).code.add(l`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardOcclusionUV(){}`)}function Yn(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==J.None?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new ue("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??Qe)).code.add(l`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(l`void forwardMetallicRoughnessUV(){}`)}function io(t){t.code.add(l`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function oo(t){t.include(io),t.code.add(l`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.int(pe.Multiply)}) {
        return allMixed;
      }
      if (mode == ${l.int(pe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int(pe.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.int(pe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int(pe.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}var le;(function(t){t[t.None=0]="None",t[t.Value=1]="Value",t[t.Texture=2]="Texture",t[t.COUNT=3]="COUNT"})(le||(le={}));function Xn(t,e){if(!Ee(e.output))return;const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:o}=e,a=r===le.Texture;a&&(t.include(Tr,e),t.fragment.uniforms.add(o===I.Pass?new Z("texEmission",s=>s.textureEmissive):new ft("texEmission",s=>s.textureEmissive)));const n=r===le.Value||a;n&&t.fragment.uniforms.add(o===I.Pass?new k("emissionFactor",s=>s.emissiveFactor):new re("emissionFactor",s=>s.emissiveFactor)),t.fragment.code.add(l`
    vec4 getEmissions() {
      vec4 emissions = ${n?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${P(a,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function ao(t,e){t.include(qi,e),t.include(Xn,e),t.fragment.include(io);const r=e.output===z.ObjectAndLayerIdColor,i=fr(e.output)&&e.oitPass!==Y.ColorAlpha,o=Ee(e.output)&&e.oitPass===Y.ColorAlpha,a=Ee(e.output)&&e.oitPass!==Y.ColorAlpha,n=e.discardInvisibleFragments;let s=0;(a||i||o)&&t.outputs.add("fragColor","vec4",s++),i&&t.outputs.add("fragEmission","vec4",s++),o&&t.outputs.add("fragAlpha","float",s++),t.fragment.code.add(l`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${P(r,"finalColor.a = 1.0;")}

      ${P(n,`if (finalColor.a < ${l.float(Te)}) { discard; }`)}

      finalColor = applySlice(finalColor, vWorldPosition);
      ${P(o,l`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${P(a,"fragColor = finalColor;")}
      ${P(i,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${P(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function Zn(t){const e=new Wt,{vertex:r,fragment:i,varyings:o}=e,{output:a,normalType:n,offsetBackfaces:s,instancedColor:c,spherical:u,receiveShadows:d,snowCover:h,pbrMode:v,textureAlphaPremultiplied:g,instancedDoublePrecision:p,hasVertexColors:x,hasVertexTangents:T,hasColorTexture:V,hasNormalTexture:R,hasNormalTextureTransform:B,hasColorTextureTransform:L}=t;if(He(r,t),e.include(vr),o.add("vpos","vec3"),e.include(lt,t),e.include(Vi,t),e.include(ji,t),e.include(jn,t),!Ee(a))return e.include(ki,t),e;e.include(Wn,t),e.include(qn,t),e.include(kn,t),e.include(Yn,t),vt(r,t),e.include(Ut,t),e.include(Ge,t);const D=n===Q.Attribute||n===Q.Compressed;return D&&s&&e.include(Pi),e.include(an,t),e.include(Si,t),c&&e.attributes.add(f.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),e.include(Ne,t),e.include(Ni,t),e.include(Ui,t),e.include(Gi,t),r.uniforms.add(new te("externalColor",M=>M.externalColor)),o.add("vcolorExt","vec4"),e.include(ro,t),r.main.add(l`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${P(c,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${l.float(Te)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${P(D,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${P(T,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${P(D&&s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),e.include(Ji,t),e.include(Er,t),e.include(je,t),e.include(p?Qi:eo,t),e.fragment.include(Ue,t),e.include(ao,t),vt(i,t),i.uniforms.add(r.uniforms.get("localOrigin"),new k("ambient",M=>M.ambient),new k("diffuse",M=>M.diffuse),new oe("opacity",M=>M.opacity),new oe("layerOpacity",M=>M.layerOpacity)),V&&i.uniforms.add(new Z("tex",M=>M.texture)),e.include(Zi,t),e.include(Sr,t),i.include(oo),e.include(on,t),wr(i),Mr(i),gt(i),i.main.add(l`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${V?l`
            vec4 texColor = texture(tex, ${L?"colorUV":"vuv0"});
            ${P(g,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${n===Q.ScreenDerivative?l`vec3 normal = screenDerivativeNormal(vPositionLocal);`:l`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${d?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":P(u,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${P(x,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${P(x,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${R?`mat3 tangentSpace = computeTangentSpace(${T?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${B?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${P(h,l`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${v===N.Normal||v===N.Schematic?l`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${P(h,l`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${h?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),e}const Kn=Object.freeze(Object.defineProperty({__proto__:null,build:Zn},Symbol.toStringTag,{value:"Module"}));let Jn=class extends va{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=za,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Tt.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Ke,this.instancedDoublePrecision=!1,this.normalType=Q.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ht(.2,.2,.2),this.diffuse=ht(.8,.8,.8),this.externalColor=No(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=$(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Vt.Less,this.textureAlphaMode=fe.Blend,this.textureAlphaCutoff=Te,this.textureAlphaPremultiplied=!1,this.renderOccluded=or.Occlude,this.isDecoration=!1}},Gc=class extends ga{constructor(){super(...arguments),this.origin=$(),this.slicePlaneLocalOrigin=this.origin}},no=class extends gr{constructor(e,r,i,o=new jt(Kn,()=>xt(()=>import("./DefaultMaterial.glsl-de03466b.js"),["assets/DefaultMaterial.glsl-de03466b.js","assets/NormalAttribute.glsl-335d8cbf.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/interfaces-d79e913c.js","assets/VertexAttribute-c957ed9e.js","assets/mat3f64-e19cdcb8.js","assets/mat4f64-9a8384aa.js","assets/BindType-d21d71dd.js","assets/boundedPlane-a4f1fcdc.js","assets/sphere-098e4920.js","assets/plane-53ccce62.js","assets/quatf64-216ddd5a.js","assets/lineSegment-adddbca3.js","assets/basicInterfaces-cbf2757f.js","assets/requestImageUtils-cfb17578.js","assets/TextureFormat-60b88abd.js","assets/Util-dd4663f8.js","assets/InterleavedLayout-c541ee63.js","assets/BufferView-ca9895dd.js","assets/types-1305598a.js","assets/renderState-95c3e7c2.js","assets/orientedBoundingBox-e085098f.js","assets/quat-eaa78af8.js","assets/spatialReferenceEllipsoidUtils-16e47544.js","assets/computeTranslationToOriginAndRotation-e412a98d.js","assets/doublePrecisionUtils-e3c3d0d8.js"]))){super(e,r,o,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,r){const{oitPass:i,output:o,transparent:a,cullFace:n,customDepthTest:s,hasOccludees:c,enableOffset:u}=e,d=i===Y.NONE,h=i===Y.FrontFace;return Gt({blending:Ee(o)&&a?Ca(i):null,culling:es(e)?ia(n):null,depthTest:{func:Pa(i,Qn(s))},depthWrite:Oa(e),drawBuffers:o===z.Depth?{buffers:[Po.NONE]}:Ra(i,o),colorWrite:Ht,stencilWrite:c?La:null,stencilTest:c?r?Fa:Da:null,polygonOffset:d||h?null:Na(u)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Qn(t){return t===Vt.Lequal?de.LEQUAL:de.LESS}function es(t){return t.cullFace!==Tt.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}function ts(){return ai??(ai=(async()=>{const t=await xt(()=>import("./basis_transcoder-b75cff91.js"),[]),e=await t.default({locateFile:r=>Ro(`esri/libs/basisu/${r}`)});return e.initializeBasis(),e})()),ai}let ai,ce=null,Mt=null;async function so(){return Mt==null&&(Mt=ts(),ce=await Mt),Mt}function rs(t,e){if(ce==null)return t.byteLength;const r=new ce.BasisFile(new Uint8Array(t)),i=co(r)?lo(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function is(t,e){if(ce==null)return t.byteLength;const r=new ce.KTX2File(new Uint8Array(t)),i=uo(r)?lo(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function lo(t,e,r,i,o){const a=Lo(e?ve.COMPRESSED_RGBA8_ETC2_EAC:ve.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function co(t){return t.getNumImages()>=1&&!t.isUASTC()}function uo(t){return t.getFaces()>=1&&t.isETC1S()}async function os(t,e,r){ce==null&&(ce=await so());const i=new ce.BasisFile(new Uint8Array(r));if(!co(i))return null;i.startTranscoding();const o=ho(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,s)=>i.transcodeImage(s,0,a,n,0,0));return i.close(),i.delete(),o}async function as(t,e,r){ce==null&&(ce=await so());const i=new ce.KTX2File(new Uint8Array(r));if(!uo(i))return null;i.startTranscoding();const o=ho(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,s)=>i.transcodeImage(s,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function ho(t,e,r,i,o,a,n,s){const{compressedTextureETC:c,compressedTextureS3TC:u}=t.capabilities,[d,h]=c?i?[et.ETC2_RGBA,ve.COMPRESSED_RGBA8_ETC2_EAC]:[et.ETC1_RGB,ve.COMPRESSED_RGB8_ETC2]:u?i?[et.BC3_RGBA,ve.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[et.BC1_RGB,ve.COMPRESSED_RGB_S3TC_DXT1_EXT]:[et.RGBA32,$e.RGBA],v=e.hasMipmap?r:Math.min(1,r),g=[];for(let p=0;p<v;p++)g.push(new Uint8Array(n(p,d))),s(p,d,g[p]);return e.internalFormat=h,e.hasMipmap=g.length>1,e.samplingMode=e.hasMipmap?Xe.LINEAR_MIPMAP_LINEAR:Xe.LINEAR,e.width=o,e.height=a,new qe(t,e,{type:"compressed",levels:g})}const yt=()=>fi.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ns=542327876,ss=131072,ls=4;function yr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function cs(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const ds=yr("DXT1"),us=yr("DXT3"),hs=yr("DXT5"),ms=31,fs=0,ps=1,vs=2,gs=3,xs=4,Ts=7,_s=20,bs=21;function Es(t,e,r){const i=Ss(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:a,width:n,height:s}=i;return e.samplingMode=o.levels.length>1?Xe.LINEAR_MIPMAP_LINEAR:Xe.LINEAR,e.hasMipmap=o.levels.length>1,e.internalFormat=a,e.width=n,e.height=s,new qe(t,e,o)}function Ss(t,e){const r=new Int32Array(t.buffer,t.byteOffset,ms);if(r[fs]!==ns)return yt().error("Invalid magic number in DDS header"),null;if(!(r[_s]&ls))return yt().error("Unsupported format, must contain a FourCC code"),null;const i=r[bs];let o,a;switch(i){case ds:o=8,a=ve.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case us:o=16,a=ve.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case hs:o=16,a=ve.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return yt().error("Unsupported FourCC code:",cs(i)),null}let n=1,s=r[xs],c=r[gs];(3&s||3&c)&&(yt().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const u=s,d=c;let h,v;r[vs]&ss&&e!==!1&&(n=Math.max(1,r[Ts]));let g=t.byteOffset+r[ps]+4;const p=[];for(let x=0;x<n;++x)v=(s+3>>2)*(c+3>>2)*o,h=new Uint8Array(t.buffer,g,v),p.push(h),g+=v,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:u,height:d}}function ws(t,e){let a=t.width*t.height;if(a<4096)return t instanceof ImageData?mo(t):t;let n=t.width,s=t.height;do n=Math.ceil(n/2),s=Math.ceil(s/2),a=n*s;while(a>1048576||e!=null&&(n>e||s>e));return Ar(t,n,s)}function Ms(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const i=e/r;return Ar(t,Math.round(t.width*i),Math.round(t.height*i))}function Ar(t,e,r){if(t instanceof ImageData)return Ar(mo(t),e,r);const i=document.createElement("canvas");return i.width=e,i.height=r,i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function mo(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new _e("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}let Wc=class extends wi{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=pt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Do,this._parameters={...As,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Pr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Fo(e.src)||Pr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new pi;return r.wrapMode=this._parameters.wrap??mt.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?Xe.LINEAR_MIPMAP_LINEAR:Xe.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.usedMemory)||ys(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new qe(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):rt(r)&&this._parameters.encoding===Ve.DDS_ENCODING?this._loadFromDDSData(e,r):it(r)&&this._parameters.encoding===Ve.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(r)):(it(r)||rt(r))&&this._parameters.encoding===Ve.KTX2_ENCODING?this._loadFromKTX2(e,r):(it(r)||rt(r))&&this._parameters.encoding===Ve.BASIS_ENCODING?this._loadFromBasis(e,r):rt(r)?this._loadFromPixelData(e,r):it(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<dt.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=Es(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>as(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>os(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){H(this._parameters.width>0&&this._parameters.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===1?$e.LUMINANCE:this._parameters.components===3?$e.RGB:$e.RGBA,i.width=this._parameters.width??0,i.height=this._parameters.height??0,this._glTexture=new qe(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const o=await Zo(r,{signal:i});return Rr(i),this._loadFromImage(e,o)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const o=await zo(r,r.src,!1,i);return Rr(i),this._loadFromImage(e,o)})}_loadFromVideoElement(e,r){return r.readyState>=dt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",c),Uo(u)},s=()=>{r.readyState>=dt.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,r)))},c=d=>{n(),a(d||new _e("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",c);const u=Bo(i,()=>c(Vo()))}))}_loadFromImage(e,r){let i=r;if(!(i instanceof HTMLVideoElement)){const{maxTextureSize:n}=e.parameters;i=this._parameters.downsampleUncompressed?ws(i,n):Ms(i,n)}const o=fo(i);this._parameters.width=o.width,this._parameters.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this._parameters.components===3?$e.RGB:$e.RGBA,a.width=o.width,a.height=o.height,a.shouldCompress=this._parameters.shouldCompress,this._glTexture=new qe(e,a,i),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}unload(){if(this._glTexture=It(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function ys(t,e){if(t==null)return 0;if(it(t)||rt(t))return e.encoding===Ve.KTX2_ENCODING?is(t,!!e.mipmap):e.encoding===Ve.BASIS_ENCODING?rs(t,!!e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?fo(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}function fo(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var dt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(dt||(dt={}));const As={wrap:{s:mt.REPEAT,t:mt.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1,shouldCompress:!1};class Cs{constructor(e=!1,r=!0){this.isVerticalRay=e,this.normalRequired=r}}const At=Go();function Os(t,e,r,i,o,a){if(!t.visible)return;const n=ke(Hs,i,r),s=(u,d,h)=>{a(u,h,d,!1)},c=new Cs(!1,e.options.normalRequired);if(t.boundingInfo){H(t.type===pt.Mesh);const u=e.tolerance;po(t.boundingInfo,r,n,u,o,c,s)}else{const u=t.attributes.get(f.POSITION),d=u.indices;Ns(r,n,0,d.length/3,d,u.data,u.stride,o,c,s)}}const Is=$();function po(t,e,r,i,o,a,n){if(t==null)return;const s=zs(r,Is);if(Ho(At,t.bbMin),jo(At,t.bbMax),o!=null&&o.applyToAabb(At),Bs(At,e,s,i)){const{primitiveIndices:c,position:u}=t,d=c?c.length:u.indices.length/3;if(d>Us){const h=t.getChildren();if(h!==void 0){for(const v of h)po(v,e,r,i,o,a,n);return}}$s(e,r,0,d,u.indices,u.data,u.stride,c,o,a,n)}}const at=$();function $s(t,e,r,i,o,a,n,s,c,u,d){const h=t[0],v=t[1],g=t[2],p=e[0],x=e[1],T=e[2],{normalRequired:V}=u;for(let R=r;R<i;++R){const B=s[R],L=3*B,D=n*o[L];let M=a[D],b=a[D+1],E=a[D+2];const C=n*o[L+1];let O=a[C],_=a[C+1],w=a[C+2];const y=n*o[L+2];let U=a[y],j=a[y+1],q=a[y+2];c!=null&&([M,b,E]=c.applyToVertex(M,b,E,R),[O,_,w]=c.applyToVertex(O,_,w,R),[U,j,q]=c.applyToVertex(U,j,q,R));const ee=O-M,Se=_-b,we=w-E,Me=U-M,ye=j-b,he=q-E,Ae=x*he-ye*T,Ce=T*Me-he*p,Re=p*ye-Me*x,se=ee*Ae+Se*Ce+we*Re;if(Math.abs(se)<=Gs)continue;const Le=h-M,qt=v-b,kt=g-E,De=Le*Ae+qt*Ce+kt*Re;if(se>0){if(De<0||De>se)continue}else if(De>0||De<se)continue;const Cr=qt*we-Se*kt,Or=kt*ee-we*Le,Ir=Le*Se-ee*qt,bt=p*Cr+x*Or+T*Ir;if(se>0){if(bt<0||De+bt>se)continue}else if(bt>0||De+bt<se)continue;const $r=(Me*Cr+ye*Or+he*Ir)/se;$r>=0&&d($r,B,V?Ds(ee,Se,we,Me,ye,he,at):null)}}function Ns(t,e,r,i,o,a,n,s,c,u){const d=e,h=js,v=Math.abs(d[0]),g=Math.abs(d[1]),p=Math.abs(d[2]),x=v>=g?v>=p?0:2:g>=p?1:2,T=x,V=d[T]<0?2:1,R=(x+V)%3,B=(x+(3-V))%3,L=d[R]/d[T],D=d[B]/d[T],M=1/d[T],b=Ps,E=Rs,C=Ls,{normalRequired:O}=c;for(let _=r;_<i;++_){const w=3*_,y=n*o[w];X(h[0],a[y+0],a[y+1],a[y+2]);const U=n*o[w+1];X(h[1],a[U+0],a[U+1],a[U+2]);const j=n*o[w+2];X(h[2],a[j+0],a[j+1],a[j+2]),s&&(Ct(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],_)),Ct(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],_)),Ct(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],_))),ke(b,h[0],t),ke(E,h[1],t),ke(C,h[2],t);const q=b[R]-L*b[T],ee=b[B]-D*b[T],Se=E[R]-L*E[T],we=E[B]-D*E[T],Me=C[R]-L*C[T],ye=C[B]-D*C[T],he=Me*we-ye*Se,Ae=q*ye-ee*Me,Ce=Se*ee-we*q;if((he<0||Ae<0||Ce<0)&&(he>0||Ae>0||Ce>0))continue;const Re=he+Ae+Ce;if(Re===0)continue;const se=he*(M*b[T])+Ae*(M*E[T])+Ce*(M*C[T]);if(se*Math.sign(Re)<0)continue;const Le=se/Re;Le>=0&&u(Le,_,O?Fs(h):null)}}const Ps=$(),Rs=$(),Ls=$();function Ds(t,e,r,i,o,a,n){return X(Lt,t,e,r),X(Dt,i,o,a),vi(n,Lt,Dt),mr(n,n),n}function Fs(t){return ke(Lt,t[1],t[0]),ke(Dt,t[2],t[0]),vi(at,Lt,Dt),mr(at,at),at}const Lt=$(),Dt=$();function zs(t,e){return X(e,1/t[0],1/t[1],1/t[2])}function Bs(t,e,r,i){return Vs(t,e,r,i,1/0)}function Vs(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let s=Math.min(a,n),c=Math.max(a,n);const u=(t[1]-i-e[1])*r[1],d=(t[4]+i-e[1])*r[1];if(c=Math.min(c,Math.max(u,d)),c<0||(s=Math.max(s,Math.min(u,d)),s>c))return!1;const h=(t[2]-i-e[2])*r[2],v=(t[5]+i-e[2])*r[2];return c=Math.min(c,Math.max(h,v)),!(c<0)&&(s=Math.max(s,Math.min(h,v)),!(s>c)&&s<o)}const Us=1e3,Gs=1e-7,Hs=$(),js=[$(),$(),$()];function kc(t,e,r,i=1){const{data:o,indices:a}=t,n=e.typedBuffer,s=e.typedBufferStride,c=a.length;if(r*=s,i===1)for(let u=0;u<c;++u)n[r]=o[a[u]],r+=s;else for(let u=0;u<c;++u){const d=o[a[u]];for(let h=0;h<i;h++)n[r]=d,r+=s}}function ni(t,e,r){const{data:i,indices:o}=t,a=e.typedBuffer,n=e.typedBufferStride,s=o.length;r*=n;for(let c=0;c<s;++c){const u=2*o[c];a[r]=i[u],a[r+1]=i[u+1],r+=n}}function vo(t,e,r,i){const{data:o,indices:a}=t,n=e.typedBuffer,s=e.typedBufferStride,c=a.length;if(r*=s,i==null||i===1)for(let u=0;u<c;++u){const d=3*a[u];n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],r+=s}else for(let u=0;u<c;++u){const d=3*a[u];for(let h=0;h<i;++h)n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],r+=s}}function go(t,e,r,i=1){const{data:o,indices:a}=t,n=e.typedBuffer,s=e.typedBufferStride,c=a.length;if(r*=s,i===1)for(let u=0;u<c;++u){const d=4*a[u];n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],n[r+3]=o[d+3],r+=s}else for(let u=0;u<c;++u){const d=4*a[u];for(let h=0;h<i;++h)n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],n[r+3]=o[d+3],r+=s}}function Yc(t,e,r){const i=t.typedBuffer,o=t.typedBufferStride;e*=o;for(let a=0;a<r;++a)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=o}function Ws(t,e,r,i,o=1){if(!e)return void vo(t,r,i,o);const{data:a,indices:n}=t,s=r.typedBuffer,c=r.typedBufferStride,u=n.length,d=e[0],h=e[1],v=e[2],g=e[4],p=e[5],x=e[6],T=e[8],V=e[9],R=e[10],B=e[12],L=e[13],D=e[14];i*=c;let M=0,b=0,E=0;const C=gi(e)?O=>{M=a[O]+B,b=a[O+1]+L,E=a[O+2]+D}:O=>{const _=a[O],w=a[O+1],y=a[O+2];M=d*_+g*w+T*y+B,b=h*_+p*w+V*y+L,E=v*_+x*w+R*y+D};if(o===1)for(let O=0;O<u;++O)C(3*n[O]),s[i]=M,s[i+1]=b,s[i+2]=E,i+=c;else for(let O=0;O<u;++O){C(3*n[O]);for(let _=0;_<o;++_)s[i]=M,s[i+1]=b,s[i+2]=E,i+=c}}function qs(t,e,r,i,o=1){if(!e)return void vo(t,r,i,o);const{data:a,indices:n}=t,s=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=s[0],v=s[1],g=s[2],p=s[4],x=s[5],T=s[6],V=s[8],R=s[9],B=s[10],L=!xi(s),D=1e-6,M=1-D;i*=u;let b=0,E=0,C=0;const O=gi(s)?_=>{b=a[_],E=a[_+1],C=a[_+2]}:_=>{const w=a[_],y=a[_+1],U=a[_+2];b=h*w+p*y+V*U,E=v*w+x*y+R*U,C=g*w+T*y+B*U};if(o===1)if(L)for(let _=0;_<d;++_){O(3*n[_]);const w=b*b+E*E+C*C;if(w<M&&w>D){const y=1/Math.sqrt(w);c[i]=b*y,c[i+1]=E*y,c[i+2]=C*y}else c[i]=b,c[i+1]=E,c[i+2]=C;i+=u}else for(let _=0;_<d;++_)O(3*n[_]),c[i]=b,c[i+1]=E,c[i+2]=C,i+=u;else for(let _=0;_<d;++_){if(O(3*n[_]),L){const w=b*b+E*E+C*C;if(w<M&&w>D){const y=1/Math.sqrt(w);b*=y,E*=y,C*=y}}for(let w=0;w<o;++w)c[i]=b,c[i+1]=E,c[i+2]=C,i+=u}}function ks(t,e,r,i,o=1){if(!e)return void go(t,r,i,o);const{data:a,indices:n}=t,s=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=s[0],v=s[1],g=s[2],p=s[4],x=s[5],T=s[6],V=s[8],R=s[9],B=s[10],L=!xi(s),D=1e-6,M=1-D;if(i*=u,o===1)for(let b=0;b<d;++b){const E=4*n[b],C=a[E],O=a[E+1],_=a[E+2],w=a[E+3];let y=h*C+p*O+V*_,U=v*C+x*O+R*_,j=g*C+T*O+B*_;if(L){const q=y*y+U*U+j*j;if(q<M&&q>D){const ee=1/Math.sqrt(q);y*=ee,U*=ee,j*=ee}}c[i]=y,c[i+1]=U,c[i+2]=j,c[i+3]=w,i+=u}else for(let b=0;b<d;++b){const E=4*n[b],C=a[E],O=a[E+1],_=a[E+2],w=a[E+3];let y=h*C+p*O+V*_,U=v*C+x*O+R*_,j=g*C+T*O+B*_;if(L){const q=y*y+U*U+j*j;if(q<M&&q>D){const ee=1/Math.sqrt(q);y*=ee,U*=ee,j*=ee}}for(let q=0;q<o;++q)c[i]=y,c[i+1]=U,c[i+2]=j,c[i+3]=w,i+=u}}function Ys(t,e,r,i,o=1){const{data:a,indices:n}=t,s=r.typedBuffer,c=r.typedBufferStride,u=n.length;if(i*=c,e!==a.length||e!==4)if(o!==1)if(e!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let v=0;v<o;++v)s[i]=a[h],s[i+1]=a[h+1],s[i+2]=a[h+2],s[i+3]=255,i+=c}else for(let d=0;d<u;++d){const h=4*n[d];for(let v=0;v<o;++v)s[i]=a[h],s[i+1]=a[h+1],s[i+2]=a[h+2],s[i+3]=a[h+3],i+=c}else{if(e===4){for(let d=0;d<u;++d){const h=4*n[d];s[i]=a[h],s[i+1]=a[h+1],s[i+2]=a[h+2],s[i+3]=a[h+3],i+=c}return}for(let d=0;d<u;++d){const h=3*n[d];s[i]=a[h],s[i+1]=a[h+1],s[i+2]=a[h+2],s[i+3]=255,i+=c}}else{s[i]=a[0],s[i+1]=a[1],s[i+2]=a[2],s[i+3]=a[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,v=d[i/=4];i+=h;const g=u*o;for(let p=1;p<g;++p)d[i]=v,i+=h}}function Xs(t,e,r){const{data:i,indices:o}=t,a=e.typedBuffer,n=e.typedBufferStride,s=o.length,c=i[0];r*=n;for(let u=0;u<s;++u)a[r]=c,r+=n}function Zs(t,e,r,i,o=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,o===1)for(let s=0;s<r;++s)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let s=0;s<r;++s)for(let c=0;c<o;++c)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function Ks(t,e,r,i,o,a,n){var s;for(const c of r.fields.keys()){const u=t.get(c),d=u==null?void 0:u.indices;if(u&&d)Js(c,u,i,o,a,n);else if(c===f.OBJECTANDLAYERIDCOLOR&&e!=null){const h=(s=t.get(f.POSITION))==null?void 0:s.indices;if(h){const v=h.length;Zs(e,a.getField(c,_i),v,n)}}}}function Js(t,e,r,i,o,a){switch(t){case f.POSITION:{H(e.size===3);const n=o.getField(t,Vr);H(!!n,`No buffer view for ${t}`),n&&Ws(e,r,n,a);break}case f.NORMAL:{H(e.size===3);const n=o.getField(t,Vr);H(!!n,`No buffer view for ${t}`),n&&qs(e,i,n,a);break}case f.NORMALCOMPRESSED:{H(e.size===2);const n=o.getField(t,la);H(!!n,`No buffer view for ${t}`),n&&ni(e,n,a);break}case f.UV0:{H(e.size===2);const n=o.getField(t,sa);H(!!n,`No buffer view for ${t}`),n&&ni(e,n,a);break}case f.COLOR:case f.SYMBOLCOLOR:{const n=o.getField(t,_i);H(!!n,`No buffer view for ${t}`),H(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||Ys(e,e.size,n,a);break}case f.COLORFEATUREATTRIBUTE:{const n=o.getField(t,na);H(!!n,`No buffer view for ${t}`),H(e.size===1),n&&e.size===1&&Xs(e,n,a);break}case f.TANGENT:{H(e.size===4);const n=o.getField(t,Br);H(!!n,`No buffer view for ${t}`),n&&ks(e,r,n,a);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{H(e.size===4);const n=o.getField(t,Br);H(!!n,`No buffer view for ${t}`),n&&go(e,n,a)}}}class Qs{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(f.POSITION).indices.length}write(e,r,i,o,a,n){Ks(i,o,this.vertexBufferLayout,e,r,a,n)}}class el{constructor(e){this._bits=[...e]}equals(e){return di(this._bits,e.bits)}get code(){return this._code??(this._code=String.fromCharCode(...this._bits)),this._code}get bits(){return this._bits}}let tl=class extends Je{constructor(){var e;super(),this._parameterBits=((e=this._parameterBits)==null?void 0:e.map(()=>0))??[],this._parameterNames??(this._parameterNames=[])}get key(){return this._key??(this._key=new el(this._parameterBits)),this._key}decode(e=this.key){const r=this._parameterBits;this._parameterBits=[...e.bits];const i=this._parameterNames.map(o=>`    ${o}: ${this[o]}`).join(`
`);return this._parameterBits=r,i}};function S(t={}){return(e,r)=>{var u,d;e.hasOwnProperty("_parameterNames")||Object.defineProperty(e,"_parameterNames",{value:((u=e._parameterNames)==null?void 0:u.slice())??[],configurable:!0,writable:!0}),e.hasOwnProperty("_parameterBits")||Object.defineProperty(e,"_parameterBits",{value:((d=e._parameterBits)==null?void 0:d.slice())??[0],configurable:!0,writable:!0}),e._parameterNames.push(r);const i=t.count||2,o=Math.ceil(Math.log2(i)),a=e._parameterBits;let n=0;for(;a[n]+o>16;)n++,n>=a.length&&a.push(0);const s=a[n],c=(1<<o)-1<<s;a[n]+=o,t.count?Object.defineProperty(e,r,{get(){return(this._parameterBits[n]&c)>>s},set(h){if(this[r]!==h){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+h<<s&c,typeof h!="number")throw new _e(`Configuration value for ${r} must be a number, got ${typeof h}`);if(t.count==null)throw new _e(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(e,r,{get(){return!!((this._parameterBits[n]&c)>>s)},set(h){if(this[r]!==h&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+h<<s&c,typeof h!="boolean"))throw new _e(`Configuration value for ${r} must be boolean, got ${typeof h}`)}})}}let dr=class extends tl{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([S()],dr.prototype,"instancedDoublePrecision",void 0),m([S()],dr.prototype,"hasModelTransformation",void 0);let Ot=class extends dr{constructor(){super(...arguments),this.output=z.Color,this.oitPass=Y.NONE,this.hasSlicePlane=!1,this.bindType=I.Pass,this.writeDepth=!0}};m([S({count:z.COUNT})],Ot.prototype,"output",void 0),m([S({count:Y.COUNT})],Ot.prototype,"oitPass",void 0),m([S()],Ot.prototype,"hasSlicePlane",void 0);class A extends Ot{constructor(e,r){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=r,this.alphaDiscardMode=fe.Opaque,this.doubleSidedMode=ie.None,this.pbrMode=N.Disabled,this.cullFace=Tt.None,this.normalType=Q.Attribute,this.customDepthTest=Vt.Less,this.emissionSource=le.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===le.Texture||this.hasOcclusionTexture||this.hasNormalTexture?J.Default:J.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}m([S({count:fe.COUNT})],A.prototype,"alphaDiscardMode",void 0),m([S({count:ie.COUNT})],A.prototype,"doubleSidedMode",void 0),m([S({count:N.COUNT})],A.prototype,"pbrMode",void 0),m([S({count:Tt.COUNT})],A.prototype,"cullFace",void 0),m([S({count:Q.COUNT})],A.prototype,"normalType",void 0),m([S({count:Vt.COUNT})],A.prototype,"customDepthTest",void 0),m([S({count:le.COUNT})],A.prototype,"emissionSource",void 0),m([S()],A.prototype,"hasVertexColors",void 0),m([S()],A.prototype,"hasSymbolColors",void 0),m([S()],A.prototype,"hasVerticalOffset",void 0),m([S()],A.prototype,"hasColorTexture",void 0),m([S()],A.prototype,"hasMetallicRoughnessTexture",void 0),m([S()],A.prototype,"hasOcclusionTexture",void 0),m([S()],A.prototype,"hasNormalTexture",void 0),m([S()],A.prototype,"hasScreenSizePerspective",void 0),m([S()],A.prototype,"hasVertexTangents",void 0),m([S()],A.prototype,"hasOccludees",void 0),m([S()],A.prototype,"hasModelTransformation",void 0),m([S()],A.prototype,"offsetBackfaces",void 0),m([S()],A.prototype,"vvSize",void 0),m([S()],A.prototype,"vvColor",void 0),m([S()],A.prototype,"receiveShadows",void 0),m([S()],A.prototype,"receiveAmbientOcclusion",void 0),m([S()],A.prototype,"textureAlphaPremultiplied",void 0),m([S()],A.prototype,"instanced",void 0),m([S()],A.prototype,"instancedColor",void 0),m([S()],A.prototype,"writeDepth",void 0),m([S()],A.prototype,"transparent",void 0),m([S()],A.prototype,"enableOffset",void 0),m([S()],A.prototype,"terrainDepthTest",void 0),m([S()],A.prototype,"cullAboveTerrain",void 0),m([S()],A.prototype,"snowCover",void 0),m([S()],A.prototype,"hasColorTextureTransform",void 0),m([S()],A.prototype,"hasEmissionTextureTransform",void 0),m([S()],A.prototype,"hasNormalTextureTransform",void 0),m([S()],A.prototype,"hasOcclusionTextureTransform",void 0),m([S()],A.prototype,"hasMetallicRoughnessTextureTransform",void 0);function rl(t){const e=new Wt,{vertex:r,fragment:i,varyings:o}=e,{output:a,offsetBackfaces:n,instancedColor:s,pbrMode:c,snowCover:u,spherical:d}=t,h=c===N.Normal||c===N.Schematic;if(He(r,t),e.include(vr),o.add("vpos","vec3"),e.include(lt,t),e.include(Vi,t),e.include(ji,t),e.include(ro,t),Ee(a)&&(vt(e.vertex,t),e.include(Ut,t),e.include(Ge,t),n&&e.include(Pi),s&&e.attributes.add(f.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),e.include(Ne,t),e.include(Ni,t),e.include(Ui,t),e.include(Gi,t),r.uniforms.add(new te("externalColor",v=>v.externalColor)),o.add("vcolorExt","vec4"),r.main.add(l`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${P(s,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${l.float(Te)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${P(n,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();`)),Ee(a)){const{hasColorTexture:v,hasColorTextureTransform:g,receiveShadows:p}=t;e.include(Ji,t),e.include(Er,t),e.include(je,t),e.include(t.instancedDoublePrecision?Qi:eo,t),e.fragment.include(Ue,t),e.include(ao,t),vt(e.fragment,t),Rt(i),wr(i),Mr(i),i.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new k("ambient",x=>x.ambient),new k("diffuse",x=>x.diffuse),new oe("opacity",x=>x.opacity),new oe("layerOpacity",x=>x.layerOpacity)),v&&i.uniforms.add(new Z("tex",x=>x.texture)),e.include(Zi,t),e.include(Sr,t),i.include(oo),gt(i),i.main.add(l`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${v?`texture(tex, ${g?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${P(v,`${P(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${p?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":d?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?l`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${P(u,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${l`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${P(h,`vec3 normalGround = ${d?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${h?l`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${P(u,l`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${u?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return e.include(ki,t),e}const il=Object.freeze(Object.defineProperty({__proto__:null,build:rl},Symbol.toStringTag,{value:"Module"}));class ol extends no{constructor(e,r,i){super(e,r,i,new jt(il,()=>xt(()=>import("./RealisticTree.glsl-95060c0f.js"),["assets/RealisticTree.glsl-95060c0f.js","assets/NormalAttribute.glsl-335d8cbf.js","assets/index-02eff6e6.js","assets/index-d85835aa.css","assets/interfaces-d79e913c.js","assets/VertexAttribute-c957ed9e.js","assets/mat3f64-e19cdcb8.js","assets/mat4f64-9a8384aa.js","assets/BindType-d21d71dd.js","assets/boundedPlane-a4f1fcdc.js","assets/sphere-098e4920.js","assets/plane-53ccce62.js","assets/quatf64-216ddd5a.js","assets/lineSegment-adddbca3.js","assets/basicInterfaces-cbf2757f.js","assets/requestImageUtils-cfb17578.js","assets/TextureFormat-60b88abd.js","assets/Util-dd4663f8.js","assets/InterleavedLayout-c541ee63.js","assets/BufferView-ca9895dd.js","assets/types-1305598a.js","assets/renderState-95c3e7c2.js","assets/orientedBoundingBox-e085098f.js","assets/quat-eaa78af8.js","assets/spatialReferenceEllipsoidUtils-16e47544.js","assets/computeTranslationToOriginAndRotation-e412a98d.js","assets/doublePrecisionUtils-e3c3d0d8.js"]))),this.type="RealisticTreeTechnique"}}class Jc extends Aa{constructor(e,r){super(e,nl),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[st.OPAQUE_MATERIAL,i=>(Fr(i)||Yt(i))&&(!this.parameters.transparent||this.isTransparentEmitter(i))],[st.TRANSPARENT_MATERIAL,i=>(Fr(i)||Yt(i))&&this.parameters.transparent&&!this.isTransparentEmitter(i)&&this.parameters.writeDepth],[st.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>(Jo(i)||Yt(i))&&this.parameters.transparent&&!this.isTransparentEmitter(i)&&!this.parameters.writeDepth]]),this._vertexBufferLayout=ll(this.parameters),this._configuration=new A(r.spherical,r.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==z.Shadow&&e!==z.ShadowExcludeHighlight&&e!==z.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<Te)return!1;const{hasInstancedColor:r,hasVertexColors:i,hasSymbolColors:o,vvColor:a}=e,n=r||a||o,s=e.colorMixMode==="replace",c=e.opacity>=Te;if(i&&n)return s||c;const u=e.externalColor&&e.externalColor[3]>=Te;return i?s?u:c:n?s||c:s?u:c}get hasEmissions(){return!!this.parameters.emissiveTextureId||!hi(this.parameters.emissiveFactor,Ke)}getConfiguration(e,r){const i=this.parameters,{treeRendering:o,doubleSided:a,doubleSidedType:n}=i;return this._configuration.output=e,this._configuration.hasNormalTexture=!o&&!!i.normalTextureId,this._configuration.hasColorTexture=!!i.textureId,this._configuration.hasVertexTangents=!o&&i.hasVertexTangents,this._configuration.instanced=i.isInstanced,this._configuration.instancedDoublePrecision=i.instancedDoublePrecision,this._configuration.vvSize=!!i.vvSize,this._configuration.hasVerticalOffset=i.verticalOffset!=null,this._configuration.hasScreenSizePerspective=i.screenSizePerspective!=null,this._configuration.hasSlicePlane=i.hasSlicePlane,this._configuration.alphaDiscardMode=i.textureAlphaMode,this._configuration.normalType=o?Q.Attribute:i.normalType,this._configuration.transparent=i.transparent&&!this.isTransparentEmitter(e),this._configuration.writeDepth=i.writeDepth,i.customDepthTest!=null&&(this._configuration.customDepthTest=i.customDepthTest),this._configuration.hasOccludees=r.hasOccludees,this._configuration.cullFace=i.hasSlicePlane?Tt.None:i.cullFace,this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasModelTransformation=!o&&i.modelTransformation!=null,this._configuration.hasVertexColors=i.hasVertexColors,this._configuration.hasSymbolColors=i.hasSymbolColors,this._configuration.doubleSidedMode=o?ie.WindingOrder:a&&n==="normal"?ie.View:a&&n==="winding-order"?ie.WindingOrder:ie.None,this._configuration.instancedColor=i.hasInstancedColor,Ee(e)?(this._configuration.terrainDepthTest=r.terrainDepthTest,this._configuration.receiveShadows=i.receiveShadows,this._configuration.receiveAmbientOcclusion=i.receiveAmbientOcclusion&&r.ssao!=null):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!i.vvColor,this._configuration.textureAlphaPremultiplied=!!i.textureAlphaPremultiplied,this._configuration.pbrMode=i.usePBR?i.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!o&&!!i.metallicRoughnessTextureId,this._configuration.emissionSource=o?le.None:i.emissiveTextureId!=null?le.Texture:i.usePBR?le.Value:le.None,this._configuration.hasOcclusionTexture=!o&&!!i.occlusionTextureId,this._configuration.offsetBackfaces=!(!i.transparent||this.isTransparentEmitter(e)||!i.offsetTransparentBackfaces),this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<Ia,this._configuration.snowCover=sl(r),this._configuration.hasColorTextureTransform=!!i.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!i.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!i.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!i.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!i.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,r,i,o,a,n){if(this.parameters.verticalOffset!=null){const s=i.camera;X(Qt,r[12],r[13],r[14]);let c=null;switch(i.viewingMode){case er.Global:c=mr(si,Qt);break;case er.Local:c=Ct(si,ul)}let u=0;const d=nt(hl,Qt,s.eye),h=ge(d),v=Lr(d,d,1/h);let g=null;this.parameters.screenSizePerspective&&(g=Wo(c,v)),u+=Ma(s,h,this.parameters.verticalOffset,g??0,this.parameters.screenSizePerspective),Lr(c,c,u),qo(Jt,c,i.transform.inverseRotation),o=nt(cl,o,Jt),a=nt(dl,a,Jt)}Os(e,i,o,a,_a(i.verticalOffset),n)}isTransparentEmitter(e){return fr(e)&&this.parameters.transparent&&this.hasEmissions}createGLMaterial(e){return new al(e)}createBufferWriter(){return new Qs(this._vertexBufferLayout)}}class al extends Rn{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return X(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(r.treeRendering?ol:no,e)}}class nl extends Jn{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function sl(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}function ll(t){const e=Ko().vec3f(f.POSITION);return t.normalType===Q.Compressed?e.vec2i16(f.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(f.NORMAL),t.hasVertexTangents&&e.vec4f(f.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(f.UV0),t.hasVertexColors&&e.vec4u8(f.COLOR),t.hasSymbolColors&&e.vec4u8(f.SYMBOLCOLOR),ha()&&e.vec4u8(f.OBJECTANDLAYERIDCOLOR),e}const cl=$(),dl=$(),ul=$t(0,0,1),si=$(),Jt=$(),Qt=$(),hl=$();class xo{constructor(e,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.position=i,this._children=void 0,H(e.length>=1),H(i.size===3||i.size===4);const{data:o,size:a,indices:n}=i;H(n.length%this._numIndexPerPrimitive==0),H(n.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let c=a*n[this._numIndexPerPrimitive*e[0]];Ie.clear(),Ie.push(c);const u=$t(o[c],o[c+1],o[c+2]),d=ko(u);for(let g=0;g<s;++g){const p=this._numIndexPerPrimitive*e[g];for(let x=0;x<this._numIndexPerPrimitive;++x){c=a*n[p+x],Ie.push(c);let T=o[c];u[0]=Math.min(T,u[0]),d[0]=Math.max(T,d[0]),T=o[c+1],u[1]=Math.min(T,u[1]),d[1]=Math.max(T,d[1]),T=o[c+2],u[2]=Math.min(T,u[2]),d[2]=Math.max(T,d[2])}}this.bbMin=u,this.bbMax=d;const h=Dr($(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let v=this.radius*this.radius;for(let g=0;g<Ie.length;++g){c=Ie.at(g);const p=o[c]-h[0],x=o[c+1]-h[1],T=o[c+2]-h[2],V=p*p+x*x+T*T;if(V<=v)continue;const R=Math.sqrt(V),B=.5*(R-this.radius);this.radius=this.radius+B,v=this.radius*this.radius;const L=B/R;h[0]+=p*L,h[1]+=x*L,h[2]+=T*L}this.center=h,Ie.clear()}getChildren(){if(this._children||Yo(this.bbMin,this.bbMax)<=1)return this._children;const e=Dr($(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let d=0;d<8;++d)o[d]=0;const{data:a,size:n,indices:s}=this.position;for(let d=0;d<r;++d){let h=0;const v=this._numIndexPerPrimitive*this.primitiveIndices[d];let g=n*s[v],p=a[g],x=a[g+1],T=a[g+2];for(let V=1;V<this._numIndexPerPrimitive;++V){g=n*s[v+V];const R=a[g],B=a[g+1],L=a[g+2];R<p&&(p=R),B<x&&(x=B),L<T&&(T=L)}p<e[0]&&(h|=1),x<e[1]&&(h|=2),T<e[2]&&(h|=4),i[d]=h,++o[h]}let c=0;for(let d=0;d<8;++d)o[d]>0&&++c;if(c<2)return;const u=new Array(8);for(let d=0;d<8;++d)u[d]=o[d]>0?new Uint32Array(o[d]):void 0;for(let d=0;d<8;++d)o[d]=0;for(let d=0;d<r;++d){const h=i[d];u[h][o[h]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)u[d]!==void 0&&this._children.push(new xo(u[d],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Ie.prune()}}const Ie=new ui({deallocator:null});function Qc(t){if(t.length<li)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Xo(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}export{Ci as $,st as A,qa as B,Vn as C,ro as D,Z as E,Wt as F,ac as G,lt as H,Za as I,Zn as J,io as K,Ze as L,dc as M,Wc as N,Mi as O,qi as P,Y as Q,rl as R,gr as S,jt as T,ec as U,Ra as V,S as W,Ot as X,J as Y,le as Z,Aa as _,Qc as a,Xl as a0,Yl as a1,Ma as a2,vc as a3,Rn as a4,Dn as a5,or as a6,ha as a7,Ws as a8,qs as a9,Ys as aa,kc as ab,go as ac,Yc as ad,Zs as ae,rc as b,$l as c,br as d,pt as e,In as f,K as g,ga as h,_n as i,Gc as j,Vl as k,ya as l,Wa as m,tc as n,xo as o,He as p,vt as q,wi as r,ic as s,za as t,te as u,oe as v,Xa as w,ja as x,lc as y,Jc as z};
