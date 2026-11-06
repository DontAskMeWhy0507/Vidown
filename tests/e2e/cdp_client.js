/**
 * tests/e2e/cdp_client.js
 *
 * High-performance, zero-dependency Chrome DevTools Protocol (CDP) client
 * and browser launcher for Node.js 24+.
 *
 * Controls Chrome directly via WebSocket JSON-RPC, loads unpacked extensions
 * via Extensions.loadUnpacked, interacts with Service Workers and web pages,
 * and manages isolated browser profile lifecycles.
 */

const cp = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const net = require('net');
const EventEmitter = require('events');

const DEFAULT_CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DEFAULT_PORT = 9333;

/**
 * Checks if a specific port is free on 127.0.0.1.
 */
function isPortAvailable(port, host = '127.0.0.1') {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.on('error', () => resolve(false));
    server.listen(port, host, () => {
      server.close(() => resolve(true));
    });
  });
}

/**
 * Finds an available port on 127.0.0.1.
 * Tests preferredPort first. If busy or 0, allocates an OS ephemeral port.
 */
async function getAvailablePort(preferredPort = 0, host = '127.0.0.1') {
  if (preferredPort > 0) {
    const free = await isPortAvailable(preferredPort, host);
    if (free) return preferredPort;
  }
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, host, () => {
      const port = server.address().port;
      server.close((err) => {
        if (err) reject(err);
        else resolve(port);
      });
    });
  });
}

const findAvailablePort = getAvailablePort;

/**
 * CDPConnection wraps a single WebSocket connection to a Chrome DevTools target.
 */
class CDPConnection extends EventEmitter {
  constructor(wsUrl) {
    super();
    this.wsUrl = wsUrl;
    this.ws = null;
    this.nextId = 1;
    this.pending = new Map();
    this.isConnected = false;
    this.on('error', () => {});
  }

  async connect(timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (!this.isConnected) {
          if (this.ws) {
            try { this.ws.close(); } catch (e) {}
          }
          reject(new Error(`CDP connection to ${this.wsUrl} timed out after ${timeoutMs}ms`));
        }
      }, timeoutMs);

      try {
        this.ws = new WebSocket(this.wsUrl);

        this.ws.onopen = () => {
          this.isConnected = true;
          clearTimeout(timer);
          resolve(this);
        };

        this.ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.id !== undefined && this.pending.has(data.id)) {
              const { resolve: res, reject: rej } = this.pending.get(data.id);
              this.pending.delete(data.id);
              if (data.error) {
                rej(new Error(`CDP Error (${data.error.code}): ${data.error.message}`));
              } else {
                res(data.result);
              }
            } else if (data.method) {
              this.emit(data.method, data.params);
              this.emit('*', data.method, data.params);
            }
          } catch (err) {
            if (this.listenerCount('error') > 0) this.emit('error', err);
          }
        };

        this.ws.onerror = (err) => {
          if (!this.isConnected) {
            clearTimeout(timer);
            reject(err);
          }
          if (this.listenerCount('error') > 0) this.emit('error', err);
        };

        this.ws.onclose = () => {
          this.isConnected = false;
          // Reject any remaining pending calls
          for (const [id, { reject: rej }] of this.pending.entries()) {
            rej(new Error(`CDP WebSocket closed before response for ID ${id}`));
          }
          this.pending.clear();
          this.emit('close');
        };
      } catch (err) {
        clearTimeout(timer);
        reject(err);
      }
    });
  }

  send(method, params = {}, timeoutMs = 30000) {
    if (!this.isConnected || !this.ws) {
      return Promise.reject(new Error(`Cannot send CDP command '${method}': WebSocket not connected`));
    }

    const id = this.nextId++;
    const payload = JSON.stringify({ id, method, params });

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`CDP command '${method}' (ID ${id}) timed out after ${timeoutMs}ms`));
        }
      }, timeoutMs);

      this.pending.set(id, {
        resolve: (result) => {
          clearTimeout(timer);
          resolve(result);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        }
      });

      this.ws.send(payload);
    });
  }

  async evaluate(expression, awaitPromise = true, returnByValue = true) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      awaitPromise,
      returnByValue
    });

    if (res.exceptionDetails) {
      const desc = res.exceptionDetails.exception?.description || res.exceptionDetails.text;
      throw new Error(`Runtime.evaluate exception: ${desc}`);
    }

    return res.result?.value;
  }

  close() {
    if (this.ws) {
      try {
        this.ws.onclose = null;
        this.ws.onerror = null;
        this.ws.close();
      } catch (e) {}
      this.ws = null;
      this.isConnected = false;
    }
  }
}

