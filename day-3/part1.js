console.log(
    (n => console.log(n))(
    (lines => [...lines[0].keys()].map(col => lines.reduce((a, line) => a + (line[col] == '1'), 0)).join(""))
    (require("fs").readFileSync("data.txt", "utf-8").split("\n").map(line => line.split("")))
    )
);