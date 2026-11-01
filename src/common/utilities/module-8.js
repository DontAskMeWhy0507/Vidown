// Module 8 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    var l;
    var u;
    var d;
    var f;
    var p;
    var h;
    var g;
    var m;
    var v;
    var y;
    var k;
    var b;
    var _;
    r = n(4);
    n(17);
    e.exports = void (r.lib.Cipher || (o = r, i = o.lib, a = i.Base, s = i.WordArray, c = i.BufferedBlockAlgorithm, l = o.enc, l.Utf8, u = l.Base64, d = o.algo.EvpKDF, f = i.Cipher = c.extend({
      cfg: a.extend(),
      createEncryptor: function (e, t) {
        return this.create(this._ENC_XFORM_MODE, e, t);
      },
      createDecryptor: function (e, t) {
        return this.create(this._DEC_XFORM_MODE, e, t);
      },
      init: function (e, t, n) {
        this.cfg = this.cfg.extend(n);
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
            return _;
          } else {
            return k;
          }
        }
        return function (t) {
          return {
            encrypt: function (n, r, o) {
              return e(r).encrypt(t, n, r, o);
            },
            decrypt: function (n, r, o) {
              return e(r).decrypt(t, n, r, o);
            }
          };
        };
      }()
    }), i.StreamCipher = f.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1
    }), p = o.mode = {}, h = i.BlockCipherMode = a.extend({
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
    }), g = p.CBC = function () {
      var e = h.extend();
      function t(e, t, n) {
        var r;
        var o = this._iv;
        if (o) {
          r = o;
          this._iv = undefined;
        } else {
          r = this._prevBlock;
        }
        for (var i = 0; i < n; i++) {
          e[t + i] ^= r[i];
        }
      }
      e.Encryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          t.call(this, e, n, o);
          r.encryptBlock(e, n);
          this._prevBlock = e.slice(n, n + o);
        }
      });
      e.Decryptor = e.extend({
        processBlock: function (e, n) {
          var r = this._cipher;
          var o = r.blockSize;
          var i = e.slice(n, n + o);
          r.decryptBlock(e, n);
          t.call(this, e, n, o);
          this._prevBlock = i;
        }
      });
      return e;
    }(), m = (o.pad = {}).Pkcs7 = {
      pad: function (e, t) {
        var n = t * 4;
        for (var r = n - e.sigBytes % n, o = r << 24 | r << 16 | r << 8 | r, i = [], a = 0; a < r; a += 4) {
          i.push(o);
        }
        var c = s.create(i, r);
        e.concat(c);
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    }, i.BlockCipher = f.extend({
      cfg: f.cfg.extend({
        mode: g,
        padding: m
      }),
      reset: function () {
        var e;
        f.reset.call(this);
        var t = this.cfg;
        var n = t.iv;
        var r = t.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          e = r.createEncryptor;
        } else {
          e = r.createDecryptor;
          this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator == e) {
          this._mode.init(this, n && n.words);
        } else {
          this._mode = e.call(r, this, n && n.words);
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
        var n = e.salt;
        return (n ? s.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(u);
      },
      parse: function (e) {
        var t;
        var n = u.parse(e);
        var r = n.words;
        if (r[0] == 1398893684 && r[1] == 1701076831) {
          t = s.create(r.slice(2, 4));
          r.splice(0, 4);
          n.sigBytes -= 16;
        }
        return v.create({
          ciphertext: n,
          salt: t
        });
      }
    }, k = i.SerializableCipher = a.extend({
      cfg: a.extend({
        format: y
      }),
      encrypt: function (e, t, n, r) {
        r = this.cfg.extend(r);
        var o = e.createEncryptor(n, r);
        var i = o.finalize(t);
        var a = o.cfg;
        return v.create({
          ciphertext: i,
          key: n,
          iv: a.iv,
          algorithm: e,
          mode: a.mode,
          padding: a.padding,
          blockSize: e.blockSize,
          formatter: r.format
        });
      },
      decrypt: function (e, t, n, r) {
        r = this.cfg.extend(r);
        t = this._parse(t, r.format);
        return e.createDecryptor(n, r).finalize(t.ciphertext);
      },
      _parse: function (e, t) {
        if (typeof e == "string") {
          return t.parse(e, this);
        } else {
          return e;
        }
      }
    }), b = (o.kdf = {}).OpenSSL = {
      execute: function (e, t, n, r, o) {
        r ||= s.random(8);
        if (o) {
          i = d.create({
            keySize: t + n,
            hasher: o
          }).compute(e, r);
        } else {
          var i = d.create({
            keySize: t + n
          }).compute(e, r);
        }
        var a = s.create(i.words.slice(t), n * 4);
        i.sigBytes = t * 4;
        return v.create({
          key: i,
          iv: a,
          salt: r
        });
      }
    }, _ = i.PasswordBasedCipher = k.extend({
      cfg: k.cfg.extend({
        kdf: b
      }),
      encrypt: function (e, t, n, r) {
        var o = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize, r.salt, r.hasher);
        r.iv = o.iv;
        var i = k.encrypt.call(this, e, t, o.key, r);
        i.mixIn(o);
        return i;
      },
      decrypt: function (e, t, n, r) {
        r = this.cfg.extend(r);
        t = this._parse(t, r.format);
        var o = r.kdf.execute(n, e.keySize, e.ivSize, t.salt, r.hasher);
        r.iv = o.iv;
        return k.decrypt.call(this, e, t, o.key, r);
      }
    })));
  };
