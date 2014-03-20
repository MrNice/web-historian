var http = require("http");
var url = require("url");
var handler = require("./request-handler");
var httpHelpers = require('./http-helpers.js');

var port = 8080;
var ip = "127.0.0.1";

// routes are set up
var routes = {
  '/': handler.serveHome,
  '/styles.css': handler.serveStyles
};

// router is a function that is passed to http.createServer (instead of handler)
var router = function (req, res) {
  // router only takes care of the url relative path maintainance
  // router ignores status and http methods
  var parsedURL = url.parse(req.url);
  console.log(parsedURL);

  var route = routes[parsedURL.pathname]; // GREG INSERTED added .pathname
  if(route) {
    route(req, res);
  } else {
    // TODO: Write sendResponse function
    console.log('404');
    httpHelpers.sendResponse(res,null,404);    // GREG INSERTED prepended httpHelpers
  }
};

// if using router, then server should take router func
var server = http.createServer(router);

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

