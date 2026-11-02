// Module 719 [utilities] - CDN security token and nonce provider
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_cookie_auth_provider = requireFn(516);
  var dep_auth_header_injector = requireFn(518);
  var dep_network_monitor = requireFn(440);
  var var_a = Object.prototype.hasOwnProperty;
  var obj_s = {
  brackets: function (param_e) {
  return param_e + "[]";
  }
  ,
  comma: "comma",
  indices: function (param_e, param_t) {
  return param_e + "[" + param_t + "]";
  }
  ,
  repeat: function (param_e) {
  return param_e;
  }
  };
  var var_c = Array.isArray;
  var var_u = Array.prototype.push;
  function var_l(param_e, param_t) {
  var_u.apply(param_e, var_c(param_t) ? param_t : [param_t]);
  }
  var var_d = Date.prototype.toISOString;
  var var_p = dep_network_monitor.default;
  var obj_f = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  commaRoundTrip: false,
  delimiter: "&",
  depth: Infinity,
  encode: true,
  encodeDotInKeys: false,
  encoder: dep_auth_header_injector.encode,
  encodeValuesOnly: false,
  filter: undefined,
  format: var_p,
  formatter: dep_network_monitor.formatters[var_p],
  indices: false,
  serializeDate: function (param_e) {
  return var_d.call(param_e);
  }
  ,
  skipNulls: false,
  strictNullHandling: false
  };
  var obj_h = {
  };
  var fn_m = function var_e(param_t, param_r, param_i, param_a, param_s, param_u,
  param_d, param_p, param_m, param_g, param_v, param_y, param__, param_b, param_w,
  param_E, param_D, param_T, param_k, param_A) {
  var var_C = param_t;
  if (param_A > param_k) {
  throw new RangeError("Input depth exceeded depth option of " + param_k);
  }
  var var_x;
  for (var var_S = param_T, num_O = 0, flag_I = false;
  (var_S = var_S.get(obj_h)) !== undefined && !flag_I;
  ) {
  var var_L = var_S.get(param_t);
  num_O += 1;
  if (var_L !== undefined) {
  if (var_L === num_O) {
  throw new RangeError("Cyclic object value");
  }
  flag_I = true;
  }
  if (var_S.get(obj_h) === undefined) {
  num_O = 0;
  }
  }
  if ((var_C = typeof param_g == "function" ? param_g(param_r, var_C) :
  var_C) instanceof Date) {
  var_C = param__(var_C);
  }
  else if (param_i === "comma" && var_c(var_C)) {
  var_C = dep_auth_header_injector.maybeMap(var_C, function (param_e) {
  if (param_e instanceof Date) {
  return param__(param_e);
  }
  else {
  return param_e;
  }
  }
  );
  }
  if (var_C === null) {
  if (param_u) {
  return param_w(param_m && !param_E ? param_m(param_r, obj_f.encoder, param_D, "key",
  param_b) : param_r);
  }
  var_C = "";
  }
  if (typeof (var_x = var_C) == "string" || typeof var_x == "number" ||
  typeof var_x == "boolean" || typeof var_x == "symbol" || typeof var_x == "bigint" ||
  dep_auth_header_injector.isBuffer(var_C)) {
  if (param_m) {
  return [param_w(param_E ? param_r : param_m(param_r, obj_f.encoder, param_D, "key",
  param_b)) + "=" + param_w(param_m(var_C, obj_f.encoder, param_D, "value", param_b))];
  }
  else {
  return [param_w(param_r) + "=" + param_w(String(var_C))];
  }
  }
  var var_R;
  var list_P = [];
  if (var_C === undefined) {
  return list_P;
  }
  if (param_i === "comma" && var_c(var_C)) {
  if (param_E && param_m) {
  var_C = dep_auth_header_injector.maybeMap(var_C, function (param_e) {
  if (param_e == null) {
  return param_e;
  }
  else {
  return param_m(param_e);
  }
  }
  );
  }
  var_R = [{
  value: var_C.length > 0 ? var_C.join(",") || null : undefined
  }
  ];
  }
  else if (var_c(param_g)) {
  var_R = param_g;
  }
  else {
  var var_B = Object.keys(var_C);
  var_R = param_v ? var_B.sort(param_v) : var_B;
  }
  var var_M = param_p ? String(param_r).replace(/\./g, "%2E") :
  String(param_r);
  var var_F = param_a && var_c(var_C) && var_C.length === 1 ?
  var_M + "[]" : var_M;
  if (param_s && var_c(var_C) && var_C.length === 0 && Object.keys(var_C).length === 0) {
  return var_F + "[]";
  }
  for (var num_U = 0;
  num_U < var_R.length;
  ++num_U) {
  var var_N = var_R[num_U];
  var var_j = typeof var_N == "object" && var_N && var_N.value !== undefined ?
  var_N.value : var_C[var_N];
  if (!param_d || var_j !== null) {
  var var_q = param_y && param_p ? String(var_N).replace(/\./g, "%2E") :
  String(var_N);
  var var_H = var_c(var_C) ? typeof param_i == "function" ? param_i(var_F, var_q) :
  var_F : var_F + (param_y ? "." + var_q : "[" + var_q + "]");
  param_T.set(param_t, num_O);
  var var_V = dep_cookie_auth_provider();
  var_V.set(obj_h, param_T);
  var_l(list_P, var_e(var_j, var_H, param_i, param_a, param_s, param_u, param_d,
  param_p, param_i === "comma" && param_E && var_c(var_C) ? null :
  param_m, param_g, param_v, param_y, param__, param_b, param_w, param_E, param_D,
  var_V, param_k, param_A + 1));
  }
  }
  return list_P;
  };
  moduleObj.exports = function (param_e, param_t) {
  var var_r;
  var var_o = param_e;
  var var_u_1 = function (param_e_1) {
  if (!param_e_1) {
  return obj_f;
  }
  if (param_e_1.allowEmptyArrays !== undefined && typeof param_e_1.allowEmptyArrays != "boolean") {
  throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (param_e_1.encodeDotInKeys !== undefined && typeof param_e_1.encodeDotInKeys != "boolean") {
  throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (param_e_1.encoder !== null && param_e_1.encoder !== undefined &&
  typeof param_e_1.encoder != "function") {
  throw new TypeError("Encoder has to be a function.");
  }
  var var_t = param_e_1.charset || obj_f.charset;
  if (param_e_1.charset !== undefined && param_e_1.charset !== "utf-8" &&
  param_e_1.charset !== "iso-8859-1") {
  throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var var_r_1 = dep_network_monitor.default;
  if (param_e_1.format !== undefined) {
  if (!var_a.call(dep_network_monitor.formatters, param_e_1.format)) {
  throw new TypeError("Unknown format option provided.");
  }
  var_r_1 = param_e_1.format;
  }
  var var_n;
  var var_o_1 = dep_network_monitor.formatters[var_r_1];
  var var_u_2 = obj_f.filter;
  if (typeof param_e_1.filter == "function" || var_c(param_e_1.filter)) {
  var_u_2 = param_e_1.filter;
  }
  var_n = param_e_1.arrayFormat in obj_s ? param_e_1.arrayFormat :
  "indices" in param_e_1 ? param_e_1.indices ? "indices" : "repeat" :
  obj_f.arrayFormat;
  if ("commaRoundTrip" in param_e_1 && typeof param_e_1.commaRoundTrip != "boolean") {
  throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var var_l_1 = param_e_1.allowDots === undefined ? param_e_1.encodeDotInKeys === true ||
  obj_f.allowDots : !!param_e_1.allowDots;
  return {
  addQueryPrefix: typeof param_e_1.addQueryPrefix == "boolean" ?
  param_e_1.addQueryPrefix : obj_f.addQueryPrefix,
  allowDots: var_l_1,
  allowEmptyArrays: typeof param_e_1.allowEmptyArrays == "boolean" ?
  !!param_e_1.allowEmptyArrays : obj_f.allowEmptyArrays,
  arrayFormat: var_n,
  charset: var_t,
  charsetSentinel: typeof param_e_1.charsetSentinel == "boolean" ?
  param_e_1.charsetSentinel : obj_f.charsetSentinel,
  commaRoundTrip: !!param_e_1.commaRoundTrip,
  delimiter: param_e_1.delimiter === undefined ? obj_f.delimiter :
  param_e_1.delimiter,
  depth: typeof param_e_1.depth == "number" ? param_e_1.depth :
  obj_f.depth,
  encode: typeof param_e_1.encode == "boolean" ? param_e_1.encode :
  obj_f.encode,
  encodeDotInKeys: typeof param_e_1.encodeDotInKeys == "boolean" ?
  param_e_1.encodeDotInKeys : obj_f.encodeDotInKeys,
  encoder: typeof param_e_1.encoder == "function" ? param_e_1.encoder :
  obj_f.encoder,
  encodeValuesOnly: typeof param_e_1.encodeValuesOnly == "boolean" ?
  param_e_1.encodeValuesOnly : obj_f.encodeValuesOnly,
  filter: var_u_2,
  format: var_r_1,
  formatter: var_o_1,
  serializeDate: typeof param_e_1.serializeDate == "function" ?
  param_e_1.serializeDate : obj_f.serializeDate,
  skipNulls: typeof param_e_1.skipNulls == "boolean" ? param_e_1.skipNulls :
  obj_f.skipNulls,
  sort: typeof param_e_1.sort == "function" ? param_e_1.sort :
  null,
  strictNullHandling: typeof param_e_1.strictNullHandling == "boolean" ?
  param_e_1.strictNullHandling : obj_f.strictNullHandling
  };
  }
  (param_t);
  if (typeof var_u_1.filter == "function") {
  var_o = (0, var_u_1.filter)("", var_o);
  }
  else if (var_c(var_u_1.filter)) {
  var_r = var_u_1.filter;
  }
  var list_d = [];
  if (typeof var_o != "object" || var_o === null) {
  return "";
  }
  var var_p_1 = obj_s[var_u_1.arrayFormat];
  var var_h = var_p_1 === "comma" && var_u_1.commaRoundTrip;
  var_r ||= Object.keys(var_o);
  if (var_u_1.sort) {
  var_r.sort(var_u_1.sort);
  }
  var var_g = dep_cookie_auth_provider();
  for (var num_v = 0;
  num_v < var_r.length;
  ++num_v) {
  var var_y = var_r[num_v];
  if (var_y != null) {
  var var__ = var_o[var_y];
  if (!var_u_1.skipNulls || var__ !== null) {
  var var_b = var_u_1.encodeDotInKeys ? String(var_y).replace(/\./g, "%2E") :
  String(var_y);
  var_l(list_d, fn_m(var__, var_b, var_p_1, var_h, var_u_1.allowEmptyArrays, var_u_1.strictNullHandling,
  var_u_1.skipNulls, var_u_1.encodeDotInKeys, var_u_1.encode ?
  var_u_1.encoder : null, var_u_1.filter, var_u_1.sort, var_u_1.allowDots, var_u_1.serializeDate,
  var_u_1.format, var_u_1.formatter, var_u_1.encodeValuesOnly, var_u_1.charset, var_g,
  var_u_1.depth, 0));
  }
  }
  }
  var var_w = list_d.join(var_u_1.delimiter);
  var var_E = var_u_1.addQueryPrefix === true ? "?" : "";
  if (var_u_1.charsetSentinel) {
  if (var_u_1.charset === "iso-8859-1") {
  var_E += "utf8=%26%2310003%3B" + var_u_1.delimiter;
  }
  else {
  var_E += "utf8=%E2%9C%93" + var_u_1.delimiter;
  }
  }
  if (var_w.length > 0) {
  return var_E + var_w;
  }
  else {
  return "";
  }
  };
  };
