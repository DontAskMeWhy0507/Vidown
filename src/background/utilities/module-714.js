// Module 714 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n = r(27).Buffer;
  e.exports = function (e) {
    if (e instanceof Uint8Array) {
      if (e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) {
        return e.buffer;
      }
      if (typeof e.buffer.slice == "function") {
        return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
      }
    }
    if (n.isBuffer(e)) {
      var t = new Uint8Array(e.length);
      for (var r = e.length, o = 0; o < r; o++) {
        t[o] = e[o];
      }
      return t.buffer;
    }
    throw new Error("Argument must be a Buffer");
  };
};
