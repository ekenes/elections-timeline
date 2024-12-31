import{T as _,fh as w,ff as S,Q as A,A as n,B as l,fi as D,F as N,bY as Q,I as j,aG as P,fj as q,bA as L,fk as p,_ as u,s as m,G as $}from"./index-bb199e66.js";import{u as h,i as y}from"./infoFor3D-24efd44a.js";import{s as J,a as z}from"./executeForIds-a97eaf31.js";import{n as C}from"./executeQueryPBF-aa66b136.js";async function U(e,t,r){const o=_(e),i=await w(o,S.from(t),{...r}),s=i.data.extent;return!s||isNaN(s.xmin)||isNaN(s.ymin)||isNaN(s.xmax)||isNaN(s.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:A.fromJSON(s)}}let a=class extends Q{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return j(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,i=P("featurelayer-pbf-statistics"),s=!o||i;let d;if(this.pbfSupported&&s)try{d=await C(this.url,r,t)}catch(f){if(f.name!=="query:parsing-pbf")throw f;this.pbfSupported=!1}return this.pbfSupported&&s||(d=await q(this.url,r,t)),this._normalizeFields(d.fields),d}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return L.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-d3636c93.js"),["assets/meshFeatureSet-d3636c93.js","assets/index-bb199e66.js","assets/index-d85835aa.css","assets/Mesh-7eaede19.js","assets/MeshTransform-1b9bfb3e.js","assets/infoFor3D-24efd44a.js","assets/mat4f64-9a8384aa.js","assets/quat-bced9606.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/imageUtils-ed696070.js","assets/MeshVertexAttributes-6ade3967.js","assets/MeshLocalVertexSpace-b14e87a4.js","assets/meshVertexSpaceUtils-76ca21e1.js","assets/earcut-936e97cf.js","assets/DoubleArray-2a568590.js","assets/Indices-a0c4ae91.js","assets/plane-3a578bb7.js","assets/deduplicate-25763e3f.js","assets/projection-756e98ec.js","assets/spatialReferenceEllipsoidUtils-c1ddba15.js","assets/computeTranslationToOriginAndRotation-f4e4fc06.js","assets/BufferView-59699d39.js","assets/vec3-9297102c.js","assets/vec4-3f7addc8.js","assets/vertexSpaceConversion-90b103c6.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return J(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return z(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./index-bb199e66.js").then(i=>i.nc),["assets/index-bb199e66.js","assets/index-d85835aa.css"]),u(()=>import("./executeRelationshipQuery-71a7f20f.js"),["assets/executeRelationshipQuery-71a7f20f.js","assets/index-bb199e66.js","assets/index-d85835aa.css"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./index-bb199e66.js").then(i=>i.nc),["assets/index-bb199e66.js","assets/index-d85835aa.css"]),u(()=>import("./executeRelationshipQuery-71a7f20f.js"),["assets/executeRelationshipQuery-71a7f20f.js","assets/index-bb199e66.js","assets/index-d85835aa.css"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await p(u(()=>import("./queryAttachments-e250e014.js"),["assets/queryAttachments-e250e014.js","assets/index-bb199e66.js","assets/index-d85835aa.css"]),t),s=_(this.url);return i(s,await(this.queryAttachmentsSupported?r(s,e,t):o(s,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-7c5d0811.js"),["assets/executeTopFeaturesQuery-7c5d0811.js","assets/index-bb199e66.js","assets/index-d85835aa.css","assets/queryTopFeatures-7309909e.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-7c34c224.js"),["assets/executeForTopIds-7c34c224.js","assets/index-bb199e66.js","assets/index-d85835aa.css","assets/queryTopFeatures-7309909e.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-e6e87230.js"),["assets/executeForTopExtents-e6e87230.js","assets/index-bb199e66.js","assets/index-d85835aa.css","assets/queryTopFeatures-7309909e.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-ffb01059.js"),["assets/executeForTopCount-ffb01059.js","assets/index-bb199e66.js","assets/index-d85835aa.css","assets/queryTopFeatures-7309909e.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,s=h("model/gltf-binary",o)??y("glb",o),d=h("model/gltf+json",o)??y("gltf",o);for(const c of i){if(c===s){t.formatOf3DObjects=c;break}c!==d||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new m("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!$(t.outSpatialReference,this.sourceSpatialReference))throw new m("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:f,originZ:b,translationX:x,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:V,rotationX:E,rotationY:I,rotationZ:v,rotationDeg:T}=r.transformFieldRoles;t.outFields.push(c,f,b,x,F,O,g,R,V,E,I,v,T)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([N("esri.layers.graphics.sources.support.QueryTask")],a);const G=a;export{G as x};