/**
 * PageSession: Represents an attached Chrome tab / page.
 */
class PageSession {
  constructor(client, targetId, conn) {
    this.client = client;
    this.targetId = targetId;
    this.conn = conn;
  }

  async init() {
    await this.conn.send('Page.enable');
    await this.conn.send('Runtime.enable');
    await this.conn.send('DOM.enable');
    await this.conn.send('Network.enable');
    return this;
  }

  async navigate(url, options = {}) {
    const timeoutMs = typeof options === 'number' ? options : (options.timeoutMs || 45000);
    const waitUntil = typeof options === 'object' && options.waitUntil ? options.waitUntil : 'load';

    return new Promise(async (resolve, reject) => {
      let inFlight = 0;
      let idleTimer = null;
      let settled = false;

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error(`Navigation to ${url} timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      const checkSettle = () => {
        if (settled) return;
        if (waitUntil === 'networkidle' && inFlight === 0) {
          idleTimer = setTimeout(() => {
            settled = true;
            cleanup();
            resolve();
          }, 500);
        } else if (waitUntil === 'load' || waitUntil === 'domcontentloaded') {
          settled = true;
          cleanup();
          resolve();
        }
      };

      const onRequest = () => { inFlight++; if (idleTimer) clearTimeout(idleTimer); };
      const onResponse = () => { inFlight = Math.max(0, inFlight - 1); checkSettle(); };
      const onLoad = () => { if (waitUntil !== 'networkidle') checkSettle(); };

      const cleanup = () => {
        clearTimeout(timer);
        if (idleTimer) clearTimeout(idleTimer);
        this.conn.removeListener('Network.requestWillBeSent', onRequest);
        this.conn.removeListener('Network.loadingFinished', onResponse);
        this.conn.removeListener('Network.loadingFailed', onResponse);
        this.conn.removeListener('Page.loadEventFired', onLoad);
      };

      this.conn.on('Network.requestWillBeSent', onRequest);
      this.conn.on('Network.loadingFinished', onResponse);
      this.conn.on('Network.loadingFailed', onResponse);
      this.conn.on('Page.loadEventFired', onLoad);

      try {
        await this.conn.send('Page.navigate', { url });
      } catch (err) {
        cleanup();
        reject(err);
      }
    });
  }

  async waitForDOMAndContentScripts(timeoutMs = 15000) {
    const start = Date.now();
    let status = {
      streamSniffer: false,
      contentScript: false,
      hasMediaElement: false
    };

    while (Date.now() - start < timeoutMs) {
      try {
        const probe = await this.evaluate(`
          (() => {
            const sniffer = typeof window !== 'undefined' && window.__saviorStreamSnifferActive === true;
            const cs = typeof window !== 'undefined' && (
              !!document.querySelector('style[data-savior-css]') ||
              !!window._saviorCssCache ||
              !!document.querySelector('.widget-attach')
            );
            const media = !!document.querySelector('video, audio, ytd-watch-flexy, [data-e2e="feed-video"]');
            return { sniffer, cs, media };
          })()
        `);

        if (probe) {
          status.streamSniffer = probe.sniffer;
          status.contentScript = probe.cs;
          status.hasMediaElement = probe.media;
          if (status.streamSniffer && (status.contentScript || status.hasMediaElement)) {
            return status;
          }
        }
      } catch (_) {}
      await new Promise(r => setTimeout(r, 300));
    }

    return status;
  }

  async evaluate(expression, awaitPromise = true) {
    return this.conn.evaluate(expression, awaitPromise);
  }

  async waitForFunction(fnString, timeoutMs = 15000, pollIntervalMs = 250) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
      try {
        const result = await this.evaluate(`(${fnString})()`);
        if (result) return result;
      } catch (e) {}
      await new Promise(r => setTimeout(r, pollIntervalMs));
    }
    throw new Error(`waitForFunction timed out after ${timeoutMs}ms: ${fnString}`);
  }

  async waitForSelector(selector, timeoutMs = 15000) {
    return this.waitForFunction(`() => !!document.querySelector(${JSON.stringify(selector)})`, timeoutMs);
  }

  async click(selector) {
    return this.evaluate(`
      (() => {
        const el = document.querySelector(${JSON.stringify(selector)});
        if (!el) throw new Error("Element not found: " + ${JSON.stringify(selector)});
        el.scrollIntoView({ block: "center", inline: "center" });
        el.click();
        return true;
      })()
    `);
  }

  async scroll(deltaY = 800, steps = 5) {
    for (let i = 0; i < steps; i++) {
      await this.evaluate(`window.scrollBy({ top: ${Math.round(deltaY / steps)}, behavior: 'smooth' })`);
      await new Promise(r => setTimeout(r, 200));
    }
  }

  async close() {
    this.conn.close();
    try {
      await this.client.browserConn.send('Target.closeTarget', { targetId: this.targetId });
    } catch (e) {}
  }
}

/**
 * ChromeCDPClient: Top-level manager controlling Chrome process and extension setup.
 */
class ChromeCDPClient {
  constructor(options = {}) {
    this.chromePath = options.chromePath || process.env.CHROME_BIN || DEFAULT_CHROME_PATH;
    this.port = options.port || DEFAULT_PORT;
    this.headless = options.headless ?? false;
    this.tempProfileDir = options.userDataDir || null;
    this.customProfile = !!options.userDataDir;
    this.chromeProcess = null;
    this.browserConn = null;
    this.serviceWorkerConn = null;
    this.extensionId = null;
  }

  async launch() {
    if (!fs.existsSync(this.chromePath)) {
      throw new Error(`Chrome executable not found at: ${this.chromePath}`);
    }

    if (!this.tempProfileDir) {
      this.tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vidown_e2e_profile_'));
    }

    const launchArgs = [
      `--remote-debugging-port=${this.port}`,
      '--remote-allow-origins=*',
      '--enable-unsafe-extension-debugging',
      `--user-data-dir=${this.tempProfileDir}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-background-networking',
      '--disable-client-side-phishing-detection',
      '--disable-default-apps',
      '--disable-hang-monitor',
      '--disable-popup-blocking',
      '--disable-prompt-on-repost',
      '--disable-sync',
      '--enable-automation',
      '--metrics-recording-only',
      '--no-service-autorun',
      '--password-store=basic',
      '--autoplay-policy=no-user-gesture-required',
      '--disable-features=PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies',
      '--window-size=1280,900',
      '--disable-dev-shm-usage',
      '--no-sandbox'
    ];

    if (this.headless) {
      launchArgs.push('--headless=new');
    }

    launchArgs.push('about:blank');

    this.chromeProcess = cp.spawn(this.chromePath, launchArgs, {
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: false
    });

    this.chromeProcess.on('exit', (code, signal) => {
      this.chromeProcess = null;
    });

    // Poll for CDP endpoint
    const versionUrl = `http://127.0.0.1:${this.port}/json/version`;
    let versionInfo = null;
    const maxAttempts = 40;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise(r => setTimeout(r, 250));
      try {
        const resp = await fetch(versionUrl);
        if (resp.ok) {
          versionInfo = await resp.json();
          break;
        }
      } catch (e) {
        // Retry
      }
    }

    if (!versionInfo || !versionInfo.webSocketDebuggerUrl) {
      this.kill();
      throw new Error(`Failed to connect to Chrome CDP at ${versionUrl} after ${maxAttempts * 250}ms`);
    }

    this.browserConn = new CDPConnection(versionInfo.webSocketDebuggerUrl);
    await this.browserConn.connect();
    return this;
  }

  async loadExtension(extensionDirectory) {
    const absPath = path.resolve(extensionDirectory);
    if (!fs.existsSync(absPath)) {
      throw new Error(`Extension directory not found: ${absPath}`);
    }

    // Call Extensions.loadUnpacked
    const res = await this.browserConn.send('Extensions.loadUnpacked', { path: absPath });
    if (!res || !res.id) {
      throw new Error(`Failed to load unpacked extension from ${absPath}: ${JSON.stringify(res)}`);
    }

    this.extensionId = res.id;

    // Find and attach to Service Worker
    const swTarget = await this.waitForServiceWorker(this.extensionId);
    this.serviceWorkerConn = new CDPConnection(swTarget.webSocketDebuggerUrl);
    await this.serviceWorkerConn.connect();
    await this.serviceWorkerConn.send('Runtime.enable');

    // Ensure chrome.runtime is defined in the service worker context
    for (let i = 0; i < 30; i++) {
      try {
        const ready = await this.serviceWorkerConn.evaluate('typeof chrome !== "undefined" && !!chrome.runtime');
        if (ready) break;
      } catch (e) {}
      await new Promise(r => setTimeout(r, 150));
    }

    return {
      extensionId: this.extensionId,
      serviceWorkerTarget: swTarget
    };
  }

  async waitForServiceWorker(extensionId, timeoutMs = 20000) {
    const listUrl = `http://127.0.0.1:${this.port}/json/list`;
    const startTime = Date.now();

    while (Date.now() - startTime < timeoutMs) {
      try {
        const resp = await fetch(listUrl);
        if (resp.ok) {
          const targets = await resp.json();
          const sw = targets.find(t =>
            t.type === 'service_worker' &&
            t.url &&
            t.url.includes(extensionId)
          );
          if (sw && sw.webSocketDebuggerUrl) {
            return sw;
          }
        }
      } catch (e) {}
      await new Promise(r => setTimeout(r, 300));
    }

    throw new Error(`Service worker for extension ${extensionId} not found within ${timeoutMs}ms`);
  }

  async newPage(url = 'about:blank') {
    const target = await this.browserConn.send('Target.createTarget', { url });
    const targetId = target.targetId;

    // Discover the target's WS url
    const listUrl = `http://127.0.0.1:${this.port}/json/list`;
    let targetInfo = null;
    for (let i = 0; i < 20; i++) {
      try {
        const resp = await fetch(listUrl);
        if (resp.ok) {
          const targets = await resp.json();
          targetInfo = targets.find(t => t.id === targetId);
          if (targetInfo && targetInfo.webSocketDebuggerUrl) break;
        }
      } catch (e) {}
      await new Promise(r => setTimeout(r, 100));
    }

    if (!targetInfo || !targetInfo.webSocketDebuggerUrl) {
      throw new Error(`Could not resolve WebSocket URL for target ${targetId}`);
    }

    const pageConn = new CDPConnection(targetInfo.webSocketDebuggerUrl);
    await pageConn.connect();
    const page = new PageSession(this, targetId, pageConn);
    await page.init();

    if (url && url !== 'about:blank') {
      await page.navigate(url);
    }

    return page;
  }

  async evaluateServiceWorker(expression, awaitPromise = true) {
    if (!this.serviceWorkerConn) {
      throw new Error('Service worker connection is not established');
    }
    return this.serviceWorkerConn.evaluate(expression, awaitPromise);
  }

  async configureCustomDownloadDir(dirPath) {
    const absPath = path.resolve(dirPath);
    fs.mkdirSync(absPath, { recursive: true });

    // Set customDownloadDir in chrome.storage.local of the extension
    await this.evaluateServiceWorker(`
      new Promise((resolve, reject) => {
        chrome.storage.local.set({ customDownloadDir: ${JSON.stringify(absPath)} }, () => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(true);
          }
        });
      })
    `);

    return absPath;
  }

  async kill() {
    // 1. Send graceful Browser.close over CDP with short timeout
    if (this.browserConn && this.browserConn.isConnected) {
      try {
        await Promise.race([
          this.browserConn.send('Browser.close'),
          new Promise(r => setTimeout(r, 1500))
        ]);
      } catch (_) {}
    }

    // 2. Close WebSocket connections
    if (this.serviceWorkerConn) {
      this.serviceWorkerConn.close();
      this.serviceWorkerConn = null;
    }

    if (this.browserConn) {
      this.browserConn.close();
      this.browserConn = null;
    }

    // 3. Force-terminate the entire process tree on Windows
    if (this.chromeProcess && this.chromeProcess.pid) {
      const pid = this.chromeProcess.pid;
      if (process.platform === 'win32') {
        try {
          cp.execSync(`taskkill /pid ${pid} /T /F`, { stdio: 'ignore' });
        } catch (_) {}
      } else {
        try {
          process.kill(-pid, 'SIGKILL');
        } catch (_) {
          try { this.chromeProcess.kill('SIGKILL'); } catch (__) {}
        }
      }
      this.chromeProcess = null;
    }

    // 4. Cleanup temporary browser profile directory with retry loop for Windows file locks
    if (!this.customProfile && this.tempProfileDir) {
      for (let attempt = 0; attempt < 5; attempt++) {
        try {
          if (fs.existsSync(this.tempProfileDir)) {
            fs.rmSync(this.tempProfileDir, { recursive: true, force: true });
          }
          break;
        } catch (err) {
          await new Promise(r => setTimeout(r, 300));
        }
      }
      this.tempProfileDir = null;
    }
  }
}

module.exports = {
  CDPConnection,
  PageSession,
  ChromeCDPClient,
  isPortAvailable,
  getAvailablePort,
  findAvailablePort
};
