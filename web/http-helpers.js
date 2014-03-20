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
  console.log(asset);
  var key = asset.type;
  asset = path.join(archive.paths[asset.type], asset['name']);

  fs.readFile(asset, 'utf8', function(err, html) {
    if( err ) throw err;
    sendResponse(res, html);  // GREG DELETED last parameter 'status'
  });
};

// exports.serveArchive = function(req, res, siteName) {
//   siteName = path.join(archive.paths.archivedSites, siteName);
//   console.log("serve siteName: ", siteName);
  
//   fs.readFile(siteName, 'utf8', function(err, html) {
//     if( err ) throw err;
//     sendResponse(res, html);
//   });
// };

// Pieces are:
// request.method, url.parse(request.url)

exports.receiveData = function(request, response, callback) {
  var data = "";
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    console.log("receiveData: ", data);
    callback(data);
  });
};

exports.sendResponse = sendResponse;