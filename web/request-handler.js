var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');   // changes from ../helpers/http-helpers
// require more modules/folders here!

exports.serveHome = function (req, res) {
  // Add in a switch
  var assetName = 'index.html';
  if (req.method === "POST") {
    helpers.receiveData(req, res, function (data) {
      var asset = {
        name: archive.checkArchive(data),
        type: 'archivedSites'
      };
      helpers.serveAssets(req, res, asset);
    });
  } else {
    helpers.serveAssets(req, res, { name: assetName, type: "siteAssets" });
  }
};

exports.serveStyles = function (req, res) {
  // todo: add deep logging functionality 
  helpers.serveAssets(req, res, { name: 'styles.css', type: 'siteAssets' });
};
