const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm'),http=require('http'),acorn=require('acorn');
const {mediaFromMetadata,resolveMediaMetadata}=require('../native/lib/media-resolver');
const root=path.resolve(__dirname,'..');
function functions(file,names){const code=fs.readFileSync(path.join(root,file),'utf8'),ast=acorn.parse(code,{ecmaVersion:'latest',sourceType:'module'});const found=[];function walk(n){if(!n||typeof n!=='object')return;if(n.type==='FunctionDeclaration'&&names.includes(n.id?.name))found.push(code.slice(n.start,n.end));for(const v of Object.values(n)){if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object')walk(v);}}walk(ast);return found.join('\n');}
(async()=>{
 const req={pageUrl:'https://example.com/watch/A'};
 const media=mediaFromMetadata({id:'A',title:'Selected A',formats:[{url:'https://cdn.example/opaque-A',ext:'mp4',vcodec:'h264',acodec:'aac',height:720},{url:'https://cdn.example/drm',has_drm:true}]},req);
 assert.strictEqual(media[0].url,'https://cdn.example/opaque-A');assert(media[0].verifiedMedia);
 assert.throws(()=>mediaFromMetadata({entries:[{id:'A'},{id:'B'}]},req),/AMBIGUOUS_MEDIA/);
 const paired=mediaFromMetadata({formats:[{url:'https://cdn.example/v',vcodec:'h264',acodec:'none',height:1080},{url:'https://cdn.example/a',vcodec:'none',acodec:'aac'}]},req);
 assert.deepStrictEqual(paired[0].url,{videoUrl:'https://cdn.example/v',audioUrl:'https://cdn.example/a'});
 assert.strictEqual(mediaFromMetadata({formats:[{url:'https://cdn.example/storyboard',vcodec:'images',acodec:'none',ext:'mhtml',height:9000},{url:'https://cdn.example/silent.mp4',vcodec:'h264',acodec:'none',ext:'mp4'}]},req)[0].url,'https://cdn.example/silent.mp4');
 assert.throws(()=>mediaFromMetadata({formats:[{url:'https://cdn.example/base',protocol:'http_dash_segments',fragments:[{path:'init.mp4'}]}]},req),/NO_DOWNLOADABLE_FORMAT/);
 assert(mediaFromMetadata({formats:[{url:'https://cdn.example/opaque-playlist',protocol:'m3u8_native',vcodec:'h264',acodec:'aac'}]},req)[0].hls);
 let jar;
 await resolveMediaMetadata({...req,cookies:[{domain:'example.com',hostOnly:true,name:'session',value:'SYNTHETIC',path:'/'},{domain:'other.com',name:'foreign',value:'NO'}]},'mock-binary',(binary,args,opts,cb)=>{
   jar=args[args.indexOf('--cookies')+1];const text=fs.readFileSync(jar,'utf8');assert(text.includes('SYNTHETIC'));assert(!text.includes('foreign'));assert(opts.windowsHide);assert(args.includes('--ignore-config'));cb(null,JSON.stringify({url:'https://cdn.example/A.mp4',ext:'mp4'}),'');
 });assert(!fs.existsSync(jar),'Ephemeral cookie jar must be removed');
 const x=vm.createContext({});vm.runInContext(functions('src/inject/twitter/main-world.js',['findSourceInTree']),x);
 const tree={tweet:{legacy:{extended_entities:{media:[{id_str:'111',video_info:{variants:[{url:'https://video.twimg.com/111.mp4'}]}},{id_str:'222',video_info:{variants:[{url:'https://video.twimg.com/222.mp4'}]}}]}}}};
 assert.strictEqual(x.findSourceInTree(tree,0,'222').id_str,'222');assert.strictEqual(x.findSourceInTree(tree,0,'999'),null);
 const attrs={};const video={poster:'https://pbs.twimg.com/ext_tw_video_thumb/222/img/p.jpg',nodeName:'VIDEO',parentElement:{nodeName:'ARTICLE',parentElement:null},removeAttribute:k=>delete attrs[k],setAttribute:(k,v)=>attrs[k]=v};
 video['__reactProps$test']=tree;
 const ix=vm.createContext({});vm.runInContext(functions('src/inject/twitter/main-world.js',['getReactKeys','findSourceInTree','extractTwitterVideoMetadata']),ix);ix.extractTwitterVideoMetadata(video);assert.strictEqual(attrs['savior-twitter-vid'],'222');
 const threads={tagName:'VIDEO',nodeName:'VIDEO',parentElement:null,currentSrc:'blob:threads',src:'blob:threads',closest:()=>null,getAttribute:()=>null};
 threads['__reactFiber$test']={};threads['__reactProps$test']={children:{props:{post:{video_versions:[{url:'https://cdn.example/thread-A.mp4',height:720,width:1280}]}}}};
 const ig=vm.createContext({location:{hostname:'www.threads.com',href:'https://www.threads.com/@user/post/A',pathname:'/@user/post/A'},document:{body:{},title:'Thread A'}});
 vm.runInContext(functions('src/inject/instagram/main-world.js',['getReactFiberSuffix','extractInstagramVideoDetails']),ig);assert.strictEqual(ig.extractInstagramVideoDetails(threads).videoResources[0].src,'https://cdn.example/thread-A.mp4');
 threads['__reactProps$test']={children:[{props:{post:{video_versions:[{url:'https://cdn.example/A.mp4'}]}}},{props:{post:{video_versions:[{url:'https://cdn.example/B.mp4'}]}}}]};
 assert.strictEqual(ig.extractInstagramVideoDetails(threads),null,'Ambiguous Threads carousel must not return its first video');
 // Execute the real X extractor, including injection when a poster already has an ID.
 let injections=0;
 const xexports={};const xr=id=>id===0?{sendMessage:async()=>{injections++;}}:id===3?{f:url=>({url,ext:'mp4'})}:{};xr.r=()=>{};
 const xcode=fs.readFileSync(path.join(root,'src/content/platform/twitter_com-extractor.js'),'utf8').replace('export default','');
 vm.runInNewContext('('+xcode.trim().replace(/;$/, '')+')',{document:{title:'Selected X video'}})({},xexports,xr);
 const xnode={currentSrc:'blob:x',poster:'https://pbs.twimg.com/ext_tw_video_thumb/222/img.jpg',getAttribute:k=>k==='savior-twitter-source'?JSON.stringify({video_info:{variants:[{url:'https://video.twimg.com/222-low.mp4',bitrate:100},{url:'https://video.twimg.com/222-high.mp4',bitrate:900}]}}):'222'};
 assert.strictEqual((await xexports.default.default.getUrl({url:'blob:x',node:xnode}))[0].url,'https://video.twimg.com/222-high.mp4');assert.strictEqual(injections,1);
 const siteCode=fs.readFileSync(path.join(root,'src/content/core/site-data.js'),'utf8').replace('export default','');let exports={};const registry=k=>({getDomains:()=>['x.com','anime47.','2phimhay'],siteMatcher:()=>false});registry.keys=()=>['./twitter.ts'];const r=id=>registry;r.r=()=>{};r.d=(o,k,get)=>Object.defineProperty(o,k,{get});vm.runInNewContext('('+siteCode.trim()+')')({},exports,r);assert(!exports.getSiteData('netflix.com'));assert(exports.getSiteData('x.com'));assert(exports.getSiteData('anime47.org'));assert(exports.getSiteData('www.2phimhay1.net'));
 const rules=vm.createContext({URL,isImageDownload:()=>false});vm.runInContext(functions('background.chrome.js',['isBogusStreamUrl']),rules);assert(!rules.isBogusStreamUrl('https://random-cdn.example/opaque-A','https://example.com/watch/A',{mediaType:'video',verifiedMedia:true}));assert(rules.isBogusStreamUrl('https://example.com/watch/A','https://example.com/watch/A',{mediaType:'video',verifiedMedia:true}));
 // The native bridge scopes cookies to this permalink, handles failures, and releases listeners.
 const event=()=>({listeners:new Set(),addListener(fn){this.listeners.add(fn);},removeListener(fn){this.listeners.delete(fn);}});
 const port={onMessage:event(),onDisconnect:event(),postMessage(msg){assert.strictEqual(msg.pageUrl,req.pageUrl);assert.strictEqual(msg.cookies[0].value,'SYNTHETIC');for(const cb of this.onMessage.listeners)cb({action:'mediaResolved',requestId:msg.requestId,media});}};
 let cookieUrl;
 const bridge=vm.createContext({URL,Map,Date,Math,Promise,setTimeout,clearTimeout,canUseNativePageExtractor:()=>true,getOrCreateNativePort:()=>port,chrome:{cookies:{getAll:({url},cb)=>{cookieUrl=url;cb([{name:'session',value:'SYNTHETIC'}]);}}}});
 vm.runInContext('const mediaResolutionCache=new Map();'+functions('background.chrome.js',['resolveSelectedPage']),bridge);
 assert.strictEqual((await bridge.resolveSelectedPage(req,{url:'https://example.com/feed'})).media[0].url,media[0].url);
 assert.strictEqual(cookieUrl,req.pageUrl);assert.strictEqual(port.onMessage.listeners.size,0);assert.strictEqual(port.onDisconnect.listeners.size,0);
 assert.strictEqual((await bridge.resolveSelectedPage(req,{url:'https://other.com/feed'})).error,'INVALID_PAGE_ORIGIN');
 const native=require('../native/host');
 assert(!native.sanitizeForLog({action:'resolveMedia',cookies:[{name:'session',value:'SYNTHETIC_SECRET'}]}).includes('SYNTHETIC_SECRET'));
 // A fallback is deferred until the click; generic article pages work and feeds stay ambiguous.
 const loc={href:'https://news.example/article/A',hostname:'news.example',pathname:'/article/A'};
 const fallback=vm.createContext({location:loc,document:{title:'Article',querySelectorAll:()=>[{}]}});
 vm.runInContext(functions('src/content/widget/widget-manager.js',['resolveNodeWithBrowser']),fallback);
 const article={querySelectorAll:()=>[]};
 assert.strictEqual((await fallback.resolveNodeWithBrowser({tagName:'VIDEO',closest:()=>article,getAttribute:()=>null,setAttribute(){}}))[0]._browserRequest.pageUrl,loc.href);
 loc.href='https://x.com/home';loc.hostname='x.com';loc.pathname='/home';
 assert.strictEqual((await fallback.resolveNodeWithBrowser({tagName:'VIDEO',closest:()=>article,getAttribute:()=>null,setAttribute(){}}))[0]._browserRequest.pageUrl,'','Feed can read selected player, but cannot pass the feed URL to yt-dlp');
 // Run the real installed multi-site extractor against a local video webpage.
 const bytes=fs.readFileSync(path.join(root,'tests/fixtures/media/sample_720p.mp4'));
 const server=http.createServer((req,res)=>{if(req.url.startsWith('/watch')){res.setHeader('Content-Type','text/html');res.end('<html><head><title>Selected local page</title></head><body><video src="/selected.mp4" controls></video></body></html>');}else{res.setHeader('Content-Type','video/mp4');res.setHeader('Content-Length',bytes.length);res.end(bytes);}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const outputDir=fs.mkdtempSync(path.join(require('os').tmpdir(),'vidown-multisite-download-'));
 try{
   const pageUrl='http://127.0.0.1:'+server.address().port+'/watch';
   const results=await resolveMediaMetadata({pageUrl},path.join(root,'native/bin/yt-dlp.exe'));
   assert.strictEqual(results[0].url,'http://127.0.0.1:'+server.address().port+'/selected.mp4');
   const complete=await new Promise((resolve,reject)=>{
     const timer=setTimeout(()=>reject(new Error('Native selected-page download timed out')),20000);
     native.setMessageHook(msg=>{if(msg.action==='complete'){clearTimeout(timer);resolve(msg);}else if(msg.action==='error'){clearTimeout(timer);reject(new Error(msg.error));}});
     native.startDownload({url:results[0].url,filename:'selected.mp4',pageUrl,outputDir,taskId:'multisite-local'});
   });
   assert.deepStrictEqual(fs.readFileSync(complete.outputPath || path.join(outputDir,complete.outputFile)),bytes,'Selected-page download must preserve exactly the selected media bytes');
 }finally{native.setMessageHook(null);await new Promise(r=>server.close(r));fs.rmSync(outputDir,{recursive:true,force:true});}
 console.log('PASS: multi-site metadata engine, exact X media, Threads React extraction, opaque CDN, domain routing and real webpage extraction');
})().catch(e=>{console.error(e);process.exitCode=1;});

