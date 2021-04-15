import SQLite from 'sqlite3';

const db = new SQLite.Database('data/database.sql');

export class DatabaseData {
    inTesting: number[];
}

let data = new DatabaseData();

export class Database {
    getTestUsers(): number[] {
        return data.inTesting;
    }

    setUserTesting(userId: number) {
        pushTester(userId);
    }
}

getStoredTesters().then(r => {
    data.inTesting = r;
}).catch(e => {
    console.error(e);
});

function pushTester(userId): boolean {
    if (data.inTesting.includes(userId)) return false;
    else {
        data.inTesting.push(userId);
        storeTester(userId).then();
        return true;
    }
}

async function getStoredTesters(): Promise<number[]> {
    return new Promise((resolve, reject) => {
        let testers: number[] = [];

        db.serialize(() => {
            db.each('select * from testers', (err, row) => {
                testers.push(row.userId);
            }, (error) => {
                if (error) reject(error);
                else resolve(testers);
            });
        });
    });
}

async function storeTester(userId: Number): Promise<any> {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            const values = db.prepare('insert into testers values (?)');
            values.run(userId);
            values.finalize((error) => {
                if (error) reject(error);
                else resolve(null);
            });
        });
    });
}