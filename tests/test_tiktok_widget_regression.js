const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),acorn=require('acorn');
const root=path.resolve(__dirname,'..');
function source(file){const code=fs.readFileSync(path.join(root,file),'utf8'),ast=acorn.parse(code,{ecmaVersion:'latest',sourceType:'module'});return {code,ast};}
function select(src,predicate){let result;function visit(n){if(!n||typeof n!=='object')return;if(!result&&predicate(n))result=n;for(const v of Object.values(n))if(Array.isArray(v))v.forEach(visit);else if(v&&typeof v==='object')visit(v);}visit(src.ast);assert(result);return src.code.slice(result.start,result.end);}
const fn=(src,name)=>select(src,n=>n.type==='FunctionDeclaration'&&n.id?.name===name);
const runtime=require('../src/content/vendor/regenerator-core');
async function main(){
  const tt=source('src/content/platform/tiktok-douyin.js');
  const context=vm.createContext({Promise,URL,Symbol,c:runtime,w:runtime,urlUtils:{f:url=>({url,ext:'',type:null})},mediaConstants:{r:{}},cryptoUtils:{i18n:x=>x},document:{title:'Selected TikTok'}});
  vm.runInContext(select(tt,n=>n.type==='FunctionDeclaration'&&n.id?.name==='l'&&n.params.length===4)+';var asyncRunner1=l,asyncRunner2=l;'+fn(tt,'createForOfIteratorHelper')+fn(tt,'unsupportedIterableToArray')+fn(tt,'arrayLikeToArray')+fn(tt,'parseTikTokMediaItems')+fn(tt,'formatBitratesOrPlayAddr')+(tt.code.includes('function getTikTokPlaybackUrl(')?fn(tt,'getTikTokPlaybackUrl'):''),context);
  const formats=await context.parseTikTokMediaItems([{playAddr:{urlList:['https://cdn.example/selected-A.mp4']},gearName:'720p'}],'Selected A');
  assert.strictEqual(formats[0].url,'https://cdn.example/selected-A.mp4');assert.strictEqual(formats[0].type,'video');
  const capital=await context.parseTikTokMediaItems([{PlayAddr:{UrlList:['https://cdn.example/selected-B.mp4']}}],'Selected B');
  assert.strictEqual(capital[0].url,'https://cdn.example/selected-B.mp4');
  const single=await context.formatBitratesOrPlayAddr({url:{UrlList:['https://cdn.example/opaque-A']}},'Selected A');
  assert.strictEqual(single[0].url,'https://cdn.example/opaque-A');assert.strictEqual(single[0].ext,'mp4');assert.strictEqual(single[0].type,'video');
  const widget=source('src/content/widget/widget-manager.js');
  const method=select(widget,n=>n.type==='MethodDefinition'&&n.key?.name==='fetchDownloads');
  const methodValue=method.slice(method.indexOf('('));
  let dataId='',releaseLookup,lookupCount=0;
  const node={tagName:'VIDEO',currentSrc:'blob:https://www.tiktok.com/player-A',src:'blob:https://www.tiktok.com/player-A',poster:'https://cdn.example/poster-A.jpg',getAttribute:()=>dataId};
  const playable=formats[0];
  const sandbox=vm.createContext({Promise,console,location:{href:'https://www.tiktok.com/foryou'},mt:runtime,enrichMediaMeta:x=>x,getMediaProvider:()=>({findItemRoot:()=>true,resolveItemFromNode:async()=>[playable]}),detectorLogger:{a:{log(){}}},saviorConstants:{B:()=>false},coreUtils:{isValidData:x=>x.type==='video'&&x.ext==='mp4'},LazyMediaTracker:{getMediaObjectsFromNode:()=>{lookupCount++;return new Promise(resolve=>releaseLookup=resolve);},getDownloadsByMediaObjects:async()=>[playable]}});
  vm.runInContext(fn(widget,'getNodeMediaIdentity')+fn(widget,'w')+';var gt=w;var '+select(widget,n=>n.type==='VariableDeclarator'&&n.id.name==='wt')+';globalThis.fetchActual=function'+methodValue+';',sandbox);
  const component={state:{mediaObjects:null,downloads:null},parent:{$node:node,isImage:false},setState(patch){Object.assign(this.state,patch);}};
  const pending=sandbox.fetchActual.call(component);
  assert.strictEqual(lookupCount,1,'Clicking a blob TikTok before metadata arrives must await lookup instead of returning No media found');
  const duplicate=sandbox.fetchActual.call(component);assert.strictEqual(lookupCount,1,'A second click must not start another lookup');
  dataId='123456789';releaseLookup([playable]);await Promise.all([pending,duplicate]);
  assert.strictEqual(component.state.downloads[0].url,playable.url,'Adding the selected video ID during injection must not discard its result');
  const before=sandbox.getNodeMediaIdentity(node);dataId='987654321';
  assert.notStrictEqual(sandbox.getNodeMediaIdentity(node,before),before,'Changing an already known video ID must invalidate the old video');
  sandbox.getMediaProvider=()=>({findItemRoot:()=>true,resolveItemFromNode:async()=>[{url:playable.url,ext:'mp4',type:null}]});
  const untyped={state:{mediaObjects:[playable]},parent:{$node:node,isImage:false},setState(patch){Object.assign(this.state,patch);}};
  await sandbox.fetchActual.call(untyped);
  assert.strictEqual(untyped.state.downloads[0].url,playable.url,'An untyped provider response must continue to normal source resolution');
  console.log('PASS: TikTok bitrate iteration, both PlayAddr schemas, opaque play URL, initial blob-click lookup, duplicate click and metadata ID enrichment');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
