// Module 723 [utilities] - JWT bearer token verifier and expiration checker
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_auth_header_injector = requireFn(518);
  var var_o = Object.prototype.hasOwnProperty;
  var var_i = Array.isArray;
  var obj_a = {
  allowDots: false,
  allowEmptyArrays: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decodeDotInKeys: false,
  decoder: dep_auth_header_injector.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictDepth: false,
  strictMerge: true,
  strictNullHandling: false,
  throwOnLimitExceeded: false
  };
  function var_s(param_e) {
  return param_e.replace(/&#(\d+);/g, function (param_e_1, param_t) {
  return String.fromCharCode(parseInt(param_t, 10));
  }
  );
  }
  function var_c(param_e, param_t, param_r) {
  if (param_e && typeof param_e == "string" && param_t.comma &&
  param_e.indexOf(",") > -1) {
  if (param_t.throwOnLimitExceeded) {
  var num_n = 0;
  for (var var_o_1 = param_e.indexOf(",");
  var_o_1 > -1;
  ) {
  if ((num_n += 1) >= param_t.arrayLimit) {
  throw new RangeError("Array limit exceeded. Only " + param_t.arrayLimit + " element" + (
  param_t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  var_o_1 = param_e.indexOf(",", var_o_1 + 1);
  }
  }
  return param_e.split(",");
  }
  if (param_t.throwOnLimitExceeded && param_r >= param_t.arrayLimit) {
  throw new RangeError("Array limit exceeded. Only " + param_t.arrayLimit + " element" + (
  param_t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  return param_e;
  }
  function var_u(param_e, param_t, param_r, param_i) {
  if (param_e) {
  var var_a = function (param_e_1, param_t_1) {
  var var_r = param_t_1.allowDots ? param_e_1.replace(/\.([^.[]+)/g, "[$1]") :
  param_e_1;
  if (param_t_1.depth <= 0) {
  if (!param_t_1.plainObjects && var_o.call(Object.prototype, var_r) &&
  !param_t_1.allowPrototypes) {
  return;
  }
  return [var_r];
  }
  var list_n = [];
  var var_i_1 = var_r.indexOf("[");
  var var_a_1 = var_i_1 >= 0 ? var_r.slice(0, var_i_1) : var_r;
  if (var_a_1) {
  if (!param_t_1.plainObjects && var_o.call(Object.prototype, var_a_1) &&
  !param_t_1.allowPrototypes) {
  return;
  }
  list_n[list_n.length] = var_a_1;
  }
  var var_s_1 = var_r.length;
  for (var var_c_1 = var_i_1, num_u = 0;
  var_c_1 >= 0 && num_u < param_t_1.depth;
  ) {
  var num_l = 1;
  for (var var_d = var_c_1 + 1, var_p = -1;
  var_d < var_s_1 && var_p < 0;
  ) {
  var var_f = var_r.charCodeAt(var_d);
  if (var_f === 91) {
  num_l += 1;
  }
  else if (var_f === 93 && (num_l -= 1) === 0) {
  var_p = var_d;
  }
  var_d += 1;
  }
  if (var_p < 0) {
  list_n[list_n.length] = "[" + var_r.slice(var_c_1) + "]";
  return list_n;
  }
  var var_h = var_r.slice(var_c_1, var_p + 1);
  var var_m = var_h.slice(1, -1);
  if (!param_t_1.plainObjects && var_o.call(Object.prototype, var_m) &&
  !param_t_1.allowPrototypes) {
  return;
  }
  list_n[list_n.length] = var_h;
  num_u += 1;
  var_c_1 = var_r.indexOf("[", var_p + 1);
  }
  if (var_c_1 >= 0) {
  if (param_t_1.strictDepth === true) {
  throw new RangeError("Input depth exceeded depth option of " + param_t_1.depth + " and strictDepth is true");
  }
  list_n[list_n.length] = "[" + var_r.slice(var_c_1) + "]";
  }
  return list_n;
  }
  (param_e, param_r);
  if (var_a) {
  return function (param_e_1, param_t_1, param_r_1, param_o) {
  var num_i = 0;
  if (param_e_1.length > 0 && param_e_1[param_e_1.length - 1] === "[]") {
  var var_a_1 = param_e_1.slice(0, -1).join("");
  num_i = Array.isArray(param_t_1) && param_t_1[var_a_1] ? param_t_1[var_a_1].length :
  0;
  }
  var var_s_1 = param_o ? param_t_1 : var_c(param_t_1, param_r_1, num_i);
  for (var var_u_1 = param_e_1.length - 1;
  var_u_1 >= 0;
  --var_u_1) {
  var var_l;
  var var_d = param_e_1[var_u_1];
  if (var_d === "[]" && param_r_1.parseArrays) {
  var_l = dep_auth_header_injector.isOverflow(var_s_1) ? var_s_1 :
  param_r_1.allowEmptyArrays && (var_s_1 === "" || param_r_1.strictNullHandling &&
  var_s_1 === null) ? [] : dep_auth_header_injector.combine([], var_s_1, param_r_1.arrayLimit,
  param_r_1.plainObjects, param_r_1.throwOnLimitExceeded);
  }
  else {
  var_l = param_r_1.plainObjects ? {
  __proto__: null
  }
  : {
  };
  var var_p = var_d.charAt(0) === "[" && var_d.charAt(var_d.length - 1) === "]" ?
  var_d.slice(1, -1) : var_d;
  var var_f = param_r_1.decodeDotInKeys ? var_p.replace(/%2E/g, ".") :
  var_p;
  var var_h = parseInt(var_f, 10);
  var var_m = !isNaN(var_h) && var_d !== var_f && String(var_h) === var_f &&
  var_h >= 0 && param_r_1.parseArrays;
  if (param_r_1.parseArrays || var_f !== "") {
  if (var_m && var_h < param_r_1.arrayLimit) {
  (var_l = [])[var_h] = var_s_1;
  }
  else {
  if (var_m && param_r_1.throwOnLimitExceeded) {
  throw new RangeError("Array limit exceeded. Only " + param_r_1.arrayLimit + " element" + (
  param_r_1.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  if (var_m) {
  var_l[var_h] = var_s_1;
  dep_auth_header_injector.markOverflow(var_l, var_h);
  }
  else if (var_f !== "__proto__") {
  var_l[var_f] = var_s_1;
  }
  }
  }
  else {
  var_l = {
  0: var_s_1
  };
  }
  }
  var_s_1 = var_l;
  }
  return var_s_1;
  }
  (var_a, param_t, param_r, param_i);
  }
  }
  }
  moduleObj.exports = function (param_e, param_t) {
  var var_r = function (param_e_1) {
  if (!param_e_1) {
  return obj_a;
  }
  if (param_e_1.allowEmptyArrays !== undefined && typeof param_e_1.allowEmptyArrays != "boolean") {
  throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (param_e_1.decodeDotInKeys !== undefined && typeof param_e_1.decodeDotInKeys != "boolean") {
  throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (param_e_1.decoder !== null && param_e_1.decoder !== undefined &&
  typeof param_e_1.decoder != "function") {
  throw new TypeError("Decoder has to be a function.");
  }
  if (param_e_1.charset !== undefined && param_e_1.charset !== "utf-8" &&
  param_e_1.charset !== "iso-8859-1") {
  throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  if (param_e_1.throwOnLimitExceeded !== undefined && typeof param_e_1.throwOnLimitExceeded != "boolean") {
  throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  }
  var var_t = param_e_1.charset === undefined ? obj_a.charset :
  param_e_1.charset;
  var var_r_1 = param_e_1.duplicates === undefined ? obj_a.duplicates :
  param_e_1.duplicates;
  if (var_r_1 !== "combine" && var_r_1 !== "first" && var_r_1 !== "last") {
  throw new TypeError("The duplicates option must be either combine, first, or last");
  }
  return {
  allowDots: param_e_1.allowDots === undefined ? param_e_1.decodeDotInKeys === true ||
  obj_a.allowDots : !!param_e_1.allowDots,
  allowEmptyArrays: typeof param_e_1.allowEmptyArrays == "boolean" ?
  !!param_e_1.allowEmptyArrays : obj_a.allowEmptyArrays,
  allowPrototypes: typeof param_e_1.allowPrototypes == "boolean" ?
  param_e_1.allowPrototypes : obj_a.allowPrototypes,
  allowSparse: typeof param_e_1.allowSparse == "boolean" ? param_e_1.allowSparse :
  obj_a.allowSparse,
  arrayLimit: typeof param_e_1.arrayLimit == "number" ? param_e_1.arrayLimit :
  obj_a.arrayLimit,
  charset: var_t,
  charsetSentinel: typeof param_e_1.charsetSentinel == "boolean" ?
  param_e_1.charsetSentinel : obj_a.charsetSentinel,
  comma: typeof param_e_1.comma == "boolean" ? param_e_1.comma :
  obj_a.comma,
  decodeDotInKeys: typeof param_e_1.decodeDotInKeys == "boolean" ?
  param_e_1.decodeDotInKeys : obj_a.decodeDotInKeys,
  decoder: typeof param_e_1.decoder == "function" ? param_e_1.decoder :
  obj_a.decoder,
  delimiter: typeof param_e_1.delimiter == "string" || dep_auth_header_injector.isRegExp(
  param_e_1.delimiter) ? param_e_1.delimiter : obj_a.delimiter,
  depth: typeof param_e_1.depth == "number" || param_e_1.depth === false ?
  +param_e_1.depth : obj_a.depth,
  duplicates: var_r_1,
  ignoreQueryPrefix: param_e_1.ignoreQueryPrefix === true,
  interpretNumericEntities: typeof param_e_1.interpretNumericEntities == "boolean" ?
  param_e_1.interpretNumericEntities : obj_a.interpretNumericEntities,
  parameterLimit: typeof param_e_1.parameterLimit == "number" ?
  param_e_1.parameterLimit : obj_a.parameterLimit,
  parseArrays: param_e_1.parseArrays !== false,
  plainObjects: typeof param_e_1.plainObjects == "boolean" ?
  param_e_1.plainObjects : obj_a.plainObjects,
  strictDepth: typeof param_e_1.strictDepth == "boolean" ? !!param_e_1.strictDepth :
  obj_a.strictDepth,
  strictMerge: typeof param_e_1.strictMerge == "boolean" ? !!param_e_1.strictMerge :
  obj_a.strictMerge,
  strictNullHandling: typeof param_e_1.strictNullHandling == "boolean" ?
  param_e_1.strictNullHandling : obj_a.strictNullHandling,
  throwOnLimitExceeded: typeof param_e_1.throwOnLimitExceeded == "boolean" &&
  param_e_1.throwOnLimitExceeded
  };
  }
  (param_t);
  if (param_e === "" || param_e == null) {
  if (var_r.plainObjects) {
  return {
  __proto__: null
  };
  }
  else {
  return {
  };
  }
  }
  var var_l = typeof param_e == "string" ? function (param_e_1, param_t_1) {
  var obj_r = {
  __proto__: null
  };
  var var_u_1 = param_t_1.ignoreQueryPrefix ? param_e_1.replace(/^\?/, "") :
  param_e_1;
  var_u_1 = var_u_1.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var var_l_1 = param_t_1.parameterLimit === Infinity ? undefined :
  param_t_1.parameterLimit;
  var var_d_1 = var_u_1.split(param_t_1.delimiter, param_t_1.throwOnLimitExceeded &&
  var_l_1 !== undefined ? var_l_1 + 1 : var_l_1);
  if (param_t_1.throwOnLimitExceeded && var_l_1 !== undefined &&
  var_d_1.length > var_l_1) {
  throw new RangeError("Parameter limit exceeded. Only " + var_l_1 + " parameter" + (
  var_l_1 === 1 ? "" : "s") + " allowed.");
  }
  var var_p_1;
  var var_f = -1;
  var var_h_1 = param_t_1.charset;
  if (param_t_1.charsetSentinel) {
  for (var_p_1 = 0;
  var_p_1 < var_d_1.length;
  ++var_p_1) {
  if (var_d_1[var_p_1].indexOf("utf8=") === 0) {
  if (var_d_1[var_p_1] === "utf8=%E2%9C%93") {
  var_h_1 = "utf-8";
  }
  else if (var_d_1[var_p_1] === "utf8=%26%2310003%3B") {
  var_h_1 = "iso-8859-1";
  }
  var_f = var_p_1;
  var_p_1 = var_d_1.length;
  }
  }
  }
  for (var_p_1 = 0;
  var_p_1 < var_d_1.length;
  ++var_p_1) {
  if (var_p_1 !== var_f) {
  var var_m_1;
  var var_g;
  var var_v = var_d_1[var_p_1];
  var var_y = var_v.indexOf("]=");
  var var__ = var_y === -1 ? var_v.indexOf("=") : var_y + 1;
  if (var__ === -1) {
  var_m_1 = param_t_1.decoder(var_v, obj_a.decoder, var_h_1, "key");
  var_g = param_t_1.strictNullHandling ? null : "";
  }
  else if ((var_m_1 = param_t_1.decoder(var_v.slice(0, var__), obj_a.decoder, var_h_1,
  "key")) !== null) {
  var_g = dep_auth_header_injector.maybeMap(var_c(var_v.slice(var__ + 1), param_t_1,
  var_i(obj_r[var_m_1]) ? obj_r[var_m_1].length : 0), function (param_e_2) {
  return param_t_1.decoder(param_e_2, obj_a.decoder, var_h_1, "value");
  }
  );
  }
  if (var_g && param_t_1.interpretNumericEntities && var_h_1 === "iso-8859-1") {
  var_g = var_s(String(var_g));
  }
  if (var_v.indexOf("[]=") > -1) {
  var_g = var_i(var_g) ? [var_g] : var_g;
  }
  if (param_t_1.comma && var_i(var_g) && var_g.length > param_t_1.arrayLimit) {
  var_g = dep_auth_header_injector.combine([], var_g, param_t_1.arrayLimit, param_t_1.plainObjects,
  param_t_1.throwOnLimitExceeded);
  }
  if (var_m_1 !== null) {
  var var_b = var_o.call(obj_r, var_m_1);
  if (var_b && (param_t_1.duplicates === "combine" || var_v.indexOf("[]=") > -1)) {
  obj_r[var_m_1] = dep_auth_header_injector.combine(obj_r[var_m_1], var_g, param_t_1.arrayLimit,
  param_t_1.plainObjects, param_t_1.throwOnLimitExceeded);
  }
  else if (!var_b || param_t_1.duplicates === "last") {
  obj_r[var_m_1] = var_g;
  }
  }
  }
  }
  return obj_r;
  }
  (param_e, var_r) : param_e;
  var var_d = var_r.plainObjects ? {
  __proto__: null
  }
  : {
  };
  for (var var_p = Object.keys(var_l), num_f = 0;
  num_f < var_p.length;
  ++num_f) {
  var var_h = var_p[num_f];
  var var_m = var_u(var_h, var_l[var_h], var_r, typeof param_e == "string");
  var_d = dep_auth_header_injector.merge(var_d, var_m, var_r);
  }
  if (var_r.allowSparse === true) {
  return var_d;
  }
  else {
  return dep_auth_header_injector.compact(var_d);
  }
  };
  };
