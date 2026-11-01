// Module 24 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return M;
    });
    n.d(t, "b", function () {
      return H;
    });
    var r = n(0);
    var o = n(1);
    var i = n(37);
    function a(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (e) {
            if (typeof e == "string") {
              return s(e, t);
            }
            var n = {}.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
              n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
              return Array.from(e);
            } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
              return s(e, t);
            } else {
              return undefined;
            }
          }
        }(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
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
      var i;
      var a = true;
      var c = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          c = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
      };
    }
    function s(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    var c = Symbol("WALK_STOP");
    var l = new Set(["AbortController", "AbortSignal", "Array", "ArrayBuffer", "AsyncContext", "Atomics", "AudioContext", "BigInt", "BigInt64Array", "BigUint64Array", "Blob", "Boolean", "BroadcastChannel", "Buffer", "CanvasRenderingContext2D", "clearImmediate", "clearInterval", "clearTimeout", "confirm", "console", "Crypto", "CustomEvent", "DataView", "Date", "decodeURI", "decodeURIComponent", "document", "Element", "encodeURI", "encodeURIComponent", "Error", "escape", "eval", "Event", "EventTarget", "fetch", "File", "FileReader", "Float32Array", "Float64Array", "FormData", "function", "global", "globalThis", "hasOwnProperty", "Headers", "History", "HTMLElement", "HTMLCollection", "IDBKeyRange", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "IntersectionObserver", "isFinite", "isNaN", "isPrototypeOf", "JSON", "location", "log", "Map", "Math", "MediaRecorder", "MediaSource", "MediaStream", "MemberExpression", "MutationObserver", "NaN", "navigator", "Node", "NodeList", "Number", "Object", "OfflineAudioContext", "parse", "parseFloat", "parseInt", "Performance", "process", "Promise", "prompt", "prototype", "Proxy", "ReadableStream", "Reflect", "RegExp", "requestAnimationFrame", "requestIdleCallback", "Request", "Response", "ResizeObserver", "Screen", "setImmediate", "setInterval", "setTimeout", "SharedArrayBuffer", "SharedWorker", "SourceBuffer", "split", "String", "stringify", "structuredClone", "SubtleCrypto", "Symbol", "TextDecoder", "TextEncoder", "this", "toString", "TransformStream", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URL", "URLSearchParams", "valueOf", "WeakMap", "WeakSet", "WebAssembly", "WebGLRenderingContext", "window", "Worker", "WritableStream", "XMLHttpRequest", "alert", "arguments", "atob", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "queueMicrotask"]);
    function u(e, t) {
      if (e && typeof e == "object") {
        for (var o = [{
            node: e,
            parent: null,
            exit: false
          }], i = [], a = typeof t == "function" ? t : t.enter ?? null, s = typeof t == "function" ? null : t.leave ?? null, l = false; !l && o.length > 0;) {
          var u = o.pop();
          var d = u.node;
          var f = u.parent;
          if (u.exit) {
            i.pop();
            if (s && s(d, f, i) === c) {
              l = true;
            }
          } else if (d && typeof d.type == "string") {
            var p = a ? a(d, f, i) : undefined;
            if (p !== c) {
              if (p !== true) {
                o.push({
                  node: d,
                  parent: f,
                  exit: true
                });
                i.push(d);
                for (var h in d) {
                  if (h !== "loc" && h !== "range" && h !== "start" && h !== "end" && Object.prototype.hasOwnProperty.call(d, h)) {
                    var g = d[h];
                    if (g) {
                      if (Array.isArray(g)) {
                        for (var m = g.length - 1; m >= 0; m--) {
                          var v = g[m];
                          if (v && typeof v.type == "string") {
                            o.push({
                              node: v,
                              parent: d,
                              exit: false
                            });
                          }
                        }
                      } else if (typeof g == "object" && typeof g.type == "string") {
                        o.push({
                          node: g,
                          parent: d,
                          exit: false
                        });
                      }
                    }
                  }
                }
              }
            } else {
              l = true;
            }
          }
        }
      }
    }
    function d(e, t) {
      var n = function (e) {
        if (e) {
          if (Array.isArray(e.range)) {
            return e.range;
          } else if (typeof e.start == "number" && typeof e.end == "number") {
            return [e.start, e.end];
          } else {
            return null;
          }
        } else {
          return null;
        }
      }(e);
      if (n) {
        return t.slice(n[0], n[1]);
      } else {
        return null;
      }
    }
    function f(e, t) {
      if (e.type !== "MemberExpression") {
        return null;
      }
      var n = [];
      for (var r = e; r && r.type === "MemberExpression";) {
        var o = r;
        var i = o.property;
        if (!i) {
          return null;
        }
        if (o.computed) {
          var a = d(i, t);
          if (!a) {
            return null;
          }
          n.unshift(`[${a.trim()}]`);
        } else {
          if (i.type !== "Identifier") {
            return null;
          }
          n.unshift("." + i.name);
        }
        r = o.object;
      }
      var s = null;
      if ((r == null ? undefined : r.type) === "Identifier") {
        s = r.name;
      } else if ((r == null ? undefined : r.type) === "ThisExpression") {
        s = "this";
      }
      if (s) {
        return s + n.join("");
      } else {
        return null;
      }
    }
    function p(e, t) {
      for (var n = e.object; n && n.type === "MemberExpression";) {
        var r = f(n, t);
        if (r) {
          return r;
        }
        n = n.object;
      }
      if ((n == null ? undefined : n.type) === "Identifier") {
        return n.name;
      } else if ((n == null ? undefined : n.type) === "ThisExpression") {
        return "this";
      } else {
        return null;
      }
    }
    function h(e, t, n) {
      if (n.type === "CallExpression" && n.callee.type === "Identifier" && e.declaredVariables.has(n.callee.name)) {
        return g(t, n.callee.name, m(e, n.arguments));
      }
      if (n.type === "VariableDeclarator" && n.init?.type === "FunctionExpression" && n.id.type === "Identifier") {
        return g(t, n.id.name, m(e, n.init.params));
      }
      if (n.type === "NewExpression" && n.callee.type === "MemberExpression" && n.callee.object.type === "Identifier") {
        var o = f(n.callee, e.getSource());
        if (!o) {
          return;
        }
        return g(t, o, m(e, n.arguments), true);
      }
    }
    function g(e, t, n, r = false) {
      return [`  function ${e}(${n.join(", ")}) {`, `    return ${r ? "new " : ""}${t}(${n.join(", ")});`, "  }"].join("\n");
    }
    function m(e, t) {
      var n;
      var r = [];
      var o = a(t);
      try {
        for (o.s(); !(n = o.n()).done;) {
          var i = n.value;
          if (i.type === "Identifier" && e.declaredVariables.has(i.name)) {
            r.push(i.name);
          } else if (i.type !== "Literal" || typeof i.value != "string" && typeof i.value != "number") {
            if (i.type === "UnaryExpression") {
              var s = d(i, e.getSource());
              if (s) {
                r.push(s.trim());
              }
            } else if (i.type === "AssignmentPattern" && i.left.type === "Identifier") {
              r.push(i.left.name);
            } else if (i.type === "Identifier") {
              r.push(i.name);
            } else if (!r.includes("input")) {
              r.push("input");
            }
          } else {
            r.push(JSON.stringify(i.value));
          }
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      return r;
    }
    function v(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (e) {
            if (typeof e == "string") {
              return y(e, t);
            }
            var n = {}.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
              n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
              return Array.from(e);
            } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
              return y(e, t);
            } else {
              return undefined;
            }
          }
        }(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
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
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function y(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    class k {
      constructor(e, t = {}) {
        this.dependentsTracker = new Map();
        this.pendingPrototypeAliasBinding = null;
        this.iifeParamName = null;
        this.declaredVariables = new Map();
        this.source = e;
        var n = t.extractions ? Array.isArray(t.extractions) ? t.extractions : [t.extractions] : [];
        this.extractionStates = n.map(e => ({
          config: Object.assign({
            collectDependencies: true,
            stopWhenReady: true
          }, e),
          dependencies: new Set(),
          dependents: new Set(),
          ready: false
        }));
        this.hasExtractions = this.extractionStates.length > 0;
        this.programAst = Object(i.parseScript)(e, {
          ranges: true,
          loc: false,
          module: false
        });
        this.analyzeAst();
      }
      analyzeAst() {
        var n;
        var r;
        var o;
        var i = v(this.programAst.body);
        try {
          for (i.s(); !(o = i.n()).done;) {
            var a = o.value;
            if (a.type === "ExpressionStatement" && a.expression.type === "CallExpression") {
              var s = a.expression;
              if (s.callee.type === "FunctionExpression") {
                var c = s.callee;
                var l = c.params.length > 0 ? c.params[0] : null;
                if (!this.iifeParamName && (l == null ? undefined : l.type) === "Identifier") {
                  this.iifeParamName = l.name;
                }
                if (c.body?.type === "BlockStatement") {
                  r = c.body;
                  break;
                }
              }
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        if (r) {
          var u;
          var d = v(r.body);
          try {
            for (d.s(); !(u = d.n()).done;) {
              var h = u.value;
              switch (h.type) {
                case "ExpressionStatement":
                  var g = h.expression;
                  if (g.type !== "AssignmentExpression") {
                    continue;
                  }
                  var m = g.left;
                  var y = g.right;
                  if (y.type === "MemberExpression" && !y.computed && y.property.type === "Identifier" && y.property.name === "prototype") {
                    var k = f(y, this.source);
                    var b = m.type === "Identifier" ? m.name : f(m, this.source);
                    if (k) {
                      var _ = this.declaredVariables.get(k.replace(".prototype", ""));
                      if (b && _) {
                        var T = new Set();
                        var S = b + ".";
                        this.pendingPrototypeAliasBinding = [S, _];
                        _.prototypeAliases.set(S, T);
                      }
                    }
                  }
                  if (m.type === "Identifier") {
                    var x = this.declaredVariables.get(m.name);
                    if (!x) {
                      continue;
                    }
                    x.node.init = y;
                    if (this.needsDependencyAnalysis(y)) {
                      x.dependencies = this.findDependencies(g.right, m.name);
                    }
                    if (this.onMatch(x.node, x)) {
                      return;
                    }
                  } else if (g.left.type === "MemberExpression") {
                    var w = f(g.left, this.source);
                    var E = this.pendingPrototypeAliasBinding?.[0];
                    if (E && ((w == null ? undefined : w.includes(E)) || w === E.slice(0, -1))) {
                      var A = this.declaredVariables.get(((n = this.pendingPrototypeAliasBinding) === null || n === undefined ? undefined : n[1].name) || "");
                      if (A) {
                        var C = A.prototypeAliases.get(E);
                        var O = {
                          name: w,
                          node: h,
                          dependents: this.dependentsTracker.get(w) || new Set(),
                          predeclared: false,
                          prototypeAliases: new Map(),
                          dependencies: this.findDependencies(y, w)
                        };
                        if (C) {
                          C.add(O);
                        } else {
                          A.prototypeAliases.set(E, new Set([O]));
                        }
                      }
                    } else {
                      this.pendingPrototypeAliasBinding = null;
                    }
                    if (!w || this.declaredVariables.has(w)) {
                      continue;
                    }
                    var I = {
                      name: w,
                      node: h,
                      dependents: this.dependentsTracker.get(w) || new Set(),
                      predeclared: false,
                      prototypeAliases: new Map(),
                      dependencies: this.findDependencies(y, w)
                    };
                    var N = p(g.left, this.source);
                    if (N && N !== w && !N.startsWith("this.")) {
                      I.dependencies.add(N.replace(".prototype", ""));
                    }
                    if (this.dependentsTracker.has(w)) {
                      this.dependentsTracker.delete(w);
                    }
                    this.declaredVariables.set(w, I);
                    if (this.onMatch(h, I)) {
                      return;
                    }
                  }
                  break;
                case "VariableDeclaration":
                  this.pendingPrototypeAliasBinding = null;
                  var D;
                  var R = v(h.declarations);
                  try {
                    for (R.s(); !(D = R.n()).done;) {
                      var L = D.value;
                      if (L.id.type === "Identifier") {
                        var P = {
                          name: L.id.name,
                          node: L,
                          dependents: this.dependentsTracker.get(L.id.name) || new Set(),
                          prototypeAliases: new Map(),
                          dependencies: new Set(),
                          predeclared: false
                        };
                        var B = L.init;
                        if (B || h.kind !== "var") {
                          if (B && this.needsDependencyAnalysis(B)) {
                            P.dependencies = this.findDependencies(B, P.name);
                          }
                        } else {
                          P.predeclared = true;
                        }
                        if (this.dependentsTracker.has(P.name)) {
                          this.dependentsTracker.delete(P.name);
                        }
                        this.declaredVariables.set(P.name, P);
                        if (this.onMatch(L, P)) {
                          return;
                        }
                      }
                    }
                  } catch (e) {
                    R.e(e);
                  } finally {
                    R.f();
                  }
              }
            }
          } catch (e) {
            d.e(e);
          } finally {
            d.f();
          }
        }
      }
      needsDependencyAnalysis(e) {
        if (!e) {
          return false;
        }
        switch (e.type) {
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ArrayExpression":
          case "LogicalExpression":
          case "CallExpression":
          case "NewExpression":
          case "MemberExpression":
          case "BinaryExpression":
          case "ConditionalExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ClassExpression":
          case "Identifier":
            return true;
          default:
            return false;
        }
      }
      onMatch(e, t) {
        if (!this.hasExtractions) {
          return false;
        }
        var n;
        var r = false;
        var o = false;
        var i = v(this.extractionStates);
        try {
          for (i.s(); !(n = i.n()).done;) {
            var a = n.value;
            if (a.node) {
              if (a.node !== e && (this.refreshExtractionState(a), this.shouldStopTraversal())) {
                return true;
              }
            } else {
              if (e.type === "VariableDeclarator" && !e.init) {
                continue;
              }
              if (!(o = a.config.match(e))) {
                continue;
              }
              a.node = e;
              r = true;
              if (t) {
                a.metadata = t;
                a.dependents = t.dependents;
                a.dependencies = t.dependencies;
                if (typeof o != "boolean") {
                  a.matchContext = o;
                }
              }
              this.refreshExtractionState(a);
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return !!r && this.shouldStopTraversal();
      }
      refreshExtractionState(e) {
        if (e.node) {
          if (e.config.collectDependencies !== false) {
            if (e.metadata) {
              e.ready = this.areDependenciesResolved(e.dependencies);
            } else {
              e.ready = false;
            }
          } else {
            e.ready = true;
          }
        } else {
          e.ready = false;
        }
      }
      shouldStopTraversal() {
        if (!this.hasExtractions) {
          return false;
        }
        var e;
        var t = false;
        var n = v(this.extractionStates);
        try {
          for (n.s(); !(e = n.n()).done;) {
            var r = e.value;
            if (r.config.stopWhenReady !== false) {
              t = true;
              if (!r.node) {
                return false;
              }
              if (!r.ready) {
                return false;
              }
            }
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return t;
      }
      areDependenciesResolved(e, t = new Set()) {
        if (!e || e.size === 0) {
          return true;
        }
        var n;
        var r = v(e);
        try {
          for (r.s(); !(n = r.n()).done;) {
            var o = n.value;
            if (o && !l.has(o) && o !== this.iifeParamName && !t.has(o)) {
              var i = this.declaredVariables.get(o);
              if (!i) {
                return false;
              }
              t.add(o);
              if (!this.areDependenciesResolved(i.dependencies, t)) {
                return false;
              }
            }
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        return true;
      }
      findDependencies(e, t) {
        var r = new Set();
        if (!e) {
          return r;
        }
        var o = [{
          names: new Set(),
          type: "block"
        }];
        var i = () => o[o.length - 1];
        var a = e => {
          for (var t = o.length - 1; t >= 0; t--) {
            if (o[t].names.has(e)) {
              return true;
            }
          }
          return false;
        };
        var s = "id" in e && (e == null ? undefined : e.id)?.type === "Identifier" ? e.id.name : undefined;
        var c = (e, t) => {
          if (e) {
            switch (e.type) {
              case "Identifier":
                t.add(e.name);
                break;
              case "ObjectPattern":
                var n;
                var r = v(e.properties);
                try {
                  for (r.s(); !(n = r.n()).done;) {
                    var o = n.value;
                    if (o.type === "RestElement") {
                      c(o.argument, t);
                    } else if (o.type === "Property") {
                      c(o.value, t);
                    }
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                break;
              case "ArrayPattern":
                var i;
                var a = v(e.elements);
                try {
                  for (a.s(); !(i = a.n()).done;) {
                    var s = i.value;
                    if (s) {
                      c(s, t);
                    }
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                break;
              case "RestElement":
                c(e.argument, t);
                break;
              case "AssignmentPattern":
                c(e.left, t);
            }
          }
        };
        u(e, {
          enter: (e, n) => {
            var d;
            switch (e.type) {
              case "FunctionDeclaration":
              case "FunctionExpression":
              case "ArrowFunctionExpression":
                var g = e.type === "FunctionDeclaration";
                var m = "id" in e ? e.id?.name : undefined;
                if (g && m) {
                  i().names.add(m);
                }
                var y = {
                  names: new Set(),
                  type: "function"
                };
                if (e.type === "FunctionExpression" && m) {
                  y.names.add(m);
                }
                ((e, t) => {
                  if (e == null ? undefined : e.params) {
                    var n;
                    var r = v(e.params);
                    try {
                      for (r.s(); !(n = r.n()).done;) {
                        var o = n.value;
                        c(o, t);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  }
                })(e, y.names);
                o.push(y);
                break;
              case "BlockStatement":
                o.push({
                  names: new Set(),
                  type: "block"
                });
                break;
              case "CatchClause":
                var k = new Set();
                if (e.param) {
                  c(e.param, k);
                }
                o.push({
                  names: k,
                  type: "block"
                });
                break;
              case "VariableDeclaration":
                var b;
                var _ = e.kind === "var" && (d = function (e, t) {
                  for (var n = e.length - 1; n >= 0; n--) {
                    var r = e[n];
                    if (t(r, n, e)) {
                      return r;
                    }
                  }
                }(o, e => e.type === "function")) !== null && d !== undefined ? d : i();
                var T = v(e.declarations);
                try {
                  for (T.s(); !(b = T.n()).done;) {
                    var S = b.value;
                    c(S.id, _.names);
                  }
                } catch (e) {
                  T.e(e);
                } finally {
                  T.f();
                }
                break;
              case "ClassDeclaration":
                if (e.id?.name) {
                  i().names.add(e.id.name);
                }
                break;
              case "LabeledStatement":
                if (e.label?.type === "Identifier") {
                  i().names.add(e.label.name);
                }
                break;
              case "Identifier":
                if (e.name === s) {
                  return;
                }
                if ((n == null ? undefined : n.type) === "Property" && n.key === e && !n.computed) {
                  return;
                }
                if ((n == null ? undefined : n.type) === "MethodDefinition" && n.key === e && !n.computed) {
                  return;
                }
                if ((n == null ? undefined : n.type) === "MemberExpression" && n.property === e && !n.computed) {
                  if (n.object.type === "ThisExpression") {
                    return;
                  }
                  var x = f(n, this.source);
                  if (!x) {
                    return;
                  }
                  var w = this.declaredVariables.get(x);
                  if (w) {
                    w.dependents.add(t);
                    r.add(x);
                  } else if (n.object.type === "Identifier") {
                    var E = n.object.name;
                    var A = this.declaredVariables.get(E);
                    if ((A || E === this.iifeParamName) && !a(E) && !l.has(E)) {
                      if (A != null) {
                        A.dependents.add(t);
                      }
                      r.add(x);
                      var C = this.dependentsTracker.get(x);
                      if (C) {
                        C.add(t);
                      } else {
                        this.dependentsTracker.set(x, new Set([t]));
                      }
                    }
                  }
                  return;
                }
                if ((n == null ? undefined : n.type) === "MetaProperty") {
                  return;
                }
                if (a(e.name) || l.has(e.name)) {
                  return;
                }
                r.add(e.name);
                var O = this.declaredVariables.get(e.name);
                if (O) {
                  O.dependents.add(t);
                } else {
                  var I = this.dependentsTracker.get(e.name);
                  if (I) {
                    I.add(t);
                  } else {
                    this.dependentsTracker.set(e.name, new Set([t]));
                  }
                }
                break;
              case "ForStatement":
              case "ForInStatement":
              case "ForOfStatement":
                o.push({
                  names: new Set(),
                  type: "block"
                });
            }
          },
          leave: e => {
            switch (e.type) {
              case "FunctionDeclaration":
              case "FunctionExpression":
              case "ArrowFunctionExpression":
              case "BlockStatement":
              case "CatchClause":
              case "ForStatement":
              case "ForInStatement":
              case "ForOfStatement":
                if (o.length > 1) {
                  o.pop();
                }
            }
          }
        });
        return r;
      }
      getExtractedMatches() {
        return this.extractionStates.filter(e => !!e.node);
      }
      getSource() {
        return this.source;
      }
    }
    function b(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var o;
          var i;
          var a;
          var s = [];
          var c = true;
          var l = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              c = false;
            } else {
              for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
            }
          } catch (e) {
            l = true;
            o = e;
          } finally {
            try {
              if (!c && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (l) {
                throw o;
              }
            }
          }
          return s;
        }
      }(e, t) || T(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = T(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
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
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function T(e, t) {
      if (e) {
        if (typeof e == "string") {
          return S(e, t);
        }
        var n = {}.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return S(e, t);
        } else {
          return undefined;
        }
      }
    }
    function S(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    class x {
      constructor(e) {
        this.analyzer = e;
      }
      areSafeArgs(e, t = "strict") {
        return (e ?? []).every(e => !!e && e.type !== "SpreadElement" && this.isSafeInitializer(e, t));
      }
      isSafeInitializer(e) {
        var t;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "strict";
        if (!e) {
          return true;
        }
        switch (e.type) {
          case "ClassExpression":
            return true;
          case "Literal":
            var r = e;
            return typeof r.value == "string" || typeof r.value == "number" || typeof r.value == "boolean" || r.value === null || Boolean(r.regex);
          case "TemplateLiteral":
            return e.expressions.every(e => this.isSafeInitializer(e, n));
          case "ArrayExpression":
            return e.elements.every(e => !e || e.type !== "SpreadElement" && this.isSafeInitializer(e, n));
          case "ObjectExpression":
            return e.properties.every(e => {
              if (e.type !== "Property") {
                return false;
              }
              if (e.computed) {
                return false;
              }
              if (e.kind !== "init") {
                return false;
              }
              var t = e.value;
              return !!t && (t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression" || t.type === "Literal");
            });
          case "CallExpression":
            if (e.callee.type === "Identifier" && l.has(e.callee.name)) {
              return this.areSafeArgs(e.arguments, n);
            }
            if (e.callee.type === "MemberExpression") {
              if (!this.isSafeInitializer(e.callee.object, n)) {
                return false;
              }
              if (n === "strict") {
                var o = e.callee.property.type === "Identifier" ? e.callee.property.name : "";
                if (e.callee.computed || !l.has(o)) {
                  return false;
                }
              }
              return this.areSafeArgs(e.arguments, n);
            }
            return false;
          case "NewExpression":
            if (e.callee.type === "Identifier") {
              if (l.has(e.callee.name)) {
                return this.areSafeArgs(e.arguments, n);
              }
              if (n === "loose") {
                return this.areSafeArgs(e.arguments, n);
              }
            }
            return false;
          case "UnaryExpression":
            return this.isSafeInitializer(e.argument, n);
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "Identifier":
            return true;
          case "MemberExpression":
            if (n === "loose") {
              return (!e.computed || !!this.isSafeInitializer(e.property, n)) && this.isSafeInitializer(e.object, n);
            } else {
              return !e.computed && e.property.type === "Identifier" && e.property.name === "prototype";
            }
          case "LogicalExpression":
          case "BinaryExpression":
            return this.isSafeInitializer(e.left, n) && this.isSafeInitializer(e.right, n);
          case "ConditionalExpression":
            return n === "loose" && this.isSafeInitializer(e.test, n) && this.isSafeInitializer(e.consequent, n) && this.isSafeInitializer(e.alternate, n);
          case "SequenceExpression":
            return n === "loose" && e.expressions.every(e => this.isSafeInitializer(e, n));
          case "AssignmentExpression":
            if (e.left.type !== "MemberExpression" || e.left.computed) {
              if (e.left.type === "Identifier" && this.analyzer.declaredVariables.has(e.left.name)) {
                return this.isSafeInitializer(e.right, n);
              }
            } else {
              var i = e.left.object;
              if (i.type === "Identifier" && ((t = this.analyzer.declaredVariables.get(i.name)) === null || t === undefined ? undefined : t.node.init) !== undefined) {
                return this.isSafeInitializer(e.right, n);
              }
            }
            return false;
          default:
            return false;
        }
      }
      getInitializerFallback(e) {
        switch (e == null ? undefined : e.type) {
          case "ObjectExpression":
          case "NewExpression":
          case "MemberExpression":
          case "LogicalExpression":
            return "{}";
          case "ArrayExpression":
            return "[]";
          default:
            return "undefined";
        }
      }
      renderNode(e, t) {
        var n;
        var r;
        var o;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var a = this.analyzer.getSource();
        var s = this.analyzer.declaredVariables;
        var c = i.disallowSideEffectInitializers;
        var l = typeof c == "object" && c !== null && (n = c.mode) !== null && n !== undefined ? n : "strict";
        var u = Boolean(c);
        var p = e.type === "AssignmentExpression" ? e : e.type === "ExpressionStatement" && e.expression.type === "AssignmentExpression" ? e.expression : null;
        var h = p && p.operator === "=" ? p.right : e.type === "VariableDeclarator" ? e.init : null;
        var g = u && h && !this.isSafeInitializer(h, l);
        var m = this.getInitializerFallback(h);
        var v = m;
        if (!g && h) {
          if (t || h.type !== "Identifier" || s.has(h.name)) {
            var y = p == null ? undefined : p.left;
            if (((h == null ? undefined : h.type) !== "MemberExpression" || !!h.computed || h.property.type !== "Identifier" || h.property.name !== "prototype") && (y == null ? undefined : y.type) === "MemberExpression" && h && u && y.object.type === "Identifier" && h.type !== "FunctionExpression" && h.type !== "ArrowFunctionExpression" && h.type !== "LogicalExpression" && h.type !== "ClassExpression") {
              return `  // Skipped ${f(y, a)} assignment.`;
            }
            v = ((r = d(h, a)) === null || r === undefined ? undefined : r.trim().replace(/;\s*$/, "")) || "undefined // [JsExtractor] Failed to extract initializer source.";
          } else {
            v = m;
          }
        }
        if (!g && !!h && h.type === "SequenceExpression" && !v.startsWith("(")) {
          v = `(${v})`;
        }
        var k = `${e.type === "VariableDeclarator" && e.id.type === "Identifier" ? e.id.name : p && p.left.type === "Identifier" ? p.left.name : (p == null ? undefined : p.type) === "AssignmentExpression" ? (o = f(p.left, a)) === null || o === undefined ? undefined : o.trim() : "unknown"} = ${v};`;
        if (e.type === "VariableDeclarator" && e.init && !t) {
          return "  var " + k;
        } else {
          return "  " + k;
        }
      }
      buildScript(e) {
        var r = this;
        var o = e.maxDepth;
        var i = o === undefined ? Infinity : o;
        var a = e.forceVarPredeclaration;
        var s = a !== undefined && a;
        var c = e.exportRawValues;
        var l = c !== undefined && c;
        var u = e.rawValueOnly;
        var p = u === undefined ? [] : u;
        var g = this.analyzer.getExtractedMatches();
        var m = new Set(g.map(e => {
          return e.metadata?.name || "";
        }));
        var v = [];
        var y = new Set();
        var k = new Map();
        var T = {};
        function S(e) {
          if (e && !e.includes(".")) {
            y.add(e);
          }
        }
        var x;
        function w(t, n = 0, o) {
          if (t && !(n > i)) {
            var a;
            var c = _(t.dependencies);
            try {
              for (c.s(); !(a = c.n()).done;) {
                var l = a.value;
                if (o && o !== l) {
                  if (!m.has(o)) {
                    continue;
                  }
                  o = undefined;
                }
                if (!m.has(l)) {
                  m.add(l);
                  var u = r.analyzer.declaredVariables.get(l);
                  if (u) {
                    var d = s || u.predeclared;
                    if (d) {
                      S(l);
                    }
                    w(u, n + 1, o);
                    v.push(r.renderNode(u.node, d, e));
                    if (u.prototypeAliases.size > 0) {
                      var f;
                      var p = _(u.prototypeAliases);
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          var h;
                          var g = b(f.value, 2);
                          var y = g[1];
                          var k = _(y);
                          try {
                            for (k.s(); !(h = k.n()).done;) {
                              var T = h.value;
                              w(T, n);
                              v.push(r.renderNode(T.node, d, e));
                            }
                          } catch (e) {
                            k.e(e);
                          } finally {
                            k.f();
                          }
                        }
                      } catch (e) {
                        p.e(e);
                      } finally {
                        p.f();
                      }
                    }
                  }
                }
              }
            } catch (e) {
              c.e(e);
            } finally {
              c.f();
            }
          }
        }
        var E = _(g);
        try {
          for (E.s(); !(x = E.n()).done;) {
            var A = x.value;
            var C = A.config.friendlyName;
            var O = C && p.includes(C);
            if (A.metadata) {
              if (!O) {
                v.push(`  //#region --- start [${C || "Unknown"}] ---`);
              }
              var I = (s || A.metadata.predeclared) && !O;
              var N = A.config.onlyProcessMatchContext;
              if (I) {
                S(A.metadata.name);
              }
              if (A.config.collectDependencies && !O) {
                var D = undefined;
                var R = A.matchContext;
                if ((R == null ? undefined : R.type) === "NewExpression" && N) {
                  if (R.callee.type === "Identifier") {
                    D = R.callee.name;
                  } else if (R.callee.type === "MemberExpression") {
                    D = f(R.callee, this.analyzer.getSource()) || undefined;
                  }
                }
                w(A.metadata, undefined, D);
              }
              if (A.matchContext && C && (k.set(C, A.matchContext), l)) {
                var L = A.matchContext;
                var P = this.analyzer.getSource();
                var B = null;
                B = L.type === "Property" ? d(L.value, P) : L.type === "Identifier" ? L.name : d(L, P);
                T[C] = B;
              }
              if (!O) {
                if (!N) {
                  v.push(this.renderNode(A.metadata.node, I, e));
                }
                v.push(`  //#endregion --- end [${C || "Unknown"}] ---\n`);
              }
            }
          }
        } catch (e) {
          E.e(e);
        } finally {
          E.f();
        }
        var U = [];
        U.push("const __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis :");
        U.push("  typeof self !== 'undefined' ? self :");
        U.push("  typeof window !== 'undefined' ? window :");
        U.push("  typeof global !== 'undefined' ? global : {};\n");
        U.push(`const exportedVars = (function(${this.analyzer.iifeParamName}) {`);
        U.push("  const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);");
        U.push("  const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};");
        U.push("  const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n");
        if (y.size > 0) {
          U.push(`  var ${Array.from(y).join(", ")};\n`);
        }
        U.push(v.join("\n"));
        var M;
        var V = [];
        var H = _(k);
        try {
          for (H.s(); !(M = H.n()).done;) {
            var j = b(M.value, 2);
            var F = j[0];
            var z = j[1];
            var G = null;
            if (z.type === "Identifier") {
              var W = this.analyzer.declaredVariables.get(z.name);
              if ((W == null ? undefined : W.node)?.type === "VariableDeclarator" && W.node.init?.type === "FunctionExpression") {
                G = W.node;
              }
            } else if (z.type === "CallExpression" || z.type === "NewExpression" || z.type === "VariableDeclarator") {
              G = z;
            }
            if (G) {
              var q = h(this.analyzer, F, G);
              if (q) {
                U.push(q + "\n");
                V.push(F);
              }
            }
          }
        } catch (e) {
          H.e(e);
        } finally {
          H.f();
        }
        if (l) {
          var Y = JSON.stringify(T, null, "  ".length).split("\n");
          var K = `${Y[0]}\n${Y.slice(1).map(e => "  " + e).join("\n")}`;
          U.push(`  const rawValues = ${K};\n`);
          V.push("rawValues");
        }
        U.push(`  return { ${V.join(", ")} };`);
        U.push("})({});\n");
        return {
          output: U.join("\n"),
          exported: V,
          exportedRawValues: l ? T : undefined
        };
      }
    }
    function w(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = A(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
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
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function E(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var o;
          var i;
          var a;
          var s = [];
          var c = true;
          var l = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              c = false;
            } else {
              for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
            }
          } catch (e) {
            l = true;
            o = e;
          } finally {
            try {
              if (!c && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (l) {
                throw o;
              }
            }
          }
          return s;
        }
      }(e, t) || A(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function A(e, t) {
      if (e) {
        if (typeof e == "string") {
          return C(e, t);
        }
        var n = {}.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return C(e, t);
        } else {
          return undefined;
        }
      }
    }
    function C(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    function O(e) {
      if (e.type !== "VariableDeclarator") {
        return false;
      }
      var t = e.init;
      if (!t || t.type !== "FunctionExpression") {
        return false;
      }
      if (t.params.length < 3) {
        return false;
      }
      var n = E(t.params, 3);
      var r = n[0];
      var o = n[1];
      var i = n[2];
      if (r.type !== "Identifier" || o.type !== "AssignmentPattern" || i.type !== "AssignmentPattern") {
        return false;
      }
      var a;
      var s = t.body;
      var c = false;
      var l = false;
      var u = w((s == null ? undefined : s.body) || []);
      try {
        for (u.s(); !(a = u.n()).done;) {
          var d = a.value;
          if (d.type === "ExpressionStatement") {
            var f = d.expression;
            if (f.type === "AssignmentExpression" && f.operator === "=" && f.left.type === "Identifier" && f.left.name === r.name) {
              var p = f.right;
              if (p.type === "NewExpression" && p.callee.type === "MemberExpression") {
                c = true;
              }
            }
            if (f.type === "CallExpression" && f.callee.type === "MemberExpression") {
              var h = f.arguments;
              if (h.length === 2 && h[0].type === "Literal" && h[0].value === "alr" && h[1].type === "Literal" && h[1].value === "yes") {
                l = true;
              }
            }
          }
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
      return !!c && !!l && e;
    }
    function I(e) {
      if (e.type !== "VariableDeclarator" || e.init?.type !== "FunctionExpression") {
        return false;
      }
      var n = e.init.body;
      if (!n) {
        return false;
      }
      var r = null;
      u(n, e => {
        if (e.type === "ObjectExpression") {
          var t;
          var n = w(e.properties);
          try {
            for (n.s(); !(t = n.n()).done;) {
              var o = t.value;
              if (o.type === "Property" && o.key.type === "Identifier" && o.key.name === "signatureTimestamp") {
                r = o;
                return c;
              }
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
      });
      return r || false;
    }
    function N(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var o;
          var i;
          var a;
          var s = [];
          var c = true;
          var l = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              c = false;
            } else {
              for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
            }
          } catch (e) {
            l = true;
            o = e;
          } finally {
            try {
              if (!c && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (l) {
                throw o;
              }
            }
          }
          return s;
        }
      }(e, t) || R(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function D(e, t) {
      var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = R(e)) || t && e && typeof e.length == "number") {
          if (n) {
            e = n;
          }
          var r = 0;
          function o() {}
          return {
            s: o,
            n: function () {
              if (r >= e.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: e[r++]
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
      var i;
      var a = true;
      var s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          a = e.done;
          return e;
        },
        e: function (e) {
          s = true;
          i = e;
        },
        f: function () {
          try {
            if (!a && n.return != null) {
              n.return();
            }
          } finally {
            if (s) {
              throw i;
            }
          }
        }
      };
    }
    function R(e, t) {
      if (e) {
        if (typeof e == "string") {
          return L(e, t);
        }
        var n = {}.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return L(e, t);
        } else {
          return undefined;
        }
      }
    }
    function L(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, r = Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    function P() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e;
      var t;
      var n = typeof Symbol == "function" ? Symbol : {};
      var r = n.iterator || "@@iterator";
      var o = n.toStringTag || "@@toStringTag";
      function i(n, r, o, i) {
        var c = r && r.prototype instanceof s ? r : s;
        var l = Object.create(c.prototype);
        B(l, "_invoke", function (n, r, o) {
          var i;
          var s;
          var c;
          var l = 0;
          var u = o || [];
          var d = false;
          var f = {
            p: 0,
            n: 0,
            v: e,
            a: p,
            f: p.bind(e, 4),
            d: function (t, n) {
              i = t;
              s = 0;
              c = e;
              f.n = n;
              return a;
            }
          };
          function p(n, r) {
            s = n;
            c = r;
            t = 0;
            for (; !d && l && !o && t < u.length; t++) {
              var o;
              var i = u[t];
              var p = f.p;
              var h = i[2];
              if (n > 3) {
                if (o = h === r) {
                  c = i[(s = i[4]) ? 5 : (s = 3, 3)];
                  i[4] = i[5] = e;
                }
              } else if (i[0] <= p) {
                if (o = n < 2 && p < i[1]) {
                  s = 0;
                  f.v = r;
                  f.n = i[1];
                } else if (p < h && (o = n < 3 || i[0] > r || r > h)) {
                  i[4] = n;
                  i[5] = r;
                  f.n = h;
                  s = 0;
                }
              }
            }
            if (o || n > 1) {
              return a;
            }
            d = true;
            throw r;
          }
          return function (o, u, h) {
            if (l > 1) {
              throw TypeError("Generator is already running");
            }
            if (d && u === 1) {
              p(u, h);
            }
            s = u;
            c = h;
            while ((t = s < 2 ? e : c) || !d) {
              if (!i) {
                if (s) {
                  if (s < 3) {
                    if (s > 1) {
                      f.n = -1;
                    }
                    p(s, c);
                  } else {
                    f.n = c;
                  }
                } else {
                  f.v = c;
                }
              }
              try {
                l = 2;
                if (i) {
                  if (!s) {
                    o = "next";
                  }
                  if (t = i[o]) {
                    if (!(t = t.call(i, c))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!t.done) {
                      return t;
                    }
                    c = t.value;
                    if (s < 2) {
                      s = 0;
                    }
                  } else {
                    if (s === 1 && (t = i.return)) {
                      t.call(i);
                    }
                    if (s < 2) {
                      c = TypeError("The iterator does not provide a '" + o + "' method");
                      s = 1;
                    }
                  }
                  i = e;
                } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== a) {
                  break;
                }
              } catch (t) {
                i = e;
                s = 1;
                c = t;
              } finally {
                l = 1;
              }
            }
            return {
              value: t,
              done: d
            };
          };
        }(n, o, i), true);
        return l;
      }
      var a = {};
      function s() {}
      function c() {}
      function l() {}
      t = Object.getPrototypeOf;
      var u = [][r] ? t(t([][r]())) : (B(t = {}, r, function () {
        return this;
      }), t);
      var d = l.prototype = s.prototype = Object.create(u);
      function f(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, l);
        } else {
          e.__proto__ = l;
          B(e, o, "GeneratorFunction");
        }
        e.prototype = Object.create(d);
        return e;
      }
      c.prototype = l;
      B(d, "constructor", l);
      B(l, "constructor", c);
      c.displayName = "GeneratorFunction";
      B(l, o, "GeneratorFunction");
      B(d);
      B(d, o, "Generator");
      B(d, r, function () {
        return this;
      });
      B(d, "toString", function () {
        return "[object Generator]";
      });
      return (P = function () {
        return {
          w: i,
          m: f
        };
      })();
    }
    function B(e, t, n, r) {
      var o = Object.defineProperty;
      try {
        o({}, "", {});
      } catch (e) {
        o = 0;
      }
      (B = function (e, t, n, r) {
        function i(t, n) {
          B(e, t, function (e) {
            return this._invoke(t, n, e);
          });
        }
        if (t) {
          if (o) {
            o(e, t, {
              value: n,
              enumerable: !r,
              configurable: !r,
              writable: !r
            });
          } else {
            e[t] = n;
          }
        } else {
          i("next", 0);
          i("throw", 1);
          i("return", 2);
        }
      })(e, t, n, r);
    }
    function U(e, t, n, r) {
      return new (n ||= Promise)(function (o, i) {
        function a(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          if (e.done) {
            o(e.value);
          } else {
            (t = e.value, t instanceof n ? t : new n(function (e) {
              e(t);
            })).then(a, s);
          }
        }
        c((r = r.apply(e, t || [])).next());
      });
    }
    class M {
      static get PLAYER_CONFIG_RX() {
        return /ytInitialPlayerResponse\s*=\s*({.+});(var meta)?/i;
      }
      static get PLAYER_URL_RX() {
        return /(src|href)=['"]([a-z0-9\-_\/\.]*player\/[a-z0-9\-_\/\.]*\/base\.js)['"]/i;
      }
      static get PLAYER_URL_MUSIC_RX() {
        return /"jsUrl":\s*"(.+?\/base.js)"/;
      }
      static get USER_SESSION_ID_RX() {
        return /"USER_SESSION_ID"\s*:\s*"(.+?)"/;
      }
      static get VISITOR_DATA_RX() {
        return /"VISITOR_DATA":\s*"([^"]+)"/i;
      }
      static get INNERTUBE_API_KEY_RX() {
        return /"innertubeApiKey":\s*"([^"]+)"/i;
      }
      static get INNERTUBE_CONTEXT_CLIENT_VERSION_RX() {
        return /"innertubeContextClientVersion":\s*"([^"]+)"/i;
      }
      static get DATASYNC_ID_RX() {
        return /"datasyncId":\s*"([^"]+)"/i;
      }
      static fetchConfigs(e) {
        var s;
        return U(this, undefined, undefined, P().m(function p() {
          var h;
          var g;
          var m;
          var v;
          var y;
          var k;
          var b;
          var _;
          var T;
          var S;
          return P().w(function (p) {
            while (true) {
              switch (p.p = p.n) {
                case 0:
                  if (!(h = `https://${location.hostname}/watch?v=${e}&has_verified=1`).match(/(youtube-nocookie)/i)) {
                    p.n = 2;
                    break;
                  }
                  p.n = 1;
                  return Object(r.sendMessage)({
                    type: o.b.CORS_FETCH,
                    data: {
                      url: `https://www.youtube.com/watch?v=${e}&has_verified=1`,
                      responseType: "text"
                    }
                  });
                case 1:
                  g = p.v.data;
                  p.n = 4;
                  break;
                case 2:
                  p.n = 3;
                  return fetch(h).then(e => e.text()).catch(() => Object(r.send)("GET", h).then(e => e.responseText));
                case 3:
                  g = p.v;
                case 4:
                  this.visitorData = g.match(this.VISITOR_DATA_RX)?.[1];
                  this.apiKey = g.match(this.INNERTUBE_API_KEY_RX)?.[1];
                  this.clientVersion = g.match(this.INNERTUBE_CONTEXT_CLIENT_VERSION_RX)?.[1];
                  this.datasyncId = (s = g.match(this.DATASYNC_ID_RX)?.[1]) === null || s === undefined ? undefined : s.replace(/\|/g, "");
                  if (m = g.match(this.USER_SESSION_ID_RX)) {
                    this.ssId = m[1];
                  }
                  v = g.slice(0, g.indexOf("var meta =") + 1 || undefined).match(this.PLAYER_CONFIG_RX)?.[1] || "";
                  try {
                    if (v) {
                      JSON.parse(v);
                    }
                  } catch (e) {
                    v = v.slice(0, v.indexOf("};<") + 1 || undefined).match(/({.+});?/)?.[1] || "";
                  }
                  p.n = 5;
                  return chrome.storage.local.get(o.w);
                case 5:
                  y = p.v;
                  if (k = y[o.w]?.playerUrl || g.match(this.PLAYER_URL_RX)?.[2] || g.match(this.PLAYER_URL_MUSIC_RX)?.[1]) {
                    this.foundPlayerUrlFromConfig = k;
                  }
                  if (this.playerScript) {
                    p.n = 7;
                    break;
                  }
                  p.n = 6;
                  return fetch(k).then(e => e.text());
                case 6:
                  this.playerScript = p.v;
                case 7:
                  if (!(b = this.parseConfig(v))) {
                    p.n = 8;
                    break;
                  }
                  return p.a(2, b);
                case 8:
                  p.p = 8;
                  _ = new DOMParser();
                  (T = _.parseFromString(g, "text/html")).querySelectorAll("script");
                  S = Array.from(T.querySelectorAll("body script")).map(e => {
                    var t;
                    return ((t = e.innerText) === null || t === undefined ? undefined : t.match(this.PLAYER_CONFIG_RX))?.[1];
                  }).find(e => !!e);
                  return p.a(2, this.parseConfig(S || ""));
                case 9:
                  p.p = 9;
                  p.v;
                  return p.a(2, null);
              }
            }
          }, p, this, [[8, 9]]);
        }));
      }
      static getConfigFromSite() {
        var t = Array.from(document.querySelectorAll("script")).find(e => e.innerText.includes("ytInitialPlayerResponse"))?.innerText || "";
        return this.parseConfig(t);
      }
      static get playerURL() {
        return document.querySelector("link[href*=\"player/\"][href*=\"/base\"], script[src*=\"player/\"][src*=\"/base\"]")?.href || this.foundPlayerUrlFromConfig;
      }
      static get signatureTimestamp() {
        var e = this.playerScript.match(/(signatureTimestamp|sts):(\d+)/);
        if (e == null ? undefined : e[2]) {
          return parseInt(e[2]);
        } else {
          return undefined;
        }
      }
      static parseConfig(e) {
        try {
          return JSON.parse(e);
        } catch (e) {
          Object(r.devLog)(e);
          return null;
        }
      }
      static getNeededMetadataFromConfig(e, t) {
        return U(this, undefined, undefined, P().m(function n() {
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
          return P().w(function (n) {
            while (true) {
              switch (n.p = n.n) {
                case 0:
                  if (e && e.playabilityStatus && e.playabilityStatus.status) {
                    n.n = 1;
                    break;
                  }
                  throw new Error("Invalid playabilityStatus");
                case 1:
                  if (e.playabilityStatus.status !== "LOGIN_REQUIRED") {
                    n.n = 2;
                    break;
                  }
                  throw new Error("LOGIN_REQUIRED");
                case 2:
                  if (e.playabilityStatus.status === "OK") {
                    n.n = 3;
                    break;
                  }
                  throw new Error("API_ERROR");
                case 3:
                  if (e.playabilityStatus.reason !== "This video is unavailable") {
                    n.n = 4;
                    break;
                  }
                  throw new Error("VIDEO_UNAVAILABLE");
                case 4:
                  if (e.videoDetails.shortDescription !== "Video Not Available") {
                    n.n = 5;
                    break;
                  }
                  throw new Error("VIDEO_NOT_AVAILABLE");
                case 5:
                  if (e.streamingData) {
                    n.n = 6;
                    break;
                  }
                  throw new Error("INVALID_STREAMING_DATA");
                case 6:
                  e.streamingData.formats = [...(e.streamingData.adaptiveFormats || []), ...(e.streamingData.formats || [])];
                  if (!((i = e.streamingData.formats.filter(e => e.url)).length / e.streamingData.formats.length > 0.4)) {
                    n.n = 10;
                    break;
                  }
                  n.p = 7;
                  n.n = 8;
                  return H(i);
                case 8:
                  return n.a(2, {
                    formats: e.streamingData.formats,
                    player_response: {
                      captions: e.captions
                    },
                    videoDetails: e.videoDetails
                  });
                case 9:
                  n.p = 9;
                  h = n.v;
                  console.log(h);
                case 10:
                  if (!(e.streamingData.formats.filter(e => !e.url && !e.signatureCipher && !e.cipher).length / e.streamingData.formats.length >= 0.4)) {
                    n.n = 11;
                    break;
                  }
                  throw new Error("MISSING_URL_CIPHER");
                case 11:
                  if (!this.playerURL) {
                    n.n = 28;
                    break;
                  }
                  y = this.playerScript;
                  b = undefined;
                  _ = undefined;
                  b = new k(y, {
                    extractions: [{
                      friendlyName: "nsigFunction",
                      match: O
                    }, {
                      friendlyName: "signatureTimestampVar",
                      match: I,
                      collectDependencies: false
                    }]
                  });
                  if (!(_ = new x(b).buildScript({
                    disallowSideEffectInitializers: true,
                    exportRawValues: true,
                    rawValueOnly: ["signatureTimestampVar"]
                  })).exported.includes("nsigFunction")) {
                    console.warn("Youtube.js", "Failed to extract n/sig decipher function.");
                  }
                  a = _;
                  s = e.videoDetails.videoId;
                  document.body.setAttribute("savior-functions", JSON.stringify(a));
                  document.body.setAttribute("savior-meta-video-id", s);
                  n.p = 12;
                  n.p = 13;
                  document.body.setAttribute("savior-meta-formats-" + s, JSON.stringify(e.streamingData.formats));
                  n.n = 14;
                  return Object(r.sendMessage)({
                    type: o.b.SCRIPTING.INJECT,
                    file: "youtube/youtubejs",
                    videoId: e.videoDetails.videoId
                  });
                case 14:
                  if (!(c = n.v) || !c.length) {
                    l = document.body.getAttribute("savior-decoded-meta-formats");
                    c = JSON.parse(l || "[]");
                  }
                  u = D(c);
                  n.p = 15;
                  u.s();
                case 16:
                  if ((d = u.n()).done) {
                    n.n = 20;
                    break;
                  }
                  f = d.value;
                  n.p = 17;
                  p = new URL(f.url);
                  if (e.cver) {
                    p.searchParams.set("cver", encodeURIComponent(e.cver));
                  }
                  if (t) {
                    p.searchParams.set("pot", t);
                  }
                  f.url = p.href;
                  n.n = 19;
                  break;
                case 18:
                  n.p = 18;
                  g = n.v;
                  console.error(g);
                  return n.a(3, 19);
                case 19:
                  n.n = 16;
                  break;
                case 20:
                  n.n = 22;
                  break;
                case 21:
                  n.p = 21;
                  m = n.v;
                  u.e(m);
                case 22:
                  n.p = 22;
                  u.f();
                  return n.f(22);
                case 23:
                  n.n = 24;
                  return H(c);
                case 24:
                  return n.a(2, {
                    formats: c,
                    player_response: {
                      captions: e.captions
                    },
                    videoDetails: e.videoDetails
                  });
                case 25:
                  n.p = 25;
                  v = n.v;
                  console.error(v);
                case 26:
                  n.p = 26;
                  document.body.removeAttribute("savior-functions");
                  document.body.removeAttribute("savior-meta-video-id");
                  document.body.removeAttribute("savior-meta-formats-" + s);
                  document.body.removeAttribute("savior-decoded-meta-formats");
                  return n.f(26);
                case 27:
                  n.n = 29;
                  break;
                case 28:
                  throw new Error("PLAYER_FILE_NOT_FOUND");
                case 29:
                  return n.a(2);
              }
            }
            var y;
            var b;
            var _;
          }, n, this, [[17, 18], [15, 21, 22, 23], [13, 25], [12,, 26, 27], [7, 9]]);
        }));
      }
      static getMetadataFromVideoID(e, t) {
        return U(this, undefined, undefined, P().m(function n() {
          var r;
          var o;
          return P().w(function (n) {
            while (true) {
              switch (n.p = n.n) {
                case 0:
                  n.n = 1;
                  return this.fetchConfigs(e);
                case 1:
                  if (r = n.v) {
                    n.n = 2;
                    break;
                  }
                  throw new Error("Cannot fetch config");
                case 2:
                  n.p = 2;
                  return n.a(2, this.getNeededMetadataFromConfig(r, t));
                case 3:
                  n.p = 3;
                  o = n.v;
                  console.error(o);
                  throw o;
                case 4:
                  return n.a(2);
              }
            }
          }, n, this, [[2, 3]]);
        }));
      }
    }
    function V(e) {
      return e.height || e.bitrate;
    }
    function H(e) {
      return U(this, undefined, undefined, P().m(function t() {
        var n;
        var o;
        var i;
        var a;
        var s;
        var c;
        var l;
        var u;
        var d;
        return P().w(function (t) {
          while (true) {
            switch (t.n) {
              case 0:
                n = e.filter(e => e.mimeType.includes("video")).reduce((e, t) => V(e) < V(t) ? t : e, e[0]);
                o = e.filter(e => e.mimeType.includes("audio")).reduce((e, t) => V(e) < V(t) ? t : e, e[0]);
                if (n.url && o.url) {
                  t.n = 1;
                  break;
                }
                throw new Error("MISSING_URL_CIPHER");
              case 1:
                i = e => !!e && e >= 200 && e < 300;
                t.n = 2;
                return Promise.all([Object(r.fetchStatus)(n.url), Object(r.fetchStatus)(o.url)]);
              case 2:
                a = t.v;
                s = N(a, 2);
                c = s[0];
                l = s[1];
                if (i(c) && i(l)) {
                  t.n = 5;
                  break;
                }
                t.n = 3;
                return Object(r.sleep)(2000);
              case 3:
                t.n = 4;
                return Promise.all([i(c) ? Promise.resolve(c) : Object(r.fetchStatus)(n.url), i(l) ? Promise.resolve(l) : Object(r.fetchStatus)(o.url)]);
              case 4:
                u = t.v;
                d = N(u, 2);
                c = d[0];
                l = d[1];
              case 5:
                if (i(c) && i(l)) {
                  t.n = 6;
                  break;
                }
                throw new Error("REQUEST_SAMPLE_FAILED");
              case 6:
                return t.a(2);
            }
          }
        }, t);
      }));
    }
    M.playerScript = "";
    M.ssId = "";
    M.visitorData = "";
    M.apiKey = "";
    M.clientVersion = "";
    M.datasyncId = "";
    M.foundPlayerUrlFromConfig = "";
  };
