{
  let retries = 0;
  let t = setInterval(() => {
    if (++retries > 20) {
      clearInterval(t);
      return;
    }
    var e = document.body ? document.body.getAttribute("savior-m3u8") : null;
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
