const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),acorn=require('acorn');
const {parseHTML,DOMParser}=require('linkedom');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
function functions(file,names){const code=read(file),found=[];const visit=n=>{if(!n||typeof n!=='object')return;if(n.type==='FunctionDeclaration'&&names.includes(n.id?.name))found.push(code.slice(n.start,n.end));for(const v of Object.values(n))if(Array.isArray(v))v.forEach(visit);else if(v&&typeof v==='object')visit(v);};visit(acorn.parse(code,{ecmaVersion:'latest',sourceType:'module'}));return found.join('\n');}
function factory(file,deps,env={}){const exports={},r=id=>deps[id]||{};r.r=()=>{};r.d=(obj,key,get)=>Object.defineProperty(obj,key,{get});vm.runInNewContext('('+read(file).replace('export default','').trim().replace(/;$/,'')+')',{URL,location:{origin:'https://www.threads.com'},console,Map,DOMParser,window:{DOMParser},...env})({},exports,r);return exports;}
const urlUtils=factory('src/content/detector/url-utils.js',{0:{isSpecialUrls:()=>false}});
const formatResolver=factory('src/content/core/format-resolver.js',{0:{i18n:x=>x},1:{r:{}},3:urlUtils});
const script=read('src/inject/media-source/main-world.js');
function page(url='https://www.threads.com/@user/post/SELECTED/media'){
 const {document}=parseHTML('<html><head><title>Selected post</title></head><body><article><a href="'+url+'">Post</a><div id="player"><video data-vidown-media-token="selected"></video></div></article></body></html>');
 const video=document.querySelector('video');video.currentSrc='blob:player';video.src='blob:player';video.poster='https://cdn.example/poster-A.jpg';
 const location=new URL(url),window={};const c=vm.createContext({window,document,location,URL,DOMParser,AbortSignal,console,fetch:async()=>{throw new Error('No network fixture');}});
 vm.runInContext(script,c);
 return {video,document,c,window,location,request:{token:'selected',sourceUrl:url,pageUrl:url,currentSrc:'blob:player',poster:video.poster,mediaId:''}};
}
async function main(){
 // Threads uses the selected component even when fields are deeper than the old key allowlist.
 const threads=page();
 threads.video.__reactProps$fixture={children:{props:{playerData:{unifiedVideoInfo:{media:{code:'SELECTED',video_versions:[{url:'https://cdn.example/selected-A.mp4?sig=keep',height:720}]}}}}}};
 let result=await threads.window.__vidownResolveMedia(threads.request);
 assert.strictEqual(result.formats[0].url,'https://cdn.example/selected-A.mp4?sig=keep');
 // A React fiber exposes its memoized data rather than a DOM attribute.
 delete threads.video.__reactProps$fixture;
 threads.video.__reactFiber$fixture={memoizedProps:{dashInfo:{video_dash_manifest:'<MPD><Period><AdaptationSet><Representation mimeType="video/mp4" height="720"><BaseURL>https://cdn.example/video.mp4</BaseURL></Representation><Representation mimeType="audio/mp4"><BaseURL>https://cdn.example/audio.m4a</BaseURL></Representation></AdaptationSet></Period></MPD>'}}};
 result=await threads.window.__vidownResolveMedia(threads.request);assert(result.formats[0].manifest.includes('<MPD>'));
 const messages=[],nativeCalls=[],executions=[];
 const bridge=vm.createContext({URL,console,resolveSelectedPage:async req=>{nativeCalls.push(req.pageUrl);return {media:[{url:'https://cdn.example/native.mp4',type:'video',ext:'mp4'}]};},chrome:{scripting:{executeScript:async options=>{
   executions.push(options);assert.deepStrictEqual(Array.from(options.target.frameIds),[3]);
   if(options.files){vm.runInContext(script,threads.c);return [];}
   threads.c.request=options.args[0];return [{result:await vm.runInContext('('+options.func.toString()+')(request)',threads.c)}];
 }}}});
 vm.runInContext(functions('background.chrome.js',['canUseNativePageExtractor','resolveBrowserSelectedMedia']),bridge);
 const widget=vm.createContext({URL,Date,Math,document:threads.document,location:threads.location,urlUtils,detectorHelper:formatResolver,EE:{emit:(...args)=>messages.push(args)},chrome:{runtime:{sendMessage:req=>bridge.resolveBrowserSelectedMedia(req,{tab:{id:4},frameId:3,url:threads.location.href})}}});
 vm.runInContext(functions('src/content/widget/widget-manager.js',['resolveBrowserDownloads','resolveNodeWithBrowser']),widget);
 const placeholder=(await widget.resolveNodeWithBrowser(threads.video))[0];
 assert(placeholder._browserRequest);assert.strictEqual(executions.length,0,'Scanning cannot start a browser/native extraction job');
 const downloads=await widget.resolveBrowserDownloads(placeholder);
 assert.strictEqual(downloads[0].url.videoUrl,'https://cdn.example/video.mp4');
 assert.strictEqual(downloads[0].url.audioUrl,'https://cdn.example/audio.m4a');
 const manager=factory('src/background/downloads/download-manager.js',{
   0:{defined:x=>x!=null,isMatches:()=>false},1:{l:[]},3:urlUtils,11:{a:{NEW_MEDIA_DOWNLOAD:true,DOWNLOAD:{M3U8_AUDIO:false}}},179:{a:{HLS:1,DASH_MPD:2}}
 },{chrome:{downloads:{combineStreams(){},onChanged:{addListener(){}}},tabs:{onRemoved:{addListener(){}}}}}).a;
 const muxOptions=manager._options({...downloads[0],filename:'selected.mp4'},{id:4,url:threads.location.href});
 assert.strictEqual(muxOptions.videoUrl,'https://cdn.example/video.mp4');assert.strictEqual(muxOptions.audioUrl,'https://cdn.example/audio.m4a');
 const hlsOptions=manager._options({url:'https://cdn.example/opaque',filename:'selected.mp4',ext:'mp4',type:'video',hls:true},{id:4,url:threads.location.href});
 assert.strictEqual(hlsOptions._isHls,true);assert.strictEqual(hlsOptions.mediaType,'video');assert.strictEqual(hlsOptions.url,'https://cdn.example/opaque');
 assert.strictEqual(nativeCalls.length,0,'Threads DASH source must not use yt-dlp');
 assert.strictEqual(executions[0].files[0],'inject/media-source/main-world.js');
 assert(executions[1].func,'Resolver must run after its MAIN-world script is installed');
 // Logged-in Threads HTML is read inside the browser session, never via exported cookies.
 delete threads.video.__reactFiber$fixture;
 let sessionFetch;
 threads.c.fetch=async(url,opts)=>{sessionFetch={url,opts};const json=JSON.stringify({payload:{thread_items:[{post:{code:'OTHER',video_versions:[{url:'https://cdn.example/wrong.mp4'}]}},{post:{code:'SELECTED',video_versions:[{url:'https://cdn.example/private-selected.mp4'}]}}]}});return {ok:true,text:async()=>'<html><script type="application/json">'+json+'</script><script type="application/json">'+json+'</script></html>'};};
 result=await threads.window.__vidownResolveMedia(threads.request);
 assert.strictEqual(result.formats[0].url,'https://cdn.example/private-selected.mp4');assert.strictEqual(sessionFetch.opts.credentials,'include');assert(!sessionFetch.url.endsWith('/media'));
 // Unknown players and Threads are never sent blindly to yt-dlp.
 threads.c.fetch=async()=>({ok:false});
 const none=await bridge.resolveBrowserSelectedMedia({...threads.request,token:'selected'},{tab:{id:4},frameId:3,url:threads.location.href});
 assert.strictEqual(none.error,'BROWSER_MEDIA_NOT_FOUND');assert.strictEqual(nativeCalls.length,0);
 threads.video.poster='https://cdn.example/new-post.jpg';
 assert.strictEqual((await threads.window.__vidownResolveMedia(threads.request)).error,'MEDIA_CHANGED');
 // Ambiguous carousels stop instead of selecting the first media.
 const ambiguous=page();ambiguous.video.__reactProps$fixture={children:[{props:{video_versions:[{url:'https://cdn.example/A.mp4'}]}},{props:{video_versions:[{url:'https://cdn.example/B.mp4'}]}}]};
 assert.strictEqual((await ambiguous.window.__vidownResolveMedia(ambiguous.request)).error,'AMBIGUOUS_MEDIA');
 const carousel=page();
 const next=carousel.document.createElement('video');carousel.video.parentElement.appendChild(next);
 carousel.video.parentElement.__reactProps$fixture={post:{code:'SELECTED',carousel_media:[{id:'A',image_versions2:{candidates:[{url:carousel.video.poster}]},video_versions:[{url:'https://cdn.example/carousel-A.mp4'}]},{id:'B',image_versions2:{candidates:[{url:'https://cdn.example/poster-B.jpg'}]},video_versions:[{url:'https://cdn.example/carousel-B.mp4'}]}]}};
 assert.strictEqual((await carousel.window.__vidownResolveMedia(carousel.request)).formats[0].url,'https://cdn.example/carousel-A.mp4','Poster identity takes priority over the shared post code');
 // Video.js, JW Player and Shaka must be bound to the selected element.
 const js=page('https://news.example/article/A');
 js.window.videojs={getPlayers:()=>({other:{el:()=>({contains:()=>false}),currentSources:()=>[{src:'https://cdn.example/wrong.m3u8'}]},selected:{el:()=>js.video.parentElement,currentSources:()=>[{src:'https://cdn.example/opaque-stream',type:'application/x-mpegURL'}]}})};
 assert.strictEqual((await js.window.__vidownResolveMedia(js.request)).formats[0].url,'https://cdn.example/opaque-stream');
 delete js.window.videojs;
 js.window.jwplayer=id=>({getContainer:()=>js.video.parentElement,getPlaylistItem:()=>({sources:[{file:'https://cdn.example/jw.m3u8'}]})});
 assert.strictEqual((await js.window.__vidownResolveMedia(js.request)).formats[0].url,'https://cdn.example/jw.m3u8');
 delete js.window.jwplayer;js.video.parentElement.ui={getControls:()=>({getPlayer:()=>({getAssetUri:()=> 'https://cdn.example/shaka.mpd'})})};
 assert.strictEqual((await js.window.__vidownResolveMedia(js.request)).formats[0].url,'https://cdn.example/shaka.mpd');
 // Reddit custom elements expose their own playback data; the normal path handles it.
 const reddit=page('https://www.reddit.com/r/test/comments/A/title/');
 const custom=reddit.document.createElement('shreddit-player');custom.setAttribute('data-vidown-media-token','reddit');custom.setAttribute('hls','https://v.redd.it/selected/HLSPlaylist.m3u8');reddit.video.replaceWith(custom);
 const redditRequest={...reddit.request,token:'reddit',currentSrc:'',poster:''};
 assert.strictEqual((await reddit.window.__vidownResolveMedia(redditRequest)).formats[0].url,'https://v.redd.it/selected/HLSPlaylist.m3u8');
 // Verify the previously racing legacy injection waits before reporting completion.
 const background=read('src/background/entry/service-worker-entry.js');const injection=background.slice(background.indexOf('  case 47:')+12,background.indexOf('  return param_T.a(3, 86);',background.indexOf('  case 47:')));
 let release;const calls=[];const context={var_k:4,var_j:3,var_N:'node',var_r:new Map(),param_n:{file:'instagram',id:'request'},sendMessage(){},chrome:{scripting:{ExecutionWorld:{MAIN:'MAIN'},executeScript:opts=>{calls.push(opts.files[0]);return calls.length===1?new Promise(r=>release=r):Promise.resolve([]);}}}};
 vm.runInNewContext(injection,context);assert.strictEqual(calls.length,1);release();await new Promise(setImmediate);assert.strictEqual(calls.length,2);
 // Chrome 148+ accepts listener promises. An unrelated listener must not return
 // Promise<undefined> and win the response race with null.
 function messageListener(file){const code=read(file),ast=acorn.parse(code,{ecmaVersion:'latest',sourceType:'module'});let found;function visit(n){if(!n||typeof n!=='object')return;if(!found&&n.type==='CallExpression'&&code.slice(n.callee.start,n.callee.end)==='chrome.runtime.onMessage.addListener')found=n.arguments[0];for(const v of Object.values(n))if(Array.isArray(v))v.forEach(visit);else if(v&&typeof v==='object')visit(v);}visit(ast);assert(found);return code.slice(found.start,found.end);}
 let enteredLegacy=0;
 const legacy=vm.runInNewContext('('+messageListener('src/background/entry/service-worker-entry.js')+')',{__awaiter:()=>{enteredLegacy++;return Promise.resolve(undefined);},_regenerator:()=>({m:x=>x})});
 const shim=vm.runInNewContext('('+messageListener('background.chrome.js')+')',{resolveBrowserSelectedMedia:async()=>{await new Promise(setImmediate);return {formats:[{url:'https://cdn.example/selected.mp4'}]};}});
 assert.strictEqual(shim({type:'download',data:{params:{}}},{},()=>{}),false,'Widget downloads must have exactly one owner');
 assert.strictEqual(legacy({action:'resolveBrowserMedia'},{},()=>{}),false);
 const actualResponse=await new Promise(resolve=>{
   shim({action:'resolveBrowserMedia'},{},resolve);
   const competing=legacy({action:'resolveBrowserMedia'},{},resolve);
   if(competing&&typeof competing.then==='function')competing.then(resolve);
 });
 assert.strictEqual(actualResponse.formats[0].url,'https://cdn.example/selected.mp4');
 await legacy({type:'inject_script'},{},()=>{});assert.strictEqual(enteredLegacy,1,'Legacy protocol must still reach its handler');
 // Native extraction is reserved for known sites, after normal browser extraction fails.
 for(const host of ['www.threads.com','threads.net','unknown.example','notyoutube.com'])assert(!bridge.canUseNativePageExtractor('https://'+host+'/post/A'));
 for(const host of ['youtube.com','www.facebook.com','www.instagram.com','x.com','www.tiktok.com','www.reddit.com','vimeo.com','www.dailymotion.com','www.twitch.tv','www.pinterest.com','www.bilibili.com'])assert(bridge.canUseNativePageExtractor('https://'+host+'/watch/A'));
 const policy=vm.createContext({URL,resolveSelectedPage:async()=>{nativeCalls.push('supported-fallback');return {media:[]};},chrome:{scripting:{executeScript:async opts=>opts.files?[]:[{result:{error:'BROWSER_MEDIA_NOT_FOUND'}}]}}});
 vm.runInContext(functions('background.chrome.js',['canUseNativePageExtractor','resolveBrowserSelectedMedia']),policy);
 await policy.resolveBrowserSelectedMedia({...threads.request,pageUrl:'https://vimeo.com/123'},{tab:{id:4},frameId:3,url:'https://vimeo.com/123'});
 assert.strictEqual(nativeCalls.length,1,'A known supported difficult site can use native extraction after browser resolution fails');
 await policy.resolveBrowserSelectedMedia({...threads.request,pageUrl:'https://unknown.example/watch'},{tab:{id:4},frameId:3,url:'https://unknown.example/watch'});
 assert.strictEqual(nativeCalls.length,1,'An unknown site must not be passed blindly to yt-dlp');
 // Complete a normal Threads source download without starting yt-dlp.
 const http=require('http'),os=require('os'),native=require('../native/host');
 const bytes=fs.readFileSync(path.join(root,'tests/fixtures/media/sample_720p.mp4'));
 const otherBytes=fs.readFileSync(path.join(root,'tests/fixtures/media/sample_1080p.mp4'));
 const server=http.createServer((req,res)=>{const selected=req.url.startsWith('/selected.mp4');const content=selected?bytes:otherBytes;res.setHeader('Content-Type','video/mp4');res.setHeader('Content-Length',content.length);res.end(content);});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'vidown-browser-pipeline-'));
 try{
   const selected=page(),base='http://127.0.0.1:'+server.address().port;
   selected.video.__reactProps$fixture={playerData:{video_versions:[{url:base+'/selected.mp4',height:720}]}};
   const resolved=await selected.window.__vidownResolveMedia(selected.request);
   widget.chrome.runtime.sendMessage=async()=>resolved;
   const media=(await widget.resolveBrowserDownloads({_browserRequest:selected.request}))[0];
   assert.strictEqual(media.url,base+'/selected.mp4');
   const complete=await new Promise((resolve,reject)=>{
     const timer=setTimeout(()=>reject(new Error('Browser-source native download timed out')),20000);
     native.setMessageHook(msg=>{if(msg.action==='complete'){clearTimeout(timer);resolve(msg);}else if(msg.action==='error'){clearTimeout(timer);reject(new Error(msg.error));}});
     native.startDownload({url:media.url,filename:'selected.mp4',outputDir,pageUrl:selected.location.href,taskId:'browser-pipeline'});
   });
   assert.deepStrictEqual(fs.readFileSync(complete.outputPath || path.join(outputDir,complete.outputFile)),bytes);
 }finally{native.setMessageHook(null);await new Promise(resolve=>server.close(resolve));fs.rmSync(outputDir,{recursive:true,force:true});}
 console.log('PASS: real DOM -> selected player -> MAIN-world IPC -> Threads DASH/audio selection, session fetch, player APIs, Reddit and injection ordering; no yt-dlp for Threads');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
