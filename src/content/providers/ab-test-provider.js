// Module 43 [providers] - Savior Onboarding A/B Testing and Variant Assignment Provider
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "a", () => defaultAbTestProvider);

  var mediaConstants = require(1);
  var metricsLogger = require(5);
  var hashProviderModule = require(76);
  var HashDigestProvider = require.n(hashProviderModule);

  function getSharedRegeneratorCore(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var s=n&&n.prototype instanceof c?n:c,l=Object.create(s.prototype);return u(l,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),l}var a={};function c(){}function l(){}function f(){}e=Object.getPrototypeOf;var d=[][n]?e(e([][n]())):(u(e={},n,(function(){return this})),e),h=f.prototype=c.prototype=Object.create(d);function p(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,u(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return l.prototype=f,u(h,"constructor",f),u(f,"constructor",l),l.displayName="GeneratorFunction",u(f,i,"GeneratorFunction"),u(h),u(h,i,"Generator"),u(h,n,(function(){return this})),u(h,"toString",(function(){return"[object Generator]"})),(getSharedRegeneratorCore=function(){return{w:o,m:p}})()}
  function u(t,e,r,n){var i=Object.defineProperty;try{i({},"",{})}catch(t){i=0}(u=function(t,e,r,n){function o(e,r){u(t,e,(function(t){return this._invoke(e,r,t)}))}e?i?i(t,e,{value:r,enumerable:!n,configurable:!n,writable:!n}):t[e]=r:(o("next",0),o("throw",1),o("return",2))})(t,e,r,n)}

  var asyncRunner = function(thisArgument, optionalArgument1, optionalArgument2, generatorFunction) {
    return new (optionalArgument2 || (optionalArgument2 = Promise))(function(resolvePromise, rejectPromise) {
      function advanceStep(generatorResult) {
        try {
          processStep(generatorFunction.next(generatorResult));
        } catch (stepError) {
          rejectPromise(stepError);
        }
      }
      function rejectStep(stepError) {
        try {
          processStep(generatorFunction.throw(stepError));
        } catch (throwError) {
          rejectPromise(throwError);
        }
      }
      function processStep(stepResult) {
        if (stepResult.done) {
          resolvePromise(stepResult.value);
        } else {
          var stepValue = stepResult.value;
          var wrappedPromise = stepValue instanceof (optionalArgument2 || Promise) ? stepValue : new (optionalArgument2 || Promise)(function(resolveInner) {
            resolveInner(stepValue);
          });
          wrappedPromise.then(advanceStep, rejectStep);
        }
      }
      processStep((generatorFunction = generatorFunction.apply(thisArgument, optionalArgument1 || [])).next());
    });
  };

  var referenceDate = new Date();
  if (referenceDate.getMonth() >= 8) {
    var referenceDay = referenceDate.getDate();
    if (referenceDay >= 8) {}
    if (referenceDay >= 11) {}
  }

  class OnboardingABTestProvider {
    constructor() {
      this.tests = {
        youtubeMobileonboarding: {
          groups: ["A", null, null, null, null, null, null, null, null, null, "B", null, null, null, null, null, null, null, null, null],
          buckets: 20
        },
        setCCAsDefaultonboarding: {
          groups: ["A", ...Array(49).fill(null), ...Array(49).fill(null), "B"],
          buckets: 100
        },
        accountOnboardingonboarding: {
          groups: ["A"],
          buckets: 1
        }
      };
      this.serverRuleLoadPromise = this.loadTestsFromServer();
      this.cookies = {};
      this.forced = {};
    }

    loadTestsFromServer() {
      return asyncRunner(this, void 0, void 0, getSharedRegeneratorCore().m(function loadTestsGenerator() {
        var selfContext = this;
        return getSharedRegeneratorCore().w(function(generatorState) {
          for (;;) {
            switch (generatorState.n) {
              case 0:
                return generatorState.a(2, new Promise((resolveStorageLoad) => {
                  chrome.storage.local.get(mediaConstants.n, (storedItems) => {
                    asyncRunner(selfContext, void 0, void 0, getSharedRegeneratorCore().m(function parseStorageGenerator() {
                      var storageData;
                      return getSharedRegeneratorCore().w(function(innerState) {
                        for (;;) {
                          switch (innerState.n) {
                            case 0:
                              storageData = (storedItems && storedItems[mediaConstants.n]) || {};
                              if (storageData.ab_test_data) {
                                Object.entries(storageData.ab_test_data).forEach((testEntry) => {
                                  var testIdentifier = testEntry[0];
                                  var testDefinition = testEntry[1];
                                  if (testDefinition.groups && testDefinition.buckets) {
                                    selfContext.tests[testIdentifier] = testDefinition;
                                  }
                                });
                              }
                              resolveStorageLoad();
                            case 1:
                              return innerState.a(2);
                          }
                        }
                      }, parseStorageGenerator, selfContext);
                    }));
                  });
                }));
            }
          }
        }, loadTestsGenerator, this);
      }));
    }

    processRequest(requestContext) {
      var requestedTestName = requestContext.testName;
      return asyncRunner(this, void 0, void 0, getSharedRegeneratorCore().m(function processRequestGenerator() {
        return getSharedRegeneratorCore().w(function(generatorState) {
          for (;;) {
            switch (generatorState.n) {
              case 0:
                if (requestedTestName) {
                  generatorState.n = 1;
                  break;
                }
                return generatorState.a(2, Promise.reject("No test name"));
              case 1:
                if (!this.serverRuleLoadPromise) {
                  generatorState.n = 3;
                  break;
                }
                generatorState.n = 2;
                return this.serverRuleLoadPromise;
              case 2:
                this.serverRuleLoadPromise = null;
              case 3:
                return generatorState.a(2, this.getCookies().then(this.getTest.bind(this, requestedTestName)));
            }
          }
        }, processRequestGenerator, this);
      }));
    }

    getCookies() {
      return new Promise((resolveCookies, rejectCookies) => {
        chrome.cookies.getAll({ url: "https://coccoc.com" }, (retrievedCookies) => {
          var uidCookie = retrievedCookies.find((cookie) => cookie.name === "uid");
          var vidCookie = retrievedCookies.find((cookie) => cookie.name === "vid");
          var forceAbCookie = retrievedCookies.find((cookie) => cookie.name === "forceAB");
          var idCookie = retrievedCookies.find((cookie) => cookie.name === "idCookie");

          if (uidCookie && uidCookie.value) {
            this.cookies = {
              uid: uidCookie.value,
              idCookie: idCookie ? idCookie.value : undefined,
              vid: vidCookie ? vidCookie.value : undefined
            };
            if (forceAbCookie && forceAbCookie.value) {
              this.cookies.forceAB = forceAbCookie.value;
              try {
                var decodedForcedConfig = decodeURIComponent(this.cookies.forceAB);
                this.forced = OnboardingABTestProvider.parseForcedTests(decodedForcedConfig);
              } catch (parseError) {
                console.warn("Cannot parse forced tests");
              }
            }
            resolveCookies();
          } else {
            rejectCookies("No uid cookie");
          }
        });
      });
    }

    getTest(testName) {
      var forcedGroupIndex = this.forced[testName];
      if (forcedGroupIndex !== undefined) {
        var forcedGroupName = this.tests[testName] ? this.tests[testName].groups[forcedGroupIndex] : null;
        return Promise.resolve({ group: forcedGroupIndex, groupName: forcedGroupName });
      }

      var activeTestConfig = this.tests[testName];
      if (!activeTestConfig || (activeTestConfig.time && activeTestConfig.time.end && (Date.parse(activeTestConfig.time.end) < Date.now() || (activeTestConfig.time.start && Date.parse(activeTestConfig.time.start) > Date.now())))) {
        return Promise.resolve({ group: null });
      }

      var vidIdentifier = this.cookies.vid;
      var assignedGroup = OnboardingABTestProvider.generateGroup(activeTestConfig.groups, activeTestConfig.buckets, vidIdentifier, testName);
      OnboardingABTestProvider.generateGroup(activeTestConfig.groups, activeTestConfig.buckets, this.cookies.uid, testName);

      if (!assignedGroup) {
        return Promise.resolve({ group: null });
      }

      var groupIndex = activeTestConfig.groups.indexOf(assignedGroup);
      return Promise.resolve({ group: groupIndex, groupName: assignedGroup });
    }

    static generateGroup(candidateGroups, totalBuckets, seedValue, testName = "") {
      var generatedHash = (new HashDigestProvider.a()).update(seedValue + String(testName)).digest("hex").slice(-12);
      var calculatedBucket = parseInt(generatedHash, 16) % totalBuckets;
      var chosenGroupName = candidateGroups[calculatedBucket] || null;

      if (testName === "setCCAsDefaultonboarding" && chosenGroupName) {
        var variantScoreMapping = { A: 1, B: 2, C: 3, D: 4 };
        metricsLogger.a.log("Onboarding.setCCAsDefault.Variant", variantScoreMapping[chosenGroupName]);
      }
      return chosenGroupName;
    }

    static parseForcedTests(rawForcedString) {
      return (rawForcedString || "").split(",").filter(Boolean).reduce(function(accumulatedMap, stringToken) {
        var splitToken = stringToken.split(":");
        accumulatedMap[splitToken[0]] = Number(splitToken[1]);
        return accumulatedMap;
      }, {});
    }

    checkIsNewUser(maximumDaysThreshold = 1) {
      var rawIdCookie = decodeURIComponent(this.cookies.idCookie || "");
      var validPatternMatch = rawIdCookie.match(/\d+:\d+:\w+$/);
      if (!validPatternMatch) return null;
      var timestampSeconds = Number(rawIdCookie.split(":")[1]);
      var cookieTimestampDate = new Date(timestampSeconds * 86400 * 1000);
      var daysElapsedSinceCreation = (Date.now() - Number(cookieTimestampDate)) / (1000 * 86400);
      return daysElapsedSinceCreation < maximumDaysThreshold;
    }
  }

  var defaultAbTestProvider = new OnboardingABTestProvider();
};
