import{bw as n}from"./index-76dad814.js";import{c as r}from"./observers-538028ad.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */let t;const i={childList:!0};function f(o){t||(t=r("mutation",s)),t.observe(o.el,i)}function l(o){t.unobserve(o.el)}function s(o){o.forEach(({target:e})=>{n(e)})}export{f as c,l as d};
