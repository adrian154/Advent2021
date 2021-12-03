// TVM doesn't have a filesystem, so we'll have to import the data this way
console.log(require("fs").readFileSync("data.txt", "utf-8").split("\n").map(line => `string "${line}"`).join("\n"));