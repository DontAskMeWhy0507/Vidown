// Module 108 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  e.exports = i;
  var n = r(87);
  var o = Object.create(r(29));
  function i(e) {
    if (!(this instanceof i)) {
      return new i(e);
    }
    n.call(this, e);
  }
  o.inherits = r(15);
  o.inherits(i, n);
  i.prototype._transform = function (e, t, r) {
    r(null, e);
  };
};
