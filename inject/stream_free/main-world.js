(async () => {
  let P = "jwplayer.ttfbCache";
  let I = "";
  let M;
  let e;
  let L;
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let R = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~";
  let F = [0, 2, 3, 4, 6, 7, 8, 10, 11];
  let G = (() => {
    var t = new Int16Array(128);
    t.fill(-1);
    for (let e = 0; e < 65; e++) {
      t[R.charCodeAt(e)] = e;
    }
    return t;
  })();
  let W = Math.imul;
  function K(e) {
    let r = typeof Map == "function" ? new Map() : undefined;
    return function (e) {
      if (e === null || !(t => {
        try {
          return Function.toString.call(t).indexOf("[native code]") !== -1;
        } catch (e) {
          return typeof t == "function";
        }
      })(e)) {
        return e;
      }
      if (typeof e != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (r !== undefined) {
        if (r.has(e)) {
          return r.get(e);
        }
        r.set(e, t);
      }
      function t() {
        return function (e, t, r) {
          var n;
          if (V()) {
            return Reflect.construct.apply(null, arguments);
          } else {
            (n = [null]).push.apply(n, t);
            t = new (e.bind.apply(e, n))();
            if (r) {
              H(t, r.prototype);
            }
            return t;
          }
        }(e, arguments, $(this).constructor);
      }
      t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return H(t, e);
    }(e);
  }
  function V() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (V = function () {
      return !!e;
    })();
  }
  function H(e, t) {
    return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function $(e) {
    return ($ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  let X = (e => {
    function r(e) {
      var t;
      if (this instanceof r) {
        (t = ((e, t, r) => {
          t = $(t);
          var n = e;
          if (!(t = V() ? Reflect.construct(t, r, $(e).constructor) : t.apply(e, r)) || O(t) != "object" && typeof t != "function") {
            if (t !== undefined) {
              throw new TypeError("Derived constructors may only return object or undefined");
            }
            if ((t = n) === undefined) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
          }
          return t;
        })(this, r, [e])).code = e;
        t.name = "SegmentURLVMError";
        return t;
      }
      throw new TypeError("Cannot call a class as a function");
    }
    var t = r;
    if (typeof e != "function" && e !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(t, "prototype", {
      writable: false
    });
    if (e) {
      H(t, e);
    }
    v1110 = r;
    Object.defineProperty(v1110, "prototype", {
      writable: false
    });
    return v1110;
  })(K(Error));
  let J = [86, 77, 87, 50];
  let q = [87, 66];
  let Y = 145;
  let Z = 128;
  let Q = 3000;
  let D = new Uint8Array([115, 116, 114, 101, 97, 109, 101, 47, 115, 101, 103, 109, 101, 110, 116, 45, 117, 114, 108]);
  let ee = [{
    probe: 49,
    slot: 0
  }, {
    probe: 164,
    slot: 1
  }, {
    probe: 87,
    slot: 2
  }, {
    probe: 194,
    slot: 3
  }, {
    probe: 25,
    slot: 4
  }, {
    probe: 231,
    slot: 5
  }, {
    probe: 69,
    slot: 6
  }, {
    probe: 184,
    slot: 7
  }, {
    probe: 98,
    slot: 8
  }, {
    probe: 157,
    slot: 9
  }, {
    probe: 43,
    slot: 10
  }, {
    probe: 241,
    slot: 11
  }, {
    probe: 116,
    slot: 12
  }, {
    probe: 14,
    slot: 15
  }, {
    probe: 92,
    slot: 17
  }, {
    probe: 131,
    slot: 16
  }];
  let te = ee.reduce(function (e, t) {
    e[t.probe] = t.slot;
    return e;
  }, {});
  let re = Object.freeze([145, 55, 196, 90, 237]);
  let ne = [[208, 173, 143, 154, 116, 79], [220, 186, 145, 122, 65, 44, 8, 247], [170, 148, 102, 65, 73, 63, 50, 248, 212, 163, 142, 102, 81], [190, 146, 114, 80, 59, 7, 252, 243, 171, 186, 139], [133, 105, 83, 43, 56, 29, 237, 217, 161], [137, 106, 83, 33, 49, 234, 207, 169, 144], [97, 69, 36, 5, 245, 247, 212, 182], [118, 84, 43, 1, 252, 206, 161, 140], [95, 62, 6, 242, 204, 163, 178, 150], [48, 56, 8, 241, 219, 163, 131, 106, 70, 38, 7], [63, 1, 252], [47, 26, 248, 208, 183, 160, 127, 88, 56, 4, 225], [62, 241, 195, 171, 128, 97, 69, 115, 62, 28, 252, 211, 156, 131, 124, 84, 32, 5], [211, 196, 220, 144, 145, 97, 127, 42, 8, 224, 199, 144, 143, 136, 104, 84, 49], [229, 192, 160, 143, 108, 85, 48], [208, 166, 146, 142, 115, 88, 58, 2], [217, 187, 149, 107], [173, 137, 103, 124, 72, 43, 25, 253], [157, 147, 125, 95], [168, 114, 74], [141, 125, 71, 33, 6, 227, 199], [101, 68, 54, 12, 242, 233, 233, 180, 134, 120, 94, 63, 27], [74, 85, 37, 31, 244, 220, 140, 132, 106, 64, 94, 48, 42, 245, 220, 160, 136], [93, 46, 26, 243, 203, 220, 185, 174, 121, 65, 59, 8, 248], [72, 57, 27, 242, 193, 185, 155, 111, 85], [37, 14, 235, 215, 173], [50, 17, 238, 202, 182, 151, 77, 89, 47, 0, 230, 210], [24, 248, 220, 165, 135, 122, 69, 79], [234, 211, 243, 187, 131, 125, 71, 43, 35, 228, 214, 145, 170, 140, 105, 89, 33, 4, 232, 206], [247, 195, 183, 155, 124, 74], [214, 183, 189, 136, 117, 83], [209, 182, 132, 95, 75, 41, 0, 238, 243, 237, 185, 153, 103, 74, 63], [183, 150, 110, 122, 78, 59, 1], [138, 144, 115, 76, 56, 39, 231, 215, 169, 171, 159], [138, 105, 64, 35, 50, 25], [143, 116, 86, 35, 1, 252, 219, 160, 144], [123, 90, 42, 22, 16, 232, 192, 166, 150]];
  let oe = /^\/hls\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(?:ts|m4s)$/i;
  let ie = [new Uint8Array([115, 116, 114, 101, 97, 109, 102, 114, 101, 101, 46, 118, 105, 112]), new Uint8Array([115, 116, 114, 101, 97, 109, 102, 114, 101, 101, 118, 105, 112, 46, 118, 105, 112])];
  let c = (e => {
    function r(e) {
      var t;
      xe(this, r);
      (t = ((e, t, r) => {
        t = Ce(t);
        var n = e;
        if ((t = Ee() ? Reflect.construct(t, r || [], Ce(e).constructor) : t.apply(e, r)) && (O(t) == "object" || typeof t == "function")) {
          return t;
        }
        if (t !== undefined) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        if ((e = n) === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      })(this, r, [e])).code = e;
      t.name = "EnvVMValidationError";
      return t;
    }
    var t = r;
    if (typeof e != "function" && e !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(t, "prototype", {
      writable: false
    });
    if (e) {
      Te(t, e);
    }
    return je(r);
  })(Ue(Error));
  function ae(e) {
    return (ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function le(e) {
    let r = typeof Map == "function" ? new Map() : undefined;
    return function (e) {
      if (e === null || !(t => {
        try {
          return Function.toString.call(t).indexOf("[native code]") !== -1;
        } catch (e) {
          return typeof t == "function";
        }
      })(e)) {
        return e;
      }
      if (typeof e != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (r !== undefined) {
        if (r.has(e)) {
          return r.get(e);
        }
        r.set(e, t);
      }
      function t() {
        return function (e, t, r) {
          var n;
          if (ue()) {
            return Reflect.construct.apply(null, arguments);
          } else {
            (n = [null]).push.apply(n, t);
            t = new (e.bind.apply(e, n))();
            if (r) {
              ce(t, r.prototype);
            }
            return t;
          }
        }(e, arguments, ae(this).constructor);
      }
      t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return ce(t, e);
    }(e);
  }
  function ue() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (ue = function () {
      return !!e;
    })();
  }
  function ce(e, t) {
    return (ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  let se = (e => {
    function r(e) {
      var t;
      if (this instanceof r) {
        (t = ((e, t, r) => {
          t = ae(t);
          var n = e;
          if (!(t = ue() ? Reflect.construct(t, r, ae(e).constructor) : t.apply(e, r)) || O(t) != "object" && typeof t != "function") {
            if (t !== undefined) {
              throw new TypeError("Derived constructors may only return object or undefined");
            }
            if ((t = n) === undefined) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
          }
          return t;
        })(this, r, [e])).code = e;
        t.name = "VMCodecError";
        return t;
      }
      throw new TypeError("Cannot call a class as a function");
    }
    var t = r;
    if (typeof e != "function" && e !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(t, "prototype", {
      writable: false
    });
    if (e) {
      ce(t, e);
    }
    v976 = r;
    Object.defineProperty(v976, "prototype", {
      writable: false
    });
    return v976;
  })(le(Error));
  function fe(e, t) {
    return (e => {
      if (Array.isArray(e)) {
        return e;
      }
    })(e) || ((n, o) => {
      let i = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
      if (i != null) {
        var a;
        var l;
        var u;
        let t;
        var c = [];
        let e = true;
        let r = false;
        try {
          l = (i = i.call(n)).next;
          if (o === 0) {
            if (Object(i) !== i) {
              return;
            }
            e = false;
          } else {
            for (; !(e = (a = l.call(i)).done) && (c.push(a.value), c.length !== o); e = true);
          }
        } catch (e) {
          r = true;
          t = e;
        } finally {
          try {
            if (!e && i.return != null && (u = i.return(), Object(u) !== u)) {
              return;
            }
          } finally {
            if (r) {
              throw t;
            }
          }
        }
        return c;
      }
    })(e, t) || Yt(e, t) || (() => {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function b(e) {
    throw new se(e);
  }
  function he(e, t) {
    return e[t] | e[t + 1] << 8;
  }
  let pe = new TextEncoder();
  let i = pe.encode("B65");
  let ye = new TextDecoder();
  let de = new TextEncoder();
  var t = window || globalThis;
  var r = navigator.userAgent;
  let ve = "InstallTrigger" in ((t == null ? undefined : t.window) || {}) || /firefox/i.test(r);
  if (!/trident/i.test(r)) {
    /msie/i.test(r);
  }
  if (!/edge/i.test(r)) {
    /EdgiOS/i.test(r);
  }
  /webkit/i.test(r);
  /IqiyiApp/.test(r);
  let ge = (t == null || (M = t.window) == null ? undefined : M.chrome) !== undefined || /chrome/i.test(r) || /CriOS/i.test(r);
  let be = ((t == null || (e = t.window) == null || (e = e.safari) == null ? undefined : e.pushNotification) || false).toString() === "[object SafariRemoteNotification]" || /safari/i.test(r) && !ge;
  Symbol("_licau");
  new WeakMap();
  function me(e) {
    var t = me._t ||= (() => {
      var e = new Uint32Array(256);
      for (var t = 0; t < 256; t++) {
        var r = t;
        for (var n = 0; n < 8; n++) {
          r = r & 1 ? r >>> 1 ^ -306674912 : r >>> 1;
        }
        e[t] = r >>> 0;
      }
      return e;
    })();
    var r = 4294967295;
    for (var n = 0; n < e.length; n++) {
      r = t[(r ^ e[n]) & 255] ^ r >>> 8;
    }
    return (r ^ -1) >>> 0;
  }
  function k(e) {
    return (e => {
      if (Array.isArray(e)) {
        return S(e);
      }
    })(e) || (() => {
      if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
        return Array.from(e);
      }
    })() || (t => {
      if (t) {
        if (typeof t == "string") {
          return S(t, undefined);
        }
        let e = {}.toString.call(t).slice(8, -1);
        if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
          return Array.from(t);
        } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
          return S(t, undefined);
        } else {
          return undefined;
        }
      }
    })(e) || (() => {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function f(e, t, r, n) {
    let a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    (f = function (e, t, r, n) {
      function o(t, r) {
        f(e, t, function (e) {
          return this._invoke(t, r, e);
        });
      }
      var i = {
        value: r,
        enumerable: !n,
        configurable: !n,
        writable: !n
      };
      if (t) {
        if (a) {
          a(e, t, i);
        } else {
          e[t] = r;
        }
      } else {
        o("next", 0);
        o("throw", 1);
        o("return", 2);
      }
    })(e, t, r, n);
  }
  function a(t, r) {
    for (let e = 0; e < r.length; e++) {
      var n = r[e];
      n.enumerable = n.enumerable || false;
      n.configurable = true;
      if ("value" in n) {
        n.writable = true;
      }
      Object.defineProperty(t, o(n.key), n);
    }
  }
  function N() {
    let y;
    let d;
    var e = typeof Symbol == "function" ? Symbol : {};
    var t = e.iterator || "@@iterator";
    let r = e.toStringTag || "@@toStringTag";
    function n(e, t, r, p) {
      t = t && t.prototype instanceof o ? t : o;
      t = Object.create(t.prototype);
      f(t, "_invoke", ((n, o) => {
        let i;
        let a;
        let l;
        let u = 0;
        let c = p || [];
        let s = false;
        var f = {
          p: 0,
          n: 0,
          v: y,
          a: h,
          f: h.bind(y, 4),
          d: function (e, t) {
            i = e;
            a = 0;
            l = y;
            f.n = t;
            return v;
          }
        };
        function h(e, t) {
          a = e;
          l = t;
          d = 0;
          for (; !s && u && !r && d < c.length; d++) {
            var r;
            var n = c[d];
            var o = f.p;
            var i = n[2];
            if (e > 3) {
              if (r = i === t) {
                l = n[(a = n[4]) ? 5 : a = 3];
                n[4] = n[5] = y;
              }
            } else if (n[0] <= o) {
              if (r = e < 2 && o < n[1]) {
                a = 0;
                f.v = t;
                f.n = n[1];
              } else if (o < i && (r = e < 3 || n[0] > t || i < t)) {
                n[4] = e;
                n[5] = t;
                f.n = i;
                a = 0;
              }
            }
          }
          if (r || e > 1) {
            return v;
          }
          s = true;
          throw t;
        }
        return function (e, t, r) {
          if (u > 1) {
            throw TypeError("Generator is already running");
          }
          if (s && t === 1) {
            h(t, r);
          }
          a = t;
          l = r;
          while ((d = a < 2 ? y : l) || !s) {
            if (!i) {
              if (a) {
                if (a < 3) {
                  if (a > 1) {
                    f.n = -1;
                  }
                  h(a, l);
                } else {
                  f.n = l;
                }
              } else {
                f.v = l;
              }
            }
            try {
              u = 2;
              if (i) {
                if (!a) {
                  e = "next";
                }
                if (d = i[e]) {
                  if (!(d = d.call(i, l))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!d.done) {
                    return d;
                  }
                  l = d.value;
                  if (a < 2) {
                    a = 0;
                  }
                } else {
                  if (a === 1 && (d = i.return)) {
                    d.call(i);
                  }
                  if (a < 2) {
                    l = TypeError("The iterator does not provide a '" + e + "' method");
                    a = 1;
                  }
                }
                i = y;
              } else if ((d = (s = f.n < 0) ? l : n.call(o, f)) !== v) {
                break;
              }
            } catch (e) {
              i = y;
              a = 1;
              l = e;
            } finally {
              u = 1;
            }
          }
          t = {};
          t.value = d;
          t.done = s;
          return t;
        };
      })(e, r), true);
      return t;
    }
    var v = {};
    function o() {}
    function i() {}
    function a() {}
    d = Object.getPrototypeOf;
    e = [][t] ? d(d([][t]())) : (f(d = {}, t, function () {
      return this;
    }), d);
    let l = a.prototype = o.prototype = Object.create(e);
    function u(e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, a);
      } else {
        e.__proto__ = a;
        f(e, r, "GeneratorFunction");
      }
      e.prototype = Object.create(l);
      return e;
    }
    i.prototype = a;
    f(l, "constructor", a);
    f(a, "constructor", i);
    i.displayName = "GeneratorFunction";
    f(a, r, "GeneratorFunction");
    f(l);
    f(l, r, "Generator");
    f(l, t, function () {
      return this;
    });
    f(l, "toString", function () {
      return "[object Generator]";
    });
    return (N = function () {
      var e = {
        w: n,
        m: u
      };
      return e;
    })();
  }
  function we(e, t, r, n, o, i, a) {
    try {
      var l = e[i](a);
      var u = l.value;
    } catch (e) {
      return r(e);
    }
    if (l.done) {
      t(u);
    } else {
      Promise.resolve(u).then(n, o);
    }
  }
  function l(l) {
    return function () {
      let e = this;
      let a = arguments;
      return new Promise(function (t, r) {
        let n = l.apply(e, a);
        function o(e) {
          we(n, t, r, o, i, "next", e);
        }
        function i(e) {
          we(n, t, r, o, i, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function O(e) {
    return (O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function o(e) {
    e = (e => {
      if (O(e) != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t === undefined) {
        return String(e);
      }
      if (O(t = t.call(e, "string")) != "object") {
        return t;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    })(e);
    if (O(e) == "symbol") {
      return e;
    } else {
      return e + "";
    }
  }
  function u(e, t, r) {
    var n = {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    };
    if ((t = o(t)) in e) {
      Object.defineProperty(e, t, n);
    } else {
      e[t] = r;
    }
  }
  function j(r, e) {
    let n = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (!n) {
      if (Array.isArray(r) || (n = (t => {
        if (t) {
          if (typeof t == "string") {
            return S(t, undefined);
          }
          let e = {}.toString.call(t).slice(8, -1);
          if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
            return Array.from(t);
          } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
            return S(t, undefined);
          } else {
            return undefined;
          }
        }
      })(r)) || e && r && typeof r.length == "number") {
        if (n) {
          r = n;
        }
        let t = 0;
        function e() {}
        var o = {
          s: e,
          n: function () {
            var e = {
              done: true
            };
            if (t >= r.length) {
              return e;
            } else {
              return {
                done: false,
                value: r[t++]
              };
            }
          },
          e: function (e) {
            throw e;
          },
          f: e
        };
        return o;
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    let t;
    let i = true;
    let a = false;
    return {
      s: function () {
        n = n.call(r);
      },
      n: function () {
        var e = n.next();
        i = e.done;
        return e;
      },
      e: function (e) {
        a = true;
        t = e;
      },
      f: function () {
        try {
          if (!i && n.return != null) {
            n.return();
          }
        } finally {
          if (a) {
            throw t;
          }
        }
      }
    };
  }
  function h(e, t, r) {
    var n = {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    };
    if ((t = Ae(t)) in e) {
      Object.defineProperty(e, t, n);
    } else {
      e[t] = r;
    }
  }
  function Ae(e) {
    e = (e => {
      if (O(e) != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t === undefined) {
        return String(e);
      }
      if (O(t = t.call(e, "string")) != "object") {
        return t;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    })(e);
    if (O(e) == "symbol") {
      return e;
    } else {
      return e + "";
    }
  }
  function Se(e) {
    return (Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  let p = "0123456789abcdef";
  let _e = new Uint32Array([3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745]);
  let ke = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
  let Oe = (() => {
    var e = {
      writable: false
    };
    var t = function e() {
      if (!(this instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
      h(this, "h0", 1732584193);
      h(this, "h1", 4023233417);
      h(this, "h2", 2562383102);
      h(this, "h3", 271733878);
      h(this, "buffer", new Uint8Array(64));
      h(this, "bufLen", 0);
      h(this, "totalBytes", 0);
      h(this, "finalized", false);
    };
    var r = t.prototype;
    var n = [{
      key: "update",
      value: function (e) {
        if (this.finalized) {
          throw new Error("finalize already called");
        }
        var t = (e => {
          if (typeof e == "string") {
            for (var t = e, r = true, n = 0; n < t.length; n++) {
              if (t.charCodeAt(n) > 127) {
                r = false;
                break;
              }
            }
            if (r) {
              var o = new Uint8Array(t.length);
              for (var i = 0; i < t.length; i++) {
                o[i] = t.charCodeAt(i) & 255;
              }
              return o;
            }
            var a = [];
            for (var l = 0; l < t.length; l++) {
              var u = t.charCodeAt(l);
              if (u < 128) {
                a.push(u);
              } else if (u < 2048) {
                a.push(u >> 6 | 192, u & 63 | 128);
              } else if (u < 55296 || u >= 57344) {
                a.push(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128);
              } else {
                l++;
                u = 65536 + ((u & 1023) << 10 | t.charCodeAt(l) & 1023);
                a.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128);
              }
            }
            return Uint8Array.from(a);
          }
          if (e != null && Se(e) === "object") {
            if (typeof ArrayBuffer != "undefined" && e instanceof ArrayBuffer) {
              return new Uint8Array(e);
            }
            if (typeof ArrayBuffer != "undefined" && e != null && ArrayBuffer.isView(e)) {
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            }
            if (Array.isArray(e)) {
              return Uint8Array.from(e);
            }
          }
          throw new Error("input is invalid type");
        })(e);
        this.totalBytes += t.length;
        let r = 0;
        for (this.bufLen && (e = Math.min(64 - this.bufLen, t.length), this.buffer.set(t.subarray(0, e), this.bufLen), this.bufLen += e, r += e, this.bufLen === 64) && (this.process(this.buffer), this.bufLen = 0); r + 64 <= t.length;) {
          this.process(t.subarray(r, r + 64));
          r += 64;
        }
        if (r < t.length) {
          this.buffer.set(t.subarray(r), 0);
          this.bufLen = t.length - r;
        }
        return this;
      }
    }, {
      key: "finalize",
      value: function () {
        if (!this.finalized) {
          var t = this.bufLen < 56 ? 56 - this.bufLen : 120 - this.bufLen;
          var r = new Uint8Array(8 + t);
          r[0] = 128;
          var e = this.totalBytes << 3 >>> 0;
          var n = this.totalBytes / 536870912 >>> 0;
          for (var o = 0; o < 4; o++) {
            r[t + o] = e >>> o * 8 & 255;
          }
          for (let e = 0; e < 4; e++) {
            r[4 + t + e] = n >>> e * 8 & 255;
          }
          this.update(r);
          this.finalized = true;
        }
        return this.digestBytes();
      }
    }, {
      key: "digestBytes",
      value: function () {
        var e = new Uint8Array(16);
        var t = [this.h0, this.h1, this.h2, this.h3];
        for (var r = 0; r < 4; r++) {
          e[r * 4 + 0] = t[r] & 255;
          e[r * 4 + 1] = t[r] >>> 8 & 255;
          e[r * 4 + 2] = t[r] >>> 16 & 255;
          e[r * 4 + 3] = t[r] >>> 24 & 255;
        }
        return e;
      }
    }, {
      key: "process",
      value: function (e) {
        var r = new Uint32Array(16);
        for (var t = 0; t < 16; t++) {
          var n = t * 4;
          r[t] = e[n] | e[1 + n] << 8 | e[2 + n] << 16 | e[3 + n] << 24;
        }
        var o;
        var i;
        var a = this.h0;
        var l = this.h1;
        var u = this.h2;
        var c = this.h3;
        for (var s = 0; s < 64; s++) {
          let e = undefined;
          let t = undefined;
          t = s < 16 ? (e = l & u | ~l & c, s) : s < 32 ? (e = c & l | ~c & u, s * 5 + 1 & 15) : s < 48 ? (e = l ^ u ^ c, s * 3 + 5 & 15) : (e = u ^ (l | ~c), s * 7 & 15);
          var f = c;
          var c = u;
          var u = l;
          var l = l + (o = a + e + _e[s] + r[t] >>> 0, i = ke[s], (o << i | o >>> 32 - i) >>> 0) >>> 0;
          var a = f;
        }
        this.h0 = this.h0 + a >>> 0;
        this.h1 = this.h1 + l >>> 0;
        this.h2 = this.h2 + u >>> 0;
        this.h3 = this.h3 + c >>> 0;
      }
    }, {
      key: "hex",
      value: function () {
        this.finalize();
        var e = [this.h0, this.h1, this.h2, this.h3];
        var t = "";
        for (var r = 0; r < 4; r++) {
          var n = e[r];
          t += p[n >>> 4 & 15] + p[n & 15] + p[n >>> 12 & 15] + p[n >>> 8 & 15] + p[n >>> 20 & 15] + p[n >>> 16 & 15] + p[n >>> 28 & 15] + p[n >>> 24 & 15];
        }
        return t;
      }
    }, {
      key: "array",
      value: function () {
        this.finalize();
        var e = this.digestBytes();
        return Array.from(e);
      }
    }, {
      key: "digest",
      value: function () {
        return this.array();
      }
    }, {
      key: "arrayBuffer",
      value: function () {
        this.finalize();
        var e = new ArrayBuffer(16);
        new Uint8Array(e).set(this.digestBytes());
        return e;
      }
    }, {
      key: "base64",
      value: function () {
        var e = this.array();
        var t = "";
        for (var r = 0; r < 15;) {
          var n = e[r++];
          var o = e[r++];
          var i = e[r++];
          t += s[n >>> 2] + s[(n << 4 | o >>> 4) & 63] + s[(o << 2 | i >>> 6) & 63] + s[i & 63];
        }
        var a = e[15];
        return t + (s[a >>> 2] + s[a << 4 & 63] + "==");
      }
    }];
    for (let e = 0; e < n.length; e++) {
      var o = n[e];
      o.enumerable = o.enumerable || false;
      o.configurable = true;
      if ("value" in o) {
        o.writable = true;
      }
      Object.defineProperty(r, Ae(o.key), o);
    }
    Object.defineProperty(t, "prototype", e);
    return t;
  })();
  (t = {})[t._723 = 59] = "_723";
  t[t._807 = 123] = "_807";
  t[t._795 = 142] = "_795";
  t[t._492 = 235] = "_492";
  t[t._976 = 42] = "_976";
  t[t._819 = 104] = "_819";
  t[t._403 = 52] = "_403";
  t[t._335 = 73] = "_335";
  t[t._366 = 30] = "_366";
  t[t._198 = 19] = "_198";
  t[t._802 = 247] = "_802";
  t[t._497 = 242] = "_497";
  t[t._112 = 126] = "_112";
  t[t._898 = 33] = "_898";
  t[t._734 = 200] = "_734";
  t[t._982 = 98] = "_982";
  t[t._967 = 129] = "_967";
  t[t._119 = 181] = "_119";
  t[t._592 = 250] = "_592";
  t[t._199 = 206] = "_199";
  t[t._942 = 154] = "_942";
  t[t._642 = 99] = "_642";
  t[t._886 = 173] = "_886";
  t[t._351 = 131] = "_351";
  t[t._754 = 249] = "_754";
  t[t._463 = 18] = "_463";
  t[t._219 = 219] = "_219";
  t[t._749 = 167] = "_749";
  t[t._940 = 108] = "_940";
  t[t._631 = 216] = "_631";
  t[t._958 = 36] = "_958";
  t[t._132 = 168] = "_132";
  t[t._321 = 120] = "_321";
  t[t._461 = 24] = "_461";
  t[t._390 = 186] = "_390";
  t[t._487 = 159] = "_487";
  t[t._619 = 198] = "_619";
  t[t._205 = 51] = "_205";
  t[t._594 = 174] = "_594";
  t[t._679 = 77] = "_679";
  t[t._149 = 227] = "_149";
  function je(e, t, r) {
    if (t) {
      a(e.prototype, t);
    }
    if (r) {
      a(e, r);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  }
  function xe(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function Ue(e) {
    let r = typeof Map == "function" ? new Map() : undefined;
    return function (e) {
      if (e === null || !(t => {
        try {
          return Function.toString.call(t).indexOf("[native code]") !== -1;
        } catch (e) {
          return typeof t == "function";
        }
      })(e)) {
        return e;
      }
      if (typeof e != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (r !== undefined) {
        if (r.has(e)) {
          return r.get(e);
        }
        r.set(e, t);
      }
      function t() {
        return function (e, t, r) {
          var n;
          if (Ee()) {
            return Reflect.construct.apply(null, arguments);
          } else {
            (n = [null]).push.apply(n, t);
            t = new (e.bind.apply(e, n))();
            if (r) {
              Te(t, r.prototype);
            }
            return t;
          }
        }(e, arguments, Ce(this).constructor);
      }
      t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return Te(t, e);
    }(e);
  }
  function Ee() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (Ee = function () {
      return !!e;
    })();
  }
  function Te(e, t) {
    return (Te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function Ce(e) {
    return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function y(e) {
    throw new c(e);
  }
  function Pe() {
    if ((typeof globalThis == "undefined" ? "undefined" : O(globalThis)) === "object") {
      return globalThis;
    }
  }
  function Ie(e) {
    if (!Array.isArray(e)) {
      y("program-type");
    }
    if (e.length < 7 || e.length > 96) {
      y("program-size");
    }
    var t = e.map(function (e) {
      if (typeof e != "number" || !Number.isInteger(e) || e < 0 || e > 255) {
        y("program-byte");
      }
      return e ^ 187;
    });
    var e = t.length - 2;
    var r = t[e] | t[1 + e] << 8;
    if ((t => {
      let r = 27947;
      for (let e = 0; e < t.length; e++) {
        r = Math.imul(r ^ t[e], 257) + e + 61 & 65535;
      }
      return r;
    })(t.slice(0, e)) !== r) {
      y("program-checksum");
    }
    if (t[0] !== 169 || t[1] !== 81) {
      y("program-magic");
    }
    if (t[2] !== 2) {
      y("program-version");
    }
    if (t[3] !== 18) {
      y("program-schema");
    }
    var n = t[4];
    if (n !== ee.length) {
      y("program-count");
    }
    var e = t[5];
    if (e !== re.length) {
      y("program-url-count");
    }
    var r = 6 + n * 3 + e + 1 + 2;
    if (t.length !== r) {
      y("program-length");
    }
    var o = [];
    var i = new Set();
    let a = 6;
    for (let e = 0; e < n; e++) {
      if (t[a++] !== 109) {
        y("program-opcode");
      }
      var l = t[a++];
      var u = t[a++];
      if (te[l] !== u || !!i.has(l)) {
        y("program-capability");
      }
      if (e === 0 && l !== 49) {
        y("program-start");
      }
      if (e === n - 1 && l !== 131) {
        y("program-end");
      }
      i.add(l);
      o.push(Object.freeze({
        probe: l,
        slot: u
      }));
    }
    var c = t.slice(a, a + e);
    for (let e = 0; e < re.length; e++) {
      if (c[e] !== re[e]) {
        y("program-url-machine");
      }
    }
    if (t[a += e] !== 210 || i.size !== ee.length) {
      y("program-halt");
    }
    return Object.freeze({
      steps: Object.freeze(o),
      urlMachine: Object.freeze(c)
    });
  }
  function d(e) {
    if (e != null && e.aborted) {
      throw new c("aborted");
    }
  }
  function v(e, t, r) {
    var n = {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    };
    if ((t = o(t)) in e) {
      Object.defineProperty(e, t, n);
    } else {
      e[t] = r;
    }
  }
  function Me(e, t, r) {
    e[t] = r & 255;
    e[t + 1] = r >>> 8 & 255;
    e[t + 2] = r >>> 16 & 255;
    e[t + 3] = r >>> 24 & 255;
  }
  function Le(e, t) {
    t &= 31;
    return (e << t | e >>> (32 - t & 31)) >>> 0;
  }
  function Re(e, t, r) {
    var n;
    var o = T(t, 0);
    var i = T(t, 4);
    let a = (o + (r >>> 0) >>> 0) + T(t, 8);
    a >>>= 0;
    let l = (i ^ r >>> 0 ^ T(t, 12)) >>> 0;
    var u;
    var c;
    var s = new Uint32Array(4);
    var f = (r => {
      let n = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
      if (!n) {
        if (Array.isArray(r) || (n = Yt(r))) {
          if (n) {
            r = n;
          }
          let t = 0;
          function e() {}
          return {
            s: e,
            n: function () {
              var e = {
                done: true
              };
              if (t >= r.length) {
                return e;
              } else {
                return {
                  done: false,
                  value: r[t++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: e
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      let t;
      let o = true;
      let i = false;
      return {
        s: function () {
          n = n.call(r);
        },
        n: function () {
          var e = n.next();
          o = e.done;
          return e;
        },
        e: function (e) {
          i = true;
          t = e;
        },
        f: function () {
          try {
            if (!o && n.return != null) {
              n.return();
            }
          } finally {
            if (i) {
              throw t;
            }
          }
        }
      };
    })(e);
    try {
      for (f.s(); !(n = f.n()).done;) {
        var h = n.value;
        switch (h.op) {
          case Y:
            s[h.register] = h.value;
            break;
          case 62:
            s[h.destination] = (s[h.destination] ^ s[h.source]) >>> 0;
            break;
          case 199:
            var p = s[h.register] >>> 0;
            var y = (a ^ (u = Le(((u = (u = (l ^ p) >>> 0) >>> 0) ^ (c = p)) + Math.imul((u ^ Le(c, 16)) >>> 0, 2654435761) >>> 0, 7), Le((u ^ Math.imul(u + 2135587861 >>> 0, (c | 1) >>> 0)) >>> 0, c >>> 27 & 31))) >>> 0;
            a = l;
            l = y;
            break;
          case 91:
            s[h.register] = 0;
            break;
          case 228:
            s.fill(0);
            return [a >>> 0, l >>> 0];
        }
      }
    } catch (e) {
      f.e(e);
    } finally {
      f.f();
    }
    b("codec-halt");
  }
  function De() {
    return Ne.apply(this, arguments);
  }
  function Ne() {
    return (Ne = l(N().m(function e(t) {
      let r;
      let n;
      return N().w(function (e) {
        while (true) {
          switch (e.p = e.n) {
            case 0:
              (r = new Uint8Array(t.byteLength)).set(t);
              e.p = 1;
              e.n = 2;
              return window.crypto.subtle.digest("SHA-256", r);
            case 2:
              n = e.v;
              return e.a(2, new Uint8Array(n));
            case 3:
              e.p = 3;
              r.fill(0);
              return e.f(3);
            case 4:
              return e.a(2);
          }
        }
      }, e, null, [[1,, 3, 4]]);
    }))).apply(this, arguments);
  }
  function Be() {
    return (Be = l(N().m(function e(t, r) {
      let n;
      let o;
      let i;
      let a;
      let l;
      let u;
      let c;
      let s;
      let f;
      let h;
      let p;
      let y;
      return N().w(function (e) {
        while (true) {
          switch (e.p = e.n) {
            case 0:
              if (!(t instanceof Uint8Array)) {
                b("codec-envelope-type");
              }
              if ((n = typeof r == "string" ? new TextEncoder().encode(r) : new Uint8Array(0)).length === 0 || n.length > 256) {
                b("codec-binding");
              }
              if (t.length < 76 || t.length > 556) {
                b("codec-envelope-size");
              }
              o = t.slice();
              e.p = 1;
              i = 0;
              for (; i < J.length; i++) {
                if (o[i] !== J[i]) {
                  b("codec-envelope-magic");
                }
              }
              if (o[4] !== 2) {
                b("codec-envelope-version");
              }
              if (o[5] !== 1) {
                b("codec-isa-version");
              }
              if (o[6] !== 2) {
                b("codec-schema-version");
              }
              if (o[7] !== 0) {
                b("codec-flags");
              }
              a = he(o, 8);
              l = he(o, 10);
              if (a < 1 || a > 384) {
                b("codec-machine-size");
              }
              if (l < 1 || l > 96) {
                b("codec-payload-size");
              }
              if (o.length !== 76 + a + l) {
                b("codec-envelope-length");
              }
              u = o.subarray(12, 28);
              c = o.subarray(28, 44);
              s = o.subarray(44, 76);
              f = o.subarray(76, 76 + a);
              h = o.subarray(76 + a);
              e.n = 2;
              return De(n);
            case 2:
              if (!((r, n) => {
                if (r.length === n.length) {
                  let t = 0;
                  for (let e = 0; e < r.length; e++) {
                    t |= r[e] ^ n[e];
                  }
                  return t === 0;
                }
              })(e.v.subarray(0, 16), c)) {
                b("codec-binding");
              }
              p = (e => {
                if (e.length !== 257 || e.length > 384) {
                  b("codec-machine-size");
                }
                if (e[0] !== q[0] || e[1] !== q[1]) {
                  b("codec-machine-magic");
                }
                if (e[2] !== 1) {
                  b("codec-isa-version");
                }
                if (e[3] !== 12) {
                  b("codec-round-count");
                }
                var t = [];
                let r = 0;
                let n = 0;
                for (var o = 4, i = false; o < e.length;) {
                  if (t.length >= 128) {
                    b("codec-machine-fuel");
                  }
                  var a = e[o++];
                  switch (a) {
                    case Y:
                      if (o + 5 > e.length) {
                        b("codec-machine-truncated");
                      }
                      var l = e[o++];
                      if (l >= 4) {
                        b("codec-register");
                      }
                      var u = T(e, o);
                      o += 4;
                      r |= 1 << l;
                      t.push(Object.freeze({
                        op: a,
                        register: l,
                        value: u
                      }));
                      break;
                    case 62:
                      if (o + 2 > e.length) {
                        b("codec-machine-truncated");
                      }
                      var l = e[o++];
                      var u = e[o++];
                      if (l >= 4 || u >= 4) {
                        b("codec-register");
                      }
                      var c = 1 << l | 1 << u;
                      var s = {
                        op: a,
                        destination: l,
                        source: u
                      };
                      if ((r & c) != c) {
                        b("codec-register-uninitialized");
                      }
                      t.push(Object.freeze(s));
                      break;
                    case 199:
                      if (o >= e.length) {
                        b("codec-machine-truncated");
                      }
                      c = e[o++];
                      if (c >= 4) {
                        b("codec-register");
                      }
                      if (!(r & 1 << c)) {
                        b("codec-register-uninitialized");
                      }
                      if (++n > 12) {
                        b("codec-round-count");
                      }
                      t.push(Object.freeze({
                        op: a,
                        register: c
                      }));
                      break;
                    case 91:
                      if (o >= e.length) {
                        b("codec-machine-truncated");
                      }
                      s = e[o++];
                      if (s >= 4) {
                        b("codec-register");
                      }
                      r &= ~(1 << s);
                      t.push(Object.freeze({
                        op: a,
                        register: s
                      }));
                      break;
                    case 228:
                      var f = {
                        op: a
                      };
                      if (o !== e.length || n !== 12) {
                        b("codec-halt");
                      }
                      t.push(Object.freeze(f));
                      i = true;
                      break;
                    default:
                      b("codec-opcode");
                  }
                  if (i) {
                    break;
                  }
                }
                if (!i || n !== 12) {
                  b("codec-halt");
                }
                if (t.length !== 73 || r !== 0) {
                  b("codec-machine-shape");
                }
                for (let e = 0; e < 12; e++) {
                  var h = e * 6;
                  var p = t[h];
                  var y = t[1 + h];
                  var d = t[2 + h];
                  var v = t[3 + h];
                  var g = t[4 + h];
                  var h = t[5 + h];
                  if (p.op !== Y || y.op !== Y || d.op !== 62 || v.op !== 199 || g.op !== 91 || h.op !== 91) {
                    b("codec-machine-shape");
                  }
                  if (p.register === y.register || d.destination !== p.register || d.source !== y.register || v.register !== p.register || g.register !== p.register || h.register !== y.register) {
                    b("codec-machine-shape");
                  }
                }
                if (t[t.length - 1].op !== 228) {
                  b("codec-machine-shape");
                }
                return Object.freeze(t);
              })(f);
              y = ((r, n, o) => {
                var i = new Uint8Array(r.length);
                var a = new Uint8Array(8);
                for (let t = 0, e = 0; t < r.length; e++) {
                  var l = fe(Re(o, n, e), 2);
                  var u = l[0];
                  var l = l[1];
                  Me(a, 0, u);
                  Me(a, 4, l);
                  for (let e = 0; e < a.length && t < r.length; e++, t++) {
                    i[t] = r[t] ^ a[e];
                  }
                }
                a.fill(0);
                return i;
              })(h, u, p);
              e.n = 3;
              return De(y);
            case 3:
              if (!Dt(e.v, s)) {
                y.fill(0);
                b("codec-digest");
              }
              return e.a(2, y);
            case 4:
              e.p = 4;
              n.fill(0);
              o.fill(0);
              return e.f(4);
            case 5:
              return e.a(2);
          }
        }
      }, e, null, [[1,, 4, 5]]);
    }))).apply(this, arguments);
  }
  function ze(e, t) {
    return (e => {
      if (Array.isArray(e)) {
        return e;
      }
    })(e) || ((n, o) => {
      let i = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
      if (i != null) {
        var a;
        var l;
        var u;
        let t;
        var c = [];
        let e = true;
        let r = false;
        try {
          l = (i = i.call(n)).next;
          if (o === 0) {
            if (Object(i) !== i) {
              return;
            }
            e = false;
          } else {
            for (; !(e = (a = l.call(i)).done) && (c.push(a.value), c.length !== o); e = true);
          }
        } catch (e) {
          r = true;
          t = e;
        } finally {
          try {
            if (!e && i.return != null && (u = i.return(), Object(u) !== u)) {
              return;
            }
          } finally {
            if (r) {
              throw t;
            }
          }
        }
        return c;
      }
    })(e, t) || Fe(e, t) || (() => {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Fe(t, r) {
    if (t) {
      if (typeof t == "string") {
        return Ge(t, r);
      }
      let e = {}.toString.call(t).slice(8, -1);
      if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
        return Array.from(t);
      } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
        return Ge(t, r);
      } else {
        return undefined;
      }
    }
  }
  function Ge(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function g(e) {
    for (var t = ne[e], r = "", n = 0; n < t.length; n++) {
      r += String.fromCharCode(t[n] ^ 167 + e * 17 + n * 29 & 255);
    }
    return r;
  }
  function m(e) {
    return e !== null && (O(e) === "object" || typeof e == "function");
  }
  function w(e, t) {
    if (m(e)) {
      try {
        return e[g(t)];
      } catch (e) {}
    }
  }
  function B(e) {
    throw new X(e);
  }
  function z(e, t) {
    e = e.getAll(String.fromCharCode(t));
    if (e.length !== 1 || e[0].length === 0) {
      B("urlvm-query");
    }
    return e[0];
  }
  function We(t, e, r) {
    if (t.length === 0 || t.length > 16) {
      B(r);
    }
    for (let e = 0; e < t.length; e++) {
      var n = t.charCodeAt(e);
      if (n < 48 || n > 57) {
        B(r);
      }
    }
    if (t.length > 1 && t.charCodeAt(0) === 48) {
      B(r);
    }
    var o = Number(t);
    if (!Number.isSafeInteger(o) || o < 0 || e < o || String(o) !== t) {
      B(r);
    }
    return o;
  }
  function Ke(e, t, r) {
    e[t] = r >>> 8 & 255;
    e[t + 1] = r & 255;
    return t + 2;
  }
  function Ve(e, t, r) {
    e[t] = r >>> 24 & 255;
    e[t + 1] = r >>> 16 & 255;
    e[t + 2] = r >>> 8 & 255;
    e[t + 3] = r & 255;
    return t + 4;
  }
  function He(t) {
    for (let e = 0; e < t.length; e++) {
      var r = t.charCodeAt(e);
      if (r >= 55296 && r <= 56319) {
        if (++e >= t.length) {
          return;
        }
        var n = t.charCodeAt(e);
        if (n < 56320 || n > 57343) {
          return;
        }
      } else if (r >= 56320 && r <= 57343) {
        return;
      }
    }
    return 1;
  }
  function $e(e) {
    try {
      new Uint8Array(e).fill(0);
    } catch (e) {}
  }
  function Xe() {
    var e = globalThis.performance;
    return (e && typeof e.now == "function" ? e : Date).now();
  }
  function Je(e, t) {
    if (t != null && t.aborted) {
      B("urlvm-aborted");
    }
    if (Xe() - e > Q) {
      B("urlvm-deadline");
    }
  }
  function qe() {
    return Ye.apply(this, arguments);
  }
  function Ye() {
    return (Ye = l(N().m(function e(t, r, n, o) {
      let i;
      let a;
      let l;
      let u;
      let c;
      let s;
      return N().w(function (e) {
        while (true) {
          switch (e.p = e.n) {
            case 0:
              Je(r, n);
              if ((i = Q - (Xe() - r)) <= 0) {
                B("urlvm-deadline");
              }
              u = false;
              c = new Promise(function (e, t) {
                a = setTimeout(function () {
                  u = true;
                  t(new X("urlvm-deadline"));
                }, i);
                if (n && (l = function () {
                  u = true;
                  t(new X("urlvm-aborted"));
                }, n.addEventListener("abort", l, {
                  once: true
                }), n.aborted)) {
                  l();
                }
              });
              e.p = 1;
              s = Promise.resolve().then(function () {
                if (u) {
                  B(n != null && n.aborted ? "urlvm-aborted" : "urlvm-deadline");
                }
                return t();
              }).then(function (e) {
                if (u = !u && Xe() - r >= Q ? true : u) {
                  if (o != null) {
                    o(e);
                  }
                  B("urlvm-deadline");
                }
                return e;
              });
              e.n = 2;
              return Promise.race([s, c]);
            case 2:
              return e.a(2, e.v);
            case 3:
              e.p = 3;
              if (a !== undefined) {
                clearTimeout(a);
              }
              if (n && l) {
                n.removeEventListener("abort", l);
              }
              return e.f(3);
            case 4:
              return e.a(2);
          }
        }
      }, e, null, [[1,, 3, 4]]);
    }))).apply(this, arguments);
  }
  function Ze() {
    return (Ze = l(N().m(function e(r, n, C, P) {
      let o;
      let i;
      let a;
      let l;
      let u;
      let c;
      let I;
      let s;
      let f;
      let h;
      let M;
      let L;
      let p;
      let R;
      let y;
      let d;
      let v;
      let g;
      let b;
      let m;
      let w;
      let A;
      let S;
      let _ = arguments;
      return N().w(function (e) {
        while (true) {
          switch (e.p = e.n) {
            case 0:
              o = _.length > 4 && _[4] !== undefined ? _[4] : Date.now;
              if ((t = r).length !== 5 || t[0] !== 145 || t[1] !== 55 || t[2] !== 196 || t[3] !== 90 || t[4] !== 237) {
                B("urlvm-machine-shape");
              }
              i = Object.freeze(t.slice());
              if (!Array.isArray(n) || n.length !== 5) {
                B("urlvm-input");
              }
              a = ze(n, 5);
              l = a[0];
              u = a[1];
              c = a[2];
              I = a[3];
              s = a[4];
              if (typeof l != "string" || typeof c != "string" || typeof s != "string" || !Number.isInteger(I) || I < 0 || I > 4294967295) {
                B("urlvm-input");
              }
              if (l.length === 0 || !!(l.length > 16384) || c.length === 0 || !!(c.length > 255) || s.length === 0 || !!(s.length > Z) || !He(l) || !He(c) || !He(s)) {
                B("urlvm-input-size");
              }
              if (!(u instanceof Uint8Array) || (t = u.length) !== 16 && t !== 24 && t !== 32) {
                B("urlvm-key");
              }
              try {
                f = o();
              } catch (e) {
                B("urlvm-clock");
              }
              if (!Number.isSafeInteger(f) || f < 0) {
                B("urlvm-clock");
              }
              (h = new Uint8Array(u.byteLength)).set(u);
              M = [l, h, c, s, f];
              L = Xe();
              e.p = 1;
              p = ((r, e) => {
                let n = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
                if (!n) {
                  if (Array.isArray(r) || (n = Fe(r)) || e && r && typeof r.length == "number") {
                    if (n) {
                      r = n;
                    }
                    let t = 0;
                    function o() {}
                    return {
                      s: o,
                      n: function () {
                        var e = {
                          done: true
                        };
                        if (t >= r.length) {
                          return e;
                        } else {
                          return {
                            done: false,
                            value: r[t++]
                          };
                        }
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: o
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                let t;
                let i = true;
                let a = false;
                return {
                  s: function () {
                    n = n.call(r);
                  },
                  n: function () {
                    var e = n.next();
                    i = e.done;
                    return e;
                  },
                  e: function (e) {
                    a = true;
                    t = e;
                  },
                  f: function () {
                    try {
                      if (!i && n.return != null) {
                        n.return();
                      }
                    } finally {
                      if (a) {
                        throw t;
                      }
                    }
                  }
                };
              })(i);
              e.p = 2;
              y = N().m(function e() {
                let u;
                let c;
                let s;
                let f;
                let h;
                let p;
                let y;
                let d;
                let v;
                let g;
                let b;
                let m;
                let w;
                let A;
                let S;
                let _;
                let k;
                let O;
                let j;
                let x;
                let U;
                let E;
                let T;
                return N().w(function (e) {
                  while (true) {
                    switch (e.p = e.n) {
                      case 0:
                        u = R.value;
                        Je(L, P);
                        E = u;
                        e.n = E === 145 ? 1 : E === 55 ? 2 : E === 196 ? 3 : E === 90 ? 12 : E === 237 ? 13 : 14;
                        break;
                      case 1:
                        try {
                          c = new URL(M[0]);
                        } catch (e) {
                          B("urlvm-wrapper");
                        }
                        if (z(c.searchParams, 118) !== String(2)) {
                          B("urlvm-token-version");
                        }
                        s = z(c.searchParams, 101);
                        f = z(c.searchParams, 105);
                        h = z(c.searchParams, 107);
                        p = z(c.searchParams, 120);
                        y = We(f, 4294967295, "urlvm-index");
                        if ((d = We(p, Number.MAX_SAFE_INTEGER, "urlvm-expiry")) === 0) {
                          B("urlvm-expiry");
                        }
                        if (y !== I) {
                          B("urlvm-index");
                        }
                        if (h !== M[3]) {
                          B("urlvm-key-id");
                        }
                        if ((v = (t => {
                          if (t.length === 0 || t.length > Math.ceil(32896 / 3) || t.length % 4 == 1) {
                            B("urlvm-token-encoding");
                          }
                          var r = new Uint8Array(Math.floor(t.length * 6 / 8));
                          let n = 0;
                          let o = 0;
                          let i = 0;
                          for (let e = 0; e < t.length; e++) {
                            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t.charAt(e));
                            if (a < 0) {
                              B("urlvm-token-encoding");
                            }
                            n = n << 6 | a;
                            if ((o += 6) >= 8) {
                              o -= 8;
                              r[i++] = n >>> o & 255;
                              n &= (1 << o) - 1;
                            }
                          }
                          if (o > 0 && n !== 0) {
                            B("urlvm-token-encoding");
                          }
                          return r.subarray(0, i).slice();
                        })(s)).length < 33 || v.length > 8224) {
                          v.fill(0);
                          B("urlvm-token-size");
                        }
                        if (v[0] !== 83 || v[1] !== 85 || v[2] !== 2 || v[3] !== 1) {
                          v.fill(0);
                          B("urlvm-token-header");
                        }
                        M[5] = v;
                        M[6] = v.slice(4, 16);
                        M[7] = v.slice(16);
                        M[8] = y;
                        M[9] = h;
                        M[10] = d;
                        return e.a(3, 15);
                      case 2:
                        if ((g = M[10]) === undefined) {
                          B("urlvm-expiry");
                        }
                        r = M[2];
                        n = M[8];
                        o = M[9];
                        i = g;
                        l = a = undefined;
                        r = (a = new TextEncoder()).encode(r);
                        a = a.encode(o);
                        if (r.length === 0 || r.length > 255) {
                          B("urlvm-video");
                        }
                        if (a.length === 0 || a.length > Z) {
                          B("urlvm-key-id");
                        }
                        (o = new Uint8Array(3 + D.length + 2 + r.length + 4 + 2 + a.length + 8))[+(l = 0)] = 2;
                        l = Ke(o, 1, D.length);
                        o.set(D, l);
                        l = Ke(o, l += D.length, r.length);
                        o.set(r, l);
                        l = Ke(o, Ve(o, l += r.length, n), a.length);
                        o.set(a, l);
                        r = o;
                        n = l += a.length;
                        a = i;
                        if (!Number.isSafeInteger(a) || a < 0) {
                          B("urlvm-expiry");
                        }
                        l = Math.floor(a / 4294967296);
                        a -= l * 4294967296;
                        n = Ve(r, n, l);
                        Ve(r, n, a);
                        M[11] = o;
                        i = M[9];
                        l = undefined;
                        if ((i = new TextEncoder().encode(i)).length === 0 || i.length > Z) {
                          B("urlvm-key-id");
                        }
                        (l = new Uint8Array(4 + i.length))[0] = 2;
                        l[1] = 1;
                        Ke(l, 2, i.length);
                        l.set(i, 4);
                        M[14] = l;
                        return e.a(3, 15);
                      case 3:
                        e.p = 3;
                        e.n = 4;
                        return qe(function () {
                          return C.importKey("raw", M[1], "HKDF", false, ["deriveBits"]);
                        }, L, P);
                      case 4:
                        m = e.v;
                        e.n = 5;
                        return qe(function () {
                          var e = {
                            name: "HKDF",
                            hash: "SHA-256",
                            salt: D,
                            info: M[14]
                          };
                          return C.deriveBits(e, m, 256);
                        }, L, P, $e);
                      case 5:
                        w = e.v;
                        b = new Uint8Array(w);
                        e.n = 6;
                        return qe(function () {
                          return C.importKey("raw", b, {
                            name: "AES-GCM"
                          }, false, ["decrypt"]);
                        }, L, P);
                      case 6:
                        A = e.v;
                        S = M[7];
                        e.n = 7;
                        return qe(function () {
                          var e = {
                            name: "AES-GCM",
                            iv: M[6],
                            additionalData: M[11],
                            tagLength: 128
                          };
                          return C.decrypt(e, A, S);
                        }, L, P, $e);
                      case 7:
                        _ = e.v;
                        M[12] = new Uint8Array(_);
                        e.n = 10;
                        break;
                      case 8:
                        e.p = 8;
                        if ((T = e.v) instanceof X) {
                          throw T;
                        }
                        e.n = 9;
                        break;
                      case 9:
                        B("urlvm-auth");
                      case 10:
                        e.p = 10;
                        if ((k = b) != null) {
                          k.fill(0);
                        }
                        return e.f(10);
                      case 11:
                        return e.a(3, 15);
                      case 12:
                        O = M[10];
                        if (M[4] > O && M[4] - O > 30000) {
                          B("urlvm-expired");
                        }
                        if ((j = M[12]).length === 0 || j.length > 8192) {
                          B("urlvm-plaintext-size");
                        }
                        try {
                          var t = {
                            fatal: true
                          };
                          x = new TextDecoder("utf-8", t).decode(j);
                        } catch (e) {
                          B("urlvm-utf8");
                        }
                        try {
                          U = new URL(x);
                        } catch (e) {
                          B("urlvm-target");
                        }
                        if (!((r, e) => {
                          var n = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47);
                          if (r.slice(0, n.length) === n) {
                            for (let e = 0; e < r.length; e++) {
                              var o = r.charCodeAt(e);
                              if (o <= 32 || o === 92 || o === 127) {
                                return;
                              }
                            }
                            let t = r.length;
                            for (let e = n.length; e < r.length; e++) {
                              var i = r.charCodeAt(e);
                              if (i === 47 || i === 63 || i === 35) {
                                t = e;
                                break;
                              }
                            }
                            var a = r.slice(n.length, t);
                            return a.length > 0 && a.indexOf(String.fromCharCode(64)) === -1 && e.protocol === n.slice(0, -2) && e.hostname.length > 0 && e.username.length === 0 && e.password.length === 0;
                          }
                        })(x, U)) {
                          B("urlvm-target");
                        }
                        M[13] = x;
                        return e.a(3, 15);
                      case 13:
                        if (typeof M[13] != "string") {
                          B("urlvm-halt");
                        }
                        return e.a(2, {
                          v: M[13]
                        });
                      case 14:
                        B("urlvm-opcode");
                      case 15:
                        return e.a(2);
                    }
                  }
                  var r;
                  var n;
                  var o;
                  var i;
                  var a;
                  var l;
                }, e, null, [[3, 8, 10, 11]]);
              });
              p.s();
            case 3:
              if ((R = p.n()).done) {
                e.n = 6;
                break;
              }
              return e.d((t => {
                if (t != null) {
                  var r = t[typeof Symbol == "function" && Symbol.iterator || "@@iterator"];
                  let e = 0;
                  if (r) {
                    return r.call(t);
                  }
                  if (typeof t.next == "function") {
                    return t;
                  }
                  if (!isNaN(t.length)) {
                    return {
                      next: function () {
                        return {
                          value: (t = t && e >= t.length ? undefined : t) && t[e++],
                          done: !t
                        };
                      }
                    };
                  }
                }
                throw new TypeError(O(t) + " is not iterable");
              })(y()), 4);
            case 4:
              if (d = e.v) {
                return e.a(2, d.v);
              }
              e.n = 5;
              break;
            case 5:
              e.n = 3;
              break;
            case 6:
              e.n = 8;
              break;
            case 7:
              e.p = 7;
              S = e.v;
              p.e(S);
            case 8:
              e.p = 8;
              p.f();
              return e.f(8);
            case 9:
              e.p = 9;
              M[1].fill(0);
              if ((v = M[5]) != null) {
                v.fill(0);
              }
              if ((g = M[6]) != null) {
                g.fill(0);
              }
              if ((b = M[7]) != null) {
                b.fill(0);
              }
              if ((m = M[11]) != null) {
                m.fill(0);
              }
              if ((w = M[12]) != null) {
                w.fill(0);
              }
              if ((A = M[14]) != null) {
                A.fill(0);
              }
              return e.f(9);
            case 10:
              return e.a(2, B("urlvm-halt"));
          }
        }
        var t;
      }, e, null, [[2, 7, 8, 9], [1,, 9, 10]]);
    }))).apply(this, arguments);
  }
  function Qe(r, e) {
    let n = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (!n) {
      if (Array.isArray(r) || (n = (t => {
        if (t) {
          if (typeof t == "string") {
            return et(t, undefined);
          }
          let e = {}.toString.call(t).slice(8, -1);
          if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
            return Array.from(t);
          } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
            return et(t, undefined);
          } else {
            return undefined;
          }
        }
      })(r)) || e && r && typeof r.length == "number") {
        if (n) {
          r = n;
        }
        let t = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            var e = {
              done: true
            };
            if (t >= r.length) {
              return e;
            } else {
              return {
                done: false,
                value: r[t++]
              };
            }
          },
          e: function (e) {
            throw e;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    let t;
    let i = true;
    let a = false;
    return {
      s: function () {
        n = n.call(r);
      },
      n: function () {
        var e = n.next();
        i = e.done;
        return e;
      },
      e: function (e) {
        a = true;
        t = e;
      },
      f: function () {
        try {
          if (!i && n.return != null) {
            n.return();
          }
        } finally {
          if (a) {
            throw t;
          }
        }
      }
    };
  }
  function et(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function tt(e, t) {
    e = w(e, t);
    t = w(e, 20);
    return typeof t == "string" && t.length > 0 || typeof t == "number" || m(t);
  }
  function rt() {
    return nt.apply(this, arguments);
  }
  function nt() {
    return (nt = l(N().m(function e(t, r) {
      let n;
      return N().w(function (e) {
        while (true) {
          switch (e.p = e.n) {
            case 0:
              if (t) {
                e.n = 1;
                break;
              }
              return e.a(2, r);
            case 1:
              e.p = 1;
              e.n = 2;
              return Promise.race([Promise.resolve().then(t), new Promise(function (e) {
                n = setTimeout(function () {
                  return e(r);
                }, 1500);
              })]);
            case 2:
              return e.a(2, e.v);
            case 3:
              e.p = 3;
              return e.a(2, r);
            case 4:
              e.p = 4;
              if (n !== undefined) {
                clearTimeout(n);
              }
              return e.f(4);
            case 5:
              return e.a(2);
          }
        }
      }, e, null, [[1, 3, 4, 5]]);
    }))).apply(this, arguments);
  }
  function ot(e) {
    if (typeof e != "string") {
      return "";
    } else if ((e = e.trim().toLowerCase()).charCodeAt(e.length - 1) === 46) {
      return e.slice(0, -1);
    } else {
      return e;
    }
  }
  function it(e) {
    if (typeof e == "string") {
      return e.slice(0, 128);
    } else if (typeof e == "number" && Number.isFinite(e)) {
      return String(e).slice(0, 128);
    } else {
      return "";
    }
  }
  let at = (() => {
    let t;
    let r;
    let n;
    return je(function e(t, r = []) {
      xe(this, e);
      v(this, "program", undefined);
      v(this, "programInput", undefined);
      v(this, "binding", undefined);
      v(this, "capabilities", undefined);
      v(this, "preparedProgram", null);
      v(this, "activeRun", null);
      if (!Array.isArray(r) || r.length > 5) {
        y("context");
      }
      var n = r[0];
      if (n !== undefined && (typeof n != "string" || n.length === 0)) {
        y("program-binding");
      }
      if (r[2] !== undefined && typeof r[2] != "function" || r[3] !== undefined && typeof r[3] != "function") {
        y("context-capability");
      }
      this.binding = n;
      this.programInput = t instanceof Uint8Array ? t.slice() : t;
      this.program = this.binding === undefined ? Ie(t) : null;
      this.capabilities = Object.freeze([r[4] ?? Pe(), (e => {
        if (!e) {
          return [];
        }
        for (var t = [], r = 0; r < e.length && t.length < 64; r++) {
          if (e[r] instanceof Uint8Array && e[r].length <= 255) {
            t.push(e[r].slice());
          }
        }
        return t;
      })(r[1]), r[2], r[3]]);
    }, [{
      key: "collect",
      value: function () {
        let e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
        var r = arguments.length > 1 ? arguments[1] : undefined;
        var t = Number.isFinite(t) ? Math.max(1, Math.min(8, Math.floor(t))) : 8;
        if (r) {
          return this.execute(t, r).then(function (e) {
            return e.slice();
          });
        }
        if (this.activeRun) {
          return this.activeRun.then(function (e) {
            return e.slice();
          });
        }
        let n = this.execute(t);
        (this.activeRun = n).then(function () {
          if (e.activeRun === n) {
            e.activeRun = null;
          }
        }, function () {
          if (e.activeRun === n) {
            e.activeRun = null;
          }
        });
        return n.then(function (e) {
          return e.slice();
        });
      }
    }, {
      key: "open",
      value: (n = l(N().m(function e(t, r) {
        let n;
        let o;
        let i;
        return N().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                d(r);
                e.n = 1;
                return this.resolveProgram();
              case 1:
                n = e.v;
                d(r);
                o = w(this.capabilities[0], 29);
                if (m(i = w(o, 30))) {
                  e.n = 2;
                  break;
                }
                throw new c("crypto");
              case 2:
                return e.a(2, function () {
                  return Ze.apply(this, arguments);
                }(n.urlMachine, t, i, r));
            }
          }
        }, e, this);
      })), function (e, t) {
        return n.apply(this, arguments);
      })
    }, {
      key: "execute",
      value: (r = l(N().m(function e(t, r) {
        let n;
        let o;
        let i;
        let a;
        let l;
        return N().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                n = Date.now();
                d(r);
                e.n = 1;
                return this.resolveProgram();
              case 1:
                o = e.v.steps;
                d(r);
                if (Date.now() - n > 5000) {
                  throw new c("deadline");
                }
                e.n = 2;
                break;
              case 2:
                i = Array(18).fill(0);
                a = 0;
              case 3:
                if (a < o.length) {
                  d(r);
                  if (Date.now() - n > 5000) {
                    throw new v73("deadline");
                  }
                  e.n = 4;
                } else {
                  e.n = 8;
                }
                break;
              case 4:
                l = o[a];
                e.n = 5;
                return this.sample(l.probe);
              case 5:
                i[l.slot] = e.v;
                d(r);
                if (Date.now() - n > 5000) {
                  throw new c("deadline");
                }
                e.n = 6;
                break;
              case 6:
                if ((a + 1) % t == 0) {
                  e.n = 7;
                  return Promise.resolve();
                }
                e.n = 7;
                break;
              case 7:
                a++;
                e.n = 3;
                break;
              case 8:
                return e.a(2, i);
            }
          }
        }, e, this);
      })), function (e, t) {
        return r.apply(this, arguments);
      })
    }, {
      key: "resolveProgram",
      value: function () {
        if (this.program) {
          return Promise.resolve(this.program);
        }
        if (!this.preparedProgram) {
          let t = this.programInput;
          this.preparedProgram = function () {
            return Be.apply(this, arguments);
          }(t, this.binding || "").then(function (e) {
            try {
              return Ie(Array.from(e));
            } finally {
              e.fill(0);
              if (t instanceof Uint8Array) {
                t.fill(0);
              }
            }
          }, function (e) {
            if (t instanceof Uint8Array) {
              t.fill(0);
            }
            throw e;
          });
        }
        return this.preparedProgram;
      }
    }, {
      key: "clock",
      value: function () {
        var e = w(this.capabilities[0], 9);
        var t = w(e, 10);
        if (typeof t == "function") {
          try {
            var r = t.call(e);
            if (typeof r == "number" && Number.isFinite(r)) {
              return String(r);
            }
          } catch (e) {}
        }
        return String(Date.now());
      }
    }, {
      key: "globalExists",
      value: function (e) {
        return w(this.capabilities[0], e) !== undefined;
      }
    }, {
      key: "p0",
      value: function () {
        var e = w(this.capabilities[0], 6);
        var t = ot(w(e, 7));
        if (t) {
          var r;
          var n = Qe(this.capabilities[1]);
          try {
            for (n.s(); !(r = n.n()).done;) {
              if (ot((t => {
                let r = "";
                for (let e = 0; e < t.length; e++) {
                  r += String.fromCharCode(t[e]);
                }
                return r.toLowerCase();
              })(r.value)) === t) {
                return true;
              }
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
        return false;
      }
    }, {
      key: "p1",
      value: function () {
        var e = w(this.capabilities[0], 4);
        var e = w(e, 5);
        var e = (typeof e == "string" ? e.slice(0, 512) : "").toLowerCase();
        var t = g(34);
        if (e.indexOf(t) !== -1) {
          return true;
        }
        if (m(this.capabilities[0])) {
          try {
            let e = 0;
            for (var r in this.capabilities[0]) {
              if (r.toLowerCase().indexOf(t) === 0) {
                return true;
              }
              if (++e >= 4096) {
                break;
              }
            }
          } catch (e) {}
        }
        return false;
      }
    }, {
      key: "p2",
      value: function () {
        var e;
        return !!this.globalExists(25) || (e = w(this.capabilities[0], 4), (typeof (e = w(e, 5)) == "string" ? e.slice(0, 512) : "").toLowerCase().indexOf(g(35)) !== -1);
      }
    }, {
      key: "p3",
      value: function () {
        var e = w(this.capabilities[0], 26);
        var e = w(e, 36);
        if (!m(e)) {
          return 0;
        }
        try {
          return Object.isFrozen(e);
        } catch (e) {
          return 0;
        }
      }
    }, {
      key: "sample",
      value: (t = l(N().m(function e(t) {
        let r;
        let n;
        let o;
        let i;
        let a;
        let l;
        let u;
        return N().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                a = t;
                e.n = a === 49 || a === 131 ? 1 : a === 164 ? 2 : a === 87 ? 3 : a === 194 ? 4 : a === 25 ? 5 : a === 231 ? 6 : a === 69 ? 7 : a === 184 ? 8 : a === 98 ? 9 : a === 157 ? 10 : a === 43 ? 11 : a === 241 ? 12 : a === 116 ? 14 : a === 14 ? 15 : a === 92 ? 17 : 18;
                break;
              case 1:
                return e.a(2, this.clock());
              case 2:
                return e.a(2, this.globalExists(11));
              case 3:
                return e.a(2, this.globalExists(12));
              case 4:
                return e.a(2, this.globalExists(13));
              case 5:
                return e.a(2, ((e = Pe()) => {
                  let t = 0;
                  var r = w(e, 0);
                  if (!m(e) || r !== e) {
                    t |= 1;
                  }
                  var r = w(e, 1);
                  if (!m(r) || typeof w(r, 2) != "function" || w(r, 3) !== e) {
                    t |= 2;
                  }
                  var r = w(e, 4);
                  if (!m(r) || typeof w(r, 5) != "string") {
                    t |= 4;
                  }
                  var n = w(e, 6);
                  if (!m(n) || typeof w(n, 7) != "string" || typeof w(n, 8) != "string") {
                    t |= 8;
                  }
                  var n = w(e, 29);
                  if (!m(w(n, 30)) || typeof w(n, 31) != "function") {
                    t |= 16;
                  }
                  var n = w(e, 14);
                  var n = w(n, 15);
                  if (w(n, 16) != null) {
                    t |= 32;
                  }
                  if (w(n, 17) != null) {
                    t |= 256;
                  }
                  if (typeof (n = w(r, 5)) == "string" && n.toLowerCase().indexOf(g(17)) !== -1) {
                    t |= 256;
                  }
                  if (tt(e, 18)) {
                    t |= 64;
                  }
                  if (tt(e, 19)) {
                    t |= 128;
                  }
                  let o = typeof w(e, 21) == "function";
                  n = w(e, 22);
                  if (!o && typeof n == "function" && m(e)) {
                    try {
                      o = e instanceof n;
                    } catch (e) {
                      o = false;
                    }
                  }
                  if (o) {
                    t |= 512;
                  }
                  if (w(r, 32) === g(33)) {
                    t |= 1024;
                  }
                  return Object.freeze([t !== 0, t]);
                })(this.capabilities[0])[0]);
              case 6:
                r = w(this.capabilities[0], 27);
                return e.a(2, w(r, 28) === true);
              case 7:
                n = w(this.capabilities[0], 4);
                return e.a(2, w(n, 24) === true);
              case 8:
                o = w(this.capabilities[0], 4);
                return e.a(2, ((e, t) => {
                  if (!m(e)) {
                    return false;
                  }
                  try {
                    return g(t) in e;
                  } catch (e) {
                    return false;
                  }
                })(o, 23));
              case 9:
                return e.a(2, this.p0());
              case 10:
                return e.a(2, this.p1());
              case 11:
                return e.a(2, this.p2());
              case 12:
                e.n = 13;
                return rt(this.capabilities[2], true);
              case 13:
                l = e.v;
                return e.a(2, l !== false);
              case 14:
                return e.a(2, this.p3());
              case 15:
                u = it;
                e.n = 16;
                return rt(this.capabilities[3], "");
              case 16:
                return e.a(2, u(e.v));
              case 17:
                i = w(this.capabilities[0], 6);
                return e.a(2, w(i, 8) === String.fromCharCode(104, 116, 116, 112, 115, 58));
              case 18:
                throw new c("capability");
              case 19:
                return e.a(2);
            }
          }
        }, e, this);
      })), function (e) {
        return t.apply(this, arguments);
      })
    }]);
  })();
  let lt = {
    name: "eruda",
    io: function () {
      return l(N().m(function e() {
        let t;
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              return e.a(2, typeof eruda != "undefined" && ((t = eruda) == null || (t = t._devTools) == null ? undefined : t._isShow) === true);
            }
          }
        }, e);
      }))();
    },
    ie: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              return e.a(2, true);
            }
          }
        }, e);
      }))();
    }
  };
  let ut = 0;
  function ct() {
    return (typeof performance != "undefined" ? performance : Date).now();
  }
  function st(e) {
    var e = arguments.length > 0 && e !== undefined ? e : {};
    var t = e.includes;
    var t = t === undefined ? [] : t;
    var e = e.excludes;
    var e = e === undefined ? [] : e;
    var t = t.some(Boolean);
    var e = e.some(Boolean);
    return t && !e;
  }
  let ft = {
    name: "debugger-checker",
    io: function () {
      return l(N().m(function e() {
        let t;
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              t = ct();
              try {
                (function () {}).constructor("debugger")();
              } catch (e) {}
              return e.a(2, ct() - t > 100);
            }
          }
        }, e);
      }))();
    },
    ie: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              return e.a(2, true);
            }
          }
        }, e);
      }))();
    }
  };
  let n = false;
  let ht = {
    name: "element-id",
    io: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              n = false;
              return e.a(2, n);
            }
          }
        }, e);
      }))();
    },
    ie: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          var t = {};
          for (t.includes = [be];;) {
            if (e.n === 0) {
              return e.a(2, st(t));
            }
          }
        }, e);
      }))();
    }
  };
  let pt = {
    name: "performance",
    io: function () {
      return l(N().m(function e() {
        let t;
        let r;
        return N().w(function (e) {
          while (true) {
            switch (e.n) {
              case 0:
                t = false;
                r = Math.max(false, false);
                ut = Math.max(ut, r);
                if (t === 0) {
                  return e.a(2, false);
                }
                e.n = 1;
                break;
              case 1:
                if (ut === 0) {
                  return !(e.n = 2);
                }
                e.n = 4;
                break;
              case 2:
                if (e.v) {
                  return e.a(2, true);
                }
                e.n = 3;
                break;
              case 3:
                return e.a(2, false);
              case 4:
                return e.a(2, t > ut * 10);
            }
          }
        }, e);
      }))();
    },
    ie: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          var t = {};
          for (t.includes = [ge, be, ve];;) {
            if (e.n === 0) {
              return e.a(2, st(t));
            }
          }
        }, e);
      }))();
    }
  };
  let yt = {
    header: function () {
      n = true;
      return null;
    }
  };
  let dt = {
    name: "DevtoolsFormatters",
    io: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              if (window.devtoolsFormatters) {
                if (!window.devtoolsFormatters.includes(yt)) {
                  window.devtoolsFormatters.push(yt);
                }
              } else {
                window.devtoolsFormatters = [yt];
              }
              n = false;
              return e.a(2, n);
            }
          }
        }, e);
      }))();
    },
    ie: function () {
      return l(N().m(function e() {
        return N().w(function (e) {
          while (true) {
            if (e.n === 0) {
              return e.a(2, true);
            }
          }
        }, e);
      }))();
    }
  };
  function vt() {
    var e = Date.now();
    var t = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return Math.abs(e * 100000 ^ t);
  }
  function gt() {
    try {
      let e = localStorage.getItem("capid");
      if (!e) {
        e = vt().toString();
        localStorage.setItem("capid", e);
      }
      return e;
    } catch (e) {
      return vt().toString();
    }
  }
  let bt = (() => {
    let e;
    let t;
    var r = {
      writable: false
    };
    var n = function e(t) {
      t = t.checkers;
      if (!(this instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
      u(this, "_checkers", undefined);
      u(this, "_listeners", []);
      u(this, "_io", false);
      u(this, "_detectLoopStopped", true);
      u(this, "_detectLoopDelay", 500);
      u(this, "_timer", undefined);
      this._checkers = t.slice();
    };
    var o = [{
      key: "io",
      get: function () {
        return this._io;
      }
    }, {
      key: "l",
      value: function () {
        if (hasDocument && (this._detectLoopDelay <= 0 && this.setDetectDelay(500), this._detectLoopStopped)) {
          this._detectLoopStopped = false;
          this._detectLoop();
        }
      }
    }, {
      key: "s",
      value: function () {
        if (!this._detectLoopStopped) {
          this._detectLoopStopped = true;
          this._io = false;
          clearTimeout(this._timer);
        }
      }
    }, {
      key: "il",
      value: function () {
        return !this._detectLoopStopped;
      }
    }, {
      key: "setDetectDelay",
      value: function (e) {
        this._detectLoopDelay = e;
      }
    }, {
      key: "al",
      value: function (e) {
        this._listeners.push(e);
      }
    }, {
      key: "rl",
      value: function (t) {
        this._listeners = this._listeners.filter(function (e) {
          return e !== t;
        });
      }
    }, {
      key: "_broadcast",
      value: function (e) {
        var t;
        var r = j(this._listeners);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var n = t.value;
            try {
              n(e.io, e);
            } catch (e) {}
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      }
    }, {
      key: "co",
      value: (t = l(N().m(function e() {
        let t;
        let r;
        let n;
        let o;
        let i;
        return N().w(function (e) {
          while (true) {
            switch (e.p = e.n) {
              case 0:
                t = j(this._checkers);
                e.p = 1;
                t.s();
              case 2:
                if ((r = t.n()).done) {
                  e.n = 7;
                  break;
                }
                n = r.value;
                e.n = 3;
                return n.ie();
              case 3:
                if (o = e.v) {
                  e.n = 4;
                  return n.io();
                }
                e.n = 5;
                break;
              case 4:
                o = e.v;
              case 5:
                if (o) {
                  return e.a(2, true);
                }
                e.n = 6;
                break;
              case 6:
                e.n = 2;
                break;
              case 7:
                e.n = 9;
                break;
              case 8:
                e.p = 8;
                i = e.v;
                t.e(i);
              case 9:
                e.p = 9;
                t.f();
                return e.f(9);
              case 10:
                return e.a(2, false);
            }
          }
        }, e, this, [[1, 8, 9, 10]]);
      })), function () {
        return t.apply(this, arguments);
      })
    }, {
      key: "_detectLoop",
      value: (e = l(N().m(function e() {
        let t;
        let r;
        let n;
        let o;
        let i;
        let a;
        let l = this;
        return N().w(function (e) {
          while (true) {
            switch (e.p = e.n) {
              case 0:
                t = false;
                r = "";
                n = j(this._checkers);
                e.p = 1;
                n.s();
              case 2:
                if ((o = n.n()).done) {
                  e.n = 6;
                  break;
                }
                i = o.value;
                e.n = 3;
                return i.ie();
              case 3:
                if (e.v) {
                  r = i.name;
                  e.n = 4;
                  return i.io();
                }
                e.n = 5;
                break;
              case 4:
                if (t = e.v) {
                  return e.a(3, 6);
                }
                e.n = 5;
                break;
              case 5:
                e.n = 2;
                break;
              case 6:
                e.n = 8;
                break;
              case 7:
                e.p = 7;
                a = e.v;
                n.e(a);
              case 8:
                e.p = 8;
                n.f();
                return e.f(8);
              case 9:
                if (t !== this._io) {
                  this._io = t;
                  this._broadcast({
                    io: t,
                    checkerName: r
                  });
                }
                if (this._detectLoopDelay > 0 && !this._detectLoopStopped) {
                  this._timer = setTimeout(function () {
                    return l._detectLoop();
                  }, this._detectLoopDelay);
                } else {
                  this.s();
                }
              case 10:
                return e.a(2);
            }
          }
        }, e, this, [[1, 7, 8, 9]]);
      })), function () {
        return e.apply(this, arguments);
      })
    }];
    a(n.prototype, o);
    Object.defineProperty(n, "prototype", r);
    return n;
  })();
  let x = mt(A, [{
    key: "clone",
    value: function () {
      return new A(this.hi, this.lo);
    }
  }, {
    key: "add",
    value: function (e) {
      var t = this.lo + e.lo >>> 0;
      var r = t < this.lo ? 1 : 0;
      return new A(this.hi + e.hi + r >>> 0, t);
    }
  }, {
    key: "xor",
    value: function (e) {
      return new A(this.hi ^ e.hi, this.lo ^ e.lo);
    }
  }, {
    key: "or",
    value: function (e) {
      return new A(this.hi | e.hi, this.lo | e.lo);
    }
  }, {
    key: "shiftLeft",
    value: function (e) {
      if ((e |= 0) == 0) {
        return this.clone();
      } else if (e < 32) {
        return new A((this.hi << e | this.lo >>> 32 - e) >>> 0, this.lo << e >>> 0);
      } else {
        return new A(e < 64 ? this.lo << e - 32 >>> 0 : 0, 0);
      }
    }
  }, {
    key: "shiftRight",
    value: function (e) {
      var t;
      if ((e |= 0) == 0) {
        return this.clone();
      } else if (e < 32) {
        t = (this.lo >>> e | this.hi << 32 - e) >>> 0;
        return new A(this.hi >>> e >>> 0, t);
      } else {
        return new A(0, e < 64 ? this.hi >>> e - 32 >>> 0 : 0);
      }
    }
  }, {
    key: "toNumber",
    value: function () {
      return this.hi * 4294967296 + this.lo;
    }
  }], [{
    key: "fromNumber",
    value: function (e) {
      return new A(e / 4294967296 >>> 0, e >>> 0);
    }
  }]);
  function A(e, t) {
    wt(this, A);
    At(this, "hi", undefined);
    At(this, "lo", undefined);
    this.hi = e >>> 0;
    this.lo = t >>> 0;
  }
  function mt(e, t, r) {
    var n = {
      writable: false
    };
    if (t) {
      a(e.prototype, t);
    }
    if (r) {
      a(e, r);
    }
    Object.defineProperty(e, "prototype", n);
    return e;
  }
  function wt(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function At(e, t, r) {
    var n = {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    };
    if ((t = o(t)) in e) {
      Object.defineProperty(e, t, n);
    } else {
      e[t] = r;
    }
  }
  function St(e) {
    let t = e.add(new x(2654435769, 2135587861));
    t = _t(t.xor(t.shiftRight(30)), new x(3210233709, 484763065));
    return (t = _t(t.xor(t.shiftRight(27)), new x(2496678331, 321982955))).xor(t.shiftRight(31));
  }
  function _t(e, t) {
    var r = e.lo & 65535;
    var n = e.lo >>> 16 & 65535;
    var o = e.hi & 65535;
    var e = e.hi >>> 16 & 65535;
    var i = t.lo & 65535;
    var a = t.lo >>> 16 & 65535;
    var l = t.hi & 65535;
    var t = t.hi >>> 16 & 65535;
    var u = Math.imul(r, i);
    var c = (u >>> 16) + Math.imul(n, i);
    u &= 65535;
    var s = (c >>> 16) + Math.imul(o, i);
    c &= 65535;
    var i = (s >>> 16) + Math.imul(e, i);
    var f = i >>> 16;
    i &= 65535;
    s = (s &= 65535) + (((c += Math.imul(r, a)) >>> 16) + Math.imul(n, a));
    c &= 65535;
    i += (s >>> 16) + Math.imul(o, a);
    s &= 65535;
    f = f + ((i >>> 16) + Math.imul(e, a)) & 65535;
    i = (i &= 65535) + (((s += Math.imul(r, l)) >>> 16) + Math.imul(n, l));
    s &= 65535;
    f += (i >>> 16) + Math.imul(o, l);
    i &= 65535;
    Math.imul(e, l);
    f = (f &= 65535) + (((i += Math.imul(r, t)) >>> 16) + Math.imul(n, t));
    i &= 65535;
    Math.imul(o, t);
    f &= 65535;
    Math.imul(e, t);
    return new x((s & 65535 | (i & 65535) << 16) >>> 0, (u & 65535 | (c & 65535) << 16) >>> 0);
  }
  let kt = mt(function e(t) {
    wt(this, e);
    At(this, "s0", undefined);
    At(this, "s1", undefined);
    this.s0 = St(t);
    this.s1 = St(this.s0);
    if (this.s0.hi === 0 && this.s0.lo === 0 && this.s1.hi === 0 && this.s1.lo === 0) {
      this.s1 = new x(0, 1);
    }
  }, [{
    key: "nextU32",
    value: function () {
      let e = this.s0;
      var t = this.s1;
      this.s0 = t;
      e = (e = (e = e.xor(e.shiftLeft(23))).xor(e.shiftRight(17))).xor(t).xor(t.shiftRight(26));
      this.s1 = e;
      return this.s0.add(this.s1).lo >>> 0;
    }
  }]);
  function Ot(e) {
    return ye.decode(e);
  }
  r = {
    writable: false
  };
  a((t = function e(t) {
    var r;
    if (!(this instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
    if ((r = o("s")) in this) {
      Object.defineProperty(this, r, {
        value: undefined,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      this[r] = undefined;
    }
    this.s = t >>> 0;
  }).prototype, [{
    key: "sample",
    value: function (e, t = 2) {
      var r = 0;
      var n = _(this.s ^ U(e));
      var o = xt.length;
      for (var i = Math.max(1, Math.min(t, 5)), a = 0; a < i; a++) {
        var n = _(n + a * 2654435769);
        var l = xt[n % o]();
        if (l !== 0) {
          r |= (_(l ^ n ^ U(e)) | 1) >>> 0;
        }
      }
      this.s = _(this.s + r + i);
      return r >>> 0;
    }
  }]);
  Object.defineProperty(t, "prototype", r);
  let jt = t;
  let xt = [function () {
    if (typeof globalThis.window == "object" && globalThis.window === globalThis) {
      return 0;
    } else {
      return 1;
    }
  }, function () {
    if (typeof globalThis.document?.createElement == "function") {
      return 0;
    } else {
      return 3;
    }
  }, function () {
    if (typeof globalThis.navigator?.userAgent == "string") {
      return 0;
    } else {
      return 5;
    }
  }, function () {
    if (globalThis.crypto?.subtle?.digest && typeof globalThis.crypto?.getRandomValues == "function") {
      return 0;
    } else {
      return 7;
    }
  }, function () {
    var e = globalThis.location.protocol;
    if (e && ["http:", "https:", "chrome-extension:", "file:"].includes(e)) {
      return 0;
    } else {
      return 9;
    }
  }, function () {
    if (globalThis.process?.versions?.node || globalThis.Deno || globalThis.Bun) {
      return 11;
    } else {
      return 0;
    }
  }, function () {
    if (globalThis.process?.versions?.electron) {
      return 13;
    } else {
      return 0;
    }
  }, function () {
    if (typeof globalThis.importScripts == "function" || globalThis.WorkerGlobalScope !== undefined && globalThis.WorkerGlobalScope && globalThis instanceof globalThis.WorkerGlobalScope) {
      return 15;
    } else {
      return 0;
    }
  }, function () {
    var e = String(globalThis.navigator?.userAgent || "");
    if (/(Chrome|Safari|Firefox|Edg|OPR|CriOS|FxiOS|Mobile Safari|AppleWebKit)/.test(e)) {
      return 0;
    } else {
      return 17;
    }
  }, function () {
    if (globalThis.navigator?.webdriver) {
      return 19;
    } else {
      return 0;
    }
  }, function () {
    var e = globalThis.navigator?.hardwareConcurrency;
    if (typeof e == "number" || e > 0 && e < 16384) {
      return 0;
    } else {
      return 21;
    }
  }, function () {
    var e = globalThis.screen;
    if (e && e.width > 0 && e.height > 0) {
      return 0;
    } else {
      return 23;
    }
  }, function () {
    var e = globalThis.performance;
    if (e && typeof e.now == "function") {
      return 0;
    } else {
      return 25;
    }
  }, function () {
    if (typeof globalThis.window == "object") {
      return 0;
    } else {
      return 17;
    }
  }, function () {
    var e = globalThis.CSS;
    if (e && typeof e.supports == "function") {
      return 0;
    } else {
      return 12;
    }
  }, function () {
    if (globalThis.location?.hostname === new URL(origin).hostname) {
      return 0;
    } else {
      return 18;
    }
  }];
  function Ut(e) {
    var t = "";
    for (var r = 0; r < e.length;) {
      var n = e.charCodeAt(r++) & 255;
      var o = r < e.length ? e.charCodeAt(r++) & 255 : NaN;
      var i = r < e.length ? e.charCodeAt(r++) & 255 : NaN;
      var a = n >> 2;
      var n = (n & 3) << 4 | (isNaN(o) ? 0 : o >> 4);
      var o = isNaN(o) ? 64 : (o & 15) << 2 | (isNaN(i) ? 0 : i >> 6);
      var i = isNaN(i) ? 64 : i & 63;
      t += s.charAt(a) + s.charAt(n) + s.charAt(o) + s.charAt(i);
    }
    return t;
  }
  function Et(e) {
    let t = "";
    var r = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    let n = 0;
    while (n < r.length) {
      var o = s.indexOf(e.charAt(n++));
      var i = s.indexOf(e.charAt(n++));
      var a = s.indexOf(e.charAt(n++));
      var l = s.indexOf(e.charAt(n++));
      var u = (i & 15) << 4 | a >> 2;
      var c = (a & 3) << 6 | l;
      t += String.fromCharCode(o << 2 | i >> 4);
      if (a !== 64) {
        t += String.fromCharCode(u);
      }
      if (l !== 64) {
        t += String.fromCharCode(c);
      }
    }
    return t;
  }
  function Tt(e) {
    return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }
  function Ct(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    e = t.length % 4;
    if (e) {
      t += "=".repeat(4 - e);
    }
    return t;
  }
  function Pt(e) {
    let t;
    if (Array.isArray(e)) {
      t = S(e);
    } else if (e[Symbol?.iterator] || e["@@iterator"]) {
      t = Array.from(e);
    } else {
      if (!e) {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      if (typeof e == "string") {
        t = S(e);
      }
      var r = {}.toString.call(e).slice(8, -1);
      if (r === "Object") {
        e.contructor?.name;
      }
      t = r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S(e) : undefined;
    }
    return t.map(e => e.toString(16).padStart(2, "0")).join("");
  }
  function It() {
    var t = arguments.length;
    var r = new Array(t);
    for (let e = 0; e < t; e++) {
      r[e] = arguments[e];
    }
    var e = r.reduce((e, t) => e + t.length, 0);
    var n = new Uint8Array(e);
    let o = 0;
    for (let e = 0; e < r.length; e++) {
      n.set(r[e], o);
      o += r[e].length;
    }
    return n;
  }
  function S(t, e) {
    let r;
    if (e == null || e > t.length) {
      r = t.length;
    }
    var n = Array(r);
    for (let e = 0; e < r; e++) {
      n[e] = t[e];
    }
    return n;
  }
  function Mt(e) {
    if (e == null || !e.length) {
      return new Uint8Array(0);
    }
    var t;
    var r = new TextEncoder();
    var n = [];
    var o = (r => {
      let n = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
      if (!n) {
        if (Array.isArray(r) || (n = (t => {
          if (t) {
            if (typeof t == "string") {
              return S(t, undefined);
            }
            let e = {}.toString.call(t).slice(8, -1);
            if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
              return Array.from(t);
            } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
              return S(t, undefined);
            } else {
              return undefined;
            }
          }
        })(r))) {
          if (n) {
            r = n;
          }
          let t = 0;
          function e() {}
          var o = {
            s: e,
            n: function () {
              var e = {
                done: true
              };
              if (t >= r.length) {
                return e;
              } else {
                return {
                  done: false,
                  value: r[t++]
                };
              }
            },
            e: function (e) {
              throw e;
            },
            f: e
          };
          return o;
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      let t;
      let i = true;
      let a = false;
      return {
        s: function () {
          n = n.call(r);
        },
        n: function () {
          var e = n.next();
          i = e.done;
          return e;
        },
        e: function (e) {
          a = true;
          t = e;
        },
        f: function () {
          try {
            if (!i && n.return != null) {
              n.return();
            }
          } finally {
            if (a) {
              throw t;
            }
          }
        }
      };
    })(e);
    try {
      for (o.s(); !(t = o.n()).done;) {
        var i = t.value;
        var a = typeof i == "string" ? r.encode(i) : i;
        var l = new Uint8Array(4);
        new DataView(l.buffer).setUint32(0, a.length, false);
        n.push(l, a);
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return It.apply(undefined, n);
  }
  function Lt(t) {
    let r = (() => {
      try {
        return !!t.navigator && "serviceWorker" in t.navigator;
      } catch (e) {
        return false;
      }
    })() && !canUseServiceWorker();
    if (r) {
      let n = t;
      new Set(["MediaSource", "ManagedMediaSource", "WebKitMediaSource"]);
      let o = (() => {
        try {
          var e = t.location;
          return e && Object.freeze({
            hostname: e.hostname || "",
            protocol: e.protocol || ""
          });
        } catch (e) {}
      })();
      let i = (() => {
        try {
          var e = t.crypto;
          if (e) {
            return Object.freeze({
              subtle: e.subtle,
              getRandomValues: typeof e.getRandomValues == "function" ? e.getRandomValues.bind(e) : undefined
            });
          }
        } catch (e) {}
      })();
      let a = t.navigator && new Proxy(t.navigator, {
        get: function (e, t) {
          if (!r || t !== "serviceWorker") {
            return Reflect.get(e, t, e);
          }
        },
        has: function (e, t) {
          return (!r || t !== "serviceWorker") && Reflect.has(e, t);
        }
      });
      let l = t.document && new Proxy(t.document, {
        get: function (e, t, r) {
          if (t === "defaultView") {
            return n;
          } else {
            return Reflect.get(e, t, r);
          }
        }
      });
      var e = t.jwplayer;
      let u = e && new Proxy(e, {
        get: function (e, t, r) {
          return Reflect.get(e, t, r);
        }
      });
      return n = new Proxy(t, {
        get: function (e, t, r) {
          if (t === "window" || t === "self" || t === "globalThis") {
            return n;
          } else if (t === "document" && l) {
            return l;
          } else if (t === "navigator" && a) {
            return a;
          } else if (t === "location" && o) {
            return o;
          } else if (t === "crypto" && i) {
            return i;
          } else if (t === "jwplayer" && u) {
            return u;
          } else {
            return Reflect.get(e, t, r);
          }
        },
        has: function (e, t) {
          return Reflect.has(e, t);
        }
      });
    }
  }
  async function Rt(e) {
    var t = Math.max(1, e?.lengthBytes || 16);
    let r;
    if (typeof e.salt != "string") {
      if (e.salt) {
        r = e.salt;
      }
      r = new Uint8Array(0);
    }
    r = new TextEncoder().encode(e.salt);
    var n = (e => {
      var t = typeof window != "undefined" ? window : {};
      var r = navigator.userAgent || "";
      var n = location.hostname || "";
      let o = typeof crypto != "undefined";
      let i = t.process !== undefined;
      let a = "serviceWorker" in navigator;
      let l = t.MediaSource !== undefined;
      let u = navigator?.webdriver === true;
      let c = t.WebKitMediaSource !== undefined;
      let s = t.ManagedMediaSource !== undefined;
      if (typeof e == "boolean") {
        i = o = u = l = a = c = s = e;
      }
      return [r, n, o, i, u, l, a, c, s];
    })(e.init);
    var e = Mt(e.extras);
    var n = JSON.stringify(n);
    return Pt(await E(It(new TextEncoder().encode(n), new Uint8Array([0]), e), r, new TextEncoder().encode("env-key:" + location.hostname), t));
  }
  function Dt(e, t) {
    if (e.length !== t.length) {
      return false;
    }
    var r = 0;
    for (var n = 0; n < e.length; n++) {
      r |= e[n] ^ t[n];
    }
    return r === 0;
  }
  function Nt(e) {
    if (e.length < i.length + 1 + 16 + 16 + 32) {
      throw new Error("Ciphertext too short");
    }
    if (!Dt(e.subarray(0, i.length), i)) {
      throw new Error("Bad magic");
    }
    var t = e[i.length];
    if (t !== 1) {
      throw new Error("Unsupported version: " + t);
    }
    var t = i.length + 1;
    var r = e.subarray(t, t + 16);
    var n = e.subarray(t += 16, t + 16);
    t += 16;
    var o = e.subarray(e.length - 32);
    return {
      salt: r,
      nonce: n,
      ct: e.subarray(t, e.length - 32),
      tag: o,
      header: e.subarray(0, t)
    };
  }
  function _(e) {
    return (e = (e = ((e = (e ^ e << 13) >>> 0) ^ e >>> 17) >>> 0) ^ e << 5) >>> 0 >>> 0;
  }
  function Bt(e, t) {
    e = e.searchParams.getAll(t);
    if (e.length === 1 && e[0].length !== 0) {
      return e[0];
    }
  }
  function zt(e, t) {
    if (!/^[0-9a-z]+$/i.test(e)) {
      throw new Error("Invalid Base65 " + t);
    }
    e = Number.parseInt(e, 36);
    if (!Number.isSafeInteger(e) || e < 0) {
      throw new Error("Invalid Base65 " + t);
    }
    return e;
  }
  function Ft(n, t) {
    if (!n) {
      return new Uint8Array(0);
    }
    var o = t.length;
    var e = t[0];
    var i = new Map();
    for (let e = 0; e < t.length; e++) {
      i.set(t[e], e);
    }
    for (var a = 0; a < n.length && n[a] === e;) {
      a++;
    }
    var l = [1];
    for (let e = 1; e <= 6; e++) {
      l[e] = l[e - 1] * o;
    }
    var u = [];
    let c = (n.length - a) % 6;
    if (c === 0) {
      c = 6;
    }
    for (let r = a; r < n.length;) {
      let e = 0;
      for (var s = r + c; r < s; r++) {
        var f = n[r];
        var h = i.get(f);
        if (h === undefined) {
          throw new Error(`Invalid Base65 character: "${f}"`);
        }
        e = e * o + h;
      }
      var p = l[c];
      let t = e;
      for (let e = 0; e < u.length; e++) {
        var y = u[e] * p + t;
        u[e] = y & 65535;
        t = Math.floor(y / 65536);
      }
      while (t > 0) {
        u.push(t & 65535);
        t = Math.floor(t / 65536);
      }
      c = 6;
    }
    if (u.length === 0) {
      return new Uint8Array(a);
    }
    for (var r = u.length - 1; r >= 0 && u[r] === 0;) {
      r--;
    }
    if (r < 0) {
      return new Uint8Array(a);
    }
    var d = [];
    for (let e = 0; e < a; e++) {
      d.push(0);
    }
    for (let e = r; e >= 0; e--) {
      var v = u[e];
      var g = v >>> 8;
      var v = v & 255;
      if (e === r && g == 0) {
        d.push(v);
      } else {
        d.push(g, v);
      }
    }
    return new Uint8Array(d);
  }
  function Gt(e) {
    if (e.startsWith("Z65.")) {
      var n = e;
      if ((l = n.indexOf(".", 4)) === -1) {
        throw new Error("Invalid Base65 v2 header");
      }
      var o = zt(n.slice(4, l), "v2 length");
      var i = n.slice(l + 1);
      if (o === 0) {
        if (i.length !== 0) {
          throw new Error("Invalid Base65 v2 empty body");
        }
        return new Uint8Array(0);
      }
      var a = Math.floor(o / 8);
      var n = o % 8;
      var l = F[n];
      if (i.length !== a * 11 + l) {
        throw new Error("Invalid Base65 v2 body length");
      }
      var u = new Uint8Array(o);
      let t = 0;
      let r = 0;
      for (let e = 0; e < a; e++) {
        Wt(i, t, 11, u, r, 8);
        t += 11;
        r += 8;
      }
      if (n > 0) {
        Wt(i, t, l, u, r, n);
      }
      return u;
    }
    if (e.startsWith("C65.")) {
      var r = e.split(".");
      if (r.length < 4 || r[0] !== "C65") {
        throw new Error("Invalid chunked Base65 transport");
      }
      var c = zt(r[1], "length");
      var s = zt(r[2], "chunk size");
      if (c <= 4096 || s <= 0 || s > 768) {
        throw new Error("Invalid chunked Base65 header");
      }
      o = Math.ceil(c / s);
      if (r.length !== o + 3) {
        throw new Error("Invalid chunked Base65 chunk count");
      }
      var f = new Uint8Array(c);
      let t = 0;
      for (let e = 3; e < r.length; e++) {
        if (!r[e]) {
          throw new Error("Invalid empty Base65 chunk");
        }
        var h = Ft(r[e], R);
        var p = Math.min(s, c - t);
        if (h.length !== p) {
          throw new Error("Invalid Base65 chunk length");
        }
        f.set(h, t);
        t += h.length;
      }
      if (t !== c) {
        throw new Error("Invalid chunked Base65 length");
      }
      return f;
    }
    return Ft(e, R);
  }
  function Wt(t, r, n, o, i, a) {
    let l = 0x0n;
    for (let e = 0; e < n; e++) {
      var u = t.charCodeAt(r + e);
      var u = u < G.length ? G[u] : -1;
      if (u < 0) {
        throw new Error(`Invalid Base65 character: "${t[r + e]}"`);
      }
      l = 0x41n * l + BigInt(u);
    }
    for (let e = a - 1; e >= 0; e--) {
      o[i + e] = Number(0xffn & l);
      l >>= 0x8n;
    }
    if (0x0n !== l) {
      throw new Error("Base65 v2 block overflow");
    }
  }
  function U(t) {
    let r = 2654435769;
    for (let e = 0; e < t.length; ++e) {
      r = _(r + t.charCodeAt(e) + (r << 7 ^ r >>> 3));
    }
    return r >>> 0;
  }
  async function E(e, t, r, n) {
    e = await crypto.subtle.importKey("raw", e, "HKDF", false, ["deriveBits"]);
    t = await crypto.subtle.deriveBits({
      name: "HKDF",
      hash: "SHA-256",
      salt: t,
      info: r
    }, e, n * 8);
    return new Uint8Array(t);
  }
  function T(e, t) {
    return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
  }
  function C(e, t) {
    return (e << t | e >>> 32 - t) >>> 0;
  }
  async function Kt(e, t) {
    var r = (() => {
      if (globalThis?.crypto?.subtle) {
        return globalThis.crypto.subtle;
      }
      throw new Error("WebCrypto SubtleCrypto is not available");
    })();
    var e = await r.importKey("raw", e, {
      name: "HMAC",
      hash: "SHA-256"
    }, false, ["sign"]);
    var r = await r.sign("HMAC", e, t);
    return new Uint8Array(r);
  }
  let Vt = Math.imul;
  function Ht(e, t, r) {
    var n;
    for (var o = r, i = e >>> 0 >>> 0, a = t >>> 0 >>> 0, l = 0; l < o.length; l++) {
      var u = (i ^ (u = C(((u = (u = (a ^ o[l]) >>> 0) >>> 0) ^ (n = o[l])) + Vt((u ^ C(n, 16)) >>> 0, 2654435761) >>> 0, 7) >>> 0, C(u = (u ^ Vt(2135587861 + u >>> 0, (n | 1) >>> 0)) >>> 0, n >>> 27 & 31) >>> 0 >>> 0)) >>> 0;
      var i = a;
      var a = u;
    }
    return [i >>> 0, a >>> 0];
  }
  function $t(e, t, r) {
    let n = e >>> 0;
    let o = t >>> 0;
    for (let e = 0; e < r.length; e++) {
      i = (n ^ (i = (o ^ r[e]) >>> 0, a = r[e], i = Xt(((i = i >>> 0) ^ a) + W((i ^ Xt(a, 16)) >>> 0, 2654435761) >>> 0, 7) >>> 0, Xt(i = (i ^ W(2135587861 + i >>> 0, (a | 1) >>> 0)) >>> 0, a >>> 27 & 31) >>> 0 >>> 0)) >>> 0;
      n = o;
      o = i;
    }
    var i;
    var a;
    return [n >>> 0, o >>> 0];
  }
  function Xt(e, t) {
    return (e << t | e >>> 32 - t) >>> 0;
  }
  function Jt(r, n, o) {
    var i = new Uint8Array(r.length);
    var a = new Uint8Array(8);
    for (let e = 0, t = 0; t < r.length; e++) {
      l = e;
      c = u = undefined;
      u = T(o, 0);
      c = T(o, 4);
      u = $t((u + (l >>> 0) >>> 0) + T(o, 8) >>> 0, ((c ^ l >>> 0) >>> 0 ^ T(o, 12)) >>> 0, n);
      c = 2;
      var l = (e => {
        if (Array.isArray(e)) {
          return e;
        }
      })(u) || ((n, o) => {
        let i = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
        if (i != null) {
          var a;
          var l;
          var u;
          let t;
          var c = [];
          let e = true;
          let r = false;
          try {
            l = (i = i.call(n)).next;
            if (o === 0) {
              if (Object(i) !== i) {
                return;
              }
              e = false;
            } else {
              for (; !(e = (a = l.call(i)).done) && (c.push(a.value), c.length !== o); e = true);
            }
          } catch (e) {
            r = true;
            t = e;
          } finally {
            try {
              if (!e && i.return != null && (u = i.return(), Object(u) !== u)) {
                return;
              }
            } finally {
              if (r) {
                throw t;
              }
            }
          }
          return c;
        }
      })(u, c) || ((t, r) => {
        if (t) {
          if (typeof t == "string") {
            return fn4(t, r);
          }
          let e = {}.toString.call(t).slice(8, -1);
          if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
            return Array.from(t);
          } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
            return fn4(t, r);
          } else {
            return undefined;
          }
        }
      })(u, c) || (() => {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })();
      var u = l[0];
      var c = l[1];
      a[0] = u & 255;
      a[1] = u >>> 8 & 255;
      a[2] = u >>> 16 & 255;
      a[3] = u >>> 24 & 255;
      a[4] = c & 255;
      a[5] = c >>> 8 & 255;
      a[6] = c >>> 16 & 255;
      a[7] = c >>> 24 & 255;
      for (let e = 0; e < 8 && t < r.length; e++, t++) {
        i[t] = r[t] ^ a[e];
      }
    }
    return i;
  }
  async function qt(e, r) {
    var n = globalThis;
    var n = (((v335 = n.performance) == null || (v336 = v335.now) == null ? undefined : v336.call(v335)) || Date.now()) >>> 0 ^ U(String(n.navigator?.userAgent || "")) ^ (n.screen?.width || 0) * 1315423911 ^ (n.screen?.height || 0) * 2654435761;
    var t = new jt(n);
    let o = t.sample("pre", 2);
    var e = Gt(e);
    var n = _(n ^ e.length * 2246822519 ^ (e[0] || 0) ^ (e[e.length - 1] || 0));
    t.s = _(n);
    o = o || t.sample("post-base", 3) !== 0;
    var n = Nt(e);
    o = o || t.sample("after-header:" + (n.ct.length & 15), 2) !== 0;
    var e = pe.encode(r);
    var i = await E(e, n.salt, pe.encode("round-keys"), 48);
    var r = await E(e, n.salt, pe.encode("mac-key"), 32);
    o = o || t.sample("pre-roundkeys", 2) !== 0;
    var a = new Uint32Array(12);
    for (let e = 0; e < a.length; e++) {
      var l = T(i, e * 4);
      var u = t.sample("rk:" + e, 1);
      if (u === 0) {
        a[e] = l >>> 0;
      } else {
        u = C(u ^ l, e * 11 & 31) ^ (e + 1) * 2654435769;
        a[e] = (l ^ u) >>> 0;
        o = true;
      }
    }
    var e = {
      v: false
    };
    var r = Dt(await Kt(r, It(n.header, n.ct)), n.tag);
    o = t.sample("pre-decrypt", 3);
    var c = t.sample("nonce-spice", 2);
    var c = ((e, t, r) => {
      if (t === 0) {
        return e;
      }
      for (var n = e.slice(), o = _(t ^ r), i = 0; i < n.length; i++) {
        o = _(o + i * 2246822507);
        n[i] ^= o >>> (i & 3) * 8 & 255;
      }
      return n;
    })(n.nonce, c, n.ct.length ^ U("b65"));
    var s = ((r, n, e, o, i) => {
      var a = new Uint8Array(r.length);
      var l = new Uint8Array(8);
      var u = T(e, 0) >>> 0;
      var c = T(e, 4) >>> 0;
      var s = T(e, 8) >>> 0;
      var f = T(e, 12) >>> 0;
      for (var h = 0, p = 0; p < r.length; h++) {
        var y = o.sample("blk:" + h, 1 + h % 3);
        var d = y !== 0;
        i.v = i.v || d;
        let e = (u + (h >>> 0) >>> 0) + s >>> 0;
        let t = ((c ^ h >>> 0) >>> 0 ^ f) >>> 0;
        if (d) {
          d = C(y, h * 7 & 31);
          e = (e ^ d) >>> 0;
          t = t + (d ^ -1515870811) >>> 0;
        }
        y = k(Ht(e, t, n));
        d = y[0];
        y = y[1];
        l[0] = d & 255;
        l[1] = d >>> 8 & 255;
        l[2] = d >>> 16 & 255;
        l[3] = d >>> 24 & 255;
        l[4] = y & 255;
        l[5] = y >>> 8 & 255;
        l[6] = y >>> 16 & 255;
        l[7] = y >>> 24 & 255;
        for (let e = 0; e < 8 && p < r.length; e++, p++) {
          a[p] = r[p] ^ l[e];
        }
      }
      return a;
    })(n.ct, a, c, t, e);
    if (o || e.v) {
      let t = _(U("post") ^ (n.ct[0] || 0) ^ (n.ct[n.ct.length - 1] || 0));
      var f = new Uint8Array(s.length);
      for (let e = 0; e < s.length; e++) {
        var h = (t = _(t + e * 2246822507)) >>> (e & 31) & 7 ^ 1;
        var p = s[e] ^ t & 255;
        f[e] = (p << h | p >>> 8 - h) & 255;
      }
      if (r) {
        for (let e = 0; e < f.length; e++) {
          var y = t >>> (e * 3 & 31) & 7 ^ 1;
          var d = f[e];
          f[e] = (d << y | d >>> 8 - y) & 255;
          t = _(t ^ d ^ e * 40503);
        }
      }
      return Ot(f);
    }
    if (r) {
      return Ot(s);
    }
    throw new Error("Authentication failed (bad key or corrupted data)");
  }
  function Yt(t, r) {
    if (t) {
      if (typeof t == "string") {
        return fn82(t, r);
      }
      let e = {}.toString.call(t).slice(8, -1);
      if ((e = e === "Object" && t.constructor ? t.constructor.name : e) === "Map" || e === "Set") {
        return Array.from(t);
      } else if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
        return fn82(t, r);
      } else {
        return undefined;
      }
    }
  }
  function Zt(n) {
    return new DataView(n.buffer, n.byteOffset, n.byteLength).getUint32(n.byteLength - 4, true) === (() => {
      var e = Zt._t ||= (() => {
        var e = new Uint32Array(256);
        for (var t = 0; t < 256; t++) {
          var r = t;
          for (var n = 0; n < 8; n++) {
            r = r & 1 ? r >>> 1 ^ -306674912 : r >>> 1;
          }
          e[t] = r >>> 0;
        }
        return e;
      })();
      var t = 4294967295;
      for (var r = 0; r < n.length - 4; r++) {
        t = e[(t ^ n[r]) & 255] ^ t >>> 8;
      }
      return (t ^ -1) >>> 0;
    })();
  }
  function Qt(e) {
    var t = (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0;
    var e = (e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24) >>> 0;
    return new x(e >>> 0, t >>> 0);
  }
  function er(e) {
    return new Uint8Array(new Oe().update(e).digest());
  }
  let tr = new WeakMap();
  function rr(e, t, r) {
    var n = e.keyId;
    var e = e.uri;
    var o = tr.get(n);
    return o || (o = ((e, t, r) => {
      if (!Zt(e = typeof e == "string" ? (e => {
        for (var t = Et(e), r = new Uint8Array(t.length), n = 0; n < t.length; n++) {
          r[n] = t.charCodeAt(n);
        }
        return r;
      })(e) : e)) {
        throw new Error("CRC mismatch");
      }
      var r = ((r, n) => {
        if (n = n || I) {
          for (let e = k(n).map(function (e) {
              return e.codePointAt(0) & 255;
            }), t = 0; t < r.length; t++) {
            r[t] ^= e[t % e.length];
          }
        }
        var e;
        let t = "";
        var o = j(r);
        try {
          for (o.s(); !(e = o.n()).done;) {
            t += e.value.toString(2).padStart(8, "0");
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
        var i = [];
        for (var a = 0; a < t.length - 1;) {
          var l = t.slice(a, a + 2);
          a += 2;
          if (l === "00") {
            i.push(t[a] === "1");
            a += 1;
          } else if (l === "01") {
            var u = [];
            for (var c = 0; c < 4; c++) {
              var s = parseInt(t.slice(a, a + 8), 2);
              u.push(s);
              a += 8;
            }
            var f = new Uint8Array(u);
            var f = new Int32Array(f.buffer);
            i.push(f[0]);
          } else if (l === "10") {
            var h = parseInt(t.slice(a, a + 16), 2);
            a += 16;
            var p = "";
            for (var y = 0; y < h; y++) {
              var d = parseInt(t.slice(a, a + 16), 2);
              p += String.fromCharCode(d);
              a += 16;
            }
            i.push(p);
          } else {
            if (l !== "11") {
              break;
            }
            var v = [];
            for (var g = 0; g < 8; g++) {
              var b = parseInt(t.slice(a, a + 8), 2);
              v.push(b);
              a += 8;
            }
            f = new Uint8Array(v);
            l = new Float64Array(f.buffer);
            i.push(l[0]);
          }
        }
        return i;
      })(r);
      var n = parseInt(r[16]);
      var r = parseInt(r[0]);
      var o = new DataView(e.buffer, e.byteOffset, e.byteLength);
      let i = 0;
      if (o.getUint32(i, true) !== 1145787221) {
        throw new Error("Invalid MAGIC");
      }
      i += 4;
      o.getUint8(i++);
      var a = o.getUint8(i++);
      var l = new TextDecoder().decode(e.subarray(i, i + a));
      i += a;
      var a = o.getUint8(i++);
      var u = new TextDecoder().decode(e.subarray(i, i + a));
      i += a;
      var a = o.getUint32(i, true);
      i += 4;
      o.getUint8(i++);
      var c = o.getUint32(i, true);
      i += 4;
      var s = e.subarray(i, i + c);
      i += c;
      var c = o.getUint32(i, true);
      i += 4;
      let f;
      let h = {};
      if (c > 0) {
        var p = new TextDecoder().decode(e.subarray(i, i + c));
        i += c;
        var c = JSON.parse(p);
        if (c.__s) {
          p = c.__s;
          p.f;
          for (var y = Uint8Array.from(Et(p.c), function (e) {
              return e.charCodeAt(0);
            }), p = Qt(er(t + "\0CID")).xor(x.fromNumber(r >>> 0 ^ n >>> 0)), d = new kt(p), v = new Uint8Array(y.length), g = 0; g < y.length; g++) {
            if (!(g & 3)) {
              d.nextU32();
            }
            var b = d.nextU32() >>> (g & 3) * 8 & 255;
            v[g] = y[g] ^ b;
          }
          f = new TextDecoder().decode(v);
          delete c.__s;
        }
        h = c;
      }
      var p = o.getUint32(i, true);
      i += 4;
      var c = o.getUint32(i, true);
      i += 4;
      var m = e.subarray(i, i + c);
      i += c;
      if (o.getUint32(i, true) !== me(e.subarray(0, i))) {
        throw new Error("CRC mismatch");
      }
      var c = Qt(er(t)).xor(x.fromNumber(r >>> 0 ^ n >>> 0));
      var w = new kt(c);
      var A = new Uint8Array(m.length);
      for (var S = 0; S < m.length; S++) {
        if (!(S & 3)) {
          w.nextU32();
        }
        var _ = w.nextU32() >>> (S & 3) * 8 & 255;
        A[S] = m[S] ^ _;
      }
      (o = {}).name = l;
      o.algorithm = u;
      o.flags = a;
      o.env = s;
      o.keyFlags = p;
      o.contentId = f;
      return [A, h, o];
    })(e.split(",")[1], Ct(t), r), tr.set(n, o), o);
  }
  new Uint8Array([83, 67, 77, 66]);
  function nr(e) {
    return e.origin === location.origin && oe.test(e.pathname) && (r => {
      for (let e = 0; e < ie.length; e++) {
        var n = ie[e];
        if (r.length === n.length) {
          let t = true;
          for (let e = 0; e < n.length; e++) {
            if (r.charCodeAt(e) !== n[e]) {
              t = false;
              break;
            }
          }
          if (t) {
            return true;
          }
        }
      }
      return false;
    })(e.hostname);
  }
  async function or(e, t, r, n, o) {
    var i;
    var a;
    var l = new URL(t.url, location.href).href;
    var u = new URL(l);
    var c = nr(u);
    var s = t.decryptdata;
    if (c) {
      if (!(c = s) || !c.keyId || !c.iv || !c.uri || !(i = rr(s, r, n)) || (a = (e => {
        var t = Bt(e, "i");
        if (t !== undefined && !(t.length > 16)) {
          for (let e = 0; e < t.length; e++) {
            var r = t.charCodeAt(e);
            if (r < 48 || r > 57) {
              return;
            }
          }
          if (!(t.length > 1) || t.charCodeAt(0) !== 48) {
            e = Number(t);
            if (Number.isSafeInteger(e) && !(e < 0) && !(e > 4294967295) && String(e) === t) {
              return e;
            }
          }
        }
      })(u)) === undefined) {
        return t.url;
      } else {
        c = Bt(u, "k") ?? Pt(s.keyId);
        r = await e.open([l, i[0], o, a, c]);
        return new URL(r, location.href).href;
      }
    } else {
      return u.href;
    }
  }
  function ir(t, r) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      let e = Object.getOwnPropertySymbols(t);
      if (r) {
        e = e.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        });
      }
      n.push.apply(n, e);
    }
    return n;
  }
  function ar(t) {
    var r = /(.+?)=(".*?"|.*?)(?:,|$)/g;
    let n = r.exec(t);
    r.lastIndex = 0;
    var e;
    var o = {};
    for (; n;) {
      var i = n[1].trim();
      let e = n[2];
      if (e.indexOf("\"") === 0 && e.lastIndexOf("\"") === e.length - 1) {
        e = e.slice(1, -1);
      }
      o[i] = e;
      n = r.exec(t);
    }
    o.iv = (e => {
      if (e) {
        var t = ((t = e.slice(2)).length & 1 ? "0" : "") + t;
        var r = new Uint8Array(t.length / 2);
        for (let e = 0; e < r.length; e++) {
          r[e] = parseInt(t.slice(e * 2, e * 2 + 2), 16);
        }
        return r;
      }
    })(o.IV);
    o.keyId = new Uint8Array((e = o.KEYID, Uint8Array.from(e.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer));
    o.uri = o.URI;
    return o;
  }
  var r = await fetch(location.href).then(e => e.text());
  var t = r.match(/data-time\s*=\s*("|')(.+?)("|')/)?.[2];
  var lr = r.match(/data-id\s*=\s*("|')(.+?)("|')/)?.[2];
  var ur = r.match(/data-nonce\s*=\s*("|')(.+?)("|')/)?.[2];
  var cr = r.match(/content\s*=\s*("|')(.+?)("|')/)?.[2];
  var sr = r.match(/data-checksum\s*=\s*("|')(.+?)("|')/)?.[2];
  var r = r.match(/data-uip\s*=\s*("|')(.+?)("|')/)?.[2];
  var fr = location.href.split("/");
  var fr = fr.pop() || fr.pop();
  let hr = await (async (e, t, r, n, o, i, a, l) => {
    I = l;
    var u = {
      init: false
    };
    u.salt = e.toString();
    let c = await Rt(u);
    var s = await qt(t, c);
    u.salt = s;
    u.extras = [t, r];
    var t = await (async (e, t) => {
      var e = Nt(Gt(e));
      var r = await E(t = de.encode(t), e.salt, de.encode("round-keys"), 48);
      if (!Dt(await Kt(await E(t, e.salt, de.encode("mac-key"), 32), It(e.header, e.ct)), e.tag)) {
        throw new Error("Authentication failed (bad key or corrupted data)");
      }
      var n = new Uint32Array(12);
      for (let e = 0; e < n.length; e++) {
        n[e] = T(r, e * 4);
      }
      return Jt(e.ct, n, e.nonce);
    })(n, c = await Rt(u));
    await qt(o, c.split("").reverse().join(""));
    n = s;
    o = ie;
    p = function () {
      var e = {
        checkers: [lt, ht, dt, pt, ft]
      };
      return new bt(e).co();
    };
    y = gt;
    d = Lt();
    var n = Object.freeze([n, o, p, y, d]);
    let f = new at(t, n);
    L = async () => await f.collect();
    t.fill(0);
    let h = ((e, t, r) => {
      let n = "";
      if (t && e.length > t) {
        e = e.slice(0, t);
      }
      r = r || I;
      var o;
      var i = j(e);
      try {
        for (i.s(); !(o = i.n()).done;) {
          var a = o.value;
          if (typeof a == "boolean") {
            n += "00" + (a ? "1" : "0");
          } else if (typeof a == "number") {
            if (Number.isInteger(a)) {
              n += "01";
              var l;
              var u = new Int32Array([a]);
              var c = j(new Uint8Array(u.buffer));
              try {
                for (c.s(); !(l = c.n()).done;) {
                  n += l.value.toString(2).padStart(8, "0");
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            } else {
              n += "11";
              var s;
              var f = new Float64Array([a]);
              var h = j(new Uint8Array(f.buffer));
              try {
                for (h.s(); !(s = h.n()).done;) {
                  n += s.value.toString(2).padStart(8, "0");
                }
              } catch (e) {
                h.e(e);
              } finally {
                h.f();
              }
            }
          } else if (typeof a == "string") {
            n += "10" + a.length.toString(2).padStart(16, "0");
            var p;
            var d = j(a);
            try {
              for (d.s(); !(p = d.n()).done;) {
                n += (p.value.codePointAt(0) ?? 0).toString(2).padStart(16, "0");
              }
            } catch (e) {
              d.e(e);
            } finally {
              d.f();
            }
          }
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      var v = [];
      for (var g = 0; g < n.length; g += 8) {
        v.push(parseInt(n.slice(g, g + 8).padEnd(8, "0"), 2));
      }
      if (r) {
        for (let e = k(r).map(function (e) {
            return e.codePointAt(0) & 255;
          }), t = 0; t < v.length; t++) {
          v[t] ^= e[t % e.length];
        }
      }
      return new Uint8Array(v);
    })(o = await f.collect(), 18);
    var p = Date.now();
    var y = [o[13], i];
    u.salt = new Oe().update(y.join("")).hex();
    delete u.extras;
    c = await Rt(u);
    var d = (p - e).toString();
    var n = Tt(await (async (e, t) => {
      var r;
      var n;
      var t = new TextEncoder().encode(t);
      if ([16, 24, 32].includes(t.length)) {
        n = await crypto.subtle.importKey("raw", t, {
          name: "AES-GCM"
        }, false, ["encrypt", "decrypt"]);
        t = await crypto.subtle.importKey("raw", t, {
          name: "HMAC",
          hash: "SHA-256"
        }, false, ["sign", "verify"]);
        r = crypto.getRandomValues(new Uint8Array(12));
        e = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        n = await crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: r
        }, n, e);
        e = await crypto.subtle.sign("HMAC", t, n);
        (t = new Uint8Array(r.byteLength + n.byteLength + e.byteLength)).set(r, 0);
        t.set(new Uint8Array(n), r.byteLength);
        t.set(new Uint8Array(e), r.byteLength + n.byteLength);
        return Ut(String.fromCharCode.apply(String, k(t)));
      }
      throw new Error("Secret length must be 16, 24, or 32 bytes");
    })(h, c));
    (t = new URL(`/hls/${s}.m3u8?`, location.origin)).searchParams.set("vid", l);
    t.searchParams.set("dt", d);
    t.searchParams.set("snonce", r);
    t.searchParams.set("cnonce", n);
    t.searchParams.set("hash", u.salt);
    t.searchParams.set("uid", gt());
    t.searchParams.set("ct", p.toString());
    if (a) {
      try {
        t.searchParams.set("fc", Tt(Ut(new URL(a).hostname)));
      } catch (e) {}
    }
    return {
      url: t.toString(),
      decodeFunction: function (e) {
        return or(f, e, r, h, l);
      }
    };
  })(t, lr, ur, cr, sr, r, await function (e, t) {
    let l = arguments.length > 1 && t !== undefined ? t : 1500;
    if (!e.length || localStorage === undefined) {
      return Promise.resolve(null);
    }
    try {
      var r = localStorage.getItem(P);
      if (r) {
        var n = JSON.parse(r);
        if (Date.now() - n.time < 43200000 && e.indexOf(n.url) !== -1) {
          return n.url;
        }
        try {
          localStorage.removeItem(P);
        } catch (e) {}
      }
      let a = e.map(function (e) {
        return function (t) {
          for (let e = 1; e < arguments.length; e++) {
            var r = arguments[e] ?? {};
            if (e % 2) {
              ir(Object(r), true).forEach(function (e) {
                u(t, e, r[e]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(t, Object.getOwnPropertyDescriptors(r));
            } else {
              ir(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
            }
          }
          return t;
        }({
          url: e
        }, function (r, e) {
          let n = arguments.length > 1 && e !== undefined ? e : 1500;
          r += "/obj/ad-site-i18n-sg/202509185d0d07565257709c4d0ca86d";
          let o = new XMLHttpRequest();
          let i = performance.now();
          let a = false;
          return {
            promise: new Promise(function (t, e) {
              o.open("GET", r, true);
              o.timeout = n;
              o.onreadystatechange = function () {
                var e;
                if (o.readyState === 2 && !a) {
                  a = true;
                  e = performance.now() - i;
                  o.abort();
                  t(e);
                }
              };
              o.ontimeout = function () {
                return !a && e(new Error("Timeout"));
              };
              o.onerror = function () {
                return !a && e(new Error("Network error"));
              };
              o.send();
            }),
            abort: function () {
              if (!a) {
                o.abort();
              }
            }
          };
        }(e, l));
      });
      return new Promise(function (t) {
        function r(e) {
          if (!o) {
            o = true;
            if (n !== undefined) {
              clearTimeout(n);
            }
            a.forEach(function (e) {
              return e.abort();
            });
            if (e) {
              try {
                localStorage.setItem(P, JSON.stringify({
                  url: e,
                  time: Date.now()
                }));
              } catch (e) {}
            }
            t(e);
          }
        }
        let n;
        let o = false;
        let i = 0;
        n = setTimeout(function () {
          return r(null);
        }, l);
        a.forEach(function (e) {
          e.promise.then(function () {
            return r(e.url);
          }).catch(function () {
            if (++i === a.length) {
              r(null);
            }
          });
        });
      });
    } catch (e) {
      return Promise.resolve(null);
    }
  }(["https://p21-ad-sg.ibyteimg.com", "https://p16-ad-sg.ibyteimg.com"]), fr);
  let pr = await (async (e, t) => {
    var t = new Oe().update(Ct(t)).hex().split("").reverse().join("");
    var r = (e = e.split("\n")).find(e => e.startsWith("#ENC-AESGCM"));
    var e = e.find(e => e && !e.startsWith("#"));
    if (r && e) {
      var r = Et(r.match(/iv=([^;\s]+)/)[1]);
      var r = new Uint8Array(k(r).map(e => e.charCodeAt(0)));
      var n = Et(e);
      var o = new Uint8Array(n.length);
      for (let e = 0; e < n.length; e++) {
        o[e] = n.charCodeAt(e);
      }
      e = await crypto.subtle.importKey("raw", ((e, t) => {
        let r = e.trim().toLowerCase();
        if ((r = (r = r.startsWith("0x") ? r.slice(2) : r).replace(/[^0-9a-f]/g, "")).length % 2 != 0) {
          throw new Error("wrong nonce for " + t);
        }
        var n = new Uint8Array(r.length / 2);
        for (let e = 0; e < n.length; e++) {
          n[e] = parseInt(r.substr(e * 2, 2), 16);
        }
        return n;
      })(t, "m3u8Key"), {
        name: "AES-GCM"
      }, false, ["decrypt"]);
      t = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: r
      }, e, o.buffer);
      r = new Uint8Array(t);
      return new TextDecoder().decode(r);
    }
  })(await fetch(hr.url).then(e => e.text()), ur);
  t = pr.trim().split("\n");
  let yr;
  lr = t.map(async e => {
    var t;
    if (e.includes("EXT-X-KEY")) {
      t = e.replace("#EXT-X-KEY:", "");
      yr = ar(t);
      return "";
    } else if (e.includes("#EXT")) {
      return e;
    } else {
      return await hr.decodeFunction({
        url: e.startsWith("/") ? new URL(e, location.href).href : e,
        decryptdata: yr
      });
    }
  }).filter(e => Boolean(e));
  pr = (await Promise.all(lr)).join("\n");
  document.body.setAttribute("savior-m3u8", pr);
})();
