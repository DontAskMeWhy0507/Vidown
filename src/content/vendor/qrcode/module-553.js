// Module 553 [platform]
export default function(t,e){const r=new Uint8Array(512),n=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)r[e]=t,n[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return n[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[n[t]+n[e]]}};
