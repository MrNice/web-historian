var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');   // changes from ../helpers/http-helpers
// require more modules/folders here!

exports.serveHome = function (req, res) {
  var assetName = 'index.html';

  if (req.method === "POST") {
    helpers.receiveData(req, res, function (res, data) {

      archive.checkArchive(res, data, function(res, data) {
        console.log('CheckArchive Callback data: ', data);
        helpers.serveAssets(res, { type: 'archivedSites', name: data});
      });

    });
  } else {
    helpers.serveAssets(res, { name: assetName, type: "siteAssets" });
  }
};

exports.serveStyles = function (req, res) {
  helpers.serveAssets(res, { name: 'styles.css', type: 'siteAssets' });
};

// fred lecture request handler logic:
/*
  1. 
*/