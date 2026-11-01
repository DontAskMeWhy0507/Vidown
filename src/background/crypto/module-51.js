// Module 51 [crypto] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n;
  n = r(4);
  (function () {
    if (typeof ArrayBuffer == "function") {
      var e = n.lib.WordArray;
      var t = e.init;
      (e.init = function (e) {
        if (e instanceof ArrayBuffer) {
          e = new Uint8Array(e);
        }
        if (e instanceof Int8Array || typeof Uint8ClampedArray != "undefined" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) {
          e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        if (e instanceof Uint8Array) {
          for (var r = e.byteLength, n = [], o = 0; o < r; o++) {
            n[o >>> 2] |= e[o] << 24 - o % 4 * 8;
          }
          t.call(this, n, r);
        } else {
          t.apply(this, arguments);
        }
      }).prototype = e;
    }
  })();
  e.exports = n.lib.WordArray;
};
