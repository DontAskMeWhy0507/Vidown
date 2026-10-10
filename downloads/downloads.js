/**
 * Universal Video Downloader - Cốc Cốc Savior Style Downloads Manager
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
    if (!timestamp) return 'Gần đây';
    const d = new Date(timestamp);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) {
      return `Hôm nay lúc ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) {
      return `Hôm qua lúc ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    return d.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  // Format raw error into clean, understandable Vietnamese reason
  function formatErrorMessage(raw) {
    if (!raw) return 'Lỗi không xác định';
    const str = String(raw).trim();

    if (str.includes('Sign in to confirm') || str.includes('bot') || str.includes('n-challenge')) {
      return 'YouTube yêu cầu xác minh bot hoặc tài khoản';
    }
    if (str.includes('Private video') || str.includes('This video is private')) {
      return 'Video ở chế độ riêng tư (Private)';
    }
    if (str.includes('Members-only')) {
      return 'Video chỉ dành cho Hội viên có trả phí';
    }
    if (str.includes('Video unavailable') || str.includes('This video is not available')) {
      return 'Video không khả dụng hoặc đã bị gỡ';
    }
    if (str.includes('403') || str.includes('Forbidden') || str.includes('SERVER_FORBIDDEN')) {
      return 'Máy chủ từ chối kết nối (HTTP 403 - Hết hạn token)';
    }
    if (str.includes('NETWORK_FAILED') || str.includes('ECONNREFUSED') || str.includes('ENOTFOUND')) {
      return 'Lỗi kết nối mạng Internet';
    }
    if (str.includes('FILE_ACCESS_DENIED') || str.includes('EACCES')) {
      return 'Không có quyền lưu file vào thư mục đích';
    }
    if (str.includes('disk full') || str.includes('ENOSPC')) {
      return 'Ổ đĩa đầy, không đủ dung lượng lưu trữ';
    }
    if (str.includes('Host disconnected') || str.includes('Specified native messaging host not found')) {
      return 'Native Helper chưa chạy hoặc bị ngắt kết nối';
    }
    if (str.includes('FFmpeg exited')) {
      return 'Lỗi xử lý ghép file bằng FFmpeg';
    }
    if (str.includes('Unsupported URL') || str.includes('trang chủ') || str.includes('Chưa bắt được')) {
      return 'Chưa bắt được luồng video (Bấm phát video rồi ấn tải lại)';
    }

    const cleaned = str.replace(/^ERROR:\s*(\[[^\]]+\]\s*)?/i, '').split('\n')[0].trim();
    return cleaned.length > 80 ? cleaned.slice(0, 80) + '...' : cleaned;
  }

  // Load downloads from local storage and chrome.downloads
  async function loadDownloads() {
    try {
      const storageData = await chrome.storage.local.get(['downloadHistory', 'customDownloadDir']);
      const nativeHistory = Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : [];
      if (storageData.customDownloadDir) {
        sidebarFolderPath.textContent = storageData.customDownloadDir;
        sidebarFolderPath.title = storageData.customDownloadDir;
      }

      // Query browser downloads
      let chromeDownloads = [];
      try {
        chromeDownloads = await chrome.downloads.search({ orderBy: ['-startTime'], limit: 50 });
      } catch (e) {}

      // Normalize chrome downloads (all browser downloads matching Cốc Cốc manager)
      const normalizedChrome = chromeDownloads
        .map(cd => {
          const fn = cd.filename || '';
          const isAudio = /\.(mp3|m4a|aac|flac|wav)$/i.test(fn);
          const isVideo = /\.(mp4|webm|mkv|mov|ts|flv|m4s|avi)$/i.test(fn);
          let state = 'downloading';
          let errorMessage = '';
          if (cd.state === 'complete') {
            state = (cd.exists === false) ? 'deleted' : 'completed';
          } else if (cd.state === 'interrupted') {
            if (cd.error === 'USER_CANCELED') {
              state = 'canceled';
            } else {
              state = 'deleted';
            }
            errorMessage = formatErrorMessage(cd.error || 'Gián đoạn');
          }

          const totalBytes = cd.totalBytes > 0 ? cd.totalBytes : cd.fileSize || 0;
          const receivedBytes = cd.bytesReceived || 0;
          const pct = totalBytes > 0 ? Math.round((receivedBytes / totalBytes) * 100) : 0;

          return {
            id: `chrome_${cd.id}`,
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
        const statusRes = await chrome.runtime.sendMessage({ action: 'getDownloadStatus' });
        if (statusRes) {
          if (statusRes.item) activeItem = statusRes.item;
          if (Array.isArray(statusRes.activeTaskIds)) {
            activeIds = new Set(statusRes.activeTaskIds);
          } else if (activeItem && activeItem.id) {
            activeIds.add(activeItem.id);
          }
        }
      } catch (e) {}

      // Combine and deduplicate
      const map = new Map();
      const now = Date.now();
      const seenActiveTitles = new Set();
      for (const item of nativeHistory) {
        const isFinished = item.percent === '100%' || item.speed === 'Hoàn thành';
        if (isFinished) {
          item.state = 'completed';
        }
        if (item.state === 'downloading') {
          if (item.title && seenActiveTitles.has(item.title)) {
            item.state = 'canceled';
            item.errorMessage = 'Tác vụ trùng lặp đã hủy';
          } else if (item.title) {
            seenActiveTitles.add(item.title);
          }
          const isTaskActive = activeIds.has(item.id) || (activeItem && activeItem.id === item.id);
          // If task is not active in the background engine
          if (!isTaskActive) {
            if (item.outputFile || item.filename) {
              item.state = 'completed';
              item.percent = '100%';
            } else if (now - (item.startTime || 0) > 900000) {
              item.state = 'deleted';
              item.error = 'Bị gián đoạn';
              item.errorMessage = 'Bị gián đoạn (Đã đóng trình duyệt hoặc tiến trình kết thúc)';
            }
          }
        }

        if (!item.errorMessage && item.error) {
          item.errorMessage = formatErrorMessage(item.error);
        }
        map.set(item.id || item.filename || item.url, item);
      }
      for (const item of normalizedChrome) {
        if (!map.has(item.id) && !map.has(item.filename)) {
          map.set(item.id, item);
        }
      }

      allItems = Array.from(map.values()).sort((a, b) => (b.startTime || 0) - (a.startTime || 0));
      updateCounts();
      renderList();
    } catch (err) {
      allItems = [];
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

  function updateCounts() {
    const total = allItems.length;
    const downloading = allItems.filter(it => it.state === 'downloading').length;
    const completed = allItems.filter(it => it.state === 'completed').length;
    const video = allItems.filter(it => it.type !== 'audio').length;
    const audio = allItems.filter(it => it.type === 'audio').length;

    countAll.textContent = total;
    countDownloading.textContent = downloading;
    countCompleted.textContent = completed;
    countVideo.textContent = video;
    countAudio.textContent = audio;
  }

  function getFilteredItems() {
    return allItems.filter(item => {
      // Filter by category
      if (currentFilter === 'downloading' && item.state !== 'downloading') return false;
      if (currentFilter === 'completed' && item.state !== 'completed') return false;
      if (currentFilter === 'video' && item.type === 'audio') return false;
      if (currentFilter === 'audio' && item.type !== 'audio') return false;

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
    if (!timestamp) return 'Gần đây';
    const d = new Date(timestamp);
    const now = new Date();

    const dDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffDays = Math.round((nowDate - dDate) / (1000 * 60 * 60 * 24));

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    if (diffDays === 0) {
      return `Hôm nay, ${day} tháng ${month}, ${year}`;
    } else if (diffDays === 1) {
      return `Hôm qua, ${day} tháng ${month}, ${year}`;
    } else {
      return `${day} tháng ${month}, ${year}`;
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
    itemCopy.textContent = 'Sao chép liên kết tải xuống';
    itemCopy.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.remove();
      if (item.url) {
        navigator.clipboard.writeText(item.url).then(() => showToast('Đã sao chép liên kết!'));
      }
    });

    const itemDel = document.createElement('div');
    itemDel.className = 'menu-dropdown-item danger';
    itemDel.textContent = 'Xoá khỏi danh sách';
    itemDel.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.remove();
      deleteItem(item.id);
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
      showToast(`Tệp đang được tải (${item.percent || '0%'}), vui lòng chờ...`);
      return;
    }
    if (item.state === 'deleted' || item.state === 'canceled') {
      showToast('Tệp đã bị xóa hoặc hủy. Bấm Thử lại để tải lại.');
      return;
    }

    const title = item.title || 'video.mp4';
    showToast(`Đang mở: ${title}...`);

    chrome.runtime.sendMessage({
      action: 'openFile',
      id: item.id,
      chromeId: item.chromeId,
      path: item.filename || item.outputFile || '',
      filename: item.filename || item.outputFile || item.title || '',
      title: item.title || ''
    }, (res) => {
      if (res && res.success) {
        showToast(`Đang mở: ${title}`);
      } else {
        const errMsg = res && res.error ? res.error : 'Không tìm thấy tệp trên đĩa';
        showToast(errMsg);
      }
    });
  }

  function createDownloadCard(item) {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.id = `card_${item.id}`;

    const isDownloading = item.state === 'downloading';
    const isError = item.state === 'error' || (item.state === 'interrupted' && item.error !== 'USER_CANCELED');
    const isDeleted = item.state === 'deleted';
    const isCanceled = item.state === 'canceled' || item.state === 'cancelled' || item.error === 'USER_CANCELED';
    const isCompleted = item.state === 'completed' && !isDeleted && !isCanceled && !isError;
    const fn = (item.filename || item.title || '').toLowerCase();
    const isAudio = item.type === 'audio' || /\.(mp3|m4a|aac|flac|wav)$/i.test(fn);
    const isVideo = !isAudio && !/\.(exe|msi|zip|rar|7z|tar|gz)$/i.test(fn);

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
      statusTag.textContent = 'Lỗi tải';

      topRow.append(titleMuted, statusTag);
    } else if (isDeleted) {
      const titleMuted = document.createElement('span');
      titleMuted.className = 'item-title-muted';
      titleMuted.textContent = item.title || 'video.mp4';
      titleMuted.title = item.title || '';

      const statusTag = document.createElement('span');
      statusTag.className = 'item-status-tag';
      statusTag.textContent = 'Đã xóa';

      topRow.append(titleMuted, statusTag);
    } else if (isCanceled) {
      const titleMuted = document.createElement('span');
      titleMuted.className = 'item-title-muted';
      titleMuted.textContent = item.title || 'video.mp4';
      titleMuted.title = item.title || '';

      const statusTag = document.createElement('span');
      statusTag.className = 'item-status-tag';
      statusTag.textContent = 'Đã hủy';

      topRow.append(titleMuted, statusTag);
    } else if (isDownloading) {
      const titleTxt = document.createElement('span');
      titleTxt.className = 'item-title-downloading';
      titleTxt.textContent = item.title || 'video.mp4';

      const progInfo = document.createElement('span');
      progInfo.className = 'item-downloading-stats';
      const spd = item.speed ? ` • ${item.speed}` : '';
      const displayPct = (item.percent && item.percent.includes('%')) ? item.percent : (item.speed ? 'Đang tải...' : '0%');
      progInfo.textContent = `${displayPct}${spd}`;

      topRow.append(titleTxt, progInfo);
    }

    // Row 2: Source URL
    const urlRow = document.createElement('div');
    urlRow.className = 'card-url-row';
    urlRow.textContent = formatDisplayUrl(item);
    urlRow.title = item.url || '';
    urlRow.addEventListener('click', (e) => {
      e.stopPropagation();
      if (item.url && item.url.startsWith('http')) {
        window.open(item.url, '_blank');
      }
    });

    // Row 3: Actions row
    const actionsRow = document.createElement('div');
    actionsRow.className = 'card-actions-row';

    if (isCompleted) {
      const btnFolder = document.createElement('button');
      btnFolder.type = 'button';
      btnFolder.className = 'action-link-btn btn-show-folder';
      btnFolder.textContent = 'Mở trong thư mục';
      btnFolder.addEventListener('click', (e) => {
        e.stopPropagation();
        chrome.runtime.sendMessage({
          action: 'showInFolder',
          chromeId: item.chromeId,
          path: item.filename || item.outputFile || ''
        });
      });
      actionsRow.appendChild(btnFolder);

      if (isVideo || isAudio) {
        const btnPlay = document.createElement('button');
        btnPlay.type = 'button';
        btnPlay.className = 'action-link-btn btn-play-media';
        btnPlay.textContent = 'Phát';
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
      btnRetry.textContent = 'Thử lại';
      btnRetry.addEventListener('click', (e) => {
        e.stopPropagation();
        retryDownload(item);
      });

      actionsRow.append(progTrack, btnRetry);
    } else if (isDeleted || isCanceled) {
      const btnRetry = document.createElement('button');
      btnRetry.type = 'button';
      btnRetry.className = 'btn-retry-download';
      btnRetry.textContent = 'Thử lại';
      btnRetry.addEventListener('click', (e) => {
        e.stopPropagation();
        retryDownload(item);
      });
      actionsRow.appendChild(btnRetry);
    } else if (isDownloading) {
      const progTrack = document.createElement('div');
      progTrack.className = 'item-progress-track';
      const progFill = document.createElement('div');
      progFill.className = 'item-progress-fill';
      progFill.style.width = formatPercentWidth(item.percent);
      progTrack.appendChild(progFill);

      const btnCancel = document.createElement('button');
      btnCancel.type = 'button';
      btnCancel.className = 'action-link-btn btn-cancel-download';
      btnCancel.textContent = 'Hủy';
      btnCancel.addEventListener('click', (e) => {
        e.stopPropagation();
        if (item.chromeId) {
          chrome.downloads.cancel(item.chromeId);
        }
        chrome.runtime.sendMessage({
          action: 'cancelDownload',
          taskId: item.id,
          chromeId: item.chromeId
        });
        item.state = 'canceled';
        renderList();
      });

      actionsRow.append(progTrack, btnCancel);
    }

    if (isDeleted || isCanceled || isError) {
      const errRow = document.createElement('div');
      errRow.className = 'item-error-row';
      const errIcon = document.createElement('span');
      errIcon.className = 'error-badge-icon';
      errIcon.appendChild(isCanceled ? createInfoSvg(13, 13, '#64748b') : createAlertSvg(13, 13, '#dc2626'));
      const errTitle = document.createElement('span');
      errTitle.className = 'error-badge-title';
      errTitle.textContent = isCanceled ? 'Trạng thái:' : 'Nguyên nhân:';

      const shortErr = isCanceled ? 'Người dùng đã hủy' : (item.errorMessage || formatErrorMessage(item.error));
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
        btnToggleErr.textContent = 'Chi tiết';
        btnToggleErr.title = 'Xem thông tin lỗi kỹ thuật đầy đủ';

        let isExpanded = false;
        const toggleDetail = (e) => {
          e.stopPropagation();
          isExpanded = !isExpanded;
          if (isExpanded) {
            errRow.classList.add('expanded');
            errDesc.textContent = fullErr;
            btnToggleErr.textContent = 'Thu gọn';
          } else {
            errRow.classList.remove('expanded');
            errDesc.textContent = shortErr;
            btnToggleErr.textContent = 'Chi tiết';
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
    btnMore.title = 'Tùy chọn khác';
    btnMore.appendChild(createMoreDotsSvg(14, 14, 'currentColor'));
    btnMore.addEventListener('click', (e) => {
      e.stopPropagation();
      showCardContextMenu(btnMore, item);
    });

    const btnRemove = document.createElement('button');
    btnRemove.type = 'button';
    btnRemove.className = 'btn-card-remove';
    btnRemove.title = 'Xóa khỏi danh sách';
    btnRemove.appendChild(createRemoveSvg(12, 12, 'currentColor'));
    btnRemove.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteItem(item.id);
    });

    tools.append(btnMore, btnRemove);
    card.appendChild(tools);

    return card;
  }

  function renderList() {
    const filtered = getFilteredItems();
    if (sectionStats) sectionStats.textContent = `${filtered.length} tệp`;

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

    if (item.state === 'downloading') {
      const progFill = card.querySelector('.item-progress-fill');
      if (progFill) {
        progFill.style.width = formatPercentWidth(item.percent);
      }
      const stats = card.querySelector('.item-downloading-stats');
      if (stats) {
        const spd = item.speed ? ` • ${item.speed}` : '';
        const displayPct = (item.percent && item.percent.includes('%')) ? item.percent : (item.speed ? 'Đang tải...' : '0%');
        stats.textContent = `${displayPct}${spd}`;
      }
      return true;
    }

    renderList();
    return true;
  }

  async function retryDownload(item) {
    if (!item) return;
    const retryTaskId = `retry_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    item.state = 'downloading';
    item.speed = 'Đang kết nối lại...';
    delete item.error;
    delete item.errorMessage;

    const storageData = await chrome.storage.local.get(['downloadHistory']);
    const list = Array.isArray(storageData.downloadHistory) ? storageData.downloadHistory : [];
    const found = list.find(it => it.id === item.id);
    if (found) {
      found.state = 'downloading';
      found.speed = 'Đang kết nối lại...';
      delete found.error;
      delete found.errorMessage;
      await chrome.storage.local.set({ downloadHistory: list });
    }

    renderList();
    showToast('Đang kết nối tải lại video...');

    chrome.runtime.sendMessage({
      action: 'downloadNative',
      taskId: retryTaskId,
      url: item.url,
      videoUrl: item.videoUrl || item.url,
      audioUrl: item.audioUrl || '',
      isYouTubeDash: Boolean(item.isYouTubeDash),
      title: item.title,
      quality: item.format || '1080p',
      referer: item.referer || item.pageUrl || item.url,
      pageUrl: item.pageUrl || item.url,
      outputDir: item.outputDir || '',
      duration: item.duration || 0,
      size: item.totalBytes || item.size || 0
    });
  }

  async function deleteItem(id) {
    const target = allItems.find(it => it.id === id);
    if (target && target.state === 'downloading') {
      if (target.chromeId) chrome.downloads.cancel(target.chromeId);
      chrome.runtime.sendMessage({
        action: 'cancelDownload',
        taskId: target.id,
        chromeId: target.chromeId
      });
    }
    allItems = allItems.filter(it => it.id !== id);
    const nativeHistory = allItems.filter(it => !it.id.startsWith('chrome_'));
    await chrome.storage.local.set({ downloadHistory: nativeHistory });
    updateCounts();
    renderList();
    showToast('Đã xoá mục tải xuống!');
  }

  // Filter switching
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      currentFilter = item.dataset.filter || 'all';

      if (currentFilter === 'all') sectionTitle.textContent = 'Tất cả tệp tải xuống';
      else if (currentFilter === 'downloading') sectionTitle.textContent = 'Đang tải xuống';
      else if (currentFilter === 'completed') sectionTitle.textContent = 'Đã hoàn thành';
      else if (currentFilter === 'video') sectionTitle.textContent = 'Video & Phim';
      else if (currentFilter === 'audio') sectionTitle.textContent = 'Âm thanh & MP3';

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
    chrome.runtime.sendMessage({ action: 'openDownloadsFolder' });
  });

  // Change folder
  btnChangeFolder.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'browseFolder' }, (res) => {
      const selectedPath = (res && res.path) || (res && res.success && res.path);
      if (selectedPath) {
        sidebarFolderPath.textContent = selectedPath;
        sidebarFolderPath.title = selectedPath;
        chrome.storage.local.set({ customDownloadDir: selectedPath });
        showToast('Đã đổi thư mục lưu!');
      }
    });
  });

  // Clear all history
  btnClearAll.addEventListener('click', async () => {
    if (confirm('Bạn có chắc muốn xoá toàn bộ lịch sử tải xuống không?')) {
      for (const it of allItems) {
        if (it.state === 'downloading') {
          if (it.chromeId) chrome.downloads.cancel(it.chromeId);
          chrome.runtime.sendMessage({ action: 'cancelDownload', taskId: it.id, chromeId: it.chromeId });
        }
      }
      try {
        if (chrome.downloads && chrome.downloads.erase) {
          chrome.downloads.erase({ query: [''] }, () => {});
        }
      } catch (_) {}
      allItems = [];
      await chrome.storage.local.set({ downloadHistory: [] });
      updateCounts();
      renderList();
      showToast('Đã xoá toàn bộ lịch sử tải xuống!');
    }
  });

  // Auto-Sync 1: Listen to storage changes directly (zero latency cross-tab sync)
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && (changes.downloadHistory || changes.customDownloadDir)) {
      loadDownloads();
    }
  });

  // Auto-Sync 2: Real-time progress events from background service worker
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'nativeProgress') {
      const activeItem = msg.taskId ? allItems.find(it => it.id === msg.taskId) : null;
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
    }
  });

  // Auto-Sync 3: Heartbeat interval (syncs every 800ms while any download is running)
  setInterval(() => {
    const hasActive = allItems.some(it => it.state === 'downloading');
    if (hasActive) {
      loadDownloads();
    }
  }, 800);

  // Initial load
  loadDownloads();
});
