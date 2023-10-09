let e,t,r,n,o;function i(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var s,a,u,l,c,f,p,h,d,y,g,b,m,v,x,w,E,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function S(e){return e&&e.__esModule?e.default:e}var A={},O={},T=_.parcelRequire2abd;null==T&&((T=function(e){if(e in A)return A[e].exports;if(e in O){var t=O[e];delete O[e];var r={id:e,exports:{}};return A[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){O[e]=t},_.parcelRequire2abd=T),T.register("k4yOc",function(e,t){var r,n="object"==typeof Reflect?Reflect:null,o=n&&"function"==typeof n.apply?n.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};r=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise(function(r,n){function o(r){e.removeListener(t,i),n(r)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),r([].slice.call(arguments))}g(e,t,i,{once:!0}),"error"!==t&&"function"==typeof e.on&&g(e,"error",o,{once:!0})})},// Backwards-compat with node 0.10.x
s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var a=10;function u(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function c(e,t,r,n){if(u(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
i=e._events),s=i[t]),void 0===s)// Optimize the case of one listener. Don't need the extra array object.
s=i[t]=r,++e._eventsCount;else if("function"==typeof s?s=i[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),// Check for listener leak
(o=l(e))>0&&s.length>o&&!s.warned){s.warned=!0;// No error code for this since it is a Warning
// eslint-disable-next-line no-restricted-syntax
var o,i,s,a=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,console&&console.warn&&console.warn(a)}return e}function f(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=f.bind(n);return o.listener=r,n.wrapFn=o,o}function h(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):y(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(e,t){for(var r=Array(t),n=0;n<t;++n)r[n]=e[n];return r}function g(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else if("function"==typeof e.addEventListener)// EventEmitters, we do not listen for `error` events here.
e.addEventListener(t,function o(i){n.once&&e.removeEventListener(t,o),r(i)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),s.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;// If there is no 'error' event listener then throw.
if(n){if(t.length>0&&(s=t[0]),s instanceof Error)// up in Node's output if this results in an unhandled exception.
throw s;// Unhandled 'error' event
// At least give some kind of context to the user
var s,a=Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a;// Unhandled 'error' event
}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)o(u,this,t);else for(var l=u.length,c=y(u,l),r=0;r<l;++r)o(c[r],this,t);return!0},s.prototype.addListener=function(e,t){return c(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return c(this,e,t,!0)},s.prototype.once=function(e,t){return u(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,p(this,e,t)),this},// Emits a 'removeListener' event if and only if the listener was removed.
s.prototype.removeListener=function(e,t){var r,n,o,i,s;if(u(t),void 0===(n=this._events)||void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;// not listening for removeListener, no need to emit
if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;// emit removeListener for all listeners on all events
if(0==arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},s.prototype.listeners=function(e){return h(this,e,!0)},s.prototype.rawListeners=function(e){return h(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},s.prototype.listenerCount=d,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}),T.register("lLdQO",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.extractPublicKey=e.exports.recoverPersonalSignature=e.exports.personalSign=void 0;var r=T("3UOJ6"),n=T("2ztKZ");/**
 * Get the public key for the given signature and message.
 *
 * @param message - The message that was signed.
 * @param signature - The '0x'-prefixed hex encoded message signature.
 * @returns The public key of the signer.
 */function o(e,t){let o=(0,r.hashPersonalMessage)((0,n.legacyToBuffer)(e));return(0,n.recoverPublicKey)(o,t)}e.exports.personalSign=/**
 * Create an Ethereum-specific signature for a message.
 *
 * This function is equivalent to the `eth_sign` Ethereum JSON-RPC method as specified in EIP-1417,
 * as well as the MetaMask's `personal_sign` method.
 *
 * @param options - The personal sign options.
 * @param options.privateKey - The key to sign with.
 * @param options.data - The hex data to sign.
 * @returns The '0x'-prefixed hex encoded signature.
 */function({privateKey:e,data:t}){if((0,n.isNullish)(t))throw Error("Missing data parameter");if((0,n.isNullish)(e))throw Error("Missing privateKey parameter");let o=(0,n.legacyToBuffer)(t),i=(0,r.hashPersonalMessage)(o),s=(0,r.ecsign)(i,e),a=(0,n.concatSig)((0,r.toBuffer)(s.v),s.r,s.s);return a},e.exports.recoverPersonalSignature=/**
 * Recover the address of the account used to create the given Ethereum signature. The message
 * must have been signed using the `personalSign` function, or an equivalent function.
 *
 * @param options - The signature recovery options.
 * @param options.data - The hex data that was signed.
 * @param options.signature - The '0x'-prefixed hex encoded message signature.
 * @returns The '0x'-prefixed hex encoded address of the message signer.
 */function({data:e,signature:t}){if((0,n.isNullish)(e))throw Error("Missing data parameter");if((0,n.isNullish)(t))throw Error("Missing signature parameter");let i=o(e,t),s=(0,r.publicToAddress)(i),a=(0,r.bufferToHex)(s);return a},e.exports.extractPublicKey=/**
 * Recover the public key of the account used to create the given Ethereum signature. The message
 * must have been signed using the `personalSign` function, or an equivalent function.
 *
 * @param options - The public key recovery options.
 * @param options.data - The hex data that was signed.
 * @param options.signature - The '0x'-prefixed hex encoded message signature.
 * @returns The '0x'-prefixed hex encoded public key of the message signer.
 */function({data:e,signature:t}){if((0,n.isNullish)(e))throw Error("Missing data parameter");if((0,n.isNullish)(t))throw Error("Missing signature parameter");let r=o(e,t);return`0x${r.toString("hex")}`}}),T.register("3UOJ6",function(e,t){var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.toAscii=e.exports.stripHexPrefix=e.exports.padToEven=e.exports.isHexString=e.exports.isHexPrefixed=e.exports.getKeys=e.exports.getBinarySize=e.exports.fromUtf8=e.exports.fromAscii=e.exports.arrayContainsArray=void 0,/**
 * Constants
 */n(T("jAJUj"),e.exports),/**
 * Units helpers
 */n(T("5nkJQ"),e.exports),/**
 * Account class and helper functions
 */n(T("iEqpe"),e.exports),/**
 * Address type
 */n(T("2v25P"),e.exports),/**
 * Withdrawal type
 */n(T("26jpW"),e.exports),/**
 * ECDSA signature
 */n(T("1HjsM"),e.exports),/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */n(T("6z9tO"),e.exports),/**
 * Helpful TypeScript types
 */n(T("lwsBN"),e.exports),/**
 * Helper function for working with compact encoding
 */n(T("35c1o"),e.exports),/**
 * Export ethjs-util methods
 */n(T("baqEQ"),e.exports);var o=T("hLAiR");Object.defineProperty(e.exports,"arrayContainsArray",{enumerable:!0,get:function(){return o.arrayContainsArray}}),Object.defineProperty(e.exports,"fromAscii",{enumerable:!0,get:function(){return o.fromAscii}}),Object.defineProperty(e.exports,"fromUtf8",{enumerable:!0,get:function(){return o.fromUtf8}}),Object.defineProperty(e.exports,"getBinarySize",{enumerable:!0,get:function(){return o.getBinarySize}}),Object.defineProperty(e.exports,"getKeys",{enumerable:!0,get:function(){return o.getKeys}}),Object.defineProperty(e.exports,"isHexPrefixed",{enumerable:!0,get:function(){return o.isHexPrefixed}}),Object.defineProperty(e.exports,"isHexString",{enumerable:!0,get:function(){return o.isHexString}}),Object.defineProperty(e.exports,"padToEven",{enumerable:!0,get:function(){return o.padToEven}}),Object.defineProperty(e.exports,"stripHexPrefix",{enumerable:!0,get:function(){return o.stripHexPrefix}}),Object.defineProperty(e.exports,"toAscii",{enumerable:!0,get:function(){return o.toAscii}}),n(T("1XbFe"),e.exports),n(T("9JdfS"),e.exports)}),T.register("jAJUj",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.MAX_WITHDRAWALS_PER_PAYLOAD=e.exports.RLP_EMPTY_STRING=e.exports.KECCAK256_RLP=e.exports.KECCAK256_RLP_S=e.exports.KECCAK256_RLP_ARRAY=e.exports.KECCAK256_RLP_ARRAY_S=e.exports.KECCAK256_NULL=e.exports.KECCAK256_NULL_S=e.exports.TWO_POW256=e.exports.SECP256K1_ORDER_DIV_2=e.exports.SECP256K1_ORDER=e.exports.MAX_INTEGER_BIGINT=e.exports.MAX_INTEGER=e.exports.MAX_UINT64=void 0;var r=T("awmEs"),n=T("jf5pN");/**
 * 2^64-1
 */e.exports.MAX_UINT64=BigInt("0xffffffffffffffff"),/**
 * The max integer that the evm can handle (2^256-1)
 */e.exports.MAX_INTEGER=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),/**
 * The max integer that the evm can handle (2^256-1) as a bigint
 * 2^256-1 equals to 340282366920938463463374607431768211455
 * We use literal value instead of calculated value for compatibility issue.
 */e.exports.MAX_INTEGER_BIGINT=BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"),e.exports.SECP256K1_ORDER=n.secp256k1.CURVE.n,e.exports.SECP256K1_ORDER_DIV_2=n.secp256k1.CURVE.n/BigInt(2),/**
 * 2^256
 */e.exports.TWO_POW256=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"),/**
 * Keccak-256 hash of null
 */e.exports.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",/**
 * Keccak-256 hash of null
 */e.exports.KECCAK256_NULL=r.Buffer.from(e.exports.KECCAK256_NULL_S,"hex"),/**
 * Keccak-256 of an RLP of an empty array
 */e.exports.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",/**
 * Keccak-256 of an RLP of an empty array
 */e.exports.KECCAK256_RLP_ARRAY=r.Buffer.from(e.exports.KECCAK256_RLP_ARRAY_S,"hex"),/**
 * Keccak-256 hash of the RLP of null
 */e.exports.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",/**
 * Keccak-256 hash of the RLP of null
 */e.exports.KECCAK256_RLP=r.Buffer.from(e.exports.KECCAK256_RLP_S,"hex"),/**
 *  RLP encoded empty string
 */e.exports.RLP_EMPTY_STRING=r.Buffer.from([128]),e.exports.MAX_WITHDRAWALS_PER_PAYLOAD=16}),T.register("awmEs",function(e,t){i(e.exports,"Buffer",()=>r,e=>r=e),i(e.exports,"SlowBuffer",()=>n,e=>n=e),i(e.exports,"INSPECT_MAX_BYTES",()=>o,e=>o=e),i(e.exports,"kMaxLength",()=>s,e=>s=e);var r,n,o,s,a=T("cK8LV"),u=T("7y6mg");let l="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function c(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,f.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function f(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return d(e)}return p(e,t,r)}function p(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!f.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|m(e,t),n=c(r),o=n.write(e,t);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(H(e,Uint8Array)){let t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return y(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return f.from(n,t,r);let o=function(e){var t;if(f.isBuffer(e)){let t=0|b(e.length),r=c(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?c(0):y(e):"Buffer"===e.type&&Array.isArray(e.data)?y(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return f.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function h(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return h(e),c(e<0?0:0|b(e))}function y(e){let t=e.length<0?0:0|b(e.length),r=c(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function g(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),f.prototype),n)}function b(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function m(e,t){if(f.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(e).length;default:if(o)return n?-1:D(e).length// assume utf8
;t=(""+t).toLowerCase(),o=!0}}function v(e,t,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=z[e[n]];return o}(this,t,r);case"utf8":case"utf-8":return _(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":var o,i;return o=t,i=r,0===o&&i===this.length?a.fromByteArray(this):a.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function x(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function w(e,t,r,n,o){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=f.from(t,n)),f.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:E(e,t,r,n,o));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):E(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function E(e,t,r,n,o){let i,s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){let n=-1;for(i=r;i<a;i++)if(l(e,i)===l(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*s}else -1!==n&&(i-=i-n),n=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(l(e,i+n)!==l(t,n)){r=!1;break}if(r)return i}return -1}function _(e,t,r){r=Math.min(e.length,r);let n=[],o=t;for(;o<r;){let t=e[o],i=null,s=t>239?4:t>223?3:t>191?2:1;if(o+s<=r){let r,n,a,u;switch(s){case 1:t<128&&(i=t);break;case 2:(192&(r=e[o+1]))==128&&(u=(31&t)<<6|63&r)>127&&(i=u);break;case 3:r=e[o+1],n=e[o+2],(192&r)==128&&(192&n)==128&&(u=(15&t)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(i=u);break;case 4:r=e[o+1],n=e[o+2],a=e[o+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(i=u)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,s=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function S(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function A(e,t,r,n,o,i){if(!f.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function O(e,t,r,n,o){P(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function I(e,t,r,n,o){P(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function B(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function R(e,t,r,n,o){return t=+t,r>>>=0,o||B(e,t,r,4,34028234663852886e22,-34028234663852886e22),u.write(e,t,r,n,23,4),r+4}function k(e,t,r,n,o){return t=+t,r>>>=0,o||B(e,t,r,8,17976931348623157e292,-17976931348623157e292),u.write(e,t,r,n,52,8),r+8}r=f,n=function(e){return+e!=e&&(e=0),f.alloc(+e)},o=50,s=2147483647,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */f.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/f.from=function(e,t,r){return p(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/f.alloc=function(e,t,r){return(h(e),e<=0)?c(e):void 0!==t?"string"==typeof r?c(e).fill(t,r):c(e).fill(t):c(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */f.allocUnsafe=function(e){return d(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */f.allocUnsafeSlow=function(e){return d(e)},f.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==f.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},f.compare=function(e,t){if(H(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),H(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(e)||!f.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return f.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=f.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){let t=e[r];if(H(t,Uint8Array))o+t.length>n.length?(f.isBuffer(t)||(t=f.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else if(f.isBuffer(t))t.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=t.length}return n},f.byteLength=m,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
f.prototype._isBuffer=!0,f.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)x(this,t,t+1);return this},f.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},f.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)x(this,t,t+7),x(this,t+1,t+6),x(this,t+2,t+5),x(this,t+3,t+4);return this},f.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?_(this,0,e):v.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(e){if(!f.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===f.compare(this,e)},f.prototype.inspect=function(){let e="",t=o;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(f.prototype[l]=f.prototype.inspect),f.prototype.compare=function(e,t,r,n,o){if(H(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;let i=o-n,s=r-t,a=Math.min(i,s),u=this.slice(n,o),l=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==l[e]){i=u[e],s=l[e];break}return i<s?-1:s<i?1:0},f.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},f.prototype.indexOf=function(e,t,r){return w(this,e,t,r,!0)},f.prototype.lastIndexOf=function(e,t,r){return w(this,e,t,r,!1)},f.prototype.write=function(e,t,r,n){var o,i,s,a,u,l,c,f;// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let p=this.length-t;if((void 0===r||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let h=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let o;r=Number(r)||0;let i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;let s=t.length;for(n>s/2&&(n=s/2),o=0;o<n;++o){let n=parseInt(t.substr(2*o,2),16);if(n!=n)break;e[r+o]=n}return o}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,$(D(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=t,a=r,$(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,l=r,$(F(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=r,$(function(e,t){let r,n;let o=[];for(let i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-c),this,c,f);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,f.prototype),n)},f.prototype.readUintLE=f.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},f.prototype.readUintBE=f.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},f.prototype.readUint8=f.prototype.readUInt8=function(e,t){return e>>>=0,t||S(e,1,this.length),this[e]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(e,t){return e>>>=0,t||S(e,2,this.length),this[e]|this[e+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(e,t){return e>>>=0,t||S(e,2,this.length),this[e]<<8|this[e+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(e,t){return e>>>=0,t||S(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(e,t){return e>>>=0,t||S(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},f.prototype.readBigUInt64LE=q(function(e){j(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&U(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],o=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),f.prototype.readBigUInt64BE=q(function(e){j(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&U(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],o=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),f.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},f.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},f.prototype.readInt8=function(e,t){return(e>>>=0,t||S(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},f.prototype.readInt16LE=function(e,t){e>>>=0,t||S(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(e,t){e>>>=0,t||S(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(e,t){return e>>>=0,t||S(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},f.prototype.readInt32BE=function(e,t){return e>>>=0,t||S(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},f.prototype.readBigInt64LE=q(function(e){j(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&U(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),f.prototype.readBigInt64BE=q(function(e){j(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&U(e,this.length-8);let n=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),f.prototype.readFloatLE=function(e,t){return e>>>=0,t||S(e,4,this.length),u.read(this,e,!0,23,4)},f.prototype.readFloatBE=function(e,t){return e>>>=0,t||S(e,4,this.length),u.read(this,e,!1,23,4)},f.prototype.readDoubleLE=function(e,t){return e>>>=0,t||S(e,8,this.length),u.read(this,e,!0,52,8)},f.prototype.readDoubleBE=function(e,t){return e>>>=0,t||S(e,8,this.length),u.read(this,e,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;A(this,e,t,r,n,0)}let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;A(this,e,t,r,n,0)}let o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},f.prototype.writeUint8=f.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,1,255,0),this[t]=255&e,t+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeBigUInt64LE=q(function(e,t=0){return O(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeBigUInt64BE=q(function(e,t=0){return I(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);A(this,e,t,r,n-1,-n)}let o=0,i=1,s=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/i>>0)-s&255;return t+r},f.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);A(this,e,t,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/i>>0)-s&255;return t+r},f.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},f.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},f.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeBigInt64LE=q(function(e,t=0){return O(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeBigInt64BE=q(function(e,t=0){return I(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeFloatLE=function(e,t,r){return R(this,e,t,!0,r)},f.prototype.writeFloatBE=function(e,t,r){return R(this,e,t,!1,r)},f.prototype.writeDoubleLE=function(e,t,r){return k(this,e,t,!0,r)},f.prototype.writeDoubleBE=function(e,t,r){return k(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
f.prototype.copy=function(e,t,r,n){if(!f.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
f.prototype.fill=function(e,t,r,n){let o;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{let i=f.isBuffer(e)?e:f.from(e,n),s=i.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let N={};function C(e,t,r){N[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function L(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function P(e,t,r,n,o,i){if(e>r||e<t){let n;let o="bigint"==typeof t?"n":"";throw n=i>3?0===t||t===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${t}${o} and <= ${r}${o}`,new N.ERR_OUT_OF_RANGE("value",n,e)}j(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&U(o,n.length-(i+1))}function j(e,t){if("number"!=typeof e)throw new N.ERR_INVALID_ARG_TYPE(t,"number",e)}function U(e,t,r){if(Math.floor(e)!==e)throw j(e,r),new N.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new N.ERR_BUFFER_OUT_OF_BOUNDS;throw new N.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}C("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),C("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),C("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=L(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=L(o)),o+="n"),n+=` It must be ${t}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
let M=/[^+/0-9A-Za-z-_]/g;function D(e,t){let r;t=t||1/0;let n=e.length,o=null,i=[];for(let s=0;s<n;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function F(e){return a.toByteArray(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function $(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function H(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let z=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();// Return not function with Error if BigInt not supported
function q(e){return"undefined"==typeof BigInt?V:e}function V(){throw Error("BigInt not supported")}}),T.register("cK8LV",function(e,t){i(e.exports,"toByteArray",()=>r,e=>r=e),i(e.exports,"fromByteArray",()=>n,e=>n=e),r=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],i=n[1],u=new a((o+i)*3/4-i),l=0,c=i>0?o-4:o;for(r=0;r<c;r+=4)t=s[e.charCodeAt(r)]<<18|s[e.charCodeAt(r+1)]<<12|s[e.charCodeAt(r+2)]<<6|s[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;return 2===i&&(t=s[e.charCodeAt(r)]<<2|s[e.charCodeAt(r+1)]>>4,u[l++]=255&t),1===i&&(t=s[e.charCodeAt(r)]<<10|s[e.charCodeAt(r+1)]<<4|s[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t),u},n=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],s=0,a=r-n;s<a;s+=16383// must be multiple of 3
)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(o[(n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+o[n>>12&63]+o[n>>6&63]+o[63&n]);return i.join("")}(e,s,s+16383>a?a:s+16383));return 1===n?i.push(o[(t=e[r-1])>>2]+o[t<<4&63]+"=="):2===n&&i.push(o[(t=(e[r-2]<<8)+e[r-1])>>10]+o[t>>4&63]+o[t<<2&63]+"="),i.join("")};for(var r,n,o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,c=u.length;l<c;++l)o[l]=u[l],s[u.charCodeAt(l)]=l;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63}),T.register("7y6mg",function(e,t){var r,n;i(e.exports,"read",()=>r,e=>r=e),i(e.exports,"write",()=>n,e=>n=e),r=function(e,t,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,c=-7,f=r?o-1:0,p=r?-1:1,h=e[t+f];for(f+=p,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+e[t+f],f+=p,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+e[t+f],f+=p,c-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:(h?-1:1)*(1/0);s+=Math.pow(2,n),i-=l}return(h?-1:1)*s*Math.pow(2,i-n)},n=function(e,t,r,n,o,i){var s,a,u,l=8*i-o-1,c=(1<<l)-1,f=c>>1,p=23===o?5960464477539062e-23:0,h=n?0:i-1,d=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+f>=1?t+=p/u:t+=p*Math.pow(2,1-f),t*u>=2&&(s++,u/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(t*u-1)*Math.pow(2,o),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;e[r+h]=255&a,h+=d,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;e[r+h]=255&s,h+=d,s/=256,l-=8);e[r+h-d]|=128*y}}),T.register("jf5pN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.secp256k1=void 0;var r=T("lLYmq");Object.defineProperty(e.exports,"secp256k1",{enumerable:!0,get:function(){return r.secp256k1}})}),T.register("lLYmq",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.encodeToCurve=e.exports.hashToCurve=e.exports.schnorr=e.exports.secp256k1=void 0;var r=T("3TSYP"),n=T("QYWsb"),o=T("aBjiN"),i=T("7fDgO"),s=T("kUVyL"),a=T("lrpcj"),u=T("gvEil");let l=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),c=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),f=BigInt(1),p=BigInt(2),h=(e,t)=>(e+t/p)/t;/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */function d(e){// prettier-ignore
let t=BigInt(3),r=BigInt(6),n=BigInt(11),i=BigInt(22),s=BigInt(23),a=BigInt(44),u=BigInt(88),c=e*e*e%l,f=c*c*e%l,h=(0,o.pow2)(f,t,l)*f%l,d=(0,o.pow2)(h,t,l)*f%l,g=(0,o.pow2)(d,p,l)*c%l,b=(0,o.pow2)(g,n,l)*g%l,m=(0,o.pow2)(b,i,l)*b%l,v=(0,o.pow2)(m,a,l)*m%l,x=(0,o.pow2)(v,u,l)*v%l,w=(0,o.pow2)(x,a,l)*m%l,E=(0,o.pow2)(w,t,l)*f%l,_=(0,o.pow2)(E,s,l)*b%l,S=(0,o.pow2)(_,r,l)*c%l,A=(0,o.pow2)(S,p,l);if(!y.eql(y.sqr(A),e))throw Error("Cannot find square root");return A}let y=(0,o.Field)(l,void 0,void 0,{sqrt:d});e.exports.secp256k1=(0,u.createCurve)({a:BigInt(0),b:BigInt(7),Fp:y,n:c,// Base point (x, y) aka generator point
Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,/**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{let t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-f*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=BigInt("0x100000000000000000000000000000000"),s=h(t*e,c),a=h(-r*e,c),u=(0,o.mod)(e-s*t-a*n,c),l=(0,o.mod)(-s*r-a*t,c),p=u>i,d=l>i;if(p&&(u=c-u),d&&(l=c-l),u>i||l>i)throw Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:p,k1:u,k2neg:d,k2:l}}}},r.sha256);// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
let g=BigInt(0),b=e=>"bigint"==typeof e&&g<e&&e<l,m=e=>"bigint"==typeof e&&g<e&&e<c,v={};function x(e,...t){let n=v[e];if(void 0===n){let t=(0,r.sha256)(Uint8Array.from(e,e=>e.charCodeAt(0)));n=(0,s.concatBytes)(t,t),v[e]=n}return(0,r.sha256)((0,s.concatBytes)(n,...t))}// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
let w=e=>e.toRawBytes(!0).slice(1),E=e=>(0,s.numberToBytesBE)(e,32),_=e=>(0,o.mod)(e,l),S=e=>(0,o.mod)(e,c),A=e.exports.secp256k1.ProjectivePoint,O=(e,t,r)=>A.BASE.multiplyAndAddUnsafe(e,t,r);// Calculate point, scalar and bytes
function I(t){let r=e.exports.secp256k1.utils.normPrivateKeyToScalar(t),n=A.fromPrivateKey(r),o=n.hasEvenY()?r:S(-r);// same method executed in fromPrivateKey
return{scalar:o,bytes:w(n)}}/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */function B(e){if(!b(e))throw Error("bad x: need 0 < x < p");// Fail if x ≥ p.
let t=_(e*e),r=_(t*e+BigInt(7)),n=d(r);n%p!==g&&(n=_(-n));let o=new A(e,n,f);// y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
return o.assertValidity(),o}/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */function R(...e){return S((0,s.bytesToNumberBE)(x("BIP0340/challenge",...e)))}/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */function k(e,t,r){let n=(0,s.ensureBytes)("signature",e,64),o=(0,s.ensureBytes)("message",t),i=(0,s.ensureBytes)("publicKey",r,32);try{let e=B((0,s.bytesToNumberBE)(i)),t=(0,s.bytesToNumberBE)(n.subarray(0,32));// P = lift_x(int(pk)); fail if that fails
if(!b(t))return!1;let r=(0,s.bytesToNumberBE)(n.subarray(32,64));// Let s = int(sig[32:64]); fail if s ≥ n.
if(!m(r))return!1;let a=R(E(t),w(e),o),u=O(e,r,S(-a));// int(challenge(bytes(r)||bytes(P)||m))%n
if(!u||!u.hasEvenY()||u.toAffine().x!==t)return!1;// -eP == (n-e)P
return!0;// Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
}catch(e){return!1}}e.exports.schnorr={getPublicKey:/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */function(e){return I(e).bytes;// d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
},sign:/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */function(e,t,r=(0,n.randomBytes)(32)){let o=(0,s.ensureBytes)("message",e),{bytes:i,scalar:a}=I(t),u=(0,s.ensureBytes)("auxRand",r,32),l=E(a^(0,s.bytesToNumberBE)(x("BIP0340/aux",u))),c=x("BIP0340/nonce",l,i,o),f=S((0,s.bytesToNumberBE)(c));if(f===g)throw Error("sign failed: k is zero");// Fail if k' = 0.
let{bytes:p,scalar:h}=I(f),d=R(p,i,o),y=new Uint8Array(64);// Let R = k'⋅G.
// If Verify(bytes(P), m, sig) (see below) returns failure, abort
if(y.set(p,0),y.set(E(S(h+d*a)),32),!k(y,o,i))throw Error("sign: Invalid signature produced");return y},verify:k,utils:{randomPrivateKey:e.exports.secp256k1.utils.randomPrivateKey,lift_x:B,pointToBytes:w,numberToBytesBE:s.numberToBytesBE,bytesToNumberBE:s.bytesToNumberBE,taggedHash:x,mod:o.mod}};let N=(0,a.isogenyMap)(y,[// xNum
["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],// xDen
["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],// yNum
["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],// yDen
["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(e=>BigInt(e)))),C=(0,i.mapToCurveSimpleSWU)(y,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:y.create(BigInt("-11"))}),L=(0,a.createHasher)(e.exports.secp256k1.ProjectivePoint,e=>{let{x:t,y:r}=C(y.create(e[0]));return N(t,r)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:y.ORDER,m:1,k:128,expand:"xmd",hash:r.sha256});e.exports.hashToCurve=L.hashToCurve,e.exports.encodeToCurve=L.encodeToCurve}),T.register("3TSYP",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.sha224=e.exports.sha256=void 0;var r=T("hnejI"),n=T("QYWsb");// Choice: a ? b : c
let o=(e,t,r)=>e&t^~e&r,i=(e,t,r)=>e&t^e&r^t&r,s=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),u=new Uint32Array(64);class l extends r.SHA2{constructor(){super(64,32,8,!1),// We cannot use array here since array allows indexing by variable
// which means optimizer/compiler cannot use registers.
this.A=0|a[0],this.B=0|a[1],this.C=0|a[2],this.D=0|a[3],this.E=0|a[4],this.F=0|a[5],this.G=0|a[6],this.H=0|a[7]}get(){let{A:e,B:t,C:r,D:n,E:o,F:i,G:s,H:a}=this;return[e,t,r,n,o,i,s,a]}// prettier-ignore
set(e,t,r,n,o,i,s,a){this.A=0|e,this.B=0|t,this.C=0|r,this.D=0|n,this.E=0|o,this.F=0|i,this.G=0|s,this.H=0|a}process(e,t){// Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
for(let r=0;r<16;r++,t+=4)u[r]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=u[e-15],r=u[e-2],o=(0,n.rotr)(t,7)^(0,n.rotr)(t,18)^t>>>3,i=(0,n.rotr)(r,17)^(0,n.rotr)(r,19)^r>>>10;u[e]=i+u[e-7]+o+u[e-16]|0}// Compression function main loop, 64 rounds
let{A:r,B:a,C:l,D:c,E:f,F:p,G:h,H:d}=this;for(let e=0;e<64;e++){let t=(0,n.rotr)(f,6)^(0,n.rotr)(f,11)^(0,n.rotr)(f,25),y=d+t+o(f,p,h)+s[e]+u[e]|0,g=(0,n.rotr)(r,2)^(0,n.rotr)(r,13)^(0,n.rotr)(r,22),b=g+i(r,a,l)|0;d=h,h=p,p=f,f=c+y|0,c=l,l=a,a=r,r=y+b|0}// Add the compressed chunk to the current hash value
r=r+this.A|0,a=a+this.B|0,l=l+this.C|0,c=c+this.D|0,f=f+this.E|0,p=p+this.F|0,h=h+this.G|0,d=d+this.H|0,this.set(r,a,l,c,f,p,h,d)}roundClean(){u.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class c extends l{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */e.exports.sha256=(0,n.wrapConstructor)(()=>new l),e.exports.sha224=(0,n.wrapConstructor)(()=>new c)}),T.register("hnejI",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.SHA2=void 0;var r=T("luklz"),n=T("QYWsb");// Base SHA2 class (RFC 6234)
class o extends n.Hash{constructor(e,t,r,o){super(),this.blockLen=e,this.outputLen=t,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,n.createView)(this.buffer)}update(e){r.default.exists(this);let{view:t,buffer:o,blockLen:i}=this;e=(0,n.toBytes)(e);let s=e.length;for(let r=0;r<s;){let a=Math.min(i-this.pos,s-r);// Fast path: we have at least one block in input, cast it to view and process
if(a===i){let t=(0,n.createView)(e);for(;i<=s-r;r+=i)this.process(t,r);continue}o.set(e.subarray(r,r+a),this.pos),this.pos+=a,r+=a,this.pos===i&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){r.default.exists(this),r.default.output(e,this),this.finished=!0;// Padding
// We can avoid allocation of buffer for padding completely if it
// was previously not allocated here. But it won't change performance.
let{buffer:t,view:o,blockLen:i,isLE:s}=this,{pos:a}=this;// append the bit '1' to the message
t[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>i-a&&(this.process(o,0),a=0);// Pad until full block byte with zeros
for(let e=a;e<i;e++)t[e]=0;// Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
// You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
// So we just write lowest 64 bits of that value.
// Polyfill for Safari 14
(function(e,t,r,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,r,n);let o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i),u=n?4:0,l=n?0:4;e.setUint32(t+u,s,n),e.setUint32(t+l,a,n)})(o,i-8,BigInt(8*this.length),s),this.process(o,0);let u=(0,n.createView)(e),l=this.outputLen;// NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
if(l%4)throw Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,f=this.get();if(c>f.length)throw Error("_sha2: outputLen bigger than state");for(let e=0;e<c;e++)u.setUint32(4*e,f[e],s)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let r=e.slice(0,t);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:r,length:n,finished:o,destroyed:i,pos:s}=this;return e.length=n,e.pos=s,e.finished=o,e.destroyed=i,n%t&&e.buffer.set(r),e}}e.exports.SHA2=o}),T.register("luklz",function(e,t){function r(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e){if("boolean"!=typeof e)throw Error(`Expected boolean, not ${e}`)}function o(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function i(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");r(e.outputLen),r(e.blockLen)}function s(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function a(e,t){o(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.output=e.exports.exists=e.exports.hash=e.exports.bytes=e.exports.bool=e.exports.number=void 0,e.exports.number=r,e.exports.bool=n,e.exports.bytes=o,e.exports.hash=i,e.exports.exists=s,e.exports.output=a,e.exports.default={number:r,bool:n,bytes:o,hash:i,exists:s,output:a}}),T.register("QYWsb",function(e,t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.randomBytes=e.exports.wrapXOFConstructorWithOpts=e.exports.wrapConstructorWithOpts=e.exports.wrapConstructor=e.exports.checkOpts=e.exports.Hash=e.exports.concatBytes=e.exports.toBytes=e.exports.utf8ToBytes=e.exports.asyncLoop=e.exports.nextTick=e.exports.hexToBytes=e.exports.bytesToHex=e.exports.isLE=e.exports.rotr=e.exports.createView=e.exports.u32=e.exports.u8=void 0;var r=T("4ycLY");let n=e=>e instanceof Uint8Array;if(e.exports.u8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),e.exports.u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),e.exports.createView=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),e.exports.rotr=(e,t)=>e<<32-t|e>>>t,// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
e.exports.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.exports.isLE)throw Error("Non little-endian hardware is not supported");let o=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));e.exports.bytesToHex=/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */function(e){if(!n(e))throw Error("Uint8Array expected");// pre-caching improves the speed 6x
let t="";for(let r=0;r<e.length;r++)t+=o[e[r]];return t},e.exports.hexToBytes=/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(t/2);for(let t=0;t<r.length;t++){let n=2*t,o=e.slice(n,n+2),i=Number.parseInt(o,16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[t]=i}return r};// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
let i=async()=>{};// Returns control to thread each 'tick' ms to avoid blocking
async function s(t,r,n){let o=Date.now();for(let i=0;i<t;i++){n(i);// Date.now() is not monotonic, so in case if clock goes backwards we return return control too
let t=Date.now()-o;t>=0&&t<r||(await (0,e.exports.nextTick)(),o+=t)}}/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */function a(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e));// https://bugzil.la/1681809
}/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */function u(e){if("string"==typeof e&&(e=a(e)),!n(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}e.exports.nextTick=i,e.exports.asyncLoop=s,e.exports.utf8ToBytes=a,e.exports.toBytes=u,e.exports.concatBytes=/**
 * Copies several Uint8Arrays into one.
 */function(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!n(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t},e.exports.Hash=// For runtime check if class implements interface
class{// Safe version that clones internal state
clone(){return this._cloneInto()}};// Check if object doens't have custom constructor (like Uint8Array/Array)
let l=e=>"[object Object]"===Object.prototype.toString.call(e)&&e.constructor===Object;e.exports.checkOpts=function(e,t){if(void 0!==t&&("object"!=typeof t||!l(t)))throw Error("Options should be object or undefined");let r=Object.assign(e,t);return r},e.exports.wrapConstructor=function(e){let t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t},e.exports.wrapConstructorWithOpts=function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},e.exports.wrapXOFConstructorWithOpts=function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},e.exports.randomBytes=/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */function(e=32){if(r.crypto&&"function"==typeof r.crypto.getRandomValues)return r.crypto.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}}),T.register("4ycLY",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.crypto=void 0,e.exports.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0}),T.register("aBjiN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hashToPrivateScalar=e.exports.FpSqrtEven=e.exports.FpSqrtOdd=e.exports.Field=e.exports.nLength=e.exports.FpIsSquare=e.exports.FpDiv=e.exports.FpInvertBatch=e.exports.FpPow=e.exports.validateField=e.exports.isNegativeLE=e.exports.FpSqrt=e.exports.tonelliShanks=e.exports.invert=e.exports.pow2=e.exports.pow=e.exports.mod=void 0;var r=T("kUVyL");// prettier-ignore
let n=BigInt(0),o=BigInt(1),i=BigInt(2),s=BigInt(3),a=BigInt(4),u=BigInt(5),l=BigInt(8);// Calculates a modulo b
function c(e,t){let r=e%t;return r>=n?r:t+r}/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */// TODO: use field version && remove
function f(e,t,r){if(r<=n||t<n)throw Error("Expected power/modulo > 0");if(r===o)return n;let i=o;for(;t>n;)t&o&&(i=i*e%r),e=e*e%r,t>>=o;return i}// Inverses number over modulo
function p(e,t){if(e===n||t<=n)throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);// Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
// Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
let r=c(e,t),i=t,s=n,a=o,u=o,l=n;for(;r!==n;){// JIT applies optimization if those two lines follow each other
let e=i/r,t=i%r,n=s-u*e,o=a-l*e;// prettier-ignore
i=r,r=t,s=u,a=l,u=n,l=o}let f=i;if(f!==o)throw Error("invert: does not exist");return c(s,t)}// Tonelli-Shanks algorithm
// Paper 1: https://eprint.iacr.org/2012/685.pdf (page 12)
// Paper 2: Square Roots from 1; 24, 51, 10 to Dan Shanks
function h(e){let t,r,s;// Legendre constant: used to calculate Legendre symbol (a | p),
// which denotes the value of a^((p-1)/2) (mod p).
// (a | p) ≡ 1    if a is a square (mod p)
// (a | p) ≡ -1   if a is not a square (mod p)
// (a | p) ≡ 0    if a ≡ 0 (mod p)
let u=(e-o)/i;// Step 1: By factoring out powers of 2 from p - 1,
// find q and s such that p - 1 = q*(2^s) with q odd
for(t=e-o,r=0;t%i===n;t/=i,r++);// Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
for(s=i;s<e&&f(s,u,e)!==e-o;s++);// Fast-path
if(1===r){let t=(e+o)/a;return function(e,r){let n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw Error("Cannot find square root");return n}}// Slow-path
let l=(t+o)/i;return function(e,n){// Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
if(e.pow(n,u)===e.neg(e.ONE))throw Error("Cannot find square root");let i=r,a=e.pow(e.mul(e.ONE,s),t),c=e.pow(n,l),f=e.pow(n,t);for(;!e.eql(f,e.ONE);){if(e.eql(f,e.ZERO))return e.ZERO;// https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
// Find m such b^(2^m)==1
let t=1;for(let r=e.sqr(f);t<i&&!e.eql(r,e.ONE);t++)r=e.sqr(r);// t2 *= t2
// NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
let r=e.pow(a,o<<BigInt(i-t-1));// ge = 2^(r-m-1)
a=e.sqr(r),c=e.mul(c,r),f=e.mul(f,a),i=t}return c}}function d(e){// NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
// For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
// P ≡ 3 (mod 4)
// √n = n^((P+1)/4)
if(e%a===s){// Not all roots possible!
// const ORDER =
//   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
// const NUM = 72057594037927816n;
let t=(e+o)/a;return function(e,r){let n=e.pow(r,t);// Throw if root**2 != n
if(!e.eql(e.sqr(n),r))throw Error("Cannot find square root");return n}}// Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
if(e%l===u){let t=(e-u)/l;return function(e,r){let n=e.mul(r,i),o=e.pow(n,t),s=e.mul(r,o),a=e.mul(e.mul(s,i),o),u=e.mul(s,e.sub(a,e.ONE));if(!e.eql(e.sqr(u),r))throw Error("Cannot find square root");return u}}// Other cases: Tonelli-Shanks algorithm
return h(e)}BigInt(9),BigInt(16),e.exports.mod=c,e.exports.pow=f,e.exports.pow2=// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function(e,t,r){let o=e;for(;t-- >n;)o*=o,o%=r;return o},e.exports.invert=p,e.exports.tonelliShanks=h,e.exports.FpSqrt=d,e.exports.isNegativeLE=(e,t)=>(c(e,t)&o)===o;// prettier-ignore
let y=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];// Generic field functions
function g(e,t,r){// Should have same speed as pow for bigints
// TODO: benchmark!
if(r<n)throw Error("Expected power > 0");if(r===n)return e.ONE;if(r===o)return t;let i=e.ONE,s=t;for(;r>n;)r&o&&(i=e.mul(i,s)),s=e.sqr(s),r>>=o;return i}// 0 is non-invertible: non-batched version will throw on 0
function b(e,t){let r=Array(t.length),n=t.reduce((t,n,o)=>e.is0(n)?t:(r[o]=t,e.mul(t,n)),e.ONE),o=e.inv(n);return(// Walk from last to first, multiply them by inverted each other MOD p
t.reduceRight((t,n,o)=>e.is0(n)?t:(r[o]=e.mul(t,r[o]),e.mul(t,n)),o),r)}// CURVE.n lengths
function m(e,t){// Bit size, byte size of CURVE.n
let r=void 0!==t?t:e.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}e.exports.validateField=function(e){let t=y.reduce((e,t)=>(e[t]="function",e),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});return(0,r.validateObject)(e,t)},e.exports.FpPow=g,e.exports.FpInvertBatch=b,e.exports.FpDiv=function(e,t,r){return e.mul(t,"bigint"==typeof r?p(r,e.ORDER):e.inv(r))},e.exports.FpIsSquare=// This function returns True whenever the value x is a square in the field F.
function(e){let t=(e.ORDER-o)/i;// Integer arithmetic
return r=>{let n=e.pow(r,t);return e.eql(n,e.ZERO)||e.eql(n,e.ONE)}},e.exports.nLength=m,e.exports.Field=/**
 * Initializes a galois field over prime. Non-primes are not supported for now.
 * Do not init in loop: slow. Very fragile: always run a benchmark on change.
 * Major performance gains:
 * a) non-normalized operations like mulN instead of mul
 * b) `Object.freeze`
 * c) Same object shape: never add or remove keys
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */function(e,t,i=!1,s={}){if(e<=n)throw Error(`Expected Fp ORDER > 0, got ${e}`);let{nBitLength:a,nByteLength:u}=m(e,t);if(u>2048)throw Error("Field lengths over 2048 bytes are not supported");let l=d(e),f=Object.freeze({ORDER:e,BITS:a,BYTES:u,MASK:(0,r.bitMask)(a),ZERO:n,ONE:o,create:t=>c(t,e),isValid:t=>{if("bigint"!=typeof t)throw Error(`Invalid field element: expected bigint, got ${typeof t}`);return n<=t&&t<e;// 0 is valid element, but it's not invertible
},is0:e=>e===n,isOdd:e=>(e&o)===o,neg:t=>c(-t,e),eql:(e,t)=>e===t,sqr:t=>c(t*t,e),add:(t,r)=>c(t+r,e),sub:(t,r)=>c(t-r,e),mul:(t,r)=>c(t*r,e),pow:(e,t)=>g(f,e,t),div:(t,r)=>c(t*p(r,e),e),// Same as above, but doesn't normalize
sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>p(t,e),sqrt:s.sqrt||(e=>l(f,e)),invertBatch:e=>b(f,e),// TODO: do we really need constant cmov?
// We don't have const-time bigints anyway, so probably will be not very useful
cmov:(e,t,r)=>r?t:e,toBytes:e=>i?(0,r.numberToBytesLE)(e,u):(0,r.numberToBytesBE)(e,u),fromBytes:e=>{if(e.length!==u)throw Error(`Fp.fromBytes: expected ${u}, got ${e.length}`);return i?(0,r.bytesToNumberLE)(e):(0,r.bytesToNumberBE)(e)}});return Object.freeze(f)},e.exports.FpSqrtOdd=function(e,t){if(!e.isOdd)throw Error("Field doesn't have isOdd");let r=e.sqrt(t);return e.isOdd(r)?r:e.neg(r)},e.exports.FpSqrtEven=function(e,t){if(!e.isOdd)throw Error("Field doesn't have isOdd");let r=e.sqrt(t);return e.isOdd(r)?e.neg(r):r},e.exports.hashToPrivateScalar=/**
 * FIPS 186 B.4.1-compliant "constant-time" private key generation utility.
 * Can take (n+8) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 40 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. curveFn.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */function(e,t,n=!1){e=(0,r.ensureBytes)("privateHash",e);let i=e.length,s=m(t).nByteLength+8;if(s<24||i<s||i>1024)throw Error(`hashToPrivateScalar: expected ${s}-1024 bytes of input, got ${i}`);let a=n?(0,r.bytesToNumberLE)(e):(0,r.bytesToNumberBE)(e);return c(a,t-o)+o}}),T.register("kUVyL",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.validateObject=e.exports.createHmacDrbg=e.exports.bitMask=e.exports.bitSet=e.exports.bitGet=e.exports.bitLen=e.exports.utf8ToBytes=e.exports.equalBytes=e.exports.concatBytes=e.exports.ensureBytes=e.exports.numberToVarBytesBE=e.exports.numberToBytesLE=e.exports.numberToBytesBE=e.exports.bytesToNumberLE=e.exports.bytesToNumberBE=e.exports.hexToBytes=e.exports.hexToNumber=e.exports.numberToHexUnpadded=e.exports.bytesToHex=void 0;/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
let r=BigInt(0),n=BigInt(1),o=BigInt(2),i=e=>e instanceof Uint8Array,s=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */function a(e){if(!i(e))throw Error("Uint8Array expected");// pre-caching improves the speed 6x
let t="";for(let r=0;r<e.length;r++)t+=s[e[r]];return t}function u(e){let t=e.toString(16);return 1&t.length?`0${t}`:t}function l(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);// Big Endian
return BigInt(""===e?"0":`0x${e}`)}/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */function c(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(t/2);for(let t=0;t<r.length;t++){let n=2*t,o=e.slice(n,n+2),i=Number.parseInt(o,16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[t]=i}return r}function f(e,t){return c(e.toString(16).padStart(2*t,"0"))}/**
 * Copies several Uint8Arrays into one.
 */function p(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!i(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t}e.exports.bytesToHex=a,e.exports.numberToHexUnpadded=u,e.exports.hexToNumber=l,e.exports.hexToBytes=c,e.exports.bytesToNumberBE=// BE: Big Endian, LE: Little Endian
function(e){return l(a(e))},e.exports.bytesToNumberLE=function(e){if(!i(e))throw Error("Uint8Array expected");return l(a(Uint8Array.from(e).reverse()))},e.exports.numberToBytesBE=f,e.exports.numberToBytesLE=function(e,t){return f(e,t).reverse()},e.exports.numberToVarBytesBE=// Unpadded, rarely used
function(e){return c(u(e))},e.exports.ensureBytes=/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */function(e,t,r){let n;if("string"==typeof t)try{n=c(t)}catch(r){throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)}else if(i(t))// is instance of Uint8Array, and its slice() creates **mutable** copy
n=Uint8Array.from(t);else throw Error(`${e} must be hex string or Uint8Array`);let o=n.length;if("number"==typeof r&&o!==r)throw Error(`${e} expected ${r} bytes, got ${o}`);return n},e.exports.concatBytes=p,e.exports.equalBytes=function(e,t){// We don't care about timing attacks here
if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0},e.exports.utf8ToBytes=/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e));// https://bugzil.la/1681809
},e.exports.bitLen=// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */function(e){let t;for(t=0;e>r;e>>=n,t+=1);return t},e.exports.bitGet=/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */function(e,t){return e>>BigInt(t)&n},e.exports.bitSet=(e,t,o)=>e|(o?n:r)<<BigInt(t),e.exports.bitMask=e=>(o<<BigInt(e-1))-n;// DRBG
let h=e=>new Uint8Array(e),d=e=>Uint8Array.from(e);// creates Uint8Array
e.exports.createHmacDrbg=/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */function(e,t,r){if("number"!=typeof e||e<2)throw Error("hashLen must be a number");if("number"!=typeof t||t<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");// Step B, Step C: set hashLen to 8*ceil(hlen/8)
let n=h(e),o=h(e),i=0,s=()=>{n.fill(1),o.fill(0),i=0},a=(...e)=>r(o,n,...e),u=(e=h())=>{// HMAC-DRBG reseed() function. Steps D-G
o=a(d([0]),e),n=a(),0!==e.length&&(o=a(d([1]),e),n=a())},l=()=>{// HMAC-DRBG generate() function
if(i++>=1e3)throw Error("drbg: tried 1000 values");let e=0,r=[];for(;e<t;){n=a();let t=n.slice();r.push(t),e+=n.length}return p(...r)};// Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
return(e,t)=>{let r;for(s(),u(e);!(r=t(l()));)u();return s(),r}};// Validating curves and fields
let y={bigint:e=>"bigint"==typeof e,function:e=>"function"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"==typeof e&&Number.isSafeInteger(e.outputLen)};e.exports.validateObject=// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function(e,t,r={}){let n=(t,r,n)=>{let o=y[r];if("function"!=typeof o)throw Error(`Invalid validator "${r}", expected function`);let i=e[t];if((!n||void 0!==i)&&!o(i,e))throw Error(`Invalid param ${String(t)}=${i} (${typeof i}), expected ${r}`)};for(let[e,r]of Object.entries(t))n(e,r,!1);for(let[e,t]of Object.entries(r))n(e,t,!0);return e};// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
}),T.register("7fDgO",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.mapToCurveSimpleSWU=e.exports.SWUFpSqrtRatio=e.exports.weierstrass=e.exports.weierstrassPoints=e.exports.DER=void 0;var r=T("aBjiN"),n=(T("kUVyL"),T("kUVyL")),o=T("b43cJ");// ASN.1 DER encoding utilities
let{bytesToNumberBE:i,hexToBytes:s}=n;e.exports.DER={// asn.1 DER encoding utils
Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){let{Err:r}=e.exports.DER;if(t.length<2||2!==t[0])throw new r("Invalid signature integer tag");let n=t[1],o=t.subarray(2,n+2);if(!n||o.length!==n)throw new r("Invalid signature integer: wrong length");// https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
// since we always use positive integers here. It must always be empty:
// - add zero byte if exists
// - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
if(128&o[0])throw new r("Invalid signature integer: negative");if(0===o[0]&&!(128&o[1]))throw new r("Invalid signature integer: unnecessary leading zero");return{d:i(o),l:t.subarray(n+2)};// d is data, l is left
},toSig(t){// parse DER signature
let{Err:r}=e.exports.DER,n="string"==typeof t?s(t):t;if(!(n instanceof Uint8Array))throw Error("ui8a expected");let o=n.length;if(o<2||48!=n[0])throw new r("Invalid signature tag");if(n[1]!==o-2)throw new r("Invalid signature: incorrect length");let{d:i,l:a}=e.exports.DER._parseInt(n.subarray(2)),{d:u,l:l}=e.exports.DER._parseInt(a);if(l.length)throw new r("Invalid signature: left bytes after parsing");return{r:i,s:u}},hexFromSig(e){// Add leading zero if first byte has negative bit enabled. More details in '_parseInt'
let t=e=>8&Number.parseInt(e[0],16)?"00"+e:e,r=e=>{let t=e.toString(16);return 1&t.length?`0${t}`:t},n=t(r(e.s)),o=t(r(e.r)),i=n.length/2,s=o.length/2,a=r(i),u=r(s);return`30${r(s+i+4)}02${u}${o}02${a}${n}`}};// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
let a=BigInt(0),u=BigInt(1),l=BigInt(2),c=BigInt(3),f=BigInt(4);function p(e){let t=function(e){let t=(0,o.validateBasic)(e);n.validateObject(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:i,a:s}=t;if(r){if(!i.eql(s,i.ZERO))throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}(e),{Fp:i}=t,s=t.toBytes||((e,t,r)=>{let o=t.toAffine();return n.concatBytes(Uint8Array.from([4]),i.toBytes(o.x),i.toBytes(o.y))}),l=t.fromBytes||(e=>{// const head = bytes[0];
let t=e.subarray(1),r=i.fromBytes(t.subarray(0,i.BYTES)),n=i.fromBytes(t.subarray(i.BYTES,2*i.BYTES));return{x:r,y:n}});/**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */function f(e){let{a:r,b:n}=t,o=i.sqr(e),s=i.mul(o,e);return i.add(i.add(s,i.mul(e,r)),n);// x3 + a * x + b
}// Validate whether the passed curve params are valid.
// We check if curve equation works for generator point.
// `assertValidity()` won't work: `isTorsionFree()` is not available at this point in bls12-381.
// ProjectivePoint class has not been initialized yet.
if(!i.eql(i.sqr(t.Gy),f(t.Gx)))throw Error("bad generator point: equation left != right");// Valid group elements reside in range 1..n-1
function p(e){return"bigint"==typeof e&&a<e&&e<t.n}function h(e){if(!p(e))throw Error("Expected valid bigint: 0 < bigint < curve.n")}// Validates if priv key is valid and converts it to bigint.
// Supports options allowedPrivateKeyLengths and wrapPrivateKey.
function d(e){let o;let{allowedPrivateKeyLengths:i,nByteLength:s,wrapPrivateKey:a,n:u}=t;if(i&&"bigint"!=typeof e){// Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
if(e instanceof Uint8Array&&(e=n.bytesToHex(e)),"string"!=typeof e||!i.includes(e.length))throw Error("Invalid key");e=e.padStart(2*s,"0")}try{o="bigint"==typeof e?e:n.bytesToNumberBE((0,n.ensureBytes)("private key",e,s))}catch(t){throw Error(`private key must be ${s} bytes, hex or bigint, not ${typeof e}`)}return a&&(o=r.mod(o,u)),h(o),o}let y=new Map;function g(e){if(!(e instanceof b))throw Error("ProjectivePoint expected")}/**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */class b{constructor(e,t,r){if(this.px=e,this.py=t,this.pz=r,null==e||!i.isValid(e))throw Error("x required");if(null==t||!i.isValid(t))throw Error("y required");if(null==r||!i.isValid(r))throw Error("z required")}// Does not validate if the point is on-curve.
// Use fromHex instead, or call assertValidity() later.
static fromAffine(e){let{x:t,y:r}=e||{};if(!e||!i.isValid(t)||!i.isValid(r))throw Error("invalid affine point");if(e instanceof b)throw Error("projective point not allowed");let n=e=>i.eql(e,i.ZERO);return(// fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
n(t)&&n(r)?b.ZERO:new b(t,r,i.ONE))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}/**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */static normalizeZ(e){let t=i.invertBatch(e.map(e=>e.pz));return e.map((e,r)=>e.toAffine(t[r])).map(b.fromAffine)}/**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */static fromHex(e){let t=b.fromAffine(l((0,n.ensureBytes)("pointHex",e)));return t.assertValidity(),t}// Multiplies generator point by privateKey.
static fromPrivateKey(e){return b.BASE.multiply(d(e))}// "Private method", don't use it directly
_setWindowSize(e){this._WINDOW_SIZE=e,y.delete(this)}// A point on curve is valid if it conforms to equation.
assertValidity(){// Zero is valid point too!
if(this.is0()){if(t.allowInfinityPoint)return;throw Error("bad point: ZERO")}// Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
let{x:e,y:r}=this.toAffine();// Check if x, y are valid field elements
if(!i.isValid(e)||!i.isValid(r))throw Error("bad point: x or y not FE");let n=i.sqr(r),o=f(e);// y²
if(!i.eql(n,o))throw Error("bad point: equation left != right");if(!this.isTorsionFree())throw Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:e}=this.toAffine();if(i.isOdd)return!i.isOdd(e);throw Error("Field doesn't support isOdd")}/**
         * Compare one point to another.
         */equals(e){g(e);let{px:t,py:r,pz:n}=this,{px:o,py:s,pz:a}=e,u=i.eql(i.mul(t,a),i.mul(o,n)),l=i.eql(i.mul(r,a),i.mul(s,n));return u&&l}/**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */negate(){return new b(this.px,i.neg(this.py),this.pz)}// Renes-Costello-Batina exception-free doubling formula.
// There is 30% faster Jacobian formula, but it is not complete.
// https://eprint.iacr.org/2015/1060, algorithm 3
// Cost: 8M + 3S + 3*a + 2*b3 + 15add.
double(){let{a:e,b:r}=t,n=i.mul(r,c),{px:o,py:s,pz:a}=this,u=i.ZERO,l=i.ZERO,f=i.ZERO,p=i.mul(o,o),h=i.mul(s,s),d=i.mul(a,a),y=i.mul(o,s);return y=i.add(y,y),f=i.mul(o,a),f=i.add(f,f),u=i.mul(e,f),l=i.mul(n,d),l=i.add(u,l),u=i.sub(h,l),l=i.add(h,l),l=i.mul(u,l),u=i.mul(y,u),f=i.mul(n,f),d=i.mul(e,d),y=i.sub(p,d),y=i.mul(e,y),y=i.add(y,f),f=i.add(p,p),p=i.add(f,p),p=i.add(p,d),p=i.mul(p,y),l=i.add(l,p),d=i.mul(s,a),d=i.add(d,d),p=i.mul(d,y),u=i.sub(u,p),f=i.mul(d,h),f=i.add(f,f),f=i.add(f,f),new b(u,l,f)}// Renes-Costello-Batina exception-free addition formula.
// There is 30% faster Jacobian formula, but it is not complete.
// https://eprint.iacr.org/2015/1060, algorithm 1
// Cost: 12M + 0S + 3*a + 3*b3 + 23add.
add(e){g(e);let{px:r,py:n,pz:o}=this,{px:s,py:a,pz:u}=e,l=i.ZERO,f=i.ZERO,p=i.ZERO,h=t.a,d=i.mul(t.b,c),y=i.mul(r,s),m=i.mul(n,a),v=i.mul(o,u),x=i.add(r,n),w=i.add(s,a);x=i.mul(x,w),w=i.add(y,m),x=i.sub(x,w),w=i.add(r,o);let E=i.add(s,u);// step 10
return w=i.mul(w,E),E=i.add(y,v),w=i.sub(w,E),E=i.add(n,o),l=i.add(a,u),E=i.mul(E,l),l=i.add(m,v),E=i.sub(E,l),p=i.mul(h,w),l=i.mul(d,v),p=i.add(l,p),l=i.sub(m,p),p=i.add(m,p),f=i.mul(l,p),m=i.add(y,y),m=i.add(m,y),v=i.mul(h,v),w=i.mul(d,w),m=i.add(m,v),v=i.sub(y,v),v=i.mul(h,v),w=i.add(w,v),y=i.mul(m,w),f=i.add(f,y),y=i.mul(E,w),l=i.mul(x,l),l=i.sub(l,y),y=i.mul(x,m),p=i.mul(E,p),p=i.add(p,y),new b(l,f,p)}subtract(e){return this.add(e.negate())}is0(){return this.equals(b.ZERO)}wNAF(e){return v.wNAFCached(this,y,e,e=>{let t=i.invertBatch(e.map(e=>e.pz));return e.map((e,r)=>e.toAffine(t[r])).map(b.fromAffine)})}/**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */multiplyUnsafe(e){let r=b.ZERO;if(e===a)return r;if(h(e),e===u)return this;let{endo:n}=t;if(!n)return v.unsafeLadder(this,e);// Apply endomorphism
let{k1neg:o,k1:s,k2neg:l,k2:c}=n.splitScalar(e),f=r,p=r,d=this;for(;s>a||c>a;)s&u&&(f=f.add(d)),c&u&&(p=p.add(d)),d=d.double(),s>>=u,c>>=u;return o&&(f=f.negate()),l&&(p=p.negate()),p=new b(i.mul(p.px,n.beta),p.py,p.pz),f.add(p)}/**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */multiply(e){let r,n;h(e);let{endo:o}=t;if(o){let{k1neg:t,k1:s,k2neg:a,k2:u}=o.splitScalar(e),{p:l,f:c}=this.wNAF(s),{p:f,f:p}=this.wNAF(u);l=v.constTimeNegate(t,l),f=v.constTimeNegate(a,f),f=new b(i.mul(f.px,o.beta),f.py,f.pz),r=l.add(f),n=c.add(p)}else{let{p:t,f:o}=this.wNAF(e);r=t,n=o}// Normalize `z` for both points, but return only real one
return b.normalizeZ([r,n])[0]}/**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */multiplyAndAddUnsafe(e,t,r){let n=b.BASE,o=(e,t// Select faster multiply() method
)=>t!==a&&t!==u&&e.equals(n)?e.multiply(t):e.multiplyUnsafe(t),i=o(this,t).add(o(e,r));// No Strauss-Shamir trick: we have 10% faster G precomputes
return i.is0()?void 0:i}// Converts Projective point to affine (x, y) coordinates.
// Can accept precomputed Z^-1 - for example, from invertBatch.
// (x, y, z) ∋ (x=x/z, y=y/z)
toAffine(e){let{px:t,py:r,pz:n}=this,o=this.is0();// If invZ was 0, we return zero point. However we still want to execute
// all operations, so we replace invZ with a random number, 1.
null==e&&(e=o?i.ONE:i.inv(n));let s=i.mul(t,e),a=i.mul(r,e),u=i.mul(n,e);if(o)return{x:i.ZERO,y:i.ZERO};if(!i.eql(u,i.ONE))throw Error("invZ was invalid");return{x:s,y:a}}isTorsionFree(){let{h:e,isTorsionFree:r}=t;if(e===u)return!0;// No subgroups, always torsion-free
if(r)return r(b,this);throw Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:e,clearCofactor:r}=t;return e===u?this:r?r(b,this):this.multiplyUnsafe(t.h)// Fast-path
}toRawBytes(e=!0){return this.assertValidity(),s(b,this,e)}toHex(e=!0){return n.bytesToHex(this.toRawBytes(e))}}b.BASE=new b(t.Gx,t.Gy,i.ONE),b.ZERO=new b(i.ZERO,i.ONE,i.ZERO);let m=t.nBitLength,v=(0,o.wNAF)(b,t.endo?Math.ceil(m/2):m);// Validate if generator point is on curve
return{CURVE:t,ProjectivePoint:b,normPrivateKeyToScalar:d,weierstrassEquation:f,isWithinCurveOrder:p}}/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */function h(e,t){// Generic implementation
let r=e.ORDER,n=a;for(let e=r-u;e%l===a;e/=l)n+=u;let o=n,i=l<<o-u-u,s=i*l,p=(r-u)/s,h=(p-u)/l,d=s-u,y=e.pow(t,p),g=e.pow(t,(p+u)/l),b=(t,r)=>{let n=y,s=e.pow(r,d),a=e.sqr(s);// 1. tv1 = c6
a=e.mul(a,r);let c=e.mul(t,a);// 5. tv5 = u * tv3
c=e.pow(c,h),c=e.mul(c,s),s=e.mul(c,r),a=e.mul(c,t);let f=e.mul(a,s);// 10. tv4 = tv3 * tv2
c=e.pow(f,i);let p=e.eql(c,e.ONE);// 12. isQR = tv5 == 1
s=e.mul(a,g),c=e.mul(f,n),a=e.cmov(s,a,p),f=e.cmov(c,f,p);// 17. for i in (c1, c1 - 1, ..., 2):
for(let t=o;t>u;t--){let r=t-l;// 18.    tv5 = i - 2
r=l<<r-u;let o=e.pow(f,r),i=e.eql(o,e.ONE);// 20.    tv5 = tv4^tv5
s=e.mul(a,n),n=e.mul(n,n),o=e.mul(f,n),a=e.cmov(s,a,i),f=e.cmov(o,f,i)}return{isValid:p,value:a}};// 1. c1, the largest integer such that 2^c1 divides q - 1.
if(e.ORDER%f===c){// sqrt_ratio_3mod4(u, v)
let r=(e.ORDER-c)/f,n=e.sqrt(e.neg(t));// 1. c1 = (q - 3) / 4     # Integer arithmetic
b=(t,o)=>{let i=e.sqr(o),s=e.mul(t,o);// 1. tv1 = v^2
i=e.mul(i,s);// 3. tv1 = tv1 * tv2
let a=e.pow(i,r);// 4. y1 = tv1^c1
a=e.mul(a,s);// 5. y1 = y1 * tv2
let u=e.mul(a,n),l=e.mul(e.sqr(a),o),c=e.eql(l,t),f=e.cmov(u,a,c);// 6. y2 = y1 * c2
return{isValid:c,value:f};// 11. return (isQR, y) isQR ? y : y*c2
}}// No curves uses that
// if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
return b}e.exports.weierstrassPoints=p,e.exports.weierstrass=function(t){let i=function(e){let t=(0,o.validateBasic)(e);return n.validateObject(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}(t),{Fp:s,n:l}=i,c=s.BYTES+1,f=2*s.BYTES+1;function h(e){return r.mod(e,l)}function d(e){return r.invert(e,l)}let{ProjectivePoint:y,normPrivateKeyToScalar:g,weierstrassEquation:b,isWithinCurveOrder:m}=p({...i,toBytes(e,t,r){let o=t.toAffine(),i=s.toBytes(o.x),a=n.concatBytes;return r?a(Uint8Array.from([t.hasEvenY()?2:3]),i):a(Uint8Array.from([4]),i,s.toBytes(o.y))},fromBytes(e){let t=e.length,r=e[0],o=e.subarray(1);// this.assertValidity() is done inside of fromHex
if(t===c&&(2===r||3===r)){let e=n.bytesToNumberBE(o);if(!(a<e&&e<s.ORDER))throw Error("Point is not on curve");let t=b(e),i=s.sqrt(t),l=(i&u)===u;// y² = x³ + ax + b
return(1&r)==1!==l&&(i=s.neg(i)),{x:e,y:i}}if(t===f&&4===r){let e=s.fromBytes(o.subarray(0,s.BYTES)),t=s.fromBytes(o.subarray(s.BYTES,2*s.BYTES));return{x:e,y:t}}throw Error(`Point of length ${t} was invalid. Expected ${c} compressed bytes or ${f} uncompressed bytes`)}}),v=e=>n.bytesToHex(n.numberToBytesBE(e,i.nByteLength));function x(e){let t=l>>u;return e>t}// slice bytes num
let w=(e,t,r)=>n.bytesToNumberBE(e.slice(t,r));/**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */class E{constructor(e,t,r){this.r=e,this.s=t,this.recovery=r,this.assertValidity()}// pair (bytes of r, bytes of s)
static fromCompact(e){let t=i.nByteLength;return e=(0,n.ensureBytes)("compactSignature",e,2*t),new E(w(e,0,t),w(e,t,2*t))}// DER encoded ECDSA signature
// https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
static fromDER(t){let{r:r,s:o}=e.exports.DER.toSig((0,n.ensureBytes)("DER",t));return new E(r,o)}assertValidity(){// can use assertGE here
if(!m(this.r))throw Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw Error("s must be 0 < s < CURVE.n")}addRecoveryBit(e){return new E(this.r,this.s,e)}recoverPublicKey(e){let{r:t,s:r,recovery:o}=this,a=A((0,n.ensureBytes)("msgHash",e));if(null==o||![0,1,2,3].includes(o))throw Error("recovery id invalid");let u=2===o||3===o?t+i.n:t;if(u>=s.ORDER)throw Error("recovery id 2 or 3 invalid");let l=(1&o)==0?"02":"03",c=y.fromHex(l+v(u)),f=d(u),p=h(-a*f),g=h(r*f),b=y.BASE.multiplyAndAddUnsafe(c,p,g);if(!b)throw Error("point at infinify");// unsafe is fine: no priv data leaked
return b.assertValidity(),b}// Signatures should be low-s, to prevent malleability.
hasHighS(){return x(this.s)}normalizeS(){return this.hasHighS()?new E(this.r,h(-this.s),this.recovery):this}// DER-encoded
toDERRawBytes(){return n.hexToBytes(this.toDERHex())}toDERHex(){return e.exports.DER.hexFromSig({r:this.r,s:this.s})}// padded bytes of r, then padded bytes of s
toCompactRawBytes(){return n.hexToBytes(this.toCompactHex())}toCompactHex(){return v(this.r)+v(this.s)}}/**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */function _(e){let t=e instanceof Uint8Array,r="string"==typeof e,n=(t||r)&&e.length;return t?n===c||n===f:r?n===2*c||n===2*f:e instanceof y}// RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
// FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
// bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
// int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
let S=i.bits2int||function(e){// For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
// for some cases, since bytes.length * 8 is not actual bitLength.
let t=n.bytesToNumberBE(e),r=8*e.length-i.nBitLength;// check for == u8 done here
return r>0?t>>BigInt(r):t},A=i.bits2int_modN||function(e){return h(S(e));// can't use bytesToNumberBE here
},O=n.bitMask(i.nBitLength);/**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */function T(e){if("bigint"!=typeof e)throw Error("bigint expected");if(!(a<=e&&e<O))throw Error(`bigint expected < 2^${i.nBitLength}`);// works with order, can have different size than numToField!
return n.numberToBytesBE(e,i.nByteLength)}let I={lowS:i.lowS,prehash:!1},B={lowS:i.lowS,prehash:!1};return(// Enable precomputes. Slows down first publicKey computation by 20ms.
y.BASE._setWindowSize(8),{CURVE:i,getPublicKey:/**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */function(e,t=!0){return y.fromPrivateKey(e).toRawBytes(t)},getSharedSecret:/**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */function(e,t,r=!0){if(_(e))throw Error("first arg must be private key");if(!_(t))throw Error("second arg must be public key");let n=y.fromHex(t);// check for being on-curve
return n.multiply(g(e)).toRawBytes(r)},sign:/**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */function(e,t,r=I){let{seed:o,k2sig:l}=// Steps A, D of RFC6979 3.2
// Creates RFC6979 seed; converts msg/privKey to numbers.
// Used only in sign, not in verify.
// NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
// Also it can be bigger for P224 + SHA256
function(e,t,r=I){if(["recovered","canonical"].some(e=>e in r))throw Error("sign() legacy options not supported");let{hash:o,randomBytes:l}=i,{lowS:c,prehash:f,extraEntropy:p}=r;null==c&&(c=!0),e=(0,n.ensureBytes)("msgHash",e),f&&(e=(0,n.ensureBytes)("prehashed msgHash",o(e)));// We can't later call bits2octets, since nested bits2int is broken for curves
// with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
// const bits2octets = (bits) => int2octets(bits2int_modN(bits))
let b=A(e),v=g(t),w=[T(v),T(b)];// extraEntropy. RFC6979 3.6: additional k' (optional).
if(null!=p){// K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
let e=!0===p?l(s.BYTES):p;// generate random bytes OR pass as-is
w.push((0,n.ensureBytes)("extraEntropy",e,s.BYTES));// check for being of size BYTES
}let _=n.concatBytes(...w);// Step D of RFC6979 3.2
return{seed:_,k2sig:// Converts signature params into point w r/s, checks result for validity.
function(e){// RFC 6979 Section 3.2, step 3: k = bits2int(T)
let t=S(e);// Cannot use fields methods, since it is group element
if(!m(t))return;// Important: all mod() calls here must be done over N
let r=d(t),n=y.BASE.multiply(t).toAffine(),o=h(n.x);// k^-1 mod n
if(o===a)return;// Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
// https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
// a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
let i=h(r*h(b+o*v));// Not using blinding here
if(i===a)return;let s=(n.x===o?0:2)|Number(n.y&u),l=i;// recovery bit (2 or 3, when q.x > n)
return c&&x(i)&&(l=x(i)?h(-i):i,s^=1),new E(o,l,s);// use normS, not s
}}}(e,t,r),c=n.createHmacDrbg(i.hash.outputLen,i.nByteLength,i.hmac);// Steps A, D of RFC6979 3.2.
return c(o,l);// Steps B, C, D, E, F, G
},verify:// utils.precompute(8, ProjectivePoint.BASE)
/**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */function(t,r,o,s=B){let a,u;if(r=(0,n.ensureBytes)("msgHash",r),o=(0,n.ensureBytes)("publicKey",o),"strict"in s)throw Error("options.strict was renamed to lowS");let{lowS:l,prehash:c}=s;try{if("string"==typeof t||t instanceof Uint8Array)// Since DER can also be 2*nByteLength bytes, we check for it first.
try{u=E.fromDER(t)}catch(r){if(!(r instanceof e.exports.DER.Err))throw r;u=E.fromCompact(t)}else if("object"==typeof t&&"bigint"==typeof t.r&&"bigint"==typeof t.s){let{r:e,s:r}=t;u=new E(e,r)}else throw Error("PARSE");a=y.fromHex(o)}catch(e){if("PARSE"===e.message)throw Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(l&&u.hasHighS())return!1;c&&(r=i.hash(r));let{r:f,s:p}=u,g=A(r),b=d(p),m=h(g*b),v=h(f*b),x=y.BASE.multiplyAndAddUnsafe(a,m,v)?.toAffine();if(!x)return!1;let w=h(x.x);return w===f},ProjectivePoint:y,Signature:E,utils:{isValidPrivateKey(e){try{return g(e),!0}catch(e){return!1}},normPrivateKeyToScalar:g,/**
         * Produces cryptographically secure private key from random of size (nBitLength+64)
         * as per FIPS 186 B.4.1 with modulo bias being neglible.
         */randomPrivateKey:()=>{let e=i.randomBytes(s.BYTES+8),t=r.hashToPrivateScalar(e,l);return n.numberToBytesBE(t,i.nByteLength)},/**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */precompute:(e=8,t=y.BASE)=>(t._setWindowSize(e),t.multiply(BigInt(3)),t)}})},e.exports.SWUFpSqrtRatio=h,e.exports.mapToCurveSimpleSWU=/**
 * From draft-irtf-cfrg-hash-to-curve-16
 */function(e,t){if(r.validateField(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw Error("mapToCurveSimpleSWU: invalid opts");let n=h(e,t.Z);if(!e.isOdd)throw Error("Fp.isOdd is not implemented!");// Input: u, an element of F.
// Output: (x, y), a point on E.
return r=>{let o,i,s,a,u,l,c,f;o=e.sqr(r),o=e.mul(o,t.Z),i=e.sqr(o),i=e.add(i,o),s=e.add(i,e.ONE),s=e.mul(s,t.B),a=e.cmov(t.Z,e.neg(i),!e.eql(i,e.ZERO)),a=e.mul(a,t.A),i=e.sqr(s),l=e.sqr(a),u=e.mul(l,t.A),i=e.add(i,u),i=e.mul(i,s),l=e.mul(l,a),u=e.mul(l,t.B),i=e.add(i,u),c=e.mul(o,s);let{isValid:p,value:h}=n(i,l);// 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
f=e.mul(o,r),f=e.mul(f,h),c=e.cmov(c,s,p),f=e.cmov(f,h,p);let d=e.isOdd(r)===e.isOdd(f);// 23.  e1 = sgn0(u) == sgn0(y)
return f=e.cmov(e.neg(f),f,d),{x:c=e.div(c,a),y:f}}}}),T.register("b43cJ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.validateBasic=e.exports.wNAF=void 0;var r=T("aBjiN"),n=T("kUVyL");let o=BigInt(0),i=BigInt(1);e.exports.wNAF=// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function(e,t){let r=(e,t)=>{let r=t.negate();return e?r:t},n=e=>({windows:Math.ceil(t/e)+1,windowSize:2**(e-1)});return{constTimeNegate:r,// non-const time multiplication ladder
unsafeLadder(t,r){let n=e.ZERO,s=t;for(;r>o;)r&i&&(n=n.add(s)),s=s.double(),r>>=i;return n},/**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */precomputeWindow(e,t){let{windows:r,windowSize:o}=n(t),i=[],s=e,a=s;for(let e=0;e<r;e++){a=s,i.push(a);// =1, because we skip zero
for(let e=1;e<o;e++)a=a.add(s),i.push(a);s=a.double()}return i},/**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */wNAF(t,o,s){// TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
// But need to carefully remove other checks before wNAF. ORDER == bits here
let{windows:a,windowSize:u}=n(t),l=e.ZERO,c=e.BASE,f=BigInt(2**t-1),p=2**t,h=BigInt(t);for(let e=0;e<a;e++){let t=e*u,n=Number(s&f);// Shift number by W bits.
s>>=h,n>u&&(n-=p,s+=i);let a=t+Math.abs(n)-1,d=e%2!=0,y=n<0;// -1 because we skip zero
0===n?c=c.add(r(d,o[t])):l=l.add(r(y,o[a]))}// JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
// Even if the variable is still unused, there are some checks which will
// throw an exception, so compiler needs to prove they won't happen, which is hard.
// At this point there is a way to F be infinity-point even if p is not,
// which makes it less const-time: around 1 bigint multiply.
return{p:l,f:c}},wNAFCached(e,t,r,n){// @ts-ignore
let o=e._WINDOW_SIZE||1,i=t.get(e);return i||(i=this.precomputeWindow(e,o),1!==o&&t.set(e,n(i))),this.wNAF(o,i,r)}}},e.exports.validateBasic=function(e){// Set defaults
return(0,r.validateField)(e.Fp),(0,n.validateObject)(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...(0,r.nLength)(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}}),T.register("lrpcj",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createHasher=e.exports.isogenyMap=e.exports.hash_to_field=e.exports.expand_message_xof=e.exports.expand_message_xmd=void 0;var r=T("aBjiN"),n=T("kUVyL");// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
let o=n.bytesToNumberBE;// Integer to Octet Stream (numberToBytesBE)
function i(e,t){if(e<0||e>=1<<8*t)throw Error(`bad I2OSP call: value=${e} length=${t}`);let r=Array.from({length:t}).fill(0);for(let n=t-1;n>=0;n--)r[n]=255&e,e>>>=8;return new Uint8Array(r)}function s(e){if(!(e instanceof Uint8Array))throw Error("Uint8Array expected")}function a(e){if(!Number.isSafeInteger(e))throw Error("number expected")}// Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits
// https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-11#section-5.4.1
function u(e,t,r,o){s(e),s(t),a(r),t.length>255&&(t=o((0,n.concatBytes)((0,n.utf8ToBytes)("H2C-OVERSIZE-DST-"),t)));let{outputLen:u,blockLen:l}=o,c=Math.ceil(r/u);if(c>255)throw Error("Invalid xmd length");let f=(0,n.concatBytes)(t,i(t.length,1)),p=i(0,l),h=i(r,2),d=Array(c),y=o((0,n.concatBytes)(p,e,h,i(0,1),f));d[0]=o((0,n.concatBytes)(y,i(1,1),f));for(let e=1;e<=c;e++){let t=[function(e,t){let r=new Uint8Array(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]^t[n];return r}(y,d[e-1]),i(e+1,1),f];d[e]=o((0,n.concatBytes)(...t))}let g=(0,n.concatBytes)(...d);return g.slice(0,r)}function l(e,t,r,o,u){if(s(e),s(t),a(r),t.length>255&&(t=u.create({dkLen:Math.ceil(2*o/8)}).update((0,n.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest()),r>65535||t.length>255)throw Error("expand_message_xof: invalid lenInBytes");return u.create({dkLen:r}).update(e).update(i(r,2))// 2. DST_prime = DST || I2OSP(len(DST), 1)
.update(t).update(i(t.length,1)).digest()}/**
 * Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F
 * https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-11#section-5.3
 * @param msg a byte string containing the message to hash
 * @param count the number of elements of F to output
 * @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
 * @returns [u_0, ..., u_(count - 1)], a list of field elements.
 */function c(e,t,i){let c;(0,n.validateObject)(i,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});let{p:f,k:p,m:h,hash:d,expand:y,DST:g}=i;s(e),a(t);let b=function(e){if(e instanceof Uint8Array)return e;if("string"==typeof e)return(0,n.utf8ToBytes)(e);throw Error("DST must be Uint8Array or string")}(g),m=f.toString(2).length,v=Math.ceil((m+p)/8),x=t*h*v;if("xmd"===y)c=u(e,b,x,d);else if("xof"===y)c=l(e,b,x,p,d);else if("_internal_pass"===y)c=e;else throw Error('expand must be "xmd" or "xof"');let w=Array(t);for(let e=0;e<t;e++){let t=Array(h);for(let n=0;n<h;n++){let i=v*(n+e*h),s=c.subarray(i,i+v);t[n]=(0,r.mod)(o(s),f)}w[e]=t}return w}e.exports.expand_message_xmd=u,e.exports.expand_message_xof=l,e.exports.hash_to_field=c,e.exports.isogenyMap=function(e,t){// Make same order as in spec
let r=t.map(e=>Array.from(e).reverse());return(t,n)=>{let[o,i,s,a]=r.map(r=>r.reduce((r,n)=>e.add(e.mul(r,t),n)));return t=e.div(o,i),n=e.mul(n,e.div(s,a)),{x:t,y:n}}},e.exports.createHasher=function(e,t,r){if("function"!=typeof t)throw Error("mapToCurve() must be defined");return{// Encodes byte string to elliptic curve
// https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
hashToCurve(n,o){let i=c(n,2,{...r,DST:r.DST,...o}),s=e.fromAffine(t(i[0])),a=e.fromAffine(t(i[1])),u=s.add(a).clearCofactor();return u.assertValidity(),u},// https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
encodeToCurve(n,o){let i=c(n,1,{...r,DST:r.encodeDST,...o}),s=e.fromAffine(t(i[0])).clearCofactor();return s.assertValidity(),s}}}}),T.register("gvEil",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createCurve=e.exports.getHash=void 0;var r=T("5gqiD"),n=T("QYWsb"),o=T("7fDgO");// connects noble-curves to noble-hashes
function i(e){return{hash:e,hmac:(t,...o)=>(0,r.hmac)(e,t,(0,n.concatBytes)(...o)),randomBytes:n.randomBytes}}e.exports.getHash=i,e.exports.createCurve=function(e,t){let r=t=>(0,o.weierstrass)({...e,...i(t)});return Object.freeze({...r(t),create:r})}}),T.register("5gqiD",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hmac=e.exports.HMAC=void 0;var r=T("luklz"),n=T("QYWsb");// HMAC (RFC 2104)
class o extends n.Hash{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,r.default.hash(e);let o=(0,n.toBytes)(t);if(this.iHash=e.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let i=this.blockLen,s=new Uint8Array(i);// blockLen can be bigger than outputLen
s.set(o.length>i?e.create().update(o).digest():o);for(let e=0;e<s.length;e++)s[e]^=54;this.iHash.update(s),// By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
this.oHash=e.create();// Undo internal XOR && apply outer XOR
for(let e=0;e<s.length;e++)s[e]^=106;this.oHash.update(s),s.fill(0)}update(e){return r.default.exists(this),this.iHash.update(e),this}digestInto(e){r.default.exists(this),r.default.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){// Create new instance without calling constructor since key already in state and we don't know it.
e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:t,iHash:r,finished:n,destroyed:o,blockLen:i,outputLen:s}=this;return e.finished=n,e.destroyed=o,e.blockLen=i,e.outputLen=s,e.oHash=t._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}e.exports.HMAC=o,e.exports.hmac=(e,t,r)=>new o(e,t).update(r).digest(),e.exports.hmac.create=(e,t)=>new o(e,t)}),T.register("5nkJQ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.GWEI_TO_WEI=void 0,/** Easy conversion from Gwei to wei */e.exports.GWEI_TO_WEI=BigInt(1e9)}),T.register("iEqpe",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.accountBodyToRLP=e.exports.accountBodyToSlim=e.exports.accountBodyFromSlim=e.exports.isZeroAddress=e.exports.zeroAddress=e.exports.importPublic=e.exports.privateToAddress=e.exports.privateToPublic=e.exports.publicToAddress=e.exports.pubToAddress=e.exports.isValidPublic=e.exports.isValidPrivate=e.exports.generateAddress2=e.exports.generateAddress=e.exports.isValidChecksumAddress=e.exports.toChecksumAddress=e.exports.isValidAddress=e.exports.Account=void 0;var n=T("fGDcN"),o=T("JAeV7"),i=T("jf5pN"),s=T("22ego"),a=T("6z9tO"),u=T("jAJUj"),l=T("2o6kc"),c=T("hLAiR");let f=BigInt(0);class p{/**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */constructor(e=f,t=f,r=u.KECCAK256_RLP,n=u.KECCAK256_NULL){this.nonce=e,this.balance=t,this.storageRoot=r,this.codeHash=n,this._validate()}static fromAccountData(e){let{nonce:t,balance:r,storageRoot:n,codeHash:o}=e;return new p(void 0!==t?(0,a.bufferToBigInt)((0,a.toBuffer)(t)):void 0,void 0!==r?(0,a.bufferToBigInt)((0,a.toBuffer)(r)):void 0,void 0!==n?(0,a.toBuffer)(n):void 0,void 0!==o?(0,a.toBuffer)(o):void 0)}static fromRlpSerializedAccount(e){let t=(0,a.arrToBufArr)(n.RLP.decode(Uint8Array.from(e)));if(!Array.isArray(t))throw Error("Invalid serialized account input. Must be array");return this.fromValuesArray(t)}static fromValuesArray(e){let[t,r,n,o]=e;return new p((0,a.bufferToBigInt)(t),(0,a.bufferToBigInt)(r),n,o)}_validate(){if(this.nonce<f)throw Error("nonce must be greater than zero");if(this.balance<f)throw Error("balance must be greater than zero");if(32!==this.storageRoot.length)throw Error("storageRoot must have a length of 32");if(32!==this.codeHash.length)throw Error("codeHash must have a length of 32")}/**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */raw(){return[(0,a.bigIntToUnpaddedBuffer)(this.nonce),(0,a.bigIntToUnpaddedBuffer)(this.balance),this.storageRoot,this.codeHash]}/**
     * Returns the RLP serialization of the account as a `Buffer`.
     */serialize(){return r.from(n.RLP.encode((0,a.bufArrToArr)(this.raw())))}/**
     * Returns a `Boolean` determining if the account is a contract.
     */isContract(){return!this.codeHash.equals(u.KECCAK256_NULL)}/**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */isEmpty(){return this.balance===f&&this.nonce===f&&this.codeHash.equals(u.KECCAK256_NULL)}}function h(e){let[t,r,n,o]=e;return[t,r,0===(0,a.arrToBufArr)(n).length?u.KECCAK256_RLP:n,0===(0,a.arrToBufArr)(o).length?u.KECCAK256_NULL:o]}e.exports.Account=p,e.exports.isValidAddress=function(e){try{(0,l.assertIsString)(e)}catch(e){return!1}return/^0x[0-9a-fA-F]{40}$/.test(e)},e.exports.toChecksumAddress=function(e,t){(0,l.assertIsHexString)(e);let n=(0,c.stripHexPrefix)(e).toLowerCase(),i="";if(void 0!==t){let e=(0,a.bufferToBigInt)((0,a.toBuffer)(t));i=e.toString()+"0x"}let u=r.from(i+n,"utf8"),f=(0,s.bytesToHex)((0,o.keccak256)(u)),p="0x";for(let e=0;e<n.length;e++)parseInt(f[e],16)>=8?p+=n[e].toUpperCase():p+=n[e];return p},e.exports.isValidChecksumAddress=function(t,r){return(0,e.exports.isValidAddress)(t)&&(0,e.exports.toChecksumAddress)(t,r)===t},e.exports.generateAddress=function(e,t){return((0,l.assertIsBuffer)(e),(0,l.assertIsBuffer)(t),(0,a.bufferToBigInt)(t)===BigInt(0))?r.from((0,o.keccak256)(n.RLP.encode((0,a.bufArrToArr)([e,null])))).slice(-20):r.from((0,o.keccak256)(n.RLP.encode((0,a.bufArrToArr)([e,t])))).slice(-20)},e.exports.generateAddress2=function(e,t,n){if((0,l.assertIsBuffer)(e),(0,l.assertIsBuffer)(t),(0,l.assertIsBuffer)(n),20!==e.length)throw Error("Expected from to be of length 20");if(32!==t.length)throw Error("Expected salt to be of length 32");let i=(0,o.keccak256)(r.concat([r.from("ff","hex"),e,t,(0,o.keccak256)(n)]));return(0,a.toBuffer)(i).slice(-20)},e.exports.isValidPrivate=function(e){return i.secp256k1.utils.isValidPrivateKey(e)},e.exports.isValidPublic=function(e,t=!1){if((0,l.assertIsBuffer)(e),64===e.length)// Automatically checks whether point is on curve
try{return i.secp256k1.ProjectivePoint.fromHex(r.concat([r.from([4]),e])),!0}catch(e){return!1}if(!t)return!1;try{return i.secp256k1.ProjectivePoint.fromHex(e),!0}catch(e){return!1}},e.exports.pubToAddress=function(e,t=!1){if((0,l.assertIsBuffer)(e),t&&64!==e.length&&(e=r.from(i.secp256k1.ProjectivePoint.fromHex(e).toRawBytes(!1).slice(1))),64!==e.length)throw Error("Expected pubKey to be of length 64");// Only take the lower 160bits of the hash
return r.from((0,o.keccak256)(e)).slice(-20)},e.exports.publicToAddress=e.exports.pubToAddress,e.exports.privateToPublic=function(e){// skip the type flag and use the X, Y points
return(0,l.assertIsBuffer)(e),r.from(i.secp256k1.ProjectivePoint.fromPrivateKey(e).toRawBytes(!1).slice(1))},e.exports.privateToAddress=function(t){return(0,e.exports.publicToAddress)((0,e.exports.privateToPublic)(t))},e.exports.importPublic=function(e){return(0,l.assertIsBuffer)(e),64!==e.length&&(e=r.from(i.secp256k1.ProjectivePoint.fromHex(e).toRawBytes(!1).slice(1))),e},e.exports.zeroAddress=function(){let e=(0,a.zeros)(20);return(0,a.bufferToHex)(e)},e.exports.isZeroAddress=function(t){try{(0,l.assertIsString)(t)}catch(e){return!1}let r=(0,e.exports.zeroAddress)();return r===t},e.exports.accountBodyFromSlim=h;let d=new Uint8Array(0);e.exports.accountBodyToSlim=function(e){let[t,r,n,o]=e;return[t,r,(0,a.arrToBufArr)(n).equals(u.KECCAK256_RLP)?d:n,(0,a.arrToBufArr)(o).equals(u.KECCAK256_NULL)?d:o]},e.exports.accountBodyToRLP=/**
 * Converts a slim account (per snap protocol spec) to the RLP encoded version of the account
 * @param body Array of 4 Buffer-like items to represent the account
 * @returns RLP encoded version of the account
 */function(e,t=!0){let r=t?h(e):e;return(0,a.arrToBufArr)(n.RLP.encode(r))}}),T.register("fGDcN",function(e,t){/**
 * RLP Encoding based on https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/
 * This function takes in data, converts it to Uint8Array if not,
 * and adds a length for recursion.
 * @param input Will be converted to Uint8Array
 * @returns Uint8Array of encoded data
 **/function r(e){if(Array.isArray(e)){let t=[],n=0;for(let o=0;o<e.length;o++){let i=r(e[o]);t.push(i),n+=i.length}return f(i(n,192),...t)}let t=y(e);return 1===t.length&&t[0]<128?t:f(i(t.length,128),t)}/**
 * Slices a Uint8Array, throws if the slice goes out-of-bounds of the Uint8Array.
 * E.g. `safeSlice(hexToBytes('aa'), 1, 2)` will throw.
 * @param input
 * @param start
 * @param end
 */function n(e,t,r){if(r>e.length)throw Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");return e.slice(t,r)}/**
 * Parse integers. Check if there is no leading zeros
 * @param v The value to parse
 */function o(e){if(0===e[0])throw Error("invalid RLP: extra zeros");return l(u(e))}function i(e,t){if(e<56)return Uint8Array.from([e+t]);let r=h(e),n=r.length/2,o=h(t+55+n);return Uint8Array.from(c(o+r))}function s(e,t=!1){if(null==e||0===e.length)return Uint8Array.from([]);let r=y(e),i=/** Decode an input with RLP */function e(t){let r,i,s,a,u;let l=[],c=t[0];if(c<=127)return{data:t.slice(0,1),remainder:t.slice(1)};if(c<=183){if(// string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string
// The range of the first byte is [0x80, 0xb7]
r=c-127,s=128===c?Uint8Array.from([]):n(t,1,r),2===r&&s[0]<128)throw Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");return{data:s,remainder:t.slice(r)}}if(c<=191){if(// string is greater than 55 bytes long. A single byte with the value (0xb7 plus the length of the length),
// followed by the length, followed by the string
i=c-182,t.length-1<i)throw Error("invalid RLP: not enough bytes for string length");if((r=o(n(t,1,i)))<=55)throw Error("invalid RLP: expected string length to be greater than 55");return{data:s=n(t,i,r+i),remainder:t.slice(r+i)}}if(c<=247){for(a=n(t,1,// a list between 0-55 bytes long
r=c-191);a.length;)u=e(a),l.push(u.data),a=u.remainder;return{data:l,remainder:t.slice(r)}}{if((r=o(n(t,1,// a list over 55 bytes long
i=c-246)))<56)throw Error("invalid RLP: encoded list too short");let s=i+r;if(s>t.length)throw Error("invalid RLP: total length is larger than the data");for(a=n(t,i,s);a.length;)u=e(a),l.push(u.data),a=u.remainder;return{data:l,remainder:t.slice(s)}}}(r);if(t)return i;if(0!==i.remainder.length)throw Error("invalid RLP: remainder must be zero");return i.data}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.RLP=e.exports.utils=e.exports.decode=e.exports.encode=void 0,e.exports.encode=r,e.exports.decode=s;let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function u(e){// Pre-caching chars with `cachedHexes` speeds this up 6x
let t="";for(let r=0;r<e.length;r++)t+=a[e[r]];return t}function l(e){let t=Number.parseInt(e,16);if(Number.isNaN(t))throw Error("Invalid byte sequence");return t}// Caching slows it down 2-3x
function c(e){if("string"!=typeof e)throw TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw Error("hexToBytes: received invalid unpadded hex");let t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){let n=2*r;t[r]=l(e.slice(n,n+2))}return t}/** Concatenates two Uint8Arrays into one. */function f(...e){if(1===e.length)return e[0];let t=e.reduce((e,t)=>e+t.length,0),r=new Uint8Array(t);for(let t=0,n=0;t<e.length;t++){let o=e[t];r.set(o,n),n+=o.length}return r}function p(e){return new TextEncoder().encode(e)}/** Transform an integer into its hexadecimal value */function h(e){if(e<0)throw Error("Invalid integer as argument, must be unsigned!");let t=e.toString(16);return t.length%2?`0${t}`:t}/** Check if a string is prefixed by 0x */function d(e){return e.length>=2&&"0"===e[0]&&"x"===e[1]}/** Transform anything into a Uint8Array */function y(e){if(e instanceof Uint8Array)return e;if("string"==typeof e){if(d(e)){var t;return c((t="string"!=typeof e?e:d(e)?e.slice(2):e).length%2?`0${t}`:t)}return p(e)}if("number"==typeof e||"bigint"==typeof e)return e?c(h(e)):Uint8Array.from([]);if(null==e)return Uint8Array.from([]);throw Error("toBytes: received unsupported type "+typeof e)}e.exports.utils={bytesToHex:u,concatBytes:f,hexToBytes:c,utf8ToBytes:p},e.exports.RLP={encode:r,decode:s}}),T.register("JAeV7",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.keccak512=e.exports.keccak384=e.exports.keccak256=e.exports.keccak224=void 0;var r=T("jwFtP"),n=T("22ego");e.exports.keccak224=(0,n.wrapHash)(r.keccak_224),e.exports.keccak256=(()=>{let e=(0,n.wrapHash)(r.keccak_256);return e.create=r.keccak_256.create,e})(),e.exports.keccak384=(0,n.wrapHash)(r.keccak_384),e.exports.keccak512=(0,n.wrapHash)(r.keccak_512)}),T.register("jwFtP",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.shake256=e.exports.shake128=e.exports.keccak_512=e.exports.keccak_384=e.exports.keccak_256=e.exports.keccak_224=e.exports.sha3_512=e.exports.sha3_384=e.exports.sha3_256=e.exports.sha3_224=e.exports.Keccak=e.exports.keccakP=void 0;var r=T("c3XMq"),n=T("gGQJI"),o=T("a9jtX");// Various per round constants calculations
let[i,s,a]=[[],[],[]],u=BigInt(0),l=BigInt(1),c=BigInt(2),f=BigInt(7),p=BigInt(256),h=BigInt(113);for(let e=0,t=l,r=1,n=0;e<24;e++){// Pi
[r,n]=[n,(2*r+3*n)%5],i.push(2*(5*n+r)),// Rotational
s.push((e+1)*(e+2)/2%64);// Iota
let o=u;for(let e=0;e<7;e++)(t=(t<<l^(t>>f)*h)%p)&c&&(o^=l<<(l<<BigInt(e))-l);a.push(o)}let[d,y]=n.default.split(a,!0),g=(e,t,r)=>r>32?n.default.rotlBH(e,t,r):n.default.rotlSH(e,t,r),b=(e,t,r)=>r>32?n.default.rotlBL(e,t,r):n.default.rotlSL(e,t,r);// Same as keccakf1600, but allows to skip some rounds
function m(e,t=24){let r=new Uint32Array(10);// NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
for(let n=24-t;n<24;n++){// Theta θ
for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,o=(t+2)%10,i=r[o],s=r[o+1],a=g(i,s,1)^r[n],u=b(i,s,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=a,e[t+r+1]^=u}// Rho (ρ) and Pi (π)
let t=e[2],o=e[3];for(let r=0;r<24;r++){let n=s[r],a=g(t,o,n),u=b(t,o,n),l=i[r];t=e[l],o=e[l+1],e[l]=a,e[l+1]=u}// Chi (χ)
for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}// Iota (ι)
e[0]^=d[n],e[1]^=y[n]}r.fill(0)}e.exports.keccakP=m;class v extends o.Hash{// NOTE: we accept arguments in bytes instead of bits here.
constructor(e,t,n,i=!1,s=24){// 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
if(super(),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,// Can be passed from user as dkLen
r.default.number(n),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,o.u32)(this.state)}keccak(){m(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){r.default.exists(this);let{blockLen:t,state:n}=this;e=(0,o.toBytes)(e);let i=e.length;for(let r=0;r<i;){let o=Math.min(t-this.pos,i-r);for(let t=0;t<o;t++)n[this.pos++]^=e[r++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;// Do the padding
e[r]^=t,(128&t)!=0&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){r.default.exists(this,!1),r.default.bytes(e),this.finish();let t=this.state,{blockLen:n}=this;for(let r=0,o=e.length;r<o;){this.posOut>=n&&this.keccak();let i=Math.min(n-this.posOut,o-r);e.set(t.subarray(this.posOut,this.posOut+i),r),this.posOut+=i,r+=i}return e}xofInto(e){// Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return r.default.number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(r.default.output(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:n,rounds:o,enableXOF:i}=this;return e||(e=new v(t,r,n,i,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,// Suffix can change in cSHAKE
e.suffix=r,e.outputLen=n,e.enableXOF=i,e.destroyed=this.destroyed,e}}e.exports.Keccak=v;let x=(e,t,r)=>(0,o.wrapConstructor)(()=>new v(t,e,r));e.exports.sha3_224=x(6,144,28),/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */e.exports.sha3_256=x(6,136,32),e.exports.sha3_384=x(6,104,48),e.exports.sha3_512=x(6,72,64),e.exports.keccak_224=x(1,144,28),/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */e.exports.keccak_256=x(1,136,32),e.exports.keccak_384=x(1,104,48),e.exports.keccak_512=x(1,72,64);let w=(e,t,r)=>(0,o.wrapXOFConstructorWithOpts)((n={})=>new v(t,e,void 0===n.dkLen?r:n.dkLen,!0));e.exports.shake128=w(31,168,16),e.exports.shake256=w(31,136,32)}),T.register("c3XMq",function(e,t){function r(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e){if("boolean"!=typeof e)throw Error(`Expected boolean, not ${e}`)}function o(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function i(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");r(e.outputLen),r(e.blockLen)}function s(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function a(e,t){o(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.output=e.exports.exists=e.exports.hash=e.exports.bytes=e.exports.bool=e.exports.number=void 0,e.exports.number=r,e.exports.bool=n,e.exports.bytes=o,e.exports.hash=i,e.exports.exists=s,e.exports.output=a,e.exports.default={number:r,bool:n,bytes:o,hash:i,exists:s,output:a}}),T.register("gGQJI",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.add=e.exports.toBig=e.exports.split=e.exports.fromBig=void 0;let r=BigInt(4294967296-1),n=BigInt(32);// We are not using BigUint64Array, because they are extremely slow as per 2022
function o(e,t=!1){return t?{h:Number(e&r),l:Number(e>>n&r)}:{h:0|Number(e>>n&r),l:0|Number(e&r)}}function i(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:s,l:a}=o(e[i],t);[r[i],n[i]]=[s,a]}return[r,n]}// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function s(e,t,r,n){let o=(t>>>0)+(n>>>0);return{h:e+r+(o/4294967296|0)|0,l:0|o}}e.exports.fromBig=o,e.exports.split=i,e.exports.toBig=(e,t)=>BigInt(e>>>0)<<n|BigInt(t>>>0),e.exports.add=s;// prettier-ignore
let a={fromBig:o,split:i,toBig:e.exports.toBig,shrSH:(e,t,r)=>e>>>r,shrSL:(e,t,r)=>e<<32-r|t>>>r,rotrSH:(e,t,r)=>e>>>r|t<<32-r,rotrSL:(e,t,r)=>e<<32-r|t>>>r,rotrBH:(e,t,r)=>e<<64-r|t>>>r-32,rotrBL:(e,t,r)=>e>>>r-32|t<<64-r,rotr32H:(e,t)=>t,rotr32L:(e,t)=>e,rotlSH:(e,t,r)=>e<<r|t>>>32-r,rotlSL:(e,t,r)=>t<<r|e>>>32-r,rotlBH:(e,t,r)=>t<<r-32|e>>>64-r,rotlBL:(e,t,r)=>e<<r-32|t>>>64-r,add:s,add3L:(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0),add3H:(e,t,r,n)=>t+r+n+(e/4294967296|0)|0,add4L:(e,t,r,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0),add4H:(e,t,r,n,o)=>t+r+n+o+(e/4294967296|0)|0,add5H:(e,t,r,n,o,i)=>t+r+n+o+i+(e/4294967296|0)|0,add5L:(e,t,r,n,o)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0)+(o>>>0)};e.exports.default=a}),T.register("a9jtX",function(e,t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.randomBytes=e.exports.wrapXOFConstructorWithOpts=e.exports.wrapConstructorWithOpts=e.exports.wrapConstructor=e.exports.checkOpts=e.exports.Hash=e.exports.concatBytes=e.exports.toBytes=e.exports.utf8ToBytes=e.exports.asyncLoop=e.exports.nextTick=e.exports.hexToBytes=e.exports.bytesToHex=e.exports.isLE=e.exports.rotr=e.exports.createView=e.exports.u32=e.exports.u8=void 0;var r=T("jnRqU");let n=e=>e instanceof Uint8Array;if(e.exports.u8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),e.exports.u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),e.exports.createView=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),e.exports.rotr=(e,t)=>e<<32-t|e>>>t,// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
e.exports.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.exports.isLE)throw Error("Non little-endian hardware is not supported");let o=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));e.exports.bytesToHex=/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */function(e){if(!n(e))throw Error("Uint8Array expected");// pre-caching improves the speed 6x
let t="";for(let r=0;r<e.length;r++)t+=o[e[r]];return t},e.exports.hexToBytes=/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(t/2);for(let t=0;t<r.length;t++){let n=2*t,o=e.slice(n,n+2),i=Number.parseInt(o,16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[t]=i}return r};// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
let i=async()=>{};// Returns control to thread each 'tick' ms to avoid blocking
async function s(t,r,n){let o=Date.now();for(let i=0;i<t;i++){n(i);// Date.now() is not monotonic, so in case if clock goes backwards we return return control too
let t=Date.now()-o;t>=0&&t<r||(await (0,e.exports.nextTick)(),o+=t)}}/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */function a(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e));// https://bugzil.la/1681809
}/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */function u(e){if("string"==typeof e&&(e=a(e)),!n(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}e.exports.nextTick=i,e.exports.asyncLoop=s,e.exports.utf8ToBytes=a,e.exports.toBytes=u,e.exports.concatBytes=/**
 * Copies several Uint8Arrays into one.
 */function(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!n(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t},e.exports.Hash=// For runtime check if class implements interface
class{// Safe version that clones internal state
clone(){return this._cloneInto()}};// Check if object doens't have custom constructor (like Uint8Array/Array)
let l=e=>"[object Object]"===Object.prototype.toString.call(e)&&e.constructor===Object;e.exports.checkOpts=function(e,t){if(void 0!==t&&("object"!=typeof t||!l(t)))throw Error("Options should be object or undefined");let r=Object.assign(e,t);return r},e.exports.wrapConstructor=function(e){let t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t},e.exports.wrapConstructorWithOpts=function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},e.exports.wrapXOFConstructorWithOpts=function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},e.exports.randomBytes=/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */function(e=32){if(r.crypto&&"function"==typeof r.crypto.getRandomValues)return r.crypto.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}}),T.register("jnRqU",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.crypto=void 0,e.exports.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0}),T.register("22ego",function(e,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.crypto=t.wrapHash=t.equalsBytes=t.hexToBytes=t.bytesToUtf8=t.utf8ToBytes=t.createView=t.concatBytes=t.toHex=t.bytesToHex=t.assertBytes=t.assertBool=void 0;let n=r(T("c3XMq"));var o=T("a9jtX");let i=n.default.bool;t.assertBool=i;let s=n.default.bytes;t.assertBytes=s;var o=T("a9jtX");Object.defineProperty(t,"bytesToHex",{enumerable:!0,get:function(){return o.bytesToHex}}),Object.defineProperty(t,"toHex",{enumerable:!0,get:function(){return o.bytesToHex}}),Object.defineProperty(t,"concatBytes",{enumerable:!0,get:function(){return o.concatBytes}}),Object.defineProperty(t,"createView",{enumerable:!0,get:function(){return o.createView}}),Object.defineProperty(t,"utf8ToBytes",{enumerable:!0,get:function(){return o.utf8ToBytes}}),t.bytesToUtf8=// buf.toString('utf8') -> bytesToUtf8(buf)
function(e){if(!(e instanceof Uint8Array))throw TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof e}`);return new TextDecoder().decode(e)},t.hexToBytes=function(e){let t=e.startsWith("0x")?e.substring(2):e;return(0,o.hexToBytes)(t)},t.equalsBytes=// buf.equals(buf2) -> equalsBytes(buf, buf2)
function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0},t.wrapHash=// Internal utils
function(e){return t=>(n.default.bytes(t),e(t))},// TODO(v3): switch away from node crypto, remove this unnecessary variable.
t.crypto=(()=>{let t="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,r="function"==typeof e.require&&e.require.bind(e);return{node:r&&!t?r("crypto"):void 0,web:t}})()}),T.register("6z9tO",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.intToUnpaddedBuffer=e.exports.bigIntToUnpaddedBuffer=e.exports.bigIntToHex=e.exports.bufArrToArr=e.exports.arrToBufArr=e.exports.validateNoLeadingZeroes=e.exports.baToJSON=e.exports.toUtf8=e.exports.short=e.exports.addHexPrefix=e.exports.toUnsigned=e.exports.fromSigned=e.exports.bufferToInt=e.exports.bigIntToBuffer=e.exports.bufferToBigInt=e.exports.bufferToHex=e.exports.toBuffer=e.exports.unpadHexString=e.exports.unpadArray=e.exports.unpadBuffer=e.exports.setLengthRight=e.exports.setLengthLeft=e.exports.zeros=e.exports.intToBuffer=e.exports.intToHex=void 0;var n=T("2o6kc"),o=T("hLAiR");e.exports.intToHex=function(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Received an invalid integer type: ${e}`);return`0x${e.toString(16)}`},e.exports.intToBuffer=function(t){let n=(0,e.exports.intToHex)(t);return r.from((0,o.padToEven)(n.slice(2)),"hex")},e.exports.zeros=function(e){return r.allocUnsafe(e).fill(0)};/**
 * Pads a `Buffer` with zeros till it has `length` bytes.
 * Truncates the beginning or end of input if its length exceeds `length`.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @param right whether to start padding form the left or right
 * @return (Buffer)
 */let i=function(t,r,n){let o=(0,e.exports.zeros)(r);return n?t.length<r?(t.copy(o),o):t.slice(0,r):t.length<r?(t.copy(o,r-t.length),o):t.slice(-r)};e.exports.setLengthLeft=function(e,t){return(0,n.assertIsBuffer)(e),i(e,t,!1)},e.exports.setLengthRight=function(e,t){return(0,n.assertIsBuffer)(e),i(e,t,!0)};/**
 * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
 * @param a (Buffer|Array|String)
 * @return (Buffer|Array|String)
 */let s=function(e){let t=e[0];for(;e.length>0&&"0"===t.toString();)t=(e=e.slice(1))[0];return e};/**
 * Converts a {@link Buffer} to a {@link bigint}
 */function a(t){let r=(0,e.exports.bufferToHex)(t);return"0x"===r?BigInt(0):BigInt(r)}/**
 * Converts a {@link bigint} to a {@link Buffer}
 */function u(t){return(0,e.exports.toBuffer)("0x"+t.toString(16))}e.exports.unpadBuffer=function(e){return(0,n.assertIsBuffer)(e),s(e)},e.exports.unpadArray=function(e){return(0,n.assertIsArray)(e),s(e)},e.exports.unpadHexString=function(e){return(0,n.assertIsHexString)(e),"0x"+s(e=(0,o.stripHexPrefix)(e))},e.exports.toBuffer=function(t){if(null==t)return r.allocUnsafe(0);if(r.isBuffer(t)||Array.isArray(t)||t instanceof Uint8Array)return r.from(t);if("string"==typeof t){if(!(0,o.isHexString)(t))throw Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${t}`);return r.from((0,o.padToEven)((0,o.stripHexPrefix)(t)),"hex")}if("number"==typeof t)return(0,e.exports.intToBuffer)(t);if("bigint"==typeof t){if(t<BigInt(0))throw Error(`Cannot convert negative bigint to buffer. Given: ${t}`);let e=t.toString(16);return e.length%2&&(e="0"+e),r.from(e,"hex")}if(t.toArray)return r.from(t.toArray());if(t.toBuffer)return r.from(t.toBuffer());throw Error("invalid type")},e.exports.bufferToHex=function(t){return"0x"+(t=(0,e.exports.toBuffer)(t)).toString("hex")},e.exports.bufferToBigInt=a,e.exports.bigIntToBuffer=u,e.exports.bufferToInt=function(e){let t=Number(a(e));if(!Number.isSafeInteger(t))throw Error("Number exceeds 53 bits");return t},e.exports.fromSigned=function(e){return BigInt.asIntN(256,a(e))},e.exports.toUnsigned=function(e){return u(BigInt.asUintN(256,e))},e.exports.addHexPrefix=function(e){return"string"!=typeof e?e:(0,o.isHexPrefixed)(e)?e:"0x"+e},e.exports.short=/**
 * Shortens a string  or buffer's hex string representation to maxLength (default 50).
 *
 * Examples:
 *
 * Input:  '657468657265756d000000000000000000000000000000000000000000000000'
 * Output: '657468657265756d0000000000000000000000000000000000…'
 */function(e,t=50){let n=r.isBuffer(e)?e.toString("hex"):e;return n.length<=t?n:n.slice(0,t)+"…"},e.exports.toUtf8=function(e){if((e=(0,o.stripHexPrefix)(e)).length%2!=0)throw Error("Invalid non-even hex string input for toUtf8() provided");let t=r.from(e.replace(/^(00)+|(00)+$/g,""),"hex");return t.toString("utf8")},e.exports.baToJSON=function(t){if(r.isBuffer(t))return`0x${t.toString("hex")}`;if(t instanceof Array){let r=[];for(let n=0;n<t.length;n++)r.push((0,e.exports.baToJSON)(t[n]));return r}},e.exports.validateNoLeadingZeroes=function(e){for(let[t,r]of Object.entries(e))if(void 0!==r&&r.length>0&&0===r[0])throw Error(`${t} cannot have leading zeroes, received: ${r.toString("hex")}`)},e.exports.arrToBufArr=function e(t){return Array.isArray(t)?t.map(t=>e(t)):r.from(t)},e.exports.bufArrToArr=function e(t){return Array.isArray(t)?t.map(t=>e(t)):Uint8Array.from(t??[])},e.exports.bigIntToHex=e=>"0x"+e.toString(16),e.exports.bigIntToUnpaddedBuffer=/**
 * Convert value from bigint to an unpadded Buffer
 * (useful for RLP transport)
 * @param value value to convert
 */function(t){return(0,e.exports.unpadBuffer)(u(t))},e.exports.intToUnpaddedBuffer=function(t){return(0,e.exports.unpadBuffer)((0,e.exports.intToBuffer)(t))}}),T.register("2o6kc",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.assertIsString=e.exports.assertIsArray=e.exports.assertIsBuffer=e.exports.assertIsHexString=void 0;var n=T("hLAiR");e.exports.assertIsHexString=function(e){if(!(0,n.isHexString)(e)){let t=`This method only supports 0x-prefixed hex strings but input was: ${e}`;throw Error(t)}},e.exports.assertIsBuffer=function(e){if(!r.isBuffer(e)){let t=`This method only supports Buffer but input was: ${e}`;throw Error(t)}},e.exports.assertIsArray=function(e){if(!Array.isArray(e)){let t=`This method only supports number arrays but input was: ${e}`;throw Error(t)}},e.exports.assertIsString=function(e){if("string"!=typeof e){let t=`This method only supports strings but input was: ${e}`;throw Error(t)}}}),T.register("hLAiR",function(e,t){var r=T("awmEs").Buffer;/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param str the string input value
 * @return a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */function n(e){if("string"!=typeof e)throw Error(`[isHexPrefixed] input must be type 'string', received type ${typeof e}`);return"0"===e[0]&&"x"===e[1]}/**
 * Pads a `String` to have an even length
 * @param value
 * @return output
 */function o(e){let t=e;if("string"!=typeof t)throw Error(`[padToEven] value must be type 'string', received ${typeof t}`);return t.length%2&&(t=`0${t}`),t}/*
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE
 */Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isHexString=e.exports.getKeys=e.exports.fromAscii=e.exports.fromUtf8=e.exports.toAscii=e.exports.arrayContainsArray=e.exports.getBinarySize=e.exports.padToEven=e.exports.stripHexPrefix=e.exports.isHexPrefixed=void 0,e.exports.isHexPrefixed=n,e.exports.stripHexPrefix=e=>{if("string"!=typeof e)throw Error(`[stripHexPrefix] input must be type 'string', received ${typeof e}`);return n(e)?e.slice(2):e},e.exports.padToEven=o,e.exports.getBinarySize=/**
 * Get the binary size of a string
 * @param str
 * @returns the number of bytes contained within the string
 */function(e){if("string"!=typeof e)throw Error(`[getBinarySize] method requires input type 'string', received ${typeof e}`);return r.byteLength(e,"utf8")},e.exports.arrayContainsArray=/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param superset
 * @param subset
 *
 */function(e,t,r){if(!0!==Array.isArray(e))throw Error(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof e}'`);if(!0!==Array.isArray(t))throw Error(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof t}'`);return t[!0===r?"some":"every"](t=>e.indexOf(t)>=0)},e.exports.toAscii=/**
 * Should be called to get ascii from its hex representation
 *
 * @param string in hex
 * @returns ascii string representation of hex value
 */function(e){let t="",r=0,n=e.length;for("0x"===e.substring(0,2)&&(r=2);r<n;r+=2){let n=parseInt(e.substr(r,2),16);t+=String.fromCharCode(n)}return t},e.exports.fromUtf8=/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @param string
 * @param optional padding
 * @returns hex representation of input string
 */function(e){let t=r.from(e,"utf8");return`0x${o(t.toString("hex")).replace(/^0+|0+$/g,"")}`},e.exports.fromAscii=/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @param  string
 * @param  optional padding
 * @returns  hex representation of input string
 */function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r),o=n.toString(16);t+=o.length<2?`0${o}`:o}return`0x${t}`},e.exports.getKeys=/**
 * Returns the keys from an array of objects.
 * @example
 * ```js
 * getKeys([{a: '1', b: '2'}, {a: '3', b: '4'}], 'a') => ['1', '3']
 *````
 * @param  params
 * @param  key
 * @param  allowEmpty
 * @returns output just a simple array of output keys
 */function(e,t,r){if(!Array.isArray(e))throw Error(`[getKeys] method expects input 'params' to be an array, got ${typeof e}`);if("string"!=typeof t)throw Error(`[getKeys] method expects input 'key' to be type 'string', got ${typeof e}`);let n=[];for(let o=0;o<e.length;o++){let i=e[o][t];if(!0!==r||i){if("string"!=typeof i)throw Error(`invalid abi - expected type 'string', received ${typeof i}`)}else i="";n.push(i)}return n},e.exports.isHexString=/**
 * Is the string a hex string.
 *
 * @param  value
 * @param  length
 * @returns  output the string is a hex string
 */function(e,t){return"string"==typeof e&&!!e.match(/^0x[0-9A-Fa-f]*$/)&&(void 0===t||!(t>0)||e.length===2+2*t)}}),T.register("2v25P",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Address=void 0;var n=T("iEqpe"),o=T("6z9tO");/**
 * Handling and generating Ethereum addresses
 */class i{constructor(e){if(20!==e.length)throw Error("Invalid address length");this.buf=e}/**
     * Returns the zero address.
     */static zero(){return new i((0,o.zeros)(20))}/**
     * Returns an Address object from a hex-encoded string.
     * @param str - Hex-encoded address
     */static fromString(e){if(!(0,n.isValidAddress)(e))throw Error("Invalid address");return new i((0,o.toBuffer)(e))}/**
     * Returns an address for a given public key.
     * @param pubKey The two points of an uncompressed key
     */static fromPublicKey(e){if(!r.isBuffer(e))throw Error("Public key should be Buffer");let t=(0,n.pubToAddress)(e);return new i(t)}/**
     * Returns an address for a given private key.
     * @param privateKey A private key must be 256 bits wide
     */static fromPrivateKey(e){if(!r.isBuffer(e))throw Error("Private key should be Buffer");let t=(0,n.privateToAddress)(e);return new i(t)}/**
     * Generates an address for a newly created contract.
     * @param from The address which is creating this new address
     * @param nonce The nonce of the from account
     */static generate(e,t){if("bigint"!=typeof t)throw Error("Expected nonce to be a bigint");return new i((0,n.generateAddress)(e.buf,(0,o.bigIntToBuffer)(t)))}/**
     * Generates an address for a contract created using CREATE2.
     * @param from The address which is creating this new address
     * @param salt A salt
     * @param initCode The init code of the contract being created
     */static generate2(e,t,o){if(!r.isBuffer(t))throw Error("Expected salt to be a Buffer");if(!r.isBuffer(o))throw Error("Expected initCode to be a Buffer");return new i((0,n.generateAddress2)(e.buf,t,o))}/**
     * Is address equal to another.
     */equals(e){return this.buf.equals(e.buf)}/**
     * Is address zero.
     */isZero(){return this.equals(i.zero())}/**
     * True if address is in the address range defined
     * by EIP-1352
     */isPrecompileOrSystemAddress(){let e=(0,o.bufferToBigInt)(this.buf),t=BigInt(0),r=BigInt("0xffff");return e>=t&&e<=r}/**
     * Returns hex encoding of address.
     */toString(){return"0x"+this.buf.toString("hex")}/**
     * Returns Buffer representation of address.
     */toBuffer(){return r.from(this.buf)}}e.exports.Address=i}),T.register("26jpW",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Withdrawal=void 0;var n=T("2v25P"),o=T("6z9tO"),i=T("lwsBN");/**
 * Representation of EIP-4895 withdrawal data
 */class s{/**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating a Withdrawal object from varying data types.
     * Its amount is in Gwei to match CL representation and for eventual ssz withdrawalsRoot
     */constructor(e,t,r,/**
     * withdrawal amount in Gwei to match the CL repesentation and eventually ssz withdrawalsRoot
     */n){this.index=e,this.validatorIndex=t,this.address=r,this.amount=n}static fromWithdrawalData(e){let{index:t,validatorIndex:r,address:o,amount:a}=e,u=(0,i.toType)(t,i.TypeOutput.BigInt),l=(0,i.toType)(r,i.TypeOutput.BigInt),c=new n.Address((0,i.toType)(o,i.TypeOutput.Buffer)),f=(0,i.toType)(a,i.TypeOutput.BigInt);return new s(u,l,c,f)}static fromValuesArray(e){if(4!==e.length)throw Error(`Invalid withdrawalArray length expected=4 actual=${e.length}`);let[t,r,n,o]=e;return s.fromWithdrawalData({index:t,validatorIndex:r,address:n,amount:o})}/**
     * Convert a withdrawal to a buffer array
     * @param withdrawal the withdrawal to convert
     * @returns buffer array of the withdrawal
     */static toBufferArray(e){let t;let{index:o,validatorIndex:s,address:a,amount:u}=e,l=(0,i.toType)(o,i.TypeOutput.BigInt)===BigInt(0)?r.alloc(0):(0,i.toType)(o,i.TypeOutput.Buffer),c=(0,i.toType)(s,i.TypeOutput.BigInt)===BigInt(0)?r.alloc(0):(0,i.toType)(s,i.TypeOutput.Buffer);t=a instanceof n.Address?a.buf:(0,i.toType)(a,i.TypeOutput.Buffer);let f=(0,i.toType)(u,i.TypeOutput.BigInt)===BigInt(0)?r.alloc(0):(0,i.toType)(u,i.TypeOutput.Buffer);return[l,c,t,f]}raw(){return s.toBufferArray(this)}toValue(){return{index:this.index,validatorIndex:this.validatorIndex,address:this.address.buf,amount:this.amount}}toJSON(){return{index:(0,o.bigIntToHex)(this.index),validatorIndex:(0,o.bigIntToHex)(this.validatorIndex),address:"0x"+this.address.buf.toString("hex"),amount:(0,o.bigIntToHex)(this.amount)}}}e.exports.Withdrawal=s}),T.register("lwsBN",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.toType=e.exports.TypeOutput=void 0;var r,n,o=T("6z9tO"),i=T("hLAiR");(r=n=e.exports.TypeOutput||(e.exports.TypeOutput={}))[r.Number=0]="Number",r[r.BigInt=1]="BigInt",r[r.Buffer=2]="Buffer",r[r.PrefixedHexString=3]="PrefixedHexString",e.exports.toType=function(e,t){if(null===e)return null;if(void 0===e)return;if("string"!=typeof e||(0,i.isHexString)(e)){if("number"==typeof e&&!Number.isSafeInteger(e))throw Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)")}else throw Error(`A string must be provided with a 0x-prefix, given: ${e}`);let r=(0,o.toBuffer)(e);switch(t){case n.Buffer:return r;case n.BigInt:return(0,o.bufferToBigInt)(r);case n.Number:{let e=(0,o.bufferToBigInt)(r);if(e>BigInt(Number.MAX_SAFE_INTEGER))throw Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");return Number(e)}case n.PrefixedHexString:return(0,o.bufferToHex)(r);default:throw Error("unknown outputType")}}}),T.register("1HjsM",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hashPersonalMessage=e.exports.isValidSignature=e.exports.fromRpcSig=e.exports.toCompactSig=e.exports.toRpcSig=e.exports.ecrecover=e.exports.ecsign=void 0;var n=T("JAeV7"),o=T("jf5pN"),i=T("6z9tO"),s=T("jAJUj"),a=T("2o6kc");function u(e,t){return e===BigInt(0)||e===BigInt(1)?e:void 0===t?e-BigInt(27):e-(t*BigInt(2)+BigInt(35))}function l(e){return e===BigInt(0)||e===BigInt(1)}e.exports.ecsign=/**
 * Returns the ECDSA signature of a message hash.
 *
 * If `chainId` is provided assume an EIP-155-style signature and calculate the `v` value
 * accordingly, otherwise return a "static" `v` just derived from the `recovery` bit
 */function(e,t,n){let i=o.secp256k1.sign(e,t),s=i.toCompactRawBytes(),a=r.from(s.slice(0,32)),u=r.from(s.slice(32,64)),l=void 0===n?BigInt(i.recovery+27):BigInt(i.recovery+35)+BigInt(n)*BigInt(2);return{r:a,s:u,v:l}},e.exports.ecrecover=function(e,t,n,s,a){let c=r.concat([(0,i.setLengthLeft)(n,32),(0,i.setLengthLeft)(s,32)],64),f=u(t,a);if(!l(f))throw Error("Invalid signature v value");let p=o.secp256k1.Signature.fromCompact(c).addRecoveryBit(Number(f)),h=p.recoverPublicKey(e);return r.from(h.toRawBytes(!1).slice(1))},e.exports.toRpcSig=function(e,t,n,o){let s=u(e,o);if(!l(s))throw Error("Invalid signature v value");// geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
return(0,i.bufferToHex)(r.concat([(0,i.setLengthLeft)(t,32),(0,i.setLengthLeft)(n,32),(0,i.toBuffer)(e)]))},e.exports.toCompactSig=function(e,t,n,o){let s=u(e,o);if(!l(s))throw Error("Invalid signature v value");let a=n;return(e>BigInt(28)&&e%BigInt(2)===BigInt(1)||e===BigInt(1)||e===BigInt(28))&&(a=r.from(n),a[0]|=128),(0,i.bufferToHex)(r.concat([(0,i.setLengthLeft)(t,32),(0,i.setLengthLeft)(a,32)]))},e.exports.fromRpcSig=function(e){let t,r,n;let o=(0,i.toBuffer)(e);if(o.length>=65)t=o.slice(0,32),r=o.slice(32,64),n=(0,i.bufferToBigInt)(o.slice(64));else if(64===o.length)// Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
t=o.slice(0,32),r=o.slice(32,64),n=BigInt((0,i.bufferToInt)(o.slice(32,33))>>7),r[0]&=127;else throw Error("Invalid signature length");return n<27&&(n+=BigInt(27)),{v:n,r:t,s:r}},e.exports.isValidSignature=function(e,t,r,n=!0,o){if(32!==t.length||32!==r.length||!l(u(e,o)))return!1;let a=(0,i.bufferToBigInt)(t),c=(0,i.bufferToBigInt)(r);return a!==BigInt(0)&&!(a>=s.SECP256K1_ORDER)&&c!==BigInt(0)&&!(c>=s.SECP256K1_ORDER)&&(!n||!(c>=s.SECP256K1_ORDER_DIV_2))},e.exports.hashPersonalMessage=function(e){(0,a.assertIsBuffer)(e);let t=r.from(`\u0019Ethereum Signed Message:
${e.length}`,"utf-8");return r.from((0,n.keccak256)(r.concat([t,e])))}}),T.register("35c1o",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.compactBytesToNibbles=e.exports.bytesToNibbles=e.exports.nibblesToCompactBytes=e.exports.nibblesToBytes=e.exports.hasTerminator=void 0,e.exports.hasTerminator=e=>e.length>0&&16===e[e.length-1],e.exports.nibblesToBytes=(e,t)=>{for(let r=0,n=0;n<e.length;r+=1,n+=2)t[r]=e[n]<<4|e[n+1]},e.exports.nibblesToCompactBytes=t=>{let r=0;(0,e.exports.hasTerminator)(t)&&(r=1,// Remove the terminator from the sequence
t=t.subarray(0,t.length-1));let n=new Uint8Array(t.length/2+1);return(// Shift the terminator info into the first nibble of buf[0]
n[0]=r<<5,(1&t.length)==1&&(n[0]|=16,n[0]|=t[0],t=t.subarray(1)),// create bytes out of the rest even nibbles
(0,e.exports.nibblesToBytes)(t,n.subarray(1)),n)},e.exports.bytesToNibbles=e=>{let t=2*e.length+1,r=new Uint8Array(t);for(let t=0;t<e.length;t++){let n=e[t];r[2*t]=n/16,r[2*t+1]=n%16}return(// This will get removed from calling function if the first nibble
// indicates that terminator is not present
r[t-1]=16,r)},e.exports.compactBytesToNibbles=t=>{if(0===t.length)return t;let r=(0,e.exports.bytesToNibbles)(t);// delete terminator flag if terminator flag was not in first nibble
r[0]<2&&(r=r.subarray(0,r.length-1));// chop the terminator nibble and the even padding (if there is one)
// i.e.  chop 2 left nibbles when even else 1 when odd
let n=2-(1&r[0]);return r.subarray(n)};//
//
// export const getPathTo = (tillBytes: number, key: Buffer) => {
//   const hexNibbles = bytesToNibbles(key).subarray(0, tillBytes)
//   // Remove the terminator if its there, although it would be there only if tillBytes >= key.length
//   // This seems to be a test helper to generate paths so correctness of this isn't necessary
//   hexNibbles[hexNibbles.length - 1] = 0
//   const compactBytes = nibblesToCompactBytes(hexNibbles)
//   return [Buffer.from(compactBytes)]
// }
}),T.register("baqEQ",function(e,t){/**
 * Ported to Typescript from original implementation below:
 * https://github.com/ahultgren/async-eventemitter -- MIT licensed
 *
 * Type Definitions based on work by: patarapolw <https://github.com/patarapolw> -- MIT licensed
 * that was contributed to Definitely Typed below:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/async-eventemitter
 */Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.AsyncEventEmitter=void 0;var r=T("k4yOc");async function n(e,t,r){let n;for await(let o of t)try{o.length<2?o.call(e,r):await new Promise((t,n)=>{o.call(e,r,e=>{e?n(e):t()})})}catch(e){n=e}if(n)throw n}class o extends r.EventEmitter{emit(e,...t){let[r,o]=t,i=this._events[e]??[];return void 0===o&&"function"==typeof r&&(o=r,r=void 0),("newListener"===e||"removeListener"===e)&&(r={event:r,fn:o},o=void 0),n(this,// A single listener is just a function not an array...
(i=Array.isArray(i)?i:[i]).slice(),r).then(o).catch(o),this.listenerCount(e)>0}once(e,t){let r;let n=this;if("function"!=typeof t)throw TypeError("listener must be a function");return r=t.length>=2?function(o,i){n.removeListener(e,r),t(o,i)}:function(o){n.removeListener(e,r),t(o,r)},n.on(e,r),n}first(e,t){let r=this._events[e]??[];// Contract
if("function"!=typeof t)throw TypeError("listener must be a function");return Array.isArray(r)||(this._events[e]=r=[r]),r.unshift(t),this}before(e,t,r){return this.beforeOrAfter(e,t,r)}after(e,t,r){return this.beforeOrAfter(e,t,r,"after")}beforeOrAfter(e,t,r,n){let o,i,s=this._events[e]??[],a="after"===n?1:0;// Contract
if("function"!=typeof r)throw TypeError("listener must be a function");if("function"!=typeof t)throw TypeError("target must be a function");for(Array.isArray(s)||(this._events[e]=s=[s]),i=s.length,o=s.length;o--;)if(s[o]===t){i=o+a;break}return s.splice(i,0,r),this}on(e,t){return super.on(e,t)}addListener(e,t){return super.addListener(e,t)}prependListener(e,t){return super.prependListener(e,t)}prependOnceListener(e,t){return super.prependOnceListener(e,t)}removeAllListeners(e){return super.removeAllListeners(e)}removeListener(e,t){return super.removeListener(e,t)}eventNames(){return super.eventNames()}listeners(e){return super.listeners(e)}listenerCount(e){return super.listenerCount(e)}getMaxListeners(){return super.getMaxListeners()}setMaxListeners(e){return super.setMaxListeners(e)}}e.exports.AsyncEventEmitter=o}),T.register("1XbFe",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Lock=void 0,e.exports.Lock=// Based on https://github.com/jsoendermann/semaphore-async-await/blob/master/src/Semaphore.ts
class{constructor(){this.permits=1,this.promiseResolverQueue=[]}/**
     * Returns a promise used to wait for a permit to become available. This method should be awaited on.
     * @returns  A promise that gets resolved when execution is allowed to proceed.
     */async acquire(){return this.permits>0?(this.permits-=1,Promise.resolve(!0)):new Promise(e=>this.promiseResolverQueue.push(e))}/**
     * Increases the number of permits by one. If there are other functions waiting, one of them will
     * continue to execute in a future iteration of the event loop.
     */release(){if(this.permits+=1,this.permits>1&&this.promiseResolverQueue.length>0)console.warn("Lock.permits should never be > 0 when there is someone waiting.");else if(1===this.permits&&this.promiseResolverQueue.length>0){// If there is someone else waiting, immediately consume the permit that was released
// at the beginning of this function and let the waiting function resume.
this.permits-=1;let e=this.promiseResolverQueue.shift();e&&e(!0)}}}}),T.register("9JdfS",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getProvider=e.exports.fetchFromProvider=void 0;var r=T("kidiy");let n=async(e,t)=>{let n=await (0,r.default)(e,{headers:{"content-type":"application/json"},type:"json",data:{method:t.method,params:t.params,jsonrpc:"2.0",id:1}});return n.result};e.exports.fetchFromProvider=n,e.exports.getProvider=e=>{if("string"==typeof e)return e;if(e?.connection?.url!==void 0)return e.connection.url;throw Error("Must provide valid provider URL or Web3Provider")}}),T.register("kidiy",function(e,t){var r=T("awmEs").Buffer,n=T("9Mq5w");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.InvalidStatusCodeError=e.exports.InvalidCertError=void 0;let o=Object.freeze({redirect:!0,expectStatusCode:200,headers:{},full:!1,keepAlive:!0,cors:!1,referrer:!1,sslAllowSelfSigned:!1,_redirectCount:0});class i extends Error{constructor(e,t){super(e),this.fingerprint256=t}}e.exports.InvalidCertError=i;class s extends Error{constructor(e){super(`Request Failed. Status Code: ${e}`),this.statusCode=e}}function a(e,t){if(!t||"text"===t||"json"===t)try{let r=new TextDecoder("utf8",{fatal:!0}).decode(e);if("text"===t)return r;try{return JSON.parse(r)}catch(e){if("json"===t)throw e;return r}}catch(e){if("text"===t||"json"===t)throw e}return e}e.exports.InvalidStatusCodeError=s;let u={},l=new Set(["Accept","Accept-Language","Content-Language","Content-Type"].map(e=>e.toLowerCase())),c=new Set(["Accept-Charset","Accept-Encoding","Access-Control-Request-Headers","Access-Control-Request-Method","Connection","Content-Length","Cookie","Cookie2","Date","DNT","Expect","Host","Keep-Alive","Origin","Referer","TE","Trailer","Transfer-Encoding","Upgrade","Via"].map(e=>e.toLowerCase()));async function f(e,t){let r={...o,...t},n=new Headers;"json"===r.type&&n.set("Content-Type","application/json");let i=new URL(e);if(i.username){let e=btoa(`${i.username}:${i.password}`);n.set("Authorization",`Basic ${e}`),i.username="",i.password=""}for(let t in e=""+i,r.headers){let e=t.toLowerCase();(l.has(e)||r.cors&&!c.has(e))&&n.set(t,r.headers[t])}let u={headers:n,redirect:r.redirect?"follow":"manual"};r.referrer||(u.referrerPolicy="no-referrer"),r.cors&&(u.mode="cors"),r.data&&(r.method||(u.method="POST"),u.body="json"===r.type?JSON.stringify(r.data):r.data);let f=await fetch(e,u);if(r.expectStatusCode&&f.status!==r.expectStatusCode)throw new s(f.status);let p=a(new Uint8Array(await f.arrayBuffer()),r.type);return r.full?{headers:Object.fromEntries(f.headers.entries()),status:f.status,body:p}:p}let p=!!("object"==typeof n&&n.versions&&n.versions.node&&n.versions.v8);e.exports.default=function(e,t){let n=p?function e(t,n){let l={...o,...n},c=T("pLvEh"),f=T("9Hjkc"),p=T("76qkq"),{promisify:h}=T("gOtyk"),{resolve:d}=T("g3AIT"),y=!!/^https/.test(t),g={method:l.method||"GET",headers:{"Accept-Encoding":"gzip, deflate, br"}},b=e=>e.replace(/:| /g,"").toLowerCase();if(l.keepAlive){let e=[y,y&&l.sslPinnedCertificates?.map(e=>b(e)).sort()].join();g.agent=u[e]||(u[e]=new(y?f:c).Agent({keepAlive:!0,keepAliveMsecs:3e4,maxFreeSockets:1024,maxCachedSessions:1024}))}"json"===l.type&&(g.headers["Content-Type"]="application/json"),l.data&&(l.method||(g.method="POST"),g.body="json"===l.type?JSON.stringify(l.data):l.data),g.headers={...g.headers,...l.headers},l.sslAllowSelfSigned&&(g.rejectUnauthorized=!1);let m=async n=>{let o=n.statusCode;if(l.redirect&&300<=o&&o<400&&n.headers.location){if(10==l._redirectCount)throw Error("Request failed. Too much redirects.");return l._redirectCount+=1,await e(d(t,n.headers.location),l)}if(l.expectStatusCode&&o!==l.expectStatusCode)throw n.resume(),new s(o);let i=[];for await(let e of n)i.push(e);let u=r.concat(i),c=n.headers["content-encoding"];"br"===c&&(u=await h(p.brotliDecompress)(u)),("gzip"===c||"deflate"===c)&&(u=await h(p.unzip)(u));let f=a(u,l.type);return l.full?{headers:n.headers,status:o,body:f}:f};return new Promise((r,n)=>{let o=async r=>{if(r&&"DEPTH_ZERO_SELF_SIGNED_CERT"===r.code)try{await e(t,{...l,sslAllowSelfSigned:!0,sslPinnedCertificates:[]})}catch(e){e&&e.fingerprint256&&(r=new i(`Self-signed SSL certificate: ${e.fingerprint256}`,e.fingerprint256))}n(r)},s=(y?f:c).request(t,g,e=>{e.on("error",o),(async()=>{try{r(await m(e))}catch(e){n(e)}})()});s.on("error",o);let a=l.sslPinnedCertificates?.map(e=>b(e)),u=e=>{let t=b(e.getPeerCertificate()?.fingerprint256||"");if(!(!t&&e.isSessionReused())&&!a.includes(t))return s.emit("error",new i(`Invalid SSL certificate: ${t} Expected: ${a}`,t)),s.abort()};l.sslPinnedCertificates&&s.on("socket",e=>{let t=e.listeners("secureConnect").map(e=>(e.name||"").replace("bound ","")).includes("mfetchSecureConnect");t||e.on("secureConnect",u.bind(null,e))}),l.keepAlive&&s.setNoDelay(!0),g.body&&s.write(g.body),s.end()})}:f;return n(e,t)}}),T.register("9Mq5w",function(e,t){// shim for using process in browser
var r,n,o,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return r(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return r.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],c=!1,f=-1;function p(){c&&o&&(c=!1,o.length?l=o.concat(l):f=-1,l.length&&h())}function h(){if(!c){var e=u(p);c=!0;for(var t=l.length;t;){for(o=l,l=[];++f<t;)o&&o[f].run();f=-1,t=l.length}o=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function d(e,t){this.fun=e,this.array=t}function y(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||c||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}),T.register("pLvEh",function(e,t){var r=T("7gnh3"),n=T("biCs1"),o=T("2eBQb"),i=T("djNDF"),s=T("g3AIT"),a=e.exports;a.request=function(e,t){e="string"==typeof e?s.parse(e):o(e);// Normally, the page is loaded from http or https, so not specifying a protocol
// will result in a (valid) protocol-relative url. However, this won't work if
// the protocol is something else, like 'file:'
var n=-1===_.location.protocol.search(/^https?:$/)?"http:":"",i=e.protocol||n,a=e.hostname||e.host,u=e.port,l=e.path||"/";a&&-1!==a.indexOf(":")&&(a="["+a+"]"),// This may be a relative url. The browser should always be able to interpret it correctly.
e.url=(a?i+"//"+a:"")+(u?":"+u:"")+l,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};// Also valid opts.auth, opts.mode
var c=new r(e);return t&&c.on("response",t),c},a.get=function(e,t){var r=a.request(e,t);return r.end(),r},a.ClientRequest=r,a.IncomingMessage=n.IncomingMessage,a.Agent=function(){},a.Agent.defaultMaxSockets=4,a.globalAgent=new a.Agent,a.STATUS_CODES=i,a.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]}),T.register("7gnh3",function(e,t){var r=T("awmEs").Buffer,n=T("9Mq5w"),o=T("iByvc"),i=T("6cuMU"),s=T("biCs1"),a=T("l8KM5"),u=s.IncomingMessage,l=s.readyStates,c=e.exports=function(e){var t,n,i,s=this;a.Writable.call(s),s._opts=e,s._body=[],s._headers={},e.auth&&s.setHeader("Authorization","Basic "+r.from(e.auth).toString("base64")),Object.keys(e.headers).forEach(function(t){s.setHeader(t,e.headers[t])});var u=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!o.abortController)// If the use of XHR should be preferred. Not typically needed.
u=!1,i=!0;else if("prefer-streaming"===e.mode)// the accuracy of the 'content-type' header aren't
i=!1;else if("allow-wrong-content-type"===e.mode)i=!o.overrideMimeType;else if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw Error("Invalid value for opts.mode");else i=!0;s._mode=(t=i,n=u,o.fetch&&n?"fetch":o.mozchunkedarraybuffer?"moz-chunked-arraybuffer":o.msstream?"ms-stream":o.arraybuffer&&t?"arraybuffer":"text"),s._fetchTimer=null,s._socketTimeout=null,s._socketTimer=null,s.on("finish",function(){s._onFinish()})};i(c,a.Writable),c.prototype.setHeader=function(e,t){var r=e.toLowerCase();// This check is not necessary, but it prevents warnings from browsers about setting unsafe
// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
// http-browserify did it, so I will too.
-1===f.indexOf(r)&&(this._headers[r]={name:e,value:t})},c.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},c.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},c.prototype._onFinish=function(){var e=this;if(!e._destroyed){var t=e._opts;"timeout"in t&&0!==t.timeout&&e.setTimeout(t.timeout);var r=e._headers,i=null;"GET"!==t.method&&"HEAD"!==t.method&&(i=new Blob(e._body,{type:(r["content-type"]||{}).value||""}));// create flattened list of headers
var s=[];if(Object.keys(r).forEach(function(e){var t=r[e].name,n=r[e].value;Array.isArray(n)?n.forEach(function(e){s.push([t,e])}):s.push([t,n])}),"fetch"===e._mode){var a=null;if(o.abortController){var u=new AbortController;a=u.signal,e._fetchAbortController=u,"requestTimeout"in t&&0!==t.requestTimeout&&(e._fetchTimer=_.setTimeout(function(){e.emit("requestTimeout"),e._fetchAbortController&&e._fetchAbortController.abort()},t.requestTimeout))}_.fetch(e._opts.url,{method:e._opts.method,headers:s,body:i||void 0,mode:"cors",credentials:t.withCredentials?"include":"same-origin",signal:a}).then(function(t){e._fetchResponse=t,e._resetTimers(!1),e._connect()},function(t){e._resetTimers(!0),e._destroyed||e.emit("error",t)})}else{var c=e._xhr=new _.XMLHttpRequest;try{c.open(e._opts.method,e._opts.url,!0)}catch(t){n.nextTick(function(){e.emit("error",t)});return}"responseType"in c&&(c.responseType=e._mode),"withCredentials"in c&&(c.withCredentials=!!t.withCredentials),"text"===e._mode&&"overrideMimeType"in c&&c.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in t&&(c.timeout=t.requestTimeout,c.ontimeout=function(){e.emit("requestTimeout")}),s.forEach(function(e){c.setRequestHeader(e[0],e[1])}),e._response=null,c.onreadystatechange=function(){switch(c.readyState){case l.LOADING:case l.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(c.onprogress=function(){e._onXHRProgress()}),c.onerror=function(){e._destroyed||(e._resetTimers(!0),e.emit("error",Error("XHR error")))};try{c.send(i)}catch(t){n.nextTick(function(){e.emit("error",t)});return}}}},c.prototype._onXHRProgress=function(){this._resetTimers(!1),/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}}(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress(this._resetTimers.bind(this)))},c.prototype._connect=function(){var e=this;e._destroyed||(e._response=new u(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",function(t){e.emit("error",t)}),e.emit("response",e._response))},c.prototype._write=function(e,t,r){this._body.push(e),r()},c.prototype._resetTimers=function(e){var t=this;_.clearTimeout(t._socketTimer),t._socketTimer=null,e?(_.clearTimeout(t._fetchTimer),t._fetchTimer=null):t._socketTimeout&&(t._socketTimer=_.setTimeout(function(){t.emit("timeout")},t._socketTimeout))},c.prototype.abort=c.prototype.destroy=function(e){this._destroyed=!0,this._resetTimers(!0),this._response&&(this._response._destroyed=!0),this._xhr?this._xhr.abort():this._fetchAbortController&&this._fetchAbortController.abort(),e&&this.emit("error",e)},c.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),a.Writable.prototype.end.call(this,e,t,r)},c.prototype.setTimeout=function(e,t){t&&this.once("timeout",t),this._socketTimeout=e,this._resetTimers(!1)},c.prototype.flushHeaders=function(){},c.prototype.setNoDelay=function(){},c.prototype.setSocketKeepAlive=function(){};// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var f=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]}),T.register("iByvc",function(e,t){var r,n,o,s,a,u,l,c;function f(){// Cache the xhr value
if(void 0!==c)return c;if(_.XMLHttpRequest){c=new _.XMLHttpRequest;// If XDomainRequest is available (ie only, where xhr might not work
// cross domain), use the page location. Otherwise use example.com
// Note: this doesn't actually make an http request.
try{c.open("GET",_.XDomainRequest?"/":"https://example.com")}catch(e){c=null}}else c=null;return c}function p(e){var t=f();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function h(e){return"function"==typeof e}i(e.exports,"fetch",()=>r,e=>r=e),i(e.exports,"writableStream",()=>n,e=>n=e),i(e.exports,"abortController",()=>o,e=>o=e),i(e.exports,"arraybuffer",()=>s,e=>s=e),i(e.exports,"msstream",()=>a,e=>a=e),i(e.exports,"mozchunkedarraybuffer",()=>u,e=>u=e),i(e.exports,"overrideMimeType",()=>l,e=>l=e),r=h(_.fetch)&&h(_.ReadableStream),n=h(_.WritableStream),o=h(_.AbortController),s=r||p("arraybuffer"),a=!r&&p("ms-stream"),u=!r&&p("moz-chunked-arraybuffer"),l=r||!!f()&&h(f().overrideMimeType),c=null// Help gc
}),T.register("6cuMU",function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}}),T.register("biCs1",function(e,t){i(e.exports,"readyStates",()=>r,e=>r=e),i(e.exports,"IncomingMessage",()=>n,e=>n=e);var r,n,o=T("9Mq5w"),s=T("awmEs").Buffer,a=T("iByvc"),u=T("6cuMU"),l=T("l8KM5"),c=r={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},f=n=function(e,t,r,n){var i=this;if(l.Readable.call(i),i._mode=r,i.headers={},i.rawHeaders=[],i.trailers={},i.rawTrailers=[],// Fake the 'close' event, but only once 'end' fires
i.on("end",function(){// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
o.nextTick(function(){i.emit("close")})}),"fetch"===r){if(i._fetchResponse=t,i.url=t.url,i.statusCode=t.status,i.statusMessage=t.statusText,t.headers.forEach(function(e,t){i.headers[t.toLowerCase()]=e,i.rawHeaders.push(t,e)}),a.writableStream){var u=new WritableStream({write:function(e){return n(!1),new Promise(function(t,r){i._destroyed?r():i.push(s.from(e))?t():i._resumeFetch=t})},close:function(){n(!0),i._destroyed||i.push(null)},abort:function(e){n(!0),i._destroyed||i.emit("error",e)}});try{t.body.pipeTo(u).catch(function(e){n(!0),i._destroyed||i.emit("error",e)});return}catch(e){}// pipeTo method isn't defined. Can't find a better way to feature test this
}// fallback for when writableStream or pipeTo aren't available
var c=t.body.getReader();!function e(){c.read().then(function(t){if(!i._destroyed){if(n(t.done),t.done){i.push(null);return}i.push(s.from(t.value)),e()}}).catch(function(e){n(!0),i._destroyed||i.emit("error",e)})}()}else if(i._xhr=e,i._pos=0,i.url=e.responseURL,i.statusCode=e.status,i.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===i.headers[r]&&(i.headers[r]=[]),i.headers[r].push(t[2])):void 0!==i.headers[r]?i.headers[r]+=", "+t[2]:i.headers[r]=t[2],i.rawHeaders.push(t[1],t[2])}}),i._charset="x-user-defined",!a.overrideMimeType){var f=i.rawHeaders["mime-type"];if(f){var p=f.match(/;\s*charset=([^;])(;|$)/);p&&(i._charset=p[1].toLowerCase())}i._charset||(i._charset="utf-8"// best guess
)}};u(f,l.Readable),f.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},f.prototype._onXHRProgress=function(e){var t=this,r=t._xhr,n=null;switch(t._mode){case"text":if((n=r.responseText).length>t._pos){var o=n.substr(t._pos);if("x-user-defined"===t._charset){for(var i=s.alloc(o.length),a=0;a<o.length;a++)i[a]=255&o.charCodeAt(a);t.push(i)}else t.push(o,t._charset);t._pos=n.length}break;case"arraybuffer":if(r.readyState!==c.DONE||!r.response)break;n=r.response,t.push(s.from(new Uint8Array(n)));break;case"moz-chunked-arraybuffer":if(n=r.response,r.readyState!==c.LOADING||!n)break;t.push(s.from(new Uint8Array(n)));break;case"ms-stream":if(n=r.response,r.readyState!==c.LOADING)break;var u=new _.MSStreamReader;u.onprogress=function(){u.result.byteLength>t._pos&&(t.push(s.from(new Uint8Array(u.result.slice(t._pos)))),t._pos=u.result.byteLength)},u.onload=function(){e(!0),t.push(null)},// reader.onerror = ??? // TODO: this
u.readAsArrayBuffer(n)}// The ms-stream case handles end separately in reader.onload()
t._xhr.readyState===c.DONE&&"ms-stream"!==t._mode&&(e(!0),t.push(null))}}),T.register("l8KM5",function(e,t){(t=e.exports=T("340fO")).Stream=t,t.Readable=t,t.Writable=T("lWtyM"),t.Duplex=T("1SlAW"),t.Transform=T("f7L7V"),t.PassThrough=T("dX7Dt"),t.finished=T("f6xbQ"),t.pipeline=T("2mqHM")}),T.register("340fO",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var r,n,o,i,s,a=T("9Mq5w");e.exports=A,/*</replacement>*/A.ReadableState=S,T("k4yOc").EventEmitter;var u=function(e,t){return e.listeners(t).length},l=T("4HDlr"),c=T("awmEs").Buffer,f=(void 0!==_?_:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},p=T("4AFFV");n=p&&p.debuglog?p.debuglog("stream"):function(){};var h=T("3QRBN"),d=T("5CW71"),y=T("71wq3").getHighWaterMark,g=T("kdLmP").codes,b=g.ERR_INVALID_ARG_TYPE,m=g.ERR_STREAM_PUSH_AFTER_EOF,v=g.ERR_METHOD_NOT_IMPLEMENTED,x=g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;T("6cuMU")(A,l);var w=d.errorOrDestroy,E=["error","close","destroy","pause","resume"];function S(e,t,n){r=r||T("1SlAW"),e=e||{},"boolean"!=typeof n&&(n=t instanceof r),// object stream flag. Used to make read(n) ignore n and to
// make all the buffer merging and length checks go away
this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.readableObjectMode),// the point at which it stops calling _read() to fill the buffer
// Note: 0 is a valid value, means "don't call _read preemptively ever"
this.highWaterMark=y(this,e,"readableHighWaterMark",n),// A linked list is used to store data chunks instead of an array because the
// linked list can remove elements from the beginning faster than
// array.shift()
this.buffer=new h,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,// a flag to be able to tell if the event 'readable'/'data' is emitted
// immediately, or on a later tick.  We set this to true at first, because
// any actions that shouldn't happen until "later" should generally also
// not happen before the first read call.
this.sync=!0,// whenever we return null, then we set a flag to say
// that we're awaiting a 'readable' event emission.
this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,// Should close be emitted on destroy. Defaults to true.
this.emitClose=!1!==e.emitClose,// Should .destroy() be called after 'end' (and potentially 'finish')
this.autoDestroy=!!e.autoDestroy,// has it been destroyed
this.destroyed=!1,// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=e.defaultEncoding||"utf8",// the number of writers that are awaiting a drain event in .pipe()s
this.awaitDrain=0,// if true, a maybeReadMore has been scheduled
this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(o||(o=T("bWgSm").StringDecoder),this.decoder=new o(e.encoding),this.encoding=e.encoding)}function A(e){if(r=r||T("1SlAW"),!(this instanceof A))return new A(e);// Checking for a Stream.Duplex instance is faster here instead of inside
// the ReadableState constructor, at least with V8 6.5
var t=this instanceof r;this._readableState=new S(e,this,t),// legacy
this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),l.call(this)}function O(e,t,r,o,i){n("readableAddChunk",t);var s,a,u,l,p,h=e._readableState;if(null===t)h.reading=!1,function(e,t){if(n("onEofChunk"),!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.sync?// Otherwise we risk emitting data in the flow()
// the readable code triggers during a read() call
R(e):(// emit 'readable' now to make sure it gets picked up.
t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,k(e)))}}(e,h);else{if(i||(s=h,a=t,c.isBuffer(a)||a instanceof f||"string"==typeof a||void 0===a||s.objectMode||(u=new b("chunk",["string","Buffer","Uint8Array"],a)),p=u),p)w(e,p);else if(h.objectMode||t&&t.length>0){if("string"==typeof t||h.objectMode||Object.getPrototypeOf(t)===c.prototype||(l=t,t=c.from(l)),o)h.endEmitted?w(e,new x):I(e,h,t,!0);else if(h.ended)w(e,new m);else{if(h.destroyed)return!1;h.reading=!1,h.decoder&&!r?(t=h.decoder.write(t),h.objectMode||0!==t.length?I(e,h,t,!1):N(e,h)):I(e,h,t,!1)}}else o||(h.reading=!1,N(e,h))}// We can push more data if we are below the highWaterMark.
// Also, if we have no data yet, we can stand some more bytes.
// This is to work around cases where hwm=0, such as the repl.
return!h.ended&&(h.length<h.highWaterMark||0===h.length)}function I(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(// update the buffer info.
t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&R(e)),N(e,t)}// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function B(e,t){if(e<=0||0===t.length&&t.ended)return 0;if(t.objectMode)return 1;if(e!=e)return(// Only flow one buffer at a time
t.flowing&&t.length?t.buffer.head.data.length:t.length);// If we're asking for more than the current hwm, then raise the hwm.
if(e>t.highWaterMark){var r;t.highWaterMark=((r=e)>=1073741824?r=1073741824:(// Get the next highest power of 2 to prevent increasing hwm excessively in
// tiny amounts
r--,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r++),r)}return e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0)}// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function R(e){var t=e._readableState;n("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(n("emitReadable",t.flowing),t.emittedReadable=!0,a.nextTick(k,e))}function k(e){var t=e._readableState;n("emitReadable_",t.destroyed,t.length,t.ended),!t.destroyed&&(t.length||t.ended)&&(e.emit("readable"),t.emittedReadable=!1),// The stream needs another readable event if
// 1. It is not flowing, as the flow mechanism will take
//    care of it.
// 2. It is not ended.
// 3. It is below the highWaterMark, so we can schedule
//    another readable later.
t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,U(e)}// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function N(e,t){t.readingMore||(t.readingMore=!0,a.nextTick(C,e,t))}function C(e,t){// Attempt to read more data if we should.
//
// The conditions for reading more data are (one of):
// - Not enough data buffered (state.length < state.highWaterMark). The loop
//   is responsible for filling the buffer with enough data if such data
//   is available. If highWaterMark is 0 and we are not in the flowing mode
//   we should _not_ attempt to buffer any extra data. We'll get more data
//   when the stream consumer calls read() instead.
// - No data in the buffer, and the stream is in flowing mode. In this mode
//   the loop below is responsible for ensuring read() is called. Failing to
//   call read here would abort the flow and there's no other mechanism for
//   continuing the flow if the stream consumer has just subscribed to the
//   'data' event.
//
// In addition to the above conditions to keep reading data, the following
// conditions prevent the data from being read:
// - The stream has ended (state.ended).
// - There is already a pending 'read' operation (state.reading). This is a
//   case where the the stream has called the implementation defined _read()
//   method, but they are processing the call asynchronously and have _not_
//   called push() with new data. In this case we skip performing more
//   read()s. The execution ends in this method again after the _read() ends
//   up calling push() with more data.
for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(n("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1}function L(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?// the upcoming resume will not flow.
t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function P(e){n("readable nexttick read 0"),e.read(0)}function j(e,t){n("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),U(e),t.flowing&&!t.reading&&e.read(0)}function U(e){var t=e._readableState;for(n("flow",t.flowing);t.flowing&&null!==e.read(););}// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function M(e,t){var r;return(// nothing buffered
0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r))}function D(e){var t=e._readableState;n("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,a.nextTick(F,t,e))}function F(e,t){// Check that we didn't get one last unshift.
if(n("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){// In case of duplex streams we need a way to detect
// if the writable side is ready for autoDestroy as well
var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy()}}function $(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}Object.defineProperty(A.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
this._readableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._readableState.destroyed=e)}}),A.prototype.destroy=d.destroy,A.prototype._undestroy=d.undestroy,A.prototype._destroy=function(e,t){t(e)},// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
A.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=c.from(e,t),t=""),r=!0),O(this,e,t,!1,r)},// Unshift should *always* be something directly out of read()
A.prototype.unshift=function(e){return O(this,e,null,!0,!1)},A.prototype.isPaused=function(){return!1===this._readableState.flowing},// backwards compatibility.
A.prototype.setEncoding=function(e){o||(o=T("bWgSm").StringDecoder);var t=new o(e);this._readableState.decoder=t,// If setEncoding(null), decoder.encoding equals utf8
this._readableState.encoding=this._readableState.decoder.encoding;for(// Iterate over current buffer to convert already stored Buffers:
var r=this._readableState.buffer.head,n="";null!==r;)n+=t.write(r.data),r=r.next;return this._readableState.buffer.clear(),""!==n&&this._readableState.buffer.push(n),this._readableState.length=n.length,this},// you can override either this method, or the async _read(n) below.
A.prototype.read=function(e){n("read",e),e=parseInt(e,10);var t,r=this._readableState,o=e;// if we're doing read(0) to trigger a readable event, but we
// already have a bunch of data in the buffer, then just trigger
// the 'readable' event and move on.
if(0!==e&&(r.emittedReadable=!1),0===e&&r.needReadable&&((0!==r.highWaterMark?r.length>=r.highWaterMark:r.length>0)||r.ended))return n("read: emitReadable",r.length,r.ended),0===r.length&&r.ended?D(this):R(this),null;// if we've ended, and we're now clear, then finish it up.
if(0===(e=B(e,r))&&r.ended)return 0===r.length&&D(this),null;// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.
// if we need a readable event, then we need to do some reading.
var i=r.needReadable;return n("need readable",i),(0===r.length||r.length-e<r.highWaterMark)&&n("length less than watermark",i=!0),r.ended||r.reading?n("reading or ended",i=!1):i&&(n("do read"),r.reading=!0,r.sync=!0,0===r.length&&(r.needReadable=!0),// call internal read method
this._read(r.highWaterMark),r.sync=!1,r.reading||(e=B(o,r))),null===(t=e>0?M(e,r):null)?(r.needReadable=r.length<=r.highWaterMark,e=0):(r.length-=e,r.awaitDrain=0),0===r.length&&(r.ended||(r.needReadable=!0),o!==e&&r.ended&&D(this)),null!==t&&this.emit("data",t),t},// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
A.prototype._read=function(e){w(this,new v("_read()"))},A.prototype.pipe=function(e,t){var r=this,o=this._readableState;switch(o.pipesCount){case 0:o.pipes=e;break;case 1:o.pipes=[o.pipes,e];break;default:o.pipes.push(e)}o.pipesCount+=1,n("pipe count=%d opts=%j",o.pipesCount,t);var i=t&&!1===t.end||e===a.stdout||e===a.stderr?y:s;function s(){n("onend"),e.end()}o.endEmitted?a.nextTick(i):r.once("end",i),e.on("unpipe",function t(i,a){n("onunpipe"),i===r&&a&&!1===a.hasUnpiped&&(a.hasUnpiped=!0,n("cleanup"),// cleanup event handlers once the pipe is broken
e.removeListener("close",h),e.removeListener("finish",d),e.removeListener("drain",l),e.removeListener("error",p),e.removeListener("unpipe",t),r.removeListener("end",s),r.removeListener("end",y),r.removeListener("data",f),c=!0,o.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&l())});// when the dest drains, it reduces the awaitDrain counter
// on the source.  This would be more elegant with a .once()
// handler in flow(), but adding and removing repeatedly is
// too slow.
var l=function(){var e=r._readableState;n("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&u(r,"data")&&(e.flowing=!0,U(r))};e.on("drain",l);var c=!1;function f(t){n("ondata");var i=e.write(t);n("dest.write",i),!1===i&&((1===o.pipesCount&&o.pipes===e||o.pipesCount>1&&-1!==$(o.pipes,e))&&!c&&(n("false write response, pause",o.awaitDrain),o.awaitDrain++),r.pause())}// if the dest has an error, then stop piping into it.
// however, don't suppress the throwing behavior for this.
function p(t){n("onerror",t),y(),e.removeListener("error",p),0===u(e,"error")&&w(e,t)}// Both close and finish should trigger unpipe, but only once.
function h(){e.removeListener("finish",d),y()}function d(){n("onfinish"),e.removeListener("close",h),y()}function y(){n("unpipe"),r.unpipe(e)}return r.on("data",f),// Make sure our error handler is attached before userland ones.
function(e,t,r){// Sadly this is not cacheable as some libraries bundle their own
// event emitter implementation with them.
if("function"==typeof e.prependListener)return e.prependListener(t,r);// This is a hack to make sure that our error handler is attached before any
// userland ones.  NEVER DO THIS. This is here only because this code needs
// to continue to work with older versions of Node.js that do not include
// the prependListener() method. The goal is to eventually remove this hack.
e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",p),e.once("close",h),e.once("finish",d),// tell the dest that it's being piped to
e.emit("pipe",r),o.flowing||(n("pipe resume"),r.resume()),e},A.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};// if we're not piping anywhere, then do nothing.
if(0===t.pipesCount)return this;// just one destination.  most common case.
if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),// got a match.
t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;// slow case. multiple pipe destinations.
if(!e){// remove all.
var n=t.pipes,o=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;i<o;i++)n[i].emit("unpipe",this,{hasUnpiped:!1});return this}// try to find the right one.
var s=$(t.pipes,e);return -1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},// set up data events if they are asked for
// Ensure readable listeners eventually get something
A.prototype.on=function(e,t){var r=l.prototype.on.call(this,e,t),o=this._readableState;return"data"===e?(// update readableListening so that resume() may be a no-op
// a few lines down. This is needed to support once('readable').
o.readableListening=this.listenerCount("readable")>0,!1!==o.flowing&&this.resume()):"readable"!==e||o.endEmitted||o.readableListening||(o.readableListening=o.needReadable=!0,o.flowing=!1,o.emittedReadable=!1,n("on readable",o.length,o.reading),o.length?R(this):o.reading||a.nextTick(P,this)),r},A.prototype.addListener=A.prototype.on,A.prototype.removeListener=function(e,t){var r=l.prototype.removeListener.call(this,e,t);return"readable"===e&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
a.nextTick(L,this),r},A.prototype.removeAllListeners=function(e){var t=l.prototype.removeAllListeners.apply(this,arguments);return("readable"===e||void 0===e)&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
a.nextTick(L,this),t},// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
A.prototype.resume=function(){var e=this._readableState;return e.flowing||(n("resume"),// we flow only if there is no one listening
// for readable, but we still have to call
// resume()
e.flowing=!e.readableListening,e.resumeScheduled||(e.resumeScheduled=!0,a.nextTick(j,this,e))),e.paused=!1,this},A.prototype.pause=function(){return n("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(n("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
A.prototype.wrap=function(e){var t=this,r=this._readableState,o=!1;// proxy all the other methods.
// important when wrapping filters and duplexes.
for(var i in e.on("end",function(){if(n("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(i){// don't skip over falsy values in objectMode
n("wrapped data"),r.decoder&&(i=r.decoder.write(i)),(!r.objectMode||null!=i)&&(r.objectMode||i&&i.length)&&(t.push(i)||(o=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));// proxy certain important events.
for(var s=0;s<E.length;s++)e.on(E[s],this.emit.bind(this,E[s]));return(// when we try to consume some more bytes, simply unpause the
// underlying stream.
this._read=function(t){n("wrapped _read",t),o&&(o=!1,e.resume())},this)},"function"==typeof Symbol&&(A.prototype[Symbol.asyncIterator]=function(){return void 0===i&&(i=T("Mkrm6")),i(this)}),Object.defineProperty(A.prototype,"readableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(A.prototype,"readableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(A.prototype,"readableFlowing",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),// exposed for testing purposes only.
A._fromList=M,Object.defineProperty(A.prototype,"readableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(A.from=function(e,t){return void 0===s&&(s=T("7UlCx")),s(A,e,t)})}),T.register("4HDlr",function(e,t){e.exports=T("k4yOc").EventEmitter}),T.register("4AFFV",function(e,t){}),T.register("3QRBN",function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=i(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var s=T("awmEs").Buffer,a=T("4AFFV").inspect,u=a&&a.custom||"inspect";e.exports=/*#__PURE__*/function(){var e,t;function r(){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,r),this.head=null,this.tail=null,this.length=0}return e=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return s.alloc(0);for(var t,r,n=s.allocUnsafe(e>>>0),o=this.head,i=0;o;)t=o.data,r=i,s.prototype.copy.call(t,n,r),i+=o.data.length,o=o.next;return n}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(// `slice` is the same for buffers and strings.
r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var o=t.data,i=e>o.length?o.length:e;if(i===o.length?n+=o:n+=o.slice(0,e),0==(e-=i)){i===o.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=o.slice(i));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=s.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var o=r.data,i=e>o.length?o.length:e;if(o.copy(t,t.length-e,0,i),0==(e-=i)){i===o.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=o.slice(i));break}++n}return this.length-=n,t}},{key:u,value:function(e,t){return a(this,n(n({},t),{},{// Only inspect one level.
depth:0,// It should not recurse.
customInspect:!1}))}}],o(r.prototype,e),t&&o(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}()}),T.register("5CW71",function(e,t){var r=T("9Mq5w");function n(e,t){i(e,t),o(e)}function o(e){(!e._writableState||e._writableState.emitClose)&&(!e._readableState||e._readableState.emitClose)&&e.emit("close")}function i(e,t){e.emit("error",t)}e.exports={destroy:// undocumented cb() API, needed for core, not for public API
function(e,t){var s=this,a=this._readableState&&this._readableState.destroyed,u=this._writableState&&this._writableState.destroyed;return a||u?t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,r.nextTick(i,this,e)):r.nextTick(i,this,e)):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?s._writableState?s._writableState.errorEmitted?r.nextTick(o,s):(s._writableState.errorEmitted=!0,r.nextTick(n,s,e)):r.nextTick(n,s,e):t?(r.nextTick(o,s),t(e)):r.nextTick(o,s)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){// We have tests that rely on errors being emitted
// in the same tick, so changing this is semver major.
// For now when you opt-in to autoDestroy we allow
// the error to be emitted nextTick. In a future
// semver major update we should change the default to this.
var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t)}}}),T.register("71wq3",function(e,t){var r=T("kdLmP").codes.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,n,o){var i=null!=t.highWaterMark?t.highWaterMark:o?t[n]:null;if(null!=i){if(!(isFinite(i)&&Math.floor(i)===i)||i<0){var s=o?n:"highWaterMark";throw new r(s,i)}return Math.floor(i)}// Default value
return e.objectMode?16:16384}}}),T.register("kdLmP",function(e,t){i(e.exports,"codes",()=>r,e=>r=e);var r,n={};function o(e,t,r){r||(r=Error);var o=/*#__PURE__*/function(e){function r(r,n,o){return e.call(this,"string"==typeof t?t:t(r,n,o))||this}return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,r}(r);o.prototype.name=r.name,o.prototype.code=e,n[e]=o}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function s(e,t){if(!Array.isArray(e))return"of ".concat(t," ").concat(String(e));var r=e.length;return(e=e.map(function(e){return String(e)}),r>2)?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
o("ERR_INVALID_OPT_VALUE",function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'},TypeError),o("ERR_INVALID_ARG_TYPE",function(e,t,r){if("string"==typeof t&&(n="not ",t.substr(!o||o<0?0:+o,n.length)===n)?(l="must not be",t=t.replace(/^not /,"")):l="must be",i=" argument",(void 0===a||a>e.length)&&(a=e.length),e.substring(a-i.length,a)===i)c="The ".concat(e," ").concat(l," ").concat(s(t,"type"));else{var n,o,i,a,u,l,c,f=("number"!=typeof u&&(u=0),u+1>e.length||-1===e.indexOf(".",u))?"argument":"property";c='The "'.concat(e,'" ').concat(f," ").concat(l," ").concat(s(t,"type"))}return c+". Received type ".concat(typeof r)},TypeError),o("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),o("ERR_METHOD_NOT_IMPLEMENTED",function(e){return"The "+e+" method is not implemented"}),o("ERR_STREAM_PREMATURE_CLOSE","Premature close"),o("ERR_STREAM_DESTROYED",function(e){return"Cannot call "+e+" after a stream was destroyed"}),o("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),o("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),o("ERR_STREAM_WRITE_AFTER_END","write after end"),o("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),o("ERR_UNKNOWN_ENCODING",function(e){return"Unknown encoding: "+e},TypeError),o("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),r=n}),T.register("1SlAW",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var r=T("9Mq5w"),n=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};/*</replacement>*/e.exports=l;var o=T("340fO"),i=T("lWtyM");T("6cuMU")(l,o);for(var s=n(i.prototype),a=0;a<s.length;a++){var u=s[a];l.prototype[u]||(l.prototype[u]=i.prototype[u])}function l(e){if(!(this instanceof l))return new l(e);o.call(this,e),i.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",c)))}// the no-half-open enforcer
function c(){// If the writable side ended, then we're ok.
this._writableState.ended||// no more data can be written.
// But allow more writes to happen in this tick.
r.nextTick(f,this)}function f(e){e.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(l.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(l.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
void 0!==this._readableState&&void 0!==this._writableState&&(// backward compatibility, the user is explicitly
// managing destroyed
this._readableState.destroyed=e,this._writableState.destroyed=e)}})}),T.register("lWtyM",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var r,n,o=T("9Mq5w");// It seems a linked list but it is not
// there will be only 2 of these for each stream
function i(e){var t=this;this.next=null,this.entry=null,this.finish=function(){(function(e,t,r){var n=e.entry;for(e.entry=null;n;){var o=n.callback;t.pendingcb--,o(void 0),n=n.next}// reuse the free corkReq.
t.corkedRequestsFree.next=e})(t,e)}}e.exports=A,/*</replacement>*/A.WritableState=S;/*<replacement>*/var s={deprecate:T("bmKAk")},a=T("4HDlr"),u=T("awmEs").Buffer,l=(void 0!==_?_:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},c=T("5CW71"),f=T("71wq3").getHighWaterMark,p=T("kdLmP").codes,h=p.ERR_INVALID_ARG_TYPE,d=p.ERR_METHOD_NOT_IMPLEMENTED,y=p.ERR_MULTIPLE_CALLBACK,g=p.ERR_STREAM_CANNOT_PIPE,b=p.ERR_STREAM_DESTROYED,m=p.ERR_STREAM_NULL_VALUES,v=p.ERR_STREAM_WRITE_AFTER_END,x=p.ERR_UNKNOWN_ENCODING,w=c.errorOrDestroy;function E(){}function S(e,t,n){r=r||T("1SlAW"),e=e||{},"boolean"!=typeof n&&(n=t instanceof r),// object stream flag to indicate whether or not this stream
// contains buffers or objects.
this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.writableObjectMode),// the point at which write() starts returning false
// Note: 0 is a valid value, means that we always return false if
// the entire buffer is not flushed immediately on write()
this.highWaterMark=f(this,e,"writableHighWaterMark",n),// if _final has been called
this.finalCalled=!1,// drain event flag.
this.needDrain=!1,// at the start of calling end()
this.ending=!1,// when end() has been called, and returned
this.ended=!1,// when 'finish' is emitted
this.finished=!1,// has it been destroyed
this.destroyed=!1;// should we decode strings into buffers before passing to _write?
// this is here so that some node-core streams can optimize string
// handling at a lower level.
var s=!1===e.decodeStrings;this.decodeStrings=!s,// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=e.defaultEncoding||"utf8",// not an actual buffer we keep track of, but a measurement
// of how much we're waiting to get pushed to some underlying
// socket or file.
this.length=0,// a flag to see when we're in the middle of a write.
this.writing=!1,// when true all writes will be buffered until .uncork() call
this.corked=0,// a flag to be able to tell if the onwrite cb is called immediately,
// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=!0,// a flag to know if we're processing previously buffered items, which
// may call the _write() callback in the same tick, so that we don't
// end up in an overlapped onwrite situation.
this.bufferProcessing=!1,// the callback that's passed to _write(chunk,cb)
this.onwrite=function(e){(function(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if("function"!=typeof i)throw new y;if(r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,t)--r.pendingcb,n?(// defer the callback if we are being called synchronously
// to avoid piling up things on the stack
o.nextTick(i,t),// this can emit finish, and it will always happen
// after error
o.nextTick(N,e,r),e._writableState.errorEmitted=!0,w(e,t)):(// the caller expect this to happen before if
// it is async
i(t),e._writableState.errorEmitted=!0,w(e,t),// this can emit finish, but finish must
// always follow error
N(e,r));else{// Check if we're actually ready to finish, but don't emit yet
var s=R(r)||e.destroyed;s||r.corked||r.bufferProcessing||!r.bufferedRequest||B(e,r),n?o.nextTick(I,e,r,s,i):I(e,r,s,i)}})(t,e)},// the callback that the user supplies to write(chunk,encoding,cb)
this.writecb=null,// the amount that is being written when _write is called.
this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,// number of pending user-supplied write callbacks
// this must be 0 before 'finish' can be emitted
this.pendingcb=0,// emit prefinish if the only thing we're waiting for is _write cbs
// This is relevant for synchronous Transform streams
this.prefinished=!1,// True if the error was already emitted and should not be thrown again
this.errorEmitted=!1,// Should close be emitted on destroy. Defaults to true.
this.emitClose=!1!==e.emitClose,// Should .destroy() be called after 'finish' (and potentially 'end')
this.autoDestroy=!!e.autoDestroy,// count buffered requests
this.bufferedRequestCount=0,// allocate the first CorkedRequest, there is always
// one allocated and free to use, and we maintain at most two
this.corkedRequestsFree=new i(this)}function A(e){// Writable ctor is applied to Duplexes, too.
// `realHasInstance` is necessary because using plain `instanceof`
// would return false, as no `_writableState` property is attached.
// Trying to use the custom `instanceof` for Writable here will also break the
// Node.js LazyTransform implementation, which has a non-trivial getter for
// `_writableState` that would lead to infinite recursion.
// Checking for a Stream.Duplex instance is faster here instead of inside
// the WritableState constructor, at least with V8 6.5
var t=this instanceof(r=r||T("1SlAW"));if(!t&&!n.call(A,this))return new A(e);this._writableState=new S(e,this,t),// legacy.
this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),a.call(this)}function O(e,t,r,n,o,i,s){t.writelen=n,t.writecb=s,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new b("write")):r?e._writev(o,t.onwrite):e._write(o,i,t.onwrite),t.sync=!1}function I(e,t,r,n){r||0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain")),t.pendingcb--,n(),N(e,t)}// if there's something in the buffer waiting, then process it
function B(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=Array(t.bufferedRequestCount),o=t.corkedRequestsFree;o.entry=r;for(var s=0,a=!0;r;)n[s]=r,r.isBuf||(a=!1),r=r.next,s+=1;n.allBuffers=a,O(e,t,!0,t.length,n,"",o.finish),// doWrite is almost always async, defer these to save a bit of time
// as the hot path ends with doWrite
t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new i(t),t.bufferedRequestCount=0}else{// Slow case, write chunks one-by-one
for(;r;){var u=r.chunk,l=r.encoding,c=r.callback,f=t.objectMode?1:u.length;// if we didn't call the onwrite immediately, then
// it means that we need to wait until it does.
// also, that means that the chunk and cb are currently
// being processed, so move the buffer counter past them.
if(O(e,t,!1,f,u,l,c),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function R(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final(function(r){t.pendingcb--,r&&w(e,r),t.prefinished=!0,e.emit("prefinish"),N(e,t)})}function N(e,t){var r=R(t);if(r&&(t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,o.nextTick(k,e,t))),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){// In case of duplex streams we need a way to detect
// if the readable side is ready for autoDestroy as well
var n=e._readableState;(!n||n.autoDestroy&&n.endEmitted)&&e.destroy()}return r}T("6cuMU")(A,a),S.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(S.prototype,"buffer",{get:s.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(n=Function.prototype[Symbol.hasInstance],Object.defineProperty(A,Symbol.hasInstance,{value:function(e){return!!n.call(this,e)||this===A&&e&&e._writableState instanceof S}})):n=function(e){return e instanceof this},// Otherwise people can pipe Writable streams, which is just wrong.
A.prototype.pipe=function(){w(this,new g)},A.prototype.write=function(e,t,r){var n,i,s,a,c,f,p,d=this._writableState,y=!1,g=!d.objectMode&&(n=e,u.isBuffer(n)||n instanceof l);return g&&!u.isBuffer(e)&&(i=e,e=u.from(i)),("function"==typeof t&&(r=t,t=null),g?t="buffer":t||(t=d.defaultEncoding),"function"!=typeof r&&(r=E),d.ending)?(s=r,// TODO: defer error events consistently everywhere, not just the cb
w(this,a=new v),o.nextTick(s,a)):(g||(c=e,f=r,null===c?p=new m:"string"==typeof c||d.objectMode||(p=new h("chunk",["string","Buffer"],c)),!p||(w(this,p),o.nextTick(f,p),0)))&&(d.pendingcb++,y=// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function(e,t,r,n,o,i){if(!r){var s,a,l=(s=n,a=o,t.objectMode||!1===t.decodeStrings||"string"!=typeof s||(s=u.from(s,a)),s);n!==l&&(r=!0,o="buffer",n=l)}var c=t.objectMode?1:n.length;t.length+=c;var f=t.length<t.highWaterMark;if(f||(t.needDrain=!0),t.writing||t.corked){var p=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:o,isBuf:r,callback:i,next:null},p?p.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else O(e,t,!1,c,n,o,i);return f}(this,d,g,e,t,r)),y},A.prototype.cork=function(){this._writableState.corked++},A.prototype.uncork=function(){var e=this._writableState;!e.corked||(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||B(this,e))},A.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new x(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(A.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(A.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),A.prototype._write=function(e,t,r){r(new d("_write()"))},A.prototype._writev=null,A.prototype.end=function(e,t,r){var n,i=this._writableState;return"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),i.corked&&(i.corked=1,this.uncork()),i.ending||(n=r,i.ending=!0,N(this,i),n&&(i.finished?o.nextTick(n):this.once("finish",n)),i.ended=!0,this.writable=!1),this},Object.defineProperty(A.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(A.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
this._writableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._writableState.destroyed=e)}}),A.prototype.destroy=c.destroy,A.prototype._undestroy=c.undestroy,A.prototype._destroy=function(e,t){t(e)}}),T.register("bmKAk",function(e,t){/**
 * Module exports.
 */e.exports=/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */function(e,t){if(r("noDeprecation"))return e;var n=!1;return function(){if(!n){if(r("throwDeprecation"))throw Error(t);r("traceDeprecation")?console.trace(t):console.warn(t),n=!0}return e.apply(this,arguments)}};/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */function r(e){// accessing global.localStorage can trigger a DOMException in sandboxed iframes
try{if(!_.localStorage)return!1}catch(e){return!1}var t=_.localStorage[e];return null!=t&&"true"===String(t).toLowerCase()}}),T.register("bWgSm",function(e,t){i(e.exports,"StringDecoder",()=>r,e=>r=e);var r,n=T("k0Rto").Buffer,o=n.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function s(e){var t;switch(this.encoding=// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function(e){var t=function(e){var t;if(!e)return"utf8";for(;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;// undefined
e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(n.isEncoding===o||!o(e)))throw Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=l,this.end=c,t=4;break;case"utf8":this.fillLast=u,t=4;break;case"base64":this.text=f,this.end=p,t=3;break;default:this.write=h,this.end=d;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(t)}// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function a(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function u(e){var t=this.lastTotal-this.lastNeed,r=// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function(e,t,r){if((192&t[0])!=128)return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if((192&t[1])!=128)return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&(192&t[2])!=128)return e.lastNeed=2,"�"}}(this,e,0);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length)}// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function l(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function c(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function f(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function p(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function h(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):""}r=s,s.prototype.write=function(e){var t,r;if(0===e.length)return"";if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},s.prototype.end=// For UTF-8, a replacement character is added when ending on a partial
// character.
function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},// Returns only complete characters in a Buffer
s.prototype.text=// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function(e,t){var r=// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function(e,t,r){var n=t.length-1;if(n<r)return 0;var o=a(t[n]);return o>=0?(o>0&&(e.lastNeed=o-1),o):--n<r||-2===o?0:(o=a(t[n]))>=0?(o>0&&(e.lastNeed=o-2),o):--n<r||-2===o?0:(o=a(t[n]))>=0?(o>0&&(2===o?o=0:e.lastNeed=o-3),o):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
s.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}}),T.register("k0Rto",function(e,t){/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *//* eslint-disable node/no-deprecated-api */var r=T("awmEs"),n=r.Buffer;// alternative to using Object.keys for old browsers
function o(e,t){for(var r in e)t[r]=e[r]}function i(e,t,r){return n(e,t,r)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=r:(// Copy properties from require('buffer')
o(r,e.exports),e.exports.Buffer=i),i.prototype=Object.create(n.prototype),// Copy static methods from Buffer
o(n,i),i.from=function(e,t,r){if("number"==typeof e)throw TypeError("Argument must not be a number");return n(e,t,r)},i.alloc=function(e,t,r){if("number"!=typeof e)throw TypeError("Argument must be a number");var o=n(e);return void 0!==t?"string"==typeof r?o.fill(t,r):o.fill(t):o.fill(0),o},i.allocUnsafe=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return n(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return r.SlowBuffer(e)}}),T.register("Mkrm6",function(e,t){var r,n=T("9Mq5w");function o(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=T("f6xbQ"),s=Symbol("lastResolve"),a=Symbol("lastReject"),u=Symbol("error"),l=Symbol("ended"),c=Symbol("lastPromise"),f=Symbol("handlePromise"),p=Symbol("stream");function h(e,t){return{value:e,done:t}}function d(e){var t=e[s];if(null!==t){var r=e[p].read();// we defer if data is null
// we can be expecting either 'end' or
// 'error'
null!==r&&(e[c]=null,e[s]=null,e[a]=null,t(h(r,!1)))}}function y(e){// we wait for the next tick, because it might
// emit an error with process.nextTick
n.nextTick(d,e)}var g=Object.getPrototypeOf(function(){}),b=Object.setPrototypeOf((o(r={get stream(){return this[p]},next:function(){var e,t,r=this,o=this[u];if(null!==o)return Promise.reject(o);if(this[l])return Promise.resolve(h(void 0,!0));if(this[p].destroyed)// called, the error will be emitted via nextTick, and
// we cannot guarantee that there is no error lingering around
// waiting to be emitted.
return new Promise(function(e,t){n.nextTick(function(){r[u]?t(r[u]):e(h(void 0,!0))})});// if we have multiple next() calls
// we will wait for the previous Promise to finish
// this logic is optimized to support for await loops,
// where next() is only called once at a time
var i=this[c];if(i)t=new Promise((e=this,function(t,r){i.then(function(){if(e[l]){t(h(void 0,!0));return}e[f](t,r)},r)}));else{// fast path needed to support multiple this.push()
// without triggering the next() queue
var s=this[p].read();if(null!==s)return Promise.resolve(h(s,!1));t=new Promise(this[f])}return this[c]=t,t}},Symbol.asyncIterator,function(){return this}),o(r,"return",function(){var e=this;// destroy(err, cb) is a private API
// we can guarantee we have that here, because we control the
// Readable class this is attached to
return new Promise(function(t,r){e[p].destroy(null,function(e){if(e){r(e);return}t(h(void 0,!0))})})}),r),g);e.exports=function(e){var t,r=Object.create(b,(o(t={},p,{value:e,writable:!0}),o(t,s,{value:null,writable:!0}),o(t,a,{value:null,writable:!0}),o(t,u,{value:null,writable:!0}),o(t,l,{value:e._readableState.endEmitted,writable:!0}),o(t,f,{value:function(e,t){var n=r[p].read();n?(r[c]=null,r[s]=null,r[a]=null,e(h(n,!1))):(r[s]=e,r[a]=t)},writable:!0}),t));return r[c]=null,i(e,function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[a];null!==t&&(r[c]=null,r[s]=null,r[a]=null,t(e)),r[u]=e;return}var n=r[s];null!==n&&(r[c]=null,r[s]=null,r[a]=null,n(h(void 0,!0))),r[l]=!0}),e.on("readable",y.bind(null,r)),r}}),T.register("f6xbQ",function(e,t){var r=T("kdLmP").codes.ERR_STREAM_PREMATURE_CLOSE;function n(){}e.exports=function e(t,o,i){if("function"==typeof o)return e(t,null,o);o||(o={}),s=i||n,a=!1,i=function(){if(!a){a=!0;for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];s.apply(this,t)}};var s,a,u=o.readable||!1!==o.readable&&t.readable,l=o.writable||!1!==o.writable&&t.writable,c=function(){t.writable||p()},f=t._writableState&&t._writableState.finished,p=function(){l=!1,f=!0,u||i.call(t)},h=t._readableState&&t._readableState.endEmitted,d=function(){u=!1,h=!0,l||i.call(t)},y=function(e){i.call(t,e)},g=function(){var e;return u&&!h?(t._readableState&&t._readableState.ended||(e=new r),i.call(t,e)):l&&!f?(t._writableState&&t._writableState.ended||(e=new r),i.call(t,e)):void 0},b=function(){t.req.on("finish",p)};return t.setHeader&&"function"==typeof t.abort?(t.on("complete",p),t.on("abort",g),t.req?b():t.on("request",b)):l&&!t._writableState&&(// legacy streams
t.on("end",c),t.on("close",c)),t.on("end",d),t.on("finish",p),!1!==o.error&&t.on("error",y),t.on("close",g),function(){t.removeListener("complete",p),t.removeListener("abort",g),t.removeListener("request",b),t.req&&t.req.removeListener("finish",p),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",p),t.removeListener("end",d),t.removeListener("error",y),t.removeListener("close",g)}}}),T.register("7UlCx",function(e,t){e.exports=function(){throw Error("Readable.from is not available in the browser")}}),T.register("f7L7V",function(e,t){e.exports=l;var r=T("kdLmP").codes,n=r.ERR_METHOD_NOT_IMPLEMENTED,o=r.ERR_MULTIPLE_CALLBACK,i=r.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=r.ERR_TRANSFORM_WITH_LENGTH_0,a=T("1SlAW");function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new o);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function l(e){if(!(this instanceof l))return new l(e);a.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},// start out asking for a readable event once data is transformed.
this._readableState.needReadable=!0,// we have implemented the _read method, and done the other things
// that Readable wants before the first _read call, so unset the
// sync guard flag.
this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),// When the writable side finishes, then flush out anything remaining.
this.on("prefinish",c)}function c(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?f(this,null,null):this._flush(function(t,r){f(e,t,r)})}function f(e,t,r){if(t)return e.emit("error",t);// TODO(BridgeAR): Write a test for these two error cases
// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
if(null!=r&&e.push(r),e._writableState.length)throw new s;if(e._transformState.transforming)throw new i;return e.push(null)}T("6cuMU")(l,a),l.prototype.push=function(e,t){return this._transformState.needTransform=!1,a.prototype.push.call(this,e,t)},// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
l.prototype._transform=function(e,t,r){r(new n("_transform()"))},l.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
l.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?// will get processed, now that we've asked for it.
t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},l.prototype._destroy=function(e,t){a.prototype._destroy.call(this,e,function(e){t(e)})}}),T.register("dX7Dt",function(e,t){e.exports=n;var r=T("f7L7V");function n(e){if(!(this instanceof n))return new n(e);r.call(this,e)}T("6cuMU")(n,r),n.prototype._transform=function(e,t,r){r(null,e)}}),T.register("2mqHM",function(e,t){var r,n=T("kdLmP").codes,o=n.ERR_MISSING_ARGS,i=n.ERR_STREAM_DESTROYED;function s(e){// Rethrow the error if it exists to avoid swallowing it
if(e)throw e}function a(e){e()}function u(e,t){return e.pipe(t)}e.exports=function(){for(var e,t,n=arguments.length,l=Array(n),c=0;c<n;c++)l[c]=arguments[c];var f=(e=l).length&&"function"==typeof e[e.length-1]?e.pop():s;if(Array.isArray(l[0])&&(l=l[0]),l.length<2)throw new o("streams");var p=l.map(function(e,n){var o,s,u,c,h,d=n<l.length-1;return s=o=function(e){t||(t=e),e&&p.forEach(a),d||(p.forEach(a),f(t))},u=!1,o=function(){u||(u=!0,s.apply(void 0,arguments))},c=!1,e.on("close",function(){c=!0}),void 0===r&&(r=T("f6xbQ")),r(e,{readable:d,writable:n>0},function(e){if(e)return o(e);c=!0,o()}),h=!1,function(t){if(!c&&!h){// request.destroy just do .end - .abort is what we want
if(h=!0,e.setHeader&&"function"==typeof e.abort)return e.abort();if("function"==typeof e.destroy)return e.destroy();o(t||new i("pipe"))}}});return l.reduce(u)}}),T.register("2eBQb",function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)r.call(n,o)&&(e[o]=n[o])}return e};var r=Object.prototype.hasOwnProperty}),T.register("djNDF",function(e,t){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}),T.register("g3AIT",function(e,t){i(e.exports,"parse",()=>r,e=>r=e),i(e.exports,"resolve",()=>n,e=>n=e),i(e.exports,"resolveObject",()=>o,e=>o=e),i(e.exports,"format",()=>s,e=>s=e),i(e.exports,"Url",()=>a,e=>a=e);var r,n,o,s,a,u=T("iuZoh");function l(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}// Reference: RFC 3986, RFC 1808, RFC 2396
/*
 * define these here so at least they only have to be
 * compiled once on the first module load.
 */var c=/^([a-z0-9.+-]+:)/i,f=/:[0-9]*$/,p=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,h=["'"].concat(["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","	"])),/*
   * Characters that are never ever allowed in a hostname.
   * Note that any invalid chars are also handled, but these
   * are the ones that are *expected* to be seen, so we fast-path
   * them.
   */d=["%","/","?",";","#"].concat(h),y=["/","?","#"],g=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},x={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},w=T("j4cgj");function E(e,t,r){if(e&&"object"==typeof e&&e instanceof l)return e;var n=new l;return n.parse(e,t,r),n}l.prototype.parse=function(e,t,r){if("string"!=typeof e)throw TypeError("Parameter 'url' must be a string, not "+typeof e);/*
   * Copy chrome, IE, opera backslash-handling behavior.
   * Back slashes before the query string get converted to forward slashes
   * See: https://code.google.com/p/chromium/issues/detail?id=25916
   */var n=e.indexOf("?"),o=-1!==n&&n<e.indexOf("#")?"?":"#",i=e.split(o);i[0]=i[0].replace(/\\/g,"/");var s=e=i.join(o);if(/*
   * trim before proceeding.
   * This is to support parse stuff like "  http://foo.com  \n"
   */s=s.trim(),!r&&1===e.split("#").length){// Try fast path regexp
var a=p.exec(s);if(a)return this.path=s,this.href=s,this.pathname=a[1],a[2]?(this.search=a[2],t?this.query=w.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=c.exec(s);if(l){var f=(l=l[0]).toLowerCase();this.protocol=f,s=s.substr(l.length)}/*
   * figure out if it's got a host
   * user@server is *always* interpreted as a hostname, and url
   * resolution will treat //foo/bar as host=foo,path=bar because that's
   * how the browser resolves relative URLs.
   */if(r||l||s.match(/^\/\/[^@/]+@[^@/]+/)){var E="//"===s.substr(0,2);E&&!(l&&v[l])&&(s=s.substr(2),this.slashes=!0)}if(!v[l]&&(E||l&&!x[l])){for(var _,S,A=-1,O=0;O<y.length;O++){var T=s.indexOf(y[O]);-1!==T&&(-1===A||T<A)&&(A=T)}-1!==(S=-1===A?s.lastIndexOf("@"):s.lastIndexOf("@",A))&&(_=s.slice(0,S),s=s.slice(S+1),this.auth=decodeURIComponent(_)),// the host is the remaining to the left of the first non-host char
A=-1;for(var O=0;O<d.length;O++){var T=s.indexOf(d[O]);-1!==T&&(-1===A||T<A)&&(A=T)}-1===A&&(A=s.length),this.host=s.slice(0,A),s=s.slice(A),// pull out port.
this.parseHost(),/*
     * we've indicated that there is a hostname,
     * so even if it's empty, it has to be present.
     */this.hostname=this.hostname||"";/*
     * if hostname begins with [ and ends with ]
     * assume that it's an IPv6 address.
     */var I="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];// validate a little.
if(!I)for(var B=this.hostname.split(/\./),O=0,R=B.length;O<R;O++){var k=B[O];if(k&&!k.match(g)){for(var N="",C=0,L=k.length;C<L;C++)k.charCodeAt(C)>127?/*
               * we replace non-ASCII char with a temporary placeholder
               * we need this to make sure size of hostname is not
               * broken by replacing non-ASCII by nothing
               */N+="x":N+=k[C];// we test again with ASCII char only
if(!N.match(g)){var P=B.slice(0,O),j=B.slice(O+1),U=k.match(b);U&&(P.push(U[1]),j.unshift(U[2])),j.length&&(s="/"+j.join(".")+s),this.hostname=P.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),I||/*
       * IDNA Support: Returns a punycoded representation of "domain".
       * It only converts parts of the domain name that
       * have non-ASCII characters, i.e. it doesn't matter if
       * you call it with a domain that already is ASCII-only.
       */(this.hostname=u.toASCII(this.hostname));var M=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+M,this.href+=this.host,I&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==s[0]&&(s="/"+s))}/*
   * now rest is set to the post-host stuff.
   * chop off any delim chars.
   */if(!m[f])/*
     * First, make 100% sure that any "autoEscape" chars get
     * escaped, even if encodeURIComponent doesn't think they
     * need to be.
     */for(var O=0,R=h.length;O<R;O++){var F=h[O];if(-1!==s.indexOf(F)){var $=encodeURIComponent(F);$===F&&($=escape(F)),s=s.split(F).join($)}}// chop off from the tail first.
var H=s.indexOf("#");-1!==H&&(// got a fragment string.
this.hash=s.substr(H),s=s.slice(0,H));var z=s.indexOf("?");// to support http.request
if(-1!==z?(this.search=s.substr(z),this.query=s.substr(z+1),t&&(this.query=w.parse(this.query)),s=s.slice(0,z)):t&&(// no query string, but parseQueryString still requested
this.search="",this.query={}),s&&(this.pathname=s),x[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var M=this.pathname||"",q=this.search||"";this.path=M+q}return(// finally, reconstruct the href based on what has been validated.
this.href=this.format(),this)},l.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":")+"@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&"object"==typeof this.query&&Object.keys(this.query).length&&(i=w.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var s=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||x[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),t+o+(r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(s=s.replace("#","%23"))+n},l.prototype.resolve=function(e){return this.resolveObject(E(e,!1,!0)).format()},l.prototype.resolveObject=function(e){if("string"==typeof e){var t=new l;t.parse(e,!1,!0),e=t}for(var r=new l,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}// if the relative url is empty, then there's nothing left to do here.
if(/*
   * hash is always overridden, no matter what.
   * even href="" will remove it.
   */r.hash=e.hash,""===e.href)return r.href=r.format(),r;// hrefs like //foo/bar always cut to the protocol.
if(e.slashes&&!e.protocol){for(var s=Object.keys(e),a=0;a<s.length;a++){var u=s[a];"protocol"!==u&&(r[u]=e[u])}return x[r.protocol]&&r.hostname&&!r.pathname&&(r.pathname="/",r.path=r.pathname),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){/*
     * if it's a known url protocol, then changing
     * the protocol does weird things
     * first, if it's not file:, then we MUST have a host,
     * and if there was a path
     * to begin with, then we MUST have a path.
     * if it is file:, then the host is dropped,
     * because that's known to be hostless.
     * anything else is assumed to be absolute.
     */if(!x[e.protocol]){for(var c=Object.keys(e),f=0;f<c.length;f++){var p=c[f];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||v[e.protocol])r.pathname=e.pathname;else{for(var h=(e.pathname||"").split("/");h.length&&!(e.host=h.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==h[0]&&h.unshift(""),h.length<2&&h.unshift(""),r.pathname=h.join("/")}// to support http.request
if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var d=r.pathname||"",y=r.search||"";r.path=d+y}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var g=r.pathname&&"/"===r.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),m=b||g||r.host&&e.pathname,w=m,E=r.pathname&&r.pathname.split("/")||[],h=e.pathname&&e.pathname.split("/")||[],_=r.protocol&&!x[r.protocol];if(_&&(r.hostname="",r.port=null,r.host&&(""===E[0]?E[0]=r.host:E.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===h[0]?h[0]=e.host:h.unshift(e.host)),e.host=null),m=m&&(""===h[0]||""===E[0])),b)// it's absolute.
r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,E=h;else if(h.length)E||(E=[]),E.pop(),E=E.concat(h),r.search=e.search,r.query=e.query;else if(null!=e.search){/*
     * just pull out the search.
     * like href='?foo'.
     * Put this after the other two cases because it simplifies the booleans
     */if(_){r.host=E.shift(),r.hostname=r.host;/*
       * occationaly the auth can get stuck only in host
       * this especially happens in cases like
       * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
       */var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&(r.auth=S.shift(),r.hostname=S.shift(),r.host=r.hostname)}return r.search=e.search,r.query=e.query,(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!E.length)return(/*
     * no path at all.  easy.
     * we've already handled the other stuff above.
     */r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r);for(var A=E.slice(-1)[0],O=(r.host||e.host||E.length>1)&&("."===A||".."===A)||""===A,T=0,I=E.length;I>=0;I--)"."===(A=E[I])?E.splice(I,1):".."===A?(E.splice(I,1),T++):T&&(E.splice(I,1),T--);// if the path is allowed to go above the root, restore leading ..s
if(!m&&!w)for(;T--;T)E.unshift("..");m&&""!==E[0]&&(!E[0]||"/"!==E[0].charAt(0))&&E.unshift(""),O&&"/"!==E.join("/").substr(-1)&&E.push("");var B=""===E[0]||E[0]&&"/"===E[0].charAt(0);// put the host back
if(_){r.hostname=B?"":E.length?E.shift():"",r.host=r.hostname;/*
     * occationaly the auth can get stuck only in host
     * this especially happens in cases like
     * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
     */var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&(r.auth=S.shift(),r.hostname=S.shift(),r.host=r.hostname)}return(m=m||r.host&&E.length)&&!B&&E.unshift(""),E.length>0?r.pathname=E.join("/"):(r.pathname=null,r.path=null),(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},l.prototype.parseHost=function(){var e=this.host,t=f.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},r=E,n=function(e,t){return E(e,!1,!0).resolve(t)},o=function(e,t){return e?E(e,!1,!0).resolveObject(t):t},s=// format a parsed object into a url string
function(e){return("string"==typeof e&&(e=E(e)),e instanceof l)?e.format():l.prototype.format.call(e)},a=l}),T.register("iuZoh",function(e,t){!function(r){/** Detect free variables */var n=t&&!t.nodeType&&t,o=e&&!e.nodeType&&e,i="object"==typeof _&&_;(i.global===i||i.window===i||i.self===i)&&(r=i);/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */var s,/** Temporary variable */a,/** Regular expressions */u=/^xn--/,l=/[^\x20-\x7E]/,c=/[\x2E\u3002\uFF0E\uFF61]/g,/** Error messages */f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,h=String.fromCharCode;/*--------------------------------------------------------------------------*//**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */function d(e){throw RangeError(f[e])}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */function y(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */function g(e,t){var r=e.split("@"),n="";return r.length>1&&(// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
n=r[0]+"@",e=r[1]),n+y(// Avoid `split(regex)` for IE8 compatibility. See #17.
(e=e.replace(c,".")).split("."),t).join(".")}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */function b(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?(64512&// high surrogate, and there is a next character
(r=e.charCodeAt(o++)))==56320?n.push(((1023&t)<<10)+(1023&r)+65536):(// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
n.push(t),o--):n.push(t);return n}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */function m(e){return y(e,function(e){var t="";return e>65535&&(e-=65536,t+=h(e>>>10&1023|55296),e=56320|1023&e),t+=h(e)}).join("")}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */function v(e,t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return e+22+75*(e<26)-((0!=t)<<5)}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */function x(e,t,r){var n=0;for(e=r?p(e/700):e>>1,e+=p(e/t);e>455;n+=36)e=p(e/35);return p(n+36*e/(e+38))}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */function w(e){// Don't use UCS-2
var t,r,n,o,i,s,a,u,l,c,/** Cached calculation results */f,h=[],y=e.length,g=0,b=128,v=72;for(// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
(n=e.lastIndexOf("-"))<0&&(n=0),o=0;o<n;++o)e.charCodeAt(o)>=128&&d("not-basic"),h.push(e.charCodeAt(o));// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(i=n>0?n+1:0;i<y;){// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(s=g,a=1,u=36;i>=y&&d("invalid-input"),((l=(t=e.charCodeAt(i++))-48<10?t-22:t-65<26?t-65:t-97<26?t-97:36)>=36||l>p((2147483647-g)/a))&&d("overflow"),g+=l*a,!(l<(c=u<=v?1:u>=v+26?26:u-v));u+=36)a>p(2147483647/(f=36-c))&&d("overflow"),a*=f;v=x(g-s,r=h.length+1,0==s),p(g/r)>2147483647-b&&d("overflow"),b+=p(g/r),g%=r,// Insert `n` at position `i` of the output
h.splice(g++,0,b)}return m(h)}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */function E(e){var t,r,n,o,i,s,a,u,l,c,f,/** `inputLength` will hold the number of code points in `input`. */y,/** Cached calculation results */g,m,w,E=[];// Handle the basic code points
for(s=0,// Cache the length
y=// Convert the input in UCS-2 to Unicode
(e=b(e)).length,// Initialize the state
t=128,r=0,i=72;s<y;++s)(f=e[s])<128&&E.push(h(f));// Main encoding loop:
for(n=o=E.length,o&&E.push("-");n<y;){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(a=2147483647,s=0;s<y;++s)(f=e[s])>=t&&f<a&&(a=f);for(a-t>p((2147483647-r)/// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
(g=n+1))&&d("overflow"),r+=(a-t)*g,t=a,s=0;s<y;++s)if((f=e[s])<t&&++r>2147483647&&d("overflow"),f==t){// Represent delta as a generalized variable-length integer
for(u=r,l=36;!(u<(c=l<=i?1:l>=i+26?26:l-i));l+=36)w=u-c,m=36-c,E.push(h(v(c+w%m,0))),u=p(w/m);E.push(h(v(u,0))),i=x(r,g,n==o),r=0,++n}++r,++t}return E.join("")}/** Expose `punycode` */// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(/*--------------------------------------------------------------------------*//** Define the public API */s={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */version:"1.4.1",/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ucs2:{decode:b,encode:m},decode:w,encode:E,toASCII:/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */function(e){return g(e,function(e){return l.test(e)?"xn--"+E(e):e})},toUnicode:/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */function(e){return g(e,function(e){return u.test(e)?w(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return s});else if(n&&o){if(e.exports==n)o.exports=s;else for(a in s)s.hasOwnProperty(a)&&(n[a]=s[a])}else r.punycode=s}(this)}),T.register("j4cgj",function(e,t){var r=T("6tKay"),n=T("K5P7V"),o=T("kAFi0");e.exports={formats:o,parse:n,stringify:r}}),T.register("6tKay",function(e,t){var r=T("lgDUD"),n=T("bV5b5"),o=T("kAFi0"),i=Object.prototype.hasOwnProperty,s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Array.isArray,u=Array.prototype.push,l=function(e,t){u.apply(e,a(t)?t:[t])},c=Date.prototype.toISOString,f=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],// deprecated
indices:!1,serializeDate:function(e){return c.call(e)},skipNulls:!1,strictNullHandling:!1},h={},d=function e(t,o,i,s,u,c,f,d,y,g,b,m,v,x,w,E){for(var _,S,A=t,O=E,T=0,I=!1;void 0!==(O=O.get(h))&&!I;){// Where object last appeared in the ref tree
var B=O.get(t);if(T+=1,void 0!==B){if(B===T)throw RangeError("Cyclic object value");// Break while
I=!0}void 0===O.get(h)&&(T=0)}if("function"==typeof d?A=d(o,A):A instanceof Date?A=b(A):"comma"===i&&a(A)&&(A=n.maybeMap(A,function(e){return e instanceof Date?b(e):e})),null===A){if(u)return f&&!x?f(o,p.encoder,w,"key",m):o;A=""}if("string"==typeof(_=A)||"number"==typeof _||"boolean"==typeof _||"symbol"==typeof _||"bigint"==typeof _||n.isBuffer(A))return f?[v(x?o:f(o,p.encoder,w,"key",m))+"="+v(f(A,p.encoder,w,"value",m))]:[v(o)+"="+v(String(A))];var R=[];if(void 0===A)return R;if("comma"===i&&a(A))x&&f&&(A=n.maybeMap(A,f)),S=[{value:A.length>0?A.join(",")||null:void 0}];else if(a(d))S=d;else{var k=Object.keys(A);S=y?k.sort(y):k}for(var N=s&&a(A)&&1===A.length?o+"[]":o,C=0;C<S.length;++C){var L=S[C],P="object"==typeof L&&void 0!==L.value?L.value:A[L];if(!c||null!==P){var j=a(A)?"function"==typeof i?i(N,L):N:N+(g?"."+L:"["+L+"]");E.set(t,T);var U=r();U.set(h,E),l(R,e(P,j,i,s,u,c,"comma"===i&&x&&a(A)?null:f,d,y,g,b,m,v,x,w,U))}}return R},y=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],s=p.filter;return("function"==typeof e.filter||a(e.filter))&&(s=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:s,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}};e.exports=function(e,t){var n,o,i=e,u=y(t);"function"==typeof u.filter?i=(0,u.filter)("",i):a(u.filter)&&(n=u.filter);var c=[];if("object"!=typeof i||null===i)return"";o=t&&t.arrayFormat in s?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=s[o];if(t&&"commaRoundTrip"in t&&"boolean"!=typeof t.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var p="comma"===f&&t&&t.commaRoundTrip;n||(n=Object.keys(i)),u.sort&&n.sort(u.sort);for(var h=r(),g=0;g<n.length;++g){var b=n[g];u.skipNulls&&null===i[b]||l(c,d(i[b],b,f,p,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.format,u.formatter,u.encodeValuesOnly,u.charset,h))}var m=c.join(u.delimiter),v=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),m.length>0?v+m:""}}),T.register("lgDUD",function(e,t){var r=T("k0uab"),n=T("bh6VG"),o=T("fBm0t"),i=r("%TypeError%"),s=r("%WeakMap%",!0),a=r("%Map%",!0),u=n("WeakMap.prototype.get",!0),l=n("WeakMap.prototype.set",!0),c=n("WeakMap.prototype.has",!0),f=n("Map.prototype.get",!0),p=n("Map.prototype.set",!0),h=n("Map.prototype.has",!0),d=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},y=function(e,t){var r=d(e,t);return r&&r.value},g=function(e,t,r){var n=d(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}};e.exports=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new i("Side channel does not contain "+o(e))},get:function(n){if(s&&n&&("object"==typeof n||"function"==typeof n)){if(e)return u(e,n)}else if(a){if(t)return f(t,n)}else if(r)return y(r,n)},has:function(n){if(s&&n&&("object"==typeof n||"function"==typeof n)){if(e)return c(e,n)}else if(a){if(t)return h(t,n)}else if(r)return!!d(r,n);return!1},set:function(n,o){s&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new s),l(e,n,o)):a?(t||(t=new a),p(t,n,o)):(r||/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */(r={key:{},next:null}),g(r,n,o))}};return n}}),T.register("k0uab",function(e,t){var r,n=SyntaxError,o=Function,i=TypeError,s=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(e){}},a=Object.getOwnPropertyDescriptor;if(a)try{a({},"")}catch(e){a=null;// this is IE 8, which has a broken gOPD
}var u=function(){throw new i},l=a?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,u)}catch(e){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return a(arguments,"callee").get}catch(e){return u}}}():u,c=T("1tMgc")(),f=T("eFp8J")(),p=Object.getPrototypeOf||(f?function(e){return e.__proto__}// eslint-disable-line no-proto
:null),h={},d="undefined"!=typeof Uint8Array&&p?p(Uint8Array):r,y={"%AggregateError%":"undefined"==typeof AggregateError?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?r:ArrayBuffer,"%ArrayIteratorPrototype%":c&&p?p([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":h,"%AsyncGenerator%":h,"%AsyncGeneratorFunction%":h,"%AsyncIteratorPrototype%":h,"%Atomics%":"undefined"==typeof Atomics?r:Atomics,"%BigInt%":"undefined"==typeof BigInt?r:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?r:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?r:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?r:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?r:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?r:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":h,"%Int8Array%":"undefined"==typeof Int8Array?r:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?r:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":c&&p?p(p([][Symbol.iterator]())):r,"%JSON%":"object"==typeof JSON?JSON:r,"%Map%":"undefined"==typeof Map?r:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&c&&p?p(new Map()[Symbol.iterator]()):r,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?r:Promise,"%Proxy%":"undefined"==typeof Proxy?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?r:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?r:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&c&&p?p(new Set()[Symbol.iterator]()):r,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":c&&p?p(""[Symbol.iterator]()):r,"%Symbol%":c?Symbol:r,"%SyntaxError%":n,"%ThrowTypeError%":l,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?r:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?r:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?r:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?r:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?r:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?r:WeakSet};if(p)try{null.error;// eslint-disable-line no-unused-expressions
}catch(e){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var g=p(p(e));y["%Error.prototype%"]=g}var b=function e(t){var r;if("%AsyncFunction%"===t)r=s("async function () {}");else if("%GeneratorFunction%"===t)r=s("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=s("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&p&&(r=p(o.prototype))}return y[t]=r,r},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=T("6gIY6"),x=T("4ebPq"),w=v.call(Function.call,Array.prototype.concat),E=v.call(Function.apply,Array.prototype.splice),_=v.call(Function.call,String.prototype.replace),S=v.call(Function.call,String.prototype.slice),A=v.call(Function.call,RegExp.prototype.exec),O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,I=/\\(\\)?/g,B=function(e){var t=S(e,0,1),r=S(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return _(e,O,function(e,t,r,n){o[o.length]=r?_(n,I,"$1"):t||e}),o},R=function(e,t){var r,o=e;if(x(m,o)&&(o="%"+(r=m[o])[0]+"%"),x(y,o)){var s=y[o];if(s===h&&(s=b(o)),void 0===s&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:s}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');if(null===A(/^%?[^%]*%?$/,e))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=B(e),o=r.length>0?r[0]:"",s=R("%"+o+"%",t),u=s.name,l=s.value,c=!1,f=s.alias;f&&(o=f[0],E(r,w([0,1],f)));for(var p=1,h=!0;p<r.length;p+=1){var d=r[p],g=S(d,0,1),b=S(d,-1);if(('"'===g||"'"===g||"`"===g||'"'===b||"'"===b||"`"===b)&&g!==b)throw new n("property names with quotes must have matching quotes");if("constructor"!==d&&h||(c=!0),o+="."+d,x(y,u="%"+o+"%"))l=y[u];else if(null!=l){if(!(d in l)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(a&&p+1>=r.length){var m=a(l,d);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
l=(h=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:l[d]}else h=x(l,d),l=l[d];h&&!c&&(y[u]=l)}}return l}}),T.register("1tMgc",function(e,t){var r="undefined"!=typeof Symbol&&Symbol,n=T("lrNgj");e.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&n()}}),T.register("lrNgj",function(e,t){/* eslint complexity: [2, 18], max-statements: [2, 33] */e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t||"[object Symbol]"!==Object.prototype.toString.call(t)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(e).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}}),T.register("eFp8J",function(e,t){var r={foo:{}},n=Object;e.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof n)}}),T.register("6gIY6",function(e,t){var r=T("5q2Au");e.exports=Function.prototype.bind||r}),T.register("5q2Au",function(e,t){var r=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var t,o=this;if("function"!=typeof o||"[object Function]"!==n.call(o))throw TypeError("Function.prototype.bind called on incompatible "+o);for(var i=r.call(arguments,1),s=Math.max(0,o.length-i.length),a=[],u=0;u<s;u++)a.push("$"+u);if(t=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(!(this instanceof t))return o.apply(e,i.concat(r.call(arguments)));var n=o.apply(this,i.concat(r.call(arguments)));return Object(n)===n?n:this}),o.prototype){var l=function(){};l.prototype=o.prototype,t.prototype=new l,l.prototype=null}return t}}),T.register("4ebPq",function(e,t){var r={}.hasOwnProperty,n=Function.prototype.call;e.exports=n.bind?n.bind(r):function(e,t){return n.call(r,e,t)}}),T.register("bh6VG",function(e,t){var r=T("k0uab"),n=T("ah9HS"),o=n(r("String.prototype.indexOf"));e.exports=function(e,t){var i=r(e,!!t);return"function"==typeof i&&o(e,".prototype.")>-1?n(i):i}}),T.register("ah9HS",function(e,t){var r=T("6gIY6"),n=T("k0uab"),o=n("%Function.prototype.apply%"),i=n("%Function.prototype.call%"),s=n("%Reflect.apply%",!0)||r.call(i,o),a=n("%Object.getOwnPropertyDescriptor%",!0),u=n("%Object.defineProperty%",!0),l=n("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){// IE 8 has a broken defineProperty
u=null}e.exports=function(e){var t=s(r,i,arguments);return a&&u&&a(t,"length").configurable&&u(t,"length",{value:1+l(0,e.length-(arguments.length-1))}),t};var c=function(){return s(r,o,arguments)};u?u(e.exports,"apply",{value:c}):e.exports.apply=c}),T.register("fBm0t",function(e,t){var r="function"==typeof Map&&Map.prototype,n=Object.getOwnPropertyDescriptor&&r?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,o=r&&n&&"function"==typeof n.get?n.get:null,i=r&&Map.prototype.forEach,s="function"==typeof Set&&Set.prototype,a=Object.getOwnPropertyDescriptor&&s?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=s&&a&&"function"==typeof a.get?a.get:null,l=s&&Set.prototype.forEach,c="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,f="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,p="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,h=Boolean.prototype.valueOf,d=Object.prototype.toString,y=Function.prototype.toString,g=String.prototype.match,b=String.prototype.slice,m=String.prototype.replace,v=String.prototype.toUpperCase,x=String.prototype.toLowerCase,w=RegExp.prototype.test,E=Array.prototype.concat,_=Array.prototype.join,S=Array.prototype.slice,A=Math.floor,O="function"==typeof BigInt?BigInt.prototype.valueOf:null,I=Object.getOwnPropertySymbols,B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,R="function"==typeof Symbol&&"object"==typeof Symbol.iterator,k="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===R?"object":"symbol")?Symbol.toStringTag:null,N=Object.prototype.propertyIsEnumerable,C=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype// eslint-disable-line no-proto
?function(e){return e.__proto__;// eslint-disable-line no-proto
}:null);function L(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||w.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-A(-e):A(e);// trunc(num)
if(n!==e){var o=String(n),i=b.call(t,o.length+1);return m.call(o,r,"$&_")+"."+m.call(m.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return m.call(t,r,"$&_")}var P=T("4AFFV"),j=P.custom,U=$(j)?j:null;function M(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function D(e){return"[object Array]"===q(e)&&(!k||!("object"==typeof e&&k in e))}function F(e){return"[object RegExp]"===q(e)&&(!k||!("object"==typeof e&&k in e))}// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function $(e){if(R)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!B)return!1;try{return B.call(e),!0}catch(e){}return!1}e.exports=function e(t,r,n,s){var a=r||{};if(z(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw TypeError('option "quoteStyle" must be "single" or "double"');if(z(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var d=!z(a,"customInspect")||a.customInspect;if("boolean"!=typeof d&&"symbol"!==d)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(z(a,"indent")&&null!==a.indent&&"	"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(z(a,"numericSeparator")&&"boolean"!=typeof a.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var v=a.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return function e(t,r){if(t.length>r.maxStringLength){var n=t.length-r.maxStringLength;return e(b.call(t,0,r.maxStringLength),r)+"... "+n+" more character"+(n>1?"s":"")}return M(m.call(m.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,W),"single",r)}(t,a);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var w=String(t);return v?L(t,w):w}if("bigint"==typeof t){var A=String(t)+"n";return v?L(t,A):A}var T=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=T&&T>0&&"object"==typeof t)return D(t)?"[Array]":"[Object]";var I=function(e,t){var r;if("	"===e.indent)r="	";else{if("number"!=typeof e.indent||!(e.indent>0))return null;r=_.call(Array(e.indent+1)," ")}return{base:r,prev:_.call(Array(t+1),r)}}(a,n);if(void 0===s)s=[];else if(V(s,t)>=0)return"[Circular]";function j(t,r,o){if(r&&(s=S.call(s)).push(r),o){var i={depth:a.depth};return z(a,"quoteStyle")&&(i.quoteStyle=a.quoteStyle),e(t,i,n+1,s)}return e(t,a,n+1,s)}if("function"==typeof t&&!F(t)){var H=function(e){if(e.name)return e.name;var t=g.call(y.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),J=Y(t,j);return"[Function"+(H?": "+H:" (anonymous)")+"]"+(J.length>0?" { "+_.call(J,", ")+" }":"")}if($(t)){var Q=R?m.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):B.call(t);return"object"!=typeof t||R?Q:G(Q)}if(t&&"object"==typeof t&&("undefined"!=typeof HTMLElement&&t instanceof HTMLElement||"string"==typeof t.nodeName&&"function"==typeof t.getAttribute)){for(var ee,et="<"+x.call(String(t.nodeName)),er=t.attributes||[],en=0;en<er.length;en++)et+=" "+er[en].name+"="+M((ee=er[en].value,m.call(String(ee),/"/g,"&quot;")),"double",a);return et+=">",t.childNodes&&t.childNodes.length&&(et+="..."),et+="</"+x.call(String(t.nodeName))+">"}if(D(t)){if(0===t.length)return"[]";var eo=Y(t,j);return I&&!function(e){for(var t=0;t<e.length;t++)if(V(e[t],"\n")>=0)return!1;return!0}(eo)?"["+X(eo,I)+"]":"[ "+_.call(eo,", ")+" ]"}if("[object Error]"===q(t)&&(!k||!("object"==typeof t&&k in t))){var ei=Y(t,j);return"cause"in Error.prototype||!("cause"in t)||N.call(t,"cause")?0===ei.length?"["+String(t)+"]":"{ ["+String(t)+"] "+_.call(ei,", ")+" }":"{ ["+String(t)+"] "+_.call(E.call("[cause]: "+j(t.cause),ei),", ")+" }"}if("object"==typeof t&&d){if(U&&"function"==typeof t[U]&&P)return P(t,{depth:T-n});if("symbol"!==d&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!o||!e||"object"!=typeof e)return!1;try{o.call(e);try{u.call(e)}catch(e){return!0}return e instanceof Map;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t)){var es=[];return i&&i.call(t,function(e,r){es.push(j(r,t,!0)+" => "+j(e,t))}),Z("Map",o.call(t),es,I)}if(function(e){if(!u||!e||"object"!=typeof e)return!1;try{u.call(e);try{o.call(e)}catch(e){return!0}return e instanceof Set;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t)){var ea=[];return l&&l.call(t,function(e){ea.push(j(e,t))}),Z("Set",u.call(t),ea,I)}if(function(e){if(!c||!e||"object"!=typeof e)return!1;try{c.call(e,c);try{f.call(e,f)}catch(e){return!0}return e instanceof WeakMap;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t))return K("WeakMap");if(function(e){if(!f||!e||"object"!=typeof e)return!1;try{f.call(e,f);try{c.call(e,c)}catch(e){return!0}return e instanceof WeakSet;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t))return K("WeakSet");if(function(e){if(!p||!e||"object"!=typeof e)return!1;try{return p.call(e),!0}catch(e){}return!1}(t))return K("WeakRef");if("[object Number]"===q(t)&&(!k||!("object"==typeof t&&k in t)))return G(j(Number(t)));if(function(e){if(!e||"object"!=typeof e||!O)return!1;try{return O.call(e),!0}catch(e){}return!1}(t))return G(j(O.call(t)));if("[object Boolean]"===q(t)&&(!k||!("object"==typeof t&&k in t)))return G(h.call(t));if("[object String]"===q(t)&&(!k||!("object"==typeof t&&k in t)))return G(j(String(t)));if(!("[object Date]"===q(t)&&(!k||!("object"==typeof t&&k in t)))&&!F(t)){var eu=Y(t,j),el=C?C(t)===Object.prototype:t instanceof Object||t.constructor===Object,ec=t instanceof Object?"":"null prototype",ef=!el&&k&&Object(t)===t&&k in t?b.call(q(t),8,-1):ec?"Object":"",ep=(el||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(ef||ec?"["+_.call(E.call([],ef||[],ec||[]),": ")+"] ":"");return 0===eu.length?ep+"{}":I?ep+"{"+X(eu,I)+"}":ep+"{ "+_.call(eu,", ")+" }"}return String(t)};var H=Object.prototype.hasOwnProperty||function(e){return e in this};function z(e,t){return H.call(e,t)}function q(e){return d.call(e)}function V(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}function W(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+v.call(t.toString(16))}function G(e){return"Object("+e+")"}function K(e){return e+" { ? }"}function Z(e,t,r,n){return e+" ("+t+") {"+(n?X(r,n):_.call(r,", "))+"}"}function X(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+_.call(e,","+r)+"\n"+t.prev}function Y(e,t){var r,n=D(e),o=[];if(n){o.length=e.length;for(var i=0;i<e.length;i++)o[i]=z(e,i)?t(e[i],e):""}var s="function"==typeof I?I(e):[];if(R){r={};for(var a=0;a<s.length;a++)r["$"+s[a]]=s[a]}for(var u in e)if(z(e,u)&&(!n||String(Number(u))!==u||!(u<e.length))){// eslint-disable-line no-restricted-syntax, no-continue
if(R&&r["$"+u]instanceof Symbol)continue;// eslint-disable-line no-restricted-syntax, no-continue
w.call(/[^\w$]/,u)?o.push(t(u,e)+": "+t(e[u],e)):o.push(u+": "+t(e[u],e))}if("function"==typeof I)for(var l=0;l<s.length;l++)N.call(e,s[l])&&o.push("["+t(s[l])+"]: "+t(e[s[l]],e));return o}}),T.register("bV5b5",function(e,t){var r=T("kAFi0"),n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),s=function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),u=0;u<a.length;++u){var l=a[u],c=i[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:l}),r.push(c))}return s(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);// utf-8
try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,n,o,s){// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
// It has been adapted here for stricter adherence to RFC 3986
if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===n)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var u="",l=0;l<a.length;++l){var c=a.charCodeAt(l);if(45// -
===c||46// .
===c||95// _
===c||126// ~
===c||c>=48&&c<=57// 0-9
||c>=65&&c<=90// a-z
||c>=97&&c<=122// A-Z
||s===r.RFC1738&&(40===c||41// ( )
===c)){u+=a.charAt(l);continue}if(c<128){u+=i[c];continue}if(c<2048){u+=i[192|c>>6]+i[128|63&c];continue}if(c<55296||c>=57344){u+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c];continue}l+=1,/* eslint operator-linebreak: [2, "before"] */u+=i[240|(c=65536+((1023&c)<<10|1023&a.charCodeAt(l)))>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c]}return u},isBuffer:function(e){return!!e&&"object"==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,i){/* eslint no-param-reassign: 0 */if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var s=t;return(o(t)&&!o(r)&&(s=a(t,i)),o(t)&&o(r))?(r.forEach(function(r,o){if(n.call(t,o)){var s=t[o];s&&"object"==typeof s&&r&&"object"==typeof r?t[o]=e(s,r,i):t.push(r)}else t[o]=r}),t):Object.keys(r).reduce(function(t,o){var s=r[o];return n.call(t,o)?t[o]=e(t[o],s,i):t[o]=s,t},s)}}}),T.register("kAFi0",function(e,t){var r=String.prototype.replace,n=/%20/g,o={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports={default:o.RFC3986,formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:o.RFC1738,RFC3986:o.RFC3986}}),T.register("K5P7V",function(e,t){var r=T("bV5b5"),n=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},a=function(e,t){var a={__proto__:null},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,c=u.split(t.delimiter,l),f=-1,p=t.charset;if(t.charsetSentinel)for(h=0;h<c.length;++h)0===c[h].indexOf("utf8=")&&("utf8=%E2%9C%93"===c[h]?p="utf-8":"utf8=%26%2310003%3B"===c[h]&&(p="iso-8859-1"),f=h,h=c.length);for(h=0;h<c.length;++h)if(h!==f){var h,d,y,g=c[h],b=g.indexOf("]="),m=-1===b?g.indexOf("="):b+1;-1===m?(d=t.decoder(g,i.decoder,p,"key"),y=t.strictNullHandling?null:""):(d=t.decoder(g.slice(0,m),i.decoder,p,"key"),y=r.maybeMap(s(g.slice(m+1),t),function(e){return t.decoder(e,i.decoder,p,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===p&&(y=y.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})),g.indexOf("[]=")>-1&&(y=o(y)?[y]:y),n.call(a,d)?a[d]=r.combine(a[d],y):a[d]=y}return a},u=function(e,t,r,n){for(var o=n?t:s(t,r),i=e.length-1;i>=0;--i){var a,u=e[i];if("[]"===u&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&u!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[])[c]=o:"__proto__"!==l&&(a[l]=o):a={0:o}}o=a}return o},l=function(e,t,r,o){if(e){// Transform dot notation to bracket notation
var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(i),l=a?i.slice(0,a.index):i,c=[];if(l){// If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(// Loop through children appending to the array until we hit depth
var f=0;r.depth>0&&null!==(a=s.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+i.slice(a.index)+"]"),u(c,t,r,o)}},c=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:i.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,// eslint-disable-next-line no-implicit-coercion, no-extra-parens
depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}};e.exports=function(e,t){var n=c(t);if(""===e||null==e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,i=n.plainObjects?Object.create(null):{},s=Object.keys(o),u=0;u<s.length;++u){var f=s[u],p=l(f,o[f],n,"string"==typeof e);i=r.merge(i,p,n)}return!0===n.allowSparse?i:r.compact(i)}}),T.register("9Hjkc",function(e,t){var r=T("pLvEh"),n=T("g3AIT"),o=e.exports;for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);function s(e){if("string"==typeof e&&(e=n.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}o.request=function(e,t){return e=s(e),r.request.call(this,e,t)},o.get=function(e,t){return e=s(e),r.get.call(this,e,t)}}),T.register("76qkq",function(e,t){var r=T("9Mq5w"),n=T("awmEs"),o=n.Buffer,i=T("5o6YA").Transform,s=T("3l15i"),a=T("gOtyk"),u=T("lbchK").ok,n=T("awmEs"),l=n.kMaxLength,c="Cannot create final Buffer. It would be larger than 0x"+l.toString(16)+" bytes";// zlib doesn't provide these, so kludge them in following the same
// const naming scheme zlib uses.
s.Z_MIN_WINDOWBITS=8,s.Z_MAX_WINDOWBITS=15,s.Z_DEFAULT_WINDOWBITS=15,// fewer than 64 bytes per chunk is stupid.
// technically it could work with as few as 8, but even 64 bytes
// is absurdly low.  Usually a MB or more is best.
s.Z_MIN_CHUNK=64,s.Z_MAX_CHUNK=1/0,s.Z_DEFAULT_CHUNK=16384,s.Z_MIN_MEMLEVEL=1,s.Z_MAX_MEMLEVEL=9,s.Z_DEFAULT_MEMLEVEL=8,s.Z_MIN_LEVEL=-1,s.Z_MAX_LEVEL=9,s.Z_DEFAULT_LEVEL=s.Z_DEFAULT_COMPRESSION;for(var f=Object.keys(s),p=0;p<f.length;p++){var h=f[p];h.match(/^Z/)&&Object.defineProperty(e.exports,h,{enumerable:!0,value:s[h],writable:!1})}for(var d={Z_OK:s.Z_OK,Z_STREAM_END:s.Z_STREAM_END,Z_NEED_DICT:s.Z_NEED_DICT,Z_ERRNO:s.Z_ERRNO,Z_STREAM_ERROR:s.Z_STREAM_ERROR,Z_DATA_ERROR:s.Z_DATA_ERROR,Z_MEM_ERROR:s.Z_MEM_ERROR,Z_BUF_ERROR:s.Z_BUF_ERROR,Z_VERSION_ERROR:s.Z_VERSION_ERROR},y=Object.keys(d),g=0;g<y.length;g++){var b=y[g];d[d[b]]=b}function m(e,t,r){var n=[],i=0;function s(){for(var t;null!==(t=e.read());)n.push(t),i+=t.length;e.once("readable",s)}function a(){var t,s=null;i>=l?s=RangeError(c):t=o.concat(n,i),n=[],e.close(),r(s,t)}e.on("error",function(t){e.removeListener("end",a),e.removeListener("readable",s),r(t)}),e.on("end",a),e.end(t),s()}function v(e,t){if("string"==typeof t&&(t=o.from(t)),!o.isBuffer(t))throw TypeError("Not a string or buffer");var r=e._finishFlushFlag;return e._processChunk(t,r)}// generic zlib
// minimal 2-byte header
function x(e){if(!(this instanceof x))return new x(e);B.call(this,e,s.DEFLATE)}function w(e){if(!(this instanceof w))return new w(e);B.call(this,e,s.INFLATE)}// gzip - bigger header, same deflate compression
function E(e){if(!(this instanceof E))return new E(e);B.call(this,e,s.GZIP)}function _(e){if(!(this instanceof _))return new _(e);B.call(this,e,s.GUNZIP)}// raw - no header
function S(e){if(!(this instanceof S))return new S(e);B.call(this,e,s.DEFLATERAW)}function A(e){if(!(this instanceof A))return new A(e);B.call(this,e,s.INFLATERAW)}// auto-detect header.
function O(e){if(!(this instanceof O))return new O(e);B.call(this,e,s.UNZIP)}function I(e){return e===s.Z_NO_FLUSH||e===s.Z_PARTIAL_FLUSH||e===s.Z_SYNC_FLUSH||e===s.Z_FULL_FLUSH||e===s.Z_FINISH||e===s.Z_BLOCK}// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.
function B(t,r){var n=this;if(this._opts=t=t||{},this._chunkSize=t.chunkSize||e.exports.Z_DEFAULT_CHUNK,i.call(this,t),t.flush&&!I(t.flush))throw Error("Invalid flush flag: "+t.flush);if(t.finishFlush&&!I(t.finishFlush))throw Error("Invalid flush flag: "+t.finishFlush);if(this._flushFlag=t.flush||s.Z_NO_FLUSH,this._finishFlushFlag=void 0!==t.finishFlush?t.finishFlush:s.Z_FINISH,t.chunkSize&&(t.chunkSize<e.exports.Z_MIN_CHUNK||t.chunkSize>e.exports.Z_MAX_CHUNK))throw Error("Invalid chunk size: "+t.chunkSize);if(t.windowBits&&(t.windowBits<e.exports.Z_MIN_WINDOWBITS||t.windowBits>e.exports.Z_MAX_WINDOWBITS))throw Error("Invalid windowBits: "+t.windowBits);if(t.level&&(t.level<e.exports.Z_MIN_LEVEL||t.level>e.exports.Z_MAX_LEVEL))throw Error("Invalid compression level: "+t.level);if(t.memLevel&&(t.memLevel<e.exports.Z_MIN_MEMLEVEL||t.memLevel>e.exports.Z_MAX_MEMLEVEL))throw Error("Invalid memLevel: "+t.memLevel);if(t.strategy&&t.strategy!=e.exports.Z_FILTERED&&t.strategy!=e.exports.Z_HUFFMAN_ONLY&&t.strategy!=e.exports.Z_RLE&&t.strategy!=e.exports.Z_FIXED&&t.strategy!=e.exports.Z_DEFAULT_STRATEGY)throw Error("Invalid strategy: "+t.strategy);if(t.dictionary&&!o.isBuffer(t.dictionary))throw Error("Invalid dictionary: it should be a Buffer instance");this._handle=new s.Zlib(r);var a=this;this._hadError=!1,this._handle.onerror=function(t,r){// there is no way to cleanly recover.
// continuing only obscures problems.
R(a),a._hadError=!0;var n=Error(t);n.errno=r,n.code=e.exports.codes[r],a.emit("error",n)};var u=e.exports.Z_DEFAULT_COMPRESSION;"number"==typeof t.level&&(u=t.level);var l=e.exports.Z_DEFAULT_STRATEGY;"number"==typeof t.strategy&&(l=t.strategy),this._handle.init(t.windowBits||e.exports.Z_DEFAULT_WINDOWBITS,u,t.memLevel||e.exports.Z_DEFAULT_MEMLEVEL,l,t.dictionary),this._buffer=o.allocUnsafe(this._chunkSize),this._offset=0,this._level=u,this._strategy=l,this.once("end",this.close),Object.defineProperty(this,"_closed",{get:function(){return!n._handle},configurable:!0,enumerable:!0})}function R(e,t){t&&r.nextTick(t),e._handle&&(e._handle.close(),e._handle=null)}function k(e){e.emit("close")}Object.defineProperty(e.exports,"codes",{enumerable:!0,value:Object.freeze(d),writable:!1}),e.exports.Deflate=x,e.exports.Inflate=w,e.exports.Gzip=E,e.exports.Gunzip=_,e.exports.DeflateRaw=S,e.exports.InflateRaw=A,e.exports.Unzip=O,e.exports.createDeflate=function(e){return new x(e)},e.exports.createInflate=function(e){return new w(e)},e.exports.createDeflateRaw=function(e){return new S(e)},e.exports.createInflateRaw=function(e){return new A(e)},e.exports.createGzip=function(e){return new E(e)},e.exports.createGunzip=function(e){return new _(e)},e.exports.createUnzip=function(e){return new O(e)},// Convenience methods.
// compress/decompress a string or buffer in one step.
e.exports.deflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new x(t),e,r)},e.exports.deflateSync=function(e,t){return v(new x(t),e)},e.exports.gzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new E(t),e,r)},e.exports.gzipSync=function(e,t){return v(new E(t),e)},e.exports.deflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new S(t),e,r)},e.exports.deflateRawSync=function(e,t){return v(new S(t),e)},e.exports.unzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new O(t),e,r)},e.exports.unzipSync=function(e,t){return v(new O(t),e)},e.exports.inflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new w(t),e,r)},e.exports.inflateSync=function(e,t){return v(new w(t),e)},e.exports.gunzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new _(t),e,r)},e.exports.gunzipSync=function(e,t){return v(new _(t),e)},e.exports.inflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),m(new A(t),e,r)},e.exports.inflateRawSync=function(e,t){return v(new A(t),e)},a.inherits(B,i),B.prototype.params=function(t,n,o){if(t<e.exports.Z_MIN_LEVEL||t>e.exports.Z_MAX_LEVEL)throw RangeError("Invalid compression level: "+t);if(n!=e.exports.Z_FILTERED&&n!=e.exports.Z_HUFFMAN_ONLY&&n!=e.exports.Z_RLE&&n!=e.exports.Z_FIXED&&n!=e.exports.Z_DEFAULT_STRATEGY)throw TypeError("Invalid strategy: "+n);if(this._level!==t||this._strategy!==n){var i=this;this.flush(s.Z_SYNC_FLUSH,function(){u(i._handle,"zlib binding closed"),i._handle.params(t,n),!i._hadError&&(i._level=t,i._strategy=n,o&&o())})}else r.nextTick(o)},B.prototype.reset=function(){return u(this._handle,"zlib binding closed"),this._handle.reset()},// This is the _flush function called by the transform class,
// internally, when the last chunk has been written.
B.prototype._flush=function(e){this._transform(o.alloc(0),"",e)},B.prototype.flush=function(e,t){var n=this,i=this._writableState;"function"!=typeof e&&(void 0!==e||t)||(t=e,e=s.Z_FULL_FLUSH),i.ended?t&&r.nextTick(t):i.ending?t&&this.once("end",t):i.needDrain?t&&this.once("drain",function(){return n.flush(e,t)}):(this._flushFlag=e,this.write(o.alloc(0),"",t))},B.prototype.close=function(e){R(this,e),r.nextTick(k,this)},B.prototype._transform=function(e,t,r){var n,i=this._writableState,a=(i.ending||i.ended)&&(!e||i.length===e.length);return null===e||o.isBuffer(e)?this._handle?void(a?n=this._finishFlushFlag:(n=this._flushFlag,e.length>=i.length&&(this._flushFlag=this._opts.flush||s.Z_NO_FLUSH)),this._processChunk(e,n,r)):r(Error("zlib binding closed")):r(Error("invalid input"))},B.prototype._processChunk=function(e,t,r){var n=e&&e.length,i=this._chunkSize-this._offset,s=0,a=this,f="function"==typeof r;if(!f){var p,h=[],d=0;this.on("error",function(e){p=e}),u(this._handle,"zlib binding closed");do var y=this._handle.writeSync(t,e,s,n,this._buffer,this._offset,i);// out_len
while(!this._hadError&&m(y[0],y[1]))if(this._hadError)throw p;if(d>=l)throw R(this),RangeError(c);var g=o.concat(h,d);return R(this),g}u(this._handle,"zlib binding closed");var b=this._handle.write(t,e,s,n,this._buffer,this._offset,i);// out_len
function m(l,c){if(this&&(this.buffer=null,this.callback=null),!a._hadError){var p=i-c;if(u(p>=0,"have should not go down"),p>0){var y=a._buffer.slice(a._offset,a._offset+p);a._offset+=p,f?a.push(y):(h.push(y),d+=y.length)}if((0===c||a._offset>=a._chunkSize)&&(i=a._chunkSize,a._offset=0,a._buffer=o.allocUnsafe(a._chunkSize)),0===c){if(// Not actually done.  Need to reprocess.
// Also, update the availInBefore to the availInAfter value,
// so that if we have to hit it a third (fourth, etc.) time,
// it'll have the correct byte counts.
s+=n-l,n=l,!f)return!0;var g=a._handle.write(t,e,s,n,a._buffer,a._offset,a._chunkSize);return g.callback=m,void(g.buffer=e)}if(!f)return!1;// finished with the chunk.
r()}}b.buffer=e,b.callback=m},a.inherits(x,B),a.inherits(w,B),a.inherits(E,B),a.inherits(_,B),a.inherits(S,B),a.inherits(A,B),a.inherits(O,B)}),T.register("5o6YA",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
e.exports=n;var r=T("k4yOc").EventEmitter;// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.
function n(){r.call(this)}T("6cuMU")(n,r),n.Readable=T("340fO"),n.Writable=T("lWtyM"),n.Duplex=T("1SlAW"),n.Transform=T("f7L7V"),n.PassThrough=T("dX7Dt"),n.finished=T("f6xbQ"),n.pipeline=T("2mqHM"),// Backwards-compat with node 0.4.x
n.Stream=n,n.prototype.pipe=function(e,t){var n=this;function o(t){e.writable&&!1===e.write(t)&&n.pause&&n.pause()}function i(){n.readable&&n.resume&&n.resume()}n.on("data",o),e.on("drain",i),e._isStdio||t&&!1===t.end||(n.on("end",a),n.on("close",u));var s=!1;function a(){s||(s=!0,e.end())}function u(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}// don't leave dangling pipes when there are errors.
function l(e){if(c(),0===r.listenerCount(this,"error"))throw e;// Unhandled stream error in pipe.
}// remove all the event listeners that were added.
function c(){n.removeListener("data",o),e.removeListener("drain",i),n.removeListener("end",a),n.removeListener("close",u),n.removeListener("error",l),e.removeListener("error",l),n.removeListener("end",c),n.removeListener("close",c),e.removeListener("close",c)}// Allow for unix-like usage: A.pipe(B).pipe(C)
return n.on("error",l),e.on("error",l),n.on("end",c),n.on("close",c),e.on("close",c),e.emit("pipe",n),e}}),T.register("3l15i",function(e,t){var r=T("awmEs").Buffer,n=T("9Mq5w"),o=T("lbchK"),i=T("jDjHi"),s=T("5CYYP"),a=T("aNZMB"),u=T("99vV4");for(var l in u)e.exports[l]=u[l];/**
 * Emulate Node's zlib C++ layer for use by the JS layer in index.js
 */function c(t){if("number"!=typeof t||t<e.exports.DEFLATE||t>e.exports.UNZIP)throw TypeError("Bad argument");this.dictionary=null,this.err=0,this.flush=0,this.init_done=!1,this.level=0,this.memLevel=0,this.mode=t,this.strategy=0,this.windowBits=0,this.write_in_progress=!1,this.pending_close=!1,this.gzip_id_bytes_read=0}// zlib modes
e.exports.NONE=0,e.exports.DEFLATE=1,e.exports.INFLATE=2,e.exports.GZIP=3,e.exports.GUNZIP=4,e.exports.DEFLATERAW=5,e.exports.INFLATERAW=6,e.exports.UNZIP=7,c.prototype.close=function(){if(this.write_in_progress){this.pending_close=!0;return}this.pending_close=!1,o(this.init_done,"close before init"),o(this.mode<=e.exports.UNZIP),this.mode===e.exports.DEFLATE||this.mode===e.exports.GZIP||this.mode===e.exports.DEFLATERAW?s.deflateEnd(this.strm):(this.mode===e.exports.INFLATE||this.mode===e.exports.GUNZIP||this.mode===e.exports.INFLATERAW||this.mode===e.exports.UNZIP)&&a.inflateEnd(this.strm),this.mode=e.exports.NONE,this.dictionary=null},c.prototype.write=function(e,t,r,n,o,i,s){return this._write(!0,e,t,r,n,o,i,s)},c.prototype.writeSync=function(e,t,r,n,o,i,s){return this._write(!1,e,t,r,n,o,i,s)},c.prototype._write=function(t,i,s,a,u,l,c,f){if(o.equal(arguments.length,8),o(this.init_done,"write before init"),o(this.mode!==e.exports.NONE,"already finalized"),o.equal(!1,this.write_in_progress,"write already in progress"),o.equal(!1,this.pending_close,"close is pending"),this.write_in_progress=!0,o.equal(!1,void 0===i,"must provide flush value"),this.write_in_progress=!0,i!==e.exports.Z_NO_FLUSH&&i!==e.exports.Z_PARTIAL_FLUSH&&i!==e.exports.Z_SYNC_FLUSH&&i!==e.exports.Z_FULL_FLUSH&&i!==e.exports.Z_FINISH&&i!==e.exports.Z_BLOCK)throw Error("Invalid flush value");if(null==s&&(s=r.alloc(0),u=0,a=0),this.strm.avail_in=u,this.strm.input=s,this.strm.next_in=a,this.strm.avail_out=f,this.strm.output=l,this.strm.next_out=c,this.flush=i,!t)return(// sync version
this._process(),this._checkError())?this._afterSync():void 0;// async version
var p=this;return n.nextTick(function(){p._process(),p._after()}),this},c.prototype._afterSync=function(){var e=this.strm.avail_out,t=this.strm.avail_in;return this.write_in_progress=!1,[t,e]},c.prototype._process=function(){var t=null;// If the avail_out is left at 0, then it means that it ran out
// of room.  If there was avail_out left over, then it means
// that all of the input was consumed.
switch(this.mode){case e.exports.DEFLATE:case e.exports.GZIP:case e.exports.DEFLATERAW:this.err=s.deflate(this.strm,this.flush);break;case e.exports.UNZIP:switch(this.strm.avail_in>0&&(t=this.strm.next_in),this.gzip_id_bytes_read){case 0:if(null===t)break;if(31===this.strm.input[t]){if(this.gzip_id_bytes_read=1,t++,1===this.strm.avail_in)break}else{this.mode=e.exports.INFLATE;break}// fallthrough
case 1:if(null===t)break;139===this.strm.input[t]?(this.gzip_id_bytes_read=2,this.mode=e.exports.GUNZIP):// (after initialization).
this.mode=e.exports.INFLATE;break;default:throw Error("invalid number of gzip magic number bytes read")}// fallthrough
case e.exports.INFLATE:case e.exports.GUNZIP:case e.exports.INFLATERAW:for(this.err=a.inflate(this.strm,this.flush),this.err===e.exports.Z_NEED_DICT&&this.dictionary&&(// Load it
this.err=a.inflateSetDictionary(this.strm,this.dictionary),this.err===e.exports.Z_OK?this.err=a.inflate(this.strm,this.flush):this.err===e.exports.Z_DATA_ERROR&&// Make it possible for After() to tell a bad dictionary from bad
// input.
(this.err=e.exports.Z_NEED_DICT));this.strm.avail_in>0&&this.mode===e.exports.GUNZIP&&this.err===e.exports.Z_STREAM_END&&0!==this.strm.next_in[0];)// Bytes remain in input buffer. Perhaps this is another compressed
// member in the same archive, or just trailing garbage.
// Trailing zero bytes are okay, though, since they are frequently
// used for padding.
this.reset(),this.err=a.inflate(this.strm,this.flush);break;default:throw Error("Unknown mode "+this.mode)}},c.prototype._checkError=function(){// Acceptable error states depend on the type of zlib stream.
switch(this.err){case e.exports.Z_OK:case e.exports.Z_BUF_ERROR:if(0!==this.strm.avail_out&&this.flush===e.exports.Z_FINISH)return this._error("unexpected end of file"),!1;break;case e.exports.Z_STREAM_END:break;case e.exports.Z_NEED_DICT:return null==this.dictionary?this._error("Missing dictionary"):this._error("Bad dictionary"),!1;default:return(// something else.
this._error("Zlib error"),!1)}return!0},c.prototype._after=function(){if(this._checkError()){var e=this.strm.avail_out,t=this.strm.avail_in;this.write_in_progress=!1,// call the write() cb
this.callback(t,e),this.pending_close&&this.close()}},c.prototype._error=function(e){this.strm.msg&&(e=this.strm.msg),this.onerror(e,this.err),this.write_in_progress=!1,this.pending_close&&this.close()},c.prototype.init=function(t,r,n,i,s){o(4==arguments.length||5==arguments.length,"init(windowBits, level, memLevel, strategy, [dictionary])"),o(t>=8&&t<=15,"invalid windowBits"),o(r>=-1&&r<=9,"invalid compression level"),o(n>=1&&n<=9,"invalid memlevel"),o(i===e.exports.Z_FILTERED||i===e.exports.Z_HUFFMAN_ONLY||i===e.exports.Z_RLE||i===e.exports.Z_FIXED||i===e.exports.Z_DEFAULT_STRATEGY,"invalid strategy"),this._init(r,t,n,i,s),this._setDictionary()},c.prototype.params=function(){throw Error("deflateParams Not supported")},c.prototype.reset=function(){this._reset(),this._setDictionary()},c.prototype._init=function(t,r,n,o,u){switch(this.level=t,this.windowBits=r,this.memLevel=n,this.strategy=o,this.flush=e.exports.Z_NO_FLUSH,this.err=e.exports.Z_OK,(this.mode===e.exports.GZIP||this.mode===e.exports.GUNZIP)&&(this.windowBits+=16),this.mode===e.exports.UNZIP&&(this.windowBits+=32),(this.mode===e.exports.DEFLATERAW||this.mode===e.exports.INFLATERAW)&&(this.windowBits=-1*this.windowBits),this.strm=new i,this.mode){case e.exports.DEFLATE:case e.exports.GZIP:case e.exports.DEFLATERAW:this.err=s.deflateInit2(this.strm,this.level,e.exports.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case e.exports.INFLATE:case e.exports.GUNZIP:case e.exports.INFLATERAW:case e.exports.UNZIP:this.err=a.inflateInit2(this.strm,this.windowBits);break;default:throw Error("Unknown mode "+this.mode)}this.err!==e.exports.Z_OK&&this._error("Init error"),this.dictionary=u,this.write_in_progress=!1,this.init_done=!0},c.prototype._setDictionary=function(){if(null!=this.dictionary){switch(this.err=e.exports.Z_OK,this.mode){case e.exports.DEFLATE:case e.exports.DEFLATERAW:this.err=s.deflateSetDictionary(this.strm,this.dictionary)}this.err!==e.exports.Z_OK&&this._error("Failed to set dictionary")}},c.prototype._reset=function(){switch(this.err=e.exports.Z_OK,this.mode){case e.exports.DEFLATE:case e.exports.DEFLATERAW:case e.exports.GZIP:this.err=s.deflateReset(this.strm);break;case e.exports.INFLATE:case e.exports.INFLATERAW:case e.exports.GUNZIP:this.err=a.inflateReset(this.strm)}this.err!==e.exports.Z_OK&&this._error("Failed to reset stream")},e.exports.Zlib=c}),T.register("lbchK",function(e,t){// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var r,n,o,i,s,a=T("9Mq5w");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==u(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(n.key),n)}}var c=T("bf7du").codes,f=c.ERR_AMBIGUOUS_ARGUMENT,p=c.ERR_INVALID_ARG_TYPE,h=c.ERR_INVALID_ARG_VALUE,d=c.ERR_INVALID_RETURN_VALUE,y=c.ERR_MISSING_ARGS,g=T("icovS"),b=T("gOtyk"),m=b.inspect,b=T("gOtyk"),v=b.types,x=v.isPromise,w=v.isRegExp,E=T("odOTX")(),_=T("JZWw8")(),S=T("bh6VG")("RegExp.prototype.test");function A(){var e=T("lWDAh");i=e.isDeepEqual,s=e.isDeepStrictEqual}var O=!1,I=e.exports=N,B={};// All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function R(e){if(e.message instanceof Error)throw e.message;throw new g(e)}function k(e,t,r,n){if(!r){var o=!1;if(0===t)o=!0,n="No value argument passed to `assert.ok()`";else if(n instanceof Error)throw n;var i=new g({actual:r,expected:!0,message:n,operator:"==",stackStartFn:e});throw i.generatedMessage=o,i}}// Pure assertion tests whether a value is truthy, as determined
// by !!value.
function N(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];k.apply(void 0,[N,t.length].concat(t))}I.fail=function e(t,r,n,o,i){var s,u=arguments.length;if(0===u?s="Failed":1===u?(n=t,t=void 0):(!1===O&&(O=!0,(a.emitWarning?a.emitWarning:console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")),2===u&&(o="!=")),n instanceof Error)throw n;var l={actual:t,expected:r,operator:void 0===o?"fail":o,stackStartFn:i||e};void 0!==n&&(l.message=n);var c=new g(l);throw s&&(c.message=s,c.generatedMessage=!0),c},// The AssertionError is defined in internal/error.
I.AssertionError=g,I.ok=N,// The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */I.equal=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");// eslint-disable-next-line eqeqeq
t!=r&&R({actual:t,expected:r,message:n,operator:"==",stackStartFn:e})},// The non-equality assertion tests for whether two objects are not
// equal with !=.
I.notEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");// eslint-disable-next-line eqeqeq
t==r&&R({actual:t,expected:r,message:n,operator:"!=",stackStartFn:e})},// The equivalence assertion tests a deep equality relation.
I.deepEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");void 0===i&&A(),i(t,r)||R({actual:t,expected:r,message:n,operator:"deepEqual",stackStartFn:e})},// The non-equivalence assertion tests for any deep inequality.
I.notDeepEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");void 0===i&&A(),i(t,r)&&R({actual:t,expected:r,message:n,operator:"notDeepEqual",stackStartFn:e})},/* eslint-enable */I.deepStrictEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");void 0===i&&A(),s(t,r)||R({actual:t,expected:r,message:n,operator:"deepStrictEqual",stackStartFn:e})},I.notDeepStrictEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");void 0===i&&A(),s(t,r)&&R({actual:t,expected:r,message:n,operator:"notDeepStrictEqual",stackStartFn:e})},I.strictEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");_(t,r)||R({actual:t,expected:r,message:n,operator:"strictEqual",stackStartFn:e})},I.notStrictEqual=function e(t,r,n){if(arguments.length<2)throw new y("actual","expected");_(t,r)&&R({actual:t,expected:r,message:n,operator:"notStrictEqual",stackStartFn:e})};var C=(r=function e(t,r,n){var o=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),r.forEach(function(e){e in t&&(void 0!==n&&"string"==typeof n[e]&&w(t[e])&&S(t[e],n[e])?o[e]=n[e]:o[e]=t[e])})},n&&l(r.prototype,n),o&&l(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r);function L(e,t,r,n){if("function"!=typeof t){if(w(t))return S(t,e);// assert.doesNotThrow does not accept objects.
if(2==arguments.length)throw new p("expected",["Function","RegExp"],t);// Handle primitives properly.
if("object"!==u(e)||null===e){var o=new g({actual:e,expected:t,message:r,operator:"deepStrictEqual",stackStartFn:n});throw o.operator=n.name,o}var a=Object.keys(t);// Special handle errors to make sure the name and the message are compared
// as well.
if(t instanceof Error)a.push("name","message");else if(0===a.length)throw new h("error",t,"may not be an empty object");return void 0===i&&A(),a.forEach(function(o){"string"==typeof e[o]&&w(t[o])&&S(t[o],e[o])||function(e,t,r,n,o,i){if(!(r in e)||!s(e[r],t[r])){if(!n){// Create placeholder objects to create a nice output.
var a=new C(e,o),u=new C(t,o,e),l=new g({actual:a,expected:u,operator:"deepStrictEqual",stackStartFn:i});throw l.actual=e,l.expected=t,l.operator=i.name,l}R({actual:e,expected:t,message:n,operator:i.name,stackStartFn:i})}}(e,t,o,r,a,n)}),!0}return(// Guard instanceof against arrow functions as they don't have a prototype.
void 0!==t.prototype&&e instanceof t||!Error.isPrototypeOf(t)&&!0===t.call({},e))}function P(e){if("function"!=typeof e)throw new p("fn","Function",e);try{e()}catch(e){return e}return B}function j(e){// Accept native ES6 promises and promises that are implemented in a similar
// way. Do not accept thenables that use a function as `obj` and that have no
// `catch` handler.
// TODO: thenables are checked up until they have the correct methods,
// but according to documentation, the `then` method should receive
// the `fulfill` and `reject` arguments as well or it may be never resolved.
return x(e)||null!==e&&"object"===u(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function U(e){return Promise.resolve().then(function(){var t;if("function"==typeof e)// Fail in case no promise is returned.
{if(!j(// Return a rejected promise if `promiseFn` throws synchronously.
t=e()))throw new d("instance of Promise","promiseFn",t)}else if(j(e))t=e;else throw new p("promiseFn",["Function","Promise"],e);return Promise.resolve().then(function(){return t}).then(function(){return B}).catch(function(e){return e})})}function M(e,t,r,n){if("string"==typeof r){if(4==arguments.length)throw new p("error",["Object","Error","Function","RegExp"],r);if("object"===u(t)&&null!==t){if(t.message===r)throw new f("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}else if(t===r)throw new f("error/message",'The error "'.concat(t,'" is identical to the message.'));n=r,r=void 0}else if(null!=r&&"object"!==u(r)&&"function"!=typeof r)throw new p("error",["Object","Error","Function","RegExp"],r);if(t===B){var o="";r&&r.name&&(o+=" (".concat(r.name,")")),o+=n?": ".concat(n):".";var i="rejects"===e.name?"rejection":"exception";R({actual:void 0,expected:r,operator:e.name,message:"Missing expected ".concat(i).concat(o),stackStartFn:e})}if(r&&!L(t,r,n,e))throw t}function D(e,t,r,n){if(t!==B){if("string"==typeof r&&(n=r,r=void 0),!r||L(t,r)){var o=n?": ".concat(n):".",i="doesNotReject"===e.name?"rejection":"exception";R({actual:t,expected:r,operator:e.name,message:"Got unwanted ".concat(i).concat(o,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}}// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a871df3dfb8ea663ef5e1f8f62701ec51384ecb
function F(e,t,r,n,o){if(!w(t))throw new p("regexp","RegExp",t);var i="match"===o;if("string"!=typeof e||S(t,e)!==i){if(r instanceof Error)throw r;var s=!r;// 'The input was expected to not match the regular expression ' +
r=r||("string"!=typeof e?'The "string" argument must be of type string. Received type '+"".concat(u(e)," (").concat(m(e),")"):(i?"The input did not match the regular expression ":"The input was expected to not match the regular expression ")+"".concat(m(t),". Input:\n\n").concat(m(e),"\n"));var a=new g({actual:e,expected:t,message:r,operator:o,stackStartFn:n});throw a.generatedMessage=s,a}}I.throws=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];M.apply(void 0,[e,P(t)].concat(n))},I.rejects=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return U(t).then(function(t){return M.apply(void 0,[e,t].concat(n))})},I.doesNotThrow=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];D.apply(void 0,[e,P(t)].concat(n))},I.doesNotReject=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return U(t).then(function(t){return D.apply(void 0,[e,t].concat(n))})},I.ifError=function e(t){if(null!=t){var r="ifError got unwanted exception: ";"object"===u(t)&&"string"==typeof t.message?0===t.message.length&&t.constructor?r+=t.constructor.name:r+=t.message:r+=m(t);var n=new g({actual:t,expected:null,operator:"ifError",message:r,stackStartFn:e}),o=t.stack;if("string"==typeof o){// This will remove any duplicated frames from the error frames taken
// from within `ifError` and add the original error frames to the newly
// created ones.
var i=o.split("\n");i.shift();for(var s=n.stack.split("\n"),a=0;a<i.length;a++){// Find the first occurrence of the frame.
var l=s.indexOf(i[a]);if(-1!==l){// Only keep new frames.
s=s.slice(0,l);break}}n.stack="".concat(s.join("\n"),"\n").concat(i.join("\n"))}throw n}},I.match=function e(t,r,n){F(t,r,n,e,"match")},I.doesNotMatch=function e(t,r,n){F(t,r,n,e,"doesNotMatch")},I.strict=E(// Expose a strict only variant of assert
function e(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];k.apply(void 0,[e,r.length].concat(r))},I,{equal:I.strictEqual,deepEqual:I.deepStrictEqual,notEqual:I.notStrictEqual,notDeepEqual:I.notDeepStrictEqual}),I.strict.strict=I.strict}),T.register("bf7du",function(e,t){// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(o.key),o)}}function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}i(e.exports,"codes",()=>a,e=>a=e);var a,u,l,c={};function f(e,t,i){i||(i=Error);var a=/*#__PURE__*/function(i){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(f,i);var a,u,l,c=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=s(f);if(a){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(r,n,o){var i;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,f),(i=c.call(this,"string"==typeof t?t:t(r,n,o))).code=e,i}return u&&n(f.prototype,u),l&&n(f,l),Object.defineProperty(f,"prototype",{writable:!1}),f}(i);c[e]=a}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function p(e,t){if(!Array.isArray(e))return"of ".concat(t," ").concat(String(e));var r=e.length;return(e=e.map(function(e){return String(e)}),r>2)?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}f("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),f("ERR_INVALID_ARG_TYPE",function(e,t,n){if((void 0===u&&(u=T("lbchK")),u("string"==typeof e,"'name' must be a string"),"string"==typeof t&&(o="not ",t.substr(!i||i<0?0:+i,o.length)===o))?(c="must not be",t=t.replace(/^not /,"")):c="must be",s=" argument",(void 0===a||a>e.length)&&(a=e.length),e.substring(a-s.length,a)===s)f="The ".concat(e," ").concat(c," ").concat(p(t,"type"));else{var o,i,s,a,l,c,f,h=("number"!=typeof l&&(l=0),l+1>e.length||-1===e.indexOf(".",l))?"argument":"property";f='The "'.concat(e,'" ').concat(h," ").concat(c," ").concat(p(t,"type"))}return(// TODO(BridgeAR): Improve the output by showing `null` and similar.
f+". Received type ".concat(r(n)))},TypeError),f("ERR_INVALID_ARG_VALUE",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===l&&(l=T("gOtyk"));var n=l.inspect(t);return n.length>128&&(n="".concat(n.slice(0,128),"...")),"The argument '".concat(e,"' ").concat(r,". Received ").concat(n)},TypeError,RangeError),f("ERR_INVALID_RETURN_VALUE",function(e,t,n){var o;return o=n&&n.constructor&&n.constructor.name?"instance of ".concat(n.constructor.name):"type ".concat(r(n)),"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(o,".")},TypeError),f("ERR_MISSING_ARGS",function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];void 0===u&&(u=T("lbchK")),u(t.length>0,"At least one arg needs to be specified");var n="The ",o=t.length;switch(t=t.map(function(e){return'"'.concat(e,'"')}),o){case 1:n+="".concat(t[0]," argument");break;case 2:n+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:n+=t.slice(0,o-1).join(", ")+", and ".concat(t[o-1]," arguments")}return"".concat(n," must be specified")},TypeError),a=c}),T.register("gOtyk",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var r=T("9Mq5w"),n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},o=/%[sdj%]/g;e.exports.format=function(e){if(!b(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(a(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,i=n.length,s=String(e).replace(o,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),u=n[r];r<i;u=n[++r])y(u)||!x(u)?s+=" "+u:s+=" "+a(u);return s},// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
e.exports.deprecate=function(t,n){if(void 0!==r&&!0===r.noDeprecation)return t;// Allow for deprecating things in the process of starting up.
if(void 0===r)return function(){return e.exports.deprecate(t,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(r.throwDeprecation)throw Error(n);r.traceDeprecation?console.trace(n):console.error(n),o=!0}return t.apply(this,arguments)}};var i={},s=/^$/;/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 *//* legacy: obj, showHidden, depth, colors*/function a(t,r){// default options
var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&e.exports._extend(n,r),m(n.showHidden)&&(n.showHidden=!1),m(n.depth)&&(n.depth=2),m(n.colors)&&(n.colors=!1),m(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),c(n,t,n.depth)}function u(e,t){var r=a.styles[t];return r?"\x1b["+a.colors[r][0]+"m"+e+"\x1b["+a.colors[r][1]+"m":e}function l(e,t){return e}function c(t,r,n){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(t.customInspect&&r&&_(r.inspect)&&// Filter out the util module, it's inspect function is special
r.inspect!==e.exports.inspect&&// Also filter out any prototype objects using the circular check.
!(r.constructor&&r.constructor.prototype===r)){var o,i,s,a,u,l=r.inspect(n,t);return b(l)||(l=c(t,l,n)),l}// Primitive types cannot have properties
var x=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(b(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return g(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):y(t)?e.stylize("null","null"):void 0}(t,r);if(x)return x;// Look up the keys of the object.
var S=Object.keys(r),A=(a={},S.forEach(function(e,t){a[e]=!0}),a);// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(t.showHidden&&(S=Object.getOwnPropertyNames(r)),E(r)&&(S.indexOf("message")>=0||S.indexOf("description")>=0))return f(r);// Some type of object without properties can be shortcutted.
if(0===S.length){if(_(r)){var O=r.name?": "+r.name:"";return t.stylize("[Function"+O+"]","special")}if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return t.stylize(Date.prototype.toString.call(r),"date");if(E(r))return f(r)}var T="",B=!1,R=["{","}"];return(h(r)&&(B=!0,R=["[","]"]),_(r)&&(T=" [Function"+(r.name?": "+r.name:"")+"]"),v(r)&&(T=" "+RegExp.prototype.toString.call(r)),w(r)&&(T=" "+Date.prototype.toUTCString.call(r)),E(r)&&(T=" "+f(r)),0!==S.length||B&&0!=r.length)?n<0?v(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),u=B?function(e,t,r,n,o){for(var i=[],s=0,a=t.length;s<a;++s)I(t,String(s))?i.push(p(e,t,r,n,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,r,n,o,!0))}),i}(t,r,n,A,S):S.map(function(e){return p(t,r,n,A,e,B)}),t.seen.pop(),o=T,i=R,s=0,u.reduce(function(e,t){return s++,t.indexOf("\n")>=0&&s++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?i[0]+(""===o?"":o+"\n ")+" "+u.join(",\n  ")+" "+i[1]:i[0]+o+" "+u.join(", ")+" "+i[1]):R[0]+T+R[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,o,i){var s,a,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?a=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(a=e.stylize("[Setter]","special")),I(n,o)||(s="["+o+"]"),!a&&(0>e.seen.indexOf(u.value)?(a=y(r)?c(e,u.value,null):c(e,u.value,r-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map(function(e){return"  "+e}).join("\n").slice(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),m(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.slice(1,-1),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function h(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function y(e){return null===e}function g(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return void 0===e}function v(e){return x(e)&&"[object RegExp]"===S(e)}function x(e){return"object"==typeof e&&null!==e}function w(e){return x(e)&&"[object Date]"===S(e)}function E(e){return x(e)&&("[object Error]"===S(e)||e instanceof Error)}function _(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function A(e){return e<10?"0"+e.toString(10):e.toString(10)}e.exports.debuglog=function(t){if(!i[t=t.toUpperCase()]){if(s.test(t)){var n=r.pid;i[t]=function(){var r=e.exports.format.apply(e.exports,arguments);console.error("%s %d: %s",t,n,r)}}else i[t]=function(){}}return i[t]},e.exports.inspect=a,// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},// Don't use 'blue' not visible on cmd.exe
a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",// "name": intentionally not styling
regexp:"red"},// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
e.exports.types=T("aBLNt"),e.exports.isArray=h,e.exports.isBoolean=d,e.exports.isNull=y,e.exports.isNullOrUndefined=function(e){return null==e},e.exports.isNumber=g,e.exports.isString=b,e.exports.isSymbol=function(e){return"symbol"==typeof e},e.exports.isUndefined=m,e.exports.isRegExp=v,e.exports.types.isRegExp=v,e.exports.isObject=x,e.exports.isDate=w,e.exports.types.isDate=w,e.exports.isError=E,e.exports.types.isNativeError=E,e.exports.isFunction=_,e.exports.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||// ES6 symbol
void 0===e},e.exports.isBuffer=T("90FXD");var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}// log is just a thin wrapper to console.log that prepends a timestamp
e.exports.log=function(){var t,r;console.log("%s - %s",(r=[A((t=new Date).getHours()),A(t.getMinutes()),A(t.getSeconds())].join(":"),[t.getDate(),O[t.getMonth()],r].join(" ")),e.exports.format.apply(e.exports,arguments))},/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */e.exports.inherits=T("6cuMU"),e.exports._extend=function(e,t){// Don't do anything if add isn't an object
if(!t||!x(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var B="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function R(e,t){// `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
// Because `null` is a special error value in callbacks which means "no error
// occurred", we error-wrap so the callback consumer can distinguish between
// "the promise rejected with null" or "the promise fulfilled with undefined".
if(!e){var r=Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}e.exports.promisify=function(e){if("function"!=typeof e)throw TypeError('The "original" argument must be of type Function');if(B&&e[B]){var t=e[B];if("function"!=typeof t)throw TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,B,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),B&&Object.defineProperty(t,B,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},e.exports.promisify.custom=B,e.exports.callbackify=function(e){if("function"!=typeof e)throw TypeError('The "original" argument must be of type Function');// We DO NOT return the promise as it gives the user a false sense that
// the promise is actually somehow related to the callback's execution
// and that the callback throwing will reject the promise.
function t(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if("function"!=typeof o)throw TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};// In true node style we process the callback on `nextTick` with all the
// implications (stack, `uncaughtException`, `async_hooks`)
e.apply(this,t).then(function(e){r.nextTick(s.bind(null,null,e))},function(e){r.nextTick(R.bind(null,e,s))})}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,n(e)),t}}),T.register("aBLNt",function(e,t){var r=T("jeAAD"),n=T("605Ic"),o=T("5x9jo"),i=T("dYVlV");function s(e){return e.call.bind(e)}var a="undefined"!=typeof BigInt,u="undefined"!=typeof Symbol,l=s(Object.prototype.toString),c=s(Number.prototype.valueOf),f=s(String.prototype.valueOf),p=s(Boolean.prototype.valueOf);if(a)var h=s(BigInt.prototype.valueOf);if(u)var d=s(Symbol.prototype.valueOf);function y(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function g(e){return"[object Map]"===l(e)}function b(e){return"[object Set]"===l(e)}function m(e){return"[object WeakMap]"===l(e)}function v(e){return"[object WeakSet]"===l(e)}function x(e){return"[object ArrayBuffer]"===l(e)}function w(e){return"undefined"!=typeof ArrayBuffer&&(x.working?x(e):e instanceof ArrayBuffer)}function E(e){return"[object DataView]"===l(e)}function _(e){return"undefined"!=typeof DataView&&(E.working?E(e):e instanceof DataView)}e.exports.isArgumentsObject=r,e.exports.isGeneratorFunction=n,e.exports.isTypedArray=i,e.exports.isPromise=// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},e.exports.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):i(e)||_(e)},e.exports.isUint8Array=function(e){return"Uint8Array"===o(e)},e.exports.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===o(e)},e.exports.isUint16Array=function(e){return"Uint16Array"===o(e)},e.exports.isUint32Array=function(e){return"Uint32Array"===o(e)},e.exports.isInt8Array=function(e){return"Int8Array"===o(e)},e.exports.isInt16Array=function(e){return"Int16Array"===o(e)},e.exports.isInt32Array=function(e){return"Int32Array"===o(e)},e.exports.isFloat32Array=function(e){return"Float32Array"===o(e)},e.exports.isFloat64Array=function(e){return"Float64Array"===o(e)},e.exports.isBigInt64Array=function(e){return"BigInt64Array"===o(e)},e.exports.isBigUint64Array=function(e){return"BigUint64Array"===o(e)},g.working="undefined"!=typeof Map&&g(new Map),e.exports.isMap=function(e){return"undefined"!=typeof Map&&(g.working?g(e):e instanceof Map)},b.working="undefined"!=typeof Set&&b(new Set),e.exports.isSet=function(e){return"undefined"!=typeof Set&&(b.working?b(e):e instanceof Set)},m.working="undefined"!=typeof WeakMap&&m(new WeakMap),e.exports.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(m.working?m(e):e instanceof WeakMap)},v.working="undefined"!=typeof WeakSet&&v(new WeakSet),e.exports.isWeakSet=function(e){return v(e)},x.working="undefined"!=typeof ArrayBuffer&&x(new ArrayBuffer),e.exports.isArrayBuffer=w,E.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&E(new DataView(new ArrayBuffer(1),0,1)),e.exports.isDataView=_;// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var S="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function A(e){return"[object SharedArrayBuffer]"===l(e)}function O(e){return void 0!==S&&(void 0===A.working&&(A.working=A(new S)),A.working?A(e):e instanceof S)}function I(e){return y(e,c)}function B(e){return y(e,f)}function R(e){return y(e,p)}function k(e){return a&&y(e,h)}function N(e){return u&&y(e,d)}e.exports.isSharedArrayBuffer=O,e.exports.isAsyncFunction=function(e){return"[object AsyncFunction]"===l(e)},e.exports.isMapIterator=function(e){return"[object Map Iterator]"===l(e)},e.exports.isSetIterator=function(e){return"[object Set Iterator]"===l(e)},e.exports.isGeneratorObject=function(e){return"[object Generator]"===l(e)},e.exports.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===l(e)},e.exports.isNumberObject=I,e.exports.isStringObject=B,e.exports.isBooleanObject=R,e.exports.isBigIntObject=k,e.exports.isSymbolObject=N,e.exports.isBoxedPrimitive=function(e){return I(e)||B(e)||R(e)||k(e)||N(e)},e.exports.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(w(e)||O(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(t){Object.defineProperty(e.exports,t,{enumerable:!1,value:function(){throw Error(t+" is not supported in userland")}})})}),T.register("jeAAD",function(e,t){var r=T("62xi1")(),n=T("bh6VG")("Object.prototype.toString"),o=function(e){return(!r||!e||"object"!=typeof e||!(Symbol.toStringTag in e))&&"[object Arguments]"===n(e)},i=function(e){return!!o(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==n(e)&&"[object Function]"===n(e.callee)},s=function(){return o(arguments)}();o.isLegacyArguments=i,e.exports=s?o:i}),T.register("62xi1",function(e,t){var r=T("lrNgj");e.exports=function(){return r()&&!!Symbol.toStringTag}}),T.register("605Ic",function(e,t){var r,n=Object.prototype.toString,o=Function.prototype.toString,i=/^\s*(?:function)?\*/,s=T("62xi1")(),a=Object.getPrototypeOf,u=function(){if(!s)return!1;try{return Function("return function*() {}")()}catch(e){}};e.exports=function(e){if("function"!=typeof e)return!1;if(i.test(o.call(e)))return!0;if(!s)return"[object GeneratorFunction]"===n.call(e);if(!a)return!1;if(void 0===r){var t=u();r=!!t&&a(t)}return a(e)===r}}),T.register("5x9jo",function(e,t){var r=T("6Y9zB"),n=T("bfDOD"),o=T("ah9HS"),i=T("bh6VG"),s=T("8Wg0p"),a=i("Object.prototype.toString"),u=T("62xi1")(),l="undefined"==typeof globalThis?_:globalThis,c=n(),f=i("String.prototype.slice"),p=Object.getPrototypeOf,h=i("Array.prototype.indexOf",!0)||function(e,t){for(var r=0;r<e.length;r+=1)if(e[r]===t)return r;return -1},d={__proto__:null};u&&s&&p?r(c,function(e){var t=new l[e];if(Symbol.toStringTag in t){var r=p(t),n=s(r,Symbol.toStringTag);n||(n=s(p(r),Symbol.toStringTag)),d["$"+e]=o(n.get)}}):r(c,function(e){var t=new l[e];d["$"+e]=o(t.slice)});var y=function(e){var t=!1;return r(d,function(r,n){if(!t)try{"$"+r(e)===n&&(t=f(n,1))}catch(e){}}),t},g=function(e){var t=!1;return r(d,function(r,n){if(!t)try{r(e),t=f(n,1)}catch(e){}}),t};e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u){var t=f(a(e),8,-1);return h(c,t)>-1?t:"Object"===t&&g(e)}return s?y(e):null}}),T.register("6Y9zB",function(e,t){var r=T("fSmyv"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i=function(e,t,r){for(var n=0,i=e.length;n<i;n++)o.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))},s=function(e,t,r){for(var n=0,o=e.length;n<o;n++)null==r?t(e.charAt(n),n,e):t.call(r,e.charAt(n),n,e)},a=function(e,t,r){for(var n in e)o.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))};e.exports=function(e,t,o){var u;if(!r(t))throw TypeError("iterator must be a function");arguments.length>=3&&(u=o),"[object Array]"===n.call(e)?i(e,t,u):"string"==typeof e?s(e,t,u):a(e,t,u)}}),T.register("fSmyv",function(e,t){var r,n,o=Function.prototype.toString,i="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof i&&"function"==typeof Object.defineProperty)try{r=Object.defineProperty({},"length",{get:function(){throw n}}),n={},// eslint-disable-next-line no-throw-literal
i(function(){throw 42},null,r)}catch(e){e!==n&&(i=null)}else i=null;var s=/^\s*class\b/,a=function(e){try{var t=o.call(e);return s.test(t)}catch(e){return!1;// not a function
}},u=function(e){try{if(a(e))return!1;return o.call(e),!0}catch(e){return!1}},l=Object.prototype.toString,c="function"==typeof Symbol&&!!Symbol.toStringTag,f=!(0 in[,]),p=function(){return!1};if("object"==typeof document){// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
var h=document.all;l.call(h)===l.call(document.all)&&(p=function(e){/* globals document: false */// in IE 6-8, typeof document.all is "object" and it's truthy
if((f||!e)&&(void 0===e||"object"==typeof e))try{var t=l.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t// opera 12.16
||"[object Object]"===t// IE 6-8
)&&null==e("");// eslint-disable-line eqeqeq
}catch(e){}return!1})}e.exports=i?function(e){if(p(e))return!0;if(!e||"function"!=typeof e&&"object"!=typeof e)return!1;try{i(e,null,r)}catch(e){if(e!==n)return!1}return!a(e)&&u(e)}:function(e){if(p(e))return!0;if(!e||"function"!=typeof e&&"object"!=typeof e)return!1;if(c)return u(e);if(a(e))return!1;var t=l.call(e);return!!("[object Function]"===t||"[object GeneratorFunction]"===t||/^\[object HTML/.test(t))&&u(e)}}),T.register("bfDOD",function(e,t){var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],n="undefined"==typeof globalThis?_:globalThis;e.exports=function(){for(var e=[],t=0;t<r.length;t++)"function"==typeof n[r[t]]&&(e[e.length]=r[t]);return e}}),T.register("8Wg0p",function(e,t){var r=T("k0uab")("%Object.getOwnPropertyDescriptor%",!0);if(r)try{r([],"length")}catch(e){// IE 8 has a broken gOPD
r=null}e.exports=r}),T.register("dYVlV",function(e,t){var r=T("5x9jo");e.exports=function(e){return!!r(e)}}),T.register("90FXD",function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}}),T.register("icovS",function(e,t){// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
var r=T("9Mq5w");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=s(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==d(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}function a(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,h(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,e)})(e)}function c(e,t,r){return(c=f()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&p(o,r.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=T("gOtyk").inspect,g=T("bf7du").codes.ERR_INVALID_ARG_TYPE;// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function b(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}var m="",v="",x="",w="",E={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function _(e){var t=Object.keys(e),r=Object.create(Object.getPrototypeOf(e));return t.forEach(function(t){r[t]=e[t]}),Object.defineProperty(r,"message",{value:e.message}),r}function S(e){// The util.inspect default values could be changed. This makes sure the
// error messages contain the necessary information nevertheless.
return y(e,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,// Assert compares only enumerable properties (with a few exceptions).
showHidden:!1,// Having a long line as error is better than wrapping the line for
// comparison for now.
// TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
// have meta information about the inspected properties (i.e., know where
// in what line the property starts and ends).
breakLength:1/0,// Assert does not detect proxies currently.
showProxy:!1,sorted:!0,// Inspect getters as we also check them when comparing entries.
getters:!0})}var A=/*#__PURE__*/function(e,t){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(A,e);var n,s,l,c=(n=f(),function(){var e,t=h(A);if(n){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function A(e){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,A),"object"!==d(e)||null===e)throw new g("options","Object",e);var t,n=e.message,o=e.operator,i=e.stackStartFn,s=e.actual,l=e.expected,f=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=n)t=c.call(this,String(n));else if(r.stderr&&r.stderr.isTTY&&(r.stderr&&r.stderr.getColorDepth&&1!==r.stderr.getColorDepth()?(m="\x1b[34m",v="\x1b[32m",w="\x1b[39m",x="\x1b[31m"):(m="",v="",w="",x="")),"object"===d(s)&&null!==s&&"object"===d(l)&&null!==l&&"stack"in s&&s instanceof Error&&"stack"in l&&l instanceof Error&&(s=_(s),l=_(l)),"deepStrictEqual"===o||"strictEqual"===o)t=c.call(this,function(e,t,n){var o="",i="",s=0,a="",u=!1,l=S(e),c=l.split("\n"),f=S(t).split("\n"),p=0,h="";// If "actual" and "expected" fit on a single line and they are not strictly
// equal, check further special handling.
if("strictEqual"===n&&"object"===d(e)&&"object"===d(t)&&null!==e&&null!==t&&(n="strictEqualObject"),1===c.length&&1===f.length&&c[0]!==f[0]){var y=c[0].length+f[0].length;// If the character length of "actual" and "expected" together is less than
// kMaxShortLength and if neither is an object and at least one of them is
// not `zero`, use the strict equal comparison to visualize the output.
if(y<=10){if(("object"!==d(e)||null===e)&&("object"!==d(t)||null===t)&&(0!==e||0!==t))return"".concat(E[n],"\n\n")+"".concat(c[0]," !== ").concat(f[0],"\n")}else if("strictEqualObject"!==n&&y<(r.stderr&&r.stderr.isTTY?r.stderr.columns:80)){for(;c[0][p]===f[0][p];)p++;// Ignore the first characters.
p>2&&(// Add position indicator for the first mismatch in case it is a
// single line and the input length is less than the column length.
h="\n  ".concat(// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function(e,t){if(t=Math.floor(t),0==e.length||0==t)return"";var r=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+e.substring(0,r-e.length)}(" ",p),"^"),p=0)}}for(// Remove all ending lines that match (this optimizes the output for
// readability by reducing the number of total changed lines).
var g=c[c.length-1],_=f[f.length-1];g===_&&(p++<2?a="\n  ".concat(g).concat(a):o=g,c.pop(),f.pop(),0!==c.length&&0!==f.length);)g=c[c.length-1],_=f[f.length-1];var A=Math.max(c.length,f.length);// Strict equal with identical objects that are not identical by reference.
// E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
if(0===A){// We have to get the result again. The lines were all removed before.
var O=l.split("\n");// Only remove lines in case it makes sense to collapse those.
// TODO: Accept env to always show the full error.
if(O.length>30)for(O[26]="".concat(m,"...").concat(w);O.length>27;)O.pop();return"".concat(E.notIdentical,"\n\n").concat(O.join("\n"),"\n")}p>3&&(a="\n".concat(m,"...").concat(w).concat(a),u=!0),""!==o&&(a="\n  ".concat(o).concat(a),o="");var T=0,I=E[n]+"\n".concat(v,"+ actual").concat(w," ").concat(x,"- expected").concat(w),B=" ".concat(m,"...").concat(w," Lines skipped");for(p=0;p<A;p++){// Only extra expected lines exist
var R=p-s;if(c.length<p+1)R>1&&p>2&&(R>4?(i+="\n".concat(m,"...").concat(w),u=!0):R>3&&(i+="\n  ".concat(f[p-2]),T++),i+="\n  ".concat(f[p-1]),T++),// Mark the current line as the last diverging one.
s=p,// Add the expected line to the cache.
o+="\n".concat(x,"-").concat(w," ").concat(f[p]),T++;else if(f.length<p+1)R>1&&p>2&&(R>4?(i+="\n".concat(m,"...").concat(w),u=!0):R>3&&(i+="\n  ".concat(c[p-2]),T++),i+="\n  ".concat(c[p-1]),T++),// Mark the current line as the last diverging one.
s=p,// Add the actual line to the result.
i+="\n".concat(v,"+").concat(w," ").concat(c[p]),T++;else{var k=f[p],N=c[p],C=N!==k&&(!b(N,",")||N.slice(0,-1)!==k);C&&b(k,",")&&k.slice(0,-1)===N&&(C=!1,N+=","),C?(R>1&&p>2&&(R>4?(i+="\n".concat(m,"...").concat(w),u=!0):R>3&&(i+="\n  ".concat(c[p-2]),T++),i+="\n  ".concat(c[p-1]),T++),// Mark the current line as the last diverging one.
s=p,// Add the actual line to the result and cache the expected diverging
// line so consecutive diverging lines show up as +++--- and not +-+-+-.
i+="\n".concat(v,"+").concat(w," ").concat(N),o+="\n".concat(x,"-").concat(w," ").concat(k),T+=2):(// Add all cached information to the result before adding other things
// and reset the cache.
i+=o,o="",(1===R||0===p)&&(i+="\n  ".concat(N),T++))}// Inspected object to big (Show ~20 rows max)
if(T>20&&p<A-2)return"".concat(I).concat(B,"\n").concat(i,"\n").concat(m,"...").concat(w).concat(o,"\n")+"".concat(m,"...").concat(w)}return"".concat(I).concat(u?B:"","\n").concat(i).concat(o).concat(a).concat(h)}(s,l,o));else if("notDeepStrictEqual"===o||"notStrictEqual"===o){// In case the objects are equal but the operator requires unequal, show
// the first object and say A equals B
var p=E[o],h=S(s).split("\n");// Only remove lines in case it makes sense to collapse those.
// TODO: Accept env to always show the full error.
if("notStrictEqual"===o&&"object"===d(s)&&null!==s&&(p=E.notStrictEqualObject),h.length>30)for(h[26]="".concat(m,"...").concat(w);h.length>27;)h.pop();t=1===h.length?c.call(this,"".concat(p," ").concat(h[0])):c.call(this,"".concat(p,"\n\n").concat(h.join("\n"),"\n"))}else{var y=S(s),O="",T=E[o];"notDeepEqual"===o||"notEqual"===o?(y="".concat(E[o],"\n\n").concat(y)).length>1024&&(y="".concat(y.slice(0,1021),"...")):(O="".concat(S(l)),y.length>512&&(y="".concat(y.slice(0,509),"...")),O.length>512&&(O="".concat(O.slice(0,509),"...")),"deepEqual"===o||"equal"===o?y="".concat(T,"\n\n").concat(y,"\n\nshould equal\n\n"):O=" ".concat(o," ").concat(O)),t=c.call(this,"".concat(y).concat(O))}return Error.stackTraceLimit=f,t.generatedMessage=!n,Object.defineProperty(u(t),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),t.code="ERR_ASSERTION",t.actual=s,t.expected=l,t.operator=o,Error.captureStackTrace&&Error.captureStackTrace(u(t),i),// Create error message including the error code in the name.
t.stack,// Reset the name.
t.name="AssertionError",a(t)}return s=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:t,value:function(e,t){// This limits the `actual` and `expected` property default inspection to
// the minimum depth. Otherwise those values would be too verbose compared
// to the actual error message which contains a combined view of these two
// input values.
return y(this,o(o({},t),{},{customInspect:!1,depth:0}))}}],i(A.prototype,s),l&&i(A,l),Object.defineProperty(A,"prototype",{writable:!1}),A}(/*#__PURE__*/l(Error),y.custom);e.exports=A}),T.register("odOTX",function(e,t){var r=T("eXnJQ"),n=function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */var o=Object.assign({},r),i="";for(var s in o)i+=s;return e!==i},o=function(){if(!Object.assign||!Object.preventExtensions)return!1;/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1};e.exports=function(){return!Object.assign||n()||o()?r:Object.assign}}),T.register("eXnJQ",function(e,t){var r=T("aaTFa"),n=T("lrNgj")(),o=T("bh6VG"),i=Object,s=o("Array.prototype.push"),a=o("Object.prototype.propertyIsEnumerable"),u=n?Object.getOwnPropertySymbols:null;// eslint-disable-next-line no-unused-vars
e.exports=function(e,t){if(null==e)throw TypeError("target must be an object");var o=i(e);// step 1
if(1==arguments.length)return o;// step 2
for(var l=1;l<arguments.length;++l){var c=i(arguments[l]),f=r(c),p=n&&(Object.getOwnPropertySymbols||u);// step 3.a.i
if(p)for(var h=p(c),d=0;d<h.length;++d){var y=h[d];a(c,y)&&s(f,y)}// step 3.a.iii:
for(var g=0;g<f.length;++g){var b=f[g];if(a(c,b)){var m=c[b];// step 3.a.iii.2.a
o[b]=m;// step 3.a.iii.2.b
}}}return o;// step 4
}}),T.register("aaTFa",function(e,t){var r=Array.prototype.slice,n=T("3IbUJ"),o=Object.keys,i=o?function(e){return o(e)}:T("bThdp"),s=Object.keys;i.shim=function(){return Object.keys?!function(){// Safari 5.0 bug
var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)&&(Object.keys=function(e){return n(e)?s(r.call(e)):s(e)}):Object.keys=i,Object.keys||i},e.exports=i}),T.register("3IbUJ",function(e,t){var r=Object.prototype.toString;e.exports=function(e){var t=r.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee)),n}}),T.register("bThdp",function(e,t){var r;if(!Object.keys){// modified from https://github.com/es-shims/es5-shim
var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=T("3IbUJ"),s=Object.prototype.propertyIsEnumerable,a=!s.call({toString:null},"toString"),u=s.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(e){var t=e.constructor;return t&&t.prototype===e},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},p=function(){/* global window */if("undefined"==typeof window)return!1;for(var e in window)try{if(!f["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{c(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),h=function(e){/* global window */if("undefined"==typeof window||!p)return c(e);try{return c(e)}catch(e){return!1}};r=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),s=i(e),c=t&&"[object String]"===o.call(e),f=[];if(!t&&!r&&!s)throw TypeError("Object.keys called on a non-object");var p=u&&r;if(c&&e.length>0&&!n.call(e,0))for(var d=0;d<e.length;++d)f.push(String(d));if(s&&e.length>0)for(var y=0;y<e.length;++y)f.push(String(y));else for(var g in e)!(p&&"prototype"===g)&&n.call(e,g)&&f.push(String(g));if(a)for(var b=h(e),m=0;m<l.length;++m)!(b&&"constructor"===l[m])&&n.call(e,l[m])&&f.push(l[m]);return f}}e.exports=r}),T.register("JZWw8",function(e,t){var r=T("beR8n");e.exports=function(){return"function"==typeof Object.is?Object.is:r}}),T.register("beR8n",function(e,t){var r=function(e){return e!=e};e.exports=function(e,t){return 0===e&&0===t?1/e==1/t:!!(e===t||r(e)&&r(t))}}),T.register("lWDAh",function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,a=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=void 0!==/a/g.flags,s=function(e){var t=[];return e.forEach(function(e){return t.push(e)}),t},a=function(e){var t=[];return e.forEach(function(e,r){return t.push([r,e])}),t},u=Object.is?Object.is:T("9iq9Q"),l=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},c=Number.isNaN?Number.isNaN:T("1ZBXD");function f(e){return e.call.bind(e)}var p=f(Object.prototype.hasOwnProperty),h=f(Object.prototype.propertyIsEnumerable),d=f(Object.prototype.toString),y=T("gOtyk").types,g=y.isAnyArrayBuffer,b=y.isArrayBufferView,m=y.isDate,v=y.isMap,x=y.isRegExp,w=y.isSet,E=y.isNativeError,_=y.isBoxedPrimitive,S=y.isNumberObject,A=y.isStringObject,O=y.isBooleanObject,I=y.isBigIntObject,B=y.isSymbolObject,R=y.isFloat32Array,k=y.isFloat64Array;function N(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r<48||r>57)return!0}// The maximum size for an array is 2 ** 32 -1.
return 10===e.length&&e>=4294967296}function C(e){return Object.keys(e).filter(N).concat(l(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}// Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function L(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0}var P=void 0;// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function j(e,t,r,n){// All identical values are equivalent, as determined by ===.
if(e===t)return 0!==e||!r||u(e,t);// Check more closely if val1 and val2 are equal.
if(r){if("object"!==o(e))return"number"==typeof e&&c(e)&&c(t);if("object"!==o(t)||null===e||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==o(e))return(null===t||"object"!==o(t))&&e==t;if(null===t||"object"!==o(t))return!1}var s=d(e);if(s!==d(t))return!1;if(Array.isArray(e)){// Check for sparse arrays and general fast path
if(e.length!==t.length)return!1;var a=C(e,P),l=C(t,P);return a.length===l.length&&M(e,t,r,n,1,a)}// [browserify] This triggers on certain types in IE (Map/Set) so we don't
// wan't to early return out of the rest of the checks. However we can check
// if the second value is one of these values and the first isn't.
if("[object Object]"===s&&(!v(e)&&v(t)||!w(e)&&w(t)))return!1;if(m(e)){if(!m(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(x(e)){if(!x(t)||(i?e.source!==t.source||e.flags!==t.flags:RegExp.prototype.toString.call(e)!==RegExp.prototype.toString.call(t)))return!1}else if(E(e)||e instanceof Error)// Do not compare the stack as it might differ even though the error itself
// is otherwise identical.
{if(e.message!==t.message||e.name!==t.name)return!1}else if(b(e)){if(!r&&(R(e)||k(e))){if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0}(e,t))return!1}else if(e.byteLength!==t.byteLength||0!==L(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength)))return!1;// Buffer.compare returns true, so val1.length === val2.length. If they both
// only contain numeric keys, we don't need to exam further than checking
// the symbols.
var f=C(e,P),p=C(t,P);return f.length===p.length&&M(e,t,r,n,0,f)}else if(w(e))return!!w(t)&&e.size===t.size&&M(e,t,r,n,2);else if(v(e))return!!v(t)&&e.size===t.size&&M(e,t,r,n,3);else if(g(e)){if(e.byteLength!==t.byteLength||0!==L(new Uint8Array(e),new Uint8Array(t)))return!1}else if(_(e)&&(S(e)?!(S(t)&&u(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t))):A(e)?!A(t)||String.prototype.valueOf.call(e)!==String.prototype.valueOf.call(t):O(e)?!O(t)||Boolean.prototype.valueOf.call(e)!==Boolean.prototype.valueOf.call(t):I(e)?!I(t)||BigInt.prototype.valueOf.call(e)!==BigInt.prototype.valueOf.call(t):!B(t)||Symbol.prototype.valueOf.call(e)!==Symbol.prototype.valueOf.call(t)))return!1;return M(e,t,r,n,0)}function U(e,t){return t.filter(function(t){return h(e,t)})}function M(e,t,n,i,u,c){// For all remaining Object pairs, including Array, objects and Maps,
// equivalence is determined by having:
// a) The same number of owned enumerable properties
// b) The same set of keys/indexes (although not necessarily the same order)
// c) Equivalent values for every corresponding key/index
// d) For Sets and Maps, equal contents
// Note: this accounts for both named and indexed properties on Arrays.
if(5==arguments.length){c=Object.keys(e);var f=Object.keys(t);// The pair must have the same number of owned properties.
if(c.length!==f.length)return!1}for(// Cheap key test
var d=0;d<c.length;d++)if(!p(t,c[d]))return!1;if(n&&5==arguments.length){var y=l(e);if(0!==y.length){var g=0;for(d=0;d<y.length;d++){var b=y[d];if(h(e,b)){if(!h(t,b))return!1;c.push(b),g++}else if(h(t,b))return!1}var m=l(t);if(y.length!==m.length&&U(t,m).length!==g)return!1}else{var v=l(t);if(0!==v.length&&0!==U(t,v).length)return!1}}if(0===c.length&&(0===u||1===u&&0===e.length||0===e.size))return!0;// Use memos to handle cycles.
if(void 0===i)i={val1:new Map,val2:new Map,position:0};else{// We prevent up to two map.has(x) calls by directly retrieving the value
// and checking for undefined. The map can only contain numbers, so it is
// safe to check for undefined only.
var x=i.val1.get(e);if(void 0!==x){var w=i.val2.get(t);if(void 0!==w)return x===w}i.position++}i.val1.set(e,i.position),i.val2.set(t,i.position);var E=function(e,t,n,i,u,l){// Sets and maps don't have their entries accessible via normal object
// properties.
var c=0;if(2===l){if(!function(e,t,r,n){for(var i=null,a=s(e),u=0;u<a.length;u++){var l=a[u];// Note: Checking for the objects first improves the performance for object
// heavy sets but it is a minor slow down for primitives. As they are fast
// to check this improves the worst case scenario instead.
if("object"===o(l)&&null!==l)null===i&&(i=new Set),// If the specified value doesn't exist in the second set its an not null
// object (or non strict only: a not matching primitive) we'll need to go
// hunting for something thats deep-(strict-)equal to it. To make this
// O(n log n) complexity we have to copy these values in a new set first.
i.add(l);else if(!t.has(l)){if(r||!function(e,t,r){var n=F(r);return null!=n?n:t.has(n)&&!e.has(n)}(e,t,l))return!1;null===i&&(i=new Set),i.add(l)}}if(null!==i){for(var c=s(t),f=0;f<c.length;f++){var p=c[f];// We have to check if a primitive value is already
// matching and only if it's not, go hunting for it.
if("object"===o(p)&&null!==p){if(!D(i,p,r,n))return!1}else if(!r&&!e.has(p)&&!D(i,p,r,n))return!1}return 0===i.size}return!0}(e,t,n,u))return!1}else if(3===l){if(!function(e,t,n,i){for(var s=null,u=a(e),l=0;l<u.length;l++){var c=r(u[l],2),f=c[0],p=c[1];if("object"===o(f)&&null!==f)null===s&&(s=new Set),s.add(f);else{// By directly retrieving the value we prevent another b.has(key) check in
// almost all possible cases.
var h=t.get(f);if(void 0===h&&!t.has(f)||!j(p,h,n,i)){if(n||!function(e,t,r,n,o){var i=F(r);if(null!=i)return i;var s=t.get(i);return!!((void 0!==s||t.has(i))&&j(n,s,!1,o))&&!e.has(i)&&j(n,s,!1,o)}(e,t,f,p,i))return!1;null===s&&(s=new Set),s.add(f)}}}if(null!==s){for(var d=a(t),y=0;y<d.length;y++){var g=r(d[y],2),b=g[0],m=g[1];if("object"===o(b)&&null!==b){if(!$(s,e,b,m,n,i))return!1}else if(!n&&(!e.has(b)||!j(e.get(b),m,!1,i))&&!$(s,e,b,m,!1,i))return!1}return 0===s.size}return!0}(e,t,n,u))return!1}else if(1===l)for(;c<e.length;c++)if(p(e,c)){if(!p(t,c)||!j(e[c],t[c],n,u))return!1}else{if(p(t,c))return!1;for(// Array is sparse.
var f=Object.keys(e);c<f.length;c++){var h=f[c];if(!p(t,h)||!j(e[h],t[h],n,u))return!1}if(f.length!==Object.keys(t).length)return!1;return!0}// The pair must have equivalent values for every corresponding key.
// Possibly expensive deep test:
for(c=0;c<i.length;c++){var d=i[c];if(!j(e[d],t[d],n,u))return!1}return!0}(e,t,n,c,i,u);return i.val1.delete(e),i.val2.delete(t),E}function D(e,t,r,n){for(var o=s(e),i=0;i<o.length;i++){var a=o[i];if(j(t,a,r,n))return(// Remove the matching element to make sure we do not check that again.
e.delete(a),!0)}return!1}// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function F(e){switch(o(e)){case"undefined":return null;case"object":// Only pass in null as object!
return;case"symbol":return!1;case"string":e=+e;// Loose equal entries exist only if the string is possible to convert to
// a regular number and not NaN.
// Fall through
case"number":if(c(e))return!1}return!0}function $(e,t,r,n,o,i){for(var a=s(e),u=0;u<a.length;u++){var l=a[u];if(j(r,l,o,i)&&j(n,t.get(l),o,i))return e.delete(l),!0}return!1}e.exports={isDeepEqual:function(e,t){return j(e,t,!1)},isDeepStrictEqual:function(e,t){return j(e,t,!0)}}}),T.register("9iq9Q",function(e,t){var r=T("8hkO0"),n=T("ah9HS"),o=T("beR8n"),i=T("JZWw8"),s=T("2Y7V6"),a=n(i(),Object);r(a,{getPolyfill:i,implementation:o,shim:s}),e.exports=a}),T.register("8hkO0",function(e,t){var r=T("aaTFa"),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=Array.prototype.concat,s=T("2ZYeg"),a=T("9Baei")(),u=function(e,t,r,n){if(t in e){if(!0===n){if(e[t]===r)return}else if(!("function"==typeof n&&"[object Function]"===o.call(n))||!n())return}a?s(e,t,r,!0):s(e,t,r)},l=function(e,t){var o=arguments.length>2?arguments[2]:{},s=r(t);n&&(s=i.call(s,Object.getOwnPropertySymbols(t)));for(var a=0;a<s.length;a+=1)u(e,s[a],t[s[a]],o[s[a]])};l.supportsDescriptors=!!a,e.exports=l}),T.register("2ZYeg",function(e,t){var r=T("9Baei")(),n=T("k0uab"),o=r&&n("%Object.defineProperty%",!0),i=n("%SyntaxError%"),s=n("%TypeError%"),a=T("8Wg0p");/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */e.exports=function(e,t,r){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new s("`obj` must be an object or a function`");if("string"!=typeof t&&"symbol"!=typeof t)throw new s("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new s("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new s("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new s("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new s("`loose`, if provided, must be a boolean");var n=arguments.length>3?arguments[3]:null,u=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,c=arguments.length>6&&arguments[6],f=!!a&&a(e,t);if(o)o(e,t,{configurable:null===l&&f?f.configurable:!l,enumerable:null===n&&f?f.enumerable:!n,value:r,writable:null===u&&f?f.writable:!u});else if(!c&&(n||u||l))throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else e[t]=r;// eslint-disable-line no-param-reassign
}}),T.register("9Baei",function(e,t){var r=T("k0uab")("%Object.defineProperty%",!0),n=function(){if(r)try{return r({},"a",{value:1}),!0}catch(e){}return!1};n.hasArrayLengthDefineBug=function(){// node v0.6 has a bug where array lengths can be Set but not Defined
if(!n())return null;try{return 1!==r([],"length",{value:1}).length}catch(e){// In Firefox 4-22, defining length on an array throws an exception.
return!0}},e.exports=n}),T.register("2Y7V6",function(e,t){var r=T("JZWw8"),n=T("8hkO0");e.exports=function(){var e=r();return n(Object,{is:e},{is:function(){return Object.is!==e}}),e}}),T.register("1ZBXD",function(e,t){var r=T("ah9HS"),n=T("8hkO0"),o=T("jvhAG"),i=T("7zHFE"),s=T("4fqIF"),a=r(i(),Number);/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */n(a,{getPolyfill:i,implementation:o,shim:s}),e.exports=a}),T.register("jvhAG",function(e,t){/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */e.exports=function(e){return e!=e}}),T.register("7zHFE",function(e,t){var r=T("jvhAG");e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:r}}),T.register("4fqIF",function(e,t){var r=T("8hkO0"),n=T("7zHFE");/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */e.exports=function(){var e=n();return r(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}}),T.register("jDjHi",function(e,t){e.exports=// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function(){/* next input byte */this.input=null,this.next_in=0,/* number of bytes available at input */this.avail_in=0,/* total number of input bytes read so far */this.total_in=0,/* next output byte should be put there */this.output=null,this.next_out=0,/* remaining free space at output */this.avail_out=0,/* total number of bytes output so far */this.total_out=0,/* last error message, NULL if no error */this.msg=""/*Z_NULL*/,/* not visible by applications */this.state=null,/* best guess about the data type: binary or text */this.data_type=2/*Z_UNKNOWN*/,/* adler32 value of the uncompressed data */this.adler=0}}),T.register("5CYYP",function(e,t){i(e.exports,"deflateInit2",()=>r,e=>r=e),i(e.exports,"deflateReset",()=>n,e=>n=e),i(e.exports,"deflate",()=>o,e=>o=e),i(e.exports,"deflateEnd",()=>s,e=>s=e),i(e.exports,"deflateSetDictionary",()=>a,e=>a=e);var r,n,o,s,a,u,l=T("46ozi"),c=T("k7cic"),f=T("9nX5D"),p=T("kWc9m"),h=T("2H7Wt");function d(e,t){return e.msg=h[t],t}function y(e){return(e<<1)-(e>4?9:0)}function g(e){for(var t=e.length;--t>=0;)e[t]=0}/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */function b(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(l.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function m(e,t){c._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,b(e.strm)}function v(e,t){e.pending_buf[e.pending++]=t}/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */function x(e,t){//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */function w(e,t){var r,n,o=e.max_chain_length,i=e.strstart,s=e.prev_length,a=e.nice_match,u=e.strstart>e.w_size-262?e.strstart-(e.w_size-262):0/*NIL*/,l=e.window,c=e.w_mask,f=e.prev,p=e.strstart+258,h=l[i+s-1],d=l[i+s];/* max hash chain length */e.prev_length>=e.good_match&&(o>>=2),a>e.lookahead&&(a=e.lookahead);// Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
do{/* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */if(l[// Assert(cur_match < s->strstart, "no future");
(r=t)+s]!==d||l[r+s-1]!==h||l[r]!==l[i]||l[++r]!==l[i+1])continue;/* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */i+=2,r++;// Assert(*scan == *match, "match[2]?");
/* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<p)if(// Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
n=258-(p-i),i=p-258,n>s){if(e.match_start=t,s=n,n>=a)break;h=l[i+s-1],d=l[i+s]}}while((t=f[t&c])>u&&0!=--o)return s<=e.lookahead?s:e.lookahead}/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */function E(e){var t,r,n,o,i,s=e.w_size;//Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
do{// JS ints have 32 bit, block below not needed
/* Deal with !@#$% 64K limit: *///if (sizeof(int) <= 2) {
//    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
//        more = wsize;
//
//  } else if (more == (unsigned)(-1)) {
//        /* Very unlikely, but possible on 16 bit machine if
//         * strstart == 0 && lookahead == 1 (input done a byte at time)
//         */
//        more--;
//    }
//}
/* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */if(o=e.window_size-e.lookahead-e.strstart,e.strstart>=s+(s-262)){l.arraySet(e.window,e.window,s,s,0),e.match_start-=s,e.strstart-=s,/* we now have strstart >= MAX_DIST */e.block_start-=s,t=/* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */r=e.hash_size;do n=e.head[--t],e.head[t]=n>=s?n-s:0;while(--r)t=r=s;do n=e.prev[--t],e.prev[t]=n>=s?n-s:0;while(--r)o+=s}if(0===e.strm.avail_in)break;/* Initialize the hash value now that we have some input: */if(/* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     *///Assert(more >= 2, "more < 2");
r=/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */function(e,t,r,n){var o=e.avail_in;return(o>n&&(o=n),0===o)?0:(e.avail_in-=o,// zmemcpy(buf, strm->next_in, len);
l.arraySet(t,e.input,e.next_in,o,r),1===e.state.wrap?e.adler=f(e.adler,t,o,r):2===e.state.wrap&&(e.adler=p(e.adler,t,o,r)),e.next_in+=o,e.total_in+=o,o)}(e.strm,e.window,e.strstart+e.lookahead,o),e.lookahead+=r,e.lookahead+e.insert>=3)//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
for(i=e.strstart-e.insert,e.ins_h=e.window[i],/* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+1])&e.hash_mask;e.insert&&(/* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+3-1])&e.hash_mask,e.prev[i&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=i,i++,e.insert--,!(e.lookahead+e.insert<3)););/* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */}while(e.lookahead<262&&0!==e.strm.avail_in)/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   *///  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */function _(e,t){for(var r,n;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(e.lookahead<262){if(E(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break;/* flush the current block */}if(/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */r=0/*NIL*/,e.lookahead>=3&&(/*** INSERT_STRING(s, s.strstart, hash_head); ***/e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0/*NIL*/!==r&&e.strstart-r<=e.w_size-262&&/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */(e.match_length=w(e,r)),e.match_length>=3){/* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */if(// check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
/*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/n=c._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match/*max_insert_length*/&&e.lookahead>=3){e.match_length--;/* string at strstart already in table */do e.strstart++,/*** INSERT_STRING(s, s.strstart, hash_head); ***/e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(0!=--e.match_length)e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],/* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask}else /* No match, output a literal byte *///Tracevv((stderr,"%c", s.window[s.strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/n=c._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out))return 1}return(e.insert=e.strstart<2?e.strstart:2,4===t)?(/*** FLUSH_BLOCK(s, 1); ***/m(e,!0),0===e.strm.avail_out)?3:4:e.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out)?1:2}/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */function S(e,t){/* Process the input block. */for(var r,n,o;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(e.lookahead<262){if(E(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break;/* flush the current block */}/* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */if(/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */r=0/*NIL*/,e.lookahead>=3&&(/*** INSERT_STRING(s, s.strstart, hash_head); ***/e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),/* Find the longest match, discarding those <= prev_length.
     */e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0/*NIL*/!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-262&&(/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */e.match_length=w(e,r),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096/*TOO_FAR*/)&&/* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){o=e.strstart+e.lookahead-3,/* Do not insert strings in hash table beyond this. *///check_match(s, s.strstart-1, s.prev_match, s.prev_length);
/***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/n=c._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),/* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=o&&(/*** INSERT_STRING(s, s.strstart, hash_head); ***/e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(0!=--e.prev_length)if(e.match_available=0,e.match_length=2,e.strstart++,n&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if(/* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       *///Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/(n=c._tr_tally(e,0,e.window[e.strstart-1]))&&/*** FLUSH_BLOCK_ONLY(s, 0) ***/m(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else /* There is no previous match to compare with, wait for
       * the next step to decide.
       */e.match_available=1,e.strstart++,e.lookahead--}return(e.match_available&&(//Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/n=c._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t)?(/*** FLUSH_BLOCK(s, 1); ***/m(e,!0),0===e.strm.avail_out)?3:4:e.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out)?1:2}/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */function A(e,t,r,n,o){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=o}function O(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,/* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */this.window_size=0,/* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */this.prev=null,/* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,/* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */this.block_start=0,/* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,/* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */this.max_chain_length=0,/* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */this.max_lazy_match=0,/* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */// That's alias to max_lazy_match, don't use directly
//this.max_insert_length = 0;
/* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */this.level=0,this.strategy=0,this.good_match=0,/* Use a faster search when the previous match is longer than this */this.nice_match=0,/* used by trees.c: *//* Didn't use ct_data typedef below to suppress compiler warning */// struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
// struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
// struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
// Use flat array of DOUBLE size, with interleaved fata,
// because JS does not support effective
this.dyn_ltree=new l.Buf16(1146),this.dyn_dtree=new l.Buf16(122),this.bl_tree=new l.Buf16(78),g(this.dyn_ltree),g(this.dyn_dtree),g(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,//ush bl_count[MAX_BITS+1];
this.bl_count=new l.Buf16(16),/* number of codes at each bit length for an optimal tree *///int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
this.heap=new l.Buf16(573),g(this.heap),this.heap_len=0,this.heap_max=0,/* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */this.depth=new l.Buf16(573),g(this.depth),/* Depth of each subtree used as tie breaker for trees of equal frequency
   */this.l_buf=0,this.lit_bufsize=0,/* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */this.last_lit=0,this.d_buf=0,/* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,/* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */this.bi_valid=0;/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */// Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */}function I(e){var t,r,n=e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:113,e.adler=2===t.wrap?0// crc32(0, Z_NULL, 0)
:1,t.last_flush=0,c._tr_init(t),0):d(e,-2);return 0===n&&((r=e.state).window_size=2*r.w_size,/*** CLEAR_HASH(s); ***/g(r.head),/* Set the default configuration parameters:
   */r.max_lazy_match=u[r.level].max_lazy,r.good_match=u[r.level].good_length,r.nice_match=u[r.level].nice_length,r.max_chain_length=u[r.level].max_chain,r.strstart=0,r.block_start=0,r.lookahead=0,r.insert=0,r.match_length=r.prev_length=2,r.match_available=0,r.ins_h=0),n}u=[/*      good lazy nice chain */new A(0,0,0,0,/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */function(e,t){/* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */var r=65535;/* Copy as much as possible from input to output: */for(65535>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){/* Fill the window as much as possible: */if(e.lookahead<=1){if(//Assert(s->strstart < s->w_size+MAX_DIST(s) ||
//  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }
E(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break;/* flush the current block */}//Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");
e.strstart+=e.lookahead,e.lookahead=0;/* Emit a stored block if pending_buf will be full: */var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(/* strstart == 0 is possible when wraparound on 16-bit machine */e.lookahead=e.strstart-n,e.strstart=n,/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out)||e.strstart-e.block_start>=e.w_size-262&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out))return 1}return(e.insert=0,4===t)?(/*** FLUSH_BLOCK(s, 1); ***/m(e,!0),0===e.strm.avail_out)?3:4:(e.strstart>e.block_start&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),e.strm.avail_out),1)}),/* 0 store only */new A(4,4,8,4,_),/* 1 max speed, no lazy matches */new A(4,5,16,8,_),/* 2 */new A(4,6,32,32,_),/* 3 */new A(4,4,16,16,S),/* 4 lazy matches */new A(8,16,32,32,S),/* 5 */new A(8,16,128,128,S),/* 6 */new A(8,32,128,256,S),/* 7 */new A(32,128,258,1024,S),/* 8 */new A(32,258,258,4096,S)],r=function(e,t,r,n,o,i){if(!e)return -2;var s=1;if(-1===t&&(t=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),o<1||o>9||8!==r||n<8||n>15||t<0||t>9||i<0||i>4)return d(e,-2);8===n&&(n=9);/* until 256-byte window bug fixed */var a=new O;return e.state=a,a.strm=e,a.wrap=s,a.gzhead=null,a.w_bits=n,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=o+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+3-1)/3),a.window=new l.Buf8(2*a.w_size),a.head=new l.Buf16(a.hash_size),a.prev=new l.Buf16(a.w_size),// Don't need mem init magic for JS.
//s.high_water = 0;  /* nothing written to s->window yet */
a.lit_bufsize=1<<o+6,a.pending_buf_size=4*a.lit_bufsize,//overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
//s->pending_buf = (uchf *) overlay;
a.pending_buf=new l.Buf8(a.pending_buf_size),// It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
//s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
a.d_buf=1*a.lit_bufsize,//s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
a.l_buf=3*a.lit_bufsize,a.level=t,a.strategy=i,a.method=r,I(e)},n=I,o=function(e,t){if(!e||!e.state||t>5||t<0)return e?d(e,-2):-2;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&4!==t)return d(e,0===e.avail_out?-5:-2);/* Write the header */if(n.strm=e,r=n.last_flush,n.last_flush=t,42===n.status){if(2===n.wrap)e.adler=0,v(n,31),v(n,139),v(n,8),n.gzhead?(v(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),v(n,255&n.gzhead.time),v(n,n.gzhead.time>>8&255),v(n,n.gzhead.time>>16&255),v(n,n.gzhead.time>>24&255),v(n,9===n.level?2:n.strategy>=2||n.level<2?4:0),v(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(v(n,255&n.gzhead.extra.length),v(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(v(n,0),v(n,0),v(n,0),v(n,0),v(n,0),v(n,9===n.level?2:n.strategy>=2||n.level<2?4:0),v(n,3),n.status=113);else{var r,n,o,i,s=8+(n.w_bits-8<<4)<<8;s|=(n.strategy>=2||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(s|=32),s+=31-s%31,n.status=113,x(n,s),0!==n.strstart&&(x(n,e.adler>>>16),x(n,65535&e.adler)),e.adler=1}}//#ifdef GZIP
if(69===n.status){if(n.gzhead.extra/* != Z_NULL*/){for(o=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>o&&(e.adler=p(e.adler,n.pending_buf,n.pending-o,o)),b(e),o=n.pending,n.pending!==n.pending_buf_size));)v(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>o&&(e.adler=p(e.adler,n.pending_buf,n.pending-o,o)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73}if(73===n.status){if(n.gzhead.name/* != Z_NULL*/){o=n.pending;//int val;
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>o&&(e.adler=p(e.adler,n.pending_buf,n.pending-o,o)),b(e),o=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,v(n,i)}while(0!==i)n.gzhead.hcrc&&n.pending>o&&(e.adler=p(e.adler,n.pending_buf,n.pending-o,o)),0===i&&(n.gzindex=0,n.status=91)}else n.status=91}if(91===n.status){if(n.gzhead.comment/* != Z_NULL*/){o=n.pending;//int val;
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>o&&(e.adler=p(e.adler,n.pending_buf,n.pending-o,o)),b(e),o=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,v(n,i)}while(0!==i)n.gzhead.hcrc&&n.pending>o&&(e.adler=p(e.adler,n.pending_buf,n.pending-o,o)),0===i&&(n.status=103)}else n.status=103}//#endif
/* Flush as much pending output as possible */if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&b(e),n.pending+2<=n.pending_buf_size&&(v(n,255&e.adler),v(n,e.adler>>8&255),e.adler=0,n.status=113)):n.status=113),0!==n.pending){if(b(e),0===e.avail_out)return(/* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */n.last_flush=-1,0)}else if(0===e.avail_in&&y(t)<=y(r)&&4!==t)return d(e,-5);/* User must not provide more input after the first FINISH: */if(666===n.status&&0!==e.avail_in)return d(e,-5);/* Start a new block or continue the current one.
   */if(0!==e.avail_in||0!==n.lookahead||0!==t&&666!==n.status){var a=2===n.strategy?/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */function(e,t){for(var r;;){/* Make sure that we have a literal to write. */if(0===e.lookahead&&(E(e),0===e.lookahead)){if(0===t)return 1;break;/* flush the current block */}if(/* Output a literal byte */e.match_length=0,//Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/r=c._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out))return 1}return(e.insert=0,4===t)?(/*** FLUSH_BLOCK(s, 1); ***/m(e,!0),0===e.strm.avail_out)?3:4:e.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out)?1:2}(n,t):3===n.strategy?/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */function(e,t){for(var r,n,o,i,s=e.window;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */if(e.lookahead<=258){if(E(e),e.lookahead<=258&&0===t)return 1;if(0===e.lookahead)break;/* flush the current block */}if(/* See how many times the previous byte repeats */e.match_length=0,e.lookahead>=3&&e.strstart>0&&(n=s[o=e.strstart-1])===s[++o]&&n===s[++o]&&n===s[++o]){i=e.strstart+258;do;while(n===s[++o]&&n===s[++o]&&n===s[++o]&&n===s[++o]&&n===s[++o]&&n===s[++o]&&n===s[++o]&&n===s[++o]&&o<i)e.match_length=258-(i-o),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(//check_match(s, s.strstart, s.strstart - 1, s.match_length);
/*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/r=c._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(/* No match, output a literal byte *///Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/r=c._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out))return 1}return(e.insert=0,4===t)?(/*** FLUSH_BLOCK(s, 1); ***/m(e,!0),0===e.strm.avail_out)?3:4:e.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/m(e,!1),0===e.strm.avail_out)?1:2}(n,t):u[n.level].func(n,t);if((3===a||4===a)&&(n.status=666),1===a||3===a)return 0===e.avail_out&&(n.last_flush=-1),0;if(2===a&&(1===t?c._tr_align(n):5!==t&&(c._tr_stored_block(n,0,0,!1),3===t&&(/*** CLEAR_HASH(s); ***//* forget history */g(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),b(e),0===e.avail_out))return n.last_flush=-1,0}return(//Assert(strm->avail_out > 0, "bug2");
//if (strm.avail_out <= 0) { throw new Error("bug2");}
4!==t?0:n.wrap<=0?1:(2===n.wrap?(v(n,255&e.adler),v(n,e.adler>>8&255),v(n,e.adler>>16&255),v(n,e.adler>>24&255),v(n,255&e.total_in),v(n,e.total_in>>8&255),v(n,e.total_in>>16&255),v(n,e.total_in>>24&255)):(x(n,e.adler>>>16),x(n,65535&e.adler)),b(e),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?0:1))},s=function(e){var t;return e/*== Z_NULL*/&&e.state/*== Z_NULL*/?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&103!==t&&113!==t&&666!==t?d(e,-2):(e.state=null,113===t?d(e,-3):0):-2},a=/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */function(e,t){var r,n,o,i,s,a,u,c,p=t.length;if(!e/*== Z_NULL*/||!e.state/*== Z_NULL*/||2===(i=(r=e.state).wrap)||1===i&&42!==r.status||r.lookahead)return -2;for(1===i&&/* adler32(strm->adler, dictionary, dictLength); */(e.adler=f(e.adler,t,p,0)),r.wrap=0,p>=r.w_size&&(0===i&&(/*** CLEAR_HASH(s); ***/g(r.head),r.strstart=0,r.block_start=0,r.insert=0),/* use the tail */// dictionary = dictionary.slice(dictLength - s.w_size);
c=new l.Buf8(r.w_size),l.arraySet(c,t,p-r.w_size,r.w_size,0),t=c,p=r.w_size),/* insert dictionary into window and hash */s=e.avail_in,a=e.next_in,u=e.input,e.avail_in=p,e.next_in=0,e.input=t,E(r);r.lookahead>=3;){n=r.strstart,o=r.lookahead-2;do /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+3-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++;while(--o)r.strstart=n,r.lookahead=2,E(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=2,r.match_available=0,e.next_in=a,e.input=u,e.avail_in=s,r.wrap=i,0}}),T.register("46ozi",function(e,t){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;e.exports.assign=function(e/*from1, from2, from3, ...*/){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw TypeError(r+"must be non-object");for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}return e},// reduce buffer size, avoiding mem copy
e.exports.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var n={arraySet:function(e,t,r,n,o){if(t.subarray&&e.subarray){e.set(t.subarray(r,r+n),o);return}// Fallback to ordinary array
for(var i=0;i<n;i++)e[o+i]=t[r+i]},// Join array of chunks to single array.
flattenChunks:function(e){var t,r,n,o,i,s;for(t=0,// calculate data length
n=0,r=e.length;t<r;t++)n+=e[t].length;for(t=0,// join chunks
s=new Uint8Array(n),o=0,r=e.length;t<r;t++)i=e[t],s.set(i,o),o+=i.length;return s}},o={arraySet:function(e,t,r,n,o){for(var i=0;i<n;i++)e[o+i]=t[r+i]},// Join array of chunks to single array.
flattenChunks:function(e){return[].concat.apply([],e)}};// Enable/Disable typed arrays use, for testing
//
e.exports.setTyped=function(t){t?(e.exports.Buf8=Uint8Array,e.exports.Buf16=Uint16Array,e.exports.Buf32=Int32Array,e.exports.assign(e.exports,n)):(e.exports.Buf8=Array,e.exports.Buf16=Array,e.exports.Buf32=Array,e.exports.assign(e.exports,o))},e.exports.setTyped(r)}),T.register("k7cic",function(e,t){i(e.exports,"_tr_init",()=>r,e=>r=e),i(e.exports,"_tr_stored_block",()=>n,e=>n=e),i(e.exports,"_tr_flush_block",()=>o,e=>o=e),i(e.exports,"_tr_tally",()=>s,e=>s=e),i(e.exports,"_tr_align",()=>a,e=>a=e);var r,n,o,s,a,u,l,c,f=T("46ozi");/*============================================================================*/function p(e){for(var t=e.length;--t>=0;)e[t]=0}/* number of literal bytes 0..255 */var h=/* extra bits for each length code */[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],d=/* extra bits for each distance code */[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y=/* extra bits for each bit length code */[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],g=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],b=Array(576);p(b);/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */var m=Array(60);p(m);/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */var v=Array(512);p(v);/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */var x=Array(256);p(x);/* length code for each normalized match length (0 == MIN_MATCH) */var w=Array(29);p(w);/* First normalized length for each code (0 = MIN_MATCH) */var E=Array(30);/* First normalized distance for each code (0 = distance of 1) */function _(e,t,r,n,o){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=o,// show if `static_tree` has data or dummy - needed for monomorphic objects
this.has_stree=e&&e.length}function S(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function A(e){return e<256?v[e]:v[256+(e>>>7)]}/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */function O(e,t){//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */function I(e,t,r){e.bi_valid>16-r?(e.bi_buf|=t<<e.bi_valid&65535,O(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=r-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function B(e,t,r){I(e,r[2*t],r[2*t+1])}/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */function R(e,t){var r=0;do r|=1&e,e>>>=1,r<<=1;while(--t>0)return r>>>1}/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */function k(e,t,r)//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{var n,o,i=Array(16),s=0;/* next code value for each bit length *//* The distribution counts are first used to generate the code values
   * without bit reversal.
   */for(n=1;n<=15;n++)i[n]=s=s+r[n-1]<<1;/* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   *///Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
//        "inconsistent bit counts");
//Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
for(o=0;o<=t;o++){var a=e[2*o+1]/*.Len*/;0!==a&&/* Now reverse the bits */(e[2*o]=R(i[a]++,a));//Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
//     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
}}/* ===========================================================================
 * Initialize a new block.
 */function N(e){var t;/* iterates over tree elements *//* Initialize the trees. */for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */function C(e){e.bi_valid>8?O(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */function L(e,t,r,n){var o=2*t,i=2*r;return e[o]<e[i]||e[o]===e[i]&&n[t]<=n[r]}/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */function P(e,t,r)//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{for(var n=e.heap[r],o=r<<1;/* Exit if v is smaller than both sons */o<=e.heap_len&&(o<e.heap_len&&L(t,e.heap[o+1],e.heap[o],e.depth)&&o++,!L(t,n,e.heap[o],e.depth));)/* Exchange v with the smallest son */e.heap[r]=e.heap[o],r=o,/* And continue down the tree, setting j to the left son of k */o<<=1;e.heap[r]=n}// inlined manually
// var SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */function j(e,t,r)//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{var n,o,i,s,a=0;/* running index in l_buf */if(0!==e.last_lit)do n=e.pending_buf[e.d_buf+2*a]<<8|e.pending_buf[e.d_buf+2*a+1],o=e.pending_buf[e.l_buf+a],a++,0===n?B(e,o,t):(B(e,/* Here, lc is the match length - MIN_MATCH */(i=x[o])+256+1,t),0!==(s=h[i])&&I(e,o-=w[i],s),//Assert (code < D_CODES, "bad d_code");
B(e,i=A(--n),r),0!==(s=d[i])&&I(e,n-=E[i],s));while(a<e.last_lit)B(e,256,t)}/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */function U(e,t)//    tree_desc *desc; /* the tree descriptor */
{var r,n,o,i=t.dyn_tree,s=t.stat_desc.static_tree,a=t.stat_desc.has_stree,u=t.stat_desc.elems,l=-1;for(r=0,/* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */e.heap_len=0,e.heap_max=573;r<u;r++)0!==i[2*r]?(e.heap[++e.heap_len]=l=r,e.depth[r]=0):i[2*r+1]=0;/* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */for(;e.heap_len<2;)i[2*(o=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[o]=0,e.opt_len--,a&&(e.static_len-=s[2*o+1]/*.Len*/);/* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */for(t.max_code=l,r=e.heap_len>>1/*int /2*/;r>=1;r--)P(e,i,r);/* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */o=u;do //pqremove(s, tree, n);  /* n = node of least frequency */
/*** pqremove ***/r=e.heap[1/*SMALLEST*/],e.heap[1/*SMALLEST*/]=e.heap[e.heap_len--],P(e,i,1/*SMALLEST*/),/***/n=e.heap[1/*SMALLEST*/],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,/* Create a new node father of n and m */i[2*o]=i[2*r]+i[2*n]/*.Freq*/,e.depth[o]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,i[2*r+1]=i[2*n+1]=o,/* and insert the new node in the heap */e.heap[1/*SMALLEST*/]=o++,P(e,i,1/*SMALLEST*/);while(e.heap_len>=2)e.heap[--e.heap_max]=e.heap[1/*SMALLEST*/],/* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   *//* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */function(e,t)//    tree_desc *desc;    /* the tree descriptor */
{var r,n,o,i,s,a,u=t.dyn_tree,l=t.max_code,c=t.stat_desc.static_tree,f=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,d=t.stat_desc.max_length,y=0;for(i=0;i<=15;i++)e.bl_count[i]=0;for(/* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */u[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<573;r++)(i=u[2*u[2*(n=e.heap[r])+1]+1]+1)>d&&(i=d,y++),u[2*n+1]=i,!(n>l)&&(/* not a leaf node */e.bl_count[i]++,s=0,n>=h&&(s=p[n-h]),a=u[2*n]/*.Freq*/,e.opt_len+=a*(i+s),f&&(e.static_len+=a*(c[2*n+1]+s)));if(0!==y){// Trace((stderr,"\nbit length overflow\n"));
/* This happens for example on obj2 and pic of the Calgary corpus *//* Find the first bit length which could increase: */do{for(i=d-1;0===e.bl_count[i];)i--;e.bl_count[i]--,e.bl_count[i+1]+=2,e.bl_count[d]--,/* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */y-=2}while(y>0)/* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */for(i=d;0!==i;i--)for(n=e.bl_count[i];0!==n;)!((o=e.heap[--r])>l)&&(u[2*o+1]!==i&&(// Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
e.opt_len+=(i-u[2*o+1])*u[2*o]/*.Freq*/,u[2*o+1]=i),n--)}}(e,t),/* The field len is now set, we can generate the bit codes */k(i,l,e.bl_count)}/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */function M(e,t,r)//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{var n,o,i=-1,s=t[1]/*.Len*/,a=0,u=7,l=4;/* last emitted length */for(0===s&&(u=138,l=3),t[(r+1)*2+1]=65535,n=0;n<=r;n++)o=s,s=t[(n+1)*2+1]/*.Len*/,++a<u&&o===s||(a<l?e.bl_tree[2*o]+=a:0!==o?(o!==i&&e.bl_tree[2*o]++,e.bl_tree[32]++):a<=10?e.bl_tree[34]++:e.bl_tree[36]++,a=0,i=o,0===s?(u=138,l=3):o===s?(u=6,l=3):(u=7,l=4))}/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */function D(e,t,r)//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{var n,o,i=-1,s=t[1]/*.Len*/,a=0,u=7,l=4;/* last emitted length */for(0===s&&(u=138,l=3),n=0;n<=r;n++)if(o=s,s=t[(n+1)*2+1]/*.Len*/,!(++a<u)||o!==s){if(a<l)do B(e,o,e.bl_tree);while(0!=--a)else 0!==o?(o!==i&&(B(e,o,e.bl_tree),a--),//Assert(count >= 3 && count <= 6, " 3_6?");
B(e,16,e.bl_tree),I(e,a-3,2)):a<=10?(B(e,17,e.bl_tree),I(e,a-3,3)):(B(e,18,e.bl_tree),I(e,a-11,7));a=0,i=o,0===s?(u=138,l=3):o===s?(u=6,l=3):(u=7,l=4)}}p(E);var F=!1;/* ===========================================================================
 * Send a stored block
 */function $(e,t,r,n)//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{I(e,0+(n?1:0),3),C(e),O(e,r),O(e,~r),//  while (len--) {
//    put_byte(s, *buf++);
//  }
f.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}r=/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */function(e){F||(/* ===========================================================================
 * Initialize the various 'constant' tables.
 */function(){var e,t,r,n,o,i=Array(16);for(n=0,/* number of codes at each bit length for an optimal tree */// do check in _tr_init()
//if (static_init_done) return;
/* For some embedded targets, global variables are not initialized: *//*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*//* Initialize the mapping length (0..255) -> length code (0..28) */r=0;n<28;n++)for(e=0,w[n]=r;e<1<<h[n];e++)x[r++]=n;for(//Assert (length == 256, "tr_static_init: length != 256");
/* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */x[r-1]=n,/* Initialize the mapping dist (0..32K) -> dist code (0..29) */o=0,n=0;n<16;n++)for(e=0,E[n]=o;e<1<<d[n];e++)v[o++]=n;for(//Assert (dist == 256, "tr_static_init: dist != 256");
o>>=7;n<30;n++)for(e=0,E[n]=o<<7;e<1<<d[n]-7;e++)v[256+o++]=n;//Assert (dist == 256, "tr_static_init: 256+dist != 512");
/* Construct the codes of the static literal tree */for(t=0;t<=15;t++)i[t]=0;for(e=0;e<=143;)b[2*e+1]=8,e++,i[8]++;for(;e<=255;)b[2*e+1]=9,e++,i[9]++;for(;e<=279;)b[2*e+1]=7,e++,i[7]++;for(;e<=287;)b[2*e+1]=8,e++,i[8]++;/* The static distance tree is trivial: */for(/* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */k(b,287,i),e=0;e<30;e++)m[2*e+1]=5,m[2*e]=R(e,5);// Now data ready and we can init static trees
u=new _(b,h,257,286,15),l=new _(m,d,0,30,15),c=new _([],y,0,19,7);//static_init_done = true;
}(),F=!0),e.l_desc=new S(e.dyn_ltree,u),e.d_desc=new S(e.dyn_dtree,l),e.bl_desc=new S(e.bl_tree,c),e.bi_buf=0,e.bi_valid=0,/* Initialize the first block of the first file: */N(e)},n=$,o=/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */function(e,t,r,n)//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{var o,i,s=0;/* index of last bit length code of non zero freq */e.level>0?(2===e.strm.data_type&&(e.strm.data_type=/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */function(e){/* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */var t,r=4093624447;/* Check for non-textual ("black-listed") bytes. */for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return 0;/* Check for textual ("white-listed") bytes. */if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;/* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */return 0}(e)),/* Construct the literal and distance trees */U(e,e.l_desc),// Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
U(e,e.d_desc),// Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
/* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     *//* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */s=/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */function(e){var t;/* index of last bit length code of non zero freq *//* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   *//* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */for(/* Determine the bit length frequencies for literal and distance trees */M(e,e.dyn_ltree,e.l_desc.max_code),M(e,e.dyn_dtree,e.d_desc.max_code),/* Build the bit length tree: */U(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*g[t]+1];t--);//Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
//        s->opt_len, s->static_len));
return(/* Update opt_len to include the bit length tree and counts */e.opt_len+=3*(t+1)+5+5+4,t)}(e),/* Determine the best encoding. Compute the block lengths in bytes. */o=e.opt_len+3+7>>>3,(i=e.static_len+3+7>>>3)<=o&&(o=i)):o=i=r+5,r+4<=o&&-1!==t?/* 4: two words for the lengths *//* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */$(e,t,r,n):4===e.strategy||i===o?(I(e,2+(n?1:0),3),j(e,b,m)):(I(e,4+(n?1:0),3),/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */function(e,t,r,n)//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{var o;/* index in bl_order */for(//Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
//Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
//        "too many codes");
//Tracev((stderr, "\nbl counts: "));
I(e,t-257,5),I(e,r-1,5),I(e,n-4,4),o=0;o<n;o++)I(e,e.bl_tree[2*g[o]+1],3);//Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
D(e,e.dyn_ltree,t-1),//Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
D(e,e.dyn_dtree,r-1);//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,s+1),j(e,e.dyn_ltree,e.dyn_dtree)),// Assert (s->compressed_len == s->bits_sent, "bad compressed size");
/* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */N(e),n&&C(e);// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
},s=/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */function(e,t,r)//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif
return(//var out_length, in_length, dcode;
e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?/* lc is the unmatched char */e.dyn_ltree[2*r]++:(e.matches++,/* Here, lc is the match length - MIN_MATCH */t--,//Assert((ush)dist < (ush)MAX_DIST(s) &&
//       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
//       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
e.dyn_ltree[(x[r]+256+1)*2]++,e.dyn_dtree[2*A(t)]++),e.last_lit===e.lit_bufsize-1);/* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */},a=/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */function(e){I(e,2,3),B(e,256,b),16===e.bi_valid?(O(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}}),T.register("9nX5D",function(e,t){e.exports=// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function(e,t,r,n){for(var o=65535&e|0,i=e>>>16&65535|0,s=0;0!==r;){// Set limit ~ twice less than 5552, to keep
// s2 in 31-bits, because we force signed ints.
// in other case %= will fail.
s=r>2e3?2e3:r,r-=s;do i=i+(o=o+t[n++]|0)|0;while(--s)o%=65521,i%=65521}return o|i<<16|0}}),T.register("kWc9m",function(e,t){// Create table on load. Just 255 signed longs. Not a problem.
var r=// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();e.exports=function(e,t,n,o){var i=o+n;e^=-1;for(var s=o;s<i;s++)e=e>>>8^r[(e^t[s])&255];return -1^e;// >>> 0;
}}),T.register("2H7Wt",function(e,t){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
e.exports={2:"need dictionary",/* Z_NEED_DICT       2  */1:"stream end",/* Z_STREAM_END      1  */0:"",/* Z_OK              0  */"-1":"file error",/* Z_ERRNO         (-1) */"-2":"stream error",/* Z_STREAM_ERROR  (-2) */"-3":"data error",/* Z_DATA_ERROR    (-3) */"-4":"insufficient memory",/* Z_MEM_ERROR     (-4) */"-5":"buffer error",/* Z_BUF_ERROR     (-5) */"-6":"incompatible version"/* Z_VERSION_ERROR (-6) */}}),T.register("aNZMB",function(e,t){i(e.exports,"inflateReset",()=>r,e=>r=e),i(e.exports,"inflateInit2",()=>n,e=>n=e),i(e.exports,"inflate",()=>o,e=>o=e),i(e.exports,"inflateEnd",()=>s,e=>s=e),i(e.exports,"inflateSetDictionary",()=>a,e=>a=e);var r,n,o,s,a,u,l,c=T("46ozi"),f=T("9nX5D"),p=T("kWc9m"),h=T("5tNcj"),d=T("dtAbc");function y(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,// TODO: may be {}
this.head=null,/* sliding window */this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,/* bit accumulator */this.hold=0,this.bits=0,/* for string and stored block copying */this.length=0,this.offset=0,/* for table and code decoding */this.extra=0,/* fixed and dynamic code tables */this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,/* dynamic table building */this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new c.Buf16(320),this.work=new c.Buf16(288),/*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  *///this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(e){var t,r;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,e&&e.state?(r=e.state,e.total_in=e.total_out=r.total=0,e.msg="",r.wrap&&(e.adler=1&r.wrap),r.mode=1,r.last=0,r.havedict=0,r.dmax=32768,r.head=null/*Z_NULL*/,r.hold=0,r.bits=0,//state.lencode = state.distcode = state.next = state.codes;
r.lencode=r.lendyn=new c.Buf32(852),r.distcode=r.distdyn=new c.Buf32(592),r.sane=1,r.back=-1,0):-2):-2}/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */var m=!0;/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */function v(e,t,r,n){var o,i=e.state;return null===i.window&&(i.wsize=1<<i.wbits,i.wnext=0,i.whave=0,i.window=new c.Buf8(i.wsize)),n>=i.wsize?(c.arraySet(i.window,t,r-i.wsize,i.wsize,0),i.wnext=0,i.whave=i.wsize):((o=i.wsize-i.wnext)>n&&(o=n),//zmemcpy(state->window + state->wnext, end - copy, dist);
c.arraySet(i.window,t,r-n,o,i.wnext),(n-=o)?(//zmemcpy(state->window, end - copy, copy);
c.arraySet(i.window,t,r-n,n,0),i.wnext=n,i.whave=i.wsize):(i.wnext+=o,i.wnext===i.wsize&&(i.wnext=0),i.whave<i.wsize&&(i.whave+=o))),0}r=b,n=function(e,t){var r,n,o,i,s;return e?(//strm.msg = Z_NULL;                 /* in case we return an error */
n=new g,//if (state === Z_NULL) return Z_MEM_ERROR;
//Tracev((stderr, "inflate: allocated\n"));
e.state=n,n.window=null/*Z_NULL*/,o=t,0!==(r=/* get the state */e&&e.state?(s=e.state,o<0?(i=0,o=-o):(i=(o>>4)+1,o<48&&(o&=15)),o&&(o<8||o>15))?-2:(null!==s.window&&s.wbits!==o&&(s.window=null),/* update state and reset the rest of it */s.wrap=i,s.wbits=o,b(e)):-2)&&(e.state=null/*Z_NULL*/),r):-2},o=function(e,t){var r,n,o,i,s,a,g,b,x,w,E,_,S,A,O,T,I,B,R,k,N,C,L,P,j=0,U=new c.Buf8(4),M=/* permutation of code lengths */[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];/* current decoding table entry */if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return -2;12===(r=e.state).mode&&(r.mode=13),/* skip check *///--- LOAD() ---
s=e.next_out,o=e.output,g=e.avail_out,i=e.next_in,n=e.input,a=e.avail_in,b=r.hold,x=r.bits,//---
w=a,E=g,C=0;e:for(;;)switch(r.mode){case 1:if(0===r.wrap){r.mode=13;break}//=== NEEDBITS(16);
for(;x<16;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
if(2&r.wrap&&35615===b){r.check=0/*crc32(0L, Z_NULL, 0)*/,//=== CRC2(state.check, hold);
U[0]=255&b,U[1]=b>>>8&255,r.check=p(r.check,U,2,0),//===//
//=== INITBITS();
b=0,x=0,//===//
r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||/* check if zlib header allowed */(((255&b)<<8)+(b>>8))%31){e.msg="incorrect header check",r.mode=30;break}if((15&b)!=8){e.msg="unknown compression method",r.mode=30;break}if(//--- DROPBITS(4) ---//
b>>>=4,x-=4,//---//
N=(15&b)+8,0===r.wbits)r.wbits=N;else if(N>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<N,//Tracev((stderr, "inflate:   zlib header ok\n"));
e.adler=r.check=1/*adler32(0L, Z_NULL, 0)*/,r.mode=512&b?10:12,//=== INITBITS();
b=0,x=0;break;case 2://=== NEEDBITS(16); */
for(;x<16;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}if(//===//
r.flags=b,(255&r.flags)!=8){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=b>>8&1),512&r.flags&&(//=== CRC2(state.check, hold);
U[0]=255&b,U[1]=b>>>8&255,r.check=p(r.check,U,2,0)),//=== INITBITS();
b=0,x=0,//===//
r.mode=3;/* falls through */case 3://=== NEEDBITS(32); */
for(;x<32;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}r.head&&(r.head.time=b),512&r.flags&&(//=== CRC4(state.check, hold)
U[0]=255&b,U[1]=b>>>8&255,U[2]=b>>>16&255,U[3]=b>>>24&255,r.check=p(r.check,U,4,0)),//=== INITBITS();
b=0,x=0,//===//
r.mode=4;/* falls through */case 4://=== NEEDBITS(16); */
for(;x<16;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}r.head&&(r.head.xflags=255&b,r.head.os=b>>8),512&r.flags&&(//=== CRC2(state.check, hold);
U[0]=255&b,U[1]=b>>>8&255,r.check=p(r.check,U,2,0)),//=== INITBITS();
b=0,x=0,//===//
r.mode=5;/* falls through */case 5:if(1024&r.flags){//=== NEEDBITS(16); */
for(;x<16;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
r.length=b,r.head&&(r.head.extra_len=b),512&r.flags&&(//=== CRC2(state.check, hold);
U[0]=255&b,U[1]=b>>>8&255,r.check=p(r.check,U,2,0)),//=== INITBITS();
b=0,x=0;//===//
}else r.head&&(r.head.extra=null/*Z_NULL*/);r.mode=6;/* falls through */case 6:if(1024&r.flags&&((_=r.length)>a&&(_=a),_&&(r.head&&(N=r.head.extra_len-r.length,r.head.extra||(r.head.extra=Array(r.head.extra_len)),c.arraySet(r.head.extra,n,i,// - no need for additional size check
_,/*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/N)),512&r.flags&&(r.check=p(r.check,n,_,i)),a-=_,i+=_,r.length-=_),r.length))break e;r.length=0,r.mode=7;/* falls through */case 7:if(2048&r.flags){if(0===a)break e;_=0;do // TODO: 2 or 1 bytes?
N=n[i+_++],r.head&&N&&r.length<65536/*state.head.name_max*/&&(r.head.name+=String.fromCharCode(N));while(N&&_<a)if(512&r.flags&&(r.check=p(r.check,n,_,i)),a-=_,i+=_,N)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;/* falls through */case 8:if(4096&r.flags){if(0===a)break e;_=0;do N=n[i+_++],r.head&&N&&r.length<65536/*state.head.comm_max*/&&(r.head.comment+=String.fromCharCode(N));while(N&&_<a)if(512&r.flags&&(r.check=p(r.check,n,_,i)),a-=_,i+=_,N)break e}else r.head&&(r.head.comment=null);r.mode=9;/* falls through */case 9:if(512&r.flags){//=== NEEDBITS(16); */
for(;x<16;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
if(b!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}//=== INITBITS();
b=0,x=0;//===//
}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10://=== NEEDBITS(32); */
for(;x<32;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
e.adler=r.check=y(b),//=== INITBITS();
b=0,x=0,//===//
r.mode=11;/* falls through */case 11:if(0===r.havedict)//---
return(//--- RESTORE() ---
e.next_out=s,e.avail_out=g,e.next_in=i,e.avail_in=a,r.hold=b,r.bits=x,2);e.adler=r.check=1/*adler32(0L, Z_NULL, 0)*/,r.mode=12;/* falls through */case 12:if(5===t||6===t)break e;/* falls through */case 13:if(r.last){//--- BYTEBITS() ---//
b>>>=7&x,x-=7&x,//---//
r.mode=27;break}//=== NEEDBITS(3); */
for(;x<3;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//---//
switch(//===//
r.last=1/*BITS(1)*/&b,x-=1,3&//--- DROPBITS(1) ---//
(b>>>=1)){case 0:/* stored block *///Tracev((stderr, "inflate:     stored block%s\n",
//        state.last ? " (last)" : ""));
r.mode=14;break;case 1:if(/* fixed block */function(e){/* build fixed huffman tables if first call (may not be thread safe) */if(m){var t;for(u=new c.Buf32(512),l=new c.Buf32(32),/* literal/length table */t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(d(1,e.lens,0,288,u,0,e.work,{bits:9}),/* distance table */t=0;t<32;)e.lens[t++]=5;d(2,e.lens,0,32,l,0,e.work,{bits:5}),/* do this just once */m=!1}e.lencode=u,e.lenbits=9,e.distcode=l,e.distbits=5}(r),//Tracev((stderr, "inflate:     fixed codes block%s\n",
//        state.last ? " (last)" : ""));
r.mode=20,6===t){//--- DROPBITS(2) ---//
b>>>=2,x-=2;break e}break;case 2:/* dynamic block *///Tracev((stderr, "inflate:     dynamic codes block%s\n",
//        state.last ? " (last)" : ""));
r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}//--- DROPBITS(2) ---//
b>>>=2,x-=2;break;case 14://---//
//=== NEEDBITS(32); */
for(//--- BYTEBITS() ---// /* go to byte boundary */
b>>>=7&x,x-=7&x;x<32;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
if((65535&b)!=(b>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&b,//Tracev((stderr, "inflate:       stored length %u\n",
//        state.length));
//=== INITBITS();
b=0,x=0,//===//
r.mode=15,6===t)break e;/* falls through */case 15:r.mode=16;/* falls through */case 16:if(_=r.length){if(_>a&&(_=a),_>g&&(_=g),0===_)break e;//--- zmemcpy(put, next, copy); ---
c.arraySet(o,n,i,_,s),//---//
a-=_,i+=_,g-=_,s+=_,r.length-=_;break}//Tracev((stderr, "inflate:       stored end\n"));
r.mode=12;break;case 17://=== NEEDBITS(14); */
for(;x<14;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//---//
//#ifndef PKZIP_BUG_WORKAROUND
if(//===//
r.nlen=(31&b)+257,//--- DROPBITS(5) ---//
b>>>=5,x-=5,//---//
r.ndist=(31&b)+1,//--- DROPBITS(5) ---//
b>>>=5,x-=5,//---//
r.ncode=(15&b)+4,//--- DROPBITS(4) ---//
b>>>=4,x-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=30;break}//#endif
//Tracev((stderr, "inflate:       table sizes ok\n"));
r.have=0,r.mode=18;/* falls through */case 18:for(;r.have<r.ncode;){//=== NEEDBITS(3);
for(;x<3;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
r.lens[M[r.have++]]=7&b,//--- DROPBITS(3) ---//
b>>>=3,x-=3;//---//
}for(;r.have<19;)r.lens[M[r.have++]]=0;if(// We have separate tables & no pointers. 2 commented lines below not needed.
//state.next = state.codes;
//state.lencode = state.next;
// Switch to use dynamic table
r.lencode=r.lendyn,r.lenbits=7,L={bits:r.lenbits},C=d(0,r.lens,0,19,r.lencode,0,r.work,L),r.lenbits=L.bits,C){e.msg="invalid code lengths set",r.mode=30;break}//Tracev((stderr, "inflate:       code lengths ok\n"));
r.have=0,r.mode=19;/* falls through */case 19:for(;r.have<r.nlen+r.ndist;){for(;O=(j=r.lencode[b&(1<<r.lenbits)-1])>>>24,T=j>>>16&255,I=65535&j,!(O<=x);){//--- PULLBYTE() ---//
if(0===a)break e;a--,b+=n[i++]<<x,x+=8;//---//
}if(I<16)//--- DROPBITS(here.bits) ---//
b>>>=O,x-=O,//---//
r.lens[r.have++]=I;else{if(16===I){for(//=== NEEDBITS(here.bits + 2);
P=O+2;x<P;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//---//
if(//===//
//--- DROPBITS(here.bits) ---//
b>>>=O,x-=O,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}N=r.lens[r.have-1],_=3+(3&b),//--- DROPBITS(2) ---//
b>>>=2,x-=2;//---//
}else if(17===I){for(//=== NEEDBITS(here.bits + 3);
P=O+3;x<P;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
//--- DROPBITS(here.bits) ---//
b>>>=O,x-=O,//---//
N=0,_=3+(7&b),//--- DROPBITS(3) ---//
b>>>=3,x-=3;//---//
}else{for(//=== NEEDBITS(here.bits + 7);
P=O+7;x<P;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
//--- DROPBITS(here.bits) ---//
b>>>=O,x-=O,//---//
N=0,_=11+(127&b),//--- DROPBITS(7) ---//
b>>>=7,x-=7;//---//
}if(r.have+_>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;_--;)r.lens[r.have++]=N}}/* handle error breaks in while */if(30===r.mode)break;/* check for end-of-block code (better have one) */if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}// state.lencode = state.next;
if(/* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */r.lenbits=9,L={bits:r.lenbits},C=d(1,r.lens,0,r.nlen,r.lencode,0,r.work,L),// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
r.lenbits=L.bits,C){e.msg="invalid literal/lengths set",r.mode=30;break}// state.distcode = state.next;
if(r.distbits=6,//state.distcode.copy(state.codes);
// Switch to use dynamic table
r.distcode=r.distdyn,L={bits:r.distbits},C=d(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,L),// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
r.distbits=L.bits,C){e.msg="invalid distances set",r.mode=30;break}if(//Tracev((stderr, 'inflate:       codes ok\n'));
r.mode=20,6===t)break e;/* falls through */case 20:r.mode=21;/* falls through */case 21:if(a>=6&&g>=258){//--- RESTORE() ---
e.next_out=s,e.avail_out=g,e.next_in=i,e.avail_in=a,r.hold=b,r.bits=x,//---
h(e,E),//--- LOAD() ---
s=e.next_out,o=e.output,g=e.avail_out,i=e.next_in,n=e.input,a=e.avail_in,b=r.hold,x=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;O=(j=r.lencode[b&(1<<r.lenbits)-1])>>>24,T=j>>>16&255,I=65535&j,!(O<=x);){//--- PULLBYTE() ---//
if(0===a)break e;a--,b+=n[i++]<<x,x+=8;//---//
}if(T&&(240&T)==0){for(B=O,R=T,k=I;O=(j=r.lencode[k+((b&(1<<B+R)-1)>>B)])>>>24,T=j>>>16&255,I=65535&j,!(B+O<=x);){//--- PULLBYTE() ---//
if(0===a)break e;a--,b+=n[i++]<<x,x+=8;//---//
}//--- DROPBITS(last.bits) ---//
b>>>=B,x-=B,//---//
r.back+=B}if(//--- DROPBITS(here.bits) ---//
b>>>=O,x-=O,//---//
r.back+=O,r.length=I,0===T){//Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
r.mode=26;break}if(32&T){//Tracevv((stderr, "inflate:         end of block\n"));
r.back=-1,r.mode=12;break}if(64&T){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&T,r.mode=22;/* falls through */case 22:if(r.extra){for(//=== NEEDBITS(state.extra);
P=r.extra;x<P;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
r.length+=b&(1<<r.extra)-1/*BITS(state.extra)*/,//--- DROPBITS(state.extra) ---//
b>>>=r.extra,x-=r.extra,//---//
r.back+=r.extra}//Tracevv((stderr, "inflate:         length %u\n", state.length));
r.was=r.length,r.mode=23;/* falls through */case 23:for(;O=(j=r.distcode[b&(1<<r.distbits)-1])>>>24,T=j>>>16&255,I=65535&j,!(O<=x);){//--- PULLBYTE() ---//
if(0===a)break e;a--,b+=n[i++]<<x,x+=8;//---//
}if((240&T)==0){for(B=O,R=T,k=I;O=(j=r.distcode[k+((b&(1<<B+R)-1)>>B)])>>>24,T=j>>>16&255,I=65535&j,!(B+O<=x);){//--- PULLBYTE() ---//
if(0===a)break e;a--,b+=n[i++]<<x,x+=8;//---//
}//--- DROPBITS(last.bits) ---//
b>>>=B,x-=B,//---//
r.back+=B}if(//--- DROPBITS(here.bits) ---//
b>>>=O,x-=O,//---//
r.back+=O,64&T){e.msg="invalid distance code",r.mode=30;break}r.offset=I,r.extra=15&T,r.mode=24;/* falls through */case 24:if(r.extra){for(//=== NEEDBITS(state.extra);
P=r.extra;x<P;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
r.offset+=b&(1<<r.extra)-1/*BITS(state.extra)*/,//--- DROPBITS(state.extra) ---//
b>>>=r.extra,x-=r.extra,//---//
r.back+=r.extra}//#ifdef INFLATE_STRICT
if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}//#endif
//Tracevv((stderr, "inflate:         distance %u\n", state.offset));
r.mode=25;/* falls through */case 25:if(0===g)break e;if(_=E-g,r.offset>_){if((_=r.offset-_)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}_>r.wnext?(_-=r.wnext,S=r.wsize-_):S=r.wnext-_,_>r.length&&(_=r.length),A=r.window}else A=o,S=s-r.offset,_=r.length;_>g&&(_=g),g-=_,r.length-=_;do o[s++]=A[S++];while(--_)0===r.length&&(r.mode=21);break;case 26:if(0===g)break e;o[s++]=r.length,g--,r.mode=21;break;case 27:if(r.wrap){//=== NEEDBITS(32);
for(;x<32;){if(0===a)break e;a--,// Use '|' instead of '+' to make sure that result is signed
b|=n[i++]<<x,x+=8}// NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
if(//===//
E-=g,e.total_out+=E,r.total+=E,E&&(e.adler=r.check=/*UPDATE(state.check, put - _out, _out);*/r.flags?p(r.check,o,E,s-E):f(r.check,o,E,s-E)),E=g,(r.flags?b:y(b))!==r.check){e.msg="incorrect data check",r.mode=30;break}//=== INITBITS();
b=0,x=0;//===//
//Tracev((stderr, "inflate:   check matches trailer\n"));
}r.mode=28;/* falls through */case 28:if(r.wrap&&r.flags){//=== NEEDBITS(32);
for(;x<32;){if(0===a)break e;a--,b+=n[i++]<<x,x+=8}//===//
if(b!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}//=== INITBITS();
b=0,x=0;//===//
//Tracev((stderr, "inflate:   length matches trailer\n"));
}r.mode=29;/* falls through */case 29:C=1;break e;case 30:C=-3;break e;case 31:return -4;default:return -2}return(//---
(// inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
/*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   *///--- RESTORE() ---
e.next_out=s,e.avail_out=g,e.next_in=i,e.avail_in=a,r.hold=b,r.bits=x,(r.wsize||E!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&v(e,e.output,e.next_out,E-e.avail_out))?(r.mode=31,-4):(w-=e.avail_in,E-=e.avail_out,e.total_in+=w,e.total_out+=E,r.total+=E,r.wrap&&E&&(e.adler=r.check=/*UPDATE(state.check, strm.next_out - _out, _out);*/r.flags?p(r.check,o,E,e.next_out-E):f(r.check,o,E,e.next_out-E)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0===w&&0===E||4===t)&&0===C&&(C=-5),C))},s=function(e){if(!e||!e.state/*|| strm->zfree == (free_func)0*/)return -2;var t=e.state;return t.window&&(t.window=null),e.state=null,0},a=function(e,t){var r,n=t.length;return /* check state */e/* == Z_NULL */&&e.state/* == Z_NULL */&&(0===(r=e.state).wrap||11===r.mode)?11===r.mode&&f(1,t,n,0)!==r.check?-3:v(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,0):-2}}),T.register("5tNcj",function(e,t){/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */e.exports=function(e,t){var r,n,o,i,s,a,u,l,c,f,p,h,d,y,g,b,m,v,x,w,E,_,S,A,O;/* copy state to local variables */r=e.state,//here = state.here;
n=e.next_in,A=e.input,o=n+(e.avail_in-5),i=e.next_out,O=e.output,s=i-(t-e.avail_out),a=i+(e.avail_out-257),//#ifdef INFLATE_STRICT
u=r.dmax,//#endif
l=r.wsize,c=r.whave,f=r.wnext,p=r.window,h=r.hold,d=r.bits,y=r.lencode,g=r.distcode,b=(1<<r.lenbits)-1,m=(1<<r.distbits)-1;/* decode literals and length/distances until end-of-block or not enough
     input data or output space */t:do for(d<15&&(h+=A[n++]<<d,d+=8,h+=A[n++]<<d,d+=8),v=y[h&b];;){if(h>>>=x=v>>>24/*here.bits*/,d-=x,0==(x=v>>>16&255/*here.op*/))//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
O[i++]=65535/*here.val*/&v;else if(16&x)for(w=65535/*here.val*/&v,(x&=15)&&(d<x&&(h+=A[n++]<<d,d+=8),w+=h&(1<<x)-1,h>>>=x,d-=x),d<15&&(h+=A[n++]<<d,d+=8,h+=A[n++]<<d,d+=8),v=g[h&m];;){if(h>>>=x=v>>>24/*here.bits*/,d-=x,16&(x=v>>>16&255/*here.op*/)){//#ifdef INFLATE_STRICT
if(E=65535/*here.val*/&v,d<(x&=15)&&(h+=A[n++]<<d,(d+=8)<x&&(h+=A[n++]<<d,d+=8)),(E+=h&(1<<x)-1)>u){e.msg="invalid distance too far back",r.mode=30;break t}if(//#endif
h>>>=x,d-=x,E>//Tracevv((stderr, "inflate:         distance %u\n", dist));
(x=i-s)){if((x=E-x)>c&&r.sane){e.msg="invalid distance too far back",r.mode=30;break t}if(_=0,S=p,0===f){if(_+=l-x,x<w){w-=x;do O[i++]=p[_++];while(--x)_=i-E,S=O}}else if(f<x){if(_+=l+f-x,(x-=f)<w){w-=x;do O[i++]=p[_++];while(--x)if(_=0,f<w){w-=x=f;do O[i++]=p[_++];while(--x)_=i-E,S=O}}}else if(_+=f-x,x<w){w-=x;do O[i++]=p[_++];while(--x)_=i-E,S=O}for(;w>2;)O[i++]=S[_++],O[i++]=S[_++],O[i++]=S[_++],w-=3;w&&(O[i++]=S[_++],w>1&&(O[i++]=S[_++]))}else{_=i-E;/* copy direct from output */do O[i++]=O[_++],O[i++]=O[_++],O[i++]=O[_++],w-=3;while(w>2)w&&(O[i++]=O[_++],w>1&&(O[i++]=O[_++]))}}else if((64&x)==0){v=g[(65535&v)+(h&(1<<x)-1)];continue}else{e.msg="invalid distance code",r.mode=30;break t}break;// need to emulate goto via "continue"
}else if((64&x)==0){v=y[(65535&v)+(h&(1<<x)-1)];continue}else if(32&x){//Tracevv((stderr, "inflate:         end of block\n"));
r.mode=12;break t}else{e.msg="invalid literal/length code",r.mode=30;break t}break;// need to emulate goto via "continue"
}while(n<o&&i<a)n-=/* return unused bytes (on entry, bits < 8, so in won't go too far back) */w=d>>3,d-=w<<3,h&=(1<<d)-1,/* update state and return */e.next_in=n,e.next_out=i,e.avail_in=n<o?5+(o-n):5-(n-o),e.avail_out=i<a?257+(a-i):257-(i-a),r.hold=h,r.bits=d}}),T.register("dtAbc",function(e,t){var r=T("46ozi"),n=[/* Length codes 257..285 base */3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[/* Length codes 257..285 extra */16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],i=[/* Distance codes 0..29 base */1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[/* Distance codes 0..29 extra */16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(e,t,a,u,l,c,f,p){var h,d,y,g,b,m,v,x,w,E=p.bits,_=0,S=0,A=0,O=0,T=0,I=0,B=0,R=0,k=0,N=0,C=null,L=0,P=new r.Buf16(16),j=new r.Buf16(16),U=null,M=0;/*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   *//* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */for(_=0;_<=15;_++)P[_]=0;for(S=0;S<u;S++)P[t[a+S]]++;for(O=15,/* bound code lengths, force root to be within code lengths */T=E;O>=1&&0===P[O];O--);if(T>O&&(T=O),0===O)return(//table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
//table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
//table.val[opts.table_index++] = 0;   //here.val = (var short)0;
l[c++]=20971520,//table.op[opts.table_index] = 64;
//table.bits[opts.table_index] = 1;
//table.val[opts.table_index++] = 0;
l[c++]=20971520,p.bits=1,0);/* no symbols, but wait for decoding to report error */for(A=1;A<O&&0===P[A];A++);for(T<A&&(T=A),/* check for an over-subscribed or incomplete set of lengths */R=1,_=1;_<=15;_++)if(R<<=1,(R-=P[_])<0)return -1;if(R>0&&(0===e||1!==O))return -1;/* incomplete set */for(_=1,/* generate offsets into symbol table for each length for sorting */j[1]=0;_<15;_++)j[_+1]=j[_]+P[_];/* sort symbols by length, by symbol order within each length */for(S=0;S<u;S++)0!==t[a+S]&&(f[j[t[a+S]]++]=S);/* check available table space */if(0===e?(C=U=f,m=19):1===e?(C=n,L-=257,U=o,M-=257,m=256):(C=i,U=s,m=-1),/* initialize opts for loop */N=0,S=0,_=A,b=c,I=T,B=0,y=-1,g=(k=1<<T)-1,1===e&&k>852||2===e&&k>592)return 1;/* process all codes and make table entries */for(;;){/* create table entry */v=_-B,f[S]<m?(x=0,w=f[S]):f[S]>m?(x=U[M+f[S]],w=C[L+f[S]]):(x=96,w=0),/* replicate for those indices with low len bits equal to huff */h=1<<_-B,A=d=1<<I;do l[b+(N>>B)+(d-=h)]=v<<24|x<<16|w|0;while(0!==d)for(/* backwards increment the len-bit code huff */h=1<<_-1;N&h;)h>>=1;if(0!==h?(N&=h-1,N+=h):N=0,/* go to next symbol, update count, len */S++,0==--P[_]){if(_===O)break;_=t[a+f[S]]}/* create new sub-table if needed */if(_>T&&(N&g)!==y){for(0===B&&(B=T),/* increment past last table */b+=A,R=1<</* determine length of next table */(I=_-B);I+B<O&&!((R-=P[I+B])<=0);)I++,R<<=1;if(/* check for enough space */k+=1<<I,1===e&&k>852||2===e&&k>592)return 1;/*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/l[/* point entry in root table to sub-table */y=N&g]=T<<24|I<<16|b-c|0}}return 0!==N&&//table.bits[next + huff] = len - drop;
//table.val[next + huff] = 0;
(l[b+N]=_-B<<24|4194304),/* set return parameters *///opts.table_index += used;
p.bits=T,0}}),T.register("99vV4",function(e,t){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
e.exports={/* Allowed flush values; see deflate() and inflate() below for details */Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,/* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,//Z_MEM_ERROR:     -4,
Z_BUF_ERROR:-5,//Z_VERSION_ERROR: -6,
/* compression levels */Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,/* Possible values of the data_type field (though see inflate()) */Z_BINARY:0,Z_TEXT:1,//Z_ASCII:                1, // = Z_TEXT (deprecated)
Z_UNKNOWN:2,/* The deflate compression method */Z_DEFLATED:8}}),T.register("2ztKZ",function(e,t){var r=T("awmEs").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.normalize=e.exports.recoverPublicKey=e.exports.concatSig=e.exports.legacyToBuffer=e.exports.isNullish=e.exports.padWithZeroes=void 0;var n=T("3UOJ6");T("eLN1L");var o=T("8Qm9Q"),i=T("3GXub"),s=T("7KKmD");/**
 * Pads the front of the given hex string with zeroes until it reaches the
 * target length. If the input string is already longer than or equal to the
 * target length, it is returned unmodified.
 *
 * If the input string is "0x"-prefixed or not a hex string, an error will be
 * thrown.
 *
 * @param hexString - The hexadecimal string to pad with zeroes.
 * @param targetLength - The target length of the hexadecimal string.
 * @returns The input string front-padded with zeroes, or the original string
 * if it was already greater than or equal to to the target length.
 */function a(e,t){if(""!==e&&!/^[a-f0-9]+$/iu.test(e))throw Error(`Expected an unprefixed hex string. Received: ${e}`);if(t<0)throw Error(`Expected a non-negative integer target length. Received: ${t}`);return String.prototype.padStart.call(e,t,"0")}/**
 * Returns `true` if the given value is nullish.
 *
 * @param value - The value being checked.
 * @returns Whether the value is nullish.
 */function u(e){return null==e}e.exports.padWithZeroes=a,e.exports.isNullish=u,e.exports.legacyToBuffer=/**
 * Convert a value to a Buffer. This function should be equivalent to the `toBuffer` function in
 * `ethereumjs-util@5.2.1`.
 *
 * @param value - The value to convert to a Buffer.
 * @returns The given value as a Buffer.
 */function(e){return"string"!=typeof e||(0,s.isHexString)(e)?(0,n.toBuffer)(e):r.from(e)},e.exports.concatSig=/**
 * Concatenate an extended ECDSA signature into a single '0x'-prefixed hex string.
 *
 * @param v - The 'v' portion of the signature.
 * @param r - The 'r' portion of the signature.
 * @param s - The 's' portion of the signature.
 * @returns The concatenated ECDSA signature as a '0x'-prefixed string.
 */function(e,t,r){let i=(0,n.fromSigned)(t),u=(0,n.fromSigned)(r),l=(0,n.bufferToInt)(e),c=a((0,n.toUnsigned)(i).toString("hex"),64),f=a((0,n.toUnsigned)(u).toString("hex"),64),p=(0,s.stripHexPrefix)((0,s.intToHex)(l));return(0,o.add0x)(c.concat(f,p))},e.exports.recoverPublicKey=/**
 * Recover the public key from the given signature and message hash.
 *
 * @param messageHash - The hash of the signed message.
 * @param signature - The signature.
 * @returns The public key of the signer.
 */function(e,t){let r=(0,n.fromRpcSig)(t);return(0,n.ecrecover)(e,r.v,r.r,r.s)},e.exports.normalize=/**
 * Normalize the input to a lower-cased '0x'-prefixed hex string.
 *
 * @param input - The value to normalize.
 * @returns The normalized value.
 */function(e){if(!u(e)){if("number"==typeof e){if(e<0)return"0x";let t=(0,i.numberToBytes)(e);e=(0,i.bytesToHex)(t)}if("string"!=typeof e){let t="eth-sig-util.normalize() requires hex string or integer input.";throw Error(t+=` received ${typeof e}: ${e}`)}return(0,o.add0x)(e.toLowerCase())}}}),T.register("eLN1L",function(e,t){i(e.exports,"assert",()=>T("dfzmU").assert),i(e.exports,"bigIntToBytes",()=>T("3GXub").bigIntToBytes),i(e.exports,"numberToBytes",()=>T("3GXub").numberToBytes),i(e.exports,"hexToBytes",()=>T("3GXub").hexToBytes),i(e.exports,"stringToBytes",()=>T("3GXub").stringToBytes),i(e.exports,"concatBytes",()=>T("3GXub").concatBytes),i(e.exports,"bytesToHex",()=>T("3GXub").bytesToHex),i(e.exports,"signedBigIntToBytes",()=>T("3GXub").signedBigIntToBytes),i(e.exports,"bytesToString",()=>T("3GXub").bytesToString),i(e.exports,"bytesToSignedBigInt",()=>T("3GXub").bytesToSignedBigInt),i(e.exports,"bytesToBigInt",()=>T("3GXub").bytesToBigInt),i(e.exports,"bytesToNumber",()=>T("3GXub").bytesToNumber),i(e.exports,"createBytes",()=>T("8IOvN").createBytes),i(e.exports,"createBigInt",()=>T("8IOvN").createBigInt),i(e.exports,"isStrictHexString",()=>T("8Qm9Q").isStrictHexString),i(e.exports,"add0x",()=>T("8Qm9Q").add0x),i(e.exports,"StrictHexStruct",()=>T("8Qm9Q").StrictHexStruct),i(e.exports,"isObject",()=>T("1Wspu").isObject),i(e.exports,"hasProperty",()=>T("1Wspu").hasProperty),T("dfzmU"),T("cWiqY"),T("3GXub"),T("aJMUN"),T("18SV8"),T("8IOvN"),T("gxzAO"),T("bJJT1"),T("8Qm9Q"),T("h4QaN"),T("29s5Z"),T("bqUuX"),T("1Wspu"),T("20njc"),T("iyfQ2"),T("774Bl"),T("cbw71"),T("dpO5w")}),T.register("dfzmU",function(e,t){i(e.exports,"assert",()=>s),i(e.exports,"assertStruct",()=>a);var r=T("kdnyr");/**
 * Initialise an {@link AssertionErrorConstructor} error.
 *
 * @param ErrorWrapper - The error class to use.
 * @param message - The error message.
 * @returns The error object.
 */// eslint-disable-next-line @typescript-eslint/naming-convention
function n(e,t){return"string"==typeof e?.prototype?.constructor?.name?new e({message:t}):e({message:t})}class o extends Error{constructor(e){var t,r;super(e.message),r="ERR_ASSERTION",(t="code")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r}}function s(e,t="Assertion failed.",r=o){if(!e){if(t instanceof Error)throw t;throw n(r,t)}}function a(e,t,i="Assertion failed",s=o){try{(0,r.assert)(e,t)}catch(e){throw n(s,`${i}: ${/**
 * Get the error message from an unknown error object. If the error object has
 * a `message` property, that property is returned. Otherwise, the stringified
 * error object is returned.
 *
 * @param error - The error object to get the message from.
 * @returns The error message.
 */function(e){let t="object"==typeof e&&null!==e&&"message"in e?e.message:String(e);return(// If the error ends with a period, remove it, as we'll add our own period.
t.endsWith(".")?t.slice(0,-1):t)}(e)}.`)}}}),T.register("kdnyr",function(e,t){i(e.exports,"StructError",()=>r),i(e.exports,"assert",()=>l),i(e.exports,"create",()=>c),i(e.exports,"is",()=>f),i(e.exports,"object",()=>S),i(e.exports,"define",()=>h),i(e.exports,"lazy",()=>d),i(e.exports,"optional",()=>A),i(e.exports,"any",()=>y),i(e.exports,"array",()=>g),i(e.exports,"bigint",()=>b),i(e.exports,"boolean",()=>m),i(e.exports,"instance",()=>v),i(e.exports,"integer",()=>x),i(e.exports,"literal",()=>w),i(e.exports,"nullable",()=>E),i(e.exports,"number",()=>_),i(e.exports,"record",()=>O),i(e.exports,"string",()=>T),i(e.exports,"union",()=>I),i(e.exports,"unknown",()=>B),i(e.exports,"coerce",()=>R),i(e.exports,"refine",()=>C),i(e.exports,"pattern",()=>k),i(e.exports,"size",()=>N);/**
 * A `StructFailure` represents a single specific failure in validation.
 *//**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */class r extends TypeError{constructor(e,t){let r;let{message:n,explanation:o,...i}=e,{path:s}=e,a=0===s.length?n:`At path: ${s.join(".")} -- ${n}`;super(o??a),null!=o&&(this.cause=a),Object.assign(this,i),this.name=this.constructor.name,this.failures=()=>r??(r=[e,...t()])}}/**
 * Check if a value is a plain object.
 */function n(e){return"object"==typeof e&&null!=e}/**
 * Return a value as a printable string.
 */function o(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}/**
 * Convert a validation result to an iterable of failures.
 */function*s(e,t,r,i){var s;for(let a of(n(s=e)&&"function"==typeof s[Symbol.iterator]||(e=[e]),e)){let e=/**
 * Convert a single validation result to a failure.
 */function(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});let{path:i,branch:s}=t,{type:a}=r,{refinement:u,message:l=`Expected a value of type \`${a}\`${u?` with refinement \`${u}\``:""}, but received: \`${o(n)}\``}=e;return{value:n,type:a,refinement:u,key:i[i.length-1],path:i,branch:s,...e,message:l}}(a,t,r,i);e&&(yield e)}}/**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */function*a(e,t,r={}){let{path:o=[],branch:i=[e],coerce:s=!1,mask:u=!1}=r,l={path:o,branch:i};if(s&&(e=t.coercer(e,l),u&&"type"!==t.type&&n(t.schema)&&n(e)&&!Array.isArray(e)))for(let r in e)void 0===t.schema[r]&&delete e[r];let c="valid";for(let n of t.validator(e,l))n.explanation=r.message,c="not_valid",yield[n,void 0];for(let[f,p,h]of t.entries(e,l)){let t=a(p,h,{path:void 0===f?o:[...o,f],branch:void 0===f?i:[...i,p],coerce:s,mask:u,message:r.message});for(let r of t)r[0]?(c=null!=r[0].refinement?"not_refined":"not_valid",yield[r[0],void 0]):s&&(p=r[1],void 0===f?e=p:e instanceof Map?e.set(f,p):e instanceof Set?e.add(p):n(e)&&(void 0!==p||f in e)&&(e[f]=p))}if("not_valid"!==c)for(let n of t.refiner(e,l))n.explanation=r.message,c="not_refined",yield[n,void 0];"valid"===c&&(yield[void 0,e])}/**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */class u{constructor(e){let{type:t,schema:r,validator:n,refiner:o,coercer:i=e=>e,entries:a=function*(){}}=e;this.type=t,this.schema=r,this.entries=a,this.coercer=i,n?this.validator=(e,t)=>{let r=n(e,t);return s(r,t,this,e)}:this.validator=()=>[],o?this.refiner=(e,t)=>{let r=o(e,t);return s(r,t,this,e)}:this.refiner=()=>[]}/**
     * Assert that a value passes the struct's validation, throwing if it doesn't.
     */assert(e,t){return l(e,this,t)}/**
     * Create a value with the struct's coercion logic, then validate it.
     */create(e,t){return c(e,this,t)}/**
     * Check if a value passes the struct's validation.
     */is(e){return f(e,this)}/**
     * Mask a value, coercing and validating it, but returning only the subset of
     * properties defined by the struct's schema.
     */mask(e,t){return(/**
 * Mask a value, returning only the subset of properties defined by a struct.
 */function(e,t,r){let n=p(e,t,{coerce:!0,mask:!0,message:r});if(!n[0])return n[1];throw n[0]}(e,this,t))}/**
     * Validate a value with the struct's validation logic, returning a tuple
     * representing the result.
     *
     * You may optionally pass `true` for the `withCoercion` argument to coerce
     * the value before attempting to validate it. If you do, the result will
     * contain the coerced result when successful.
     */validate(e,t={}){return p(e,this,t)}}/**
 * Assert that a value passes a struct, throwing if it doesn't.
 */function l(e,t,r){let n=p(e,t,{message:r});if(n[0])throw n[0]}/**
 * Create a value with the coercion logic of struct and validate it.
 */function c(e,t,r){let n=p(e,t,{coerce:!0,message:r});if(!n[0])return n[1];throw n[0]}/**
 * Check if a value passes a struct.
 */function f(e,t){let r=p(e,t);return!r[0]}/**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */function p(e,t,n={}){let o=a(e,t,n),i=/**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */function(e){let{done:t,value:r}=e.next();return t?void 0:r}(o);if(i[0]){let e=new r(i[0],function*(){for(let e of o)e[0]&&(yield e[0])});return[e,void 0]}{let e=i[1];return[void 0,e]}}/**
 * Define a new struct type with a custom validation function.
 */function h(e,t){return new u({type:e,schema:null,validator:t})}/**
 * Create a struct with lazily evaluated validation logic.
 *
 * The first time validation is run with the struct, the callback will be called
 * and must return a struct object to use. This is useful for cases where you
 * want to have self-referential structs for nested data structures to avoid a
 * circular definition problem.
 */function d(e){let t;return new u({type:"lazy",schema:null,*entries(r,n){t??(t=e()),yield*t.entries(r,n)},validator:(r,n)=>(t??(t=e()),t.validator(r,n)),coercer:(r,n)=>(t??(t=e()),t.coercer(r,n)),refiner:(r,n)=>(t??(t=e()),t.refiner(r,n))})}/**
 * Ensure that any value passes validation.
 */function y(){return h("any",()=>!0)}function g(e){return new u({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(let[r,n]of t.entries())yield[r,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${o(e)}`})}/**
 * Ensure that a value is a bigint.
 */function b(){return h("bigint",e=>"bigint"==typeof e)}/**
 * Ensure that a value is a boolean.
 */function m(){return h("boolean",e=>"boolean"==typeof e)}/**
 * Ensure that a value is an instance of a specific class.
 */function v(e){return h("instance",t=>t instanceof e||`Expected a \`${e.name}\` instance, but received: ${o(t)}`)}/**
 * Ensure that a value is an integer.
 */function x(){return h("integer",e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${o(e)}`)}function w(e){let t=o(e),r=typeof e;return new u({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||`Expected the literal \`${t}\`, but received: ${o(r)}`})}/**
 * Augment an existing struct to allow `null` values.
 */function E(e){return new u({...e,validator:(t,r)=>null===t||e.validator(t,r),refiner:(t,r)=>null===t||e.refiner(t,r)})}/**
 * Ensure that a value is a number.
 */function _(){return h("number",e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${o(e)}`)}function S(e){let t=e?Object.keys(e):[],r=h("never",()=>!1);return new u({type:"object",schema:e||null,*entries(o){if(e&&n(o)){let n=new Set(Object.keys(o));for(let r of t)n.delete(r),yield[r,o[r],e[r]];for(let e of n)yield[e,o[e],r]}},validator:e=>n(e)||`Expected an object, but received: ${o(e)}`,coercer:e=>n(e)?{...e}:e})}/**
 * Augment a struct to allow `undefined` values.
 */function A(e){return new u({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}/**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */function O(e,t){return new u({type:"record",schema:null,*entries(r){if(n(r))for(let n in r){let o=r[n];yield[n,n,e],yield[n,o,t]}},validator:e=>n(e)||`Expected an object, but received: ${o(e)}`})}/**
 * Ensure that a value is a string.
 */function T(){return h("string",e=>"string"==typeof e||`Expected a string, but received: ${o(e)}`)}/**
 * Ensure that a value matches one of a set of types.
 */function I(e){let t=e.map(e=>e.type).join(" | ");return new u({type:"union",schema:null,coercer(t){for(let r of e){let[e,n]=r.validate(t,{coerce:!0});if(!e)return n}return t},validator(r,n){let i=[];for(let t of e){let[...e]=a(r,t,n),[o]=e;if(!o[0])return[];for(let[t]of e)t&&i.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${o(r)}`,...i]}})}/**
 * Ensure that any value passes validation, without widening its type to `any`.
 */function B(){return h("unknown",()=>!0)}/**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */function R(e,t,r){return new u({...e,coercer:(n,o)=>f(n,t)?e.coercer(r(n,o),o):e.coercer(n,o)})}/**
 * Ensure that a string matches a regular expression.
 */function k(e,t){return C(e,"pattern",r=>t.test(r)||`Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`)}/**
 * Ensure that a string, array, number, date, map, or set has a size (or length, or time) between `min` and `max`.
 */function N(e,t,r=t){let n=`Expected a ${e.type}`,o=t===r?`of \`${t}\``:`between \`${t}\` and \`${r}\``;return C(e,"size",e=>{if("number"==typeof e||e instanceof Date)return t<=e&&e<=r||`${n} ${o} but received \`${e}\``;if(e instanceof Map||e instanceof Set){let{size:i}=e;return t<=i&&i<=r||`${n} with a size ${o} but received one with a size of \`${i}\``}{let{length:i}=e;return t<=i&&i<=r||`${n} with a length ${o} but received one with a length of \`${i}\``}})}/**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */function C(e,t,r){return new u({...e,*refiner(n,o){yield*e.refiner(n,o);let i=r(n,o),a=s(i,o,e,n);for(let e of a)yield{...e,refinement:t}}})}}),T.register("cWiqY",function(e,t){i(e.exports,"base64",()=>o);var r=T("kdnyr"),n=T("dfzmU");let o=(e,t={})=>{let o,i;let s=t.paddingRequired??!1,a=t.characterSet??"base64";return"base64"===a?o=String.raw`[A-Za-z0-9+\/]`:((0,n.assert)("base64url"===a),o=String.raw`[-_A-Za-z0-9]`),i=s?RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`,"u"):RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`,"u"),(0,r.pattern)(e,i)}}),T.register("3GXub",function(e,t){i(e.exports,"bytesToHex",()=>u),i(e.exports,"bytesToBigInt",()=>l),i(e.exports,"bytesToSignedBigInt",()=>c),i(e.exports,"bytesToNumber",()=>f),i(e.exports,"bytesToString",()=>p),i(e.exports,"hexToBytes",()=>h),i(e.exports,"bigIntToBytes",()=>d),i(e.exports,"signedBigIntToBytes",()=>y),i(e.exports,"numberToBytes",()=>g),i(e.exports,"stringToBytes",()=>b),i(e.exports,"concatBytes",()=>m);var r=T("dfzmU"),n=T("8Qm9Q");T("awmEs").Buffer;/**
 * Function implementation of the {@link getPrecomputedHexValuesBuilder}
 * function.
 */let o=/**
 * Memoized function that returns an array to be used as a lookup table for
 * converting bytes to hexadecimal values.
 *
 * The array is created lazily and then cached for future use. The benefit of
 * this approach is that the performance of converting bytes to hex is much
 * better than if we were to call `toString(16)` on each byte.
 *
 * The downside is that the array is created once and then never garbage
 * collected. This is not a problem in practice because the array is only 256
 * elements long.
 *
 * @returns A function that returns the lookup table.
 */function(){// To avoid issues with tree shaking, we need to use a function to return the
// array. This is because the array is only used in the `bytesToHex` function
// and if we were to use a global variable, the array might be removed by the
// tree shaker.
let e=[];return()=>{if(0===e.length)for(let t=0;t<256;t++)e.push(t.toString(16).padStart(2,"0"));return e}}();function s(e){return e instanceof Uint8Array}function a(e){(0,r.assert)(s(e),"Value must be a Uint8Array.")}function u(e){if(a(e),0===e.length)return"0x";let t=o(),r=Array(e.length);for(let n=0;n<e.length;n++)r[n]=t[e[n]];return(0,n.add0x)(r.join(""))}function l(e){a(e);let t=u(e);return BigInt(t)}function c(e){a(e);let t=BigInt(0);for(let r of e)t=(t<<BigInt(8))+BigInt(r);return BigInt.asIntN(8*e.length,t)}function f(e){a(e);let t=l(e);return(0,r.assert)(t<=BigInt(Number.MAX_SAFE_INTEGER),"Number is not a safe integer. Use `bytesToBigInt` instead."),Number(t)}function p(e){return a(e),new TextDecoder().decode(e)}function h(e){// "0x" is often used as empty byte array.
if(e?.toLowerCase?.()==="0x")return new Uint8Array;(0,n.assertIsHexString)(e);// Remove the `0x` prefix if it exists, and pad the string to have an even
// number of characters.
let t=(0,n.remove0x)(e).toLowerCase(),r=t.length%2==0?t:`0${t}`,o=new Uint8Array(r.length/2);for(let e=0;e<o.length;e++){// While this is not the prettiest way to convert a hexadecimal string to a
// `Uint8Array`, it is a lot faster than using `parseInt` to convert each
// character.
let t=r.charCodeAt(2*e),n=r.charCodeAt(2*e+1),i=t-(t<58?48:87),s=n-(n<58?48:87);o[e]=16*i+s}return o}function d(e){(0,r.assert)("bigint"==typeof e,"Value must be a bigint."),(0,r.assert)(e>=BigInt(0),"Value must be a non-negative bigint.");let t=e.toString(16);return h(t)}function y(e,t){(0,r.assert)("bigint"==typeof e,"Value must be a bigint."),(0,r.assert)("number"==typeof t,"Byte length must be a number."),(0,r.assert)(t>0,"Byte length must be greater than 0."),(0,r.assert)(/**
 * Check if a `bigint` fits in a certain number of bytes.
 *
 * @param value - The `bigint` to check.
 * @param bytes - The number of bytes.
 * @returns Whether the `bigint` fits in the number of bytes.
 */function(e,t){(0,r.assert)(t>0);/* eslint-disable no-bitwise */let n=e>>BigInt(31);return!((~e&n)+(e&~n)>>BigInt(8*t+-1));/* eslint-enable no-bitwise */}(e,t),"Byte length is too small to represent the given value.");// ESLint doesn't like mutating function parameters, so to avoid having to
// disable the rule, we create a new variable.
let n=e,o=new Uint8Array(t);for(let e=0;e<o.length;e++)o[e]=Number(BigInt.asUintN(8,n)),// eslint-disable-next-line no-bitwise
n>>=BigInt(8);return o.reverse()}function g(e){(0,r.assert)("number"==typeof e,"Value must be a number."),(0,r.assert)(e>=0,"Value must be a non-negative number."),(0,r.assert)(Number.isSafeInteger(e),"Value is not a safe integer. Use `bigIntToBytes` instead.");let t=e.toString(16);return h(t)}function b(e){return(0,r.assert)("string"==typeof e,"Value must be a string."),new TextEncoder().encode(e)}function m(e){let t=Array(e.length),r=0;for(let n=0;n<e.length;n++){// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
let o=function(e){if("bigint"==typeof e)return d(e);if("number"==typeof e)return g(e);if("string"==typeof e)return e.startsWith("0x")?h(e):b(e);if(s(e))return e;throw TypeError(`Unsupported value type: "${typeof e}".`)}(e[n]);t[n]=o,r+=o.length}let n=new Uint8Array(r);for(let e=0,r=0;e<t.length;e++)// While we could simply spread the values into an array and use
// `Uint8Array.from`, that is a lot slower than using `Uint8Array.set`.
n.set(t[e],r),r+=t[e].length;return n}}),T.register("8Qm9Q",function(e,t){i(e.exports,"StrictHexStruct",()=>s),i(e.exports,"isStrictHexString",()=>a),i(e.exports,"assertIsHexString",()=>u),i(e.exports,"remove0x",()=>c),i(e.exports,"add0x",()=>l),T("3LA6h");var r=T("kdnyr"),n=T("dfzmU");T("3GXub");let o=(0,r.pattern)((0,r.string)(),/^(?:0x)?[0-9a-f]+$/iu),s=(0,r.pattern)((0,r.string)(),/^0x[0-9a-f]+$/iu);function a(e){return(0,r.is)(e,s)}function u(e){(0,n.assert)((0,r.is)(e,o),"Value must be a hexadecimal string.")}function l(e){return e.startsWith("0x")?e:e.startsWith("0X")?`0x${e.substring(2)}`:`0x${e}`}function c(e){return e.startsWith("0x")||e.startsWith("0X")?e.substring(2):e}(0,r.pattern)((0,r.string)(),/^0x[0-9a-f]{40}$/u),(0,r.pattern)((0,r.string)(),/^0x[0-9a-fA-F]{40}$/u)}),T.register("3LA6h",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.shake256=e.exports.shake128=e.exports.keccak_512=e.exports.keccak_384=e.exports.keccak_256=e.exports.keccak_224=e.exports.sha3_512=e.exports.sha3_384=e.exports.sha3_256=e.exports.sha3_224=e.exports.Keccak=e.exports.keccakP=void 0;var r=T("dVEQ9"),n=T("hdoIo"),o=T("g5lVI");// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
let[i,s,a]=[[],[],[]],u=/* @__PURE__ */BigInt(0),l=/* @__PURE__ */BigInt(1),c=/* @__PURE__ */BigInt(2),f=/* @__PURE__ */BigInt(7),p=/* @__PURE__ */BigInt(256),h=/* @__PURE__ */BigInt(113);for(let e=0,t=l,r=1,n=0;e<24;e++){// Pi
[r,n]=[n,(2*r+3*n)%5],i.push(2*(5*n+r)),// Rotational
s.push((e+1)*(e+2)/2%64);// Iota
let o=u;for(let e=0;e<7;e++)(t=(t<<l^(t>>f)*h)%p)&c&&(o^=l<<(l<</* @__PURE__ */BigInt(e))-l);a.push(o)}let[d,y]=/* @__PURE__ */(0,n.split)(a,!0),g=(e,t,r)=>r>32?(0,n.rotlBH)(e,t,r):(0,n.rotlSH)(e,t,r),b=(e,t,r)=>r>32?(0,n.rotlBL)(e,t,r):(0,n.rotlSL)(e,t,r);// Same as keccakf1600, but allows to skip some rounds
function m(e,t=24){let r=new Uint32Array(10);// NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
for(let n=24-t;n<24;n++){// Theta θ
for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,o=(t+2)%10,i=r[o],s=r[o+1],a=g(i,s,1)^r[n],u=b(i,s,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=a,e[t+r+1]^=u}// Rho (ρ) and Pi (π)
let t=e[2],o=e[3];for(let r=0;r<24;r++){let n=s[r],a=g(t,o,n),u=b(t,o,n),l=i[r];t=e[l],o=e[l+1],e[l]=a,e[l+1]=u}// Chi (χ)
for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}// Iota (ι)
e[0]^=d[n],e[1]^=y[n]}r.fill(0)}e.exports.keccakP=m;class v extends o.Hash{// NOTE: we accept arguments in bytes instead of bits here.
constructor(e,t,n,i=!1,s=24){// 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
if(super(),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,// Can be passed from user as dkLen
(0,r.number)(n),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,o.u32)(this.state)}keccak(){m(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){(0,r.exists)(this);let{blockLen:t,state:n}=this;e=(0,o.toBytes)(e);let i=e.length;for(let r=0;r<i;){let o=Math.min(t-this.pos,i-r);for(let t=0;t<o;t++)n[this.pos++]^=e[r++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;// Do the padding
e[r]^=t,(128&t)!=0&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){(0,r.exists)(this,!1),(0,r.bytes)(e),this.finish();let t=this.state,{blockLen:n}=this;for(let r=0,o=e.length;r<o;){this.posOut>=n&&this.keccak();let i=Math.min(n-this.posOut,o-r);e.set(t.subarray(this.posOut,this.posOut+i),r),this.posOut+=i,r+=i}return e}xofInto(e){// Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,r.number)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,r.output)(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:n,rounds:o,enableXOF:i}=this;return e||(e=new v(t,r,n,i,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,// Suffix can change in cSHAKE
e.suffix=r,e.outputLen=n,e.enableXOF=i,e.destroyed=this.destroyed,e}}e.exports.Keccak=v;let x=(e,t,r)=>(0,o.wrapConstructor)(()=>new v(t,e,r));e.exports.sha3_224=x(6,144,28),/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */e.exports.sha3_256=x(6,136,32),e.exports.sha3_384=x(6,104,48),e.exports.sha3_512=x(6,72,64),e.exports.keccak_224=x(1,144,28),/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */e.exports.keccak_256=x(1,136,32),e.exports.keccak_384=x(1,104,48),e.exports.keccak_512=x(1,72,64);let w=(e,t,r)=>(0,o.wrapXOFConstructorWithOpts)((n={})=>new v(t,e,void 0===n.dkLen?r:n.dkLen,!0));e.exports.shake128=w(31,168,16),e.exports.shake256=w(31,136,32)}),T.register("dVEQ9",function(e,t){function r(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e){if("boolean"!=typeof e)throw Error(`Expected boolean, not ${e}`)}function o(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function i(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");r(e.outputLen),r(e.blockLen)}function s(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function a(e,t){o(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.output=e.exports.exists=e.exports.hash=e.exports.bytes=e.exports.bool=e.exports.number=void 0,e.exports.number=r,e.exports.bool=n,e.exports.bytes=o,e.exports.hash=i,e.exports.exists=s,e.exports.output=a,e.exports.default={number:r,bool:n,bytes:o,hash:i,exists:s,output:a}}),T.register("hdoIo",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.add5L=e.exports.add5H=e.exports.add4H=e.exports.add4L=e.exports.add3H=e.exports.add3L=e.exports.add=e.exports.rotlBL=e.exports.rotlBH=e.exports.rotlSL=e.exports.rotlSH=e.exports.rotr32L=e.exports.rotr32H=e.exports.rotrBL=e.exports.rotrBH=e.exports.rotrSL=e.exports.rotrSH=e.exports.shrSL=e.exports.shrSH=e.exports.toBig=e.exports.split=e.exports.fromBig=void 0;let r=/* @__PURE__ */BigInt(4294967296-1),n=/* @__PURE__ */BigInt(32);// We are not using BigUint64Array, because they are extremely slow as per 2022
function o(e,t=!1){return t?{h:Number(e&r),l:Number(e>>n&r)}:{h:0|Number(e>>n&r),l:0|Number(e&r)}}function i(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:s,l:a}=o(e[i],t);[r[i],n[i]]=[s,a]}return[r,n]}e.exports.fromBig=o,e.exports.split=i;let s=(e,t)=>BigInt(e>>>0)<<n|BigInt(t>>>0);e.exports.toBig=s;// for Shift in [0, 32)
let a=(e,t,r)=>e>>>r;e.exports.shrSH=a;let u=(e,t,r)=>e<<32-r|t>>>r;e.exports.shrSL=u;// Right rotate for Shift in [1, 32)
let l=(e,t,r)=>e>>>r|t<<32-r;e.exports.rotrSH=l;let c=(e,t,r)=>e<<32-r|t>>>r;e.exports.rotrSL=c;// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
let f=(e,t,r)=>e<<64-r|t>>>r-32;e.exports.rotrBH=f;let p=(e,t,r)=>e>>>r-32|t<<64-r;e.exports.rotrBL=p;// Right rotate for shift===32 (just swaps l&h)
let h=(e,t)=>t;e.exports.rotr32H=h;let d=(e,t)=>e;e.exports.rotr32L=d;// Left rotate for Shift in [1, 32)
let y=(e,t,r)=>e<<r|t>>>32-r;e.exports.rotlSH=y;let g=(e,t,r)=>t<<r|e>>>32-r;e.exports.rotlSL=g;// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
let b=(e,t,r)=>t<<r-32|e>>>64-r;e.exports.rotlBH=b;let m=(e,t,r)=>e<<r-32|t>>>64-r;// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function v(e,t,r,n){let o=(t>>>0)+(n>>>0);return{h:e+r+(o/4294967296|0)|0,l:0|o}}e.exports.rotlBL=m,e.exports.add=v;// Addition with more than 2 elements
let x=(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0);e.exports.add3L=x;let w=(e,t,r,n)=>t+r+n+(e/4294967296|0)|0;e.exports.add3H=w;let E=(e,t,r,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0);e.exports.add4L=E;let _=(e,t,r,n,o)=>t+r+n+o+(e/4294967296|0)|0;e.exports.add4H=_;let S=(e,t,r,n,o)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0)+(o>>>0);e.exports.add5L=S;let A=(e,t,r,n,o,i)=>t+r+n+o+i+(e/4294967296|0)|0;e.exports.add5H=A,e.exports.default={fromBig:o,split:i,toBig:s,shrSH:a,shrSL:u,rotrSH:l,rotrSL:c,rotrBH:f,rotrBL:p,rotr32H:h,rotr32L:d,rotlSH:y,rotlSL:g,rotlBH:b,rotlBL:m,add:v,add3L:x,add3H:w,add4L:E,add4H:_,add5H:A,add5L:S}}),T.register("g5lVI",function(e,t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.randomBytes=e.exports.wrapXOFConstructorWithOpts=e.exports.wrapConstructorWithOpts=e.exports.wrapConstructor=e.exports.checkOpts=e.exports.Hash=e.exports.concatBytes=e.exports.toBytes=e.exports.utf8ToBytes=e.exports.asyncLoop=e.exports.nextTick=e.exports.hexToBytes=e.exports.bytesToHex=e.exports.isLE=e.exports.rotr=e.exports.createView=e.exports.u32=e.exports.u8=void 0;var r=T("5q1oq");let n=e=>e instanceof Uint8Array;if(e.exports.u8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),e.exports.u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),e.exports.createView=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),e.exports.rotr=(e,t)=>e<<32-t|e>>>t,// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
e.exports.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.exports.isLE)throw Error("Non little-endian hardware is not supported");let o=/* @__PURE__ */Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));e.exports.bytesToHex=/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */function(e){if(!n(e))throw Error("Uint8Array expected");// pre-caching improves the speed 6x
let t="";for(let r=0;r<e.length;r++)t+=o[e[r]];return t},e.exports.hexToBytes=/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(t/2);for(let t=0;t<r.length;t++){let n=2*t,o=e.slice(n,n+2),i=Number.parseInt(o,16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[t]=i}return r};// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
let i=async()=>{};// Returns control to thread each 'tick' ms to avoid blocking
async function s(t,r,n){let o=Date.now();for(let i=0;i<t;i++){n(i);// Date.now() is not monotonic, so in case if clock goes backwards we return return control too
let t=Date.now()-o;t>=0&&t<r||(await (0,e.exports.nextTick)(),o+=t)}}/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */function a(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e));// https://bugzil.la/1681809
}/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */function u(e){if("string"==typeof e&&(e=a(e)),!n(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}e.exports.nextTick=i,e.exports.asyncLoop=s,e.exports.utf8ToBytes=a,e.exports.toBytes=u,e.exports.concatBytes=/**
 * Copies several Uint8Arrays into one.
 */function(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!n(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t},e.exports.Hash=// For runtime check if class implements interface
class{// Safe version that clones internal state
clone(){return this._cloneInto()}};let l={}.toString;e.exports.checkOpts=function(e,t){if(void 0!==t&&"[object Object]"!==l.call(t))throw Error("Options should be object or undefined");let r=Object.assign(e,t);return r},e.exports.wrapConstructor=function(e){let t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t},e.exports.wrapConstructorWithOpts=function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},e.exports.wrapXOFConstructorWithOpts=function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},e.exports.randomBytes=/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */function(e=32){if(r.crypto&&"function"==typeof r.crypto.getRandomValues)return r.crypto.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}}),T.register("5q1oq",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.crypto=void 0,e.exports.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0}),T.register("aJMUN",function(e,t){var r=T("kdnyr");let n=RegExp("^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$","u"),o=RegExp("^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$","u");(0,r.pattern)((0,r.string)(),n),(0,r.pattern)((0,r.string)(),/^[-a-z0-9]{3,8}$/u),(0,r.pattern)((0,r.string)(),/^[-_a-zA-Z0-9]{1,32}$/u),(0,r.pattern)((0,r.string)(),o),(0,r.pattern)((0,r.string)(),/^[-.%a-zA-Z0-9]{1,128}$/u)}),T.register("18SV8",function(e,t){var r=T("kdnyr"),n=T("cWiqY");(0,r.size)((0,n.base64)((0,r.string)(),{paddingRequired:!0}),44,44)}),T.register("8IOvN",function(e,t){i(e.exports,"createBigInt",()=>l),i(e.exports,"createBytes",()=>c);var r=T("kdnyr");T("dfzmU");var n=T("3GXub"),o=T("8Qm9Q");let s=(0,r.union)([(0,r.number)(),(0,r.bigint)(),(0,r.string)(),o.StrictHexStruct]);(0,r.coerce)((0,r.number)(),s,Number);let a=(0,r.coerce)((0,r.bigint)(),s,BigInt);(0,r.union)([o.StrictHexStruct,(0,r.instance)(Uint8Array)]);let u=(0,r.coerce)((0,r.instance)(Uint8Array),(0,r.union)([o.StrictHexStruct]),n.hexToBytes);function l(e){try{// The `BigInt` constructor throws if the value is not a number-like value.
// There is no need to validate the value manually.
return(0,r.create)(e,a)}catch(e){if(e instanceof r.StructError)throw Error(`Expected a number-like value, got "${String(e.value)}".`);/* istanbul ignore next */throw e}}function c(e){if("string"==typeof e&&"0x"===e.toLowerCase())return new Uint8Array;try{return(0,r.create)(e,u)}catch(e){if(e instanceof r.StructError)throw Error(`Expected a bytes-like value, got "${String(e.value)}".`);/* istanbul ignore next */throw e}}(0,r.coerce)(o.StrictHexStruct,(0,r.instance)(Uint8Array),n.bytesToHex)}),T.register("gxzAO",function(e,t){function r(e,t,r){if(!t.has(e))throw TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function n(e,t){var n=r(e,t,"get");return n.get?n.get.call(e):n.value}function o(e,t,r){/**
 * A {@link ReadonlyMap} that cannot be modified after instantiation.
 * The implementation uses an inner map hidden via a private field, and the
 * immutability guarantee relies on it being impossible to get a reference
 * to this map.
 */(function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function i(e,t,n){var o=r(e,t,"set");return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=r}}(e,o,n),n}var s=/*#__PURE__*/new WeakMap;let a=Symbol.iterator;class u{get size(){return n(this,s).size}[a](){return n(this,s)[Symbol.iterator]()}entries(){return n(this,s).entries()}forEach(e,t){// We have to wrap the specified callback in order to prevent it from
// receiving a reference to the inner map.
return n(this,s).forEach((r,n,o)=>e.call(t,r,n,this))}get(e){return n(this,s).get(e)}has(e){return n(this,s).has(e)}keys(){return n(this,s).keys()}values(){return n(this,s).values()}toString(){return`FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([e,t])=>`${String(e)} => ${String(t)}`).join(", ")} `:""}}`}constructor(e){o(this,s,{writable:!0,value:void 0}),i(this,s,new Map(e)),Object.freeze(this)}}var l=/*#__PURE__*/new WeakMap;let c=Symbol.iterator;/**
 * A {@link ReadonlySet} that cannot be modified after instantiation.
 * The implementation uses an inner set hidden via a private field, and the
 * immutability guarantee relies on it being impossible to get a reference
 * to this set.
 */class f{get size(){return n(this,l).size}[c](){return n(this,l)[Symbol.iterator]()}entries(){return n(this,l).entries()}forEach(e,t){// We have to wrap the specified callback in order to prevent it from
// receiving a reference to the inner set.
return n(this,l).forEach((r,n,o)=>e.call(t,r,n,this))}has(e){return n(this,l).has(e)}keys(){return n(this,l).keys()}values(){return n(this,l).values()}toString(){return`FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(e=>String(e)).join(", ")} `:""}}`}constructor(e){o(this,l,{writable:!0,value:void 0}),i(this,l,new Set(e)),Object.freeze(this)}}Object.freeze(u),Object.freeze(u.prototype),Object.freeze(f),Object.freeze(f.prototype)}),T.register("bJJT1",function(e,t){}),T.register("h4QaN",function(e,t){var r=T("kdnyr"),n=T("dfzmU");let o=(0,r.union)([(0,r.literal)(null),(0,r.boolean)(),(0,r.define)("finite number",e=>(0,r.is)(e,(0,r.number)())&&Number.isFinite(e)),(0,r.string)(),(0,r.array)((0,r.lazy)(()=>o)),(0,r.record)((0,r.string)(),(0,r.lazy)(()=>o))]),i=(0,r.coerce)(o,(0,r.any)(),e=>((0,n.assertStruct)(e,o),JSON.parse(JSON.stringify(e,(e,t)=>{// Strip __proto__ and constructor properties to prevent prototype pollution.
    if("__proto__"!==e&&"constructor"!==e)return t})))),s=(0,r.literal)("2.0"),a=(0,r.nullable)((0,r.union)([(0,r.number)(),(0,r.string)()])),u=(0,r.object)({code:(0,r.integer)(),message:(0,r.string)(),data:(0,r.optional)(i),stack:(0,r.optional)((0,r.string)())}),l=(0,r.union)([(0,r.record)((0,r.string)(),i),(0,r.array)(i)]);(0,r.object)({id:a,jsonrpc:s,method:(0,r.string)(),params:(0,r.optional)(l)}),(0,r.object)({jsonrpc:s,method:(0,r.string)(),params:(0,r.optional)(l)}),(0,r.object)({id:a,jsonrpc:s,result:(0,r.optional)((0,r.unknown)()),error:(0,r.optional)(u)});let c=(0,r.object)({id:a,jsonrpc:s,result:i}),f=(0,r.object)({id:a,jsonrpc:s,error:u});(0,r.union)([c,f])}),T.register("29s5Z",function(e,t){}),T.register("bqUuX",function(e,t){/*@__PURE__*/S(T("hx4Xg"))("metamask")}),T.register("hx4Xg",function(e,t){let r;/* eslint-env browser *//**
 * This is the web browser implementation of `debug()`.
 */var n=T("9Mq5w");e.exports.formatArgs=/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let r="color: "+this.color;t.splice(1,0,r,"color: inherit");// The final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&// (the user may have provided their own)
(o=n))}),t.splice(o,0,r)},e.exports.save=/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */function(t){try{t?e.exports.storage.setItem("debug",t):e.exports.storage.removeItem("debug")}catch(e){// Swallow
// XXX (@Qix-) should we be logging these?
}},e.exports.load=/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */function(){let t;try{t=e.exports.storage.getItem("debug")}catch(e){// Swallow
// XXX (@Qix-) should we be logging these?
}return!t&&void 0!==n&&"env"in n&&(t=void 0),t},e.exports.useColors=/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */// eslint-disable-next-line complexity
function(){return(// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||// Is firebug? http://stackoverflow.com/a/398120/376773
"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||// Is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||// Double check webkit in userAgent just in case we are in a worker
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)))},e.exports.storage=/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */function(){try{// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
// The Browser also has localStorage in the global context.
return localStorage}catch(e){// Swallow
// XXX (@Qix-) should we be logging these?
}}(),e.exports.destroy=(r=!1,()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),/**
 * Colors.
 */e.exports.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */e.exports.log=console.debug||console.log||(()=>{}),e.exports=T("hrbGx")(e.exports);let{formatters:o}=e.exports;/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}),T.register("hrbGx",function(e,t){e.exports=/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */function(e){/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/function t(e){let n,o,i;let s=null;function a(...e){// Disabled?
if(!a.enabled)return;// Set `diff` timestamp
let r=Number(new Date),o=r-(n||r);a.diff=o,a.prev=n,a.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");// Apply any `formatters` transformations
let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,n)=>{// If we encounter an escaped % then don't increase the array index
if("%%"===r)return"%";i++;let o=t.formatters[n];if("function"==typeof o){let t=e[i];r=o.call(a,t),// Now we need to remove `args[index]` since it's inlined in the `format`
e.splice(i,1),i--}return r}),// Apply env-specific formatting (colors, etc.)
t.formatArgs.call(a,e);let s=a.log||t.log;s.apply(a,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=r,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{s=e}}),"function"==typeof t.init&&t.init(a),a}function r(e,r){let n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/function n(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/function(e){return e instanceof Error?e.stack||e.message:e},t.disable=/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/function(){let e=[...t.names.map(n),...t.skips.map(n).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/function(e){let r;t.save(e),t.namespaces=e,t.names=[],t.skips=[];let n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.slice(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/function(e){let r,n;if("*"===e[e.length-1])return!0;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=T("aRyHz"),t.destroy=/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(r=>{t[r]=e[r]}),/**
	* The currently active debug mode names, and names to skip.
	*/t.names=[],t.skips=[],/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/t.formatters={},t.selectColor=/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t)|0;// Convert to 32bit integer
return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}}),T.register("aRyHz",function(e,t){/**
 * Pluralization helper.
 */function r(e,t,r,n){return Math.round(e/r)+" "+n+(t>=1.5*r?"s":"")}/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */e.exports=function(e,t){t=t||{};var n,o,i=typeof e;if("string"===i&&e.length>0)return(/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e));if("number"===i&&isFinite(e))return t.long?(n=Math.abs(e))>=864e5?r(e,n,864e5,"day"):n>=36e5?r(e,n,36e5,"hour"):n>=6e4?r(e,n,6e4,"minute"):n>=1e3?r(e,n,1e3,"second"):e+" ms":(o=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":o>=36e5?Math.round(e/36e5)+"h":o>=6e4?Math.round(e/6e4)+"m":o>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}),T.register("1Wspu",function(e,t){var r,n;function o(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}i(e.exports,"isObject",()=>o),i(e.exports,"hasProperty",()=>s);let s=(e,t)=>Object.hasOwnProperty.call(e,t);(n=r||(r={}))[n.Null=4]="Null",n[n.Comma=1]="Comma",n[n.Wrapper=1]="Wrapper",n[n.True=4]="True",n[n.False=5]="False",n[n.Quote=1]="Quote",n[n.Colon=1]="Colon",n[n.Date=24]="Date"}),T.register("20njc",function(e,t){T("dfzmU"),T("8Qm9Q")}),T.register("iyfQ2",function(e,t){// We use a symbol property name instead of { _type: Brand }, because that would show up in IDE suggestions,
// while internal symbols do not.
}),T.register("774Bl",function(e,t){var r,n;(n=r||(r={}))[n./**
   * A millisecond.
   */Millisecond=1]="Millisecond",n[n./**
   * A second, in milliseconds.
   */Second=1e3]="Second",n[n./**
   * A minute, in milliseconds.
   */Minute=6e4]="Minute",n[n./**
   * An hour, in milliseconds.
   */Hour=36e5]="Hour",n[n./**
   * A day, in milliseconds.
   */Day=864e5]="Day",n[n./**
   * A week, in milliseconds.
   */Week=6048e5]="Week",n[n./**
   * A year, in milliseconds.
   */Year=31536e6]="Year"}),T.register("cbw71",function(e,t){}),T.register("dpO5w",function(e,t){var r=T("kVney"),n=T("kdnyr");T("dfzmU"),(0,n.refine)((0,n.string)(),"Version",e=>null!==(0,r.valid)(e)||`Expected SemVer version, got "${e}"`),(0,n.refine)((0,n.string)(),"Version range",e=>null!==(0,r.validRange)(e)||`Expected SemVer range, got "${e}"`)}),T.register("kVney",function(e,t){// just pre-load all the stuff that index.js lazily exports
var r=T("9kaCP"),n=T("85PoE"),o=T("81c36"),i=T("3WLUY"),s=T("32q5g"),a=T("iOh4F"),u=T("7MLzQ"),l=T("5A7Vx"),c=T("2IlW1"),f=T("iHVPR"),p=T("bJTtX"),h=T("lC8fv"),d=T("kijXf"),y=T("gmhEl"),g=T("ij7he"),b=T("c4l6c"),m=T("dpH9i"),v=T("1s1Yc"),x=T("gKjQs"),w=T("BJ3h4"),E=T("9gxdK"),_=T("dgdvT"),S=T("i11P3"),A=T("3JHII"),O=T("3ovST"),I=T("jFVX1"),B=T("81XSv"),R=T("b5dJg"),k=T("5XMjl"),N=T("htzzM"),C=T("1MUKh"),L=T("6yKak"),P=T("hR7mJ"),j=T("a9As8"),U=T("gz18e"),M=T("UOZA2"),D=T("fEi7J"),F=T("DtAmL"),$=T("h9jxk"),H=T("6qFz3"),z=T("bFvME");e.exports={parse:s,valid:a,clean:u,inc:l,diff:c,major:f,minor:p,patch:h,prerelease:d,compare:y,rcompare:g,compareLoose:b,compareBuild:m,sort:v,rsort:x,gt:w,lt:E,eq:_,neq:S,gte:A,lte:O,cmp:I,coerce:B,Comparator:R,Range:k,satisfies:N,toComparators:C,maxSatisfying:L,minSatisfying:P,minVersion:j,validRange:U,outside:M,gtr:D,ltr:F,intersects:$,simplifyRange:H,subset:z,SemVer:o,re:r.re,src:r.src,tokens:r.t,SEMVER_SPEC_VERSION:n.SEMVER_SPEC_VERSION,RELEASE_TYPES:n.RELEASE_TYPES,compareIdentifiers:i.compareIdentifiers,rcompareIdentifiers:i.rcompareIdentifiers}}),T.register("9kaCP",function(e,t){var r=T("85PoE"),n=r.MAX_SAFE_COMPONENT_LENGTH,o=r.MAX_SAFE_BUILD_LENGTH,i=r.MAX_LENGTH,s=T("aW7Y5");t=e.exports={};// The actual regexps go on exports.re
let a=t.re=[],u=t.safeRe=[],l=t.src=[],c=t.t={},f=0,p="[a-zA-Z0-9-]",h=[["\\s",1],["\\d",i],[p,o]],d=e=>{for(let[t,r]of h)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},y=(e,t,r)=>{let n=d(t),o=f++;s(e,o,t),c[e]=o,l[o]=t,a[o]=new RegExp(t,r?"g":void 0),u[o]=new RegExp(n,r?"g":void 0)};// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
y("NUMERICIDENTIFIER","0|[1-9]\\d*"),y("NUMERICIDENTIFIERLOOSE","\\d+"),// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
y("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),// ## Main Version
// Three dot-separated numeric identifiers.
y("MAINVERSION",`(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`),y("MAINVERSIONLOOSE",`(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`),// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
y("PRERELEASEIDENTIFIER",`(?:${l[c.NUMERICIDENTIFIER]}|${l[c.NONNUMERICIDENTIFIER]})`),y("PRERELEASEIDENTIFIERLOOSE",`(?:${l[c.NUMERICIDENTIFIERLOOSE]}|${l[c.NONNUMERICIDENTIFIER]})`),// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
y("PRERELEASE",`(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`),y("PRERELEASELOOSE",`(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`),// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
y("BUILDIDENTIFIER",`${p}+`),// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
y("BUILD",`(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`),// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
y("FULLPLAIN",`v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`),y("FULL",`^${l[c.FULLPLAIN]}$`),// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
y("LOOSEPLAIN",`[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`),y("LOOSE",`^${l[c.LOOSEPLAIN]}$`),y("GTLT","((?:<|>)?=?)"),// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
y("XRANGEIDENTIFIERLOOSE",`${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),y("XRANGEIDENTIFIER",`${l[c.NUMERICIDENTIFIER]}|x|X|\\*`),y("XRANGEPLAIN",`[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`),y("XRANGEPLAINLOOSE",`[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`),y("XRANGE",`^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`),y("XRANGELOOSE",`^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`),// Coercion.
// Extract anything that could conceivably be a part of a valid semver
y("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),y("COERCERTL",l[c.COERCE],!0),// Tilde ranges.
// Meaning is "reasonably at or greater than"
y("LONETILDE","(?:~>?)"),y("TILDETRIM",`(\\s*)${l[c.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",y("TILDE",`^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`),y("TILDELOOSE",`^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`),// Caret ranges.
// Meaning is "at least and backwards compatible with"
y("LONECARET","(?:\\^)"),y("CARETTRIM",`(\\s*)${l[c.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",y("CARET",`^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`),y("CARETLOOSE",`^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`),// A simple gt/lt/eq thing, or just "" to indicate "any version"
y("COMPARATORLOOSE",`^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`),y("COMPARATOR",`^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`),// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
y("COMPARATORTRIM",`(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
y("HYPHENRANGE",`^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`),y("HYPHENRANGELOOSE",`^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`),// Star ranges basically just allow anything at all.
y("STAR","(<|>)?=?\\s*\\*"),// >=0.0.0 is like a star
y("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),y("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}),T.register("85PoE",function(e,t){let r=Number.MAX_SAFE_INTEGER||/* istanbul ignore next */9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:r,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}}),T.register("aW7Y5",function(e,t){var r=T("9Mq5w");let n=("object"==typeof r&&r.env,()=>{});e.exports=n}),T.register("81c36",function(e,t){var r=T("aW7Y5"),n=T("85PoE"),o=n.MAX_LENGTH,i=n.MAX_SAFE_INTEGER,s=T("9kaCP"),a=s.safeRe,u=s.t,l=T("35J2F"),c=T("3WLUY").compareIdentifiers;class f{constructor(e,t){if(t=l(t),e instanceof f){if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>o)throw TypeError(`version is longer than ${o} characters`);r("SemVer",e,t),this.options=t,this.loose=!!t.loose,// this isn't actually relevant for versions, but keep it so that we
// don't run into trouble passing this.options around.
this.includePrerelease=!!t.includePrerelease;let n=e.trim().match(t.loose?a[u.LOOSE]:a[u.FULL]);if(!n)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,// these are actually numbers
this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>i||this.major<0)throw TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<i)return t}return e}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(r("SemVer.compare",this.version,this.options,e),!(e instanceof f)){if("string"==typeof e&&e===this.version)return 0;e=new f(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof f||(e=new f(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){// NOT having a prerelease is > having one
if(e instanceof f||(e=new f(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let n=this.prerelease[t],o=e.prerelease[t];if(r("prerelease compare",t,n,o),void 0===n&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===n)return -1;if(n===o)continue;else return c(n,o)}while(++t)}compareBuild(e){e instanceof f||(e=new f(e,this.options));let t=0;do{let n=this.build[t],o=e.build[t];if(r("prerelease compare",t,n,o),void 0===n&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===n)return -1;if(n===o)continue;else return c(n,o)}while(++t)}// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":// If this is already a prerelease, it will bump to the next version
// drop any prereleases that might already exist, since they are not
// relevant at this point.
this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;// If the input is a non-prerelease version, this acts the same as
// prepatch.
case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;// This probably shouldn't be used publicly.
// 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
case"pre":{let e=Number(r)?1:0;if(!t&&!1===r)throw Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){// didn't increment anything
if(t===this.prerelease.join(".")&&!1===r)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){// 1.2.0-beta.1 bumps to 1.2.0-beta.2,
// 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
let n=[t,e];!1===r&&(n=[t]),0===c(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=f}),T.register("35J2F",function(e,t){// parse out just the options we care about
let r=Object.freeze({loose:!0}),n=Object.freeze({});e.exports=e=>e?"object"!=typeof e?r:e:n}),T.register("3WLUY",function(e,t){let r=/^[0-9]+$/,n=(e,t)=>{let n=r.test(e),o=r.test(t);return n&&o&&(e=+e,t=+t),e===t?0:n&&!o?-1:o&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}}),T.register("32q5g",function(e,t){var r=T("81c36");e.exports=(e,t,n=!1)=>{if(e instanceof r)return e;try{return new r(e,t)}catch(e){if(!n)return null;throw e}}}),T.register("iOh4F",function(e,t){var r=T("32q5g");e.exports=(e,t)=>{let n=r(e,t);return n?n.version:null}}),T.register("7MLzQ",function(e,t){var r=T("32q5g");e.exports=(e,t)=>{let n=r(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null}}),T.register("5A7Vx",function(e,t){var r=T("81c36");e.exports=(e,t,n,o,i)=>{"string"==typeof n&&(i=o,o=n,n=void 0);try{return new r(e instanceof r?e.version:e,n).inc(t,o,i).version}catch(e){return null}}}),T.register("2IlW1",function(e,t){var r=T("32q5g");e.exports=(e,t)=>{let n=r(e,null,!0),o=r(t,null,!0),i=n.compare(o);if(0===i)return null;let s=i>0,a=s?n:o,u=s?o:n,l=!!a.prerelease.length,c=!!u.prerelease.length;if(c&&!l)return(// Going from prerelease -> no prerelease requires some special casing
// If the low version has only a major, then it will always be a major
// Some examples:
// 1.0.0-1 -> 1.0.0
// 1.0.0-1 -> 1.1.1
// 1.0.0-1 -> 2.0.0
u.patch||u.minor?a.patch?"patch":a.minor?"minor":"major":"major");// add the `pre` prefix if we are going to a prerelease version
let f=l?"pre":"";return n.major!==o.major?f+"major":n.minor!==o.minor?f+"minor":n.patch!==o.patch?f+"patch":"prerelease"}}),T.register("iHVPR",function(e,t){var r=T("81c36");e.exports=(e,t)=>new r(e,t).major}),T.register("bJTtX",function(e,t){var r=T("81c36");e.exports=(e,t)=>new r(e,t).minor}),T.register("lC8fv",function(e,t){var r=T("81c36");e.exports=(e,t)=>new r(e,t).patch}),T.register("kijXf",function(e,t){var r=T("32q5g");e.exports=(e,t)=>{let n=r(e,t);return n&&n.prerelease.length?n.prerelease:null}}),T.register("gmhEl",function(e,t){var r=T("81c36");e.exports=(e,t,n)=>new r(e,n).compare(new r(t,n))}),T.register("ij7he",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>r(t,e,n)}),T.register("c4l6c",function(e,t){var r=T("gmhEl");e.exports=(e,t)=>r(e,t,!0)}),T.register("dpH9i",function(e,t){var r=T("81c36");e.exports=(e,t,n)=>{let o=new r(e,n),i=new r(t,n);return o.compare(i)||o.compareBuild(i)}}),T.register("1s1Yc",function(e,t){var r=T("dpH9i");e.exports=(e,t)=>e.sort((e,n)=>r(e,n,t))}),T.register("gKjQs",function(e,t){var r=T("dpH9i");e.exports=(e,t)=>e.sort((e,n)=>r(n,e,t))}),T.register("BJ3h4",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>r(e,t,n)>0}),T.register("9gxdK",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>0>r(e,t,n)}),T.register("dgdvT",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>0===r(e,t,n)}),T.register("i11P3",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>0!==r(e,t,n)}),T.register("3JHII",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>r(e,t,n)>=0}),T.register("3ovST",function(e,t){var r=T("gmhEl");e.exports=(e,t,n)=>0>=r(e,t,n)}),T.register("jFVX1",function(e,t){var r=T("dgdvT"),n=T("i11P3"),o=T("BJ3h4"),i=T("3JHII"),s=T("9gxdK"),a=T("3ovST");e.exports=(e,t,u,l)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof u&&(u=u.version),e===u;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof u&&(u=u.version),e!==u;case"":case"=":case"==":return r(e,u,l);case"!=":return n(e,u,l);case">":return o(e,u,l);case">=":return i(e,u,l);case"<":return s(e,u,l);case"<=":return a(e,u,l);default:throw TypeError(`Invalid operator: ${t}`)}}}),T.register("81XSv",function(e,t){var r=T("81c36"),n=T("32q5g"),o=T("9kaCP"),i=o.safeRe,s=o.t;e.exports=(e,t)=>{if(e instanceof r)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let o=null;if((t=t||{}).rtl){// Find the right-most coercible string that does not share
// a terminus with a more left-ward coercible string.
// Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
//
// Walk through the string checking with a /g regexp
// Manually set the index so as to pick up overlapping matches.
// Stop when we get a match that ends at the string end, since no
// coercible string can be more right-ward without the same terminus.
let t;for(;(t=i[s.COERCERTL].exec(e))&&(!o||o.index+o[0].length!==e.length);)o&&t.index+t[0].length===o.index+o[0].length||(o=t),i[s.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;// leave it in a clean state
i[s.COERCERTL].lastIndex=-1}else o=e.match(i[s.COERCE]);return null===o?null:n(`${o[2]}.${o[3]||"0"}.${o[4]||"0"}`,t)}}),T.register("b5dJg",function(e,t){let r=Symbol("SemVer ANY");// hoisted class for cyclic dependency
class n{static get ANY(){return r}constructor(e,t){if(t=o(t),e instanceof n){if(!!t.loose===e.loose)return e;e=e.value}l("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===r?this.value="":this.value=this.operator+this.semver.version,l("comp",this)}parse(e){let t=this.options.loose?s[a.COMPARATORLOOSE]:s[a.COMPARATOR],n=e.match(t);if(!n)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==n[1]?n[1]:"","="===this.operator&&(this.operator=""),n[2]?this.semver=new c(n[2],this.options.loose):this.semver=r}toString(){return this.value}test(e){if(l("Comparator.test",e,this.options.loose),this.semver===r||e===r)return!0;if("string"==typeof e)try{e=new c(e,this.options)}catch(e){return!1}return u(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new f(e.value,t).test(this.value):""===e.operator?""===e.value||new f(this.value,t).test(e.semver):// Special cases where nothing can possibly be lower
!((t=o(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||u(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||u(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}e.exports=n;var o=T("35J2F"),i=T("9kaCP"),s=i.safeRe,a=i.t,u=T("jFVX1"),l=T("aW7Y5"),c=T("81c36"),f=T("5XMjl")}),T.register("5XMjl",function(e,t){// hoisted class for cyclic dependency
class r{constructor(e,t){if(t=i(t),e instanceof r){if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;return new r(e.raw,t)}if(e instanceof s)return(// just put it in the set and return
this.raw=e.value,this.set=[[e]],this.format(),this);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,// First reduce all whitespace as much as possible so we do not have to rely
// on potentially slow regexes like \s*. This is then stored and used for
// future error messages as well.
this.raw=e.trim().split(/\s+/).join(" "),// First, split on ||
this.set=this.raw.split("||")// map the range to a 2d array of comparators
.map(e=>this.parseRange(e.trim()))// throw out any comparator lists that are empty
// this generally means that it was not a valid range, which is allowed
// in loose mode, but will still throw if the WHOLE range is invalid.
.filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);// if we have any that are not the null set, throw out null sets.
if(this.set.length>1){// keep the first one, in case they're all null sets
let e=this.set[0];if(this.set=this.set.filter(e=>!m(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1)// if we have any that are *, then the range is just *
{for(let e of this.set)if(1===e.length&&v(e[0])){this.set=[e];break}}}this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){// memoize range parsing for performance.
// this is a very hot path, and fully deterministic.
let t=(this.options.includePrerelease&&g)|(this.options.loose&&b),r=t+":"+e,n=o.get(r);if(n)return n;let i=this.options.loose,u=i?c[f.HYPHENRANGELOOSE]:c[f.HYPHENRANGE];a("hyphen replace",e=e.replace(u,N(this.options.includePrerelease))),a("comparator trim",// `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
e=e.replace(c[f.COMPARATORTRIM],p)),a("tilde trim",// `~ 1.2.3` => `~1.2.3`
e=e.replace(c[f.TILDETRIM],h)),a("caret trim",// `^ 1.2.3` => `^1.2.3`
e=e.replace(c[f.CARETTRIM],d));// At this point, the range is completely trimmed and
// ready to be split into comparators.
let l=e.split(" ").map(e=>w(e,this.options)).join(" ").split(/\s+/)// >=0.0.0 is equivalent to *
.map(e=>k(e,this.options));i&&(l=l.filter(e=>(a("loose invalid filter",e,this.options),!!e.match(c[f.COMPARATORLOOSE])))),a("range list",l);// if any comparators are the null set, then replace with JUST null set
// if more than one comparator, remove any * comparators
// also, don't include the same comparator more than once
let y=new Map,v=l.map(e=>new s(e,this.options));for(let e of v){if(m(e))return[e];y.set(e.value,e)}y.size>1&&y.has("")&&y.delete("");let x=[...y.values()];return o.set(r,x),x}intersects(e,t){if(!(e instanceof r))throw TypeError("a Range is required");return this.set.some(r=>x(r,t)&&e.set.some(e=>x(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}// if ANY of the sets match ALL of its comparators, then pass
test(e){if(!e)return!1;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(C(this.set[t],e,this.options))return!0;return!1}}e.exports=r;var n=T("7oQtd");let o=new n({max:1e3});var i=T("35J2F"),s=T("b5dJg"),a=T("aW7Y5"),u=T("81c36"),l=T("9kaCP"),c=l.safeRe,f=l.t,p=l.comparatorTrimReplace,h=l.tildeTrimReplace,d=l.caretTrimReplace,y=T("85PoE"),g=y.FLAG_INCLUDE_PRERELEASE,b=y.FLAG_LOOSE;let m=e=>"<0.0.0-0"===e.value,v=e=>""===e.value,x=(e,t)=>{let r=!0,n=e.slice(),o=n.pop();for(;r&&n.length;)r=n.every(e=>o.intersects(e,t)),o=n.pop();return r},w=(e,t)=>(a("comp",e,t),a("caret",e=A(e,t)),a("tildes",e=_(e,t)),a("xrange",e=I(e,t)),a("stars",e=R(e,t)),e),E=e=>!e||"x"===e.toLowerCase()||"*"===e,_=(e,t)=>e.trim().split(/\s+/).map(e=>S(e,t)).join(" "),S=(e,t)=>{let r=t.loose?c[f.TILDELOOSE]:c[f.TILDE];return e.replace(r,(t,r,n,o,i)=>{let s;return a("tilde",e,t,r,n,o,i),E(r)?s="":E(n)?s=`>=${r}.0.0 <${+r+1}.0.0-0`:E(o)?s=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(a("replaceTilde pr",i),s=`>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0-0`):s=`>=${r}.${n}.${o} <${r}.${+n+1}.0-0`,a("tilde return",s),s})},A=(e,t)=>e.trim().split(/\s+/).map(e=>O(e,t)).join(" "),O=(e,t)=>{a("caret",e,t);let r=t.loose?c[f.CARETLOOSE]:c[f.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,o,i,s)=>{let u;return a("caret",e,t,r,o,i,s),E(r)?u="":E(o)?u=`>=${r}.0.0${n} <${+r+1}.0.0-0`:E(i)?u="0"===r?`>=${r}.${o}.0${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.0${n} <${+r+1}.0.0-0`:s?(a("replaceCaret pr",s),u="0"===r?"0"===o?`>=${r}.${o}.${i}-${s} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}-${s} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i}-${s} <${+r+1}.0.0-0`):(a("no pr"),u="0"===r?"0"===o?`>=${r}.${o}.${i}${n} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i} <${+r+1}.0.0-0`),a("caret return",u),u})},I=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map(e=>B(e,t)).join(" ")),B=(e,t)=>{e=e.trim();let r=t.loose?c[f.XRANGELOOSE]:c[f.XRANGE];return e.replace(r,(r,n,o,i,s,u)=>{a("xRange",e,r,n,o,i,s,u);let l=E(o),c=l||E(i),f=c||E(s);return"="===n&&f&&(n=""),// if we're including prereleases in the match, then we need
// to fix this to -0, the lowest possible prerelease value
u=t.includePrerelease?"-0":"",l?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&f?(c&&(i=0),s=0,">"===n?(// >1 => >=2.0.0
// >1.2 => >=1.3.0
n=">=",c?(o=+o+1,i=0):i=+i+1,s=0):"<="===n&&(// <=0.7.x is actually <0.8.0, since any 0.7.x should
// pass.  Similarly, <=7.x is actually <8.0.0, etc.
n="<",c?o=+o+1:i=+i+1),"<"===n&&(u="-0"),r=`${n+o}.${i}.${s}${u}`):c?r=`>=${o}.0.0${u} <${+o+1}.0.0-0`:f&&(r=`>=${o}.${i}.0${u} <${o}.${+i+1}.0-0`),a("xRange return",r),r})},R=(e,t)=>(a("replaceStars",e,t),e.trim().replace(c[f.STAR],"")),k=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?f.GTE0PRE:f.GTE0],"")),N=e=>(t,r,n,o,i,s,a,u,l,c,f,p,h)=>(r=E(n)?"":E(o)?`>=${n}.0.0${e?"-0":""}`:E(i)?`>=${n}.${o}.0${e?"-0":""}`:s?`>=${r}`:`>=${r}${e?"-0":""}`,u=E(l)?"":E(c)?`<${+l+1}.0.0-0`:E(f)?`<${l}.${+c+1}.0-0`:p?`<=${l}.${c}.${f}-${p}`:e?`<${l}.${c}.${+f+1}-0`:`<=${u}`,`${r} ${u}`.trim()),C=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){// Find the set of versions that are allowed to have prereleases
// For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
// That should allow `1.2.3-pr.2` to pass.
// However, `1.2.4-alpha.notready` should NOT be allowed,
// even though it's within the range set by the comparators.
for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==s.ANY&&e[r].semver.prerelease.length>0){let n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}// Version has a -pre, but it's not one of the ones we like.
return!1}return!0}}),T.register("7oQtd",function(e,t){var r=T("hAd0Z");let n=Symbol("max"),o=Symbol("length"),i=Symbol("lengthCalculator"),s=Symbol("allowStale"),a=Symbol("maxAge"),u=Symbol("dispose"),l=Symbol("noDisposeOnSet"),c=Symbol("lruList"),f=Symbol("cache"),p=Symbol("updateAgeOnGet"),h=()=>1,d=(e,t,r)=>{let n=e[f].get(t);if(n){let t=n.value;if(y(e,t)){if(b(e,n),!e[s])return}else r&&(e[p]&&(n.value.now=Date.now()),e[c].unshiftNode(n));return t.value}},y=(e,t)=>{if(!t||!t.maxAge&&!e[a])return!1;let r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[a]&&r>e[a]},g=e=>{if(e[o]>e[n])for(let t=e[c].tail;e[o]>e[n]&&null!==t;){// We know that we're about to delete this one, and also
// what the next least recently used key will be, so just
// go ahead and set it now.
let r=t.prev;b(e,t),t=r}},b=(e,t)=>{if(t){let r=t.value;e[u]&&e[u](r.key,r.value),e[o]-=r.length,e[f].delete(r.key),e[c].removeNode(t)}};class m{constructor(e,t,r,n,o){this.key=e,this.value=t,this.length=r,this.now=n,this.maxAge=o||0}}let v=(e,t,r,n)=>{let o=r.value;y(e,o)&&(b(e,r),e[s]||(o=void 0)),o&&t.call(n,o.value,o.key,e)};e.exports=// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw TypeError("max must be a non-negative number");this[n]=e.max||1/0;let t=e.length||h;if(this[i]="function"!=typeof t?h:t,this[s]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw TypeError("maxAge must be a number");this[a]=e.maxAge||0,this[u]=e.dispose,this[l]=e.noDisposeOnSet||!1,this[p]=e.updateAgeOnGet||!1,this.reset()}// resize the cache when the max changes.
set max(e){if("number"!=typeof e||e<0)throw TypeError("max must be a non-negative number");this[n]=e||1/0,g(this)}get max(){return this[n]}set allowStale(e){this[s]=!!e}get allowStale(){return this[s]}set maxAge(e){if("number"!=typeof e)throw TypeError("maxAge must be a non-negative number");this[a]=e,g(this)}get maxAge(){return this[a]}// resize the cache when the lengthCalculator changes.
set lengthCalculator(e){"function"!=typeof e&&(e=h),e!==this[i]&&(this[i]=e,this[o]=0,this[c].forEach(e=>{e.length=this[i](e.value,e.key),this[o]+=e.length})),g(this)}get lengthCalculator(){return this[i]}get length(){return this[o]}get itemCount(){return this[c].length}rforEach(e,t){t=t||this;for(let r=this[c].tail;null!==r;){let n=r.prev;v(this,e,r,t),r=n}}forEach(e,t){t=t||this;for(let r=this[c].head;null!==r;){let n=r.next;v(this,e,r,t),r=n}}keys(){return this[c].toArray().map(e=>e.key)}values(){return this[c].toArray().map(e=>e.value)}reset(){this[u]&&this[c]&&this[c].length&&this[c].forEach(e=>this[u](e.key,e.value)),this[f]=new Map// hash of items by key
,this[c]=new r// list of items in order of use recency
,this[o]=0// length of items in the list
}dump(){return this[c].map(e=>!y(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[c]}set(e,t,r){if((r=r||this[a])&&"number"!=typeof r)throw TypeError("maxAge must be a number");let s=r?Date.now():0,p=this[i](t,e);if(this[f].has(e)){if(p>this[n])return b(this,this[f].get(e)),!1;let i=this[f].get(e),a=i.value;return this[u]&&!this[l]&&this[u](e,a.value),a.now=s,a.maxAge=r,a.value=t,this[o]+=p-a.length,a.length=p,this.get(e),g(this),!0}let h=new m(e,t,p,s,r);return(// oversized objects fall out of cache automatically.
h.length>this[n]?(this[u]&&this[u](e,t),!1):(this[o]+=h.length,this[c].unshift(h),this[f].set(e,this[c].head),g(this),!0))}has(e){if(!this[f].has(e))return!1;let t=this[f].get(e).value;return!y(this,t)}get(e){return d(this,e,!0)}peek(e){return d(this,e,!1)}pop(){let e=this[c].tail;return e?(b(this,e),e.value):null}del(e){b(this,this[f].get(e))}load(e){// reset the cache
this.reset();let t=Date.now();// A previous serialized cache has the most recent items first
for(let r=e.length-1;r>=0;r--){let n=e[r],o=n.e||0;if(0===o)this.set(n.k,n.v);else{let e=o-t;// dont add already expired items
e>0&&this.set(n.k,n.v,e)}}}prune(){this[f].forEach((e,t)=>d(this,t,!1))}}}),T.register("hAd0Z",function(e,t){function r(e){var t=this;if(t instanceof r||(t=new r),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach(function(e){t.push(e)});else if(arguments.length>0)for(var n=0,o=arguments.length;n<o;n++)t.push(arguments[n]);return t}function n(e,t,r,o){if(!(this instanceof n))return new n(e,t,r,o);this.list=o,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=r,r.Node=n,r.create=r,r.prototype.removeNode=function(e){if(e.list!==this)throw Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},r.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},r.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},r.prototype.push=function(){for(var e,t=0,r=arguments.length;t<r;t++)e=arguments[t],this.tail=new n(e,this.tail,null,this),this.head||(this.head=this.tail),this.length++;return this.length},r.prototype.unshift=function(){for(var e,t=0,r=arguments.length;t<r;t++)e=arguments[t],this.head=new n(e,null,this.head,this),this.tail||(this.tail=this.head),this.length++;return this.length},r.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},r.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},r.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,n=0;null!==r;n++)e.call(t,r.value,n,this),r=r.next},r.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,n=this.length-1;null!==r;n--)e.call(t,r.value,n,this),r=r.prev},r.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},r.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},r.prototype.map=function(e,t){t=t||this;for(var n=new r,o=this.head;null!==o;)n.push(e.call(t,o.value,this)),o=o.next;return n},r.prototype.mapReverse=function(e,t){t=t||this;for(var n=new r,o=this.tail;null!==o;)n.push(e.call(t,o.value,this)),o=o.prev;return n},r.prototype.reduce=function(e,t){var r,n=this.head;if(arguments.length>1)r=t;else if(this.head)n=this.head.next,r=this.head.value;else throw TypeError("Reduce of empty list with no initial value");for(var o=0;null!==n;o++)r=e(r,n.value,o),n=n.next;return r},r.prototype.reduceReverse=function(e,t){var r,n=this.tail;if(arguments.length>1)r=t;else if(this.tail)n=this.tail.prev,r=this.tail.value;else throw TypeError("Reduce of empty list with no initial value");for(var o=this.length-1;null!==n;o--)r=e(r,n.value,o),n=n.prev;return r},r.prototype.toArray=function(){for(var e=Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},r.prototype.toArrayReverse=function(){for(var e=Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},r.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new r;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=0,i=this.head;null!==i&&o<e;o++)i=i.next;for(;null!==i&&o<t;o++,i=i.next)n.push(i.value);return n},r.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new r;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=this.length,i=this.tail;null!==i&&o>t;o--)i=i.prev;for(;null!==i&&o>e;o--,i=i.prev)n.push(i.value);return n},r.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var o=0,i=this.head;null!==i&&o<e;o++)i=i.next;for(var s=[],o=0;i&&o<t;o++)s.push(i.value),i=this.removeNode(i);null===i&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var o=0;o<r.length;o++)i=function(e,t,r){var o=t===e.head?new n(r,null,t,e):new n(r,t,t.next,e);return null===o.next&&(e.tail=o),null===o.prev&&(e.head=o),e.length++,o}(this,i,r[o]);return s},r.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var n=r.prev;r.prev=r.next,r.next=n}return this.head=t,this.tail=e,this};try{// add if support for Symbol.iterator is present
T("aXMUI")(r)}catch(e){}}),T.register("aXMUI",function(e,t){e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}}),T.register("htzzM",function(e,t){var r=T("5XMjl");e.exports=(e,t,n)=>{try{t=new r(t,n)}catch(e){return!1}return t.test(e)}}),T.register("1MUKh",function(e,t){var r=T("5XMjl");e.exports=(e,t)=>new r(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))}),T.register("6yKak",function(e,t){var r=T("81c36"),n=T("5XMjl");e.exports=(e,t,o)=>{let i=null,s=null,a=null;try{a=new n(t,o)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(!i||-1===s.compare(e))&&(// compare(max, v, true)
i=e,s=new r(i,o))}),i}}),T.register("hR7mJ",function(e,t){var r=T("81c36"),n=T("5XMjl");e.exports=(e,t,o)=>{let i=null,s=null,a=null;try{a=new n(t,o)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(!i||1===s.compare(e))&&(// compare(min, v, true)
i=e,s=new r(i,o))}),i}}),T.register("a9As8",function(e,t){var r=T("81c36"),n=T("5XMjl"),o=T("BJ3h4");e.exports=(e,t)=>{e=new n(e,t);let i=new r("0.0.0");if(e.test(i)||(i=new r("0.0.0-0"),e.test(i)))return i;i=null;for(let t=0;t<e.set.length;++t){let n=e.set[t],s=null;n.forEach(e=>{// Clone to avoid manipulating the comparator's semver object.
let t=new r(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();/* fallthrough */case"":case">=":(!s||o(t,s))&&(s=t);break;case"<":case"<=":break;/* istanbul ignore next */default:throw Error(`Unexpected operation: ${e.operator}`)}}),s&&(!i||o(i,s))&&(i=s)}return i&&e.test(i)?i:null}}),T.register("gz18e",function(e,t){var r=T("5XMjl");e.exports=(e,t)=>{try{// Return '*' instead of '' so that truthiness works.
// This will throw if it's invalid anyway
return new r(e,t).range||"*"}catch(e){return null}}}),T.register("UOZA2",function(e,t){var r=T("81c36"),n=T("b5dJg");let{ANY:o}=n;var i=T("5XMjl"),s=T("htzzM"),a=T("BJ3h4"),u=T("9gxdK"),l=T("3ovST"),c=T("3JHII");e.exports=(e,t,f,p)=>{let h,d,y,g,b;switch(e=new r(e,p),t=new i(t,p),f){case">":h=a,d=l,y=u,g=">",b=">=";break;case"<":h=u,d=c,y=a,g="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}// If it satisfies the range it is not outside
if(s(e,t,p))return!1;// From now on, variable terms are as if we're in "gtr" mode.
// but note that everything is flipped for the "ltr" function.
for(let r=0;r<t.set.length;++r){let i=t.set[r],s=null,a=null;// If the edge version comparator has a operator then our version
// isn't outside it
if(i.forEach(e=>{e.semver===o&&(e=new n(">=0.0.0")),s=s||e,a=a||e,h(e.semver,s.semver,p)?s=e:y(e.semver,a.semver,p)&&(a=e)}),s.operator===g||s.operator===b||(!a.operator||a.operator===g)&&d(e,a.semver)||a.operator===b&&y(e,a.semver))return!1}return!0}}),T.register("fEi7J",function(e,t){// Determine if version is greater than all the versions possible in the range.
var r=T("UOZA2");e.exports=(e,t,n)=>r(e,t,">",n)}),T.register("DtAmL",function(e,t){var r=T("UOZA2");e.exports=(e,t,n)=>r(e,t,"<",n)}),T.register("h9jxk",function(e,t){var r=T("5XMjl");e.exports=(e,t,n)=>(e=new r(e,n),t=new r(t,n),e.intersects(t,n))}),T.register("6qFz3",function(e,t){// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
var r=T("htzzM"),n=T("gmhEl");e.exports=(e,t,o)=>{let i=[],s=null,a=null,u=e.sort((e,t)=>n(e,t,o));for(let e of u){let n=r(e,t,o);n?(a=e,s||(s=e)):(a&&i.push([s,a]),a=null,s=null)}s&&i.push([s,null]);let l=[];for(let[e,t]of i)e===t?l.push(e):t||e!==u[0]?t?e===u[0]?l.push(`<=${t}`):l.push(`${e} - ${t}`):l.push(`>=${e}`):l.push("*");let c=l.join(" || "),f="string"==typeof t.raw?t.raw:String(t);return c.length<f.length?c:t}}),T.register("bFvME",function(e,t){var r=T("5XMjl"),n=T("b5dJg");let{ANY:o}=n;var i=T("htzzM"),s=T("gmhEl");let a=[new n(">=0.0.0-0")],u=[new n(">=0.0.0")],l=(e,t,r)=>{let n,l,p,h,d,y,g;if(e===t)return!0;if(1===e.length&&e[0].semver===o){if(1===t.length&&t[0].semver===o)return!0;e=r.includePrerelease?a:u}if(1===t.length&&t[0].semver===o){if(r.includePrerelease)return!0;t=u}let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?n=c(n,t,r):"<"===t.operator||"<="===t.operator?l=f(l,t,r):b.add(t.semver);if(b.size>1||n&&l&&((p=s(n.semver,l.semver,r))>0||0===p&&(">="!==n.operator||"<="!==l.operator)))return null;// will iterate one or zero times
for(let e of b){if(n&&!i(e,String(n),r)||l&&!i(e,String(l),r))return null;for(let n of t)if(!i(e,String(n),r))return!1;return!0}// if the subset has a prerelease, we need a comparator in the superset
// with the same tuple and a prerelease, or it's not a subset
let m=!!l&&!r.includePrerelease&&!!l.semver.prerelease.length&&l.semver,v=!!n&&!r.includePrerelease&&!!n.semver.prerelease.length&&n.semver;for(let e of(m&&1===m.prerelease.length&&"<"===l.operator&&0===m.prerelease[0]&&(m=!1),t)){if(g=g||">"===e.operator||">="===e.operator,y=y||"<"===e.operator||"<="===e.operator,n){if(v&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===v.major&&e.semver.minor===v.minor&&e.semver.patch===v.patch&&(v=!1),">"===e.operator||">="===e.operator){if((h=c(n,e,r))===e&&h!==n)return!1}else if(">="===n.operator&&!i(n.semver,String(e),r))return!1}if(l){if(m&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===m.major&&e.semver.minor===m.minor&&e.semver.patch===m.patch&&(m=!1),"<"===e.operator||"<="===e.operator){if((d=f(l,e,r))===e&&d!==l)return!1}else if("<="===l.operator&&!i(l.semver,String(e),r))return!1}if(!e.operator&&(l||n)&&0!==p)return!1}return(!n||!y||!!l||0===p)&&(!l||!g||!!n||0===p)&&!v&&!m},c=(e,t,r)=>{if(!e)return t;let n=s(e.semver,t.semver,r);return n>0?e:n<0?t:">"===t.operator&&">="===e.operator?t:e},f=(e,t,r)=>{if(!e)return t;let n=s(e.semver,t.semver,r);return n<0?e:n>0?t:"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,n={})=>{if(e===t)return!0;e=new r(e,n),t=new r(t,n);let o=!1;r:for(let r of e.set){for(let e of t.set){let t=l(r,e,n);if(o=o||null!==t,t)continue r}// the null set is a subset of everything, but null simple ranges in
// a complex range should be ignored.  so if we saw a non-null range,
// then we know this isn't a subset, but if EVERY simple range was null,
// then it is a subset.
if(o)return!1}return!0}}),T.register("7KKmD",function(e,t){var r=T("awmEs").Buffer,n=T("foEdZ"),o=T("gS4xp");/**
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */function i(e){var t=e;// eslint-disable-line
if("string"!=typeof t)throw Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof t+", while padToEven.");return t.length%2&&(t="0"+t),t}/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */function s(e){return"0x"+e.toString(16)}e.exports={arrayContainsArray:/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */function(e,t,r){if(!0!==Array.isArray(e))throw Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof e+"'");if(!0!==Array.isArray(t))throw Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof t+"'");return t[!!r&&"some"||"every"](function(t){return e.indexOf(t)>=0})},intToBuffer:/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */function(e){var t=s(e);return new r(i(t.slice(2)),"hex")},getBinarySize:/**
 * Get the binary size of a string
 * @param {String} str
 * @return {Number}
 */function(e){if("string"!=typeof e)throw Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof e+"'.");return r.byteLength(e,"utf8")},isHexPrefixed:n,stripHexPrefix:o,padToEven:i,intToHex:s,fromAscii:/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */function(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r).toString(16);t+=n.length<2?"0"+n:n}return"0x"+t},fromUtf8:/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */function(e){return"0x"+i(new r(e,"utf8").toString("hex")).replace(/^0+|0+$/g,"")},toAscii:/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */function(e){var t="",r=0,n=e.length;// eslint-disable-line
for("0x"===e.substring(0,2)&&(r=2);r<n;r+=2)t+=String.fromCharCode(parseInt(e.substr(r,2),16));return t},toUtf8:/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */function(e){return new r(i(o(e).replace(/^0+|0+$/g,"")),"hex").toString("utf8")},getKeys:/**
 * getKeys([{a: 1, b: 2}, {a: 3, b: 4}], 'a') => [1, 3]
 *
 * @method getKeys get specific key from inner object array of objects
 * @param {String} params
 * @param {String} key
 * @param {Boolean} allowEmpty
 * @returns {Array} output just a simple array of output keys
 */function(e,t,r){if(!Array.isArray(e))throw Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof e+"'");if("string"!=typeof t)throw Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof t+"'.");for(var n=[],o=0;o<e.length;o++){// eslint-disable-line
var i=e[o][t];// eslint-disable-line
if(r&&!i)i="";else if("string"!=typeof i)throw Error("invalid abi");n.push(i)}return n},isHexString:/**
 * Is the string a hex string.
 *
 * @method check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length
 * @returns {Boolean} output the string is a hex string
 */function(e,t){return"string"==typeof e&&!!e.match(/^0x[0-9A-Fa-f]*$/)&&(!t||e.length===2+2*t)}}}),T.register("foEdZ",function(e,t){/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param {String} str the string input value
 * @return {Boolean} a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */e.exports=function(e){if("string"!=typeof e)throw Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof e+", while checking isHexPrefixed.");return"0x"===e.slice(0,2)}}),T.register("gS4xp",function(e,t){var r=T("foEdZ");/**
 * Removes '0x' from a given `String` is present
 * @param {String} str the string value
 * @return {String|Optional} a string by pass if necessary
 */e.exports=function(e){return"string"!=typeof e?e:r(e)?e.slice(2):e}}),T.register("l59Bh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.recoverTypedSignature=e.exports.signTypedData=e.exports.typedSignatureHash=e.exports.TypedDataUtils=e.exports.TYPED_MESSAGE_SCHEMA=e.exports.SignTypedDataVersion=void 0;var r,n,o=T("3UOJ6"),i=T("8RbqX"),s=T("9zfLI"),a=T("1iBuG");T("eLN1L");var u=T("dfzmU"),l=T("3GXub"),c=T("8Qm9Q"),f=T("JAeV7"),p=T("2ztKZ");/**
 * Validate that the given value is a valid version string.
 *
 * @param version - The version value to validate.
 * @param allowedVersions - A list of allowed versions. If omitted, all versions are assumed to be
 * allowed.
 */function h(e,t){if(Object.keys(n).includes(e)){if(t&&!t.includes(e))throw Error(`SignTypedDataVersion not allowed: '${e}'. Allowed versions are: ${t.join(", ")}`)}else throw Error(`Invalid version: '${e}'`)}/**
 * Parse a string, number, or bigint value into a `Uint8Array`.
 *
 * @param type - The type of the value.
 * @param value - The value to parse.
 * @returns The parsed value.
 */function d(e,t){(0,u.assert)(null!==t,`Unable to encode value: Invalid number. Expected a valid number value, but received "${t}".`);let r=BigInt(t),n=(0,s.getLength)(e),o=BigInt(2)**BigInt(n)-BigInt(1);return(// Note that this is not accurate, since the actual maximum value for unsigned
// integers is `2 ^ (length - 1) - 1`, but this is required for backwards
// compatibility with the old implementation.
(0,u.assert)(r>=-o&&r<=o,`Unable to encode value: Number "${t}" is out of range for type "${e}".`),r)}/**
 * Encodes an object by encoding and concatenating each of its members.
 *
 * @param primaryType - The root type.
 * @param data - The object to encode.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns An encoded representation of an object.
 */function y(e,t,r,s){h(s,[n.V3,n.V4]);let u=["bytes32"],p=[v(e,r)];for(let g of r[e]){if(s===n.V3&&void 0===t[g.name])continue;let[e,b]=/**
 * Encode a single field.
 *
 * @param types - All type definitions.
 * @param name - The name of the field to encode.
 * @param type - The type of the field being encoded.
 * @param value - The value to encode.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns Encoded representation of the field.
 */function e(t,r,s,u,p){if(h(p,[n.V3,n.V4]),void 0!==t[s])return["bytes32",// TODO: return Buffer, remove string from return type
p===n.V4&&null// eslint-disable-line no-eq-null
==u?"0x0000000000000000000000000000000000000000000000000000000000000000":(0,o.arrToBufArr)((0,f.keccak256)(y(s,u,t,p)))];// `function` is supported in `@metamask/abi-utils`, but not allowed by
// EIP-712, so we throw an error here.
if("function"===s)throw Error('Unsupported or invalid type: "function"');if(void 0===u)throw Error(`missing value for field ${r} of type ${s}`);if("address"===s){if("number"==typeof u)return["address",(0,a.padStart)((0,l.numberToBytes)(u),20)];if((0,c.isStrictHexString)(u))return["address",(0,c.add0x)(u)];if("string"==typeof u)return["address",/**
 * Parse an address string to a `Uint8Array`. The behaviour of this is quite
 * strange, in that it does not parse the address as hexadecimal string, nor as
 * UTF-8. It does some weird stuff with the string and char codes, and then
 * returns the result as a `Uint8Array`.
 *
 * This is based on the old `ethereumjs-abi` implementation, which essentially
 * calls `new BN(address, 10)` on the address string, the equivalent of calling
 * `parseInt(address, 10)` in JavaScript. This is not a valid way to parse an
 * address and would result in `NaN` in plain JavaScript, but it is the
 * behaviour of the old implementation, and so we must preserve it for backwards
 * compatibility.
 *
 * @param address - The address to parse.
 * @returns The parsed address.
 */(function(e){let t=BigInt(0);for(let r=0;r<e.length;r++){let n=BigInt(e.charCodeAt(r)-48);t*=BigInt(10),n>=49?t+=n-BigInt(49)+BigInt(10):n>=17?t+=n-BigInt(17)+BigInt(10):t+=n}return(0,a.padStart)((0,l.bigIntToBytes)(t),20)})(u).subarray(0,20)]}if("bool"===s)return["bool",!!u];if("bytes"===s)return"number"==typeof u?u=(0,l.numberToBytes)(u):(0,c.isStrictHexString)(u)?u=(0,l.hexToBytes)(u):"string"==typeof u&&(u=(0,l.stringToBytes)(u)),["bytes32",(0,o.arrToBufArr)((0,f.keccak256)(u))];if(s.startsWith("bytes")&&"bytes"!==s&&!s.includes("["))return"number"==typeof u?u<0?["bytes32",new Uint8Array(32)]:["bytes32",(0,l.bigIntToBytes)(BigInt(u))]:(0,c.isStrictHexString)(u)?["bytes32",(0,l.hexToBytes)(u)]:["bytes32",u];if(s.startsWith("int")&&!s.includes("[")){let e=d(s,u);return e>=BigInt(0)?["uint256",e]:["int256",e]}if("string"===s)return u="number"==typeof u?(0,l.numberToBytes)(u):(0,l.stringToBytes)(null!=u?u:""),["bytes32",(0,o.arrToBufArr)((0,f.keccak256)(u))];if(s.endsWith("]")){if(p===n.V3)throw Error("Arrays are unimplemented in encodeData; use V4 extension");let a=s.slice(0,s.lastIndexOf("[")),l=u.map(n=>e(t,r,a,n,p));return["bytes32",(0,o.arrToBufArr)((0,f.keccak256)((0,i.encode)(l.map(([e])=>e),l.map(([,e])=>e))))]}return[s,u]}(r,g.name,g.type,t[g.name],s);u.push(e),p.push(b)}return(0,o.arrToBufArr)((0,i.encode)(u,p))}/**
 * Encodes the type of an object by encoding a comma delimited list of its members.
 *
 * @param primaryType - The root type to encode.
 * @param types - Type definitions for all types included in the message.
 * @returns An encoded representation of the primary type.
 */function g(e,t){let r="",n=b(e,t);n.delete(e);let o=[e,...Array.from(n).sort()];for(let e of o){let n=t[e];if(!n)throw Error(`No type definition specified: ${e}`);r+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`}return r}/**
 * Finds all types within a type definition object.
 *
 * @param primaryType - The root type.
 * @param types - Type definitions for all types included in the message.
 * @param results - The current set of accumulated types.
 * @returns The set of all types found in the type definition.
 */function b(e,t,r=new Set){if("string"!=typeof e)throw Error(`Invalid findTypeDependencies input ${JSON.stringify(e)}`);let n=e.match(/^\w*/u);if([e]=n,r.has(e)||void 0===t[e])return r;for(let n of(r.add(e),t[e]))b(n.type,t,r);return r}/**
 * Hashes an object.
 *
 * @param primaryType - The root type.
 * @param data - The object to hash.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the object.
 */function m(e,t,r,i){h(i,[n.V3,n.V4]);let s=y(e,t,r,i),a=(0,f.keccak256)(s),u=(0,o.arrToBufArr)(a);return u}/**
 * Hashes the type of an object.
 *
 * @param primaryType - The root type to hash.
 * @param types - Type definitions for all types included in the message.
 * @returns The hash of the object type.
 */function v(e,t){let r=(0,l.stringToBytes)(g(e,t));return(0,o.arrToBufArr)((0,f.keccak256)(r))}/**
 * Removes properties from a message object that are not defined per EIP-712.
 *
 * @param data - The typed message object.
 * @returns The typed message object with only allowed fields.
 */function x(t){let r={};for(let n in e.exports.TYPED_MESSAGE_SCHEMA.properties)t[n]&&(r[n]=t[n]);return"types"in r&&(r.types=Object.assign({EIP712Domain:[]},r.types)),r}/**
 * Create a EIP-712 Domain Hash.
 * This hash is used at the top of the EIP-712 encoding.
 *
 * @param typedData - The typed message to hash.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the domain object.
 */function w(e,t){h(t,[n.V3,n.V4]);let r=x(e),{domain:o}=r,i={EIP712Domain:r.types.EIP712Domain};return m("EIP712Domain",o,i,t)}/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The hash representing the type of the provided message.
 */function E(e){let t=Error("Expect argument to be non-empty array");if("object"!=typeof e||!("length"in e)||!e.length)throw t;let r=e.map(({name:e,type:t,value:r})=>{// Handle an edge case with `address[]` types.
if("address[]"===t)return{name:e,type:"bytes32[]",value:r.map(e=>"number"==typeof e?(0,a.padStart)((0,l.numberToBytes)(e),32):(0,c.isStrictHexString)(e)?(0,a.padStart)((0,l.hexToBytes)(e).subarray(0,32),32):e instanceof Uint8Array?(0,a.padStart)(e.subarray(0,32),32):e)};// Handle an edge case with `intN[]` types.
if(t.startsWith("int")&&(0,s.isArrayType)(t)){let[n,o]=(0,s.getArrayType)(t);return{name:e,type:`bytes32[${null!=o?o:""}]`,value:r.map(e=>{if("string"==typeof e||"number"==typeof e||"bigint"==typeof e){let t=d(n,e);if(t>=BigInt(0))return(0,a.padStart)((0,l.bigIntToBytes)(t),32);let r=(0,s.getLength)(n),o=BigInt.asIntN(r,t);return(0,l.signedBigIntToBytes)(o,32)}return e})}}return{name:e,type:t,value:/**
 * Normalize a value, so that `@metamask/abi-utils` can handle it. This
 * matches the behaviour of the `ethereumjs-abi` library.
 *
 * @param type - The type of the value to normalize.
 * @param value - The value to normalize.
 * @returns The normalized value.
 */function e(t,r){if((0,s.isArrayType)(t)&&Array.isArray(r)){let[n]=(0,s.getArrayType)(t);return r.map(t=>e(n,t))}if("address"===t){if("number"==typeof r)return(0,a.padStart)((0,l.numberToBytes)(r),20);if((0,c.isStrictHexString)(r))return(0,a.padStart)((0,l.hexToBytes)(r).subarray(0,20),20);if(r instanceof Uint8Array)return(0,a.padStart)(r.subarray(0,20),20)}if("bool"===t)return!!r;if(t.startsWith("bytes")&&"bytes"!==t){let e=(0,s.getByteLength)(t);if("number"==typeof r)return r<0?new Uint8Array:(0,l.numberToBytes)(r).subarray(0,e);if((0,c.isStrictHexString)(r))return(0,l.hexToBytes)(r).subarray(0,e);if(r instanceof Uint8Array)return r.subarray(0,e)}if(t.startsWith("uint")&&"number"==typeof r)return Math.abs(r);if(t.startsWith("int")&&"number"==typeof r){let e=(0,s.getLength)(t);return BigInt.asIntN(e,BigInt(r))}return r}(t,r)}}),n=r.map(e=>"bytes"!==e.type?e.value:(0,p.legacyToBuffer)(e.value)),u=r.map(e=>{if("function"===e.type)throw Error('Unsupported or invalid type: "function"');return e.type}),h=e.map(e=>{if(!e.name)throw t;return`${e.type} ${e.name}`});return(0,o.arrToBufArr)((0,f.keccak256)((0,i.encodePacked)(["bytes32","bytes32"],[(0,f.keccak256)((0,i.encodePacked)(["string[]"],[h],!0)),(0,f.keccak256)((0,i.encodePacked)(u,n,!0))])))}(r=n=e.exports.SignTypedDataVersion||(e.exports.SignTypedDataVersion={})).V1="V1",r.V3="V3",r.V4="V4",e.exports.TYPED_MESSAGE_SCHEMA={type:"object",properties:{types:{type:"object",additionalProperties:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"}},required:["name","type"]}}},primaryType:{type:"string"},domain:{type:"object"},message:{type:"object"}},required:["types","primaryType","domain","message"]},/**
 * A collection of utility functions used for signing typed data.
 */e.exports.TypedDataUtils={encodeData:y,encodeType:g,findTypeDependencies:b,hashStruct:m,hashType:v,sanitizeData:x,eip712Hash:/**
 * Hash a typed message according to EIP-712. The returned message starts with the EIP-712 prefix,
 * which is "1901", followed by the hash of the domain separator, then the data (if any).
 * The result is hashed again and returned.
 *
 * This function does not sign the message. The resulting hash must still be signed to create an
 * EIP-712 signature.
 *
 * @param typedData - The typed message to hash.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the typed message.
 */function(e,t){h(t,[n.V3,n.V4]);let r=x(e),i=[(0,l.hexToBytes)("1901")];return i.push(w(e,t)),"EIP712Domain"!==r.primaryType&&i.push(m(r.primaryType,r.message,r.types,t)),(0,o.arrToBufArr)((0,f.keccak256)((0,l.concatBytes)(i)))},eip712DomainHash:w},e.exports.typedSignatureHash=/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The '0x'-prefixed hex encoded hash representing the type of the provided message.
 */function(e){let t=E(e);return(0,l.bytesToHex)(t)},e.exports.signTypedData=/**
 * Sign typed data according to EIP-712. The signing differs based upon the `version`.
 *
 * V1 is based upon [an early version of
 * EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), except that arrays and
 * recursive data structures are not supported.
 *
 * V4 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), and includes full support of
 * arrays and recursive data structures.
 *
 * @param options - The signing options.
 * @param options.privateKey - The private key to sign with.
 * @param options.data - The typed data to sign.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex encoded signature.
 */function({privateKey:t,data:r,version:i}){if(h(i),(0,p.isNullish)(r))throw Error("Missing data parameter");if((0,p.isNullish)(t))throw Error("Missing private key parameter");let s=i===n.V1?E(r):e.exports.TypedDataUtils.eip712Hash(r,i),a=(0,o.ecsign)(s,t);return(0,p.concatSig)((0,o.arrToBufArr)((0,l.bigIntToBytes)(a.v)),a.r,a.s)},e.exports.recoverTypedSignature=/**
 * Recover the address of the account that created the given EIP-712
 * signature. The version provided must match the version used to
 * create the signature.
 *
 * @param options - The signature recovery options.
 * @param options.data - The typed data that was signed.
 * @param options.signature - The '0x-prefixed hex encoded message signature.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex address of the signer.
 */function({data:t,signature:r,version:i}){if(h(i),(0,p.isNullish)(t))throw Error("Missing data parameter");if((0,p.isNullish)(r))throw Error("Missing signature parameter");let s=i===n.V1?E(t):e.exports.TypedDataUtils.eip712Hash(t,i),a=(0,p.recoverPublicKey)(s,r),u=(0,o.publicToAddress)(a);return(0,l.bytesToHex)(u)}}),T.register("8RbqX",function(e,t){var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),n(T("e9vMY"),e.exports),n(T("fw7ZV"),e.exports),n(T("dIALA"),e.exports)}),T.register("e9vMY",function(e,t){// ESLint gets confused by the nested list and tables in the docs, so we disable
// the rule for this file.
/* eslint-disable jsdoc/check-indentation, jsdoc/match-description */Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.decodeSingle=e.exports.decode=e.exports.encodePacked=e.exports.encodeSingle=e.exports.encode=void 0,T("eLN1L");var r=T("8IOvN"),n=T("dfzmU"),o=T("fw7ZV"),i=T("3gK6z");e.exports.encode=(e,t,r,n)=>{try{return(0,i.pack)({types:e,values:t,packed:r,tight:n})}catch(e){if(e instanceof o.ParserError)throw new o.ParserError(`Unable to encode value: ${e.message}`,e);throw new o.ParserError(`An unexpected error occurred: ${(0,o.getErrorMessage)(e)}`,e)}},e.exports.encodeSingle=(t,r)=>(0,e.exports.encode)([t],[r]),e.exports.encodePacked=(t,r,n)=>(0,e.exports.encode)(t,r,!0,n),e.exports.decode=(e,t)=>{let n=(0,r.createBytes)(t);try{return(0,i.unpack)(e,n)}catch(e){if(e instanceof o.ParserError)throw new o.ParserError(`Unable to decode value: ${e.message}`,e);throw new o.ParserError(`An unexpected error occurred: ${(0,o.getErrorMessage)(e)}`,e)}},e.exports.decodeSingle=(t,r)=>{let i=(0,e.exports.decode)([t],r);return(0,n.assert)(1===i.length,new o.ParserError("Decoded value array has unexpected length.")),i[0]}}),T.register("fw7ZV",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ParserError=e.exports.getErrorStack=e.exports.getErrorMessage=void 0,T("eLN1L");var r=T("1Wspu");e.exports.getErrorMessage=e=>"string"==typeof e?e:e instanceof Error||(0,r.isObject)(e)&&(0,r.hasProperty)(e,"message")&&"string"==typeof e.message?e.message:"Unknown error.",e.exports.getErrorStack=e=>{if(e instanceof Error)return e.stack},e.exports.ParserError=/**
 * An error that is thrown when the ABI encoder or decoder encounters an
 * issue.
 */class extends Error{constructor(t,r){super(t),this.name="ParserError";let n=(0,e.exports.getErrorStack)(r);n&&(this.stack=n)}}}),T.register("3gK6z",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.unpack=e.exports.pack=e.exports.isDynamicParser=e.exports.getParser=void 0,T("eLN1L");var r=T("dfzmU"),n=T("3GXub"),o=T("fw7ZV"),i=T("kooPo"),s=T("9zfLI"),a=T("1iBuG");e.exports.getParser=e=>{let t={address:s.address,array:s.array,bool:s.bool,bytes:s.bytes,fixedBytes:s.fixedBytes,function:s.fn,number:s.number,string:s.string,tuple:s.tuple},r=t[e];if(r)return r;let n=Object.values(t).find(t=>t.isType(e));if(n)return n;throw new o.ParserError(`The type "${e}" is not supported.`)},e.exports.isDynamicParser=(e,t)=>{let{isDynamic:r}=e;return"function"==typeof r?r(t):r},e.exports.pack=({types:t,values:i,packed:s=!1,tight:u=!1,arrayPacked:l=!1,byteArray:c=new Uint8Array})=>{(0,r.assert)(t.length===i.length,new o.ParserError(`The number of types (${t.length}) does not match the number of values (${i.length}).`));let{staticBuffer:f,dynamicBuffer:p,pointers:h}=t.reduce(({staticBuffer:t,dynamicBuffer:r,pointers:o},a,c)=>{let f=(0,e.exports.getParser)(a),p=i[c];// If packed mode is enabled, we can skip the dynamic check, as all
// values are encoded in the static buffer.
if(s||l||!(0,e.exports.isDynamicParser)(f,a))return{staticBuffer:f.encode({buffer:t,value:p,type:a,packed:s,tight:u}),dynamicBuffer:r,pointers:o};let h=(0,n.concatBytes)([t,new Uint8Array(32)]),d=f.encode({buffer:r,value:p,type:a,packed:s,tight:u});return{staticBuffer:h,dynamicBuffer:d,pointers:[...o,{position:t.length,pointer:r.length}]}},{staticBuffer:new Uint8Array,dynamicBuffer:new Uint8Array,pointers:[]});// If packed mode is enabled, there shouldn't be any dynamic values.
(0,r.assert)(!s&&!l||0===p.length,new o.ParserError("Invalid pack state."));let d=f.length,y=h.reduce((e,{pointer:t,position:r})=>{let o=(0,a.padStart)((0,n.numberToBytes)(d+t));return(0,a.set)(e,o,r)},f);return(0,n.concatBytes)([c,y,p])},e.exports.unpack=(t,s)=>{let a=(0,i.iterate)(s);return t.map(t=>{let{value:{value:i,skip:u},done:l}=a.next();(0,r.assert)(!l,new o.ParserError(`The encoded value is invalid for the provided types. Reached end of buffer while attempting to parse "${t}".`));let c=(0,e.exports.getParser)(t),f=(0,e.exports.isDynamicParser)(c,t);if(f){let e=(0,n.bytesToNumber)(i.subarray(0,32)),r=s.subarray(e);return c.decode({type:t,value:r,skip:u})}return c.decode({type:t,value:i,skip:u})})}}),T.register("kooPo",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.iterate=void 0,T("eLN1L");var r=T("dfzmU");/**
 * Iterate over a buffer with the specified size. This will yield a part of the
 * buffer starting at an increment of the specified size, until the end of the
 * buffer is reached.
 *
 * Calling the `skip` function will make it skip the specified number of bytes.
 *
 * @param buffer - The buffer to iterate over.
 * @param size - The number of bytes to iterate with.
 * @returns An iterator that yields the parts of the byte array.
 * @yields The parts of the byte array.
 */let n=function*(e,t=32){for(let n=0;n<e.length;n+=t){let o=e=>{(0,r.assert)(e>=0,"Cannot skip a negative number of bytes."),(0,r.assert)(e%t==0,"Length must be a multiple of the size."),n+=e},i=e.subarray(n);yield{skip:o,value:i}}return{skip:()=>void 0,value:new Uint8Array}};e.exports.iterate=n}),T.register("9zfLI",function(e,t){var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),n(T("jIAJh"),e.exports),n(T("9LJxE"),e.exports),n(T("5V0tK"),e.exports),n(T("fEDKV"),e.exports),n(T("9Oldw"),e.exports),n(T("hKDyt"),e.exports),n(T("7SFhh"),e.exports),n(T("1AvrO"),e.exports),n(T("gRjv8"),e.exports),n(T("cDfhM"),e.exports)}),T.register("jIAJh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.address=e.exports.getAddress=void 0,T("eLN1L");var r=T("8IOvN"),n=T("dfzmU"),o=T("3GXub"),i=T("8Qm9Q"),s=T("fw7ZV"),a=T("1iBuG");e.exports.getAddress=e=>{let t=(0,r.createBytes)(e);return(0,n.assert)(t.length<=20,new s.ParserError(`Invalid address value. Expected address to be 20 bytes long, but received ${t.length} bytes.`)),(0,a.padStart)(t,20)},e.exports.address={isDynamic:!1,/**
     * Get if the given value is a valid address type. Since `address` is a simple
     * type, this is just a check that the value is "address".
     *
     * @param type - The type to check.
     * @returns Whether the type is a valid address type.
     */isType:e=>"address"===e,/**
     * Get the byte length of an encoded address. Since `address` is a simple
     * type, this always returns 32.
     *
     * Note that actual addresses are only 20 bytes long, but the encoding of
     * the `address` type is always 32 bytes long.
     *
     * @returns The byte length of an encoded address.
     */getByteLength:()=>32,/**
     * Encode the given address to a 32-byte-long byte array.
     *
     * @param args - The encoding arguments.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The address to encode.
     * @param args.packed - Whether to use packed encoding.
     * @returns The bytes with the encoded address added to it.
     */encode({buffer:t,value:r,packed:n}){let i=(0,e.exports.getAddress)(r);// If we're using packed encoding, we can just add the address bytes to the
// byte array, without adding any padding.
if(n)return(0,o.concatBytes)([t,i]);let s=(0,a.padStart)(i);return(0,o.concatBytes)([t,s])},/**
     * Decode the given byte array to an address.
     *
     * @param args - The decoding arguments.
     * @param args.value - The byte array to decode.
     * @returns The decoded address as a hexadecimal string, starting with the
     * "0x"-prefix.
     */decode:({value:e})=>(0,i.add0x)((0,o.bytesToHex)(e.slice(12,32)))}}),T.register("1iBuG",function(e,t){var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),n(T("5hTWg"),e.exports)}),T.register("5hTWg",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.padEnd=e.exports.padStart=e.exports.set=void 0,T("eLN1L");var r=T("3GXub");let n=32;e.exports.set=(e,t,n)=>(0,r.concatBytes)([e.subarray(0,n),t,e.subarray(n+t.length)]),e.exports.padStart=(e,t=n)=>{let o=new Uint8Array(Math.max(t-e.length,0)).fill(0);return(0,r.concatBytes)([o,e])},e.exports.padEnd=(e,t=n)=>{let o=new Uint8Array(Math.max(t-e.length,0)).fill(0);return(0,r.concatBytes)([e,o])}}),T.register("9LJxE",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.array=e.exports.getTupleType=e.exports.getArrayType=e.exports.isArrayType=void 0,T("eLN1L");var r=T("dfzmU"),n=T("3GXub"),o=T("fw7ZV"),i=T("3gK6z"),s=T("1iBuG"),a=T("9Oldw"),u=T("cDfhM");let l=/^(?<type>.*)\[(?<length>\d*?)\]$/u;e.exports.isArrayType=e=>l.test(e),e.exports.getArrayType=e=>{let t=e.match(l);return(0,r.assert)(t?.groups?.type,new o.ParserError(`Invalid array type. Expected an array type, but received "${e}".`)),[t.groups.type,t.groups.length?parseInt(t.groups.length,10):void 0]},e.exports.getTupleType=(e,t)=>`(${Array(t).fill(e).join(",")})`,e.exports.array={/**
     * Check if the array is dynamic. Arrays are dynamic if the array does not
     * have a fixed length, or if the array type is dynamic.
     *
     * @param type - The type to check.
     * @returns Whether the array is dynamic.
     */isDynamic(t){let[r,n]=(0,e.exports.getArrayType)(t);return(// any `k >= 0`.
void 0===n||(0,i.isDynamicParser)((0,i.getParser)(r),r))},/**
     * Check if a type is an array type.
     *
     * @param type - The type to check.
     * @returns Whether the type is an array type.
     */isType:t=>(0,e.exports.isArrayType)(t),/**
     * Get the byte length of an encoded array. If the array is dynamic, this
     * returns 32, i.e., the length of the pointer to the array. If the array is
     * static, this returns the byte length of the resulting tuple type.
     *
     * @param type - The type to get the byte length for.
     * @returns The byte length of an encoded array.
     */getByteLength(t){(0,r.assert)((0,e.exports.isArrayType)(t),new o.ParserError(`Expected an array type, but received "${t}".`));let[n,s]=(0,e.exports.getArrayType)(t);return(0,i.isDynamicParser)(this,t)||void 0===s?32:u.tuple.getByteLength((0,e.exports.getTupleType)(n,s))},/**
     * Encode the given array to a byte array. If the array is static, this uses
     * the tuple encoder.
     *
     * @param args - The encoding arguments.
     * @param args.type - The type of the array.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The array to encode.
     * @param args.packed - Whether to use non-standard packed encoding.
     * @param args.tight - Whether to use non-standard tight encoding.
     * @returns The bytes with the encoded array added to it.
     */encode({type:t,buffer:l,value:c,packed:f,tight:p}){let[h,d]=(0,e.exports.getArrayType)(t);// Tightly pack `T[]` where `T` is a dynamic type. This is not supported in
// Solidity, but is commonly used in the Ethereum ecosystem.
if(// Packed encoding does not support nested arrays.
(0,r.assert)(!f||!(0,e.exports.isArrayType)(h),new o.ParserError("Cannot pack nested arrays.")),f&&(0,i.isDynamicParser)((0,i.getParser)(h),h))return(0,i.pack)({types:Array(c.length).fill(h),values:c,byteArray:l,packed:f,arrayPacked:!0,tight:p});if(d)// `T[k]` for any `T` and `k` is encoded as `(T[0], ..., T[k - 1])`.
return(0,r.assert)(d===c.length,new o.ParserError(`Array length does not match type length. Expected a length of ${d}, but received ${c.length}.`)),u.tuple.encode({type:(0,e.exports.getTupleType)(h,d),buffer:l,value:c,// In "tight" mode, we don't pad the values to 32 bytes if the value is
// of type `bytesN`. This is an edge case in `ethereumjs-abi` that we
// support to provide compatibility with it.
packed:a.fixedBytes.isType(h)&&p,tight:p});// For packed encoding, we don't need to encode the length of the array,
// so we can just encode the values.
if(f)return(0,i.pack)({types:Array(c.length).fill(h),values:c,byteArray:l,// In "tight" mode, we don't pad the values to 32 bytes if the value is
// of type `bytesN`. This is an edge case in `ethereumjs-abi` that we
// support to provide compatibility with it.
packed:a.fixedBytes.isType(h)&&p,arrayPacked:!0,tight:p});// `T[]` with `k` elements is encoded as `k (T[0], ..., T[k - 1])`. That
// means that we just need to encode the length of the array, and then the
// array itself. The pointer is encoded by the {@link pack} function.
let y=(0,s.padStart)((0,n.numberToBytes)(c.length));return(0,i.pack)({types:Array(c.length).fill(h),values:c,byteArray:(0,n.concatBytes)([l,y]),packed:f,tight:p})},/**
     * Decode an array from the given byte array.
     *
     * @param args - The decoding arguments.
     * @param args.type - The type of the array.
     * @param args.value - The byte array to decode.
     * @returns The decoded array.
     */decode({type:t,value:s,...a}){let[l,c]=(0,e.exports.getArrayType)(t);if(c){let t=u.tuple.decode({type:(0,e.exports.getTupleType)(l,c),value:s,...a});return(0,r.assert)(t.length===c,new o.ParserError(`Array length does not match type length. Expected a length of ${c}, but received ${t.length}.`)),t}let f=(0,n.bytesToNumber)(s.subarray(0,32));return(0,i.unpack)(Array(f).fill(l),s.subarray(32))}}}),T.register("9Oldw",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.fixedBytes=e.exports.getByteLength=void 0,T("eLN1L");var r=T("dfzmU"),n=T("8IOvN"),o=T("3GXub"),i=T("fw7ZV"),s=T("1iBuG");let a=/^bytes([0-9]{1,2})$/u;e.exports.getByteLength=e=>{let t=e.match(a)?.[1];(0,r.assert)(t,`Invalid byte length. Expected a number between 1 and 32, but received "${e}".`);let n=Number(t);return(0,r.assert)(n>0&&n<=32,new i.ParserError(`Invalid byte length. Expected a number between 1 and 32, but received "${e}".`)),n},e.exports.fixedBytes={isDynamic:!1,/**
     * Check if a type is a fixed bytes type.
     *
     * @param type - The type to check.
     * @returns Whether the type is a fixed bytes type.
     */isType:e=>a.test(e),/**
     * Get the byte length of an encoded fixed bytes type.
     *
     * @returns The byte length of the type.
     */getByteLength:()=>32,/**
     * Encode a fixed bytes value.
     *
     * @param args - The arguments to encode.
     * @param args.type - The type of the value.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The value to encode.
     * @param args.packed - Whether to use packed encoding.
     * @returns The bytes with the encoded value added to it.
     */encode({type:t,buffer:a,value:u,packed:l}){let c=(0,e.exports.getByteLength)(t),f=(0,n.createBytes)(u);return(// For packed encoding, the value is padded to the length of the type, and
// then added to the byte array.
((0,r.assert)(f.length<=c,new i.ParserError(`Expected a value of length ${c}, but received a value of length ${f.length}.`)),l)?(0,o.concatBytes)([a,(0,s.padEnd)(f,c)]):(0,o.concatBytes)([a,(0,s.padEnd)(f)]))},/**
     * Decode a fixed bytes value.
     *
     * @param args - The arguments to decode.
     * @param args.type - The type of the value.
     * @param args.value - The value to decode.
     * @returns The decoded value as a `Uint8Array`.
     */decode({type:t,value:r}){let n=(0,e.exports.getByteLength)(t);// Since we're returning a `Uint8Array`, we use `slice` to copy the bytes
// into a new array.
return r.slice(0,n)}}}),T.register("cDfhM",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.tuple=e.exports.getTupleElements=void 0,T("eLN1L");var r=T("dfzmU"),n=T("fw7ZV"),o=T("3gK6z");let i=/^\((.+)\)$/u,s=e=>i.test(e);e.exports.getTupleElements=e=>{(0,r.assert)(e.startsWith("(")&&e.endsWith(")"),new n.ParserError(`Invalid tuple type. Expected tuple type, but received "${e}".`));let t=[],o="",i=0;for(let r=1;r<e.length-1;r++){let n=e[r];","===n&&0===i?(t.push(o.trim()),o=""):(o+=n,"("===n?i+=1:")"===n&&(i-=1))}return o.trim()&&t.push(o.trim()),t},e.exports.tuple={/**
     * Check if the tuple is dynamic. Tuples are dynamic if one or more elements
     * of the tuple are dynamic.
     *
     * @param type - The type to check.
     * @returns Whether the tuple is dynamic.
     */isDynamic(t){let r=(0,e.exports.getTupleElements)(t);return r.some(e=>{let t=(0,o.getParser)(e);return(0,o.isDynamicParser)(t,e)})},/**
     * Check if a type is a tuple type.
     *
     * @param type - The type to check.
     * @returns Whether the type is a tuple type.
     */isType:e=>s(e),/**
     * Get the byte length of a tuple type. If the tuple is dynamic, this will
     * always return 32. If the tuple is static, this will return the sum of the
     * byte lengths of the tuple elements.
     *
     * @param type - The type to get the byte length for.
     * @returns The byte length of the tuple type.
     */getByteLength(t){if((0,o.isDynamicParser)(this,t))return 32;let r=(0,e.exports.getTupleElements)(t);return r.reduce((e,t)=>e+(0,o.getParser)(t).getByteLength(t),0)},/**
     * Encode a tuple value.
     *
     * @param args - The encoding arguments.
     * @param args.type - The type of the value.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The value to encode.
     * @param args.packed - Whether to use non-standard packed encoding.
     * @param args.tight - Whether to use non-standard tight encoding.
     * @returns The bytes with the encoded value added to it.
     */encode({type:t,buffer:r,value:n,packed:i,tight:s}){let a=(0,e.exports.getTupleElements)(t);return(0,o.pack)({types:a,values:n,byteArray:r,packed:i,tight:s})},/**
     * Decode a tuple value.
     *
     * @param args - The decoding arguments.
     * @param args.type - The type of the value.
     * @param args.value - The value to decode.
     * @param args.skip - A function to skip a number of bytes.
     * @returns The decoded value.
     */decode({type:t,value:r,skip:n}){let i=(0,e.exports.getTupleElements)(t),s=this.getByteLength(t)-32;return n(s),(0,o.unpack)(i,r)}}}),T.register("5V0tK",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.bool=e.exports.getBooleanValue=void 0,T("eLN1L");var r=T("3GXub"),n=T("kdnyr"),o=T("fw7ZV"),i=T("7SFhh");let s=(0,n.coerce)((0,n.boolean)(),(0,n.union)([(0,n.literal)("true"),(0,n.literal)("false")]),e=>"true"===e);e.exports.getBooleanValue=e=>{try{let t=(0,n.create)(e,s);if(t)return BigInt(1);return BigInt(0)}catch{throw new o.ParserError(`Invalid boolean value. Expected a boolean literal, or the string "true" or "false", but received "${e}".`)}},e.exports.bool={isDynamic:!1,/**
     * Get if the given value is a valid boolean type. Since `bool` is a simple
     * type, this is just a check that the value is "bool".
     *
     * @param type - The type to check.
     * @returns Whether the type is a valid boolean type.
     */isType:e=>"bool"===e,/**
     * Get the byte length of an encoded boolean. Since `bool` is a simple
     * type, this always returns 32.
     *
     * Note that actual booleans are only 1 byte long, but the encoding of
     * the `bool` type is always 32 bytes long.
     *
     * @returns The byte length of an encoded boolean.
     */getByteLength:()=>32,/**
     * Encode the given boolean to a byte array.
     *
     * @param args - The encoding arguments.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The boolean to encode.
     * @param args.packed - Whether the value is packed.
     * @param args.tight - Whether to use non-standard tight encoding.
     * @returns The bytes with the encoded boolean added to it.
     */encode({buffer:t,value:n,packed:o,tight:s}){let a=(0,e.exports.getBooleanValue)(n);return(// For packed encoding, we add a single byte (`0x00` or `0x01`) to the byte
// array.
o?(0,r.concatBytes)([t,(0,r.bigIntToBytes)(a)]):i.number.encode({type:"uint256",buffer:t,value:a,packed:o,tight:s}))},/**
     * Decode the given byte array to a boolean.
     *
     * @param args - The decoding arguments.
     * @returns The decoded boolean.
     */decode:e=>i.number.decode({...e,type:"uint256"})===BigInt(1)}}),T.register("7SFhh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.number=e.exports.getBigInt=e.exports.assertNumberLength=e.exports.getLength=e.exports.isSigned=void 0,T("eLN1L");var r=T("dfzmU"),n=T("8IOvN"),o=T("3GXub"),i=T("fw7ZV"),s=T("1iBuG");let a=/^u?int(?<length>[0-9]*)?$/u;e.exports.isSigned=e=>!e.startsWith("u"),e.exports.getLength=e=>{if("int"===e||"uint"===e)return 256;let t=e.match(a);(0,r.assert)(t?.groups?.length,new i.ParserError(`Invalid number type. Expected a number type, but received "${e}".`));let n=parseInt(t.groups.length,10);return(0,r.assert)(n>=8&&n<=256,new i.ParserError(`Invalid number length. Expected a number between 8 and 256, but received "${e}".`)),(0,r.assert)(n%8==0,new i.ParserError(`Invalid number length. Expected a multiple of 8, but received "${e}".`)),n},e.exports.assertNumberLength=(t,n)=>{let o=(0,e.exports.getLength)(n),s=BigInt(2)**BigInt(o-((0,e.exports.isSigned)(n)?1:0))-BigInt(1);if((0,e.exports.isSigned)(n)){// Signed types must be in the range of `-(2^(length - 1))` to
// `2^(length - 1) - 1`.
(0,r.assert)(t>=-(s+BigInt(1))&&t<=s,new i.ParserError(`Number "${t}" is out of range for type "${n}".`));return}// Unsigned types must be in the range of `0` to `2^length - 1`.
(0,r.assert)(t<=s,new i.ParserError(`Number "${t}" is out of range for type "${n}".`))},e.exports.getBigInt=e=>{try{return(0,n.createBigInt)(e)}catch{throw new i.ParserError(`Invalid number. Expected a valid number value, but received "${e}".`)}},e.exports.number={isDynamic:!1,/**
     * Check if a type is a number type.
     *
     * @param type - The type to check.
     * @returns Whether the type is a number type.
     */isType:e=>a.test(e),/**
     * Get the byte length of an encoded number type. Since `int` and `uint` are
     * simple types, this will always return 32.
     *
     * @returns The byte length of the type.
     */getByteLength:()=>32,/**
     * Encode a number value.
     *
     * @param args - The arguments to encode.
     * @param args.type - The type of the value.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The value to encode.
     * @param args.packed - Whether to use packed encoding.
     * @returns The bytes with the encoded value added to it.
     */encode({type:t,buffer:r,value:n,packed:i}){let a=(0,e.exports.getBigInt)(n);if((0,e.exports.assertNumberLength)(a,t),(0,e.exports.isSigned)(t)){// For packed encoding, the value is padded to the length of the type, and
// then added to the byte array.
if(i){let n=(0,e.exports.getLength)(t)/8;return(0,o.concatBytes)([r,(0,o.signedBigIntToBytes)(a,n)])}return(0,o.concatBytes)([r,(0,s.padStart)((0,o.signedBigIntToBytes)(a,32))])}// For packed encoding, the value is padded to the length of the type, and
// then added to the byte array.
if(i){let n=(0,e.exports.getLength)(t)/8;return(0,o.concatBytes)([r,(0,s.padStart)((0,o.bigIntToBytes)(a),n)])}return(0,o.concatBytes)([r,(0,s.padStart)((0,o.bigIntToBytes)(a))])},/**
     * Decode a number value.
     *
     * @param args - The decoding arguments.
     * @param args.type - The type of the value.
     * @param args.value - The value to decode.
     * @returns The decoded value.
     */decode({type:t,value:r}){let n=r.subarray(0,32);if((0,e.exports.isSigned)(t)){let r=(0,o.bytesToSignedBigInt)(n);return(0,e.exports.assertNumberLength)(r,t),r}let i=(0,o.bytesToBigInt)(n);return(0,e.exports.assertNumberLength)(i,t),i}}}),T.register("fEDKV",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.bytes=void 0,T("eLN1L");var r=T("8IOvN"),n=T("3GXub"),o=T("1iBuG");e.exports.bytes={isDynamic:!0,/**
     * Check if a type is a bytes type. Since `bytes` is a simple type, this is
     * just a check that the type is "bytes".
     *
     * @param type - The type to check.
     * @returns Whether the type is a bytes type.
     */isType:e=>"bytes"===e,/**
     * Get the byte length of an encoded bytes value. Since `bytes` is a simple
     * type, this always returns 32.
     *
     * Note that actual length of a bytes value is variable, but the encoded
     * static value (pointer) is always 32 bytes long.
     *
     * @returns The byte length of an encoded bytes value.
     */getByteLength:()=>32,/**
     * Encode the given bytes value to a byte array.
     *
     * @param args - The encoding arguments.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The bytes value to encode.
     * @param args.packed - Whether to use packed encoding.
     * @returns The bytes with the encoded bytes value added to it.
     */encode({buffer:e,value:t,packed:i}){let s=(0,r.createBytes)(t);// For packed encoding, we can just add the bytes value to the byte array,
// without adding any padding or alignment. There is also no need to
// encode the length of the bytes.
if(i)return(0,n.concatBytes)([e,s]);let a=32*Math.ceil(s.byteLength/32);// Bytes of length `k` are encoded as `k pad_right(bytes)`.
return(0,n.concatBytes)([e,(0,o.padStart)((0,n.numberToBytes)(s.byteLength)),(0,o.padEnd)(s,a)])},/**
     * Decode the given byte array to a bytes value.
     *
     * @param args - The decoding arguments.
     * @param args.value - The byte array to decode.
     * @returns The decoded bytes value as a `Uint8Array`.
     */decode({value:e}){let t=e.subarray(0,32),r=(0,n.bytesToNumber)(t);// Since we're returning a `Uint8Array`, we use `slice` to copy the bytes
// into a new array.
return e.slice(32,32+r)}}}),T.register("hKDyt",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.fn=e.exports.getFunction=void 0,T("eLN1L");var r=T("8Qm9Q"),n=T("8IOvN"),o=T("dfzmU"),i=T("3GXub"),s=T("kdnyr"),a=T("fw7ZV"),u=T("9Oldw");/**
 * A struct that represents a Solidity function. The value must be a hex string
 * or a byte array. The created value will always be an object with an `address`
 * and `selector` property.
 */let l=(0,s.coerce)((0,s.object)({address:r.StrictHexStruct,selector:r.StrictHexStruct}),(0,s.union)([r.StrictHexStruct,(0,s.instance)(Uint8Array)]),e=>{let t=(0,n.createBytes)(e);return(0,o.assert)(24===t.length,new a.ParserError(`Invalid Solidity function. Expected function to be 24 bytes long, but received ${t.length} bytes.`)),{address:(0,i.bytesToHex)(t.subarray(0,20)),selector:(0,i.bytesToHex)(t.subarray(20,24))}});e.exports.getFunction=e=>{let t=(0,s.create)(e,l);return(0,i.concatBytes)([(0,i.hexToBytes)(t.address),(0,i.hexToBytes)(t.selector)])},e.exports.fn={isDynamic:!1,/**
     * Check if a type is a function type. Since `function` is a simple type, this
     * is just a check that the type is "function".
     *
     * @param type - The type to check.
     * @returns Whether the type is a function type.
     */isType:e=>"function"===e,/**
     * Get the byte length of an encoded function. Since `function` is a simple
     * type, this always returns 32.
     *
     * Note that actual functions are only 24 bytes long, but the encoding of
     * the `function` type is always 32 bytes long.
     *
     * @returns The byte length of an encoded function.
     */getByteLength:()=>32,/**
     * Encode the given function to a byte array.
     *
     * @param args - The encoding arguments.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The function to encode.
     * @param args.packed - Whether to use packed encoding.
     * @param args.tight - Whether to use non-standard tight encoding.
     * @returns The bytes with the encoded function added to it.
     */encode({buffer:t,value:r,packed:n,tight:o}){let i=(0,e.exports.getFunction)(r);// Functions are encoded as `bytes24`, so we use the fixedBytes parser to
// encode the function.
return u.fixedBytes.encode({type:"bytes24",buffer:t,value:i,packed:n,tight:o})},/**
     * Decode the given byte array to a function.
     *
     * @param args - The decoding arguments.
     * @param args.value - The byte array to decode.
     * @returns The decoded function as a {@link SolidityFunction} object.
     */decode:({value:e})=>({address:(0,i.bytesToHex)(e.slice(0,20)),selector:(0,i.bytesToHex)(e.slice(20,24))})}}),T.register("1AvrO",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0})}),T.register("gRjv8",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.string=void 0,T("eLN1L");var r=T("3GXub"),n=T("fEDKV");e.exports.string={isDynamic:!0,/**
     * Check if a type is a string type. Since `string` is a simple type, this
     * is just a check if the type is "string".
     *
     * @param type - The type to check.
     * @returns Whether the type is a string type.
     */isType:e=>"string"===e,/**
     * Get the byte length of an encoded string type. Since `string` is a simple
     * type, this will always return 32.
     *
     * Note that actual strings are variable in length, but the encoded static
     * value (pointer) is always 32 bytes long.
     *
     * @returns The byte length of an encoded string.
     */getByteLength:()=>32,/**
     * Encode the given string value to a byte array.
     *
     * @param args - The encoding arguments.
     * @param args.buffer - The byte array to add to.
     * @param args.value - The string value to encode.
     * @param args.packed - Whether to use packed encoding.
     * @param args.tight - Whether to use non-standard tight encoding.
     * @returns The bytes with the encoded string value added to it.
     */encode:({buffer:e,value:t,packed:o,tight:i})=>n.bytes.encode({type:"bytes",buffer:e,value:(0,r.stringToBytes)(t),packed:o,tight:i}),/**
     * Decode the given byte array to a string value.
     *
     * @param args - The decoding arguments.
     * @returns The decoded string value.
     */decode:e=>(0,r.bytesToString)(n.bytes.decode(e))}}),T.register("dIALA",function(e,t){var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),n(T("leRBU"),e.exports)}),T.register("leRBU",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0})}),T.register("8WMDt",function(e,t){var r=T("awmEs").Buffer,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getEncryptionPublicKey=e.exports.decryptSafely=e.exports.decrypt=e.exports.encryptSafely=e.exports.encrypt=void 0;let s=i(T("bFgbJ")),a=i(T("1fvWc"));var u=T("2ztKZ");/**
 * Encrypt a message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */function l({publicKey:e,data:t,version:r}){if((0,u.isNullish)(e))throw Error("Missing publicKey parameter");if((0,u.isNullish)(t))throw Error("Missing data parameter");if((0,u.isNullish)(r))throw Error("Missing version parameter");if("x25519-xsalsa20-poly1305"===r){let r;if("string"!=typeof t)throw Error("Message data must be given as a string");// generate ephemeral keypair
let n=s.box.keyPair();try{r=a.decodeBase64(e)}catch(e){throw Error("Bad public key")}let o=a.decodeUTF8(t),i=s.randomBytes(s.box.nonceLength),u=s.box(o,i,r,n.secretKey),l={version:"x25519-xsalsa20-poly1305",nonce:a.encodeBase64(i),ephemPublicKey:a.encodeBase64(n.publicKey),ciphertext:a.encodeBase64(u)};// return encrypted msg data
return l}throw Error("Encryption type/version not supported")}/**
 * Decrypt a message.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */function c({encryptedData:e,privateKey:t}){if((0,u.isNullish)(e))throw Error("Missing encryptedData parameter");if((0,u.isNullish)(t))throw Error("Missing privateKey parameter");if("x25519-xsalsa20-poly1305"===e.version){// string to buffer to UInt8Array
let r=f(t),n=s.box.keyPair.fromSecretKey(r).secretKey,o=a.decodeBase64(e.nonce),i=a.decodeBase64(e.ciphertext),u=a.decodeBase64(e.ephemPublicKey),l=s.box.open(i,o,u,n);// return decrypted msg data
try{if(!l)throw Error();let e=a.encodeUTF8(l);// TODO: This is probably extraneous but was kept to minimize changes during refactor
if(!e)throw Error();return e}catch(e){if(e&&"string"==typeof e.message&&e.message.length)throw Error(`Decryption failed: ${e.message}`);throw Error("Decryption failed.")}}throw Error("Encryption type/version not supported.")}/**
 * Convert a hex string to the UInt8Array format used by nacl.
 *
 * @param msgHex - The string to convert.
 * @returns The converted string.
 */function f(e){let t=r.from(e,"hex").toString("base64");return a.decodeBase64(t)}e.exports.encrypt=l,e.exports.encryptSafely=/**
 * Encrypt a message in a way that obscures the message length.
 *
 * The message is padded to a multiple of 2048 before being encrypted so that the length of the
 * resulting encrypted message can't be used to guess the exact length of the original message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */function({publicKey:e,data:t,version:n}){if((0,u.isNullish)(e))throw Error("Missing publicKey parameter");if((0,u.isNullish)(t))throw Error("Missing data parameter");if((0,u.isNullish)(n))throw Error("Missing version parameter");if("object"==typeof t&&t&&"toJSON"in t)// TODO, check all possible children
throw Error("Cannot encrypt with toJSON property.  Please remove toJSON property");// add padding
let o={data:t,padding:""},i=r.byteLength(JSON.stringify(o),"utf-8"),s=i%2048,a=0;s>0&&(a=2048-s-16),o.padding="0".repeat(a);let c=JSON.stringify(o);return l({publicKey:e,data:c,version:n})},e.exports.decrypt=c,e.exports.decryptSafely=/**
 * Decrypt a message that has been encrypted using `encryptSafely`.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */function({encryptedData:e,privateKey:t}){if((0,u.isNullish)(e))throw Error("Missing encryptedData parameter");if((0,u.isNullish)(t))throw Error("Missing privateKey parameter");let r=JSON.parse(c({encryptedData:e,privateKey:t}));return r.data},e.exports.getEncryptionPublicKey=/**
 * Get the encryption public key for the given key.
 *
 * @param privateKey - The private key to generate the encryption public key with.
 * @returns The encryption public key.
 */function(e){let t=f(e),r=s.box.keyPair.fromSecretKey(t).publicKey;return a.encodeBase64(r)}}),T.register("bFgbJ",function(e,t){!function(e){// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
//
// Implementation derived from TweetNaCl version 20140427.
// See for details: http://tweetnacl.cr.yp.to/
var t,r=function(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;t++)r[t]=e[t];return r},n=function(){throw Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32);i[0]=9;var s=r(),a=r([1]),u=r([56129,1]),l=r([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=r([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),f=r([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),p=r([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),h=r([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function d(e,t,r,n){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r,e[t+4]=n>>24&255,e[t+5]=n>>16&255,e[t+6]=n>>8&255,e[t+7]=255&n}function y(e,t,r,n,o){var i,s=0;for(i=0;i<o;i++)s|=e[t+i]^r[n+i];return(1&s-1>>>8)-1}function g(e,t,r,n){return y(e,t,r,n,16)}function b(e,t,r,n){return y(e,t,r,n,32)}function m(e,t,r,n){!function(e,t,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,u=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,l=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,c=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,h=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,y=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,g=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,b=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,m=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,v=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,x=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=i,E=s,_=a,S=u,A=l,O=c,T=f,I=p,B=h,R=d,k=y,N=g,C=b,L=m,P=v,j=x,U=0;U<20;U+=2)A^=(o=w+C|0)<<7|o>>>25,B^=(o=A+w|0)<<9|o>>>23,C^=(o=B+A|0)<<13|o>>>19,w^=(o=C+B|0)<<18|o>>>14,R^=(o=O+E|0)<<7|o>>>25,L^=(o=R+O|0)<<9|o>>>23,E^=(o=L+R|0)<<13|o>>>19,O^=(o=E+L|0)<<18|o>>>14,P^=(o=k+T|0)<<7|o>>>25,_^=(o=P+k|0)<<9|o>>>23,T^=(o=_+P|0)<<13|o>>>19,k^=(o=T+_|0)<<18|o>>>14,S^=(o=j+N|0)<<7|o>>>25,I^=(o=S+j|0)<<9|o>>>23,N^=(o=I+S|0)<<13|o>>>19,j^=(o=N+I|0)<<18|o>>>14,E^=(o=w+S|0)<<7|o>>>25,_^=(o=E+w|0)<<9|o>>>23,S^=(o=_+E|0)<<13|o>>>19,w^=(o=S+_|0)<<18|o>>>14,T^=(o=O+A|0)<<7|o>>>25,I^=(o=T+O|0)<<9|o>>>23,A^=(o=I+T|0)<<13|o>>>19,O^=(o=A+I|0)<<18|o>>>14,N^=(o=k+R|0)<<7|o>>>25,B^=(o=N+k|0)<<9|o>>>23,R^=(o=B+N|0)<<13|o>>>19,k^=(o=R+B|0)<<18|o>>>14,C^=(o=j+P|0)<<7|o>>>25,L^=(o=C+j|0)<<9|o>>>23,P^=(o=L+C|0)<<13|o>>>19,j^=(o=P+L|0)<<18|o>>>14;w=w+i|0,E=E+s|0,_=_+a|0,S=S+u|0,A=A+l|0,O=O+c|0,T=T+f|0,I=I+p|0,B=B+h|0,R=R+d|0,k=k+y|0,N=N+g|0,C=C+b|0,L=L+m|0,P=P+v|0,j=j+x|0,e[0]=w>>>0&255,e[1]=w>>>8&255,e[2]=w>>>16&255,e[3]=w>>>24&255,e[4]=E>>>0&255,e[5]=E>>>8&255,e[6]=E>>>16&255,e[7]=E>>>24&255,e[8]=_>>>0&255,e[9]=_>>>8&255,e[10]=_>>>16&255,e[11]=_>>>24&255,e[12]=S>>>0&255,e[13]=S>>>8&255,e[14]=S>>>16&255,e[15]=S>>>24&255,e[16]=A>>>0&255,e[17]=A>>>8&255,e[18]=A>>>16&255,e[19]=A>>>24&255,e[20]=O>>>0&255,e[21]=O>>>8&255,e[22]=O>>>16&255,e[23]=O>>>24&255,e[24]=T>>>0&255,e[25]=T>>>8&255,e[26]=T>>>16&255,e[27]=T>>>24&255,e[28]=I>>>0&255,e[29]=I>>>8&255,e[30]=I>>>16&255,e[31]=I>>>24&255,e[32]=B>>>0&255,e[33]=B>>>8&255,e[34]=B>>>16&255,e[35]=B>>>24&255,e[36]=R>>>0&255,e[37]=R>>>8&255,e[38]=R>>>16&255,e[39]=R>>>24&255,e[40]=k>>>0&255,e[41]=k>>>8&255,e[42]=k>>>16&255,e[43]=k>>>24&255,e[44]=N>>>0&255,e[45]=N>>>8&255,e[46]=N>>>16&255,e[47]=N>>>24&255,e[48]=C>>>0&255,e[49]=C>>>8&255,e[50]=C>>>16&255,e[51]=C>>>24&255,e[52]=L>>>0&255,e[53]=L>>>8&255,e[54]=L>>>16&255,e[55]=L>>>24&255,e[56]=P>>>0&255,e[57]=P>>>8&255,e[58]=P>>>16&255,e[59]=P>>>24&255,e[60]=j>>>0&255,e[61]=j>>>8&255,e[62]=j>>>16&255,e[63]=j>>>24&255}(e,t,r,n)}function v(e,t,r,n){!function(e,t,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,u=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,l=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,c=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,h=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,y=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,g=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,b=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,m=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,v=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,x=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=i,E=s,_=a,S=u,A=l,O=c,T=f,I=p,B=h,R=d,k=y,N=g,C=b,L=m,P=v,j=x,U=0;U<20;U+=2)A^=(o=w+C|0)<<7|o>>>25,B^=(o=A+w|0)<<9|o>>>23,C^=(o=B+A|0)<<13|o>>>19,w^=(o=C+B|0)<<18|o>>>14,R^=(o=O+E|0)<<7|o>>>25,L^=(o=R+O|0)<<9|o>>>23,E^=(o=L+R|0)<<13|o>>>19,O^=(o=E+L|0)<<18|o>>>14,P^=(o=k+T|0)<<7|o>>>25,_^=(o=P+k|0)<<9|o>>>23,T^=(o=_+P|0)<<13|o>>>19,k^=(o=T+_|0)<<18|o>>>14,S^=(o=j+N|0)<<7|o>>>25,I^=(o=S+j|0)<<9|o>>>23,N^=(o=I+S|0)<<13|o>>>19,j^=(o=N+I|0)<<18|o>>>14,E^=(o=w+S|0)<<7|o>>>25,_^=(o=E+w|0)<<9|o>>>23,S^=(o=_+E|0)<<13|o>>>19,w^=(o=S+_|0)<<18|o>>>14,T^=(o=O+A|0)<<7|o>>>25,I^=(o=T+O|0)<<9|o>>>23,A^=(o=I+T|0)<<13|o>>>19,O^=(o=A+I|0)<<18|o>>>14,N^=(o=k+R|0)<<7|o>>>25,B^=(o=N+k|0)<<9|o>>>23,R^=(o=B+N|0)<<13|o>>>19,k^=(o=R+B|0)<<18|o>>>14,C^=(o=j+P|0)<<7|o>>>25,L^=(o=C+j|0)<<9|o>>>23,P^=(o=L+C|0)<<13|o>>>19,j^=(o=P+L|0)<<18|o>>>14;e[0]=w>>>0&255,e[1]=w>>>8&255,e[2]=w>>>16&255,e[3]=w>>>24&255,e[4]=O>>>0&255,e[5]=O>>>8&255,e[6]=O>>>16&255,e[7]=O>>>24&255,e[8]=k>>>0&255,e[9]=k>>>8&255,e[10]=k>>>16&255,e[11]=k>>>24&255,e[12]=j>>>0&255,e[13]=j>>>8&255,e[14]=j>>>16&255,e[15]=j>>>24&255,e[16]=T>>>0&255,e[17]=T>>>8&255,e[18]=T>>>16&255,e[19]=T>>>24&255,e[20]=I>>>0&255,e[21]=I>>>8&255,e[22]=I>>>16&255,e[23]=I>>>24&255,e[24]=B>>>0&255,e[25]=B>>>8&255,e[26]=B>>>16&255,e[27]=B>>>24&255,e[28]=R>>>0&255,e[29]=R>>>8&255,e[30]=R>>>16&255,e[31]=R>>>24&255}(e,t,r,n)}var x=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);// "expand 32-byte k"
function w(e,t,r,n,o,i,s){var a,u,l=new Uint8Array(16),c=new Uint8Array(64);for(u=0;u<16;u++)l[u]=0;for(u=0;u<8;u++)l[u]=i[u];for(;o>=64;){for(m(c,l,s,x),u=0;u<64;u++)e[t+u]=r[n+u]^c[u];for(u=8,a=1;u<16;u++)a=a+(255&l[u])|0,l[u]=255&a,a>>>=8;o-=64,t+=64,n+=64}if(o>0)for(m(c,l,s,x),u=0;u<o;u++)e[t+u]=r[n+u]^c[u];return 0}function E(e,t,r,n,o){var i,s,a=new Uint8Array(16),u=new Uint8Array(64);for(s=0;s<16;s++)a[s]=0;for(s=0;s<8;s++)a[s]=n[s];for(;r>=64;){for(m(u,a,o,x),s=0;s<64;s++)e[t+s]=u[s];for(s=8,i=1;s<16;s++)i=i+(255&a[s])|0,a[s]=255&i,i>>>=8;r-=64,t+=64}if(r>0)for(m(u,a,o,x),s=0;s<r;s++)e[t+s]=u[s];return 0}function _(e,t,r,n,o){var i=new Uint8Array(32);v(i,n,o,x);for(var s=new Uint8Array(8),a=0;a<8;a++)s[a]=n[a+16];return E(e,t,r,s,i)}function S(e,t,r,n,o,i,s){var a=new Uint8Array(32);v(a,i,s,x);for(var u=new Uint8Array(8),l=0;l<8;l++)u[l]=i[l+16];return w(e,t,r,n,o,u,a)}/*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/var A=function(e){var t,r,n,o,i,s,a,u;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,r=255&e[2]|(255&e[3])<<8,this.r[1]=(t>>>13|r<<3)&8191,n=255&e[4]|(255&e[5])<<8,this.r[2]=(r>>>10|n<<6)&7939,o=255&e[6]|(255&e[7])<<8,this.r[3]=(n>>>7|o<<9)&8191,i=255&e[8]|(255&e[9])<<8,this.r[4]=(o>>>4|i<<12)&255,this.r[5]=i>>>1&8190,s=255&e[10]|(255&e[11])<<8,this.r[6]=(i>>>14|s<<2)&8191,a=255&e[12]|(255&e[13])<<8,this.r[7]=(s>>>11|a<<5)&8065,u=255&e[14]|(255&e[15])<<8,this.r[8]=(a>>>8|u<<8)&8191,this.r[9]=u>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8};function O(e,t,r,n,o,i){var s=new A(i);return s.update(r,n,o),s.finish(e,t),0}function I(e,t,r,n,o,i){var s=new Uint8Array(16);return O(s,0,r,n,o,i),g(e,t,s,0)}function B(e,t,r,n,o){var i;if(r<32)return -1;for(S(e,0,t,0,r,n,o),O(e,16,e,32,r-32,e),i=0;i<16;i++)e[i]=0;return 0}function R(e,t,r,n,o){var i,s=new Uint8Array(32);if(r<32||(_(s,0,32,n,o),0!==I(t,16,t,32,r-32,s)))return -1;for(S(e,0,t,0,r,n,o),i=0;i<32;i++)e[i]=0;return 0}function k(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function N(e){var t,r,n=1;for(t=0;t<16;t++)n=Math.floor((r=e[t]+n+65535)/65536),e[t]=r-65536*n;e[0]+=n-1+37*(n-1)}function C(e,t,r){for(var n,o=~(r-1),i=0;i<16;i++)n=o&(e[i]^t[i]),e[i]^=n,t[i]^=n}function L(e,t){var n,o,i,s=r(),a=r();for(n=0;n<16;n++)a[n]=t[n];for(N(a),N(a),N(a),o=0;o<2;o++){for(n=1,s[0]=a[0]-65517;n<15;n++)s[n]=a[n]-65535-(s[n-1]>>16&1),s[n-1]&=65535;s[15]=a[15]-32767-(s[14]>>16&1),i=s[15]>>16&1,s[14]&=65535,C(a,s,1-i)}for(n=0;n<16;n++)e[2*n]=255&a[n],e[2*n+1]=a[n]>>8}function P(e,t){var r=new Uint8Array(32),n=new Uint8Array(32);return L(r,e),L(n,t),b(r,0,n,0)}function j(e){var t=new Uint8Array(32);return L(t,e),1&t[0]}function U(e,t){var r;for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}function M(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]+r[n]}function D(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]-r[n]}function F(e,t,r){var n,o,i=0,s=0,a=0,u=0,l=0,c=0,f=0,p=0,h=0,d=0,y=0,g=0,b=0,m=0,v=0,x=0,w=0,E=0,_=0,S=0,A=0,O=0,T=0,I=0,B=0,R=0,k=0,N=0,C=0,L=0,P=0,j=r[0],U=r[1],M=r[2],D=r[3],F=r[4],$=r[5],H=r[6],z=r[7],q=r[8],V=r[9],W=r[10],G=r[11],K=r[12],Z=r[13],X=r[14],Y=r[15];i+=(n=t[0])*j,s+=n*U,a+=n*M,u+=n*D,l+=n*F,c+=n*$,f+=n*H,p+=n*z,h+=n*q,d+=n*V,y+=n*W,g+=n*G,b+=n*K,m+=n*Z,v+=n*X,x+=n*Y,s+=(n=t[1])*j,a+=n*U,u+=n*M,l+=n*D,c+=n*F,f+=n*$,p+=n*H,h+=n*z,d+=n*q,y+=n*V,g+=n*W,b+=n*G,m+=n*K,v+=n*Z,x+=n*X,w+=n*Y,a+=(n=t[2])*j,u+=n*U,l+=n*M,c+=n*D,f+=n*F,p+=n*$,h+=n*H,d+=n*z,y+=n*q,g+=n*V,b+=n*W,m+=n*G,v+=n*K,x+=n*Z,w+=n*X,E+=n*Y,u+=(n=t[3])*j,l+=n*U,c+=n*M,f+=n*D,p+=n*F,h+=n*$,d+=n*H,y+=n*z,g+=n*q,b+=n*V,m+=n*W,v+=n*G,x+=n*K,w+=n*Z,E+=n*X,_+=n*Y,l+=(n=t[4])*j,c+=n*U,f+=n*M,p+=n*D,h+=n*F,d+=n*$,y+=n*H,g+=n*z,b+=n*q,m+=n*V,v+=n*W,x+=n*G,w+=n*K,E+=n*Z,_+=n*X,S+=n*Y,c+=(n=t[5])*j,f+=n*U,p+=n*M,h+=n*D,d+=n*F,y+=n*$,g+=n*H,b+=n*z,m+=n*q,v+=n*V,x+=n*W,w+=n*G,E+=n*K,_+=n*Z,S+=n*X,A+=n*Y,f+=(n=t[6])*j,p+=n*U,h+=n*M,d+=n*D,y+=n*F,g+=n*$,b+=n*H,m+=n*z,v+=n*q,x+=n*V,w+=n*W,E+=n*G,_+=n*K,S+=n*Z,A+=n*X,O+=n*Y,p+=(n=t[7])*j,h+=n*U,d+=n*M,y+=n*D,g+=n*F,b+=n*$,m+=n*H,v+=n*z,x+=n*q,w+=n*V,E+=n*W,_+=n*G,S+=n*K,A+=n*Z,O+=n*X,T+=n*Y,h+=(n=t[8])*j,d+=n*U,y+=n*M,g+=n*D,b+=n*F,m+=n*$,v+=n*H,x+=n*z,w+=n*q,E+=n*V,_+=n*W,S+=n*G,A+=n*K,O+=n*Z,T+=n*X,I+=n*Y,d+=(n=t[9])*j,y+=n*U,g+=n*M,b+=n*D,m+=n*F,v+=n*$,x+=n*H,w+=n*z,E+=n*q,_+=n*V,S+=n*W,A+=n*G,O+=n*K,T+=n*Z,I+=n*X,B+=n*Y,y+=(n=t[10])*j,g+=n*U,b+=n*M,m+=n*D,v+=n*F,x+=n*$,w+=n*H,E+=n*z,_+=n*q,S+=n*V,A+=n*W,O+=n*G,T+=n*K,I+=n*Z,B+=n*X,R+=n*Y,g+=(n=t[11])*j,b+=n*U,m+=n*M,v+=n*D,x+=n*F,w+=n*$,E+=n*H,_+=n*z,S+=n*q,A+=n*V,O+=n*W,T+=n*G,I+=n*K,B+=n*Z,R+=n*X,k+=n*Y,b+=(n=t[12])*j,m+=n*U,v+=n*M,x+=n*D,w+=n*F,E+=n*$,_+=n*H,S+=n*z,A+=n*q,O+=n*V,T+=n*W,I+=n*G,B+=n*K,R+=n*Z,k+=n*X,N+=n*Y,m+=(n=t[13])*j,v+=n*U,x+=n*M,w+=n*D,E+=n*F,_+=n*$,S+=n*H,A+=n*z,O+=n*q,T+=n*V,I+=n*W,B+=n*G,R+=n*K,k+=n*Z,N+=n*X,C+=n*Y,v+=(n=t[14])*j,x+=n*U,w+=n*M,E+=n*D,_+=n*F,S+=n*$,A+=n*H,O+=n*z,T+=n*q,I+=n*V,B+=n*W,R+=n*G,k+=n*K,N+=n*Z,C+=n*X,L+=n*Y,x+=(n=t[15])*j,w+=n*U,E+=n*M,_+=n*D,S+=n*F,A+=n*$,O+=n*H,T+=n*z,I+=n*q,B+=n*V,R+=n*W,k+=n*G,N+=n*K,C+=n*Z,L+=n*X,P+=n*Y,i+=38*w,s+=38*E,a+=38*_,u+=38*S,l+=38*A,c+=38*O,f+=38*T,p+=38*I,h+=38*B,d+=38*R,y+=38*k,g+=38*N,b+=38*C,m+=38*L,v+=38*P,o=Math.floor((n=i+// t15 left as is
// first car
(o=1)+65535)/65536),i=n-65536*o,o=Math.floor((n=s+o+65535)/65536),s=n-65536*o,o=Math.floor((n=a+o+65535)/65536),a=n-65536*o,o=Math.floor((n=u+o+65535)/65536),u=n-65536*o,o=Math.floor((n=l+o+65535)/65536),l=n-65536*o,o=Math.floor((n=c+o+65535)/65536),c=n-65536*o,o=Math.floor((n=f+o+65535)/65536),f=n-65536*o,o=Math.floor((n=p+o+65535)/65536),p=n-65536*o,o=Math.floor((n=h+o+65535)/65536),h=n-65536*o,o=Math.floor((n=d+o+65535)/65536),d=n-65536*o,o=Math.floor((n=y+o+65535)/65536),y=n-65536*o,o=Math.floor((n=g+o+65535)/65536),g=n-65536*o,o=Math.floor((n=b+o+65535)/65536),b=n-65536*o,o=Math.floor((n=m+o+65535)/65536),m=n-65536*o,o=Math.floor((n=v+o+65535)/65536),v=n-65536*o,o=Math.floor((n=x+o+65535)/65536),x=n-65536*o,i+=o-1+37*(o-1),o=Math.floor((n=i+// second car
(o=1)+65535)/65536),i=n-65536*o,o=Math.floor((n=s+o+65535)/65536),s=n-65536*o,o=Math.floor((n=a+o+65535)/65536),a=n-65536*o,o=Math.floor((n=u+o+65535)/65536),u=n-65536*o,o=Math.floor((n=l+o+65535)/65536),l=n-65536*o,o=Math.floor((n=c+o+65535)/65536),c=n-65536*o,o=Math.floor((n=f+o+65535)/65536),f=n-65536*o,o=Math.floor((n=p+o+65535)/65536),p=n-65536*o,o=Math.floor((n=h+o+65535)/65536),h=n-65536*o,o=Math.floor((n=d+o+65535)/65536),d=n-65536*o,o=Math.floor((n=y+o+65535)/65536),y=n-65536*o,o=Math.floor((n=g+o+65535)/65536),g=n-65536*o,o=Math.floor((n=b+o+65535)/65536),b=n-65536*o,o=Math.floor((n=m+o+65535)/65536),m=n-65536*o,o=Math.floor((n=v+o+65535)/65536),v=n-65536*o,o=Math.floor((n=x+o+65535)/65536),x=n-65536*o,i+=o-1+37*(o-1),e[0]=i,e[1]=s,e[2]=a,e[3]=u,e[4]=l,e[5]=c,e[6]=f,e[7]=p,e[8]=h,e[9]=d,e[10]=y,e[11]=g,e[12]=b,e[13]=m,e[14]=v,e[15]=x}function $(e,t){F(e,t,t)}function H(e,t){var n,o=r();for(n=0;n<16;n++)o[n]=t[n];for(n=253;n>=0;n--)$(o,o),2!==n&&4!==n&&F(o,o,t);for(n=0;n<16;n++)e[n]=o[n]}function z(e,t){var n,o=r();for(n=0;n<16;n++)o[n]=t[n];for(n=250;n>=0;n--)$(o,o),1!==n&&F(o,o,t);for(n=0;n<16;n++)e[n]=o[n]}function q(e,t,n){var o,i,s=new Uint8Array(32),a=new Float64Array(80),l=r(),c=r(),f=r(),p=r(),h=r(),d=r();for(i=0;i<31;i++)s[i]=t[i];for(s[31]=127&t[31]|64,s[0]&=248,U(a,n),i=0;i<16;i++)c[i]=a[i],p[i]=l[i]=f[i]=0;for(i=254,l[0]=p[0]=1;i>=0;--i)C(l,c,o=s[i>>>3]>>>(7&i)&1),C(f,p,o),M(h,l,f),D(l,l,f),M(f,c,p),D(c,c,p),$(p,h),$(d,l),F(l,f,l),F(f,c,h),M(h,l,f),D(l,l,f),$(c,l),D(f,p,d),F(l,f,u),M(l,l,p),F(f,f,l),F(l,p,d),F(p,c,a),$(c,h),C(l,c,o),C(f,p,o);for(i=0;i<16;i++)a[i+16]=l[i],a[i+32]=f[i],a[i+48]=c[i],a[i+64]=p[i];var y=a.subarray(32),g=a.subarray(16);return H(y,y),F(g,g,y),L(e,g),0}function V(e,t){return q(e,t,i)}function W(e,t){return n(t,32),V(e,t)}function G(e,t,r){var n=new Uint8Array(32);return q(n,r,t),v(e,o,n,x)}A.prototype.blocks=function(e,t,r){for(var n,o,i,s,a,u,l,c,f,p,h,d,y,g,b,m,v,x,w,E=this.fin?0:2048,_=this.h[0],S=this.h[1],A=this.h[2],O=this.h[3],T=this.h[4],I=this.h[5],B=this.h[6],R=this.h[7],k=this.h[8],N=this.h[9],C=this.r[0],L=this.r[1],P=this.r[2],j=this.r[3],U=this.r[4],M=this.r[5],D=this.r[6],F=this.r[7],$=this.r[8],H=this.r[9];r>=16;)_+=8191&(n=255&e[t+0]|(255&e[t+1])<<8),S+=(n>>>13|(o=255&e[t+2]|(255&e[t+3])<<8)<<3)&8191,A+=(o>>>10|(i=255&e[t+4]|(255&e[t+5])<<8)<<6)&8191,O+=(i>>>7|(s=255&e[t+6]|(255&e[t+7])<<8)<<9)&8191,T+=(s>>>4|(a=255&e[t+8]|(255&e[t+9])<<8)<<12)&8191,I+=a>>>1&8191,B+=(a>>>14|(u=255&e[t+10]|(255&e[t+11])<<8)<<2)&8191,R+=(u>>>11|(l=255&e[t+12]|(255&e[t+13])<<8)<<5)&8191,k+=(l>>>8|(c=255&e[t+14]|(255&e[t+15])<<8)<<8)&8191,N+=c>>>5|E,f=(p=(f=0)+_*C+S*(5*H)+A*(5*$)+O*(5*F)+T*(5*D))>>>13,p&=8191,p+=I*(5*M)+B*(5*U)+R*(5*j)+k*(5*P)+N*(5*L),f+=p>>>13,p&=8191,f=(h=f+_*L+S*C+A*(5*H)+O*(5*$)+T*(5*F))>>>13,h&=8191,h+=I*(5*D)+B*(5*M)+R*(5*U)+k*(5*j)+N*(5*P),f+=h>>>13,h&=8191,f=(d=f+_*P+S*L+A*C+O*(5*H)+T*(5*$))>>>13,d&=8191,d+=I*(5*F)+B*(5*D)+R*(5*M)+k*(5*U)+N*(5*j),f+=d>>>13,d&=8191,f=(y=f+_*j+S*P+A*L+O*C+T*(5*H))>>>13,y&=8191,y+=I*(5*$)+B*(5*F)+R*(5*D)+k*(5*M)+N*(5*U),f+=y>>>13,y&=8191,f=(g=f+_*U+S*j+A*P+O*L+T*C)>>>13,g&=8191,g+=I*(5*H)+B*(5*$)+R*(5*F)+k*(5*D)+N*(5*M),f+=g>>>13,g&=8191,f=(b=f+_*M+S*U+A*j+O*P+T*L)>>>13,b&=8191,b+=I*C+B*(5*H)+R*(5*$)+k*(5*F)+N*(5*D),f+=b>>>13,b&=8191,f=(m=f+_*D+S*M+A*U+O*j+T*P)>>>13,m&=8191,m+=I*L+B*C+R*(5*H)+k*(5*$)+N*(5*F),f+=m>>>13,m&=8191,f=(v=f+_*F+S*D+A*M+O*U+T*j)>>>13,v&=8191,v+=I*P+B*L+R*C+k*(5*H)+N*(5*$),f+=v>>>13,v&=8191,f=(x=f+_*$+S*F+A*D+O*M+T*U)>>>13,x&=8191,x+=I*j+B*P+R*L+k*C+N*(5*H),f+=x>>>13,x&=8191,f=(w=f+_*H+S*$+A*F+O*D+T*M)>>>13,w&=8191,w+=I*U+B*j+R*P+k*L+N*C,f+=w>>>13,w&=8191,p=8191&(f=(f=(f<<2)+f|0)+p|0),f>>>=13,h+=f,_=p,S=h,A=d,O=y,T=g,I=b,B=m,R=v,k=x,N=w,t+=16,r-=16;this.h[0]=_,this.h[1]=S,this.h[2]=A,this.h[3]=O,this.h[4]=T,this.h[5]=I,this.h[6]=B,this.h[7]=R,this.h[8]=k,this.h[9]=N},A.prototype.finish=function(e,t){var r,n,o,i,s=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(r=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=r,r=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,s[0]=this.h[0]+5,r=s[0]>>>13,s[0]&=8191,i=1;i<10;i++)s[i]=this.h[i]+r,r=s[i]>>>13,s[i]&=8191;for(s[9]-=8192,n=(1^r)-1,i=0;i<10;i++)s[i]&=n;for(i=0,n=~n;i<10;i++)this.h[i]=this.h[i]&n|s[i];for(i=1,this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,o=this.h[0]+this.pad[0],this.h[0]=65535&o;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255},A.prototype.update=function(e,t,r){var n,o;if(this.leftover){for((o=16-this.leftover)>r&&(o=r),n=0;n<o;n++)this.buffer[this.leftover+n]=e[t+n];if(r-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(r>=16&&(o=r-r%16,this.blocks(e,t,o),t+=o,r-=o),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=e[t+n];this.leftover+=r}};var K=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Z(e,t,r,n){for(var o,i,s,a,u,l,c,f,p,h,d,y,g,b,m,v,x,w,E,_,S,A,O,T,I,B,R=new Int32Array(16),k=new Int32Array(16),N=e[0],C=e[1],L=e[2],P=e[3],j=e[4],U=e[5],M=e[6],D=e[7],F=t[0],$=t[1],H=t[2],z=t[3],q=t[4],V=t[5],W=t[6],G=t[7],Z=0;n>=128;){for(E=0;E<16;E++)_=8*E+Z,R[E]=r[_+0]<<24|r[_+1]<<16|r[_+2]<<8|r[_+3],k[E]=r[_+4]<<24|r[_+5]<<16|r[_+6]<<8|r[_+7];for(E=0;E<80;E++)if(o=N,i=C,s=L,a=P,u=j,l=U,c=M,f=D,p=F,h=$,d=H,y=z,g=q,b=V,m=W,v=G,// add
S=D,O=65535&(A=G),T=A>>>16,I=65535&S,B=S>>>16,// Sigma1
S=(j>>>14|q<<18)^(j>>>18|q<<14)^(q>>>9|j<<23),O+=65535&(A=(q>>>14|j<<18)^(q>>>18|j<<14)^(j>>>9|q<<23)),T+=A>>>16,I+=65535&S,B+=S>>>16,// Ch
S=j&U^~j&M,O+=65535&(A=q&V^~q&W),T+=A>>>16,I+=65535&S,B+=S>>>16,// K
S=K[2*E],O+=65535&(A=K[2*E+1]),T+=A>>>16,I+=65535&S,B+=S>>>16,// w
S=R[E%16],O+=65535&(A=k[E%16]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,x=65535&I|B<<16,w=65535&O|T<<16,// add
S=x,O=65535&(A=w),T=A>>>16,I=65535&S,B=S>>>16,// Sigma0
S=(N>>>28|F<<4)^(F>>>2|N<<30)^(F>>>7|N<<25),O+=65535&(A=(F>>>28|N<<4)^(N>>>2|F<<30)^(N>>>7|F<<25)),T+=A>>>16,I+=65535&S,B+=S>>>16,// Maj
S=N&C^N&L^C&L,O+=65535&(A=F&$^F&H^$&H),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,f=65535&I|B<<16,v=65535&O|T<<16,// add
S=a,O=65535&(A=y),T=A>>>16,I=65535&S,B=S>>>16,S=x,O+=65535&(A=w),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,a=65535&I|B<<16,y=65535&O|T<<16,C=o,L=i,P=s,j=a,U=u,M=l,D=c,N=f,$=p,H=h,z=d,q=y,V=g,W=b,G=m,F=v,E%16==15)for(_=0;_<16;_++)// add
S=R[_],O=65535&(A=k[_]),T=A>>>16,I=65535&S,B=S>>>16,S=R[(_+9)%16],O+=65535&(A=k[(_+9)%16]),T+=A>>>16,I+=65535&S,B+=S>>>16,S=(// sigma0
(x=R[(_+1)%16])>>>1|(w=k[(_+1)%16])<<31)^(x>>>8|w<<24)^x>>>7,O+=65535&(A=(w>>>1|x<<31)^(w>>>8|x<<24)^(w>>>7|x<<25)),T+=A>>>16,I+=65535&S,B+=S>>>16,S=(// sigma1
(x=R[(_+14)%16])>>>19|(w=k[(_+14)%16])<<13)^(w>>>29|x<<3)^x>>>6,O+=65535&(A=(w>>>19|x<<13)^(x>>>29|w<<3)^(w>>>6|x<<26)),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,R[_]=65535&I|B<<16,k[_]=65535&O|T<<16;// add
S=N,O=65535&(A=F),T=A>>>16,I=65535&S,B=S>>>16,S=e[0],O+=65535&(A=t[0]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[0]=N=65535&I|B<<16,t[0]=F=65535&O|T<<16,S=C,O=65535&(A=$),T=A>>>16,I=65535&S,B=S>>>16,S=e[1],O+=65535&(A=t[1]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[1]=C=65535&I|B<<16,t[1]=$=65535&O|T<<16,S=L,O=65535&(A=H),T=A>>>16,I=65535&S,B=S>>>16,S=e[2],O+=65535&(A=t[2]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[2]=L=65535&I|B<<16,t[2]=H=65535&O|T<<16,S=P,O=65535&(A=z),T=A>>>16,I=65535&S,B=S>>>16,S=e[3],O+=65535&(A=t[3]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[3]=P=65535&I|B<<16,t[3]=z=65535&O|T<<16,S=j,O=65535&(A=q),T=A>>>16,I=65535&S,B=S>>>16,S=e[4],O+=65535&(A=t[4]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[4]=j=65535&I|B<<16,t[4]=q=65535&O|T<<16,S=U,O=65535&(A=V),T=A>>>16,I=65535&S,B=S>>>16,S=e[5],O+=65535&(A=t[5]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[5]=U=65535&I|B<<16,t[5]=V=65535&O|T<<16,S=M,O=65535&(A=W),T=A>>>16,I=65535&S,B=S>>>16,S=e[6],O+=65535&(A=t[6]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[6]=M=65535&I|B<<16,t[6]=W=65535&O|T<<16,S=D,O=65535&(A=G),T=A>>>16,I=65535&S,B=S>>>16,S=e[7],O+=65535&(A=t[7]),T+=A>>>16,I+=65535&S,B+=S>>>16,T+=O>>>16,I+=T>>>16,B+=I>>>16,e[7]=D=65535&I|B<<16,t[7]=G=65535&O|T<<16,Z+=128,n-=128}return n}function X(e,t,r){var n,o=new Int32Array(8),i=new Int32Array(8),s=new Uint8Array(256),a=r;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,Z(o,i,t,r),r%=128,n=0;n<r;n++)s[n]=t[a-r+n];for(s[r]=128,s[(r=256-128*(r<112?1:0))-9]=0,d(s,r-8,a/536870912|0,a<<3),Z(o,i,s,r),n=0;n<8;n++)d(e,8*n,o[n],i[n]);return 0}function Y(e,t){var n=r(),o=r(),i=r(),s=r(),a=r(),u=r(),l=r(),f=r(),p=r();D(n,e[1],e[0]),D(p,t[1],t[0]),F(n,n,p),M(o,e[0],e[1]),M(p,t[0],t[1]),F(o,o,p),F(i,e[3],t[3]),F(i,i,c),F(s,e[2],t[2]),M(s,s,s),D(a,o,n),D(u,s,i),M(l,s,i),M(f,o,n),F(e[0],a,u),F(e[1],f,l),F(e[2],l,u),F(e[3],a,f)}function J(e,t,r){var n;for(n=0;n<4;n++)C(e[n],t[n],r)}function Q(e,t){var n=r(),o=r(),i=r();H(i,t[2]),F(n,t[0],i),F(o,t[1],i),L(e,o),e[31]^=j(n)<<7}function ee(e,t,r){var n,o;for(k(e[0],s),k(e[1],a),k(e[2],a),k(e[3],s),o=255;o>=0;--o)J(e,t,n=r[o/8|0]>>(7&o)&1),Y(t,e),Y(e,e),J(e,t,n)}function et(e,t){var n=[r(),r(),r(),r()];k(n[0],f),k(n[1],p),k(n[2],a),F(n[3],f,p),ee(e,n,t)}function er(e,t,o){var i,s=new Uint8Array(64),a=[r(),r(),r(),r()];for(o||n(t,32),X(s,t,32),s[0]&=248,s[31]&=127,s[31]|=64,et(a,s),Q(e,a),i=0;i<32;i++)t[i+32]=e[i];return 0}var en=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function eo(e,t){var r,n,o,i;for(n=63;n>=32;--n){for(r=0,o=n-32,i=n-12;o<i;++o)t[o]+=r-16*t[n]*en[o-(n-32)],r=Math.floor((t[o]+128)/256),t[o]-=256*r;t[o]+=r,t[n]=0}for(o=0,r=0;o<32;o++)t[o]+=r-(t[31]>>4)*en[o],r=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=r*en[o];for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n]}function ei(e){var t,r=new Float64Array(64);for(t=0;t<64;t++)r[t]=e[t];for(t=0;t<64;t++)e[t]=0;eo(e,r)}// Note: difference from C - smlen returned, not passed as argument.
function es(e,t,n,o){var i,s,a=new Uint8Array(64),u=new Uint8Array(64),l=new Uint8Array(64),c=new Float64Array(64),f=[r(),r(),r(),r()];X(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64;var p=n+64;for(i=0;i<n;i++)e[64+i]=t[i];for(i=0;i<32;i++)e[32+i]=a[32+i];for(X(l,e.subarray(32),n+32),ei(l),et(f,l),Q(e,f),i=32;i<64;i++)e[i]=o[i];for(X(u,e,n+64),ei(u),i=0;i<64;i++)c[i]=0;for(i=0;i<32;i++)c[i]=l[i];for(i=0;i<32;i++)for(s=0;s<32;s++)c[i+s]+=u[i]*a[s];return eo(e.subarray(32),c),p}function ea(e,t,n,o){var i,u,c,f,p,d,y,g,m=new Uint8Array(32),v=new Uint8Array(64),x=[r(),r(),r(),r()],w=[r(),r(),r(),r()];if(n<64||(i=r(),u=r(),c=r(),f=r(),p=r(),d=r(),y=r(),(k(w[2],a),U(w[1],o),$(c,w[1]),F(f,c,l),D(c,c,w[2]),M(f,w[2],f),$(p,f),$(d,p),F(y,d,p),F(i,y,c),F(i,i,f),z(i,i),F(i,i,c),F(i,i,f),F(i,i,f),F(w[0],i,f),$(u,w[0]),F(u,u,f),P(u,c)&&F(w[0],w[0],h),$(u,w[0]),F(u,u,f),P(u,c))?-1:(j(w[0])===o[31]>>7&&D(w[0],s,w[0]),F(w[3],w[0],w[1]),0)))return -1;for(g=0;g<n;g++)e[g]=t[g];for(g=0;g<32;g++)e[g+32]=o[g];if(X(v,e,n),ei(v),ee(x,w,v),et(w,t.subarray(32)),Y(x,w),Q(m,x),n-=64,b(t,0,m,0)){for(g=0;g<n;g++)e[g]=0;return -1}for(g=0;g<n;g++)e[g]=t[g+64];return n}/* High-level API */function eu(e,t){if(32!==e.length)throw Error("bad key size");if(24!==t.length)throw Error("bad nonce size")}function el(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw TypeError("unexpected type, use Uint8Array")}function ec(e){for(var t=0;t<e.length;t++)e[t]=0}e.lowlevel={crypto_core_hsalsa20:v,crypto_stream_xor:S,crypto_stream:_,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:E,crypto_onetimeauth:O,crypto_onetimeauth_verify:I,crypto_verify_16:g,crypto_verify_32:b,crypto_secretbox:B,crypto_secretbox_open:R,crypto_scalarmult:q,crypto_scalarmult_base:V,crypto_box_beforenm:G,crypto_box_afternm:B,crypto_box:function(e,t,r,n,o,i){var s=new Uint8Array(32);return G(s,o,i),B(e,t,r,n,s)},crypto_box_open:function(e,t,r,n,o,i){var s=new Uint8Array(32);return G(s,o,i),R(e,t,r,n,s)},crypto_box_keypair:W,crypto_hash:X,crypto_sign:es,crypto_sign_keypair:er,crypto_sign_open:ea,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:r,D:l,L:en,pack25519:L,unpack25519:U,M:F,A:M,S:$,Z:D,pow2523:z,add:Y,set25519:k,modL:eo,scalarmult:ee,scalarbase:et},e.randomBytes=function(e){var t=new Uint8Array(e);return n(t,e),t},e.secretbox=function(e,t,r){el(e,t,r),eu(r,t);for(var n=new Uint8Array(32+e.length),o=new Uint8Array(n.length),i=0;i<e.length;i++)n[i+32]=e[i];return B(o,n,n.length,t,r),o.subarray(16)},e.secretbox.open=function(e,t,r){el(e,t,r),eu(r,t);for(var n=new Uint8Array(16+e.length),o=new Uint8Array(n.length),i=0;i<e.length;i++)n[i+16]=e[i];return n.length<32||0!==R(o,n,n.length,t,r)?null:o.subarray(32)},e.secretbox.keyLength=32,e.secretbox.nonceLength=24,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(el(e,t),32!==e.length)throw Error("bad n size");if(32!==t.length)throw Error("bad p size");var r=new Uint8Array(32);return q(r,e,t),r},e.scalarMult.base=function(e){if(el(e),32!==e.length)throw Error("bad n size");var t=new Uint8Array(32);return V(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,r,n,o){var i=e.box.before(n,o);return e.secretbox(t,r,i)},e.box.before=function(e,t){el(e,t),function(e,t){if(32!==e.length)throw Error("bad public key size");if(32!==t.length)throw Error("bad secret key size")}(e,t);var r=new Uint8Array(32);return G(r,e,t),r},e.box.after=e.secretbox,e.box.open=function(t,r,n,o){var i=e.box.before(n,o);return e.secretbox.open(t,r,i)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(32);return W(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(el(e),32!==e.length)throw Error("bad secret key size");var t=new Uint8Array(32);return V(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=32,e.box.secretKeyLength=32,e.box.sharedKeyLength=32,e.box.nonceLength=24,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(el(e,t),64!==t.length)throw Error("bad secret key size");var r=new Uint8Array(64+e.length);return es(r,e,e.length,t),r},e.sign.open=function(e,t){if(el(e,t),32!==t.length)throw Error("bad public key size");var r=new Uint8Array(e.length),n=ea(r,e,e.length,t);if(n<0)return null;for(var o=new Uint8Array(n),i=0;i<o.length;i++)o[i]=r[i];return o},e.sign.detached=function(t,r){for(var n=e.sign(t,r),o=new Uint8Array(64),i=0;i<o.length;i++)o[i]=n[i];return o},e.sign.detached.verify=function(e,t,r){if(el(e,t,r),64!==t.length)throw Error("bad signature size");if(32!==r.length)throw Error("bad public key size");var n,o=new Uint8Array(64+e.length),i=new Uint8Array(64+e.length);for(n=0;n<64;n++)o[n]=t[n];for(n=0;n<e.length;n++)o[n+64]=e[n];return ea(i,o,o.length,r)>=0},e.sign.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(64);return er(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(el(e),64!==e.length)throw Error("bad secret key size");for(var t=new Uint8Array(32),r=0;r<t.length;r++)t[r]=e[32+r];return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(el(e),32!==e.length)throw Error("bad seed size");for(var t=new Uint8Array(32),r=new Uint8Array(64),n=0;n<32;n++)r[n]=e[n];return er(t,r,!0),{publicKey:t,secretKey:r}},e.sign.publicKeyLength=32,e.sign.secretKeyLength=64,e.sign.seedLength=32,e.sign.signatureLength=64,e.hash=function(e){el(e);var t=new Uint8Array(64);return X(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return(// Zero length arguments are considered not equal.
el(e,t),0!==e.length&&0!==t.length&&e.length===t.length&&0===y(e,0,t,0,e.length))},e.setPRNG=function(e){n=e},(t="undefined"!=typeof self?self.crypto||self.msCrypto:null)&&t.getRandomValues?e.setPRNG(function(e,r){var n,o=new Uint8Array(r);for(n=0;n<r;n+=65536)t.getRandomValues(o.subarray(n,n+Math.min(r-n,65536)));for(n=0;n<r;n++)e[n]=o[n];ec(o)}):// Node.js.
(t=T("4AFFV"))&&t.randomBytes&&e.setPRNG(function(e,r){var n,o=t.randomBytes(r);for(n=0;n<r;n++)e[n]=o[n];ec(o)})}(e.exports?e.exports:self.nacl=self.nacl||{})}),T.register("1fvWc",function(e,t){var r,n,o=T("4AFFV").Buffer;r=e.exports,n=function(){var e={};function t(e){if(!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e))throw TypeError("invalid encoding")}return e.decodeUTF8=function(e){if("string"!=typeof e)throw TypeError("expected string");var t,r=unescape(encodeURIComponent(e)),n=new Uint8Array(r.length);for(t=0;t<r.length;t++)n[t]=r.charCodeAt(t);return n},e.encodeUTF8=function(e){var t,r=[];for(t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return decodeURIComponent(escape(r.join("")))},"undefined"==typeof atob?void 0!==o.from?(// Node v6 and later
e.encodeBase64=function(e){return o.from(e).toString("base64")},e.decodeBase64=function(e){return t(e),new Uint8Array(Array.prototype.slice.call(o.from(e,"base64"),0))}):(// Node earlier than v6
e.encodeBase64=function(e){return new o(e).toString("base64")},e.decodeBase64=function(e){return t(e),new Uint8Array(Array.prototype.slice.call(new o(e,"base64"),0))}):(// Browsers
e.encodeBase64=function(e){var t,r=[],n=e.length;for(t=0;t<n;t++)r.push(String.fromCharCode(e[t]));return btoa(r.join(""))},e.decodeBase64=function(e){t(e);var r,n=atob(e),o=new Uint8Array(n.length);for(r=0;r<n.length;r++)o[r]=n.charCodeAt(r);return o}),e},e.exports?e.exports=n():(r.nacl||(r.nacl={}),r.nacl.util=n())});var I={};i(I,"default",()=>ra);var B={};i(B,"log",()=>N),i(B,"listen",()=>C);/********************************************************************************
 *   Ledger Node JS API
 *   (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/var R=0,k=[],N=function(e,t,r){var n={type:e,id:String(++R),date:new Date};t&&(n.message=t),r&&(n.data=r),L(n)},C=function(e){return k.push(e),function(){var t=k.indexOf(e);-1!==t&&(// equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
k[t]=k[k.length-1],k.pop())}},L=function(e){for(var t=0;t<k.length;t++)try{k[t](e)}catch(e){console.error(e)}};"undefined"!=typeof window&&(window.__kproLogsListen=C);var P={};i(P,"splitPath",()=>ec),i(P,"decodeTxInfo",()=>ef);let j=!1,U=!1;const M={debug:1,default:2,info:2,warning:3,error:4,off:5};let D=2,F=null;const $=function(){try{let e=[];if(// Make sure all forms of normalization are supported
["NFD","NFC","NFKD","NFKC"].forEach(t=>{try{if("test"!=="test".normalize(t))throw Error("bad normalize")}catch(r){e.push(t)}}),e.length)throw Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw Error("broken implementation")}catch(e){return e.message}return null}();(s=g||(g={})).DEBUG="DEBUG",s.INFO="INFO",s.WARNING="WARNING",s.ERROR="ERROR",s.OFF="OFF",///////////////////
// Generic Errors
// Unknown Error
(a=b||(b={})).UNKNOWN_ERROR="UNKNOWN_ERROR",// Not Implemented
a.NOT_IMPLEMENTED="NOT_IMPLEMENTED",// Unsupported Operation
//   - operation
a.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",// Network Error (i.e. Ethereum Network, such as an invalid chain ID)
//   - event ("noNetwork" is not re-thrown in provider.ready; otherwise thrown)
a.NETWORK_ERROR="NETWORK_ERROR",// Some sort of bad response from the server
a.SERVER_ERROR="SERVER_ERROR",// Timeout
a.TIMEOUT="TIMEOUT",///////////////////
// Operational  Errors
// Buffer Overrun
a.BUFFER_OVERRUN="BUFFER_OVERRUN",// Numeric Fault
//   - operation: the operation being executed
//   - fault: the reason this faulted
a.NUMERIC_FAULT="NUMERIC_FAULT",///////////////////
// Argument Errors
// Missing new operator to an object
//  - name: The name of the class
a.MISSING_NEW="MISSING_NEW",// Invalid argument (e.g. value is incompatible with type) to a function:
//   - argument: The argument name that was invalid
//   - value: The value of the argument
a.INVALID_ARGUMENT="INVALID_ARGUMENT",// Missing argument to a function:
//   - count: The number of arguments received
//   - expectedCount: The number of arguments expected
a.MISSING_ARGUMENT="MISSING_ARGUMENT",// Too many arguments
//   - count: The number of arguments received
//   - expectedCount: The number of arguments expected
a.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",///////////////////
// Blockchain Errors
// Call exception
//  - transaction: the transaction
//  - address?: the contract address
//  - args?: The arguments passed into the function
//  - method?: The Solidity method signature
//  - errorSignature?: The EIP848 error signature
//  - errorArgs?: The EIP848 error parameters
//  - reason: The reason (only for EIP848 "Error(string)")
a.CALL_EXCEPTION="CALL_EXCEPTION",// Insufficient funds (< value + gasLimit * gasPrice)
//   - transaction: the transaction attempted
a.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",// Nonce has already been used
//   - transaction: the transaction attempted
a.NONCE_EXPIRED="NONCE_EXPIRED",// The replacement fee for the transaction is too low
//   - transaction: the transaction attempted
a.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",// The gas limit could not be estimated
//   - transaction: the transaction passed to estimateGas
a.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",// The transaction was replaced by one with a higher gas price
//   - reason: "cancelled", "replaced" or "repriced"
//   - cancelled: true if reason == "cancelled" or reason == "replaced")
//   - hash: original transaction hash
//   - replacement: the full TransactionsResponse for the replacement
//   - receipt: the receipt of the replacement
a.TRANSACTION_REPLACED="TRANSACTION_REPLACED",///////////////////
// Interaction Errors
// The user rejected the action, such as signing a message or sending
// a transaction
a.ACTION_REJECTED="ACTION_REJECTED";const H="0123456789abcdef";class z{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,t){let r=e.toLowerCase();null==M[r]&&this.throwArgumentError("invalid log level name","logLevel",e),D>M[r]||console.log.apply(console,t)}debug(...e){this._log(z.levels.DEBUG,e)}info(...e){this._log(z.levels.INFO,e)}warn(...e){this._log(z.levels.WARNING,e)}makeError(e,t,r){// Errors are being censored
if(U)return this.makeError("censored error",t,{});t||(t=z.errors.UNKNOWN_ERROR),r||(r={});let n=[];Object.keys(r).forEach(e=>{let t=r[e];try{if(t instanceof Uint8Array){let r="";for(let e=0;e<t.length;e++)r+=H[t[e]>>4]+H[15&t[e]];n.push(e+"=Uint8Array(0x"+r+")")}else n.push(e+"="+JSON.stringify(t))}catch(t){n.push(e+"="+JSON.stringify(r[e].toString()))}}),n.push(`code=${t}`),n.push(`version=${this.version}`);let o=e,i="";switch(t){case b.NUMERIC_FAULT:{i="NUMERIC_FAULT";let t=e;switch(t){case"overflow":case"underflow":case"division-by-zero":i+="-"+t;break;case"negative-power":case"negative-width":i+="-unsupported";break;case"unbound-bitwise-result":i+="-unbound-result"}break}case b.CALL_EXCEPTION:case b.INSUFFICIENT_FUNDS:case b.MISSING_NEW:case b.NONCE_EXPIRED:case b.REPLACEMENT_UNDERPRICED:case b.TRANSACTION_REPLACED:case b.UNPREDICTABLE_GAS_LIMIT:i=t}i&&(e+=" [ See: https://links.ethers.org/v5-errors-"+i+" ]"),n.length&&(e+=" ("+n.join(", ")+")");// @TODO: Any??
let s=Error(e);return s.reason=o,s.code=t,Object.keys(r).forEach(function(e){s[e]=r[e]}),s}throwError(e,t,r){throw this.makeError(e,t,r)}throwArgumentError(e,t,r){return this.throwError(e,z.errors.INVALID_ARGUMENT,{argument:t,value:r})}assert(e,t,r,n){e||this.throwError(t,r,n)}assertArgument(e,t,r,n){e||this.throwArgumentError(t,r,n)}checkNormalize(e){null==e&&(e="platform missing String.prototype.normalize"),$&&this.throwError("platform missing String.prototype.normalize",z.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:$})}checkSafeUint53(e,t){"number"==typeof e&&(null==t&&(t="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(t,z.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(t,z.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,t,r){r=r?": "+r:"",e<t&&this.throwError("missing argument"+r,z.errors.MISSING_ARGUMENT,{count:e,expectedCount:t}),e>t&&this.throwError("too many arguments"+r,z.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})}checkNew(e,t){(e===Object||null==e)&&this.throwError("missing new",z.errors.MISSING_NEW,{name:t.name})}checkAbstract(e,t){e===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",z.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||null==e)&&this.throwError("missing new",z.errors.MISSING_NEW,{name:t.name})}static globalLogger(){return F||(F=new z("logger/5.7.0")),F}static setCensorship(e,t){if(!e&&t&&this.globalLogger().throwError("cannot permanently disable censorship",z.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),j){if(!e)return;this.globalLogger().throwError("error censorship permanent",z.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}U=!!e,j=!!t}static setLogLevel(e){let t=M[e.toLowerCase()];if(null==t){z.globalLogger().warn("invalid log level - "+e);return}D=t}static from(e){return new z(e)}}z.errors=b,z.levels=g;const q=new z("bytes/5.7.0");///////////////////////////////
function V(e){return!!e.toHexString}function W(e){return e.slice||(e.slice=function(){let t=Array.prototype.slice.call(arguments);return W(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function G(e){return"number"==typeof e&&e==e&&e%1==0}function K(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e||!G(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(!G(r)||r<0||r>=256)return!1}return!0}function Z(e,t){if(t||(t={}),"number"==typeof e){q.checkSafeUint53(e,"invalid arrayify value");let t=[];for(;e;)t.unshift(255&e),e=parseInt(String(e/256));return 0===t.length&&t.push(0),W(new Uint8Array(t))}if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),V(e)&&(e=e.toHexString()),X(e)){let r=e.substring(2);r.length%2&&("left"===t.hexPad?r="0"+r:"right"===t.hexPad?r+="0":q.throwArgumentError("hex data is odd-length","value",e));let n=[];for(let e=0;e<r.length;e+=2)n.push(parseInt(r.substring(e,e+2),16));return W(new Uint8Array(n))}return K(e)?W(new Uint8Array(e)):q.throwArgumentError("invalid arrayify value","value",e)}function X(e,t){return"string"==typeof e&&!!e.match(/^0x[0-9A-Fa-f]*$/)&&(!t||e.length===2+2*t)}const Y="0123456789abcdef";function J(e,t){if(t||(t={}),"number"==typeof e){q.checkSafeUint53(e,"invalid hexlify value");let t="";for(;e;)t=Y[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),V(e))return e.toHexString();if(X(e))return e.length%2&&("left"===t.hexPad?e="0x0"+e.substring(2):"right"===t.hexPad?e+="0":q.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(K(e)){let t="0x";for(let r=0;r<e.length;r++){let n=e[r];t+=Y[(240&n)>>4]+Y[15&n]}return t}return q.throwArgumentError("invalid hexlify value","value",e)}const Q=new z("rlp/5.7.0");function ee(e){let t=[];for(;e;)t.unshift(255&e),e>>=8;return t}function et(e,t,r){let n=0;for(let o=0;o<r;o++)n=256*n+e[t+o];return n}function er(e,t,r,n){let o=[];for(;r<t+1+n;){let i=en(e,r);o.push(i.result),(r+=i.consumed)>t+1+n&&Q.throwError("child data too short",z.errors.BUFFER_OVERRUN,{})}return{consumed:1+n,result:o}}// returns { consumed: number, result: Object }
function en(e,t){// Array with extra length prefix
if(0===e.length&&Q.throwError("data too short",z.errors.BUFFER_OVERRUN,{}),e[t]>=248){let r=e[t]-247;t+1+r>e.length&&Q.throwError("data short segment too short",z.errors.BUFFER_OVERRUN,{});let n=et(e,t+1,r);return t+1+r+n>e.length&&Q.throwError("data long segment too short",z.errors.BUFFER_OVERRUN,{}),er(e,t,t+1+r,r+n)}if(e[t]>=192){let r=e[t]-192;return t+1+r>e.length&&Q.throwError("data array too short",z.errors.BUFFER_OVERRUN,{}),er(e,t,t+1,r)}if(e[t]>=184){let r=e[t]-183;t+1+r>e.length&&Q.throwError("data array too short",z.errors.BUFFER_OVERRUN,{});let n=et(e,t+1,r);t+1+r+n>e.length&&Q.throwError("data array too short",z.errors.BUFFER_OVERRUN,{});let o=J(e.slice(t+1+r,t+1+r+n));return{consumed:1+r+n,result:o}}if(e[t]>=128){let r=e[t]-128;t+1+r>e.length&&Q.throwError("data too short",z.errors.BUFFER_OVERRUN,{});let n=J(e.slice(t+1,t+1+r));return{consumed:1+r,result:n}}return{consumed:1,result:J(e[t])}}function eo(e){let t=Z(e),r=en(t,0);return r.consumed!==t.length&&Q.throwArgumentError("invalid rlp data","data",e),r.result}var ei={};!function(e){/*
 *      bignumber.js v9.1.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */var t,r=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,n=Math.ceil,o=Math.floor,i="[BigNumber Error] ",s=i+"Number primitive has more than 15 significant digits: ",a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];// 0 to MAX_INT32
// PRIVATE HELPER FUNCTIONS
// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
function u(e){var t=0|e;return e>0||e===t?t:t-1}// Return a coefficient array as a string of base 10 digits.
function l(e){for(var t,r,n=1,o=e.length,i=e[0]+"";n<o;){for(r=14-(t=e[n++]+"").length;r--;t="0"+t);i+=t}// Determine trailing zeros.
for(o=i.length;48===i.charCodeAt(--o););return i.slice(0,o+1||1)}// Compare the value of BigNumbers x and y.
function c(e,t){var r,n,o=e.c,i=t.c,s=e.s,a=t.s,u=e.e,l=t.e;// Either NaN?
if(!s||!a)return null;// Either zero?
if(r=o&&!o[0],n=i&&!i[0],r||n)return r?n?0:-a:s;// Signs differ?
if(s!=a)return s;// Either Infinity?
if(r=s<0,n=u==l,!o||!i)return n?0:!o^r?1:-1;// Compare exponents.
if(!n)return u>l^r?1:-1;// Compare digit by digit.
for(s=0,a=(u=o.length)<(l=i.length)?u:l;s<a;s++)if(o[s]!=i[s])return o[s]>i[s]^r?1:-1;// Compare lengths.
return u==l?0:u>l^r?1:-1}/*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */function f(e,t,r,n){if(e<t||e>r||e!==o(e))throw Error(i+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}// Assumes finite n.
function p(e){var t=e.c.length-1;return u(e.e/14)==t&&e.c[t]%2!=0}function h(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function d(e,t,r){var n,o;// Negative exponent?
if(t<0){// Prepend zeros.
for(o=r+".";++t;o+=r);e=o+e;// Positive exponent
}else // Append zeros.
if(n=e.length,++t>n){for(o=r,t-=n;--t;o+=r);e+=o}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}// EXPORT
(t=/*
   * Create and return a BigNumber constructor.
   */function e(t){var y,g,b,m,v,x,w,E,_,S=M.prototype={constructor:M,toString:null,valueOf:null},A=new M(1),// The default values below must be integers within the inclusive ranges stated.
// The values can also be changed at run-time using BigNumber.set.
// The maximum number of decimal places for operations involving division.
O=20,// toExponential, toFixed, toFormat and toPrecision, and round (default value).
// UP         0 Away from zero.
// DOWN       1 Towards zero.
// CEIL       2 Towards +Infinity.
// FLOOR      3 Towards -Infinity.
// HALF_UP    4 Towards nearest neighbour. If equidistant, up.
// HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
// HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
// HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
// HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
T=4,// The exponent value at and beneath which toString returns exponential notation.
// Number type: -7
I=-7,// Number type: 21
B=21,// The minimum exponent value, beneath which underflow to zero occurs.
// Number type: -324  (5e-324)
R=-1e7,// Number type:  308  (1.7976931348623157e+308)
// For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
k=1e7,N=!1,// The quotient (q = a / n) is calculated according to the corresponding rounding mode.
// The remainder (r) is calculated as: r = a - n * q.
//
// UP        0 The remainder is positive if the dividend is negative, else is negative.
// DOWN      1 The remainder has the same sign as the dividend.
//             This modulo mode is commonly known as 'truncated division' and is
//             equivalent to (a % n) in JavaScript.
// FLOOR     3 The remainder has the same sign as the divisor (Python %).
// HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
// EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
//             The remainder is always positive.
//
// The truncated division, floored division, Euclidian division and IEEE 754 remainder
// modes are commonly used for the modulus operation.
// Although the other rounding modes can also be used, they may not give useful results.
C=1,// If POW_PRECISION is 0, there will be unlimited significant digits.
L=0,P={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},// '-', '.', whitespace, or repeated character.
// '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
j="0123456789abcdefghijklmnopqrstuvwxyz",U=!0;//------------------------------------------------------------------------------------------
// CONSTRUCTOR
/*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */function M(e,t){var n,i,a,u,l,c,p,h,d=this;// Enable constructor call without `new`.
if(!(d instanceof M))return new M(e,t);if(null==t){if(e&&!0===e._isBigNumber){d.s=e.s,!e.c||e.e>k?d.c=d.e=null:e.e<R?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice());return}if((c="number"==typeof e)&&0*e==0){// Fast path for integers, where n < 2147483648 (2**31).
if(// Use `1 / n` to handle minus zero also.
d.s=1/e<0?(e=-e,-1):1,e===~~e){for(u=0,l=e;l>=10;l/=10,u++);u>k?d.c=d.e=null:(d.e=u,d.c=[e]);return}h=String(e)}else{if(!r.test(h=String(e)))return _(d,h,c);d.s=45==h.charCodeAt(0)?(h=h.slice(1),-1):1}(u=h.indexOf("."))>-1&&(h=h.replace(".","")),(l=h.search(/e/i))>0?(u<0&&(u=l),u+=+h.slice(l+1),h=h.substring(0,l)):u<0&&(u=h.length)}else{// Allow exponential notation to be used with base 10 argument, while
// also rounding to DECIMAL_PLACES as with other bases.
if(// '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
f(t,2,j.length,"Base"),10==t&&U)return H(d=new M(e),O+d.e+1,T);if(h=String(e),c="number"==typeof e){// Avoid potential interpretation of Infinity and NaN as base 44+ values.
if(0*e!=0)return _(d,h,c,t);// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
if(d.s=1/e<0?(h=h.slice(1),-1):1,M.DEBUG&&h.replace(/^0\.0*|\./,"").length>15)throw Error(s+e)}else d.s=45===h.charCodeAt(0)?(h=h.slice(1),-1):1;// Check that str is a valid base b number.
// Don't use RegExp, so alphabet can contain special characters.
for(n=j.slice(0,t),u=l=0,p=h.length;l<p;l++)if(0>n.indexOf(i=h.charAt(l))){if("."==i){if(l>u){u=p;continue}}else if(!a&&(h==h.toUpperCase()&&(h=h.toLowerCase())||h==h.toLowerCase()&&(h=h.toUpperCase()))){a=!0,l=-1,u=0;continue}return _(d,String(e),c,t)}// Prevent later check for length on converted number.
c=!1,(u=(h=E(h,t,10,d.s)).indexOf("."))>-1?h=h.replace(".",""):u=h.length}// Determine leading zeros.
for(l=0;48===h.charCodeAt(l);l++);// Determine trailing zeros.
for(p=h.length;48===h.charCodeAt(--p););if(h=h.slice(l,++p)){// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
if(p-=l,c&&M.DEBUG&&p>15&&(e>9007199254740991||e!==o(e)))throw Error(s+d.s*e);// Overflow?
if((u=u-l-1)>k)d.c=d.e=null;else if(u<R)d.c=[d.e=0];else{if(d.e=u,d.c=[],// Transform base
// e is the base 10 exponent.
// i is where to slice str to get the first element of the coefficient array.
l=(u+1)%14,u<0&&(l+=14),l<p){for(l&&d.c.push(+h.slice(0,l)),p-=14;l<p;)d.c.push(+h.slice(l,l+=14));l=14-(h=h.slice(l)).length}else l-=p;for(;l--;h+="0");d.c.push(+h)}}else d.c=[d.e=0]}/*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */function D(e,t,r,n){var o,i,s,a,u;if(null==r?r=T:f(r,0,8),!e.c)return e.toString();if(o=e.c[0],s=e.e,null==t)u=l(e.c),u=1==n||2==n&&(s<=I||s>=B)?h(u,s):d(u,s,"0");else // toPrecision returns exponential notation if the number of significant digits
// specified is less than the number of digits necessary to represent the integer
// part of the value in fixed-point notation.
// Exponential notation.
if(// n.e may have changed if the value was rounded up.
i=(e=H(new M(e),t,r)).e,a=(u=l(e.c)).length,1==n||2==n&&(t<=i||i<=I)){// Append zeros?
for(;a<t;u+="0",a++);u=h(u,i);// Fixed-point notation.
}else // Append zeros?
if(t-=s,u=d(u,i,"0"),i+1>a){if(--t>0)for(u+=".";t--;u+="0");}else if((t+=i-a)>0)for(i+1==a&&(u+=".");t--;u+="0");return e.s<0&&o?"-"+u:u}// Handle BigNumber.max and BigNumber.min.
// If any number is NaN, return NaN.
function F(e,t){for(var r,n,o=1,i=new M(e[0]);o<e.length;o++)(n=new M(e[o])).s&&(r=c(i,n))!==t&&(0!==r||i.s!==t)||(i=n);return i}/*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */function $(e,t,r){// Remove trailing zeros.
for(var n=1,o=t.length;!t[--o];t.pop());// Calculate the base 10 exponent. First get the number of digits of c[0].
for(o=t[0];o>=10;o/=10,n++);return(r=n+14*r-1)>k?e.c=e.e=null:r<R?e.c=[e.e=0]:(e.e=r,e.c=t),e}/*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */function H(e,t,r,i){var s,u,l,c,f,p,h,d=e.c;// if x is not Infinity or NaN...
if(d){// rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
// n is a base 1e14 number, the value of the element of array x.c containing rd.
// ni is the index of n within x.c.
// d is the number of digits of n.
// i is the index of rd within n including leading zeros.
// j is the actual index of rd within n (if < 0, rd is a leading zero).
n:{// Get the number of digits of the first element of xc.
for(s=1,c=d[0];c>=10;c/=10,s++);// If the rounding digit is in the first element of xc...
if((u=t-s)<0)u+=14,l=t,// Get the rounding digit at index j of n.
h=o((f=d[p=0])/a[s-l-1]%10);else if((p=n((u+1)/14))>=d.length){if(i){// Needed by sqrt.
for(;d.length<=p;d.push(0));f=h=0,s=1,u%=14,l=u-14+1}else break n}else{// Get the number of digits of n.
for(s=1,f=c=d[p];c>=10;c/=10,s++);// Get the index of rd within n.
u%=14,// Get the rounding digit at index j of n.
h=// Get the index of rd within n, adjusted for leading zeros.
// The number of leading zeros of n is given by LOG_BASE - d.
(l=u-14+s)<0?0:o(f/a[s-l-1]%10)}if(i=i||t<0||// Are there any non-zero digits after the rounding digit?
// The expression  n % pows10[d - j - 1]  returns all digits of n to the right
// of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
null!=d[p+1]||(l<0?f:f%a[s-l-1]),i=r<4?(h||i)&&(0==r||r==(e.s<0?3:2)):h>5||5==h&&(4==r||i||6==r&&(u>0?l>0?f/a[s-l]:0:d[p-1])%10&1||r==(e.s<0?8:7)),t<1||!d[0])return d.length=0,i?(// Convert sd to decimal places.
t-=e.e+1,// 1, 0.1, 0.01, 0.001, 0.0001 etc.
d[0]=a[(14-t%14)%14],e.e=-t||0):d[0]=e.e=0,e;// Round up?
if(0==u?(d.length=p,c=1,p--):(d.length=p+1,c=a[14-u],// E.g. 56700 becomes 56000 if 7 is the rounding digit.
// j > 0 means i > number of leading zeros of n.
d[p]=l>0?o(f/a[s-l]%a[l])*c:0),i)for(;;)if(0==p){// i will be the length of xc[0] before k is added.
for(u=1,l=d[0];l>=10;l/=10,u++);for(l=d[0]+=c,c=1;l>=10;l/=10,c++);u!=c&&(e.e++,1e14==d[0]&&(d[0]=1));break}else{if(d[p]+=c,1e14!=d[p])break;d[p--]=0,c=1}// Remove trailing zeros.
for(u=d.length;0===d[--u];d.pop());}// Overflow? Infinity.
e.e>k?e.c=e.e=null:e.e<R&&(e.c=[e.e=0])}return e}function z(e){var t,r=e.e;return null===r?e.toString():(t=l(e.c),t=r<=I||r>=B?h(t,r):d(t,r,"0"),e.s<0?"-"+t:t)}return(// CONSTRUCTOR PROPERTIES
M.clone=e,M.ROUND_UP=0,M.ROUND_DOWN=1,M.ROUND_CEIL=2,M.ROUND_FLOOR=3,M.ROUND_HALF_UP=4,M.ROUND_HALF_DOWN=5,M.ROUND_HALF_EVEN=6,M.ROUND_HALF_CEIL=7,M.ROUND_HALF_FLOOR=8,M.EUCLID=9,/*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */M.config=M.set=function(e){var t,r;if(null!=e){if("object"==typeof e){// RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
// [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
// '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(f(r=e[t],0,1e9,t),O=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(f(r=e[t],0,8,t),T=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(f(r[0],-1e9,0,t),f(r[1],0,1e9,t),I=r[0],B=r[1]):(f(r,-1e9,1e9,t),I=-(B=r<0?-r:r))),e.hasOwnProperty(t="RANGE")){if((r=e[t])&&r.pop)f(r[0],-1e9,-1,t),f(r[1],1,1e9,t),R=r[0],k=r[1];else if(f(r,-1e9,1e9,t),r)R=-(k=r<0?-r:r);else throw Error(i+t+" cannot be zero: "+r)}// CRYPTO {boolean} true or false.
// '[BigNumber Error] CRYPTO not true or false: {v}'
// '[BigNumber Error] crypto unavailable'
if(e.hasOwnProperty(t="CRYPTO")){if(!!(r=e[t])===r){if(r){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))N=r;else throw N=!r,Error(i+"crypto unavailable")}else N=r}else throw Error(i+t+" not true or false: "+r)}// FORMAT {object}
// '[BigNumber Error] FORMAT not an object: {v}'
if(e.hasOwnProperty(t="MODULO_MODE")&&(f(r=e[t],0,9,t),C=r),e.hasOwnProperty(t="POW_PRECISION")&&(f(r=e[t],0,1e9,t),L=r),e.hasOwnProperty(t="FORMAT")){if("object"==typeof(r=e[t]))P=r;else throw Error(i+t+" not an object: "+r)}// ALPHABET {string}
// '[BigNumber Error] ALPHABET invalid: {v}'
if(e.hasOwnProperty(t="ALPHABET")){// Disallow if less than two characters,
// or if it contains '+', '-', '.', whitespace, or a repeated character.
if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(i+t+" invalid: "+r);U="0123456789"==r.slice(0,10),j=r}}else throw Error(i+"Object expected: "+e)}return{DECIMAL_PLACES:O,ROUNDING_MODE:T,EXPONENTIAL_AT:[I,B],RANGE:[R,k],CRYPTO:N,MODULO_MODE:C,POW_PRECISION:L,FORMAT:P,ALPHABET:j}},/*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */M.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!M.DEBUG)return!0;var t,r,n=e.c,s=e.e,a=e.s;n:if("[object Array]"==({}).toString.call(n)){if((1===a||-1===a)&&s>=-1e9&&s<=1e9&&s===o(s)){// If the first element is zero, the BigNumber value must be zero.
if(0===n[0]){if(0===s&&1===n.length)return!0;break n}// Calculate number of digits of c[0].
//if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
if(// Calculate number of digits that c[0] should have, based on the exponent.
(t=(s+1)%14)<1&&(t+=14),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=1e14||r!==o(r))break n;// Last element cannot be zero, unless it is the only element.
if(0!==r)return!0}}}else if(null===n&&null===s&&(null===a||1===a||-1===a))return!0;throw Error(i+"Invalid BigNumber: "+e)},/*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */M.maximum=M.max=function(){return F(arguments,-1)},/*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */M.minimum=M.min=function(){return F(arguments,1)},/*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */M.random=(y=9007199254740992*Math.random()&2097151?function(){return o(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(e){var t,r,s,u,l,c=0,p=[],h=new M(A);if(null==e?e=O:f(e,0,1e9),u=n(e/14),N){// Browsers supporting crypto.getRandomValues.
if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(u*=2));c<u;)// Rejection sampling:
// 0 <= v < 9007199254740992
// Probability that v >= 9e15, is
// 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
// 53 bits:
// ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
// 11111 11111111 11111111 11111111 11100000 00000000 00000000
// ((Math.pow(2, 32) - 1) >>> 11).toString(2)
//                                     11111 11111111 11111111
// 0x20000 is 2^21.
(l=131072*t[c]+(t[c+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[c]=r[0],t[c+1]=r[1]):(// 0 <= v <= 8999999999999999
// 0 <= (v % 1e14) <= 99999999999999
p.push(l%1e14),c+=2);c=u/2;// Node.js supporting crypto.randomBytes.
}else if(crypto.randomBytes){for(// buffer
t=crypto.randomBytes(u*=7);c<u;)// 0x1000000000000 is 2^48, 0x10000000000 is 2^40
// 0x100000000 is 2^32, 0x1000000 is 2^24
// 11111 11111111 11111111 11111111 11111111 11111111 11111111
// 0 <= v < 9007199254740992
(l=(31&t[c])*281474976710656+1099511627776*t[c+1]+4294967296*t[c+2]+16777216*t[c+3]+(t[c+4]<<16)+(t[c+5]<<8)+t[c+6])>=9e15?crypto.randomBytes(7).copy(t,c):(// 0 <= (v % 1e14) <= 99999999999999
p.push(l%1e14),c+=7);c=u/7}else throw N=!1,Error(i+"crypto unavailable")}// Use Math.random.
if(!N)for(;c<u;)(l=y())<9e15&&(p[c++]=l%1e14);// Remove trailing elements which are zero.
for(u=p[--c],e%=14,u&&e&&(l=a[14-e],p[c]=o(u/l)*l);0===p[c];p.pop(),c--);// Zero?
if(c<0)p=[s=0];else{// Remove leading elements which are zero and adjust exponent accordingly.
for(s=-1;0===p[0];p.splice(0,1),s-=14);// Count the digits of the first element of c to determine leading zeros, and...
for(c=1,l=p[0];l>=10;l/=10,c++);// adjust the exponent accordingly.
c<14&&(s-=14-c)}return h.e=s,h.c=p,h}),/*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */M.sum=function(){for(var e=1,t=arguments,r=new M(t[0]);e<t.length;)r=r.plus(t[e++]);return r},// PRIVATE FUNCTIONS
// Called by BigNumber and BigNumber.prototype.toString.
E=function(){var e="0123456789";/*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */function t(e,t,r,n){for(var o,i,s=[0],a=0,u=e.length;a<u;){for(i=s.length;i--;s[i]*=t);for(s[0]+=n.indexOf(e.charAt(a++)),o=0;o<s.length;o++)s[o]>r-1&&(null==s[o+1]&&(s[o+1]=0),s[o+1]+=s[o]/r|0,s[o]%=r)}return s.reverse()}// Convert a numeric string of baseIn to a numeric string of baseOut.
// If the caller is toString, we are converting from base 10 to baseOut.
// If the caller is BigNumber, we are converting from baseIn to base 10.
return function(r,n,o,i,s){var a,u,c,f,p,h,y,g,b=r.indexOf("."),m=O,v=T;// Remove trailing zeros.
for(b>=0&&(f=L,// Unlimited precision.
L=0,r=r.replace(".",""),h=(g=new M(n)).pow(r.length-b),L=f,// Convert str as if an integer, then restore the fraction part by dividing the
// result by its base raised to a power.
g.c=t(d(l(h.c),h.e,"0"),10,o,e),g.e=g.c.length),// xc now represents str as an integer and converted to baseOut. e is the exponent.
c=f=// Convert the number as integer.
(y=t(r,n,o,s?(a=j,e):(a=e,j))).length;0==y[--f];y.pop());// Zero?
if(!y[0])return a.charAt(0);// If the index of the rounding digit is not greater than zero, or xc represents
// zero, then the result of the base conversion is zero or, if rounding up, a value
// such as 0.00001.
if(b<0?--c:(h.c=y,h.e=c,// The sign is needed for correct rounding.
h.s=i,y=(h=w(h,g,m,v,o)).c,p=h.r,c=h.e),// The rounding digit: the digit to the right of the digit that may be rounded up.
b=y[// xc now represents str converted to baseOut.
// THe index of the rounding digit.
u=c+m+1],// Look at the rounding digits and mode to determine whether to round up.
f=o/2,p=p||u<0||null!=y[u+1],p=v<4?(null!=b||p)&&(0==v||v==(h.s<0?3:2)):b>f||b==f&&(4==v||p||6==v&&1&y[u-1]||v==(h.s<0?8:7)),u<1||!y[0])r=p?d(a.charAt(1),-m,a.charAt(0)):a.charAt(0);else{// Round up?
if(// Truncate xc to the required number of decimal places.
y.length=u,p)for(--o;++y[--u]>o;)y[u]=0,u||(++c,y=[1].concat(y));// Determine trailing zeros.
for(f=y.length;!y[--f];);// E.g. [4, 11, 15] becomes 4bf.
for(b=0,r="";b<=f;r+=a.charAt(y[b++]));// Add leading zeros, decimal point and trailing zeros as required.
r=d(r,c,a.charAt(0))}// The caller will add the sign.
return r}}(),// Perform division in the specified base. Called by div and convertBase.
w=function(){// Assume non-zero x and k.
function e(e,t,r){var n,o,i,s,a=0,u=e.length,l=t%1e7,c=t/1e7|0;for(e=e.slice();u--;)n=c*(i=e[u]%1e7)+(s=e[u]/1e7|0)*l,a=((o=l*i+n%1e7*1e7+a)/r|0)+(n/1e7|0)+c*s,e[u]=o%r;return a&&(e=[a].concat(e)),e}function t(e,t,r,n){var o,i;if(r!=n)i=r>n?1:-1;else for(o=i=0;o<r;o++)if(e[o]!=t[o]){i=e[o]>t[o]?1:-1;break}return i}function r(e,t,r,n){// Subtract b from a.
for(var o=0;r--;)e[r]-=o,o=e[r]<t[r]?1:0,e[r]=o*n+e[r]-t[r];// Remove leading zeros.
for(;!e[0]&&e.length>1;e.splice(0,1));}// x: dividend, y: divisor.
return function(n,i,s,a,l){var c,f,p,h,d,y,g,b,m,v,x,w,E,_,S,A,O,T=n.s==i.s?1:-1,I=n.c,B=i.c;// Either NaN, Infinity or 0?
if(!I||!I[0]||!B||!B[0])return new M(n.s&&i.s&&(I?!B||I[0]!=B[0]:B)?I&&0==I[0]||!B?0*T:T/0:NaN);// Result exponent may be one less then the current value of e.
// The coefficients of the BigNumbers from convertBase may have trailing zeros.
for(m=(b=new M(T)).c=[],T=s+(f=n.e-i.e)+1,l||(l=1e14,f=u(n.e/14)-u(i.e/14),T=T/14|0),p=0;B[p]==(I[p]||0);p++);if(B[p]>(I[p]||0)&&f--,T<0)m.push(1),h=!0;else{// Add zeros to make remainder as long as divisor.
for(_=I.length,A=B.length,p=0,T+=2,// Normalise xc and yc so highest order digit of yc is >= base / 2.
(d=o(l/(B[0]+1)))>1&&(B=e(B,d,l),I=e(I,d,l),A=B.length,_=I.length),E=A,x=(v=I.slice(0,A)).length;x<A;v[x++]=0);O=[0].concat(O=B.slice()),S=B[0],B[1]>=l/2&&S++;// Not necessary, but to prevent trial digit n > base, when using base 3.
// else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
do{// If divisor < remainder.
if(d=0,// Compare divisor and remainder.
(c=t(B,v,A,x))<0){//  Algorithm:
//  product = divisor multiplied by trial digit (n).
//  Compare product and remainder.
//  If product is greater than remainder:
//    Subtract divisor from product, decrement trial digit.
//  Subtract product from remainder.
//  If product was less than remainder at the last compare:
//    Compare new remainder and divisor.
//    If remainder is greater than divisor:
//      Subtract divisor from remainder, increment trial digit.
if(// Calculate trial digit, n.
w=v[0],A!=x&&(w=w*l+(v[1]||0)),// n is how many times the divisor goes into the current remainder.
(d=o(w/S))>1)// Compare product and remainder.
// If product > remainder then trial digit n too high.
// n is 1 too high about 5% of the time, and is not known to have
// ever been more than 1 too high.
for(d>=l&&(d=l-1),g=// product = divisor * trial digit.
(y=e(B,d,l)).length,x=v.length;1==t(y,v,g,x);)d--,// Subtract divisor from product.
r(y,A<g?O:B,g,l),g=y.length,c=1;else 0==d&&(c=d=1),g=// product = divisor
(y=B.slice()).length;// If product was < remainder.
if(g<x&&(y=[0].concat(y)),// Subtract product from remainder.
r(v,y,x,l),x=v.length,-1==c)// If divisor < new remainder, subtract divisor from remainder.
// Trial digit n too low.
// n is 1 too low about 5% of the time, and very rarely 2 too low.
for(;1>t(B,v,A,x);)d++,// Subtract divisor from remainder.
r(v,A<x?O:B,x,l),x=v.length}else 0===c&&(d++,v=[0]);// else cmp === 1 and n will be 0
// Add the next digit, n, to the result array.
m[p++]=d,v[0]?v[x++]=I[E]||0:(v=[I[E]],x=1)}while((E++<_||null!=v[0])&&T--)h=null!=v[0],m[0]||m.splice(0,1)}if(1e14==l){// To calculate q.e, first get the number of digits of qc[0].
for(p=1,T=m[0];T>=10;T/=10,p++);H(b,s+(b.e=p+14*f-1)+1,a,h);// Caller is convertBase.
}else b.e=f,b.r=+h;return b}}(),g=/^(-?)0([xbo])(?=\w[\w.]*$)/i,b=/^([^.]+)\.$/,m=/^\.([^.]+)$/,v=/^-?(Infinity|NaN)$/,x=/^\s*\+(?=[\w.])|^\s+|\s+$/g,// Handle values that fail the validity test in BigNumber.
_=function(e,t,r,n){var o,s=r?t:t.replace(x,"");// No exception on ±Infinity or NaN.
if(v.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!r&&(// basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
s=s.replace(g,function(e,t,r){return o="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=o?e:t}),n&&(o=n,// E.g. '1.' to '1', '.1' to '0.1'
s=s.replace(b,"$1").replace(m,"0.$1")),t!=s))return new M(s,o);// '[BigNumber Error] Not a number: {n}'
// '[BigNumber Error] Not a base {b} number: {n}'
if(M.DEBUG)throw Error(i+"Not a"+(n?" base "+n:"")+" number: "+t);// NaN
e.s=null}e.c=e.e=null},// PROTOTYPE/INSTANCE METHODS
/*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */S.absoluteValue=S.abs=function(){var e=new M(this);return e.s<0&&(e.s=1),e},/*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */S.comparedTo=function(e,t){return c(this,new M(e,t))},/*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */S.decimalPlaces=S.dp=function(e,t){var r,n,o;if(null!=e)return f(e,0,1e9),null==t?t=T:f(t,0,8),H(new M(this),e+this.e+1,t);if(!(r=this.c))return null;// Subtract the number of trailing zeros of the last number.
if(n=((o=r.length-1)-u(this.e/14))*14,o=r[o])for(;o%10==0;o/=10,n--);return n<0&&(n=0),n},/*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */S.dividedBy=S.div=function(e,t){return w(this,new M(e,t),O,T)},/*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */S.dividedToIntegerBy=S.idiv=function(e,t){return w(this,new M(e,t),0,1)},/*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */S.exponentiatedBy=S.pow=function(e,t){var r,s,a,u,l,c,f,h,d,y=this;// Allow NaN and ±Infinity, but not other non-integers.
if((e=new M(e)).c&&!e.isInteger())throw Error(i+"Exponent not an integer: "+z(e));// If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
if(null!=t&&(t=new M(t)),// Exponent of MAX_SAFE_INTEGER is 15.
c=e.e>14,!y.c||!y.c[0]||1==y.c[0]&&!y.e&&1==y.c.length||!e.c||!e.c[0])return(// The sign of the result of pow when x is negative depends on the evenness of n.
// If +n overflows to ±Infinity, the evenness of n would be not be known.
d=new M(Math.pow(+z(y),c?e.s*(2-p(e)):+z(e))),t?d.mod(t):d);if(f=e.s<0,t){// x % m returns NaN if abs(m) is zero, or m is NaN.
if(t.c?!t.c[0]:!t.s)return new M(NaN);(s=!f&&y.isInteger()&&t.isInteger())&&(y=y.mod(t));// Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
// Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
}else{if(e.e>9&&(y.e>0||y.e<-1||(0==y.e?y.c[0]>1||c&&y.c[1]>=24e7:y.c[0]<8e13||c&&y.c[0]<=9999975e7)))// If n is negative return ±0, else return ±Infinity.
return(// If x is negative and n is odd, k = -0, else k = 0.
u=y.s<0&&p(e)?-0:0,y.e>-1&&(u=1/u),new M(f?1/u:u));L&&// equates to truncating significant digits to POW_PRECISION + [28, 41],
// i.e. there will be a minimum of 28 guard digits retained.
(u=n(L/14+2))}// Performs 54 loop iterations for n of 9007199254740991.
for(c?(r=new M(.5),f&&(e.s=1),h=p(e)):h=(a=Math.abs(+z(e)))%2,d=new M(A);;){if(h){if(!(d=d.times(y)).c)break;u?d.c.length>u&&(d.c.length=u):s&&(d=d.mod(t));//y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
}if(a){if(0===(a=o(a/2)))break;h=a%2}else if(H(e=e.times(r),e.e+1,1),e.e>14)h=p(e);else{if(0==(a=+z(e)))break;h=a%2}y=y.times(y),u?y.c&&y.c.length>u&&(y.c.length=u):s&&(y=y.mod(t))}return s?d:(f&&(d=A.div(d)),t?d.mod(t):u?H(d,L,T,l):d)},/*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */S.integerValue=function(e){var t=new M(this);return null==e?e=T:f(e,0,8),H(t,t.e+1,e)},/*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */S.isEqualTo=S.eq=function(e,t){return 0===c(this,new M(e,t))},/*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */S.isFinite=function(){return!!this.c},/*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */S.isGreaterThan=S.gt=function(e,t){return c(this,new M(e,t))>0},/*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */S.isGreaterThanOrEqualTo=S.gte=function(e,t){return 1===(t=c(this,new M(e,t)))||0===t},/*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */S.isInteger=function(){return!!this.c&&u(this.e/14)>this.c.length-2},/*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */S.isLessThan=S.lt=function(e,t){return 0>c(this,new M(e,t))},/*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */S.isLessThanOrEqualTo=S.lte=function(e,t){return -1===(t=c(this,new M(e,t)))||0===t},/*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */S.isNaN=function(){return!this.s},/*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */S.isNegative=function(){return this.s<0},/*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */S.isPositive=function(){return this.s>0},/*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */S.isZero=function(){return!!this.c&&0==this.c[0]},/*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */S.minus=function(e,t){var r,n,o,i,s=this.s;// Either NaN?
if(t=(e=new M(e,t)).s,!s||!t)return new M(NaN);// Signs differ?
if(s!=t)return e.s=-t,this.plus(e);var a=this.e/14,l=e.e/14,c=this.c,f=e.c;if(!a||!l){// Either Infinity?
if(!c||!f)return c?(e.s=-t,e):new M(f?this:NaN);// Either zero?
if(!c[0]||!f[0])return f[0]?(e.s=-t,e):new M(c[0]?this:3==T?-0:0)}// Determine which is the bigger number.
if(a=u(a),l=u(l),c=c.slice(),s=a-l){// Prepend zeros to equalise exponents.
for((i=s<0)?(s=-s,o=c):(l=a,o=f),o.reverse(),t=s;t--;o.push(0));o.reverse()}else for(// Exponents equal. Check digit by digit.
n=(i=(s=c.length)<(t=f.length))?s:t,s=t=0;t<n;t++)if(c[t]!=f[t]){i=c[t]<f[t];break}// Append zeros to xc if shorter.
// No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
if(i&&(o=c,c=f,f=o,e.s=-e.s),(t=(n=f.length)-(r=c.length))>0)for(;t--;c[r++]=0);// Subtract yc from xc.
for(t=1e14-1;n>s;){if(c[--n]<f[n]){for(r=n;r&&!c[--r];c[r]=t);--c[r],c[n]+=1e14}c[n]-=f[n]}// Remove leading zeros and adjust exponent accordingly.
for(;0==c[0];c.splice(0,1),--l);return(// Zero?
c[0]?$(e,c,l):(// Following IEEE 754 (2008) 6.3,
// n - n = +0  but  n - n = -0  when rounding towards -Infinity.
e.s=3==T?-1:1,e.c=[e.e=0],e))},/*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */S.modulo=S.mod=function(e,t){var r,n;return(// Return NaN if x is Infinity or NaN, or y is NaN or zero.
(e=new M(e,t),this.c&&e.s&&(!e.c||e.c[0]))?e.c&&(!this.c||this.c[0])?(9==C?(// Euclidian division: q = sign(y) * floor(x / abs(y))
// r = x - qy    where  0 <= r < abs(y)
n=e.s,e.s=1,r=w(this,e,0,3),e.s=n,r.s*=n):r=w(this,e,0,C),(e=this.minus(r.times(e))).c[0]||1!=C||(e.s=this.s),e):new M(this):new M(NaN))},/*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */S.multipliedBy=S.times=function(e,t){var r,n,o,i,s,a,l,c,f,p,h,d,y,g=this.c,b=(e=new M(e,t)).c;// Either NaN, ±Infinity or ±0?
if(!g||!b||!g[0]||!b[0])return this.s&&e.s&&(!g||g[0]||b)&&(!b||b[0]||g)?(e.s*=this.s,g&&b?(e.c=[0],e.e=0):e.c=e.e=null):e.c=e.e=e.s=null,e;// Initialise the result array with zeros.
for(n=u(this.e/14)+u(e.e/14),e.s*=this.s,(l=g.length)<(p=b.length)&&(y=g,g=b,b=y,o=l,l=p,p=o),o=l+p,y=[];o--;y.push(0));for(o=p;--o>=0;){for(r=0,h=b[o]%1e7,d=b[o]/1e7|0,i=o+(s=l);i>o;)a=d*(c=g[--s]%1e7)+(f=g[s]/1e7|0)*h,r=((c=h*c+a%1e7*1e7+y[i]+r)/1e14|0)+(a/1e7|0)+d*f,y[i--]=c%1e14;y[i]=r}return r?++n:y.splice(0,1),$(e,y,n)},/*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */S.negated=function(){var e=new M(this);return e.s=-e.s||null,e},/*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */S.plus=function(e,t){var r,n=this.s;// Either NaN?
if(t=(e=new M(e,t)).s,!n||!t)return new M(NaN);// Signs differ?
if(n!=t)return e.s=-t,this.minus(e);var o=this.e/14,i=e.e/14,s=this.c,a=e.c;if(!o||!i){// Return ±Infinity if either ±Infinity.
if(!s||!a)return new M(n/0);// Either zero?
// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
if(!s[0]||!a[0])return a[0]?e:new M(s[0]?this:0*n)}// Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
if(o=u(o),i=u(i),s=s.slice(),n=o-i){for(n>0?(i=o,r=a):(n=-n,r=s),r.reverse();n--;r.push(0));r.reverse()}// Only start adding at yc.length - 1 as the further digits of xc can be ignored.
for((n=s.length)-(t=a.length)<0&&(r=a,a=s,s=r,t=n),n=0;t;)n=(s[--t]=s[t]+a[t]+n)/1e14|0,s[t]=1e14===s[t]?0:s[t]%1e14;// No need to check for zero, as +x + +y != 0 && -x + -y != 0
// ye = MAX_EXP + 1 possible
return n&&(s=[n].concat(s),++i),$(e,s,i)},/*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */S.precision=S.sd=function(e,t){var r,n,o;if(null!=e&&!!e!==e)return f(e,1,1e9),null==t?t=T:f(t,0,8),H(new M(this),e,t);if(!(r=this.c))return null;if(n=14*(o=r.length-1)+1,o=r[o]){// Subtract the number of trailing zeros of the last element.
for(;o%10==0;o/=10,n--);// Add the number of digits of the first element.
for(o=r[0];o>=10;o/=10,n++);}return e&&this.e+1>n&&(n=this.e+1),n},/*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */S.shiftedBy=function(e){return f(e,-9007199254740991,9007199254740991),this.times("1e"+e)},/*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */S.squareRoot=S.sqrt=function(){var e,t,r,n,o,i=this.c,s=this.s,a=this.e,c=O+4,f=new M("0.5");// Negative/NaN/Infinity/zero?
if(1!==s||!i||!i[0])return new M(!s||s<0&&(!i||i[0])?NaN:i?this:1/0);// Check for zero.
// r could be zero if MIN_EXP is changed after the this value was created.
// This would cause a division by zero (x/t) and hence Infinity below, which would cause
// coeffToString to throw.
if(0==// Initial estimate.
(s=Math.sqrt(+z(this)))||s==1/0?(((t=l(i)).length+a)%2==0&&(t+="0"),s=Math.sqrt(+t),a=u((a+1)/2)-(a<0||a%2),t=s==1/0?"5e"+a:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+a,r=new M(t)):r=new M(s+""),r.c[0])// Newton-Raphson iteration.
{for((s=(a=r.e)+c)<3&&(s=0);;)if(o=r,r=f.times(o.plus(w(this,o,c,1))),l(o.c).slice(0,s)===(t=l(r.c)).slice(0,s)){// The 4th rounding digit may be in error by -1 so if the 4 rounding digits
// are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
// iteration.
if(r.e<a&&--s,"9999"!=(t=t.slice(s-3,s+1))&&(n||"4999"!=t)){// If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
// result. If not, then there are further digits and m will be truthy.
+t&&(+t.slice(1)||"5"!=t.charAt(0))||(// Truncate to the first rounding digit.
H(r,r.e+O+2,1),e=!r.times(r).eq(this));break}// On the first iteration only, check to see if rounding up gives the
// exact result as the nines may infinitely repeat.
if(!n&&(H(o,o.e+O+2,0),o.times(o).eq(this))){r=o;break}c+=4,s+=4,n=1}}return H(r,r.e+O+1,T,e)},/*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */S.toExponential=function(e,t){return null!=e&&(f(e,0,1e9),e++),D(this,e,t,1)},/*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */S.toFixed=function(e,t){return null!=e&&(f(e,0,1e9),e=e+this.e+1),D(this,e,t)},/*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */S.toFormat=function(e,t,r){var n;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=P;else if("object"!=typeof r)throw Error(i+"Argument not an object: "+r);if(n=this.toFixed(e,t),this.c){var o,s=n.split("."),a=+r.groupSize,u=+r.secondaryGroupSize,l=r.groupSeparator||"",c=s[0],f=s[1],p=this.s<0,h=p?c.slice(1):c,d=h.length;if(u&&(o=a,a=u,u=o,d-=o),a>0&&d>0){for(o=d%a||a,c=h.substr(0,o);o<d;o+=a)c+=l+h.substr(o,a);u>0&&(c+=l+h.slice(o)),p&&(c="-"+c)}n=f?c+(r.decimalSeparator||"")+((u=+r.fractionGroupSize)?f.replace(RegExp("\\d{"+u+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):f):c}return(r.prefix||"")+n+(r.suffix||"")},/*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */S.toFraction=function(e){var t,r,n,o,s,u,c,f,p,h,d,y,g=this.c;if(null!=e&&(!(c=new M(e)).isInteger()&&(c.c||1!==c.s)||c.lt(A)))throw Error(i+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+z(c));if(!g)return new M(this);for(t=new M(A),p=r=new M(A),n=f=new M(A),y=l(g),// Determine initial denominator.
// d is a power of 10 and the minimum max denominator that specifies the value exactly.
s=t.e=y.length-this.e-1,t.c[0]=a[(u=s%14)<0?14+u:u],e=!e||c.comparedTo(t)>0?s>0?t:p:c,u=k,k=1/0,c=new M(y),// n0 = d1 = 0
f.c[0]=0;h=w(c,t,0,1),1!=(o=r.plus(h.times(n))).comparedTo(e);)r=n,n=o,p=f.plus(h.times(o=p)),f=o,t=c.minus(h.times(o=t)),c=o;return o=w(e.minus(r),n,0,1),f=f.plus(o.times(p)),r=r.plus(o.times(n)),f.s=p.s=this.s,s*=2,// Determine which fraction is closer to x, n0/d0 or n1/d1
d=1>w(p,n,s,T).minus(this).abs().comparedTo(w(f,r,s,T).minus(this).abs())?[p,n]:[f,r],k=u,d},/*
     * Return the value of this BigNumber converted to a number primitive.
     */S.toNumber=function(){return+z(this)},/*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */S.toPrecision=function(e,t){return null!=e&&f(e,1,1e9),D(this,e,t,2)},/*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */S.toString=function(e){var t,r=this,n=r.s,o=r.e;return null===o?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(null==e?t=o<=I||o>=B?h(l(r.c),o):d(l(r.c),o,"0"):10===e&&U?t=d(l((r=H(new M(r),O+o+1,T)).c),r.e,"0"):(f(e,2,j.length,"Base"),t=E(d(l(r.c),o,"0"),10,e,n,!0)),n<0&&r.c[0]&&(t="-"+t)),t},/*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */S.valueOf=S.toJSON=function(){return z(this)},S._isBigNumber=!0,null!=t&&M.set(t),M)}()).default=t.BigNumber=t,"function"==typeof define&&define.amd?define(function(){return t}):ei?ei=t:(e||(e="undefined"!=typeof self&&self?self:window),e.BigNumber=t)}(ei);var es=T("awmEs"),ea=es.Buffer,eu=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},el=function(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},ec=function(e){var t=[];return e.split("/").forEach(function(e){var r=parseInt(e,10);isNaN(r)||(e.length>1&&"'"===e[e.length-1]&&(r+=2147483648),t.push(r));// FIXME shouldn't it throws instead?
}),t},ef=function(e){var t,r=[1,2].includes(e[0])?e[0]:null,n=null===r?e:e.subarray(1),o=eo(n).map(function(e){return ea.from(e.slice(2),"hex")}),i=0,s=eo(n),a=(t=2===r?{data:s[7],to:s[5],chainId:o[0]}:1===r?{data:s[6],to:s[4],chainId:o[0]}:{data:s[5],to:s[3],// Default to 1 for non EIP 155 txs
chainId:o.length>6?o[6]:ea.from("0x01","hex")}).chainId,u=new ei.BigNumber(0);if(a){// Using BigNumber because chainID could be any uint256.
u=new ei.BigNumber(a.toString("hex"),16);var l=ea.alloc(4);a.length>4?a.copy(l):a.copy(l,4-a.length),i=l.readUInt32BE(0)}var c=0;if(null===r&&o.length>6){var f=ea.from(J(function e(t){if(Array.isArray(t)){let r=[];if(t.forEach(function(t){r=r.concat(e(t))}),r.length<=55)return r.unshift(192+r.length),r;let n=ee(r.length);return n.unshift(247+n.length),n.concat(r)}X(t)&&!(t.length%2)||K(t)||Q.throwArgumentError("RLP object must be BytesLike","object",t);let r=Array.prototype.slice.call(Z(t));if(1===r.length&&r[0]<=127)return r;if(r.length<=55)return r.unshift(128+r.length),r;let n=ee(r.length);return n.unshift(183+n.length),n.concat(r)}(o.slice(-3))).slice(2),"hex");c=e.length-(f.length-1),f[0]>247&&(// Increment vrsOffset to account for that extra byte.
c++,// Increase rlpOffset by the size of the list length.
c+=f[0]-247-1)}return{decodedTx:t,txType:r,chainId:u,chainIdTruncated:i,vrsOffset:c}};(u=m||(m={})).APPROVE="0x095ea7b3",u.TRANSFER="0xa9059cbb",(l=v||(v={})).APPROVE="0x095ea7b3",l.SET_APPROVAL_FOR_ALL="0xa22cb465",l.TRANSFER_FROM="0x23b872dd",l.SAFE_TRANSFER_FROM="0x42842e0e",l.SAFE_TRANSFER_FROM_WITH_DATA="0xb88d4fde",(c=x||(x={})).SET_APPROVAL_FOR_ALL="0xa22cb465",c.SAFE_TRANSFER_FROM="0xf242432a",c.SAFE_BATCH_TRANSFER_FROM="0x2eb2c2d6",Object.values(m),el(el([],eu(Object.values(v)),!1),eu(Object.values(x)),!1);var ep={};i(ep,"AccountNameRequiredError",()=>eS),i(ep,"AccountNotSupported",()=>eA),i(ep,"AmountRequired",()=>eO),i(ep,"CantOpenDevice",()=>eT),i(ep,"CashAddrNotSupported",()=>eI),i(ep,"ClaimRewardsFeesWarning",()=>eB),i(ep,"CurrencyNotSupported",()=>eR),i(ep,"DeviceAppVerifyNotSupported",()=>ek),i(ep,"DeviceGenuineSocketEarlyClose",()=>eN),i(ep,"DeviceNotGenuineError",()=>eC),i(ep,"DeviceOnDashboardExpected",()=>eL),i(ep,"DeviceOnDashboardUnexpected",()=>eP),i(ep,"DeviceInOSUExpected",()=>ej),i(ep,"DeviceHalted",()=>eU),i(ep,"DeviceNameInvalid",()=>eM),i(ep,"DeviceSocketFail",()=>eD),i(ep,"DeviceSocketNoBulkStatus",()=>eF),i(ep,"LockedDeviceError",()=>e$),i(ep,"UnresponsiveDeviceError",()=>eH),i(ep,"DisconnectedDevice",()=>ez),i(ep,"DisconnectedDeviceDuringOperation",()=>eq),i(ep,"DeviceExtractOnboardingStateError",()=>eV),i(ep,"DeviceOnboardingStatePollingError",()=>eW),i(ep,"EnpointConfigError",()=>eG),i(ep,"EthAppPleaseEnableContractData",()=>eK),i(ep,"FeeEstimationFailed",()=>eZ),i(ep,"FirmwareNotRecognized",()=>eX),i(ep,"HardResetFail",()=>eY),i(ep,"InvalidXRPTag",()=>eJ),i(ep,"InvalidAddress",()=>eQ),i(ep,"InvalidNonce",()=>e0),i(ep,"InvalidAddressBecauseDestinationIsAlsoSource",()=>e1),i(ep,"LatestMCUInstalledError",()=>e2),i(ep,"UnknownMCU",()=>e5),i(ep,"KProAPIError",()=>e3),i(ep,"KProAPIErrorWithMessage",()=>e6),i(ep,"KProAPINotAvailable",()=>e8),i(ep,"ManagerAppAlreadyInstalledError",()=>e4),i(ep,"ManagerAppDepInstallRequired",()=>e9),i(ep,"ManagerAppDepUninstallRequired",()=>e7),i(ep,"ManagerDeviceLockedError",()=>te),i(ep,"ManagerFirmwareNotEnoughSpaceError",()=>tt),i(ep,"ManagerNotEnoughSpaceError",()=>tr),i(ep,"ManagerUninstallBTCDep",()=>tn),i(ep,"NetworkDown",()=>to),i(ep,"NoAddressesFound",()=>ti),i(ep,"NotEnoughBalance",()=>ts),i(ep,"NotEnoughBalanceToDelegate",()=>ta),i(ep,"NotEnoughBalanceInParentAccount",()=>tu),i(ep,"NotEnoughSpendableBalance",()=>tl),i(ep,"NotEnoughBalanceBecauseDestinationNotCreated",()=>tc),i(ep,"NoAccessToCamera",()=>tf),i(ep,"NotEnoughGas",()=>tp),i(ep,"NotEnoughGasSwap",()=>th),i(ep,"NotSupportedLegacyAddress",()=>td),i(ep,"GasLessThanEstimate",()=>ty),i(ep,"PriorityFeeTooLow",()=>tg),i(ep,"PriorityFeeTooHigh",()=>tb),i(ep,"PriorityFeeHigherThanMaxFee",()=>tm),i(ep,"MaxFeeTooLow",()=>tv),i(ep,"PasswordsDontMatchError",()=>tx),i(ep,"PasswordIncorrectError",()=>tw),i(ep,"RecommendSubAccountsToEmpty",()=>tE),i(ep,"RecommendUndelegation",()=>t_),i(ep,"TimeoutTagged",()=>tS),i(ep,"UnexpectedBootloader",()=>tA),i(ep,"MCUNotGenuineToDashboard",()=>tO),i(ep,"RecipientRequired",()=>tT),i(ep,"UpdateFetchFileFail",()=>tI),i(ep,"UpdateIncorrectHash",()=>tB),i(ep,"UpdateIncorrectSig",()=>tR),i(ep,"UpdateYourApp",()=>tk),i(ep,"UserRefusedDeviceNameChange",()=>tN),i(ep,"UserRefusedAddress",()=>tC),i(ep,"UserRefusedFirmwareUpdate",()=>tL),i(ep,"UserRefusedAllowManager",()=>tP),i(ep,"UserRefusedOnDevice",()=>tj),i(ep,"TransportOpenUserCancelled",()=>tU),i(ep,"TransportInterfaceNotAvailable",()=>tM),i(ep,"TransportRaceCondition",()=>tD),i(ep,"TransportWebUSBGestureRequired",()=>tF),i(ep,"TransactionHasBeenValidatedError",()=>t$),i(ep,"DeviceShouldStayInApp",()=>tH),i(ep,"WebsocketConnectionError",()=>tz),i(ep,"WebsocketConnectionFailed",()=>tq),i(ep,"WrongDeviceForAccount",()=>tV),i(ep,"WrongAppForCurrency",()=>tW),i(ep,"ETHAddressNonEIP",()=>tG),i(ep,"CantScanQRCode",()=>tK),i(ep,"FeeNotLoaded",()=>tZ),i(ep,"FeeRequired",()=>tX),i(ep,"FeeTooHigh",()=>tY),i(ep,"PendingOperation",()=>tJ),i(ep,"SyncError",()=>tQ),i(ep,"PairingFailed",()=>t0),i(ep,"PeerRemovedPairing",()=>t1),i(ep,"GenuineCheckFailed",()=>t2),i(ep,"FirmwareOrAppUpdateRequired",()=>t5),i(ep,"KProAPI",()=>t3),i(ep,"LanguageNotFound",()=>t6),i(ep,"NoDBPathGiven",()=>t8),i(ep,"DBWrongPassword",()=>t4),i(ep,"DBNotReset",()=>t9),i(ep,"HwTransportErrorType",()=>w),i(ep,"HwTransportError",()=>t7),i(ep,"TransportError",()=>re),i(ep,"StatusCodes",()=>rt),i(ep,"getAltStatusMessage",()=>rr),i(ep,"TransportStatusError",()=>rn),i(ep,"serializeError",()=>eh.serializeError,e=>eh.serializeError=e),i(ep,"deserializeError",()=>eh.deserializeError,e=>eh.deserializeError=e),i(ep,"createCustomErrorClass",()=>eh.createCustomErrorClass,e=>eh.createCustomErrorClass=e),i(ep,"addCustomErrorDeserializer",()=>eh.addCustomErrorDeserializer,e=>eh.addCustomErrorDeserializer=e);var eh={};i(eh,"addCustomErrorDeserializer",()=>em),i(eh,"createCustomErrorClass",()=>ev),i(eh,"deserializeError",()=>ex),i(eh,"serializeError",()=>ew);var ed=(f=function(e,t){return(f=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ey=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},eg={},eb={},em=function(e,t){eb[e]=t},ev=function(e){var t=/** @class */function(t){function r(n,o,i){var s=// @ts-ignore
t.call(this,n||e,i)||this;if(// Set the prototype explicitly. See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(s,r.prototype),s.name=e,o)for(var a in o)// @ts-ignore
s[a]=o[a];if(i&&"object"==typeof i&&"cause"in i&&!("cause"in s)){// .cause was specified but the superconstructor
// did not create an instance property.
var u=i.cause;s.cause=u,"stack"in u&&(s.stack=s.stack+"\nCAUSE: "+u.stack)}return s}return ed(r,t),r}(Error);return eg[e]=t,t},ex=function(e){if(e&&"object"==typeof e){try{if("string"==typeof e.message){var t=JSON.parse(e.message);t.message&&t.name&&(e=t)}}catch(e){// nothing
}var r=void 0;if("string"==typeof e.name){var n=e.name,o=eb[n];if(o)r=o(e);else{var i="Error"===n?Error:eg[n];i||(console.warn("deserializing an unknown class '"+n+"'"),i=ev(n)),r=Object.create(i.prototype);try{for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s])}catch(e){// sometimes setting a property can fail (e.g. .name)
}}}else"string"==typeof e.message&&(r=Error(e.message));return r&&!r.stack&&Error.captureStackTrace&&Error.captureStackTrace(r,ex),r}return Error(String(e))},ew=function(e){return e?"object"==typeof e?eE(e,[]):"function"==typeof e?"[Function: ".concat(e.name||"anonymous","]"):e:e},eE=function(e,t){var r,n,o={};t.push(e);try{for(var i=ey(Object.keys(e)),s=i.next();!s.done;s=i.next()){var a=s.value,u=e[a];if("function"!=typeof u){if(!u||"object"!=typeof u){o[a]=u;continue}if(-1===t.indexOf(e[a])){o[a]=eE(e[a],t.slice(0));continue}o[a]="[Circular]"}}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return"string"==typeof e.name&&(o.name=e.name),"string"==typeof e.message&&(o.message=e.message),"string"==typeof e.stack&&(o.stack=e.stack),o},e_=(p=function(e,t){return(p=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),eS=(0,eh.createCustomErrorClass)("AccountNameRequired"),eA=(0,eh.createCustomErrorClass)("AccountNotSupported"),eO=(0,eh.createCustomErrorClass)("AmountRequired"),eT=(0,eh.createCustomErrorClass)("CantOpenDevice"),eI=(0,eh.createCustomErrorClass)("CashAddrNotSupported"),eB=(0,eh.createCustomErrorClass)("ClaimRewardsFeesWarning"),eR=(0,eh.createCustomErrorClass)("CurrencyNotSupported"),ek=(0,eh.createCustomErrorClass)("DeviceAppVerifyNotSupported"),eN=(0,eh.createCustomErrorClass)("DeviceGenuineSocketEarlyClose"),eC=(0,eh.createCustomErrorClass)("DeviceNotGenuine"),eL=(0,eh.createCustomErrorClass)("DeviceOnDashboardExpected"),eP=(0,eh.createCustomErrorClass)("DeviceOnDashboardUnexpected"),ej=(0,eh.createCustomErrorClass)("DeviceInOSUExpected"),eU=(0,eh.createCustomErrorClass)("DeviceHalted"),eM=(0,eh.createCustomErrorClass)("DeviceNameInvalid"),eD=(0,eh.createCustomErrorClass)("DeviceSocketFail"),eF=(0,eh.createCustomErrorClass)("DeviceSocketNoBulkStatus"),e$=(0,eh.createCustomErrorClass)("LockedDeviceError"),eH=(0,eh.createCustomErrorClass)("UnresponsiveDeviceError"),ez=(0,eh.createCustomErrorClass)("DisconnectedDevice"),eq=(0,eh.createCustomErrorClass)("DisconnectedDeviceDuringOperation"),eV=(0,eh.createCustomErrorClass)("DeviceExtractOnboardingStateError"),eW=(0,eh.createCustomErrorClass)("DeviceOnboardingStatePollingError"),eG=(0,eh.createCustomErrorClass)("EnpointConfig"),eK=(0,eh.createCustomErrorClass)("EthAppPleaseEnableContractData"),eZ=(0,eh.createCustomErrorClass)("FeeEstimationFailed"),eX=(0,eh.createCustomErrorClass)("FirmwareNotRecognized"),eY=(0,eh.createCustomErrorClass)("HardResetFail"),eJ=(0,eh.createCustomErrorClass)("InvalidXRPTag"),eQ=(0,eh.createCustomErrorClass)("InvalidAddress"),e0=(0,eh.createCustomErrorClass)("InvalidNonce"),e1=(0,eh.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource"),e2=(0,eh.createCustomErrorClass)("LatestMCUInstalledError"),e5=(0,eh.createCustomErrorClass)("UnknownMCU"),e3=(0,eh.createCustomErrorClass)("KProAPIError"),e6=(0,eh.createCustomErrorClass)("KProAPIErrorWithMessage"),e8=(0,eh.createCustomErrorClass)("KProAPINotAvailable"),e4=(0,eh.createCustomErrorClass)("ManagerAppAlreadyInstalled"),e9=(0,eh.createCustomErrorClass)("ManagerAppDepInstallRequired"),e7=(0,eh.createCustomErrorClass)("ManagerAppDepUninstallRequired"),te=(0,eh.createCustomErrorClass)("ManagerDeviceLocked"),tt=(0,eh.createCustomErrorClass)("ManagerFirmwareNotEnoughSpace"),tr=(0,eh.createCustomErrorClass)("ManagerNotEnoughSpace"),tn=(0,eh.createCustomErrorClass)("ManagerUninstallBTCDep"),to=(0,eh.createCustomErrorClass)("NetworkDown"),ti=(0,eh.createCustomErrorClass)("NoAddressesFound"),ts=(0,eh.createCustomErrorClass)("NotEnoughBalance"),ta=(0,eh.createCustomErrorClass)("NotEnoughBalanceToDelegate"),tu=(0,eh.createCustomErrorClass)("NotEnoughBalanceInParentAccount"),tl=(0,eh.createCustomErrorClass)("NotEnoughSpendableBalance"),tc=(0,eh.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated"),tf=(0,eh.createCustomErrorClass)("NoAccessToCamera"),tp=(0,eh.createCustomErrorClass)("NotEnoughGas"),th=(0,eh.createCustomErrorClass)("NotEnoughGasSwap"),td=(0,eh.createCustomErrorClass)("NotSupportedLegacyAddress"),ty=(0,eh.createCustomErrorClass)("GasLessThanEstimate"),tg=(0,eh.createCustomErrorClass)("PriorityFeeTooLow"),tb=(0,eh.createCustomErrorClass)("PriorityFeeTooHigh"),tm=(0,eh.createCustomErrorClass)("PriorityFeeHigherThanMaxFee"),tv=(0,eh.createCustomErrorClass)("MaxFeeTooLow"),tx=(0,eh.createCustomErrorClass)("PasswordsDontMatch"),tw=(0,eh.createCustomErrorClass)("PasswordIncorrect"),tE=(0,eh.createCustomErrorClass)("RecommendSubAccountsToEmpty"),t_=(0,eh.createCustomErrorClass)("RecommendUndelegation"),tS=(0,eh.createCustomErrorClass)("TimeoutTagged"),tA=(0,eh.createCustomErrorClass)("UnexpectedBootloader"),tO=(0,eh.createCustomErrorClass)("MCUNotGenuineToDashboard"),tT=(0,eh.createCustomErrorClass)("RecipientRequired"),tI=(0,eh.createCustomErrorClass)("UpdateFetchFileFail"),tB=(0,eh.createCustomErrorClass)("UpdateIncorrectHash"),tR=(0,eh.createCustomErrorClass)("UpdateIncorrectSig"),tk=(0,eh.createCustomErrorClass)("UpdateYourApp"),tN=(0,eh.createCustomErrorClass)("UserRefusedDeviceNameChange"),tC=(0,eh.createCustomErrorClass)("UserRefusedAddress"),tL=(0,eh.createCustomErrorClass)("UserRefusedFirmwareUpdate"),tP=(0,eh.createCustomErrorClass)("UserRefusedAllowManager"),tj=(0,eh.createCustomErrorClass)("UserRefusedOnDevice"),tU=(0,eh.createCustomErrorClass)("TransportOpenUserCancelled"),tM=(0,eh.createCustomErrorClass)("TransportInterfaceNotAvailable"),tD=(0,eh.createCustomErrorClass)("TransportRaceCondition"),tF=(0,eh.createCustomErrorClass)("TransportWebUSBGestureRequired"),t$=(0,eh.createCustomErrorClass)("TransactionHasBeenValidatedError"),tH=(0,eh.createCustomErrorClass)("DeviceShouldStayInApp"),tz=(0,eh.createCustomErrorClass)("WebsocketConnectionError"),tq=(0,eh.createCustomErrorClass)("WebsocketConnectionFailed"),tV=(0,eh.createCustomErrorClass)("WrongDeviceForAccount"),tW=(0,eh.createCustomErrorClass)("WrongAppForCurrency"),tG=(0,eh.createCustomErrorClass)("ETHAddressNonEIP"),tK=(0,eh.createCustomErrorClass)("CantScanQRCode"),tZ=(0,eh.createCustomErrorClass)("FeeNotLoaded"),tX=(0,eh.createCustomErrorClass)("FeeRequired"),tY=(0,eh.createCustomErrorClass)("FeeTooHigh"),tJ=(0,eh.createCustomErrorClass)("PendingOperation"),tQ=(0,eh.createCustomErrorClass)("SyncError"),t0=(0,eh.createCustomErrorClass)("PairingFailed"),t1=(0,eh.createCustomErrorClass)("PeerRemovedPairing"),t2=(0,eh.createCustomErrorClass)("GenuineCheckFailed"),t5=(0,eh.createCustomErrorClass)("FirmwareOrAppUpdateRequired"),t3=(0,eh.createCustomErrorClass)("KProAPI"),t6=(0,eh.createCustomErrorClass)("LanguageNotFound"),t8=(0,eh.createCustomErrorClass)("NoDBPathGiven"),t4=(0,eh.createCustomErrorClass)("DBWrongPassword"),t9=(0,eh.createCustomErrorClass)("DBNotReset");(h=w||(w={})).Unknown="Unknown",h.LocationServicesDisabled="LocationServicesDisabled",h.LocationServicesUnauthorized="LocationServicesUnauthorized",h.BluetoothScanStartFailed="BluetoothScanStartFailed";/**
 * Represents an error coming from the usage of any Transport implementation.
 *
 * Needed to map a specific implementation error into an error that
 * can be managed by any code unaware of the specific Transport implementation
 * that was used.
 */var t7=/** @class */function(e){function t(r,n){var o=e.call(this,n)||this;return o.name="HwTransportError",o.type=r,// Needed as long as we target < ES6
Object.setPrototypeOf(o,t.prototype),o}return e_(t,e),t}(Error),re=/** @class */function(e){function t(t,r){var n=this,o="TransportError";return(n=e.call(this,t||o)||this).name=o,n.message=t,n.stack=Error(t).stack,n.id=r,n}return e_(t,e),t}(Error);(0,eh.addCustomErrorDeserializer)("TransportError",function(e){return new re(e.message,e.id)});var rt={ACCESS_CONDITION_NOT_FULFILLED:38916,ALGORITHM_NOT_SUPPORTED:38020,CLA_NOT_SUPPORTED:28160,CODE_BLOCKED:38976,CODE_NOT_INITIALIZED:38914,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,CONDITIONS_OF_USE_NOT_SATISFIED:27013,CONTRADICTION_INVALIDATION:38928,CONTRADICTION_SECRET_CODE_STATUS:38920,CUSTOM_IMAGE_BOOTLOADER:26159,CUSTOM_IMAGE_EMPTY:26158,FILE_ALREADY_EXISTS:27273,FILE_NOT_FOUND:37892,GP_AUTH_FAILED:25344,HALTED:28586,INCONSISTENT_FILE:37896,INCORRECT_DATA:27264,INCORRECT_LENGTH:26368,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,DEVICE_NOT_ONBOARDED:27911,DEVICE_NOT_ONBOARDED_2:26129,INVALID_KCV:38021,INVALID_OFFSET:37890,LICENSING:28482,LOCKED_DEVICE:21781,MAX_VALUE_REACHED:38992,MEMORY_PROBLEM:37440,MISSING_CRITICAL_PARAMETER:26624,NO_EF_SELECTED:37888,NOT_ENOUGH_MEMORY_SPACE:27268,OK:36864,PIN_REMAINING_ATTEMPTS:25536,REFERENCED_DATA_NOT_FOUND:27272,SECURITY_STATUS_NOT_SATISFIED:27010,TECHNICAL_PROBLEM:28416,UNKNOWN_APDU:27906,USER_REFUSED_ON_DEVICE:21761,NOT_ENOUGH_SPACE:20738},rr=function(e){switch(e){// improve text of most common errors
case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received";case 21781:return"Locked device"}if(28416<=e&&e<=28671)return"Internal error, please report"},rn=/** @class */function(e){function t(t){var r=this,n=Object.keys(rt).find(function(e){return rt[e]===t})||"UNKNOWN_ERROR",o=rr(t)||n,i=t.toString(16),s="KPro device: ".concat(o," (0x").concat(i,")");// Maps to a LockedDeviceError
if(t===rt.LOCKED_DEVICE)throw new e$(s);return(r=e.call(this,s)||this).name="TransportStatusError",r.message=s,r.stack=Error(s).stack,r.statusCode=t,r.statusText=n,r}return e_(t,e),t}(Error);(0,eh.addCustomErrorDeserializer)("TransportStatusError",function(e){return new rn(e.statusCode)});var es=T("awmEs"),ro=es.Buffer,ri=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},rs=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},ra=/** @class */function(){function e(e){this.transport=e}return(/**
     * get Ethereum address for a given BIP 32 path.
     * @param path a path in BIP 32 format
     * @option boolDisplay optionally enable or not the display
     * @option boolChaincode optionally enable or not the chaincode request
     * @return an object with a publicKey, address and (optionally) chainCode
     *
     * @example
     const resp = await eth.getAddress("44'/60'/0'/0/0");
     console.log(resp.address);
     */e.prototype.getAddress=function(e,t,r){return ri(this,void 0,void 0,function(){var n,o,i,s,a,u;return rs(this,function(l){switch(l.label){case 0:n=(0,P.splitPath)(e),(o=ro.alloc(1+4*n.length))[0]=n.length,n.forEach(function(e,t){o.writeUInt32BE(e,1+4*t)}),l.label=1;case 1:return l.trys.push([1,3,,4]),[4/*yield*/,this.transport.send(224,2,t?1:0,r?1:0,o)];case 2:return s=(i=l.sent())[0],a=i[1+s],[2/*return*/,{publicKey:i.subarray(1,1+s).toString("hex"),address:"0x"+i.subarray(1+s+1,1+s+1+a).toString("ascii"),chainCode:r?i.subarray(1+s+1+a,1+s+1+a+32).toString("hex"):void 0}];case 3:throw N("error","Couldn't get address",u=l.sent()),u;case 4:return[2/*return*/]}})})},/**
     * Sign a transaction and retrieve v, r, s given the raw transaction and the BIP 32 path of the account to sign.
     *
     * @param path: the BIP32 path to sign the transaction on
     * @param rawTxHex: the raw ethereum transaction in hexadecimal to sign
     * @return an object with s, v and r
     *
     * @example
     const tx = "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080"; // raw tx to sign
     const resp = await eth.signTransaction("44'/60'/0'/0/0", tx);
     console.log(resp);
     */e.prototype.signTransaction=function(e,t){return ri(this,void 0,void 0,function(){var r,n,o,i,s,a,u,l,c,f,p,h,d,y,g,b;return rs(this,function(m){switch(m.label){case 0:r=ro.from(t,"hex"),o=(n=(0,P.decodeTxInfo)(r)).vrsOffset,i=n.txType,s=n.chainId,a=n.chainIdTruncated,u=(0,P.splitPath)(e),c=0,f=function(){var e,t,n,i;return rs(this,function(s){switch(s.label){case 0:return t=(e=0===c)?149-4*u.length:150,n=c+t>r.length?r.length-c:t,0!=o&&c+n>=o&&(n=r.length-c),i=ro.alloc(e?1+4*u.length+n:n),e?(i[0]=u.length,u.forEach(function(e,t){i.writeUInt32BE(e,1+4*t)}),r.copy(i,1+4*u.length,c,c+n)):r.copy(i,0,c,c+n),[4/*yield*/,p.transport.send(224,4,e?0:128,0,i).catch(function(e){throw e&&27264===e.statusCode?new ep.EthAppPleaseEnableContractData("Please enable Blind signing or Contract data in the Ethereum app Settings"):e})];case 1:return l=s.sent(),c+=n,[2/*return*/]}})},p=this,m.label=1;case 1:if(!(c!==r.length))return[3/*break*/,3];return[5/*yield**/,f()];case 2:return m.sent(),[3/*break*/,1];case 3:return h=l[0],d="",s.times(2).plus(35).plus(1).isGreaterThan(255)?(y=Math.abs(h-(2*a+35)%256),d=null!=i?y%2==1?"00":"01":s.times(2).plus(35).plus(y).toString(16)):d=h.toString(16),d.length%2==1&&(d="0"+d),g=l.slice(1,33).toString("hex"),b=l.slice(33,65).toString("hex"),[2/*return*/,{v:d,r:g,s:b}]}})})},/**
    * Get firmware and ERC20 DB version
    *
    * @return an object with fwVersion and erc20Version
    *
    * @example
    const {fwVersion, erc20Version} = await eth.getAppConfiguration();
    console.log(fwVersion);
    console.log(erc20Version);
    *
    */e.prototype.getAppConfiguration=function(){return ri(this,void 0,void 0,function(){var e,t;return rs(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4/*yield*/,this.transport.send(224,6,0,0)];case 1:return[2/*return*/,{fwVersion:String((e=r.sent())[0])+"."+String(e[1])+"."+String(e[2]),erc20Version:e[3]<<24|e[4]<<16|e[5]<<8|e[6]}];case 2:throw N("error","Couldn't get app configuration",t=r.sent()),t;case 3:return[2/*return*/]}})})},e.prototype.sendChunks=function(e,t,r,n,o,i){return ri(this,void 0,void 0,function(){var s,a,u,l,c,f;return rs(this,function(p){switch(p.label){case 0:s=(0,P.splitPath)(e),a=ro.from(t,i),u=0,c=function(){var e,t,i;return rs(this,function(c){switch(c.label){case 0:return e=0===u?254-4*s.length-4:255,t=u+e>a.length?a.length-u:e,i=ro.alloc(0===u?1+4*s.length+4+t:t),0===u?(i[0]=s.length,s.forEach(function(e,t){i.writeUInt32BE(e,1+4*t)}),i.writeUInt32BE(a.length,1+4*s.length),a.copy(i,1+4*s.length+4,u,u+t)):a.copy(i,0,u,u+t),[4/*yield*/,f.transport.send(r,n,0===u?0:128,o,i)];case 1:return l=c.sent(),u+=t,[2/*return*/]}})},f=this,p.label=1;case 1:if(!(u!==a.length))return[3/*break*/,3];return[5/*yield**/,c()];case 2:return p.sent(),[3/*break*/,1];case 3:return[2/*return*/,{v:l[0],r:l.subarray(1,33).toString("hex"),s:l.subarray(33,65).toString("hex")}]}})})},/**
    * Sign a personal message and retrieve v, r, s given the message and the BIP 32 path of the account to sign.
    * @param path: the BIP32 path to sign the message
    * @param pMessage: personal message
    * @option enc: buffer encoding, default: "utf-8"
    * @return an object with v, s and r
    *
    * @example
    const resp = await eth.signPersonalMessage("44'/60'/0'/0/0", "Hello world!");
    let v = resp['v'] - 27;
    v = v.toString(16);
    if (v.length < 2) {
      v = "0" + v;
    }
    console.log("Signature 0x" + resp['r'] + resp['s'] + v);
    */e.prototype.signPersonalMessage=function(e,t,r){return void 0===r&&(r="utf-8"),ri(this,void 0,void 0,function(){return rs(this,function(n){return[2/*return*/,this.sendChunks(e,t,224,8,0,r)]})})},/**
     * Sign an EIP-712 formatted message
     *
     * @param {String} path the BIP32 path to sign the message
     * @param {Object} jsonMessage EIP712 message to sign
     * @return an object with v, s and r
     *
     * @example
     const resp = await eth.signEIP712Message("44'/60'/0'/0/0", {
       domain: {
         chainId: 69,
         name: "Da Domain",
         verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
          version: "1"
        },
        types: {
          "EIP712Domain": [
                { name: "name", type: "string" },
                { name: "version", type: "string" },
                { name: "chainId", type: "uint256" },
                { name: "verifyingContract", type: "address" }
            ],
          "Test": [
            { name: "contents", type: "string" }
          ]
        },
        primaryType: "Test",
        message: {contents: "Hello, Bob!"},
      });
     *
     */e.prototype.signEIP712Message=function(e,t){return ri(this,void 0,void 0,function(){var r,n;return rs(this,function(o){var i;return r=JSON.stringify(t),(i=n||(n={}))[i.CLA=224]="CLA",i[i.INS=12]="INS",i[i.P1=0]="P1",i[i.P2=1]="P2",[2/*return*/,this.sendChunks(e,r,n.CLA,n.INS,n.P2,"utf-8")]})})},e.prototype.load=function(e,t){return ri(this,void 0,void 0,function(){var r,n,o,i,s;return rs(this,function(a){switch(a.label){case 0:var u;r=0,(u=o||(o={}))[u.CLA=224]="CLA",u[u.INS=t]="INS",u[u.P2=0]="P2",a.label=1;case 1:if(!(r!==e.length))return[3/*break*/,3];return i=r+240>e.length?e.length-r:240,s=ro.alloc(0===r?4+i:i),0===r?(s.writeUInt32BE(e.length,0),e.copy(s,4,r,r+i)):e.copy(s,0,r,r+i),[4/*yield*/,this.transport.send(o.CLA,o.INS,0===r?0:128,o.P2,s)];case 2:return n=a.sent(),this.transport.emit("chunk-loaded",i),r+=i,[3/*break*/,1];case 3:return[2/*return*/,n[0]<<8|n[1]]}})})},/**
    * You can load a firmware
    *
    * @param {ArrayBuffer} fw firmware
    * @return {Promise}
    *
    * @example
    const fs = require('fs'),
    let f = fs.readFileSync('./firmware.bin');
    let fw = new Uint8Array(f);
    await eth.loadFirmware(fw);
    *
    */e.prototype.loadFirmware=function(e){return ri(this,void 0,void 0,function(){return rs(this,function(t){switch(t.label){case 0:return[4/*yield*/,this.load(ro.from(e),242)];case 1:return[2/*return*/,t.sent()]}})})},/**
    * Load a ERC20 and Chain DB
    *
    * @param {ArrayBuffer} db database
    * @return {Promise}
    *
    * @example
    const fs = require('fs'),
    let f = fs.readFileSync('./erc20db.bin');
    let db = new Uint8Array(f);
    await eth.loadERC20DB(db);
    *
    */e.prototype.loadERC20DB=function(e){return ri(this,void 0,void 0,function(){return rs(this,function(t){switch(t.label){case 0:return[4/*yield*/,this.load(ro.from(e),244)];case 1:return[2/*return*/,t.sent()]}})})},e)}();Object.keys(P).forEach(function(e){"default"===e||"__esModule"===e||I.hasOwnProperty(e)||Object.defineProperty(I,e,{enumerable:!0,get:function(){return P[e]}})});var ru={};i(ru,"default",()=>rg),i(ru,"TransportError",()=>ep.TransportError,e=>ep.TransportError=e),i(ru,"TransportStatusError",()=>ep.TransportStatusError,e=>ep.TransportStatusError=e),i(ru,"StatusCodes",()=>ep.StatusCodes,e=>ep.StatusCodes=e),i(ru,"getAltStatusMessage",()=>$9f47c4e36688b848$re_export$getAltStatusMessage,e=>$9f47c4e36688b848$re_export$getAltStatusMessage=e);var rl=T("k4yOc"),es=T("awmEs"),rc=es.Buffer,rf=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},rp=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},rh=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},rd=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},ry=function(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},rg=/** @class */function(){function e(){var e=this;this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this._events=new/*@__PURE__*/(S(rl)),/**
         * Send data to the device using the higher level API.
         * @param {number} cla - The instruction class for the command.
         * @param {number} ins - The instruction code for the command.
         * @param {number} p1 - The first parameter for the instruction.
         * @param {number} p2 - The second parameter for the instruction.
         * @param {Buffer} data - The data to be sent. Defaults to an empty buffer.
         * @param {Array<number>} statusList - A list of acceptable status codes for the response. Defaults to [StatusCodes.OK].
         * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
         */this.send=function(t,r,n,o,i,s){return void 0===i&&(i=rc.alloc(0)),void 0===s&&(s=[ep.StatusCodes.OK]),rf(e,void 0,void 0,function(){var e,a;return rp(this,function(u){switch(u.label){case 0:if(i.length>=256)throw new ep.TransportError("data.length exceed 256 bytes limit. Got: "+i.length,"DataLengthTooBig");return[4/*yield*/,this.exchange(rc.concat([rc.from([t,r,n,o]),rc.from([i.length]),i]))];case 1:if(a=(e=u.sent()).readUInt16BE(e.length-2),!s.some(function(e){return e===a}))throw new ep.TransportStatusError(a);return[2/*return*/,e]}})})},this.exchangeAtomicImpl=function(t){return rf(e,void 0,void 0,function(){var e,r,n,o,i,s=this;return rp(this,function(a){switch(a.label){case 0:if(this.exchangeBusyPromise)throw new ep.TransportRaceCondition("An action was already pending on the KPro device. Please deny or reconnect.");r=new Promise(function(t){e=t}),this.exchangeBusyPromise=r,n=!1,o=setTimeout(function(){n=!0,s.emit("unresponsive")},this.unresponsiveTimeout),a.label=1;case 1:return a.trys.push([1,,3,4]),[4/*yield*/,t()];case 2:return i=a.sent(),n&&this.emit("responsive"),[2/*return*/,i];case 3:return clearTimeout(o),e&&e(),this.exchangeBusyPromise=null,[7/*endfinally*/];case 4:return[2/*return*/]}})})}}return(/**
     * Send data to the device using a low level API.
     * It's recommended to use the "send" method for a higher level API.
     * @param {Buffer} apdu - The data to send.
     * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
     */e.prototype.exchange=function(e){throw Error("exchange not implemented")},/**
     * Send apdus in batch to the device using a low level API.
     * The default implementation is to call exchange for each apdu.
     * @param {Array<Buffer>} apdus - array of apdus to send.
     * @param {Observer<Buffer>} observer - an observer that will receive the response of each apdu.
     * @returns {Subscription} A Subscription object on which you can call ".unsubscribe()" to stop sending apdus.
     */e.prototype.exchangeBulk=function(e,t){var r=!1;return rf(this,void 0,void 0,function(){var n,o,i,s,a,u,l;return rp(this,function(c){switch(c.label){case 0:if(r)return[2/*return*/];c.label=1;case 1:c.trys.push([1,6,7,8]),o=(n=rh(e)).next(),c.label=2;case 2:if(o.done)return[3/*break*/,5];return i=o.value,[4/*yield*/,this.exchange(i)];case 3:if(s=c.sent(),r)return[2/*return*/];if((a=s.readUInt16BE(s.length-2))!==ep.StatusCodes.OK)throw new ep.TransportStatusError(a);t.next(s),c.label=4;case 4:return o=n.next(),[3/*break*/,2];case 5:return[3/*break*/,8];case 6:return u={error:c.sent()},[3/*break*/,8];case 7:try{o&&!o.done&&(l=n.return)&&l.call(n)}finally{if(u)throw u.error}return[7/*endfinally*/];case 8:return[2/*return*/]}})}).then(function(){return!r&&t.complete()},function(e){return!r&&t.error(e)}),{unsubscribe:function(){r=!0}}},/**
     * Close the connection with the device.
     * @returns {Promise<void>} A promise that resolves when the transport is closed.
     */e.prototype.close=function(){return Promise.resolve()},/**
     * Listen for an event on the transport instance.
     * Transport implementations may have specific events. Common events include:
     * "disconnect" : triggered when the transport is disconnected.
     * @param {string} eventName - The name of the event to listen for.
     * @param {(...args: Array<any>) => any} cb - The callback function to be invoked when the event occurs.
     */e.prototype.on=function(e,t){this._events.on(e,t)},/**
     * Stop listening to an event on an instance of transport.
     */e.prototype.off=function(e,t){this._events.removeListener(e,t)},e.prototype.emit=function(e){for(var t,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];(t=this._events).emit.apply(t,ry([e],rd(r),!1))},/**
     * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
     */e.prototype.setExchangeTimeout=function(e){this.exchangeTimeout=e},/**
     * Define the delay before emitting "unresponsive" on an exchange that does not respond
     */e.prototype.setExchangeUnresponsiveTimeout=function(e){this.unresponsiveTimeout=e},/**
     * create() allows to open the first descriptor available or
     * throw if there is none or if timeout is reached.
     * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
     * @example
    TransportFoo.create().then(transport => ...)
     */e.create=function(e,t){var r=this;return void 0===e&&(e=3e3),new Promise(function(n,o){var i=!1,s=r.listen({next:function(t){i=!0,s&&s.unsubscribe(),a&&clearTimeout(a),r.open(t.descriptor,e).then(n,o)},error:function(e){a&&clearTimeout(a),o(e)},complete:function(){a&&clearTimeout(a),i||o(new ep.TransportError(r.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),a=t?setTimeout(function(){s.unsubscribe(),o(new ep.TransportError(r.ErrorMessage_ListenTimeout,"ListenTimeout"))},t):null})},e.ErrorMessage_ListenTimeout="No KPro device found (timeout)",e.ErrorMessage_NoDeviceFound="No KPro device found",e)}();y={id:0,productName:"Keycard Pro Wallet",productId:1},(d=E||(E={})).identifyUSBProductId=function(e){return y.productId===e?y:null},d.identifyProductName=function(e){return e===y.productName?y:null};var rb={};i(rb,"kproUSBVendorId",()=>rv),i(rb,"hidFraming",()=>rE);/********************************************************************************
 *   Ledger Node JS API
 *   (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/var es=T("awmEs"),rm=es.Buffer,rv=4617,rx=function(e){var t=rm.alloc(2);return t.writeUInt16BE(e,0),t},rw={data:rm.alloc(0),dataLength:0,sequence:0},rE=function(e,t){return{makeBlocks:function(r){var n=rm.concat([rx(r.length),r]),o=t-5,i=Math.ceil(n.length/o);n=rm.concat([n,rm.alloc(i*o-n.length+1).fill(0)]);for(var s=[],a=0;a<i;a++){var u=rm.alloc(5);u.writeUInt16BE(e,0),u.writeUInt8(5,2),u.writeUInt16BE(a,3);var l=n.subarray(a*o,(a+1)*o);s.push(rm.concat([u,l]))}return s},reduceResponse:function(t,r){var n=t||rw,o=n.data,i=n.dataLength,s=n.sequence;if(r.readUInt16BE(0)!==e)throw new ep.TransportError("Invalid channel","InvalidChannel");if(5!==r.readUInt8(2))throw new ep.TransportError("Invalid tag","InvalidTag");if(r.readUInt16BE(3)!==s)throw new ep.TransportError("Invalid sequence","InvalidSequence");t||(i=r.readUInt16BE(5)),s++;var a=r.subarray(t?5:7);return(o=rm.concat([o,a])).length>i&&(o=o.subarray(0,i)),{data:o,dataLength:i,sequence:s}},getReducedResult:function(e){if(e&&e.dataLength===e.data.length)return e.data}}},r_={};i(r_,"delay",()=>rB),i(r_,"retry",()=>rk),i(r_,"atomicQueue",()=>rN),i(r_,"execAndWaitAtLeast",()=>rC),i(r_,"promiseAllBatched",()=>rL);var rS=function(){return(rS=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},rA=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},rO=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},rT=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},rI=function(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},rB=function(e){return new Promise(function(t){return setTimeout(t,e)})},rR={maxRetry:4,interval:300,intervalMultiplicator:1.5,context:""},rk=function(e,t){var r=rS(rS({},rR),t),n=r.maxRetry,o=r.interval,i=r.intervalMultiplicator,s=r.context,a=function(t,r){var n=e();return t<=0?n:n.catch(function(e){return N("promise-retry",s+" failed. "+t+" retry remain. "+String(e)),rB(r).then(function(){return a(t-1,r*i)})})};return a(n,o)},rN=function(e,t){void 0===t&&(t=function(){return""});var r={};return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var i=t.apply(void 0,rI([],rT(n),!1)),s=(r[i]||Promise.resolve()).then(function(){return e.apply(void 0,rI([],rT(n),!1))});return r[i]=s.catch(function(){}),s}},rC=function(e,t){var r=Date.now();return t().then(function(t){var n=e-(Date.now()-r);return n<=0?t:rB(n).then(function(){return t})})};function rL(e,t,r){return rA(this,void 0,void 0,function(){var n,o;return rO(this,function(i){switch(i.label){case 0:// initially, we schedule <batch> items in parallel
return n=Array(t.length),o=t.map(function(e,t){return{item:e,index:t}}),[4/*yield*/,Promise.all(Array(Math.min(e,t.length)).fill(function(){}).map(function e(){return rA(this,void 0,void 0,function(){var t,i,s,a,u;return rO(this,function(l){switch(l.label){case 0:if(0===o.length)return[2/*return*/];if(!(t=o.shift()))return[3/*break*/,2];return i=t.item,s=t.index,a=n,u=s,[4/*yield*/,r(i,s)];case 1:a[u]=l.sent(),l.label=2;case 2:return[4/*yield*/,e()];case 3:return l.sent(),[2/*return*/]}})})}))];case 1:return(// initially, we schedule <batch> items in parallel
i.sent(),[2/*return*/,n])}})})}var rP={Eth:I.default,KProDevice:E,KProError:ep,KProErrorHelpers:eh,HIDFraming:rb,KProLogs:B,KProPromise:r_,Transport:ru.default},rj={};i(rj,"default",()=>rq);var es=T("awmEs"),rU=es.Buffer,rM=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})};const rD=[{vendorId:rP.HIDFraming.kproUSBVendorId}],rF=()=>{// $FlowFixMe
let{hid:e}=navigator;if(!e)throw new rP.KProError.TransportError("navigator.hid is not supported","HIDNotSupported");return e};function r$(){return rM(this,void 0,void 0,function*(){let e=yield rF().requestDevice({filters:rD});return Array.isArray(e)?e:[e]})}function rH(){return rM(this,void 0,void 0,function*(){let e=yield rF().getDevices();return e.filter(e=>e.vendorId===rP.HIDFraming.kproUSBVendorId)})}/**
 * WebHID Transport implementation
 * @example
 import TransportWebHID from "kprojs-web-hid";
 ...
 let transport: any;
 transport = await TransportWebHID.create();
 */class rz extends rP.Transport{constructor(e){super(),this.channel=Math.floor(65535*Math.random()),this.packetSize=64,this.inputs=[],this.read=()=>this.inputs.length?Promise.resolve(this.inputs.shift()):new Promise(e=>{this.inputCallback=e}),this.onInputReport=e=>{let t=rU.from(e.data.buffer);this.inputCallback?(this.inputCallback(t),this.inputCallback=null):this.inputs.push(t)},this._disconnectEmitted=!1,this._emitDisconnect=e=>{this._disconnectEmitted||(this._disconnectEmitted=!0,this.emit("disconnect",e))},/**
         * Exchange with the device using APDU protocol.
         * @param apdu
         * @returns a promise of apdu response
         */this.exchange=e=>rM(this,void 0,void 0,function*(){let t=yield this.exchangeAtomicImpl(()=>rM(this,void 0,void 0,function*(){let t,r;let{channel:n,packetSize:o}=this;rP.KProLogs.log("apdu","=> "+e.toString("hex"));let i=rP.HIDFraming.hidFraming(n,o),s=i.makeBlocks(e);for(let e=0;e<s.length;e++)yield this.device.sendReport(0,s[e]);for(;!(t=i.getReducedResult(r));){let e=yield this.read();r=i.reduceResponse(r,e)}return rP.KProLogs.log("apdu","<= "+t.toString("hex")),t})).catch(e=>{if(e&&e.message&&e.message.includes("write"))throw this._emitDisconnect(e),new rP.KProError.DisconnectedDeviceDuringOperation(e.message);throw e});return t}),this.device=e,this.deviceModel="number"==typeof e.productId?rP.KProDevice.identifyUSBProductId(e.productId):void 0,e.addEventListener("inputreport",this.onInputReport)}/**
     * Similar to create() except it will always display the device permission (even if some devices are already accepted).
     */static request(){return rM(this,void 0,void 0,function*(){let[e]=yield r$();return rz.open(e)})}/**
     * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
     */static openConnected(){return rM(this,void 0,void 0,function*(){let e=yield rH();return 0===e.length?null:rz.open(e[0])})}/**
     * Create a KPro transport with a HIDDevice
     */static open(e){return rM(this,void 0,void 0,function*(){yield e.open();let t=new rz(e),r=n=>{e===n.device&&(rF().removeEventListener("disconnect",r),t._emitDisconnect(new rP.KProError.DisconnectedDevice))};return rF().addEventListener("disconnect",r),t})}/**
     * Release the transport device
     */close(){return rM(this,void 0,void 0,function*(){yield this.exchangeBusyPromise,this.device.removeEventListener("inputreport",this.onInputReport),yield this.device.close()})}}/**
 * Check if WebUSB transport is supported.
 */rz.isSupported=()=>Promise.resolve(!!(window.navigator&&window.navigator.hid)),/**
 * List the WebUSB devices that was previously authorized by the user.
 */rz.list=rH,/**
 * Actively listen to WebUSB devices and emit ONE device
 * that was either accepted before, if not it will trigger the native permission UI.
 *
 * Important: it must be called in the context of a UI click!
 */rz.listen=e=>{let t=!1;return(function(){return rM(this,void 0,void 0,function*(){let e=yield rH();if(e.length>0)return e[0];let t=yield r$();return t[0]})})().then(r=>{if(r){if(!t){let t="number"==typeof r.productId?rP.KProDevice.identifyUSBProductId(r.productId):void 0;e.next({type:"add",descriptor:r,deviceModel:t}),e.complete()}}else e.error(new rP.KProError.TransportOpenUserCancelled("Access denied to use KPro device"))},t=>{e.error(new rP.KProError.TransportOpenUserCancelled(t.message))}),{unsubscribe:function(){t=!0}}};var rq=rz;/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const rV=2n**256n,rW=rV-4294968273n,rG=rV-0x14551231950b75fc4402da1732fc9bebfn,rK={p:rW,n:rG,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n},rZ=e=>r3(r3(e*e)*e+rK.b),rX=(e="")=>{throw Error(e)},rY=e=>"bigint"==typeof e,rJ=e=>"string"==typeof e,rQ=e=>rY(e)&&0n<e&&e<rW,r0=e=>rY(e)&&0n<e&&e<rG,r1=(e,t)=>e instanceof Uint8Array&&("number"!=typeof t||!(t>0)||e.length===t)?e:rX("Uint8Array expected"),r2=e=>new Uint8Array(e),r5=(e,t)=>r1(rJ(e)?nt(e):r2(e),t),r3=(e,t=rW)=>{let r=e%t;return r>=0n?r:t+r},r6=e=>e instanceof r8?e:rX("Point expected");// secp256k1 is short weierstrass curve
class r8{constructor(e,t,r){this.px=e,this.py=t,this.pz=r}static fromAffine(e){return new r8(e.x,e.y,1n)}static fromHex(e){let t;e=r5(e);let r=e[0],n=e.subarray(1),o=nn(n,0,32),i=e.length;// first byte is prefix, rest is data
if(33===i&&[2,3].includes(r)){rQ(o)||rX("Point hex invalid: x not FE");let e=nu(rZ(o)),n=(1n&e)===1n,i=(1&r)==1;// x³ + ax + b is right side of equation
i!==n&&(e=r3(-e)),t=new r8(o,e,1n)}// Uncompressed points: 65b, start with 0x04
return 65===i&&4===r&&(t=new r8(o,nn(n,32,64),1n)),t?t.ok():rX("Point is not on curve");// Verify the result
}static fromPrivateKey(e){return r4.mul(nl(e))}get x(){return this.aff().x}get y(){return this.aff().y}equals(e){let{px:t,py:r,pz:n}=this,{px:o,py:i,pz:s}=r6(e),a=r3(t*s),u=r3(o*n),l=r3(r*s),c=r3(i*n);return a===u&&l===c}negate(){return new r8(this.px,r3(-this.py),this.pz)}double(){return this.add(this)}add(e){let{px:t,py:r,pz:n}=this,{px:o,py:i,pz:s}=r6(e),{a:a,b:u}=rK,l=0n,c=0n,f=0n,p=r3(3n*u),h=r3(t*o),d=r3(r*i),y=r3(n*s),g=r3(t+r),b=r3(o+i);// free formula from Renes-Costello-Batina
g=r3(g*b),b=r3(h+d),g=r3(g-b),b=r3(t+n);let m=r3(o+s);// step 10
return b=r3(b*m),m=r3(h+y),b=r3(b-m),m=r3(r+n),l=r3(i+s),m=r3(m*l),l=r3(d+y),m=r3(m-l),f=r3(a*b),l=r3(p*y),f=r3(l+f),l=r3(d-f),f=r3(d+f),c=r3(l*f),d=r3(h+h),d=r3(d+h),y=r3(a*y),b=r3(p*b),d=r3(d+y),y=r3(h-y),y=r3(a*y),b=r3(b+y),h=r3(d*b),c=r3(c+h),h=r3(m*b),l=r3(g*l),l=r3(l-h),h=r3(g*d),f=r3(m*f),f=r3(f+h),new r8(l,c,f)}mul(e,t=!0){if(!t&&0n===e)return r9;// in unsafe mode, allow zero
if(r0(e)||rX("invalid scalar"),this.equals(r4))return nm(e).p;// use precomputes for base point
let r=r9,n=r4;// init result point & fake point
for(let o=this;e>0n;o=o.double(),e>>=1n)1n&e?r=r.add(o):t&&(n=n.add(o));// if not, add to fake for timing safety
return r}mulAddQUns(e,t,r){return this.mul(t,!1).add(e.mul(r,!1)).ok();// Unsafe: do NOT use for stuff related
}toAffine(){let{px:e,py:t,pz:r}=this;// (x, y, z) ∋ (x=x/z, y=y/z)
if(this.equals(r9))return{x:0n,y:0n};// fast-path for zero point
if(1n===r)return{x:e,y:t};// if z is 1, pass affine coordinates as-is
let n=na(r);// z^-1: invert z
return 1n!==r3(r*n)&&rX("invalid inverse"),{x:r3(e*n),y:r3(t*n)};// x = x*z^-1; y = y*z^-1
}assertValidity(){let{x:e,y:t}=this.aff();// convert to 2d xy affine point.
return rQ(e)&&rQ(t)||rX("Point invalid: x or y"),r3(t*t)===rZ(e)?this:rX("Point invalid: not on curve")}multiply(e){return this.mul(e)}aff(){return this.toAffine()}ok(){return this.assertValidity()}toHex(e=!0){let{x:t,y:r}=this.aff(),n=e?(1n&r)===0n?"02":"03":"04";// convert to 2d xy affine point
return n+ni(t)+(e?"":ni(r));// prefix||x and ||y
}toRawBytes(e=!0){return nt(this.toHex(e));// re-use toHex(), convert hex to bytes
}}r8.BASE=new r8(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,1n),r8.ZERO=new r8(0n,1n,0n);const{BASE:r4,ZERO:r9}=r8,r7=(e,t)=>e.toString(16).padStart(t,"0"),ne=e=>Array.from(e).map(e=>r7(e,2)).join(""),nt=e=>{let t=e.length;// error if not string,
(!rJ(e)||t%2)&&rX("hex invalid 1");// or has odd length like 3, 5.
let r=r2(t/2);// create result array
for(let t=0;t<r.length;t++){let n=2*t,o=e.slice(n,n+2),i=Number.parseInt(o,16);(Number.isNaN(i)||i<0)&&rX("hex invalid 2"),r[t]=i}return r},nr=e=>BigInt("0x"+(ne(e)||"0")),nn=(e,t,r)=>nr(e.slice(t,r)),no=e=>rY(e)&&e>=0n&&e<rV?nt(r7(e,64)):rX("bigint expected"),ni=e=>ne(no(e)),ns=(...e)=>{let t=r2(e.reduce((e,t)=>e+r1(t).length,0)),r=0;// create u8a of summed length
return e.forEach(e=>{t.set(e,r),r+=e.length}),t},na=(e,t=rW)=>{(0n===e||t<=0n)&&rX("no inverse n="+e+" mod="+t);// no neg exponent for now
let r=r3(e,t),n=t,o=0n,i=1n,s=1n,a=0n;for(;0n!==r;){let e=n/r,t=n%r,u=o-s*e,l=i-a*e;// not constant-time
n=r,r=t,o=s,i=a,s=u,a=l}return 1n===n?r3(o,t):rX("no inverse");// b is gcd at this point
},nu=e=>{let t=1n;// So, a special, fast case. Paper: "Square Roots from 1;24,51,10 to Dan Shanks".
for(let r=e,n=(rW+1n)/4n;n>0n;n>>=1n)1n&n&&(t=t*r%rW),r=r*r%rW;return r3(t*t)===e?t:rX("sqrt invalid");// check if result is valid
},nl=e=>(rY(e)||(e=nr(r5(e,32))),r0(e)?e:rX("private key out of range")),nc=e=>e>rG>>1n;// Generator, identity points
class nf{constructor(e,t,r){this.r=e,this.s=t,this.recovery=r,this.assertValidity()}static fromCompact(e){return e=r5(e,64),new nf(nn(e,0,32),nn(e,32,64))}assertValidity(){return r0(this.r)&&r0(this.s)?this:rX()}addRecoveryBit(e){return new nf(this.r,this.s,e)}hasHighS(){return nc(this.s)}recoverPublicKey(e){let{r:t,s:r,recovery:n}=this;// secg.org/sec1-v2.pdf 4.1.6
[0,1,2,3].includes(n)||rX("recovery id invalid");// check recovery id
let o=nh(r5(e,32)),i=2===n||3===n?t+rG:t;// Truncate hash
i>=rW&&rX("q.x invalid");// ensure q.x is still a field element
let s=(1&n)==0?"02":"03",a=r8.fromHex(s+ni(i)),u=na(i,rG),l=r3(-o*u,rG),c=r3(r*u,rG);// head is 0x02 or 0x03
return r4.mulAddQUns(a,l,c);// (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
}toCompactRawBytes(){return nt(this.toCompactHex())}toCompactHex(){return ni(this.r)+ni(this.s)}}const np=e=>{let t=8*e.length-256,r=nr(e);// RFC suggests optional truncating via bits2octets
return t>0?r>>BigInt(t):r;// matches bits2int. bits2int can produce res>N.
},nh=e=>r3(np(e),rG),nd=()=>"object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,ny={lowS:!0},ng={hexToBytes:nt,bytesToHex:ne,concatBytes:ns,bytesToNumberBE:nr,numberToBytesBE:no,mod:r3,invert:na,hmacSha256Async:async(e,...t)=>{let r=nd();// HMAC-SHA256 async. No sync built-in!
if(!r)return rX("etc.hmacSha256Async not set");// Uses webcrypto: native cryptography.
let n=r.subtle,o=await n.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);return r2(await n.sign("HMAC",o,ns(...t)))},hmacSha256Sync:e,hashToPrivateKey:function(e){((e=r5(e)).length<40||e.length>1024)&&rX("expected proper params");let t=r3(nr(e),rG-1n)+1n;// takes at least n+8 bytes
return no(t)},randomBytes:e=>{let t=nd();// Can be shimmed in node.js <= 18 to prevent error:
return t||rX("crypto.getRandomValues must be defined"),t.getRandomValues(r2(e))}};Object.defineProperties(ng,{hmacSha256Sync:{configurable:!1,get:()=>e,set(t){e||(e=t)}}});const nb=()=>{let e=[],t=r4,r=t;// 10x sign(), 2x verify(). To achieve this,
for(let n=0;n<33;n++){r=t,e.push(r);for(let n=1;n<128;n++)r=r.add(t),e.push(r);t=r.double()}// which multiplies user point by scalar,
return e;// when precomputes are using base point
},nm=e=>{// Compared to other point mult methods,
let t=r||(r=nb()),n=(e,t)=>{let r=t.negate();return e?r:t},o=r9,i=r4,s=BigInt(255),a=BigInt(8);// stores 2x less points using subtraction
for(let r=0;r<33;r++){let u=128*r,l=Number(e&s);e>>=a,l>128&&(l-=256,e+=1n);let c=u+Math.abs(l)-1,f=r%2!=0,p=l<0;// offsets, evaluate both
0===l?i=i.add(n(f,t[u])):o=o.add(n(p,t[c]))}return{p:o,f:i};// return both real and fake points for JIT
};// envs like browser console
var nv={},nx=T("9Mq5w");!/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.9.2
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2023
 * @license MIT
 *//*jslint bitwise: true */function(){var e="input is invalid type",t="object"==typeof window,r=t?window:{};r.JS_SHA3_NO_WINDOW&&(t=!1);var n=!t&&"object"==typeof self;!r.JS_SHA3_NO_NODE_JS&&"object"==typeof nx&&nx.versions&&nx.versions.node?r=_:n&&(r=self);for(var o=!r.JS_SHA3_NO_COMMON_JS&&nv,i="function"==typeof define&&define.amd,s=!r.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,a="0123456789abcdef".split(""),u=[4,1024,262144,67108864],l=[0,8,16,24],c=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],f=[224,256,384,512],p=[128,256],h=["hex","buffer","arrayBuffer","array","digest"],d={128:168,256:136},y=r.JS_SHA3_NO_NODE_JS||!Array.isArray?function(e){return"[object Array]"===Object.prototype.toString.call(e)}:Array.isArray,g=s&&(r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)?function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer}:ArrayBuffer.isView,b=function(t){var r=typeof t;if("string"===r)return[t,!0];if("object"!==r||null===t)throw Error(e);if(s&&t.constructor===ArrayBuffer)return[new Uint8Array(t),!1];if(!y(t)&&!g(t))throw Error(e);return[t,!1]},m=function(e){return 0===b(e)[0].length},v=function(e,t,r){return function(n){return new P(e,t,e).update(n)[r]()}},x=function(e,t,r){return function(n,o){return new P(e,t,o).update(n)[r]()}},w=function(e,t,r){return function(t,n,o,i){return T["cshake"+e].update(t,n,o,i)[r]()}},E=function(e,t,r){return function(t,n,o,i){return T["kmac"+e].update(t,n,o,i)[r]()}},S=function(e,t,r,n){for(var o=0;o<h.length;++o){var i=h[o];e[i]=t(r,n,i)}return e},A=function(e,t){var r=v(e,t,"hex");return r.create=function(){return new P(e,t,e)},r.update=function(e){return r.create().update(e)},S(r,v,e,t)},O=[{name:"keccak",padding:[1,256,65536,16777216],bits:f,createMethod:A},{name:"sha3",padding:[6,1536,393216,100663296],bits:f,createMethod:A},{name:"shake",padding:[31,7936,2031616,520093696],bits:p,createMethod:function(e,t){var r=x(e,t,"hex");return r.create=function(r){return new P(e,t,r)},r.update=function(e,t){return r.create(t).update(e)},S(r,x,e,t)}},{name:"cshake",padding:u,bits:p,createMethod:function(e,t){var r=d[e],n=w(e,t,"hex");return n.create=function(n,o,i){return m(o)&&m(i)?T["shake"+e].create(n):new P(e,t,n).bytepad([o,i],r)},n.update=function(e,t,r,o){return n.create(t,r,o).update(e)},S(n,w,e,t)}},{name:"kmac",padding:u,bits:p,createMethod:function(e,t){var r=d[e],n=E(e,t,"hex");return n.create=function(n,o,i){return new j(e,t,o).bytepad(["KMAC",i],r).bytepad([n],r)},n.update=function(e,t,r,o){return n.create(e,r,o).update(t)},S(n,E,e,t)}}],T={},I=[],B=0;B<O.length;++B)for(var R=O[B],k=R.bits,N=0;N<k.length;++N){var C=R.name+"_"+k[N];if(I.push(C),T[C]=R.createMethod(k[N],R.padding),"sha3"!==R.name){var L=R.name+k[N];I.push(L),T[L]=T[C]}}function P(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function j(e,t,r){P.call(this,e,t,r)}P.prototype.update=function(e){if(this.finalized)throw Error("finalize already called");var t=b(e);e=t[0];for(var r,n,o=t[1],i=this.blocks,s=this.byteCount,a=e.length,u=this.blockCount,c=0,f=this.s;c<a;){if(this.reset)for(r=1,this.reset=!1,i[0]=this.block;r<u+1;++r)i[r]=0;if(o)for(r=this.start;c<a&&r<s;++c)(n=e.charCodeAt(c))<128?i[r>>2]|=n<<l[3&r++]:(n<2048?i[r>>2]|=(192|n>>6)<<l[3&r++]:(n<55296||n>=57344?i[r>>2]|=(224|n>>12)<<l[3&r++]:(n=65536+((1023&n)<<10|1023&e.charCodeAt(++c)),i[r>>2]|=(240|n>>18)<<l[3&r++],i[r>>2]|=(128|n>>12&63)<<l[3&r++]),i[r>>2]|=(128|n>>6&63)<<l[3&r++]),i[r>>2]|=(128|63&n)<<l[3&r++]);else for(r=this.start;c<a&&r<s;++c)i[r>>2]|=e[c]<<l[3&r++];if(this.lastByteIndex=r,r>=s){for(this.start=r-s,this.block=i[u],r=0;r<u;++r)f[r]^=i[r];U(f),this.reset=!0}else this.start=r}return this},P.prototype.encode=function(e,t){var r=255&e,n=1,o=[r];for(e>>=8,r=255&e;r>0;)o.unshift(r),e>>=8,r=255&e,++n;return t?o.push(n):o.unshift(n),this.update(o),o.length},P.prototype.encodeString=function(e){var t=b(e);e=t[0];var r=t[1],n=0,o=e.length;if(r)for(var i=0;i<e.length;++i){var s=e.charCodeAt(i);s<128?n+=1:s<2048?n+=2:s<55296||s>=57344?n+=3:(s=65536+((1023&s)<<10|1023&e.charCodeAt(++i)),n+=4)}else n=o;return n+=this.encode(8*n),this.update(e),n},P.prototype.bytepad=function(e,t){for(var r=this.encode(t),n=0;n<e.length;++n)r+=this.encodeString(e[n]);var o=(t-r%t)%t,i=[];return i.length=o,this.update(i),this},P.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(t=1,e[0]=e[r];t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)n[t]^=e[t];U(n)}},P.prototype.toString=P.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,s=0,u="";s<n;){for(i=0;i<t&&s<n;++i,++s)u+=a[(e=r[i])>>4&15]+a[15&e]+a[e>>12&15]+a[e>>8&15]+a[e>>20&15]+a[e>>16&15]+a[e>>28&15]+a[e>>24&15];s%t==0&&(U(r),i=0)}return o&&(u+=a[(e=r[i])>>4&15]+a[15&e],o>1&&(u+=a[e>>12&15]+a[e>>8&15]),o>2&&(u+=a[e>>20&15]+a[e>>16&15])),u},P.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,s=0,a=this.outputBits>>3;e=new ArrayBuffer(o?n+1<<2:a);for(var u=new Uint32Array(e);s<n;){for(i=0;i<t&&s<n;++i,++s)u[s]=r[i];s%t==0&&U(r)}return o&&(u[i]=r[i],e=e.slice(0,a)),e},P.prototype.buffer=P.prototype.arrayBuffer,P.prototype.digest=P.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,o=this.outputBlocks,i=this.extraBytes,s=0,a=0,u=[];a<o;){for(s=0;s<r&&a<o;++s,++a)e=a<<2,t=n[s],u[e]=255&t,u[e+1]=t>>8&255,u[e+2]=t>>16&255,u[e+3]=t>>24&255;a%r==0&&U(n)}return i&&(e=a<<2,t=n[s],u[e]=255&t,i>1&&(u[e+1]=t>>8&255),i>2&&(u[e+2]=t>>16&255)),u},j.prototype=new P,j.prototype.finalize=function(){return this.encode(this.outputBits,!0),P.prototype.finalize.call(this)};var U=function(e){var t,r,n,o,i,s,a,u,l,f,p,h,d,y,g,b,m,v,x,w,E,_,S,A,O,T,I,B,R,k,N,C,L,P,j,U,M,D,F,$,H,z,q,V,W,G,K,Z,X,Y,J,Q,ee,et,er,en,eo,ei,es,ea,eu,el,ec;for(n=0;n<48;n+=2)o=e[0]^e[10]^e[20]^e[30]^e[40],i=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],u=e[4]^e[14]^e[24]^e[34]^e[44],l=e[5]^e[15]^e[25]^e[35]^e[45],f=e[6]^e[16]^e[26]^e[36]^e[46],p=e[7]^e[17]^e[27]^e[37]^e[47],h=e[8]^e[18]^e[28]^e[38]^e[48],d=e[9]^e[19]^e[29]^e[39]^e[49],t=h^(s<<1|a>>>31),r=d^(a<<1|s>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=o^(u<<1|l>>>31),r=i^(l<<1|u>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=s^(f<<1|p>>>31),r=a^(p<<1|f>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=u^(h<<1|d>>>31),r=l^(d<<1|h>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=f^(o<<1|i>>>31),r=p^(i<<1|o>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,y=e[0],g=e[1],G=e[11]<<4|e[10]>>>28,K=e[10]<<4|e[11]>>>28,B=e[20]<<3|e[21]>>>29,R=e[21]<<3|e[20]>>>29,ea=e[31]<<9|e[30]>>>23,eu=e[30]<<9|e[31]>>>23,z=e[40]<<18|e[41]>>>14,q=e[41]<<18|e[40]>>>14,P=e[2]<<1|e[3]>>>31,j=e[3]<<1|e[2]>>>31,b=e[13]<<12|e[12]>>>20,m=e[12]<<12|e[13]>>>20,Z=e[22]<<10|e[23]>>>22,X=e[23]<<10|e[22]>>>22,k=e[33]<<13|e[32]>>>19,N=e[32]<<13|e[33]>>>19,el=e[42]<<2|e[43]>>>30,ec=e[43]<<2|e[42]>>>30,et=e[5]<<30|e[4]>>>2,er=e[4]<<30|e[5]>>>2,U=e[14]<<6|e[15]>>>26,M=e[15]<<6|e[14]>>>26,v=e[25]<<11|e[24]>>>21,x=e[24]<<11|e[25]>>>21,Y=e[34]<<15|e[35]>>>17,J=e[35]<<15|e[34]>>>17,C=e[45]<<29|e[44]>>>3,L=e[44]<<29|e[45]>>>3,A=e[6]<<28|e[7]>>>4,O=e[7]<<28|e[6]>>>4,en=e[17]<<23|e[16]>>>9,eo=e[16]<<23|e[17]>>>9,D=e[26]<<25|e[27]>>>7,F=e[27]<<25|e[26]>>>7,w=e[36]<<21|e[37]>>>11,E=e[37]<<21|e[36]>>>11,Q=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,V=e[8]<<27|e[9]>>>5,W=e[9]<<27|e[8]>>>5,T=e[18]<<20|e[19]>>>12,I=e[19]<<20|e[18]>>>12,ei=e[29]<<7|e[28]>>>25,es=e[28]<<7|e[29]>>>25,$=e[38]<<8|e[39]>>>24,H=e[39]<<8|e[38]>>>24,_=e[48]<<14|e[49]>>>18,S=e[49]<<14|e[48]>>>18,e[0]=y^~b&v,e[1]=g^~m&x,e[10]=A^~T&B,e[11]=O^~I&R,e[20]=P^~U&D,e[21]=j^~M&F,e[30]=V^~G&Z,e[31]=W^~K&X,e[40]=et^~en&ei,e[41]=er^~eo&es,e[2]=b^~v&w,e[3]=m^~x&E,e[12]=T^~B&k,e[13]=I^~R&N,e[22]=U^~D&$,e[23]=M^~F&H,e[32]=G^~Z&Y,e[33]=K^~X&J,e[42]=en^~ei&ea,e[43]=eo^~es&eu,e[4]=v^~w&_,e[5]=x^~E&S,e[14]=B^~k&C,e[15]=R^~N&L,e[24]=D^~$&z,e[25]=F^~H&q,e[34]=Z^~Y&Q,e[35]=X^~J&ee,e[44]=ei^~ea&el,e[45]=es^~eu&ec,e[6]=w^~_&y,e[7]=E^~S&g,e[16]=k^~C&A,e[17]=N^~L&O,e[26]=$^~z&P,e[27]=H^~q&j,e[36]=Y^~Q&V,e[37]=J^~ee&W,e[46]=ea^~el&et,e[47]=eu^~ec&er,e[8]=_^~y&b,e[9]=S^~g&m,e[18]=C^~A&T,e[19]=L^~O&I,e[28]=z^~P&U,e[29]=q^~j&M,e[38]=Q^~V&G,e[39]=ee^~W&K,e[48]=el^~et&en,e[49]=ec^~er&eo,e[0]^=c[n],e[1]^=c[n+1]};if(o)nv=T;else{for(B=0;B<I.length;++B)r[I[B]]=T[I[B]];i&&define(function(){return T})}}();var nw={},nE=nw&&nw.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n_=nw&&nw.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||nE(t,e,r)};Object.defineProperty(nw,"__esModule",{value:!0}),nw.normalize=nw.concatSig=void 0,n_(T("lLdQO"),nw),n_(T("l59Bh"),nw),n_(T("8WMDt"),nw);var nS=T("2ztKZ");Object.defineProperty(nw,"concatSig",{enumerable:!0,get:function(){return nS.concatSig}}),Object.defineProperty(nw,"normalize",{enumerable:!0,get:function(){return nS.normalize}});const nA=document.getElementById("btn-connect"),nO=document.getElementById("btn-disconnect"),nT=document.getElementById("btn-get-address"),nI=document.getElementById("btn-get-conf"),nB=document.getElementById("logs-container"),nR=document.getElementById("btn-sign-tx"),nk=document.getElementById("sign-data"),nN=document.getElementById("btn-sign-eip712"),nC=document.getElementById("btn-sign-message"),nL=document.getElementById("sign-path"),nP=document.getElementById("load-fw"),nj=document.getElementById("btn-load-fw");function nU(e,t){let r=document.createElement("p");r.innerHTML=e,t.appendChild(r)}function nM(e){return e.toString().padStart(2,"0")}function nD(){let e=new Date(Date.now());return[nM(e.getDate()),nM(e.getMonth()+1),e.getFullYear()].join("-")+" "+[nM(e.getHours()),nM(e.getMinutes()),nM(e.getSeconds())].join(":")}function nF(e){return e<=1?e:1&~(1&e)}function n$(e,t,r,n){let o=nF(e.v),i="0x"+e.r+e.s+(o?"01":"00"),s=n({data:r,signature:i,version:"V4"});return{signature:i,signed:s==t.toLowerCase()}}async function nH(e){return await new Promise(t=>{let r=new FileReader;r.onload=()=>t(r.result),r.readAsArrayBuffer(e)})}nA.addEventListener("click",async()=>{try{n=await (0,rj.default).create(),o=new rP.Eth(n),nO.disabled=!1,nT.disabled=!1,nI.disabled=!1,nR.disabled=!1,nN.disabled=!1,nC.disabled=!1,nj.disabled=!1,nA.disabled=!0;let e=nD()+"&nbsp;KPro Wallet connected";nU(e,nB)}catch(e){console.log(e)}}),nT.addEventListener("click",async()=>{if(o){let{publicKey:e,address:t,chainCode:r}=await o.getAddress(nL.value,!0,!0);nU(nD()+"&nbsp;Ethereum address: "+t,nB)}}),nI.addEventListener("click",async()=>{if(o){Date.now();let{fwVersion:e,erc20Version:t}=await o.getAppConfiguration();nU(nD()+"&nbsp;Firmware version - "+e+", ERC20/Chain DB version - "+t,nB)}}),nR.addEventListener("click",async()=>{if(o){var e,r;let n,i,s;t=nk.value;let{publicKey:a}=await o.getAddress(nL.value),{signature:u,signed:l}=(e=await o.signTransaction(nL.value,t),r=t,n=(0,nv.keccak256)(new Uint8Array(r.match(/../g).map(e=>parseInt(e,16))).buffer),i=nF(Number(e.v)),{signature:(s=new nf(BigInt("0x"+e.r),BigInt("0x"+e.s),i)).toCompactHex(),signed:function(e,t,r,n=ny){let o,i,s,a,{lowS:u}=n;// ECDSA signature verification
null==u&&(u=!0),"strict"in n&&rX("verify() legacy options not supported");let l=e&&"object"==typeof e&&"r"in e;// Previous ver supported DER sigs. We
l||64===r5(e).length||rX("signature must be 64 bytes");try{o=l?new nf(e.r,e.s).assertValidity():nf.fromCompact(e),i=nh(r5(t,32)),s=r instanceof r8?r.ok():r8.fromHex(r)}catch(e){return!1}// Check sig for validity in both cases
if(!o)return!1;let{r:c,s:f}=o;if(u&&nc(f))return!1;// lowS bans sig.s >= CURVE.n/2
try{let e=na(f,rG),t=r3(i*e,rG),r=r3(c*e,rG);// s^-1
a=r4.mulAddQUns(s,t,r).aff();// R = u1⋅G + u2⋅P
}catch(e){return!1}if(!a)return!1;// stop if R is identity / zero point
let p=r3(a.x,rG);// <== The weird ECDSA part. R.x must be in N's field, not P's
return p===c;// mod(R.x, n) == r
}(s,n,a.toLowerCase())}),c=nD()+"&nbsp;Transaction successfully signed. Signature - 0x"+u,f=nD()+"&nbsp;Error. Invalid signature";nU(l?c:f,nB)}}),nC.addEventListener("click",async()=>{if(o){Date.now(),t=nk.value;let{address:e}=await o.getAddress(nL.value),r=n$(await o.signPersonalMessage(nL.value,t),e,new TextEncoder().encode(t),nw.recoverPersonalSignature),n=nD()+"&nbsp;Personal message successfully signed. Signature - "+r.signature,i=nD()+"&nbsp;Error. Invalid signature";nU(r.signed?n:i,nB)}}),nN.addEventListener("click",async()=>{if(o){let e=JSON.parse(nk.value),t=await o.signEIP712Message(nL.value,e),{address:r}=await o.getAddress(nL.value),n=n$(t,r,e,nw.recoverTypedSignature),i=nD()+"&nbsp;EIP712 Message successfully signed. Signature - "+n.signature,s=nD()+"&nbsp;Error. Invalid signature";nU(n.signed?i:s,nB)}}),nj.addEventListener("click",async()=>{let e;let t=nP.files[0];if(t&&o){let r=await nH(t);try{e=nD()+"&nbsp;Updating firmware...",nU(e,nB),await o.loadFirmware(r),e=nD()+"&nbsp;Firmware updated successfuly",nU(e,nB)}catch(t){nU(e=nD()+"&nbsp;Error: "+t,nB)}}else nU(e=t?nD()+"&nbsp;Error. Keycard Pro is disconnected":nD()+"&nbsp;No firmware file found",nB)}),nO.addEventListener("click",async()=>{n&&(await n.close(),nO.disabled=!0,nT.disabled=!0,nI.disabled=!0,nR.disabled=!0,nN.disabled=!0,nC.disabled=!0,nj.disabled=!0,nA.disabled=!1,nU(nD()+"&nbsp;KPro Wallet disconnected",nB))});