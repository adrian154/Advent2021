const fs = require("fs");
const heights = fs.readFileSync("data.txt", "utf-8").split("\n").map(Number);

let numGreater = 0;
for(let i = 1; i < heights.length; i++) {
    if(heights[i] > heights[i - 1]) numGreater++;
}

console.log(numGreater);