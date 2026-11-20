const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const out=fs.mkdtempSync(path.join(require('os').tmpdir(),'vidown-image-'));const root=path.resolve(__dirname,'..');
const host=require(path.join(root,'native/host.js'));
const jpeg=fs.readFileSync(path.join(root,'tests/fixtures/media/sample_photo.jpg'));
const server=http.createServer((req,res)=>{const data=req.url==='/bad'?Buffer.from('video bytes disguised as an image, synthetic regression fixture'):jpeg;res.writeHead(200,{'Content-Type':'image/jpeg','Content-Length':data.length});res.end(req.method==='HEAD'?undefined:data);});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let done; const completed=new Promise((resolve,reject)=>{ const timer=setTimeout(()=>reject(Error('timeout')),5000);host.setMessageHook(m=>{if(m.taskId!=='audit-photo')return;if(m.action==='complete'){clearTimeout(timer);resolve(m);}if(m.action==='error'){clearTimeout(timer);reject(Error(m.error));}});});
 try {
  await host.startDownload({taskId:'audit-photo',url:'http://127.0.0.1:'+server.address().port+'/photo',filename:'native-photo.jpg',outputDir:out});
  done=await completed;assert(done.outputFile.endsWith('.jpg'));assert(fs.readFileSync(done.outputPath).equals(jpeg));
  const result={requestedFilename:'native-photo.jpg',actualFilename:done.outputFile,actualBytes:'JPEG unchanged',markedComplete:true};
  console.log(JSON.stringify(result));
  const rejected=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('image rejection timeout')),5000);host.setMessageHook(m=>{if(m.taskId==='audit-bad'&&(m.action==='complete'||m.action==='error')){clearTimeout(timer);resolve(m);}});});
  await host.startDownload({taskId:'audit-bad',url:'http://127.0.0.1:'+server.address().port+'/bad',filename:'bad.jpg',mediaType:'image',outputDir:out});
  const failure=await rejected;assert.strictEqual(failure.action,'error');assert.strictEqual(failure.error,'IMAGE_CONTENT_MISMATCH');assert(!fs.existsSync(path.join(out,'bad.jpg')));
  assert(!fs.readdirSync(out).some(name=>name.includes('.savior-image-')), 'Image staging must be cleaned on rejection');
 }finally{host.setMessageHook(null);await new Promise(r=>server.close(r));fs.rmSync(out,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
