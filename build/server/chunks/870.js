exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 75941:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 63481, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29478));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69325));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 36705));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43763));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89361));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 75213))

/***/ }),

/***/ 69325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MainNav: () => (/* binding */ MainNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(95176);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./config/site.js
var site = __webpack_require__(68995);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(23853);
;// CONCATENATED MODULE: ./components/assets/sleebit-logo-transparent-white.png
/* harmony default export */ const sleebit_logo_transparent_white = ({"src":"/_next/static/media/sleebit-logo-transparent-white.1e9b0b5a.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXH///////////////////////////////////////8c1D1MAAAAC3RSTlMAhrNS4Gf6ekuSN4u7aR0AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAzSURBVHicPcpBDsAwCMRALyyh7f8fXBFF8XUMtyioAJ6V30qgZfkF5LZqKKxNkeqc+fQDFFQAjWmBR0wAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/assets/sleebit-logo-transparent-black.png
/* harmony default export */ const sleebit_logo_transparent_black = ({"src":"/_next/static/media/sleebit-logo-transparent-black.307433a9.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC+JJ50AAAAC3RSTlMAhrNS4Gf6ekuSN4u7aR0AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAzSURBVHicPcpBDsAwCMRALyyh7f8fXBFF8XUMtyioAJ6V30qgZfkF5LZqKKxNkeqc+fQDFFQAjWmBR0wAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/main-nav.jsx
/* __next_internal_client_entry_do_not_use__ MainNav auto */ 






// import { Icons } from "@/components/icons";


function MainNav({ items }) {
    const { setTheme, theme } = (0,dist/* useTheme */.F)();
    let [logo, setLogo] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        setLogo(theme == "dark" ? sleebit_logo_transparent_white.src : theme == "light" ? sleebit_logo_transparent_black.src : sleebit_logo_transparent_black.src);
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex gap-6 md:gap-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "flex items-end space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 25,
                        height: 25,
                        src: logo,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "inline-block font-bold tracking-widest",
                        children: site/* siteConfig */.J.name.toUpperCase()
                    })
                ]
            }),
            items?.length ? /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "flex gap-6 max-sm:hidden",
                children: items?.map((item, index)=>item.href && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.href,
                        target: item.target,
                        className: (0,utils.cn)("flex items-center text-sm font-medium text-muted-foreground", item.disabled && "cursor-not-allowed opacity-80"),
                        children: item.title
                    }, index))
            }) : null
        ]
    });
}


/***/ }),

/***/ 36705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteFooter: () => (/* binding */ SiteFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62752);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28675);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64660);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53071);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80346);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ SiteFooter auto */ 







function SiteFooter() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const addUserToSubscribersList = async ()=>{
        setLoading(true);
        const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.post("/api/newsletter", {
            email
        });
        if (data.status) {
            (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am)({
                title: "Subscription Success",
                description: "We have recieved your subscription request, thank you ;-)"
            });
        } else {
            (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am)({
                title: "Subscription Error",
                description: data.message
            });
        }
        setLoading(false);
    };
    return pathname.includes("chatgpt-clone") ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "flex justify-center px-4 text-gray-800  dark:text-white ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container px-6 py-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-lg font-bold text-center lg:text-2xl",
                    children: "Level up your AI game with our newsletter subscription!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center justify-center gap-4 mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .I, {
                            type: "email",
                            onChange: ({ target })=>setEmail(target.value),
                            className: "w-auto",
                            placeholder: "Enter you co-ordinates (email)"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            onClick: addUserToSubscribersList,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "animate-spin mr-2",
                                    viewBox: "0 0 24 24",
                                    style: {
                                        display: loading ? "block" : "none"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_7__/* .Loader2Icon */ .Ujj, {})
                                }),
                                "Subscribe"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 43763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95176);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 

// import { ThemeProviderProps } from "next-themes/dist/types";
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 29478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ThemeToggle: () => (/* binding */ ThemeToggle)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./components/ui/button.jsx
var ui_button = __webpack_require__(28675);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
;// CONCATENATED MODULE: ./components/icons.jsx


