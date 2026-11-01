# Vidown (VidManager Media Downloader Extension)

Vidown is an open-source, high-efficiency media detection and download browser extension for Chrome Manifest V3.

## Features

- **Universal Platform Support**: Native media detection for TikTok, Facebook Reels & Stories, YouTube (Watch & Shorts), Instagram, Douyin, X, and generic HLS/DASH streams (`.m3u8`, `.mpd`).
- **High-Performance Architecture**: Modular ES module structure with deduplicated vendor dependencies (consolidated `bn.js`, isolated AST parser/generator, shared Babel regenerator runtime core).
- **Chrome MV3 Ready**: Designed for modern Chrome environments (`minimum_chrome_version: 116`) with declarative service workers and secure isolated content scripts.
- **Privacy & Security First**: Zero tracking, zero telemetry, local AES stream decryption, and strict sandboxed execution.

## Getting Started

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/DontAskMeWhy0507/Vidown.git
cd Vidown

# Install dev dependencies
npm install

# Run the automated test suite
npm test

# Build content script
npm run build:content

# Package extension for Chrome Web Store
npm run package
```

### Loading in Chrome
1. Navigate to `chrome://extensions/` in Google Chrome.
2. Enable **Developer mode** in the upper right corner.
3. Click **Load unpacked** and select the repository root folder.

## Project Structure

```
├── manifest.json                # Chrome Manifest V3 configuration
├── content-script.js            # Compiled production content script bundle
├── src/content/                 # Modular ES module source files
│   ├── core/                    # Core utilities, constants, and event bus
│   ├── crypto/                  # Stream deciphering & CryptoJS rollup
│   ├── detector/                # DOM scanner and companion attribute stamper
│   ├── providers/               # Platform-specific extractors (TikTok, Facebook, YouTube, HLS)
│   └── vendor/                  # Canonical vendor packages
├── tests/                       # 68+ automated regression & golden characterization tests
├── types/                       # TypeScript declaration files
└── dist/                        # Release packages (savior-extension-v2.4.65.zip)
```

## Contributing

See [CONTRIBUTING.md](file:///f:/Vidown/CONTRIBUTING.md) for guidelines on code standards, testing, and adding new media providers.

## License

MIT License.
