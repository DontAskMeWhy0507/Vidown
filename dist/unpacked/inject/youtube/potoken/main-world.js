(() => {
/**
 * YouTube Proof-of-Origin Token (PoToken) Extractor (Main World)
 *
 * Checks for existing window.mintAsWebsafeString or executes the complete
 * BotGuard VM fallback to solve the InnerTube attestation challenge (ytAtN),
 * requests GenerateIT, instantiates PoTokenMinter, and stamps savior-po-token.
 */
(async () => {
  const videoId = document.body.getAttribute("savior-video-id");
  if (!videoId) {
    console.error("Could not find video ID");
    return;
  }

  if (typeof window.mintAsWebsafeString === "function") {
    const poToken = await window.mintAsWebsafeString(videoId);
    document.body.setAttribute("savior-po-token", poToken);
    return;
  }

  class BotGuardError extends TypeError {
    constructor(message, errorInfo) {
      super(message);
      this.name = "BgError";
      if (errorInfo) {
        this.info = errorInfo;
      }
    }
  }

  class Deferred {
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  }

  class EventEmitter {
    #listeners = new Map();

    emit(eventName, ...args) {
      const listenerSet = this.#listeners.get(eventName);
      if (listenerSet && listenerSet.size !== 0) {
        for (const listener of [...listenerSet]) {
          listener(...args);
        }
      }
    }

    on(eventName, listener) {
      let listenerSet = this.#listeners.get(eventName);
      if (!listenerSet) {
        listenerSet = new Set();
        this.#listeners.set(eventName, listenerSet);
      }
      listenerSet.add(listener);
    }

    off(eventName, listener) {
      const listenerSet = this.#listeners.get(eventName);
      if (listenerSet) {
        listenerSet.delete(listener);
        if (listenerSet.size === 0) {
          this.#listeners.delete(eventName);
        }
      }
    }
  }

  class BotGuardVm extends EventEmitter {
    deferredVmFunctions = new Deferred();
    defaultTimeout = 3000;

    constructor(options) {
      super();
      if (!options.globalObject || !options.globalName || !options.program) {
        throw new BotGuardError("Invalid options", { options });
      }
      this.userInteractionElement = options.userInteractionElement;
      this.vm = options.globalObject[options.globalName];
      this.program = options.program;
    }

    static async create(options) {
      return new BotGuardVm(options).load();
    }

    async load() {
      if (!this.vm) {
        throw new BotGuardError("EGOU: BotGuard unavailable");
      }
      const initFn = this.vm.a;
      if (!initFn) {
        throw new BotGuardError("ELIU: BotGuard initialization function unavailable");
      }

      const resolver = (asyncSnapshotFunction, shutdownFunction, passEventFunction, checkCameraFunction) => {
        this.deferredVmFunctions.resolve({
          asyncSnapshotFunction,
          shutdownFunction,
          passEventFunction,
          checkCameraFunction
        });
      };

      const recordEvent = (eventName, elapsedTime) => {
        this.emit("record-bg-event", { event: eventName, elapsedTime });
      };

      const incrementCount = (eventName) => {
        this.emit("increment-bg-event-count", { event: eventName });
      };

      const callbacks = [
        recordEvent,
        (errorCode) => {
          this.emit("increment-client-error-count", { errorCode });
        },
        (payloadSize) => {
          this.emit("record-payload-size", { payloadSize });
        },
        (latency, et) => {
          this.emit("record-latency", { latency, et });
        },
        incrementCount
      ];

      try {
        initFn(
          this.program,
          resolver,
          true,
          this.userInteractionElement,
          (elapsed, wasHandled, wasIgnored) => {
            let eventCode = "k";
            if (wasHandled) {
              eventCode = "h";
            } else if (wasIgnored) {
              eventCode = "u";
            }
            incrementCount(eventCode);
            recordEvent(eventCode, elapsed);
          },
          [[], []],
          undefined,
          false,
          callbacks
        );
      } catch (err) {
        throw new BotGuardError("Could not load program", { error: err });
      }
      return this;
    }

    async execute(fnName, timeoutMs, ...args) {
      return Promise.race([
        (async () => {
          const vmFunctions = await this.deferredVmFunctions.promise;
          const targetFn = vmFunctions[fnName];
          if (targetFn) {
            return targetFn(...args);
          }
          throw new BotGuardError(`${fnName} function not found`);
        })(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new BotGuardError("VM operation timed out")), timeoutMs)
        )
      ]);
    }

    async snapshot(params, timeoutMs = this.defaultTimeout) {
      return new Promise(async (resolve, reject) => {
        try {
          await this.execute(
            "asyncSnapshotFunction",
            timeoutMs,
            (result) => resolve(result),
            [params.contentBinding, params.signedTimestamp, params.webPoSignalOutput, params.skipPrivacyBuffer]
          );
        } catch (err) {
          reject(err);
        }
      });
    }
  }

  const base64CharMap = { "-": "+", _: "/", ".": "=" };
  const base64Regex = /[-_.]/g;

  class PoTokenMinter {
    constructor(mintCallback) {
      this.mintCallback = mintCallback;
    }

    static async create(integrityData, signalOutput) {
      const mintProvider = signalOutput[0];
      if (!mintProvider) {
        throw new BotGuardError("PMD:Undefined");
      }
      if (!integrityData.integrityToken) {
        throw new BotGuardError("No integrity token provided", { integrityTokenResponse: integrityData });
      }

      let rawToken = integrityData.integrityToken;
      if (base64Regex.test(rawToken)) {
        rawToken = rawToken.replace(base64Regex, (char) => base64CharMap[char]);
      }
      const binaryToken = atob(rawToken);
      const tokenBytes = new Uint8Array([...binaryToken].map((c) => c.charCodeAt(0)));

      const mintFn = await mintProvider(tokenBytes);
      if (typeof mintFn === "function") {
        return new PoTokenMinter(mintFn);
      }
      throw new BotGuardError("APF:Failed");
    }

    async mintAsWebsafeString(contentKey) {
      const rawBytes = await this.mint(contentKey);
      const base64Result = btoa(String.fromCharCode(...rawBytes));
      return base64Result.replace(/\+/g, "-").replace(/\//g, "_");
    }

    async mint(contentKey) {
      const encodedKey = new TextEncoder().encode(contentKey);
      const mintedBytes = await this.mintCallback(encodedKey);
      if (!mintedBytes) {
        throw new BotGuardError("YNJ:Undefined");
      }
      if (mintedBytes instanceof Uint8Array) {
        return mintedBytes;
      }
      throw new BotGuardError("ODM:Invalid");
    }
  }

  function parseAttestationJson(rawJsonText) {
    let sanitized = rawJsonText
      .replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
      .replace(/,\s*([\]}])/g, "$1");
    sanitized = sanitized.replace(/'((?:[^'\\]|\\[\s\S])*)'/g, (_, content) => {
      return JSON.stringify(content.replace(/\\'/g, "'"));
    }).replace(/([{,]\s*)([a-zA-Z0-9_$]+)\s*:/g, '$1"$2":');

    const parsedObject = JSON.parse(sanitized);
    for (const key of Object.keys(parsedObject)) {
      const value = parsedObject[key];
      if (typeof value === "string" && (value.trim().startsWith("{") || value.trim().startsWith("["))) {
        try {
          parsedObject[key] = JSON.parse(value);
        } catch {}
      }
    }
    return parsedObject;
  }

  const attestationMatch = document.documentElement.innerHTML.match(/window\.ytAtN\(\s*({[\s\S]*?})\s*\)/);
  if (attestationMatch) {
    try {
      const parsedConfig = parseAttestationJson(attestationMatch[1]).R;
      const webPoSignalOutput = [];

      const vmInstance = await BotGuardVm.create({
        program: parsedConfig.bgChallenge.program,
        globalName: parsedConfig.bgChallenge.globalName,
        globalObject: globalThis
      });

      const snapshotResult = await vmInstance.snapshot({ webPoSignalOutput });

      const generateResponse = await fetch("https://www.youtube.com/api/jnn/v1/GenerateIT", {
        method: "POST",
        headers: {
          "content-type": "application/json+protobuf",
          "x-goog-api-key": "AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw",
          "x-user-agent": "grpc-web-javascript/0.1"
        },
        body: JSON.stringify(["O43z0dpjhgX20SCx4KAo", snapshotResult])
      });

      const [integrityToken, estimatedTtlSecs, mintRefreshThreshold, websafeFallbackToken] = await generateResponse.json();

      const minter = await PoTokenMinter.create({
        integrityToken,
        estimatedTtlSecs,
        mintRefreshThreshold,
        websafeFallbackToken
      }, webPoSignalOutput);

      window.mintAsWebsafeString = (key) => minter.mintAsWebsafeString(key);
      const generatedToken = await minter.mintAsWebsafeString(videoId);
      document.body.setAttribute("savior-po-token", generatedToken);
    } catch (err) {
      console.error("BotGuard VM fallback execution failed:", err);
    }
  } else {
    console.error("Could not find InnerTube attestation challenge in page HTML (ytAtN). YouTube may have changed the page.");
  }
})();
})();
