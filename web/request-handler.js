var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');   // changes from ../helpers/http-helpers
// require more modules/folders here!

exports.serveHome = function (req, res) {
  var assetName = 'index.html';
  var assetData = { name: assetName, type: 'siteAssets'};

  if (req.method === "POST") {
    helpers.receiveData(req, res, function (res, data) {

      archive.checkArchive(res, data, function(res, data) {
        assetData.name = data;
        
        if(data !== 'loading.html') {
          assetData.type = 'archivedSites';
        }

        helpers.serveAssets(res, assetData);

        console.log('CheckArchive Callback data: ', data);
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