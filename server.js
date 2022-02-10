//to use http module, one must require it.
const http = require("http");

//creating server, hold 2 argument (responce, request)
const server = http.createServer((req, res) => {
  console.log("Request are made!");
});

//create a server listening for connections and request, async.
server.listen(3000, "localhost", () => {
  console.log("Listening for request on port 3000.");
});
