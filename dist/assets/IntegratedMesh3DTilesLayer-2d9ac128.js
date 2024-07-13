import{dQ as N,dF as U,dG as X,bM as j,dH as W,dR as F,dS as G,bl as b,b4 as w,dT as $,aW as x,df as K,di as p,dU as _,de as S,cH as E,cE as L,dV as T,dW as R,dX as h,s as P,a$ as D,U as k,w as V,x as c,y as u,dY as q,dK as H,z as O,bP as Q,aV as g}from"./index-5bdaa4d1.js";import{$ as z,Z as Y,w as Z}from"./elevationInfoUtils-43456605.js";let d=class extends N(U(X(j(W(F(G(Q))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var M,I;const i=(M=a.root)==null?void 0:M.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(I=a.root)==null?void 0:I.transform,f=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=$(t[0]),n=$(t[1]),s=t[4],r=$(t[2]),e=$(t[3]),y=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:s,xmax:r,ymax:e,zmax:y,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),s=g();K(s,l,x(n,n,n));const r=g();if(p(r,l,x(n,n,n)),o&&this._verifyArray(o,16)){const v=o;_(f,s,v),S(s,f),_(f,r,v),S(r,f)}E(s,L,0,s,b.WGS84,0,1),E(r,L,0,r,b.WGS84,0,1);const e=g(),y=g();T(e,s,r),R(y,s,r),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),n=x(t[3],t[4],t[5]),s=x(t[6],t[7],t[8]),r=x(t[9],t[10],t[11]),e=[];for(let m=0;m<8;++m)e.push(g());if(p(e[0],l,n),p(e[0],e[0],s),p(e[0],e[0],r),h(e[1],l,n),p(e[1],e[1],s),p(e[1],e[1],r),p(e[2],l,n),h(e[2],e[2],s),p(e[2],e[2],r),h(e[3],l,n),h(e[3],e[3],s),p(e[3],e[3],r),p(e[4],l,n),p(e[4],e[4],s),h(e[4],e[4],r),h(e[5],l,n),p(e[5],e[5],s),h(e[5],e[5],r),p(e[6],l,n),h(e[6],e[6],s),h(e[6],e[6],r),h(e[7],l,n),h(e[7],e[7],s),h(e[7],e[7],r),o&&this._verifyArray(o,16)){const m=o;for(let A=0;A<8;++A)_(e[A],e[A],m)}const y=x(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let m=0;m<8;++m)E(e[m],L,0,e[m],b.WGS84,0,1),T(v,v,e[m]),R(y,y,e[m]);this.fullExtent=new w({xmin:v[0],ymin:v[1],zmin:v[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var f;if((f=o.typeKeywords)!=null&&f.includes("IntegratedMesh"))return!0;throw new P("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){D(o)}this.url&&await k(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(f=>{this._initFullExtent(f.data)},f=>{D(f)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";z(V.getLogger(this),Y(i,"absolute-height",a)),z(V.getLogger(this),Z(i,a))}};c([u({type:["IntegratedMesh3DTilesLayer"]})],d.prototype,"operationalLayerType",void 0),c([u({type:b})],d.prototype,"spatialReference",void 0),c([u({type:w})],d.prototype,"fullExtent",void 0),c([u(q)],d.prototype,"elevationInfo",null),c([u({type:["show","hide"]})],d.prototype,"listMode",void 0),c([u(H)],d.prototype,"url",void 0),c([u({readOnly:!0})],d.prototype,"type",void 0),c([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],d.prototype,"path",void 0),c([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],d.prototype,"minScale",void 0),c([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],d.prototype,"maxScale",void 0),d=c([O("esri.layers.IntegratedMesh3DTilesLayer")],d);const J=d;export{J as default};
