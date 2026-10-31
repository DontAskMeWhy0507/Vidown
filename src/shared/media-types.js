/**
 * src/shared/media-types.js
 * Definitions of media categories, resolution hierarchies, and MIME mappings.
 */

const MEDIA_TYPES = {
  video: {
    title: 'Video',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.79009 16.25C3.36914 16.25 3.01284 16.1041 2.72117 15.8125C2.42952 15.5208 2.28369 15.1645 2.28369 14.7435V5.25642C2.28369 4.83547 2.42952 4.47917 2.72117 4.1875C3.01284 3.89583 3.36914 3.75 3.79009 3.75H13.2772C13.6982 3.75 14.0545 3.89583 14.3461 4.1875C14.6378 4.47917 14.7836 4.83547 14.7836 5.25642V9.07052L17.7163 6.13785V13.8621L14.7836 10.9294V14.7435C14.7836 15.1645 14.6378 15.5208 14.3461 15.8125C14.0545 16.1041 13.6982 16.25 13.2772 16.25H3.79009ZM3.79009 15H13.2772C13.352 15 13.4135 14.9759 13.4615 14.9279C13.5096 14.8798 13.5337 14.8183 13.5337 14.7435V5.25642C13.5337 5.18162 13.5096 5.12019 13.4615 5.0721C13.4135 5.02402 13.352 4.99998 13.2772 4.99998H3.79009C3.7153 4.99998 3.65386 5.02402 3.60577 5.0721C3.55769 5.12019 3.53365 5.18162 3.53365 5.25642V14.7435C3.53365 14.8183 3.55769 14.8798 3.60577 14.9279C3.65386 14.9759 3.7153 15 3.79009 15Z" fill="currentColor"/></svg>',
    rgxp: /video/i,
    extensions: ['mp4', 'mpeg4', 'mpg', 'mpeg', 'm4v', 'avi', 'divx', 'mov', 'wmv', 'movie', 'asf', 'webm', 'flv', '3gp', 'm3u8', 'm3u', 'ogv', 'mpd'],
    extensions_weight: ['mp4', 'webm', 'm3u8', 'mpd', 'm4v', 'flv', '3gp']
  },
  no_watermark_video: {
    title: 'No watermark video',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z" fill="currentColor"/></svg>',
    rgxp: /no watermark video/i,
    extensions: ['mp4', 'webm'],
    extensions_weight: ['mp4', 'webm']
  },
  audio: {
    title: 'Audio',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.34701 16.1464C3.91819 16.7176 4.60481 17.0032 5.40688 17.0032C6.20895 17.0032 6.89558 16.7176 7.46676 16.1464C8.03792 15.5752 8.3235 14.8886 8.3235 14.0865V5.72114H16.2603V11.7404C16.0263 11.5502 15.7699 11.4076 15.491 11.3125C15.2122 11.2174 14.913 11.1699 14.5936 11.1699C13.7915 11.1699 13.1049 11.4555 12.5337 12.0267C11.9625 12.5978 11.6769 13.2845 11.6769 14.0865C11.6769 14.8886 11.9625 15.5752 12.5337 16.1464C13.1049 16.7176 13.7915 17.0032 14.5936 17.0032C15.3957 17.0032 16.0823 16.7176 16.6535 16.1464C17.2246 15.5752 17.5102 14.8886 17.5102 14.0865V5.72114V2.99683H16.6768H16.2603H7.07355V11.7404C6.83957 11.5502 6.58316 11.4076 6.30432 11.3125C6.02547 11.2174 5.72632 11.1699 5.40688 11.1699C4.60481 11.1699 3.91819 11.4555 3.34701 12.0267C2.77582 12.5978 2.49023 13.2845 2.49023 14.0865C2.49023 14.8886 2.77582 15.5752 3.34701 16.1464Z" fill="currentColor"/></svg>',
    rgxp: /audio/i,
    extensions: ['mp3', 'flac', 'm4a', 'wma', 'ogg', 'wav', 'aif', 'mid', 'opus'],
    extensions_weight: ['mp3', 'flac', 'm4a', 'ogg', 'wav']
  },
  subtitles: {
    title: 'Subtitles',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.90869 13.6143V12.3643H11.8253V13.6143H3.90869ZM3.90869 10.2809V9.03096H16.8253V10.2809H3.90869ZM3.90869 6.94759V5.69763H16.8253V6.94759H3.90869Z" fill="currentColor"/></svg>',
    rgxp: /subtitles/i,
    extensions: ['srt', 'vtt', 'yt_srt'],
    extensions_weight: ['srt', 'vtt']
  }
};

const RESOLUTIONS = {
  '4320p': { label: '8K UHD', value: 1600 },
  '3072p': { label: '4K QFHD', value: 1400 },
  '2160p': { label: '4K UHD', value: 1200 },
  '1440p': { label: 'Quad HD', value: 1000 },
  '1080p': { label: 'Full HD', value: 800 },
  '720p': { label: 'HD', value: 600 },
  '540p': { label: 'Standard', value: 500 },
  '480p': { label: 'Standard', value: 480 },
  '360p': { label: 'Medium', value: 400 },
  '240p': { label: 'Small', value: 200 },
  '144p': { label: 'Mobile', value: 100 }
};

function getMediaType(mime, ext) {
  if (mime) {
    for (const [type, info] of Object.entries(MEDIA_TYPES)) {
      if (info.rgxp.test(mime)) return type;
    }
  }
  if (ext) {
    const cleanExt = String(ext).toLowerCase().replace(/^\./, '');
    for (const [type, info] of Object.entries(MEDIA_TYPES)) {
      if (info.extensions.includes(cleanExt)) return type;
    }
  }
  return 'video';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MEDIA_TYPES, RESOLUTIONS, getMediaType };
}
