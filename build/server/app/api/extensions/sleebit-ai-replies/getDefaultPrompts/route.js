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
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you agree with. Share your genuine agreement in under 150 characters. Keep it casual, no need for complicated words or hashtags. Be yourself."
        },
        {
            id: "2",
            label: "\uD83D\uDC4E Disagree",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you disagree with. Politely express your perspective in under 150 characters. Use everyday language, avoid complicated terms or hashtags. Stay true to your thoughts."
        },
        {
            id: "3",
            label: "\uD83D\uDE4C Support",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you want to support. Offer your encouragement in under 150 characters. Keep it casual, no need for complex language or hashtags. Be authentic in your response."
        },
        {
            id: "4",
            label: "❤️ Love",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you absolutely adore. Pour your enthusiasm into 150 characters. Stay casual, avoid using complicated words or hashtags. Let your heartfelt response shine through."
        },
        {
            id: "5",
            label: "\uD83D\uDCA1 Insightful",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you found insightful. Share your thoughts in under 150 characters. Use simple language, skip the jargon and hashtags. Express your genuine appreciation."
        },
        {
            id: "6",
            label: "\uD83D\uDE02 Funny",
            prompt: "Imagine you're a Twitter user adding a comment under a tweet you found hilarious. Craft a funny response in under 150 characters. Keep it light, skip the big words and hashtags. Let your humor shine!"
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