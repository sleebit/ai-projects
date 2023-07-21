"use strict";
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 83051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const CentraRequest = __webpack_require__(7344);
module.exports = (url, method)=>{
    return new CentraRequest(url, method);
};


/***/ }),

/***/ 7344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const path = __webpack_require__(71017);
const http = __webpack_require__(13685);
const https = __webpack_require__(95687);
const qs = __webpack_require__(63477);
const zlib = __webpack_require__(59796);
const { URL } = __webpack_require__(57310);
const CentraResponse = __webpack_require__(9324);
const supportedCompressions = [
    "gzip",
    "deflate",
    "br"
];
module.exports = class CentraRequest {
    constructor(url, method = "GET"){
        this.url = typeof url === "string" ? new URL(url) : url;
        this.method = method;
        this.data = null;
        this.sendDataAs = null;
        this.reqHeaders = {};
        this.streamEnabled = false;
        this.compressionEnabled = false;
        this.timeoutTime = null;
        this.coreOptions = {};
        this.resOptions = {
            "maxBuffer": 50 * 1000000 // 50 MB
        };
        return this;
    }
    query(a1, a2) {
        if (typeof a1 === "object") {
            Object.keys(a1).forEach((queryKey)=>{
                this.url.searchParams.append(queryKey, a1[queryKey]);
            });
        } else this.url.searchParams.append(a1, a2);
        return this;
    }
    path(relativePath) {
        this.url.pathname = path.join(this.url.pathname, relativePath);
        return this;
    }
    body(data, sendAs) {
        this.sendDataAs = typeof data === "object" && !sendAs && !Buffer.isBuffer(data) ? "json" : sendAs ? sendAs.toLowerCase() : "buffer";
        this.data = this.sendDataAs === "form" ? qs.stringify(data) : this.sendDataAs === "json" ? JSON.stringify(data) : data;
        return this;
    }
    header(a1, a2) {
        if (typeof a1 === "object") {
            Object.keys(a1).forEach((headerName)=>{
                this.reqHeaders[headerName.toLowerCase()] = a1[headerName];
            });
        } else this.reqHeaders[a1.toLowerCase()] = a2;
        return this;
    }
    timeout(timeout) {
        this.timeoutTime = timeout;
        return this;
    }
    option(name, value) {
        this.coreOptions[name] = value;
        return this;
    }
    stream() {
        this.streamEnabled = true;
        return this;
    }
    compress() {
        this.compressionEnabled = true;
        if (!this.reqHeaders["accept-encoding"]) this.reqHeaders["accept-encoding"] = supportedCompressions.join(", ");
        return this;
    }
    send() {
        return new Promise((resolve, reject)=>{
            if (this.data) {
                if (!this.reqHeaders.hasOwnProperty("content-type")) {
                    if (this.sendDataAs === "json") {
                        this.reqHeaders["content-type"] = "application/json";
                    } else if (this.sendDataAs === "form") {
                        this.reqHeaders["content-type"] = "application/x-www-form-urlencoded";
                    }
                }
                if (!this.reqHeaders.hasOwnProperty("content-length")) {
                    this.reqHeaders["content-length"] = Buffer.byteLength(this.data);
                }
            }
            const options = Object.assign({
                "protocol": this.url.protocol,
                "host": this.url.hostname.replace("[", "").replace("]", ""),
                "port": this.url.port,
                "path": this.url.pathname + (this.url.search === null ? "" : this.url.search),
                "method": this.method,
                "headers": this.reqHeaders
            }, this.coreOptions);
            let req;
            const resHandler = (res)=>{
                let stream = res;
                if (this.compressionEnabled) {
                    if (res.headers["content-encoding"] === "gzip") {
                        stream = res.pipe(zlib.createGunzip());
                    } else if (res.headers["content-encoding"] === "deflate") {
                        stream = res.pipe(zlib.createInflate());
                    } else if (res.headers["content-encoding"] === "br") {
                        stream = res.pipe(zlib.createBrotliDecompress());
                    }
                }
                let centraRes;
                if (this.streamEnabled) {
                    resolve(stream);
                } else {
                    centraRes = new CentraResponse(res, this.resOptions);
                    stream.on("error", (err)=>{
                        reject(err);
                    });
                    stream.on("aborted", ()=>{
                        reject(new Error("Server aborted request"));
                    });
                    stream.on("data", (chunk)=>{
                        centraRes._addChunk(chunk);
                        if (this.resOptions.maxBuffer !== null && centraRes.body.length > this.resOptions.maxBuffer) {
                            stream.destroy();
                            reject("Received a response which was longer than acceptable when buffering. (" + this.body.length + " bytes)");
                        }
                    });
                    stream.on("end", ()=>{
                        resolve(centraRes);
                    });
                }
            };
            if (this.url.protocol === "http:") {
                req = http.request(options, resHandler);
            } else if (this.url.protocol === "https:") {
                req = https.request(options, resHandler);
            } else throw new Error("Bad URL protocol: " + this.url.protocol);
            if (this.timeoutTime) {
                req.setTimeout(this.timeoutTime, ()=>{
                    req.abort();
                    if (!this.streamEnabled) {
                        reject(new Error("Timeout reached"));
                    }
                });
            }
            req.on("error", (err)=>{
                reject(err);
            });
            if (this.data) req.write(this.data);
            req.end();
        });
    }
};


