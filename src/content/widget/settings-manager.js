// Module 7 [widget] - Savior Settings Manager
export default function(module, exports, require) {
  "use strict";

  var detectorConstants = require(9);
  var mediaConstants = require(1);

  class SettingsManager {
    constructor() {
      this._storage = chrome.storage.local;
      this._handlerMap = new Map();
      this._options = {};
      this._defaultSettings = {
        detach_enabled: false,
        on_page_buttons: true,
        onPageButtonsEnabled: true,
        image_download_enabled: true,
        imageDownloadEnabled: true,
        min_stream_size: 30720,
        prefer_last_quality: true,
        last_quality: void 0,
        hide_play_now_tooltip: false,
        hide_play_now_tooltip_bottom: false,
        instant_actions_tooltip_shown: false,
        instant_actions_tooltip_shown_count: 0,
        instant_actions_button_download: false,
        preferred_quality_level: detectorConstants.b.DEFAULT_QUALITY_LEVEL,
        show_3gp_ext: false,
        skip_video_enabled: true,
        video_changed: false,
        ADLIST_CUSTOM_RULE: {},
        [mediaConstants.o]: [],
        "template-widget": void 0,
        youtube_anti_adblocker_onboarding_shown_count: 0
      };
      this._default = this._defaultSettings;
      this.loaded = false;

      var self = this;
      chrome.storage.onChanged.addListener((changes, areaName) => {
        var listenerList;
        if ("local" === areaName) {
          for (var key in changes) {
            self._options[key] = changes[key].newValue;
          }

          if (changes.on_page_buttons || changes.onPageButtonsEnabled) {
            var isButtonsVisible = (changes.on_page_buttons ? changes.on_page_buttons.newValue : changes.onPageButtonsEnabled.newValue) !== false;
            document.querySelectorAll(".savior-widget, savior-widget").forEach(widget => {
              widget.style.display = isButtonsVisible ? "" : "none";
            });
          }

          if (changes.image_download_enabled || changes.imageDownloadEnabled) {
            var isImageDownloadVisible = (changes.image_download_enabled ? changes.image_download_enabled.newValue : changes.imageDownloadEnabled.newValue) !== false;
            document.querySelectorAll("img ~ .savior-widget, img + .savior-widget, .savior-widget[data-is-image='true']").forEach(widget => {
              widget.style.display = isImageDownloadVisible ? "" : "none";
            });
          }

          for (var optKey in changes) {
            if ((listenerList = this._handlerMap.get(optKey))) {
              listenerList.forEach(callback => callback());
            }
          }
        }
      });
    }

    load() {
      var self = this;
      return new Promise(resolve => {
        self._storage.get(Object.keys(self._defaultSettings), storedValues => {
          self._options = storedValues || {};
          self.loaded = true;
          self._migratePreferredQualityLevel();
          if (!self._options["template-widget"] && typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
            try {
              chrome.runtime.sendMessage({ action: "requestDefaultTemplates" }, res => {
                if (res && res.templates) {
                  Object.assign(self._options, res.templates);
                }
                resolve(self._options);
              });
              return;
            } catch (_) {}
          }
          resolve(self._options);
        });
      });
    }

    _migratePreferredQualityLevel() {
      if ("Medium" === this._options.preferred_quality_level) {
        this.set("preferred_quality_level", "Standard");
      }
    }

    set(key, value) {
      var item = {};
      item[key] = value;
      this._storage.set(item);
      if (this.loaded && ("string" == typeof key || "number" == typeof key && void 0 !== value)) {
        this._options[key] = value;
      }
    }

    get(key) {
      if ("on_page_buttons" === key) {
        var isVisible = this._options.on_page_buttons !== undefined 
          ? this._options.on_page_buttons 
          : this._options.onPageButtonsEnabled;
        return isVisible !== undefined ? isVisible : true;
      }
      return this.loaded && key in this._options && this._options[key] !== undefined ? this._options[key] : this._default[key];
    }

    has(key) {
      return void 0 !== this._options[key];
    }

    remove(key) {
      delete this._options[key];
      this._storage.remove([key], () => {
        var lastErr = chrome.runtime.lastError;
        if (lastErr) console.warn("Caught", lastErr);
      });
    }

    addOptionChangedListener(key, callback) {
      var list = this._handlerMap.get(key) || [];
      list.push(callback);
      this._handlerMap.set(key, list);
    }
  }

  var settingsInstance = new SettingsManager();
  exports.a = settingsInstance;
};
