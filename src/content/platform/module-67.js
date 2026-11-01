// Module 67 [platform]
module.exports = function(t,e,r){var n;t.exports=(n=r(4),r(8),n.pad.ZeroPadding={pad:function(t,e){var r=4*e;t.clamp(),t.sigBytes+=r-(t.sigBytes%r||r)},unpad:function(t){var e=t.words,r=t.sigBytes-1;for(r=t.sigBytes-1;r>=0;r--)if(e[r>>>2]>>>24-r%4*8&255){t.sigBytes=r+1;break}}},n.pad.ZeroPadding)};
