// Module 7 [widget] - Savior Settings Manager
export default function(module, exports, require) {
  "use strict";

  var detectorConstants = require(9);
  var mediaConstants = require(1);

  var DEFAULT_TEMPLATES = {
  "template-media": "<panel value=\"media\" class=\"media-download-panel quality-selector-box\">\r\n    {{#audio_channel}}\r\n        <div class=\"audio-channel-box\">\r\n            <div class=\"audio-channel-label\">\r\n                {{{type_icon}}}\r\n                <strong>{{i18n_type}}</strong>\r\n            </div>\r\n            <div class=\"audio-channel\">\r\n                <div class=\"audio-selected j-audio-drawer-toggle\" title=\"Selected audio\">\r\n                    <strong class=\"media-name audio\">{{selected_audio.i18n_quality}}</strong>\r\n                    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M6.70255 11.7692L6 11.0667L9.06667 7.99999L6 4.93332L6.70255 4.23077L10.4718 7.99999L6.70255 11.7692Z\" fill=\"currentColor\"/>\r\n                    </svg>\r\n                </div>\r\n                <div class=\"audio-drawer-wrapper\" hidden>\r\n                    <div class=\"audio-drawer\" data-open=\"false\" hidden>\r\n                        <div class=\"audio-drawer-header\">\r\n                            <div class=\"audio-drawer-header-back-button\">\r\n                                <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M13.9999 20.3461L7.65381 14L13.9999 7.65387L14.8909 8.53206L10.048 13.375H20.3461V14.625H10.048L14.8909 19.4679L13.9999 20.3461Z\" fill=\"currentColor\"/>\r\n                                </svg>\r\n                            </div>\r\n                            <span>{{i18n_select_audio_channel_title}}</span>\r\n                            <button class=\"dropdown-box-closer j-audio-drawer-closer\" id=\"mobile-transfer-closer\">\r\n                                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M5.33327 15.5448L4.45508 14.6667L9.12174 9.99999L4.45508 5.33333L5.33327 4.45514L9.99993 9.12181L14.6666 4.45514L15.5448 5.33333L10.8781 9.99999L15.5448 14.6667L14.6666 15.5448L9.99993 10.8782L5.33327 15.5448Z\" fill=\"currentColor\"/>\r\n                                </svg>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"audio-list\">\r\n                            {{#media}}\r\n                                <div class=\"audio-item\" data-id=\"{{id}}\" title=\"{{quality}}\" data-quality-value=\"{{ext}}/{{quality}}\" class=\"j-audio-item\">\r\n                                    {{i18n_quality}}\r\n                                </div>\r\n                            {{/media}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    {{/audio_channel}}\r\n    {{#media_list}}\r\n        <div class=\"extension-box\">\r\n            <div class=\"extensions-label\">\r\n                {{{type_icon}}}\r\n                <strong>{{i18n_type}}</strong>\r\n            </div>\r\n            {{#media}}\r\n                <div id=\"media_{{id}}\" data-id=\"{{id}}\" title=\"{{i18n_quality}}\" data-quality-value=\"{{ext}}/{{quality}}/{{resolution}}\" class=\"quality-label j-quality {{#fast}}is-fast{{/fast}} {{#useConverter}}use-converter{{/useConverter}}\">\r\n                    {{#is_image}}\r\n                        <div class=\"media-image-container\">\r\n                            <img class=\"media-image-preview\" height=\"20\" width=\"20\" src=\"{{url}}\"/>\r\n                        </div>\r\n                    {{/is_image}}\r\n                    <strong class=\"media-name {{type}}\">\r\n                        {{#i18n_quality}}\r\n                            {{i18n_quality}}\r\n                        {{/i18n_quality}}\r\n                        {{^i18n_quality}}\r\n                            {{quality}}\r\n                        {{/i18n_quality}}\r\n                    </strong>\r\n                    <p class=\"media-sub-wrap {{#resolution}}with-resolution{{/resolution}}\">\r\n                        {{#resolution}}\r\n                            <span class=\"media-sub-info info-resolution\">\r\n                                {{resolution}}\r\n                            </span>\r\n                        {{/resolution}}\r\n                        <span class=\"media-sub-info info-ext\">\r\n                            .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\r\n                        </span>\r\n                    </p>\r\n                </div>\r\n                {{#extraImages}}\r\n                    <div id=\"media_{{id}}_extra_img\" class=\"quality-label extra-images\">\r\n                        <div class=\"media-image-container\">\r\n                            <img class=\"media-image-preview\" height=\"20\" width=\"20\" src=\"{{firstImage}}\"/>\r\n                        </div>\r\n                        <strong class=\"media-name\">\r\n                            {{label}}\r\n                        </strong>\r\n                    </div>\r\n                {{/extraImages}}\r\n            {{/media}}\r\n        </div>\r\n    {{/media_list}}\r\n</panel>",
  "template-list": "<div class=\"quality-selector-box download-list j-download-list\">\r\n    {{{media_template}}}\r\n</div>"
};

  class SettingsManager {
    constructor() {
      this._storage = chrome.storage.local;
      this._handlerMap = new Map();
      this._options = {};
      this._defaultSettings = Object.assign({
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
        youtube_anti_adblocker_onboarding_shown_count: 0
      }, DEFAULT_TEMPLATES);
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
        self._storage.get(null, storedValues => {
          self._options = storedValues || {};
          self.loaded = true;
          self._migratePreferredQualityLevel();
          if ((!self._options["template-widget"] || !self._options["template-media"]) && typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
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
      if (this.loaded && key in this._options && this._options[key] !== undefined) {
        return this._options[key];
      }
      if (key in this._default && this._default[key] !== undefined) {
        return this._default[key];
      }
      return DEFAULT_TEMPLATES[key];
    }

    has(key) {
      return void 0 !== this._options[key] || void 0 !== DEFAULT_TEMPLATES[key];
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
