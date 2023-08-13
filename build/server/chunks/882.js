"use strict";
exports.id = 882;
exports.ids = [882];
exports.modules = {

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

/***/ 29718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const analyticsSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    projectSlug: {
        type: String
    },
    data: {
        type: Object
    },
    geo: {
        type: Object
    },
    deviceInfo: {
        type: Object
    }
}, {
    timestamps: true
});
console.log("mongoose.models: ", (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models));
const Analytics = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).analytics || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("analytics", analyticsSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Analytics);


/***/ })

};
;