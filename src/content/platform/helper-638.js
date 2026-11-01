// Module 638 - Savior Helper 638
export default function(t,e,r) {
  "use strict";
  var n=r(122),i=r(156),o=r(494),a=n.rotl32,s=n.sum32,u=n.sum32_5,c=o.ft_1,l=i.BlockHash,f=[1518500249,
  1859775393,2400959708,3395469782];
  function d(){
  if(!(this instanceof d))return new d;
  l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}
  n.inherits(d,l),t.exports=d,d.blockSize=512,d.outSize=160,d.hmacStrength=80,d.padLength=64,d.prototype._update=function(t,
  e){
  for(var r=this.W,n=0;
  n<16;
  n++)r[n]=t[e+n];
  for(;
  n<r.length;
  n++)r[n]=a(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);
  var i=this.h[0],o=this.h[1],l=this.h[2],d=this.h[3],h=this.h[4];
  for(n=0;
  n<r.length;
  n++){
  var p=~~(n/20),v=u(a(i,5),c(p,o,l,d),h,r[n],f[p]);
  h=d,d=l,l=a(o,30),o=i,i=v}
  this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],l),this.h[3]=s(this.h[3],d),
  this.h[4]=s(this.h[4],h)}
  ,d.prototype._digest=function(t){
  return"hex"===t?n.toHex32(this.h,"big"):n.split32(this.h,"big")}
  };
