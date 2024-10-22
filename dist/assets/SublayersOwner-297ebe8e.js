import{C as a,D as n,N as S,R as z,ej as te,gN as re,g as X,J as $,im as ie,io as Q,ab as B,bH as u,ae as J,Y as R,t as H,eN as se,ei as ae,ee as oe,s as f,T as le,ip as ne,dC as pe,iq as ye,aP as ue,gG as de,cH as ce,a8 as E,ir as V,g_ as he,b8 as k,f1 as fe,gY as _,gI as be,fy as me,_ as ge,a$ as F,ii as Se,is as Ie,ce as we,it as ve,e7 as N,e6 as Ee,iu as Le,eU as C,gK as xe,P as v,bL as Oe,iv as Te,gO as Fe,gP as Pe,iw as K,M as W,f3 as De,h1 as _e,eE as L,fo as Ae,cf as Ce,bI as G,fO as Y,eM as qe}from"./index-76dad814.js";import{j as je}from"./QueryTask-e43c00ab.js";import{o as Me}from"./sublayerUtils-a31febef.js";const Qe=t=>{let e=class extends t{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(r,i){const s=i.capabilities&&i.capabilities.split(",").map(ee=>ee.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,y=l!=="tile"&&!!i.supportsDynamicLayers,p=s.includes("query"),d=s.includes("map"),h=!!i.exportTilesAllowed,m=s.includes("tilemap"),I=s.includes("data"),w=l!=="tile"&&(!i.tileInfo||y),x=l!=="tile"&&(!i.tileInfo||y),c=l!=="tile",b=i.cimVersion&&ie.parse(i.cimVersion),O=(b==null?void 0:b.since(1,4))??!1,T=(b==null?void 0:b.since(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:h,supportsIdentify:p,supportsQuery:I,supportsTileMap:m},exportMap:d?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:c,supportsDynamicLayers:y,supportsSublayerVisibility:w,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:T}:null,exportTiles:h?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(r,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(r){const i=this.portalItem;if(!i||!Q(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},r).then(l=>l.find(y=>y.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return B(r),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(r,i){var p;const{source:s}=r;if(this!=null&&this.portalItem&&this.type==="tile"&&(s==null?void 0:s.type)==="map-layer"&&Q(this.portalItem)&&r.originIdOf("url")<u.SERVICE){const d=await this.fetchRelatedService(i);d&&(r.url=J(d.url,s.mapLayerId.toString()),r.layerItemId=d.itemId)}const{url:l}=r;let y;if(s.type==="data-layer")y=(await R(l,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(l&&r.originIdOf("url")>u.SERVICE)try{const d=await this._fetchAllLayersAndTablesFromService(l),h=((p=H(l))==null?void 0:p.sublayer)??s.mapLayerId;y=d.get(h)}catch{}else{let d=r.id;(s==null?void 0:s.type)==="map-layer"&&(d=s.mapLayerId);try{y=(await this.fetchAllLayersAndTables(i)).get(d)}catch{}}return y}async fetchAllLayersAndTables(r){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,r)}async _fetchAllLayersAndTablesFromService(r,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const s=H(r),l=se(this._allLayersAndTablesMap,s==null?void 0:s.url.path,()=>R(J(s==null?void 0:s.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(p=>{const d=new Map,{layers:h,tables:m}=p.data,I=[...h??[],...m??[]];for(const w of I)d.set(w.id,w);return{result:d}},p=>({error:p}))),y=await l;if(B(i),"result"in y)return y.result;throw y.error}};return a([n({readOnly:!0})],e.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),a([n({type:z})],e.prototype,"fullExtent",void 0),a([n(te)],e.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),a([n(re)],e.prototype,"popupEnabled",void 0),a([n({type:X})],e.prototype,"spatialReference",void 0),a([n({readOnly:!0})],e.prototype,"version",void 0),a([S("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=a([$("esri.layers.mixins.ArcGISMapService")],e),e};var A;function q(t){return(t==null?void 0:t.type)==="esriSMS"}function j(t,e,r){var s;const i=this.originIdOf(e)>=L(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&((s=r.layer)==null?void 0:s.type)==="map-image"&&(r.writeSublayerStructure||i)}}function M(t,e,r){var i;return{enabled:!!r&&((i=r.layer)==null?void 0:i.type)==="tile"&&(r.origin&&this.originIdOf(e)>=L(r.origin)||this._isOverridden(e))}}function g(t,e,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function P(t,e,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(e)>=L(r.origin))}}let Re=0;const Ve=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let o=A=class extends ae(oe(Ae)){constructor(t){super(t),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(t){return this.addResolvingPromise((async()=>{const{layer:e,url:r}=this;if(!e&&!r)throw new f("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=e?await e.fetchSublayerInfo(this,t):(await R(r,{responseType:"json",query:{f:"json"},...t})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:e,url:le(r)}))})()),this}readCapabilities(t,e){e=e.layerDefinition||e;const{operations:{supportsQuery:r,supportsQueryAttachments:i},query:{supportsFormatPBF:s,supportsOrderBy:l,supportsPagination:y},data:{supportsAttachment:p},queryRelated:d}=ne(e,this.url);return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:i},data:{supportsAttachment:p},query:{supportsFormatPBF:s,supportsOrderBy:l,supportsPagination:y},queryRelated:d}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(t){this._setAndNotifyLayer("definitionExpression",t)}get effectiveScaleRange(){const{minScale:t,maxScale:e}=this;return{minScale:t,maxScale:e}}readMaxScaleRange(t,e){return{minScale:(e=e.layerDefinition||e).minScale??0,maxScale:e.maxScale??0}}get fieldsIndex(){return new pe(this.fields||[])}set floorInfo(t){this._setAndNotifyLayer("floorInfo",t)}readGlobalIdFieldFromService(t,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const r of e.fields)if(r.type==="esriFieldTypeGlobalID")return r.name}}get id(){return this._get("id")??Re++}set id(t){var e,r,i;this._get("id")!==t&&(((i=(r=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:r.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",t):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(t,e){return e.type==="Table"}set labelingInfo(t){this._setAndNotifyLayer("labelingInfo",t)}writeLabelingInfo(t,e,r,i){t&&t.length&&(e.layerDefinition={drawingInfo:{labelingInfo:t.map(s=>s.write({},i))}})}set labelsVisible(t){this._setAndNotifyLayer("labelsVisible",t)}set layer(t){var e;this._set("layer",t),(e=this.sublayers)==null||e.forEach(r=>r.layer=t)}set listMode(t){this._set("listMode",t)}set minScale(t){this._setAndNotifyLayer("minScale",t)}readMinScale(t,e){var r;return e.minScale||((r=e.layerDefinition)==null?void 0:r.minScale)||0}set maxScale(t){this._setAndNotifyLayer("maxScale",t)}readMaxScale(t,e){var r;return e.maxScale||((r=e.layerDefinition)==null?void 0:r.maxScale)||0}readObjectIdFieldFromService(t,e){var i;if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;const r=(i=e.fields)==null?void 0:i.find(s=>s.type==="esriFieldTypeOID");return r==null?void 0:r.name}set opacity(t){this._setAndNotifyLayer("opacity",t)}readOpacity(t,e){var i;const{layerDefinition:r}=e;return 1-.01*((r==null?void 0:r.transparency)??((i=r==null?void 0:r.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(t,e,r,i){e.layerDefinition={drawingInfo:{transparency:100-100*t}}}writeParent(t,e){this.parent&&this.parent!==this.layer?e.parentLayerId=ye(this.parent.id):e.parentLayerId=-1}get queryTask(){var p;if(!this.layer)return null;const{capabilities:t,fieldsIndex:e,layer:r,url:i}=this,{spatialReference:s}=r,l="gdbVersion"in r?r.gdbVersion:void 0,y=ue("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF);return new je({fieldsIndex:e,gdbVersion:l,pbfSupported:y,queryAttachmentsSupported:((p=t==null?void 0:t.operations)==null?void 0:p.supportsQueryAttachments)??!1,sourceSpatialReference:s,url:i})}set renderer(t){if(de(t,this.fieldsIndex),t){for(const e of t.getSymbols())if(ce(e)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",t)}get source(){return this._get("source")||new V({mapLayerId:this.id})}set source(t){this._setAndNotifyLayer("source",t)}set sublayers(t){this._handleSublayersChange(t,this._get("sublayers")),this._set("sublayers",t)}castSublayers(t){return he(k.ofType(A),t)}writeSublayers(t,e,r){var i;(i=this.sublayers)!=null&&i.length&&(e[r]=this.sublayers.map(s=>s.id).toArray().reverse())}readTitle(t,e){var r;return((r=e.layerDefinition)==null?void 0:r.name)??e.name}readTypeIdField(t,e){let r=(e=e.layerDefinition||e).typeIdField;if(r&&e.fields){r=r.toLowerCase();const i=e.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}get url(){var i;const t=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!t)return null;if(this._lastParsedUrl=t,(e==null?void 0:e.type)==="map-layer")return`${t.path}/${e.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${t.path}/dynamicLayer?${fe(r)}`}set url(t){this._overrideIfSome("url",t)}set visible(t){this._setAndNotifyLayer("visible",t)}writeVisible(t,e,r,i){e[r]=this.getAtOrigin("defaultVisibility","service")||t}clone(){const{store:t}=_(this),e=new A;return _(e).store=t.clone(Ve),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(t){return be(this,t)}createQuery(){return new me({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var s;if(this.hasOwnProperty("sublayers"))return null;const t=(await ge(()=>import("./index-76dad814.js").then(l=>l.pT),["assets/index-76dad814.js","assets/index-d4471cb7.css"])).default,{layer:e,url:r}=this;let i;if(r&&this.originIdOf("url")>u.SERVICE)i=new t({url:r});else{if(!(e!=null&&e.parsedUrl))throw new f("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const l=e.parsedUrl;i=new t({url:l.path}),l&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return(e==null?void 0:e.refreshInterval)!=null&&(i.refreshInterval=e.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=F(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(i.labelingInfo=F(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(i.popupTemplate=F(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(i.renderer=F(this.renderer)),((s=this.source)==null?void 0:s.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(i.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=e.customParameters),i}getField(t){return this.fieldsIndex.get(t)}getFeatureType(t){return Se(this.types,this.typeIdField,t)}getFieldDomain(t,e){const r=e==null?void 0:e.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[t];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(t)}async queryAttachments(t,e){var m,I;await this.load(),t=Ie.from(t);const r=this.capabilities;if(!((m=r==null?void 0:r.data)!=null&&m.supportsAttachment))throw new f("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:l,num:y,size:p,start:d,where:h}=t;if(!((I=r==null?void 0:r.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(p==null?void 0:p.length)>0||y||d||h))throw new f("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(s!=null&&s.length||l!=null&&l.length||h))throw new f("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);return this.queryTask.executeAttachmentQuery(t,e)}async queryFeatureCount(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryFeatureCount:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForCount(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryFeatures(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryFeatures:not-supported","this layer has no url.");const r=await this.queryTask.execute(t,{...e,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(r!=null&&r.features)for(const l of r.features)l.sourceLayer=this;return r}async queryObjectIds(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryObjectIds:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForIds(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryRelatedFeatures(t,e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryRelatedFeatures:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQuery(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryRelatedFeaturesCount(t,e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new f("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new f("queryRelatedFeaturesCount:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQueryForCount(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}toExportImageJSON(t){var l,y;const e={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},r=we(t,this.definitionExpression);r!=null&&(e.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((p,d)=>(p[d]=this.originIdOf(d),p),{});if(Object.keys(i).some(p=>i[p]>u.SERVICE)){const p=e.drawingInfo={};if(i.renderer>u.SERVICE&&(p.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(p.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE)if(this.labelingInfo){!this.loaded&&((y=this.labelingInfo)!=null&&y.some(h=>!h.labelPlacement))&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;this.geometryType!=null&&(d=ve(this.labelingInfo,N.toJSON(this.geometryType))),p.showLabels=!0,p.labelingInfo=d.filter(h=>h.labelPlacement).map(h=>h.toJSON({origin:"service",layer:this.layer}))}else p.showLabels=!1;i.opacity>u.SERVICE&&(p.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(p.renderer)}return e}_assignDefaultSymbolColors(t){this._forEachSimpleMarkerSymbols(t,e=>{var r;e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||((r=e.outline)!=null&&r.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(t,e){if(t){const r=("uniqueValueInfos"in t?t.uniqueValueInfos:"classBreakInfos"in t?t.classBreakInfos:null)??[];for(const i of r)q(i.symbol)&&e(i.symbol);"symbol"in t&&q(t.symbol)&&e(t.symbol),"defaultSymbol"in t&&q(t.defaultSymbol)&&e(t.defaultSymbol)}}_setAndNotifyLayer(t,e){var p,d,h,m;const r=this.layer,i=this._get(t);let s,l;switch(t){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const y=_(this).getDefaultOrigin();if(y!=="service"){if(s&&((h=(d=(p=this.layer)==null?void 0:p.capabilities)==null?void 0:d.exportMap)==null?void 0:h[s])===!1)return void this._logLockedError(t,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&((m=this.capabilities)==null?void 0:m.exportMap[l])===!1)return void this._logLockedError(t,`capability not available 'capabilities.exportMap.${l}'`)}t!=="source"||this.loadStatus==="not-loaded"?(this._set(t,e),y!=="service"&&i!==e&&r&&r.emit&&r.emit("sublayer-update",{propertyName:t,target:this})):this._logLockedError(t,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(t,e){e&&(e.forEach(r=>{r.parent=null,r.layer=null}),this.removeAllHandles()),t&&(t.forEach(r=>{r.parent=this,r.layer=this.layer}),this.addHandles([t.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),t.on("after-remove",({item:r})=>{r.parent=null,r.layer=null}),t.on("before-changes",r=>{var i,s,l;(((l=(s=(i=this.layer)==null?void 0:i.capabilities)==null?void 0:s.exportMap)==null?void 0:l.supportsSublayersChanges)??1)||(E.getLogger(this).error(new f("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),r.preventDefault())})]))}_logLockedError(t,e){const{layer:r,declaredClass:i}=this;E.getLogger(i).error(new f("sublayer:locked",`Property '${String(t)}' can't be changed on Sublayer from the layer '${r==null?void 0:r.id}'`,{reason:e,sublayer:this,layer:r}))}_getLayerDomain(t){var e;return((e=this.fieldsIndex.get(t))==null?void 0:e.domain)??null}};o.test={isMapImageLayerOverridePolicy:t=>t===g||t===j,isTileImageLayerOverridePolicy:t=>t===M},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n()],o.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:j}}})],o.prototype,"definitionExpression",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([S("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([n({type:[Ee],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:Le,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:j},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:z,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:N.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:N.read}}}}})],o.prototype,"geometryType",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:C,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({readOnly:!0})],o.prototype,"isTable",void 0),a([S("service","isTable",["type"])],o.prototype,"readIsTable",null),a([n({value:null,type:[xe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:g}}})],o.prototype,"labelingInfo",null),a([v("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:g}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:String,json:{write:{overridePolicy:M}}})],o.prototype,"layerItemId",void 0),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:P}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:g}}})],o.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:g}}})],o.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n()],o.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:g}}})],o.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([v("opacity")],o.prototype,"writeOpacity",null),a([n({json:{type:C,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:g}}})],o.prototype,"parent",void 0),a([v("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(t,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:P,writer(t,e,r){e[r]=!t}}}})],o.prototype,"popupEnabled",void 0),a([n({type:Oe,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:P}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"queryTask",null),a([n({type:[Te],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([n({types:Fe,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:g},origins:{"web-scene":{types:Pe,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:g}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":K,"map-layer":V}},cast(t){if(t){if("mapLayerId"in t)return W(V,t);if("dataSource"in t)return W(K,t)}return t},json:{name:"layerDefinition.source",write:{overridePolicy:g}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({type:X,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([n({value:null,json:{type:[C],write:{target:"subLayerIds",allowNull:!0,overridePolicy:g}}})],o.prototype,"sublayers",null),a([De("sublayers")],o.prototype,"castSublayers",null),a([v("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:P}}})],o.prototype,"title",void 0),a([S("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([n({type:String})],o.prototype,"typeIdField",void 0),a([n({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[_e],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{name:"layerUrl",write:{overridePolicy:M}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:g}}})],o.prototype,"visible",null),a([v("visible")],o.prototype,"writeVisible",null),o=A=a([$("esri.layers.support.Sublayer")],o);const U=o;function Ne(t,e){const r=[],i={};return t&&t.forEach(s=>{const l=new U;if(l.read(s,e),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const y=i[s.parentLayerId];y.sublayers||(y.sublayers=[]),y.sublayers.unshift(l)}else r.unshift(l)}),r}const D=k.ofType(U);function Z(t,e){t&&t.forEach(r=>{e(r),r.sublayers&&r.sublayers.length&&Z(r.sublayers,e)})}const Be=t=>{let e=class extends t{constructor(...r){super(...r),this.allSublayers=new Ce({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{}},this.subtables=null,this.addHandles([G(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),Y),G(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),Y)])}destroy(){this.allSublayers.destroy()}readSublayers(r,i){if(!i||!r)return;const{sublayersSourceJSON:s}=this,l=L(i.origin);if(l<u.SERVICE||(s[l]={context:i,visibleLayers:r.visibleLayers||s[l].visibleLayers,layers:r.layers||s[l].layers},l>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:y,origin:p}=this.createSublayersForOrigin("web-document"),d=_(this);d.setDefaultOrigin(p),this._set("sublayers",new D(y)),d.setDefaultOrigin("user")}findSublayerById(r){return this.allSublayers.find(i=>i.id===r)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(r){const i=L(r==="web-document"?"web-map":r);let s=u.SERVICE,l=this.sublayersSourceJSON[u.SERVICE].layers,y=this.sublayersSourceJSON[u.SERVICE].context,p=null;const d=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(c=>c<=i);for(const c of d){const b=this.sublayersSourceJSON[c];Me(b.layers)&&(s=c,l=b.layers,y=b.context,b.visibleLayers&&(p={visibleLayers:b.visibleLayers,context:b.context}))}const h=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(c=>c>s&&c<=i);let m=null;for(const c of h){const{layers:b,visibleLayers:O,context:T}=this.sublayersSourceJSON[c];b&&(m={layers:b,context:T}),O&&(p={visibleLayers:O,context:T})}const I=Ne(l,y),w=new Map,x=new Set;if(m)for(const c of m.layers)w.set(c.id,c);if(p!=null&&p.visibleLayers)for(const c of p.visibleLayers)x.add(c);return Z(I,c=>{m&&c.read(w.get(c.id),m.context),p&&c.read({defaultVisibility:x.has(c.id)},p.context)}),{origin:qe(s),sublayers:new D({items:I})}}read(r,i){super.read(r,i),this.readSublayers(r,i)}_handleSublayersChange(r,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),r&&(r.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(r.on("before-changes",s=>{E.getLogger("esri.layers.TileLayer").error(new f("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],e.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:k.ofType(U)})],e.prototype,"serviceSublayers",void 0),a([n({value:null,type:D,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),a([n({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),a([n({type:D,json:{read:{source:"tables"}}})],e.prototype,"subtables",void 0),e=a([$("esri.layers.mixins.SublayersOwner")],e),e};export{Qe as f,Be as m,U as t};
