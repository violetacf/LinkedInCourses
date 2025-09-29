const fs = require("fs");

fs.readFileSync("./readme.md", "utf-8", (err, ipsum) => {
  console.log(ipsum);
});

console.log("Readindg file...");
