{
  let retries = 0;
  let t = null;
  t = setInterval(() => {
    if (++retries > 20) {
      clearInterval(t);
      return;
    }
    var e = document.body ? document.body.getAttribute("savior-decoded-content") : null;
    if (document.body) {
      document.body.removeAttribute("savior-decoded-content");
    }
    if (e) {
      chrome.runtime.sendMessage(null, {
        type: "script_executed",
        data: {
          data: e
        }
      });
      clearInterval(t);
    }
  }, 300);
}
