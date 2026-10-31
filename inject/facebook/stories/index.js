function r(e, t) {
  chrome.runtime.sendMessage(null, {
    type: "script_executed",
    data: {
      data: {
        origin: "facebook.com",
        url: e,
        username: t
      }
    }
  }).catch(() => {});
}
(() => {
  var e = document.querySelector("a[role=link][tabindex='0'][href*='https://www.facebook']>img");
  if (e != null && top.location.toString().indexOf("stories") != -1) {
    var e = e.alt;
    var t = document.head.getAttribute("savior-story-url");
    if (t && t !== "null") {
      document.head.removeAttribute("savior-story-url");
      return r(t, e);
    }
  }
  document.head.removeAttribute("savior-story-url");
  r(null);
})();
