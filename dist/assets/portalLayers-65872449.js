import{ah as L,s as w,aC as i,aD as u}from"./index-d2e37ef9.js";import{a as I}from"./lazyLayerLoader-1bb194f7.js";import{getNumLayersAndTables as y,preprocessFSItemData as S,getSubtypeGroupLayerIds as g,getOrientedImageryLayerIds as T,getFirstLayerOrTableId as $}from"./layersLoader-6f5f709a.js";import{t as c}from"./fetchService-d9b53222.js";import"./jsonContext-9a586da3.js";async function B(e){!e.portalItem||e.portalItem instanceof L||(e={...e,portalItem:new L(e.portalItem)});const a=await v(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function v(e){return await e.load(),M(await F(e))}async function F(e){switch(e.type){case"Map Service":return h(e);case"Feature Service":return G(e);case"Feature Collection":return C(e);case"Scene Service":return b(e);case"Image Service":return V(e);case"Stream Service":return W();case"Vector Tile Service":return j();case"GeoJson":return D();case"CSV":return K();case"KML":return O();case"WFS":return k();case"WMTS":return A();case"WMS":return x();case"Feed":return J();default:throw new w("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function M(e){const a=e.className,r=I[a];return{constructor:await r(),properties:e.properties}}async function h(e){return await R(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function G(e){const a=await d(e);if(typeof a=="object"){const r={};return a.id!=null&&(r.layerId=a.id),{className:a.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}async function b(e){var r;const a=await d(e);if(typeof a=="object"){const t={};let n;if(a.id!=null?(t.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const o of Object.keys(i))if(e.typeKeywords.includes(o))return{className:i[o]}}const s=await c(n);return{className:i[s==null?void 0:s.layerType]||"SceneLayer",properties:t}}if(a===!1){const t=await c(e.url);return(t==null?void 0:t.layerType)==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}return{className:"GroupLayer"}}async function C(e){await e.load();const a=u(e,"Map Notes"),r=u(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(u(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return y(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function V(e){var m,p,f;await e.load();const a=((m=e.typeKeywords)==null?void 0:m.map(N=>N.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await e.fetchData(),t=r==null?void 0:r.layerType;if(t==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(t==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await c(e.url),s=(p=n.cacheType)==null?void 0:p.toLowerCase(),o=(f=n.capabilities)==null?void 0:f.toLowerCase().includes("tilesonly");return s==="map"||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function W(){return{className:"StreamLayer"}}function j(){return{className:"VectorTileLayer"}}function D(){return{className:"GeoJSONLayer"}}function K(){return{className:"CSVLayer"}}function O(){return{className:"KMLLayer"}}function k(){return{className:"WFSLayer"}}function x(){return{className:"WMSLayer"}}function A(){return{className:"WMTSLayer"}}function J(){return{className:"StreamLayer"}}async function R(e){return(await c(e.url)).tileInfo}async function d(e){const a=e.url;if(!a||/\/\d+$/.test(a))return{};await e.load();const r=await e.fetchData();if(e.type==="Feature Service"){const t=l(await S(r,a));if(typeof t=="object"){const n=g(r),s=T(r);t.className=t.id!=null&&n.includes(t.id)?"SubtypeGroupLayer":t.id!=null&&(s!=null&&s.includes(t.id))?"OrientedImageryLayer":"FeatureLayer"}return t}return y(r)>0?l(r):l(await c(a))}function l(e){return y(e)===1&&{id:$(e)}}export{B as fromItem,F as selectLayerClassPath};