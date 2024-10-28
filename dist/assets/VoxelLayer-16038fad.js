import{dD as Me,bg as Ie,g5 as Be,lv as Re,k4 as Te,bh as ot,bi as ie,ch as L,iw as $,ix as N,A as i,B as s,eK as ce,F as m,J as g,ej as st,eB as j,aj as k,aY as d,bW as de,av as le,lw as ae,aQ as te,f as Ee,lx as De,a7 as P,G as rt,dE as nt,ly as lt,aK as fe,hd as at,hB as pt,dH as ut,e8 as ct,dZ as dt,d_ as yt,cd as ht,d$ as mt,e9 as gt,ea as vt,kO as ft,bn as bt,s as be,Q as Oe,dP as W,gd as St,ex as Ce,h5 as ke,e1 as xt,e2 as wt,M as Ae,bB as Vt,jt,cg as $t}from"./index-560772b3.js";import{L as Nt}from"./SceneService-8d2c8a7c.js";import{j as zt}from"./persistable-5f2d402d.js";import{I as Se,x as It}from"./quat-aa2799ad.js";import{e as me}from"./quatf64-81e039e4.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-86292ca8.js";import"./resourceUtils-8bf8943e.js";import"./saveAPIKeyUtils-d100d74f.js";import"./saveUtils-b73dba66.js";import"./resourceExtension-136dbb05.js";import"./mat3f64-e19cdcb8.js";const v=ot(),Pe=me(),Le=me(),qe=me(),Ue=ie(0,0,1),Rt=ie(0,1,0),Tt=ie(1,0,0);function J(e){Me(v,e),Ie(v,v);const t=Math.atan2(v[1],v[0]),o=Se(me(),Ue,-t);Be(v,v,o);const r=-1*Math.atan2(v[2],v[0]);return[Re(t)+270,Re(r)+90]}function ye(e,t){return Se(Le,Ue,Te(e-270)),Se(qe,Rt,Te(t-90)),It(Pe,Le,qe),Me(v,Tt),Be(v,v,Pe),Ie(v,v),[v[0],v[1],v[2]]}let I=class extends L(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}set orientation(t){const o=ye(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}set tilt(t){const o=ye(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};i([s({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],I.prototype,"label",void 0),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],I.prototype,"orientation",null),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],I.prototype,"tilt",null),i([s({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),i([s({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=i([m("esri.layers.voxel.VoxelSlice")],I);const he=I;let b=class extends L(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}};i([s({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),i([s({type:String,json:{origins:{service:{read:st}},write:{enabled:!0,isRequired:!0}}}),zt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),i([s({type:String,json:{write:!0}})],b.prototype,"label",void 0),i([s({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),i([s({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),i([s({type:[j],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),i([s({type:[he],json:{write:!0}})],b.prototype,"slices",void 0),i([s({type:j,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=i([m("esri.layers.voxel.VoxelSection")],b);const xe=b;let Q=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};i([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"diffuseFactor",void 0),i([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"specularFactor",void 0),Q=i([m("esri.layers.voxel.VoxelSimpleShading")],Q);const We=Q;let R=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};i([s({type:["discrete","continuous"],json:{write:!0}})],R.prototype,"continuity",void 0),i([s({type:Boolean,json:{write:!0}})],R.prototype,"hasNoData",void 0),i([s({type:Number,json:{write:!0}})],R.prototype,"noData",void 0),i([s({type:Number,json:{write:!0}})],R.prototype,"offset",void 0),i([s({type:Number,json:{write:!0}})],R.prototype,"scale",void 0),i([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"type",void 0),R=i([m("esri.layers.voxel.VoxelFormat")],R);const Fe=R;let V=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"id",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"description",void 0),i([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"name",void 0),i([s({type:Fe,json:{write:!0}})],V.prototype,"originalFormat",void 0),i([s({type:Fe,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"renderingFormat",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"unit",void 0),i([s({type:Number,json:{write:!0}})],V.prototype,"volumeId",void 0),i([s({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],V.prototype,"type",void 0),V=i([m("esri.layers.voxel.VoxelVariable")],V);const Dt=V;let _=class extends L(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};i([s({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],_.prototype,"color",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"value",void 0),i([s({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],_.prototype,"label",void 0),i([s({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"colorLocked",void 0),_=i([m("esri.layers.voxel.VoxelIsosurface")],_);const Je=_;let Y=class extends L(g){constructor(){super(...arguments),this.color=null,this.position=0}};i([s({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],Y.prototype,"color",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"position",void 0),Y=i([m("esri.layers.voxel.VoxelColorStop")],Y);const we=Y;let H=class extends L(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};i([s({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],H.prototype,"opacity",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"position",void 0),H=i([m("esri.layers.voxel.VoxelOpacityStop")],H);const Ve=H;let X=class extends L(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};i([s({type:Boolean,json:{default:!1,write:!0}})],X.prototype,"enabled",void 0),i([s({type:[Number],json:{write:!0}})],X.prototype,"range",void 0),X=i([m("esri.layers.voxel.VoxelRangeFilter")],X);const At=X;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let T=class extends L(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(d.ofType(we)),this.opacityStops=new(d.ofType(Ve))}set colorStops(e){this._set("colorStops",de(e,this._get("colorStops"),d.ofType(we)))}set opacityStops(e){this._set("opacityStops",de(e,this._get("opacityStops"),d.ofType(Ve)))}getPreviousNext(e,t,o){let r=e;for(;--r>0&&t[r].type!==o&&t[r].type!==w.Both;);let n=e;const l=t.length;for(;++n<l&&t[n].type!==o&&t[n].type!==w.Both;);return[r,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const t=[],o=[],r=1e-5;for(const a of this.colorStops){if(!a.color)return e;o.push({color:{r:a.color.r,g:a.color.g,b:a.color.b,a:Math.round(255*(1-a.color.a))},position:a.position,type:w.Color})}if(this.opacityStops.length===0)for(const a of o)t.push({color:a.color,position:a.position});else{for(const u of this.opacityStops){const c=le(u.position,0,1),y=Math.round(255*le(1-u.opacity,0,1));let f=!1;for(const h of o)if(h.type===w.Color&&Math.abs(h.position-c)<r){h.color.a=y,h.type=w.Both,f=!0;break}f||o.push({color:{r:0,g:0,b:0,a:y},position:u.position,type:w.Alpha})}o.sort((u,c)=>u.position<c.position?-1:1);const a=o.length;for(let u=0;u<a;++u){const c=o[u];if(c.type!==w.Both)if(c.type===w.Color){const[y,f]=this.getPreviousNext(u,o,w.Alpha);if(y!==-1&&f!==a){const h=(c.position-o[y].position)/(o[f].position-o[y].position);c.color.a=Math.round(ae(o[y].color.a,o[f].color.a,h))}else c.color.a=y!==-1?o[y].color.a:o[f].color.a}else{const[y,f]=this.getPreviousNext(u,o,w.Color);if(y!==-1&&f!==a){const h=(c.position-o[y].position)/(o[f].position-o[y].position),q=o[y].color,oe=o[f].color;pe.forEach(F=>{c.color[F]=Math.round(ae(q[F],oe[F],h))})}else y!==-1?pe.forEach(h=>{c.color[h]=o[y].color[h]}):pe.forEach(h=>{c.color[h]=o[f].color[h]})}}for(const u of o)t.push({color:u.color,position:u.position})}t[0].position=0,t[t.length-1].position=1;let n=0,l=1;for(let a=0;a<this._colorMapSize;++a){const u=a/this._colorMapSize;for(;u>t[l].position;)n=l++;const c=(u-t[n].position)/(t[l].position-t[n].position),y=t[n].color,f=t[l].color,h=new k;pe.forEach(q=>{h[q]=Math.round(ae(y[q],f[q],c))}),h.a=le(1-ae(y.a,f.a,c)/255,0,1),e.push(h)}return e}getColorForContinuousDataValue(e,t){const o=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||o.length<256)return null;let r=this.stretchRange[0],n=this.stretchRange[1];if(r>n){const a=r;r=n,n=a}e=le(e,r,n);const l=o[Math.round((e-r)/(n-r)*(this._colorMapSize-1))].clone();return t||(l.a=1),l}};i([s({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),i([s({type:d.ofType(we),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),i([s({type:d.ofType(Ve),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),i([s({type:At,json:{write:!0}})],T.prototype,"rangeFilter",void 0),i([s({type:[k],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=i([m("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const Pt=T,pe=["r","g","b"];let O=class extends L(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};i([s({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],O.prototype,"color",void 0),i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"value",void 0),i([s({type:Boolean,json:{default:!0,write:!0}})],O.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],O.prototype,"label",void 0),O=i([m("esri.layers.voxel.VoxelUniqueValue")],O);const Ze=O;var je;let M=je=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(d.ofType(Ze)),this.isosurfaces=new(d.ofType(Je))}clone(){return new je({variableId:this.variableId,label:this.label,transferFunction:te(this.transferFunction),uniqueValues:te(this.uniqueValues),isosurfaces:te(this.isosurfaces)})}};i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"variableId",void 0),i([s({type:String,json:{write:!0}})],M.prototype,"label",void 0),i([s({type:Pt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],M.prototype,"transferFunction",void 0),i([s({type:d.ofType(Ze),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],M.prototype,"uniqueValues",void 0),i([s({type:d.ofType(Je),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&t}}}}})],M.prototype,"isosurfaces",void 0),M=je=i([m("esri.layers.voxel.VoxelVariableStyle")],M);const Ge=M;function _e(e){const t=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(t==null)return{didParse:!1};const[,o,r,n,l,a,u,c,y,f,h,q,oe]=t;let F="seconds";const ge=o.charAt(0).toLowerCase();ge==="d"?F="days":ge==="h"?F="hours":ge==="m"&&(F="minutes");const Z=parseInt(r,10);if(Number.isNaN(Z))return{didParse:!1};const z=parseInt(n,10);if(Number.isNaN(z)||z<1||z>12)return{didParse:!1};const B=parseInt(l,10);if(Number.isNaN(B)||B<1||B>31)return{didParse:!1};if(z===2){const K=Z%4==0&&(Z%100!=0||Z%400==0);if(K&&B>29||!K&&B>28)return{didParse:!1}}else if((z===4||z===6||z===9||z===11)&&B>30)return{didParse:!1};const se=parseInt(a,10);if(Number.isNaN(se)||se<0||se>23)return{didParse:!1};const re=parseInt(u,10);if(Number.isNaN(re)||re<0||re>59)return{didParse:!1};const ne=parseInt(c,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let ve=1,E=0,U=0;if(h&&(ve=h==="-"?-1:1),q){if(E=parseInt(q,10),Number.isNaN(E)||E<0)return{didParse:!1};if(E!==0){const K=ve*E;if(K<-12||K>14)return{didParse:!1}}}if(oe&&(U=parseInt(oe,10),Number.isNaN(U)||U<0||U>59))return{didParse:!1};const Ye=`${Z}`.padStart(4,"0"),He=`${z}`.padStart(2,"0"),Xe=`${B}`.padStart(2,"0"),et=`${se}`.padStart(2,"0"),tt=`${re}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let G="Z";return E===0&&U===0||(G=ve>0?"+":"-",G+=`${E}`.padStart(2,"0"),G+=":",G+=`${U}`.padStart(2,"0")),{didParse:!0,unit:F,reference:new Date(`${Ye}-${He}-${Xe}T${et}:${tt}:${it}.000${G}`)}}let ue=class extends g{constructor(){super(...arguments),this.values=null}};i([s({type:[Number],json:{write:!0}})],ue.prototype,"values",void 0),ue=i([m("esri.layers.voxel.VoxelIrregularSpacing")],ue);const Lt=ue;let ee=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};i([s({type:Number,json:{write:!0}})],ee.prototype,"scale",void 0),i([s({type:Number,json:{write:!0}})],ee.prototype,"offset",void 0),ee=i([m("esri.layers.voxel.VoxelRegularSpacing")],ee);const qt=ee;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var e;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((e=this.irregularSpacing)==null?void 0:e.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};i([s({type:Lt,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),i([s({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),i([s({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"label",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"name",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),i([s({type:qt,json:{write:!0}})],S.prototype,"regularSpacing",void 0),i([s({type:Number,json:{write:!0}})],S.prototype,"size",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"unit",void 0),i([s({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=i([m("esri.layers.voxel.VoxelDimension")],S);const Ft=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Ee.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),o=this.dimensions[2],r=o.isRegular?o.getRange():[0,o.size];return[e[0],t[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),o=this.dimensions[2],r=o.isRegular?o.getRange():[0,o.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return o.isRegular&&!o.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(t[1]-t[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let t=this.dimensions[3].size>0;if(t){const o=this.dimensions[3];t=o.quantity==="time",t&&o.unit!==null&&(t=_e(o.unit).didParse)}if(!e&&t)return"xyt";if(e&&t)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){var r,n,l;if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],t=[],o=_e(e.unit);if(o.didParse){if(e.isRegular){const a=((r=e.regularSpacing)==null?void 0:r.offset)??0,u=((n=e.regularSpacing)==null?void 0:n.scale)||1;for(let c=0;c<e.size;++c){const y=a+u*c;t.push(De(o.reference,y,o.unit))}}else if(Array.isArray((l=e.irregularSpacing)==null?void 0:l.values)&&e.irregularSpacing.values.length>0)for(let a=0;a<e.irregularSpacing.values.length;++a){const u=e.irregularSpacing.values[a];t.push(De(o.reference,u,o.unit))}}return t}computeVoxelSpaceLocation(e){var r;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return P.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!rt(this.spatialReference,e.spatialReference))return P.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const t=ie(e.x,e.y,e.z??0);nt(t,t,this.originInLayerSpace3D),lt(t,t,this.voxelSizeInLayerSpaceSigned);const o=this.dimensions[this.zDimension];if(!o.isRegular&&Array.isArray((r=o.irregularSpacing)==null?void 0:r.values)&&o.irregularSpacing.values.length>1){const n=e.z??0,l=o.irregularSpacing.values,a=o.isPositiveUp?1:-1,u=l.reduce((c,y)=>Math.abs(a*y-n)<Math.abs(a*c-n)?y:c);for(let c=0;c<l.length;++c)if(l[c]===u){t[2]=c;break}}return[t[0],t[1],t[2]]}computeLayerSpaceLocation(e){var r;if(!this.isValid)return new fe({x:0,y:0,spatialReference:this.spatialReference});const t=at(e);if(pt(t,t,this.voxelSizeInLayerSpaceSigned),ut(t,t,this.originInLayerSpace3D),this.volumeType==="xyt")return new fe({x:t[0],y:t[1],spatialReference:this.spatialReference});const o=this.dimensions[this.zDimension];return o.isRegular||Array.isArray((r=o.irregularSpacing)==null?void 0:r.values)&&(e[2]<0?t[2]=o.irregularSpacing.values[0]:e[2]<o.irregularSpacing.values.length?t[2]=o.irregularSpacing.values[e[2]]:t[2]=o.irregularSpacing.values[o.irregularSpacing.values.length-1],o.isPositiveUp||(t[2]*=-1)),new fe({x:t[0],y:t[1],z:t[2],spatialReference:this.spatialReference})}};i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),i([s({type:[Ft],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),i([s({type:Ee,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),i([s({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),i([s({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),i([s({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),i([s({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),i([s({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),i([s({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),i([s({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=i([m("esri.layers.voxel.VoxelVolume")],x);const Ke=x;var $e;let C=$e=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new $e;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"apronWidth",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"brickSize",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"maxLodLevel",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"nodeSize",void 0),C=$e=i([m("esri.layers.voxel.VoxelVolumeIndex")],C);const _t=C;let D=class extends L(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}set orientation(t){const o=ye(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}set tilt(t){const o=ye(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};i([s({type:Boolean,json:{default:!0,write:!0}})],D.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],D.prototype,"label",void 0),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],D.prototype,"orientation",null),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],D.prototype,"tilt",null),i([s({type:[Number],json:{write:!0}})],D.prototype,"normal",void 0),i([s({type:[Number],json:{write:!0}})],D.prototype,"point",void 0),D=i([m("esri.layers.voxel.VoxelDynamicSection")],D);const Ne=D;var ze;let A=ze=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(d.ofType(he)),this.dynamicSections=new(d.ofType(Ne))}set slices(e){this._set("slices",de(e,this._get("slices"),d.ofType(he)))}set dynamicSections(e){this._set("dynamicSections",de(e,this._get("dynamicSections"),d.ofType(Ne)))}clone(){return new ze({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:te(this.slices),dynamicSections:te(this.dynamicSections)})}};i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"volumeId",void 0),i([s({type:Number,json:{default:1,write:!0}})],A.prototype,"verticalExaggeration",void 0),i([s({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],A.prototype,"exaggerationMode",void 0),i([s({type:Number,json:{default:0,write:!0}})],A.prototype,"verticalOffset",void 0),i([s({type:d.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],A.prototype,"slices",null),i([s({type:d.ofType(Ne),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],A.prototype,"dynamicSections",null),A=ze=i([m("esri.layers.voxel.VoxelVolumeStyle")],A);const Qe=A;let p=class extends Nt(ct(dt(yt(ht(mt(gt(vt($t)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new We,this.opacity=1,this.variables=new d,this.volumes=new d,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(d.ofType(Qe)),this.variableStyles=new(d.ofType(Ge)),this.sections=new(d.ofType(xe))}normalizeCtorArgs(e){return e!=null&&e.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",ft(e,P.getLogger(this)))}load(e){const t=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(bt).then(()=>this._fetchService(t)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(o),Promise.resolve(this)}read(e,t){super.read(e,t);for(const o of this.volumes)o.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new be("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new be("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new be("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const r=Oe.fromJSON(e,o);if(r.zmin===0&&r.zmax===0&&Array.isArray(t.volumes)){const n=Ke.fromJSON(t.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let a=l.regularSpacing.offset,u=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(a>u){const c=a;a=u,u=c}r.zmin=a,r.zmax=u}}}return r}return null}get voxelFields(){const e=[new W({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(t!=null){if(t.volumeType==="xyzt"||t.volumeType==="xyt"){const o=new W({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(o);const r=new W({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(r)}if(t.volumeType!=="xyt"){const o=new W({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(o)}}return e}get popupTemplate(){return this.loaded?this.createPopupTemplate():null}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.voxelFields,o=this.title;return St({fields:t,title:o},e)}getConfiguration(){var t,o;const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:(t=this.index)==null?void 0:t.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&((o=this.index)!=null&&o.isValid())?JSON.stringify(e):""}getVariableStyle(e){let t=-1;if(t=e??this.currentVariableId,!this.variableStyles||t===-1)return null;const o=this.variableStyles.findIndex(r=>r.variableId===t);return o<0?null:this.variableStyles.at(o)}getVariable(e){let t=-1;if(t=e??this.currentVariableId,!this.variables||t===-1)return null;const o=this.variables.findIndex(r=>r.id===t);return o<0?null:this.variables.at(o)}getVolume(e){const t=this.getVariable(e);return t!=null?this.volumes.find(({id:o})=>o===t.volumeId):null}get timeInfo(){const e=this.getVolume(null);if((e==null?void 0:e.volumeType)!=="xyzt")return null;const t=e.timeStops;if(!(t!=null&&t.length))return null;const o=new Ce({start:t[0],end:t.at(-1)});return new ke({fullTimeExtent:o,stops:t})}getVolumeStyle(e){const t=this.getVariable(e);return t!=null?this.volumeStyles.find(({volumeId:o})=>o===t.volumeId):null}getColorForContinuousDataValue(e,t,o){var a;const r=this.getVariable(e);if(r==null||((a=r.renderingFormat)==null?void 0:a.continuity)!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(u=>u.variableId===e);if(n<0)return null;const l=this.variableStyles.at(n);return l!=null&&l.transferFunction?l.transferFunction.getColorForContinuousDataValue(t,o):null}getSections(){const e=[];for(const t of this.sections)e.push(new xe({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const o=this._getVariable(t);if(o!=null){const r=t.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),P.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(o.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&P.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(P.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(o.renderingFormat.continuity==="discrete")if(t.uniqueValues.length===0)P.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of t.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(r)}else P.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const o=this._getVolumeFromVolumeId(t.volumeId);if(o!=null){const r=t.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,o.zDimension],o.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,o.zDimension],o.dimensions)||(n.enabled=!1,n.label="invalid");e.push(r)}else P.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const o of this.variables)if(o.id===t)return o;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,o){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const r=ie(e.normal[0],e.normal[1],e.normal[2]);Ie(r,r);const n=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<n)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};i([s({type:["Voxel"]})],p.prototype,"operationalLayerType",void 0),i([s(xt)],p.prototype,"legendEnabled",void 0),i([s({json:{write:!0}})],p.prototype,"title",void 0),i([s(wt)],p.prototype,"url",null),i([s({type:d.ofType(xe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],p.prototype,"sections",void 0),i([s({type:j,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],p.prototype,"currentVariableId",void 0),i([s({type:d.ofType(Qe),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],p.prototype,"volumeStyles",void 0),i([s({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],p.prototype,"renderMode",void 0),i([s({type:d.ofType(Ge),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],p.prototype,"variableStyles",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],p.prototype,"enableSlices",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],p.prototype,"enableSections",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],p.prototype,"enableDynamicSections",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],p.prototype,"enableIsosurfaces",void 0),i([s({type:We,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],p.prototype,"shading",void 0),i([s({type:["show","hide"]})],p.prototype,"listMode",void 0),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],p.prototype,"opacity",void 0),i([s({type:d.ofType(Dt)})],p.prototype,"variables",void 0),i([s({type:d.ofType(Ke)})],p.prototype,"volumes",void 0),i([s({type:_t})],p.prototype,"index",void 0),i([s({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],p.prototype,"minScale",void 0),i([s({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],p.prototype,"maxScale",void 0),i([s({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),i([s({readOnly:!0,json:{name:"serviceVersion"}})],p.prototype,"version",void 0),i([Ae("service","version")],p.prototype,"readVersion",null),i([s({type:Oe})],p.prototype,"fullExtent",void 0),i([Ae("service","fullExtent",["fullExtent"])],p.prototype,"readFullExtent",null),i([s({readOnly:!0,clonable:!1,json:{read:!1}})],p.prototype,"voxelFields",null),i([s({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,o){t[o]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],p.prototype,"popupEnabled",void 0),i([s({type:Vt,json:{read:!1}})],p.prototype,"popupTemplate",null),i([s({readOnly:!0})],p.prototype,"defaultPopupTemplate",null),i([s({type:ke,readOnly:!0,json:{read:!1}})],p.prototype,"timeInfo",null),i([s({type:Ce,json:{read:!1}})],p.prototype,"timeExtent",void 0),i([s({type:jt,json:{read:!1}})],p.prototype,"timeOffset",void 0),i([s({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],p.prototype,"useViewTime",void 0),p=i([m("esri.layers.VoxelLayer")],p);const ui=p;export{ui as default};
