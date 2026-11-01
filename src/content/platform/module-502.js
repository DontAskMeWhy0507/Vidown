// Module 502 [platform]
export default function(t,e,r){var n=r(150),i=r(25).Buffer;function o(t){var e=i.allocUnsafe(4);return e.writeUInt32BE(t,0),e}t.exports=function(t,e){for(var r,a=i.alloc(0),s=0;a.length<e;)r=o(s++),a=i.concat([a,n("sha1").update(t).update(r).digest()]);return a.slice(0,e)}};
