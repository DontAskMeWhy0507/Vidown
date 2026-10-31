{
  let t = setInterval(() => {
    var e = document.body.getAttribute("savior-m3u8");
    if (e) {
      clearInterval(t);
      chrome.runtime.sendMessage(null, {
        type: "script_executed",
        data: {
          data: {
            origin: "streamfree",
            m3u8: e
          }
        }
      }).catch(() => {});
    }
  }, 1000);
}
