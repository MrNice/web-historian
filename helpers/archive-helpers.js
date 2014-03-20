// var urllib = require('url');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var paths;
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */
 
exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),     // index.html, loading
  'archivedSites' : path.join(__dirname, '../archives/sites'), // htmls
  'list' : path.join(__dirname, '../archives/sites.txt')       // list
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};



exports.checkArchive = function(res, url, callback) {
  url = 'www.google.com'; // Test Data

  callback(res, url);
};

exports.readListOfUrls = function(callback, arg){
  fs.readFile(paths.list, function (err, list) {
    if (err) throw err;
    list = list.split('\n');
    // parse list and load in memory

    callback.call(list, arg);
  });
};

exports.addUrlToList = function(list, callback){
  callback();
};

exports.downloadUrls = function(target, callback){
  callback();
};

exports.isURLArchived = function(archive, target, callback){
  return true;
};

exports.isUrlInList = function(list, target, callback){
  // read file
  // if google is in file
  return true;
};