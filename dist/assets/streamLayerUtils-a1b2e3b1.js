import{$ as m,j as c}from"./utils-81c4ecea.js";import{l as u,a as y,f as i,i as p}from"./index-5bdaa4d1.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./jsonContext-55c14690.js";import"./saveAPIKeyUtils-47b30d09.js";import"./saveUtils-9d84e8e3.js";const n="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function s(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function o(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:l,fullExtent:a}=r;e.url=t.path,e.title||(e.title=l),e.extent=null,a!=null&&(e.extent=await u(a)),y(e,i.METADATA),p(e,i.SINGLE_LAYER)}async function P(r,e){return m({layer:r,itemType:n,additionalItemType:f,validateLayer:s,createItemData:o,errorNamePrefix:d},e)}async function b(r,e,t){return c({layer:r,itemType:n,validateLayer:s,createItemData:o,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{P as save,b as saveAs};