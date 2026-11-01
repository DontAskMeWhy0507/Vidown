// Module 724 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  var n = r(506);
  var o = r(515);
  var i = e.exports;
  for (var a in n) {
    if (n.hasOwnProperty(a)) {
      i[a] = n[a];
    }
  }
  function s(e) {
    if (typeof e == "string") {
      e = o.parse(e);
    }
    e.protocol ||= "https:";
    if (e.protocol !== "https:") {
      throw new Error("Protocol \"" + e.protocol + "\" not supported. Expected \"https:\"");
    }
    return e;
  }
  i.request = function (e, t) {
    e = s(e);
    return n.request.call(this, e, t);
  };
  i.get = function (e, t) {
    e = s(e);
    return n.get.call(this, e, t);
  };
};
