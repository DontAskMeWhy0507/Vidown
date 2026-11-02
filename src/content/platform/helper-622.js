// Module 622 - Savior Helper 622
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  var dep_module_485 = requireFn(485),
  var_i = new (requireFn(486))(),
  var_o = new dep_module_485(24),
  var_a = new dep_module_485(11),
  var_s = new dep_module_485(10),
  var_u = new dep_module_485(3),
  var_c = new dep_module_485(7),
  dep_helper_484 = requireFn(484),
  dep_helper_139 = requireFn(139);
  function var_d(param_t, param_r) {
  return param_r = param_r || "utf8", param_e.isBuffer(param_t) ||
  (param_t = new param_e(param_t, param_r)), this._pub = new dep_module_485(param_t),
  this;
  }
  function var_h(param_t, param_r) {
  return param_r = param_r || "utf8", param_e.isBuffer(param_t) ||
  (param_t = new param_e(param_t, param_r)), this._priv = new dep_module_485(param_t),
  this;
  }
  moduleObj.exports = var_v;
  var obj_p = {
  };
  function var_v(param_t, param_e_1, param_r) {
  this.setGenerator(param_e_1), this.__prime = new dep_module_485(param_t), this._prime = dep_module_485.mont(
  this.__prime), this._primeLen = param_t.length, this._pub = void 0, this._priv = void 0,
  this._primeCode = void 0, param_r ? (this.setPublicKey = var_d, this.setPrivateKey = var_h) :
  this._primeCode = 8;
  }
  function var_m(param_t, param_r) {
  var var_n = new param_e(param_t.toArray());
  return param_r ? var_n.toString(param_r) : var_n;
  }
  Object.defineProperty(var_v.prototype, "verifyError", {
  enumerable: !0,
  get: function () {
  return "number" != typeof this._primeCode && (this._primeCode = function (param_t,
  param_e_1) {
  var var_r = param_e_1.toString("hex"),
  var_n = [var_r, param_t.toString(16)].join("_");
  if (var_n in obj_p) return obj_p[var_n];
  var var_f,
  num_d = 0;
  if (param_t.isEven() || !dep_helper_484.simpleSieve || !dep_helper_484.fermatTest(
  param_t) || !var_i.test(param_t)) return num_d += 1, num_d += "02" === var_r ||
  "05" === var_r ? 8 : 4, obj_p[var_n] = num_d, num_d;
  switch (var_i.test(param_t.shrn(1)) || (num_d += 2), var_r) {
  case "02":
  param_t.mod(var_o).cmp(var_a) && (num_d += 8);
  break;
  case "05":
  (var_f = param_t.mod(var_s)).cmp(var_u) && var_f.cmp(var_c) &&
  (num_d += 8);
  break;
  default:
  num_d += 4;
  }
  return obj_p[var_n] = num_d, num_d;
  }
  (this.__prime, this.__gen)), this._primeCode;
  }
  }
  ), var_v.prototype.generateKeys = function () {
  return this._priv || (this._priv = new dep_module_485(dep_helper_139(this._primeLen))),
  this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey(
  );
  }
  , var_v.prototype.computeSecret = function (param_t) {
  var var_r = (param_t = (param_t = new dep_module_485(param_t)).toRed(this._prime)).redPow(
  this._priv).fromRed(),
  var_i_1 = new param_e(var_r.toArray()),
  var_o_1 = this.getPrime();
  if (var_i_1.length < var_o_1.length) {
  var var_a_1 = new param_e(var_o_1.length - var_i_1.length);
  var_a_1.fill(0), var_i_1 = param_e.concat([var_a_1, var_i_1]);
  }
  return var_i_1;
  }
  , var_v.prototype.getPublicKey = function (param_t) {
  return var_m(this._pub, param_t);
  }
  , var_v.prototype.getPrivateKey = function (param_t) {
  return var_m(this._priv, param_t);
  }
  , var_v.prototype.getPrime = function (param_t) {
  return var_m(this.__prime, param_t);
  }
  , var_v.prototype.getGenerator = function (param_t) {
  return var_m(this._gen, param_t);
  }
  , var_v.prototype.setGenerator = function (param_t, param_r) {
  return param_r = param_r || "utf8", param_e.isBuffer(param_t) ||
  (param_t = new param_e(param_t, param_r)), this.__gen = param_t, this._gen = new dep_module_485(
  param_t), this;
  };
  }
  ).call(this, requireFn(27).Buffer);
  };
