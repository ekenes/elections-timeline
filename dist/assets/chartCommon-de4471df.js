import{am as X,a3 as s,a6 as D,v as P,b as T,a as f,Q as L,aj as x,W as B,aD as M,x as c,$ as A}from"./Theme-a17565f6.js";import{n as S,o as R}from"./Button-39ddef1e.js";import{u as F}from"./Tooltip-b12571f6.js";import{s as U}from"./ColorSet-e9a36e8c.js";import"./index-1f15e2a2.js";class k extends X{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:s.fromHex(0),fill:s.fromHex(2829099),primaryButton:s.lighten(s.fromHex(6788316),-.2),primaryButtonHover:s.lighten(s.fromHex(6779356),-.2),primaryButtonDown:s.lighten(s.fromHex(6872181),-.2),primaryButtonActive:s.lighten(s.fromHex(6872182),-.2),primaryButtonText:s.fromHex(16777215),primaryButtonStroke:s.lighten(s.fromHex(6788316),-.2),secondaryButton:s.fromHex(3881787),secondaryButtonHover:s.lighten(s.fromHex(3881787),.1),secondaryButtonDown:s.lighten(s.fromHex(3881787),.15),secondaryButtonActive:s.lighten(s.fromHex(3881787),.2),secondaryButtonText:s.fromHex(12303291),secondaryButtonStroke:s.lighten(s.fromHex(3881787),-.2),grid:s.fromHex(12303291),background:s.fromHex(0),alternativeBackground:s.fromHex(16777215),text:s.fromHex(16777215),alternativeText:s.fromHex(0),disabled:s.fromHex(11382189),positive:s.fromHex(5288704),negative:s.fromHex(11730944)})}}const E=k;class e extends X{constructor(){super(...arguments),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]})}static widthXXS(t,i){return t<=e.XXS}static widthXS(t,i){return t<=e.XS}static widthS(t,i){return t<=e.S}static widthM(t,i){return t<=e.M}static widthL(t,i){return t<=e.L}static widthXL(t,i){return t<=e.XL}static widthXXL(t,i){return t<=e.XXL}static heightXXS(t,i){return i<=e.XXS}static heightXS(t,i){return i<=e.XS}static heightS(t,i){return i<=e.S}static heightM(t,i){return i<=e.M}static heightL(t,i){return i<=e.L}static heightXL(t,i){return i<=e.XL}static heightXXL(t,i){return i<=e.XXL}static isXXS(t,i){return t<=e.XXS&&i<=e.XXS}static isXS(t,i){return t<=e.XS&&i<=e.XS}static isS(t,i){return t<=e.S&&i<=e.S}static isM(t,i){return t<=e.M&&i<=e.M}static isL(t,i){return t<=e.L&&i<=e.L}static isXL(t,i){return t<=e.XL&&i<=e.XL}static isXXL(t,i){return t<=e.XXL&&i<=e.XXL}static maybeXXS(t,i){return t<=e.XXS||i<=e.XXS}static maybeXS(t,i){return t<=e.XS||i<=e.XS}static maybeS(t,i){return t<=e.S||i<=e.S}static maybeM(t,i){return t<=e.M||i<=e.M}static maybeL(t,i){return t<=e.L||i<=e.L}static maybeXL(t,i){return t<=e.XL||i<=e.XL}static maybeXXL(t,i){return t<=e.XXL||i<=e.XXL}static newEmpty(t){return new this(t,!0)}addRule(t){return t.name&&!t.template&&(t.template=this.rule(t.name,t.tags)),t._dp=new D([this._root._rootContainer.onPrivate("width",i=>{this._isUsed()&&this._applyRule(t)}),this._root._rootContainer.onPrivate("height",i=>{this._isUsed()&&this._applyRule(t)})]),this.responsiveRules.push(t),this._applyRule(t),t}removeRule(t){P(this.responsiveRules,t),t._dp&&t._dp.dispose()}_isUsed(){return this._root._rootContainer.get("themes").indexOf(this)!==-1}_applyRule(t){const i=this._root._rootContainer.getPrivate("width"),n=this._root._rootContainer.getPrivate("height"),r=t.relevant.call(t,i,n),a=t.applied;r?a||(t.applied=!0,t.template&&t.settings&&t.template.setAll(t.settings),t.applying&&t.applying.call(t)):a&&(t.applied=!1,t.template&&t.template.removeAll(),t.removing&&t.removing.call(t))}setupDefaultRules(){super.setupDefaultRules();const t=i=>this.addRule(i);t({name:"Chart",relevant:e.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),t({name:"Chart",relevant:e.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),t({name:"Bullet",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"Legend",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["vertical"],relevant:e.widthXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["horizontal"],relevant:e.heightXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","start"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","end"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Button",tags:["resize"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisRendererX",relevant:e.heightXS,settings:{inside:!0}}),t({name:"AxisRendererY",relevant:e.widthXS,settings:{inside:!0}}),t({name:"AxisRendererXLabel",relevant:e.heightXS,settings:{minPosition:.1,maxPosition:.9}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXS,settings:{centerY:T,maxPosition:.9}}),t({name:"AxisLabel",tags:["x"],relevant:e.heightXXS,settings:{forceHidden:!0}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["x"],relevant:e.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"AxisTick",tags:["y"],relevant:e.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"Grid",relevant:e.maybeXXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["radial"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeS,settings:{inside:!0}}),t({name:"AxisTick",relevant:e.maybeS,settings:{inside:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["circular"],relevant:e.maybeXS,settings:{inside:!0}}),t({name:"PieChart",relevant:e.maybeXS,settings:{radius:f(99)}}),t({name:"PieChart",relevant:e.widthM,settings:{radius:f(99)}}),t({name:"RadialLabel",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"FunnelSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PyramidSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PictorialStackedSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","horizontal"],relevant:e.widthS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","vertical"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Chord",relevant:e.maybeXS,settings:{radius:f(99)}}),t({name:"Label",tags:["hierarchy","node"],relevant:e.maybeXS,settings:{forceHidden:!0}})}}Object.defineProperty(e,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(e,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(e,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(e,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(e,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(e,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(e,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});const _=e;class w extends L{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_addOrientationClass(){this._settings.themeTags=x(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=S.new(this._root,{themeTags:x(this._settings.themeTags,["main","background"])}))}_makeButton(){return this.children.push(R.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:B.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(S.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(t){t&&this._disposers.push(t.events.on("stopped",()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1}))}_afterNew(){this._addOrientationClass(),super._afterNew();const t=this.startGrip,i=this.endGrip,n=this.thumb,r=this.get("background");r&&this._disposers.push(r.events.on("click",a=>{this.setPrivateRaw("isBusy",!0);const h=this._display.toLocal(a.point),l=this.width(),d=this.height(),u=this.get("orientation");let o,m,g;o=u=="vertical"?(h.y-n.height()/2)/d:(h.x-n.width()/2)/l,u=="vertical"?(m=o*d,g="y"):(m=o*l,g="x");const p=this.get("animationDuration",0);p>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:g,to:m,duration:p,easing:this.get("animationEasing")}))):(this.thumb.set(g,m),this._root.events.once("frameended",()=>{this.setPrivateRaw("isBusy",!1)}))})),this._disposers.push(n.events.on("dblclick",a=>{if(!M(a.originalEvent,this))return;const h=this.get("animationDuration",0),l=this.get("animationEasing");this.animate({key:"start",to:0,duration:h,easing:l}),this.animate({key:"end",to:1,duration:h,easing:l})})),this._disposers.push(t.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start"})),this._disposers.push(i.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end"})),this._disposers.push(n.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0})),this._disposers.push(t.events.on("globalpointerup",()=>{this._startDown&&this.setPrivateRaw("isBusy",!1),this._startDown=!1})),this._disposers.push(i.events.on("globalpointerup",()=>{this._endDown&&this.setPrivateRaw("isBusy",!1),this._endDown=!1})),this._disposers.push(n.events.on("globalpointerup",()=>{this._thumbDown&&this.setPrivateRaw("isBusy",!1),this._thumbDown=!1})),this._disposers.push(t.on("x",()=>{this._updateThumb()})),this._disposers.push(i.on("x",()=>{this._updateThumb()})),this._disposers.push(t.on("y",()=>{this._updateThumb()})),this._disposers.push(i.on("y",()=>{this._updateThumb()})),this._disposers.push(n.events.on("positionchanged",()=>{this._updateGripsByThumb()})),this.get("orientation")=="vertical"?(t.set("x",0),i.set("x",0),this._disposers.push(n.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()-n.height()),0))),this._disposers.push(n.adapters.add("x",a=>this.width()/2)),this._disposers.push(t.adapters.add("x",a=>this.width()/2)),this._disposers.push(i.adapters.add("x",a=>this.width()/2)),this._disposers.push(t.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()),0))),this._disposers.push(i.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()),0)))):(t.set("y",0),i.set("y",0),this._disposers.push(n.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()-n.width()),0))),this._disposers.push(n.adapters.add("y",a=>this.height()/2)),this._disposers.push(t.adapters.add("y",a=>this.height()/2)),this._disposers.push(i.adapters.add("y",a=>this.height()/2)),this._disposers.push(t.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()),0))),this._disposers.push(i.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()),0))))}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips()}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){const t="rangechanged";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown})}}updateGrips(){const t=this.startGrip,i=this.endGrip,n=this.get("orientation"),r=this.height(),a=this.width();n=="vertical"?(t.set("y",r*this.get("start",0)),i.set("y",r*this.get("end",1))):(t.set("x",a*this.get("start",0)),i.set("x",a*this.get("end",1)));const h=this.getPrivate("positionTextFunction"),l=Math.round(100*this.get("start",0)),d=Math.round(100*this.get("end",0));let u,o;h?(u=h.call(this,this.get("start",0)),o=h.call(this,this.get("end",0))):(u=l+"%",o=d+"%"),t.set("ariaLabel",this._t("From %1",void 0,u)),t.set("ariaValueNow",""+l),t.set("ariaValueText",l+"%"),t.set("ariaValueMin","0"),t.set("ariaValueMax","100"),i.set("ariaLabel",this._t("To %1",void 0,o)),i.set("ariaValueNow",""+d),i.set("ariaValueText",d+"%"),i.set("ariaValueMin","0"),i.set("ariaValueMax","100")}_updateThumb(){const t=this.thumb,i=this.startGrip,n=this.endGrip,r=this.height(),a=this.width();let h=i.x(),l=n.x(),d=i.y(),u=n.y(),o=0,m=1;this.get("orientation")=="vertical"?c(d)&&c(u)&&(this._thumbBusy||t.isDragging()||(t.set("height",u-d),t.set("y",d)),o=d/r,m=u/r):c(h)&&c(l)&&(this._thumbBusy||t.isDragging()||(t.set("width",l-h),t.set("x",h)),o=h/a,m=l/a),!this.getPrivate("isBusy")||this.get("start")==o&&this.get("end")==m||(this.set("start",o),this.set("end",m));const g=this.getPrivate("positionTextFunction"),p=Math.round(100*this.get("start",0)),H=Math.round(100*this.get("end",0));let v,y;g?(v=g.call(this,this.get("start",0)),y=g.call(this,this.get("end",0))):(v=p+"%",y=H+"%"),t.set("ariaLabel",this._t("From %1 to %2",void 0,v,y)),t.set("ariaValueNow",""+p),t.set("ariaValueText",p+"%")}_updateGripsByThumb(){const t=this.thumb,i=this.startGrip,n=this.endGrip;if(this.get("orientation")=="vertical"){const r=t.height();i.set("y",t.y()),n.set("y",t.y()+r)}else{const r=t.width();i.set("x",t.x()),n.set("x",t.x()+r)}}}Object.defineProperty(w,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(w,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:L.classNames.concat([w.className])});const G=class extends X{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500),this.rule("Polygon").set("animationDuration",600),this.rule("ArcDiagram").set("animationDuration",600)}},N=["#7ABEE5","#B39BD5","#F8AE83","#92E6E4","#FBC487","#EE967A","#CEA2D6","#89D594","#CEE68F","#F1A6D5"].map(b=>A(b));export{G as AnimatedThemeAm5,U as ColorSetAm5,E as DarkThemeAm5,_ as ResponsiveThemeAm5,w as ScrollbarAm5,X as ThemeAm5,F as TooltipAm5,A as colorAm5,N as esriChartColorSet};
