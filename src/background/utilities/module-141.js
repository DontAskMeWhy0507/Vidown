// Module 141 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(121);
  var o = r(115);
  var i = r(137);
  var a = r(169);
  e.exports = function (e) {
    if (e.length < 1 || typeof e[0] != "function") {
      throw new o("a function is required");
    }
    return a(n, i, e);
  };
};
