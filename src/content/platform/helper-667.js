// Module 667 - Savior Helper 667
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  var dep_helper_434 = requireFn(434),
  dep_module_668 = requireFn(668);
  moduleObj.exports = function (param_t) {
  return new var_a(param_t);
  };
  var obj_o = {
  secp256k1: {
  name: "secp256k1",
  byteLength: 32
  }
  ,
  secp224r1: {
  name: "p224",
  byteLength: 28
  }
  ,
  prime256v1: {
  name: "p256",
  byteLength: 32
  }
  ,
  prime192v1: {
  name: "p192",
  byteLength: 24
  }
  ,
  ed25519: {
  name: "ed25519",
  byteLength: 32
  }
  ,
  secp384r1: {
  name: "p384",
  byteLength: 48
  }
  ,
  secp521r1: {
  name: "p521",
  byteLength: 66
  }
  };
  function var_a(param_t) {
  this.curveType = obj_o[param_t], this.curveType || (this.curveType = {
  name: param_t
  }
  ), this.curve = new dep_helper_434.ec(this.curveType.name), this.keys = void 0;
  }
  function var_s(param_t, param_r, param_n) {
  Array.isArray(param_t) || (param_t = param_t.toArray());
  var var_i = new param_e(param_t);
  if (param_n && var_i.length < param_n) {
  var var_o = new param_e(param_n - var_i.length);
  var_o.fill(0), var_i = param_e.concat([var_o, var_i]);
  }
  return param_r ? var_i.toString(param_r) : var_i;
  }
  obj_o.p224 = obj_o.secp224r1, obj_o.p256 = obj_o.secp256r1 = obj_o.prime256v1,
  obj_o.p192 = obj_o.secp192r1 = obj_o.prime192v1, obj_o.p384 = obj_o.secp384r1,
  obj_o.p521 = obj_o.secp521r1, var_a.prototype.generateKeys = function (param_t,
  param_e_1) {
  return this.keys = this.curve.genKeyPair(), this.getPublicKey(param_t, param_e_1);
  }
  , var_a.prototype.computeSecret = function (param_t, param_r, param_n) {
  return param_r = param_r || "utf8", param_e.isBuffer(param_t) ||
  (param_t = new param_e(param_t, param_r)), var_s(this.curve.keyFromPublic(param_t).getPublic(
  ).mul(this.keys.getPrivate()).getX(), param_n, this.curveType.byteLength);
  }
  , var_a.prototype.getPublicKey = function (param_t, param_e_1) {
  var var_r = this.keys.getPublic("compressed" === param_e_1, !0);
  return "hybrid" === param_e_1 && (var_r[var_r.length - 1] % 2 ?
  var_r[0] = 7 : var_r[0] = 6), var_s(var_r, param_t);
  }
  , var_a.prototype.getPrivateKey = function (param_t) {
  return var_s(this.keys.getPrivate(), param_t);
  }
  , var_a.prototype.setPublicKey = function (param_t, param_r) {
  return param_r = param_r || "utf8", param_e.isBuffer(param_t) ||
  (param_t = new param_e(param_t, param_r)), this.keys._importPublic(param_t), this;
  }
  , var_a.prototype.setPrivateKey = function (param_t, param_r) {
  param_r = param_r || "utf8", param_e.isBuffer(param_t) || (param_t = new param_e(
  param_t, param_r));
  var var_n = new dep_module_668(param_t);
  return var_n = var_n.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(
  var_n), this;
  };
  }
  ).call(this, requireFn(27).Buffer);
  };
