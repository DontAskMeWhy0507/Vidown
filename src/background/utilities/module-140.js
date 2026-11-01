// Module 140 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(152);
  var o = r(406);
  var i = r(407);
  var a = r(408);
  var s = r(409);
  var c = r(166);
  var u = r(115);
  var l = r(410);
  var d = r(411);
  var p = r(412);
  var f = r(413);
  var h = r(414);
  var m = r(415);
  var g = r(416);
  var v = r(417);
  var y = Function;
  function _(e) {
    try {
      return y("\"use strict\"; return (" + e + ").constructor;")();
    } catch (e) {}
  }
  var b = r(129);
  var w = r(136);
  function E() {
    throw new u();
  }
  var D = b ? function () {
    try {
      return E;
    } catch (e) {
      try {
        return b(arguments, "callee").get;
      } catch (e) {
        return E;
      }
    }
  }() : E;
  var T = r(420)();
  var k = r(168);
  var A = r(154);
  var C = r(153);
  var x = r(142);
  var S = r(137);
  var O = {};
  var I = typeof Uint8Array != "undefined" && k ? k(Uint8Array) : undefined;
  var L = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError == "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": T && k ? k([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": O,
    "%AsyncGenerator%": O,
    "%AsyncGeneratorFunction%": O,
    "%AsyncIteratorPrototype%": O,
    "%Atomics%": typeof Atomics == "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt == "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array == "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array == "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView == "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": o,
    "%eval%": eval,
    "%EvalError%": i,
    "%Float16Array%": typeof Float16Array == "undefined" ? undefined : Float16Array,
    "%Float32Array%": typeof Float32Array == "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array == "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? undefined : FinalizationRegistry,
    "%Function%": y,
    "%GeneratorFunction%": O,
    "%Int8Array%": typeof Int8Array == "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array == "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array == "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": T && k ? k(k([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON == "object" ? JSON : undefined,
    "%Map%": typeof Map == "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map != "undefined" && T && k ? k(new Map()[Symbol.iterator]()) : undefined,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": n,
    "%Object.getOwnPropertyDescriptor%": b,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise == "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy == "undefined" ? undefined : Proxy,
    "%RangeError%": a,
    "%ReferenceError%": s,
    "%Reflect%": typeof Reflect == "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set == "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set != "undefined" && T && k ? k(new Set()[Symbol.iterator]()) : undefined,
    "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": T && k ? k(""[Symbol.iterator]()) : undefined,
    "%Symbol%": T ? Symbol : undefined,
    "%SyntaxError%": c,
    "%ThrowTypeError%": D,
    "%TypedArray%": I,
    "%TypeError%": u,
    "%Uint8Array%": typeof Uint8Array == "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array == "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array == "undefined" ? undefined : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": typeof WeakMap == "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef == "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet == "undefined" ? undefined : WeakSet,
    "%Function.prototype.call%": S,
    "%Function.prototype.apply%": x,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": A,
    "%Math.abs%": d,
    "%Math.floor%": p,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": m,
    "%Math.round%": g,
    "%Math.sign%": v,
    "%Reflect.getPrototypeOf%": C
  };
  if (k) {
    try {
      null.error;
    } catch (e) {
      var R = k(k(e));
      L["%Error.prototype%"] = R;
    }
  }
  var P = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var B = r(121);
  var M = r(424);
  var F = B.call(S, Array.prototype.concat);
  var U = B.call(x, Array.prototype.splice);
  var N = B.call(S, String.prototype.replace);
  var j = B.call(S, String.prototype.slice);
  var q = B.call(S, RegExp.prototype.exec);
  var H = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var V = /\\(\\)?/g;
  function W(e) {
    var t = j(e, 0, 1);
    var r = j(e, -1);
    if (t === "%" && r !== "%") {
      throw new c("invalid intrinsic syntax, expected closing `%`");
    }
    if (r === "%" && t !== "%") {
      throw new c("invalid intrinsic syntax, expected opening `%`");
    }
    var n = [];
    N(e, H, function (e, t, r, o) {
      n[n.length] = r ? N(o, V, "$1") : t || e;
    });
    return n;
  }
  function z(e, t) {
    var r;
    var n = e;
    if (M(P, n)) {
      n = "%" + (r = P[n])[0] + "%";
    }
    if (M(L, n)) {
      var o = L[n];
      if (o === O) {
        o = function e(t) {
          var r;
          if (t === "%AsyncFunction%") {
            r = _("async function () {}");
          } else if (t === "%GeneratorFunction%") {
            r = _("function* () {}");
          } else if (t === "%AsyncGeneratorFunction%") {
            r = _("async function* () {}");
          } else if (t === "%AsyncGenerator%") {
            var n = e("%AsyncGeneratorFunction%");
            if (n) {
              r = n.prototype;
            }
          } else if (t === "%AsyncIteratorPrototype%") {
            var o = e("%AsyncGenerator%");
            if (o && k) {
              r = k(o.prototype);
            }
          }
          L[t] = r;
          return r;
        }(n);
      }
      if (o === undefined && !t) {
        throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
      }
      return {
        alias: r,
        name: n,
        value: o
      };
    }
    throw new c("intrinsic " + e + " does not exist!");
  }
  e.exports = function (e, t) {
    if (typeof e != "string" || e.length === 0) {
      throw new u("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof t != "boolean") {
      throw new u("\"allowMissing\" argument must be a boolean");
    }
    if (q(/^%?[^%]*%?$/, e) === null) {
      throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var r = W(e);
    var n = r.length > 0 ? r[0] : "";
    var o = z("%" + n + "%", t);
    var i = o.name;
    var a = o.value;
    var s = false;
    var l = o.alias;
    if (l) {
      n = l[0];
      U(r, F([0, 1], l));
    }
    for (var d = 1, p = true; d < r.length; d += 1) {
      var f = r[d];
      var h = j(f, 0, 1);
      var m = j(f, -1);
      if ((h === "\"" || h === "'" || h === "`" || m === "\"" || m === "'" || m === "`") && h !== m) {
        throw new c("property names with quotes must have matching quotes");
      }
      if (f === "constructor" || !p) {
        s = true;
      }
      if (M(L, i = "%" + (n += "." + f) + "%")) {
        a = L[i];
      } else if (a != null) {
        if (!(f in a)) {
          if (!t) {
            throw new u("base intrinsic for " + e + " exists, but the property is not available.");
          }
          return;
        }
        if (b && d + 1 >= r.length) {
          var g = b(a, f);
          a = (p = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : a[f];
        } else {
          p = M(a, f);
          a = a[f];
        }
        if (p && !s) {
          L[i] = a;
        }
      }
    }
    return a;
  };
};
