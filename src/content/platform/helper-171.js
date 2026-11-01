// Module 171 - Savior Helper 171
export default function(t,e,r){
  var n=r(25).Buffer,i=r(76);
  t.exports=function(t,e,r,o){
  if(n.isBuffer(t)||(t=n.from(t,"binary")),e&&(n.isBuffer(e)||(e=n.from(e,"binary")),8!==e.length))throw new RangeError("salt should be Buffer with 8 byte length");
  for(var a=r/8,s=n.alloc(a),u=n.alloc(o||0),c=n.alloc(0);
  a>0||o>0;
  ){
  var l=new i;
  l.update(c),l.update(t),e&&l.update(e),c=l.digest();
  var f=0;
  if(a>0){
  var d=s.length-a;
  f=Math.min(a,c.length),c.copy(s,d,0,f),a-=f}
  if(f<c.length&&o>0){
  var h=u.length-o,p=Math.min(o,c.length-f);
  c.copy(u,h,f,f+p),o-=p}
  }
  return c.fill(0),{
  key:s,iv:u}
  }
  };