const Icons = {
    sun: lucide_react/* SunMedium */.j1h,
    moon: lucide_react/* Moon */.JFe,
    twitter: lucide_react/* Twitter */.tLe,
    profile: lucide_react/* User2Icon */.rVK,
    gitHub: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 438.549 438.549",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            })
        })
};

;// CONCATENATED MODULE: ./components/theme-toggle.jsx
/* __next_internal_client_entry_do_not_use__ ThemeToggle auto */ 

// import { useTheme } from "next-themes";



function ThemeToggle() {
    // const { setTheme, theme } = useTheme();
    const pathname = (0,navigation.usePathname)();
    const [index, setIndex] = (0,react_.useState)(2);
    const handleRotIconsClick = ()=>{
        setIndex(index === 6 ? 1 : index + 1);
        if (index === 1) {
            document.querySelector("#mountains").classList.remove("storm");
            document.querySelector("#mountains").classList.remove("snow");
            document.querySelector("#mountains").classList.remove("clouds");
        } else if (index === 2) {
            document.querySelector("#mountains").classList.add("sunset");
        } else if (index === 3) {
            document.querySelector("#mountains").classList.remove("sunset");
            document.querySelector("#mountains").classList.add("moon");
        } else if (index === 4) {
            document.querySelector("#mountains").classList.add("clouds");
        } else if (index === 5) {
            document.querySelector("#mountains").classList.add("storm");
        } else if (index === 6) {
            document.querySelector("#mountains").classList.remove("moon");
            document.querySelector("#mountains").classList.remove("storm");
            document.querySelector("#mountains").classList.add("snow");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
        style: {
            display: pathname != "/" ? "none" : "block"
        },
        onClick: handleRotIconsClick,
        rel: "noreferrer",
        variant: "default",
        className: "relative top-[12px] motion-safe:animate-bounce whitespace-nowrap",
        size: "lg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "motion-safe:animate-bounce",
            children: "PLAY WITH ME"
        })
    });
}


/***/ }),

/***/ 28675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ buttonVariants),
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59818);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17247);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23853);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800", {
    variants: {
        variant: {
            default: "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
            destructive: "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
            outline: "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            secondary: "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
            ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 62752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23853);



const Input = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-9 w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-800", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 89361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Toaster: () => (/* binding */ Toaster)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-icons/dist/react-icons.cjs.production.min.js
var react_icons_cjs_production_min = __webpack_require__(99717);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-toast/dist/index.mjs
var dist = __webpack_require__(97597);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(17247);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(23853);
;// CONCATENATED MODULE: ./components/ui/toast.jsx






const ToastProvider = dist/* Provider */.zt;
const ToastViewport = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Viewport */.l_, {
        ref: ref,
        className: (0,utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = dist/* Viewport */.l_.displayName;
const toastVariants = (0,class_variance_authority_dist/* cva */.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border border-zinc-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-zinc-800", {
    variants: {
        variant: {
            default: "border bg-white dark:bg-zinc-950",
            destructive: "destructive group border-red-500 bg-red-500 text-zinc-50 dark:border-red-900 dark:bg-red-900 dark:text-red-50"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ (0,react_.forwardRef)(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = dist/* Root */.fC.displayName;
const ToastAction = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Action */.aU, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-zinc-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-zinc-50 group-[.destructive]:focus:ring-red-500 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800 dark:group-[.destructive]:border-zinc-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-red-50 dark:group-[.destructive]:focus:ring-red-900", className),
        ...props
    }));
ToastAction.displayName = dist/* Action */.aU.displayName;
const ToastClose = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Close */.x8, {
        ref: ref,
        className: (0,utils.cn)("absolute right-1 top-1 rounded-md p-1 text-zinc-950/50 opacity-0 transition-opacity hover:text-zinc-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-zinc-50/50 dark:hover:text-zinc-50", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* Cross2Icon */.Pxu, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = dist/* Close */.x8.displayName;
const ToastTitle = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-sm font-semibold [&+div]:text-xs", className),
        ...props
    }));
ToastTitle.displayName = dist/* Title */.Dx.displayName;
const ToastDescription = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(80346);
;// CONCATENATED MODULE: ./components/ui/toaster.jsx
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts } = (0,use_toast/* useToast */.pm)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ jsx_runtime_.jsx(ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx_runtime_.jsx(ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ jsx_runtime_.jsx(ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ToastViewport, {})
        ]
    });
}


