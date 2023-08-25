import{cl as $e,c2 as ve,eC as ze,kn as ge,iZ as fe,ax as Ee,az as X,aw as A,hu as z,hv as R,n as i,q as o,dn as ee,t as d,aB as v,cP as Oe,d8 as $,O as B,V as c,G as te,ae as Y,ko as Z,an as H,m as Re,a9 as Ie,S as Ce,cm as ke,kp as Ue,ay as ne,ig as We,eS as Je,cp as Ge,d0 as He,cB as Xe,cC as Ye,b7 as Ze,cD as Ke,d1 as Qe,jp as et,ct as tt,s as le,aH as Ne,d9 as E,e_ as it,cG as ot,cH as st,bd as be,x as rt,ba as nt}from"./index-1f15e2a2.js";import{E as lt}from"./SceneService-821e00b3.js";import{j as at}from"./persistable-874debf5.js";import{v as ae,y as pt}from"./quat-40782337.js";import{e as se}from"./quatf64-3363c48e.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-86929554.js";import"./resourceExtension-6a834e10.js";import"./mat3f64-221ce671.js";const f=Ee(),Se=se(),xe=se(),we=se(),Te=X(0,0,1),ut=X(0,1,0),ct=X(1,0,0);function O(e){$e(f,e),ve(f,f);const t=Math.atan2(f[1],f[0]),s=ae(se(),Te,-t);ze(f,f,s);const r=-1*Math.atan2(f[2],f[0]);return[ge(t)+270,ge(r)+90]}function ie(e,t){return ae(xe,Te,fe(e-270)),ae(we,ut,fe(t-90)),pt(Se,xe,we),$e(f,ct),ze(f,f,Se),ve(f,f),[f[0],f[1],f[2]]}let I=class extends A(v){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return z.normalize(R(t),0,!0)}set orientation(t){const s=ie(t,this.tilt);this._set("normal",s),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return z.normalize(R(s),0,!0)}set tilt(t){const s=ie(this.orientation,t);this._set("normal",s),this._set("tilt",t)}};i([o({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),i([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),i([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(e=>z.normalize(R(e),0,!0))],I.prototype,"orientation",null),i([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(e=>z.normalize(R(e),0,!0))],I.prototype,"tilt",null),i([o({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),i([o({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=i([d("esri.layers.voxel.VoxelSlice")],I);const oe=I;let S=class extends A(v){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return z.normalize(R(t),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return z.normalize(R(s),0,!0)}};i([o({type:Boolean,json:{default:!0,write:!0}})],S.prototype,"enabled",void 0),i([o({type:String,json:{origins:{service:{read:Oe}},write:{enabled:!0,isRequired:!0}}}),at({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],S.prototype,"href",void 0),i([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"id",void 0),i([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),i([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"orientation",null),i([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"tilt",null),i([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"normal",void 0),i([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"point",void 0),i([o({type:[$],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"sizeInPixel",void 0),i([o({type:[oe],json:{write:!0}})],S.prototype,"slices",void 0),i([o({type:$,json:{default:0,write:!0}})],S.prototype,"timeId",void 0),i([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"variableId",void 0),S=i([d("esri.layers.voxel.VoxelSection")],S);const pe=S;let k=class extends v{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};i([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],k.prototype,"diffuseFactor",void 0),i([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],k.prototype,"specularFactor",void 0),k=i([d("esri.layers.voxel.VoxelSimpleShading")],k);const qe=k;let N=class extends v{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};i([o({type:["discrete","continuous"],json:{write:!0}})],N.prototype,"continuity",void 0),i([o({type:Boolean,json:{write:!0}})],N.prototype,"hasNoData",void 0),i([o({type:Number,json:{write:!0}})],N.prototype,"noData",void 0),i([o({type:Number,json:{write:!0}})],N.prototype,"offset",void 0),i([o({type:Number,json:{write:!0}})],N.prototype,"scale",void 0),i([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"type",void 0),N=i([d("esri.layers.voxel.VoxelFormat")],N);const Ve=N;let j=class extends v{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),i([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),i([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),i([o({type:Ve,json:{write:!0}})],j.prototype,"originalFormat",void 0),i([o({type:Ve,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),i([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),i([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),i([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=i([d("esri.layers.voxel.VoxelVariable")],j);const yt=j;let F=class extends A(v){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};i([o({type:B,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],F.prototype,"color",void 0),i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"value",void 0),i([o({type:Boolean,json:{default:!0,write:!0}})],F.prototype,"enabled",void 0),i([o({type:String,json:{write:!0}})],F.prototype,"label",void 0),i([o({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"colorLocked",void 0),F=i([d("esri.layers.voxel.VoxelIsosurface")],F);const De=F;let U=class extends A(v){constructor(){super(...arguments),this.color=null,this.position=0}};i([o({type:B,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],U.prototype,"color",void 0),i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"position",void 0),U=i([d("esri.layers.voxel.VoxelColorStop")],U);const ue=U;let W=class extends A(v){constructor(){super(...arguments),this.opacity=1,this.position=0}};i([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],W.prototype,"opacity",void 0),i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"position",void 0),W=i([d("esri.layers.voxel.VoxelOpacityStop")],W);const ce=W;let J=class extends A(v){constructor(){super(...arguments),this.enabled=!1,this.range=null}};i([o({type:Boolean,json:{default:!1,write:!0}})],J.prototype,"enabled",void 0),i([o({type:[Number],json:{write:!0}})],J.prototype,"range",void 0),J=i([d("esri.layers.voxel.VoxelRangeFilter")],J);const dt=J;var V;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(V||(V={}));let T=class extends A(v){constructor(t){super(t),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(ue)),this.opacityStops=new(c.ofType(ce))}set colorStops(t){this._set("colorStops",te(t,this._get("colorStops"),c.ofType(ue)))}set opacityStops(t){this._set("opacityStops",te(t,this._get("opacityStops"),c.ofType(ce)))}getPreviousNext(t,s,r){let n=t;for(;--n>0&&s[n].type!==r&&s[n].type!==V.Both;);let l=t;const y=s.length;for(;++l<y&&s[l].type!==r&&s[l].type!==V.Both;);return[n,l]}get rasterizedTransferFunction(){const t=[];if(this.colorStops.length<2)return t;const s=[],r=[],n=1e-5;for(const p of this.colorStops){if(!p.color)return t;r.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:V.Color})}if(this.opacityStops.length===0)for(const p of r)s.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const h=Y(u.position,0,1),m=Math.round(255*Y(1-u.opacity,0,1));let b=!1;for(const g of r)if(g.type===V.Color&&Math.abs(g.position-h)<n){g.color.a=m,g.type=V.Both,b=!0;break}b||r.push({color:{r:0,g:0,b:0,a:m},position:u.position,type:V.Alpha})}r.sort((u,h)=>u.position<h.position?-1:1);const p=r.length;for(let u=0;u<p;++u){const h=r[u];if(h.type!==V.Both)if(h.type===V.Color){const[m,b]=this.getPreviousNext(u,r,V.Alpha);if(m!==-1&&b!==p){const g=(h.position-r[m].position)/(r[b].position-r[m].position);h.color.a=Math.round(Z(r[m].color.a,r[b].color.a,g))}else h.color.a=m!==-1?r[m].color.a:r[b].color.a}else{const[m,b]=this.getPreviousNext(u,r,V.Color);if(m!==-1&&b!==p){const g=(h.position-r[m].position)/(r[b].position-r[m].position),C=r[m].color,Be=r[b].color;K.forEach(re=>{h.color[re]=Math.round(Z(C[re],Be[re],g))})}else m!==-1?K.forEach(g=>{h.color[g]=r[m].color[g]}):K.forEach(g=>{h.color[g]=r[b].color[g]})}}for(const u of r)s.push({color:u.color,position:u.position})}s[0].position=0,s[s.length-1].position=1;let l=0,y=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>s[y].position;)l=y++;const h=(u-s[l].position)/(s[y].position-s[l].position),m=s[l].color,b=s[y].color,g=new B;K.forEach(C=>{g[C]=Math.round(Z(m[C],b[C],h))}),g.a=Y(1-Z(m.a,b.a,h)/255,0,1),t.push(g)}return t}getColorForContinuousDataValue(t,s){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let n=this.stretchRange[0],l=this.stretchRange[1];if(n>l){const p=n;n=l,l=p}t=Y(t,n,l);const y=r[Math.round((t-n)/(l-n)*(this._colorMapSize-1))].clone();return s||(y.a=1),y}};i([o({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),i([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),i([o({type:c.ofType(ue),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),i([o({type:c.ofType(ce),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),i([o({type:dt,json:{write:!0}})],T.prototype,"rangeFilter",void 0),i([o({type:[B],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=i([d("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const ht=T,K=["r","g","b"];let M=class extends A(v){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};i([o({type:B,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),i([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),i([o({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),i([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),M=i([d("esri.layers.voxel.VoxelUniqueValue")],M);const Ae=M;var ye;let L=ye=class extends v{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(Ae)),this.isosurfaces=new(c.ofType(De))}clone(){return new ye({variableId:this.variableId,label:this.label,transferFunction:H(this.transferFunction),uniqueValues:H(this.uniqueValues),isosurfaces:H(this.isosurfaces)})}};i([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"variableId",void 0),i([o({type:String,json:{write:!0}})],L.prototype,"label",void 0),i([o({type:ht,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],L.prototype,"transferFunction",void 0),i([o({type:c.ofType(Ae),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],L.prototype,"uniqueValues",void 0),i([o({type:c.ofType(De),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&t}}}}})],L.prototype,"isosurfaces",void 0),L=ye=i([d("esri.layers.voxel.VoxelVariableStyle")],L);const Fe=L;let Q=class extends v{constructor(){super(...arguments),this.values=null}};i([o({type:[Number],json:{write:!0}})],Q.prototype,"values",void 0),Q=i([d("esri.layers.voxel.VoxelIrregularSpacing")],Q);const mt=Q;let G=class extends v{constructor(){super(...arguments),this.scale=1,this.offset=0}};i([o({type:Number,json:{write:!0}})],G.prototype,"scale",void 0),i([o({type:Number,json:{write:!0}})],G.prototype,"offset",void 0),G=i([d("esri.layers.voxel.VoxelRegularSpacing")],G);const vt=G;let x=class extends v{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var t;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((t=this.irregularSpacing)==null?void 0:t.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};i([o({type:mt,json:{write:!0}})],x.prototype,"irregularSpacing",void 0),i([o({type:Boolean,json:{write:!0}})],x.prototype,"isPositiveUp",void 0),i([o({type:Boolean,json:{write:!0}})],x.prototype,"isWrappedDateLine",void 0),i([o({type:String,json:{write:!0}})],x.prototype,"label",void 0),i([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),i([o({type:String,json:{write:!0}})],x.prototype,"quantity",void 0),i([o({type:vt,json:{write:!0}})],x.prototype,"regularSpacing",void 0),i([o({type:Number,json:{write:!0}})],x.prototype,"size",void 0),i([o({type:String,json:{write:!0}})],x.prototype,"unit",void 0),i([o({type:Boolean,json:{read:!1}})],x.prototype,"isRegular",null),x=i([d("esri.layers.voxel.VoxelDimension")],x);const gt=x,Le="esri.layers.voxel.VoxelVolume",je=Re.getLogger(Le);let w=class extends v{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Ie.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],t[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return s.isRegular&&!s.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(t[1]-t[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,t=this.dimensions[3].size>0;if(!e&&t)return"xyt";if(e&&t)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){var r;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return je.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!Ce(this.spatialReference,e.spatialReference))return je.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const t=X(e.x,e.y,e.z??0);ke(t,t,this.originInLayerSpace3D),Ue(t,t,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray((r=s.irregularSpacing)==null?void 0:r.values)&&s.irregularSpacing.values.length>1){const n=e.z??0,l=s.irregularSpacing.values,y=s.isPositiveUp?1:-1,p=l.reduce((u,h)=>Math.abs(y*h-n)<Math.abs(y*u-n)?h:u);for(let u=0;u<l.length;++u)if(l[u]===p){t[2]=u;break}}return[t[0],t[1],t[2]]}computeLayerSpaceLocation(e){var r;if(!this.isValid)return new ne({x:0,y:0,spatialReference:this.spatialReference});const t=We(e);if(Je(t,t,this.voxelSizeInLayerSpaceSigned),Ge(t,t,this.originInLayerSpace3D),this.volumeType==="xyt")return new ne({x:t[0],y:t[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray((r=s.irregularSpacing)==null?void 0:r.values)&&(e[2]<0?t[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?t[2]=s.irregularSpacing.values[e[2]]:t[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(t[2]*=-1)),new ne({x:t[0],y:t[1],z:t[2],spatialReference:this.spatialReference})}};i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),i([o({type:[gt],json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"dimensions",void 0),i([o({type:Ie,json:{read:{enabled:!1}}})],w.prototype,"spatialReference",void 0),i([o({type:Number,json:{read:!1}})],w.prototype,"zDimension",null),i([o({type:[Boolean],json:{read:!1}})],w.prototype,"isValid",null),i([o({type:[Number],json:{read:!1}})],w.prototype,"originInLayerSpace3D",null),i([o({type:[Number],json:{read:!1}})],w.prototype,"voxelSizeInLayerSpaceSigned",null),i([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],w.prototype,"volumeType",null),i([o({type:[Number],json:{read:!1}})],w.prototype,"sizeInVoxels",null),w=i([d(Le)],w);const Pe=w;var de;let _=de=class extends v{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new de;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"apronWidth",void 0),i([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"brickSize",void 0),i([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"maxLodLevel",void 0),i([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"nodeSize",void 0),_=de=i([d("esri.layers.voxel.VoxelVolumeIndex")],_);const ft=_;let q=class extends A(v){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return z.normalize(R(t),0,!0)}set orientation(t){const s=ie(t,this.tilt);this._set("normal",s),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return z.normalize(R(s),0,!0)}set tilt(t){const s=ie(this.orientation,t);this._set("normal",s),this._set("tilt",t)}};i([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),i([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),i([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(e=>z.normalize(R(e),0,!0))],q.prototype,"orientation",null),i([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(e=>z.normalize(R(e),0,!0))],q.prototype,"tilt",null),i([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),i([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=i([d("esri.layers.voxel.VoxelDynamicSection")],q);const he=q;var me;let D=me=class extends v{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(oe)),this.dynamicSections=new(c.ofType(he))}set slices(e){this._set("slices",te(e,this._get("slices"),c.ofType(oe)))}set dynamicSections(e){this._set("dynamicSections",te(e,this._get("dynamicSections"),c.ofType(he)))}clone(){return new me({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:H(this.slices),dynamicSections:H(this.dynamicSections)})}};i([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"volumeId",void 0),i([o({type:Number,json:{default:1,write:!0}})],D.prototype,"verticalExaggeration",void 0),i([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],D.prototype,"exaggerationMode",void 0),i([o({type:Number,json:{default:0,write:!0}})],D.prototype,"verticalOffset",void 0),i([o({type:c.ofType(oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],D.prototype,"slices",null),i([o({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],D.prototype,"dynamicSections",null),D=me=i([d("esri.layers.voxel.VoxelVolumeStyle")],D);const Me=D,_e="esri.layers.VoxelLayer",P=Re.getLogger(_e);let a=class extends lt(He(Xe(Ye(Ze(Ke(Qe(nt))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new qe,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.test=null,this.volumeStyles=new(c.ofType(Me)),this.variableStyles=new(c.ofType(Fe)),this.sections=new(c.ofType(pe))}normalizeCtorArgs(e){return e!=null&&e.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",et(e,P))}load(e){const t=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(tt).then(()=>this._fetchService(t)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(e,t){super.read(e,t);for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new le("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new le("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new le("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,s){if(e!=null&&typeof e=="object"){const r=Ne.fromJSON(e,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(t.volumes)){const n=Pe.fromJSON(t.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let y=l.regularSpacing.offset,p=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(y>p){const u=y;y=p,p=u}r.zmin=y,r.zmax=p}}}return r}return null}get voxelFields(){const e=[new E({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new E({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new E({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(t!=null){if(t.volumeType==="xyzt"||t.volumeType==="xyt"){const s=new E({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(s);const r=new E({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(r)}if(t.volumeType!=="xyt"){const s=new E({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(s)}}return e}get popupTemplate(){return this.loaded?this.createPopupTemplate():null}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.voxelFields,s=this.title;return it({fields:t,title:s},e)}getConfiguration(){var t,s;const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:(t=this.index)==null?void 0:t.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&((s=this.index)!=null&&s.isValid())?JSON.stringify(e):""}getVariableStyle(e){let t=-1;if(t=e??this.currentVariableId,!this.variableStyles||t===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===t);return s<0?null:this.variableStyles.at(s)}getVariable(e){let t=-1;if(t=e??this.currentVariableId,!this.variables||t===-1)return null;const s=this.variables.findIndex(r=>r.id===t);return s<0?null:this.variables.at(s)}getVolume(e){const t=this.getVariable(e);return t!=null?this.volumes.find(({id:s})=>s===t.volumeId):null}getVolumeStyle(e){const t=this.getVariable(e);return t!=null?this.volumeStyles.find(({volumeId:s})=>s===t.volumeId):null}getColorForContinuousDataValue(e,t,s){var y;const r=this.getVariable(e);if(r==null||((y=r.renderingFormat)==null?void 0:y.continuity)!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===e);if(n<0)return null;const l=this.variableStyles.at(n);return l!=null&&l.transferFunction?l.transferFunction.getColorForContinuousDataValue(t,s):null}getSections(){const e=[];for(const t of this.sections)e.push(new pe({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const s=this._getVariable(t);if(s!=null){const r=t.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),P.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&P.error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(P.error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(t.uniqueValues.length===0)P.error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of t.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(r)}else P.error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const s=this._getVolumeFromVolumeId(t.volumeId);if(s!=null){const r=t.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");e.push(r)}else P.error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const s of this.variables)if(s.id===t)return s;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,s){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const r=X(e.normal[0],e.normal[1],e.normal[2]);ve(r,r);const n=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<n)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};i([o({type:["Voxel"]})],a.prototype,"operationalLayerType",void 0),i([o(ot)],a.prototype,"legendEnabled",void 0),i([o({json:{write:!0}})],a.prototype,"title",void 0),i([o(st)],a.prototype,"url",null),i([o({type:c.ofType(pe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],a.prototype,"sections",void 0),i([o({type:$,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],a.prototype,"currentVariableId",void 0),i([o({type:c.ofType(Me),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],a.prototype,"volumeStyles",void 0),i([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],a.prototype,"renderMode",void 0),i([o({type:c.ofType(Fe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],a.prototype,"variableStyles",void 0),i([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],a.prototype,"enableSlices",void 0),i([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],a.prototype,"enableSections",void 0),i([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],a.prototype,"enableDynamicSections",void 0),i([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],a.prototype,"enableIsosurfaces",void 0),i([o({type:qe,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],a.prototype,"shading",void 0),i([o({type:["show","hide"]})],a.prototype,"listMode",void 0),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),i([o({type:c.ofType(yt)})],a.prototype,"variables",void 0),i([o({type:c.ofType(Pe)})],a.prototype,"volumes",void 0),i([o({type:ft})],a.prototype,"index",void 0),i([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"minScale",void 0),i([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"maxScale",void 0),i([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),i([o({readOnly:!0,json:{name:"serviceVersion"}})],a.prototype,"version",void 0),i([be("service","version")],a.prototype,"readVersion",null),i([o({type:Ne})],a.prototype,"fullExtent",void 0),i([be("service","fullExtent",["fullExtent"])],a.prototype,"readFullExtent",null),i([o({readOnly:!0,clonable:!1,json:{read:!1}})],a.prototype,"voxelFields",null),i([o({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,s){t[s]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],a.prototype,"popupEnabled",void 0),i([o({type:rt,json:{read:!1}})],a.prototype,"popupTemplate",null),i([o({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),a=i([d(_e)],a);const Ut=a;export{Ut as default};
