// Module 33 [detector] - Savior URL Matcher, Adblock Filter Engine, and Rules Dispatcher
export default function(module, exports, require) {
  "use strict";

  (function(globalContext) {
    var mediaParserRules = require(22);
    var settingsManager = require(7);
    var cryptoUtils = require(0);
    var mediaConstants = require(1);
    var specializedProviders = require(43);

    async function fetchRulesWithRetry(existingRules, delayMs, retryCount, endpointUrl) {
      try {
        if (delayMs > 0) {
          await cryptoUtils.sleep(delayMs);
        }
        return await fetchRules(existingRules, endpointUrl);
      } catch (networkError) {
        if (retryCount >= 3) return;
        var nextDelay = delayMs === 0 ? 2000 : delayMs * 2;
        return await fetchRulesWithRetry(existingRules, nextDelay, retryCount + 1, endpointUrl);
      }
    }

    async function fetchRules(existingRules, endpointUrl) {
      var needsUpdate = !existingRules?.ruleVersion;
      if (existingRules && existingRules.ruleVersion) {
        await fetch(endpointUrl, { method: "HEAD" }).then((response) => {
          if (response?.ok) {
            var serverVersion = response.headers.get("x-coc-coc-version") || "";
            if (existingRules.ruleVersion && serverVersion > existingRules.ruleVersion) {
              needsUpdate = true;
            }
          }
        });
      }
      if (!needsUpdate) return;
      return fetch(endpointUrl, { mode: "no-cors" }).then((response) => {
        if (response?.ok) {
          var serverVersion = response.headers.get("x-coc-coc-version") || "";
          return response.json().then((jsonData) => {
            return Object.assign(Object.assign({}, jsonData), { ruleVersion: serverVersion });
          });
        }
      });
    }

    var RULE_CATEGORY_MAP = {
      ad_filter: "",
      hide_savior: "hide-widget",
      disable_pin_rx: "disallow-pip",
      disable_savior_rx: "disable_savior_sites"
    };
    var REGEX_RULE_CATEGORIES = [];

    exports.a = new class {
      constructor() {
        this.extra = {};
        this._loadRules(mediaParserRules.a);
        this._loadRules(mediaParserRules.g, "pip");
        this._loadRules(mediaParserRules.c, "pip-allowfullscreen-false");
        this._loadRules(mediaParserRules.h, "requests");
        this._loadRules(mediaParserRules.e, "hide-widget");
        this._loadRegex(mediaParserRules.d, "disallow-pip");
        this._loadRegex(mediaParserRules.b, "disable_savior_sites");
        this._loadRules(mediaParserRules.f, "mount-directly");
        this.loadPromise = this.loadCustomRules();
      }

      async loadCustomRules() {
        var storageResult = await cryptoUtils.Storage.get(["ADLIST_CUSTOM_RULE"]);
        var customRules = storageResult?.ADLIST_CUSTOM_RULE || {};
        if (!customRules.timestamp || customRules.timestamp + 28800000 < Date.now()) {
          if (!globalContext.IS_CONTENT_SCRIPT) {
            try {
              var fetchedRules = await fetchRulesWithRetry(
                customRules,
                0,
                0,
                "https://browser.coccoc.com/api/v1/savior/rules"
              );
              if (fetchedRules) {
                fetchedRules.timestamp = Date.now();
                settingsManager.a.set("ADLIST_CUSTOM_RULE", fetchedRules);
                customRules = fetchedRules;
              } else {
                customRules.timestamp = Date.now();
                settingsManager.a.set("ADLIST_CUSTOM_RULE", customRules);
              }
            } catch (networkError) {
              console.warn("Caught an error", networkError);
            }
          }
        }

        Object.keys(customRules).forEach((ruleKey) => {
          var categoryName = RULE_CATEGORY_MAP[ruleKey];
          if (typeof categoryName === "string") {
            if (REGEX_RULE_CATEGORIES.includes(categoryName)) {
              this._loadRegex(customRules[ruleKey], categoryName);
              return;
            }
            this._loadRules(customRules[ruleKey], categoryName || undefined);
            delete customRules[ruleKey];
          }
        });

        try {
          if (customRules.youtube_logic) {
            if (typeof customRules.youtube_logic !== "object") {
              customRules.youtube_logic = JSON.parse(customRules.youtube_logic || "{}");
            }
            settingsManager.a.set(mediaConstants.w, customRules.youtube_logic);
          }
          if (customRules.gserp_selector) {
            if (typeof customRules.gserp_selector !== "object") {
              customRules.gserp_selector = JSON.parse(customRules.gserp_selector || "{}");
            }
            settingsManager.a.set(mediaConstants.i, customRules.gserp_selector);
          }
          if (customRules.custom_control) {
            if (typeof customRules.custom_control !== "object") {
              customRules.custom_control = JSON.parse(customRules.custom_control || "{}");
            }
            settingsManager.a.set(mediaConstants.c, customRules.custom_control);
          }
          delete customRules.timestamp;
          delete customRules.custom_control;
          delete customRules.youtube_logic;
          delete customRules.gserp_selector;
          if (Object.keys(customRules).length) {
            settingsManager.a.set(mediaConstants.n, customRules);
          }
        } catch (parseError) {}

        if (!globalContext.IS_CONTENT_SCRIPT) {
          specializedProviders.a.loadTestsFromServer();
        }
      }

      check(targetUrlOrElement, ruleCategory) {
        var activeRules = ruleCategory ? this.extra[ruleCategory] : this.rules;
        return this._testRules(targetUrlOrElement, activeRules);
      }

      checkWhite(targetUrlOrElement, ruleCategory) {
        var activeRules = ruleCategory ? this.extra[ruleCategory] : this.rules;
        return this._testWhiteList(targetUrlOrElement, activeRules);
      }

      checkRegex(targetTestString, ruleCategory) {
        var regexCollection = this.extra[ruleCategory];
        return Boolean(
          regexCollection &&
          Array.isArray(regexCollection) &&
          typeof targetTestString === "string" &&
          regexCollection.some((regexItem) => regexItem instanceof RegExp && regexItem.test(targetTestString))
        );
      }

      shouldWidgetAttachToParentNode(targetUrl) {
        return mediaParserRules.i.some((pattern) => pattern.test(targetUrl));
      }

      async shouldDisableSavior(targetUrl) {
        await this.loadPromise;
        var disabledSites = this.extra.disable_savior_sites || mediaParserRules.b;
        return disabledSites.some((pattern) => pattern.test(targetUrl));
      }

      _loadRules(rawFilterData, ruleCategory) {
        var parsedRules = this._parseFilters(rawFilterData);
        if (ruleCategory) {
          if (!this.extra[ruleCategory]) {
            this.extra[ruleCategory] = parsedRules;
            return;
          }
          var existingCategoryRules = this.extra[ruleCategory];
          if (Array.isArray(existingCategoryRules)) return;
          this._appendRules(existingCategoryRules, parsedRules);
        } else {
          if (!this.rules) {
            this.rules = parsedRules;
            return;
          }
          this._appendRules(this.rules, parsedRules);
        }
      }

      _appendRules(destinationRules, sourceRules) {
        destinationRules.blCosmetics.push(...sourceRules.blCosmetics);
        destinationRules.blUrls.push(...sourceRules.blUrls);
        destinationRules.wlCosmetics.push(...sourceRules.wlCosmetics);
        destinationRules.wlUrls.push(...sourceRules.wlUrls);
      }

      filterRegex(rawRegexStrings) {
        return rawRegexStrings
          .map((patternString) => {
            try {
              return new RegExp(patternString);
            } catch (regexError) {
              return;
            }
          })
          .filter(Boolean);
      }

      _loadRegex(rawRegexList, ruleCategory) {
        var compiledList = this.filterRegex(rawRegexList);
        if (Array.isArray(compiledList) && ruleCategory) {
          if (!this.extra[ruleCategory]) {
            this.extra[ruleCategory] = [];
          }
          this.extra[ruleCategory].push(...compiledList);
        }
      }

      _testRules(targetObject, ruleCollection) {
        if (!ruleCollection) return false;
        var targetUrl;
        if (typeof targetObject === "string") {
          targetUrl = targetObject;
        } else if (targetObject && (targetObject.src || targetObject.href)) {
          targetUrl = targetObject.src || targetObject.href;
        }
        if (targetUrl?.startsWith("data:")) {
          return /^data:(audio|video)/i.test(targetUrl);
        }
        if (targetUrl) {
          for (var wlIndex = 0; wlIndex < ruleCollection.wlUrls.length; wlIndex++) {
            try {
              if (ruleCollection.wlUrls[wlIndex].test(targetUrl)) return false;
            } catch (ignoreErr) {}
          }
          for (var blIndex = 0; blIndex < ruleCollection.blUrls.length; blIndex++) {
            try {
              if (ruleCollection.blUrls[blIndex].test(targetUrl)) return true;
            } catch (ignoreErr) {}
          }
        }
        if (!(targetObject instanceof EventTarget)) return false;
        var targetPageUrl = targetObject.ownerDocument.location.href;
        for (var wlCosIndex = 0; wlCosIndex < ruleCollection.wlCosmetics.length; wlCosIndex++) {
          try {
            var cosmeticRule = ruleCollection.wlCosmetics[wlCosIndex];
            if (
              (cosmeticRule.domain.startsWith("~")
                ? targetPageUrl.match(cosmeticRule.domain.slice(1))
                : targetPageUrl.match(cosmeticRule.domain)) &&
              cosmeticRule.selectors.some(targetObject.matches.bind(targetObject))
            ) {
              return false;
            }
          } catch (ignoreErr) {}
        }
        for (var blCosIndex = 0; blCosIndex < ruleCollection.blCosmetics.length; blCosIndex++) {
          try {
            var cosmeticRule = ruleCollection.blCosmetics[blCosIndex];
            if (
              (cosmeticRule.domain.startsWith("~")
                ? targetPageUrl.match(cosmeticRule.domain.slice(1))
                : targetPageUrl.match(cosmeticRule.domain)) &&
              cosmeticRule.selectors.some(targetObject.matches.bind(targetObject))
            ) {
              return true;
            }
          } catch (ignoreErr) {}
        }
        return false;
      }

      _testWhiteList(targetObject, ruleCollection) {
        if (!ruleCollection) return false;
        var targetUrl;
        if (typeof targetObject === "string") {
          targetUrl = targetObject;
        } else if (targetObject && (targetObject.src || targetObject.href)) {
          targetUrl = targetObject.src || targetObject.href;
        }
        if (targetUrl) {
          for (var wlIndex = 0; wlIndex < ruleCollection.wlUrls.length; wlIndex++) {
            try {
              if (ruleCollection.wlUrls[wlIndex].test(targetUrl)) return true;
            } catch (ignoreErr) {}
          }
        }
        if (!(targetObject instanceof EventTarget)) return false;
        var targetPageUrl = targetObject.ownerDocument.location.href;
        for (var wlCosIndex = 0; wlCosIndex < ruleCollection.wlCosmetics.length; wlCosIndex++) {
          try {
            var cosmeticRule = ruleCollection.wlCosmetics[wlCosIndex];
            if (
              (cosmeticRule.domain.startsWith("~")
                ? targetPageUrl.match(cosmeticRule.domain.slice(1))
                : targetPageUrl.match(cosmeticRule.domain)) &&
              cosmeticRule.selectors.some(targetObject.matches.bind(targetObject))
            ) {
              return true;
            }
          } catch (ignoreErr) {}
        }
        return false;
      }

      _convertWildcard(wildcardString) {
        if (/^\/.*?\/$/.test(wildcardString) && /[[\\(){}]/.test(wildcardString)) {
          return new RegExp(wildcardString.replace(/^\/|\/$/g, ""), "i");
        }
        var escapedString = wildcardString
          .replace(/[.?+\\[{()]/g, (charItem) => "\\" + charItem)
          .replace(/\^/g, "[\\w\\d_.%-]")
          .replace(/\*/g, ".*")
          .replace(/\|\|/g, "^\\w+://([\\d\\w-]+\\.)*")
          .replace(/\|/g, "$");
        return new RegExp(escapedString, "i");
      }

      _getParsingRegex() {
        if (this.regex) return this.regex;
        this.regex = new RegExp(
          "^\\s*(@@)?(/(?:[^/]|\\\\/)+/|(?:[^#$]+|#(?!#))+)?(?:(#@#|##)([^$]+))?(?:\\$(.*))?\\s*$",
          "i"
        );
        return this.regex;
      }

      _parseFilters(rawFilterSource) {
        var lineCollection =
          typeof rawFilterSource === "string" ? rawFilterSource.split(/[\r\n]+/) : rawFilterSource;
        var parsedContainer = {
          blUrls: [],
          wlUrls: [],
          blCosmetics: [],
          wlCosmetics: []
        };
        var cosmeticGroupingMap = { "": { bl: [], wl: [] } };

        for (var lineIndex = 0; lineIndex < lineCollection.length; lineIndex++) {
          var currentLine = lineCollection[lineIndex];
          if (!/^\s*!|^\s*\[.*?\]\s*$/.test(currentLine)) {
            var executionMatch;
            try {
              executionMatch = this._getParsingRegex().exec(currentLine);
              if (!executionMatch) throw new Error();
            } catch (regexExecError) {
              console.warn("AdFilter: could not parse adblock rule: " + currentLine);
              continue;
            }
            var filterDef = {
              whitelist: executionMatch[1],
              url: executionMatch[2],
              separator: executionMatch[3],
              selector: executionMatch[4],
              comment: executionMatch[5]
            };
            if (filterDef.separator) {
              var domainTokens = filterDef.url ? filterDef.url.split(/,/) : [""];
              for (var domIndex = 0; domIndex < domainTokens.length; domIndex++) {
                var domainKey = domainTokens[domIndex];
                if (!cosmeticGroupingMap[domainKey]) {
                  cosmeticGroupingMap[domainKey] = { bl: [], wl: [] };
                }
                var domainEntry = cosmeticGroupingMap[domainKey];
                if (filterDef.separator === "#@#") {
                  if (!filterDef.whitelist) {
                    cosmeticGroupingMap[""].wl.push(filterDef.selector);
                  }
                  domainEntry[filterDef.whitelist ? "bl" : "wl"].push(filterDef.selector);
                } else {
                  domainEntry[filterDef.whitelist ? "wl" : "bl"].push(filterDef.selector);
                }
              }
            } else {
              if (!filterDef.url) continue;
              var targetDestination =
                filterDef.whitelist === "@@" ? parsedContainer.wlUrls : parsedContainer.blUrls;
              try {
                var convertedRegex = this._convertWildcard(filterDef.url);
                targetDestination.push(convertedRegex);
              } catch (wildcardConversionError) {}
            }
          }
        }

        var uniqueDomains = Object.keys(cosmeticGroupingMap);
        for (var domainIndex = 0; domainIndex < uniqueDomains.length; domainIndex++) {
          var currentDomain = uniqueDomains[domainIndex];
          var domainGroup = cosmeticGroupingMap[currentDomain];
          if (domainGroup.bl.length) {
            try {
              parsedContainer.blCosmetics.push({
                domain: this._convertWildcard(currentDomain),
                selectors: domainGroup.bl
              });
            } catch (conversionError) {}
          }
          if (domainGroup.wl.length) {
            try {
              parsedContainer.wlCosmetics.push({
                domain: this._convertWildcard(currentDomain),
                selectors: domainGroup.wl
              });
            } catch (conversionError) {}
          }
        }
        return parsedContainer;
      }
    };
  }).call(this, require(13));
};
