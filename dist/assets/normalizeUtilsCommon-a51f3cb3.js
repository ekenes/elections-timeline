import{a8 as t,a9 as a,a4 as o}from"./index-d2e37ef9.js";const p={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new t({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:a.WebMercator}),minus180Line:new t({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:a.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new t({paths:[[[180,-180],[180,180]]],spatialReference:a.WGS84}),minus180Line:new t({paths:[[[-180,-180],[-180,180]]],spatialReference:a.WGS84})}};function u(e,n){return Math.ceil((e-n)/(2*n))}function m(e,n){const r=c(e);for(const s of r)for(const i of s)i[0]+=n;return e}function c(e){return o(e)?e.rings:e.paths}export{u as i,c as o,p as r,m as s};