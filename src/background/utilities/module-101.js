// Module 101 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  var r = {}.toString;
  e.exports = Array.isArray || function (e) {
    return r.call(e) == "[object Array]";
  };
};
