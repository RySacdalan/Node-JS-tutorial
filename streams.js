const fs = require("fs");

//creating streams
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const writeStreams = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("---THIS IS NEW CHUNK---");
//   console.log(chunk);
//   writeStreams.write("\nNEW CHUNK\n");
//   writeStreams.write(chunk);
// });

// *Piping* easiest way --
readStream.pipe(writeStreams);
