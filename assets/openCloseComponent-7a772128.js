import{P as i}from"./dom-a9dae031.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.88
*/function o(n){return"opened"in n?n.opened:n.open}function t(n){requestAnimationFrame(()=>{n.transitionEl&&i(n.transitionEl,n.openTransitionProp,()=>{o(n)?n.onBeforeOpen():n.onBeforeClose()},()=>{o(n)?n.onOpen():n.onClose()})})}export{t as s};
