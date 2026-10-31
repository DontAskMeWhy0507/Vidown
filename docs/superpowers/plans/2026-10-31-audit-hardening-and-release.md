# Audit Remediation, Security Hardening & Release Packaging Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Overview
Address all findings from the external security and code audit for `Vidown`:
1. Harden `native/host.js`:
   - Strip `file` protocol from FFmpeg's `-protocol_whitelist` when input is a remote network URL (`http/https`).
   - Add positional argument delimiter `--` before `targetUrl` in yt-dlp invocations to prevent option injection.
   - Prevent cookie leakage in system process listings by writing temporary configuration files (`--config-location`) with cleanup on exit.
2. Repo Hygiene & Licensing:
   - Neutralize hardcoded dev path in `native/com.savior.helper.json`.
   - Update `.gitignore` to exclude `dist/` build artifacts from git tracking.
   - Remove `dist/savior-extension-v2.4.65.zip` from git cache.
   - Create `LICENSE` file (MIT with Upstream Savior Attribution & Disclaimer).
   - Create comprehensive `README.md` explaining architecture, setup, the black box bundle shim, and security guarantees.
3. Test Verification & Release Packaging:
   - Create automated test suite `tests/test_audit_security_hardening_and_hygiene.js`.
   - Run full test suite (`npm test`) ensuring 100% pass rate.
   - Build clean release package in `dist/` via `scripts/package_release.js`.
   - Commit and push to GitHub (`DontAskMeWhy0507/Vidown`).

---

## Tasks

- [ ] **Task 1: Security Hardening in `native/host.js`**
  - [ ] Update FFmpeg `protocol_whitelist` in `native/host.js`: use `'http,https,tcp,tls,crypto,data'` for remote inputs; only allow `'file'` protocol when input is a local file.
  - [ ] In `runYtDlpDownload()` in `native/host.js`: pass cookie via a temporary config file (`--config-location`) with `0600` permissions instead of `--add-header Cookie:...` in process arguments, ensuring cleanup on process close and error.
  - [ ] Add positional delimiter `--` before `targetUrl` in `yt-dlp` arguments.

- [ ] **Task 2: Repo Hygiene, Manifests, and Documentation**
  - [ ] Replace hardcoded path `F:\downloadcodex\2.4.65_0\native\host.exe` in `native/com.savior.helper.json` with generic `"host.exe"`.
  - [ ] Add `dist/` to `.gitignore`.
  - [ ] Remove `dist/savior-extension-v2.4.65.zip` from git tracking (`git rm --cached`).
  - [ ] Create `LICENSE` file.
  - [ ] Create `README.md` file detailing architecture, installation, black-box core explanation, and security practices.

- [ ] **Task 3: Automated Verification Test Suite**
  - [ ] Create `tests/test_audit_security_hardening_and_hygiene.js` verifying:
    - FFmpeg protocol whitelist does not include `file` for remote URLs.
    - yt-dlp uses `--` positional separator and does not expose cookie strings in raw args.
    - `com.savior.helper.json` contains no hardcoded absolute machine paths.
    - `.gitignore` ignores `dist/`.
    - `LICENSE` and `README.md` exist and contain correct attribution.
  - [ ] Run `npm test` across all 60 test suites.

- [ ] **Task 4: Release Packaging & GitHub Push**
  - [ ] Run `node scripts/package_release.js` to produce fresh `dist/savior-extension-v2.4.65.zip`.
  - [ ] Commit all changes to git with message `fix(security): address audit findings, harden native helper, and improve repo hygiene`.
  - [ ] Push to `master` on `origin` (`DontAskMeWhy0507/Vidown`).
