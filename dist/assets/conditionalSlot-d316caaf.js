import{c as n}from"./index-dca2343a.js";import{c as r}from"./observers-df846f8a.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */let t;const i={childList:!0};function f(o){t||(t=r("mutation",c)),t.observe(o.el,i)}function l(o){t.unobserve(o.el)}function c(o){o.forEach(({target:e})=>{n(e)})}export{f as c,l as d};
