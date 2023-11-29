"use strict";
(() => {
var exports = {};
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 66148:
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

// NAMESPACE OBJECT: ./app/api/extensions/sleebit-ai-replies/getDefaultValues/route.js
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
;// CONCATENATED MODULE: ./app/api/extensions/sleebit-ai-replies/getDefaultValues/route.js

async function GET(request) {
    return next_response/* default */.Z.json({
        customInstructions: `The tone of your all your responses, should be strictly very casual like a normal average social media user who is very curious and is always wanting to engage with others. The responses should be strictly very casual in nature, no formal tone. Your response shouldn't look like a ChatGPT/ Robot/ AI written responses. Don't use the word "Absolutely", or similar kindof words at the start of your replies. Dont use any conversational expression sentences like "Totally feel this", "Absolutely". "Totally agree", and many more.`,
        defaultPrompts: [
            {
                id: "1",
                label: "\uD83D\uDC4D Agree",
                prompt: `Imagine you came across a tweet you genuinely agree with. Craft a concise and friendly opinion (under 150 characters) to express your agreement  using no complicated words.`
            },
            {
                id: "2",
                label: "\uD83E\uDD2F Mind-blown",
                prompt: `Pretend you stumbled upon a mind-blowing tweet. Craft a comment (under 150 characters) that conveys your astonishment and curiosity. Keep it authentic, as if you're genuinely amazed.`
            },
            {
                id: "3",
                label: "\uD83D\uDE4C Support",
                prompt: `You've found a tweet that aligns with your beliefs and values. Write a supportive comment (under 150 characters) that encourages the conversation in a positive direction. Make it sound like a friendly endorsement.`
            },
            {
                id: "4",
                label: "❤️ Love",
                prompt: `Imagine you've just read a heartfelt and touching tweet that resonates with you on a deep level. Craft a warm and affectionate comment (under 150 characters) that expresses your love and appreciation. Make it sound like a genuine response from someone who truly cares.`
            },
            {
                id: "5",
                label: "\uD83E\uDD14 Curious",
                prompt: `Imagine you have encountered a tweet that piqued your curiosity? Craft a brief, friendly question as a comment (under 150 characters) that encourages the author and others to engage with it. Keep it natural, as if you're genuinely seeking information.`
            },
            {
                id: "6",
                label: "\uD83D\uDE02 Haha",
                prompt: `Imagine you've come across a humorous tweet. Create a funny and lighthearted comment (under 150 characters) that adds to the humor and encourages laughter. Make it seem like a real person making a joke comment. Your comment should be relatable to the most amount of twitter audience relevant to the tweet's context, also it should encourage the author and others to engage with it.`
            },
            {
                id: "7",
                label: "\uD83E\uDD16 Auto",
                prompt: `Imagine you're a Twitter user who came across a tweet while scrolling your feed. Craft a concise, friendly & a genuine opinion (under 150 characters) without using any hashtags or emojies. Your reply should be very engaging in nature. Make it sound like a real person who read the tweet. Also use simple language, no overcomplicated vocabulary.`
            }
        ]
    }, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultValues%2Froute&name=app%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultValues%2Froute&pagePath=private-next-app-dir%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultValues%2Froute.js&appDir=%2Fhome%2Fsumit%2F_Projects%2Fai_projects%2Fapp&appPaths=%2Fapi%2Fextensions%2Fsleebit-ai-replies%2FgetDefaultValues%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/extensions/sleebit-ai-replies/getDefaultValues/route","pathname":"/api/extensions/sleebit-ai-replies/getDefaultValues","filename":"route","bundlePath":"app/api/extensions/sleebit-ai-replies/getDefaultValues/route"},"resolvedPagePath":"/home/sumit/_Projects/ai_projects/app/api/extensions/sleebit-ai-replies/getDefaultValues/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/extensions/sleebit-ai-replies/getDefaultValues/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [763,625], () => (__webpack_exec__(66148)));
module.exports = __webpack_exports__;

})();