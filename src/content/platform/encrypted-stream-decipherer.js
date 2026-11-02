// Module 140 - Savior Encrypted Stream Decipherer
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_152 = requireFn(152),
  dep_helper_406 = requireFn(406),
  dep_helper_407 = requireFn(407),
  dep_helper_408 = requireFn(408),
  dep_helper_409 = requireFn(409),
  dep_helper_166 = requireFn(166),
  dep_helper_115 = requireFn(115),
  dep_helper_410 = requireFn(410),
  dep_helper_411 = requireFn(411),
  dep_helper_412 = requireFn(412),
  dep_helper_413 = requireFn(413),
  dep_helper_414 = requireFn(414),
  dep_helper_415 = requireFn(415),
  dep_helper_416 = requireFn(416),
  dep_helper_417 = requireFn(417),
  var_g = Function,
  fn_b = function (param_t) {
  try {
  return var_g('"use strict"; return (' + param_t + ").constructor;")();
  }
  catch (var_t) {
  }
  }
  ,
  dep_helper_129 = requireFn(129),
  dep_helper_136 = requireFn(136),
  fn__ = function () {
  throw new dep_helper_115();
  }
  ,
  var_E = dep_helper_129 ? function () {
  try {
  return fn__;
  }
  catch (var_t) {
  try {
  return dep_helper_129(arguments, "callee").get;
  }
  catch (var_t_1) {
  return fn__;
  }
  }
  }
  () : fn__,
  var_S = requireFn(420)(),
  dep_helper_168 = requireFn(168),
  dep_helper_154 = requireFn(154),
  dep_helper_153 = requireFn(153),
  dep_helper_142 = requireFn(142),
  dep_helper_137 = requireFn(137),
  obj_I = {
  }
  ,
  var_j = "undefined" != typeof Uint8Array && dep_helper_168 ?
  dep_helper_168(Uint8Array) : void 0,
  obj_C = {
  __proto__: null,
  "%AggregateError%": "undefined" == typeof AggregateError ?
  void 0 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 :
  ArrayBuffer,
  "%ArrayIteratorPrototype%": var_S && dep_helper_168 ? dep_helper_168([][Symbol.iterator](
  )) : void 0,
  "%AsyncFromSyncIteratorPrototype%": void 0,
  "%AsyncFunction%": obj_I,
  "%AsyncGenerator%": obj_I,
  "%AsyncGeneratorFunction%": obj_I,
  "%AsyncIteratorPrototype%": obj_I,
  "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
  "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
  "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 :
  BigInt64Array,
  "%BigUint64Array%": "undefined" == typeof BigUint64Array ?
  void 0 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": dep_helper_406,
  "%eval%": eval,
  "%EvalError%": dep_helper_407,
  "%Float16Array%": "undefined" == typeof Float16Array ? void 0 :
  Float16Array,
  "%Float32Array%": "undefined" == typeof Float32Array ? void 0 :
  Float32Array,
  "%Float64Array%": "undefined" == typeof Float64Array ? void 0 :
  Float64Array,
  "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ?
  void 0 : FinalizationRegistry,
  "%Function%": var_g,
  "%GeneratorFunction%": obj_I,
  "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
  "%Int16Array%": "undefined" == typeof Int16Array ? void 0 :
  Int16Array,
  "%Int32Array%": "undefined" == typeof Int32Array ? void 0 :
  Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": var_S && dep_helper_168 ? dep_helper_168(dep_helper_168(
  [][Symbol.iterator]())) : void 0,
  "%JSON%": "object" == typeof JSON ? JSON : void 0,
  "%Map%": "undefined" == typeof Map ? void 0 : Map,
  "%MapIteratorPrototype%": "undefined" != typeof Map && var_S &&
  dep_helper_168 ? dep_helper_168(new Map()[Symbol.iterator]()) :
  void 0,
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": dep_helper_152,
  "%Object.getOwnPropertyDescriptor%": dep_helper_129,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
  "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
  "%RangeError%": dep_helper_408,
  "%ReferenceError%": dep_helper_409,
  "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": "undefined" == typeof Set ? void 0 : Set,
  "%SetIteratorPrototype%": "undefined" != typeof Set && var_S &&
  dep_helper_168 ? dep_helper_168(new Set()[Symbol.iterator]()) :
  void 0,
  "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ?
  void 0 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": var_S && dep_helper_168 ? dep_helper_168(""[Symbol.iterator](
  )) : void 0,
  "%Symbol%": var_S ? Symbol : void 0,
  "%SyntaxError%": dep_helper_166,
  "%ThrowTypeError%": var_E,
  "%TypedArray%": var_j,
  "%TypeError%": dep_helper_115,
  "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 :
  Uint8Array,
  "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ?
  void 0 : Uint8ClampedArray,
  "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 :
  Uint16Array,
  "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 :
  Uint32Array,
  "%URIError%": dep_helper_410,
  "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
  "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
  "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
  "%Function.prototype.call%": dep_helper_137,
  "%Function.prototype.apply%": dep_helper_142,
  "%Object.defineProperty%": dep_helper_136,
  "%Object.getPrototypeOf%": dep_helper_154,
  "%Math.abs%": dep_helper_411,
  "%Math.floor%": dep_helper_412,
  "%Math.max%": dep_helper_413,
  "%Math.min%": dep_helper_414,
  "%Math.pow%": dep_helper_415,
  "%Math.round%": dep_helper_416,
  "%Math.sign%": dep_helper_417,
  "%Reflect.getPrototypeOf%": dep_helper_153
  };
  if (dep_helper_168) try {
  null.error;
  }
  catch (var_t) {
  var var_B = dep_helper_168(dep_helper_168(var_t));
  obj_C["%Error.prototype%"] = var_B;
  }
  var obj_U = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }
  ,
  dep_helper_121 = requireFn(121),
  dep_helper_424 = requireFn(424),
  var_D = dep_helper_121.call(dep_helper_137, Array.prototype.concat),
  var_R = dep_helper_121.call(dep_helper_142, Array.prototype.splice),
  var_L = dep_helper_121.call(dep_helper_137, String.prototype.replace),
  var_q = dep_helper_121.call(dep_helper_137, String.prototype.slice),
  var_F = dep_helper_121.call(dep_helper_137, RegExp.prototype.exec),
  regex_G = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  regex_Q = /\\(\\)?/g,
  fn_z = function (param_t) {
  var var_e = var_q(param_t, 0, 1),
  var_r = var_q(param_t, -1);
  if ("%" === var_e && "%" !== var_r) throw new dep_helper_166("invalid intrinsic syntax, expected closing `%`");
  if ("%" === var_r && "%" !== var_e) throw new dep_helper_166("invalid intrinsic syntax, expected opening `%`");
  var list_n = [];
  return var_L(param_t, regex_G, function (param_t_1, param_e, param_r, param_i) {
  list_n[list_n.length] = param_r ? var_L(param_i, regex_Q, "$1") :
  param_e || param_t_1;
  }
  ), list_n;
  }
  ,
  fn_H = function (param_t, param_e) {
  var var_r,
  var_n = param_t;
  if (dep_helper_424(obj_U, var_n) && (var_n = "%" + (var_r = obj_U[var_n])[0] + "%"),
  dep_helper_424(obj_C, var_n)) {
  var var_i = obj_C[var_n];
  if (var_i === obj_I && (var_i = function var_t(param_e_1) {
  var var_r_1;
  if ("%AsyncFunction%" === param_e_1) var_r_1 = fn_b("async function () {}");
  else if ("%GeneratorFunction%" === param_e_1) var_r_1 = fn_b("function* () {}");
  else if ("%AsyncGeneratorFunction%" === param_e_1) var_r_1 = fn_b("async function* () {}");
  else if ("%AsyncGenerator%" === param_e_1) {
  var var_n_1 = var_t("%AsyncGeneratorFunction%");
  var_n_1 && (var_r_1 = var_n_1.prototype);
  }
  else if ("%AsyncIteratorPrototype%" === param_e_1) {
  var var_i_1 = var_t("%AsyncGenerator%");
  var_i_1 && dep_helper_168 && (var_r_1 = dep_helper_168(var_i_1.prototype));
  }
  return obj_C[param_e_1] = var_r_1, var_r_1;
  }
  (var_n)), void 0 === var_i && !param_e) throw new dep_helper_115("intrinsic " + param_t + " exists, but is not available. Please file an issue!");
  return {
  alias: var_r,
  name: var_n,
  value: var_i
  };
  }
  throw new dep_helper_166("intrinsic " + param_t + " does not exist!");
  };
  moduleObj.exports = function (param_t, param_e) {
  if ("string" != typeof param_t || 0 === param_t.length) throw new dep_helper_115(
  "intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof param_e) throw new dep_helper_115(
  '"allowMissing" argument must be a boolean');
  if (null === var_F(/^%?[^%]*%?$/, param_t)) throw new dep_helper_166("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var var_r = fn_z(param_t),
  var_n = var_r.length > 0 ? var_r[0] : "",
  var_i = fn_H("%" + var_n + "%", param_e),
  var_o = var_i.name,
  var_a = var_i.value,
  flag_s = !1,
  var_l = var_i.alias;
  var_l && (var_n = var_l[0], var_R(var_r, var_D([0, 1], var_l)));
  for (var num_f = 1, flag_d = !0;
  num_f < var_r.length;
  num_f += 1) {
  var var_h = var_r[num_f],
  var_p = var_q(var_h, 0, 1),
  var_v = var_q(var_h, -1);
  if (('"' === var_p || "'" === var_p || "`" === var_p || '"' === var_v ||
  "'" === var_v || "`" === var_v) && var_p !== var_v) throw new dep_helper_166("property names with quotes must have matching quotes");
  if ("constructor" !== var_h && flag_d || (flag_s = !0), dep_helper_424(obj_C, var_o = "%" + (
  var_n += "." + var_h) + "%")) var_a = obj_C[var_o];
  else if (null != var_a) {
  if (!(var_h in var_a)) {
  if (!param_e) throw new dep_helper_115("base intrinsic for " + param_t + " exists, but the property is not available.");
  return;
  }
  if (dep_helper_129 && num_f + 1 >= var_r.length) {
  var var_m = dep_helper_129(var_a, var_h);
  var_a = (flag_d = !!var_m) && "get" in var_m && !("originalValue" in var_m.get) ?
  var_m.get : var_a[var_h];
  }
  else flag_d = dep_helper_424(var_a, var_h), var_a = var_a[var_h];
  flag_d && !flag_s && (obj_C[var_o] = var_a);
  }
  }
  return var_a;
  };
  };
