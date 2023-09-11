import{d as D,n as C,t as F,dN as R,g1 as w,cD as b,b7 as K,M as E}from"./index-a1a1303e.js";import{i as P}from"./ExpandedCIM-c4b6b32c.js";import{p as $}from"./visualVariablesUtils-75e963c5.js";import{S as L}from"./color-9de7f8d3.js";import{x as A,o as I,a as O,E as U,n as z}from"./Matcher-9e7b30c8.js";import{p as B}from"./BaseProcessor-9590c45a.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-2a399e3e.js";import"./GeometryUtils-9091031e.js";import"./definitions-b00ef347.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a42981a8.js";import"./floatRGBA-226aef0b.js";import"./OptimizedGeometry-33b2eb0d.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33a8836c.js";import"./earcut-6b045d10.js";class H{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,r){const s=this._resourceMap,i=s.get(e);if(i)return i;let n=this._inFlightResourceMap.get(e);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...r}),this._inFlightResourceMap.set(e,n),n.then(a=>(this._inFlightResourceMap.delete(e),s.set(e,a),a))}catch(a){return D(a)?null:{width:0,height:0}}return n}getResource(e){return this._resourceMap.get(e)??null}loadFont(e){return Promise.resolve(null)}}function x(t,e){const r=e-e/2,s=e+e/4;return(!t.minScale||t.minScale>=r)&&(!t.maxScale||t.maxScale<=s)}function T(t){var s;const e=t.message,r={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const i in e.data){const n=i,a=e.data[n];if(r.message.data[n]=null,a!=null){const c=a.stride,o=a.indices.slice(0),h=a.vertices.slice(0),l=a.records.slice(0),f=(s=a.metrics)==null?void 0:s.slice(0),u={stride:c,indices:o,vertices:h,records:l,metrics:f};r.transferList.push(o,h,l),r.message.data[n]=u}}return r}let S=class extends B{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new H(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){var i;const r=e.schema.processors[0];if(r.type!=="symbol")return;const s=R(this._schema,r);(w(s,"mesh")||w(s,"target"))&&(t.mesh=!0,(i=t.why)==null||i.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,r,s){return b(s),this._onTileData(t,e,r,s)}onTileClear(t,e){const r={clear:!0,end:e};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:r})}onTileError(t,e,r){const s=r.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:s})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(r=>{for(const s of r)s.message.tileKey===e.id&&this._updateTileMesh("append",e,T(s),[],!1,!1,null)})}_addBufferData(t,e){var r;this._bufferData.has(t)||this._bufferData.set(t,[]),(r=this._bufferData.get(t))==null||r.push(T(e))}_createFactory(t){const{geometryType:e,objectIdField:r,fields:s}=this.service,i=(h,l)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",h,l),n={geometryType:e,fields:s,spatialReference:K.fromJSON(this.spatialReference)},a=new A(i,this.tileStore.tileScheme.tileInfo),{matcher:c,aggregateMatcher:o}=t.mesh;return this._store=a,this._matchers.feature=I(c,a,n,this._resourceManagerProxy),this._matchers.aggregate=o?I(o,a,n,this._resourceManagerProxy):null,new O(e,r,a)}async _onTileData(t,e,r,s){var f;b(s);const{type:i,addOrUpdate:n,remove:a,clear:c,end:o}=e,h=!!this._schema.mesh.sortKey;if(!n){const u={type:i,addOrUpdate:null,remove:a,clear:c,end:o,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:u},s)}const l=this._processFeatures(t,n,r,s,(f=e.status)==null?void 0:f.version);try{const u=await l;if(u==null){const d={type:i,addOrUpdate:null,remove:a,clear:c,end:o,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:d},s)}const m=[];for(const d of u){let g=!1;const p=d.message.bufferIds,y=t.key.id,M=d.message.tileKey;if(y!==M&&p!=null){if(!this.tileStore.get(M)){this._addBufferData(y,d),m.push(d);continue}let _=this._bufferIds.get(M);_||(_=new Set,this._bufferIds.set(M,_));const k=Array.from(p);for(const v of k){if(_.has(v)){g=!0;break}_.add(v)}}g||(this._addBufferData(y,d),m.push(d))}await Promise.all(m.map(d=>{const g=t.key.id===d.message.tileKey,p=g?e.remove:[],y=g&&e.end;return this._updateTileMesh(i,t,d,p,y,!!e.clear,s.signal)}))}catch(u){this._handleError(t,u,s)}}async _updateTileMesh(t,e,r,s,i,n,a){const c=t,o=r.message.tileKey,h=!!this._schema.mesh.sortKey;o!==e.key.id&&(i=!1);const l=r==null?void 0:r.message,f={type:c,addOrUpdate:l,remove:s,clear:n,end:i,sort:h},u={transferList:(r==null?void 0:r.transferList)??[],signal:a};return b(u),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:o,data:f},u)}async _processFeatures(t,e,r,s,i){if(e==null||!e.hasFeatures)return null;const n={transform:t.transform,hasZ:!1,hasM:!1},a=this._factory,c={viewingMode:"",scale:t.scale},o=await this._matchers.feature,h=await this._matchers.aggregate;b(s);const l=this._getLabelInfos(t,e);return await a.analyze(e.getCursor(),this._resourceManagerProxy,o,h,n,c),b(s),this._writeFeatureSet(t,e,n,l,a,r,i)}_writeFeatureSet(t,e,r,s,i,n,a){const c=e.getSize(),o=this._schema.mesh.matcher.symbologyType,h=new U(t.key.id,{features:c,records:c,metrics:0},o,n,o!==L.HEATMAP,a),l={viewingMode:"",scale:t.scale},f=e.getCursor();for(;f.next();)try{const m=f.getDisplayId(),d=s!=null?s.get(m):null;i.writeCursor(h,f,r,l,t.level,d,this._resourceManagerProxy)}catch{}const u=t.tileInfoView.tileInfo.isWrappable;return h.serialize(u)}_handleError(t,e,r){if(!D(e)){const s={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(e==null)return null;if(e.type==="subtype"){const s={type:"subtype",classes:{}};let i=!1;for(const n in e.classes){const a=e.classes[n].filter(c=>x(c,t.scale));i=i||!!a.length,s.classes[n]=a}return i?s:null}const r=e.classes.filter(s=>x(s,t.scale));return r.length?{type:"simple",classes:r}:null}_getLabels(t,e){if(e.type==="subtype"){const r=this.service.subtypeField;E(r,"Expected to find subtype Field");const s=t.readAttribute(r);return s==null?[]:e.classes[s]??[]}return e.classes}_getLabelInfos(t,e){const r=this._getLabelingSchemaForScale(t);if(r==null)return null;const s=new Map,i=e.getCursor();for(;i.next();){const n=i.getDisplayId(),a=[],c=$(n),o=c&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",h=this._getLabels(i,r);for(const l of h){if(l.target!==o)continue;const f=i.getStorage(),u=c&&o==="feature"?f.getComputedStringAtIndex(i.readAttribute("referenceId"),l.fieldIndex):f.getComputedStringAtIndex(n,l.fieldIndex);if(!u)continue;const m=P(u.toString()),d=m[0],g=m[1];this._store.getMosaicItem(l.symbol,z(d)).then(p=>{a[l.index]={glyphs:p.glyphMosaicItems??[],rtl:g,index:l.index}})}s.set(n,a)}return s}};S=C([F("esri.views.2d.layers.features.processors.SymbolProcessor")],S);const he=S;export{he as default};
