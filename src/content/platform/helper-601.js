// Module 601 - Savior Helper 601
export default function (moduleObj, exportsObj, requireFn) {
  var dep_helper_602 = requireFn(602),
  dep_helper_428 = requireFn(428),
  dep_helper_429 = requireFn(429),
  dep_helper_615 = requireFn(615),
  dep_helper_171 = requireFn(171);
  function var_u(param_t, param_e, param_r) {
  if (param_t = param_t.toLowerCase(), dep_helper_429[param_t]) return dep_helper_428.createCipheriv(
  param_t, param_e, param_r);
  if (dep_helper_615[param_t]) return new dep_helper_602({
  key: param_e,
  iv: param_r,
  mode: param_t
  }
  );
  throw new TypeError("invalid suite type");
  }
  function var_c(param_t, param_e, param_r) {
  if (param_t = param_t.toLowerCase(), dep_helper_429[param_t]) return dep_helper_428.createDecipheriv(
  param_t, param_e, param_r);
  if (dep_helper_615[param_t]) return new dep_helper_602({
  key: param_e,
  iv: param_r,
  mode: param_t,
  decrypt: !0
  }
  );
  throw new TypeError("invalid suite type");
  }
  exportsObj.createCipher = exportsObj.Cipher = function (param_t, param_e) {
  var var_r, var_n;
  if (param_t = param_t.toLowerCase(), dep_helper_429[param_t]) var_r = dep_helper_429[param_t].key,
  var_n = dep_helper_429[param_t].iv;
  else {
  if (!dep_helper_615[param_t]) throw new TypeError("invalid suite type");
  var_r = 8 * dep_helper_615[param_t].key, var_n = dep_helper_615[param_t].iv;
  }
  var var_i = dep_helper_171(param_e, !1, var_r, var_n);
  return var_u(param_t, var_i.key, var_i.iv);
  }
  , exportsObj.createCipheriv = exportsObj.Cipheriv = var_u, exportsObj.createDecipher = exportsObj.Decipher = function (
  param_t, param_e) {
  var var_r, var_n;
  if (param_t = param_t.toLowerCase(), dep_helper_429[param_t]) var_r = dep_helper_429[param_t].key,
  var_n = dep_helper_429[param_t].iv;
  else {
  if (!dep_helper_615[param_t]) throw new TypeError("invalid suite type");
  var_r = 8 * dep_helper_615[param_t].key, var_n = dep_helper_615[param_t].iv;
  }
  var var_i = dep_helper_171(param_e, !1, var_r, var_n);
  return var_c(param_t, var_i.key, var_i.iv);
  }
  , exportsObj.createDecipheriv = exportsObj.Decipheriv = var_c, exportsObj.listCiphers = exportsObj.getCiphers = function (
  ) {
  return Object.keys(dep_helper_615).concat(dep_helper_428.getCiphers());
  };
  };
