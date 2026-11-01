// Module 564 [detector] - Savior Specialized Extractor Registry (Batch 2)
export default function(module, exports, require) {
  var extractorModuleMap = {
    "./5000-years_org.ts": 565,
    "./FETCH_DATA.ts": 566,
    "./aniwatch_mom.ts": 567,
    "./asianpinay_com.ts": 568,
    "./cdn-xvideos-xnxx.xyz.ts": 569,
    "./chill123.gotdns.ch.ts": 570,
    "./ecostream_me.ts": 571,
    "./emturbovid.com.ts": 675,
    "./fileone.ts": 676,
    "./goodhub.xyz.ts": 677,
    "./hlss.xyz.ts": 678,
    "./hydrax.ts": 741,
    "./index.ts": 177,
    "./megacloud_blog.ts": 679,
    "./motchill.ts": 742,
    "./ok.ru.ts": 680,
    "./opstream.com.ts": 681,
    "./play.hidestream.com.ts": 682,
    "./play.playbhq.xyz.ts": 683,
    "./play.sonar-cdn.com.ts": 684,
    "./player.asianfans.net.ts": 685,
    "./playhq.xyz.ts": 686,
    "./playngon.net.ts": 687,
    "./proxy.playphim.info.ts": 688,
    "./pzc.phimmoi.net.ts": 689,
    "./rophim_me.ts": 690,
    "./sieukhung.ts": 691,
    "./ss.zembed.net.ts": 692,
    "./ssphim.ts": 693,
    "./stream.vltv.xyz.ts": 694,
    "./stream_free.ts": 695,
    "./streamc_xyz.ts": 147,
    "./videostr_net.ts": 696,
    "./vimeo.ts": 697,
    "./vnstream.ts": 698,
    "./vuviphim.net.ts": 699,
    "./youtube.ts": 700
  };

  function webpackContext(requestPath) {
    var moduleId = webpackContextResolve(requestPath);
    return require(moduleId);
  }

  function webpackContextResolve(requestPath) {
    if (!require.o(extractorModuleMap, requestPath)) {
      var notFoundError = new Error("Cannot find module '" + requestPath + "'");
      notFoundError.code = "MODULE_NOT_FOUND";
      throw notFoundError;
    }
    return extractorModuleMap[requestPath];
  }

  webpackContext.keys = function() {
    return Object.keys(extractorModuleMap);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 564;
}
