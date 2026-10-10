if (!chrome.coccocPrivate) {
  chrome.coccocPrivate = {
    getFeatureState(name, callback) {
      callback({ enabled: false });
    },
  };
}

if (!chrome.coccoc) {
  chrome.coccoc = {
    onGetTranscript: {
      addListener() {},
      removeListener() {},
      hasListener() {
        return false;
      },
    },
  };
}

importScripts("background.js");
