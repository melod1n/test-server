"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingController = void 0;
const routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
const database_1 = require("../database/database");
const utils_1 = require("../utils/utils");
const database = new database_1.Database();
const utils = new utils_1.Utils();
let TestingController = class TestingController {
    checkUserTesting(params) {
        const userId = utils.requireNumber('userId', params.userId);
        if (typeof userId !== 'number')
            return userId;
        const users = database.getTestUsers();
        return { inTesting: users.includes(userId) };
    }
    setUserTesting(params) {
        const userId = utils.requireNumber('userId', params.userId);
        if (typeof userId !== 'number')
            return userId;
        if (params.accessToken !== process.env.TOKEN)
            return utils.error(1, 'Wrong token');
        database.setUserTesting(userId);
        return { success: 1 };
    }
};
__decorate([
    routing_controllers_1.Get('/testing.check'),
    routing_controllers_1.ContentType('application/json'),
    __param(0, routing_controllers_1.QueryParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestingController.prototype, "checkUserTesting", null);
__decorate([
    routing_controllers_1.Get('/testing.add'),
    routing_controllers_1.ContentType('application/json'),
    __param(0, routing_controllers_1.QueryParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestingController.prototype, "setUserTesting", null);
TestingController = __decorate([
    routing_controllers_1.Controller()
], TestingController);
exports.TestingController = TestingController;
//# sourceMappingURL=testing-controller.js.map