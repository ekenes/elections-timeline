import{t as s,v as n,O as h,w as y,m,a as d,dL as _,A as f}from"./index-de9e02e1.js";import S from"./FeatureLayerView2D-c806dfcf.js";import{e as v}from"./util-51d01e09.js";import"./Container-de4603ec.js";import"./definitions-e16dc41c.js";import"./enums-b14466b3.js";import"./Texture-f6c58d0d.js";import"./LayerView-09074446.js";import"./AttributeStoreView-f36593a4.js";import"./TiledDisplayObject-cbede528.js";import"./color-a4e48bf2.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-cd1e8fbd.js";import"./VertexArrayObject-367ef1ba.js";import"./ProgramTemplate-a08fbdcf.js";import"./GeometryUtils-2ba17613.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-0b70cd4d.js";import"./featureConversionUtils-a956fd80.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-2953d97f.js";import"./ExpandedCIM-bb6a98bc.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-fcb117b7.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8ff9218d.js";import"./floatRGBA-39af9b51.js";import"./BitmapTileContainer-75525216.js";import"./Bitmap-dbabfd70.js";import"./TileContainer-ea8cb7f6.js";import"./CircularArray-ef508845.js";import"./BufferPool-632b7601.js";import"./FeatureContainer-bc0e1379.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-ec04f406.js";import"./RefreshableLayerView-19263ade.js";const g=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:h})],t.prototype,"filter",void 0),t=s([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends g(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([m(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),i=this;return{remove(){a.remove(),r&&(i._proxy.closed||i.hasEventListener(e)||i._proxy.enableEvent(e,!1))}}}queryLatestObservations(e,t){var r,a,i;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const l=f.fromJSON(p);return l.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),l})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(l=>l.toJSON()),a=v(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,geometryType:a,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};s([n()],o.prototype,"pipelineConnectionStatus",void 0),s([n()],o.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],o.prototype,"connectionError",null),s([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([y("esri.views.2d.layers.StreamLayerView2D")],o);const ae=o;export{ae as default};
