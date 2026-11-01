// Module 98 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(25).Buffer;
  var o = r(83).Transform;
  function i(e) {
    o.call(this);
    this._block = n.allocUnsafe(e);
    this._blockSize = e;
    this._blockOffset = 0;
    this._length = [0, 0, 0, 0];
    this._finalized = false;
  }
  r(15)(i, o);
  i.prototype._transform = function (e, t, r) {
    var n = null;
    try {
      this.update(e, t);
    } catch (e) {
      n = e;
    }
    r(n);
  };
  i.prototype._flush = function (e) {
    var t = null;
    try {
      this.push(this.digest());
    } catch (e) {
      t = e;
    }
    e(t);
  };
  var a = typeof Uint8Array != "undefined";
  var s = typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined" && ArrayBuffer.isView && (n.prototype instanceof Uint8Array || n.TYPED_ARRAY_SUPPORT);
  i.prototype.update = function (e, t) {
    if (this._finalized) {
      throw new Error("Digest already called");
    }
    e = function (e, t) {
      if (e instanceof n) {
        return e;
      }
      if (typeof e == "string") {
        return n.from(e, t);
      }
      if (s && ArrayBuffer.isView(e)) {
        if (e.byteLength === 0) {
          return n.alloc(0);
        }
        var r = n.from(e.buffer, e.byteOffset, e.byteLength);
        if (r.byteLength === e.byteLength) {
          return r;
        }
      }
      if (a && e instanceof Uint8Array) {
        return n.from(e);
      }
      if (n.isBuffer(e) && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)) {
        return n.from(e);
      }
      throw new TypeError("The \"data\" argument must be of type string or an instance of Buffer, TypedArray, or DataView.");
    }(e, t);
    var r = this._block;
    for (var o = 0; this._blockOffset + e.length - o >= this._blockSize;) {
      for (var i = this._blockOffset; i < this._blockSize;) {
        r[i++] = e[o++];
      }
      this._update();
      this._blockOffset = 0;
    }
    while (o < e.length) {
      r[this._blockOffset++] = e[o++];
    }
    for (var c = 0, u = e.length * 8; u > 0; ++c) {
      this._length[c] += u;
      if ((u = this._length[c] / 4294967296 | 0) > 0) {
        this._length[c] -= u * 4294967296;
      }
    }
    return this;
  };
  i.prototype._update = function () {
    throw new Error("_update is not implemented");
  };
  i.prototype.digest = function (e) {
    if (this._finalized) {
      throw new Error("Digest already called");
    }
    this._finalized = true;
    var t = this._digest();
    if (e !== undefined) {
      t = t.toString(e);
    }
    this._block.fill(0);
    this._blockOffset = 0;
    for (var r = 0; r < 4; ++r) {
      this._length[r] = 0;
    }
    return t;
  };
  i.prototype._digest = function () {
    throw new Error("_digest is not implemented");
  };
  e.exports = i;
};
