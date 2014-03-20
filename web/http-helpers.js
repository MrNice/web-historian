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

exports.sendResponse = function(res, data, status) {
  status = status || 200;
  res.writeHead(status, headers);
  res.end(data);
};

exports.serveAssets = function(res, asset) {
  console.log('Before join ', asset);
  asset = path.join(archive.paths[asset.type], asset.name);
  console.log('After join', asset);

  fs.readFile(asset, 'utf8', function(err, data) {
    if( err ) throw err;
    exports.sendResponse(res, data);
  });
};

exports.receiveData = function(request, response, callback) {
  var data = "";
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    console.log("receiveData: ", data.substr(4));
    callback(response, data);
  });
};

