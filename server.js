//to use http module, one must require it.
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

//creating server, hold 2 argument (responce, request)
const server = http.createServer((req, res) => {
  //lodash package
  const num = _.random(0, 22);
  console.log(num);

  //Setting up the header content type
  res.setHeader("Content-type", "text/html");

  //Basic routes
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; //setting up status
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about/me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

//create a server listening for connections and request, async.
server.listen(3000, "localhost", () => {
  console.log("Listening for request on port 3000.");
});
