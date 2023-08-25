import{bj as d,bk as h,bm as l}from"./index-1f15e2a2.js";import{c as u}from"./observers-efb8b215.js";import{c as p,s as g,a as b}from"./loadable-3449c9fe.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.6.1
 */const c={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},w=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",m=d(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=u("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,e)=>{const i=t>1;return!(t&&e>1)&&!i?null:e<t?"retreating":"advancing"},this.updateFlowProps=()=>{const{el:t,items:e}=this,i=Array.from(t.querySelectorAll("calcite-flow-item")).filter(o=>o.closest("calcite-flow")===t),n=e.length,a=i.length,s=i[a-1],r=i[a-2];if(a&&s&&i.forEach(o=>{o.showBackButton=o===s&&a>1,o.hidden=o!==s}),r&&(r.menuOpen=!1),this.items=i,n!==a){const o=this.getFlowDirection(n,a);this.itemCount=a,this.flowDirection=o}},this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];return e?(await(e.beforeBack?e.beforeBack:()=>Promise.resolve()).call(e),e.remove(),e):void 0}async setFocus(){await p(this);const{items:t}=this,e=t[t.length-1];return e==null?void 0:e.setFocus()}connectedCallback(){var t;(t=this.itemMutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){g(this)}componentDidLoad(){b(this)}disconnectedCallback(){var t;(t=this.itemMutationObserver)==null||t.disconnect()}async handleItemBackClick(){return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[c.frame]:!0,[c.frameAdvancing]:t==="advancing",[c.frameRetreating]:t==="retreating"};return l("div",{class:e},l("slot",null))}get el(){return this}static get style(){return w}},[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function f(){if(typeof customElements>"u")return;["calcite-flow"].forEach(e=>{switch(e){case"calcite-flow":customElements.get(e)||customElements.define(e,m);break}})}f();const x=m,C=f;export{x as CalciteFlow,C as defineCustomElement};
