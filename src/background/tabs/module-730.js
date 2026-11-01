// Module 730 [tabs] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(5);
  var o = r(11);
  var i = r(3);
  var a = 640;
  var s = 480;
  var c = new class {
    constructor() {
      chrome.tabs.onAttached.addListener((e, t) => {
        var r;
        var o;
        if (t.isFromPanel) {
          n.a.log("Pip", n.a.PIP_RESTORE_CLICK);
          if ((o = (r = chrome.tabs.sendMessage(e, {
            type: "restore_tab"
          })) === null || r === undefined ? undefined : r.catch) !== null && o !== undefined) {
            o.call(r, console.log);
          }
        }
      });
      this.requestActions = {
        detachTab: this.detachTab.bind(this),
        pipUrl: this.pipUrl.bind(this),
        restorePanelToTab: this.restorePanelToTab.bind(this)
      };
    }
    processRequest(e) {
      var t = e.method;
      if (t && this.requestActions[t]) {
        return this.requestActions[t].apply(this, arguments);
      }
    }
    detachTab(e, t) {
      var s = e.params;
      var c = e.params.url ? e.params.url : t.tab?.url;
      var u = t.tab?.id;
      chrome.windows.create(this.getWindowOptions(s, c, u), () => {
        n.a.log("Pip", n.a.PIP_DETACH_CLICK);
        var e = Object(i.c)(c);
        n.a.log("RefrPin", e);
        if (o.a.CUSTOM_METRICS_JSON) {
          var t = {
            timestamp_ms: Date.now(),
            page_url: c
          };
          n.a.log("recordCustomData", [{
            key: "savior_pip_action",
            value: JSON.stringify(t)
          }]);
        }
      });
    }
    pipUrl(e) {
      var t;
      var r = e.params;
      (t = r.url, new Promise(e => {
        chrome.windows.getAll({
          populate: true
        }, r => {
          for (var n = 0; n < r.length; n++) {
            var o = r[n];
            if (o.type === "panel" && (o.tabs || []).length !== 0 && (o.tabs || [])[0].url === t) {
              e(true);
              return;
            }
          }
          e(false);
        });
      })).then(e => {
        if (!e) {
          var t = r.height ? r.height + 36 : s + 36;
          var i = {
            type: "panel",
            width: r.width || a,
            height: t,
            url: r.url
          };
          if (r.isAds && o.a.IS_ADS_PIP_PARAMS) {
            i.isAds = true;
          }
          if (navigator.vendor === "Coc Coc") {
            i.proportional = true;
          }
          chrome.windows.create(i, () => {
            n.a.log("Pip", n.a.PIP_SITE_LINK_CLICK);
          });
        }
      });
    }
    restorePanelToTab(e, t) {
      var n = t.tab?.id || 0;
      try {
        chrome.tabs.move(n, {
          index: -1,
          restoreFromPanel: true
        });
      } catch (e) {}
    }
    getWindowOptions(e, t, r) {
      var n = {
        width: e.width,
        height: (e.height || 0) + 36,
        type: "panel",
        url: t
      };
      if (e.incognito) {
        n.incognito = true;
      }
      if (navigator.vendor === "Coc Coc") {
        n.proportional = true;
        n.moveTabToPanel = true;
        n.forceAlwaysOnTop = true;
        n.tabId = r;
      }
      return n;
    }
  }();
  EE.on("pipRequest", e => {
    c.processRequest(e);
  });
};
