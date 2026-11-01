// Module 29 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e) {
    function r(e) {
      return Object.prototype.toString.call(e);
    }
    t.isArray = function (e) {
      if (Array.isArray) {
        return Array.isArray(e);
      } else {
        return r(e) === "[object Array]";
      }
    };
    t.isBoolean = function (e) {
      return typeof e == "boolean";
    };
    t.isNull = function (e) {
      return e === null;
    };
    t.isNullOrUndefined = function (e) {
      return e == null;
    };
    t.isNumber = function (e) {
      return typeof e == "number";
    };
    t.isString = function (e) {
      return typeof e == "string";
    };
    t.isSymbol = function (e) {
      return typeof e == "symbol";
    };
    t.isUndefined = function (e) {
      return e === undefined;
    };
    t.isRegExp = function (e) {
      return r(e) === "[object RegExp]";
    };
    t.isObject = function (e) {
      return typeof e == "object" && e !== null;
    };
    t.isDate = function (e) {
      return r(e) === "[object Date]";
    };
    t.isError = function (e) {
      return r(e) === "[object Error]" || e instanceof Error;
    };
    t.isFunction = function (e) {
      return typeof e == "function";
    };
    t.isPrimitive = function (e) {
      return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
    };
    t.isBuffer = e.isBuffer;
  }).call(this, r(27).Buffer);
};
