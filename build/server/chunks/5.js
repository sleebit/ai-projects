"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 64416:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gm: () => (/* binding */ $f631663db3294ace$export$b39126d51d94e6f3)
/* harmony export */ });
/* unused harmony exports Provider, DirectionProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);



const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $f631663db3294ace$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $7Gjcd$createElement($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $f631663db3294ace$export$2881499e37b75b9a = (/* unused pure expression or super */ null && ($f631663db3294ace$export$c760c09fdd558351));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 17421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ $010c2913dbd2fe3d$export$5cae361ad82dce8b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);



function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}





//# sourceMappingURL=index.mjs.map


/***/ })

};
;