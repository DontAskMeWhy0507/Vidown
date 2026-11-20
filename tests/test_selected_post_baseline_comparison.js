const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm'),acorn=require('acorn');
const {parseHTML}=require('linkedom');
const root=path.resolve(__dirname,'..');
function parse(file){const code=fs.readFileSync(file,'utf8'),ast=acorn.parse(code,{ecmaVersion:'latest',sourceType:'module'});return {code,ast};}
function pick(src,predicate){let node;function visit(n){if(!n||typeof n!=='object')return;if(!node&&predicate(n))node=n;for(const v of Object.values(n))if(Array.isArray(v))v.forEach(visit);else if(v&&typeof v==='object')visit(v);}visit(src.ast);assert(node);return src.code.slice(node.start,node.end);}
const fn=(src,name)=>pick(src,n=>n.type==='FunctionDeclaration'&&n.id?.name===name);
const A='7111111111111111111',B='7222222222222222222';
const {document}=parseHTML('<html><body><div class="FeedItemContainer"><section><div class="xgplayer-container" id="xgwrapper-player-'+A+'"><video id="A"></video></div><a href="https://www.tiktok.com/@a/video/'+A+'">A</a></section><section><div class="xgplayer-container" id="xgwrapper-player-'+B+'"><video id="B" data-video-id="'+A+'"></video></div><a href="https://www.tiktok.com/@b/video/'+B+'">B</a></section></div></body></html>');
const video=document.getElementById('B');
const location={href:'https://www.tiktok.com/@a/video/'+A,host:'www.tiktok.com',pathname:'/@a/video/'+A};
const current=parse(path.join(root,'src/content/platform/tiktok-douyin.js'));
const context=vm.createContext({document,location,URL,TIKTOK_VIDEO_URL_REGEX:/\/@[^/]+\/(?:video|story|photo)\/(\d+)/});
vm.runInContext(['getTikTokVideoIdFromUrl','isTikTokAnchorLink','findTikTokVideoLinks','getTikTokAnchorElement','findTikTokItemRoot','getTikTokItemId'].map(name=>fn(current,name)).join('\n')+';var '+pick(current,n=>n.type==='VariableDeclarator'&&n.id?.name==='extractXgPlayerId')+';',context);
// The baseline source is an optional read-only comparison, never a test dependency.
const baseline=process.env.VIDOWN_BASELINE_DIR;
if(baseline){const original=parse(path.join(baseline,'content/content.js'));const ctx=vm.createContext({document,window:{location,innerHeight:1000}});vm.runInContext(fn(original,'resolveTikTokVideoUrl'),ctx);assert(ctx.resolveTikTokVideoUrl(video).endsWith('/video/'+B));}
assert.strictEqual(context.getTikTokItemId(video),B,'The DOM-owned selected player ID must win over stale injected metadata');
assert.strictEqual(context.getTikTokAnchorElement(video).href,'https://www.tiktok.com/@b/video/'+B,'Link lookup must not escape into the neighbouring card');
// A shared feed initially exposes A's bitrate props, while B's own fiber also
// contains B. Old stamping must not overwrite B with the first feed child.
const sourceA={id:A,desc:'Video A',video:{bitrateInfo:[{playAddr:{urlList:['https://cdn.example/A.mp4']}}],playAddr:'https://cdn.example/A.mp4'}};
const sourceB={id:B,desc:'Video B',video:{bitrateInfo:[{playAddr:{urlList:['https://cdn.example/B.mp4']}}],playAddr:'https://cdn.example/B.mp4'}};
document.querySelector('.FeedItemContainer').__reactProps$fixture={children:[{props:{id:A,bitrateInfo:sourceA.video.bitrateInfo,url:sourceA.video.playAddr}}]};
video.parentElement.parentElement.__reactFiber$fixture={memoizedProps:{},child:{memoizedProps:{item:sourceA},sibling:{memoizedProps:{item:sourceB}}}};
video.setAttribute('data-aweme-video',JSON.stringify({id:A,url:sourceA.video.playAddr}));
const injected=vm.createContext({document,window:{addEventListener(){}},location,URL,MutationObserver:class{observe(){}},setTimeout:()=>1,clearTimeout(){}});
vm.runInContext(fs.readFileSync(path.join(root,'src/inject/tiktok/main-world.js'),'utf8'),injected);
const selected=JSON.parse(video.getAttribute('data-aweme-video'));
assert.strictEqual(selected.id,B);assert.strictEqual(selected.url,sourceB.video.playAddr,'Injection must retain the selected B URL, not the first A stream');
// Reject stale stamps even before the next MAIN-world refresh has completed.
video.setAttribute('data-aweme-video',JSON.stringify({id:A,url:sourceA.video.playAddr}));
vm.runInContext('var awemeParsedCache=new WeakMap();'+fn(current,'parseAwemeVideoAttribute')+fn(current,'getAwemeVideoData'),context);
assert.notStrictEqual(context.getAwemeVideoData(video)?.id,A);
async function verifySelectedFile() {
  const http=require('http'),os=require('os'),native=require('../native/host');
  const bytesA=fs.readFileSync(path.join(root,'tests/fixtures/media/sample_720p.mp4'));
  const bytesB=fs.readFileSync(path.join(root,'tests/fixtures/media/sample_1080p.mp4'));
  const requests=[];
  const server=http.createServer((req,res)=>{requests.push(req.url);const bytes=req.url.startsWith('/B.mp4')?bytesB:bytesA;res.setHeader('Content-Type','video/mp4');res.setHeader('Content-Length',bytes.length);res.end(bytes);});
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'vidown-selected-post-'));
  try {
    const selectedUrl='http://127.0.0.1:'+server.address().port+'/B.mp4?__vid='+B+'&token=synthetic';
    sourceB.video.playAddr=selectedUrl;sourceB.video.bitrateInfo[0].playAddr.urlList=[selectedUrl];
    vm.runInContext(fs.readFileSync(path.join(root,'src/inject/tiktok/main-world.js'),'utf8'),injected);
    const media=JSON.parse(video.getAttribute('data-aweme-video'));
    assert.strictEqual(media.id,B);assert.strictEqual(media.url,selectedUrl);
    const complete=await new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>reject(new Error('Selected-post download timed out')),20000);
      native.setMessageHook(msg=>{if(msg.action==='complete'){clearTimeout(timer);resolve(msg);}else if(msg.action==='error'){clearTimeout(timer);reject(new Error(msg.error));}});
      native.startDownload({url:media.url,filename:'selected-B.mp4',outputDir,taskId:'selected-post-B'});
    });
    assert.deepStrictEqual(fs.readFileSync(complete.outputPath || path.join(outputDir,complete.outputFile)),bytesB);
    assert(requests.length>0 && requests.every(url=>url===new URL(selectedUrl).pathname+new URL(selectedUrl).search),'Only selected B can reach the transport, with its signed query unchanged');
  } finally {native.setMessageHook(null);await new Promise(resolve=>server.close(resolve));fs.rmSync(outputDir,{recursive:true,force:true});}
  console.log('PASS: baseline/current selected-card comparison, exact B metadata and byte-for-byte B download despite stale A data and page URL');
}
verifySelectedFile().catch(error=>{console.error(error);process.exitCode=1;});
