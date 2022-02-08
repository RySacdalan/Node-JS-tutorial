const fs = require("fs");

// *reading files* takes 2 arguments * async
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// *writing files* take 3 arguments * async
// fs.writeFile("./docs/blog1.txt", "Hello world!", () => {
//   console.log("blog replaced");
// });

// fs.writeFile("./docs/blog2txt", "Hello world!", () => {
//   console.log("blog replaced");
// });

// *Directories* async
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder created!");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log("Folder removed");
// }

// Deleting files * async
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Files deleted!");
  });
}
