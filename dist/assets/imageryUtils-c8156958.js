import{$ as m,j as o}from"./utils-a9aebd34.js";import{q as c,a as p,d as i,i as u}from"./index-f5007bd6.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-893944d0.js";import"./saveUtils-719d95c2.js";const s="Image Service",g="imagery-layer-save",v="imagery-layer-save-as",f="imagery-tile-layer-save",d="imagery-tile-layer-save-as";function y(r){var t;if(r.type==="imagery")return{isValid:!0};const{raster:e}=r,a=(e==null?void 0:e.datasetFormat)==="Function"?(t=e.primaryRasters)==null?void 0:t.rasters[0]:e;return{isValid:(a==null?void 0:a.datasetFormat)==="RasterTileServer"&&(a.tileType==="Raster"||a.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function T(r,e){const{parsedUrl:a,title:t,fullExtent:n}=r;e.url=a.path,e.title||(e.title=t);try{e.extent=await c(n)}catch{e.extent=void 0}p(e,i.METADATA),r.type==="imagery-tile"&&u(e,i.TILED_IMAGERY)}async function M(r,e){const a=r.type==="imagery"?g:f;return m({layer:r,itemType:s,validateLayer:y,createItemData:l,errorNamePrefix:a},e)}async function P(r,e,a){const t=r.type==="imagery"?v:d;return o({layer:r,itemType:s,validateLayer:y,createItemData:l,errorNamePrefix:t,newItem:e,setItemProperties:T},a)}export{M as save,P as saveAs};