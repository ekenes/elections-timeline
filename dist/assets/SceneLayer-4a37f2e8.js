import{n as s,q as a,t as I,aN as C,cK as B,V as j,aR as S,b1 as X,dt as A,gC as Y,br as h,I as ee,dW as te,bH as re,X as G,aw as se,fG as ie,dc as ae,cN as oe,cO as ne,bl as le,cP as pe,dd as de,aI as ye,ak as ue,eY as x,h3 as T,m as u,cF as ce,aQ as he,aH as fe,s as p,h4 as me,C as ge,e_ as ve,bu as we,_ as be,ff as R,aZ as F,dx as Ie,d as Le,fi as Se,h5 as Fe,h6 as _e,gK as Oe,e$ as je,f0 as Ee,f1 as $e,f2 as D,cS as Ae,h7 as xe,f6 as Te,f4 as Re,x as De,f7 as Pe,fa as qe,bo as Ne}from"./index-a1a1303e.js";import{E as Ue,L as P}from"./SceneService-becf1b35.js";import{s as Ce,i as Ge,a as Qe}from"./FetchAssociatedFeatureLayer-cd9cabea.js";import{s as Q,l as Ve,u as ke,m as Je}from"./I3SLayerDefinitions-eb53b29f.js";import{j as Ke}from"./persistable-1bca9dc3.js";import{x as q,b as Me,E as We}from"./elevationInfoUtils-0b4dc5f1.js";import{n as He,p as ze}from"./popupUtils-7ab9abe0.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-d5ed0102.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-adc6cfb9.js";import"./quatf64-3363c48e.js";import"./spatialReferenceEllipsoidUtils-4aec2543.js";import"./I3SBinaryReader-10bcb620.js";import"./VertexAttribute-c9cc5f8e.js";import"./orientedBoundingBox-2ab68e2c.js";import"./plane-e3dcaf90.js";import"./sphere-ec3b9b0a.js";import"./ByteSizeUnit-d4757d40.js";import"./resourceExtension-ad153235.js";let y=class extends C{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([a({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),s([a({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),s([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),s([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),s([a({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=s([I("esri.layers.support.RangeInfo")],y);var w;let _=w=class extends B(j.ofType(S)){constructor(e){super(e)}clone(){return new w(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(o=>{if(!t.equals(o.spatialReference)){if(!X(o.spatialReference,t))return e&&e.messages&&e.messages.push(new A("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new S;Y(o,l,t),o=l}const n=o.toJSON(e);return delete n.spatialReference,n}).filter(o=>o!=null):(e!=null&&e.messages&&e.messages.push(new A("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(o=>o.toJSON(e)))}static fromJSON(e,t){const r=new w;return e.forEach(o=>r.add(S.fromJSON(o,t))),r}};_=w=s([I("esri.layers.support.PolygonCollection")],_);const b=_;var O;let f=O=class extends C{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new b,this._geometriesSource=null}initialize(){this.addHandles(ee(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,te))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=b.fromJSON(e,r):this._geometriesSource={url:re(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await G(r,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),d=n.data.map(c=>({...c,spatialReference:l}));this.geometries=b.fromJSON(d,o),this._geometriesSource=null}clone(){const e=new O({geometries:se(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};s([a({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),s([a({type:b,nonNullable:!0,json:{write:!0}}),Ke({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],f.prototype,"geometries",void 0),s([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=O=s([I("esri.layers.support.SceneFilter")],f);const Ze=f,Be=["3DObject","Point"],N=qe();let i=class extends ie(Ue(ae(oe(ne(le(pe(de(ye(Ne))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new j,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var o,n,l;const r=(n=(o=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:o.domains)==null?void 0:n[e];return r&&r.type!=="inherited"?r:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new ue(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:Q.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Xe[this.profile]||"mesh"}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var E,$;const e=((E=this.associatedLayer)==null?void 0:E.capabilities)??Ce,{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:d,supportsReturnServiceEditsInSourceSpatialReference:c},data:{supportsZ:m,supportsM:g,isVersioned:V,supportsAttachment:k},operations:{supportsEditing:J,supportsAdd:K,supportsUpdate:M,supportsDelete:W,supportsQuery:H,supportsQueryAttachments:z,supportsAsyncConvert3D:Z}}=e,v=e.operations.supportsChangeTracking,L=!!(($=this.associatedLayer)!=null&&$.infoFor3D)&&T();return{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:c,supportsRollbackOnFailure:n,supportsGeometryUpdate:L&&d,supportsUploadWithItemId:l},data:{supportsAttachment:k,supportsZ:m,supportsM:g,isVersioned:V},operations:{supportsQuery:H,supportsQueryAttachments:z,supportsEditing:J&&v,supportsAdd:L&&K&&v,supportsDelete:L&&W&&v,supportsUpdate:M&&v,supportsAsyncConvert3D:Z}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get relationships(){var e;return(e=this.associatedLayer)==null?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&U[r]?U[r]:(u.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ce).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>he(this,{origin:"service"},t)).then(()=>x(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){u.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=me(this.fieldsIndex,await He(this,ze(this)));return Ge(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new ge;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(u.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return ve(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const n=we(this.parsedUrl.path,o.href);return G(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new p("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(P.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await be(()=>import("./editingSupport-da980f4a.js"),["assets/editingSupport-da980f4a.js","assets/index-a1a1303e.js","assets/index-0e712e80.css"]);if(await this.load(),!this.associatedLayer)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r(this,this.associatedLayer.source,e,t)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!Be.includes(e.layerType))throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const d=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=d;break;case"vertex-reference-frame":n=!0,l=!d;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t;if(this._fieldUsageInfo={},this.fields)for(const r of this.fields){const o=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(d=>d.name===r.name)),n=!!((t=(e=this.associatedLayer)==null?void 0:e.fields)!=null&&t.some(d=>d&&r.name===d.name)),l={supportsLabelingInfo:o,supportsRenderer:o,supportsPopupTemplate:o||n,supportsLayerQuery:n};this._fieldUsageInfo[r.name]=l}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const o=this.getField(r.name);o?(!o.domain&&r.domain&&(o.domain=r.domain.clone()),o.editable=r.editable,o.nullable=r.nullable,o.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=R(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===F.SERVICE||l===F.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){var o,n,l,d,c,m,g;const e=(n=(o=this.associatedLayer)==null?void 0:o.editingInfo)==null?void 0:n.lastEditDate,t=(l=this.associatedLayer)==null?void 0:l.serverGens,r=(d=this.associatedLayer)==null?void 0:d.getAtOrigin("fullExtent","service");!T()||((c=this.associatedLayer)==null?void 0:c.infoFor3D)==null||!r||!Ie((m=this.associatedLayer)==null?void 0:m.url)||!e||((g=this.serviceUpdateTimeStamp)==null?void 0:g.lastUpdate)===e.getTime()||!this.serviceUpdateTimeStamp&&(t==null?void 0:t.minServerGen)===(t==null?void 0:t.serverGen)||R(this).setAtOrigin("fullExtent",r.clone(),F.SERVICE)}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new Qe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){Le(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Se(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?u.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):u.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&q(u.getLogger(this),Me("Mesh scene layers","relative-to-scene",e)),q(u.getLogger(this),We("Scene layers",e))}};s([a({types:{key:"type",base:Fe,typeMap:{selection:_e}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),s([a({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),s([a({json:{read:!1}})],i.prototype,"associatedLayer",void 0),s([a({type:["show","hide"]})],i.prototype,"listMode",void 0),s([a({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),s([a({...N.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),s([a()],i.prototype,"types",null),s([a()],i.prototype,"typeIdField",null),s([a()],i.prototype,"templates",null),s([a()],i.prototype,"formTemplate",null),s([a({readOnly:!0})],i.prototype,"fieldsIndex",null),s([a({type:Oe,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),s([a(N.outFields)],i.prototype,"outFields",void 0),s([a({type:Q,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),s([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),s([a({type:[Ve],readOnly:!0})],i.prototype,"materialDefinitions",void 0),s([a({type:[ke],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),s([a({type:[Je],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),s([a({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),s([a({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),s([a({readOnly:!0})],i.prototype,"statisticsInfo",void 0),s([a({type:j.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),s([a({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),s([a({type:Ze,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],i.prototype,"filter",void 0),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a(je)],i.prototype,"elevationInfo",null),s([a({type:String})],i.prototype,"geometryType",null),s([a(Ee)],i.prototype,"labelsVisible",void 0),s([a({type:[$e],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:D},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:D},write:!0}})],i.prototype,"labelingInfo",void 0),s([a(Ae)],i.prototype,"legendEnabled",void 0),s([a({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var o,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(n=(o=t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:n.transparency;return r!==void 0?xe(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),s([a({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"priority",void 0),s([a({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"semantic",void 0),s([a({types:Te,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),s([a({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),s([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),s([a({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),s([a({readOnly:!0,json:{write:!1,read:!1}})],i.prototype,"infoFor3D",null),s([a({readOnly:!0,json:{write:!1,read:!1}})],i.prototype,"relationships",null),s([a(Re)],i.prototype,"popupEnabled",void 0),s([a({type:De,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),s([a({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),s([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),s([a({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),s([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),s([a({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),s([a({type:String,json:{read:!1}})],i.prototype,"profile",void 0),s([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),s([a({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),s([a(Pe)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=s([I("esri.layers.SceneLayer")],i);const U={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Xe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},It=i;export{It as default};
