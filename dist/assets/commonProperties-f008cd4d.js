import{cL as s,dY as a,dZ as u,d_ as y,aC as c,N as w}from"./index-ee4f50bd.js";import{h as g}from"./ElevationInfo-4f399334.js";function v(i){if(!i)return i;const{start:e,end:n}=i;return new s({start:e!=null?a(e,-e.getTimezoneOffset(),"minutes"):e,end:n!=null?a(n,-n.getTimezoneOffset(),"minutes"):n})}function b(i){if(!i)return i;const{start:e,end:n}=i;return new s({start:e!=null?a(e,e.getTimezoneOffset(),"minutes"):e,end:n!=null?a(n,n.getTimezoneOffset(),"minutes"):n})}const D={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},O={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(i,e)=>!e.disablePopup},write:{enabled:!0,writer(i,e,n){e[n]=!i}}}},N={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},S={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:y}}},h={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},x={value:null,type:g,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function T(i){return{type:i,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const p={write:!0,read:!0},m={type:Number,json:{origins:{"web-document":p,"portal-item":{write:!0}}}},z={...m,json:{...m.json,origins:{"web-document":{...p,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(i,e,n)=>n&&n.origin!=="service"||!e.drawingInfo||e.drawingInfo.transparency===void 0?e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.transparency!==void 0?u(e.layerDefinition.drawingInfo.transparency):void 0:u(e.drawingInfo.transparency)}}},R={type:s,readOnly:!0,get(){var f,d;if(!((f=this.layer)!=null&&f.timeInfo))return null;const{datesInUnknownTimezone:i,timeOffset:e,useViewTime:n}=this.layer,o=(d=this.view)==null?void 0:d.timeExtent;let t=this.layer.timeExtent;i&&(t=b(t));let r=n?o&&t?o.intersection(t):o||t:t;if(!r||r.isEmpty||r.isAllTime)return r;e&&(r=r.offset(-e.value,e.unit)),i&&(r=v(r));const l=this._get("timeExtent");return r.equals(l)?l:r}},E={type:c,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(i,e)=>{const n=c.fromJSON(i);return e.spatialReference!=null&&typeof e.spatialReference=="object"&&(n.spatialReference=w.fromJSON(e.spatialReference)),n}}}},read:!1}},B={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},L={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},P={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},q={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}};export{P as D,L as I,q as S,R as b,h as c,x as d,S as f,z as g,E as j,D as l,N as m,O as p,m as u,B as v,T as y};
