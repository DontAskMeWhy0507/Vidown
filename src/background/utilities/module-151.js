// Module 151 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(140);
  var o = r(141);
  var i = o([n("%String.prototype.indexOf%")]);
  e.exports = function (e, t) {
    var r = n(e, !!t);
    if (typeof r == "function" && i(e, ".prototype.") > -1) {
      return o([r]);
    } else {
      return r;
    }
  };
};
