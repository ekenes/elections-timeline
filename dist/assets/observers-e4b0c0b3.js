import{m as i}from"./index-02eff6e6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.88
*/function b(e,n,o){if(!i())return;const t=c(e);return new t(n,o)}function c(e){class n extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,r){return this.observedEntry.push({target:t,options:r}),super.observe(t,r)}unobserve(t){const r=this.observedEntry.filter(s=>s.target!==t);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),r.forEach(s=>this.observe(s.target,s.options))}}return function(){return e==="intersection"?window.IntersectionObserver:e==="mutation"?n:window.ResizeObserver}()}export{b};
