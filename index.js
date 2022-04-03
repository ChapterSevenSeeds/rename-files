const { readdir, rename } = require('fs/promises');
const normalize = require('normalize-path');

module.exports = async function (dir, search, replace) {
    const normalizedPath = normalize(dir);

    const searchRegex = new RegExp(search);
    const files = await readdir(normalizedPath);

    const promises = [];
    for (const file of files) {
        const groups = searchRegex.exec(file);
        searchRegex.lastIndex = 0;
        if (groups != null) {
            const newFileName = replace.replace(/(?<!\\)(\$\d+)/g, (match) => {
                return groups[Number(match.substring(1))]
            });
            promises.push(rename(`${normalizedPath}/${file}`, `${normalizedPath}/${newFileName}`));
        }
    }

    await Promise.all(promises);
}