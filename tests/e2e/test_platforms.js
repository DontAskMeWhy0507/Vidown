/**
 * tests/e2e/test_platforms.js
 *
 * Curated Test Case Registry covering all supported platforms and content types
 * for the Vidown E2E Browser Testing Suite:
 *   - YouTube (Videos DASH & progressive, Shorts, Livestreams, Playlists, Subtitles, Audio-only)
 *   - Facebook (Reels, Stories, Photos & Albums, Public Videos, Group Videos, Private Group, Livestreams)
 *   - Instagram (Reels, Feed Videos, Single Photos, Carousels, Stories, Highlights)
 *   - TikTok (Watermark-free Videos, Photo Slideshows, Playlists & Qualities, Stream Relay, Audio)
 *   - Secondary Platforms: X/Twitter, Reddit, Twitch, Vimeo, Pinterest, Threads, Telegram Web
 */

const PLATFORM_TEST_CASES = [
  // =========================================================================
  // 1. YouTube
  // =========================================================================
  {
    id: 'TC-YT-01',
    platform: 'YouTube',
    feature: 'Standard Video (1080p DASH Video+Audio Mux)',
    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 10,
      hasAudio: true,
      videoCodec: ['h264', 'av01', 'vp9'],
      audioCodec: ['aac', 'opus'],
      minHeight: 720,
      syncToleranceSec: 1.5
    },
    description: '1080p DASH stream extraction with separate video and audio tracks muxed via FFmpeg'
  },
  {
    id: 'TC-YT-02',
    platform: 'YouTube',
    feature: 'Standard Video (Progressive MP4 Fallback 720p/360p)',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 10,
      hasAudio: true,
      videoCodec: ['h264', 'av01', 'vp9'],
      audioCodec: ['aac', 'opus'],
      minHeight: 360,
      syncToleranceSec: 1.5
    },
    description: 'Progressive single-stream direct MP4 download fallback'
  },
  {
    id: 'TC-YT-03',
    platform: 'YouTube',
    feature: 'YouTube Shorts (Vertical Video & Fast SPA Navigation)',
    url: 'https://www.youtube.com/shorts/wOxBr2diN5g',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264', 'av01', 'vp9'],
      audioCodec: ['aac', 'opus'],
      minHeight: 720,
      syncToleranceSec: 1.5
    },
    description: 'Vertical short-form video extraction with SPA route listener and widget re-mount'
  },
  {
    id: 'TC-YT-04',
    platform: 'YouTube',
    feature: 'YouTube Livestream (Live Manifest Detection)',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isLiveStream: true,
      allowZeroDuration: true
    },
    description: 'Detection of active livestream broadcast; progressive download safely inhibited'
  },
  {
    id: 'TC-YT-05',
    platform: 'YouTube',
    feature: 'YouTube Playlists (Multi-Item Order Verification)',
    url: 'https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9n14-',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isPlaylist: true,
      minItemCount: 2
    },
    description: 'Multi-item playlist enumeration with sequential index order preservation'
  },
  {
    id: 'TC-YT-06',
    platform: 'YouTube',
    feature: 'YouTube Subtitles & Closed Captions',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      format: 'vtt',
      mediaType: 'subtitle'
    },
    description: 'Extraction and download of closed caption timed-text WebVTT track'
  },
  {
    id: 'TC-YT-07',
    platform: 'YouTube',
    feature: 'YouTube Audio-Only Extraction',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'audio',
      format: 'mp3',
      hasAudio: true,
      minDuration: 10,
      audioCodec: ['mp3', 'aac', 'opus']
    },
    description: 'Standalone audio extraction with sound-only MP3 format transcoding'
  },
  {
    id: 'TC-YT-08',
    platform: 'YouTube',
    feature: 'YouTube Members-Only Video (Auth Boundary)',
    url: 'https://www.youtube.com/watch?v=MEMBERS_ONLY_ID',
    authRequired: true,
    expectedStatus: 'BLOCKED',
    expected: null,
    description: 'Paid channel members-only content; login required, accurately recorded as BLOCKED'
  },

  // =========================================================================
  // 2. Facebook
  // =========================================================================
  {
    id: 'TC-FB-01',
    platform: 'Facebook',
    feature: 'Facebook Reels (React Fiber Extraction)',
    url: 'https://www.facebook.com/reel/1089273918529245',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac', 'mp3'],
      minHeight: 720,
      syncToleranceSec: 1.5
    },
    description: 'Vertical short-form Facebook Reel extracted via React Fiber and Tahoe async pipeline'
  },
  {
    id: 'TC-FB-02',
    platform: 'Facebook',
    feature: 'Facebook Public Video Post / Watch',
    url: 'https://www.facebook.com/watch/?v=10155253685656772',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 10,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac', 'mp3'],
      minHeight: 360,
      syncToleranceSec: 1.5
    },
    description: 'Landscape Facebook Watch video download with title and clean full stream'
  },
  {
    id: 'TC-FB-03',
    platform: 'Facebook',
    feature: 'Facebook Public Single Photo',
    url: 'https://www.facebook.com/photo/?fbid=10161472260656772',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'image',
      format: 'jpeg',
      minDimension: 300
    },
    description: 'High-resolution photo asset extraction from Facebook photo viewer'
  },
  {
    id: 'TC-FB-04',
    platform: 'Facebook',
    feature: 'Facebook Public Photo Album',
    url: 'https://www.facebook.com/media/set/?set=a.10150117498266772',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isAlbum: true,
      minItemCount: 2,
      mediaType: 'image'
    },
    description: 'Multi-photo album extraction with lazy-loading DOM scanner'
  },
  {
    id: 'TC-FB-05',
    platform: 'Facebook',
    feature: 'Facebook Public Group Video',
    url: 'https://www.facebook.com/groups/public_group/videos/123456789',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac']
    },
    description: 'Video extraction from an open public group feed'
  },
  {
    id: 'TC-FB-06',
    platform: 'Facebook',
    feature: 'Facebook Private Group Video (Auth Boundary)',
    url: 'https://www.facebook.com/groups/private_group/posts/987654321',
    authRequired: true,
    expectedStatus: 'BLOCKED',
    expected: null,
    description: 'Closed private group video; HTTP 302 login redirect, categorized as BLOCKED'
  },
  {
    id: 'TC-FB-07',
    platform: 'Facebook',
    feature: 'Facebook Ephemeral User Stories (Auth Boundary)',
    url: 'https://www.facebook.com/stories/10155253685656772/STORY_ID',
    authRequired: true,
    expectedStatus: 'BLOCKED',
    expected: null,
    description: 'Ephemeral user story requiring authenticated account session'
  },
  {
    id: 'TC-FB-08',
    platform: 'Facebook',
    feature: 'Facebook Public Livestream',
    url: 'https://www.facebook.com/watch/live/?v=LIVE_BROADCAST_ID',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isLiveStream: true,
      allowZeroDuration: true
    },
    description: 'Live broadcast state indicator detection (red badge RGB check)'
  },

  // =========================================================================
  // 3. Instagram
  // =========================================================================
  {
    id: 'TC-IG-01',
    platform: 'Instagram',
    feature: 'Instagram Reels (React Fiber Traversal)',
    url: 'https://www.instagram.com/reel/C8q8-vMv2_K/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac'],
      minHeight: 720,
      syncToleranceSec: 1.5
    },
    description: 'Public vertical Reel extracted via React Fiber props and dashInfo'
  },
  {
    id: 'TC-IG-02',
    platform: 'Instagram',
    feature: 'Instagram Feed Video',
    url: 'https://www.instagram.com/p/C-video123/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac'],
      minHeight: 480,
      syncToleranceSec: 1.5
    },
    description: 'Standard square/portrait feed video post extraction'
  },
  {
    id: 'TC-IG-03',
    platform: 'Instagram',
    feature: 'Instagram Single Photo Post',
    url: 'https://www.instagram.com/p/C-photo456/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'image',
      format: 'jpeg',
      minDimension: 300
    },
    description: 'High-resolution photo post extracted via image-instagram-pk'
  },
  {
    id: 'TC-IG-04',
    platform: 'Instagram',
    feature: 'Instagram Multi-Item Carousel',
    url: 'https://www.instagram.com/p/C-carousel789/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isAlbum: true,
      minItemCount: 2
    },
    description: 'Carousel post with sequential slide enumeration and unique naming'
  },
  {
    id: 'TC-IG-05',
    platform: 'Instagram',
    feature: 'Instagram Stories (Auth Boundary)',
    url: 'https://www.instagram.com/stories/some_user/123456789/',
    authRequired: true,
    expectedStatus: 'BLOCKED',
    expected: null,
    description: 'Ephemeral user story; redirect to /accounts/login/ logged as BLOCKED'
  },
  {
    id: 'TC-IG-06',
    platform: 'Instagram',
    feature: 'Instagram Highlights (Auth Boundary)',
    url: 'https://www.instagram.com/stories/highlights/17912345678/',
    authRequired: true,
    expectedStatus: 'BLOCKED',
    expected: null,
    description: 'Profile story highlight tray requiring active user session'
  },

  // =========================================================================
  // 4. TikTok
  // =========================================================================
  {
    id: 'TC-TT-01',
    platform: 'TikTok',
    feature: 'TikTok Standard Video (Watermark-free Aweme via Stream Relay)',
    url: 'https://www.tiktok.com/@tiktok/video/7123456789012345678',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac'],
      minHeight: 720,
      syncToleranceSec: 1.5
    },
    description: 'Aweme React Fiber extraction piped through Stream Relay to bypass TLS fingerprint blocks'
  },
  {
    id: 'TC-TT-02',
    platform: 'TikTok',
    feature: 'TikTok Photo Post / Slideshow',
    url: 'https://www.tiktok.com/@user/video/7234567890123456789',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isAlbum: true,
      minItemCount: 2,
      mediaType: 'image'
    },
    description: 'Photo mode post image array extraction'
  },
  {
    id: 'TC-TT-03',
    platform: 'TikTok',
    feature: 'TikTok Multi-Quality Bitrate Selection',
    url: 'https://www.tiktok.com/@user/video/7345678901234567890',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      hasAudio: true,
      minDuration: 5
    },
    description: 'Quality menu ladder resolution (1080p, 720p, 540p) from bitrateInfo'
  },
  {
    id: 'TC-TT-04',
    platform: 'TikTok',
    feature: 'TikTok Creator Playlist / Series Item',
    url: 'https://www.tiktok.com/@user/video/7456789012345678901',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      hasAudio: true
    },
    description: 'Series video item detection with playlist shortcode synchronization'
  },
  {
    id: 'TC-TT-05',
    platform: 'TikTok',
    feature: 'TikTok Original Sound Audio Extraction',
    url: 'https://www.tiktok.com/@user/video/7123456789012345678',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'audio',
      format: 'mp3',
      hasAudio: true,
      audioCodec: ['mp3', 'aac']
    },
    description: 'Sound-only mode audio extraction in MP3 container'
  },

  // =========================================================================
  // 5. Secondary Platforms
  // =========================================================================
  {
    id: 'TC-X-01',
    platform: 'X / Twitter',
    feature: 'X Video Tweet',
    url: 'https://x.com/NASA/status/1785000000000000000',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac'],
      minHeight: 480
    },
    description: 'Video tweet extraction via video.twimg.com progressive MP4'
  },
  {
    id: 'TC-X-02',
    platform: 'X / Twitter',
    feature: 'X Multi-Image Tweet Grid',
    url: 'https://x.com/NatGeo/status/1785000000000000001',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isAlbum: true,
      minItemCount: 2,
      mediaType: 'image'
    },
    description: 'Original camera resolution image extraction via pbs.twimg.com name=orig'
  },
  {
    id: 'TC-X-03',
    platform: 'X / Twitter',
    feature: 'X Animated GIF (Looped Video)',
    url: 'https://x.com/i/status/1785000000000000002',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 1,
      videoCodec: ['h264'],
      hasAudio: false
    },
    description: 'Animated GIF tweet served as silent looping MP4 container'
  },
  {
    id: 'TC-RD-01',
    platform: 'Reddit',
    feature: 'Reddit DASH Video + Audio FFmpeg Mux',
    url: 'https://www.reddit.com/r/aww/comments/123456/sample_video/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac'],
      syncToleranceSec: 1.0
    },
    description: 'shreddit custom element DASH video and audio stream multiplexing via FFmpeg'
  },
  {
    id: 'TC-RD-02',
    platform: 'Reddit',
    feature: 'Reddit Silent Video',
    url: 'https://www.reddit.com/r/gifs/comments/234567/silent_clip/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 3,
      hasAudio: false,
      videoCodec: ['h264']
    },
    description: 'Single video DASH stream copy without audio track'
  },
  {
    id: 'TC-RD-03',
    platform: 'Reddit',
    feature: 'Reddit Multi-Image Gallery',
    url: 'https://www.reddit.com/r/pics/comments/345678/gallery_post/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isAlbum: true,
      minItemCount: 2,
      mediaType: 'image'
    },
    description: 'Reddit gallery image collection from i.redd.it'
  },
  {
    id: 'TC-TW-01',
    platform: 'Twitch',
    feature: 'Twitch Clip',
    url: 'https://clips.twitch.tv/GloriousClipName',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 10,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac']
    },
    description: 'Twitch clip MP4 stream with clean sanitized title'
  },
  {
    id: 'TC-TW-02',
    platform: 'Twitch',
    feature: 'Twitch Archived Broadcast VOD',
    url: 'https://www.twitch.tv/videos/1234567890',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac']
    },
    description: 'Twitch VOD HLS playlist stream extraction'
  },
  {
    id: 'TC-TW-03',
    platform: 'Twitch',
    feature: 'Twitch Livestream Detection',
    url: 'https://www.twitch.tv/channel_name',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isLiveStream: true,
      allowZeroDuration: true
    },
    description: 'Active Twitch channel livestream identification'
  },
  {
    id: 'TC-VM-01',
    platform: 'Vimeo',
    feature: 'Vimeo Progressive 1080p/720p Video',
    url: 'https://vimeo.com/76979871',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 10,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac'],
      minHeight: 720
    },
    description: 'Vimeo player config JSON progressive stream ladder parsing'
  },
  {
    id: 'TC-VM-02',
    platform: 'Vimeo',
    feature: 'Vimeo Multi-Resolution Quality Selection',
    url: 'https://vimeo.com/76979871',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      hasAudio: true
    },
    description: 'Switching between 720p and 1080p progressive streams'
  },
  {
    id: 'TC-VM-03',
    platform: 'Vimeo',
    feature: 'Vimeo Embedded Player',
    url: 'https://player.vimeo.com/video/76979871',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      hasAudio: true
    },
    description: 'Vimeo embedded iframe player media extraction'
  },
  {
    id: 'TC-PN-01',
    platform: 'Pinterest',
    feature: 'Pinterest Video Pin',
    url: 'https://www.pinterest.com/pin/123456789012345678/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      videoCodec: ['h264']
    },
    description: 'Video pin extraction with HTML entity title sanitization'
  },
  {
    id: 'TC-PN-02',
    platform: 'Pinterest',
    feature: 'Pinterest Image Pin',
    url: 'https://www.pinterest.com/pin/234567890123456789/',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'image',
      format: 'jpeg',
      minDimension: 300
    },
    description: 'Original high-resolution image pin download'
  },
  {
    id: 'TC-PN-03',
    platform: 'Pinterest',
    feature: 'Pinterest Related Pins Grid Lazy Loading',
    url: 'https://www.pinterest.com/search/pins/?q=nature',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      isAlbum: true,
      minItemCount: 2,
      mediaType: 'image'
    },
    description: 'Dynamic grid detection on infinite scrolling feed'
  },
  {
    id: 'TC-TH-01',
    platform: 'Threads',
    feature: 'Threads Video Post',
    url: 'https://www.threads.net/@zuck/post/12345678',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      minDuration: 5,
      hasAudio: true,
      videoCodec: ['h264'],
      audioCodec: ['aac']
    },
    description: 'Video post extraction with canonical Threads referer'
  },
  {
    id: 'TC-TH-02',
    platform: 'Threads',
    feature: 'Threads Photo Post',
    url: 'https://www.threads.net/@user/post/23456789',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'image',
      format: 'jpeg',
      minDimension: 300
    },
    description: 'Photo post extraction from Instagram CDN via Threads referer'
  },
  {
    id: 'TC-TG-01',
    platform: 'Telegram Web',
    feature: 'Telegram Web Public Channel Media',
    url: 'https://t.me/s/telegram/123',
    authRequired: false,
    expectedStatus: 'PASS',
    expected: {
      mediaType: 'video',
      format: 'mp4',
      hasAudio: true,
      minDuration: 5
    },
    description: 'Public Web Telegram channel media stream sniffing'
  },
  {
    id: 'TC-TG-02',
    platform: 'Telegram Web',
    feature: 'Telegram Web Private Chat Media (Auth Boundary)',
    url: 'https://web.telegram.org/a/#12345678',
    authRequired: true,
    expectedStatus: 'BLOCKED',
    expected: null,
    description: 'Private encrypted chat media; login QR screen required, categorized as BLOCKED'
  }
];

module.exports = {
  PLATFORM_TEST_CASES
};
