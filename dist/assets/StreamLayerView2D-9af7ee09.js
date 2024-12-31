import{A as s,B as o,fM as _,F as m,by as h,s as d,ft as g,a4 as f,bA as l}from"./index-bb199e66.js";import{n as v,r as S}from"./FeatureLayerView2D-edbffd51.js";import"./Container-d40c6af7.js";import"./highlightReasons-dc931d16.js";import"./definitions-f33e80b3.js";import"./enums-2e633670.js";import"./Texture-dd9dca6f.js";import"./featureConversionUtils-6ab9114f.js";import"./timeSupport-a5ad69d4.js";import"./LayerView-03fdc5c6.js";import"./TechniqueInstance-006a6902.js";import"./UpdateTracking2D-f2323638.js";import"./BidiEngine-26aff129.js";import"./GeometryUtils-b6ea0e94.js";import"./enums-fb32c1bb.js";import"./Rect-ea14f53a.js";import"./LabelMetric-64456ecb.js";import"./Program-c1654195.js";import"./VertexElementDescriptor-2925c6af.js";import"./BindType-d21d71dd.js";import"./Util-10f67e4b.js";import"./TileContainer-e2364c65.js";import"./WGLContainer-4b9e078b.js";import"./ProgramTemplate-dc0d663d.js";import"./vec3f32-ad1dc57f.js";import"./StyleDefinition-df636448.js";import"./config-1337d16e.js";import"./earcut-936e97cf.js";import"./CircularArray-50add9d1.js";import"./tileUtils-c2f19f52.js";import"./SDFHelper-9bce365c.js";import"./floatRGBA-74085967.js";import"./FeatureCommandQueue-51181563.js";import"./constants-991354c8.js";import"./HighlightCounter-2d2411f4.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-90fc8599.js";import"./RefreshableLayerView-56859b8c.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:_})],t.prototype,"filter",void 0),t=s([m("esri.views.layers.StreamLayerView")],t),t};let n=class extends C(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([h(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),h(()=>this.layer.purgeOptions,()=>this._update()),h(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return g(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return f(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return v(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const u=l.fromJSON(y);return u.features.forEach(c=>{c.layer=this.layer,c.sourceLayer=this.layer}),u}),new l({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([o()],n.prototype,"pipelineConnectionStatus",void 0),s([o()],n.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],n.prototype,"connectionError",null),s([o({readOnly:!0})],n.prototype,"_streamConnectionStatus",null),n=s([m("esri.views.2d.layers.StreamLayerView2D")],n);const oe=n;export{oe as default};