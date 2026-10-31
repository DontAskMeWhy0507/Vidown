/**
 * VidManager - Popup Script
 * 2 Main Sections: Download Manager Launcher & Recent Downloads List.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  const recentMediaList = document.getElementById('recent-media-list');
  const recentEmptyState = document.getElementById('recent-empty-state');
  const recentTotalBadge = document.getElementById('recent-total-badge');
  const btnFooterManager = document.getElementById('btn-footer-manager');
  const toggleOnpageBar = document.getElementById('toggle-onpage-bar');
  const toggleImageBar = document.getElementById('toggle-image-bar');

  // Handle On-Page Toolbar quick toggle (Video)
  if (toggleOnpageBar) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['on_page_buttons', 'onPageButtonsEnabled'], (data) => {
        const isEnabled = data.on_page_buttons !== undefined ? data.on_page_buttons : data.onPageButtonsEnabled;
        toggleOnpageBar.checked = (isEnabled !== false);
      });
    }

    toggleOnpageBar.addEventListener('change', () => {
      const isEnabled = toggleOnpageBar.checked;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
          on_page_buttons: isEnabled,
          onPageButtonsEnabled: isEnabled
        }, () => {
          showToast(isEnabled ? 'Đã bật thanh tải trên video' : 'Đã tắt thanh tải trên video');
        });
      }
    });
  }

  // Handle On-Page Toolbar quick toggle (Images)
  if (toggleImageBar) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['image_download_enabled', 'imageDownloadEnabled'], (data) => {
        const isEnabled = data.image_download_enabled !== undefined ? data.image_download_enabled : data.imageDownloadEnabled;
        toggleImageBar.checked = (isEnabled !== false);
      });
    }

    toggleImageBar.addEventListener('change', () => {
      const isEnabled = toggleImageBar.checked;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
          image_download_enabled: isEnabled,
          imageDownloadEnabled: isEnabled
        }, () => {
          showToast(isEnabled ? 'Đã bật nút tải trên ảnh' : 'Đã tắt nút tải trên ảnh');
        });
      }
    });
  }

  const recentlyDeletedIds = new Set();

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatBytes(bytes) {
    if (!bytes || isNaN(bytes) || bytes <= 0) return '';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let val = bytes;
    while (val >= 1024 && i < units.length - 1) {
      val /= 1024;
      i++;
    }
    return `${val.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
  }

  function formatTime(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    if (isNaN(d.getTime())) return '';
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const timeStr = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    if (isToday) return timeStr;
    return `${d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })} ${timeStr}`;
  }

  // Open Downloads Manager
  function openDownloadsManager() {
    try {
      chrome.runtime.sendMessage({ action: 'openDownloadsPage' });
    } catch (_) {
      try {
        if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
          chrome.tabs.create({ url: chrome.runtime.getURL('downloads/downloads.html') });
        }
      } catch (__) {}
    }
  }

  if (btnFooterManager) btnFooterManager.addEventListener('click', openDownloadsManager);

  // Notify background that user opened popup
  try {
    chrome.runtime.sendMessage({ action: 'popupOpened' });
  } catch (_) {}

  // Load and render recently downloaded videos (fully synchronized with Download Manager)
  // Single-flight wrapper: concurrent triggers (storage change, downloads events,
  // port messages, heartbeat) share one in-flight load; a call that arrives while
  // busy schedules exactly one trailing run. Prevents stale snapshots rendering
  // over fresh ones and collapses progress-write bursts into one reload.
  let _recentLoadInFlight = false;
  let _recentLoadPending = false;
  async function _loadRecentDownloadsImpl() {
    try {
      let historyList = [];
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        const storageData = await chrome.storage.local.get(['downloadHistory']);
        historyList = (Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : []).filter(item => {
          if (!item) return false;
          const strId = String(item.id || '');
          const strChromeId = item.chromeId ? String(item.chromeId) : '';
          return !recentlyDeletedIds.has(strId) && (!strChromeId || !recentlyDeletedIds.has(strChromeId));
        });
      }

      // Query active engine tasks
      let activeTaskIds = [];
      try {
        const bgStatus = await new Promise((res) => {
          chrome.runtime.sendMessage({ action: 'getDownloadStatus' }, (r) => {
            if (chrome.runtime?.lastError) return res(null);
            res(r);
          });
        });
        if (bgStatus) {
          if (Array.isArray(bgStatus.activeTaskIds)) {
            activeTaskIds = bgStatus.activeTaskIds.map(String);
          } else if (Array.isArray(bgStatus.activeDownloads)) {
            activeTaskIds = bgStatus.activeDownloads.map(t => String(t.id));
          }
        }
      } catch (_) {}

      // Only query browser downloads that were created by Savior
      const managedChromeIds = new Set(historyList
        .filter(item => item && (item.chromeId || item.isBrowserDownload))
        .map(item => String(item.chromeId || item.id)));

      let chromeDownloads = [];
      try {
        if (typeof chrome !== 'undefined' && chrome.downloads && chrome.downloads.search) {
          const rawDownloads = await chrome.downloads.search({ orderBy: ['-startTime'], limit: 50 });
          const myExtId = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) ? chrome.runtime.id : '';
          chromeDownloads = (rawDownloads || []).filter(cd => {
            const strId = String(cd.id);
            if (recentlyDeletedIds.has(strId)) return false;
            if (managedChromeIds.has(strId)) return true;
            if (myExtId && cd.byExtensionId === myExtId) return true;
            if (activeTaskIds.includes(strId)) return true;
            return false;
          });
        }
      } catch (_) {}

      const mediaDownloads = chromeDownloads.map(cd => {
        const fn = cd.filename ? cd.filename.replace(/\\/g, '/').split('/').pop() : 'download';
        const isAudio = /\.(mp3|m4a|aac|flac|wav)$/i.test(cd.filename || '');
        let state = 'downloading';
        if (cd.state === 'complete') {
          state = 'completed';
        } else if (cd.state === 'interrupted') {
          state = (cd.error === 'USER_CANCELED') ? 'canceled' : 'error';
        }

        const totalBytes = cd.totalBytes > 0 ? cd.totalBytes : cd.fileSize || 0;
        const receivedBytes = cd.bytesReceived || 0;
        const pct = totalBytes > 0 ? `${Math.round((receivedBytes / totalBytes) * 100)}%` : (state === 'completed' ? '100%' : '0%');

        return {
          id: cd.id,
          chromeId: cd.id,
          title: fn,
          filename: cd.filename || '',
          totalSize: totalBytes,
          startTime: cd.startTime ? new Date(cd.startTime).getTime() : Date.now(),
          state,
          percent: pct,
          type: isAudio ? 'audio' : 'video'
        };
      });

      // Merge native history and managed chrome downloads, deduplicating by key
      const mergedMap = new Map();
      const nowTs = Date.now();
      let storageNeedsHealing = false;

      for (const item of historyList) {
        if (!item) continue;
        // Normalize state strings identical to downloads.js
        if (item.state === 'in_progress') item.state = 'downloading';
        if (item.state === 'complete') item.state = 'completed';
        if (item.state === 'interrupted' && item.error !== 'USER_CANCELED') item.state = 'error';
        if (item.state === 'cancelled' || item.error === 'USER_CANCELED') item.state = 'canceled';

        const isFinished = item.percent === '100%' || item.speed === 'Hoàn thành';
        if (isFinished && item.state !== 'canceled' && item.state !== 'deleted' && item.state !== 'error') {
          item.state = 'completed';
        }

        if (item.state === 'downloading') {
          const isAct = activeTaskIds.includes(String(item.id)) || (item.chromeId && activeTaskIds.includes(String(item.chromeId)));
          if (!isAct) {
            if (item.outputFile || item.outputPath || isFinished) {
              item.state = 'completed';
              item.percent = '100%';
              storageNeedsHealing = true;
            } else if (nowTs - (item.startTime || 0) > 300000) {
              item.state = 'error';
              item.errorMessage = 'Bị gián đoạn';
              storageNeedsHealing = true;
            }
          }
        }

        const key = getItemDedupeKey(item);
        if (key && !mergedMap.has(key)) {
          const itemStartTime = Number(item.startTime || item.timestamp || item.endTime) || Date.now();
          mergedMap.set(key, {
            ...item,
            startTime: itemStartTime
          });
        }
      }

      if (storageNeedsHealing) {
        try {
          chrome.storage.local.set({ downloadHistory: historyList.slice(0, 200) });
        } catch (_) {}
      }

      for (const item of mediaDownloads) {
        let key = getItemDedupeKey(item);
        if (item.chromeId) {
          for (const [k, ex] of mergedMap.entries()) {
            if (String(ex.chromeId || '') === String(item.chromeId) || String(ex.id || '') === String(item.chromeId)) {
              key = k;
              break;
            }
          }
        }
        if (key && !mergedMap.has(key)) {
          mergedMap.set(key, item);
        } else if (key && mergedMap.has(key) && item.chromeId) {
          const existing = mergedMap.get(key);
          if (!existing.chromeId) existing.chromeId = item.chromeId;
          if (!existing.filename && item.filename) existing.filename = item.filename;
          if ((!existing.startTime || existing.startTime <= 0) && item.startTime) {
            existing.startTime = item.startTime;
          }
          if (item.state === 'completed' || item.state === 'canceled') {
            existing.state = item.state;
          } else if (item.state === 'deleted' && existing.state !== 'completed') {
            existing.state = 'deleted';
          }
        }
      }

      const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
      const recentItems = Array.from(mergedMap.values())
        .filter(item => {
          if (!item) return false;
          if (item.state === 'downloading' || item.state === 'in_progress') return true;
          const itemTime = Number(item.startTime || item.timestamp || item.endTime) || 0;
          return itemTime >= oneDayAgo;
        })
        .sort((a, b) => {
          const tA = Number(a.startTime || a.timestamp || a.endTime) || 0;
          const tB = Number(b.startTime || b.timestamp || b.endTime) || 0;
          return tB - tA;
        });

      if (recentTotalBadge) {
        recentTotalBadge.textContent = `${recentItems.length} tệp`;
      }

      renderRecentDownloads(recentItems);
    } catch (_) {
      renderRecentDownloads([]);
    }
  }

  async function loadRecentDownloads() {
    if (_recentLoadInFlight) {
      _recentLoadPending = true;
      return;
    }
    _recentLoadInFlight = true;
    try {
      await _loadRecentDownloadsImpl();
    } finally {
      _recentLoadInFlight = false;
      if (_recentLoadPending) {
        _recentLoadPending = false;
        loadRecentDownloads();
      }
    }
  }

  function getItemDedupeKey(it) {
    if (!it) return '';
    const idKey = it.id || it.taskId || it.chromeId;
    const urlKey = it.url || it.videoUrl || '';
    const rawFn = it.filename || it.outputFile || it.outputPath || '';
    const baseName = rawFn ? rawFn.replace(/\\/g, '/').split('/').pop() : '';
    const title = (it.title || '').trim();
    if (idKey) return String(idKey).toLowerCase();
    if (urlKey) return String(urlKey).toLowerCase();
    return (baseName || title || '').toLowerCase();
  }

  function openRecentFile(item) {
    if (!item) return;
    const targetPath = item.outputPath || item.outputFile || item.filename || '';
    const fn = item.filename || item.outputFile || item.outputPath || item.title || '';
    showToast(`Đang mở: ${item.title || 'tệp'}...`);
    chrome.runtime.sendMessage({
      action: 'openFile',
      id: item.id,
      chromeId: item.chromeId,
      path: targetPath,
      filename: fn,
      title: item.title || ''
    }, (res) => {
      if (chrome.runtime?.lastError) return;
      if (res && res.success) {
        showToast(`Đang phát: ${item.title || 'video'}`);
      } else {
        const isNotFound = res?.fileNotFound || (res?.error && res.error.includes('Không tìm thấy'));
        if (isNotFound && !res?.openedFolder) {
          markItemMissing(item);
        } else {
          showToast(res && res.error ? res.error : `Đang mở: ${item.title || 'video'}`);
        }
      }
    });
  }

  function markItemMissing(item) {
    if (!item) return;
    item.state = 'deleted';
    showToast('Tệp không còn trên đĩa. Bấm Thử lại để tải lại.');
    loadRecentDownloads();
  }

  function retryRecentItem(item) {
    if (!item) return;
    const retryTaskId = item.id || Date.now();
    showToast('Đang kết nối tải lại video...');

    item.state = 'downloading';
    item.speed = 'Đang kết nối lại...';
    delete item.error;
    delete item.errorMessage;

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['downloadHistory'], (res) => {
        const list = Array.isArray(res.downloadHistory) ? res.downloadHistory : [];
        const found = list.find(it => it && (String(it.id) === String(item.id) || String(it.chromeId) === String(item.chromeId)));
        if (found) {
          found.state = 'downloading';
          found.speed = 'Đang kết nối lại...';
          delete found.error;
          delete found.errorMessage;
          chrome.storage.local.set({ downloadHistory: list });
        }
      });
    }

    chrome.runtime.sendMessage({
      action: 'downloadNative',
      taskId: retryTaskId,
      url: item.url || item.videoUrl,
      videoUrl: item.videoUrl || item.url,
      audioUrl: item.audioUrl || '',
      isYouTubeDash: Boolean(item.isYouTubeDash),
      title: item.title,
      quality: item.quality || (item.type === 'audio' ? 'audio' : 'best'),
      soundOnly: Boolean(item.soundOnly || item.type === 'audio'),
      referer: item.referer || item.pageUrl || item.url,
      pageUrl: item.pageUrl || item.url,
      outputDir: item.outputDir || '',
      duration: item.duration || 0,
      size: item.totalBytes || item.size || 0
    }, () => {
      loadRecentDownloads();
    });
  }

  function openRecentFolder(item) {
    if (!item) return;
    const targetPath = item.outputPath || item.outputFile || item.filename || '';
    chrome.runtime.sendMessage({
      action: 'showInFolder',
      chromeId: item.chromeId,
      path: targetPath
    });
  }

  function cancelRecentItem(item) {
    if (!item) return;
    const strId = String(item.id || '');
    const strChromeId = item.chromeId ? String(item.chromeId) : '';

    const numChromeId = Number(item.chromeId || item.id);
    if (!isNaN(numChromeId) && numChromeId > 0 && typeof chrome !== 'undefined' && chrome.downloads) {
      try {
        chrome.downloads.cancel(numChromeId, () => {});
      } catch (_) {}
    }

    chrome.runtime.sendMessage({
      action: 'cancelDownload',
      taskId: strId,
      chromeId: strChromeId
    }, () => {
      if (chrome.runtime?.lastError) return;
      showToast('Đã hủy tải xuống');
      loadRecentDownloads();
    });
  }

  function removeRecentItem(item) {
    if (!item) return;
    const strId = String(item.id || '');
    const strChromeId = item.chromeId ? String(item.chromeId) : '';
    if (strId) recentlyDeletedIds.add(strId);
    if (strChromeId) recentlyDeletedIds.add(strChromeId);

    const numChromeId = Number(item.chromeId || item.id);
    if (!isNaN(numChromeId) && numChromeId > 0 && typeof chrome !== 'undefined' && chrome.downloads) {
      try {
        chrome.downloads.cancel(numChromeId, () => {
          try { chrome.downloads.erase({ id: item.chromeId }, () => {}); } catch (_) {}
        });
      } catch (_) {
        try { chrome.downloads.erase({ id: item.chromeId }, () => {}); } catch (_) {}
      }
    }

    chrome.runtime.sendMessage({
      action: 'removeDownload',
      id: strId,
      chromeId: strChromeId
    }, () => {
      if (chrome.runtime?.lastError) return;
      showToast('Đã xoá khỏi danh sách');
      loadRecentDownloads();
    });
  }

  function renderRecentDownloads(items) {
    if (!recentMediaList) return;
    recentMediaList.innerHTML = '';

    if (!items || items.length === 0) {
      if (recentEmptyState) recentEmptyState.style.display = 'block';
      return;
    }

    if (recentEmptyState) recentEmptyState.style.display = 'none';

    // Show up to 15 most recent downloads in popup
    const displayItems = items.slice(0, 15);

    displayItems.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'recent-card';
      card.dataset.taskId = String(item.id || item.chromeId || '');

      const isAudio = item.type === 'audio' || /\.(mp3|m4a|aac|flac|wav)$/i.test(item.filename || item.title || '');
      const isDeleted = item.state === 'deleted' || item.fileMissing;
      const isCanceled = item.state === 'canceled' || item.state === 'cancelled' || item.error === 'USER_CANCELED';
      const isError = item.state === 'error' || (item.state === 'interrupted' && !isCanceled);
      const isPaused = item.state === 'paused';
      const isDownloading = (item.state === 'downloading' || item.state === 'in_progress') && !isCanceled && !isError;
      const isCompleted = (item.state === 'completed' || item.percent === '100%') && !isDeleted && !isCanceled && !isError && !isDownloading;

      if (isDeleted) {
        card.classList.add('recent-card-missing');
      }

      let stateBadge = '';
      if (isDownloading) {
        const speedText = item.speed ? ` • ${item.speed}` : '';
        stateBadge = `<span class="status-badge downloading">Đang tải: ${item.percent || '0%'}${speedText}</span>`;
      } else if (isCompleted) {
        stateBadge = `<span class="status-badge completed">Đã hoàn thành</span>`;
      } else if (isCanceled) {
        stateBadge = `<span class="status-badge canceled">Đã hủy</span>`;
      } else if (isPaused) {
        stateBadge = `<span class="status-badge paused">Tạm dừng</span>`;
      } else if (isDeleted) {
        stateBadge = `<span class="status-badge error" style="background:#fef2f2;color:#ef4444;border-color:#fee2e2;">Đã xóa</span>`;
      } else if (isError) {
        stateBadge = `<span class="status-badge error">Gián đoạn</span>`;
      } else {
        stateBadge = `<span class="status-badge completed">Đã hoàn thành</span>`;
      }

      const sizeStr = item.totalSize ? formatBytes(item.totalSize) : (item.size || '');
      const timeStr = formatTime(item.startTime);

      card.innerHTML = `
        <div class="card-top">
          <div class="card-icon">
            ${isAudio ? `
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            ` : `
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            `}
          </div>
          <div class="card-details">
            <span class="card-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title || 'Tệp')}</span>
            <div class="card-meta">
              ${stateBadge}
              ${sizeStr ? `<span>${sizeStr}</span>` : ''}
              ${timeStr ? `<span>${timeStr}</span>` : ''}
            </div>
            ${isDownloading ? `
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${item.percent || '5%'}"></div>
              </div>
            ` : ''}
          </div>
        </div>
        <div class="card-actions">
          ${(isError || isCanceled || isDeleted) ? `
            <button class="btn-card-action retry btn-retry-item" title="Tải lại video này">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 4v6h-6"></path>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              Tải lại
            </button>
          ` : ''}
          ${(isCompleted || isDownloading) ? `
            <button class="btn-card-action btn-open-folder" title="Mở thư mục chứa file">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              Thư mục
            </button>
          ` : ''}
          <button class="btn-card-action danger btn-remove-item" title="${isDownloading ? 'Hủy tải xuống' : 'Xóa khỏi danh sách'}">
            ${isDownloading ? `
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Hủy
            ` : `
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Xóa
            `}
          </button>
        </div>
      `;

      if (isCompleted) {
        card.classList.add('clickable');
        card.setAttribute('title', 'Nhấn để mở tệp tin');
        card.addEventListener('click', (e) => {
          if (e.target.closest('.card-actions')) return;
          openRecentFile(item);
        });
      }

      const btnRetryItem = card.querySelector('.btn-retry-item');
      if (btnRetryItem) {
        btnRetryItem.addEventListener('click', (e) => {
          e.stopPropagation();
          retryRecentItem(item);
        });
      }

      const btnOpenFolder = card.querySelector('.btn-open-folder');
      if (btnOpenFolder) {
        btnOpenFolder.addEventListener('click', (e) => {
          e.stopPropagation();
          openRecentFolder(item);
        });
      }

      const btnRemoveItem = card.querySelector('.btn-remove-item');
      if (btnRemoveItem) {
        btnRemoveItem.addEventListener('click', (e) => {
          e.stopPropagation();
          if (isDownloading) {
            if (confirm('Bạn có muốn hủy tải xuống video này không?')) {
              cancelRecentItem(item);
            }
          } else {
            removeRecentItem(item);
          }
        });
      }

      recentMediaList.appendChild(card);
    });
  }

  // Initial load
  loadRecentDownloads();

  // Listen for storage changes & background progress messages
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === 'local') {
        if (changes.downloadHistory || changes.customDownloadDir) {
          loadRecentDownloads();
        }
        if (toggleOnpageBar && (changes.on_page_buttons || changes.onPageButtonsEnabled)) {
          const change = changes.on_page_buttons || changes.onPageButtonsEnabled;
          if (change && typeof change.newValue === 'boolean') {
            toggleOnpageBar.checked = change.newValue;
          }
        }
        if (toggleImageBar && (changes.image_download_enabled || changes.imageDownloadEnabled)) {
          const change = changes.image_download_enabled || changes.imageDownloadEnabled;
          if (change && typeof change.newValue === 'boolean') {
            toggleImageBar.checked = change.newValue;
          }
        }
      }
    });
  }

  // Listen for browser downloads changes (instant sync when a browser download creates or finishes)
  if (typeof chrome !== 'undefined' && chrome.downloads) {
    if (chrome.downloads.onCreated) {
      chrome.downloads.onCreated.addListener(() => {
        loadRecentDownloads();
      });
    }
    if (chrome.downloads.onChanged) {
      chrome.downloads.onChanged.addListener((delta) => {
        loadRecentDownloads();
        if (delta && delta.state && (delta.state.current === 'complete' || delta.state.current === 'interrupted')) {
          setTimeout(loadRecentDownloads, 80);
          setTimeout(loadRecentDownloads, 300);
        }
      });
    }
  }

  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((msg) => {
      if (!msg) return;
      if (msg.action === 'nativeProgress' && msg.taskId) {
        const card = recentMediaList ? recentMediaList.querySelector(`[data-task-id="${msg.taskId}"]`) : null;
        if (card) {
          const fill = card.querySelector('.progress-bar-fill');
          if (fill && msg.percent) fill.style.width = msg.percent;
          const badge = card.querySelector('.status-badge.downloading');
          if (badge && msg.percent) {
            const speedText = msg.speed ? ` • ${msg.speed}` : '';
            badge.textContent = `Đang tải: ${msg.percent}${speedText}`;
          }
          return;
        }
      }
      if (
        msg.action === 'progress' || msg.action === 'complete' || msg.action === 'error' ||
        msg.action === 'nativeProgress' || msg.action === 'nativeComplete' || msg.action === 'nativeError' ||
        msg.action === 'nativeCanceled' || msg.action === 'openFileFailed' ||
        (msg.action === 'openFileResult' && !msg.success && msg.fileNotFound)
      ) {
        if (msg.action === 'openFileFailed' || (msg.action === 'openFileResult' && !msg.success && msg.fileNotFound)) {
          showToast('Tệp đã bị xóa hoặc di chuyển ngoài ổ đĩa!');
        }
        loadRecentDownloads();
        // Dual-pass reload to eliminate storage write race condition
        if (msg.action === 'complete' || msg.action === 'nativeComplete') {
          setTimeout(loadRecentDownloads, 80);
          setTimeout(loadRecentDownloads, 300);
        }
      }
    });
  }

  // Heartbeat sync while active downloads exist
  setInterval(() => {
    if (recentMediaList && recentMediaList.querySelector('.status-badge.downloading')) {
      loadRecentDownloads();
    }
  }, 1000);
});
