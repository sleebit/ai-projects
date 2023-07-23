"use strict";
(() => {
var exports = {};
exports.id = 497;
exports.ids = [497];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 79956:
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

// NAMESPACE OBJECT: ./app/api/newsletter/route.js
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
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(47301);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./config/dbConfig.js
var dbConfig = __webpack_require__(72212);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/subscribers.js

const subscribersSchema = new (external_mongoose_default()).Schema({
    email: {
        type: String,
        required: [
            true,
            "Please provide a email"
        ],
        unique: [
            true,
            "We already have your email with us ;-)"
        ]
    }
}, {
    timestamps: true
});
const Subscribers = (external_mongoose_default()).models.subscribers || external_mongoose_default().model("subscribers", subscribersSchema);
/* harmony default export */ const subscribers = (Subscribers);

;// CONCATENATED MODULE: ./app/api/newsletter/route.js




(0,dbConfig/* connect */.$)();
async function POST(req, res) {
    const data = await req.json();
    let response;
    try {
        const updatedData = await subscribers.create({
            email: data.email
        });
        response = {
            status: true,
            data: {
                ...updatedData
            },
            message: ""
        };
    } catch (e) {
        response = {
            status: false,
            data: {
                error: e
            },
            message: "We already have your email with us ;-)"
        };
    }
    return next_response/* default */.Z.json(response, {
        status: 200
    });
}
async function GET(req, res) {
    try {
        const subscribersData = await subscribers.find({});
        return next_response/* default */.Z.json({
            status: true,
            data: {
                ...subscribersData
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
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fnewsletter%2Froute&name=app%2Fapi%2Fnewsletter%2Froute&pagePath=private-next-app-dir%2Fapi%2Fnewsletter%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2Fnewsletter%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/newsletter/route","pathname":"/api/newsletter","filename":"route","bundlePath":"app/api/newsletter/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/newsletter/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/newsletter/route"

    

/***/ }),

/***/ 72212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

async function connect() {
    try {
        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);
        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);
        connection.on("connected", ()=>{
            console.log("MongoDB connected successfully");
        });
        connection.on("error", (err)=>{
            console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit();
        });
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,625,569], () => (__webpack_exec__(79956)));
module.exports = __webpack_exports__;

})();