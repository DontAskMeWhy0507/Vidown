const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const http = require('http');
const root = path.resolve(__dirname, '..');
const out = fs.mkdtempSync(path.join(require('os').tmpdir(), 'vidown-selection-'));
const acorn = require(path.join(root, 'node_modules/acorn'));
function walk(n, visit) {
  if (!n || typeof n !== 'object') return;
  visit(n);
  for (const value of Object.values(n)) {
    if (Array.isArray(value)) value.forEach(x => walk(x, visit));
    else if (value && typeof value === 'object') walk(value, visit);
  }
}
function parsed(rel) {
  let code = fs.readFileSync(path.join(root, rel), 'utf8');
  if (/^export default\s+/m.test(code)) code = '(' + code.replace(/^export default\s+/m, '').trim().replace(/;$/, '') + ')';
  return { code, ast: acorn.parse(code, { ecmaVersion: 'latest' }) };
}
function select(src, predicate) { let match; walk(src.ast, n => { if (!match && predicate(n)) match = n; }); assert(match); return src.code.slice(match.start, match.end); }
function fn(src, name) { return select(src, n => n.type === 'FunctionDeclaration' && n.id?.name === name); }
const findings = [];
function record(id, evidence) { findings.push({ id, evidence }); console.log('PASS ' + id); }
const bg = parsed('background.chrome.js');
const bgFns = ['registerSniffedStream', 'findBestStreamFromList', 'isBogusStreamUrl', 'resolveRealStreamForDownload', 'cleanMediaCdnUrl', 'isImageDownload'].map(n => fn(bg, n)).join('\n');
const wrapper = select(bg, n => n.type === 'AssignmentExpression' && n.left.type === 'MemberExpression' && bg.code.slice(n.left.start, n.left.end) === 'chrome.downloads.download');
function backgroundSandbox() {
  const s = { URL, Map, Set, Date, console: { log(){}, warn(){}, error(){} }, currentActiveTabUrl: 'https://www.instagram.com/', activeDownloads: new Map(), nativeHelperAvailable: true, fakeIdCounter: 100,
    history: [], dispatched: [], chrome: { downloads: {}, runtime: {} },
    isUrlRecentlyRequested: () => false, isSessionProtectedStream: () => false,
    startNativeDownload: options => { s.dispatched.push({ ...options }); return true; },
    updateDownloadHistory: rec => s.history.push(rec), setActionBadge(){}, broadcastTaskEvent(){},
    sniffedStreamsByTab: new Map(), sniffedStreamsByPage: new Map() };
  vm.createContext(s); vm.runInContext(bgFns + '\n' + wrapper + ';', s); return s;
}
async function main() {
  const photo = 'https://scontent.cdninstagram.com/photo-A.jpg?token=example';
  const unrelated = 'https://video.cdninstagram.com/reel-B.mp4?token=example';
  const p = backgroundSandbox();
  p.registerSniffedStream(7, 'https://www.instagram.com/', unrelated, 'MP4', 'Reel B');
  p.chrome.downloads.download({ url: photo, filename: 'photo-A.jpg', type: 'image', pageUrl: 'https://www.instagram.com/', tabId: 7 });
  assert.strictEqual(p.dispatched[0].url, photo);
  assert(!p.dispatched[0].isConversionStream);
  record('R1_IMAGE_REWRITTEN_TO_VIDEO', { requested: photo, dispatched: p.dispatched[0].url, filename: p.dispatched[0].filename });
  const empty = backgroundSandbox();
  empty.chrome.downloads.download({ url: photo, filename: 'photo-A.jpg', type: 'image', pageUrl: 'https://www.instagram.com/' });
  assert.strictEqual(empty.dispatched.length, 1); assert.strictEqual(empty.dispatched[0].url, photo);
  record('R1_IMAGE_REJECTED_WITHOUT_VIDEO_CACHE', { selected: empty.dispatched[0].url });

  const cross = backgroundSandbox();
  cross.registerSniffedStream(21, 'https://www.instagram.com/reel/POST_B/', unrelated, 'MP4', 'B');
  const resolved = cross.resolveRealStreamForDownload('blob:https://www.instagram.com/a', 'https://www.instagram.com/reel/POST_A/', 22);
  assert.strictEqual(resolved, 'blob:https://www.instagram.com/a');
  record('R2_WRONG_POST_AND_TAB', { requestedPage: 'POST_A in tab 22', cachedPage: 'POST_B in tab 21', resolved });

  const widget = parsed('src/content/widget/widget-manager.js');
  let method;
  walk(widget.ast, n => { if (n.type === 'ClassDeclaration' && n.id?.name === 'MainDownloadComponent') method = n.body.body.find(x => x.key?.name === 'fetchDownloads'); });
  assert(method);
  const runtime = require(path.join(root, 'src/content/vendor/regenerator-core.js'));
  const ws = { Promise, console, location: {href:'https://example.com/watch'}, window: { __saviorSniffedMedia: [{ url: unrelated, type: 'video', ext: 'mp4' }] }, mt: runtime,
    enrichMediaMeta: x => x, getMediaProvider: () => null, detectorLogger: { a: { log(){} } }, coreUtils: { isValidData: () => true }, saviorConstants: { B: () => false },
    LazyMediaTracker: { processRequest(){}, getMediaObjectsFromNode: node => Promise.resolve([{url:node.currentSrc || node.src,type:'video',ext:'mp4'}]),getDownloadsByMediaObjects: x => Promise.resolve(x) } };
  vm.createContext(ws);
  vm.runInContext(fn(widget, 'getNodeMediaIdentity') + '\n' + fn(widget, 'w') + '\nvar gt=w; var ' + select(widget, n => n.type === 'VariableDeclarator' && n.id?.name === 'wt') + '; globalThis.fetchActual=function' + widget.code.slice(method.value.start, method.value.end) + ';', ws);
  const node = { tagName: 'VIDEO', src: 'https://cdn.example/video-A.mp4', currentSrc: 'https://cdn.example/video-A.mp4', getAttribute: () => 'video-A' };
  const component = { state: {}, parent: { $node: node, isImage: false }, setState(patch) { Object.assign(this.state, patch); } };
  await ws.fetchActual.call(component);
  assert.strictEqual(component.state.downloads[0].url, node.src);
  record('R3_WIDGET_PREFERS_UNRELATED_LAST_STREAM', { nodeSrc: node.src, selected: component.state.downloads[0].url });

  let releaseOld;
  ws.LazyMediaTracker.getDownloadsByMediaObjects = () => new Promise(resolve => { releaseOld = resolve; });
  const pending = { state: {mediaObjects:[{url:node.src,type:'video',ext:'mp4'}]}, parent: { $node: node, isImage: false }, setState(patch) { Object.assign(this.state, patch); } };
  const oldFetch = ws.fetchActual.call(pending);
  node.currentSrc = node.src = 'https://cdn.example/video-C.mp4';
  releaseOld([{url:'https://cdn.example/video-A.mp4',type:'video',ext:'mp4'}]);
  await oldFetch;
  assert.strictEqual(pending.state.downloads, null, 'Late result from previous media must be discarded');
  node.currentSrc = node.src = 'blob:https://example.com/reused-player';
  node.poster = 'https://cdn.example/post-A.jpg';
  const recycledVideo = { state: {mediaObjects:[{url:'https://cdn.example/video-A.mp4',type:'video',ext:'mp4'}]}, parent:{ $node:node, isImage:false }, setState(patch){Object.assign(this.state,patch);} };
  releaseOld = null;
  const posterFetch = ws.fetchActual.call(recycledVideo);
  assert.strictEqual(typeof releaseOld,'function','The metadata request must actually be pending before recycling the player');
  node.poster = 'https://cdn.example/post-B.jpg';
  releaseOld([{url:'https://cdn.example/video-A.mp4',type:'video',ext:'mp4'}]);
  await posterFetch;
  assert.strictEqual(recycledVideo.state.downloads,null,'A recycled blob player with a new poster must discard the old post result');

  const tt = parsed('src/content/platform/tiktok-douyin.js');
  const ts = { WeakMap, JSON, window: { __saviorSniffedMedia: [{ url: 'https://v16.tiktokcdn.com/video/tos/opaque-B.mp4' }] }, getTikTokItemId: () => '111', awemeParsedCache: new WeakMap() };
  vm.createContext(ts);vm.runInContext(fn(tt, 'parseAwemeVideoAttribute') + '\n' + fn(tt, 'findMatchingSniffedMedia'), ts);
  let value = JSON.stringify({ id: '111', url: 'https://cdn.example/A.mp4' });
  const recycled = { hasAttribute: () => true, getAttribute: () => value };
  const a = ts.parseAwemeVideoAttribute(recycled); value = JSON.stringify({ id: '222', url: 'https://cdn.example/B.mp4' });
  const b = ts.parseAwemeVideoAttribute(recycled); assert.strictEqual(b.id, '222');
  record('R4_TIKTOK_STALE_WEAKMAP', { initial: a.id, currentAttribute: JSON.parse(value).id, returned: b.id });
  const mismatch = ts.findMatchingSniffedMedia({}, '111'); assert.strictEqual(mismatch, null);
  record('R3_TIKTOK_ID_MISMATCH_FALLBACK', { targetId: '111', selected: mismatch });

  let observe;
  const ss = { URL, Map, Set, Date, console, document: { readyState: 'complete', title: 'test', querySelector: () => null, querySelectorAll: () => [], addEventListener(){} },
    location: { protocol: 'https:', host: 'www.youtube.com', href: 'https://www.youtube.com/watch?v=A' },
    performance: { setResourceTimingBufferSize(){}, getEntriesByType: () => [] },
    PerformanceObserver: class { constructor(cb) { observe=cb; } observe(){} }, chrome: { runtime: { sendMessage: () => Promise.resolve() } }, addEventListener(){}, setTimeout(){} };
  ss.window=ss;vm.createContext(ss);vm.runInContext(fs.readFileSync(path.join(root,'stream-sniffer.js'),'utf8'),ss);
  observe({ getEntries: () => [
    { name: 'https://rr1.googlevideo.com/videoplayback?mime=video%2Fmp4&id=A&itag=137&range=0-99' },
    { name: 'https://rr1.googlevideo.com/videoplayback?mime=video%2Fmp4&id=B&itag=18&range=0-99' }
  ] });
  assert.strictEqual(ss.__saviorSniffedMedia.length,2);
  record('R5_STREAM_DEDUPE_DROPS_DIFFERENT_VIDEO', { inputVideos: 2, captured: ss.__saviorSniffedMedia.length, kept: ss.__saviorSniffedMedia[0].url });

  let configured;
  const rs = { chrome: { declarativeNetRequest: { updateSessionRules: rules => { configured=rules;return Promise.resolve(); } } } };
  vm.createContext(rs);vm.runInContext(fn(bg,'setupAnti403Rules') + '\nsetupAnti403Rules();',rs);
  const fb=configured.addRules.find(r=>r.id===1001),ig=configured.addRules.find(r=>r.id===1011);
  assert.notStrictEqual(JSON.stringify(fb.condition),JSON.stringify(ig.condition));
  record('R6_DNR_CONFLICT', { matchingCondition: fb.condition, rules: [fb,ig].map(r=>({id:r.id,priority:r.priority,referer:r.action.requestHeaders[0].value})), akamai: configured.addRules.filter(r=>[1023,1027].includes(r.id)).map(r=>({id:r.id,filter:r.condition.urlFilter,referer:r.action.requestHeaders[0].value})) });

  const host = require(path.join(root,'native/host.js'));
  assert.strictEqual(host.isSameOriginOrSubdomain('a.github.io','b.github.io'),false);
  assert.strictEqual(host.isSameOriginOrSubdomain('bank.com.vn','other.com.vn'),false);
  record('R7_COOKIE_SCOPE_INDEPENDENT_HOSTS', { githubIo: false, comVn: false });

  const captured=[];
  const server=http.createServer((req,res)=>{
    if(req.url==='/from') {res.writeHead(302,{Location:'http://localhost:'+server.address().port+'/to'});res.end();return;}
    captured.push(req.headers.cookie||'');
    const data=Buffer.alloc(1024,0x41);
    res.writeHead(206,{'Content-Length':data.length,'Content-Range':'bytes 0-1023/1024','Content-Type':'video/mp4'});res.end(data);
  });
  await new Promise(r=>server.listen(0,r));
  const dest=path.join(out,'redirect-repro.mp4');
  try { await host.downloadFileMultiThread({url:'http://127.0.0.1:'+server.address().port+'/from',outPath:dest,headers:{Cookie:'audit_session=SYNTHETIC_ONLY'},totalSize:1024,concurrency:1}); }
  finally {await new Promise(r=>server.close(r));}
  assert.strictEqual(captured[0],'');
  record('R8_REDIRECT_REBUILDS_SENSITIVE_HEADERS', { initialHost:'127.0.0.1',redirectHost:'localhost',syntheticCookieForwarded:false });

  const signed='https://cdn.example/media.mp4?range=0-1023&sq=12&token=example';
  const cleaned=p.cleanMediaCdnUrl(signed);
  assert.strictEqual(cleaned,signed);
  record('R9_UNSCOPED_QUERY_MUTATION', { input:signed,output:cleaned });
  fs.rmSync(out, { recursive: true, force: true });
  console.log('PASS: '+findings.length+' production behavior regression assertions.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});

