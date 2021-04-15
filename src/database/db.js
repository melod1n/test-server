"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.JsonFile = void 0;
const fs = __importStar(require("fs"));
let jsonFile;
function readData() {
    try {
        const data = fs.readFileSync('testers.json');
        // @ts-ignore
        jsonFile = JSON.parse(data);
    }
    catch (e) {
        // console.log(e);
        console.error(e);
        return e.toString();
    }
}
function saveData() {
    fs.writeFileSync('testers.json', JSON.stringify(jsonFile));
    return 'success';
}
readData();
class JsonFile {
}
exports.JsonFile = JsonFile;
class Database {
    getTestUsers() {
        return jsonFile.inTesting;
    }
    setUserTesting(userId) {
        jsonFile.inTesting.push(userId);
        saveData();
    }
}
exports.Database = Database;
//# sourceMappingURL=db.js.map