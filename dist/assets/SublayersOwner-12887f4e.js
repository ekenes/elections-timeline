import{n as a,q as n,bd as g,aH as K,cF as Y,f4 as Z,a9 as ee,t as k,gb as te,gc as J,cr as Q,aM as u,bg as H,X as N,p as re,fS as ie,cD as se,cz as ae,s as S,gd as le,c5 as oe,ge as ne,K as ye,by as pe,m as E,gf as R,fi as ue,V as U,dj as de,ff as P,e_ as ce,av as he,_ as fe,an as _,gg as be,b5 as me,gh as ge,eI as q,d9 as Se,gi as Ie,d8 as M,f1 as ve,d7 as w,x as we,f5 as Ee,f6 as Le,eg as W,gj as G,dn as xe,f9 as Oe,cS as L,eT as Te,J as De,v as _e,dL as Fe,gk as Pe}from"./index-d2e37ef9.js";import{x as Ae}from"./QueryTask-015c3e97.js";import{o as Me}from"./sublayerUtils-7d9b9893.js";const qe=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(t,i){const s=i.capabilities&&i.capabilities.split(",").map(X=>X.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,p=l!=="tile"&&!!i.supportsDynamicLayers,y=s.includes("query"),d=s.includes("map"),h=!!i.exportTilesAllowed,b=s.includes("tilemap"),I=s.includes("data"),x=l!=="tile"&&(!i.tileInfo||p),O=l!=="tile"&&(!i.tileInfo||p),c=l!=="tile",f=i.cimVersion&&te.parse(i.cimVersion),T=(f==null?void 0:f.since(1,4))??!1,D=(f==null?void 0:f.since(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:h,supportsIdentify:y,supportsQuery:I,supportsTileMap:b},exportMap:d?{supportsArcadeExpressionForLabeling:T,supportsSublayersChanges:c,supportsDynamicLayers:p,supportsSublayerVisibility:x,supportsSublayerDefinitionExpression:O,supportsCIMSymbols:D}:null,exportTiles:h?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(t){const i=this.portalItem;if(!i||!J(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},t).then(l=>l.find(p=>p.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return Q(t),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(t,i){const{source:s}=t;if(this!=null&&this.portalItem&&this.type==="tile"&&(s==null?void 0:s.type)==="map-layer"&&J(this.portalItem)&&t.originIdOf("url")<u.SERVICE){const y=await this.fetchRelatedService(i);y&&(t.url=H(y.url,s.mapLayerId.toString()),t.layerItemId=y.itemId)}const{url:l}=t;let p;if(s.type==="data-layer")p=(await N(l,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(l&&t.originIdOf("url")>u.SERVICE)try{p=(await this._fetchAllLayersAndTablesFromService(l)).get(s.mapLayerId)}catch{}else{let y=t.id;(s==null?void 0:s.type)==="map-layer"&&(y=s.mapLayerId);try{p=(await this.fetchAllLayersAndTables(i)).get(y)}catch{}}return p}async fetchAllLayersAndTables(t){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,t)}async _fetchAllLayersAndTablesFromService(t,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const s=re(t),l=ie(this._allLayersAndTablesMap,s==null?void 0:s.url.path,()=>N(H(s==null?void 0:s.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(y=>{const d=new Map;for(const h of y.data.layers)d.set(h.id,h);return{result:d}},y=>({error:y}))),p=await l;if(Q(i),"result"in p)return p.result;throw p.error}};return a([n({readOnly:!0})],r.prototype,"capabilities",void 0),a([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),a([n({type:K})],r.prototype,"fullExtent",void 0),a([n(Y)],r.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),a([n(Z)],r.prototype,"popupEnabled",void 0),a([n({type:ee})],r.prototype,"spatialReference",void 0),a([n({readOnly:!0})],r.prototype,"version",void 0),a([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=a([k("esri.layers.mixins.ArcGISMapService")],r),r};var A;function V(e){return e!=null&&e.type==="esriSMS"}function j(e,r,t){var s;const i=this.originIdOf(r)>=L(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((s=t.layer)==null?void 0:s.type)==="map-image"&&(t.writeSublayerStructure||i)}}function C(e,r,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&(t.origin&&this.originIdOf(r)>=L(t.origin)||this._isOverridden(r))}}function m(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function F(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=L(t.origin))}}let Ve=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let o=A=class extends se(ae(Te)){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,url:t}=this;if(!r&&!t)throw new S("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=r?await r.fetchSublayerInfo(this,e):(await N(t,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:s},data:{supportsAttachment:l}}=le(r,this.url);return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:l},query:{supportsFormatPBF:s}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readMaxScaleRange(e,r){return{minScale:r.minScale??0,maxScale:r.maxScale??0}}get fieldsIndex(){return new oe(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??Ve++}set id(e){var r,t,i;this._get("id")!==e&&(((i=(t=(r=this.layer)==null?void 0:r.capabilities)==null?void 0:t.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){var i;const t=r.layerDefinition;return 1-.01*(((t==null?void 0:t.transparency)!=null?t.transparency:(i=t==null?void 0:t.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=ne(this.parent.id):r.parentLayerId=-1}get queryTask(){var p;if(!this.layer)return null;const{spatialReference:e}=this.layer,r="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:t,fieldsIndex:i}=this,s=ye("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF),l=((p=t==null?void 0:t.operations)==null?void 0:p.supportsQueryAttachments)??!1;return new Ae({url:this.url,pbfSupported:s,fieldsIndex:i,gdbVersion:r,sourceSpatialReference:e,queryAttachmentsSupported:l})}set renderer(e){if(e){for(const r of e.getSymbols())if(pe(r)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return ue(U.ofType(A),e)}writeSublayers(e,r,t){var i;(i=this.sublayers)!=null&&i.length&&(r[t]=this.sublayers.map(s=>s.id).toArray().reverse())}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const i=r.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){var i;const e=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,(r==null?void 0:r.type)==="map-layer")return`${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${de(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=P(this),r=new A;return P(r).store=e.clone(v),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return ce(this,e)}createQuery(){return new he({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var i;if(this.hasOwnProperty("sublayers"))return null;const{layer:e}=this,r=e==null?void 0:e.parsedUrl,t=new(await fe(()=>import("./index-d2e37ef9.js").then(s=>s.l_),["assets/index-d2e37ef9.js","assets/index-0e712e80.css"])).default({url:r==null?void 0:r.path});return r&&this.source&&(this.source.type==="map-layer"?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),(e==null?void 0:e.refreshInterval)!=null&&(t.refreshInterval=e.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=_(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(t.labelingInfo=_(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(t.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(t.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(t.popupTemplate=_(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(t.renderer=_(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(t.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>u.DEFAULTS&&(t.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>u.DEFAULTS&&(t.customParameters=e.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(i==null)return null;let s=null;return t==null||t.some(l=>{const{id:p}=l;return p!=null&&(p.toString()===i.toString()&&(s=l),!!s)}),s}getFieldDomain(e,r){const t=r&&r.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryAttachments(e,r){var b,I;await this.load(),e=be.from(e);const t=this.capabilities;if(!((b=t==null?void 0:t.data)!=null&&b.supportsAttachment))throw new S("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:l,num:p,size:y,start:d,where:h}=e;if(!((I=t==null?void 0:t.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(y==null?void 0:y.length)>0||p||d||h))throw new S("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s!=null&&s.length||l!=null&&l.length||h))throw new S("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e=this.createQuery(),r){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new S("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new S("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(e,{...r,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(t!=null&&t.features)for(const l of t.features)l.sourceLayer=this;return t}toExportImageJSON(e){var l,p;const r={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=me(e,this.definitionExpression);t!=null&&(r.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((y,d)=>(y[d]=this.originIdOf(d),y),{});if(Object.keys(i).some(y=>i[y]>u.SERVICE)){const y=r.drawingInfo={};if(i.renderer>u.SERVICE&&(y.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(y.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE)if(this.labelingInfo){!this.loaded&&((p=this.labelingInfo)!=null&&p.some(h=>!h.labelPlacement))&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;this.geometryType!=null&&(d=ge(this.labelingInfo,q.toJSON(this.geometryType))),y.showLabels=!0,y.labelingInfo=d.filter(h=>h.labelPlacement).map(h=>h.toJSON({origin:"service",layer:this.layer}))}else y.showLabels=!1;i.opacity>u.SERVICE&&(y.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(y.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||r.style!=="esriSMSX"&&r.style!=="esriSMSCross"||(r.outline&&r.outline.color?r.color=r.outline.color:r.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){const t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const i of t)V(i.symbol)&&r(i.symbol);"symbol"in e&&V(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&V(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){var y,d,h,b;const t=this.layer,i=this._get(e);let s,l;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(s&&((h=(d=(y=this.layer)==null?void 0:y.capabilities)==null?void 0:d.exportMap)==null?void 0:h[s])===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&((b=this.capabilities)==null?void 0:b.exportMap[l])===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${l}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,r),p!=="service"&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this.removeAllHandles()),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this.addHandles([e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),e.on("before-changes",t=>{var s,l,p;const i=(p=(l=(s=this.layer)==null?void 0:s.capabilities)==null?void 0:l.exportMap)==null?void 0:p.supportsSublayersChanges;i==null||i||(E.getLogger(this).error(new S("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;E.getLogger(i).error(new S("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t==null?void 0:t.id}'`,{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};o.test={isMapImageLayerOverridePolicy:e=>e===m||e===j,isTileImageLayerOverridePolicy:e=>e===C},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n()],o.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:j}}})],o.prototype,"definitionExpression",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([g("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([n({type:[Se],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:Ie,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:j},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:K,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:q.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:q.read}}}}})],o.prototype,"geometryType",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:M,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({value:null,type:[ve],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:m}}})],o.prototype,"labelingInfo",null),a([w("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:m}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:String,json:{write:{overridePolicy:C}}})],o.prototype,"layerItemId",void 0),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:F}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:m}}})],o.prototype,"minScale",null),a([g("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:m}}})],o.prototype,"maxScale",null),a([g("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n({type:String})],o.prototype,"objectIdField",void 0),a([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:m}}})],o.prototype,"opacity",null),a([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([w("opacity")],o.prototype,"writeOpacity",null),a([n({json:{type:M,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:m}}})],o.prototype,"parent",void 0),a([w("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:F,writer(e,r,t){r[t]=!e}}}})],o.prototype,"popupEnabled",void 0),a([n({type:we,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:F}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"queryTask",null),a([n({types:Ee,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m},origins:{"web-scene":{types:Le,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":R}},cast(e){if(e){if("mapLayerId"in e)return G(R,e);if("dataSource"in e)return G(W,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:m}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({value:null,json:{type:[M],write:{target:"subLayerIds",allowNull:!0,overridePolicy:m}}})],o.prototype,"sublayers",null),a([xe("sublayers")],o.prototype,"castSublayers",null),a([w("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:F}}})],o.prototype,"title",void 0),a([n({type:String})],o.prototype,"typeIdField",void 0),a([n({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([g("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[Oe],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{name:"layerUrl",write:{overridePolicy:C}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:m}}})],o.prototype,"visible",null),a([w("visible")],o.prototype,"writeVisible",null),o=A=a([k("esri.layers.support.Sublayer")],o);const B=o,je=E.getLogger("esri.layers.TileLayer");function Ce(e,r){const t=[],i={};return e&&e.forEach(s=>{const l=new B;if(l.read(s,r),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(l)}else t.unshift(l)}),t}const $=U.ofType(B);function z(e,r){e&&e.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&z(t.sublayers,r)})}const ke=e=>{let r=class extends e{constructor(...t){super(...t),this.allSublayers=new De({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{}},this.addHandles(_e(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),Fe))}destroy(){this.allSublayers.destroy()}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,l=L(i.origin);if(l<u.SERVICE||(s[l]={context:i,visibleLayers:t.visibleLayers||s[l].visibleLayers,layers:t.layers||s[l].layers},l>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:y}=this.createSublayersForOrigin("web-document"),d=P(this);d.setDefaultOrigin(y),this._set("sublayers",new $(p)),d.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=L(t==="web-document"?"web-map":t);let s=u.SERVICE,l=this.sublayersSourceJSON[u.SERVICE].layers,p=this.sublayersSourceJSON[u.SERVICE].context,y=null;const d=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(c=>c<=i);for(const c of d){const f=this.sublayersSourceJSON[c];Me(f.layers)&&(s=c,l=f.layers,p=f.context,f.visibleLayers&&(y={visibleLayers:f.visibleLayers,context:f.context}))}const h=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(c=>c>s&&c<=i);let b=null;for(const c of h){const{layers:f,visibleLayers:T,context:D}=this.sublayersSourceJSON[c];f&&(b={layers:f,context:D}),T&&(y={visibleLayers:T,context:D})}const I=Ce(l,p),x=new Map,O=new Set;if(b)for(const c of b.layers)x.set(c.id,c);if(y!=null&&y.visibleLayers)for(const c of y.visibleLayers)O.add(c);return z(I,c=>{b&&c.read(x.get(c.id),b.context),y&&c.read({defaultVisibility:O.has(c.id)},y.context)}),{origin:Pe(s),sublayers:new $({items:I})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(t.on("before-changes",s=>{je.error(new S("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],r.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:U.ofType(B)})],r.prototype,"serviceSublayers",void 0),a([n({value:null,type:$,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),a([n({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=a([k("esri.layers.mixins.SublayersOwner")],r),r};export{ke as E,B as X,qe as f};