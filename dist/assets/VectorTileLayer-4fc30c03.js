import{s as J,a as I,el as G,iK as Y,ag as w,d0 as X,ac as S,ci as C,q as k,F as H,n as Z,b8 as A,fw as ee,fI as te,fK as re,ax as v,cL as N,bo as $,bm as U,aT as q,fb as Q,iL as V,fc as F,ai as se,iM as K,aI as ie,c$ as oe,cp as le,ct as ae,cS as ne,cr as ue,cs as pe,cU as ce,cT as he,cu as ye,cv as R,iN as de,iO as fe,dM as L,c0 as me,t as c,v as h,a6 as ge,cZ as Ae,bl as D,w as Se,aP as we}from"./index-de9e02e1.js";import{p as xe}from"./ArcGISCachedService-b4a77410.js";import{T as z}from"./TilemapCache-cfe9b359.js";import{e as ve}from"./jsonContext-25b1ac01.js";import{l as _e}from"./StyleRepository-9774b24b.js";import"./TileInfoTilemapCache-c9452d67.js";import"./ByteSizeUnit-d4757d40.js";import"./StyleDefinition-29c49b98.js";import"./enums-f1a6a48a.js";import"./enums-fb086c25.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./colorUtils-c0f43caf.js";import"./GeometryUtils-984e8446.js";import"./definitions-e16dc41c.js";let _=null;function be(e){if(_)return _;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return _=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),_}const M=1.15;class E{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>M;const{width:r,height:s,data:i,json:l}=await this._getSpriteData(this._spriteSource,t),o=Object.keys(l);if(!o||o.length===0||!i)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=l,this.width=r,this.height=s;const n=Math.max(this._maxTextureSize,4096);if(r>n||s>n){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw J.getLogger("esri.layers.support.SpriteSource").error(u),new I("SpriteSource",u)}let a;for(let u=0;u<i.length;u+=4)a=i[u+3]/255,i[u]=i[u]*a,i[u+1]=i[u+1]*a,i[u+2]=i[u+2]*a;this.image=i}async _getSpriteData(t,r){if(t.type==="image"){let y,d;if(this.devicePixelRatio<M){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");y=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");y=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in y&&"height"in y&&"data"in y&&(G(y.data)||Y(y.data))?{width:y.width,height:y.height,data:new Uint8Array(y.data),json:d}:{...j(y),json:d}}const s=w(this.baseURL),i=s.query?"?"+X(s.query):"",l=this._isRetina?"@2x":"",o=`${s.path}${l}.${this._spriteImageFormat}${i}`,n=`${s.path}${l}.json${i}`,[a,u]=await Promise.all([S(n,r),S(o,{responseType:"image",...r})]);return{...j(u.data),json:a.data}}}function j(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(s.data)}}let Ie=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=S(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return C(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new k(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let l,o,n=t,a=s.pop();if(n===1)return a;for(;s.length;)if(l=s.pop(),o=(1&l.col)+((1&l.row)<<1),n){if(n[o]===0){a=null;break}if(n[o]===1){a=l;break}a=l,n=n[o]}return a}},Ue=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=H(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=S(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:l}=t,o=new k(t);return this._tilemap.fetchAvailabilityUpsample(s,i,l,o,r).then(()=>(o.world=t.world,o)).catch(n=>{if(Z(n))throw n;return null})}};class Re{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const r=this._abortOptions;return r.push(t),te(t,()=>{r.every(s=>re(s))&&this._abortController.abort()}),this._promise.then(s=>v(s))}async _makeRequest(t,r){const{data:s}=await S(t,{responseType:"array-buffer",signal:r});return s}}const T=new Map;function Te(e,t,r,s,i){const l=w(e),o=l.query;if(o)for(const[a,u]of Object.entries(o))switch(u){case"{x}":o[a]=s.toString();break;case"{y}":o[a]=r.toString();break;case"{z}":o[a]=t.toString()}const n=l.path;return $e(A(n.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,s.toString()),{...l.query}),i)}function $e(e,t){return ee(T,e,()=>new Re(e)).getData(t).then(r=>(T.delete(e),r)).catch(r=>{throw T.delete(e),r})}class Pe{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=w(this.sourceUrl),l=v(s),o=l.tiles;if(i)for(let m=0;m<o.length;m++){const f=w(o[m]);f&&(N(f.path)||(f.path=$(i.path,f.path)),o[m]=A(f.path,{...i.query,...f.query}))}this.tileServers=o;const n=s.capabilities&&s.capabilities.split(",").map(m=>m.toLowerCase().trim()),a=(s==null?void 0:s.exportTilesAllowed)===!0,u=(n==null?void 0:n.includes("tilemap"))===!0,y=a&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:u},exportTiles:a?{maxExportTilesCount:+y}:null},this.tileInfo=U.fromJSON(l.tileInfo);const d=s.tileMap?A($(i.path,s.tileMap),i.query??{}):null;u?(this.type="vector-tile",this.tilemap=new Ue(new z({layer:{parsedUrl:i,tileInfo:this.tileInfo},minLOD:l.minLOD??this.tileInfo.lods[0].level,maxLOD:l.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Ie(d)),this.fullExtent=q.fromJSON(s.fullExtent)}destroy(){var t;(t=this.tilemap)==null||t.destroy()}async getRefKey(t,r){var s;return await((s=this.tilemap)==null?void 0:s.dataKey(t,r))??t}requestTile(t,r,s,i){const l=this.tileServers[r%this.tileServers.length];return Te(l,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,l=s.lods,o=Math.min(i.length,l.length);for(let n=0;n<o;n++){const a=i[n],u=l[n];if(a.level!==u.level||Math.round(a.scale)!==Math.round(u.scale))return!1}return!0}}async function Oe(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await g(r,"esri",e,i,t),{layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&x(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&x(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function x(...e){let t;for(const r of e)r!=null&&(Q(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=N(r)?r:$(t,r));return t?V(t):void 0}async function g(e,t,r,s,i){let l,o,n;if(C(i),typeof r=="string"){const u=F(r);n=await S(u,{...i,responseType:"json",query:{f:"json",...i==null?void 0:i.query}}),n.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=u,o=u}else r!=null&&(n={data:r},l=r.jsonUrl||null,o=s);const a=n==null?void 0:n.data;if(W(a))return e.styleUrl=l||null,De(e,a,o,i);if(Le(a))return e.sourceUrl?B(e,a,o,!1,t,i):(e.sourceUrl=l||null,B(e,a,o,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function W(e){return!!e&&"sources"in e&&!!e.sources}function Le(e){return!W(e)}async function De(e,t,r,s){const i=r?se(r):K();e.styleBase=i,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await g(e,"esri",x(i,o.url),void 0,s):l.push(g(e,"esri",o,i,s))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(g(e,o,x(i,t.sources[o].url),void 0,s)):t.sources[o].tiles&&l.push(g(e,o,t.sources[o],i,s)));await Promise.all(l)}async function B(e,t,r,s,i,l){const o=r?V(r)+"/":K(),n=Me(t),a=new Pe(i,A(o,(l==null?void 0:l.query)??{}),n);if(!s&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(a))return;a.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(a.fullExtent):u.fullExtent=a.fullExtent.clone()),u.tileInfo&&a.tileInfo&&u.tileInfo.lods.length<a.tileInfo.lods.length&&(u.tileInfo=a.tileInfo)}if(s&&(e.sourceBase=o,e.source=t,e.validatedSource=n,e.primarySourceName=i),e.sourceNameToSource[i]=a,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?g(e,"",x(o,t.defaultStyles,"root.json"),void 0,l):g(e,"",t.defaultStyles,x(o,"root.json"),l)}}function Me(e){if(e.hasOwnProperty("tileInfo"))return e;const t={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},r=512;let s=78271.51696400007,i=2958287637957775e-7;const l=[],o=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let a=0;a<=n;a++)a>=o&&l.push({level:a,scale:i,resolution:s}),s/=2,i/=2;return{capabilities:"TilesOnly",initialExtent:t,fullExtent:t,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:r,cols:r,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}const b=1e-6;function Ee(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=b||Math.abs(r.y-s.y)>=b)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let o=i.lods[0].scale;o>=l.lods[l.lods.length-1].scale-b;o/=2)if(Math.abs(o-l.lods[0].scale)<b)return!0;return!1}function je(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],s=e.format,i=e.dpi,l=new ie({x:e.origin.x,y:e.origin.y}),o=e.spatialReference,n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=n.scale,y=n.resolution,d=a.scale,m=[];let f=u,P=y,O=0;for(;f>d;)m.push(new oe({level:O,resolution:P,scale:f})),O++,f/=2,P/=2;return new U({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:m,spatialReference:o})}let p=class extends le(ae(xe(ne(ue(pe(ce(he(ye(we))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.tilemapCache=null,this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(R).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await S(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},ve(this.portalItem))}).catch(R).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&w(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?A(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?w(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Q(e)&&(e=`https:${e}`);const r=de(e);t.styleUrl=fe(e,r)}get tileInfo(){var r;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new U;if(e.length>1)for(let s=0;s<e.length;s++)Ee(t,e[s].tileInfo)&&(t=je(t,e[s].tileInfo));return t}readTilemapCache(e,t){var s;return((s=t.capabilities)==null?void 0:s.includes("Tilemap"))?new z({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,s;if(!this._spriteSourceMap.has(e)){const i=L("2d").maxTextureSize,l=(r=this.currentStyleInfo)!=null&&r.spriteUrl?A(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,o=new E({type:"url",spriteUrl:l,pixelRatio:e,spriteFormat:(s=this.currentStyleInfo)==null?void 0:s.spriteFormat},i);await o.load(t),this._spriteSourceMap.set(e,o)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=L("2d").maxTextureSize,s=e.spriteUrl,i=s?A(s,{...this.customParameters,token:this.apiKey}):null;if(!i&&e.type==="url")return null;const l=new E(e,r);try{await l.load(t);const o=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(o,l),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:l}),l}catch(o){R(o)}return null}async loadStyle(e,t){var s;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((s=this._loadingTask)==null||s.abort(),this._loadingTask=me(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return v(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return v(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return v(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Oe(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await be("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new _e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const l of r)if(l.toLowerCase().includes(s))return F(`//static.arcgis.com/attribution/Vector${i}/${l}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:q})],p.prototype,"fullExtent",null),c([h()],p.prototype,"style",void 0),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:ge,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([Ae(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:U})],p.prototype,"tileInfo",null),c([h()],p.prototype,"tilemapCache",void 0),c([D("service","tilemapCache",["capabilities","tileInfo"])],p.prototype,"readTilemapCache",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([D("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([h({type:String})],p.prototype,"showCollisionBoxes",void 0),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([Se("esri.layers.VectorTileLayer")],p);const et=p;export{et as default};
