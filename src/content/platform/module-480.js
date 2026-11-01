// Module 480 [platform]
module.exports = function(t,e){t.exports=function(t){for(var e,r=t.length;r--;){if(255!==(e=t.readUInt8(r))){e++,t.writeUInt8(e,r);break}t.writeUInt8(0,r)}}};
