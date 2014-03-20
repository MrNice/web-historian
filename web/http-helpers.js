var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

var sendResponse = function(res, data,status) {  // GREG INSERTED middle declaration
  status = status || 200;
  res.writeHead(status, headers); // GREG CHANGED .writeHeader to .writeHead
  res.end(data);
};

exports.serveAssets = function(req, res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(asset, 'utf8', function(err, html) {
    if( err ) throw err;
    sendResponse(res, html);  // GREG DELETED last parameter 'status'
  });
};

// Pieces are:
// request.method, url.parse(request.url)

exports.sendResponse = sendResponse;