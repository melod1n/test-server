"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const index_1 = require("../index");
const global_error_handler_1 = require("../middleware/global-error-handler");
const errorHandler = new global_error_handler_1.GlobalErrorHandler();
class Utils {
    json(params) {
        const a = index_1.app.response.json(params);
        return a;
    }
    error(code, message) {
        return errorHandler.error({ code: code, message: message });
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map