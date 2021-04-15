"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.DatabaseData = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database('data/database.sql');
class DatabaseData {
}
exports.DatabaseData = DatabaseData;
let data = new DatabaseData();
class Database {
    getTestUsers() {
        return data.inTesting;
    }
    setUserTesting(userId) {
        pushTester(userId);
    }
}
exports.Database = Database;
getStoredTesters().then(r => {
    data.inTesting = r;
}).catch(e => {
    console.error(e);
});
function pushTester(userId) {
    if (data.inTesting.includes(userId))
        return false;
    else {
        data.inTesting.push(userId);
        storeTester(userId).then();
        return true;
    }
}
async function getStoredTesters() {
    return new Promise((resolve, reject) => {
        let testers = [];
        db.serialize(() => {
            db.each('select * from testers', (err, row) => {
                testers.push(row.userId);
            }, (error) => {
                if (error)
                    reject(error);
                else
                    resolve(testers);
            });
        });
    });
}
async function storeTester(userId) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            const values = db.prepare('insert into testers values (?)');
            values.run(userId);
            values.finalize((error) => {
                if (error)
                    reject(error);
                else
                    resolve(null);
            });
        });
    });
}
//# sourceMappingURL=database.js.map