// Module 421 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n;
  var o = r(141);
  var i = r(129);
  try {
    n = [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var a = !!n && i && i(Object.prototype, "__proto__");
  var s = Object;
  var c = s.getPrototypeOf;
  e.exports = a && typeof a.get == "function" ? o([a.get]) : typeof c == "function" && function (e) {
    return c(e == null ? e : s(e));
  };
};
