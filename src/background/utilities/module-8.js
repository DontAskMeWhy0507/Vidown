// Module 8 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var c;
  var u;
  var l;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var v;
  var y;
  var _;
  var b;
  var w;
  n = r(4);
  r(17);
  e.exports = void (n.lib.Cipher || (o = n, i = o.lib, a = i.Base, s = i.WordArray, c = i.BufferedBlockAlgorithm, u = o.enc, u.Utf8, l = u.Base64, d = o.algo.EvpKDF, p = i.Cipher = c.extend({
    cfg: a.extend(),
    createEncryptor: function (e, t) {
      return this.create(this._ENC_XFORM_MODE, e, t);
    },
    createDecryptor: function (e, t) {
      return this.create(this._DEC_XFORM_MODE, e, t);
    },
    init: function (e, t, r) {
      this.cfg = this.cfg.extend(r);
      this._xformMode = e;
      this._key = t;
      this.reset();
    },
    reset: function () {
      c.reset.call(this);
      this._doReset();
    },
    process: function (e) {
      this._append(e);
      return this._process();
    },
    finalize: function (e) {
      if (e) {
        this._append(e);
      }
      return this._doFinalize();
    },
    keySize: 4,
    ivSize: 4,
    _ENC_XFORM_MODE: 1,
    _DEC_XFORM_MODE: 2,
    _createHelper: function () {
      function e(e) {
        if (typeof e == "string") {
          return w;
        } else {
          return _;
        }
      }
      return function (t) {
        return {
          encrypt: function (r, n, o) {
            return e(n).encrypt(t, r, n, o);
          },
          decrypt: function (r, n, o) {
            return e(n).decrypt(t, r, n, o);
          }
        };
      };
    }()
  }), i.StreamCipher = p.extend({
    _doFinalize: function () {
      return this._process(true);
    },
    blockSize: 1
  }), f = o.mode = {}, h = i.BlockCipherMode = a.extend({
    createEncryptor: function (e, t) {
      return this.Encryptor.create(e, t);
    },
    createDecryptor: function (e, t) {
      return this.Decryptor.create(e, t);
    },
    init: function (e, t) {
      this._cipher = e;
      this._iv = t;
    }
  }), m = f.CBC = function () {
    var e = h.extend();
    function t(e, t, r) {
      var n;
      var o = this._iv;
      if (o) {
        n = o;
        this._iv = undefined;
      } else {
        n = this._prevBlock;
      }
      for (var i = 0; i < r; i++) {
        e[t + i] ^= n[i];
      }
    }
    e.Encryptor = e.extend({
      processBlock: function (e, r) {
        var n = this._cipher;
        var o = n.blockSize;
        t.call(this, e, r, o);
        n.encryptBlock(e, r);
        this._prevBlock = e.slice(r, r + o);
      }
    });
    e.Decryptor = e.extend({
      processBlock: function (e, r) {
        var n = this._cipher;
        var o = n.blockSize;
        var i = e.slice(r, r + o);
        n.decryptBlock(e, r);
        t.call(this, e, r, o);
        this._prevBlock = i;
      }
    });
    return e;
  }(), g = (o.pad = {}).Pkcs7 = {
    pad: function (e, t) {
      var r = t * 4;
      for (var n = r - e.sigBytes % r, o = n << 24 | n << 16 | n << 8 | n, i = [], a = 0; a < n; a += 4) {
        i.push(o);
      }
      var c = s.create(i, n);
      e.concat(c);
    },
    unpad: function (e) {
      var t = e.words[e.sigBytes - 1 >>> 2] & 255;
      e.sigBytes -= t;
    }
  }, i.BlockCipher = p.extend({
    cfg: p.cfg.extend({
      mode: m,
      padding: g
    }),
    reset: function () {
      var e;
      p.reset.call(this);
      var t = this.cfg;
      var r = t.iv;
      var n = t.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        e = n.createEncryptor;
      } else {
        e = n.createDecryptor;
        this._minBufferSize = 1;
      }
      if (this._mode && this._mode.__creator == e) {
        this._mode.init(this, r && r.words);
      } else {
        this._mode = e.call(n, this, r && r.words);
        this._mode.__creator = e;
      }
    },
    _doProcessBlock: function (e, t) {
      this._mode.processBlock(e, t);
    },
    _doFinalize: function () {
      var e;
      var t = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        t.pad(this._data, this.blockSize);
        e = this._process(true);
      } else {
        e = this._process(true);
        t.unpad(e);
      }
      return e;
    },
    blockSize: 4
  }), v = i.CipherParams = a.extend({
    init: function (e) {
      this.mixIn(e);
    },
    toString: function (e) {
      return (e || this.formatter).stringify(this);
    }
  }), y = (o.format = {}).OpenSSL = {
    stringify: function (e) {
      var t = e.ciphertext;
      var r = e.salt;
      return (r ? s.create([1398893684, 1701076831]).concat(r).concat(t) : t).toString(l);
    },
    parse: function (e) {
      var t;
      var r = l.parse(e);
      var n = r.words;
      if (n[0] == 1398893684 && n[1] == 1701076831) {
        t = s.create(n.slice(2, 4));
        n.splice(0, 4);
        r.sigBytes -= 16;
      }
      return v.create({
        ciphertext: r,
        salt: t
      });
    }
  }, _ = i.SerializableCipher = a.extend({
    cfg: a.extend({
      format: y
    }),
    encrypt: function (e, t, r, n) {
      n = this.cfg.extend(n);
      var o = e.createEncryptor(r, n);
      var i = o.finalize(t);
      var a = o.cfg;
      return v.create({
        ciphertext: i,
        key: r,
        iv: a.iv,
        algorithm: e,
        mode: a.mode,
        padding: a.padding,
        blockSize: e.blockSize,
        formatter: n.format
      });
    },
    decrypt: function (e, t, r, n) {
      n = this.cfg.extend(n);
      t = this._parse(t, n.format);
      return e.createDecryptor(r, n).finalize(t.ciphertext);
    },
    _parse: function (e, t) {
      if (typeof e == "string") {
        return t.parse(e, this);
      } else {
        return e;
      }
    }
  }), b = (o.kdf = {}).OpenSSL = {
    execute: function (e, t, r, n, o) {
      n ||= s.random(8);
      if (o) {
        i = d.create({
          keySize: t + r,
          hasher: o
        }).compute(e, n);
      } else {
        var i = d.create({
          keySize: t + r
        }).compute(e, n);
      }
      var a = s.create(i.words.slice(t), r * 4);
      i.sigBytes = t * 4;
      return v.create({
        key: i,
        iv: a,
        salt: n
      });
    }
  }, w = i.PasswordBasedCipher = _.extend({
    cfg: _.cfg.extend({
      kdf: b
    }),
    encrypt: function (e, t, r, n) {
      var o = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize, n.salt, n.hasher);
      n.iv = o.iv;
      var i = _.encrypt.call(this, e, t, o.key, n);
      i.mixIn(o);
      return i;
    },
    decrypt: function (e, t, r, n) {
      n = this.cfg.extend(n);
      t = this._parse(t, n.format);
      var o = n.kdf.execute(r, e.keySize, e.ivSize, t.salt, n.hasher);
      n.iv = o.iv;
      return _.decrypt.call(this, e, t, o.key, n);
    }
  })));
};
