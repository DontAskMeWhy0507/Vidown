// Module 4 [utilities] - CryptoJS cryptographic component (crypto-core)
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  var var_r;
  var_r = var_r || function (param_e, param_r) {
  var var_o;
  if (typeof window != "undefined" && window.crypto) {
  var_o = window.crypto;
  }
  if (typeof self != "undefined" && self.crypto) {
  var_o = self.crypto;
  }
  if (typeof globalThis != "undefined" && globalThis.crypto) {
  var_o = globalThis.crypto;
  }
  if (!var_o && typeof window != "undefined" && window.msCrypto) {
  var_o = window.msCrypto;
  }
  if (!var_o && param_t !== undefined && param_t.crypto) {
  var_o = param_t.crypto;
  }
  if (!var_o) {
  try {
  var_o = requireFn(50);
  }
  catch (var_e) {
  }
  }
  function var_i() {
  if (var_o) {
  if (typeof var_o.getRandomValues == "function") {
  try {
  return var_o.getRandomValues(new Uint32Array(1))[0];
  }
  catch (var_e) {
  }
  }
  if (typeof var_o.randomBytes == "function") {
  try {
  return var_o.randomBytes(4).readInt32LE();
  }
  catch (var_e) {
  }
  }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
  }
  var var_a = Object.create || function () {
  function var_e() {
  }
  return function (param_t_1) {
  var var_n;
  var_e.prototype = param_t_1;
  var_n = new var_e();
  var_e.prototype = null;
  return var_n;
  };
  }
  ();
  var obj_s = {
  };
  var var_c = obj_s.lib = {
  };
  var var_l = var_c.Base = {
  extend: function (param_e_1) {
  var var_t = var_a(this);
  if (param_e_1) {
  var_t.mixIn(param_e_1);
  }
  if (!var_t.hasOwnProperty("init") || this.init === var_t.init) {
  var_t.init = function () {
  var_t.$super.init.apply(this, arguments);
  };
  }
  var_t.init.prototype = var_t;
  var_t.$super = this;
  return var_t;
  }
  ,
  create: function () {
  var var_e = this.extend();
  var_e.init.apply(var_e, arguments);
  return var_e;
  }
  ,
  init: function () {
  }
  ,
  mixIn: function (param_e_1) {
  for (var var_t in param_e_1) {
  if (param_e_1.hasOwnProperty(var_t)) {
  this[var_t] = param_e_1[var_t];
  }
  }
  if (param_e_1.hasOwnProperty("toString")) {
  this.toString = param_e_1.toString;
  }
  }
  ,
  clone: function () {
  return this.init.prototype.extend(this);
  }
  };
  var var_u = var_c.WordArray = var_l.extend({
  init: function (param_e_1, param_t_1) {
  param_e_1 = this.words = param_e_1 || [];
  this.sigBytes = param_t_1 ?? param_e_1.length * 4;
  }
  ,
  toString: function (param_e_1) {
  return (param_e_1 || var_f).stringify(this);
  }
  ,
  concat: function (param_e_1) {
  var var_t = this.words;
  var var_n = param_e_1.words;
  var var_r_1 = this.sigBytes;
  var var_o_1 = param_e_1.sigBytes;
  this.clamp();
  if (var_r_1 % 4) {
  for (var num_i = 0;
  num_i < var_o_1;
  num_i++) {
  var var_a_1 = var_n[num_i >>> 2] >>> 24 - num_i % 4 * 8 & 255;
  var_t[var_r_1 + num_i >>> 2] |= var_a_1 << 24 - (var_r_1 + num_i) % 4 * 8;
  }
  }
  else {
  for (var num_s = 0;
  num_s < var_o_1;
  num_s += 4) {
  var_t[var_r_1 + num_s >>> 2] = var_n[num_s >>> 2];
  }
  }
  this.sigBytes += var_o_1;
  return this;
  }
  ,
  clamp: function () {
  var var_t = this.words;
  var var_n = this.sigBytes;
  var_t[var_n >>> 2] &= -1 << 32 - var_n % 4 * 8;
  var_t.length = param_e.ceil(var_n / 4);
  }
  ,
  clone: function () {
  var var_e = var_l.clone.call(this);
  var_e.words = this.words.slice(0);
  return var_e;
  }
  ,
  random: function (param_e_1) {
  var list_t = [];
  for (var num_n = 0;
  num_n < param_e_1;
  num_n += 4) {
  list_t.push(var_i());
  }
  return new var_u.init(list_t, param_e_1);
  }
  }
  );
  var var_d = obj_s.enc = {
  };
  var var_f = var_d.Hex = {
  stringify: function (param_e_1) {
  var var_t = param_e_1.words;
  for (var var_n = param_e_1.sigBytes, list_r = [], num_o = 0;
  num_o < var_n;
  num_o++) {
  var var_i_1 = var_t[num_o >>> 2] >>> 24 - num_o % 4 * 8 & 255;
  list_r.push((var_i_1 >>> 4).toString(16));
  list_r.push((var_i_1 & 15).toString(16));
  }
  return list_r.join("");
  }
  ,
  parse: function (param_e_1) {
  for (var var_t = param_e_1.length, list_n = [], num_r = 0;
  num_r < var_t;
  num_r += 2) {
  list_n[num_r >>> 3] |= parseInt(param_e_1.substr(num_r, 2), 16) << 24 - num_r % 8 * 4;
  }
  return new var_u.init(list_n, var_t / 2);
  }
  };
  var var_p = var_d.Latin1 = {
  stringify: function (param_e_1) {
  var var_t = param_e_1.words;
  for (var var_n = param_e_1.sigBytes, list_r = [], num_o = 0;
  num_o < var_n;
  num_o++) {
  var var_i_1 = var_t[num_o >>> 2] >>> 24 - num_o % 4 * 8 & 255;
  list_r.push(String.fromCharCode(var_i_1));
  }
  return list_r.join("");
  }
  ,
  parse: function (param_e_1) {
  for (var var_t = param_e_1.length, list_n = [], num_r = 0;
  num_r < var_t;
  num_r++) {
  list_n[num_r >>> 2] |= (param_e_1.charCodeAt(num_r) & 255) << 24 - num_r % 4 * 8;
  }
  return new var_u.init(list_n, var_t);
  }
  };
  var var_h = var_d.Utf8 = {
  stringify: function (param_e_1) {
  try {
  return decodeURIComponent(escape(var_p.stringify(param_e_1)));
  }
  catch (var_e) {
  throw new Error("Malformed UTF-8 data");
  }
  }
  ,
  parse: function (param_e_1) {
  return var_p.parse(unescape(encodeURIComponent(param_e_1)));
  }
  };
  var var_g = var_c.BufferedBlockAlgorithm = var_l.extend({
  reset: function () {
  this._data = new var_u.init();
  this._nDataBytes = 0;
  }
  ,
  _append: function (param_e_1) {
  if (typeof param_e_1 == "string") {
  param_e_1 = var_h.parse(param_e_1);
  }
  this._data.concat(param_e_1);
  this._nDataBytes += param_e_1.sigBytes;
  }
  ,
  _process: function (param_t_1) {
  var var_n;
  var var_r_1 = this._data;
  var var_o_1 = var_r_1.words;
  var var_i_1 = var_r_1.sigBytes;
  var var_a_1 = this.blockSize;
  var var_s = var_i_1 / (var_a_1 * 4);
  var var_c_1 = (var_s = param_t_1 ? param_e.ceil(var_s) : param_e.max((var_s | 0) - this._minBufferSize,
  0)) * var_a_1;
  var var_l_1 = param_e.min(var_c_1 * 4, var_i_1);
  if (var_c_1) {
  for (var num_d = 0;
  num_d < var_c_1;
  num_d += var_a_1) {
  this._doProcessBlock(var_o_1, num_d);
  }
  var_n = var_o_1.splice(0, var_c_1);
  var_r_1.sigBytes -= var_l_1;
  }
  return new var_u.init(var_n, var_l_1);
  }
  ,
  clone: function () {
  var var_e = var_l.clone.call(this);
  var_e._data = this._data.clone();
  return var_e;
  }
  ,
  _minBufferSize: 0
  }
  );
  var_c.Hasher = var_g.extend({
  cfg: var_l.extend(),
  init: function (param_e_1) {
  this.cfg = this.cfg.extend(param_e_1);
  this.reset();
  }
  ,
  reset: function () {
  var_g.reset.call(this);
  this._doReset();
  }
  ,
  update: function (param_e_1) {
  this._append(param_e_1);
  this._process();
  return this;
  }
  ,
  finalize: function (param_e_1) {
  if (param_e_1) {
  this._append(param_e_1);
  }
  return this._doFinalize();
  }
  ,
  blockSize: 16,
  _createHelper: function (param_e_1) {
  return function (param_t_1, param_n) {
  return new param_e_1.init(param_n).finalize(param_t_1);
  };
  }
  ,
  _createHmacHelper: function (param_e_1) {
  return function (param_t_1, param_n) {
  return new var_m.HMAC.init(param_e_1, param_n).finalize(param_t_1);
  };
  }
  }
  );
  var var_m = obj_s.algo = {
  };
  return obj_s;
  }
  (Math);
  moduleObj.exports = var_r;
  }
  ).call(this, requireFn(13));
  };
