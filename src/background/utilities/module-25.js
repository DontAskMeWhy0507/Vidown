// Module 25 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var n = r(27);
  var o = n.Buffer;
  function i(e, t) {
    for (var r in e) {
      t[r] = e[r];
    }
  }
  function a(e, t, r) {
    return o(e, t, r);
  }
  if (o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow) {
    e.exports = n;
  } else {
    i(n, t);
    t.Buffer = a;
  }
  a.prototype = Object.create(o.prototype);
  i(o, a);
  a.from = function (e, t, r) {
    if (typeof e == "number") {
      throw new TypeError("Argument must not be a number");
    }
    return o(e, t, r);
  };
  a.alloc = function (e, t, r) {
    if (typeof e != "number") {
      throw new TypeError("Argument must be a number");
    }
    var n = o(e);
    if (t !== undefined) {
      if (typeof r == "string") {
        n.fill(t, r);
      } else {
        n.fill(t);
      }
    } else {
      n.fill(0);
    }
    return n;
  };
  a.allocUnsafe = function (e) {
    if (typeof e != "number") {
      throw new TypeError("Argument must be a number");
    }
    return o(e);
  };
  a.allocUnsafeSlow = function (e) {
    if (typeof e != "number") {
      throw new TypeError("Argument must be a number");
    }
    return n.SlowBuffer(e);
  };
};
