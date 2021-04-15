"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const log4js_1 = __importDefault(require("log4js"));
const dotenv_1 = __importDefault(require("dotenv"));
const routing_controllers_1 = require("routing-controllers");
const user_controller_1 = require("./controller/user-controller");
const testing_controller_1 = require("./controller/testing-controller");
const body_parser_1 = __importDefault(require("body-parser"));
const express_http_context_1 = __importDefault(require("express-http-context"));
const global_error_handler_1 = require("./middleware/global-error-handler");
dotenv_1.default.config();
const logger = log4js_1.default.getLogger();
logger.level = process.env.LOG_LEVEL;
const port = process.env.PORT;
exports.app = express_1.default();
exports.app.use(body_parser_1.default.json());
exports.app.use(express_http_context_1.default.middleware);
routing_controllers_1.useExpressServer(exports.app, {
    controllers: [user_controller_1.UserController, testing_controller_1.TestingController],
    middlewares: [global_error_handler_1.GlobalErrorHandler],
    defaultErrorHandler: false
});
// app.use(bodyParser.urlencoded({extended:true}));
exports.app.use((req, res, next) => {
    express_http_context_1.default.ns.bindEmitter(req);
    express_http_context_1.default.ns.bindEmitter(res);
});
exports.app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map