exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 52458:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86417));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5712))

/***/ }),

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarNav: () => (/* binding */ SidebarNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23853);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28675);
/* __next_internal_client_entry_do_not_use__ SidebarNav auto */ 




function SidebarNav({ className, items, ...props }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className),
        ...props,
        children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.href,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .buttonVariants */ .d)({
                    variant: "ghost"
                }), pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline", "justify-start"),
                children: item.title
            }, item.href))
    });
}


/***/ }),

/***/ 86417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48483);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23853);
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const Separator = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("shrink-0 bg-zinc-200 dark:bg-zinc-800", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f.displayName;



/***/ }),

/***/ 22903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/ui/separator.jsx
var separator = __webpack_require__(98186);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./app/profile/components/sidebar-nav.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/app/profile/components/sidebar-nav.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SidebarNav"];

;// CONCATENATED MODULE: ./app/profile/layout.js



const metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod."
};
const sidebarNavItems = [
    {
        title: "Profile",
        href: "/profile"
    }
];
function SettingsLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "space-y-6 p-10 pb-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-0.5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-bold tracking-tight",
                            children: "Settings"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Manage your account settings and set e-mail preferences."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(separator/* Separator */.Z, {
                    className: "my-6"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                            className: "-mx-4 lg:w-1/5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                                items: sidebarNavItems
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 lg:max-w-2xl",
                            children: children
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 98186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/ui/separator.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Separator"];


/***/ })

};
;