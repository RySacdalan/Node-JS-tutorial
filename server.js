//to use http module, one must require it.
const http = require("http");

//creating server, hold 2 argument (responce, request)
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Setting up the header content type
  res.setHeader("Content-type", "text/html");
  res.write("<h2>Hello, Ryan Sacdalan!</h2>");
  res.write("<p>Hello, Ryan Sacdalan!</p>");
  res.end();
});

//create a server listening for connections and request, async.
server.listen(3000, "localhost", () => {
  console.log("Listening for request on port 3000.");
});
