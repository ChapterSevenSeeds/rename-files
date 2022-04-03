const { readdirSync, renameSync } = require('fs');

const dir = "C:/Users/Tyson/Desktop/RIPS/The Pretender/Season 01";
const search = new RegExp("(.+?) - (S\\d{2}E\\d{2}).mkv", "g");
const replace = "The Pretender - $2 - $1.mkv";

const files = readdirSync(dir);

for (const file of files) {
    const groups = search.exec(file);
    search.lastIndex = 0;
    if (groups != null) {
        const newFileName = replace.replace(/(?<!\\)(\$\d+)/g, (match) => {
            return groups[Number(match.substring(1))]
        });
        renameSync(`${dir}/${file}`, `${dir}/${newFileName}`);
    }
}