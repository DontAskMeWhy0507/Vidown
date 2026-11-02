# Background & Common Scripts Census

- Date: 2026-11-02
- Reference: `plans/vidown-all-phases-plan-2026-11-01.md` (Part 3 & Task `#e60nvr`)

## 1. `background.js` Inventory
- **Original Baseline File Size**: 1,154,528 bytes (raw git blob at `7598db4`)
- **Current Built File Size**: 1,185,532 bytes (raw git blob)
- **Total Webpack Slots**: 741
- **Real Function Modules**: 188
- **Null Holes**: 553
- **Entry Point**: Module 178 (`src/background/entry/service-worker-entry.js`, Service Worker initialization and message dispatch)
- **Readability / Declarator Metrics**: 0 single-letter declarators of 4,309 (0.00% single-letter)

### Subsystem Breakdown
- **messaging**: 2 modules (`src/background/messaging/`)
- **utilities**: 147 modules (`src/background/utilities/`)
- **storage**: 3 modules (`src/background/storage/`)
- **crypto**: 9 modules (`src/background/crypto/`)
- **events**: 22 modules (`src/background/events/`)
- **tabs**: 3 modules (`src/background/tabs/`)
- **entry**: 1 module (`src/background/entry/`)
- **downloads**: 1 module (`src/background/downloads/`)

## 2. `common.js` Inventory
- **Original Baseline File Size**: 518,794 bytes (raw git blob at `7598db4`)
- **Current Built File Size**: 501,606 bytes (raw git blob)
- **Total Modules**: 48
- **Entry Point**: Module 736 (`src/common/entry/common-entry.js`)
- **EE Singleton Access Point**: Global context / shared event hub
- **Readability / Declarator Metrics**: 0 single-letter declarators of 1,999 (0.00% single-letter)

### Subsystem Breakdown
- **core-utils**: 1 module (`src/common/core-utils/`)
- **utilities**: 37 modules (`src/common/utilities/`)
- **crypto**: 9 modules (`src/common/crypto/`)
- **entry**: 1 module (`src/common/entry/`)
