// Module 140 [utilities] - Shared utility component (encrypted-stream-decipherer)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_152 = requireFn(152);
  var dep_helper_406 = requireFn(406);
  var dep_helper_407 = requireFn(407);
  var dep_helper_408 = requireFn(408);
  var dep_helper_409 = requireFn(409);
  var dep_helper_166 = requireFn(166);
  var dep_helper_115 = requireFn(115);
  var dep_helper_410 = requireFn(410);
  var dep_helper_411 = requireFn(411);
  var dep_helper_412 = requireFn(412);
  var dep_helper_413 = requireFn(413);
  var dep_helper_414 = requireFn(414);
  var dep_helper_415 = requireFn(415);
  var dep_helper_416 = requireFn(416);
  var dep_helper_417 = requireFn(417);
  var var_y = Function;
  function var__(param_e) {
  try {
  return var_y("\"use strict\"; return (" + param_e + ").constructor;")();
  }
  catch (var_e) {
  }
  }
  var dep_helper_129 = requireFn(129);
  var dep_helper_136 = requireFn(136);
  function var_E() {
  throw new dep_helper_115();
  }
  var var_D = dep_helper_129 ? function () {
  try {
  return var_E;
  }
  catch (var_e) {
  try {
  return dep_helper_129(arguments, "callee").get;
  }
  catch (var_e_1) {
  return var_E;
  }
  }
  }
  () : var_E;
  var var_T = requireFn(420)();
  var dep_helper_168 = requireFn(168);
  var dep_helper_154 = requireFn(154);
  var dep_helper_153 = requireFn(153);
  var dep_helper_142 = requireFn(142);
  var dep_helper_137 = requireFn(137);
  var obj_O = {
  };
  var var_I = typeof Uint8Array != "undefined" && dep_helper_168 ?
  dep_helper_168(Uint8Array) : undefined;
  var obj_L = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError == "undefined" ?
  undefined : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? undefined :
  ArrayBuffer,
  "%ArrayIteratorPrototype%": var_T && dep_helper_168 ? dep_helper_168([][Symbol.iterator](
  )) : undefined,
  "%AsyncFromSyncIteratorPrototype%": undefined,
  "%AsyncFunction%": obj_O,
  "%AsyncGenerator%": obj_O,
  "%AsyncGeneratorFunction%": obj_O,
  "%AsyncIteratorPrototype%": obj_O,
  "%Atomics%": typeof Atomics == "undefined" ? undefined : Atomics,
  "%BigInt%": typeof BigInt == "undefined" ? undefined : BigInt,
  "%BigInt64Array%": typeof BigInt64Array == "undefined" ? undefined :
  BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array == "undefined" ?
  undefined : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView == "undefined" ? undefined :
  DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": dep_helper_406,
  "%eval%": eval,
  "%EvalError%": dep_helper_407,
  "%Float16Array%": typeof Float16Array == "undefined" ? undefined :
  Float16Array,
  "%Float32Array%": typeof Float32Array == "undefined" ? undefined :
  Float32Array,
  "%Float64Array%": typeof Float64Array == "undefined" ? undefined :
  Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ?
  undefined : FinalizationRegistry,
  "%Function%": var_y,
  "%GeneratorFunction%": obj_O,
  "%Int8Array%": typeof Int8Array == "undefined" ? undefined :
  Int8Array,
  "%Int16Array%": typeof Int16Array == "undefined" ? undefined :
  Int16Array,
  "%Int32Array%": typeof Int32Array == "undefined" ? undefined :
  Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": var_T && dep_helper_168 ? dep_helper_168(dep_helper_168(
  [][Symbol.iterator]())) : undefined,
  "%JSON%": typeof JSON == "object" ? JSON : undefined,
  "%Map%": typeof Map == "undefined" ? undefined : Map,
  "%MapIteratorPrototype%": typeof Map != "undefined" && var_T &&
  dep_helper_168 ? dep_helper_168(new Map()[Symbol.iterator]()) :
  undefined,
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": dep_helper_152,
  "%Object.getOwnPropertyDescriptor%": dep_helper_129,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise == "undefined" ? undefined : Promise,
  "%Proxy%": typeof Proxy == "undefined" ? undefined : Proxy,
  "%RangeError%": dep_helper_408,
  "%ReferenceError%": dep_helper_409,
  "%Reflect%": typeof Reflect == "undefined" ? undefined : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set == "undefined" ? undefined : Set,
  "%SetIteratorPrototype%": typeof Set != "undefined" && var_T &&
  dep_helper_168 ? dep_helper_168(new Set()[Symbol.iterator]()) :
  undefined,
  "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ?
  undefined : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": var_T && dep_helper_168 ? dep_helper_168(""[Symbol.iterator](
  )) : undefined,
  "%Symbol%": var_T ? Symbol : undefined,
  "%SyntaxError%": dep_helper_166,
  "%ThrowTypeError%": var_D,
  "%TypedArray%": var_I,
  "%TypeError%": dep_helper_115,
  "%Uint8Array%": typeof Uint8Array == "undefined" ? undefined :
  Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ?
  undefined : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array == "undefined" ? undefined :
  Uint16Array,
  "%Uint32Array%": typeof Uint32Array == "undefined" ? undefined :
  Uint32Array,
  "%URIError%": dep_helper_410,
  "%WeakMap%": typeof WeakMap == "undefined" ? undefined : WeakMap,
  "%WeakRef%": typeof WeakRef == "undefined" ? undefined : WeakRef,
  "%WeakSet%": typeof WeakSet == "undefined" ? undefined : WeakSet,
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
  if (dep_helper_168) {
  try {
  null.error;
  }
  catch (var_e) {
  var var_R = dep_helper_168(dep_helper_168(var_e));
  obj_L["%Error.prototype%"] = var_R;
  }
  }
  var obj_P = {
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
  };
  var dep_helper_121 = requireFn(121);
  var dep_helper_424 = requireFn(424);
  var var_F = dep_helper_121.call(dep_helper_137, Array.prototype.concat);
  var var_U = dep_helper_121.call(dep_helper_142, Array.prototype.splice);
  var var_N = dep_helper_121.call(dep_helper_137, String.prototype.replace);
  var var_j = dep_helper_121.call(dep_helper_137, String.prototype.slice);
  var var_q = dep_helper_121.call(dep_helper_137, RegExp.prototype.exec);
  var regex_H = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var regex_V = /\\(\\)?/g;
  function var_W(param_e) {
  var var_t = var_j(param_e, 0, 1);
  var var_r = var_j(param_e, -1);
  if (var_t === "%" && var_r !== "%") {
  throw new dep_helper_166("invalid intrinsic syntax, expected closing `%`");
  }
  if (var_r === "%" && var_t !== "%") {
  throw new dep_helper_166("invalid intrinsic syntax, expected opening `%`");
  }
  var list_n = [];
  var_N(param_e, regex_H, function (param_e_1, param_t, param_r, param_o) {
  list_n[list_n.length] = param_r ? var_N(param_o, regex_V, "$1") :
  param_t || param_e_1;
  }
  );
  return list_n;
  }
  function var_z(param_e, param_t) {
  var var_r;
  var var_n = param_e;
  if (dep_helper_424(obj_P, var_n)) {
  var_n = "%" + (var_r = obj_P[var_n])[0] + "%";
  }
  if (dep_helper_424(obj_L, var_n)) {
  var var_o = obj_L[var_n];
  if (var_o === obj_O) {
  var_o = function var_e(param_t_1) {
  var var_r_1;
  if (param_t_1 === "%AsyncFunction%") {
  var_r_1 = var__("async function () {}");
  }
  else if (param_t_1 === "%GeneratorFunction%") {
  var_r_1 = var__("function* () {}");
  }
  else if (param_t_1 === "%AsyncGeneratorFunction%") {
  var_r_1 = var__("async function* () {}");
  }
  else if (param_t_1 === "%AsyncGenerator%") {
  var var_n_1 = var_e("%AsyncGeneratorFunction%");
  if (var_n_1) {
  var_r_1 = var_n_1.prototype;
  }
  }
  else if (param_t_1 === "%AsyncIteratorPrototype%") {
  var var_o_1 = var_e("%AsyncGenerator%");
  if (var_o_1 && dep_helper_168) {
  var_r_1 = dep_helper_168(var_o_1.prototype);
  }
  }
  obj_L[param_t_1] = var_r_1;
  return var_r_1;
  }
  (var_n);
  }
  if (var_o === undefined && !param_t) {
  throw new dep_helper_115("intrinsic " + param_e + " exists, but is not available. Please file an issue!");
  }
  return {
  alias: var_r,
  name: var_n,
  value: var_o
  };
  }
  throw new dep_helper_166("intrinsic " + param_e + " does not exist!");
  }
  moduleObj.exports = function (param_e, param_t) {
  if (typeof param_e != "string" || param_e.length === 0) {
  throw new dep_helper_115("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof param_t != "boolean") {
  throw new dep_helper_115("\"allowMissing\" argument must be a boolean");
  }
  if (var_q(/^%?[^%]*%?$/, param_e) === null) {
  throw new dep_helper_166("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var var_r = var_W(param_e);
  var var_n = var_r.length > 0 ? var_r[0] : "";
  var var_o = var_z("%" + var_n + "%", param_t);
  var var_i = var_o.name;
  var var_a = var_o.value;
  var flag_s = false;
  var var_l = var_o.alias;
  if (var_l) {
  var_n = var_l[0];
  var_U(var_r, var_F([0, 1], var_l));
  }
  for (var num_d = 1, flag_p = true;
  num_d < var_r.length;
  num_d += 1) {
  var var_f = var_r[num_d];
  var var_h = var_j(var_f, 0, 1);
  var var_m = var_j(var_f, -1);
  if ((var_h === "\"" || var_h === "'" || var_h === "`" || var_m === "\"" ||
  var_m === "'" || var_m === "`") && var_h !== var_m) {
  throw new dep_helper_166("property names with quotes must have matching quotes");
  }
  if (var_f === "constructor" || !flag_p) {
  flag_s = true;
  }
  if (dep_helper_424(obj_L, var_i = "%" + (var_n += "." + var_f) + "%")) {
  var_a = obj_L[var_i];
  }
  else if (var_a != null) {
  if (!(var_f in var_a)) {
  if (!param_t) {
  throw new dep_helper_115("base intrinsic for " + param_e + " exists, but the property is not available.");
  }
  return;
  }
  if (dep_helper_129 && num_d + 1 >= var_r.length) {
  var var_g = dep_helper_129(var_a, var_f);
  var_a = (flag_p = !!var_g) && "get" in var_g && !("originalValue" in var_g.get) ?
  var_g.get : var_a[var_f];
  }
  else {
  flag_p = dep_helper_424(var_a, var_f);
  var_a = var_a[var_f];
  }
  if (flag_p && !flag_s) {
  obj_L[var_i] = var_a;
  }
  }
  }
  return var_a;
  };
  };
