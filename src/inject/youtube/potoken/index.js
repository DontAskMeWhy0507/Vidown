{
  let t = 0;
  let r = null;
  r = setInterval(() => {
    try {
      var e = document.body.getAttribute("savior-po-token");
      if (e) {
        clearInterval(r);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {
            data: e
          }
        });
      }
      if (t > 20) {
        clearInterval(r);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {}
        });
      } else {
        t++;
      }
    } catch (e) {
      console.error(e);
      clearInterval(r);
      chrome.runtime.sendMessage(null, {
        type: "script_executed"
      });
    } finally {
      document.body.removeAttribute("savior-po-token");
    }
  }, 300);
}
