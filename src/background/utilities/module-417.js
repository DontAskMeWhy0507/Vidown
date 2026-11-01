// Module 417 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(418);
  e.exports = function (e) {
    if (n(e) || e === 0) {
      return e;
    } else if (e < 0) {
      return -1;
    } else {
      return 1;
    }
  };
};
