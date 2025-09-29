const fs = require("fs");

if (fs.existsSync("your-files-here")) {
  console.log("directory already exists");
} else {
  fs.mkdir("your-files-here", function (err) {
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      console.log("directory created");
    }
  });
}
