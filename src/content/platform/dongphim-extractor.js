// Module 228 - Savior Dongphim Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  const dep_media_constants = requireFn(1);
  const dep_dom_utils = requireFn(0);
  const dep_format_resolver = requireFn(14);
  const dep_media_sniffer = requireFn(6);
  const dep_extractor_url_merger = requireFn(23);
  const dep_stream_cipher_helper = requireFn(31);

  const dongphimExtractor = {
    getDomains: () => [
      "dongphym.co",
      "dongphim.info",
      "dongchill.co",
      "dongphim.co",
      "hotphimvn."
    ],
    parse: {
      sources: [
        {
          checkSource: param => {
            return /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i.test(param.url);
          },
          parse: async param => {
            const media = param.media;
            const response = param.response;
            const sniffedMedia = await dep_media_sniffer.e(response, media);
            const settledResults = await Promise.allSettled(
              sniffedMedia.map(async item => {
                try {
                  const res = await dep_dom_utils.sendMessage({
                    type: dep_media_constants.b.GET_URL,
                    params: {
                      url: item.url
                    }
                  });
                  item.play_list = res.url;
                  return item;
                } catch (err) {
                  return item;
                }
              })
            );
            return settledResults.map(entry => entry.value);
          }
        }
      ]
    },
    urls: [
      {
        checkUrl: param => param.url.includes("jimmiepradeep.xyz"),
        getUrl: param => {
          const url = param.url;
          const streamId = new URL(url).searchParams.get("id");
          return `${dep_format_resolver.c(url)}/playlist/${streamId}/${new Date().getTime()}.m3u8`;
        }
      }
    ]
  };

  exportsObj.default = dep_extractor_url_merger.a(
    dep_stream_cipher_helper.a,
    ["parse", "urls"]
  )(dongphimExtractor);
};
