var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');   // changes from ../helpers/http-helpers
// require more modules/folders here!

exports.serveHome = function (req, res) {
  var index = path.join(archive.paths.siteAssets, 'index.html');
  // todo: add deep logging functionality 
  helpers.serveAssets(req, res, index);
};

exports.serveStyles = function (req, res) {
  var styles = path.join(archive.paths.siteAssets, 'styles.css');
  // todo: add deep logging functionality 
  helpers.serveAssets(req, res, styles);
};
