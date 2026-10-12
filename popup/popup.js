/**
 * Savior Video Downloader - Popup Script
 * 2 Main Sections: Download Manager Launcher & Recent Downloads List.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  const recentMediaList = document.getElementById('recent-media-list');
  const recentEmptyState = document.getElementById('recent-empty-state');
  const recentTotalBadge = document.getElementById('recent-total-badge');
  const btnFooterManager = document.getElementById('btn-footer-manager');
  const btnHeaderManager = document.getElementById('btn-header-manager');
  const btnOpenManager = document.getElementById('btn-open-manager');

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

  if (btnOpenManager) btnOpenManager.addEventListener('click', openDownloadsManager);
  if (btnHeaderManager) {
    btnHeaderManager.addEventListener('click', openDownloadsManager);
    btnHeaderManager.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDownloadsManager();
      }
    });
  }
  if (btnFooterManager) btnFooterManager.addEventListener('click', openDownloadsManager);

  // Notify background that user opened popup
  try {
    chrome.runtime.sendMessage({ action: 'popupOpened' });
  } catch (_) {}

  // Load and render recently downloaded videos (fully synchronized with Download Manager)
  async function loadRecentDownloads() {
    try {
      let historyList = [];
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        const storageData = await chrome.storage.local.get(['downloadHistory']);
        historyList = Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : [];
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
      if (managedChromeIds.size > 0) {
        try {
          if (typeof chrome !== 'undefined' && chrome.downloads && chrome.downloads.search) {
            const rawDownloads = await chrome.downloads.search({ orderBy: ['-startTime'], limit: 50 });
            chromeDownloads = (rawDownloads || []).filter(cd => managedChromeIds.has(String(cd.id)));
          }
        } catch (_) {}
      }

      const mediaDownloads = chromeDownloads.map(cd => {
        const fn = cd.filename ? cd.filename.replace(/\\/g, '/').split('/').pop() : 'download';
        const isAudio = /\.(mp3|m4a|aac|flac|wav)$/i.test(cd.filename || '');
        let state = 'downloading';
        if (cd.state === 'complete') {
          state = (cd.exists === false) ? 'deleted' : 'completed';
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
            } else if (nowTs - (item.startTime || 0) > 12000) {
              item.state = 'error';
              item.errorMessage = 'Bị gián đoạn';
              storageNeedsHealing = true;
            }
          }
        }

        const key = getItemDedupeKey(item);
        if (key && !mergedMap.has(key)) {
          mergedMap.set(key, {
            ...item,
            startTime: item.timestamp || item.startTime || Date.now()
          });
        }
      }

      if (storageNeedsHealing) {
        try {
          chrome.storage.local.set({ downloadHistory: historyList.slice(0, 200) });
        } catch (_) {}
      }

      for (const item of mediaDownloads) {
        const key = getItemDedupeKey(item);
        if (key && !mergedMap.has(key)) {
          mergedMap.set(key, item);
        } else if (key && mergedMap.has(key) && item.chromeId) {
          const existing = mergedMap.get(key);
          if (!existing.chromeId) existing.chromeId = item.chromeId;
          if (!existing.filename && item.filename) existing.filename = item.filename;
          if (item.state === 'completed' || item.state === 'canceled' || item.state === 'deleted') {
            existing.state = item.state;
          }
        }
      }

      const recentItems = Array.from(mergedMap.values()).sort((a, b) => (b.startTime || 0) - (a.startTime || 0));

      if (recentTotalBadge) {
        recentTotalBadge.textContent = `${recentItems.length} tệp`;
      }

      renderRecentDownloads(recentItems);
    } catch (_) {
      renderRecentDownloads([]);
    }
  }

  function getItemDedupeKey(it) {
    if (!it) return '';
    const rawFn = it.filename || it.outputFile || it.outputPath || '';
    const baseName = rawFn ? rawFn.replace(/\\/g, '/').split('/').pop() : '';
    const title = (it.title || '').trim();
    return (baseName || title || String(it.id || '')).toLowerCase();
  }

  function openRecentFile(item) {
    if (!item) return;
    const targetPath = item.outputFile || item.outputPath || item.filename || '';
    showToast(`Đang mở: ${item.title || 'tệp'}...`);
    chrome.runtime.sendMessage({
      action: 'openFile',
      id: item.id,
      chromeId: item.chromeId,
      path: targetPath,
      filename: item.filename || item.outputFile || item.title || '',
      title: item.title || ''
    }, (res) => {
      if (chrome.runtime?.lastError) return;
      if (res && res.success) {
        showToast(`Đang phát: ${item.title || 'video'}`);
      } else {
        const err = res && res.error ? res.error : 'Không tìm thấy tệp trên đĩa';
        showToast(err);
      }
    });
  }

  function openRecentFolder(item) {
    if (!item) return;
    const targetPath = item.outputFile || item.outputPath || item.filename || '';
    chrome.runtime.sendMessage({
      action: 'showInFolder',
      chromeId: item.chromeId,
      path: targetPath
    });
  }

  function removeRecentItem(item) {
    if (!item) return;
    chrome.runtime.sendMessage({ action: 'removeDownload', id: item.id }, () => {
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
      const isDeleted = item.state === 'deleted';
      const isCanceled = item.state === 'canceled' || item.state === 'cancelled' || item.error === 'USER_CANCELED';
      const isError = item.state === 'error' || (item.state === 'interrupted' && !isCanceled);
      const isPaused = item.state === 'paused';
      const isDownloading = (item.state === 'downloading' || item.state === 'in_progress') && !isCanceled && !isError;
      const isCompleted = (item.state === 'completed' || item.percent === '100%') && !isDeleted && !isCanceled && !isError && !isDownloading;

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
        stateBadge = `<span class="status-badge canceled">Đã xóa</span>`;
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
          ${isCompleted ? `
            <button class="btn-card-action primary btn-open-file" title="Mở phát tệp tin">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Mở tệp
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
          <button class="btn-card-action danger btn-remove-item" title="Xóa khỏi danh sách">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            Xóa
          </button>
        </div>
      `;

      const btnOpenFile = card.querySelector('.btn-open-file');
      if (btnOpenFile) {
        btnOpenFile.addEventListener('click', (e) => {
          e.stopPropagation();
          openRecentFile(item);
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
          removeRecentItem(item);
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
      if (areaName === 'local' && (changes.downloadHistory || changes.customDownloadDir)) {
        loadRecentDownloads();
      }
    });
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
        msg.action === 'nativeCanceled'
      ) {
        loadRecentDownloads();
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
