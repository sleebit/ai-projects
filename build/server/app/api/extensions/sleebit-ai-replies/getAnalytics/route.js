"use strict";
(() => {
var exports = {};
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 64358:
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

// NAMESPACE OBJECT: ./app/api/extensions/sleebit-ai-replies/getAnalytics/route.js
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
// EXTERNAL MODULE: ./config/dbConfig.js
var dbConfig = __webpack_require__(72212);
// EXTERNAL MODULE: ./models/analytics.js
var analytics = __webpack_require__(29718);
;// CONCATENATED MODULE: ./app/api/extensions/sleebit-ai-replies/getAnalytics/route.js



(0,dbConfig/* connect */.$)();
async function GET(request) {
    const results = await analytics/* default */.Z.aggregate([
        {
            $match: {
                projectSlug: "sleebit-ai-replies"
            }
        },
        {
            $group: {
                _id: "$data.name",
                count: {
                    $sum: 1
                }
            }
        },
        {
            $project: {
                _id: 0,
                name: "$_id",
                count: 1
            }
        }
    ]);
    let users = {};
    // Process the results
    results.forEach((user)=>{
        console.log(`${user.name}: ${user.count}`);
        users[user.name] = user.count;
    });
    return next_response/* default */.Z.json({
        users
    }, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetAnalytics%2Froute&name=app%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetAnalytics%2Froute&pagePath=private-next-app-dir%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetAnalytics%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetAnalytics%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/extensions/sleebit-ai-replies/getAnalytics/route","pathname":"/api/extensions/sleebit-ai-replies/getAnalytics","filename":"route","bundlePath":"app/api/extensions/sleebit-ai-replies/getAnalytics/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/extensions/sleebit-ai-replies/getAnalytics/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/extensions/sleebit-ai-replies/getAnalytics/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [763,625,882], () => (__webpack_exec__(64358)));
module.exports = __webpack_exports__;

})();