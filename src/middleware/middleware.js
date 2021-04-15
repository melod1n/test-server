"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingAfter = exports.loggingBefore = void 0;
const express_http_context_1 = __importDefault(require("express-http-context"));
function loggingBefore(request, response, next) {
    console.log('set traceId = 123');
    express_http_context_1.default.set('traceId', 123);
    next();
}
exports.loggingBefore = loggingBefore;
function loggingAfter(request, response, next) {
    console.log(`tracedId = ${express_http_context_1.default.get('traceId')}`);
    next();
}
exports.loggingAfter = loggingAfter;
//# sourceMappingURL=middleware.js.map