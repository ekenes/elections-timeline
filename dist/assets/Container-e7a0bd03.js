import{a as p,b as m,c as D,P as H,v as W,s as q,Q as O,aM as I,aN as w,dv as P}from"./index-ee4f50bd.js";import{y as V,n as $,e as S}from"./parser-c18899b3.js";import{M as E}from"./definitions-a2b23ed5.js";import{D as G}from"./enums-b14466b3.js";import{e as A,T as F}from"./Texture-c4e6d56d.js";const R=-1;let f=class extends H{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=W("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(x(t))}catch(e){this._transitionTo([]),q.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&M(this._current,x(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&M(this._current,t,this.scale)?(this._final=t,this._to=O(t),L(this._current,this._to,this.scale),this._from=O(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?O(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const n=this._current[i],h=this._from[i],l=this._to[i];n.scale=j(h.scale,l.scale,e);for(let o=0;o<n.effects.length;o++){const r=n.effects[o],d=h.effects[o],u=l.effects[o];r.interpolate(d,u,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?O(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,i=this._current.length-1;let n,h,l=1;if(e.length===1||t>=e[0].scale)h=n=e[0].effects;else if(t<=e[i].scale)h=n=e[i].effects;else for(let o=0;o<i;o++){const r=e[o],d=e[o+1];if(r.scale>=t&&d.scale<=t){l=(t-r.scale)/(d.scale-r.scale),n=r.effects,h=d.effects;break}}for(let o=0;o<this.effects.length;o++)this.effects[o].interpolate(n[o],h[o],l)}};function x(s){const t=V(s)||[];return U(t)?[{scale:R,effects:t}]:t}function M(s,t,e){var i,n,h,l;return!((i=s[0])!=null&&i.effects)||!((n=t[0])!=null&&n.effects)?!0:!((((h=s[0])==null?void 0:h.scale)===R||((l=t[0])==null?void 0:l.scale)===R)&&(s.length>1||t.length>1)&&e<=0)&&$(s[0].effects,t[0].effects)}function L(s,t,e){const i=s.length>t.length?s:t,n=s.length>t.length?t:s,h=n[n.length-1],l=(h==null?void 0:h.scale)??e,o=(h==null?void 0:h.effects)??[];for(let r=n.length;r<i.length;r++)n.push({scale:l,effects:[...o]});for(let r=0;r<i.length;r++)n[r].scale=n[r].scale===R?e:n[r].scale,i[r].scale=i[r].scale===R?e:i[r].scale,S(n[r].effects,i[r].effects)}function j(s,t,e){return s+(t-s)*e}function U(s){const t=s[0];return!!t&&"type"in t}p([m()],f.prototype,"_to",void 0),p([m()],f.prototype,"duration",void 0),p([m({value:""})],f.prototype,"effect",null),p([m({readOnly:!0})],f.prototype,"effects",void 0),p([m({readOnly:!0})],f.prototype,"hasEffects",null),p([m({value:0})],f.prototype,"scale",null),p([m({readOnly:!0})],f.prototype,"transitioning",null),f=p([D("esri.layers.effects.EffectView")],f);const k=1/W("mapview-transitions-duration");let N=class extends I{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var i;if(this._stage===t)return;const e=this._stage;this._stage=t,t?(i=this._stage)!=null&&i.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e==null||e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=w(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=w(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var t,e;(t=this._fadeInResolver)==null||t.call(this),this._fadeInResolver=null,(e=this._fadeOutResolver)==null||e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const i=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===i)this.computedVisible=this.visible;else{const h=t*k;this.computedOpacity=n>i?Math.max(i,n-h):Math.min(i,n+h),this.computedVisible=this.computedOpacity>0;const l=i===this.computedOpacity;this.inFadeTransition=!l,l||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const Q=1,st=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],nt=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],v=256,g={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},T=q.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function z(s,t){t.fillColor[0]=s.color.r/255,t.fillColor[1]=s.color.g/255,t.fillColor[2]=s.color.b/255,t.fillColor[3]=s.color.a,s.haloColor?(t.outlineColor[0]=s.haloColor.r/255,t.outlineColor[1]=s.haloColor.g/255,t.outlineColor[2]=s.haloColor.b/255,t.outlineColor[3]=s.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=s.fillOpacity,t.outlineColor[3]*=s.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=g.outlineWidth,t.outerHaloWidth=g.outerHaloWidth,t.innerHaloWidth=g.innerHaloWidth,t.outlinePosition=g.outlinePosition}const B=[0,0,0,0];class J{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:g.outlinePosition,outlineWidth:g.outlineWidth,innerHaloWidth:g.innerHaloWidth,outerHaloWidth:g.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*v),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;z(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,n=e.outlinePosition-e.outlineWidth/2,h=e.outlinePosition+e.outlineWidth/2,l=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,o=Math.sqrt(Math.PI/2)*Q,r=Math.abs(i)>o?Math.round(10*(Math.abs(i)-o))/10:0,d=Math.abs(l)>o?Math.round(10*(Math.abs(l)-o))/10:0;let u;r&&!d?T.error("The outer rim of the highlight is "+r+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!r&&d?T.error("The inner rim of the highlight is "+d+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):r&&d&&T.error("The highlight is "+Math.max(r,d)+"px away from the edge of the feature; consider reducing some width values.");const a=[void 0,void 0,void 0,void 0];function b(c,C,_){a[0]=(1-_)*c[0]+_*C[0],a[1]=(1-_)*c[1]+_*C[1],a[2]=(1-_)*c[2]+_*C[2],a[3]=(1-_)*c[3]+_*C[3]}const{_texelData:y}=this;for(let c=0;c<v;++c)u=i+c/(v-1)*(l-i),u<i?(a[4*c]=0,a[4*c+1]=0,a[4*c+2]=0,a[4*c+3]=0):u<n?b(B,e.outlineColor,(u-i)/(n-i)):u<h?[a[0],a[1],a[2],a[3]]=e.outlineColor:u<l?b(e.outlineColor,e.fillColor,(u-h)/(l-h)):[a[4*c],a[4*c+1],a[4*c+2],a[4*c+3]]=e.fillColor,y[4*c]=255*a[0],y[4*c+1]=255*a[1],y[4*c+2]=255*a[2],y[4*c+3]=255*a[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=l,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const i=new A;i.wrapMode=G.CLAMP_TO_EDGE,i.width=v,i.height=1,this._shadeTex=new F(t,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,v,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,E),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}}class rt extends N{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new f),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new J),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:P()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{f as a,nt as b,rt as h,N as i,Q as o,st as t};
