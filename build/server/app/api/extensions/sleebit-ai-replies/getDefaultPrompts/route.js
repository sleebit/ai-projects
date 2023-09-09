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
            prompt: "Imagine you're a Twitter user who came across a tweet you genuinely like. Craft a concise and friendly opinion (under 150 characters) to express your appreciation without using any hashtags or emojies. Make it sound like a real person who liked the tweet. Also use simple language, no overcomplicated vocabulary."
        },
        {
            id: "2",
            label: "\uD83E\uDD2F Mind-blown",
            prompt: "Pretend you stumbled upon a mind-blowing tweet. Craft a comment (under 150 characters) that conveys your astonishment and curiosity. Keep it authentic, as if you're genuinely amazed."
        },
        {
            id: "3",
            label: "\uD83D\uDE4C Support",
            prompt: "You've found a tweet that aligns with your beliefs and values. Write a supportive comment (under 150 characters) that encourages the conversation in a positive direction. Make it sound like a friendly endorsement."
        },
        {
            id: "4",
            label: "❤️ Love",
            prompt: "Imagine you've just read a heartfelt and touching tweet that resonates with you on a deep level. Craft a warm and affectionate comment (under 150 characters) that expresses your love and appreciation. Make it sound like a genuine response from someone who truly cares."
        },
        {
            id: "5",
            label: "\uD83E\uDD14 Question",
            prompt: "Encountered a tweet that piqued your curiosity? Craft a brief, friendly question (under 150 characters) that invites the author and others to share more. Keep it natural, as if you're genuinely seeking information."
        },
        {
            id: "6",
            label: "\uD83D\uDE02 Funny",
            prompt: "You've come across a humorous tweet. Create a funny and lighthearted comment (under 150 characters) that adds to the humor and encourages laughter. Make it seem like a real person sharing a joke."
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