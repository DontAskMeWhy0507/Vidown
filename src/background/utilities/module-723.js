// Module 723 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(518);
  var o = Object.prototype.hasOwnProperty;
  var i = Array.isArray;
  var a = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: n.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictMerge: true,
    strictNullHandling: false,
    throwOnLimitExceeded: false
  };
  function s(e) {
    return e.replace(/&#(\d+);/g, function (e, t) {
      return String.fromCharCode(parseInt(t, 10));
    });
  }
  function c(e, t, r) {
    if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1) {
      if (t.throwOnLimitExceeded) {
        var n = 0;
        for (var o = e.indexOf(","); o > -1;) {
          if ((n += 1) >= t.arrayLimit) {
            throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          o = e.indexOf(",", o + 1);
        }
      }
      return e.split(",");
    }
    if (t.throwOnLimitExceeded && r >= t.arrayLimit) {
      throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    }
    return e;
  }
  function u(e, t, r, i) {
    if (e) {
      var a = function (e, t) {
        var r = t.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e;
        if (t.depth <= 0) {
          if (!t.plainObjects && o.call(Object.prototype, r) && !t.allowPrototypes) {
            return;
          }
          return [r];
        }
        var n = [];
        var i = r.indexOf("[");
        var a = i >= 0 ? r.slice(0, i) : r;
        if (a) {
          if (!t.plainObjects && o.call(Object.prototype, a) && !t.allowPrototypes) {
            return;
          }
          n[n.length] = a;
        }
        var s = r.length;
        for (var c = i, u = 0; c >= 0 && u < t.depth;) {
          var l = 1;
          for (var d = c + 1, p = -1; d < s && p < 0;) {
            var f = r.charCodeAt(d);
            if (f === 91) {
              l += 1;
            } else if (f === 93 && (l -= 1) === 0) {
              p = d;
            }
            d += 1;
          }
          if (p < 0) {
            n[n.length] = "[" + r.slice(c) + "]";
            return n;
          }
          var h = r.slice(c, p + 1);
          var m = h.slice(1, -1);
          if (!t.plainObjects && o.call(Object.prototype, m) && !t.allowPrototypes) {
            return;
          }
          n[n.length] = h;
          u += 1;
          c = r.indexOf("[", p + 1);
        }
        if (c >= 0) {
          if (t.strictDepth === true) {
            throw new RangeError("Input depth exceeded depth option of " + t.depth + " and strictDepth is true");
          }
          n[n.length] = "[" + r.slice(c) + "]";
        }
        return n;
      }(e, r);
      if (a) {
        return function (e, t, r, o) {
          var i = 0;
          if (e.length > 0 && e[e.length - 1] === "[]") {
            var a = e.slice(0, -1).join("");
            i = Array.isArray(t) && t[a] ? t[a].length : 0;
          }
          var s = o ? t : c(t, r, i);
          for (var u = e.length - 1; u >= 0; --u) {
            var l;
            var d = e[u];
            if (d === "[]" && r.parseArrays) {
              l = n.isOverflow(s) ? s : r.allowEmptyArrays && (s === "" || r.strictNullHandling && s === null) ? [] : n.combine([], s, r.arrayLimit, r.plainObjects, r.throwOnLimitExceeded);
            } else {
              l = r.plainObjects ? {
                __proto__: null
              } : {};
              var p = d.charAt(0) === "[" && d.charAt(d.length - 1) === "]" ? d.slice(1, -1) : d;
              var f = r.decodeDotInKeys ? p.replace(/%2E/g, ".") : p;
              var h = parseInt(f, 10);
              var m = !isNaN(h) && d !== f && String(h) === f && h >= 0 && r.parseArrays;
              if (r.parseArrays || f !== "") {
                if (m && h < r.arrayLimit) {
                  (l = [])[h] = s;
                } else {
                  if (m && r.throwOnLimitExceeded) {
                    throw new RangeError("Array limit exceeded. Only " + r.arrayLimit + " element" + (r.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                  }
                  if (m) {
                    l[h] = s;
                    n.markOverflow(l, h);
                  } else if (f !== "__proto__") {
                    l[f] = s;
                  }
                }
              } else {
                l = {
                  0: s
                };
              }
            }
            s = l;
          }
          return s;
        }(a, t, r, i);
      }
    }
  }
  e.exports = function (e, t) {
    var r = function (e) {
      if (!e) {
        return a;
      }
      if (e.allowEmptyArrays !== undefined && typeof e.allowEmptyArrays != "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (e.decodeDotInKeys !== undefined && typeof e.decodeDotInKeys != "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (e.decoder !== null && e.decoder !== undefined && typeof e.decoder != "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (e.throwOnLimitExceeded !== undefined && typeof e.throwOnLimitExceeded != "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var t = e.charset === undefined ? a.charset : e.charset;
      var r = e.duplicates === undefined ? a.duplicates : e.duplicates;
      if (r !== "combine" && r !== "first" && r !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      return {
        allowDots: e.allowDots === undefined ? e.decodeDotInKeys === true || a.allowDots : !!e.allowDots,
        allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : a.allowEmptyArrays,
        allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : a.allowPrototypes,
        allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : a.allowSparse,
        arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : a.arrayLimit,
        charset: t,
        charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : a.charsetSentinel,
        comma: typeof e.comma == "boolean" ? e.comma : a.comma,
        decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : a.decodeDotInKeys,
        decoder: typeof e.decoder == "function" ? e.decoder : a.decoder,
        delimiter: typeof e.delimiter == "string" || n.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
        depth: typeof e.depth == "number" || e.depth === false ? +e.depth : a.depth,
        duplicates: r,
        ignoreQueryPrefix: e.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : a.interpretNumericEntities,
        parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : a.parameterLimit,
        parseArrays: e.parseArrays !== false,
        plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : a.plainObjects,
        strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : a.strictDepth,
        strictMerge: typeof e.strictMerge == "boolean" ? !!e.strictMerge : a.strictMerge,
        strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : a.strictNullHandling,
        throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" && e.throwOnLimitExceeded
      };
    }(t);
    if (e === "" || e == null) {
      if (r.plainObjects) {
        return {
          __proto__: null
        };
      } else {
        return {};
      }
    }
    var l = typeof e == "string" ? function (e, t) {
      var r = {
        __proto__: null
      };
      var u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
      u = u.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var l = t.parameterLimit === Infinity ? undefined : t.parameterLimit;
      var d = u.split(t.delimiter, t.throwOnLimitExceeded && l !== undefined ? l + 1 : l);
      if (t.throwOnLimitExceeded && l !== undefined && d.length > l) {
        throw new RangeError("Parameter limit exceeded. Only " + l + " parameter" + (l === 1 ? "" : "s") + " allowed.");
      }
      var p;
      var f = -1;
      var h = t.charset;
      if (t.charsetSentinel) {
        for (p = 0; p < d.length; ++p) {
          if (d[p].indexOf("utf8=") === 0) {
            if (d[p] === "utf8=%E2%9C%93") {
              h = "utf-8";
            } else if (d[p] === "utf8=%26%2310003%3B") {
              h = "iso-8859-1";
            }
            f = p;
            p = d.length;
          }
        }
      }
      for (p = 0; p < d.length; ++p) {
        if (p !== f) {
          var m;
          var g;
          var v = d[p];
          var y = v.indexOf("]=");
          var _ = y === -1 ? v.indexOf("=") : y + 1;
          if (_ === -1) {
            m = t.decoder(v, a.decoder, h, "key");
            g = t.strictNullHandling ? null : "";
          } else if ((m = t.decoder(v.slice(0, _), a.decoder, h, "key")) !== null) {
            g = n.maybeMap(c(v.slice(_ + 1), t, i(r[m]) ? r[m].length : 0), function (e) {
              return t.decoder(e, a.decoder, h, "value");
            });
          }
          if (g && t.interpretNumericEntities && h === "iso-8859-1") {
            g = s(String(g));
          }
          if (v.indexOf("[]=") > -1) {
            g = i(g) ? [g] : g;
          }
          if (t.comma && i(g) && g.length > t.arrayLimit) {
            g = n.combine([], g, t.arrayLimit, t.plainObjects, t.throwOnLimitExceeded);
          }
          if (m !== null) {
            var b = o.call(r, m);
            if (b && (t.duplicates === "combine" || v.indexOf("[]=") > -1)) {
              r[m] = n.combine(r[m], g, t.arrayLimit, t.plainObjects, t.throwOnLimitExceeded);
            } else if (!b || t.duplicates === "last") {
              r[m] = g;
            }
          }
        }
      }
      return r;
    }(e, r) : e;
    var d = r.plainObjects ? {
      __proto__: null
    } : {};
    for (var p = Object.keys(l), f = 0; f < p.length; ++f) {
      var h = p[f];
      var m = u(h, l[h], r, typeof e == "string");
      d = n.merge(d, m, r);
    }
    if (r.allowSparse === true) {
      return d;
    } else {
      return n.compact(d);
    }
  };
};
