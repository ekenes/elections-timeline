import{cR as c,A as t,B as e,F as p,J as l,f as y,eZ as d,e_ as a,K as g}from"./index-fc6a9042.js";const s=new c({startingPoint:"starting-point",barrier:"barrier"});let i=class extends l{constructor(o){super(o),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([e({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([e({type:s.apiValues,json:{type:s.jsonValues,read:{reader:s.read,source:"traceLocationType"},write:{writer:s.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([p("esri.rest.networks.support.TraceLocation")],i);const w=i;var n;let r=n=class extends l{static from(o){return g(n,o)}constructor(o){super(o),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}};t([e({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],r.prototype,"namedTraceConfigurationGlobalId",void 0),t([e({type:String,json:{write:!0}})],r.prototype,"gdbVersion",void 0),t([e({type:[w],json:{write:!0}})],r.prototype,"traceLocations",void 0),t([e({type:Date,json:{type:Number,write:{writer:(o,u)=>{u.moment=o?o.getTime():null}}}})],r.prototype,"moment",void 0),t([e({type:y,json:{read:!1}})],r.prototype,"outSpatialReference",void 0),t([e({type:d,json:{write:!0}})],r.prototype,"traceConfiguration",void 0),t([e({type:[Object],json:{write:!0}})],r.prototype,"resultTypes",void 0),t([e({type:a.apiValues,json:{type:a.jsonValues,read:a.read,write:a.write}})],r.prototype,"traceType",void 0),r=n=t([p("esri.rest.networks.support.TraceParameters")],r);const j=r;export{j as default};