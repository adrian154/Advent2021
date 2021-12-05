const countBits = (list, pos) => list.reduce((total, line) => (line[pos] == '1') + total, 0);
const O2Criteria = (list, pos) => countBits(list, pos) >= list.length / 2; // if count === length / 2, returns 1
const CO2Criteria = (list, pos) => countBits(list, pos) < list.length / 2; // if count === length / 2, returns 0
const rating = (list, pos, criteriaFn) => list.length == 1 ? parseInt(list[0].join(""), 2) : rating((bit => list.filter(line => line[pos] == bit))(criteriaFn(list, pos)), pos + 1, criteriaFn);

const list = require("fs").readFileSync("data.txt", "utf-8").split("\n").map(line => line.split(""));
console.log(rating(list, 0, O2Criteria) * rating(list, 0, CO2Criteria));
