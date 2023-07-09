"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4428:
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
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2413);
;// CONCATENATED MODULE: ./app/api/getProjects/route.js

async function GET(request) {
    // Do whatever you want
    return next_response/* default */.Z.json([
        {
            name: "Chat with PDF",
            slug: "chat-with-pdf",
            description: "This project uses the GPT-3 embeddings APIs to generate embeddings from text of PDF, and then perform a cosine similarity between the embeddings and the user's question to generate a response.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
        },
        {
            name: "Sentiment Analysis ",
            slug: "sentiment-analysis",
            description: "This project uses GPT-3 API's along with clever langchain tricks to determine the sentiment of any given text.",
            image: "https://daxg39y63pxwu.cloudfront.net/images/blog/image-captioning-deep-learning-project/Image_Captioning_Deep_Learning_Projects.png"
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

/***/ 2413:
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
const _response = __webpack_require__(2917); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625], () => (__webpack_exec__(4428)));
module.exports = __webpack_exports__;

})();