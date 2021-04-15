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
const db_1 = require("../database/db");
const utils_1 = require("../utils/utils");
const database = new db_1.Database();
const utils = new utils_1.Utils();
let TestingController = class TestingController {
    checkUserTesting(id) {
        if (!id)
            return utils.error(0, 'wrong type');
        const users = database.getTestUsers();
        const n = users.includes(id) ? 1 : 0;
        const json = JSON.parse(`{"in_testing": ${n}}`);
        return JSON.stringify(json);
    }
    setUserTesting(params) {
        console.log(JSON.stringify(params));
        if (params.accessToken !== process.env.TOKEN)
            return utils.error(1, 'Wrong token');
        if (!params.userId)
            return utils.error(2);
        database.setUserTesting(params.userId);
        return { success: 1 };
    }
};
__decorate([
    routing_controllers_1.Get('/testing/:id'),
    routing_controllers_1.ContentType('application/json'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
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