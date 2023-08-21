import{a as i,b as a,c as I,ao as q,cr as Z,V as O,aA as S,bi as H,at as A,fl as B,aH as h,fm as Y,q as X,ds as ee,aa as te,a1 as G,Q as re,aW as ie,ek as x,s as u,a6 as se,fL as oe,T as d,j as ae,by as ne,_ as le,O as T,bf as F,aY as pe,d as de,er as ye,dZ as ue,k as ce,au as he}from"./index-ee4f50bd.js";import"./UniqueValueRenderer-a5623276.js";import{n as fe}from"./jsonUtils-74f8db4e.js";import{O as me}from"./MultiOriginJSONSupport-7d035058.js";import{i as ge}from"./APIKeyMixin-4e030daa.js";import{l as ve}from"./ArcGISService-e3999268.js";import{c as we}from"./EditBusLayer-4984298f.js";import{c as be}from"./OperationalLayer-eb23b987.js";import{j as Ie}from"./PortalLayer-4453485d.js";import{t as Le}from"./ScaleRangeLayer-16ea0421.js";import{N as Se,K as D}from"./SceneService-d7bbdec3.js";import{t as Fe,l as _e,i as je}from"./FetchAssociatedFeatureLayer-8cf83b31.js";import{d as Oe,m as Ee,c as $e,p as Ae,l as xe}from"./commonProperties-f008cd4d.js";import{t as Te,p as De}from"./FeatureReductionLayer-30ff8687.js";import{s as Re}from"./fieldProperties-85b899d8.js";import{r as Pe}from"./FieldsIndex-247aa784.js";import{s as C,l as Ne,u as Ue,m as qe}from"./I3SLayerDefinitions-3aa2e4c2.js";import{C as Ge}from"./LabelClass-3df682d7.js";import{i as R}from"./labelingInfo-ba648f1b.js";import{p as Ce}from"./serviceCapabilitiesUtils-4896b13c.js";import{g as Qe}from"./persistable-f2aecc42.js";import{t as Ve}from"./styleUtils-09d36e9f.js";import{b as ke}from"./Query-639ad700.js";import{n as P}from"./featureFlags-c091f4ff.js";import{p as Je}from"./popupUtils-e1f876bb.js";import{n as Ke,p as Me}from"./popupUtils-ed4a8980.js";import"./LegendOptions-417f0204.js";import"./diffUtils-de02d0fa.js";import"./SizeVariable-2679a0ff.js";import"./colorRamps-5f43d00d.js";import"./lengthUtils-e9b31b12.js";import"./ColorStop-d3e9f05c.js";import"./styleUtils-c573bb28.js";import"./DictionaryLoader-f3ff6942.js";import"./LRUCache-bb6160eb.js";import"./Version-eb4ced9c.js";import"./heatmapUtils-117ed7c9.js";import"./vec4f64-aa64c7e9.js";import"./portalItemUtils-b4896fdb.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-51a3a1bd.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-a1cb0fe3.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-24185371.js";import"./VertexAttribute-9f2e53ec.js";import"./spatialReferenceEllipsoidUtils-18eddcf3.js";import"./symbolColorUtils-3eea2780.js";import"./vec3f32-ad1dc57f.js";import"./plane-a91f59ae.js";import"./sphere-9343f5e0.js";import"./ByteSizeUnit-d4757d40.js";import"./FeatureLayer-76b8fc4b.js";import"./FeatureLayerBase-3402e48f.js";import"./Field-e1e55903.js";import"./fieldType-45f5bea8.js";import"./featureLayerUtils-0183fd4d.js";import"./AttachmentQuery-4f431733.js";import"./RelationshipQuery-b1d55e74.js";import"./editsZScale-dc9b87a9.js";import"./queryZScale-57cbab0b.js";import"./FeatureSet-0efa5877.js";import"./BlendLayer-c63c53b1.js";import"./jsonUtils-834e06ff.js";import"./parser-c18899b3.js";import"./CustomParametersMixin-ac3676a5.js";import"./FeatureEffectLayer-148aafe1.js";import"./FeatureEffect-1a7d78be.js";import"./OrderedLayer-3dcf2017.js";import"./RefreshableLayer-51509618.js";import"./TemporalLayer-f920140a.js";import"./FeatureTemplate-13dafaed.js";import"./FeatureType-70cdefb0.js";import"./versionUtils-7883b395.js";import"./TopFeaturesQuery-7c70b616.js";import"./labelUtils-62b85608.js";import"./defaultsJSON-b087dd4d.js";import"./clusterUtils-fd02cec7.js";import"./ElevationInfo-4f399334.js";import"./resourceExtension-504f11ac.js";let y=class extends q{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([a({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),i([a({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),i([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),i([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),i([a({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=i([I("esri.layers.support.RangeInfo")],y);var w;let _=w=class extends Z(O.ofType(S)){constructor(e){super(e)}clone(){return new w(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(o=>{if(!t.equals(o.spatialReference)){if(!H(o.spatialReference,t))return e&&e.messages&&e.messages.push(new A("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new S;B(o,l,t),o=l}const n=o.toJSON(e);return delete n.spatialReference,n}).filter(o=>o!=null):(e!=null&&e.messages&&e.messages.push(new A("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(o=>o.toJSON(e)))}static fromJSON(e,t){const r=new w;return e.forEach(o=>r.add(S.fromJSON(o,t))),r}};_=w=i([I("esri.layers.support.PolygonCollection")],_);const b=_;var j;let f=j=class extends q{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new b,this._geometriesSource=null,this._handles=new Y}initialize(){this._handles.add(X(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,ee))}destroy(){this._handles.destroy()}readGeometries(e,t,r){Array.isArray(e)?this.geometries=b.fromJSON(e,r):this._geometriesSource={url:te(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await G(r,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),p=n.data.map(c=>({...c,spatialReference:l}));this.geometries=b.fromJSON(p,o),this._geometriesSource=null}clone(){const e=new j({geometries:re(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([a({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),i([a({type:b,nonNullable:!0,json:{write:!0}}),Qe({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),i([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=j=i([I("esri.layers.support.SceneFilter")],f);const We=f,ze=["3DObject","Point"],N=Re();let s=class extends we(Se(ve(be(Ie(Le(me(ge(ie(he))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new O,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var o,n,l;const r=(n=(o=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:o.domains)==null?void 0:n[e];return r&&r.type!=="inherited"?r:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new Pe(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:C.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Ze[this.profile]||"mesh"}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var E,$;const e=((E=this.associatedLayer)==null?void 0:E.capabilities)??Fe,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:o,supportsUploadWithItemId:n,supportsGeometryUpdate:l,supportsReturnServiceEditsInSourceSpatialReference:p},data:{supportsZ:c,supportsM:m,isVersioned:g,supportsAttachment:Q},operations:{supportsEditing:V,supportsAdd:k,supportsUpdate:J,supportsDelete:K,supportsQuery:M,supportsQueryAttachments:W,supportsAsyncConvert3D:z}}=e,v=e.operations.supportsChangeTracking,L=!!(($=this.associatedLayer)!=null&&$.infoFor3D)&&P();return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:p,supportsRollbackOnFailure:o,supportsGeometryUpdate:L&&l,supportsUploadWithItemId:n},data:{supportsAttachment:Q,supportsZ:c,supportsM:m,isVersioned:g},operations:{supportsQuery:M,supportsQueryAttachments:W,supportsEditing:V&&v,supportsAdd:L&&k&&v,supportsDelete:L&&K&&v,supportsUpdate:J&&v,supportsAsyncConvert3D:z}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&U[r]?U[r]:(u.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(se).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>Ve(this,{origin:"service"},t)).then(()=>x(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){u.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new ke;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryCachedAttributes(e,t){const r=oe(this.fieldsIndex,await Ke(this,Me(this)));return _e(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new ae;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(u.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Je(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const n=ne(this.parsedUrl.path,o.href);return G(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(D.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(D.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await le(()=>import("./editingSupport-539fd966.js"),["assets/editingSupport-539fd966.js","assets/index-ee4f50bd.js","assets/normalizeUtils-7a70564e.js","assets/normalizeUtilsCommon-527157a0.js","assets/utils-21f560fb.js","assets/EditBusLayer-4984298f.js"]);if(await this.load(),!this.associatedLayer)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r(this,this.associatedLayer.source,e,t)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!ze.includes(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const p=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=p;break;case"vertex-reference-frame":n=!0,l=!p;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t;if(this._fieldUsageInfo={},this.fields)for(const r of this.fields){const o=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(p=>p.name===r.name)),n=!!((t=(e=this.associatedLayer)==null?void 0:e.fields)!=null&&t.some(p=>p&&r.name===p.name)),l={supportsLabelingInfo:o,supportsRenderer:o,supportsPopupTemplate:o||n,supportsLayerQuery:n};this._fieldUsageInfo[r.name]=l}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const o=this.getField(r.name);o?(!o.domain&&r.domain&&(o.domain=r.domain.clone()),o.editable=r.editable,o.nullable=r.nullable,o.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=T(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===F.SERVICE||l===F.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){var o,n,l,p,c,m,g;const e=(n=(o=this.associatedLayer)==null?void 0:o.editingInfo)==null?void 0:n.lastEditDate,t=(l=this.associatedLayer)==null?void 0:l.serverGens,r=(p=this.associatedLayer)==null?void 0:p.getAtOrigin("fullExtent","service");!P()||((c=this.associatedLayer)==null?void 0:c.infoFor3D)==null||!r||!pe((m=this.associatedLayer)==null?void 0:m.url)||!e||((g=this.serviceUpdateTimeStamp)==null?void 0:g.lastUpdate)===e.getTime()||!this.serviceUpdateTimeStamp&&(t==null?void 0:t.minServerGen)===(t==null?void 0:t.serverGen)||T(this).setAtOrigin("fullExtent",r.clone(),F.SERVICE)}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new je(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){de(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await ye(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?u.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):u.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&u.getLogger(this).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&u.getLogger(this).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};i([a({types:{key:"type",base:Te,typeMap:{selection:De}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],s.prototype,"featureReduction",void 0),i([a({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],s.prototype,"rangeInfos",void 0),i([a({json:{read:!1}})],s.prototype,"associatedLayer",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["ArcGISSceneServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({...N.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],s.prototype,"fields",void 0),i([a()],s.prototype,"types",null),i([a()],s.prototype,"typeIdField",null),i([a()],s.prototype,"templates",null),i([a()],s.prototype,"formTemplate",null),i([a({readOnly:!0})],s.prototype,"fieldsIndex",null),i([a({type:Ce,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],s.prototype,"floorInfo",void 0),i([a(N.outFields)],s.prototype,"outFields",void 0),i([a({type:C,readOnly:!0,json:{read:!1}})],s.prototype,"nodePages",void 0),i([h("service","nodePages",["nodePages","pointNodePages"])],s.prototype,"readNodePages",null),i([a({type:[Ne],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[Ue],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[qe],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({readOnly:!0})],s.prototype,"attributeStorageInfo",void 0),i([a({readOnly:!0})],s.prototype,"statisticsInfo",void 0),i([a({type:O.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],s.prototype,"excludeObjectIds",void 0),i([a({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),i([a({type:We,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],s.prototype,"filter",void 0),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),i([a(Oe)],s.prototype,"elevationInfo",null),i([a({type:String})],s.prototype,"geometryType",null),i([a(Ee)],s.prototype,"labelsVisible",void 0),i([a({type:[Ge],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:R},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:R},write:!0}})],s.prototype,"labelingInfo",void 0),i([a($e)],s.prototype,"legendEnabled",void 0),i([a({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var o,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(n=(o=t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:n.transparency;return r!==void 0?ue(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],s.prototype,"opacity",void 0),i([a({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],s.prototype,"priority",void 0),i([a({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],s.prototype,"semantic",void 0),i([a({types:fe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],s.prototype,"renderer",null),i([a({json:{read:!1}})],s.prototype,"cachedDrawingInfo",void 0),i([h("service","cachedDrawingInfo")],s.prototype,"readCachedDrawingInfo",null),i([a({readOnly:!0,json:{read:!1}})],s.prototype,"capabilities",null),i([a({type:Boolean,json:{read:!1}})],s.prototype,"editingEnabled",null),i([a({readOnly:!0,json:{write:!1,read:!1}})],s.prototype,"infoFor3D",null),i([a(Ae)],s.prototype,"popupEnabled",void 0),i([a({type:ce,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),i([a({readOnly:!0,json:{read:!1}})],s.prototype,"defaultPopupTemplate",null),i([a({type:String,json:{read:!1}})],s.prototype,"objectIdField",void 0),i([h("service","objectIdField",["objectIdField","fields"])],s.prototype,"readObjectIdField",null),i([a({type:String,json:{read:!1}})],s.prototype,"globalIdField",void 0),i([h("service","globalIdField",["globalIdField","fields"])],s.prototype,"readGlobalIdField",null),i([a({readOnly:!0,type:String,json:{read:!1}})],s.prototype,"displayField",null),i([a({type:String,json:{read:!1}})],s.prototype,"profile",void 0),i([h("service","profile",["store.profile"])],s.prototype,"readProfile",null),i([a({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],s.prototype,"normalReferenceFrame",void 0),i([a(xe)],s.prototype,"screenSizePerspectiveEnabled",void 0),s=i([I("esri.layers.SceneLayer")],s);const U={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ze={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Fr=s;export{Fr as default};