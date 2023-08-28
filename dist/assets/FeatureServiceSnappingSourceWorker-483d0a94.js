import{dv as Z,fW as K,iP as ee,fS as te,cr as g,an as D,iQ as z,n as h,q as d,t as w,b4 as R,Y as W,c8 as O,iR as N,ek as P,iS as H,hG as A,fC as se,dL as X,fM as ie,dk as ne,av as S,aH as re,ct as ae,m as oe,e as le,de as ue,be as I,iT as Y,eK as ce,ew as he,am as M,a9 as U,b8 as de,v as j,fh as pe}from"./index-d2e37ef9.js";import{m as fe}from"./FeatureStore-c0530409.js";import{e as _e}from"./QueryEngine-3935dd1e.js";import{f as ge,i as ye,y as me}from"./featureConversionUtils-844127df.js";import{a as Ee}from"./pbfQueryUtils-e8f1810f.js";import{S as Ce,c as Fe,m as Te,p as ve}from"./query-1b8f0de2.js";import{t as Se,c as q}from"./byteSizeEstimations-7cf1c05d.js";import{E as be}from"./ByteSizeUnit-d4757d40.js";import{o as Ie}from"./BoundsStore-159f4782.js";import"./projectionSupport-7d3f1ff4.js";import"./json-48e3ea08.js";import"./OptimizedGeometry-33b2eb0d.js";import"./timeSupport-fd5b8c3a.js";import"./normalizeUtils-04844d03.js";import"./normalizeUtilsCommon-a51f3cb3.js";import"./utils-6996243e.js";import"./WhereClause-add4a98b.js";import"./executionError-c92d3b85.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-45b758fa.js";import"./utils-122e19dd.js";import"./generateRendererUtils-454ca4ba.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./pbf-f29a219b.js";import"./PooledRBush-fdc8ab15.js";function B(e=!1,t){if(e){const{elevationInfo:s,alignPointsInFeatures:i,spatialReference:n}=t;return new Oe(s,i,n)}return new we}let we=class{async alignCandidates(t,s){return t}notifyElevationSourceChange(){}};const xe=1024;let Oe=class{constructor(t,s,i){this._elevationInfo=t,this._alignPointsInFeatures=s,this.spatialReference=i,this._alignmentsCache=new Z(xe),this._cacheVersion=0,this._metersPerVerticalUnit=K(i)}async alignCandidates(t,s){const i=this._elevationInfo;return i==null||i.mode!=="absolute-height"||i.featureExpressionInfo?this._alignComputedElevationCandidates(t,s):(this._alignAbsoluteElevationCandidates(t,i),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,s){const{offset:i,unit:n}=s;if(i==null)return;const r=i*(ee(n??"meters")/this._metersPerVerticalUnit);for(const a of t)switch(a.type){case"edge":a.start.z+=r,a.end.z+=r;continue;case"vertex":a.target.z+=r;continue}}async _alignComputedElevationCandidates(t,s){const i=new Map;for(const f of t)te(i,f.objectId,$e).push(f);const[n,r,a]=this._prepareQuery(i),o=await this._alignPointsInFeatures(n,s);if(g(s),a!==this._cacheVersion)return this._alignComputedElevationCandidates(t,s);this._applyCacheAndResponse(n,o,r);const{drapedObjectIds:u,failedObjectIds:c}=o,p=[];for(const f of t){const{objectId:y}=f;u.has(y)&&f.type==="edge"&&(f.draped=!0),c.has(y)||p.push(f)}return p}_prepareQuery(t){const s=[],i=[];for(const[n,r]of t){const a=[];for(const o of r)this._addToQueriesOrCachedResult(n,o.target,a,i),o.type==="edge"&&(this._addToQueriesOrCachedResult(n,o.start,a,i),this._addToQueriesOrCachedResult(n,o.end,a,i));a.length!==0&&s.push({objectId:n,points:a})}return[s,i,this._cacheVersion]}_addToQueriesOrCachedResult(t,s,i,n){const r=V(t,s),a=this._alignmentsCache.get(r);a==null?i.push(s):n.push(new Ae(s,a))}_applyCacheAndResponse(t,{elevations:s,drapedObjectIds:i,failedObjectIds:n},r){for(const u of r)u.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:u,points:c}of t){if(n.has(u)){a+=c.length;continue}const p=!i.has(u);for(const f of c){const y=V(u,f),E=s[a++];f.z=E,p&&o.put(y,E,1)}}}};class Ae{constructor(t,s){this.point=t,this.z=s}apply(){this.point.z=this.z}}function V(e,{x:t,y:s,z:i}){return`${e}-${t}-${s}-${i??0}}`}function $e(){return[]}let Re=class{filter(t,s){return s}notifyElevationSourceChange(){}},Pe=class{filter(t,s){const{point:i,distance:n}=t,{z:r}=i;if(r==null||s.length===0)return s;const a=Me(n),o=this._updateCandidatesTo3D(s,i,a).filter(He);return o.sort(Ue),o}_updateCandidatesTo3D(t,s,i){for(const n of t)switch(n.type){case"edge":De(n,s,i);continue;case"vertex":Ne(n,s,i);continue}return t}};function He(e){return e.distance<=1}function k(e=!1){return e?new Pe:new Re}function De(e,t,{x:s,y:i,z:n}){const{start:r,end:a,target:o}=e;e.draped||ze(o,t,r,a);const u=(t.x-o.x)/s,c=(t.y-o.y)/i,p=(t.z-o.z)/n;e.distance=Math.sqrt(u*u+c*c+p*p)}function ze(e,t,s,i){const n=i.x-s.x,r=i.y-s.y,a=i.z-s.z,o=n*n+r*r+a*a,u=(t.x-s.x)*n+(t.y-s.y)*r+a*(t.z-s.z),c=Math.min(1,Math.max(0,u/o)),p=s.x+n*c,f=s.y+r*c,y=s.z+a*c;e.x=p,e.y=f,e.z=y}function Ne(e,t,{x:s,y:i,z:n}){const{target:r}=e,a=(t.x-r.x)/s,o=(t.y-r.y)/i,u=(t.z-r.z)/n,c=Math.sqrt(a*a+o*o+u*u);e.distance=c}function Me(e){return typeof e=="number"?{x:e,y:e,z:e}:e}function Ue(e,t){return e.distance-t.distance}function L(e=!1,t){return e?new Be(t):new je}class je{async fetch(){return[]}notifySymbologyChange(){}}const qe=1024;class Be{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new Z(qe),this._cacheVersion=0}async fetch(t,s){if(t.length===0)return[];const i=[],n=[],r=this._candidatesCache;for(const f of t){const y=Q(f),E=r.get(y);if(E)for(const v of E)n.push(D(v));else i.push(f),r.put(y,[],1)}if(i.length===0)return n;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:u}=await this._getSymbologyCandidates(i,s);if(g(s),a!==this._cacheVersion)return this.fetch(t,s);const c=[],{length:p}=o;for(let f=0;f<p;++f){const y=o[f],E=Q(i[u[f]]),v=r.get(E);v.push(y),r.put(E,v,v.length),c.push(D(y))}return n.concat(c)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function Q(e){switch(e.type){case"vertex":{const{objectId:t,target:s}=e,i=`${t}-vertex-${s.x}-${s.y}-${s.z??0}`;return z(i).toString()}case"edge":{const{objectId:t,start:s,end:i}=e,n=`${t}-edge-${s.x}-${s.y}-${s.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return z(n).toString()}default:return""}}let b=class extends R{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,s){this._pending.push({promise:t,callback:s}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then(s=>t.callback(s)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};h([d()],b.prototype,"updating",void 0),b=h([w("esri.core.AsyncSequence")],b);class Ve{constructor(t,s){this.data=t,this.resolution=s,this.state={type:l.CREATED},this.alive=!0}process(t){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case l.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(t,s){return{type:l.FETCH_COUNT,previous:t,task:O(async i=>{const n=await N(s.fetchCount(this,i));this.state.type===l.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,n.ok?n.value:1/0))})}}_gotoFetchedCount(t,s){return{type:l.FETCHED_COUNT,featureCount:s,previous:t}}_gotoFetchFeatures(t,s){return{type:l.FETCH_FEATURES,previous:t,task:O(async i=>{const n=await N(s.fetchFeatures(this,t.featureCount,i));this.state.type===l.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,n.ok?n.value:[]))})}}_gotoFetchedFeatures(t,s){return{type:l.FETCHED_FEATURES,previous:t,features:s}}_goToDone(t,s){return s.finish(this,t.features),{type:l.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:l.CREATED},t.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||(P(t,J),H(this.data.extent,J))}}var l;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(l||(l={}));const J=W();let _=class extends R{get _minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(e!=null&&t!=null&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new A,this._pendingEdits=new b,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{se(e,t,({id:s},{id:i})=>s===i)||this._process()},X),this.addHandles(ie(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this._pendingEdits.push(e,async t=>{if(t.addedFeatures.length===0&&t.updatedFeatures.length===0&&t.deletedFeatures.length===0)return;for(const[,i]of this._pendingTiles)i.reset();const s={...t,deletedFeatures:t.deletedFeatures.map(({objectId:i,globalId:n})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(n))};await this._updatingHandles.addPromise(this.store.processEdits(s,(i,n)=>this._queryFeaturesById(i,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!ne(this.url))return;const e=O(async t=>{var s;try{const i=await Ce(this.url,new S({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:t});this.store.extent=re.fromJSON((s=i.data)==null?void 0:s.extent)}catch(i){ae(i),oe.getLogger(this).warn("Failed to fetch data extent",i)}});this._updatingHandles.addPromise(e.promise.then(()=>this._process())),this.addHandles(le(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){if(this.suspended)return;const e=this._collectMissingTilesInfo();if(this._setAvailability(e==null?1:e.coveredArea/e.fullArea),e!=null)for(const{data:t,resolution:s}of e.missingTiles){const i=this._pendingTiles.get(t.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(t,s)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],i=this.store.process(s,(n,r)=>this._verifyTileComplexity(n,r));e==null?e=i:e.prepend(i)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,i)=>this._fetchFeatures(t,s,i),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this._updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<Le}_verifyFeatureDensity(e,t){if(this.tileInfo==null)return!1;const s=this.tileSize*t;return e*(Qe/(s*s))<Je}_ensureFetchAllCounts(e){let t=!0;for(const[,s]of this._pendingTiles)s.state.type<l.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(e)),s.state.type<=l.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(e==null?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const s=new Ve(e,t);return this._pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:x,signal:t})}async _fetchFeatures(e,t,s){let i=0;const n=[];let r=0,a=t;for(;;){const o=this._createFeaturesQuery(e),u=this._setPagingParameters(o,i,a),{features:c,exceededTransferLimit:p}=await this._queryFeatures(o,s);u&&(i+=o.num),r+=c.length;for(const f of c)n.push(f);if(a=t-r,!u||!p||a<=0)return n}}_filterProperties(e){return e==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(t==null)throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach(n=>{e===n.attributes[t]&&(i=n.objectId??n.attributes[s])}),i==null)throw new Error(`Expected to find a feature with globalId ${e}`);return i}_queryFeaturesById(e,t){const s=this._createFeaturesQuery();return s.objectIds=e,this._queryFeatures(s,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await Fe(this.url,e,new Ee({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:x,signal:t});return ge(i)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await Te(this.url,e,s,{query:this._configuration.customParameters,timeout:x,signal:t});return ye(i,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e=null){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,e!=null&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new S({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&e!=null?ue(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:n,tileMaxRecordCount:r,maxRecordCount:a,supportsResultType:o}=this.capabilities.query,u=i?S.MAX_MAX_RECORD_COUNT_FACTOR:1,c=u*((o||n)&&r?r:a||ke);return e.start=t,i?(e.maxRecordCountFactor=Math.min(u,Math.ceil(s/c)),e.num=Math.min(s,e.maxRecordCountFactor*c)):e.num=Math.min(s,c),!0}};h([d({constructOnly:!0})],_.prototype,"url",void 0),h([d({constructOnly:!0})],_.prototype,"objectIdField",void 0),h([d({constructOnly:!0})],_.prototype,"globalIdField",void 0),h([d({constructOnly:!0})],_.prototype,"capabilities",void 0),h([d({constructOnly:!0})],_.prototype,"sourceSpatialReference",void 0),h([d({constructOnly:!0})],_.prototype,"spatialReference",void 0),h([d({constructOnly:!0})],_.prototype,"store",void 0),h([d({readOnly:!0})],_.prototype,"_minimumVerticesPerFeature",null),h([d()],_.prototype,"suspended",void 0),h([d()],_.prototype,"filter",null),h([d()],_.prototype,"customParameters",null),h([d({readOnly:!0})],_.prototype,"_configuration",null),h([d()],_.prototype,"tileInfo",null),h([d()],_.prototype,"tileSize",null),h([d()],_.prototype,"tilesOfInterest",void 0),h([d({readOnly:!0})],_.prototype,"updating",null),h([d({readOnly:!0})],_.prototype,"updatingExcludingEdits",null),h([d({readOnly:!0})],_.prototype,"availability",void 0),h([d()],_.prototype,"hasZ",null),_=h([w("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],_);const ke=2e3,x=6e5,Le=1e6,Qe=25,Je=1;class Ge{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[i,n]of this._store){if(this._byteSize<=t)break;this.delete(i),s(n)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let F=class extends R{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*be.MEGABYTES,this._tileBounds=new Ie,this._tiles=new Ge,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=W()}add(e,t){const s=[];for(const i of t)this._referenceFeature(i.objectId)===C.ADDED&&s.push(i);this._addTileStorage(e,new Set(t.map(i=>i.objectId)),Ze(t)),this.featureStore.addMany(s),this._tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){const i=e.id;this._tiles.set(i,new Ye(e,t,s)),this._tileBounds.set(i,e.extent),this._tileFeatureCounts.set(i,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===C.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const s of e)t.objectIds.delete(s);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:n,hasM:r}=this.featureStore;for(const a of i){const o=me(this._tmpBoundingRect,a.geometry,n,r);o!=null&&this._tileBounds.forEachInBounds(o,u=>{const c=this._tiles.get(u);this.featureStore.add(a);const p=a.objectId;c.objectIds.has(p)||(c.objectIds.add(p),this._referenceFeature(p),this._tileFeatureCounts.set(c.data.id,c.objectIds.size))})}}process(e,t=()=>!0){if(this.tileInfo==null||!e.extent||this.extent!=null&&!H(P(this.extent,this._tmpBoundingRect),e.extent))return new $(e);if(this._tiles.has(e.id))return new $(e);const s=this._createTileTree(e,this.tileInfo);return this._simplify(s,t,null,0,1),this._collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,s,i){const n=this._tileFeatureCounts.get(e.id);if(n!=null)return n;const r=await ve(t,s,i);return this._tileFeatureCounts.set(e.id,r.data.count),r.data.count}_createTileTree(e,t){const s=new G(e.level,e.row,e.col);return t.updateTileInfo(s,I.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,i=>{var r;const n=(r=this._tiles.get(i))==null?void 0:r.data;n&&this._tilesAreRelated(e,n)&&this._populateChildren(s,n,t,this._tileFeatureCounts.get(n.id)||0)}),s}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,n=s?t:e,r=1<<n.level-i.level;return Math.floor(n.row/r)===i.row&&Math.floor(n.col/r)===i.col}_populateChildren(e,t,s,i){const n=t.level-e.level-1;if(n<0)return void(e.isLeaf=!0);const r=t.row>>n,a=t.col>>n,o=e.row<<1,u=a-(e.col<<1)+(r-o<<1),c=e.children[u];if(c!=null)this._populateChildren(c,t,s,i);else{const p=new G(e.level+1,r,a);s.updateTileInfo(p,I.ExtrapolateOptions.POWER_OF_TWO),e.children[u]=p,this._populateChildren(p,t,s,i)}}_simplify(e,t,s,i,n){const r=n*n;if(e.isLeaf)return t(this.getFeatureCount(e),n)?0:(this._remove(e),s!=null&&(s.children[i]=null),r);const a=n/2,o=a*a;let u=0;for(let c=0;c<e.children.length;c++){const p=e.children[c];u+=p!=null?this._simplify(p,t,e,c,a):o}return u===0?this._mergeChildren(e):1-u/r<et&&(this._purge(e),s!=null&&(s.children[i]=null),u=r),u}_mergeChildren(e){const t=new Set;let s=0;this._forEachLeaf(e,i=>{const n=this._tiles.get(i.id);if(n){s+=n.byteSize;for(const r of n.objectIds)t.has(r)||(t.add(r),this._referenceFeature(r));this._remove(i)}}),this._addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)s!=null&&(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(e!=null)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null}}_collectMissingTiles(e,t,s){const i=new Ke(s,e,this.extent);return this._collectMissingTilesRecurse(t,i,1),i.info}_collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let n=0;n<e.children.length;n++){const r=e.children[n];r==null?t.addMissing(e.level+1,(e.row<<1)+((2&n)>>1),(e.col<<1)+(1&n),i):this._collectMissingTilesRecurse(r,t,i)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?C.ADDED:C.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),C.REMOVED):(t>0&&this._refCounts.set(e,t),C.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(e=>`${e}:${this._refCounts.get(e)}`)}}};function Ze(e){return e.reduce((t,s)=>t+We(s),0)}function We(e){return 32+Xe(e.geometry)+Se(e.attributes)}function Xe(e){if(e==null)return 0;const t=q(e.lengths,4);return 32+q(e.coords,8)+t}h([d({constructOnly:!0})],F.prototype,"featureStore",void 0),h([d()],F.prototype,"tileInfo",void 0),h([d()],F.prototype,"extent",void 0),h([d()],F.prototype,"maximumByteSize",void 0),F=h([w("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],F);let Ye=class{constructor(t,s,i){this.data=t,this.objectIds=s,this.byteSize=i}};class G{constructor(t,s,i){this.level=t,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}class ${constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=Y(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}let Ke=class{constructor(t,s,i){this._tileInfo=t,this._extent=null,this.info=new $(s),i!=null&&(this._extent=P(i))}addMissing(t,s,i,n){const r=new ce(null,t,s,i);this._tileInfo.updateTileInfo(r,I.ExtrapolateOptions.POWER_OF_TWO),r.extent==null||this._extent!=null&&!H(this._extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:n}),this.info.coveredArea-=Y(r.extent))}};const et=.18751;var C;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(C||(C={}));let T=class extends he.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=M(),this._elevationAligner=B(),this._elevationFilter=k(),this._symbologyCandidatesFetcher=L(),this._updatingHandles=new A,this._editsUpdatingHandles=new A,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const s={points:e},i=await this.remoteClient.invoke("alignElevation",s,{signal:t});return g(t),i},this._getSymbologyCandidates=async(e,t)=>{const s={candidates:e,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:t});return g(t),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var e,t,s;(e=this._featureFetcher)==null||e.destroy(),(t=this._queryEngine)==null||t.destroy(),(s=this._featureStore)==null||s.clear()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:s,timeInfo:i,fields:n}=e.serviceInfo,{hasZ:r}=e,a=U.fromJSON(e.spatialReference);this._spatialReference=a,this._featureStore=new fe({...e.serviceInfo,hasZ:r,hasM:!1}),this._queryEngine=new _e({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fields:n,hasZ:r,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new _({store:new F({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:U.fromJSON(e.serviceInfo.spatialReference)});const o=e.configuration.viewType==="3d";return this._elevationAligner=B(o,{elevationInfo:e.elevationInfo!=null?de.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:a}),this._elevationFilter=k(o),this.addHandles([j(()=>this._featureFetcher.availability,u=>this.emit("notify-availability",{availability:u}),X),j(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),m}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.suspended=e,m}async fetchCandidates(e,t){await this._whenSetup.promise,g(t);const s=tt(e),i=t!=null?t.signal:null,n=await this._queryEngine.executeQueryForSnapping(s,i);g(i);const r=await this._elevationAligner.alignCandidates(n.candidates,i);g(i);const a=await this._symbologyCandidatesFetcher.fetch(r,i);g(i);const o=a.length===0?r:r.concat(a);return{result:{candidates:this._elevationFilter.filter(s,o)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=e.tileInfo!=null?I.fromJSON(e.tileInfo):null,m}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.refresh(),m}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),await pe(()=>!this.updatingExcludingEdits,t),g(t),m}async getDebugInfo(e,t){return g(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),g(t);const s=M();return this._pendingApplyEdits.set(e.id,s),this._featureFetcher.applyEdits(s.promise),this._editsUpdatingHandles.addPromise(s.promise),m}async endApplyEdits(e,t){const s=this._pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),g(t),m}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),m}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),m}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=L(e,this._getSymbologyCandidates),m}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=e.filter!=null?S.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};h([d({readOnly:!0})],T.prototype,"updating",null),h([d({readOnly:!0})],T.prototype,"updatingExcludingEdits",null),h([d()],T.prototype,"_isInitializing",void 0),T=h([w("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],T);const Ht=T;function tt(e){return{point:e.point,mode:e.mode,distance:e.distance,returnEdge:e.returnEdge,returnVertex:e.returnVertex,query:e.filter!=null?e.filter:{where:"1=1"}}}const m={result:{}};export{Ht as default};