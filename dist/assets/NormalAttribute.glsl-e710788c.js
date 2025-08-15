import{hd as u}from"./index-c2b82012.js";import{o as i}from"./interfaces-d79e913c.js";import{e as a}from"./VertexAttribute-c957ed9e.js";var n;(function(r){r[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint"})(n||(n={}));var e;function S(r){return r===e.Shadow||r===e.ShadowHighlight||r===e.ShadowExcludeHighlight||r===e.ViewshedShadow}function b(r){return f(r)||r===e.Normal}function N(r){return g(r)||r===e.Normal}function d(r){return r===e.Highlight||r===e.ObjectAndLayerIdColor}function l(r){return r===e.Color}function s(r){return l(r)||p(r)}function h(r){return l(r)||d(r)}function m(r){return s(r)||d(r)}function f(r){return h(r)||c(r)}function g(r){return m(r)||c(r)}function c(r){return r===e.Depth}function p(r){return r===e.ColorEmission}(function(r){r[r.Color=0]="Color",r[r.ColorEmission=1]="ColorEmission",r[r.Depth=2]="Depth",r[r.Normal=3]="Normal",r[r.Shadow=4]="Shadow",r[r.ShadowHighlight=5]="ShadowHighlight",r[r.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",r[r.ViewshedShadow=7]="ViewshedShadow",r[r.Highlight=8]="Highlight",r[r.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",r[r.COUNT=10]="COUNT"})(e||(e={}));function O(r,t){switch(t.normalType){case o.Compressed:r.attributes.add(a.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:r.attributes.add(a.NORMAL,"vec3"),r.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:r.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:u(t.normalType);case o.COUNT:}}var o;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"})(o||(o={}));export{p as H,o as a,n as b,N as c,m as f,e as n,S as o,b as r,O as t,s as u};
