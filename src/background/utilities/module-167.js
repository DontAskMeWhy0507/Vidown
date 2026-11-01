// Module 167 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  e.exports = function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
      return false;
    }
    if (typeof Symbol.iterator == "symbol") {
      return true;
    }
    var e = {};
    var t = Symbol("test");
    var r = Object(t);
    if (typeof t == "string") {
      return false;
    }
    if (Object.prototype.toString.call(t) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(r) !== "[object Symbol]") {
      return false;
    }
    e[t] = 42;
    for (var n in e) {
      return false;
    }
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) {
      return false;
    }
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(e, t)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = Object.getOwnPropertyDescriptor(e, t);
      if (i.value !== 42 || i.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
};
