{
  let a = 0;
  let r = null;
  r = setInterval(() => {
    try {
      var e;
      var t = document.body.getAttribute("savior-ytb-data-android-solution");
      if (t) {
        clearInterval(r);
        e = JSON.parse(t);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {
            url: e,
            data: e
          }
        });
      }
      if (a > 20) {
        clearInterval(r);
      } else {
        a++;
      }
    } catch (e) {
      clearInterval(r);
      chrome.runtime.sendMessage(null, {
        type: "script_executed"
      });
    }
  }, 300);
}
