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

// logic
/*
  1. if inUrlList === true
       if archived === true -> serve page
       else                 -> serve loading
         * note * use redirect
  2. if inUrlList === false
       1. write to list
       2. serve loading page
*/


exports.checkArchive = function(res, url, callback) {
  url = 'www.google.com'; // Test Data

  exports.isUrlInList(url, function s (url) {
    exports.isURLArchived(url, function s (url) {
      console.log('is archived, serve page');
      callback(res, url);
    } , function f (url){
      console.log('is not archived, serve loading');
      console.log(callback);
      callback(res, 'loading.html');
    } );
  }, function f (url) {
    console.log('write to list: ' + url);
    exports.addUrlToList(url);
    console.log('serve loading page');
  });
};

exports.readListOfUrls = function(callback){
  fs.readFile(paths.list, {encoding: 'utf8'}, function (err, list) {
    if (err) { throw err; }
    console.log(list);
    list = list.split('\n');
    // parse list and load in memory

    callback(list);
  });
};

exports.addUrlToList = function(url){
  url = url + '\n';
  var filename = exports.paths.list;
  console.log('Adding this to list!');
  fs.appendFile(filename, url, {encoding: 'utf8'}, function(err) {
    if (err) throw err;
  });
};

exports.downloadUrls = function(target){
  console.log('Appending to file');
};

exports.isURLArchived = function(target, successCb, failureCb){
  // how to read a directory?
  fs.readdir(paths.archivedSites, function (err, dirSiteNames){
    if (err) { throw err; }
    if (dirSiteNames.indexOf(target) > -1) {
      successCb(target);
    } else {
      failureCb(target);
    }
  });
  return true;
};

exports.isUrlInList = function(target, successCb, failureCb){
  exports.readListOfUrls(function (data, target) {
    console.log('ReadlistofURLs target: ' + target);
    if (data.indexOf(target) > -1) {
       successCb(target);
    } else {
      failureCb(target);
    }
  });
  return true;
};