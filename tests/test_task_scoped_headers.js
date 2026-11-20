const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),http=require('http'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),acorn=require('acorn');
const code=fs.readFileSync(path.join(root,'background.chrome.js'),'utf8'),ast=acorn.parse(code,{ecmaVersion:'latest'});
function fn(name){const n=ast.body.find(n=>n.type==='FunctionDeclaration'&&n.id.name===name);assert(n);return code.slice(n.start,n.end);}
(async()=>{
 const installs=[],removals=[],fetches=[],release=[];
 const port={postMessage(){},onMessage:{addListener(){},removeListener(){}}};
 const s={URL,AbortController,Map,Set,Date,Uint8Array,console:{log(){},warn(){},error(){}},currentActiveTabUrl:'',configuredDownloadDir:'',nativeProbeSettled:true,nativeHelperAvailable:true,fakeIdCounter:0,nextRelayRuleId:20000,activeDownloads:new Map(),getOrCreateNativePort:()=>port,hasActiveTaskForUrl:()=>false,resolveRealStreamForDownload:x=>x,isBogusStreamUrl:()=>false,updateDownloadHistory(){},setActionBadge(){},broadcastTaskEvent(){},processNextQueuedNativeDownload(){},setTimeout:()=>1,clearTimeout(){},fetch:u=>{fetches.push(u);return Promise.resolve({status:200,ok:true,headers:{get:()=>null},body:{getReader:()=>({read:()=>Promise.resolve({done:true})})}});},chrome:{runtime:{id:'audit-extension'},declarativeNetRequest:{updateSessionRules:r=>{if(r.addRules){installs.push(r);return new Promise(resolve=>release.push(resolve));}removals.push(r);return Promise.resolve();}}}};
 vm.createContext(s);vm.runInContext(['isImageDownload','cleanMediaCdnUrl','startStreamRelayDownload'].map(fn).join('\n'),s);
 s.startStreamRelayDownload({url:'https://shared.cdn.example/A.mp4',pageUrl:'https://www.instagram.com/p/A/',filename:'A.mp4'});
 s.startStreamRelayDownload({url:'https://shared.cdn.example/B.mp4',pageUrl:'https://www.facebook.com/watch/?v=B',filename:'B.mp4'});
 assert.strictEqual(installs.length,2);assert.strictEqual(fetches.length,0,'Fetch must await DNR installation');
 assert.notStrictEqual(installs[0].addRules[0].id,installs[1].addRules[0].id);
 for(const r of installs){assert.deepStrictEqual(Array.from(r.addRules[0].condition.initiatorDomains),['audit-extension']);assert(r.addRules[0].condition.regexFilter.startsWith('^https://shared\\.cdn\\.example/'));}
 release.forEach(r=>r());await new Promise(setImmediate);await new Promise(setImmediate);
 assert(fetches.length>=2);assert.strictEqual(removals.length,2,'Both rules must be removed in finally');
 const cleaned=s.cleanMediaCdnUrl('https://video.xx.fbcdn.net/a.mp4?range=0-9&Signature=signed');assert(cleaned.includes('range=0-9'));
 const payload='/media.mp4?range=0-1023&sq=12';const signature=crypto.createHmac('sha256','synthetic').update(payload).digest('hex');const expected=payload+'&Signature='+signature;
 const server=http.createServer((req,res)=>{res.statusCode=req.url===expected?200:403;res.end();});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 try{const input='http://127.0.0.1:'+server.address().port+expected;const result=await new Promise((resolve,reject)=>http.get(s.cleanMediaCdnUrl(input),res=>{res.resume();res.on('end',()=>resolve(res.statusCode));}).on('error',reject));assert.strictEqual(result,200);}finally{await new Promise(r=>server.close(r));}
 console.log('PASS: task-specific DNR rules, install ordering, cleanup and signed URL HTTP integrity');
})().catch(e=>{console.error(e);process.exitCode=1;});
