import{bj as g,bk as C,dt as u,dq as f,fw as _,fx as W,bm as n,bn as j,dr as K,bl as U,bo as q}from"./index-1f15e2a2.js";import{c as v,u as k,d as x}from"./interactive-a0c614e5.js";import{s as S,a as w,c as E}from"./loadable-3449c9fe.js";import{c as A,a as y,s as B,d as H,b as F,u as z}from"./t9n-9bf1e1f3.js";import{c as G}from"./observers-efb8b215.js";import{d as L,a as M,S as J,H as Q}from"./action-menu-83d9eb45.js";import{d as I}from"./action-bfeee10c.js";import{d as O}from"./icon-206e9079.js";import{d as P}from"./loader-192a21cb.js";import{d as R}from"./scrim-cbcfdd35.js";import"./debounce-14ebcd9e.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.6.1
 */const o={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},b={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right"},s={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},V=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-footer-padding:0.5rem;--calcite-internal-panel-header-border-block-end:1px solid var(--calcite-ui-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-internal-panel-header-border-block-end)}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",X=g(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=u(this,"calcitePanelClose",6),this.calcitePanelScroll=u(this,"calcitePanelScroll",6),this.resizeObserver=G("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.setCloseRef=e=>{this.closeButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=f(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=f(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=f(e)},this.handleActionBarSlotChange=e=>{const t=_(e).filter(a=>a==null?void 0:a.matches("calcite-action-bar"));t.forEach(a=>a.layout="horizontal"),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=f(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=f(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=f(e)},this.handleFabSlotChange=e=>{this.hasFab=f(e)},this.setPanelScrollEl=e=>{var t,a;this.panelScrollEl=e,(t=this.resizeObserver)==null||t.disconnect(),e&&((a=this.resizeObserver)==null||a.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){v(this),A(this),y(this)}async componentWillLoad(){S(this),await B(this)}componentDidLoad(){w(this)}componentDidRender(){k(this)}disconnectedCallback(){var e;x(this),H(this),F(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){z(this,this.effectiveLocale)}async setFocus(){await E(this),W(this.containerEl)}async scrollContentTo(e){var t;(t=this.panelScrollEl)==null||t.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:r}=this,c=e?n(Q,{class:o.heading,level:t},e):null,i=a?n("span",{class:o.description},a):null;return!r&&(c||i)?n("div",{class:o.headerContent,key:"header-content"},c,i):null}renderActionBar(){return n("div",{class:o.actionBarContainer,hidden:!this.hasActionBar},n("slot",{name:s.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return n("div",{class:o.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},n("slot",{name:s.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return n("div",{class:{[o.headerActionsStart]:!0,[o.headerActions]:!0},hidden:!e,key:"header-actions-start"},n("slot",{name:s.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{close:e,hasEndActions:t,messages:a,closable:r,hasMenuItems:c}=this,i=a.close,l=r?n("calcite-action",{"aria-label":i,"data-test":"close",icon:b.close,onClick:e,text:i,title:i,ref:this.setCloseRef}):null,h=n("slot",{name:s.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),m=t||l||c;return n("div",{class:{[o.headerActionsEnd]:!0,[o.headerActions]:!0},hidden:!m,key:"header-actions-end"},h,this.renderMenu(),l)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return n("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,placement:"bottom-end"},n("calcite-action",{icon:b.menu,slot:J.trigger,text:t.options}),n("slot",{name:s.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:r,hasMenuItems:c,hasActionBar:i}=this,l=this.renderHeaderContent(),h=e||!!l||t||a||r||c;return this.showHeaderContent=h,n("header",{class:o.header,hidden:!(h||i)},n("div",{class:{[o.headerContainer]:!0,[o.headerContainerBorderEnd]:i},hidden:!h},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),l,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,a=e||t;return n("footer",{class:o.footer,hidden:!a},n("slot",{key:"footer-slot",name:s.footer,onSlotchange:this.handleFooterSlotChange}),n("slot",{key:"footer-actions-slot",name:s.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return n("div",{class:o.contentWrapper,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},n("slot",null),this.renderFab())}renderFab(){return n("div",{class:o.fabContainer,hidden:!this.hasFab},n("slot",{name:s.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:a,closable:r}=this,c=n("article",{"aria-busy":j(e),class:o.container,hidden:a,onKeyDown:t,tabIndex:r?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return n(K,null,e?n("calcite-scrim",{loading:e}):null,c)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return V}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]}]);function $(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-panel":customElements.get(t)||customElements.define(t,X);break;case"calcite-action":customElements.get(t)||I();break;case"calcite-action-menu":customElements.get(t)||M();break;case"calcite-icon":customElements.get(t)||O();break;case"calcite-loader":customElements.get(t)||P();break;case"calcite-popover":customElements.get(t)||L();break;case"calcite-scrim":customElements.get(t)||R();break}})}$();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.6.1
 */const Y={backButton:"back-button"},p={backLeft:"chevron-left",backRight:"chevron-right"},d={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},Z=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-flow-item-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding)}:host([hidden]){display:none}[hidden]{display:none}",D=g(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=u(this,"calciteFlowItemBack",6),this.calciteFlowItemScroll=u(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=u(this,"calciteFlowItemClose",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){v(this),A(this),y(this)}async componentWillLoad(){await B(this),S(this)}componentDidRender(){k(this)}disconnectedCallback(){x(this),H(this),F(this)}componentDidLoad(){w(this)}effectiveLocaleChange(){z(this,this.effectiveLocale)}async setFocus(){await E(this);const{backButtonEl:e,containerEl:t}=this;if(e)return e.setFocus();if(t)return t.setFocus()}async scrollContentTo(e){var t;await((t=this.containerEl)==null?void 0:t.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t=U(e)==="rtl",{showBackButton:a,backButtonClick:r,messages:c}=this,i=c.back,l=t?p.backRight:p.backLeft;return a?n("calcite-action",{"aria-label":i,class:Y.backButton,icon:l,key:"flow-back-button",onClick:r,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}render(){const{closable:e,closed:t,description:a,disabled:r,heading:c,headingLevel:i,loading:l,menuOpen:h,messages:m}=this;return n(q,null,n("calcite-panel",{closable:e,closed:t,description:a,disabled:r,heading:c,headingLevel:i,loading:l,menuOpen:h,messageOverrides:m,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,ref:this.setContainerRef},this.renderBackButton(),n("slot",{name:d.actionBar,slot:s.actionBar}),n("slot",{name:d.headerActionsStart,slot:s.headerActionsStart}),n("slot",{name:d.headerActionsEnd,slot:s.headerActionsEnd}),n("slot",{name:d.headerContent,slot:s.headerContent}),n("slot",{name:d.headerMenuActions,slot:s.headerMenuActions}),n("slot",{name:d.fab,slot:s.fab}),n("slot",{name:d.footerActions,slot:s.footerActions}),n("slot",{name:d.footer,slot:s.footer}),n("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Z}},[1,"calcite-flow-item",{closable:[516],closed:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function T(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-flow-item":customElements.get(t)||customElements.define(t,D);break;case"calcite-action":customElements.get(t)||I();break;case"calcite-action-menu":customElements.get(t)||M();break;case"calcite-icon":customElements.get(t)||O();break;case"calcite-loader":customElements.get(t)||P();break;case"calcite-panel":customElements.get(t)||$();break;case"calcite-popover":customElements.get(t)||L();break;case"calcite-scrim":customElements.get(t)||R();break}})}T();const de=D,he=T;export{de as CalciteFlowItem,he as defineCustomElement};
