// Module 463 - Savior Helper 463
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = requireFn(42).EventEmitter;
  };
