// Module 168 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(153);
  var o = r(154);
  var i = r(421);
  e.exports = n ? function (e) {
    return n(e);
  } : o ? function (e) {
    if (!e || typeof e != "object" && typeof e != "function") {
      throw new TypeError("getProto: not an object");
    }
    return o(e);
  } : i ? function (e) {
    return i(e);
  } : null;
};
