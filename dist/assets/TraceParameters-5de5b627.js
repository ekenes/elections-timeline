import{cZ as m,C as t,D as e,J as l,K as u,g as v,P as f,fg as j,fh as a,M as h}from"./index-76dad814.js";const s=new m({startingPoint:"starting-point",barrier:"barrier"});let i=class extends u{constructor(o){super(o),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([e({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([e({type:s.apiValues,json:{type:s.jsonValues,read:{reader:s.read,source:"traceLocationType"},write:{writer:s.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([l("esri.rest.networks.support.TraceLocation")],i);const b=i;var p;let r=p=class extends u{static from(o){return h(p,o)}constructor(o){super(o),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(o,n,d){if(o!=null){const{wkid:c,latestWkid:y,wkt:w,wkt2:g}=o;n[d]=JSON.stringify({wkid:c??void 0,latestWkid:y??void 0,wkt:w??void 0,wkt2:g??void 0})}}};t([e({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],r.prototype,"namedTraceConfigurationGlobalId",void 0),t([e({type:String,json:{write:!0}})],r.prototype,"gdbVersion",void 0),t([e({type:[b],json:{write:!0}})],r.prototype,"traceLocations",void 0),t([e({type:Date,json:{type:Number,write:{writer:(o,n)=>{n.moment=o?o.getTime():null}}}})],r.prototype,"moment",void 0),t([e({type:v,json:{write:{allowNull:!0,target:"outSR"}}})],r.prototype,"outSpatialReference",void 0),t([f("outSpatialReference")],r.prototype,"writeOutSR",null),t([e({type:j,json:{write:!0}})],r.prototype,"traceConfiguration",void 0),t([e({type:[Object],json:{write:!0}})],r.prototype,"resultTypes",void 0),t([e({type:a.apiValues,json:{type:a.jsonValues,read:a.read,write:a.write}})],r.prototype,"traceType",void 0),r=p=t([l("esri.rest.networks.support.TraceParameters")],r);const k=r;export{k as default};
