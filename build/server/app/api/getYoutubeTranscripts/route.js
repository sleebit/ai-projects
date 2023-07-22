"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 69808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/getYoutubeTranscripts/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(47301);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./helpers/youtube-transcript.js
const phin = __webpack_require__(30200);
const RE_YOUTUBE = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
class YoutubeTranscriptError extends Error {
    constructor(message){
        super(`[YoutubeTranscript] 🚨 ${message}`);
    }
}
class YoutubeTranscript {
    static async fetchTranscript(videoId, config) {
        const identifier = this.retrieveVideoId(videoId);
        try {
            const { body: videoPageBody } = await phin(`https://www.youtube.com/watch?v=${identifier}`);
            const innerTubeApiKey = videoPageBody.toString().split('"INNERTUBE_API_KEY":"')[1].split('"')[0];
            if (innerTubeApiKey && innerTubeApiKey.length > 0) {
                const { body } = await phin({
                    url: `https://www.youtube.com/youtubei/v1/get_transcript?key=${innerTubeApiKey}`,
                    method: "POST",
                    data: this.generateRequest(videoPageBody.toString(), config),
                    parse: "json"
                });
                console.log(body.actions);
                if (body.responseContext) {
                    if (!body.actions) {
                        throw new Error("Transcript is disabled on this video");
                    }
                    const transcripts = body.actions[0].updateEngagementPanelAction.content.transcriptRenderer.body.transcriptBodyRenderer.cueGroups;
                    const final_transcripts = transcripts.map((cue)=>({
                            text: cue.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.cue.simpleText,
                            duration: parseInt(cue.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.durationMs),
                            offset: parseInt(cue.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.startOffsetMs)
                        }));
                    return {
                        transcript: final_transcripts,
                        videoTitle: videoPageBody.toString().split("<title>")[1].split("</title>")[0].split("- YouTube")[0]
                    };
                }
            }
        } catch (e) {
            throw new YoutubeTranscriptError(e);
        }
    }
    static generateRequest(page, config) {
        const params = page.split('"serializedShareEntity":"')[1]?.split('"')[0];
        const visitorData = page.split('"VISITOR_DATA":"')[1]?.split('"')[0];
        const sessionId = page.split('"sessionId":"')[1]?.split('"')[0];
        const clickTrackingParams = page?.split('"clickTrackingParams":"')[1]?.split('"')[0];
        return {
            context: {
                client: {
                    hl: config?.lang || "fr",
                    gl: config?.country || "FR",
                    visitorData,
                    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)",
                    clientName: "WEB",
                    clientVersion: "2.20200925.01.00",
                    osName: "Macintosh",
                    osVersion: "10_15_4",
                    browserName: "Chrome",
                    browserVersion: "85.0f.4183.83",
                    screenWidthPoints: 1440,
                    screenHeightPoints: 770,
                    screenPixelDensity: 2,
                    utcOffsetMinutes: 120,
                    userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
                    connectionType: "CONN_CELLULAR_3G"
                },
                request: {
                    sessionId,
                    internalExperimentFlags: [],
                    consistencyTokenJars: []
                },
                user: {},
                clientScreenNonce: this.generateNonce(),
                clickTracking: {
                    clickTrackingParams
                }
            },
            params
        };
    }
    static generateNonce() {
        const rnd = Math.random().toString();
        const alphabet = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghjijklmnopqrstuvwxyz0123456789";
        const jda = [
            alphabet + "+/=",
            alphabet + "+/",
            alphabet + "-_=",
            alphabet + "-_.",
            alphabet + "-_"
        ];
        const b = jda[3];
        const a = [];
        for(let i = 0; i < rnd.length - 1; i++){
            a.push(rnd[i].charCodeAt(i));
        }
        let c = "";
        let d = 0;
        let m, n, q, r, f, g;
        while(d < a.length){
            f = a[d];
            g = d + 1 < a.length;
            if (g) {
                m = a[d + 1];
            } else {
                m = 0;
            }
            n = d + 2 < a.length;
            if (n) {
                q = a[d + 2];
            } else {
                q = 0;
            }
            r = f >> 2;
            f = (f & 3) << 4 | m >> 4;
            m = (m & 15) << 2 | q >> 6;
            q &= 63;
            if (!n) {
                q = 64;
                if (!q) {
                    m = 64;
                }
            }
            c += b[r] + b[f] + b[m] + b[q];
            d += 3;
        }
        return c;
    }
    static retrieveVideoId(videoId) {
        if (videoId.length === 11) {
            return videoId;
        }
        const matchId = videoId.match(RE_YOUTUBE);
        if (matchId && matchId.length) {
            return matchId[1];
        }
        throw new YoutubeTranscriptError("Impossible to retrieve Youtube video ID.");
    }
}

;// CONCATENATED MODULE: ./app/api/getYoutubeTranscripts/route.js



async function POST(request, response) {
    const data = await request.json();
    console.log("IP: ", next_request/* default */.Z.ip);
    console.log("GEO: ", next_request/* default */.Z.geo);
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(data.url);
        return next_response/* default */.Z.json({
            status: true,
            data: {
                ...transcript
            },
            message: ""
        }, {
            status: 200
        });
    } catch (e) {
        return next_response/* default */.Z.json({
            status: false,
            data: {},
            message: e.message
        }, {
            status: 200
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FgetYoutubeTranscripts%2Froute&name=app%2Fapi%2FgetYoutubeTranscripts%2Froute&pagePath=private-next-app-dir%2Fapi%2FgetYoutubeTranscripts%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2FgetYoutubeTranscripts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/getYoutubeTranscripts/route","pathname":"/api/getYoutubeTranscripts","filename":"route","bundlePath":"app/api/getYoutubeTranscripts/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/getYoutubeTranscripts/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/getYoutubeTranscripts/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625,569,515], () => (__webpack_exec__(69808)));
module.exports = __webpack_exports__;

})();