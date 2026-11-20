const fs=require('fs'),path=require('path'),assert=require('assert'),acorn=require('acorn'),vm=require('vm');
const root=path.resolve(__dirname,'..'),providers=[];
for(const file of fs.readdirSync(path.join(root,'src/content/platform')).filter(file=>file.endsWith('.js'))){
  const source=fs.readFileSync(path.join(root,'src/content/platform',file),'utf8');
  function walk(node){
    if(!node||typeof node!=='object')return;
    if(node.type==='Property'&&(node.key.name||node.key.value)==='getDomains'){
      let body=node.value.body;
      if(body?.type==='BlockStatement')body=body.body.find(n=>n.type==='ReturnStatement')?.argument;
      if(body?.type==='ArrayExpression'){
        const domains=body.elements.filter(n=>n?.type==='Literal'&&typeof n.value==='string').map(n=>n.value);
        if(domains.length)providers.push({file,getDomains:()=>domains});
      }
    }
    for(const value of Object.values(node))if(Array.isArray(value))value.forEach(walk);else if(value&&typeof value==='object')walk(value);
  }
  walk(acorn.parse(source,{ecmaVersion:'latest',sourceType:'module'}));
}
const registry=file=>providers.find(p=>p.file===file);registry.keys=()=>providers.map(p=>p.file);
const r=()=>registry;r.r=()=>{};r.d=(obj,key,get)=>Object.defineProperty(obj,key,{get});
const exportsObj={},source=fs.readFileSync(path.join(root,'src/content/core/site-data.js'),'utf8');
vm.runInNewContext('('+source.replace('export default','').trim()+')')({},exportsObj,r);
let aliases=0;
for(const provider of providers)for(const domain of provider.getDomains()){
  const host=domain.endsWith('.')?domain+'test':domain.includes('.')?domain:domain+'.test';
  assert(exportsObj.getSiteData(host),'Unreachable declared site alias: '+provider.file+' '+domain);
  assert(exportsObj.getSiteData('sub.'+host),'Subdomain lost its extractor: '+domain);
  aliases++;
}
assert(providers.length>=200);assert(aliases>=380);
assert.notStrictEqual(exportsObj.getSiteData('netflix.com')?.file,'twitter_com-extractor.js','x.com cannot match a substring of another site');
assert.strictEqual(exportsObj.getSiteData('threads.com').file,'instagram_com-extractor.js');
assert.strictEqual(exportsObj.getSiteData('x.com').file,'twitter_com-extractor.js');
console.log(`PASS: all ${aliases} declared aliases across ${providers.length} extractors and their subdomains are reachable; domain families preserved. This verifies routing, not live site downloads.`);