/***/ }),

/***/ 75213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip),
/* harmony export */   TooltipContent: () => (/* binding */ TooltipContent),
/* harmony export */   TooltipProvider: () => (/* binding */ TooltipProvider),
/* harmony export */   TooltipTrigger: () => (/* binding */ TooltipTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11758);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23853);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ Tooltip,TooltipTrigger,TooltipContent,TooltipProvider auto */ 



const TooltipProvider = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Provider */ .zt;
const Tooltip = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC;
const TooltipTrigger = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .xz;
const TooltipContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("z-50 overflow-hidden rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-zinc-50 dark:text-zinc-900", className),
        ...props
    }));
TooltipContent.displayName = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY.displayName;



/***/ }),

/***/ 80346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Am: () => (/* binding */ toast),
/* harmony export */   pm: () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony export reducer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Inspired by react-hot-toast library

const TOAST_LIMIT = 10;
const TOAST_REMOVE_DELAY = 3 // in seconds
;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(memoryState);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 68995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ siteConfig)
/* harmony export */ });
const siteConfig = {
    name: "Sleebit",
    description: "Sleebit is a collection of AI projects built in public by Sumit Chauhan, an indie developer based in India.",
    mainNav: [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Apps",
            href: "/apps"
        },
        {
            title: "Go to twitter",
            href: "https://twitter.com/thesleebit",
            target: "_blank"
        }
    ],
    links: {
        twitter: "https://twitter.com/thesleebit",
        github: "https://github.com/codeit13",
        repo: "https://github.com/sleebit/ai-projects"
    }
};


/***/ }),

/***/ 23853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony exports nanoid, fetcher, formatDate */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62753);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4798);



function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
const nanoid = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__/* .customAlphabet */ .kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 7); // 7-character random string
async function fetcher(input, init) {
    const res = await fetch(input, init);
    if (!res.ok) {
        const json = await res.json();
        if (json.error) {
            const error = new Error(json.error);
            error.status = res.status;
            throw error;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
    return res.json();
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}


/***/ }),

