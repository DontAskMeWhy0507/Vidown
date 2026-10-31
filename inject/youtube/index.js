{
  let r = 0;
  let a = null;
  a = setInterval(() => {
    try {
      var e = document.body.getAttribute("savior-decoded-meta-formats");
      var t = JSON.parse(e);
      if (t) {
        clearInterval(a);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {
            url: t.formats,
            data: t.formats,
            videoId: t.videoId
          }
        });
      }
      if (r > 20) {
        clearInterval(a);
        chrome.runtime.sendMessage(null, {
          type: "script_executed",
          data: {
            videoId: t?.videoId
          }
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
    }
  }, 300);
}
