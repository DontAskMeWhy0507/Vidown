// Module 7 [storage] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(9);
  var o = r(1);
  var i = new class {
    constructor() {
      this._storage = chrome.storage.local;
      this._handlerMap = new Map();
      this._options = {};
      this._default = {
        detach_enabled: true,
        on_page_buttons: true,
        min_stream_size: 30720,
        prefer_last_quality: true,
        last_quality: undefined,
        hide_play_now_tooltip: false,
        hide_play_now_tooltip_bottom: false,
        instant_actions_tooltip_shown: false,
        instant_actions_tooltip_shown_count: 0,
        instant_actions_button_download: false,
        preferred_quality_level: n.b.DEFAULT_QUALITY_LEVEL,
        show_3gp_ext: false,
        skip_video_enabled: true,
        video_changed: false,
        ADLIST_CUSTOM_RULE: {},
        [o.o]: []
      };
      this.loaded = false;
      var e = this;
      chrome.storage.onChanged.addListener((t, r) => {
        var n;
        if (r === "local") {
          for (var o in t) {
            e._options[o] = t[o].newValue;
          }
          for (var i in t) {
            if ((n = this._handlerMap.get(i)) !== null && n !== undefined) {
              n.forEach(e => e());
            }
          }
        }
      });
    }
    load() {
      var e = this;
      return new Promise(t => {
        e._storage.get(null, r => {
          e._options = r;
          e.loaded = true;
          e._migratePreferredQualityLevel();
          t(r);
        });
      });
    }
    _migratePreferredQualityLevel() {
      if (this._options.preferred_quality_level === "Medium") {
        this.set("preferred_quality_level", "Standard");
      }
    }
    set(e, t) {
      var r = {
        [e]: t
      };
      this._storage.set(r);
      if (this.loaded && (typeof e == "string" || typeof e == "number" && t !== undefined)) {
        this._options[e] = t;
      }
    }
    get(e) {
      if (this.loaded && e in this._options) {
        return this._options[e];
      } else {
        return this._default[e];
      }
    }
    has(e) {
      return this._options[e] !== undefined;
    }
    remove(e) {
      delete this._options[e];
      this._storage.remove([e], () => {
        var e = chrome.runtime.lastError;
        if (e) {
          console.warn("Caught", e);
        }
      });
    }
    addOptionChangedListener(e, t) {
      var n = this._handlerMap.get(e) ?? [];
      n.push(t);
      this._handlerMap.set(e, n);
    }
  }();
  t.a = i;
};
