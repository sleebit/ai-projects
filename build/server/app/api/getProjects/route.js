"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 64428:
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

// NAMESPACE OBJECT: ./app/api/getProjects/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/getProjects/route.js

async function GET(request) {
    // Do whatever you want
    return next_response/* default */.Z.json([
        {
            name: "Youtube Video Summarizer",
            slug: "youtube-summarizer",
            description: "This project uses GPT-3 API's along with clever langchain tricks to summarize any given youtube video.",
            image: "https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png",
            comingSoon: false
        },
        {
            name: "ChatGPT Clone",
            slug: "chatgpt-clone",
            description: "This is a chatgpt clone using Next.js and ChatGPT API.",
            image: "https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png",
            comingSoon: false
        },
        {
            name: "Twitter Manager",
            slug: "twitter-manager",
            description: "This is a twitter manager extension.",
            image: "https://cdn-icons-png.flaticon.com/512/3488/3488290.png",
            comingSoon: true,
            externalLink: "https://chrome.google.com/webstore/detail/social-ai-assistant-grow/hhmnpeafdkdhgghnmbglliileijdhfgh"
        },
        {
            name: "Voice Cloner AI",
            slug: "voice-cloner-ai",
            description: "This is a voice cloner using Next.js and OpenAI API.",
            image: "https://app.resemble.ai/assets/resemble-d122f1da51a879a36af7999a188fdef23ad2ad525e7e3dbba9be97684676d0ac.png",
            comingSoon: true
        }
    ], {
        status: 200
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FgetProjects%2Froute&name=app%2Fapi%2FgetProjects%2Froute&pagePath=private-next-app-dir%2Fapi%2FgetProjects%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2FgetProjects%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/getProjects/route","pathname":"/api/getProjects","filename":"route","bundlePath":"app/api/getProjects/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/getProjects/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/getProjects/route"

    

/***/ }),

/***/ 32413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(72917); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625], () => (__webpack_exec__(64428)));
module.exports = __webpack_exports__;

})();