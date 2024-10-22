import{gf as l}from"./index-09dc31eb.js";import{o as t}from"./interfaces-3cb63efc.js";import{e as a}from"./VertexAttribute-ace1421c.js";var e;function p(r){return r===e.Shadow||r===e.ShadowHighlight||r===e.ShadowExcludeHighlight||r===e.ViewshedShadow}function S(r){return m(r)||r===e.Normal}function b(r){return f(r)||r===e.Normal}function d(r){return r===e.Highlight||r===e.ObjectAndLayerIdColor}function n(r){return r===e.Color}function s(r){return n(r)||g(r)}function u(r){return n(r)||d(r)}function h(r){return s(r)||d(r)}function m(r){return u(r)||c(r)}function f(r){return h(r)||c(r)}function c(r){return r===e.Depth}function g(r){return r===e.ColorEmission}(function(r){r[r.Color=0]="Color",r[r.ColorEmission=1]="ColorEmission",r[r.Depth=2]="Depth",r[r.Normal=3]="Normal",r[r.Shadow=4]="Shadow",r[r.ShadowHighlight=5]="ShadowHighlight",r[r.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",r[r.ViewshedShadow=7]="ViewshedShadow",r[r.Highlight=8]="Highlight",r[r.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",r[r.COUNT=10]="COUNT"})(e||(e={}));function N(r,i){switch(i.normalType){case o.Compressed:r.attributes.add(a.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(t`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:r.attributes.add(a.NORMAL,"vec3"),r.vertex.code.add(t`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:r.fragment.code.add(t`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:l(i.normalType);case o.COUNT:}}var o;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"})(o||(o={}));export{g as S,u as a,o as b,b as c,e as n,p as o,S as r,N as t,s as u};
