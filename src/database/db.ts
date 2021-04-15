import * as fs from 'fs';

let jsonFile: JsonFile;

function readData() {
    try {
        const data = fs.readFileSync('testers.json');

        // @ts-ignore
        jsonFile = JSON.parse(data);
    } catch (e) {
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

export class JsonFile {
    inTesting: number[];
}

export class Database {
    getTestUsers(): number[] {
        return jsonFile.inTesting;
    }

    setUserTesting(userId: number) {
        jsonFile.inTesting.push(userId);
        saveData();
    }
}