// Module 440 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = String.prototype.replace;
  var o = /%20/g;
  var i = "RFC1738";
  var a = "RFC3986";
  e.exports = {
    default: a,
    formatters: {
      RFC1738: function (e) {
        return n.call(e, o, "+");
      },
      RFC3986: function (e) {
        return String(e);
      }
    },
    RFC1738: i,
    RFC3986: a
  };
};
