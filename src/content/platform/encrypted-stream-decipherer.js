// Module 140 - Savior Encrypted Stream Decipherer
export default function(t,e,r) {
  "use strict";
  var n=r(152),i=r(406),o=r(407),a=r(408),s=r(409),u=r(166),c=r(115),l=r(410),f=r(411),d=r(412),h=r(413),
  p=r(414),v=r(415),m=r(416),y=r(417),g=Function,b=function(t){
  try{
  return g('"use strict"; return ('+t+").constructor;")()}
  catch(t){
  }
  }
  ,w=r(129),A=r(136),_=function(){
  throw new c}
  ,E=w?function(){
  try{
  return _}
  catch(t){
  try{
  return w(arguments,"callee").get}
  catch(t){
  return _}
  }
  }
  ():_,S=r(420)(),O=r(168),x=r(154),k=r(153),M=r(142),T=r(137),I={
  }
  ,j="undefined"!=typeof Uint8Array&&O?O(Uint8Array):void 0,C={
  __proto__:null,"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":
  Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":
  S&&O?O([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":I,
  "%AsyncGenerator%":I,"%AsyncGeneratorFunction%":I,"%AsyncIteratorPrototype%":I,"%Atomics%":"undefined"==typeof Atomics?
  void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?
  void 0:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?void 0:BigUint64Array,"%Boolean%":
  Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,
  "%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,
  "%Error%":i,"%eval%":eval,"%EvalError%":o,"%Float16Array%":"undefined"==typeof Float16Array?void 0:
  Float16Array,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":
  "undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?
  void 0:FinalizationRegistry,"%Function%":g,"%GeneratorFunction%":I,"%Int8Array%":"undefined"==typeof Int8Array?
  void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?
  void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":S&&O?O(O([][Symbol.iterator]())):
  void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":
  "undefined"!=typeof Map&&S&&O?O((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,
  "%Object%":n,"%Object.getOwnPropertyDescriptor%":w,"%parseFloat%":parseFloat,"%parseInt%":parseInt,
  "%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:
  Proxy,"%RangeError%":a,"%ReferenceError%":s,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,
  "%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&
  S&&O?O((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?
  void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":S&&O?O(""[Symbol.iterator]()):
  void 0,"%Symbol%":S?Symbol:void 0,"%SyntaxError%":u,"%ThrowTypeError%":E,"%TypedArray%":j,"%TypeError%":
  c,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?
  void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":
  "undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":l,"%WeakMap%":"undefined"==typeof WeakMap?
  void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?
  void 0:WeakSet,"%Function.prototype.call%":T,"%Function.prototype.apply%":M,"%Object.defineProperty%":
  A,"%Object.getPrototypeOf%":x,"%Math.abs%":f,"%Math.floor%":d,"%Math.max%":h,"%Math.min%":p,"%Math.pow%":
  v,"%Math.round%":m,"%Math.sign%":y,"%Reflect.getPrototypeOf%":k};
  if(O)try{
  null.error}
  catch(t){
  var B=O(O(t));
  C["%Error.prototype%"]=B}
  var U={
  __proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],
  "%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype",
  "forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype",
  "values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction",
  "prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":
  ["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],
  "%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":
  ["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":
  ["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction",
  "prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":
  ["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON",
  "parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":
  ["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object",
  "prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":
  ["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise",
  "all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":
  ["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":
  ["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer",
  "prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],
  "%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],
  "%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],
  "%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array",
  "prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError",
  "prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]}
  ,P=r(121),N=r(424),D=P.call(T,Array.prototype.concat),R=P.call(M,Array.prototype.splice),L=P.call(T,
  String.prototype.replace),q=P.call(T,String.prototype.slice),F=P.call(T,RegExp.prototype.exec),G=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Q=/\\(\\)?/g,z=function(t){
  var e=q(t,0,1),r=q(t,-1);
  if("%"===e&&"%"!==r)throw new u("invalid intrinsic syntax, expected closing `%`");
  if("%"===r&&"%"!==e)throw new u("invalid intrinsic syntax, expected opening `%`");
  var n=[];
  return L(t,G,(function(t,e,r,i){
  n[n.length]=r?L(i,Q,"$1"):e||t}
  )),n}
  ,H=function(t,e){
  var r,n=t;
  if(N(U,n)&&(n="%"+(r=U[n])[0]+"%"),N(C,n)){
  var i=C[n];
  if(i===I&&(i=function t(e){
  var r;
  if("%AsyncFunction%"===e)r=b("async function () {}");
  else if("%GeneratorFunction%"===e)r=b("function* () {}");
  else if("%AsyncGeneratorFunction%"===e)r=b("async function* () {}");
  else if("%AsyncGenerator%"===e){
  var n=t("%AsyncGeneratorFunction%");
  n&&(r=n.prototype)}
  else if("%AsyncIteratorPrototype%"===e){
  var i=t("%AsyncGenerator%");
  i&&O&&(r=O(i.prototype))}
  return C[e]=r,r}
  (n)),void 0===i&&!e)throw new c("intrinsic "+t+" exists, but is not available. Please file an issue!");
  return{
  alias:r,name:n,value:i}
  }
  throw new u("intrinsic "+t+" does not exist!")};
  t.exports=function(t,e){
  if("string"!=typeof t||0===t.length)throw new c("intrinsic name must be a non-empty string");
  if(arguments.length>1&&"boolean"!=typeof e)throw new c('"allowMissing" argument must be a boolean');
  if(null===F(/^%?[^%]*%?$/,t))throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r=z(t),n=r.length>0?r[0]:"",i=H("%"+n+"%",e),o=i.name,a=i.value,s=!1,l=i.alias;
  l&&(n=l[0],R(r,D([0,1],l)));
  for(var f=1,d=!0;
  f<r.length;
  f+=1){
  var h=r[f],p=q(h,0,1),v=q(h,-1);
  if(('"'===p||"'"===p||"`"===p||'"'===v||"'"===v||"`"===v)&&p!==v)throw new u("property names with quotes must have matching quotes");
  if("constructor"!==h&&d||(s=!0),N(C,o="%"+(n+="."+h)+"%"))a=C[o];
  else if(null!=a){
  if(!(h in a)){
  if(!e)throw new c("base intrinsic for "+t+" exists, but the property is not available.");
  return}
  if(w&&f+1>=r.length){
  var m=w(a,h);
  a=(d=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:a[h]}
  else d=N(a,h),a=a[h];
  d&&!s&&(C[o]=a)}
  }
  return a}
  };
