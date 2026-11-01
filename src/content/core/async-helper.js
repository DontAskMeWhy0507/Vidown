// Module 123 - Savior Async generator and Promise runner
export default function(t, e, r) {
  "use strict";
  function n(t2) {
    return function(...e2) {
      var r2 = e2.pop();
      return t2.call(this, e2, r2);
    };
  }
  r.d(e, "a", (function() {
    return V;
  }));
  var i = "function" == typeof queueMicrotask && queueMicrotask, o = "function" == typeof setImmediate && setImmediate, a = "object" == typeof process && "function" == typeof process.nextTick;
  function s(t2) {
    setTimeout(t2, 0);
  }
  function u(t2) {
    return (e2, ...r2) => t2(() => e2(...r2));
  }
  var c = u(i ? queueMicrotask : o ? setImmediate : a ? process.nextTick : s);
  function l(t2) {
    return h(t2) ? function(...e2) {
      const r2 = e2.pop();
      return f(t2.apply(this, e2), r2);
    } : n((function(e2, r2) {
      var n2;
      try {
        n2 = t2.apply(this, e2);
      } catch (t3) {
        return r2(t3);
      }
      if (n2 && "function" == typeof n2.then) return f(n2, r2);
      r2(null, n2);
    }));
  }
  function f(t2, e2) {
    return t2.then((t3) => {
      d(e2, null, t3);
    }, (t3) => {
      d(e2, t3 && (t3 instanceof Error || t3.message) ? t3 : new Error(t3));
    });
  }
  function d(t2, e2, r2) {
    try {
      t2(e2, r2);
    } catch (t3) {
      c((t4) => {
        throw t4;
      }, t3);
    }
  }
  function h(t2) {
    return "AsyncFunction" === t2[Symbol.toStringTag];
  }
  function p(t2) {
    if ("function" != typeof t2) throw new Error("expected a function");
    return h(t2) ? l(t2) : t2;
  }
  function v(t2, e2) {
    if (e2 || (e2 = t2.length), !e2) throw new Error("arity is undefined");
    return function(...r2) {
      return "function" == typeof r2[e2 - 1] ? t2.apply(this, r2) : new Promise((n2, i2) => {
        r2[e2 - 1] = (t3, ...e3) => {
          if (t3) return i2(t3);
          n2(e3.length > 1 ? e3 : e3[0]);
        }, t2.apply(this, r2);
      });
    };
  }
  function m(t2) {
    return function(e2, ...r2) {
      return v((function(n2) {
        var i2 = this;
        return t2(e2, (t3, e3) => {
          p(t3).apply(i2, r2.concat(e3));
        }, n2);
      }));
    };
  }
  function y(t2, e2, r2, n2) {
    e2 = e2 || [];
    var i2 = [], o2 = 0, a2 = p(r2);
    return t2(e2, (t3, e3, r3) => {
      var n3 = o2++;
      a2(t3, (t4, e4) => {
        i2[n3] = e4, r3(t4);
      });
    }, (t3) => {
      n2(t3, i2);
    });
  }
  function g(t2) {
    return t2 && "number" == typeof t2.length && t2.length >= 0 && t2.length % 1 == 0;
  }
  const b = {};
  function w(t2) {
    function e2(...e3) {
      if (null !== t2) {
        var r2 = t2;
        t2 = null, r2.apply(this, e3);
      }
    }
    return Object.assign(e2, t2), e2;
  }
  function A(t2) {
    if (g(t2)) return (function(t3) {
      var e3 = -1, r3 = t3.length;
      return function() {
        return ++e3 < r3 ? { value: t3[e3], key: e3 } : null;
      };
    })(t2);
    var e2, r2, n2, i2, o2 = (function(t3) {
      return t3[Symbol.iterator] && t3[Symbol.iterator]();
    })(t2);
    return o2 ? /* @__PURE__ */ (function(t3) {
      var e3 = -1;
      return function() {
        var r3 = t3.next();
        return r3.done ? null : (e3++, { value: r3.value, key: e3 });
      };
    })(o2) : (r2 = (e2 = t2) ? Object.keys(e2) : [], n2 = -1, i2 = r2.length, function t3() {
      var o3 = r2[++n2];
      return "__proto__" === o3 ? t3() : n2 < i2 ? { value: e2[o3], key: o3 } : null;
    });
  }
  function _(t2) {
    return function(...e2) {
      if (null === t2) throw new Error("Callback was already called.");
      var r2 = t2;
      t2 = null, r2.apply(this, e2);
    };
  }
  function E(t2, e2, r2, n2) {
    let i2 = false, o2 = false, a2 = false, s2 = 0, u2 = 0;
    function c2() {
      s2 >= e2 || a2 || i2 || (a2 = true, t2.next().then(({ value: t3, done: e3 }) => {
        if (!o2 && !i2) {
          if (a2 = false, e3) return i2 = true, void (s2 <= 0 && n2(null));
          s2++, r2(t3, u2, l2), u2++, c2();
        }
      }).catch(f2));
    }
    function l2(t3, e3) {
      if (s2 -= 1, !o2) return t3 ? f2(t3) : false === t3 ? (i2 = true, void (o2 = true)) : e3 === b || i2 && s2 <= 0 ? (i2 = true, n2(null)) : void c2();
    }
    function f2(t3) {
      o2 || (a2 = false, i2 = true, n2(t3));
    }
    c2();
  }
  var S = (t2) => (e2, r2, n2) => {
    if (n2 = w(n2), t2 <= 0) throw new RangeError("concurrency limit cannot be less than 1");
    if (!e2) return n2(null);
    if ("AsyncGenerator" === e2[Symbol.toStringTag]) return E(e2, t2, r2, n2);
    if ((function(t3) {
      return "function" == typeof t3[Symbol.asyncIterator];
    })(e2)) return E(e2[Symbol.asyncIterator](), t2, r2, n2);
    var i2 = A(e2), o2 = false, a2 = false, s2 = 0, u2 = false;
    function c2(t3, e3) {
      if (!a2) if (s2 -= 1, t3) o2 = true, n2(t3);
      else if (false === t3) o2 = true, a2 = true;
      else {
        if (e3 === b || o2 && s2 <= 0) return o2 = true, n2(null);
        u2 || l2();
      }
    }
    function l2() {
      for (u2 = true; s2 < t2 && !o2; ) {
        var e3 = i2();
        if (null === e3) return o2 = true, void (s2 <= 0 && n2(null));
        s2 += 1, r2(e3.value, e3.key, _(c2));
      }
      u2 = false;
    }
    l2();
  };
  var O = v((function(t2, e2, r2, n2) {
    return S(e2)(t2, p(r2), n2);
  }), 4);
  function x(t2, e2, r2) {
    r2 = w(r2);
    var n2 = 0, i2 = 0, { length: o2 } = t2, a2 = false;
    function s2(t3, e3) {
      false === t3 && (a2 = true), true !== a2 && (t3 ? r2(t3) : ++i2 !== o2 && e3 !== b || r2(null));
    }
    for (0 === o2 && r2(null); n2 < o2; n2++) e2(t2[n2], n2, _(s2));
  }
  function k(t2, e2, r2) {
    return O(t2, 1 / 0, e2, r2);
  }
  var M = v((function(t2, e2, r2) {
    return (g(t2) ? x : k)(t2, p(e2), r2);
  }), 3);
  var T = v((function(t2, e2, r2) {
    return y(M, t2, e2, r2);
  }), 3);
  m(T);
  var I = v((function(t2, e2, r2) {
    return O(t2, 1, e2, r2);
  }), 3);
  var j = v((function(t2, e2, r2) {
    return y(I, t2, e2, r2);
  }), 3);
  m(j);
  /* @__PURE__ */ Symbol("promiseCallback");
  class C {
    constructor() {
      this.head = this.tail = null, this.length = 0;
    }
    removeLink(t2) {
      return t2.prev ? t2.prev.next = t2.next : this.head = t2.next, t2.next ? t2.next.prev = t2.prev : this.tail = t2.prev, t2.prev = t2.next = null, this.length -= 1, t2;
    }
    empty() {
      for (; this.head; ) this.shift();
      return this;
    }
    insertAfter(t2, e2) {
      e2.prev = t2, e2.next = t2.next, t2.next ? t2.next.prev = e2 : this.tail = e2, t2.next = e2, this.length += 1;
    }
    insertBefore(t2, e2) {
      e2.prev = t2.prev, e2.next = t2, t2.prev ? t2.prev.next = e2 : this.head = e2, t2.prev = e2, this.length += 1;
    }
    unshift(t2) {
      this.head ? this.insertBefore(this.head, t2) : B(this, t2);
    }
    push(t2) {
      this.tail ? this.insertAfter(this.tail, t2) : B(this, t2);
    }
    shift() {
      return this.head && this.removeLink(this.head);
    }
    pop() {
      return this.tail && this.removeLink(this.tail);
    }
    toArray() {
      return [...this];
    }
    *[Symbol.iterator]() {
      for (var t2 = this.head; t2; ) yield t2.data, t2 = t2.next;
    }
    remove(t2) {
      for (var e2 = this.head; e2; ) {
        var { next: r2 } = e2;
        t2(e2) && this.removeLink(e2), e2 = r2;
      }
      return this;
    }
  }
  function B(t2, e2) {
    t2.length = 1, t2.head = t2.tail = e2;
  }
  function U(t2, e2, r2) {
    if (null == e2) e2 = 1;
    else if (0 === e2) throw new RangeError("Concurrency must not be zero");
    var n2 = p(t2), i2 = 0, o2 = [];
    const a2 = { error: [], drain: [], saturated: [], unsaturated: [], empty: [] };
    function s2(t3, e3) {
      return t3 ? e3 ? void (a2[t3] = a2[t3].filter((t4) => t4 !== e3)) : a2[t3] = [] : Object.keys(a2).forEach((t4) => a2[t4] = []);
    }
    function u2(t3, ...e3) {
      a2[t3].forEach((t4) => t4(...e3));
    }
    var l2 = false;
    function f2(t3, e3, r3, n3) {
      if (null != n3 && "function" != typeof n3) throw new Error("task callback must be a function");
      var i3, o3;
      function a3(t4, ...e4) {
        return t4 ? r3 ? o3(t4) : i3() : e4.length <= 1 ? i3(e4[0]) : void i3(e4);
      }
      y2.started = true;
      var s3 = y2._createTaskItem(t3, r3 ? a3 : n3 || a3);
      if (e3 ? y2._tasks.unshift(s3) : y2._tasks.push(s3), l2 || (l2 = true, c(() => {
        l2 = false, y2.process();
      })), r3 || !n3) return new Promise((t4, e4) => {
        i3 = t4, o3 = e4;
      });
    }
    function d2(t3) {
      return function(e3, ...r3) {
        i2 -= 1;
        for (var n3 = 0, a3 = t3.length; n3 < a3; n3++) {
          var s3 = t3[n3], c2 = o2.indexOf(s3);
          0 === c2 ? o2.shift() : c2 > 0 && o2.splice(c2, 1), s3.callback(e3, ...r3), null != e3 && u2("error", e3, s3.data);
        }
        i2 <= y2.concurrency - y2.buffer && u2("unsaturated"), y2.idle() && u2("drain"), y2.process();
      };
    }
    function h2(t3) {
      return !(0 !== t3.length || !y2.idle()) && (c(() => u2("drain")), true);
    }
    const v2 = (t3) => (e3) => {
      if (!e3) return new Promise((e4, r3) => {
        !(function(t4, e5) {
          const r4 = (...n3) => {
            s2(t4, r4), e5(...n3);
          };
          a2[t4].push(r4);
        })(t3, (t4, n3) => {
          if (t4) return r3(t4);
          e4(n3);
        });
      });
      s2(t3), (function(t4, e4) {
        a2[t4].push(e4);
      })(t3, e3);
    };
    var m2 = false, y2 = { _tasks: new C(), _createTaskItem: (t3, e3) => ({ data: t3, callback: e3 }), *[Symbol.iterator]() {
      yield* y2._tasks[Symbol.iterator]();
    }, concurrency: e2, payload: r2, buffer: e2 / 4, started: false, paused: false, push(t3, e3) {
      if (Array.isArray(t3)) {
        if (h2(t3)) return;
        return t3.map((t4) => f2(t4, false, false, e3));
      }
      return f2(t3, false, false, e3);
    }, pushAsync(t3, e3) {
      if (Array.isArray(t3)) {
        if (h2(t3)) return;
        return t3.map((t4) => f2(t4, false, true, e3));
      }
      return f2(t3, false, true, e3);
    }, kill() {
      s2(), y2._tasks.empty();
    }, unshift(t3, e3) {
      if (Array.isArray(t3)) {
        if (h2(t3)) return;
        return t3.map((t4) => f2(t4, true, false, e3));
      }
      return f2(t3, true, false, e3);
    }, unshiftAsync(t3, e3) {
      if (Array.isArray(t3)) {
        if (h2(t3)) return;
        return t3.map((t4) => f2(t4, true, true, e3));
      }
      return f2(t3, true, true, e3);
    }, remove(t3) {
      y2._tasks.remove(t3);
    }, process() {
      if (!m2) {
        for (m2 = true; !y2.paused && i2 < y2.concurrency && y2._tasks.length; ) {
          var t3 = [], e3 = [], r3 = y2._tasks.length;
          y2.payload && (r3 = Math.min(r3, y2.payload));
          for (var a3 = 0; a3 < r3; a3++) {
            var s3 = y2._tasks.shift();
            t3.push(s3), o2.push(s3), e3.push(s3.data);
          }
          i2 += 1, 0 === y2._tasks.length && u2("empty"), i2 === y2.concurrency && u2("saturated");
          var c2 = _(d2(t3));
          n2(e3, c2);
        }
        m2 = false;
      }
    }, length: () => y2._tasks.length, running: () => i2, workersList: () => o2, idle: () => y2._tasks.length + i2 === 0, pause() {
      y2.paused = true;
    }, resume() {
      false !== y2.paused && (y2.paused = false, c(y2.process));
    } };
    return Object.defineProperties(y2, { saturated: { writable: false, value: v2("saturated") }, unsaturated: { writable: false, value: v2("unsaturated") }, empty: { writable: false, value: v2("empty") }, drain: { writable: false, value: v2("drain") },
      error: { writable: false, value: v2("error") } }), y2;
  }
  v((function(t2, e2, r2, n2) {
    n2 = w(n2);
    var i2 = p(r2);
    return I(t2, (t3, r3, n3) => {
      i2(e2, t3, (t4, r4) => {
        e2 = r4, n3(t4);
      });
    }, (t3) => n2(t3, e2));
  }), 4);
  var P = v((function(t2, e2, r2, n2) {
    return y(S(e2), t2, r2, n2);
  }), 4);
  var N = v((function(t2, e2, r2, n2) {
    var i2 = p(r2);
    return P(t2, e2, (t3, e3) => {
      i2(t3, (t4, ...r3) => t4 ? e3(t4) : e3(t4, r3));
    }, (t3, e3) => {
      for (var r3 = [], i3 = 0; i3 < e3.length; i3++) e3[i3] && (r3 = r3.concat(...e3[i3]));
      return n2(t3, r3);
    });
  }), 4);
  v((function(t2, e2, r2) {
    return N(t2, 1 / 0, e2, r2);
  }), 3);
  v((function(t2, e2, r2) {
    return N(t2, 1, e2, r2);
  }), 3);
  function D(t2, e2) {
    return (r2, n2, i2, o2) => {
      var a2, s2 = false;
      const u2 = p(i2);
      r2(n2, (r3, n3, i3) => {
        u2(r3, (n4, o3) => n4 || false === n4 ? i3(n4) : t2(o3) && !a2 ? (s2 = true, a2 = e2(true, r3), i3(null, b)) : void i3());
      }, (t3) => {
        if (t3) return o2(t3);
        o2(null, s2 ? a2 : e2(false));
      });
    };
  }
  v((function(t2, e2, r2) {
    return D((t3) => t3, (t3, e3) => e3)(M, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2, n2) {
    return D((t3) => t3, (t3, e3) => e3)(S(e2), t2, r2, n2);
  }), 4);
  v((function(t2, e2, r2) {
    return D((t3) => t3, (t3, e3) => e3)(S(1), t2, e2, r2);
  }), 3);
  function R(t2) {
    return (e2, ...r2) => p(e2)(...r2, (e3, ...r3) => {
      "object" == typeof console && (e3 ? console.error && console.error(e3) : console[t2] && r3.forEach((e4) => console[t2](e4)));
    });
  }
  R("dir");
  v((function(t2, e2, r2) {
    r2 = _(r2);
    var n2, i2 = p(t2), o2 = p(e2);
    function a2(t3, ...e3) {
      if (t3) return r2(t3);
      false !== t3 && (n2 = e3, o2(...e3, s2));
    }
    function s2(t3, e3) {
      return t3 ? r2(t3) : false !== t3 ? e3 ? void i2(a2) : r2(null, ...n2) : void 0;
    }
    return s2(null, true);
  }), 3);
  function L(t2) {
    return (e2, r2, n2) => t2(e2, n2);
  }
  v((function(t2, e2, r2) {
    return M(t2, L(p(e2)), r2);
  }), 3);
  var q = v((function(t2, e2, r2, n2) {
    return S(e2)(t2, L(p(r2)), n2);
  }), 4);
  var F = v((function(t2, e2, r2) {
    return q(t2, 1, e2, r2);
  }), 3);
  function G(t2) {
    return h(t2) ? t2 : function(...e2) {
      var r2 = e2.pop(), n2 = true;
      e2.push((...t3) => {
        n2 ? c(() => r2(...t3)) : r2(...t3);
      }), t2.apply(this, e2), n2 = false;
    };
  }
  v((function(t2, e2, r2) {
    return D((t3) => !t3, (t3) => !t3)(M, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2, n2) {
    return D((t3) => !t3, (t3) => !t3)(S(e2), t2, r2, n2);
  }), 4);
  v((function(t2, e2, r2) {
    return D((t3) => !t3, (t3) => !t3)(I, t2, e2, r2);
  }), 3);
  function Q(t2, e2, r2, n2) {
    var i2 = new Array(e2.length);
    t2(e2, (t3, e3, n3) => {
      r2(t3, (t4, r3) => {
        i2[e3] = !!r3, n3(t4);
      });
    }, (t3) => {
      if (t3) return n2(t3);
      for (var r3 = [], o2 = 0; o2 < e2.length; o2++) i2[o2] && r3.push(e2[o2]);
      n2(null, r3);
    });
  }
  function z(t2, e2, r2, n2) {
    var i2 = [];
    t2(e2, (t3, e3, n3) => {
      r2(t3, (r3, o2) => {
        if (r3) return n3(r3);
        o2 && i2.push({ index: e3, value: t3 }), n3(r3);
      });
    }, (t3) => {
      if (t3) return n2(t3);
      n2(null, i2.sort((t4, e3) => t4.index - e3.index).map((t4) => t4.value));
    });
  }
  function H(t2, e2, r2, n2) {
    return (g(e2) ? Q : z)(t2, e2, p(r2), n2);
  }
  v((function(t2, e2, r2) {
    return H(M, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2, n2) {
    return H(S(e2), t2, r2, n2);
  }), 4);
  v((function(t2, e2, r2) {
    return H(I, t2, e2, r2);
  }), 3);
  v((function(t2, e2) {
    var r2 = _(e2), n2 = p(G(t2));
    return (function t3(e3) {
      if (e3) return r2(e3);
      false !== e3 && n2(t3);
    })();
  }), 2);
  v((function(t2, e2, r2, n2) {
    var i2 = p(r2);
    return P(t2, e2, (t3, e3) => {
      i2(t3, (r3, n3) => r3 ? e3(r3) : e3(r3, { key: n3, val: t3 }));
    }, (t3, e3) => {
      for (var r3 = {}, { hasOwnProperty: i3 } = Object.prototype, o2 = 0; o2 < e3.length; o2++) if (e3[o2]) {
        var { key: a2 } = e3[o2], { val: s2 } = e3[o2];
        i3.call(r3, a2) ? r3[a2].push(s2) : r3[a2] = [s2];
      }
      return n2(t3, r3);
    });
  }), 4);
  R("log");
  v((function(t2, e2, r2, n2) {
    n2 = w(n2);
    var i2 = {}, o2 = p(r2);
    return S(e2)(t2, (t3, e3, r3) => {
      o2(t3, e3, (t4, n3) => {
        if (t4) return r3(t4);
        i2[e3] = n3, r3(t4);
      });
    }, (t3) => n2(t3, i2));
  }), 4);
  u(a ? process.nextTick : o ? setImmediate : s), v((t2, e2, r2) => {
    var n2 = g(e2) ? [] : {};
    t2(e2, (t3, e3, r3) => {
      p(t3)((t4, ...i2) => {
        i2.length < 2 && ([i2] = i2), n2[e3] = i2, r3(t4);
      });
    }, (t3) => r2(t3, n2));
  }, 3);
  function V(t2, e2) {
    var r2 = p(t2);
    return U((t3, e3) => {
      r2(t3[0], e3);
    }, e2, 1);
  }
  Symbol.iterator;
  v((function(t2, e2) {
    if (e2 = w(e2), !Array.isArray(t2)) return e2(new TypeError("First argument to race must be an array of functions"));
    if (!t2.length) return e2();
    for (var r2 = 0, n2 = t2.length; r2 < n2; r2++) p(t2[r2])(e2);
  }), 2);
  function $(t2, e2, r2, n2) {
    const i2 = p(r2);
    return H(t2, e2, (t3, e3) => {
      i2(t3, (t4, r3) => {
        e3(t4, !r3);
      });
    }, n2);
  }
  v((function(t2, e2, r2) {
    return $(M, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2, n2) {
    return $(S(e2), t2, r2, n2);
  }), 4);
  v((function(t2, e2, r2) {
    return $(I, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2) {
    return D(Boolean, (t3) => t3)(M, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2, n2) {
    return D(Boolean, (t3) => t3)(S(e2), t2, r2, n2);
  }), 4);
  v((function(t2, e2, r2) {
    return D(Boolean, (t3) => t3)(I, t2, e2, r2);
  }), 3);
  v((function(t2, e2, r2) {
    var n2 = p(e2);
    return T(t2, (t3, e3) => {
      n2(t3, (r3, n3) => {
        if (r3) return e3(r3);
        e3(r3, { value: t3, criteria: n3 });
      });
    }, (t3, e3) => {
      if (t3) return r2(t3);
      r2(null, e3.sort(i2).map((t4) => t4.value));
    });
    function i2(t3, e3) {
      var r3 = t3.criteria, n3 = e3.criteria;
      return r3 < n3 ? -1 : r3 > n3 ? 1 : 0;
    }
  }), 3);
  v((function(t2, e2) {
    var r2, n2 = null;
    return F(t2, (t3, e3) => {
      p(t3)((t4, ...i2) => {
        if (false === t4) return e3(t4);
        i2.length < 2 ? [r2] = i2 : r2 = i2, n2 = t4, e3(t4 ? null : {});
      });
    }, () => e2(n2, r2));
  }));
  v((function(t2, e2, r2) {
    r2 = _(r2);
    var n2 = p(e2), i2 = p(t2), o2 = [];
    function a2(t3, ...e3) {
      if (t3) return r2(t3);
      o2 = e3, false !== t3 && i2(s2);
    }
    function s2(t3, e3) {
      return t3 ? r2(t3) : false !== t3 ? e3 ? void n2(a2) : r2(null, ...o2) : void 0;
    }
    return i2(s2);
  }), 3);
  v((function(t2, e2) {
    if (e2 = w(e2), !Array.isArray(t2)) return e2(new Error("First argument to waterfall must be an array of functions"));
    if (!t2.length) return e2();
    var r2 = 0;
    function n2(e3) {
      p(t2[r2++])(...e3, _(i2));
    }
    function i2(i3, ...o2) {
      if (false !== i3) return i3 || r2 === t2.length ? e2(i3, ...o2) : void n2(o2);
    }
    n2([]);
  }));
}
