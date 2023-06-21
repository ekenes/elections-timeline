import{aM as N,T as c,a as d,b as p,c as S,ba as v,bp as F,s as a,eD as L,aN as C,a1 as O,aJ as x,_ as E,N as P}from"./index-ee4f50bd.js";import{m as k}from"./query-b0550d69.js";import{b as M}from"./Query-639ad700.js";import"./normalizeUtils-7a70564e.js";import"./normalizeUtilsCommon-527157a0.js";import"./utils-21f560fb.js";import"./pbfQueryUtils-1672999e.js";import"./pbf-c01caecc.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-57cbab0b.js";import"./Field-e1e55903.js";import"./fieldType-45f5bea8.js";let w=class extends N.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(t){this.emit("data-received",t)}onMessage(t){this.emit("message-received",t)}};d([p({readOnly:!0})],w.prototype,"connectionError",null),w=d([S("esri.layers.support.StreamConnection")],w);const R=w;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends R{constructor(t){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:r,spatialReference:s,sourceSpatialReference:o}=t;this._config=t,this._featureZScaler=v(r,o,s),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(t){this._websocket!=null?this._websocket.send(JSON.stringify(t)):this._outstandingMessages.push(t)}sendMessageToClient(t){this._onMessage(t)}updateCustomParameters(t){this._config.customParameters=t,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(t=this._config.source.path,r=1e3,s=0){try{if(this.destroyed)return;const o=F(t,this._config.customParameters??{});this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const n=r/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(a.getLogger(this).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,o)),await L(r),this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(t){t.onmessage=r=>{try{const s=JSON.parse(r.data);this._onMessage(s)}catch(s){return void a.getLogger(this).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(t){return new Promise((r,s)=>{const o=new WebSocket(t);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=n=>this._onClose(n),o.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(o),r(o)},o.onclose=n=>{o.onopen=o.onclose=null,s(n)}})}async _handshake(t=1e4){const r=this._websocket;if(r==null)return;const s=C(),o=r.onmessage,{filter:n,outFields:u,spatialReference:l}=this._config;return s.timeout(t),r.onmessage=h=>{var m;let i=null;try{i=JSON.parse(h.data)}catch{}i&&typeof i=="object"||(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),s.reject(),this.destroy()),((m=i.spatialReference)==null?void 0:m.wkid)!==(l==null?void 0:l.wkid)&&(a.getLogger(this).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,h.data)),s.reject(),this.destroy()),i.format!=="json"&&(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),s.reject(),this.destroy()),n&&i.filter!==n&&a.getLogger(this).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),u&&i.outFields!==u&&a.getLogger(this).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=o;for(const y of this._outstandingMessages)r.send(JSON.stringify(y));this._outstandingMessages=[],s.resolve()},r.send(JSON.stringify({filter:n,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),s.promise}_onMessage(t){if(this.onMessage(t),"type"in t)switch(t.type){case"features":case"featureResult":for(const r of t.features)this._featureZScaler!=null&&this._featureZScaler(r.geometry),this.onFeature(r)}}_onError(t){const r="Encountered an error over WebSocket connection";this._set("errorString",r),a.getLogger(this).error("websocket-connection",r)}_onClose(t){this._websocket=null,this.notifyChange("connectionStatus"),t.code!==1e3&&a.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${t.code}`),this.destroyed||this._open()}};d([p()],f.prototype,"connectionStatus",null),d([p()],f.prototype,"errorString",void 0),f=d([S("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const T=1e4,W={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends f{constructor(e){super({...W,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=O(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return F(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=C(),u=()=>{o||(this.destroyed||this._websocket!==r||a.getLogger(this).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},l=h=>{const i=JSON.parse(h.data);i.filter&&(i.error&&(a.getLogger(this).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=l,r.send(s),setTimeout(u,T),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e!=null&&e.geometry)try{const s=x(e.geometry);if(s.type!=="extent")throw new c(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e!=null&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return a.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const u in o)e.attributes[u]=o[u];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){var y;const t=new(await E(()=>import("./FeatureLayer-76b8fc4b.js"),["assets/FeatureLayer-76b8fc4b.js","assets/index-ee4f50bd.js","assets/UniqueValueRenderer-a5623276.js","assets/LegendOptions-417f0204.js","assets/diffUtils-de02d0fa.js","assets/SizeVariable-2679a0ff.js","assets/colorRamps-5f43d00d.js","assets/lengthUtils-e9b31b12.js","assets/ColorStop-d3e9f05c.js","assets/featureFlags-c091f4ff.js","assets/styleUtils-c573bb28.js","assets/jsonUtils-74f8db4e.js","assets/DictionaryLoader-f3ff6942.js","assets/LRUCache-bb6160eb.js","assets/Version-eb4ced9c.js","assets/FieldsIndex-247aa784.js","assets/heatmapUtils-117ed7c9.js","assets/vec4f64-aa64c7e9.js","assets/MultiOriginJSONSupport-7d035058.js","assets/LabelClass-3df682d7.js","assets/labelUtils-62b85608.js","assets/defaultsJSON-b087dd4d.js","assets/FeatureLayerBase-3402e48f.js","assets/Field-e1e55903.js","assets/fieldType-45f5bea8.js","assets/commonProperties-f008cd4d.js","assets/ElevationInfo-4f399334.js","assets/featureLayerUtils-0183fd4d.js","assets/AttachmentQuery-4f431733.js","assets/Query-639ad700.js","assets/RelationshipQuery-b1d55e74.js","assets/serviceCapabilitiesUtils-4896b13c.js","assets/editsZScale-dc9b87a9.js","assets/queryZScale-57cbab0b.js","assets/FeatureSet-0efa5877.js","assets/APIKeyMixin-4e030daa.js","assets/ArcGISService-e3999268.js","assets/BlendLayer-c63c53b1.js","assets/jsonUtils-834e06ff.js","assets/parser-c18899b3.js","assets/CustomParametersMixin-ac3676a5.js","assets/EditBusLayer-4984298f.js","assets/FeatureEffectLayer-148aafe1.js","assets/FeatureEffect-1a7d78be.js","assets/FeatureReductionLayer-30ff8687.js","assets/clusterUtils-fd02cec7.js","assets/OperationalLayer-eb23b987.js","assets/OrderedLayer-3dcf2017.js","assets/PortalLayer-4453485d.js","assets/portalItemUtils-b4896fdb.js","assets/RefreshableLayer-51509618.js","assets/ScaleRangeLayer-16ea0421.js","assets/TemporalLayer-f920140a.js","assets/FeatureTemplate-13dafaed.js","assets/FeatureType-70cdefb0.js","assets/fieldProperties-85b899d8.js","assets/labelingInfo-ba648f1b.js","assets/versionUtils-7883b395.js","assets/styleUtils-09d36e9f.js","assets/TopFeaturesQuery-7c70b616.js","assets/popupUtils-e1f876bb.js"])).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,u=this._config.maxRecordCountFactor,l=t.capabilities.query.maxRecordCount,h=s?l*u:l,i=new M;if(i.outFields=this._config.outFields??["*"],i.where=((y=this._config.filter)==null?void 0:y.where)??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=P.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),s&&(i.maxRecordCountFactor=u),o)return i.num=h,t.destroy(),this._queryPages(e,i);const m=await k(e,i,this._config.sourceSpatialReference);return t.destroy(),m.data}async _queryPages(e,t,r=[],s=0){t.start=t.num!=null?s*t.num:null;const{data:o}=await k(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,s+1)):(r.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};b=d([S("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const q=b;let _=class extends R{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=v(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([p()],_.prototype,"connectionStatus",void 0),d([p()],_.prototype,"errorString",void 0),_=d([S("esri.layers.support.ClientSideConnection")],_);function X(e,t,r,s,o,n,u,l){const h={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:u,customParameters:l};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(h):new q(h):new _(h)}export{X as createConnection};
