// Module 509 [utilities] - Media fragment assembler and queue
export default function (moduleObj, exportsObj, requireFn) {
  (exportsObj = moduleObj.exports = requireFn(510)).Stream = exportsObj;
  exportsObj.Readable = exportsObj;
  exportsObj.Writable = requireFn(513);
  exportsObj.Duplex = requireFn(146);
  exportsObj.Transform = requireFn(514);
  exportsObj.PassThrough = requireFn(713);
  };
