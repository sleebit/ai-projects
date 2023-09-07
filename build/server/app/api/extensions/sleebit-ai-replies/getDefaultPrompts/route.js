"use strict";
(() => {
var exports = {};
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 46977:
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

// NAMESPACE OBJECT: ./app/api/extensions/sleebit-ai-replies/getDefaultPrompts/route.js
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
;// CONCATENATED MODULE: ./app/api/extensions/sleebit-ai-replies/getDefaultPrompts/route.js

async function GET(request) {
    return next_response/* default */.Z.json([
        {
            id: "1",
            label: "\uD83D\uDC4D Like",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you agree with. Share your genuine agreement in under 150 characters without using any hashtags, dont use any complicated words, keep it casual."
        },
        {
            id: "2",
            label: "\uD83E\uDD2F Mind-blown",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you are absolutely mind blown with. Politely share your genuine perspective in under 150 characters without using any hashtags, dont use any complicated words, keep it casual."
        },
        {
            id: "3",
            label: "\uD83D\uDE4C Support",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you want to support. Offer your genuine encouragement/support in under 150 characters without using any hashtags, dont use any complicated words, keep it casual."
        },
        {
            id: "4",
            label: "❤️ Love",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you absolutely loved. Share your genuine love into 150 characters without using any hashtags, dont use any complicated words, keep it casual. Let your heartfelt response shine through."
        },
        {
            id: "5",
            label: "\uD83E\uDD14 Question",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you are curious about, and have a genuine question. Share your genuine question in under 150 characters without using any hashtags, dont use any complicated words, keep it casual."
        },
        {
            id: "6",
            label: "\uD83D\uDE02 Funny",
            prompt: "Imagine you're a Twitter user responding to a tweet that had you in stitches. Create a genuine witty, humorous reply in under 150 characters without using any hashtags, dont use any complicated words, keep it casual. Let your sense of humor shine through!"
        }
    ], {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultPrompts%2Froute&name=app%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultPrompts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultPrompts%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultPrompts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/extensions/sleebit-ai-replies/getDefaultPrompts/route","pathname":"/api/extensions/sleebit-ai-replies/getDefaultPrompts","filename":"route","bundlePath":"app/api/extensions/sleebit-ai-replies/getDefaultPrompts/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/extensions/sleebit-ai-replies/getDefaultPrompts/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/extensions/sleebit-ai-replies/getDefaultPrompts/route"

    

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625], () => (__webpack_exec__(46977)));
module.exports = __webpack_exports__;

})();