import{C as t,D as i,N as m,g as x,cz as h,J as S}from"./index-76dad814.js";import{e as I}from"./TileInfoTilemapCache-e1398d75.js";import{j as D}from"./TilemapCache-6928fc3d.js";const L=y=>{let l=class extends y{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var a,e;(e=(a=this.tilemapCache)==null?void 0:a.destroy)==null||e.call(a)}readMinScale(a,e){return e.minLOD!=null&&e.maxLOD!=null?a:0}readMaxScale(a,e){return e.minLOD!=null&&e.maxLOD!=null?a:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(a,e,f){var u;const v=(u=e.capabilities)==null?void 0:u.includes("Tilemap");let{minLOD:n,maxLOD:o,minScale:p,maxScale:c}=e;if(n==null&&o==null&&p!==0&&c!==0){const r=s=>Math.round(1e4*s)/1e4;p=r(p||e.tileInfo.lods[0].scale),c=r(c||e.tileInfo.lods[e.tileInfo.lods.length-1].scale);for(const s of e.tileInfo.lods){const d=r(s.scale);n=d>=p?s.level:n,o=d>=c?s.level:o}}if(v)return new D({layer:this,minLOD:n,maxLOD:o});if(e.tileInfo){const r=new h;return r.read(e.tileInfo,f),new I(r,n,o)}return null}};return t([i({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),t([i()],l.prototype,"minScale",void 0),t([m("service","minScale")],l.prototype,"readMinScale",null),t([i()],l.prototype,"maxScale",void 0),t([m("service","maxScale")],l.prototype,"readMaxScale",null),t([i({type:x})],l.prototype,"spatialReference",void 0),t([i({readOnly:!0})],l.prototype,"supportsBlankTile",null),t([i({type:h})],l.prototype,"tileInfo",void 0),t([i()],l.prototype,"tilemapCache",void 0),t([m("service","tilemapCache",["capabilities","tileInfo"])],l.prototype,"readTilemapCache",null),t([i()],l.prototype,"version",void 0),l=t([S("esri.layers.mixins.ArcGISCachedService")],l),l};export{L as p};
