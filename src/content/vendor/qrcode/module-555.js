// Module 555 [platform]
export default function(t,e,r){const n=r(134),i=n.getBCHDigit(1335);e.getEncodedBits=function(t,e){const r=t.bit<<3|e;let o=r<<10;for(;n.getBCHDigit(o)-i>=0;)o^=1335<<n.getBCHDigit(o)-i;return 21522^(r<<10|o)}};
