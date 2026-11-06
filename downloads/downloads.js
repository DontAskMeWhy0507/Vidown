/**
 * Universal Video Downloader - VidManager Downloads Manager
 * Handles real-time download tracking, filtering, searching, and Explorer actions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const downloadsContainer = document.getElementById('downloads-container');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const btnClearSearch = document.getElementById('btn-clear-search');
  const btnOpenFolder = document.getElementById('btn-open-folder');
  const btnClearAll = document.getElementById('btn-clear-all');
  const btnChangeFolder = document.getElementById('btn-change-folder');
  const sidebarFolderPath = document.getElementById('sidebar-folder-path');
  const sectionTitle = document.getElementById('section-title');
  const sectionStats = document.getElementById('section-stats');
  const toast = document.getElementById('toast');

  const countAll = document.getElementById('count-all');
  const countDownloading = document.getElementById('count-downloading');
  const countCompleted = document.getElementById('count-completed');
  const countVideo = document.getElementById('count-video');
  const countAudio = document.getElementById('count-audio');

  const navItems = document.querySelectorAll('.nav-item');

  let currentFilter = 'all';
  let searchQuery = '';
  let allItems = []; // merged list of download records
  const recentlyDeletedIds = new Set();

  function safeSendMessage(msg, callback) {
    try {
      if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage(msg, (res) => {
          if (chrome.runtime.lastError) {
            if (typeof callback === 'function') callback(null);
            return;
          }
          if (typeof callback === 'function') callback(res);
        });
      }
    } catch (_) {
      if (typeof callback === 'function') callback(null);
    }
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2500);
  }

  function formatBytes(bytes) {
    if (!bytes || isNaN(bytes) || bytes <= 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }

  function formatDate(timestamp) {
    if (!timestamp) return 'Recent';
    const d = new Date(timestamp);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) {
      return `Today at ${d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    }
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) {
      return `Yesterday at ${d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    }
    return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  // Format raw error into clean, understandable English reason
  function formatErrorMessage(raw) {
    if (!raw) return 'Unknown error';
    const str = String(raw).trim();

    if (str.includes('Sign in to confirm') || str.includes('bot') || str.includes('n-challenge')) {
      return 'YouTube requires bot verification or account login';
    }
    if (str.includes('Private video') || str.includes('This video is private')) {
      return 'Video is private';
    }
    if (str.includes('Members-only')) {
      return 'Video is for paid members only';
    }
    if (str.includes('Video unavailable') || str.includes('This video is not available')) {
      return 'Video is unavailable or removed';
    }
    if (str.includes('403') || str.includes('Forbidden') || str.includes('SERVER_FORBIDDEN')) {
      return 'Server refused connection (HTTP 403). Download link may have expired.';
    }
    if (str.includes('NETWORK_FAILED') || str.includes('ECONNREFUSED') || str.includes('ENOTFOUND')) {
      return 'Internet network connection error';
    }
    if (str.includes('FILE_ACCESS_DENIED') || str.includes('EACCES')) {
      return 'Permission denied saving to destination folder';
    }
    if (str.includes('disk full') || str.includes('ENOSPC')) {
      return 'Disk full, not enough storage space';
    }
    if (str.includes('Host disconnected') || str.includes('Specified native messaging host not found')) {
      return 'Native Helper is not running or disconnected';
    }
    if (str.includes('FFmpeg exited')) {
      return 'FFmpeg muxing error';
    }
    if (str.includes('Unsupported URL') || str.includes('homepage') || str.includes('stream not captured')) {
      return 'Video stream not captured (Play the video and click Retry)';
    }

    const cleaned = str.replace(/^ERROR:\s*(\[[^\]]+\]\s*)?/i, '').split('\n')[0].trim();
    return cleaned.length > 80 ? cleaned.slice(0, 80) + '...' : cleaned;
  }

  // Load downloads from local storage and chrome.downloads
  async function loadDownloads() {
    let map = new Map();
    try {
      const storageData = await chrome.storage.local.get(['downloadHistory', 'customDownloadDir']);
      const nativeHistory = Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : [];
      if (storageData.customDownloadDir) {
        if (sidebarFolderPath) {
          sidebarFolderPath.textContent = storageData.customDownloadDir;
          sidebarFolderPath.title = storageData.customDownloadDir;
        }
        if (modalFolderPath) {
          modalFolderPath.textContent = storageData.customDownloadDir;
          modalFolderPath.title = storageData.customDownloadDir;
        }
      }

      // Query browser downloads
      let chromeDownloads = [];
      try {
        chromeDownloads = await chrome.downloads.search({ orderBy: ['-startTime'], limit: 50 });
      } catch (e) {}

      // Only show browser downloads that this extension itself created. Without
      // this filter, the manager leaks in unrelated Chrome download history.
      const managedChromeIds = new Set(nativeHistory
        .filter(item => item && (item.chromeId || item.isBrowserDownload))
        .map(item => String(item.chromeId || item.id)));
      const normalizedChrome = chromeDownloads
        .filter(cd => {
          const myExtId = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) ? chrome.runtime.id : '';
          const strId = String(cd.id);
          if (recentlyDeletedIds.has(strId)) return false;
          if (managedChromeIds.has(strId)) return true;
          if (myExtId && cd.byExtensionId === myExtId) return true;
          return false;
        })
        .map(cd => {
          const fn = cd.filename || '';
          const isAudio = /\.(mp3|m4a|aac|flac|wav)$/i.test(fn);
          const isVideo = /\.(mp4|webm|mkv|mov|ts|flv|m4s|avi)$/i.test(fn);
          let state = 'downloading';
          let errorMessage = '';
          if (cd.state === 'complete') {
            state = 'completed';
          } else if (cd.state === 'interrupted') {
            if (cd.error === 'USER_CANCELED') {
              state = 'canceled';
            } else {
              state = 'error';
            }
            errorMessage = formatErrorMessage(cd.error || 'Interrupted');
          }

          const totalBytes = cd.totalBytes > 0 ? cd.totalBytes : cd.fileSize || 0;
          const receivedBytes = cd.bytesReceived || 0;
          const pct = totalBytes > 0 ? Math.round((receivedBytes / totalBytes) * 100) : 0;

          return {
            id: cd.id,
            chromeId: cd.id,
            title: (cd.filename ? cd.filename.split(/[\\/]/).pop() : 'download'),
            filename: cd.filename || '',
            url: cd.url || '',
            startTime: new Date(cd.startTime).getTime(),
            state: state,
            totalBytes: totalBytes,
            receivedBytes: receivedBytes,
            percent: `${pct}%`,
            speed: '',
            error: cd.error || '',
            errorMessage: errorMessage,
            format: isAudio ? 'MP3' : (isVideo ? 'MP4' : 'FILE'),
            type: isAudio ? 'audio' : (isVideo ? 'video' : 'other')
          };
        });

      // Check active engine status
      let activeItem = null;
      let activeIds = new Set();
      try {
        const statusRes = await new Promise((resolve) => {
          chrome.runtime.sendMessage({ action: 'getDownloadStatus' }, (res) => {
            if (chrome.runtime.lastError) {
              resolve(null);
            } else {
              resolve(res);
            }
          });
        });
        if (statusRes) {
          if (statusRes.item) activeItem = statusRes.item;
          if (Array.isArray(statusRes.activeTaskIds)) {
            activeIds = new Set(statusRes.activeTaskIds);
          } else if (Array.isArray(statusRes.activeDownloads)) {
            activeIds = new Set(statusRes.activeDownloads.map(t => t.id));
          } else if (activeItem && activeItem.id) {
            activeIds.add(activeItem.id);
          }
        }
      } catch (e) {}

      // Combine and deduplicate
      map.clear();
      const now = Date.now();
      for (const item of nativeHistory) {
        if (!item) continue;
        item.fromHistory = true;
        const strId = String(item.id || '');
        const strChromeId = item.chromeId ? String(item.chromeId) : '';
        if (recentlyDeletedIds.has(strId) || (strChromeId && recentlyDeletedIds.has(strChromeId))) {
          continue;
        }

        // Normalize state strings from background
        if (item.state === 'in_progress') item.state = 'downloading';
        if (item.state === 'complete') item.state = 'completed';
        if (item.state === 'interrupted' && item.error !== 'USER_CANCELED') item.state = 'error';

        const isFinished = item.percent === '100%' || item.speed === 'Completed';
        if (isFinished) {
          item.state = 'completed';
        }
        if (item.state === 'downloading') {
          const isTaskActive = activeIds.has(item.id) || (activeItem && activeItem.id === item.id);
          // If task is not active in the background engine
          if (!isTaskActive) {
            if (item.outputFile || item.outputPath || item.percent === '100%') {
              item.state = 'completed';
              item.percent = '100%';
            } else if (now - (item.startTime || 0) > 300000) {
              item.state = 'error';
              item.error = 'Interrupted';
              item.errorMessage = 'Interrupted';
            }
          }
        }

        if (!item.errorMessage && item.error) {
          item.errorMessage = formatErrorMessage(item.error);
        }
        map.set(item.id || item.filename || item.url, item);
      }

      for (const item of normalizedChrome) {
        const strId = String(item.id || '');
        const strChromeId = item.chromeId ? String(item.chromeId) : '';
        if (recentlyDeletedIds.has(strId) || (strChromeId && recentlyDeletedIds.has(strChromeId))) {
          continue;
        }

        // Deduplicate against existing items in map by chromeId, id, url, or filename
        let existingMatch = null;
        for (const existing of map.values()) {
          if (item.chromeId && (String(existing.chromeId || '') === String(item.chromeId) || String(existing.id || '') === String(item.chromeId))) {
            existingMatch = existing;
            break;
          }
          if (item.id && String(existing.id || '') === String(item.id)) {
            existingMatch = existing;
            break;
          }
          if (item.url && existing.url && item.url === existing.url) {
            existingMatch = existing;
            break;
          }
          if (item.filename && existing.filename && item.filename === existing.filename) {
            existingMatch = existing;
            break;
          }
        }

        if (existingMatch) {
          existingMatch.fromHistory = true;
          if (!existingMatch.chromeId && item.chromeId) existingMatch.chromeId = item.chromeId;
          if (!existingMatch.filename && item.filename) existingMatch.filename = item.filename;
          if ((!existingMatch.title || existingMatch.title === 'download') && item.title && item.title !== 'download') {
            existingMatch.title = item.title;
          }
          if (existingMatch.state === 'downloading' && item.state !== 'downloading') {
            existingMatch.state = item.state;
          }
        } else {
          item.isChromeOnly = true;
          map.set(item.id, item);
        }
      }

      allItems = Array.from(map.values()).sort((a, b) => (b.startTime || 0) - (a.startTime || 0));
      updateCounts();
      renderList();
    } catch (err) {
      console.error('[DownloadsManager] loadDownloads error:', err);
      if (allItems.length === 0 && typeof map !== 'undefined' && map && map.size > 0) {
        allItems = Array.from(map.values()).sort((a, b) => (b.startTime || 0) - (a.startTime || 0));
      }
      renderList();
    }
  }

  function formatDisplayUrl(item) {
    if (item.referer && !item.referer.includes('googlevideo.com') && !item.referer.includes('fbcdn.net')) {
      return item.referer;
    }
    if (!item.url) return '';
    try {
      const u = new URL(item.url);
      if (u.hostname.includes('googlevideo.com')) {
        return item.referer || 'https://www.youtube.com/';
      }
      if (u.hostname.includes('fbcdn.net')) {
        return item.referer || 'https://www.facebook.com/';
      }
      if (u.hostname.includes('byteoversea.com') || u.hostname.includes('ibytedtos.com')) {
        return item.referer || 'https://www.tiktok.com/';
      }
      return u.origin + u.pathname;
    } catch (e) {
      return item.url.split('?')[0];
    }
  }

  function formatPercentWidth(pct) {
    if (!pct) return '0%';
    const m = String(pct).match(/(\d+(?:\.\d+)?)%/);
    if (m) {
      const val = parseFloat(m[1]);
      return `${Math.min(100, Math.max(0, val))}%`;
    }
    const val = parseFloat(pct);
    if (!isNaN(val) && val >= 0 && val <= 100) return `${val}%`;
    return '0%';
  }

  function isAudioItem(it) {
    if (!it) return false;
    const fn = (it.filename || it.outputPath || it.outputFile || it.title || '').toLowerCase();
    return it.type === 'audio' || /\.(mp3|m4a|aac|flac|wav|ogg)$/i.test(fn);
  }

  function isVideoItem(it) {
    if (!it) return false;
    if (it.type === 'image' || isAudioItem(it)) return false;
    return true;
  }

  function updateCounts() {
    const total = allItems.length;
    const downloading = allItems.filter(it => it.state === 'downloading').length;
    const completed = allItems.filter(it => it.state === 'completed').length;
    const video = allItems.filter(it => isVideoItem(it)).length;
    const audio = allItems.filter(it => isAudioItem(it)).length;

    if (countAll) countAll.textContent = total;
    if (countDownloading) countDownloading.textContent = downloading;
    if (countCompleted) countCompleted.textContent = completed;
    if (countVideo) countVideo.textContent = video;
    if (countAudio) countAudio.textContent = audio;
  }

  function getFilteredItems() {
    return allItems.filter(item => {
      // Filter by category
      if (currentFilter === 'downloading' && item.state !== 'downloading') return false;
      if (currentFilter === 'completed' && item.state !== 'completed') return false;
      if (currentFilter === 'video' && !isVideoItem(item)) return false;
      if (currentFilter === 'audio' && !isAudioItem(item)) return false;

      // Filter by search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const titleMatch = (item.title || '').toLowerCase().includes(q);
        const urlMatch = (item.url || '').toLowerCase().includes(q);
        if (!titleMatch && !urlMatch) return false;
      }

      return true;
    });
  }

  function getDateGroupHeading(timestamp) {
    if (!timestamp || isNaN(new Date(timestamp).getTime())) return 'Recent';
    const d = new Date(timestamp);
    const now = new Date();

    const dDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffDays = Math.round((nowDate - dDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
  }

  function createSvgEl(tag, attrs = {}) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, String(v));
    }
    return el;
  }

  function createAlertSvg(w = 14, h = 14, stroke = '#dc2626') {
    const svg = createSvgEl('svg', { viewBox: '0 0 24 24', width: w, height: h, fill: 'none', stroke, 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    const circle = createSvgEl('circle', { cx: '12', cy: '12', r: '10' });
    const l1 = createSvgEl('line', { x1: '12', y1: '8', x2: '12', y2: '12' });
    const l2 = createSvgEl('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' });
    svg.append(circle, l1, l2);
    return svg;
  }

  function createInfoSvg(w = 14, h = 14, stroke = '#64748b') {
    const svg = createSvgEl('svg', { viewBox: '0 0 24 24', width: w, height: h, fill: 'none', stroke, 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    const circle = createSvgEl('circle', { cx: '12', cy: '12', r: '10' });
    const l1 = createSvgEl('line', { x1: '12', y1: '16', x2: '12', y2: '12' });
    const l2 = createSvgEl('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' });
    svg.append(circle, l1, l2);
    return svg;
  }

  function createMoreDotsSvg(w = 16, h = 16, fill = '#64748b') {
    const svg = createSvgEl('svg', { viewBox: '0 0 24 24', width: w, height: h, fill });
    const c1 = createSvgEl('circle', { cx: '12', cy: '5', r: '1.75' });
    const c2 = createSvgEl('circle', { cx: '12', cy: '12', r: '1.75' });
    const c3 = createSvgEl('circle', { cx: '12', cy: '19', r: '1.75' });
    svg.append(c1, c2, c3);
    return svg;
  }

  function createRemoveSvg(w = 12, h = 12, stroke = '#64748b') {
    const svg = createSvgEl('svg', { viewBox: '0 0 24 24', width: w, height: h, fill: 'none', stroke, 'stroke-width': '2.2', 'stroke-linecap': 'round' });
    const l1 = createSvgEl('line', { x1: '18', y1: '6', x2: '6', y2: '18' });
    const l2 = createSvgEl('line', { x1: '6', y1: '6', x2: '18', y2: '18' });
    svg.append(l1, l2);
    return svg;
  }

  function createCardIcon(item) {
    const fn = (item.filename || item.title || '').toLowerCase();
    const isAudio = item.type === 'audio' || /\.(mp3|m4a|aac|flac|wav)$/i.test(fn);
    const isExe = /\.(exe|msi|bat|cmd)$/i.test(fn);

    const iconWrap = document.createElement('div');
    iconWrap.className = 'card-icon-wrap';

    if (isAudio) {
      iconWrap.innerHTML = `
        <svg viewBox="0 0 44 44" width="40" height="40" fill="none">
          <rect width="44" height="44" rx="8" fill="#f5f3ff"/>
          <path d="M18 29a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm14-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#7c3aed"/>
          <path d="M18 29V14l14-4v15" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    } else if (isExe) {
      iconWrap.innerHTML = `
        <svg viewBox="0 0 44 44" width="40" height="40" fill="none">
          <rect width="44" height="44" rx="8" fill="#f1f5f9"/>
          <rect x="12" y="12" width="20" height="20" rx="3" stroke="#475569" stroke-width="2"/>
          <line x1="12" y1="18" x2="32" y2="18" stroke="#475569" stroke-width="2"/>
        </svg>
      `;
    } else {
      iconWrap.innerHTML = `
        <svg viewBox="0 0 44 44" width="40" height="40" fill="none">
          <rect width="44" height="44" rx="8" fill="#ecfdf5"/>
          <path d="M14 15h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2z" stroke="#059669" stroke-width="2"/>
          <path d="M28 20l5-3v10l-5-3v-4z" fill="#059669"/>
        </svg>
      `;
    }

    return iconWrap;
  }

  function showCardContextMenu(triggerBtn, item) {
    document.querySelectorAll('.card-menu-dropdown').forEach(d => d.remove());

    const menu = document.createElement('div');
    menu.className = 'card-menu-dropdown';

    const itemCopy = document.createElement('div');
    itemCopy.className = 'menu-dropdown-item';
    itemCopy.textContent = 'Copy download link';
    itemCopy.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.remove();
      if (item.url) {
        navigator.clipboard.writeText(item.url).then(() => showToast('Link copied!')).catch(() => {});
      }
    });

    const itemDel = document.createElement('div');
    itemDel.className = 'menu-dropdown-item danger';
    itemDel.textContent = item.state === 'downloading' ? 'Cancel download' : 'Remove from list';
    itemDel.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.remove();
      if (item.state === 'downloading') {
        if (confirm('Are you sure you want to cancel this download?')) {
          cancelDownloadItem(item);
        }
      } else {
        deleteItem(item.id);
      }
    });

    menu.append(itemCopy, itemDel);
    triggerBtn.parentElement.appendChild(menu);

    const closeMenu = (e) => {
      if (!menu.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    };
    setTimeout(() => document.addEventListener('click', closeMenu), 0);
  }

  function openDownloadedItem(item) {
    if (!item) return;
    if (item.state === 'downloading') {
      showToast(`File is downloading (${item.percent || '0%'}), please wait...`);
      return;
    }
    if (item.state === 'canceled') {
      showToast('Download was canceled. Click Retry to download again.');
      return;
    }
    if (item.state === 'deleted') {
      showToast('File was moved or deleted from disk. Click Retry to download again.');
      return;
    }

    const title = item.title || 'video.mp4';
    showToast(`Opening: ${title}...`);

    chrome.runtime.sendMessage({
      action: 'openFile',
      id: item.id,
      chromeId: item.chromeId,
      path: item.outputPath || item.outputFile || item.filename || '',
      filename: item.filename || item.outputFile || item.outputPath || item.title || '',
      title: item.title || ''
    }, (res) => {
      if (chrome.runtime?.lastError) return;
      if (res && res.success) {
        showToast(`Opening: ${title}`);
      } else if (res && (res.fileNotFound || (res.error && /not found|missing/i.test(res.error)))) {
        item.state = 'deleted';
        renderList();
        showToast('File was moved or deleted from disk. Click Retry to download again.');
      } else if (res && res.error) {
        showToast(res.error);
      }
    });
  }

  function createDownloadCard(item) {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.id = `card_${item.id}`;

    const isQueued = item.state === 'queued';
    const isDownloading = (item.state === 'downloading' || item.state === 'in_progress' || isQueued);
    const isError = item.state === 'error' || (item.state === 'interrupted' && item.error !== 'USER_CANCELED');
    const isDeleted = item.state === 'deleted' || item.fileMissing;
    const isCanceled = item.state === 'canceled' || item.state === 'cancelled' || item.error === 'USER_CANCELED';
    const isCompleted = (item.state === 'completed' || item.state === 'complete') && !isDeleted && !isCanceled && !isError && !isDownloading;
    const fn = (item.filename || item.title || '').toLowerCase();
    const isAudio = item.type === 'audio' || /\.(mp3|m4a|aac|flac|wav)$/i.test(fn);
    const isVideo = !isAudio && !/\.(exe|msi|zip|rar|7z|tar|gz)$/i.test(fn);

    if (isDeleted) {
      card.classList.add('card-missing-file');
    }

    // 1. Icon Box
    const iconBox = createCardIcon(item);
    card.appendChild(iconBox);

    // 2. Middle Details Area
    const details = document.createElement('div');
    details.className = 'card-details';

    // Row 1: Title and Status
    const topRow = document.createElement('div');
    topRow.className = 'card-top-row';

    if (isCompleted) {
      const titleLink = document.createElement('a');
      titleLink.className = 'item-title-link';
      titleLink.href = '#';
      titleLink.textContent = item.title || 'video.mp4';
      titleLink.title = item.title || '';
      titleLink.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        openDownloadedItem(item);
      });
      topRow.appendChild(titleLink);
    } else if (isError) {
      const titleMuted = document.createElement('span');
      titleMuted.className = 'item-title-muted';
      titleMuted.textContent = item.title || 'video.mp4';
      titleMuted.title = item.title || '';

      const statusTag = document.createElement('span');
      statusTag.className = 'item-status-tag error';
      statusTag.textContent = 'Download error';

      topRow.append(titleMuted, statusTag);
    } else if (isDeleted) {
      const titleMuted = document.createElement('span');
      titleMuted.className = 'item-title-muted';
      titleMuted.textContent = item.title || 'video.mp4';
      titleMuted.title = (item.title || '') + ' (File not on disk)';

      const statusTag = document.createElement('span');
      statusTag.className = 'item-status-tag error';
      statusTag.textContent = 'Deleted';

      topRow.append(titleMuted, statusTag);
    } else if (isCanceled) {
      const titleMuted = document.createElement('span');
      titleMuted.className = 'item-title-muted';
      titleMuted.textContent = item.title || 'video.mp4';
      titleMuted.title = item.title || '';

      const statusTag = document.createElement('span');
      statusTag.className = 'item-status-tag';
      statusTag.textContent = 'Canceled';

      topRow.append(titleMuted, statusTag);
    } else if (isDownloading) {
      const titleTxt = document.createElement('span');
      titleTxt.className = 'item-title-downloading';
      titleTxt.textContent = item.title || 'video.mp4';

      const progInfo = document.createElement('span');
      progInfo.className = 'item-downloading-stats';
      if (isQueued) {
        progInfo.textContent = 'Queued...';
      } else {
        const spd = item.speed ? ` • ${item.speed}` : '';
        const displayPct = (item.percent && item.percent.includes('%')) ? item.percent : (item.speed ? 'Downloading...' : '0%');
        progInfo.textContent = `${displayPct}${spd}`;
      }

      topRow.append(titleTxt, progInfo);
    }

    // Row 2: Source URL
    const urlRow = document.createElement('div');
    urlRow.className = 'card-url-row';
    urlRow.textContent = formatDisplayUrl(item);
    urlRow.title = item.url || '';
    urlRow.addEventListener('click', (e) => {
      e.stopPropagation();
      const sourceUrl = item.pageUrl || item.referer || item.url;
      if (sourceUrl && sourceUrl.startsWith('http')) {
        window.open(sourceUrl, '_blank');
      }
    });

    // Row 3: Actions row
    const actionsRow = document.createElement('div');
    actionsRow.className = 'card-actions-row';

    if (isCompleted) {
      const btnFolder = document.createElement('button');
      btnFolder.type = 'button';
      btnFolder.className = 'action-link-btn btn-show-folder';
      btnFolder.textContent = 'Show in folder';
      btnFolder.addEventListener('click', (e) => {
        e.stopPropagation();
        safeSendMessage({
          action: 'showInFolder',
          chromeId: item.chromeId,
          path: item.outputPath || item.outputFile || item.filename || ''
        });
      });
      actionsRow.appendChild(btnFolder);

      if (isVideo || isAudio) {
        const btnPlay = document.createElement('button');
        btnPlay.type = 'button';
        btnPlay.className = 'action-link-btn btn-play-media';
        btnPlay.textContent = 'Play';
        btnPlay.addEventListener('click', (e) => {
          e.stopPropagation();
          openDownloadedItem(item);
        });
        actionsRow.appendChild(btnPlay);
      }
    } else if (isError) {
      const progTrack = document.createElement('div');
      progTrack.className = 'item-progress-track';
      const progFill = document.createElement('div');
      progFill.className = 'item-progress-fill error';
      progFill.style.width = formatPercentWidth(item.percent || '0%');
      progTrack.appendChild(progFill);

      const btnRetry = document.createElement('button');
      btnRetry.type = 'button';
      btnRetry.className = 'btn-retry-download';
      const mustRefresh = needsFreshMediaUrl(item);
      btnRetry.textContent = mustRefresh ? 'Refresh stream' : 'Retry';
      btnRetry.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mustRefresh) refreshMediaUrl(item); else retryDownload(item);
      });

      actionsRow.append(progTrack, btnRetry);
    } else if (isDeleted || isCanceled) {
      const btnRetry = document.createElement('button');
      btnRetry.type = 'button';
      btnRetry.className = 'btn-retry-download';
      const mustRefresh = needsFreshMediaUrl(item);
      btnRetry.textContent = mustRefresh ? 'Refresh stream' : 'Retry';
      btnRetry.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mustRefresh) refreshMediaUrl(item); else retryDownload(item);
      });
      actionsRow.appendChild(btnRetry);
    } else if (isDownloading) {
      const progTrack = document.createElement('div');
      progTrack.className = 'item-progress-track';
      const progFill = document.createElement('div');
      progFill.className = 'item-progress-fill';
      progFill.style.width = formatPercentWidth(item.percent);
      progTrack.appendChild(progFill);

      actionsRow.appendChild(progTrack);
    }

    if (isCanceled || isError) {
      const errRow = document.createElement('div');
      errRow.className = 'item-error-row';
      const errIcon = document.createElement('span');
      errIcon.className = 'error-badge-icon';
      errIcon.appendChild(isCanceled ? createInfoSvg(13, 13, '#64748b') : createAlertSvg(13, 13, '#dc2626'));
      const errTitle = document.createElement('span');
      errTitle.className = 'error-badge-title';
      errTitle.textContent = isCanceled ? 'Status:' : 'Reason:';

      const shortErr = isCanceled ? 'User canceled' : (item.errorMessage || formatErrorMessage(item.error));
      const fullErr = String(item.error || item.errorMessage || shortErr);

      const errDesc = document.createElement('span');
      errDesc.className = 'error-badge-text';
      errDesc.textContent = shortErr;
      errDesc.title = shortErr;

      errRow.append(errIcon, errTitle, errDesc);

      // Expandable full technical error details
      if (!isCanceled && (fullErr.length > 40 || fullErr !== shortErr)) {
        const btnToggleErr = document.createElement('button');
        btnToggleErr.type = 'button';
        btnToggleErr.className = 'btn-toggle-error-detail';
        btnToggleErr.textContent = 'Details';
        btnToggleErr.title = 'View full technical error details';

        let isExpanded = false;
        const toggleDetail = (e) => {
          e.stopPropagation();
          isExpanded = !isExpanded;
          if (isExpanded) {
            errRow.classList.add('expanded');
            errDesc.textContent = fullErr;
            btnToggleErr.textContent = 'Collapse';
          } else {
            errRow.classList.remove('expanded');
            errDesc.textContent = shortErr;
            btnToggleErr.textContent = 'Details';
          }
        };

        btnToggleErr.addEventListener('click', toggleDetail);
        errDesc.style.cursor = 'pointer';
        errDesc.addEventListener('click', toggleDetail);
        errRow.append(btnToggleErr);
      }

      details.append(topRow, urlRow, errRow, actionsRow);
    } else {
      details.append(topRow, urlRow, actionsRow);
    }
    card.appendChild(details);

    // 3. Right Tools (⋮ and ✕)
    const tools = document.createElement('div');
    tools.className = 'card-tools';

    const btnMore = document.createElement('button');
    btnMore.type = 'button';
    btnMore.className = 'btn-card-more';
    btnMore.title = 'More options';
    btnMore.appendChild(createMoreDotsSvg(14, 14, 'currentColor'));
    btnMore.addEventListener('click', (e) => {
      e.stopPropagation();
      showCardContextMenu(btnMore, item);
    });

    const btnRemove = document.createElement('button');
    btnRemove.type = 'button';
    btnRemove.className = 'btn-card-remove';
    btnRemove.title = isDownloading ? 'Cancel download' : 'Remove from list';
    btnRemove.appendChild(createRemoveSvg(12, 12, 'currentColor'));
    btnRemove.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isDownloading) {
        if (confirm('Are you sure you want to cancel this download?')) {
          cancelDownloadItem(item);
        }
      } else {
        deleteItem(item.id);
      }
    });

    tools.append(btnMore, btnRemove);
    card.appendChild(tools);

    return card;
  }

  function renderList() {
    const filtered = getFilteredItems();
    if (sectionStats) sectionStats.textContent = `${filtered.length} ${filtered.length === 1 ? 'file' : 'files'}`;

    if (filtered.length === 0) {
      downloadsContainer.replaceChildren();
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    // Group items by Date Heading
    const groups = new Map();
    for (const item of filtered) {
      const heading = getDateGroupHeading(item.startTime);
      if (!groups.has(heading)) {
        groups.set(heading, []);
      }
      groups.get(heading).push(item);
    }

    downloadsContainer.replaceChildren();

    for (const [headingText, itemsInGroup] of groups.entries()) {
      const groupSection = document.createElement('div');
      groupSection.className = 'date-group';

      const groupHeader = document.createElement('div');
      groupHeader.className = 'date-group-heading';
      groupHeader.textContent = headingText;
      groupSection.appendChild(groupHeader);

      for (const item of itemsInGroup) {
        const card = createDownloadCard(item);
        groupSection.appendChild(card);
      }

      downloadsContainer.appendChild(groupSection);
    }
  }

  function updateCardProgressInDOM(item) {
    const card = document.getElementById(`card_${item.id}`);
    if (!card) {
      renderList();
      return true;
    }

    if (item.state === 'downloading' || item.state === 'in_progress' || item.state === 'queued') {
      const progFill = card.querySelector('.item-progress-fill');
      if (progFill) {
        progFill.style.width = formatPercentWidth(item.percent);
      }
      const stats = card.querySelector('.item-downloading-stats');
      if (stats) {
        if (item.state === 'queued') {
          stats.textContent = 'Queued...';
        } else {
          const spd = item.speed ? ` • ${item.speed}` : '';
          const displayPct = (item.percent && item.percent.includes('%')) ? item.percent : (item.speed ? 'Downloading...' : '0%');
          stats.textContent = `${displayPct}${spd}`;
        }
      }
      return true;
    }

    renderList();
    return true;
  }

  async function retryDownload(item) {
    if (!item) return;
    // Preserve the existing history ID so retry progress updates the same card.
    const retryTaskId = item.id;
    item.state = 'downloading';
    item.speed = 'Reconnecting...';
    delete item.error;
    delete item.errorMessage;

    const storageData = await chrome.storage.local.get(['downloadHistory']);
    const list = Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : [];
    const found = list.find(it => it.id === item.id);
    if (found) {
      found.state = 'downloading';
      found.speed = 'Reconnecting...';
      delete found.error;
      delete found.errorMessage;
      await chrome.storage.local.set({ downloadHistory: list });
    }

    renderList();
    showToast('Connecting to retry download...');

    safeSendMessage({
      action: 'downloadNative',
      taskId: retryTaskId,
      url: item.url,
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
    });
  }

  function needsFreshMediaUrl(item) {
    if (!item || !item.error) return false;
    const error = String(item.error);
    const url = String(item.videoUrl || item.url || '');
    const isForbidden = /403|forbidden|server_forbidden/i.test(error);
    const isExpiringCdn = /tiktok|byteoversea|ibytedtos|googlevideo|fbcdn|cdninstagram/i.test(url);
    return isForbidden && isExpiringCdn;
  }

  function refreshMediaUrl(item) {
    const sourceUrl = item.pageUrl || item.referer;
    if (!sourceUrl || !/^https?:\/\//i.test(sourceUrl)) {
      showToast('No source page available to refresh stream. Please reopen the video and download again.');
      return;
    }
    safeSendMessage({ action: 'openSourcePage', url: sourceUrl }, (res) => {
      if (res && res.success) {
        showToast('Source video opened. Play for a few seconds then click retry.');
      } else {
        showToast((res && res.error) || 'Could not open source page.');
      }
    });
  }

  function cancelDownloadItem(item) {
    if (!item) return;
    if (item.chromeId && typeof chrome !== 'undefined' && chrome.downloads) {
      try {
        const numId = Number(item.chromeId);
        chrome.downloads.cancel(!isNaN(numId) ? numId : item.chromeId, () => {});
      } catch (_) {}
    }
    safeSendMessage({
      action: 'cancelDownload',
      taskId: item.id,
      chromeId: item.chromeId
    });
    item.state = 'canceled';
    item.error = 'User canceled';
    item.errorMessage = 'User canceled';
    item.speed = 'Canceled';

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['downloadHistory']).then(res => {
        const history = Array.isArray(res && res.downloadHistory) ? res.downloadHistory : [];
        const entry = history.find(h => String(h.id) === String(item.id) || (h.chromeId && String(h.chromeId) === String(item.chromeId)));
        if (entry) {
          entry.state = 'canceled';
          entry.error = 'User canceled';
          entry.errorMessage = 'User canceled';
          entry.speed = 'Canceled';
          chrome.storage.local.set({ downloadHistory: history });
        }
      }).catch(() => {});
    }

    renderList();
    showToast('Download canceled');
  }

  async function deleteItem(id) {
    const target = allItems.find(it => String(it.id) === String(id) || String(it.chromeId) === String(id));
    const targetId = target ? target.id : id;
    const strTargetId = String(targetId);
    const chromeId = target ? target.chromeId : (String(id).startsWith('chrome_') ? id.replace('chrome_', '') : (Number.isInteger(Number(id)) ? Number(id) : null));
    const strChromeId = chromeId ? String(chromeId) : '';

    if (strTargetId) recentlyDeletedIds.add(strTargetId);
    if (strChromeId) recentlyDeletedIds.add(strChromeId);

    // 1. Immediately remove from memory and update UI
    allItems = allItems.filter(it => {
      const itId = String(it.id || '');
      const itChromeId = it.chromeId ? String(it.chromeId) : '';
      if (strTargetId && (itId === strTargetId || itChromeId === strTargetId)) return false;
      if (strChromeId && (itId === strChromeId || itChromeId === strChromeId)) return false;
      return true;
    });
    updateCounts();
    renderList();

    // 2. Erase from browser download shelf if applicable
    const numChromeId = Number(chromeId);
    if (!isNaN(numChromeId) && numChromeId > 0 && typeof chrome !== 'undefined' && chrome.downloads) {
      try {
        chrome.downloads.cancel(numChromeId, () => {
          try { chrome.downloads.erase({ id: chromeId }, () => {}); } catch (_) {}
        });
      } catch (_) {
        try { chrome.downloads.erase({ id: chromeId }, () => {}); } catch (_) {}
      }
    }

    // 3. Notify background to cancel (if active) and purge permanently
    safeSendMessage({
      action: 'removeDownload',
      id: strTargetId,
      chromeId: strChromeId
    });

    // 4. Directly update local storage
    try {
      const storageData = await chrome.storage.local.get(['downloadHistory']);
      const currentHist = Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : [];
      const sanitized = currentHist.filter(it => {
        const itId = String(it.id || '');
        const itChromeId = it.chromeId ? String(it.chromeId) : '';
        if (strTargetId && (itId === strTargetId || itChromeId === strTargetId)) return false;
        if (strChromeId && (itId === strChromeId || itChromeId === strChromeId)) return false;
        return true;
      });
      await chrome.storage.local.set({ downloadHistory: sanitized });
    } catch (_) {}

    showToast('Download item removed!');
  }

  // Filter switching
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      currentFilter = item.dataset.filter || 'all';

      if (currentFilter === 'all') sectionTitle.textContent = 'All Downloads';
      else if (currentFilter === 'downloading') sectionTitle.textContent = 'Downloading';
      else if (currentFilter === 'completed') sectionTitle.textContent = 'Completed';
      else if (currentFilter === 'video') sectionTitle.textContent = 'Videos & Movies';
      else if (currentFilter === 'audio') sectionTitle.textContent = 'Audio & MP3';

      renderList();
    });
  });

  // Search input
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    btnClearSearch.style.display = searchQuery ? 'block' : 'none';
    renderList();
  });

  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    btnClearSearch.style.display = 'none';
    renderList();
  });

  // Open Downloads folder
  btnOpenFolder.addEventListener('click', () => {
    safeSendMessage({ action: 'openDownloadsFolder' });
  });

  // Change folder
  btnChangeFolder.addEventListener('click', () => {
    safeSendMessage({ action: 'browseFolder' }, (res) => {
      const selectedPath = (res && res.path) || (res && res.success && res.path);
      if (selectedPath) {
        sidebarFolderPath.textContent = selectedPath;
        sidebarFolderPath.title = selectedPath;
        if (modalFolderPath) {
          modalFolderPath.textContent = selectedPath;
          modalFolderPath.title = selectedPath;
        }
        chrome.storage.local.set({ customDownloadDir: selectedPath });
        showToast('Download folder changed!');
      }
    });
  });

  // Settings Modal Elements
  const btnSettings = null; /* settings panel is always visible now */
  const settingsModal = document.getElementById('settings-modal');
  const btnSaveSettings = null; /* settings auto-save on change */
  const modalFolderPath = document.getElementById('modal-folder-path');
  const btnModalChangeFolder = document.getElementById('btn-modal-change-folder');
  const settingOnpageButtons = document.getElementById('setting-onpage-buttons');
  const settingImageButtons = document.getElementById('setting-image-buttons');
  const settingDetachButton = null; /* dead feature removed */
  let cachedDetachEnabled = undefined;
  let cachedDetachButtonEnabled = undefined;
  const settingOneClick = null; /* 1-Click removed per product decision */
  const setting3gp = null; /* 3GP removed — desktop product */
  const settingPreferredQuality = null; /* default-quality setting removed per product decision */
  const settingRememberQuality = null; /* remember-quality setting removed per product decision */
  // Advanced settings (merged from the retired options page)
  const settingMinSize = document.getElementById('setting-min-size');
  const settingMinSizeValue = document.getElementById('setting-min-size-value');
  const settingSiteInput = document.getElementById('setting-site-input');
  const btnAddSite = document.getElementById('btn-add-site');
  const settingsSiteList = document.getElementById('settings-site-list');

  function beautifySize(bytes) {
    const b = Number(bytes) || 0;
    if (b >= 1024 * 1024) return (b / (1024 * 1024)).toFixed(1).replace(/\.0$/, '') + ' MB';
    if (b >= 1024) return Math.round(b / 1024) + ' KB';
    return b + ' B';
  }

  function renderSettingsSiteList(sites) {
    if (!settingsSiteList) return;
    const items = Array.isArray(sites) ? sites : [];
    settingsSiteList.replaceChildren();
    if (items.length === 0) {
      const empty = document.createElement('span');
      empty.style.cssText = 'font-size:12.5px;color:#9ca3af;';
      empty.textContent = 'No websites in list';
      settingsSiteList.appendChild(empty);
      return;
    }
    for (const domain of items) {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 10px;border:1px solid #e5e7eb;border-radius:8px;';

      const avatar = document.createElement('span');
      avatar.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:4px;background:#10b981;color:#fff;font-size:11px;font-weight:600;text-transform:uppercase;flex:0 0 20px;';
      avatar.textContent = String(domain).charAt(0) || '?';
      row.appendChild(avatar);

      const name = document.createElement('span');
      name.style.cssText = 'flex:1;font-size:13px;word-break:break-all;';
      name.textContent = domain;
      row.appendChild(name);

      const del = document.createElement('button');
      del.type = 'button';
      del.title = 'Remove';
      del.textContent = '✕';
      del.style.cssText = 'border:none;background:none;cursor:pointer;color:#ef4444;font-size:13px;padding:2px 6px;';
      del.addEventListener('click', () => {
        chrome.storage.local.get(['disable_savior_sites'], (s) => {
          const list = Array.isArray(s.disable_savior_sites) ? s.disable_savior_sites : [];
          const next = list.filter((d) => d !== domain);
          chrome.storage.local.set({ disable_savior_sites: next }, () => {
            renderSettingsSiteList(next);
            showToast('Removed ' + domain + ' from list');
          });
        });
      });
      row.appendChild(del);
      settingsSiteList.appendChild(row);
    }
  }

  function addSiteFromInput() {
    if (!settingSiteInput) return;
    const raw = String(settingSiteInput.value || '').trim().toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/.*$/, '');
    if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(raw)) {
      showToast('Invalid domain name. Example: example.com');
      return;
    }
    chrome.storage.local.get(['disable_savior_sites'], (s) => {
      const list = Array.isArray(s.disable_savior_sites) ? s.disable_savior_sites : [];
      if (list.includes(raw)) {
        showToast(raw + ' is already in the list');
        return;
      }
      const next = list.concat(raw);
      chrome.storage.local.set({ disable_savior_sites: next }, () => {
        settingSiteInput.value = '';
        renderSettingsSiteList(next);
        showToast('Added ' + raw + ' — floating download toolbar will be hidden on this site');
      });
    });
  }

  function loadSettingsIntoUI() {
    chrome.storage.local.get([
      'customDownloadDir',
      'onPageButtonsEnabled',
      'on_page_buttons',
      'image_download_enabled',
      'imageDownloadEnabled',
      'detachButtonEnabled',
      'detach_enabled',
      'one_click',
      'isOneClickEnabled',
      'one_click_download',
      'preferLastQuality',
      'prefer_last_quality',
      'show_3gp_ext',
      'min_stream_size',
      'disable_savior_sites'
    ], (data) => {
      const currentDir = data.customDownloadDir || (sidebarFolderPath ? sidebarFolderPath.textContent : '') || 'Downloads';
      if (modalFolderPath) {
        modalFolderPath.textContent = currentDir;
        modalFolderPath.title = currentDir;
      }
      if (sidebarFolderPath) {
        sidebarFolderPath.textContent = currentDir;
        sidebarFolderPath.title = currentDir;
      }
      cachedDetachEnabled = data.detach_enabled;
      cachedDetachButtonEnabled = data.detachButtonEnabled;
      const onPageVal = data.on_page_buttons !== undefined ? data.on_page_buttons : data.onPageButtonsEnabled;
      const imageVal = data.image_download_enabled !== undefined ? data.image_download_enabled : data.imageDownloadEnabled;
      const detachVal = data.detach_enabled !== undefined ? data.detach_enabled : data.detachButtonEnabled;
      const oneClickVal = data.one_click !== undefined ? data.one_click : (data.one_click_download !== undefined ? data.one_click_download : data.isOneClickEnabled);
      const rememberVal = data.prefer_last_quality !== undefined ? data.prefer_last_quality : data.preferLastQuality;

      if (settingOnpageButtons) settingOnpageButtons.checked = onPageVal !== false;
      if (settingImageButtons) settingImageButtons.checked = imageVal !== false;
      if (settingDetachButton) settingDetachButton.checked = detachVal !== false;
      if (settingOneClick) settingOneClick.checked = Boolean(oneClickVal);
      if (settingRememberQuality) settingRememberQuality.checked = rememberVal !== false;
      if (setting3gp) setting3gp.checked = data.show_3gp_ext === true;
      if (settingMinSize) {
        settingMinSize.value = Number(data.min_stream_size) > 0 ? Number(data.min_stream_size) : 0;
        if (settingMinSizeValue) settingMinSizeValue.textContent = beautifySize(settingMinSize.value);
      }
      renderSettingsSiteList(data.disable_savior_sites);
    });
  }

  function saveSettings(showSuccessToast = true) {
    const onPage = settingOnpageButtons ? settingOnpageButtons.checked : true;
    const imageEnabled = settingImageButtons ? settingImageButtons.checked : true;
    const oneClick = settingOneClick ? settingOneClick.checked : false;
    const rememberQuality = settingRememberQuality ? settingRememberQuality.checked : true;

    const detach = settingDetachButton ? settingDetachButton.checked : (cachedDetachEnabled !== undefined ? cachedDetachEnabled : false);
    const detachBtn = settingDetachButton ? settingDetachButton.checked : (cachedDetachButtonEnabled !== undefined ? cachedDetachButtonEnabled : detach);

    const settingsToSave = {
      // camelCase format (for downloads manager UI)
      onPageButtonsEnabled: onPage,
      imageDownloadEnabled: imageEnabled,
      detachButtonEnabled: detachBtn,
      isOneClickEnabled: oneClick,
      preferLastQuality: rememberQuality,
      // snake_case format (for content-script.js & options engine)
      on_page_buttons: onPage,
      image_download_enabled: imageEnabled,
      detach_enabled: detach,
      one_click: oneClick,
      one_click_download: oneClick,
      prefer_last_quality: rememberQuality,
      show_3gp_ext: setting3gp ? setting3gp.checked : false,
      min_stream_size: settingMinSize ? (Number(settingMinSize.value) || 0) : 30720
    };

    chrome.storage.local.set(settingsToSave, () => {
      if (showSuccessToast) {
        showToast('Settings saved successfully!');
      }
    });
  }

  // The settings panel is a permanent right sidebar — no open/close modal flow.
  // Settings load once on start and every change saves immediately.
  loadSettingsIntoUI();

  // Auto-save when user toggles or changes any setting directly
  if (settingOnpageButtons) settingOnpageButtons.addEventListener('change', () => saveSettings(true));
  if (settingImageButtons) settingImageButtons.addEventListener('change', () => saveSettings(true));
  if (settingRememberQuality) settingRememberQuality.addEventListener('change', () => saveSettings(true));
  if (settingMinSize) {
    settingMinSize.addEventListener('input', () => {
      if (settingMinSizeValue) settingMinSizeValue.textContent = beautifySize(settingMinSize.value);
    });
    settingMinSize.addEventListener('change', () => saveSettings(true));
  }
  if (btnAddSite) btnAddSite.addEventListener('click', addSiteFromInput);
  if (settingSiteInput) {
    settingSiteInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addSiteFromInput();
      }
    });
  }

  if (btnModalChangeFolder) {
    btnModalChangeFolder.addEventListener('click', () => {
      safeSendMessage({ action: 'browseFolder' }, (res) => {
        if (!res || res.canceled) return;
        const selectedPath = (res && res.path) || (res && res.success && res.path);
        if (selectedPath) {
          if (modalFolderPath) {
            modalFolderPath.textContent = selectedPath;
            modalFolderPath.title = selectedPath;
          }
          if (sidebarFolderPath) {
            sidebarFolderPath.textContent = selectedPath;
            sidebarFolderPath.title = selectedPath;
          }
          chrome.storage.local.set({ customDownloadDir: selectedPath });
          showToast('Download folder changed!');
        }
      });
    });
  }

  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      saveSettings(true);
    });
  }

  // Clear all history
  btnClearAll.addEventListener('click', async () => {
    if (confirm('Are you sure you want to clear all download history?')) {
      for (const it of allItems) {
        const strId = String(it.id || '');
        const strChromeId = it.chromeId ? String(it.chromeId) : '';
        if (strId) recentlyDeletedIds.add(strId);
        if (strChromeId) recentlyDeletedIds.add(strChromeId);

        if (it.state === 'downloading') {
          if (it.chromeId && typeof chrome !== 'undefined' && chrome.downloads) {
            try { chrome.downloads.cancel(it.chromeId); } catch (_) {}
          }
        }
        if (it.chromeId && typeof chrome !== 'undefined' && chrome.downloads && chrome.downloads.erase) {
          try { chrome.downloads.erase({ id: it.chromeId }, () => {}); } catch (_) {}
        }
      }
      allItems = [];
      safeSendMessage({ action: 'clearHistory' });
      await chrome.storage.local.set({ downloadHistory: [] });
      updateCounts();
      renderList();
      showToast('All download history cleared!');
    }
  });

  function syncHistoryUpdatesInPlace(newHistory) {
    if (!Array.isArray(newHistory)) return;

    const normalizedNew = [];
    const newHistoryMap = new Map();

    for (const raw of newHistory) {
      if (!raw) continue;
      const strId = String(raw.id || '');
      const strChromeId = raw.chromeId ? String(raw.chromeId) : '';
      if (recentlyDeletedIds.has(strId) || (strChromeId && recentlyDeletedIds.has(strChromeId))) {
        continue;
      }

      const item = { ...raw, fromHistory: true };
      if (item.state === 'in_progress') item.state = 'downloading';
      if (item.state === 'complete') item.state = 'completed';
      if (item.state === 'interrupted' && item.error !== 'USER_CANCELED') item.state = 'error';
      if (item.state === 'cancelled' || item.error === 'USER_CANCELED') item.state = 'canceled';

      const isFinished = item.percent === '100%' || item.speed === 'Completed';
      if (isFinished && item.state !== 'canceled' && item.state !== 'deleted' && item.state !== 'error') {
        item.state = 'completed';
      }
      if (!item.errorMessage && item.error) {
        item.errorMessage = formatErrorMessage(item.error);
      }

      normalizedNew.push(item);
      if (strId) newHistoryMap.set(strId, item);
      if (strChromeId) newHistoryMap.set(strChromeId, item);
    }

    if (allItems.length === 0 && downloadsContainer && downloadsContainer.children.length === 0) {
      allItems = [...normalizedNew].sort((a, b) => (b.startTime || 0) - (a.startTime || 0));
      updateCounts();
      renderList();
      return;
    }

    for (const newItem of normalizedNew) {
      const strId = String(newItem.id || '');
      const strChromeId = newItem.chromeId ? String(newItem.chromeId) : '';

      let existing = allItems.find(it => {
        const itId = String(it.id || '');
        const itChromeId = it.chromeId ? String(it.chromeId) : '';
        if (strId && (itId === strId || itChromeId === strId)) return true;
        if (strChromeId && (itChromeId === strChromeId || itId === strChromeId)) return true;
        return false;
      });

      if (existing) {
        const stateChanged = existing.state !== newItem.state;
        Object.assign(existing, newItem);

        const card = document.getElementById(`card_${existing.id}`) ||
          (existing.chromeId ? document.getElementById(`card_${existing.chromeId}`) : null);

        if (card) {
          if (stateChanged) {
            const newCard = createDownloadCard(existing);
            card.replaceWith(newCard);
          } else if (existing.state === 'downloading' || existing.state === 'in_progress' || existing.state === 'queued') {
            const progFill = card.querySelector('.item-progress-fill');
            if (progFill) {
              progFill.style.width = formatPercentWidth(existing.percent);
            }
            const stats = card.querySelector('.item-downloading-stats');
            if (stats) {
              if (existing.state === 'queued') {
                stats.textContent = 'Queued...';
              } else {
                const spd = existing.speed ? ` • ${existing.speed}` : '';
                const displayPct = (existing.percent && existing.percent.includes('%'))
                  ? existing.percent
                  : (existing.speed ? 'Downloading...' : '0%');
                stats.textContent = `${displayPct}${spd}`;
              }
            }
          } else if (existing.state === 'error') {
            const errDesc = card.querySelector('.error-badge-text');
            if (errDesc && existing.errorMessage) {
              errDesc.textContent = existing.errorMessage;
              errDesc.title = existing.errorMessage;
            }
          }
        }
      } else {
        // New item added to history
        allItems.unshift(newItem);
        const filtered = getFilteredItems();
        if (filtered.includes(newItem)) {
          if (emptyState) emptyState.style.display = 'none';
          const headingText = getDateGroupHeading(newItem.startTime);
          let targetGroup = null;
          const groups = downloadsContainer ? downloadsContainer.querySelectorAll('.date-group') : [];
          for (const grp of groups) {
            const hdr = grp.querySelector('.date-group-heading');
            if (hdr && hdr.textContent === headingText) {
              targetGroup = grp;
              break;
            }
          }
          const card = createDownloadCard(newItem);
          if (targetGroup) {
            const headingEl = targetGroup.querySelector('.date-group-heading');
            if (headingEl) {
              headingEl.after(card);
            } else {
              targetGroup.prepend(card);
            }
          } else if (downloadsContainer) {
            const newGroup = document.createElement('div');
            newGroup.className = 'date-group';
            const newHeader = document.createElement('div');
            newHeader.className = 'date-group-heading';
            newHeader.textContent = headingText;
            newGroup.appendChild(newHeader);
            newGroup.appendChild(card);
            downloadsContainer.prepend(newGroup);
          }
        }
      }
    }

    // Remove pruned items
    const toRemove = [];
    for (const item of allItems) {
      if (item.isChromeOnly) continue;
      const strId = String(item.id || '');
      const strChromeId = item.chromeId ? String(item.chromeId) : '';
      const inNew = (strId && newHistoryMap.has(strId)) || (strChromeId && newHistoryMap.has(strChromeId));
      if (!inNew) {
        toRemove.push(item);
      }
    }

    for (const item of toRemove) {
      const idx = allItems.indexOf(item);
      if (idx !== -1) allItems.splice(idx, 1);
      const card = document.getElementById(`card_${item.id}`) ||
        (item.chromeId ? document.getElementById(`card_${item.chromeId}`) : null);
      if (card) {
        const parentGroup = card.closest('.date-group');
        card.remove();
        if (parentGroup && !parentGroup.querySelector('.download-card')) {
          parentGroup.remove();
        }
      }
    }

    if (downloadsContainer && downloadsContainer.querySelectorAll('.download-card').length === 0) {
      if (emptyState) emptyState.style.display = 'block';
    }

    updateCounts();
    if (sectionStats) {
      sectionStats.textContent = `${getFilteredItems().length} ${getFilteredItems().length === 1 ? 'file' : 'files'}`;
    }
  }

  // Auto-Sync 1: Listen to storage changes directly (zero latency cross-tab sync)
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local') {
      if (changes.customDownloadDir) {
        const newPath = changes.customDownloadDir.newValue;
        if (newPath) {
          if (sidebarFolderPath) {
            sidebarFolderPath.textContent = newPath;
            sidebarFolderPath.title = newPath;
          }
          if (modalFolderPath) {
            modalFolderPath.textContent = newPath;
            modalFolderPath.title = newPath;
          }
          showToast('Download folder changed!');
        }
      }
      if (changes.downloadHistory) {
        syncHistoryUpdatesInPlace(changes.downloadHistory.newValue);
      }
    }
  });

  // Auto-Sync 2: Real-time progress events from background service worker
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'nativeProgress') {
      const activeItem = msg.taskId ? allItems.find(it => String(it.id) === String(msg.taskId)) : null;
      if (activeItem) {
        activeItem.percent = msg.percent || activeItem.percent;
        activeItem.speed = msg.speed || activeItem.speed;
        if (msg.size) activeItem.sizeFormatted = msg.size;
        updateCardProgressInDOM(activeItem);
      } else {
        loadDownloads();
      }
    } else if (msg.action === 'nativeComplete' || msg.action === 'nativeError' || msg.action === 'nativeCanceled') {
      loadDownloads();
    } else if (msg.action === 'openFileResult' && !msg.success && msg.fileNotFound) {
      const missingId = msg.id || msg.taskId;
      const target = missingId
        ? allItems.find(it => String(it.id) === String(missingId) || String(it.chromeId) === String(missingId))
        : null;
      if (target) {
        target.state = 'deleted';
        renderList();
      } else {
        loadDownloads();
      }
      showToast('File was moved or deleted from disk. Click Retry to download again.');
    }
  });

  // Auto-Sync 3: Event-driven fallback sync (storage listener handles live updates)
  // Heartbeat polling removed in favor of direct delta events to prevent UI jitter and unnecessary CPU consumption.

  // Initial load
  loadDownloads();
});
