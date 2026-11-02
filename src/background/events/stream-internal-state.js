// Module 85 [events] - Stream / runtime utility component (stream-internal-state)
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = requireFn(42).EventEmitter;
  };
