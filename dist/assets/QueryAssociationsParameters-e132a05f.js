import{A as s,B as r,D as p,E as o,F as a,J as y,K as m}from"./index-fc6a9042.js";var i;let e=i=class extends y{static from(t){return m(i,t)}constructor(t){super(t),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};s([r({type:Boolean,json:{write:!0}})],e.prototype,"returnDeletes",void 0),s([r({type:[p],json:{write:!0}})],e.prototype,"elements",void 0),s([r({type:[o.apiValues],json:{type:o.jsonValues,read:o.read,write:o.write}})],e.prototype,"types",void 0),s([r({type:String,json:{write:!0}})],e.prototype,"gdbVersion",void 0),s([r({type:Date,json:{type:Number,write:{writer:(t,n)=>{n.moment=t==null?void 0:t.getTime()}}}})],e.prototype,"moment",void 0),e=i=s([a("esri.rest.networks.support.QueryAssociationsParameters")],e);const u=e;export{u as default};