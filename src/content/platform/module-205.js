// Module 205 [platform]
export default function(t,e,r) {
  "use strict";
r.r(e);var n={getDomains:()=>["artgrid.io"],default:{getUrl:t=>{var e;return null===(e=t.node.querySelector("source"))||void 0===e?void 0:e.src},mediaObjectChange(t){var e=t.mediaObject;return e.noAudio=!0,e.identifier=Date.now().toString(),e.type}},notMiniPlayerNode:t=>Boolean(t.closest("mat-grid-tile, .mat-grid-tile"))};e.default=n};