/***/ 79412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./config/site.js
const siteConfig = {
    name: "Sleebit",
    description: "Sleebit is a collection of AI projects built in public by Sumit Chauhan, an indie developer based in India.",
    mainNav: [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Apps",
            href: "/apps"
        },
        {
            title: "Go to twitter",
            href: "https://twitter.com/thesleebit",
            target: "_blank"
        }
    ],
    links: {
        twitter: "https://twitter.com/thesleebit",
        github: "https://github.com/codeit13",
        repo: "https://github.com/sleebit/ai-projects"
    }
};

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/fonts.js","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-sans"}],"variableName":"fontSans"}
var fonts_js_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_ = __webpack_require__(89486);
var fonts_js_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(fonts_js_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(28922);
// EXTERNAL MODULE: ./node_modules/nanoid/index.js
var nanoid = __webpack_require__(88192);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(25556);
;// CONCATENATED MODULE: ./lib/utils.js



function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx.clsx)(inputs));
}
const utils_nanoid = (0,nanoid/* customAlphabet */.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 7); // 7-character random string
async function fetcher(input, init) {
    const res = await fetch(input, init);
    if (!res.ok) {
        const json = await res.json();
        if (json.error) {
            const error = new Error(json.error);
            error.status = res.status;
            throw error;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
    return res.json();
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 2 modules
var dist = __webpack_require__(24550);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(47151);
;// CONCATENATED MODULE: ./components/ui/button.jsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800", {
    variants: {
        variant: {
            default: "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
            destructive: "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
            outline: "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            secondary: "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
            ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0,react_shared_subset.forwardRef)(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(26852);
;// CONCATENATED MODULE: ./components/icons.jsx


const Icons = {
    sun: lucide_react/* SunMedium */.j1h,
    moon: lucide_react/* Moon */.JFe,
    twitter: lucide_react/* Twitter */.tLe,
    profile: lucide_react/* User2Icon */.rVK,
    gitHub: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 438.549 438.549",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            })
        })
};

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./components/main-nav.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/main-nav.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["MainNav"];

;// CONCATENATED MODULE: ./components/theme-toggle.jsx

const theme_toggle_proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/theme-toggle.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_toggle_esModule, $$typeof: theme_toggle_$$typeof } = theme_toggle_proxy;
const theme_toggle_default_ = theme_toggle_proxy.default;

const theme_toggle_e0 = theme_toggle_proxy["ThemeToggle"];

;// CONCATENATED MODULE: ./components/site-header.js







function SiteHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky top-0 z-40 w-full border-b bg-background",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-4 md:container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    items: siteConfig.mainNav
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-1 items-center justify-end space-x-4",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/profile",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icons.profile, {
                                            className: "h-5 w-5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Profile"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_e0, {})
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/site-footer.js

const site_footer_proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/site-footer.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: site_footer_esModule, $$typeof: site_footer_$$typeof } = site_footer_proxy;
const site_footer_default_ = site_footer_proxy.default;

const site_footer_e0 = site_footer_proxy["SiteFooter"];

;// CONCATENATED MODULE: ./components/ui/toaster.jsx

const toaster_proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/ui/toaster.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: toaster_esModule, $$typeof: toaster_$$typeof } = toaster_proxy;
const toaster_default_ = toaster_proxy.default;

const toaster_e0 = toaster_proxy["Toaster"];

;// CONCATENATED MODULE: ./components/theme-provider.jsx

const theme_provider_proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/theme-provider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_provider_esModule, $$typeof: theme_provider_$$typeof } = theme_provider_proxy;
const theme_provider_default_ = theme_provider_proxy.default;

const theme_provider_e0 = theme_provider_proxy["ThemeProvider"];

;// CONCATENATED MODULE: ./components/ui/tooltip.jsx

const tooltip_proxy = (0,module_proxy.createProxy)(String.raw`/home/sumit/_Projects/ai_projects/components/ui/tooltip.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: tooltip_esModule, $$typeof: tooltip_$$typeof } = tooltip_proxy;
const tooltip_default_ = tooltip_proxy.default;

const tooltip_e0 = tooltip_proxy["Tooltip"];

const e1 = tooltip_proxy["TooltipTrigger"];

const e2 = tooltip_proxy["TooltipContent"];

const e3 = tooltip_proxy["TooltipProvider"];

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(91661);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
;// CONCATENATED MODULE: ./app/layout.js











const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "white"
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "black"
        }
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
            lang: "en",
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            type: "text/javascript",
                            id: "inspectlet-code",
                            children: `(function() {
                  window.__insp = window.__insp || [];
                  __insp.push(['wid', 179419067]);
                  var ldinsp = function(){
                  if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=179419067&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
                  setTimeout(ldinsp, 0);
              })();`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            src: "https://www.googletagmanager.com/gtag/js?id=G-WVXW8DQXW5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            id: "gtag",
                            children: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-WVXW8DQXW5');
              `
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    className: cn("min-h-screen bg-background font-sans antialiased", (fonts_js_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default()).variable),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_provider_e0, {
                            attribute: "class",
                            enableSystem: false,
                            defaultTheme: "dark",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(e3, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative flex min-h-screen flex-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(SiteHeader, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-1",
                                            children: children
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(site_footer_e0, {})
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(toaster_e0, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;