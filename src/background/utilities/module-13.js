// Module 13 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  var r;
  r = function () {
    return this;
  }();
  try {
    r = r || new Function("return this")();
  } catch (e) {
    if (typeof window == "object") {
      r = window;
    }
  }
  e.exports = r;
};
