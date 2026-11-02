// Module 511 [events] - Stream / runtime utility component (stream-internal-stub)
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = requireFn(42).EventEmitter;
  };
