// Module 161 - Savior Base64 Decoder
export default function(t,e,r) {
  "use strict";
  (function(t){
  r.d(e,"a",(function(){
  return Ut}
  ));
  for(var n=function(t){
  var e=d(t),r=e[0],n=e[1];
  return 3*(r+n)/4-n}
  ,i=function(t){
  var e,r,n=d(t),i=n[0],o=n[1],a=new u(function(t,e,r){
  return 3*(e+r)/4-r}
  (0,i,o)),c=0,l=o>0?i-4:i;
  for(r=0;
  r<l;
  r+=4)e=s[t.charCodeAt(r)]<<18|s[t.charCodeAt(r+1)]<<12|s[t.charCodeAt(r+2)]<<6|s[t.charCodeAt(r+3)],
  a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=255&e;
  2===o&&(e=s[t.charCodeAt(r)]<<2|s[t.charCodeAt(r+1)]>>4,a[c++]=255&e);
  1===o&&(e=s[t.charCodeAt(r)]<<10|s[t.charCodeAt(r+1)]<<4|s[t.charCodeAt(r+2)]>>2,a[c++]=e>>8&255,a[c++]=255&e);
  return a}
  ,o=function(t){
  for(var e,r=t.length,n=r%3,i=[],o=0,s=r-n;
  o<s;
  o+=16383)i.push(h(t,o,o+16383>s?s:o+16383));
  1===n?(e=t[r-1],i.push(a[e>>2]+a[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],i.push(a[e>>10]+a[e>>4&63]+a[e<<2&63]+"="));
  return i.join("")}
  ,a=[],s=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  l=0,f=c.length;
  l<f;
  ++l)a[l]=c[l],s[c.charCodeAt(l)]=l;
  function d(t){
  var e=t.length;
  if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");
  var r=t.indexOf("=");
  return-1===r&&(r=e),[r,r===e?0:4-r%4]}
  function h(t,e,r){
  for(var n,i,o=[],s=e;
  s<r;
  s+=3)n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push(a[(i=n)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);
  return o.join("")}
  s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63;
  var p={
  byteLength:n,toByteArray:i,fromByteArray:o}
  ,v=function(t,e,r,n,i){
  var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,d=r?-1:1,h=t[e+f];
  for(f+=d,o=h&(1<<-l)-1,h>>=-l,l+=s;
  l>0;
  o=256*o+t[e+f],f+=d,l-=8);
  for(a=o&(1<<-l)-1,o>>=-l,l+=n;
  l>0;
  a=256*a+t[e+f],f+=d,l-=8);
  if(0===o)o=1-c;
  else{
  if(o===u)return a?NaN:1/0*(h?-1:1);
  a+=Math.pow(2,n),o-=c}
  return(h?-1:1)*a*Math.pow(2,o-n)}
  ,m=function(t,e,r,n,i,o){
  var a,s,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:o-1,p=n?1:-1,
  v=e<0||0===e&&1/e<0?1:0;
  for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,
  -a))<1&&(a--,u*=2),(e+=a+f>=1?d/u:d*Math.pow(2,1-f))*u>=2&&(a++,u/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(e*u-1)*Math.pow(2,
  i),a+=f):(s=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));
  i>=8;
  t[r+h]=255&s,h+=p,s/=256,i-=8);
  for(a=a<<i|s,c+=i;
  c>0;
  t[r+h]=255&a,h+=p,a/=256,c-=8);
  t[r+h-p]|=128*v}
  ,y=function(t,e){
  return t(e={
  exports:{
  }
  }
  ,e.exports),e.exports}
  ((function(t,e){
  var r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):
  null;
  e.Buffer=i,e.SlowBuffer=function(t){
  +t!=t&&(t=0);
  return i.alloc(+t)}
  ,e.INSPECT_MAX_BYTES=50;
  function n(t){
  if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');
  var e=new Uint8Array(t);
  return Object.setPrototypeOf(e,i.prototype),e}
  function i(t,e,r){
  if("number"==typeof t){
  if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');
  return s(t)}
  return o(t,e,r)}
  function o(t,e,r){
  if("string"==typeof t)return function(t,e){
  "string"==typeof e&&""!==e||(e="utf8");
  if(!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);
  var r=0|f(t,e),o=n(r),a=o.write(t,e);
  a!==r&&(o=o.slice(0,a));
  return o}
  (t,e);
  if(ArrayBuffer.isView(t))return function(t){
  if(L(t,Uint8Array)){
  var e=new Uint8Array(t);
  return c(e.buffer,e.byteOffset,e.byteLength)}
  return u(t)}
  (t);
  if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+babelHelpers.typeof(t));
  if(L(t,ArrayBuffer)||t&&L(t.buffer,ArrayBuffer))return c(t,e,r);
  if("undefined"!=typeof SharedArrayBuffer&&(L(t,SharedArrayBuffer)||t&&L(t.buffer,SharedArrayBuffer)))return c(t,
  e,r);
  if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');
  var o=t.valueOf&&t.valueOf();
  if(null!=o&&o!==t)return i.from(o,e,r);
  var a=function(t){
  if(i.isBuffer(t)){
  var e=0|l(t.length),r=n(e);
  return 0===r.length||t.copy(r,0,0,e),r}
  if(void 0!==t.length)return"number"!=typeof t.length||q(t.length)?n(0):u(t);
  if("Buffer"===t.type&&Array.isArray(t.data))return u(t.data)}
  (t);
  if(a)return a;
  if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return i.from(t[Symbol.toPrimitive]("string"),
  e,r);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+babelHelpers.typeof(t))}
  function a(t){
  if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');
  if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}
  function s(t){
  return a(t),n(t<0?0:0|l(t))}
  function u(t){
  for(var e=t.length<0?0:0|l(t.length),r=n(e),i=0;
  i<e;
  i+=1)r[i]=255&t[i];
  return r}
  function c(t,e,r){
  if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');
  if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');
  var n;
  return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,
  e,r),Object.setPrototypeOf(n,i.prototype),n}
  function l(t){
  if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");
  return 0|t}
  function f(t,e){
  if(i.isBuffer(t))return t.length;
  if(ArrayBuffer.isView(t)||L(t,ArrayBuffer))return t.byteLength;
  if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+babelHelpers.typeof(t));
  var r=t.length,n=arguments.length>2&&!0===arguments[2];
  if(!n&&0===r)return 0;
  for(var o=!1;;
  )switch(e){
  case"ascii":case"latin1":case"binary":return r;
  case"utf8":case"utf-8":return N(t).length;
  case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;
  case"hex":return r>>>1;
  case"base64":return D(t).length;
  default:if(o)return n?-1:N(t).length;
  e=(""+e).toLowerCase(),o=!0}
  }
  function d(t,e,r){
  var n=!1;
  if((void 0===e||e<0)&&(e=0),e>this.length)return"";
  if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";
  if((r>>>=0)<=(e>>>=0))return"";
  for(t||(t="utf8");;
  )switch(t){
  case"hex":return M(this,e,r);
  case"utf8":case"utf-8":return O(this,e,r);
  case"ascii":return x(this,e,r);
  case"latin1":case"binary":return k(this,e,r);
  case"base64":return S(this,e,r);
  case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,r);
  default:if(n)throw new TypeError("Unknown encoding: "+t);
  t=(t+"").toLowerCase(),n=!0}
  }
  function h(t,e,r){
  var n=t[e];
  t[e]=t[r],t[r]=n}
  function y(t,e,r,n,o){
  if(0===t.length)return-1;
  if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),q(r=+r)&&
  (r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){
  if(o)return-1;
  r=t.length-1}
  else if(r<0){
  if(!o)return-1;
  r=0}
  if("string"==typeof e&&(e=i.from(e,n)),i.isBuffer(e))return 0===e.length?-1:g(t,e,r,n,o);
  if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,
  e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):g(t,[e],r,n,o);
  throw new TypeError("val must be string, number or Buffer")}
  function g(t,e,r,n,i){
  var o,a=1,s=t.length,u=e.length;
  if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){
  if(t.length<2||e.length<2)return-1;
  a=2,s/=2,u/=2,r/=2}
  function c(t,e){
  return 1===a?t[e]:t.readUInt16BE(e*a)}
  if(i){
  var l=-1;
  for(o=r;
  o<s;
  o++)if(c(t,o)===c(e,-1===l?0:o-l)){
  if(-1===l&&(l=o),o-l+1===u)return l*a}
  else-1!==l&&(o-=o-l),l=-1}
  else for(r+u>s&&(r=s-u),o=r;
  o>=0;
  o--){
  for(var f=!0,d=0;
  d<u;
  d++)if(c(t,o+d)!==c(e,d)){
  f=!1;
  break}
  if(f)return o}
  return-1}
  function b(t,e,r,n){
  r=Number(r)||0;
  var i=t.length-r;
  n?(n=Number(n))>i&&(n=i):n=i;
  var o=e.length;
  n>o/2&&(n=o/2);
  for(var a=0;
  a<n;
  ++a){
  var s=parseInt(e.substr(2*a,2),16);
  if(q(s))return a;
  t[r+a]=s}
  return a}
  function w(t,e,r,n){
  return R(N(e,t.length-r),t,r,n)}
  function A(t,e,r,n){
  return R(function(t){
  for(var e=[],r=0;
  r<t.length;
  ++r)e.push(255&t.charCodeAt(r));
  return e}
  (e),t,r,n)}
  function _(t,e,r,n){
  return R(D(e),t,r,n)}
  function E(t,e,r,n){
  return R(function(t,e){
  for(var r,n,i,o=[],a=0;
  a<t.length&&!((e-=2)<0);
  ++a)r=t.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);
  return o}
  (e,t.length-r),t,r,n)}
  function S(t,e,r){
  return 0===e&&r===t.length?p.fromByteArray(t):p.fromByteArray(t.slice(e,r))}
  function O(t,e,r){
  r=Math.min(t.length,r);
  for(var n=[],i=e;
  i<r;
  ){
  var o,a,s,u,c=t[i],l=null,f=c>239?4:c>223?3:c>191?2:1;
  if(i+f<=r)switch(f){
  case 1:c<128&&(l=c);
  break;
  case 2:128==(192&(o=t[i+1]))&&(u=(31&c)<<6|63&o)>127&&(l=u);
  break;
  case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(u=(15&c)<<12|(63&o)<<6|63&a)>2047&&(u<55296||
  u>57343)&&(l=u);
  break;
  case 4:o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&
  u<1114112&&(l=u)}
  null===l?(l=65533,f=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),i+=f}
  return function(t){
  var e=t.length;
  if(e<=4096)return String.fromCharCode.apply(String,t);
  var r="",n=0;
  for(;
  n<e;
  )r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));
  return r}
  (n)}
  e.kMaxLength=2147483647,i.TYPED_ARRAY_SUPPORT=function(){
  try{
  var t=new Uint8Array(1),e={
  foo:function(){
  return 42}
  };
  return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}
  catch(t){
  return!1}
  }
  (),i.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
  Object.defineProperty(i.prototype,"parent",{
  enumerable:!0,get:function(){
  if(i.isBuffer(this))return this.buffer}
  }
  ),Object.defineProperty(i.prototype,"offset",{
  enumerable:!0,get:function(){
  if(i.isBuffer(this))return this.byteOffset}
  }
  ),i.poolSize=8192,i.from=function(t,e,r){
  return o(t,e,r)}
  ,Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array),i.alloc=function(t,
  e,r){
  return function(t,e,r){
  return a(t),t<=0?n(t):void 0!==e?"string"==typeof r?n(t).fill(e,r):n(t).fill(e):n(t)}
  (t,e,r)}
  ,i.allocUnsafe=function(t){
  return s(t)}
  ,i.allocUnsafeSlow=function(t){
  return s(t)}
  ,i.isBuffer=function(t){
  return null!=t&&!0===t._isBuffer&&t!==i.prototype}
  ,i.compare=function(t,e){
  if(L(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),L(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),
  !i.isBuffer(t)||!i.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if(t===e)return 0;
  for(var r=t.length,n=e.length,o=0,a=Math.min(r,n);
  o<a;
  ++o)if(t[o]!==e[o]){
  r=t[o],n=e[o];
  break}
  return r<n?-1:n<r?1:0}
  ,i.isEncoding=function(t){
  switch(String(t).toLowerCase()){
  case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":
  case"utf16le":case"utf-16le":return!0;
  default:return!1}
  }
  ,i.concat=function(t,e){
  if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');
  if(0===t.length)return i.alloc(0);
  var r;
  if(void 0===e)for(e=0,r=0;
  r<t.length;
  ++r)e+=t[r].length;
  var n=i.allocUnsafe(e),o=0;
  for(r=0;
  r<t.length;
  ++r){
  var a=t[r];
  if(L(a,Uint8Array))o+a.length>n.length?i.from(a).copy(n,o):Uint8Array.prototype.set.call(n,a,o);
  else{
  if(!i.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');
  a.copy(n,o)}
  o+=a.length}
  return n}
  ,i.byteLength=f,i.prototype._isBuffer=!0,i.prototype.swap16=function(){
  var t=this.length;
  if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");
  for(var e=0;
  e<t;
  e+=2)h(this,e,e+1);
  return this}
  ,i.prototype.swap32=function(){
  var t=this.length;
  if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");
  for(var e=0;
  e<t;
  e+=4)h(this,e,e+3),h(this,e+1,e+2);
  return this}
  ,i.prototype.swap64=function(){
  var t=this.length;
  if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");
  for(var e=0;
  e<t;
  e+=8)h(this,e,e+7),h(this,e+1,e+6),h(this,e+2,e+5),h(this,e+3,e+4);
  return this}
  ,i.prototype.toString=function(){
  var t=this.length;
  return 0===t?"":0===arguments.length?O(this,0,t):d.apply(this,arguments)}
  ,i.prototype.toLocaleString=i.prototype.toString,i.prototype.equals=function(t){
  if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");
  return this===t||0===i.compare(this,t)}
  ,i.prototype.inspect=function(){
  var t="",r=e.INSPECT_MAX_BYTES;
  return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"}
  ,r&&(i.prototype[r]=i.prototype.inspect),i.prototype.compare=function(t,e,r,n,o){
  if(L(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),!i.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+babelHelpers.typeof(t));
  if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||
  r>t.length||n<0||o>this.length)throw new RangeError("out of range index");
  if(n>=o&&e>=r)return 0;
  if(n>=o)return-1;
  if(e>=r)return 1;
  if(this===t)return 0;
  for(var a=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),u=Math.min(a,s),c=this.slice(n,o),l=t.slice(e,r),f=0;
  f<u;
  ++f)if(c[f]!==l[f]){
  a=c[f],s=l[f];
  break}
  return a<s?-1:s<a?1:0}
  ,i.prototype.includes=function(t,e,r){
  return-1!==this.indexOf(t,e,r)}
  ,i.prototype.indexOf=function(t,e,r){
  return y(this,t,e,r,!0)}
  ,i.prototype.lastIndexOf=function(t,e,r){
  return y(this,t,e,r,!1)}
  ,i.prototype.write=function(t,e,r,n){
  if(void 0===e)n="utf8",r=this.length,e=0;
  else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;
  else{
  if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}
  var i=this.length-e;
  if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");
  n||(n="utf8");
  for(var o=!1;;
  )switch(n){
  case"hex":return b(this,t,e,r);
  case"utf8":case"utf-8":return w(this,t,e,r);
  case"ascii":case"latin1":case"binary":return A(this,t,e,r);
  case"base64":return _(this,t,e,r);
  case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,r);
  default:if(o)throw new TypeError("Unknown encoding: "+n);
  n=(""+n).toLowerCase(),o=!0}
  }
  ,i.prototype.toJSON=function(){
  return{
  type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}
  };
  function x(t,e,r){
  var n="";
  r=Math.min(t.length,r);
  for(var i=e;
  i<r;
  ++i)n+=String.fromCharCode(127&t[i]);
  return n}
  function k(t,e,r){
  var n="";
  r=Math.min(t.length,r);
  for(var i=e;
  i<r;
  ++i)n+=String.fromCharCode(t[i]);
  return n}
  function M(t,e,r){
  var n=t.length;
  (!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);
  for(var i="",o=e;
  o<r;
  ++o)i+=F[t[o]];
  return i}
  function T(t,e,r){
  for(var n=t.slice(e,r),i="",o=0;
  o<n.length-1;
  o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);
  return i}
  function I(t,e,r){
  if(t%1!=0||t<0)throw new RangeError("offset is not uint");
  if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}
  function j(t,e,r,n,o,a){
  if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');
  if(e>o||e<a)throw new RangeError('"value" argument is out of bounds');
  if(r+n>t.length)throw new RangeError("Index out of range")}
  function C(t,e,r,n,i,o){
  if(r+n>t.length)throw new RangeError("Index out of range");
  if(r<0)throw new RangeError("Index out of range")}
  function B(t,e,r,n,i){
  return e=+e,r>>>=0,i||C(t,0,r,4),m(t,e,r,n,23,4),r+4}
  function U(t,e,r,n,i){
  return e=+e,r>>>=0,i||C(t,0,r,8),m(t,e,r,n,52,8),r+8}
  i.prototype.slice=function(t,e){
  var r=this.length;
  (t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);
  var n=this.subarray(t,e);
  return Object.setPrototypeOf(n,i.prototype),n}
  ,i.prototype.readUintLE=i.prototype.readUIntLE=function(t,e,r){
  t>>>=0,e>>>=0,r||I(t,e,this.length);
  for(var n=this[t],i=1,o=0;
  ++o<e&&(i*=256);
  )n+=this[t+o]*i;
  return n}
  ,i.prototype.readUintBE=i.prototype.readUIntBE=function(t,e,r){
  t>>>=0,e>>>=0,r||I(t,e,this.length);
  for(var n=this[t+--e],i=1;
  e>0&&(i*=256);
  )n+=this[t+--e]*i;
  return n}
  ,i.prototype.readUint8=i.prototype.readUInt8=function(t,e){
  return t>>>=0,e||I(t,1,this.length),this[t]}
  ,i.prototype.readUint16LE=i.prototype.readUInt16LE=function(t,e){
  return t>>>=0,e||I(t,2,this.length),this[t]|this[t+1]<<8}
  ,i.prototype.readUint16BE=i.prototype.readUInt16BE=function(t,e){
  return t>>>=0,e||I(t,2,this.length),this[t]<<8|this[t+1]}
  ,i.prototype.readUint32LE=i.prototype.readUInt32LE=function(t,e){
  return t>>>=0,e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]}
  ,i.prototype.readUint32BE=i.prototype.readUInt32BE=function(t,e){
  return t>>>=0,e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])}
  ,i.prototype.readIntLE=function(t,e,r){
  t>>>=0,e>>>=0,r||I(t,e,this.length);
  for(var n=this[t],i=1,o=0;
  ++o<e&&(i*=256);
  )n+=this[t+o]*i;
  return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n}
  ,i.prototype.readIntBE=function(t,e,r){
  t>>>=0,e>>>=0,r||I(t,e,this.length);
  for(var n=e,i=1,o=this[t+--n];
  n>0&&(i*=256);
  )o+=this[t+--n]*i;
  return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o}
  ,i.prototype.readInt8=function(t,e){
  return t>>>=0,e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]}
  ,i.prototype.readInt16LE=function(t,e){
  t>>>=0,e||I(t,2,this.length);
  var r=this[t]|this[t+1]<<8;
  return 32768&r?4294901760|r:r}
  ,i.prototype.readInt16BE=function(t,e){
  t>>>=0,e||I(t,2,this.length);
  var r=this[t+1]|this[t]<<8;
  return 32768&r?4294901760|r:r}
  ,i.prototype.readInt32LE=function(t,e){
  return t>>>=0,e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24}
  ,i.prototype.readInt32BE=function(t,e){
  return t>>>=0,e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]}
  ,i.prototype.readFloatLE=function(t,e){
  return t>>>=0,e||I(t,4,this.length),v(this,t,!0,23,4)}
  ,i.prototype.readFloatBE=function(t,e){
  return t>>>=0,e||I(t,4,this.length),v(this,t,!1,23,4)}
  ,i.prototype.readDoubleLE=function(t,e){
  return t>>>=0,e||I(t,8,this.length),v(this,t,!0,52,8)}
  ,i.prototype.readDoubleBE=function(t,e){
  return t>>>=0,e||I(t,8,this.length),v(this,t,!1,52,8)}
  ,i.prototype.writeUintLE=i.prototype.writeUIntLE=function(t,e,r,n){
  (t=+t,e>>>=0,r>>>=0,n)||j(this,t,e,r,Math.pow(2,8*r)-1,0);
  var i=1,o=0;
  for(this[e]=255&t;
  ++o<r&&(i*=256);
  )this[e+o]=t/i&255;
  return e+r}
  ,i.prototype.writeUintBE=i.prototype.writeUIntBE=function(t,e,r,n){
  (t=+t,e>>>=0,r>>>=0,n)||j(this,t,e,r,Math.pow(2,8*r)-1,0);
  var i=r-1,o=1;
  for(this[e+i]=255&t;
  --i>=0&&(o*=256);
  )this[e+i]=t/o&255;
  return e+r}
  ,i.prototype.writeUint8=i.prototype.writeUInt8=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,1,255,0),this[e]=255&t,e+1}
  ,i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2}
  ,i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2}
  ,i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,
  this[e]=255&t,e+4}
  ,i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,
  e+4}
  ,i.prototype.writeIntLE=function(t,e,r,n){
  if(t=+t,e>>>=0,!n){
  var i=Math.pow(2,8*r-1);
  j(this,t,e,r,i-1,-i)}
  var o=0,a=1,s=0;
  for(this[e]=255&t;
  ++o<r&&(a*=256);
  )t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255;
  return e+r}
  ,i.prototype.writeIntBE=function(t,e,r,n){
  if(t=+t,e>>>=0,!n){
  var i=Math.pow(2,8*r-1);
  j(this,t,e,r,i-1,-i)}
  var o=r-1,a=1,s=0;
  for(this[e+o]=255&t;
  --o>=0&&(a*=256);
  )t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255;
  return e+r}
  ,i.prototype.writeInt8=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1}
  ,i.prototype.writeInt16LE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2}
  ,i.prototype.writeInt16BE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2}
  ,i.prototype.writeInt32LE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,
  this[e+3]=t>>>24,e+4}
  ,i.prototype.writeInt32BE=function(t,e,r){
  return t=+t,e>>>=0,r||j(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,
  this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4}
  ,i.prototype.writeFloatLE=function(t,e,r){
  return B(this,t,e,!0,r)}
  ,i.prototype.writeFloatBE=function(t,e,r){
  return B(this,t,e,!1,r)}
  ,i.prototype.writeDoubleLE=function(t,e,r){
  return U(this,t,e,!0,r)}
  ,i.prototype.writeDoubleBE=function(t,e,r){
  return U(this,t,e,!1,r)}
  ,i.prototype.copy=function(t,e,r,n){
  if(!i.isBuffer(t))throw new TypeError("argument should be a Buffer");
  if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;
  if(0===t.length||0===this.length)return 0;
  if(e<0)throw new RangeError("targetStart out of bounds");
  if(r<0||r>=this.length)throw new RangeError("Index out of range");
  if(n<0)throw new RangeError("sourceEnd out of bounds");
  n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);
  var o=n-r;
  return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,
  this.subarray(r,n),e),o}
  ,i.prototype.fill=function(t,e,r,n){
  if("string"==typeof t){
  if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&
  "string"!=typeof n)throw new TypeError("encoding must be a string");
  if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n);
  if(1===t.length){
  var o=t.charCodeAt(0);
  ("utf8"===n&&o<128||"latin1"===n)&&(t=o)}
  }
  else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));
  if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");
  if(r<=e)return this;
  var a;
  if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(a=e;
  a<r;
  ++a)this[a]=t;
  else{
  var s=i.isBuffer(t)?t:i.from(t,n),u=s.length;
  if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');
  for(a=0;
  a<r-e;
  ++a)this[a+e]=s[a%u]}
  return this};
  var P=/[^+/0-9A-Za-z-_]/g;
  function N(t,e){
  var r;
  e=e||1/0;
  for(var n=t.length,i=null,o=[],a=0;
  a<n;
  ++a){
  if((r=t.charCodeAt(a))>55295&&r<57344){
  if(!i){
  if(r>56319){
  (e-=3)>-1&&o.push(239,191,189);
  continue}
  if(a+1===n){
  (e-=3)>-1&&o.push(239,191,189);
  continue}
  i=r;
  continue}
  if(r<56320){
  (e-=3)>-1&&o.push(239,191,189),i=r;
  continue}
  r=65536+(i-55296<<10|r-56320)}
  else i&&(e-=3)>-1&&o.push(239,191,189);
  if(i=null,r<128){
  if((e-=1)<0)break;
  o.push(r)}
  else if(r<2048){
  if((e-=2)<0)break;
  o.push(r>>6|192,63&r|128)}
  else if(r<65536){
  if((e-=3)<0)break;
  o.push(r>>12|224,r>>6&63|128,63&r|128)}
  else{
  if(!(r<1114112))throw new Error("Invalid code point");
  if((e-=4)<0)break;
  o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}
  }
  return o}
  function D(t){
  return p.toByteArray(function(t){
  if((t=(t=t.split("=")[0]).trim().replace(P,"")).length<2)return"";
  for(;
  t.length%4!=0;
  )t+="=";
  return t}
  (t))}
  function R(t,e,r,n){
  for(var i=0;
  i<n&&!(i+r>=e.length||i>=t.length);
  ++i)e[i+r]=t[i];
  return i}
  function L(t,e){
  return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}
  function q(t){
  return t!=t}
  var F=function(){
  for(var t=new Array(256),e=0;
  e<16;
  ++e)for(var r=16*e,n=0;
  n<16;
  ++n)t[r+n]="0123456789abcdef"[e]+"0123456789abcdef"[n];
  return t}
  ()}
  )),g=y.Buffer;
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */y.SlowBuffer,
  y.INSPECT_MAX_BYTES,y.kMaxLength;
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
  var b=function(t,e){
  return(b=Object.setPrototypeOf||{
  __proto__:[]}
  instanceof Array&&function(t,e){
  t.__proto__=e}
  ||function(t,e){
  for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}
  )(t,e)};
  function w(t,e){
  function r(){
  this.constructor=t}
  b(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}
  var A=function(){
  return(A=Object.assign||function(t){
  for(var e,r=1,n=arguments.length;
  r<n;
  r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);
  return t}
  ).apply(this,arguments)}
  ,_=function(t){
  function e(r){
  var n=t.call(this,r)||this;
  return Object.setPrototypeOf(n,e.prototype),n}
  return w(e,t),Object.defineProperty(e.prototype,"name",{
  get:function(){
  return"BSONError"}
  ,enumerable:!1,configurable:!0}
  ),e}
  (Error),E=function(t){
  function e(r){
  var n=t.call(this,r)||this;
  return Object.setPrototypeOf(n,e.prototype),n}
  return w(e,t),Object.defineProperty(e.prototype,"name",{
  get:function(){
  return"BSONTypeError"}
  ,enumerable:!1,configurable:!0}
  ),e}
  (TypeError);
  function S(t){
  return t&&t.Math==Math&&t}
  function O(){
  return S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&
  self)||S("object"==typeof t&&t)||Function("return this")()}
  var x=function(t){
  var e,r="object"==typeof(e=O()).navigator&&"ReactNative"===e.navigator.product?"BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.":
  "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
  console.warn(r);
  for(var n=g.alloc(t),i=0;
  i<t;
  ++i)n[i]=Math.floor(256*Math.random());
  return n}
  ,k=function(){
  if("undefined"!=typeof window){
  var e=window.crypto||window.msCrypto;
  if(e&&e.getRandomValues)return function(t){
  return e.getRandomValues(g.alloc(t))}
  }
  return void 0!==t&&t.crypto&&t.crypto.getRandomValues?function(e){
  return t.crypto.getRandomValues(g.alloc(e))}
  :x}
  ();
  function M(t){
  return["[object ArrayBuffer]","[object SharedArrayBuffer]"].includes(Object.prototype.toString.call(t))}
  function T(t){
  return"[object Uint8Array]"===Object.prototype.toString.call(t)}
  function I(t){
  return"[object RegExp]"===Object.prototype.toString.call(t)}
  function j(t){
  return C(t)&&"[object Date]"===Object.prototype.toString.call(t)}
  function C(t){
  return"object"==typeof t&&null!==t}
  function B(t,e){
  var r=!1;
  return function(){
  for(var n=[],i=0;
  i<arguments.length;
  i++)n[i]=arguments[i];
  return r||(console.warn(e),r=!0),t.apply(this,n)}
  }
  function U(t){
  if(ArrayBuffer.isView(t))return g.from(t.buffer,t.byteOffset,t.byteLength);
  if(M(t))return g.from(t);
  throw new E("Must use either Buffer or TypedArray")}
  var P=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
  N=function(t){
  return"string"==typeof t&&P.test(t)}
  ,D=function(t){
  if(!N(t))throw new E('UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".');
  var e=t.replace(/-/g,"");
  return g.from(e,"hex")}
  ,R=function(t,e){
  return void 0===e&&(e=!0),e?t.toString("hex",0,4)+"-"+t.toString("hex",4,6)+"-"+t.toString("hex",6,
  8)+"-"+t.toString("hex",8,10)+"-"+t.toString("hex",10,16):t.toString("hex")}
  ,L=(Math.pow(2,63),Math.pow(2,63),Math.pow(2,53)),q=-Math.pow(2,53),F=function(){
  function t(e,r){
  if(!(this instanceof t))return new t(e,r);
  if(!(null==e||"string"==typeof e||ArrayBuffer.isView(e)||e instanceof ArrayBuffer||Array.isArray(e)))throw new E("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
  this.sub_type=null!=r?r:t.BSON_BINARY_SUBTYPE_DEFAULT,null==e?(this.buffer=g.alloc(t.BUFFER_SIZE),
  this.position=0):("string"==typeof e?this.buffer=g.from(e,"binary"):Array.isArray(e)?this.buffer=g.from(e):
  this.buffer=U(e),this.position=this.buffer.byteLength)}
  return t.prototype.put=function(e){
  if("string"==typeof e&&1!==e.length)throw new E("only accepts single character String");
  if("number"!=typeof e&&1!==e.length)throw new E("only accepts single character Uint8Array or Array");
  var r;
  if((r="string"==typeof e?e.charCodeAt(0):"number"==typeof e?e:e[0])<0||r>255)throw new E("only accepts number in a valid unsigned byte range 0-255");
  if(this.buffer.length>this.position)this.buffer[this.position++]=r;
  else{
  var n=g.alloc(t.BUFFER_SIZE+this.buffer.length);
  this.buffer.copy(n,0,0,this.buffer.length),this.buffer=n,this.buffer[this.position++]=r}
  }
  ,t.prototype.write=function(t,e){
  if(e="number"==typeof e?e:this.position,this.buffer.length<e+t.length){
  var r=g.alloc(this.buffer.length+t.length);
  this.buffer.copy(r,0,0,this.buffer.length),this.buffer=r}
  ArrayBuffer.isView(t)?(this.buffer.set(U(t),e),this.position=e+t.byteLength>this.position?e+t.length:
  this.position):"string"==typeof t&&(this.buffer.write(t,e,t.length,"binary"),this.position=e+t.length>this.position?
  e+t.length:this.position)}
  ,t.prototype.read=function(t,e){
  return e=e&&e>0?e:this.position,this.buffer.slice(t,t+e)}
  ,t.prototype.value=function(t){
  return(t=!!t)&&this.buffer.length===this.position?this.buffer:t?this.buffer.slice(0,this.position):
  this.buffer.toString("binary",0,this.position)}
  ,t.prototype.length=function(){
  return this.position}
  ,t.prototype.toJSON=function(){
  return this.buffer.toString("base64")}
  ,t.prototype.toString=function(t){
  return this.buffer.toString(t)}
  ,t.prototype.toExtendedJSON=function(t){
  t=t||{
  };
  var e=this.buffer.toString("base64"),r=Number(this.sub_type).toString(16);
  return t.legacy?{
  $binary:e,$type:1===r.length?"0"+r:r}
  :{
  $binary:{
  base64:e,subType:1===r.length?"0"+r:r}
  }
  }
  ,t.prototype.toUUID=function(){
  if(this.sub_type===t.SUBTYPE_UUID)return new G(this.buffer.slice(0,this.position));
  throw new _('Binary sub_type "'.concat(this.sub_type,'" is not supported for converting to UUID. Only "').concat(t.SUBTYPE_UUID,
  '" is currently supported.'))}
  ,t.fromExtendedJSON=function(e,r){
  var n,i;
  if(r=r||{
  }
  ,"$binary"in e?r.legacy&&"string"==typeof e.$binary&&"$type"in e?(i=e.$type?parseInt(e.$type,16):0,
  n=g.from(e.$binary,"base64")):"string"!=typeof e.$binary&&(i=e.$binary.subType?parseInt(e.$binary.subType,
  16):0,n=g.from(e.$binary.base64,"base64")):"$uuid"in e&&(i=4,n=D(e.$uuid)),!n)throw new E("Unexpected Binary Extended JSON format ".concat(JSON.stringify(e)));
  return 4===i?new G(n):new t(n,i)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  var t=this.value(!0);
  return'new Binary(Buffer.from("'.concat(t.toString("hex"),'", "hex"), ').concat(this.sub_type,")")}
  ,t.BSON_BINARY_SUBTYPE_DEFAULT=0,t.BUFFER_SIZE=256,t.SUBTYPE_DEFAULT=0,t.SUBTYPE_FUNCTION=1,t.SUBTYPE_BYTE_ARRAY=2,
  t.SUBTYPE_UUID_OLD=3,t.SUBTYPE_UUID=4,t.SUBTYPE_MD5=5,t.SUBTYPE_ENCRYPTED=6,t.SUBTYPE_COLUMN=7,t.SUBTYPE_USER_DEFINED=128,
  t}
  ();
  Object.defineProperty(F.prototype,"_bsontype",{
  value:"Binary"}
  );
  var G=function(t){
  function e(r){
  var n,i,o=this;
  if(null==r)n=e.generate();
  else if(r instanceof e)n=g.from(r.buffer),i=r.__id;
  else if(ArrayBuffer.isView(r)&&16===r.byteLength)n=U(r);
  else{
  if("string"!=typeof r)throw new E("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
  n=D(r)}
  return(o=t.call(this,n,4)||this).__id=i,o}
  return w(e,t),Object.defineProperty(e.prototype,"id",{
  get:function(){
  return this.buffer}
  ,set:function(t){
  this.buffer=t,e.cacheHexString&&(this.__id=R(t))}
  ,enumerable:!1,configurable:!0}
  ),e.prototype.toHexString=function(t){
  if(void 0===t&&(t=!0),e.cacheHexString&&this.__id)return this.__id;
  var r=R(this.id,t);
  return e.cacheHexString&&(this.__id=r),r}
  ,e.prototype.toString=function(t){
  return t?this.id.toString(t):this.toHexString()}
  ,e.prototype.toJSON=function(){
  return this.toHexString()}
  ,e.prototype.equals=function(t){
  if(!t)return!1;
  if(t instanceof e)return t.id.equals(this.id);
  try{
  return new e(t).id.equals(this.id)}
  catch(t){
  return!1}
  }
  ,e.prototype.toBinary=function(){
  return new F(this.id,F.SUBTYPE_UUID)}
  ,e.generate=function(){
  var t=k(16);
  return t[6]=15&t[6]|64,t[8]=63&t[8]|128,g.from(t)}
  ,e.isValid=function(t){
  return!!t&&(t instanceof e||("string"==typeof t?N(t):!!T(t)&&(16===t.length&&(64==(240&t[6])&&128==(128&t[8])))))}
  ,e.createFromHexString=function(t){
  return new e(D(t))}
  ,e.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,e.prototype.inspect=function(){
  return'new UUID("'.concat(this.toHexString(),'")')}
  ,e}
  (F),Q=function(){
  function t(e,r){
  if(!(this instanceof t))return new t(e,r);
  this.code=e,this.scope=r}
  return t.prototype.toJSON=function(){
  return{
  code:this.code,scope:this.scope}
  }
  ,t.prototype.toExtendedJSON=function(){
  return this.scope?{
  $code:this.code,$scope:this.scope}
  :{
  $code:this.code}
  }
  ,t.fromExtendedJSON=function(e){
  return new t(e.$code,e.$scope)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  var t=this.toJSON();
  return'new Code("'.concat(String(t.code),'"').concat(t.scope?", ".concat(JSON.stringify(t.scope)):
  "",")")}
  ,t}
  ();
  function z(t){
  return C(t)&&null!=t.$id&&"string"==typeof t.$ref&&(null==t.$db||"string"==typeof t.$db)}
  Object.defineProperty(Q.prototype,"_bsontype",{
  value:"Code"}
  );
  var H=function(){
  function t(e,r,n,i){
  if(!(this instanceof t))return new t(e,r,n,i);
  var o=e.split(".");
  2===o.length&&(n=o.shift(),e=o.shift()),this.collection=e,this.oid=r,this.db=n,this.fields=i||{
  }
  }
  return Object.defineProperty(t.prototype,"namespace",{
  get:function(){
  return this.collection}
  ,set:function(t){
  this.collection=t}
  ,enumerable:!1,configurable:!0}
  ),t.prototype.toJSON=function(){
  var t=Object.assign({
  $ref:this.collection,$id:this.oid}
  ,this.fields);
  return null!=this.db&&(t.$db=this.db),t}
  ,t.prototype.toExtendedJSON=function(t){
  t=t||{
  };
  var e={
  $ref:this.collection,$id:this.oid};
  return t.legacy?e:(this.db&&(e.$db=this.db),e=Object.assign(e,this.fields))}
  ,t.fromExtendedJSON=function(e){
  var r=Object.assign({
  }
  ,e);
  return delete r.$ref,delete r.$id,delete r.$db,new t(e.$ref,e.$id,e.$db,r)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  var t=void 0===this.oid||void 0===this.oid.toString?this.oid:this.oid.toString();
  return'new DBRef("'.concat(this.namespace,'", new ObjectId("').concat(String(t),'")').concat(this.db?
  ', "'.concat(this.db,'"'):"",")")}
  ,t}
  ();
  Object.defineProperty(H.prototype,"_bsontype",{
  value:"DBRef"}
  );
  var V=void 0;
  try{
  V=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,
  1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,
  100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,
  8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,
  132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,
  1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,
  126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,
  4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,
  135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,
  130,34,4,66,32,135,167,36,0,32,4,167,11])),{
  }
  ).exports}
  catch(t){
  }
  var $={
  }
  ,Y={
  }
  ,W=function(){
  function t(e,r,n){
  if(void 0===e&&(e=0),!(this instanceof t))return new t(e,r,n);
  "bigint"==typeof e?Object.assign(this,t.fromBigInt(e,!!r)):"string"==typeof e?Object.assign(this,t.fromString(e,
  !!r)):(this.low=0|e,this.high=0|r,this.unsigned=!!n),Object.defineProperty(this,"__isLong__",{
  value:!0,configurable:!1,writable:!1,enumerable:!1}
  )}
  return t.fromBits=function(e,r,n){
  return new t(e,r,n)}
  ,t.fromInt=function(e,r){
  var n,i,o;
  return r?(o=0<=(e>>>=0)&&e<256)&&(i=Y[e])?i:(n=t.fromBits(e,(0|e)<0?-1:0,!0),o&&(Y[e]=n),n):(o=-128<=(e|=0)&&
  e<128)&&(i=$[e])?i:(n=t.fromBits(e,e<0?-1:0,!1),o&&($[e]=n),n)}
  ,t.fromNumber=function(e,r){
  if(isNaN(e))return r?t.UZERO:t.ZERO;
  if(r){
  if(e<0)return t.UZERO;
  if(e>=0x10000000000000000)return t.MAX_UNSIGNED_VALUE}
  else{
  if(e<=-0x8000000000000000)return t.MIN_VALUE;
  if(e+1>=0x8000000000000000)return t.MAX_VALUE}
  return e<0?t.fromNumber(-e,r).neg():t.fromBits(e%4294967296|0,e/4294967296|0,r)}
  ,t.fromBigInt=function(e,r){
  return t.fromString(e.toString(),r)}
  ,t.fromString=function(e,r,n){
  if(0===e.length)throw Error("empty string");
  if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return t.ZERO;
  if("number"==typeof r?(n=r,r=!1):r=!!r,(n=n||10)<2||36<n)throw RangeError("radix");
  var i;
  if((i=e.indexOf("-"))>0)throw Error("interior hyphen");
  if(0===i)return t.fromString(e.substring(1),r,n).neg();
  for(var o=t.fromNumber(Math.pow(n,8)),a=t.ZERO,s=0;
  s<e.length;
  s+=8){
  var u=Math.min(8,e.length-s),c=parseInt(e.substring(s,s+u),n);
  if(u<8){
  var l=t.fromNumber(Math.pow(n,u));
  a=a.mul(l).add(t.fromNumber(c))}
  else a=(a=a.mul(o)).add(t.fromNumber(c))}
  return a.unsigned=r,a}
  ,t.fromBytes=function(e,r,n){
  return n?t.fromBytesLE(e,r):t.fromBytesBE(e,r)}
  ,t.fromBytesLE=function(e,r){
  return new t(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,r)}
  ,t.fromBytesBE=function(e,r){
  return new t(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],r)}
  ,t.isLong=function(t){
  return C(t)&&!0===t.__isLong__}
  ,t.fromValue=function(e,r){
  return"number"==typeof e?t.fromNumber(e,r):"string"==typeof e?t.fromString(e,r):t.fromBits(e.low,e.high,
  "boolean"==typeof r?r:e.unsigned)}
  ,t.prototype.add=function(e){
  t.isLong(e)||(e=t.fromValue(e));
  var r=this.high>>>16,n=65535&this.high,i=this.low>>>16,o=65535&this.low,a=e.high>>>16,s=65535&e.high,
  u=e.low>>>16,c=0,l=0,f=0,d=0;
  return f+=(d+=o+(65535&e.low))>>>16,d&=65535,l+=(f+=i+u)>>>16,f&=65535,c+=(l+=n+s)>>>16,l&=65535,c+=r+a,
  c&=65535,t.fromBits(f<<16|d,c<<16|l,this.unsigned)}
  ,t.prototype.and=function(e){
  return t.isLong(e)||(e=t.fromValue(e)),t.fromBits(this.low&e.low,this.high&e.high,this.unsigned)}
  ,t.prototype.compare=function(e){
  if(t.isLong(e)||(e=t.fromValue(e)),this.eq(e))return 0;
  var r=this.isNegative(),n=e.isNegative();
  return r&&!n?-1:!r&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?
  -1:1:this.sub(e).isNegative()?-1:1}
  ,t.prototype.comp=function(t){
  return this.compare(t)}
  ,t.prototype.divide=function(e){
  if(t.isLong(e)||(e=t.fromValue(e)),e.isZero())throw Error("division by zero");
  if(V){
  if(!this.unsigned&&-2147483648===this.high&&-1===e.low&&-1===e.high)return this;
  var r=(this.unsigned?V.div_u:V.div_s)(this.low,this.high,e.low,e.high);
  return t.fromBits(r,V.get_high(),this.unsigned)}
  if(this.isZero())return this.unsigned?t.UZERO:t.ZERO;
  var n,i,o;
  if(this.unsigned){
  if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return t.UZERO;
  if(e.gt(this.shru(1)))return t.UONE;
  o=t.UZERO}
  else{
  if(this.eq(t.MIN_VALUE))return e.eq(t.ONE)||e.eq(t.NEG_ONE)?t.MIN_VALUE:e.eq(t.MIN_VALUE)?t.ONE:(n=this.shr(1).div(e).shl(1)).eq(t.ZERO)?
  e.isNegative()?t.ONE:t.NEG_ONE:(i=this.sub(e.mul(n)),o=n.add(i.div(e)));
  if(e.eq(t.MIN_VALUE))return this.unsigned?t.UZERO:t.ZERO;
  if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();
  if(e.isNegative())return this.div(e.neg()).neg();
  o=t.ZERO}
  for(i=this;
  i.gte(e);
  ){
  n=Math.max(1,Math.floor(i.toNumber()/e.toNumber()));
  for(var a=Math.ceil(Math.log(n)/Math.LN2),s=a<=48?1:Math.pow(2,a-48),u=t.fromNumber(n),c=u.mul(e);
  c.isNegative()||c.gt(i);
  )n-=s,c=(u=t.fromNumber(n,this.unsigned)).mul(e);
  u.isZero()&&(u=t.ONE),o=o.add(u),i=i.sub(c)}
  return o}
  ,t.prototype.div=function(t){
  return this.divide(t)}
  ,t.prototype.equals=function(e){
  return t.isLong(e)||(e=t.fromValue(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&
  (this.high===e.high&&this.low===e.low)}
  ,t.prototype.eq=function(t){
  return this.equals(t)}
  ,t.prototype.getHighBits=function(){
  return this.high}
  ,t.prototype.getHighBitsUnsigned=function(){
  return this.high>>>0}
  ,t.prototype.getLowBits=function(){
  return this.low}
  ,t.prototype.getLowBitsUnsigned=function(){
  return this.low>>>0}
  ,t.prototype.getNumBitsAbs=function(){
  if(this.isNegative())return this.eq(t.MIN_VALUE)?64:this.neg().getNumBitsAbs();
  var e,r=0!==this.high?this.high:this.low;
  for(e=31;
  e>0&&0==(r&1<<e);
  e--);
  return 0!==this.high?e+33:e+1}
  ,t.prototype.greaterThan=function(t){
  return this.comp(t)>0}
  ,t.prototype.gt=function(t){
  return this.greaterThan(t)}
  ,t.prototype.greaterThanOrEqual=function(t){
  return this.comp(t)>=0}
  ,t.prototype.gte=function(t){
  return this.greaterThanOrEqual(t)}
  ,t.prototype.ge=function(t){
  return this.greaterThanOrEqual(t)}
  ,t.prototype.isEven=function(){
  return 0==(1&this.low)}
  ,t.prototype.isNegative=function(){
  return!this.unsigned&&this.high<0}
  ,t.prototype.isOdd=function(){
  return 1==(1&this.low)}
  ,t.prototype.isPositive=function(){
  return this.unsigned||this.high>=0}
  ,t.prototype.isZero=function(){
  return 0===this.high&&0===this.low}
  ,t.prototype.lessThan=function(t){
  return this.comp(t)<0}
  ,t.prototype.lt=function(t){
  return this.lessThan(t)}
  ,t.prototype.lessThanOrEqual=function(t){
  return this.comp(t)<=0}
  ,t.prototype.lte=function(t){
  return this.lessThanOrEqual(t)}
  ,t.prototype.modulo=function(e){
  if(t.isLong(e)||(e=t.fromValue(e)),V){
  var r=(this.unsigned?V.rem_u:V.rem_s)(this.low,this.high,e.low,e.high);
  return t.fromBits(r,V.get_high(),this.unsigned)}
  return this.sub(this.div(e).mul(e))}
  ,t.prototype.mod=function(t){
  return this.modulo(t)}
  ,t.prototype.rem=function(t){
  return this.modulo(t)}
  ,t.prototype.multiply=function(e){
  if(this.isZero())return t.ZERO;
  if(t.isLong(e)||(e=t.fromValue(e)),V){
  var r=V.mul(this.low,this.high,e.low,e.high);
  return t.fromBits(r,V.get_high(),this.unsigned)}
  if(e.isZero())return t.ZERO;
  if(this.eq(t.MIN_VALUE))return e.isOdd()?t.MIN_VALUE:t.ZERO;
  if(e.eq(t.MIN_VALUE))return this.isOdd()?t.MIN_VALUE:t.ZERO;
  if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();
  if(e.isNegative())return this.mul(e.neg()).neg();
  if(this.lt(t.TWO_PWR_24)&&e.lt(t.TWO_PWR_24))return t.fromNumber(this.toNumber()*e.toNumber(),this.unsigned);
  var n=this.high>>>16,i=65535&this.high,o=this.low>>>16,a=65535&this.low,s=e.high>>>16,u=65535&e.high,
  c=e.low>>>16,l=65535&e.low,f=0,d=0,h=0,p=0;
  return h+=(p+=a*l)>>>16,p&=65535,d+=(h+=o*l)>>>16,h&=65535,d+=(h+=a*c)>>>16,h&=65535,f+=(d+=i*l)>>>16,
  d&=65535,f+=(d+=o*c)>>>16,d&=65535,f+=(d+=a*u)>>>16,d&=65535,f+=n*l+i*c+o*u+a*s,f&=65535,t.fromBits(h<<16|p,
  f<<16|d,this.unsigned)}
  ,t.prototype.mul=function(t){
  return this.multiply(t)}
  ,t.prototype.negate=function(){
  return!this.unsigned&&this.eq(t.MIN_VALUE)?t.MIN_VALUE:this.not().add(t.ONE)}
  ,t.prototype.neg=function(){
  return this.negate()}
  ,t.prototype.not=function(){
  return t.fromBits(~this.low,~this.high,this.unsigned)}
  ,t.prototype.notEquals=function(t){
  return!this.equals(t)}
  ,t.prototype.neq=function(t){
  return this.notEquals(t)}
  ,t.prototype.ne=function(t){
  return this.notEquals(t)}
  ,t.prototype.or=function(e){
  return t.isLong(e)||(e=t.fromValue(e)),t.fromBits(this.low|e.low,this.high|e.high,this.unsigned)}
  ,t.prototype.shiftLeft=function(e){
  return t.isLong(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?t.fromBits(this.low<<e,this.high<<e|this.low>>>32-e,
  this.unsigned):t.fromBits(0,this.low<<e-32,this.unsigned)}
  ,t.prototype.shl=function(t){
  return this.shiftLeft(t)}
  ,t.prototype.shiftRight=function(e){
  return t.isLong(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?t.fromBits(this.low>>>e|this.high<<32-e,this.high>>e,
  this.unsigned):t.fromBits(this.high>>e-32,this.high>=0?0:-1,this.unsigned)}
  ,t.prototype.shr=function(t){
  return this.shiftRight(t)}
  ,t.prototype.shiftRightUnsigned=function(e){
  if(t.isLong(e)&&(e=e.toInt()),0===(e&=63))return this;
  var r=this.high;
  if(e<32){
  var n=this.low;
  return t.fromBits(n>>>e|r<<32-e,r>>>e,this.unsigned)}
  return 32===e?t.fromBits(r,0,this.unsigned):t.fromBits(r>>>e-32,0,this.unsigned)}
  ,t.prototype.shr_u=function(t){
  return this.shiftRightUnsigned(t)}
  ,t.prototype.shru=function(t){
  return this.shiftRightUnsigned(t)}
  ,t.prototype.subtract=function(e){
  return t.isLong(e)||(e=t.fromValue(e)),this.add(e.neg())}
  ,t.prototype.sub=function(t){
  return this.subtract(t)}
  ,t.prototype.toInt=function(){
  return this.unsigned?this.low>>>0:this.low}
  ,t.prototype.toNumber=function(){
  return this.unsigned?4294967296*(this.high>>>0)+(this.low>>>0):4294967296*this.high+(this.low>>>0)}
  ,t.prototype.toBigInt=function(){
  return BigInt(this.toString())}
  ,t.prototype.toBytes=function(t){
  return t?this.toBytesLE():this.toBytesBE()}
  ,t.prototype.toBytesLE=function(){
  var t=this.high,e=this.low;
  return[255&e,e>>>8&255,e>>>16&255,e>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]}
  ,t.prototype.toBytesBE=function(){
  var t=this.high,e=this.low;
  return[t>>>24,t>>>16&255,t>>>8&255,255&t,e>>>24,e>>>16&255,e>>>8&255,255&e]}
  ,t.prototype.toSigned=function(){
  return this.unsigned?t.fromBits(this.low,this.high,!1):this}
  ,t.prototype.toString=function(e){
  if((e=e||10)<2||36<e)throw RangeError("radix");
  if(this.isZero())return"0";
  if(this.isNegative()){
  if(this.eq(t.MIN_VALUE)){
  var r=t.fromNumber(e),n=this.div(r),i=n.mul(r).sub(this);
  return n.toString(e)+i.toInt().toString(e)}
  return"-"+this.neg().toString(e)}
  for(var o=t.fromNumber(Math.pow(e,6),this.unsigned),a=this,s="";;
  ){
  var u=a.div(o),c=(a.sub(u.mul(o)).toInt()>>>0).toString(e);
  if((a=u).isZero())return c+s;
  for(;
  c.length<6;
  )c="0"+c;
  s=""+c+s}
  }
  ,t.prototype.toUnsigned=function(){
  return this.unsigned?this:t.fromBits(this.low,this.high,!0)}
  ,t.prototype.xor=function(e){
  return t.isLong(e)||(e=t.fromValue(e)),t.fromBits(this.low^e.low,this.high^e.high,this.unsigned)}
  ,t.prototype.eqz=function(){
  return this.isZero()}
  ,t.prototype.le=function(t){
  return this.lessThanOrEqual(t)}
  ,t.prototype.toExtendedJSON=function(t){
  return t&&t.relaxed?this.toNumber():{
  $numberLong:this.toString()}
  }
  ,t.fromExtendedJSON=function(e,r){
  var n=t.fromString(e.$numberLong);
  return r&&r.relaxed?n.toNumber():n}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  return'new Long("'.concat(this.toString(),'"').concat(this.unsigned?", true":"",")")}
  ,t.TWO_PWR_24=t.fromInt(1<<24),t.MAX_UNSIGNED_VALUE=t.fromBits(-1,-1,!0),t.ZERO=t.fromInt(0),t.UZERO=t.fromInt(0,
  !0),t.ONE=t.fromInt(1),t.UONE=t.fromInt(1,!0),t.NEG_ONE=t.fromInt(-1),t.MAX_VALUE=t.fromBits(-1,2147483647,
  !1),t.MIN_VALUE=t.fromBits(0,-2147483648,!1),t}
  ();
  Object.defineProperty(W.prototype,"__isLong__",{
  value:!0}
  ),Object.defineProperty(W.prototype,"_bsontype",{
  value:"Long"}
  );
  var X=/^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,K=/^(\+|-)?(Infinity|inf)$/i,J=/^(\+|-)?NaN$/i,
  Z=[124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),tt=[248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),et=[120,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),rt=/^([-+])?(\d+)?$/;
  function nt(t){
  return!isNaN(parseInt(t,10))}
  function it(t){
  var e=W.fromNumber(1e9),r=W.fromNumber(0);
  if(!(t.parts[0]||t.parts[1]||t.parts[2]||t.parts[3]))return{
  quotient:t,rem:r};
  for(var n=0;
  n<=3;
  n++)r=(r=r.shiftLeft(32)).add(new W(t.parts[n],0)),t.parts[n]=r.div(e).low,r=r.modulo(e);
  return{
  quotient:t,rem:r}
  }
  function ot(t,e){
  throw new E('"'.concat(t,'" is not a valid Decimal128 string - ').concat(e))}
  var at=function(){
  function t(e){
  if(!(this instanceof t))return new t(e);
  if("string"==typeof e)this.bytes=t.fromString(e).bytes;
  else{
  if(!T(e))throw new E("Decimal128 must take a Buffer or string");
  if(16!==e.byteLength)throw new E("Decimal128 must take a Buffer of 16 bytes");
  this.bytes=e}
  }
  return t.fromString=function(e){
  var r,n=!1,i=!1,o=!1,a=0,s=0,u=0,c=0,l=0,f=[0],d=0,h=0,p=0,v=0,m=0,y=0,b=new W(0,0),w=new W(0,0),A=0;
  if(e.length>=7e3)throw new E(e+" not a valid Decimal128 string");
  var _=e.match(X),S=e.match(K),O=e.match(J);
  if(!_&&!S&&!O||0===e.length)throw new E(e+" not a valid Decimal128 string");
  if(_){
  var x=_[2],k=_[4],M=_[5],T=_[6];
  k&&void 0===T&&ot(e,"missing exponent power"),k&&void 0===x&&ot(e,"missing exponent base"),void 0===k&&
  (M||T)&&ot(e,"missing e before exponent")}
  if("+"!==e[A]&&"-"!==e[A]||(n="-"===e[A++]),!nt(e[A])&&"."!==e[A]){
  if("i"===e[A]||"I"===e[A])return new t(g.from(n?tt:et));
  if("N"===e[A])return new t(g.from(Z))}
  for(;
  nt(e[A])||"."===e[A];
  )"."!==e[A]?(d<34&&("0"!==e[A]||o)&&(o||(l=s),o=!0,f[h++]=parseInt(e[A],10),d+=1),o&&(u+=1),i&&(c+=1),
  s+=1,A+=1):(i&&ot(e,"contains multiple periods"),i=!0,A+=1);
  if(i&&!s)throw new E(e+" not a valid Decimal128 string");
  if("e"===e[A]||"E"===e[A]){
  var I=e.substr(++A).match(rt);
  if(!I||!I[2])return new t(g.from(Z));
  m=parseInt(I[0],10),A+=I[0].length}
  if(e[A])return new t(g.from(Z));
  if(p=0,d){
  if(v=d-1,1!==(a=u))for(;
  0===f[l+a-1];
  )a-=1}
  else p=0,v=0,f[0]=0,u=1,d=1,a=0;
  for(m<=c&&c-m>16384?m=-6176:m-=c;
  m>6111;
  ){
  if((v+=1)-p>34){
  if(f.join("").match(/^0+$/)){
  m=6111;
  break}
  ot(e,"overflow")}
  m-=1}
  for(;
  m<-6176||d<u;
  ){
  if(0===v&&a<d){
  m=-6176,a=0;
  break}
  if(d<u?u-=1:v-=1,m<6111)m+=1;
  else{
  if(f.join("").match(/^0+$/)){
  m=6111;
  break}
  ot(e,"overflow")}
  }
  if(v-p+1<a){
  var j=s;
  i&&(l+=1,j+=1),n&&(l+=1,j+=1);
  var C=parseInt(e[l+v+1],10),B=0;
  if(C>=5&&(B=1,5===C))for(B=f[v]%2==1?1:0,y=l+v+2;
  y<j;
  y++)if(parseInt(e[y],10)){
  B=1;
  break}
  if(B)for(var U=v;
  U>=0;
  U--)if(++f[U]>9&&(f[U]=0,0===U)){
  if(!(m<6111))return new t(g.from(n?tt:et));
  m+=1,f[U]=1}
  }
  if(b=W.fromNumber(0),w=W.fromNumber(0),0===a)b=W.fromNumber(0),w=W.fromNumber(0);
  else if(v-p<17){
  U=p;
  for(w=W.fromNumber(f[U++]),b=new W(0,0);
  U<=v;
  U++)w=(w=w.multiply(W.fromNumber(10))).add(W.fromNumber(f[U]))}
  else{
  U=p;
  for(b=W.fromNumber(f[U++]);
  U<=v-17;
  U++)b=(b=b.multiply(W.fromNumber(10))).add(W.fromNumber(f[U]));
  for(w=W.fromNumber(f[U++]);
  U<=v;
  U++)w=(w=w.multiply(W.fromNumber(10))).add(W.fromNumber(f[U]))}
  var P,N,D,R,L=function(t,e){
  if(!t&&!e)return{
  high:W.fromNumber(0),low:W.fromNumber(0)};
  var r=t.shiftRightUnsigned(32),n=new W(t.getLowBits(),0),i=e.shiftRightUnsigned(32),o=new W(e.getLowBits(),
  0),a=r.multiply(i),s=r.multiply(o),u=n.multiply(i),c=n.multiply(o);
  return a=a.add(s.shiftRightUnsigned(32)),s=new W(s.getLowBits(),0).add(u).add(c.shiftRightUnsigned(32)),
  {
  high:a=a.add(s.shiftRightUnsigned(32)),low:c=s.shiftLeft(32).add(new W(c.getLowBits(),0))}
  }
  (b,W.fromString("100000000000000000"));
  L.low=L.low.add(w),P=L.low,N=w,D=P.high>>>0,R=N.high>>>0,(D<R||D===R&&P.low>>>0<N.low>>>0)&&(L.high=L.high.add(W.fromNumber(1))),
  r=m+6176;
  var q={
  low:W.fromNumber(0),high:W.fromNumber(0)};
  L.high.shiftRightUnsigned(49).and(W.fromNumber(1)).equals(W.fromNumber(1))?(q.high=q.high.or(W.fromNumber(3).shiftLeft(61)),
  q.high=q.high.or(W.fromNumber(r).and(W.fromNumber(16383).shiftLeft(47))),q.high=q.high.or(L.high.and(W.fromNumber(0x7fffffffffff)))):
  (q.high=q.high.or(W.fromNumber(16383&r).shiftLeft(49)),q.high=q.high.or(L.high.and(W.fromNumber(562949953421311)))),
  q.low=L.low,n&&(q.high=q.high.or(W.fromString("9223372036854775808")));
  var F=g.alloc(16);
  return A=0,F[A++]=255&q.low.low,F[A++]=q.low.low>>8&255,F[A++]=q.low.low>>16&255,F[A++]=q.low.low>>24&255,
  F[A++]=255&q.low.high,F[A++]=q.low.high>>8&255,F[A++]=q.low.high>>16&255,F[A++]=q.low.high>>24&255,
  F[A++]=255&q.high.low,F[A++]=q.high.low>>8&255,F[A++]=q.high.low>>16&255,F[A++]=q.high.low>>24&255,
  F[A++]=255&q.high.high,F[A++]=q.high.high>>8&255,F[A++]=q.high.high>>16&255,F[A++]=q.high.high>>24&255,
  new t(F)}
  ,t.prototype.toString=function(){
  for(var t,e=0,r=new Array(36),n=0;
  n<r.length;
  n++)r[n]=0;
  var i,o,a,s=0,u=!1,c={
  parts:[0,0,0,0]}
  ,l=[];
  s=0;
  var f=this.bytes,d=f[s++]|f[s++]<<8|f[s++]<<16|f[s++]<<24,h=f[s++]|f[s++]<<8|f[s++]<<16|f[s++]<<24,
  p=f[s++]|f[s++]<<8|f[s++]<<16|f[s++]<<24,v=f[s++]|f[s++]<<8|f[s++]<<16|f[s++]<<24;
  s=0,{
  low:new W(d,h),high:new W(p,v)}
  .high.lessThan(W.ZERO)&&l.push("-");
  var m=v>>26&31;
  if(m>>3==3){
  if(30===m)return l.join("")+"Infinity";
  if(31===m)return"NaN";
  t=v>>15&16383,i=8+(v>>14&1)}
  else i=v>>14&7,t=v>>17&16383;
  var y=t-6176;
  if(c.parts[0]=(16383&v)+((15&i)<<14),c.parts[1]=p,c.parts[2]=h,c.parts[3]=d,0===c.parts[0]&&0===c.parts[1]&&
  0===c.parts[2]&&0===c.parts[3])u=!0;
  else for(a=3;
  a>=0;
  a--){
  var g=0,b=it(c);
  if(c=b.quotient,g=b.rem.low)for(o=8;
  o>=0;
  o--)r[9*a+o]=g%10,g=Math.floor(g/10)}
  if(u)e=1,r[s]=0;
  else for(e=36;
  !r[s];
  )e-=1,s+=1;
  var w=e-1+y;
  if(w>=34||w<=-7||y>0){
  if(e>34)return l.push("".concat(0)),y>0?l.push("E+".concat(y)):y<0&&l.push("E".concat(y)),l.join("");
  l.push("".concat(r[s++])),(e-=1)&&l.push(".");
  for(n=0;
  n<e;
  n++)l.push("".concat(r[s++]));
  l.push("E"),w>0?l.push("+".concat(w)):l.push("".concat(w))}
  else if(y>=0)for(n=0;
  n<e;
  n++)l.push("".concat(r[s++]));
  else{
  var A=e+y;
  if(A>0)for(n=0;
  n<A;
  n++)l.push("".concat(r[s++]));
  else l.push("0");
  for(l.push(".");
  A++<0;
  )l.push("0");
  for(n=0;
  n<e-Math.max(A-1,0);
  n++)l.push("".concat(r[s++]))}
  return l.join("")}
  ,t.prototype.toJSON=function(){
  return{
  $numberDecimal:this.toString()}
  }
  ,t.prototype.toExtendedJSON=function(){
  return{
  $numberDecimal:this.toString()}
  }
  ,t.fromExtendedJSON=function(e){
  return t.fromString(e.$numberDecimal)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  return'new Decimal128("'.concat(this.toString(),'")')}
  ,t}
  ();
  Object.defineProperty(at.prototype,"_bsontype",{
  value:"Decimal128"}
  );
  var st=function(){
  function t(e){
  if(!(this instanceof t))return new t(e);
  e instanceof Number&&(e=e.valueOf()),this.value=+e}
  return t.prototype.valueOf=function(){
  return this.value}
  ,t.prototype.toJSON=function(){
  return this.value}
  ,t.prototype.toString=function(t){
  return this.value.toString(t)}
  ,t.prototype.toExtendedJSON=function(t){
  return t&&(t.legacy||t.relaxed&&isFinite(this.value))?this.value:Object.is(Math.sign(this.value),-0)?
  {
  $numberDouble:"-".concat(this.value.toFixed(1))}
  :{
  $numberDouble:Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}
  }
  ,t.fromExtendedJSON=function(e,r){
  var n=parseFloat(e.$numberDouble);
  return r&&r.relaxed?n:new t(n)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  var t=this.toExtendedJSON();
  return"new Double(".concat(t.$numberDouble,")")}
  ,t}
  ();
  Object.defineProperty(st.prototype,"_bsontype",{
  value:"Double"}
  );
  var ut=function(){
  function t(e){
  if(!(this instanceof t))return new t(e);
  e instanceof Number&&(e=e.valueOf()),this.value=0|+e}
  return t.prototype.valueOf=function(){
  return this.value}
  ,t.prototype.toString=function(t){
  return this.value.toString(t)}
  ,t.prototype.toJSON=function(){
  return this.value}
  ,t.prototype.toExtendedJSON=function(t){
  return t&&(t.relaxed||t.legacy)?this.value:{
  $numberInt:this.value.toString()}
  }
  ,t.fromExtendedJSON=function(e,r){
  return r&&r.relaxed?parseInt(e.$numberInt,10):new t(e.$numberInt)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  return"new Int32(".concat(this.valueOf(),")")}
  ,t}
  ();
  Object.defineProperty(ut.prototype,"_bsontype",{
  value:"Int32"}
  );
  var ct=function(){
  function t(){
  if(!(this instanceof t))return new t}
  return t.prototype.toExtendedJSON=function(){
  return{
  $maxKey:1}
  }
  ,t.fromExtendedJSON=function(){
  return new t}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  return"new MaxKey()"}
  ,t}
  ();
  Object.defineProperty(ct.prototype,"_bsontype",{
  value:"MaxKey"}
  );
  var lt=function(){
  function t(){
  if(!(this instanceof t))return new t}
  return t.prototype.toExtendedJSON=function(){
  return{
  $minKey:1}
  }
  ,t.fromExtendedJSON=function(){
  return new t}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  return"new MinKey()"}
  ,t}
  ();
  Object.defineProperty(lt.prototype,"_bsontype",{
  value:"MinKey"}
  );
  var ft=new RegExp("^[0-9a-fA-F]{24}$"),dt=null,ht=Symbol("id"),pt=function(){
  function t(e){
  if(!(this instanceof t))return new t(e);
  var r;
  if("object"==typeof e&&e&&"id"in e){
  if("string"!=typeof e.id&&!ArrayBuffer.isView(e.id))throw new E("Argument passed in must have an id that is of type string or Buffer");
  r="toHexString"in e&&"function"==typeof e.toHexString?g.from(e.toHexString(),"hex"):e.id}
  else r=e;
  if(null==r||"number"==typeof r)this[ht]=t.generate("number"==typeof r?r:void 0);
  else if(ArrayBuffer.isView(r)&&12===r.byteLength)this[ht]=r instanceof g?r:U(r);
  else{
  if("string"!=typeof r)throw new E("Argument passed in does not match the accepted types");
  if(12===r.length){
  var n=g.from(r);
  if(12!==n.byteLength)throw new E("Argument passed in must be a string of 12 bytes");
  this[ht]=n}
  else{
  if(24!==r.length||!ft.test(r))throw new E("Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer");
  this[ht]=g.from(r,"hex")}
  }
  t.cacheHexString&&(this.__id=this.id.toString("hex"))}
  return Object.defineProperty(t.prototype,"id",{
  get:function(){
  return this[ht]}
  ,set:function(e){
  this[ht]=e,t.cacheHexString&&(this.__id=e.toString("hex"))}
  ,enumerable:!1,configurable:!0}
  ),Object.defineProperty(t.prototype,"generationTime",{
  get:function(){
  return this.id.readInt32BE(0)}
  ,set:function(t){
  this.id.writeUInt32BE(t,0)}
  ,enumerable:!1,configurable:!0}
  ),t.prototype.toHexString=function(){
  if(t.cacheHexString&&this.__id)return this.__id;
  var e=this.id.toString("hex");
  return t.cacheHexString&&!this.__id&&(this.__id=e),e}
  ,t.getInc=function(){
  return t.index=(t.index+1)%16777215}
  ,t.generate=function(e){
  "number"!=typeof e&&(e=Math.floor(Date.now()/1e3));
  var r=t.getInc(),n=g.alloc(12);
  return n.writeUInt32BE(e,0),null===dt&&(dt=k(5)),n[4]=dt[0],n[5]=dt[1],n[6]=dt[2],n[7]=dt[3],n[8]=dt[4],
  n[11]=255&r,n[10]=r>>8&255,n[9]=r>>16&255,n}
  ,t.prototype.toString=function(t){
  return t?this.id.toString(t):this.toHexString()}
  ,t.prototype.toJSON=function(){
  return this.toHexString()}
  ,t.prototype.equals=function(e){
  if(null==e)return!1;
  if(e instanceof t)return this[ht][11]===e[ht][11]&&this[ht].equals(e[ht]);
  if("string"==typeof e&&t.isValid(e)&&12===e.length&&T(this.id))return e===g.prototype.toString.call(this.id,
  "latin1");
  if("string"==typeof e&&t.isValid(e)&&24===e.length)return e.toLowerCase()===this.toHexString();
  if("string"==typeof e&&t.isValid(e)&&12===e.length)return g.from(e).equals(this.id);
  if("object"==typeof e&&"toHexString"in e&&"function"==typeof e.toHexString){
  var r=e.toHexString(),n=this.toHexString().toLowerCase();
  return"string"==typeof r&&r.toLowerCase()===n}
  return!1}
  ,t.prototype.getTimestamp=function(){
  var t=new Date,e=this.id.readUInt32BE(0);
  return t.setTime(1e3*Math.floor(e)),t}
  ,t.createPk=function(){
  return new t}
  ,t.createFromTime=function(e){
  var r=g.from([0,0,0,0,0,0,0,0,0,0,0,0]);
  return r.writeUInt32BE(e,0),new t(r)}
  ,t.createFromHexString=function(e){
  if(void 0===e||null!=e&&24!==e.length)throw new E("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
  return new t(g.from(e,"hex"))}
  ,t.isValid=function(e){
  if(null==e)return!1;
  try{
  return new t(e),!0}
  catch(t){
  return!1}
  }
  ,t.prototype.toExtendedJSON=function(){
  return this.toHexString?{
  $oid:this.toHexString()}
  :{
  $oid:this.toString("hex")}
  }
  ,t.fromExtendedJSON=function(e){
  return new t(e.$oid)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t.prototype.inspect=function(){
  return'new ObjectId("'.concat(this.toHexString(),'")')}
  ,t.index=Math.floor(16777215*Math.random()),t}
  ();
  Object.defineProperty(pt.prototype,"generate",{
  value:B((function(t){
  return pt.generate(t)}
  ),"Please use the static `ObjectId.generate(time)` instead")}
  ),Object.defineProperty(pt.prototype,"getInc",{
  value:B((function(){
  return pt.getInc()}
  ),"Please use the static `ObjectId.getInc()` instead")}
  ),Object.defineProperty(pt.prototype,"get_inc",{
  value:B((function(){
  return pt.getInc()}
  ),"Please use the static `ObjectId.getInc()` instead")}
  ),Object.defineProperty(pt,"get_inc",{
  value:B((function(){
  return pt.getInc()}
  ),"Please use the static `ObjectId.getInc()` instead")}
  ),Object.defineProperty(pt.prototype,"_bsontype",{
  value:"ObjectID"}
  );
  var vt=function(){
  function t(e,r){
  if(!(this instanceof t))return new t(e,r);
  if(this.pattern=e,this.options=(null!=r?r:"").split("").sort().join(""),-1!==this.pattern.indexOf("\0"))throw new _("BSON Regex patterns cannot contain null bytes, found: ".concat(JSON.stringify(this.pattern)));
  if(-1!==this.options.indexOf("\0"))throw new _("BSON Regex options cannot contain null bytes, found: ".concat(JSON.stringify(this.options)));
  for(var n=0;
  n<this.options.length;
  n++)if("i"!==this.options[n]&&"m"!==this.options[n]&&"x"!==this.options[n]&&"l"!==this.options[n]&&
  "s"!==this.options[n]&&"u"!==this.options[n])throw new _("The regular expression option [".concat(this.options[n],
  "] is not supported"))}
  return t.parseOptions=function(t){
  return t?t.split("").sort().join(""):""}
  ,t.prototype.toExtendedJSON=function(t){
  return(t=t||{
  }
  ).legacy?{
  $regex:this.pattern,$options:this.options}
  :{
  $regularExpression:{
  pattern:this.pattern,options:this.options}
  }
  }
  ,t.fromExtendedJSON=function(e){
  if("$regex"in e){
  if("string"==typeof e.$regex)return new t(e.$regex,t.parseOptions(e.$options));
  if("BSONRegExp"===e.$regex._bsontype)return e}
  if("$regularExpression"in e)return new t(e.$regularExpression.pattern,t.parseOptions(e.$regularExpression.options));
  throw new E("Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(e)))}
  ,t}
  ();
  Object.defineProperty(vt.prototype,"_bsontype",{
  value:"BSONRegExp"}
  );
  var mt=function(){
  function t(e){
  if(!(this instanceof t))return new t(e);
  this.value=e}
  return t.prototype.valueOf=function(){
  return this.value}
  ,t.prototype.toString=function(){
  return this.value}
  ,t.prototype.inspect=function(){
  return'new BSONSymbol("'.concat(this.value,'")')}
  ,t.prototype.toJSON=function(){
  return this.value}
  ,t.prototype.toExtendedJSON=function(){
  return{
  $symbol:this.value}
  }
  ,t.fromExtendedJSON=function(e){
  return new t(e.$symbol)}
  ,t.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,t}
  ();
  Object.defineProperty(mt.prototype,"_bsontype",{
  value:"Symbol"}
  );
  var yt=function(t){
  function e(r,n){
  var i=this;
  return i instanceof e?(i=W.isLong(r)?t.call(this,r.low,r.high,!0)||this:C(r)&&void 0!==r.t&&void 0!==r.i?
  t.call(this,r.i,r.t,!0)||this:t.call(this,r,n,!0)||this,Object.defineProperty(i,"_bsontype",{
  value:"Timestamp",writable:!1,configurable:!1,enumerable:!1}
  ),i):new e(r,n)}
  return w(e,t),e.prototype.toJSON=function(){
  return{
  $timestamp:this.toString()}
  }
  ,e.fromInt=function(t){
  return new e(W.fromInt(t,!0))}
  ,e.fromNumber=function(t){
  return new e(W.fromNumber(t,!0))}
  ,e.fromBits=function(t,r){
  return new e(t,r)}
  ,e.fromString=function(t,r){
  return new e(W.fromString(t,!0,r))}
  ,e.prototype.toExtendedJSON=function(){
  return{
  $timestamp:{
  t:this.high>>>0,i:this.low>>>0}
  }
  }
  ,e.fromExtendedJSON=function(t){
  return new e(t.$timestamp)}
  ,e.prototype[Symbol.for("nodejs.util.inspect.custom")]=function(){
  return this.inspect()}
  ,e.prototype.inspect=function(){
  return"new Timestamp({ t: ".concat(this.getHighBits(),", i: ").concat(this.getLowBits()," })")}
  ,e.MAX_VALUE=W.MAX_UNSIGNED_VALUE,e}
  (W);
  function gt(t){
  return C(t)&&Reflect.has(t,"_bsontype")&&"string"==typeof t._bsontype}
  var bt={
  $oid:pt,$binary:F,$uuid:F,$symbol:mt,$numberInt:ut,$numberDecimal:at,$numberDouble:st,$numberLong:
  W,$minKey:lt,$maxKey:ct,$regex:vt,$regularExpression:vt,$timestamp:yt};
  function wt(t){
  var e=t.toISOString();
  return 0!==t.getUTCMilliseconds()?e:e.slice(0,-5)+"Z"}
  function At(t,e){
  if(("object"==typeof t||"function"==typeof t)&&null!==t){
  var r=e.seenObjects.findIndex((function(e){
  return e.obj===t}
  ));
  if(-1!==r){
  var n=e.seenObjects.map((function(t){
  return t.propertyName}
  )),i=n.slice(0,r).map((function(t){
  return"".concat(t," -> ")}
  )).join(""),o=n[r],a=" -> "+n.slice(r+1,n.length-1).map((function(t){
  return"".concat(t," -> ")}
  )).join(""),s=n[n.length-1],u=" ".repeat(i.length+o.length/2),c="-".repeat(a.length+(o.length+s.length)/2-1);
  throw new E("Converting circular structure to EJSON:\n"+"    ".concat(i).concat(o).concat(a).concat(s,
  "\n")+"    ".concat(u,"\\").concat(c,"/"))}
  e.seenObjects[e.seenObjects.length-1].obj=t}
  if(Array.isArray(t))return function(t,e){
  return t.map((function(t,r){
  e.seenObjects.push({
  propertyName:"index ".concat(r),obj:null}
  );
  try{
  return At(t,e)}
  finally{
  e.seenObjects.pop()}
  }
  ))}
  (t,e);
  if(void 0===t)return null;
  if(t instanceof Date||j(t)){
  var l=t.getTime(),f=l>-1&&l<2534023188e5;
  return e.legacy?e.relaxed&&f?{
  $date:t.getTime()}
  :{
  $date:wt(t)}
  :e.relaxed&&f?{
  $date:wt(t)}
  :{
  $date:{
  $numberLong:t.getTime().toString()}
  }
  }
  if(!("number"!=typeof t||e.relaxed&&isFinite(t))){
  if(Math.floor(t)===t){
  var d=t>=-0x8000000000000000&&t<=0x8000000000000000;
  if(t>=-2147483648&&t<=2147483647)return{
  $numberInt:t.toString()};
  if(d)return{
  $numberLong:t.toString()}
  }
  return{
  $numberDouble:t.toString()}
  }
  if(t instanceof RegExp||I(t)){
  var h=t.flags;
  if(void 0===h){
  var p=t.toString().match(/[gimuy]*$/);
  p&&(h=p[0])}
  return new vt(t.source,h).toExtendedJSON(e)}
  return null!=t&&"object"==typeof t?function(t,e){
  if(null==t||"object"!=typeof t)throw new _("not an object instance");
  var r=t._bsontype;
  if(void 0===r){
  var n={
  };
  for(var i in t){
  e.seenObjects.push({
  propertyName:i,obj:null}
  );
  try{
  var o=At(t[i],e);
  "__proto__"===i?Object.defineProperty(n,i,{
  value:o,writable:!0,enumerable:!0,configurable:!0}
  ):n[i]=o}
  finally{
  e.seenObjects.pop()}
  }
  return n}
  if(gt(t)){
  var a=t;
  if("function"!=typeof a.toExtendedJSON){
  var s=Et[t._bsontype];
  if(!s)throw new E("Unrecognized or invalid _bsontype: "+t._bsontype);
  a=s(a)}
  return"Code"===r&&a.scope?a=new Q(a.code,At(a.scope,e)):"DBRef"===r&&a.oid&&(a=new H(At(a.collection,
  e),At(a.oid,e),At(a.db,e),At(a.fields,e))),a.toExtendedJSON(e)}
  throw new _("_bsontype must be a string, but was: "+typeof r)}
  (t,e):t}
  var _t,Et={
  Binary:function(t){
  return new F(t.value(),t.sub_type)}
  ,Code:function(t){
  return new Q(t.code,t.scope)}
  ,DBRef:function(t){
  return new H(t.collection||t.namespace,t.oid,t.db,t.fields)}
  ,Decimal128:function(t){
  return new at(t.bytes)}
  ,Double:function(t){
  return new st(t.value)}
  ,Int32:function(t){
  return new ut(t.value)}
  ,Long:function(t){
  return W.fromBits(null!=t.low?t.low:t.low_,null!=t.low?t.high:t.high_,null!=t.low?t.unsigned:t.unsigned_)}
  ,MaxKey:function(){
  return new ct}
  ,MinKey:function(){
  return new lt}
  ,ObjectID:function(t){
  return new pt(t)}
  ,ObjectId:function(t){
  return new pt(t)}
  ,BSONRegExp:function(t){
  return new vt(t.pattern,t.options)}
  ,Symbol:function(t){
  return new mt(t.value)}
  ,Timestamp:function(t){
  return yt.fromBits(t.low,t.high)}
  };
  !function(t){
  function e(t,e){
  var r=Object.assign({
  }
  ,{
  relaxed:!0,legacy:!1}
  ,e);
  return"boolean"==typeof r.relaxed&&(r.strict=!r.relaxed),"boolean"==typeof r.strict&&(r.relaxed=!r.strict),
  JSON.parse(t,(function(t,e){
  if(-1!==t.indexOf("\0"))throw new _("BSON Document field names cannot contain null bytes, found: ".concat(JSON.stringify(t)));
  return function t(e,r){
  if(void 0===r&&(r={
  }
  ),"number"==typeof e){
  if(r.relaxed||r.legacy)return e;
  if(Math.floor(e)===e){
  if(e>=-2147483648&&e<=2147483647)return new ut(e);
  if(e>=-0x8000000000000000&&e<=0x8000000000000000)return W.fromNumber(e)}
  return new st(e)}
  if(null==e||"object"!=typeof e)return e;
  if(e.$undefined)return null;
  for(var n=Object.keys(e).filter((function(t){
  return t.startsWith("$")&&null!=e[t]}
  )),i=0;
  i<n.length;
  i++){
  var o=bt[n[i]];
  if(o)return o.fromExtendedJSON(e,r)}
  if(null!=e.$date){
  var a=e.$date,s=new Date;
  return r.legacy?"number"==typeof a?s.setTime(a):"string"==typeof a&&s.setTime(Date.parse(a)):"string"==typeof a?
  s.setTime(Date.parse(a)):W.isLong(a)?s.setTime(a.toNumber()):"number"==typeof a&&r.relaxed&&s.setTime(a),
  s}
  if(null!=e.$code){
  var u=Object.assign({
  }
  ,e);
  return e.$scope&&(u.$scope=t(e.$scope)),Q.fromExtendedJSON(e)}
  if(z(e)||e.$dbPointer){
  var c=e.$ref?e:e.$dbPointer;
  if(c instanceof H)return c;
  var l=Object.keys(c).filter((function(t){
  return t.startsWith("$")}
  )),f=!0;
  if(l.forEach((function(t){
  -1===["$ref","$id","$db"].indexOf(t)&&(f=!1)}
  )),f)return H.fromExtendedJSON(c)}
  return e}
  (e,r)}
  ))}
  function r(t,e,r,n){
  null!=r&&"object"==typeof r&&(n=r,r=0),null==e||"object"!=typeof e||Array.isArray(e)||(n=e,e=void 0,
  r=0);
  var i=At(t,Object.assign({
  relaxed:!0,legacy:!1}
  ,n,{
  seenObjects:[{
  propertyName:"(root)",obj:null}
  ]}
  ));
  return JSON.stringify(i,e,r)}
  t.parse=e,t.stringify=r,t.serialize=function(t,e){
  return e=e||{
  }
  ,JSON.parse(r(t,e))}
  ,t.deserialize=function(t,r){
  return r=r||{
  }
  ,e(JSON.stringify(t),r)}
  }
  (_t||(_t={
  }
  ));
  var St=O();
  St.Map?St.Map:function(){
  function t(t){
  void 0===t&&(t=[]),this._keys=[],this._values={
  };
  for(var e=0;
  e<t.length;
  e++)if(null!=t[e]){
  var r=t[e],n=r[0],i=r[1];
  this._keys.push(n),this._values[n]={
  v:i,i:this._keys.length-1}
  }
  }
  t.prototype.clear=function(){
  this._keys=[],this._values={
  }
  }
  ,t.prototype.delete=function(t){
  var e=this._values[t];
  return null!=e&&(delete this._values[t],this._keys.splice(e.i,1),!0)}
  ,t.prototype.entries=function(){
  var t=this,e=0;
  return{
  next:function(){
  var r=t._keys[e++];
  return{
  value:void 0!==r?[r,t._values[r].v]:void 0,done:void 0===r}
  }
  }
  }
  ,t.prototype.forEach=function(t,e){
  e=e||this;
  for(var r=0;
  r<this._keys.length;
  r++){
  var n=this._keys[r];
  t.call(e,this._values[n].v,n,e)}
  }
  ,t.prototype.get=function(t){
  return this._values[t]?this._values[t].v:void 0}
  ,t.prototype.has=function(t){
  return null!=this._values[t]}
  ,t.prototype.keys=function(){
  var t=this,e=0;
  return{
  next:function(){
  var r=t._keys[e++];
  return{
  value:void 0!==r?r:void 0,done:void 0===r}
  }
  }
  }
  ,t.prototype.set=function(t,e){
  return this._values[t]?(this._values[t].v=e,this):(this._keys.push(t),this._values[t]={
  v:e,i:this._keys.length-1}
  ,this)}
  ,t.prototype.values=function(){
  var t=this,e=0;
  return{
  next:function(){
  var r=t._keys[e++];
  return{
  value:void 0!==r?t._values[r].v:void 0,done:void 0===r}
  }
  }
  }
  ,Object.defineProperty(t.prototype,"size",{
  get:function(){
  return this._keys.length}
  ,enumerable:!1,configurable:!0}
  )}
  ();
  function Ot(t,e,r){
  for(var n=0,i=e;
  i<r;
  i+=1){
  var o=t[i];
  if(n){
  if(128!=(192&o))return!1;
  n-=1}
  else if(128&o)if(192==(224&o))n=1;
  else if(224==(240&o))n=2;
  else{
  if(240!=(248&o))return!1;
  n=3}
  }
  return!n}
  var xt=W.fromNumber(L),kt=W.fromNumber(q),Mt={
  };
  function Tt(t,e,r){
  var n=(e=null==e?{
  }
  :e)&&e.index?e.index:0,i=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24;
  if(i<5)throw new _("bson size must be >= 5, is ".concat(i));
  if(e.allowObjectSmallerThanBufferSize&&t.length<i)throw new _("buffer length ".concat(t.length," must be >= bson size ").concat(i));
  if(!e.allowObjectSmallerThanBufferSize&&t.length!==i)throw new _("buffer length ".concat(t.length,
  " must === bson size ").concat(i));
  if(i+n>t.byteLength)throw new _("(bson size ".concat(i," + options.index ").concat(n," must be <= buffer length ").concat(t.byteLength,
  ")"));
  if(0!==t[n+i-1])throw new _("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  return function t(e,r,n,i){
  void 0===i&&(i=!1);
  var o,a=null!=n.evalFunctions&&n.evalFunctions,s=null!=n.cacheFunctions&&n.cacheFunctions,u=null==n.fieldsAsRaw?
  null:n.fieldsAsRaw,c=null!=n.raw&&n.raw,l="boolean"==typeof n.bsonRegExp&&n.bsonRegExp,f=null!=n.promoteBuffers&&
  n.promoteBuffers,d=null==n.promoteLongs||n.promoteLongs,h=null==n.promoteValues||n.promoteValues,p=null==n.validation?
  {
  utf8:!0}
  :n.validation,v=!0,m=new Set,y=p.utf8;
  if("boolean"==typeof y)o=y;
  else{
  v=!1;
  var b=Object.keys(y).map((function(t){
  return y[t]}
  ));
  if(0===b.length)throw new _("UTF-8 validation setting cannot be empty");
  if("boolean"!=typeof b[0])throw new _("Invalid UTF-8 validation option, must specify boolean values");
  if(o=b[0],!b.every((function(t){
  return t===o}
  )))throw new _("Invalid UTF-8 validation option - keys must be all true or all false")}
  if(!v)for(var w=0,E=Object.keys(y);
  w<E.length;
  w++){
  var S=E[w];
  m.add(S)}
  var O=r;
  if(e.length<5)throw new _("corrupt bson message < 5 bytes long");
  var x=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;
  if(x<5||x>e.length)throw new _("corrupt bson message");
  var k=i?[]:{
  }
  ,M=0,T=!i&&null,I=new DataView(e.buffer,e.byteOffset,e.byteLength);
  for(;;
  ){
  var j=e[r++];
  if(0===j)break;
  for(var C=r;
  0!==e[C]&&C<e.length;
  )C++;
  if(C>=e.byteLength)throw new _("Bad BSON Document: illegal CString");
  var B=i?M++:e.toString("utf8",r,C),U=!0;
  U=v||m.has(B)?o:!o,!1!==T&&"$"===B[0]&&(T=It.test(B));
  var P=void 0;
  if(r=C+1,2===j){
  if((bt=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||bt>e.length-r||0!==e[r+bt-1])throw new _("bad string length in bson");
  P=Ct(e,r,r+bt-1,U),r+=bt}
  else if(7===j){
  var N=g.alloc(12);
  e.copy(N,0,r,r+12),P=new pt(N),r+=12}
  else if(16===j&&!1===h)P=new ut(e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24);
  else if(16===j)P=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;
  else if(1===j&&!1===h)P=new st(I.getFloat64(r,!0)),r+=8;
  else if(1===j)P=I.getFloat64(r,!0),r+=8;
  else if(9===j){
  var D=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,R=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;
  P=new Date(new W(D,R).toNumber())}
  else if(8===j){
  if(0!==e[r]&&1!==e[r])throw new _("illegal boolean type value");
  P=1===e[r++]}
  else if(3===j){
  var L=r;
  if((G=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)<=0||G>e.length-r)throw new _("bad embedded document length in bson");
  if(c)P=e.slice(r,r+G);
  else{
  var q=n;
  v||(q=A(A({
  }
  ,n),{
  validation:{
  utf8:U}
  }
  )),P=t(e,L,q,!1)}
  r+=G}
  else if(4===j){
  L=r;
  var G=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24,V=n,$=r+G;
  if(u&&u[B]){
  for(var Y in V={
  }
  ,n)V[Y]=n[Y];
  V.raw=!0}
  if(v||(V=A(A({
  }
  ,V),{
  validation:{
  utf8:U}
  }
  )),P=t(e,L,V,!0),0!==e[(r+=G)-1])throw new _("invalid array terminator byte");
  if(r!==$)throw new _("corrupted array bson")}
  else if(6===j)P=void 0;
  else if(10===j)P=null;
  else if(18===j){
  D=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,R=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;
  var X=new W(D,R);
  P=d&&!0===h&&X.lessThanOrEqual(xt)&&X.greaterThanOrEqual(kt)?X.toNumber():X}
  else if(19===j){
  var K=g.alloc(16);
  e.copy(K,0,r,r+16),r+=16;
  var J=new at(K);
  P="toObject"in J&&"function"==typeof J.toObject?J.toObject():J}
  else if(5===j){
  var Z=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,tt=Z,et=e[r++];
  if(Z<0)throw new _("Negative binary type element size found");
  if(Z>e.byteLength)throw new _("Binary type size larger than document size");
  if(null!=e.slice){
  if(et===F.SUBTYPE_BYTE_ARRAY){
  if((Z=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<0)throw new _("Negative binary type element size found for subtype 0x02");
  if(Z>tt-4)throw new _("Binary type with subtype 0x02 contains too long binary size");
  if(Z<tt-4)throw new _("Binary type with subtype 0x02 contains too short binary size")}
  f&&h?P=e.slice(r,r+Z):(P=new F(e.slice(r,r+Z),et),4===et&&(P=P.toUUID()))}
  else{
  var rt=g.alloc(Z);
  if(et===F.SUBTYPE_BYTE_ARRAY){
  if((Z=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<0)throw new _("Negative binary type element size found for subtype 0x02");
  if(Z>tt-4)throw new _("Binary type with subtype 0x02 contains too long binary size");
  if(Z<tt-4)throw new _("Binary type with subtype 0x02 contains too short binary size")}
  for(C=0;
  C<Z;
  C++)rt[C]=e[r+C];
  P=f&&h?rt:4===et?new F(e.slice(r,r+Z),et).toUUID():new F(e.slice(r,r+Z),et)}
  r+=Z}
  else if(11===j&&!1===l){
  for(C=r;
  0!==e[C]&&C<e.length;
  )C++;
  if(C>=e.length)throw new _("Bad BSON Document: illegal CString");
  var nt=e.toString("utf8",r,C);
  for(C=r=C+1;
  0!==e[C]&&C<e.length;
  )C++;
  if(C>=e.length)throw new _("Bad BSON Document: illegal CString");
  var it=e.toString("utf8",r,C);
  r=C+1;
  var ot=new Array(it.length);
  for(C=0;
  C<it.length;
  C++)switch(it[C]){
  case"m":ot[C]="m";
  break;
  case"s":ot[C]="g";
  break;
  case"i":ot[C]="i"}
  P=new RegExp(nt,ot.join(""))}
  else if(11===j&&!0===l){
  for(C=r;
  0!==e[C]&&C<e.length;
  )C++;
  if(C>=e.length)throw new _("Bad BSON Document: illegal CString");
  nt=e.toString("utf8",r,C);
  for(C=r=C+1;
  0!==e[C]&&C<e.length;
  )C++;
  if(C>=e.length)throw new _("Bad BSON Document: illegal CString");
  it=e.toString("utf8",r,C);
  r=C+1,P=new vt(nt,it)}
  else if(14===j){
  if((bt=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||bt>e.length-r||0!==e[r+bt-1])throw new _("bad string length in bson");
  var ft=Ct(e,r,r+bt-1,U);
  P=h?ft:new mt(ft),r+=bt}
  else if(17===j){
  D=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,R=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;
  P=new yt(D,R)}
  else if(255===j)P=new lt;
  else if(127===j)P=new ct;
  else if(13===j){
  if((bt=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||bt>e.length-r||0!==e[r+bt-1])throw new _("bad string length in bson");
  var dt=Ct(e,r,r+bt-1,U);
  P=a?s?jt(dt,Mt,k):jt(dt):new Q(dt),r+=bt}
  else if(15===j){
  var ht=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;
  if(ht<13)throw new _("code_w_scope total size shorter minimum expected length");
  if((bt=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||bt>e.length-r||0!==e[r+bt-1])throw new _("bad string length in bson");
  dt=Ct(e,r,r+bt-1,U),L=r+=bt,G=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;
  var gt=t(e,L,n,!1);
  if(r+=G,ht<8+G+bt)throw new _("code_w_scope total size is too short, truncating scope");
  if(ht>8+G+bt)throw new _("code_w_scope total size is too long, clips outer document");
  a?(P=s?jt(dt,Mt,k):jt(dt)).scope=gt:P=new Q(dt,gt)}
  else{
  if(12!==j)throw new _("Detected unknown BSON type ".concat(j.toString(16),' for fieldname "').concat(B,
  '"'));
  var bt;
  if((bt=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||bt>e.length-r||0!==e[r+bt-1])throw new _("bad string length in bson");
  if(null!=p&&p.utf8&&!Ot(e,r,r+bt-1))throw new _("Invalid UTF-8 string in BSON document");
  var wt=e.toString("utf8",r,r+bt-1);
  r+=bt;
  var At=g.alloc(12);
  e.copy(At,0,r,r+12);
  N=new pt(At);
  r+=12,P=new H(wt,N)}
  "__proto__"===B?Object.defineProperty(k,B,{
  value:P,writable:!0,enumerable:!0,configurable:!0}
  ):k[B]=P}
  if(x!==r-O){
  if(i)throw new _("corrupt array bson");
  throw new _("corrupt object bson")}
  if(!T)return k;
  if(z(k)){
  var _t=Object.assign({
  }
  ,k);
  return delete _t.$ref,delete _t.$id,delete _t.$db,new H(k.$ref,k.$id,k.$db,_t)}
  return k}
  (t,n,e,r)}
  var It=/^\$ref$|^\$id$|^\$db$/;
  function jt(t,e,r){
  return e?(null==e[t]&&(e[t]=new Function(t)),e[t].bind(r)):new Function(t)}
  function Ct(t,e,r,n){
  var i=t.toString("utf8",e,r);
  if(n)for(var o=0;
  o<i.length;
  o++)if(65533===i.charCodeAt(o)){
  if(!Ot(t,e,r))throw new _("Invalid UTF-8 string in BSON document");
  break}
  return i}
  new Set(["$db","$ref","$id","$clusterTime"]);
  var Bt=new Uint8Array(8);
  new DataView(Bt.buffer,Bt.byteOffset,Bt.byteLength);
  g.alloc(17825792);
  function Ut(t,e){
  return void 0===e&&(e={
  }
  ),Tt(t instanceof g?t:U(t),e)}
  }
  ).call(this,r(13))};
