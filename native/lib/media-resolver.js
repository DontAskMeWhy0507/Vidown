// Resolve a selected permalink using the maintained site extractors, never a tab-wide stream.
const { execFile } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
function httpUrl(value) { try { const u = new URL(value); return /^https?:$/.test(u.protocol) && !u.username && !u.password; } catch (_) { return false; } }
function mediaFromMetadata(info, request) {
  if (info.entries) {
    const entries = info.entries.filter(Boolean);
    info = request.mediaId ? entries.find(e => String(e.id) === String(request.mediaId)) : entries.length === 1 ? entries[0] : null;
    if (!info) throw new Error('AMBIGUOUS_MEDIA: select an individual video permalink');
  }
  // A fragment base URL alone is not a complete file. Prefer another supported
  // format rather than saving an initialization fragment as the selected video.
  const formats = (info.formats || (info.url ? [info] : [])).filter(f => !f.has_drm && httpUrl(f.url) && (!f.fragments || /^m3u8/.test(f.protocol || '')));
  const video = formats.filter(f => !['none','images'].includes(f.vcodec) && f.ext !== 'mhtml').sort((a,b) => (b.height || 0)-(a.height || 0) || (b.tbr || 0)-(a.tbr || 0));
  const audio = formats.filter(f => f.vcodec === 'none' && f.acodec !== 'none').sort((a,b) => (b.abr || b.tbr || 0)-(a.abr || a.tbr || 0))[0];
  let choices = video.map(f => f.acodec === 'none' && audio ? {...f, url:{videoUrl:f.url,audioUrl:audio.url},ext:'mp4'} : f);
  if (!choices.length && audio) {
    const audioFormats = formats.filter(f => f.vcodec === 'none' && f.acodec !== 'none').sort((a,b) => (b.abr || b.tbr || 0)-(a.abr || a.tbr || 0));
    choices = audioFormats.map(f => ({ ...f, type: 'audio', ext: f.ext || 'mp3' }));
  }
  if (!choices.length) throw new Error('NO_DOWNLOADABLE_FORMAT: media may require login or be DRM protected');
  const allowedExts = ['mp4','webm','m3u8','mpd','mov','mp3','m4a','aac','wav','ogg','opus','flac'];
  const seen = new Set();
  return choices.filter(f => { const k=JSON.stringify(f.url); if(seen.has(k))return false;seen.add(k);return true; }).slice(0,16).map(f => {
    const isAudio = f.type === 'audio';
    const fallbackExt = isAudio ? 'mp3' : 'mp4';
    const chosenExt = allowedExts.includes(f.ext) ? f.ext : fallbackExt;
    const qualityStr = f.height ? f.height + 'p' : (f.abr ? Math.round(f.abr) + 'k' : 'Original');
    return {
      url: f.url,
      type: f.type || 'video',
      ext: chosenExt,
      exts: [f.ext || fallbackExt],
      filename: info.title || (isAudio ? 'audio' : 'video'),
      title: info.title || (isAudio ? 'audio' : 'video'),
      quality: qualityStr,
      resolution: qualityStr,
      thumbnail: info.thumbnail,
      contentId: String(info.id || ''),
      referrer: request.pageUrl,
      hls: /^m3u8/.test(f.protocol || ''),
      dashMPD: f.protocol === 'http_dash_segments',
      _resolvedMedia: true,
      verifiedMedia: true
    };
  });
}
async function resolveMediaMetadata(request, binary, run = execFile) {
  if (!httpUrl(request.pageUrl)) throw new Error('INVALID_PAGE_URL');
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'vidown-resolve-'));
  try {
    const args=['--ignore-config','--no-warnings','--no-playlist','--skip-download','--dump-single-json','--socket-timeout','12','--retries','1','--user-agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'];
    const host=new URL(request.pageUrl).hostname;
    const cookies=(request.cookies || []).filter(c => c && c.name && typeof c.value === 'string' && (host === String(c.domain).replace(/^\./,'') || (!c.hostOnly && host.endsWith('.'+String(c.domain).replace(/^\./,'')))));
    if(cookies.length){
      const safe=v=>String(v).replace(/[\r\n\t]/g,'');
      const jar='# Netscape HTTP Cookie File\n'+cookies.map(c=>[safe(c.domain),c.hostOnly?'FALSE':'TRUE',safe(c.path || '/'),c.secure?'TRUE':'FALSE',Math.floor(c.expirationDate || 0),safe(c.name),safe(c.value)].join('\t')).join('\n');
      const file=path.join(dir,'cookies.txt');fs.writeFileSync(file,jar,{mode:0o600});args.push('--cookies',file);
    }
    args.push('--',request.pageUrl);
    const stdout=await new Promise((resolve,reject)=>run(binary,args,{windowsHide:true,timeout:30000,maxBuffer:8*1024*1024},(err,stdout,stderr)=>err?reject(new Error('EXTRACTION_FAILED: '+String(stderr || err.message).slice(-1200))):resolve(stdout)));
    return mediaFromMetadata(JSON.parse(stdout),request);
  } finally {
    // This directory was created by this invocation under the OS temporary directory.
    for(const file of fs.readdirSync(dir)) fs.unlinkSync(path.join(dir,file));
    fs.rmdirSync(dir);
  }
}
module.exports={resolveMediaMetadata,mediaFromMetadata};
