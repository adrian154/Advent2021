const fs = require("fs");
const heights = fs.readFileSync("data.txt", "utf-8").split("\n").map(Number);

let numGreater = 0;
for(let i = 1; i < heights.length - 2; i++) {
    if(heights[i - 1]  < heights[i + 2]) numGreater++;
}

console.log(numGreater);