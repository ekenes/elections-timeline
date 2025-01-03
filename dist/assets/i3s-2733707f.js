import{o as ue}from"./_commonjsHelpers-2f3e7994.js";var Ot,Ht={exports:{}};function ce(){return Ot||(Ot=1,it=Ht,Z=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,ot=function(J={}){var at,z,i=J!==void 0?J:{};i.ready=new Promise((t,n)=>{at=t,z=n});var ut=Object.assign({},i),ct=typeof window=="object",D=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var K,b="";function zt(t){return i.locateFile?i.locateFile(t,b):b+t}(ct||D)&&(D?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),Z&&(b=Z),b=b.indexOf("blob:")!==0?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",D&&(K=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var x,V,Dt=i.print||console.log.bind(console),F=i.printErr||console.warn.bind(console);Object.assign(i,ut),ut=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(x=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&B("no native wasm support detected");var P,v,R,M,E,p,st,ft,lt,dt=!1;function pt(){var t=V.buffer;i.HEAP8=P=new Int8Array(t),i.HEAP16=R=new Int16Array(t),i.HEAP32=E=new Int32Array(t),i.HEAPU8=v=new Uint8Array(t),i.HEAPU16=M=new Uint16Array(t),i.HEAPU32=p=new Uint32Array(t),i.HEAPF32=st=new Float32Array(t),i.HEAPF64=ft=new Float64Array(t)}var vt=[],ht=[],mt=[];function Vt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)qt(i.preRun.shift());Q(vt)}function Mt(){Q(ht)}function Bt(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Lt(i.postRun.shift());Q(mt)}function qt(t){vt.unshift(t)}function Nt(t){ht.unshift(t)}function Lt(t){mt.unshift(t)}var W=0,U=null;function $t(t){W++,i.monitorRunDependencies&&i.monitorRunDependencies(W)}function Gt(t){if(W--,i.monitorRunDependencies&&i.monitorRunDependencies(W),W==0&&U){var n=U;U=null,n()}}function B(t){i.onAbort&&i.onAbort(t),F(t="Aborted("+t+")"),dt=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw z(n),n}var I,Xt="data:application/octet-stream;base64,";function gt(t){return t.startsWith(Xt)}function yt(t){try{if(t==I&&x)return new Uint8Array(x);if(K)return K(t);throw"both async and sync fetching of the wasm failed"}catch(n){B(n)}}function Zt(t){return x||!ct&&!D||typeof fetch!="function"?Promise.resolve().then(()=>yt(t)):fetch(t,{credentials:"same-origin"}).then(n=>{if(!n.ok)throw"failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()}).catch(()=>yt(t))}function _t(t,n,e){return Zt(t).then(r=>WebAssembly.instantiate(r,n)).then(r=>r).then(e,r=>{F("failed to asynchronously prepare wasm: "+r),B(r)})}function Jt(t,n,e,r){return t||typeof WebAssembly.instantiateStreaming!="function"||gt(n)||typeof fetch!="function"?_t(n,e,r):fetch(n,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,e).then(r,function(a){return F("wasm streaming compile failed: "+a),F("falling back to ArrayBuffer instantiation"),_t(n,e,r)}))}function Kt(){var t={env:St,wasi_snapshot_preview1:St};function n(r,o){var a=r.exports;return i.asm=a,V=i.asm.memory,pt(),lt=i.asm.__indirect_function_table,Nt(i.asm.__wasm_call_ctors),Gt(),a}function e(r){n(r.instance)}if($t(),i.instantiateWasm)try{return i.instantiateWasm(t,n)}catch(r){F("Module.instantiateWasm callback failed with error: "+r),z(r)}return Jt(x,I,t,e).catch(z),{}}function Q(t){for(;t.length>0;)t.shift()(i)}gt(I="i3s.wasm")||(I=zt(I));var q=[];function Y(t){var n=q[t];return n||(t>=q.length&&(q.length=t+1),q[t]=n=lt.get(t)),n}function Qt(t,n){Y(t)(n)}function Yt(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(n){p[this.ptr+4>>2]=n},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(n){p[this.ptr+8>>2]=n},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(n){n=n?1:0,P[this.ptr+12|0]=n},this.get_caught=function(){return P[this.ptr+12|0]!=0},this.set_rethrown=function(n){n=n?1:0,P[this.ptr+13|0]=n},this.get_rethrown=function(){return P[this.ptr+13|0]!=0},this.init=function(n,e){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(e)},this.set_adjusted_ptr=function(n){p[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Ut(this.get_type()))return p[this.excPtr>>2];var n=this.get_adjusted_ptr();return n!==0?n:this.excPtr}}function tn(t,n,e){throw new Yt(t).init(n,e),t}var N={};function wt(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function L(t){return this.fromWireType(E[t>>2])}var S={},k={},$={},nn=48,en=57;function rn(t){if(t===void 0)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=nn&&n<=en?"_"+t:t}function on(t,n){return t=rn(t),{[t]:function(){return n.apply(this,arguments)}}[t]}function tt(t,n){var e=on(n,function(r){this.name=n,this.message=r;var o=new Error(r).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},e}var bt=void 0;function At(t){throw new bt(t)}function Tt(t,n,e){function r(u){var s=e(u);s.length!==t.length&&At("Mismatched type converter count");for(var f=0;f<t.length;++f)A(t[f],s[f])}t.forEach(function(u){$[u]=n});var o=new Array(n.length),a=[],c=0;n.forEach((u,s)=>{k.hasOwnProperty(u)?o[s]=k[u]:(a.push(u),S.hasOwnProperty(u)||(S[u]=[]),S[u].push(()=>{o[s]=k[u],++c===a.length&&r(o)}))}),a.length===0&&r(o)}function an(t){var n=N[t];delete N[t];var e=n.rawConstructor,r=n.rawDestructor,o=n.fields;Tt([t],o.map(a=>a.getterReturnType).concat(o.map(a=>a.setterArgumentType)),a=>{var c={};return o.forEach((u,s)=>{var f=u.fieldName,l=a[s],d=u.getter,_=u.getterContext,w=a[s+o.length],j=u.setter,y=u.setterContext;c[f]={read:H=>l.fromWireType(d(_,H)),write:(H,rt)=>{var C=[];j(y,H,w.toWireType(C,rt)),wt(C)}}}),[{name:n.name,fromWireType:function(u){var s={};for(var f in c)s[f]=c[f].read(u);return r(u),s},toWireType:function(u,s){for(var f in c)if(!(f in s))throw new TypeError('Missing field:  "'+f+'"');var l=e();for(f in c)c[f].write(l,s[f]);return u!==null&&u.push(r,l),l},argPackAdvance:8,readValueFromPointer:L,destructorFunction:r}]})}function un(t,n,e,r,o){}function nt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function cn(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);Ct=t}var Ct=void 0;function h(t){for(var n="",e=t;v[e];)n+=Ct[v[e++]];return n}var Pt=void 0;function m(t){throw new Pt(t)}function A(t,n,e={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(t||m('type "'+r+'" must have a positive integer typeid pointer'),k.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;m("Cannot register type '"+r+"' twice")}if(k[t]=n,delete $[t],S.hasOwnProperty(t)){var o=S[t];delete S[t],o.forEach(a=>a())}}function sn(t,n,e,r,o){var a=nt(e);A(t,{name:n=h(n),fromWireType:function(c){return!!c},toWireType:function(c,u){return u?r:o},argPackAdvance:8,readValueFromPointer:function(c){var u;if(e===1)u=P;else if(e===2)u=R;else{if(e!==4)throw new TypeError("Unknown boolean type size: "+n);u=E}return this.fromWireType(u[c>>a])},destructorFunction:null})}function fn(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.allocate=function(t){let n=this.freelist.pop()||this.allocated.length;return this.allocated[n]=t,n},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}}var g=new fn;function Et(t){t>=g.reserved&&--g.get(t).refcount==0&&g.free(t)}function ln(){for(var t=0,n=g.reserved;n<g.allocated.length;++n)g.allocated[n]!==void 0&&++t;return t}function dn(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=ln}var G={toValue:t=>(t||m("Cannot use deleted val. handle = "+t),g.get(t).value),toHandle:t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:t})}}};function pn(t,n){A(t,{name:n=h(n),fromWireType:function(e){var r=G.toValue(e);return Et(e),r},toWireType:function(e,r){return G.toHandle(r)},argPackAdvance:8,readValueFromPointer:L,destructorFunction:null})}function vn(t,n){switch(n){case 2:return function(e){return this.fromWireType(st[e>>2])};case 3:return function(e){return this.fromWireType(ft[e>>3])};default:throw new TypeError("Unknown float type: "+t)}}function hn(t,n,e){var r=nt(e);A(t,{name:n=h(n),fromWireType:function(o){return o},toWireType:function(o,a){return a},argPackAdvance:8,readValueFromPointer:vn(n,r),destructorFunction:null})}function mn(t,n,e,r,o,a){var c=n.length;c<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!"),n[1];for(var u=!1,s=1;s<n.length;++s)if(n[s]!==null&&n[s].destructorFunction===void 0){u=!0;break}var f=n[0].name!=="void",l=c-2,d=new Array(l),_=[],w=[];return function(){var j;arguments.length!==l&&m("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),w.length=0,_.length=1,_[0]=o;for(var y=0;y<l;++y)d[y]=n[y+2].toWireType(w,arguments[y]),_.push(d[y]);function H(rt){if(u)wt(w);else for(var C=2;C<n.length;C++){var ae=C===1?j:d[C-2];n[C].destructorFunction!==null&&n[C].destructorFunction(ae)}if(f)return n[0].fromWireType(rt)}return H(r.apply(null,_))}}function gn(t,n,e){if(t[n].overloadTable===void 0){var r=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[r.argCount]=r}}function yn(t,n,e){i.hasOwnProperty(t)?((e===void 0||i[t].overloadTable!==void 0&&i[t].overloadTable[e]!==void 0)&&m("Cannot register public name '"+t+"' twice"),gn(i,t,t),i.hasOwnProperty(e)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),i[t].overloadTable[e]=n):(i[t]=n,e!==void 0&&(i[t].numArguments=e))}function _n(t,n){for(var e=[],r=0;r<t;r++)e.push(p[n+4*r>>2]);return e}function wn(t,n,e){i.hasOwnProperty(t)||At("Replacing nonexistant public symbol"),i[t].overloadTable!==void 0&&e!==void 0?i[t].overloadTable[e]=n:(i[t]=n,i[t].argCount=e)}function bn(t,n,e){var r=i["dynCall_"+t];return e&&e.length?r.apply(null,[n].concat(e)):r.call(null,n)}function An(t,n,e){return t.includes("j")?bn(t,n,e):Y(n).apply(null,e)}function Tn(t,n){var e=[];return function(){return e.length=0,Object.assign(e,arguments),An(t,n,e)}}function O(t,n){function e(){return t.includes("j")?Tn(t,n):Y(n)}t=h(t);var r=e();return typeof r!="function"&&m("unknown function pointer with signature "+t+": "+n),r}var Wt=void 0;function kt(t){var n=xt(t),e=h(n);return T(n),e}function Cn(t,n){var e=[],r={};function o(a){r[a]||k[a]||($[a]?$[a].forEach(o):(e.push(a),r[a]=!0))}throw n.forEach(o),new Wt(t+": "+e.map(kt).join([", "]))}function Pn(t,n,e,r,o,a,c){var u=_n(n,e);t=h(t),o=O(r,o),yn(t,function(){Cn("Cannot call "+t+" due to unbound types",u)},n-1),Tt([],u,function(s){var f=[s[0],null].concat(s.slice(1));return wn(t,mn(t,f,null,o,a),n-1),[]})}function En(t,n,e){switch(n){case 0:return e?function(r){return P[r]}:function(r){return v[r]};case 1:return e?function(r){return R[r>>1]}:function(r){return M[r>>1]};case 2:return e?function(r){return E[r>>2]}:function(r){return p[r>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function Wn(t,n,e,r,o){n=h(n);var a=nt(e),c=l=>l;if(r===0){var u=32-8*e;c=l=>l<<u>>>u}var s=n.includes("unsigned"),f=(l,d)=>{};A(t,{name:n,fromWireType:c,toWireType:s?function(l,d){return f(d,this.name),d>>>0}:function(l,d){return f(d,this.name),d},argPackAdvance:8,readValueFromPointer:En(n,a,r!==0),destructorFunction:null})}function kn(t,n,e){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function o(a){var c=p,u=c[a>>=2],s=c[a+1];return new r(c.buffer,s,u)}A(t,{name:e=h(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function jn(t,n,e,r){if(!(r>0))return 0;for(var o=e,a=e+r-1,c=0;c<t.length;++c){var u=t.charCodeAt(c);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++c)),u<=127){if(e>=a)break;n[e++]=u}else if(u<=2047){if(e+1>=a)break;n[e++]=192|u>>6,n[e++]=128|63&u}else if(u<=65535){if(e+2>=a)break;n[e++]=224|u>>12,n[e++]=128|u>>6&63,n[e++]=128|63&u}else{if(e+3>=a)break;n[e++]=240|u>>18,n[e++]=128|u>>12&63,n[e++]=128|u>>6&63,n[e++]=128|63&u}}return n[e]=0,e-o}function Fn(t,n,e){return jn(t,v,n,e)}function Rn(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r<=127?n++:r<=2047?n+=2:r>=55296&&r<=57343?(n+=4,++e):n+=3}return n}var jt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ft(t,n,e){for(var r=n+e,o=n;t[o]&&!(o>=r);)++o;if(o-n>16&&t.buffer&&jt)return jt.decode(t.subarray(n,o));for(var a="";n<o;){var c=t[n++];if(128&c){var u=63&t[n++];if((224&c)!=192){var s=63&t[n++];if((c=(240&c)==224?(15&c)<<12|u<<6|s:(7&c)<<18|u<<12|s<<6|63&t[n++])<65536)a+=String.fromCharCode(c);else{var f=c-65536;a+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else a+=String.fromCharCode((31&c)<<6|u)}else a+=String.fromCharCode(c)}return a}function Sn(t,n){return t?Ft(v,t,n):""}function xn(t,n){var e=(n=h(n))==="std::string";A(t,{name:n,fromWireType:function(r){var o,a=p[r>>2],c=r+4;if(e)for(var u=c,s=0;s<=a;++s){var f=c+s;if(s==a||v[f]==0){var l=Sn(u,f-u);o===void 0?o=l:(o+=String.fromCharCode(0),o+=l),u=f+1}}else{var d=new Array(a);for(s=0;s<a;++s)d[s]=String.fromCharCode(v[c+s]);o=d.join("")}return T(r),o},toWireType:function(r,o){var a;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),a=e&&c?Rn(o):o.length;var u=et(4+a+1),s=u+4;if(p[u>>2]=a,e&&c)Fn(o,s,a+1);else if(c)for(var f=0;f<a;++f){var l=o.charCodeAt(f);l>255&&(T(s),m("String has UTF-16 code units that do not fit in 8 bits")),v[s+f]=l}else for(f=0;f<a;++f)v[s+f]=o[f];return r!==null&&r.push(T,u),u},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(r){T(r)}})}var Rt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Un(t,n){for(var e=t,r=e>>1,o=r+n/2;!(r>=o)&&M[r];)++r;if((e=r<<1)-t>32&&Rt)return Rt.decode(v.subarray(t,e));for(var a="",c=0;!(c>=n/2);++c){var u=R[t+2*c>>1];if(u==0)break;a+=String.fromCharCode(u)}return a}function In(t,n,e){if(e===void 0&&(e=2147483647),e<2)return 0;for(var r=n,o=(e-=2)<2*t.length?e/2:t.length,a=0;a<o;++a){var c=t.charCodeAt(a);R[n>>1]=c,n+=2}return R[n>>1]=0,n-r}function On(t){return 2*t.length}function Hn(t,n){for(var e=0,r="";!(e>=n/4);){var o=E[t+4*e>>2];if(o==0)break;if(++e,o>=65536){var a=o-65536;r+=String.fromCharCode(55296|a>>10,56320|1023&a)}else r+=String.fromCharCode(o)}return r}function zn(t,n,e){if(e===void 0&&(e=2147483647),e<4)return 0;for(var r=n,o=r+e-4,a=0;a<t.length;++a){var c=t.charCodeAt(a);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++a)),E[n>>2]=c,(n+=4)+4>o)break}return E[n>>2]=0,n-r}function Dn(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&++e,n+=4}return n}function Vn(t,n,e){var r,o,a,c,u;e=h(e),n===2?(r=Un,o=In,c=On,a=()=>M,u=1):n===4&&(r=Hn,o=zn,c=Dn,a=()=>p,u=2),A(t,{name:e,fromWireType:function(s){for(var f,l=p[s>>2],d=a(),_=s+4,w=0;w<=l;++w){var j=s+4+w*n;if(w==l||d[j>>u]==0){var y=r(_,j-_);f===void 0?f=y:(f+=String.fromCharCode(0),f+=y),_=j+n}}return T(s),f},toWireType:function(s,f){typeof f!="string"&&m("Cannot pass non-string to C++ string type "+e);var l=c(f),d=et(4+l+n);return p[d>>2]=l>>u,o(f,d+4,l+n),s!==null&&s.push(T,d),d},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(s){T(s)}})}function Mn(t,n,e,r,o,a){N[t]={name:h(n),rawConstructor:O(e,r),rawDestructor:O(o,a),fields:[]}}function Bn(t,n,e,r,o,a,c,u,s,f){N[t].fields.push({fieldName:h(n),getterReturnType:e,getter:O(r,o),getterContext:a,setterArgumentType:c,setter:O(u,s),setterContext:f})}function qn(t,n){A(t,{isVoid:!0,name:n=h(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,r){}})}function Nn(t){t>4&&(g.get(t).refcount+=1)}var Ln={};function $n(t){var n=Ln[t];return n===void 0?h(t):n}function Gn(t){return G.toHandle($n(t))}function Xn(t,n){var e=k[t];return e===void 0&&m(n+" has unknown type "+kt(t)),e}function Zn(t,n){var e=(t=Xn(t,"_emval_take_value")).readValueFromPointer(n);return G.toHandle(e)}function Jn(){B("")}function Kn(t,n,e){v.copyWithin(t,n,n+e)}function Qn(){return 2147483648}function Yn(t){var n=V.buffer;try{return V.grow(t-n.byteLength+65535>>>16),pt(),1}catch{}}function te(t){var n=v.length;t>>>=0;var e=Qn();if(t>e)return!1;let r=(c,u)=>c+(u-c%u)%u;for(var o=1;o<=4;o*=2){var a=n*(1+.2/o);if(a=Math.min(a,t+100663296),Yn(Math.min(e,r(Math.max(t,a),65536))))return!0}return!1}function ne(t){return 52}function ee(t,n,e,r,o){return 70}var re=[null,[],[]];function ie(t,n){var e=re[t];n===0||n===10?((t===1?Dt:F)(Ft(e,0)),e.length=0):e.push(n)}function oe(t,n,e,r){for(var o=0,a=0;a<e;a++){var c=p[n>>2],u=p[n+4>>2];n+=8;for(var s=0;s<u;s++)ie(t,v[c+s]);o+=u}return p[r>>2]=o,0}bt=i.InternalError=tt(Error,"InternalError"),cn(),Pt=i.BindingError=tt(Error,"BindingError"),dn(),Wt=i.UnboundTypeError=tt(Error,"UnboundTypeError");var St={__call_sighandler:Qt,__cxa_throw:tn,_embind_finalize_value_object:an,_embind_register_bigint:un,_embind_register_bool:sn,_embind_register_emval:pn,_embind_register_float:hn,_embind_register_function:Pn,_embind_register_integer:Wn,_embind_register_memory_view:kn,_embind_register_std_string:xn,_embind_register_std_wstring:Vn,_embind_register_value_object:Mn,_embind_register_value_object_field:Bn,_embind_register_void:qn,_emval_decref:Et,_emval_incref:Nn,_emval_new_cstring:Gn,_emval_take_value:Zn,abort:Jn,emscripten_memcpy_big:Kn,emscripten_resize_heap:te,fd_close:ne,fd_seek:ee,fd_write:oe};Kt();var et=function(){return(et=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},xt=function(){return(xt=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var X,Ut=function(){return(Ut=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function It(){function t(){X||(X=!0,i.calledRun=!0,dt||(Mt(),at(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),Bt()))}W>0||(Vt(),W>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),t()},1)):t()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},U=function t(){X||It(),X||(U=t)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return It(),J.ready},it.exports=ot),Ht.exports;var it,Z,ot}const se=ue(ce()),le=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{le as i};