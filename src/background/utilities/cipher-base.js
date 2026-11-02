// Module 8 [utilities] - CryptoJS cryptographic component (cipher-base)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_u;
  var var_l;
  var var_d;
  var var_p;
  var var_f;
  var var_h;
  var var_m;
  var var_g;
  var var_v;
  var var_y;
  var var__;
  var var_b;
  var var_w;
  var_n = requireFn(4);
  requireFn(17);
  moduleObj.exports = void (var_n.lib.Cipher || (var_o = var_n, var_i = var_o.lib,
  var_a = var_i.Base, var_s = var_i.WordArray, var_c = var_i.BufferedBlockAlgorithm,
  var_u = var_o.enc, var_u.Utf8, var_l = var_u.Base64, var_d = var_o.algo.EvpKDF,
  var_p = var_i.Cipher = var_c.extend({
  cfg: var_a.extend(),
  createEncryptor: function (param_e, param_t) {
  return this.create(this._ENC_XFORM_MODE, param_e, param_t);
  }
  ,
  createDecryptor: function (param_e, param_t) {
  return this.create(this._DEC_XFORM_MODE, param_e, param_t);
  }
  ,
  init: function (param_e, param_t, param_r) {
  this.cfg = this.cfg.extend(param_r);
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
  return var_w;
  }
  else {
  return var__;
  }
  }
  return function (param_t) {
  return {
  encrypt: function (param_r, param_n, param_o) {
  return var_e(param_n).encrypt(param_t, param_r, param_n, param_o);
  }
  ,
  decrypt: function (param_r, param_n, param_o) {
  return var_e(param_n).decrypt(param_t, param_r, param_n, param_o);
  }
  };
  };
  }
  ()
  }
  ), var_i.StreamCipher = var_p.extend({
  _doFinalize: function () {
  return this._process(true);
  }
  ,
  blockSize: 1
  }
  ), var_f = var_o.mode = {
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
  ), var_m = var_f.CBC = function () {
  var var_e = var_h.extend();
  function var_t(param_e, param_t, param_r) {
  var var_n_1;
  var var_o_1 = this._iv;
  if (var_o_1) {
  var_n_1 = var_o_1;
  this._iv = undefined;
  }
  else {
  var_n_1 = this._prevBlock;
  }
  for (var num_i = 0;
  num_i < param_r;
  num_i++) {
  param_e[param_t + num_i] ^= var_n_1[num_i];
  }
  }
  var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_r) {
  var var_n_1 = this._cipher;
  var var_o_1 = var_n_1.blockSize;
  var_t.call(this, param_e, param_r, var_o_1);
  var_n_1.encryptBlock(param_e, param_r);
  this._prevBlock = param_e.slice(param_r, param_r + var_o_1);
  }
  }
  );
  var_e.Decryptor = var_e.extend({
  processBlock: function (param_e, param_r) {
  var var_n_1 = this._cipher;
  var var_o_1 = var_n_1.blockSize;
  var var_i_1 = param_e.slice(param_r, param_r + var_o_1);
  var_n_1.decryptBlock(param_e, param_r);
  var_t.call(this, param_e, param_r, var_o_1);
  this._prevBlock = var_i_1;
  }
  }
  );
  return var_e;
  }
  (), var_g = (var_o.pad = {
  }
  ).Pkcs7 = {
  pad: function (param_e, param_t) {
  var var_r = param_t * 4;
  for (var var_n_1 = var_r - param_e.sigBytes % var_r, var_o_1 = var_n_1 << 24 | var_n_1 << 16 | var_n_1 << 8 | var_n_1,
  list_i = [], num_a = 0;
  num_a < var_n_1;
  num_a += 4) {
  list_i.push(var_o_1);
  }
  var var_c_1 = var_s.create(list_i, var_n_1);
  param_e.concat(var_c_1);
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  }
  , var_i.BlockCipher = var_p.extend({
  cfg: var_p.cfg.extend({
  mode: var_m,
  padding: var_g
  }
  ),
  reset: function () {
  var var_e;
  var_p.reset.call(this);
  var var_t = this.cfg;
  var var_r = var_t.iv;
  var var_n_1 = var_t.mode;
  if (this._xformMode == this._ENC_XFORM_MODE) {
  var_e = var_n_1.createEncryptor;
  }
  else {
  var_e = var_n_1.createDecryptor;
  this._minBufferSize = 1;
  }
  if (this._mode && this._mode.__creator == var_e) {
  this._mode.init(this, var_r && var_r.words);
  }
  else {
  this._mode = var_e.call(var_n_1, this, var_r && var_r.words);
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
  var var_r = param_e.salt;
  return (var_r ? var_s.create([1398893684, 1701076831]).concat(var_r).concat(var_t) :
  var_t).toString(var_l);
  }
  ,
  parse: function (param_e) {
  var var_t;
  var var_r = var_l.parse(param_e);
  var var_n_1 = var_r.words;
  if (var_n_1[0] == 1398893684 && var_n_1[1] == 1701076831) {
  var_t = var_s.create(var_n_1.slice(2, 4));
  var_n_1.splice(0, 4);
  var_r.sigBytes -= 16;
  }
  return var_v.create({
  ciphertext: var_r,
  salt: var_t
  }
  );
  }
  }
  , var__ = var_i.SerializableCipher = var_a.extend({
  cfg: var_a.extend({
  format: var_y
  }
  ),
  encrypt: function (param_e, param_t, param_r, param_n) {
  param_n = this.cfg.extend(param_n);
  var var_o_1 = param_e.createEncryptor(param_r, param_n);
  var var_i_1 = var_o_1.finalize(param_t);
  var var_a_1 = var_o_1.cfg;
  return var_v.create({
  ciphertext: var_i_1,
  key: param_r,
  iv: var_a_1.iv,
  algorithm: param_e,
  mode: var_a_1.mode,
  padding: var_a_1.padding,
  blockSize: param_e.blockSize,
  formatter: param_n.format
  }
  );
  }
  ,
  decrypt: function (param_e, param_t, param_r, param_n) {
  param_n = this.cfg.extend(param_n);
  param_t = this._parse(param_t, param_n.format);
  return param_e.createDecryptor(param_r, param_n).finalize(param_t.ciphertext);
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
  execute: function (param_e, param_t, param_r, param_n, param_o) {
  param_n ||= var_s.random(8);
  if (param_o) {
  var_i_1 = var_d.create({
  keySize: param_t + param_r,
  hasher: param_o
  }
  ).compute(param_e, param_n);
  }
  else {
  var var_i_1 = var_d.create({
  keySize: param_t + param_r
  }
  ).compute(param_e, param_n);
  }
  var var_a_1 = var_s.create(var_i_1.words.slice(param_t), param_r * 4);
  var_i_1.sigBytes = param_t * 4;
  return var_v.create({
  key: var_i_1,
  iv: var_a_1,
  salt: param_n
  }
  );
  }
  }
  , var_w = var_i.PasswordBasedCipher = var__.extend({
  cfg: var__.cfg.extend({
  kdf: var_b
  }
  ),
  encrypt: function (param_e, param_t, param_r, param_n) {
  var var_o_1 = (param_n = this.cfg.extend(param_n)).kdf.execute(param_r, param_e.keySize,
  param_e.ivSize, param_n.salt, param_n.hasher);
  param_n.iv = var_o_1.iv;
  var var_i_1 = var__.encrypt.call(this, param_e, param_t, var_o_1.key, param_n);
  var_i_1.mixIn(var_o_1);
  return var_i_1;
  }
  ,
  decrypt: function (param_e, param_t, param_r, param_n) {
  param_n = this.cfg.extend(param_n);
  param_t = this._parse(param_t, param_n.format);
  var var_o_1 = param_n.kdf.execute(param_r, param_e.keySize, param_e.ivSize, param_t.salt,
  param_n.hasher);
  param_n.iv = var_o_1.iv;
  return var__.decrypt.call(this, param_e, param_t, var_o_1.key, param_n);
  }
  }
  )));
  };
