// Module 488 - Savior Helper 488
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = requireFn(42).EventEmitter;
  };
