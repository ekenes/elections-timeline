import{x as t,y as e,z as s,bR as h,ao as v,b2 as G,bv as w}from"./index-5bdaa4d1.js";let a=class extends h{constructor(p){super(p),this.properties=null}};t([e({json:{write:!0}})],a.prototype,"properties",void 0),a=t([s("esri.rest.knowledgeGraph.GraphObject")],a);const c=a;let i=class extends c{constructor(p){super(p),this.typeName=null,this.id=null}};t([e({type:String,json:{write:!0}})],i.prototype,"typeName",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"id",void 0),i=t([s("esri.rest.knowledgeGraph.GraphNamedObject")],i);const m=i;let l=class extends m{constructor(p){super(p),this.layoutGeometry=null}};t([e({type:v,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=t([s("esri.rest.knowledgeGraph.Entity")],l);const k=l;let n=class extends m{constructor(r){super(r),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};t([e({type:String,json:{write:!0}})],n.prototype,"originId",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"destinationId",void 0),t([e({type:G,json:{write:!0}})],n.prototype,"layoutGeometry",void 0),n=t([s("esri.rest.knowledgeGraph.Relationship")],n);const Q=n;let y=class extends c{constructor(r){super(r)}};y=t([s("esri.rest.knowledgeGraph.ObjectValue")],y);const S=y;let u=class extends h{constructor(p){super(p),this.path=null}};t([e({type:[c],json:{write:!0}})],u.prototype,"path",void 0),u=t([s("esri.rest.knowledgeGraph.Path")],u);const z=u;let d=class extends w{constructor(r){super(r),this.openCypherQuery=""}};t([e()],d.prototype,"openCypherQuery",void 0),d=t([s("esri.rest.knowledgeGraph.GraphQuery")],d);const g=d;let o=class extends g{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};t([e()],o.prototype,"bindParameters",void 0),t([e()],o.prototype,"bindGeometryQuantizationParameters",void 0),t([e()],o.prototype,"outputQuantizationParameters",void 0),t([e()],o.prototype,"outputSpatialReference",void 0),t([e()],o.prototype,"provenanceBehavior",void 0),o=t([s("esri.rest.knowledgeGraph.GraphQueryStreaming")],o);const f=o;export{z as c,k as m,Q as p,f as s,S as t};
