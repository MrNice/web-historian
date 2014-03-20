var http = require("http");
var url = require("url");
var handler = require("./request-handler");

var port = 8080;
var ip = "127.0.0.1";

// routes are set up
var routes = {
  '/': handler.serveHome
};

// router is a function that is passed to http.createServer (instead of handler)
var router = function (req, res) {
  // router only takes care of the url relative path maintainance
  // router ignores status and http methods
  var parsedURL = url.parse(req.url);

  var route = routes[parsedURL];
  if(route) {
    route(req, res);
  } else {
    // TODO: Write sendResponse function
    sendResponse(res,null,404);
  }
};

// if using router, then server should take router func
var server = http.createServer(router);

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

