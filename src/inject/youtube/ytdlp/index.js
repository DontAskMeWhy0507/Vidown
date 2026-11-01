{
  let r = 0;
  let a = null;
  a = setInterval(() => {
    try {
      var e = document.body.getAttribute("savior-decoded-result");
      var t = JSON.parse(e);
      if (t) {
        clearInterval(a);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {
            data: t
          }
        });
      }
      if (r > 20) {
        clearInterval(a);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {}
        });
      } else {
        r++;
      }
    } catch (e) {
      console.error(e);
      clearInterval(a);
      chrome.runtime.sendMessage(null, {
        type: "script_executed"
      });
    } finally {
      document.body.removeAttribute("savior-decoded-result");
    }
  }, 300);
}
