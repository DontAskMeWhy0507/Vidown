// Module 719 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(516);
  var o = r(518);
  var i = r(440);
  var a = Object.prototype.hasOwnProperty;
  var s = {
    brackets: function (e) {
      return e + "[]";
    },
    comma: "comma",
    indices: function (e, t) {
      return e + "[" + t + "]";
    },
    repeat: function (e) {
      return e;
    }
  };
  var c = Array.isArray;
  var u = Array.prototype.push;
  function l(e, t) {
    u.apply(e, c(t) ? t : [t]);
  }
  var d = Date.prototype.toISOString;
  var p = i.default;
  var f = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: "&",
    depth: Infinity,
    encode: true,
    encodeDotInKeys: false,
    encoder: o.encode,
    encodeValuesOnly: false,
    filter: undefined,
    format: p,
    formatter: i.formatters[p],
    indices: false,
    serializeDate: function (e) {
      return d.call(e);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var h = {};
  var m = function e(t, r, i, a, s, u, d, p, m, g, v, y, _, b, w, E, D, T, k, A) {
    var C = t;
    if (A > k) {
      throw new RangeError("Input depth exceeded depth option of " + k);
    }
    var x;
    for (var S = T, O = 0, I = false; (S = S.get(h)) !== undefined && !I;) {
      var L = S.get(t);
      O += 1;
      if (L !== undefined) {
        if (L === O) {
          throw new RangeError("Cyclic object value");
        }
        I = true;
      }
      if (S.get(h) === undefined) {
        O = 0;
      }
    }
    if ((C = typeof g == "function" ? g(r, C) : C) instanceof Date) {
      C = _(C);
    } else if (i === "comma" && c(C)) {
      C = o.maybeMap(C, function (e) {
        if (e instanceof Date) {
          return _(e);
        } else {
          return e;
        }
      });
    }
    if (C === null) {
      if (u) {
        return w(m && !E ? m(r, f.encoder, D, "key", b) : r);
      }
      C = "";
    }
    if (typeof (x = C) == "string" || typeof x == "number" || typeof x == "boolean" || typeof x == "symbol" || typeof x == "bigint" || o.isBuffer(C)) {
      if (m) {
        return [w(E ? r : m(r, f.encoder, D, "key", b)) + "=" + w(m(C, f.encoder, D, "value", b))];
      } else {
        return [w(r) + "=" + w(String(C))];
      }
    }
    var R;
    var P = [];
    if (C === undefined) {
      return P;
    }
    if (i === "comma" && c(C)) {
      if (E && m) {
        C = o.maybeMap(C, function (e) {
          if (e == null) {
            return e;
          } else {
            return m(e);
          }
        });
      }
      R = [{
        value: C.length > 0 ? C.join(",") || null : undefined
      }];
    } else if (c(g)) {
      R = g;
    } else {
      var B = Object.keys(C);
      R = v ? B.sort(v) : B;
    }
    var M = p ? String(r).replace(/\./g, "%2E") : String(r);
    var F = a && c(C) && C.length === 1 ? M + "[]" : M;
    if (s && c(C) && C.length === 0 && Object.keys(C).length === 0) {
      return F + "[]";
    }
    for (var U = 0; U < R.length; ++U) {
      var N = R[U];
      var j = typeof N == "object" && N && N.value !== undefined ? N.value : C[N];
      if (!d || j !== null) {
        var q = y && p ? String(N).replace(/\./g, "%2E") : String(N);
        var H = c(C) ? typeof i == "function" ? i(F, q) : F : F + (y ? "." + q : "[" + q + "]");
        T.set(t, O);
        var V = n();
        V.set(h, T);
        l(P, e(j, H, i, a, s, u, d, p, i === "comma" && E && c(C) ? null : m, g, v, y, _, b, w, E, D, V, k, A + 1));
      }
    }
    return P;
  };
  e.exports = function (e, t) {
    var r;
    var o = e;
    var u = function (e) {
      if (!e) {
        return f;
      }
      if (e.allowEmptyArrays !== undefined && typeof e.allowEmptyArrays != "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (e.encodeDotInKeys !== undefined && typeof e.encodeDotInKeys != "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (e.encoder !== null && e.encoder !== undefined && typeof e.encoder != "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var t = e.charset || f.charset;
      if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var r = i.default;
      if (e.format !== undefined) {
        if (!a.call(i.formatters, e.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        r = e.format;
      }
      var n;
      var o = i.formatters[r];
      var u = f.filter;
      if (typeof e.filter == "function" || c(e.filter)) {
        u = e.filter;
      }
      n = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : f.arrayFormat;
      if ("commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var l = e.allowDots === undefined ? e.encodeDotInKeys === true || f.allowDots : !!e.allowDots;
      return {
        addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : f.addQueryPrefix,
        allowDots: l,
        allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : f.allowEmptyArrays,
        arrayFormat: n,
        charset: t,
        charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : f.charsetSentinel,
        commaRoundTrip: !!e.commaRoundTrip,
        delimiter: e.delimiter === undefined ? f.delimiter : e.delimiter,
        depth: typeof e.depth == "number" ? e.depth : f.depth,
        encode: typeof e.encode == "boolean" ? e.encode : f.encode,
        encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : f.encodeDotInKeys,
        encoder: typeof e.encoder == "function" ? e.encoder : f.encoder,
        encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : f.encodeValuesOnly,
        filter: u,
        format: r,
        formatter: o,
        serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : f.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : f.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : f.strictNullHandling
      };
    }(t);
    if (typeof u.filter == "function") {
      o = (0, u.filter)("", o);
    } else if (c(u.filter)) {
      r = u.filter;
    }
    var d = [];
    if (typeof o != "object" || o === null) {
      return "";
    }
    var p = s[u.arrayFormat];
    var h = p === "comma" && u.commaRoundTrip;
    r ||= Object.keys(o);
    if (u.sort) {
      r.sort(u.sort);
    }
    var g = n();
    for (var v = 0; v < r.length; ++v) {
      var y = r[v];
      if (y != null) {
        var _ = o[y];
        if (!u.skipNulls || _ !== null) {
          var b = u.encodeDotInKeys ? String(y).replace(/\./g, "%2E") : String(y);
          l(d, m(_, b, p, h, u.allowEmptyArrays, u.strictNullHandling, u.skipNulls, u.encodeDotInKeys, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, g, u.depth, 0));
        }
      }
    }
    var w = d.join(u.delimiter);
    var E = u.addQueryPrefix === true ? "?" : "";
    if (u.charsetSentinel) {
      if (u.charset === "iso-8859-1") {
        E += "utf8=%26%2310003%3B" + u.delimiter;
      } else {
        E += "utf8=%E2%9C%93" + u.delimiter;
      }
    }
    if (w.length > 0) {
      return E + w;
    } else {
      return "";
    }
  };
};
