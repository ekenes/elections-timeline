import{n as i,q as l,b3 as u,t as p,b4 as b,b5 as d}from"./index-d2e37ef9.js";import{n as m}from"./floorFilterUtils-080a7cd2.js";import{n as f}from"./sublayerUtils-7d9b9893.js";const g={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let t=class extends b{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const n=m(this.floors,s);return s.toExportImageJSON(n)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&f(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(g[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var n;const e=!!((n=this.floors)!=null&&n.length),s=this.visibleSublayers.filter(a=>a.definitionExpression!=null||e&&a.floorInfo!=null);return s.length?JSON.stringify(s.reduce((a,r)=>{const o=m(this.floors,r),y=d(o,r.definitionExpression);return y!=null&&(a[r.id]=y),a},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,n=r=>{const o=this.scale,y=o===0,h=r.minScale===0||o<=r.minScale,c=r.maxScale===0||o>=r.maxScale;r.visible&&(y||h&&c)&&(r.sublayers?r.sublayers.forEach(n):e.unshift(r))};s&&s.forEach(n);const a=this._get("visibleSublayers");return!a||a.length!==e.length||a.some((r,o)=>e[o]!==r)?e:a}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};i([l({readOnly:!0})],t.prototype,"dynamicLayers",null),i([l()],t.prototype,"floors",void 0),i([l({readOnly:!0})],t.prototype,"hasDynamicLayers",null),i([l()],t.prototype,"layer",null),i([l({readOnly:!0})],t.prototype,"layers",null),i([l({readOnly:!0})],t.prototype,"layerDefs",null),i([l({type:Number})],t.prototype,"scale",void 0),i([l(u)],t.prototype,"timeExtent",void 0),i([l({readOnly:!0})],t.prototype,"version",null),i([l({readOnly:!0})],t.prototype,"visibleSublayers",null),t=i([p("esri.layers.mixins.ExportImageParameters")],t);export{t as y};