import{cc as $,ew as O,cd as T,e8 as P,dZ as E,d_ as F,d$ as L,dY as M,ea as R,e9 as N,bn as _,em as v,bx as g,cG as j,Y as f,Q as J,ex as U,ey as q,ez as A,s as x,a5 as V,A as a,B as o,eA as S,M as k,N as z,e2 as B,F as Z,cg as G,eB as C}from"./index-560772b3.js";import{i as D}from"./scaleUtils-ea82622e.js";import{m as H,f as K,t as W}from"./SublayersOwner-b2420aff.js";import{y as Y}from"./ExportImageParameters-7e6b0f9a.js";import{t as Q}from"./imageBitmapUtils-a47c001b.js";import{e as I}from"./sublayerUtils-ca33f594.js";import"./QueryTask-c8d15463.js";import"./infoFor3D-24efd44a.js";import"./executeForIds-476c39b4.js";import"./executeQueryPBF-8be78e42.js";import"./featureConversionUtils-ca95abbe.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends $(O(T(H(K(P(E(F(L(M(R(N(G)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new Y({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,t){var m,u,b;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray();let n=!1;const h=v(t.origin);if((m=this.capabilities)!=null&&m.operations.supportsExportMap&&((b=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const l=this.createSublayersForOrigin("service").sublayers;n=I(s,l,g.SERVICE)}else if(h>g.PORTAL_ITEM){const l=this.createSublayersForOrigin("portal-item");n=I(s,l.sublayers,v(l.origin))}}const d=[],y={writeSublayerStructure:n,...t};let c=n||this.hasVisibleLayersForOrigin(h);s.forEach(l=>{const w=l.write({},y);d.push(w),c=c||l.originOf("visible")==="user"}),d.some(l=>Object.keys(l).length>1)&&(r.layers=d),c&&(r.visibleLayers=s.filter(l=>l.visible).map(l=>l.id))}createExportImageParameters(e,r,p,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=D({extent:e,width:r})*s;const n=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},d=e==null?void 0:e.spatialReference,y=j(d);n.dpi*=s;const c={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();c.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+p,...n,...h,...c}}async fetchImage(e,r,p,t){const{data:s}=await this._fetchImage("image",e,r,p,t);return s}async fetchImageBitmap(e,r,p,t){const{data:s,url:n}=await this._fetchImage("blob",e,r,p,t);return Q(s,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,r),{extent:t,fullExtent:s,timeExtent:n}=p,h=t||s;return{fullExtent:h&&J.fromJSON(h),timeExtent:n&&U.fromJSON({start:n[0],end:n[1]})}}loadAll(){return q(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return A(this,e)}async _fetchImage(e,r,p,t,s){var d,y,c;const n={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((d=n.query)==null?void 0:d.dynamicLayers)!=null&&!((c=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&c.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:m}=await f(h,n);return{data:m,url:h}}catch(m){throw V(m)?m:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};a([o(S("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),a([o()],i.prototype,"dpi",void 0),a([o()],i.prototype,"gdbVersion",void 0),a([o()],i.prototype,"imageFormat",void 0),a([k("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),a([o()],i.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([o(S("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),a([z("sublayers",{layers:{type:[W]},visibleLayers:{type:[C]}})],i.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),a([o(B)],i.prototype,"url",void 0),i=a([Z("esri.layers.MapImageLayer")],i);const he=i;export{he as default};
