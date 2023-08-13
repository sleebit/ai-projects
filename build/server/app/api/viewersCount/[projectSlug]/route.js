"use strict";
(() => {
var exports = {};
exports.id = 740;
exports.ids = [740];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 50973:
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

// NAMESPACE OBJECT: ./app/api/viewersCount/[projectSlug]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/user-agent.js
var user_agent = __webpack_require__(68315);
// EXTERNAL MODULE: ./config/dbConfig.js
var dbConfig = __webpack_require__(72212);
// EXTERNAL MODULE: ./models/analytics.js
var analytics = __webpack_require__(29718);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(63919);
;// CONCATENATED MODULE: ./app/api/viewersCount/[projectSlug]/route.js





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
async function POST(req, { params }) {
    const data = req.json();
    const headersList = (0,headers.headers)();
    const ip = headersList.get("x-real-ip");
    let geo;
    try {
        const { data } = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=9a5c785879944311bfd58fb20044c2c3&ip=${ip}`);
        geo = data;
    } catch (e) {
        geo = {};
    }
    const deviceInfo = (0,user_agent/* default */.Z)(req);
    try {
        await analytics/* default */.Z.create({
            projectSlug: params.projectSlug || "",
            data: data.data || "",
            geo: {
                country: geo.country_name || "",
                city: geo.city || "",
                time_zone: geo.time_zone?.name || ""
            },
            deviceInfo: {
                device: deviceInfo.device || deviceInfo.cpu,
                os: deviceInfo.os || ""
            }
        });
    } catch (e) {}
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FviewersCount%2F%5BprojectSlug%5D%2Froute&name=app%2Fapi%2FviewersCount%2F%5BprojectSlug%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2FviewersCount%2F%5BprojectSlug%5D%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2FviewersCount%2F%5BprojectSlug%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/viewersCount/[projectSlug]/route","pathname":"/api/viewersCount/[projectSlug]","filename":"route","bundlePath":"app/api/viewersCount/[projectSlug]/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/viewersCount/[projectSlug]/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/viewersCount/[projectSlug]/route"

    

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


/***/ }),

/***/ 68315:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _useragent.userAgent;
    }
}));
const _useragent = __webpack_require__(71789); //# sourceMappingURL=user-agent.js.map


/***/ }),

/***/ 63919:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(83851);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625,789,882], () => (__webpack_exec__(50973)));
module.exports = __webpack_exports__;

})();