/***/ }),

/***/ 9324:
/***/ ((module) => {


module.exports = class CentraResponse {
    constructor(res, resOptions){
        this.coreRes = res;
        this.resOptions = resOptions;
        this.body = Buffer.alloc(0);
        this.headers = res.headers;
        this.statusCode = res.statusCode;
    }
    _addChunk(chunk) {
        this.body = Buffer.concat([
            this.body,
            chunk
        ]);
    }
    async json() {
        return this.statusCode === 204 ? null : JSON.parse(this.body);
    }
    async text() {
        return this.body.toString();
    }
};


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

/***/ 30200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { URL } = __webpack_require__(57310);
const centra = __webpack_require__(83051);
/**
* phin options object. phin also supports all options from <a href="https://nodejs.org/api/http.html#http_http_request_options_callback">http.request(options, callback)</a> by passing them on to this method (or similar).
* @typedef {Object} phinOptions
* @property {string} url - URL to request (autodetect infers from this URL)
* @property {string} [method=GET] - Request method ('GET', 'POST', etc.)
* @property {string|Buffer|object} [data] - Data to send as request body (phin may attempt to convert this data to a string if it isn't already)
* @property {Object} [form] - Object to send as form data (sets 'Content-Type' and 'Content-Length' headers, as well as request body) (overwrites 'data' option if present)
* @property {Object} [headers={}] - Request headers
* @property {Object} [core={}] - Custom core HTTP options
* @property {string} [parse=none] - Response parsing. Errors will be given if the response can't be parsed. 'none' returns body as a `Buffer`, 'json' attempts to parse the body as JSON, and 'string' attempts to parse the body as a string
* @property {boolean} [followRedirects=false] - Enable HTTP redirect following
* @property {boolean} [stream=false] - Enable streaming of response. (Removes body property)
* @property {boolean} [compression=false] - Enable compression for request
* @property {?number} [timeout=null] - Request timeout in milliseconds
* @property {string} [hostname=autodetect] - URL hostname
* @property {Number} [port=autodetect] - URL port
* @property {string} [path=autodetect] - URL path
*/ /**
* Response data
* @callback phinResponseCallback
* @param {?(Error|string)} error - Error if any occurred in request, otherwise null.
* @param {?http.serverResponse} phinResponse - phin response object. Like <a href='https://nodejs.org/api/http.html#http_class_http_serverresponse'>http.ServerResponse</a> but has a body property containing response body, unless stream. If stream option is enabled, a stream property will be provided to callback with a readable stream.
*/ /**
* Sends an HTTP request
* @param {phinOptions|string} options - phin options object (or string for auto-detection)
* @returns {Promise<http.serverResponse>} - phin-adapted response object
*/ const phin = async (opts)=>{
    if (typeof opts !== "string") {
        if (!opts.hasOwnProperty("url")) {
            throw new Error("Missing url option from options for request method.");
        }
    }
    const req = centra(typeof opts === "object" ? opts.url : opts, opts.method || "GET");
    if (opts.headers) req.header(opts.headers);
    if (opts.stream) req.stream();
    if (opts.timeout) req.timeout(opts.timeout);
    if (opts.data) req.body(opts.data);
    if (opts.form) req.body(opts.form, "form");
    if (opts.compression) req.compress();
    if (typeof opts.core === "object") {
        Object.keys(opts.core).forEach((optName)=>{
            req.option(optName, opts.core[optName]);
        });
    }
    const res = await req.send();
    if (res.headers.hasOwnProperty("location") && opts.followRedirects) {
        opts.url = new URL(res.headers["location"], opts.url).toString();
        return await phin(opts);
    }
    if (opts.stream) {
        res.stream = res;
        return res;
    } else {
        res.coreRes.body = res.body;
        if (opts.parse) {
            if (opts.parse === "json") {
                res.coreRes.body = await res.json();
                return res.coreRes;
            } else if (opts.parse === "string") {
                res.coreRes.body = res.coreRes.body.toString();
                return res.coreRes;
            }
        }
        return res.coreRes;
    }
};
// If we're running Node.js 8+, let's promisify it
phin.promisified = phin;
phin.unpromisified = (opts, cb)=>{
    phin(opts).then((data)=>{
        if (cb) cb(null, data);
    }).catch((err)=>{
        if (cb) cb(err, null);
    });
};
// Defaults
phin.defaults = (defaultOpts)=>async (opts)=>{
        const nops = typeof opts === "string" ? {
            "url": opts
        } : opts;
        Object.keys(defaultOpts).forEach((doK)=>{
            if (!nops.hasOwnProperty(doK) || nops[doK] === null) {
                nops[doK] = defaultOpts[doK];
            }
        });
        return await phin(nops);
    };
module.exports = phin;


/***/ })

};
;