import{bb as f,T as o}from"./index-ee4f50bd.js";import{y as u,h as i}from"./parser-c18899b3.js";function b(t,s,e){var n;try{return p(t)}catch(a){(n=e==null?void 0:e.messages)==null||n.push(a)}return null}function y(t,s,e,n){try{const a=l(t);f(e,a,s)}catch(a){n.messages&&n.messages.push(a)}}function l(t){const s=u(t);return s?i(s)?s.map(e=>e.toJSON()):s.map(({scale:e,effects:n})=>({scale:e,value:n.map(a=>a.toJSON())})):null}function p(t){if(!t||t.length===0)return null;if(h(t)){const s=[];for(const e of t)s.push({scale:e.scale,value:c(e.value)});return s}return c(t)}function h(t){const s=t[0];return!!s&&"scale"in s}function c(t){if(!t||!t.length)return"";const s=[];for(const e of t){let n=[];switch(e.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":n=[r(e,"amount")];break;case"blur":n=[r(e,"radius","pt")];break;case"hue-rotate":n=[r(e,"angle","deg")];break;case"drop-shadow":n=[r(e,"xoffset","pt"),r(e,"yoffset","pt"),r(e,"blurRadius","pt"),m(e,"color")];break;case"bloom":n=[r(e,"strength"),r(e,"radius","pt"),r(e,"threshold")]}const a=`${e.type}(${n.filter(Boolean).join(" ")})`;u(a),s.push(a)}return s.join(" ")}function r(t,s,e){if(t[s]==null)throw new o("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});return e?t[s]+e:""+t[s]}function m(t,s){if(t[s]==null)throw new o("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});const e=t[s];return`rgba(${e[0]||0}, ${e[1]||0}, ${e[2]||0}, ${e[3]/255||0})`}export{y as a,b as n};
