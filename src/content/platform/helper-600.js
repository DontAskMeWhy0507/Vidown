// Module 600 - Savior Helper 600
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var var_n,
  var_i,
  var_o = requireFn(25).Buffer,
  dep_helper_473 = requireFn(473),
  dep_helper_474 = requireFn(474),
  dep_helper_475 = requireFn(475),
  dep_helper_476 = requireFn(476),
  var_l = param_e.crypto && param_e.crypto.subtle,
  obj_f = {
  sha: "SHA-1",
  "sha-1": "SHA-1",
  sha1: "SHA-1",
  sha256: "SHA-256",
  "sha-256": "SHA-256",
  sha384: "SHA-384",
  "sha-384": "SHA-384",
  "sha-512": "SHA-512",
  sha512: "SHA-512"
  }
  ,
  list_d = [];
  function var_h() {
  return var_i || (var_i = param_e.process && param_e.process.nextTick ?
  param_e.process.nextTick : param_e.queueMicrotask ? param_e.queueMicrotask :
  param_e.setImmediate ? param_e.setImmediate : param_e.setTimeout);
  }
  function var_p(param_t, param_e_1, param_r, param_n, param_i) {
  return var_l.importKey("raw", param_t, {
  name: "PBKDF2"
  }
  , !1, ["deriveBits"]).then(function (param_t_1) {
  return var_l.deriveBits({
  name: "PBKDF2",
  salt: param_e_1,
  iterations: param_r,
  hash: {
  name: param_i
  }
  }
  , param_t_1, param_n << 3);
  }
  ).then(function (param_t_1) {
  return var_o.from(param_t_1);
  }
  );
  }
  moduleObj.exports = function (param_t, param_r, param_i, param_v, param_m, param_y) {
  if ("function" == typeof param_m && (param_y = param_m, param_m = void 0), param_v = dep_helper_473(
  param_i, param_v), param_t = dep_helper_476(param_t, dep_helper_474, "Password"),
  param_r = dep_helper_476(param_r, dep_helper_474, "Salt"), "function" != typeof param_y) throw new Error(
  "No callback provided to pbkdf2");
  var var_g = obj_f[(param_m = param_m || "sha1").toLowerCase()];
  var_g && "function" == typeof param_e.Promise ? function (param_t_1, param_e_1) {
  param_t_1.then(function (param_t_2) {
  var_h()(function () {
  param_e_1(null, param_t_2);
  }
  );
  }
  , function (param_t_2) {
  var_h()(function () {
  param_e_1(param_t_2);
  }
  );
  }
  );
  }
  (function (param_t_1) {
  if (param_e.process && !param_e.process.browser) return Promise.resolve(!1);
  if (!var_l || !var_l.importKey || !var_l.deriveBits) return Promise.resolve(!1);
  if (void 0 !== list_d[param_t_1]) return list_d[param_t_1];
  var var_r = var_p(var_n = var_n || var_o.alloc(8), var_n, 10, 128, param_t_1).then(
  function () {
  return !0;
  }
  , function () {
  return !1;
  }
  );
  return list_d[param_t_1] = var_r, var_r;
  }
  (var_g).then(function (param_e_1) {
  return param_e_1 ? var_p(param_t, param_r, param_i, param_v, var_g) :
  dep_helper_475(param_t, param_r, param_i, param_v, param_m);
  }
  ), param_y) : var_h()(function () {
  var var_e;
  try {
  var_e = dep_helper_475(param_t, param_r, param_i, param_v, param_m);
  }
  catch (var_t) {
  return void param_y(var_t);
  }
  param_y(null, var_e);
  }
  );
  };
  }
  ).call(this, requireFn(13));
  };
