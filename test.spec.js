const fs = require('fs');
const renameFiles = require('./index');
describe("Tests", () => {
    beforeEach(() => {
        fs.mkdirSync("./TESTS");
        fs.writeFileSync("./TESTS/test1.txt", "");
        fs.writeFileSync("./TESTS/test2.txt", "");
        fs.writeFileSync("./TESTS/test3.txt", "");
        fs.writeFileSync("./TESTS/weird-name-3.txt", "");
        fs.writeFileSync("./TESTS/weird-name-4.txt", "");
    });

    test("Rename all", () => {
        renameFiles("./TESTS", ".*", "TEST.txt");
    });

    afterEach(() => {
        fs.rmSync("./TESTS", { recursive: true, force: true });
    });
})