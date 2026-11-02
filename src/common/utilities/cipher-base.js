// Module 8 [utilities] - CryptoJS cryptographic component (cipher-base)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var var_d;
  var var_f;
  var var_p;
  var var_h;
  var var_g;
  var var_m;
  var var_v;
  var var_y;
  var var_k;
  var var_b;
  var var__;
  var_r = requireFn(4);
  requireFn(17);
  moduleObj.exports = void (var_r.lib.Cipher || (var_o = var_r, var_i = var_o.lib,
  var_a = var_i.Base, var_s = var_i.WordArray, var_c = var_i.BufferedBlockAlgorithm,
  var_l = var_o.enc, var_l.Utf8, var_u = var_l.Base64, var_d = var_o.algo.EvpKDF,
  var_f = var_i.Cipher = var_c.extend({
  cfg: var_a.extend(),
  createEncryptor: function (param_e, param_t) {
  return this.create(this._ENC_XFORM_MODE, param_e, param_t);
  }
  ,
  createDecryptor: function (param_e, param_t) {
  return this.create(this._DEC_XFORM_MODE, param_e, param_t);
  }
  ,
  init: function (param_e, param_t, param_n) {
  this.cfg = this.cfg.extend(param_n);
  this._xformMode = param_e;
  this._key = param_t;
  this.reset();
  }
  ,
  reset: function () {
  var_c.reset.call(this);
  this._doReset();
  }
  ,
  process: function (param_e) {
  this._append(param_e);
  return this._process();
  }
  ,
  finalize: function (param_e) {
  if (param_e) {
  this._append(param_e);
  }
  return this._doFinalize();
  }
  ,
  keySize: 4,
  ivSize: 4,
  _ENC_XFORM_MODE: 1,
  _DEC_XFORM_MODE: 2,
  _createHelper: function () {
  function var_e(param_e) {
  if (typeof param_e == "string") {
  return var__;
  }
  else {
  return var_k;
  }
  }
  return function (param_t) {
  return {
  encrypt: function (param_n, param_r, param_o) {
  return var_e(param_r).encrypt(param_t, param_n, param_r, param_o);
  }
  ,
  decrypt: function (param_n, param_r, param_o) {
  return var_e(param_r).decrypt(param_t, param_n, param_r, param_o);
  }
  };
  };
  }
  ()
  }
  ), var_i.StreamCipher = var_f.extend({
  _doFinalize: function () {
  return this._process(true);
  }
  ,
  blockSize: 1
  }
  ), var_p = var_o.mode = {
  }
  , var_h = var_i.BlockCipherMode = var_a.extend({
  createEncryptor: function (param_e, param_t) {
  return this.Encryptor.create(param_e, param_t);
  }
  ,
  createDecryptor: function (param_e, param_t) {
  return this.Decryptor.create(param_e, param_t);
  }
  ,
  init: function (param_e, param_t) {
  this._cipher = param_e;
  this._iv = param_t;
  }
  }
  ), var_g = var_p.CBC = function () {
  var var_e = var_h.extend();
  function var_t(param_e, param_t, param_n) {
  var var_r_1;
  var var_o_1 = this._iv;
  if (var_o_1) {
  var_r_1 = var_o_1;
  this._iv = undefined;
  }
  else {
  var_r_1 = this._prevBlock;
  }
  for (var num_i = 0;
  num_i < param_n;
  num_i++) {
  param_e[param_t + num_i] ^= var_r_1[num_i];
  }
  }
  var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o_1 = var_r_1.blockSize;
  var_t.call(this, param_e, param_n, var_o_1);
  var_r_1.encryptBlock(param_e, param_n);
  this._prevBlock = param_e.slice(param_n, param_n + var_o_1);
  }
  }
  );
  var_e.Decryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o_1 = var_r_1.blockSize;
  var var_i_1 = param_e.slice(param_n, param_n + var_o_1);
  var_r_1.decryptBlock(param_e, param_n);
  var_t.call(this, param_e, param_n, var_o_1);
  this._prevBlock = var_i_1;
  }
  }
  );
  return var_e;
  }
  (), var_m = (var_o.pad = {
  }
  ).Pkcs7 = {
  pad: function (param_e, param_t) {
  var var_n = param_t * 4;
  for (var var_r_1 = var_n - param_e.sigBytes % var_n, var_o_1 = var_r_1 << 24 | var_r_1 << 16 | var_r_1 << 8 | var_r_1,
  list_i = [], num_a = 0;
  num_a < var_r_1;
  num_a += 4) {
  list_i.push(var_o_1);
  }
  var var_c_1 = var_s.create(list_i, var_r_1);
  param_e.concat(var_c_1);
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  }
  , var_i.BlockCipher = var_f.extend({
  cfg: var_f.cfg.extend({
  mode: var_g,
  padding: var_m
  }
  ),
  reset: function () {
  var var_e;
  var_f.reset.call(this);
  var var_t = this.cfg;
  var var_n = var_t.iv;
  var var_r_1 = var_t.mode;
  if (this._xformMode == this._ENC_XFORM_MODE) {
  var_e = var_r_1.createEncryptor;
  }
  else {
  var_e = var_r_1.createDecryptor;
  this._minBufferSize = 1;
  }
  if (this._mode && this._mode.__creator == var_e) {
  this._mode.init(this, var_n && var_n.words);
  }
  else {
  this._mode = var_e.call(var_r_1, this, var_n && var_n.words);
  this._mode.__creator = var_e;
  }
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  this._mode.processBlock(param_e, param_t);
  }
  ,
  _doFinalize: function () {
  var var_e;
  var var_t = this.cfg.padding;
  if (this._xformMode == this._ENC_XFORM_MODE) {
  var_t.pad(this._data, this.blockSize);
  var_e = this._process(true);
  }
  else {
  var_e = this._process(true);
  var_t.unpad(var_e);
  }
  return var_e;
  }
  ,
  blockSize: 4
  }
  ), var_v = var_i.CipherParams = var_a.extend({
  init: function (param_e) {
  this.mixIn(param_e);
  }
  ,
  toString: function (param_e) {
  return (param_e || this.formatter).stringify(this);
  }
  }
  ), var_y = (var_o.format = {
  }
  ).OpenSSL = {
  stringify: function (param_e) {
  var var_t = param_e.ciphertext;
  var var_n = param_e.salt;
  return (var_n ? var_s.create([1398893684, 1701076831]).concat(var_n).concat(var_t) :
  var_t).toString(var_u);
  }
  ,
  parse: function (param_e) {
  var var_t;
  var var_n = var_u.parse(param_e);
  var var_r_1 = var_n.words;
  if (var_r_1[0] == 1398893684 && var_r_1[1] == 1701076831) {
  var_t = var_s.create(var_r_1.slice(2, 4));
  var_r_1.splice(0, 4);
  var_n.sigBytes -= 16;
  }
  return var_v.create({
  ciphertext: var_n,
  salt: var_t
  }
  );
  }
  }
  , var_k = var_i.SerializableCipher = var_a.extend({
  cfg: var_a.extend({
  format: var_y
  }
  ),
  encrypt: function (param_e, param_t, param_n, param_r) {
  param_r = this.cfg.extend(param_r);
  var var_o_1 = param_e.createEncryptor(param_n, param_r);
  var var_i_1 = var_o_1.finalize(param_t);
  var var_a_1 = var_o_1.cfg;
  return var_v.create({
  ciphertext: var_i_1,
  key: param_n,
  iv: var_a_1.iv,
  algorithm: param_e,
  mode: var_a_1.mode,
  padding: var_a_1.padding,
  blockSize: param_e.blockSize,
  formatter: param_r.format
  }
  );
  }
  ,
  decrypt: function (param_e, param_t, param_n, param_r) {
  param_r = this.cfg.extend(param_r);
  param_t = this._parse(param_t, param_r.format);
  return param_e.createDecryptor(param_n, param_r).finalize(param_t.ciphertext);
  }
  ,
  _parse: function (param_e, param_t) {
  if (typeof param_e == "string") {
  return param_t.parse(param_e, this);
  }
  else {
  return param_e;
  }
  }
  }
  ), var_b = (var_o.kdf = {
  }
  ).OpenSSL = {
  execute: function (param_e, param_t, param_n, param_r, param_o) {
  param_r ||= var_s.random(8);
  if (param_o) {
  var_i_1 = var_d.create({
  keySize: param_t + param_n,
  hasher: param_o
  }
  ).compute(param_e, param_r);
  }
  else {
  var var_i_1 = var_d.create({
  keySize: param_t + param_n
  }
  ).compute(param_e, param_r);
  }
  var var_a_1 = var_s.create(var_i_1.words.slice(param_t), param_n * 4);
  var_i_1.sigBytes = param_t * 4;
  return var_v.create({
  key: var_i_1,
  iv: var_a_1,
  salt: param_r
  }
  );
  }
  }
  , var__ = var_i.PasswordBasedCipher = var_k.extend({
  cfg: var_k.cfg.extend({
  kdf: var_b
  }
  ),
  encrypt: function (param_e, param_t, param_n, param_r) {
  var var_o_1 = (param_r = this.cfg.extend(param_r)).kdf.execute(param_n, param_e.keySize,
  param_e.ivSize, param_r.salt, param_r.hasher);
  param_r.iv = var_o_1.iv;
  var var_i_1 = var_k.encrypt.call(this, param_e, param_t, var_o_1.key, param_r);
  var_i_1.mixIn(var_o_1);
  return var_i_1;
  }
  ,
  decrypt: function (param_e, param_t, param_n, param_r) {
  param_r = this.cfg.extend(param_r);
  param_t = this._parse(param_t, param_r.format);
  var var_o_1 = param_r.kdf.execute(param_n, param_e.keySize, param_e.ivSize, param_t.salt,
  param_r.hasher);
  param_r.iv = var_o_1.iv;
  return var_k.decrypt.call(this, param_e, param_t, var_o_1.key, param_r);
  }
  }
  )));
  };
