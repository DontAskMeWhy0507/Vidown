// Module 24 [storage] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  r.d(t, "a", function () {
    return U;
  });
  r.d(t, "b", function () {
    return j;
  });
  var n = r(0);
  var o = r(1);
  var i = r(37);
  function a(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return s(e, t);
          }
          var r = {}.toString.call(e).slice(8, -1);
          if (r === "Object" && e.constructor) {
            r = e.constructor.name;
          }
          if (r === "Map" || r === "Set") {
            return Array.from(e);
          } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
            return s(e, t);
          } else {
            return undefined;
          }
        }
      }(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
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
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        a = e.done;
        return e;
      },
      e: function (e) {
        c = true;
        i = e;
      },
      f: function () {
        try {
          if (!a && r.return != null) {
            r.return();
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
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var c = Symbol("WALK_STOP");
  var u = new Set(["AbortController", "AbortSignal", "Array", "ArrayBuffer", "AsyncContext", "Atomics", "AudioContext", "BigInt", "BigInt64Array", "BigUint64Array", "Blob", "Boolean", "BroadcastChannel", "Buffer", "CanvasRenderingContext2D", "clearImmediate", "clearInterval", "clearTimeout", "confirm", "console", "Crypto", "CustomEvent", "DataView", "Date", "decodeURI", "decodeURIComponent", "document", "Element", "encodeURI", "encodeURIComponent", "Error", "escape", "eval", "Event", "EventTarget", "fetch", "File", "FileReader", "Float32Array", "Float64Array", "FormData", "function", "global", "globalThis", "hasOwnProperty", "Headers", "History", "HTMLElement", "HTMLCollection", "IDBKeyRange", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "IntersectionObserver", "isFinite", "isNaN", "isPrototypeOf", "JSON", "location", "log", "Map", "Math", "MediaRecorder", "MediaSource", "MediaStream", "MemberExpression", "MutationObserver", "NaN", "navigator", "Node", "NodeList", "Number", "Object", "OfflineAudioContext", "parse", "parseFloat", "parseInt", "Performance", "process", "Promise", "prompt", "prototype", "Proxy", "ReadableStream", "Reflect", "RegExp", "requestAnimationFrame", "requestIdleCallback", "Request", "Response", "ResizeObserver", "Screen", "setImmediate", "setInterval", "setTimeout", "SharedArrayBuffer", "SharedWorker", "SourceBuffer", "split", "String", "stringify", "structuredClone", "SubtleCrypto", "Symbol", "TextDecoder", "TextEncoder", "this", "toString", "TransformStream", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URL", "URLSearchParams", "valueOf", "WeakMap", "WeakSet", "WebAssembly", "WebGLRenderingContext", "window", "Worker", "WritableStream", "XMLHttpRequest", "alert", "arguments", "atob", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "queueMicrotask"]);
  function l(e, t) {
    if (e && typeof e == "object") {
      for (var o = [{
          node: e,
          parent: null,
          exit: false
        }], i = [], a = typeof t == "function" ? t : t.enter ?? null, s = typeof t == "function" ? null : t.leave ?? null, u = false; !u && o.length > 0;) {
        var l = o.pop();
        var d = l.node;
        var p = l.parent;
        if (l.exit) {
          i.pop();
          if (s && s(d, p, i) === c) {
            u = true;
          }
        } else if (d && typeof d.type == "string") {
          var f = a ? a(d, p, i) : undefined;
          if (f !== c) {
            if (f !== true) {
              o.push({
                node: d,
                parent: p,
                exit: true
              });
              i.push(d);
              for (var h in d) {
                if (h !== "loc" && h !== "range" && h !== "start" && h !== "end" && Object.prototype.hasOwnProperty.call(d, h)) {
                  var m = d[h];
                  if (m) {
                    if (Array.isArray(m)) {
                      for (var g = m.length - 1; g >= 0; g--) {
                        var v = m[g];
                        if (v && typeof v.type == "string") {
                          o.push({
                            node: v,
                            parent: d,
                            exit: false
                          });
                        }
                      }
                    } else if (typeof m == "object" && typeof m.type == "string") {
                      o.push({
                        node: m,
                        parent: d,
                        exit: false
                      });
                    }
                  }
                }
              }
            }
          } else {
            u = true;
          }
        }
      }
    }
  }
  function d(e, t) {
    var r = function (e) {
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
    if (r) {
      return t.slice(r[0], r[1]);
    } else {
      return null;
    }
  }
  function p(e, t) {
    if (e.type !== "MemberExpression") {
      return null;
    }
    var r = [];
    for (var n = e; n && n.type === "MemberExpression";) {
      var o = n;
      var i = o.property;
      if (!i) {
        return null;
      }
      if (o.computed) {
        var a = d(i, t);
        if (!a) {
          return null;
        }
        r.unshift(`[${a.trim()}]`);
      } else {
        if (i.type !== "Identifier") {
          return null;
        }
        r.unshift("." + i.name);
      }
      n = o.object;
    }
    var s = null;
    if ((n == null ? undefined : n.type) === "Identifier") {
      s = n.name;
    } else if ((n == null ? undefined : n.type) === "ThisExpression") {
      s = "this";
    }
    if (s) {
      return s + r.join("");
    } else {
      return null;
    }
  }
  function f(e, t) {
    for (var r = e.object; r && r.type === "MemberExpression";) {
      var n = p(r, t);
      if (n) {
        return n;
      }
      r = r.object;
    }
    if ((r == null ? undefined : r.type) === "Identifier") {
      return r.name;
    } else if ((r == null ? undefined : r.type) === "ThisExpression") {
      return "this";
    } else {
      return null;
    }
  }
  function h(e, t, r) {
    if (r.type === "CallExpression" && r.callee.type === "Identifier" && e.declaredVariables.has(r.callee.name)) {
      return m(t, r.callee.name, g(e, r.arguments));
    }
    if (r.type === "VariableDeclarator" && r.init?.type === "FunctionExpression" && r.id.type === "Identifier") {
      return m(t, r.id.name, g(e, r.init.params));
    }
    if (r.type === "NewExpression" && r.callee.type === "MemberExpression" && r.callee.object.type === "Identifier") {
      var o = p(r.callee, e.getSource());
      if (!o) {
        return;
      }
      return m(t, o, g(e, r.arguments), true);
    }
  }
  function m(e, t, r, n = false) {
    return [`  function ${e}(${r.join(", ")}) {`, `    return ${n ? "new " : ""}${t}(${r.join(", ")});`, "  }"].join("\n");
  }
  function g(e, t) {
    var r;
    var n = [];
    var o = a(t);
    try {
      for (o.s(); !(r = o.n()).done;) {
        var i = r.value;
        if (i.type === "Identifier" && e.declaredVariables.has(i.name)) {
          n.push(i.name);
        } else if (i.type !== "Literal" || typeof i.value != "string" && typeof i.value != "number") {
          if (i.type === "UnaryExpression") {
            var s = d(i, e.getSource());
            if (s) {
              n.push(s.trim());
            }
          } else if (i.type === "AssignmentPattern" && i.left.type === "Identifier") {
            n.push(i.left.name);
          } else if (i.type === "Identifier") {
            n.push(i.name);
          } else if (!n.includes("input")) {
            n.push("input");
          }
        } else {
          n.push(JSON.stringify(i.value));
        }
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return n;
  }
  function v(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return y(e, t);
          }
          var r = {}.toString.call(e).slice(8, -1);
          if (r === "Object" && e.constructor) {
            r = e.constructor.name;
          }
          if (r === "Map" || r === "Set") {
            return Array.from(e);
          } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
            return y(e, t);
          } else {
            return undefined;
          }
        }
      }(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
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
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        a = e.done;
        return e;
      },
      e: function (e) {
        s = true;
        i = e;
      },
      f: function () {
        try {
          if (!a && r.return != null) {
            r.return();
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
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  class _ {
    constructor(e, t = {}) {
      this.dependentsTracker = new Map();
      this.pendingPrototypeAliasBinding = null;
      this.iifeParamName = null;
      this.declaredVariables = new Map();
      this.source = e;
      var r = t.extractions ? Array.isArray(t.extractions) ? t.extractions : [t.extractions] : [];
      this.extractionStates = r.map(e => ({
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
      var r;
      var n;
      var o;
      var i = v(this.programAst.body);
      try {
        for (i.s(); !(o = i.n()).done;) {
          var a = o.value;
          if (a.type === "ExpressionStatement" && a.expression.type === "CallExpression") {
            var s = a.expression;
            if (s.callee.type === "FunctionExpression") {
              var c = s.callee;
              var u = c.params.length > 0 ? c.params[0] : null;
              if (!this.iifeParamName && (u == null ? undefined : u.type) === "Identifier") {
                this.iifeParamName = u.name;
              }
              if (c.body?.type === "BlockStatement") {
                n = c.body;
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
      if (n) {
        var l;
        var d = v(n.body);
        try {
          for (d.s(); !(l = d.n()).done;) {
            var h = l.value;
            switch (h.type) {
              case "ExpressionStatement":
                var m = h.expression;
                if (m.type !== "AssignmentExpression") {
                  continue;
                }
                var g = m.left;
                var y = m.right;
                if (y.type === "MemberExpression" && !y.computed && y.property.type === "Identifier" && y.property.name === "prototype") {
                  var _ = p(y, this.source);
                  var b = g.type === "Identifier" ? g.name : p(g, this.source);
                  if (_) {
                    var w = this.declaredVariables.get(_.replace(".prototype", ""));
                    if (b && w) {
                      var E = new Set();
                      var D = b + ".";
                      this.pendingPrototypeAliasBinding = [D, w];
                      w.prototypeAliases.set(D, E);
                    }
                  }
                }
                if (g.type === "Identifier") {
                  var T = this.declaredVariables.get(g.name);
                  if (!T) {
                    continue;
                  }
                  T.node.init = y;
                  if (this.needsDependencyAnalysis(y)) {
                    T.dependencies = this.findDependencies(m.right, g.name);
                  }
                  if (this.onMatch(T.node, T)) {
                    return;
                  }
                } else if (m.left.type === "MemberExpression") {
                  var k = p(m.left, this.source);
                  var A = this.pendingPrototypeAliasBinding?.[0];
                  if (A && ((k == null ? undefined : k.includes(A)) || k === A.slice(0, -1))) {
                    var C = this.declaredVariables.get(((r = this.pendingPrototypeAliasBinding) === null || r === undefined ? undefined : r[1].name) || "");
                    if (C) {
                      var x = C.prototypeAliases.get(A);
                      var S = {
                        name: k,
                        node: h,
                        dependents: this.dependentsTracker.get(k) || new Set(),
                        predeclared: false,
                        prototypeAliases: new Map(),
                        dependencies: this.findDependencies(y, k)
                      };
                      if (x) {
                        x.add(S);
                      } else {
                        C.prototypeAliases.set(A, new Set([S]));
                      }
                    }
                  } else {
                    this.pendingPrototypeAliasBinding = null;
                  }
                  if (!k || this.declaredVariables.has(k)) {
                    continue;
                  }
                  var O = {
                    name: k,
                    node: h,
                    dependents: this.dependentsTracker.get(k) || new Set(),
                    predeclared: false,
                    prototypeAliases: new Map(),
                    dependencies: this.findDependencies(y, k)
                  };
                  var I = f(m.left, this.source);
                  if (I && I !== k && !I.startsWith("this.")) {
                    O.dependencies.add(I.replace(".prototype", ""));
                  }
                  if (this.dependentsTracker.has(k)) {
                    this.dependentsTracker.delete(k);
                  }
                  this.declaredVariables.set(k, O);
                  if (this.onMatch(h, O)) {
                    return;
                  }
                }
                break;
              case "VariableDeclaration":
                this.pendingPrototypeAliasBinding = null;
                var L;
                var R = v(h.declarations);
                try {
                  for (R.s(); !(L = R.n()).done;) {
                    var P = L.value;
                    if (P.id.type === "Identifier") {
                      var B = {
                        name: P.id.name,
                        node: P,
                        dependents: this.dependentsTracker.get(P.id.name) || new Set(),
                        prototypeAliases: new Map(),
                        dependencies: new Set(),
                        predeclared: false
                      };
                      var M = P.init;
                      if (M || h.kind !== "var") {
                        if (M && this.needsDependencyAnalysis(M)) {
                          B.dependencies = this.findDependencies(M, B.name);
                        }
                      } else {
                        B.predeclared = true;
                      }
                      if (this.dependentsTracker.has(B.name)) {
                        this.dependentsTracker.delete(B.name);
                      }
                      this.declaredVariables.set(B.name, B);
                      if (this.onMatch(P, B)) {
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
      var r;
      var n = false;
      var o = false;
      var i = v(this.extractionStates);
      try {
        for (i.s(); !(r = i.n()).done;) {
          var a = r.value;
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
            n = true;
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
      return !!n && this.shouldStopTraversal();
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
      var r = v(this.extractionStates);
      try {
        for (r.s(); !(e = r.n()).done;) {
          var n = e.value;
          if (n.config.stopWhenReady !== false) {
            t = true;
            if (!n.node) {
              return false;
            }
            if (!n.ready) {
              return false;
            }
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      return t;
    }
    areDependenciesResolved(e, t = new Set()) {
      if (!e || e.size === 0) {
        return true;
      }
      var r;
      var n = v(e);
      try {
        for (n.s(); !(r = n.n()).done;) {
          var o = r.value;
          if (o && !u.has(o) && o !== this.iifeParamName && !t.has(o)) {
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
        n.e(e);
      } finally {
        n.f();
      }
      return true;
    }
    findDependencies(e, t) {
      var n = new Set();
      if (!e) {
        return n;
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
              var r;
              var n = v(e.properties);
              try {
                for (n.s(); !(r = n.n()).done;) {
                  var o = r.value;
                  if (o.type === "RestElement") {
                    c(o.argument, t);
                  } else if (o.type === "Property") {
                    c(o.value, t);
                  }
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
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
      l(e, {
        enter: (e, r) => {
          var d;
          switch (e.type) {
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
              var m = e.type === "FunctionDeclaration";
              var g = "id" in e ? e.id?.name : undefined;
              if (m && g) {
                i().names.add(g);
              }
              var y = {
                names: new Set(),
                type: "function"
              };
              if (e.type === "FunctionExpression" && g) {
                y.names.add(g);
              }
              ((e, t) => {
                if (e == null ? undefined : e.params) {
                  var r;
                  var n = v(e.params);
                  try {
                    for (n.s(); !(r = n.n()).done;) {
                      var o = r.value;
                      c(o, t);
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
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
              var _ = new Set();
              if (e.param) {
                c(e.param, _);
              }
              o.push({
                names: _,
                type: "block"
              });
              break;
            case "VariableDeclaration":
              var b;
              var w = e.kind === "var" && (d = function (e, t) {
                for (var r = e.length - 1; r >= 0; r--) {
                  var n = e[r];
                  if (t(n, r, e)) {
                    return n;
                  }
                }
              }(o, e => e.type === "function")) !== null && d !== undefined ? d : i();
              var E = v(e.declarations);
              try {
                for (E.s(); !(b = E.n()).done;) {
                  var D = b.value;
                  c(D.id, w.names);
                }
              } catch (e) {
                E.e(e);
              } finally {
                E.f();
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
              if ((r == null ? undefined : r.type) === "Property" && r.key === e && !r.computed) {
                return;
              }
              if ((r == null ? undefined : r.type) === "MethodDefinition" && r.key === e && !r.computed) {
                return;
              }
              if ((r == null ? undefined : r.type) === "MemberExpression" && r.property === e && !r.computed) {
                if (r.object.type === "ThisExpression") {
                  return;
                }
                var T = p(r, this.source);
                if (!T) {
                  return;
                }
                var k = this.declaredVariables.get(T);
                if (k) {
                  k.dependents.add(t);
                  n.add(T);
                } else if (r.object.type === "Identifier") {
                  var A = r.object.name;
                  var C = this.declaredVariables.get(A);
                  if ((C || A === this.iifeParamName) && !a(A) && !u.has(A)) {
                    if (C != null) {
                      C.dependents.add(t);
                    }
                    n.add(T);
                    var x = this.dependentsTracker.get(T);
                    if (x) {
                      x.add(t);
                    } else {
                      this.dependentsTracker.set(T, new Set([t]));
                    }
                  }
                }
                return;
              }
              if ((r == null ? undefined : r.type) === "MetaProperty") {
                return;
              }
              if (a(e.name) || u.has(e.name)) {
                return;
              }
              n.add(e.name);
              var S = this.declaredVariables.get(e.name);
              if (S) {
                S.dependents.add(t);
              } else {
                var O = this.dependentsTracker.get(e.name);
                if (O) {
                  O.add(t);
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
      return n;
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
      var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var o;
        var i;
        var a;
        var s = [];
        var c = true;
        var u = false;
        try {
          i = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            c = false;
          } else {
            for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = true);
          }
        } catch (e) {
          u = true;
          o = e;
        } finally {
          try {
            if (!c && r.return != null && (a = r.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw o;
            }
          }
        }
        return s;
      }
    }(e, t) || E(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function w(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = E(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
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
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        a = e.done;
        return e;
      },
      e: function (e) {
        s = true;
        i = e;
      },
      f: function () {
        try {
          if (!a && r.return != null) {
            r.return();
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
    if (e) {
      if (typeof e == "string") {
        return D(e, t);
      }
      var r = {}.toString.call(e).slice(8, -1);
      if (r === "Object" && e.constructor) {
        r = e.constructor.name;
      }
      if (r === "Map" || r === "Set") {
        return Array.from(e);
      } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
        return D(e, t);
      } else {
        return undefined;
      }
    }
  }
  function D(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  class T {
    constructor(e) {
      this.analyzer = e;
    }
    areSafeArgs(e, t = "strict") {
      return (e ?? []).every(e => !!e && e.type !== "SpreadElement" && this.isSafeInitializer(e, t));
    }
    isSafeInitializer(e) {
      var t;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "strict";
      if (!e) {
        return true;
      }
      switch (e.type) {
        case "ClassExpression":
          return true;
        case "Literal":
          var n = e;
          return typeof n.value == "string" || typeof n.value == "number" || typeof n.value == "boolean" || n.value === null || Boolean(n.regex);
        case "TemplateLiteral":
          return e.expressions.every(e => this.isSafeInitializer(e, r));
        case "ArrayExpression":
          return e.elements.every(e => !e || e.type !== "SpreadElement" && this.isSafeInitializer(e, r));
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
          if (e.callee.type === "Identifier" && u.has(e.callee.name)) {
            return this.areSafeArgs(e.arguments, r);
          }
          if (e.callee.type === "MemberExpression") {
            if (!this.isSafeInitializer(e.callee.object, r)) {
              return false;
            }
            if (r === "strict") {
              var o = e.callee.property.type === "Identifier" ? e.callee.property.name : "";
              if (e.callee.computed || !u.has(o)) {
                return false;
              }
            }
            return this.areSafeArgs(e.arguments, r);
          }
          return false;
        case "NewExpression":
          if (e.callee.type === "Identifier") {
            if (u.has(e.callee.name)) {
              return this.areSafeArgs(e.arguments, r);
            }
            if (r === "loose") {
              return this.areSafeArgs(e.arguments, r);
            }
          }
          return false;
        case "UnaryExpression":
          return this.isSafeInitializer(e.argument, r);
        case "FunctionExpression":
        case "ArrowFunctionExpression":
        case "Identifier":
          return true;
        case "MemberExpression":
          if (r === "loose") {
            return (!e.computed || !!this.isSafeInitializer(e.property, r)) && this.isSafeInitializer(e.object, r);
          } else {
            return !e.computed && e.property.type === "Identifier" && e.property.name === "prototype";
          }
        case "LogicalExpression":
        case "BinaryExpression":
          return this.isSafeInitializer(e.left, r) && this.isSafeInitializer(e.right, r);
        case "ConditionalExpression":
          return r === "loose" && this.isSafeInitializer(e.test, r) && this.isSafeInitializer(e.consequent, r) && this.isSafeInitializer(e.alternate, r);
        case "SequenceExpression":
          return r === "loose" && e.expressions.every(e => this.isSafeInitializer(e, r));
        case "AssignmentExpression":
          if (e.left.type !== "MemberExpression" || e.left.computed) {
            if (e.left.type === "Identifier" && this.analyzer.declaredVariables.has(e.left.name)) {
              return this.isSafeInitializer(e.right, r);
            }
          } else {
            var i = e.left.object;
            if (i.type === "Identifier" && ((t = this.analyzer.declaredVariables.get(i.name)) === null || t === undefined ? undefined : t.node.init) !== undefined) {
              return this.isSafeInitializer(e.right, r);
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
      var r;
      var n;
      var o;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var a = this.analyzer.getSource();
      var s = this.analyzer.declaredVariables;
      var c = i.disallowSideEffectInitializers;
      var u = typeof c == "object" && c !== null && (r = c.mode) !== null && r !== undefined ? r : "strict";
      var l = Boolean(c);
      var f = e.type === "AssignmentExpression" ? e : e.type === "ExpressionStatement" && e.expression.type === "AssignmentExpression" ? e.expression : null;
      var h = f && f.operator === "=" ? f.right : e.type === "VariableDeclarator" ? e.init : null;
      var m = l && h && !this.isSafeInitializer(h, u);
      var g = this.getInitializerFallback(h);
      var v = g;
      if (!m && h) {
        if (t || h.type !== "Identifier" || s.has(h.name)) {
          var y = f == null ? undefined : f.left;
          if (((h == null ? undefined : h.type) !== "MemberExpression" || !!h.computed || h.property.type !== "Identifier" || h.property.name !== "prototype") && (y == null ? undefined : y.type) === "MemberExpression" && h && l && y.object.type === "Identifier" && h.type !== "FunctionExpression" && h.type !== "ArrowFunctionExpression" && h.type !== "LogicalExpression" && h.type !== "ClassExpression") {
            return `  // Skipped ${p(y, a)} assignment.`;
          }
          v = ((n = d(h, a)) === null || n === undefined ? undefined : n.trim().replace(/;\s*$/, "")) || "undefined // [JsExtractor] Failed to extract initializer source.";
        } else {
          v = g;
        }
      }
      if (!m && !!h && h.type === "SequenceExpression" && !v.startsWith("(")) {
        v = `(${v})`;
      }
      var _ = `${e.type === "VariableDeclarator" && e.id.type === "Identifier" ? e.id.name : f && f.left.type === "Identifier" ? f.left.name : (f == null ? undefined : f.type) === "AssignmentExpression" ? (o = p(f.left, a)) === null || o === undefined ? undefined : o.trim() : "unknown"} = ${v};`;
      if (e.type === "VariableDeclarator" && e.init && !t) {
        return "  var " + _;
      } else {
        return "  " + _;
      }
    }
    buildScript(e) {
      var n = this;
      var o = e.maxDepth;
      var i = o === undefined ? Infinity : o;
      var a = e.forceVarPredeclaration;
      var s = a !== undefined && a;
      var c = e.exportRawValues;
      var u = c !== undefined && c;
      var l = e.rawValueOnly;
      var f = l === undefined ? [] : l;
      var m = this.analyzer.getExtractedMatches();
      var g = new Set(m.map(e => {
        return e.metadata?.name || "";
      }));
      var v = [];
      var y = new Set();
      var _ = new Map();
      var E = {};
      function D(e) {
        if (e && !e.includes(".")) {
          y.add(e);
        }
      }
      var T;
      function k(t, r = 0, o) {
        if (t && !(r > i)) {
          var a;
          var c = w(t.dependencies);
          try {
            for (c.s(); !(a = c.n()).done;) {
              var u = a.value;
              if (o && o !== u) {
                if (!g.has(o)) {
                  continue;
                }
                o = undefined;
              }
              if (!g.has(u)) {
                g.add(u);
                var l = n.analyzer.declaredVariables.get(u);
                if (l) {
                  var d = s || l.predeclared;
                  if (d) {
                    D(u);
                  }
                  k(l, r + 1, o);
                  v.push(n.renderNode(l.node, d, e));
                  if (l.prototypeAliases.size > 0) {
                    var p;
                    var f = w(l.prototypeAliases);
                    try {
                      for (f.s(); !(p = f.n()).done;) {
                        var h;
                        var m = b(p.value, 2);
                        var y = m[1];
                        var _ = w(y);
                        try {
                          for (_.s(); !(h = _.n()).done;) {
                            var E = h.value;
                            k(E, r);
                            v.push(n.renderNode(E.node, d, e));
                          }
                        } catch (e) {
                          _.e(e);
                        } finally {
                          _.f();
                        }
                      }
                    } catch (e) {
                      f.e(e);
                    } finally {
                      f.f();
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
      var A = w(m);
      try {
        for (A.s(); !(T = A.n()).done;) {
          var C = T.value;
          var x = C.config.friendlyName;
          var S = x && f.includes(x);
          if (C.metadata) {
            if (!S) {
              v.push(`  //#region --- start [${x || "Unknown"}] ---`);
            }
            var O = (s || C.metadata.predeclared) && !S;
            var I = C.config.onlyProcessMatchContext;
            if (O) {
              D(C.metadata.name);
            }
            if (C.config.collectDependencies && !S) {
              var L = undefined;
              var R = C.matchContext;
              if ((R == null ? undefined : R.type) === "NewExpression" && I) {
                if (R.callee.type === "Identifier") {
                  L = R.callee.name;
                } else if (R.callee.type === "MemberExpression") {
                  L = p(R.callee, this.analyzer.getSource()) || undefined;
                }
              }
              k(C.metadata, undefined, L);
            }
            if (C.matchContext && x && (_.set(x, C.matchContext), u)) {
              var P = C.matchContext;
              var B = this.analyzer.getSource();
              var M = null;
              M = P.type === "Property" ? d(P.value, B) : P.type === "Identifier" ? P.name : d(P, B);
              E[x] = M;
            }
            if (!S) {
              if (!I) {
                v.push(this.renderNode(C.metadata.node, O, e));
              }
              v.push(`  //#endregion --- end [${x || "Unknown"}] ---\n`);
            }
          }
        }
      } catch (e) {
        A.e(e);
      } finally {
        A.f();
      }
      var F = [];
      F.push("const __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis :");
      F.push("  typeof self !== 'undefined' ? self :");
      F.push("  typeof window !== 'undefined' ? window :");
      F.push("  typeof global !== 'undefined' ? global : {};\n");
      F.push(`const exportedVars = (function(${this.analyzer.iifeParamName}) {`);
      F.push("  const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);");
      F.push("  const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};");
      F.push("  const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n");
      if (y.size > 0) {
        F.push(`  var ${Array.from(y).join(", ")};\n`);
      }
      F.push(v.join("\n"));
      var U;
      var N = [];
      var j = w(_);
      try {
        for (j.s(); !(U = j.n()).done;) {
          var q = b(U.value, 2);
          var H = q[0];
          var V = q[1];
          var W = null;
          if (V.type === "Identifier") {
            var z = this.analyzer.declaredVariables.get(V.name);
            if ((z == null ? undefined : z.node)?.type === "VariableDeclarator" && z.node.init?.type === "FunctionExpression") {
              W = z.node;
            }
          } else if (V.type === "CallExpression" || V.type === "NewExpression" || V.type === "VariableDeclarator") {
            W = V;
          }
          if (W) {
            var Y = h(this.analyzer, H, W);
            if (Y) {
              F.push(Y + "\n");
              N.push(H);
            }
          }
        }
      } catch (e) {
        j.e(e);
      } finally {
        j.f();
      }
      if (u) {
        var G = JSON.stringify(E, null, "  ".length).split("\n");
        var Q = `${G[0]}\n${G.slice(1).map(e => "  " + e).join("\n")}`;
        F.push(`  const rawValues = ${Q};\n`);
        N.push("rawValues");
      }
      F.push(`  return { ${N.join(", ")} };`);
      F.push("})({});\n");
      return {
        output: F.join("\n"),
        exported: N,
        exportedRawValues: u ? E : undefined
      };
    }
  }
  function k(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = C(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
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
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        a = e.done;
        return e;
      },
      e: function (e) {
        s = true;
        i = e;
      },
      f: function () {
        try {
          if (!a && r.return != null) {
            r.return();
          }
        } finally {
          if (s) {
            throw i;
          }
        }
      }
    };
  }
  function A(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var o;
        var i;
        var a;
        var s = [];
        var c = true;
        var u = false;
        try {
          i = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            c = false;
          } else {
            for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = true);
          }
        } catch (e) {
          u = true;
          o = e;
        } finally {
          try {
            if (!c && r.return != null && (a = r.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw o;
            }
          }
        }
        return s;
      }
    }(e, t) || C(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function C(e, t) {
    if (e) {
      if (typeof e == "string") {
        return x(e, t);
      }
      var r = {}.toString.call(e).slice(8, -1);
      if (r === "Object" && e.constructor) {
        r = e.constructor.name;
      }
      if (r === "Map" || r === "Set") {
        return Array.from(e);
      } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
        return x(e, t);
      } else {
        return undefined;
      }
    }
  }
  function x(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function S(e) {
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
    var r = A(t.params, 3);
    var n = r[0];
    var o = r[1];
    var i = r[2];
    if (n.type !== "Identifier" || o.type !== "AssignmentPattern" || i.type !== "AssignmentPattern") {
      return false;
    }
    var a;
    var s = t.body;
    var c = false;
    var u = false;
    var l = k((s == null ? undefined : s.body) || []);
    try {
      for (l.s(); !(a = l.n()).done;) {
        var d = a.value;
        if (d.type === "ExpressionStatement") {
          var p = d.expression;
          if (p.type === "AssignmentExpression" && p.operator === "=" && p.left.type === "Identifier" && p.left.name === n.name) {
            var f = p.right;
            if (f.type === "NewExpression" && f.callee.type === "MemberExpression") {
              c = true;
            }
          }
          if (p.type === "CallExpression" && p.callee.type === "MemberExpression") {
            var h = p.arguments;
            if (h.length === 2 && h[0].type === "Literal" && h[0].value === "alr" && h[1].type === "Literal" && h[1].value === "yes") {
              u = true;
            }
          }
        }
      }
    } catch (e) {
      l.e(e);
    } finally {
      l.f();
    }
    return !!c && !!u && e;
  }
  function O(e) {
    if (e.type !== "VariableDeclarator" || e.init?.type !== "FunctionExpression") {
      return false;
    }
    var r = e.init.body;
    if (!r) {
      return false;
    }
    var n = null;
    l(r, e => {
      if (e.type === "ObjectExpression") {
        var t;
        var r = k(e.properties);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var o = t.value;
            if (o.type === "Property" && o.key.type === "Identifier" && o.key.name === "signatureTimestamp") {
              n = o;
              return c;
            }
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      }
    });
    return n || false;
  }
  function I(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var o;
        var i;
        var a;
        var s = [];
        var c = true;
        var u = false;
        try {
          i = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            c = false;
          } else {
            for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = true);
          }
        } catch (e) {
          u = true;
          o = e;
        } finally {
          try {
            if (!c && r.return != null && (a = r.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
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
  function L(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = R(e)) || t && e && typeof e.length == "number") {
        if (r) {
          e = r;
        }
        var n = 0;
        function o() {}
        return {
          s: o,
          n: function () {
            if (n >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[n++]
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
        r = r.call(e);
      },
      n: function () {
        var e = r.next();
        a = e.done;
        return e;
      },
      e: function (e) {
        s = true;
        i = e;
      },
      f: function () {
        try {
          if (!a && r.return != null) {
            r.return();
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
        return P(e, t);
      }
      var r = {}.toString.call(e).slice(8, -1);
      if (r === "Object" && e.constructor) {
        r = e.constructor.name;
      }
      if (r === "Map" || r === "Set") {
        return Array.from(e);
      } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
        return P(e, t);
      } else {
        return undefined;
      }
    }
  }
  function P(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function B() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e;
    var t;
    var r = typeof Symbol == "function" ? Symbol : {};
    var n = r.iterator || "@@iterator";
    var o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof s ? n : s;
      var u = Object.create(c.prototype);
      M(u, "_invoke", function (r, n, o) {
        var i;
        var s;
        var c;
        var u = 0;
        var l = o || [];
        var d = false;
        var p = {
          p: 0,
          n: 0,
          v: e,
          a: f,
          f: f.bind(e, 4),
          d: function (t, r) {
            i = t;
            s = 0;
            c = e;
            p.n = r;
            return a;
          }
        };
        function f(r, n) {
          s = r;
          c = n;
          t = 0;
          for (; !d && u && !o && t < l.length; t++) {
            var o;
            var i = l[t];
            var f = p.p;
            var h = i[2];
            if (r > 3) {
              if (o = h === n) {
                c = i[(s = i[4]) ? 5 : (s = 3, 3)];
                i[4] = i[5] = e;
              }
            } else if (i[0] <= f) {
              if (o = r < 2 && f < i[1]) {
                s = 0;
                p.v = n;
                p.n = i[1];
              } else if (f < h && (o = r < 3 || i[0] > n || n > h)) {
                i[4] = r;
                i[5] = n;
                p.n = h;
                s = 0;
              }
            }
          }
          if (o || r > 1) {
            return a;
          }
          d = true;
          throw n;
        }
        return function (o, l, h) {
          if (u > 1) {
            throw TypeError("Generator is already running");
          }
          if (d && l === 1) {
            f(l, h);
          }
          s = l;
          c = h;
          while ((t = s < 2 ? e : c) || !d) {
            if (!i) {
              if (s) {
                if (s < 3) {
                  if (s > 1) {
                    p.n = -1;
                  }
                  f(s, c);
                } else {
                  p.n = c;
                }
              } else {
                p.v = c;
              }
            }
            try {
              u = 2;
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
              } else if ((t = (d = p.n < 0) ? c : r.call(n, p)) !== a) {
                break;
              }
            } catch (t) {
              i = e;
              s = 1;
              c = t;
            } finally {
              u = 1;
            }
          }
          return {
            value: t,
            done: d
          };
        };
      }(r, o, i), true);
      return u;
    }
    var a = {};
    function s() {}
    function c() {}
    function u() {}
    t = Object.getPrototypeOf;
    var l = [][n] ? t(t([][n]())) : (M(t = {}, n, function () {
      return this;
    }), t);
    var d = u.prototype = s.prototype = Object.create(l);
    function p(e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, u);
      } else {
        e.__proto__ = u;
        M(e, o, "GeneratorFunction");
      }
      e.prototype = Object.create(d);
      return e;
    }
    c.prototype = u;
    M(d, "constructor", u);
    M(u, "constructor", c);
    c.displayName = "GeneratorFunction";
    M(u, o, "GeneratorFunction");
    M(d);
    M(d, o, "Generator");
    M(d, n, function () {
      return this;
    });
    M(d, "toString", function () {
      return "[object Generator]";
    });
    return (B = function () {
      return {
        w: i,
        m: p
      };
    })();
  }
  function M(e, t, r, n) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (e) {
      o = 0;
    }
    (M = function (e, t, r, n) {
      function i(t, r) {
        M(e, t, function (e) {
          return this._invoke(t, r, e);
        });
      }
      if (t) {
        if (o) {
          o(e, t, {
            value: r,
            enumerable: !n,
            configurable: !n,
            writable: !n
          });
        } else {
          e[t] = r;
        }
      } else {
        i("next", 0);
        i("throw", 1);
        i("return", 2);
      }
    })(e, t, r, n);
  }
  function F(e, t, r, n) {
    return new (r ||= Promise)(function (o, i) {
      function a(e) {
        try {
          c(n.next(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          o(e.value);
        } else {
          (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((n = n.apply(e, t || [])).next());
    });
  }
  class U {
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
      return F(this, undefined, undefined, B().m(function f() {
        var h;
        var m;
        var g;
        var v;
        var y;
        var _;
        var b;
        var w;
        var E;
        var D;
        return B().w(function (f) {
          while (true) {
            switch (f.p = f.n) {
              case 0:
                if (!(h = `https://${location.hostname}/watch?v=${e}&has_verified=1`).match(/(youtube-nocookie)/i)) {
                  f.n = 2;
                  break;
                }
                f.n = 1;
                return Object(n.sendMessage)({
                  type: o.b.CORS_FETCH,
                  data: {
                    url: `https://www.youtube.com/watch?v=${e}&has_verified=1`,
                    responseType: "text"
                  }
                });
              case 1:
                m = f.v.data;
                f.n = 4;
                break;
              case 2:
                f.n = 3;
                return fetch(h).then(e => e.text()).catch(() => Object(n.send)("GET", h).then(e => e.responseText));
              case 3:
                m = f.v;
              case 4:
                this.visitorData = m.match(this.VISITOR_DATA_RX)?.[1];
                this.apiKey = m.match(this.INNERTUBE_API_KEY_RX)?.[1];
                this.clientVersion = m.match(this.INNERTUBE_CONTEXT_CLIENT_VERSION_RX)?.[1];
                this.datasyncId = (s = m.match(this.DATASYNC_ID_RX)?.[1]) === null || s === undefined ? undefined : s.replace(/\|/g, "");
                if (g = m.match(this.USER_SESSION_ID_RX)) {
                  this.ssId = g[1];
                }
                v = m.slice(0, m.indexOf("var meta =") + 1 || undefined).match(this.PLAYER_CONFIG_RX)?.[1] || "";
                try {
                  if (v) {
                    JSON.parse(v);
                  }
                } catch (e) {
                  v = v.slice(0, v.indexOf("};<") + 1 || undefined).match(/({.+});?/)?.[1] || "";
                }
                f.n = 5;
                return chrome.storage.local.get(o.w);
              case 5:
                y = f.v;
                if (_ = y[o.w]?.playerUrl || m.match(this.PLAYER_URL_RX)?.[2] || m.match(this.PLAYER_URL_MUSIC_RX)?.[1]) {
                  this.foundPlayerUrlFromConfig = _;
                }
                if (this.playerScript) {
                  f.n = 7;
                  break;
                }
                f.n = 6;
                return fetch(_).then(e => e.text());
              case 6:
                this.playerScript = f.v;
              case 7:
                if (!(b = this.parseConfig(v))) {
                  f.n = 8;
                  break;
                }
                return f.a(2, b);
              case 8:
                f.p = 8;
                w = new DOMParser();
                (E = w.parseFromString(m, "text/html")).querySelectorAll("script");
                D = Array.from(E.querySelectorAll("body script")).map(e => {
                  var t;
                  return ((t = e.innerText) === null || t === undefined ? undefined : t.match(this.PLAYER_CONFIG_RX))?.[1];
                }).find(e => !!e);
                return f.a(2, this.parseConfig(D || ""));
              case 9:
                f.p = 9;
                f.v;
                return f.a(2, null);
            }
          }
        }, f, this, [[8, 9]]);
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
        Object(n.devLog)(e);
        return null;
      }
    }
    static getNeededMetadataFromConfig(e, t) {
      return F(this, undefined, undefined, B().m(function r() {
        var i;
        var a;
        var s;
        var c;
        var u;
        var l;
        var d;
        var p;
        var f;
        var h;
        var m;
        var g;
        var v;
        return B().w(function (r) {
          while (true) {
            switch (r.p = r.n) {
              case 0:
                if (e && e.playabilityStatus && e.playabilityStatus.status) {
                  r.n = 1;
                  break;
                }
                throw new Error("Invalid playabilityStatus");
              case 1:
                if (e.playabilityStatus.status !== "LOGIN_REQUIRED") {
                  r.n = 2;
                  break;
                }
                throw new Error("LOGIN_REQUIRED");
              case 2:
                if (e.playabilityStatus.status === "OK") {
                  r.n = 3;
                  break;
                }
                throw new Error("API_ERROR");
              case 3:
                if (e.playabilityStatus.reason !== "This video is unavailable") {
                  r.n = 4;
                  break;
                }
                throw new Error("VIDEO_UNAVAILABLE");
              case 4:
                if (e.videoDetails.shortDescription !== "Video Not Available") {
                  r.n = 5;
                  break;
                }
                throw new Error("VIDEO_NOT_AVAILABLE");
              case 5:
                if (e.streamingData) {
                  r.n = 6;
                  break;
                }
                throw new Error("INVALID_STREAMING_DATA");
              case 6:
                e.streamingData.formats = [...(e.streamingData.adaptiveFormats || []), ...(e.streamingData.formats || [])];
                if (!((i = e.streamingData.formats.filter(e => e.url)).length / e.streamingData.formats.length > 0.4)) {
                  r.n = 10;
                  break;
                }
                r.p = 7;
                r.n = 8;
                return j(i);
              case 8:
                return r.a(2, {
                  formats: e.streamingData.formats,
                  player_response: {
                    captions: e.captions
                  },
                  videoDetails: e.videoDetails
                });
              case 9:
                r.p = 9;
                h = r.v;
                console.log(h);
              case 10:
                if (!(e.streamingData.formats.filter(e => !e.url && !e.signatureCipher && !e.cipher).length / e.streamingData.formats.length >= 0.4)) {
                  r.n = 11;
                  break;
                }
                throw new Error("MISSING_URL_CIPHER");
              case 11:
                if (!this.playerURL) {
                  r.n = 28;
                  break;
                }
                y = this.playerScript;
                b = undefined;
                w = undefined;
                b = new _(y, {
                  extractions: [{
                    friendlyName: "nsigFunction",
                    match: S
                  }, {
                    friendlyName: "signatureTimestampVar",
                    match: O,
                    collectDependencies: false
                  }]
                });
                if (!(w = new T(b).buildScript({
                  disallowSideEffectInitializers: true,
                  exportRawValues: true,
                  rawValueOnly: ["signatureTimestampVar"]
                })).exported.includes("nsigFunction")) {
                  console.warn("Youtube.js", "Failed to extract n/sig decipher function.");
                }
                a = w;
                s = e.videoDetails.videoId;
                document.body.setAttribute("savior-functions", JSON.stringify(a));
                document.body.setAttribute("savior-meta-video-id", s);
                r.p = 12;
                r.p = 13;
                document.body.setAttribute("savior-meta-formats-" + s, JSON.stringify(e.streamingData.formats));
                r.n = 14;
                return Object(n.sendMessage)({
                  type: o.b.SCRIPTING.INJECT,
                  file: "youtube/youtubejs",
                  videoId: e.videoDetails.videoId
                });
              case 14:
                if (!(c = r.v) || !c.length) {
                  u = document.body.getAttribute("savior-decoded-meta-formats");
                  c = JSON.parse(u || "[]");
                }
                l = L(c);
                r.p = 15;
                l.s();
              case 16:
                if ((d = l.n()).done) {
                  r.n = 20;
                  break;
                }
                p = d.value;
                r.p = 17;
                f = new URL(p.url);
                if (e.cver) {
                  f.searchParams.set("cver", encodeURIComponent(e.cver));
                }
                if (t) {
                  f.searchParams.set("pot", t);
                }
                p.url = f.href;
                r.n = 19;
                break;
              case 18:
                r.p = 18;
                m = r.v;
                console.error(m);
                return r.a(3, 19);
              case 19:
                r.n = 16;
                break;
              case 20:
                r.n = 22;
                break;
              case 21:
                r.p = 21;
                g = r.v;
                l.e(g);
              case 22:
                r.p = 22;
                l.f();
                return r.f(22);
              case 23:
                r.n = 24;
                return j(c);
              case 24:
                return r.a(2, {
                  formats: c,
                  player_response: {
                    captions: e.captions
                  },
                  videoDetails: e.videoDetails
                });
              case 25:
                r.p = 25;
                v = r.v;
                console.error(v);
              case 26:
                r.p = 26;
                document.body.removeAttribute("savior-functions");
                document.body.removeAttribute("savior-meta-video-id");
                document.body.removeAttribute("savior-meta-formats-" + s);
                document.body.removeAttribute("savior-decoded-meta-formats");
                return r.f(26);
              case 27:
                r.n = 29;
                break;
              case 28:
                throw new Error("PLAYER_FILE_NOT_FOUND");
              case 29:
                return r.a(2);
            }
          }
          var y;
          var b;
          var w;
        }, r, this, [[17, 18], [15, 21, 22, 23], [13, 25], [12,, 26, 27], [7, 9]]);
      }));
    }
    static getMetadataFromVideoID(e, t) {
      return F(this, undefined, undefined, B().m(function r() {
        var n;
        var o;
        return B().w(function (r) {
          while (true) {
            switch (r.p = r.n) {
              case 0:
                r.n = 1;
                return this.fetchConfigs(e);
              case 1:
                if (n = r.v) {
                  r.n = 2;
                  break;
                }
                throw new Error("Cannot fetch config");
              case 2:
                r.p = 2;
                return r.a(2, this.getNeededMetadataFromConfig(n, t));
              case 3:
                r.p = 3;
                o = r.v;
                console.error(o);
                throw o;
              case 4:
                return r.a(2);
            }
          }
        }, r, this, [[2, 3]]);
      }));
    }
  }
  function N(e) {
    return e.height || e.bitrate;
  }
  function j(e) {
    return F(this, undefined, undefined, B().m(function t() {
      var r;
      var o;
      var i;
      var a;
      var s;
      var c;
      var u;
      var l;
      var d;
      return B().w(function (t) {
        while (true) {
          switch (t.n) {
            case 0:
              r = e.filter(e => e.mimeType.includes("video")).reduce((e, t) => N(e) < N(t) ? t : e, e[0]);
              o = e.filter(e => e.mimeType.includes("audio")).reduce((e, t) => N(e) < N(t) ? t : e, e[0]);
              if (r.url && o.url) {
                t.n = 1;
                break;
              }
              throw new Error("MISSING_URL_CIPHER");
            case 1:
              i = e => !!e && e >= 200 && e < 300;
              t.n = 2;
              return Promise.all([Object(n.fetchStatus)(r.url), Object(n.fetchStatus)(o.url)]);
            case 2:
              a = t.v;
              s = I(a, 2);
              c = s[0];
              u = s[1];
              if (i(c) && i(u)) {
                t.n = 5;
                break;
              }
              t.n = 3;
              return Object(n.sleep)(2000);
            case 3:
              t.n = 4;
              return Promise.all([i(c) ? Promise.resolve(c) : Object(n.fetchStatus)(r.url), i(u) ? Promise.resolve(u) : Object(n.fetchStatus)(o.url)]);
            case 4:
              l = t.v;
              d = I(l, 2);
              c = d[0];
              u = d[1];
            case 5:
              if (i(c) && i(u)) {
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
  U.playerScript = "";
  U.ssId = "";
  U.visitorData = "";
  U.apiKey = "";
  U.clientVersion = "";
  U.datasyncId = "";
  U.foundPlayerUrlFromConfig = "";
};
