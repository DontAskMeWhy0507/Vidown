// Module 47 [utilities] - Stream / runtime utility component (stream-internal-buffer)
export default function (moduleObj, exportsObj, requireFn) {
  (exportsObj = moduleObj.exports = requireFn(84)).Stream = exportsObj;
  exportsObj.Readable = exportsObj;
  exportsObj.Writable = requireFn(49);
  exportsObj.Duplex = requireFn(30);
  exportsObj.Transform = requireFn(87);
  exportsObj.PassThrough = requireFn(108);
  };
