import{eo as h,h7 as N,h8 as s,am as O,h9 as S,ha as _,hb as M,ge as P,aF as f}from"./index-02eff6e6.js";function R(o,e,t){const E=Math.sin(o),C=Math.cos(o),a=Math.sin(e),r=Math.cos(e),n=t;return n[0]=-E,n[4]=-a*C,n[8]=r*C,n[12]=0,n[1]=C,n[5]=-a*E,n[9]=r*E,n[13]=0,n[2]=0,n[6]=r,n[10]=a,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function T(o,e,t){return R(o,e,t),h(t,t),t}function W(o,e,t,E){const C=N(o,E);if(C==null)return!1;const a=C.source.spatialReferenceId,r=C.dest.spatialReferenceId;if(a===r&&!l(r)&&(a!==s.UNKNOWN||O(o,E)))return S(t,e),!0;if(l(r)){const i=_[a][s.LON_LAT],L=_[s.LON_LAT][r];return i!=null&&L!=null&&(i(e,0,u,0),L(u,0,c,0),R(A*u[0],A*u[1],t),t[12]=c[0],t[13]=c[1],t[14]=c[2],!0)}const n=l(a);if((r===s.WEB_MERCATOR||r===s.PLATE_CARREE||r===s.WGS84||r===s.CGCS2000)&&(a===s.WGS84||n||a===s.WEB_MERCATOR||a===s.CGCS2000)){const i=_[a][s.LON_LAT],L=_[s.LON_LAT][r];return i!=null&&L!=null&&(i(e,0,u,0),L(u,0,c,0),n?T(A*u[0],A*u[1],t):M(t),t[12]=c[0],t[13]=c[1],t[14]=c[2],!0)}return!1}function l(o){return o===s.SPHERICAL_ECEF||o===s.SPHERICAL_MARS_PCPF||o===s.SPHERICAL_MOON_PCPF||o===s.WGS84_ECEF}const A=P(1),u=f(),c=f();export{W as m};
