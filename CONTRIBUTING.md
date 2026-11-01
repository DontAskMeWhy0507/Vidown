# Contributing to Vidown

Welcome to the Vidown open-source project! We are building a high-performance, modular, and privacy-first browser media detection and downloader extension.

## Architecture Overview

Vidown follows a modular ES module architecture designed for clean separation of concerns and effortless platform extensibility:

```
src/content/
├── index.js                     # Main content script entry point (VidownContentScript)
├── core/
│   ├── constants.js             # Media types, MIME mapping, quality profiles, and action types
│   ├── events.js                # Shared EventBus / EventEmitter (window.EE)
│   ├── storage.js               # Chrome storage wrapper
│   └── utils.js                 # DOM query, file size formatting, AES link helpers
├── crypto/
│   ├── crypto-rollup.js         # Consolidated CryptoJS AES engine
│   └── aes.js                   # Stream key deciphering helpers
├── detector/
│   ├── attribute-stamper.js     # Companion attribute reader/stamper (savior-vid, savior-video-detail)
│   ├── dom-scanner.js           # MutationObserver media detector & element scanner
│   └── index.js                 # Orchestration engine
├── providers/
│   ├── index.js                 # Provider registry & URL dispatcher
│   ├── tiktok.js                # TikTok video extractor
│   ├── facebook.js              # Facebook Reels / Stories extractor
│   ├── youtube.js               # YouTube player & cipher extractor
│   └── hls-dash.js              # Generic HLS (.m3u8) and DASH (.mpd) stream parser
└── vendor/
    ├── elliptic/                # Canonical BN / elliptic mathematics
    ├── parser/                  # Acorn AST parser and code generator
    └── regenerator-core.js      # Shared Babel regenerator-runtime core
```

---

## Adding a New Platform Extractor

Adding support for a new video platform is straightforward. Create a new extractor in `src/content/providers/`:

```javascript
// src/content/providers/myplatform.js
const MyPlatformExtractor = {
  name: 'myplatform',
  
  // URL matcher
  match(url) {
    return /^https?:\/\/(www\.)?myplatform\.com/i.test(url);
  },
  
  // Media extraction logic
  extract(videoElement, context = {}) {
    const src = videoElement.src || videoElement.getAttribute('src');
    return {
      type: 'video',
      ext: 'mp4',
      url: src,
      title: document.title,
      platform: 'myplatform'
    };
  }
};

export default MyPlatformExtractor;
```

Then register it in `src/content/providers/index.js`:
```javascript
import MyPlatformExtractor from './myplatform.js';
// Add to registeredProviders array
```

---

## Testing & Quality Gates

All contributions must pass the automated test suites:

```bash
# Run all automated tests (68+ test suites)
npm test

# Run golden characterization tests on real DOM fixtures
node tests/test_golden_behavior.js

# Run vendor deduplication and size gates
node tests/test_milestone_2_dedupe.js

# Build production bundle
npm run build:content

# Package extension zip
npm run package
```

### Constraints & Invariants
- **Zero Regression**: Media detection on TikTok, Facebook, YouTube, and Generic HLS must pass 100%.
- **Bundle & Package Limits**: Release zip `dist/savior-extension-v2.4.65.zip` must remain $\le 1.15\text{ MB}$ with 0 `node_modules`.
- **Target Platform**: Chrome Manifest V3 (`minimum_chrome_version: 116`).
