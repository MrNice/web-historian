var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('../helpers/http-helpers');
// require more modules/folders here!

exports.serveHome = function (req, res) {
  var index = path.join(archive.paths.siteAssets, 'index.html');
  // TODO: Add deep logging functionality 
  helpers.serveAssets(req, res, index);
};