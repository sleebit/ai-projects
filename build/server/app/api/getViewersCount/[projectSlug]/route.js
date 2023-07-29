"use strict";
(() => {
var exports = {};
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 93609:
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

// NAMESPACE OBJECT: ./app/api/getViewersCount/[projectSlug]/route.js
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
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(47301);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./config/dbConfig.js
var dbConfig = __webpack_require__(72212);
// EXTERNAL MODULE: ./models/analytics.js
var analytics = __webpack_require__(29718);
;// CONCATENATED MODULE: ./app/api/getViewersCount/[projectSlug]/route.js




(0,dbConfig/* connect */.$)();
async function GET(req, { params }) {
    try {
        const data = await analytics/* default */.Z.find({
            projectSlug: params.projectSlug
        }).count();
        return next_response/* default */.Z.json({
            status: true,
            data: {
                views: data
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FgetViewersCount%2F%5BprojectSlug%5D%2Froute&name=app%2Fapi%2FgetViewersCount%2F%5BprojectSlug%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2FgetViewersCount%2F%5BprojectSlug%5D%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2FgetViewersCount%2F%5BprojectSlug%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/getViewersCount/[projectSlug]/route","pathname":"/api/getViewersCount/[projectSlug]","filename":"route","bundlePath":"app/api/getViewersCount/[projectSlug]/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/getViewersCount/[projectSlug]/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/getViewersCount/[projectSlug]/route"

    

/***/ }),

/***/ 47301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return _request.NextRequest;
    }
});
const _request = __webpack_require__(66569); //# sourceMappingURL=next-request.js.map


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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625,569,882], () => (__webpack_exec__(93609)));
module.exports = __webpack_exports__;

})();