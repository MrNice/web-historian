var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
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

exports.checkArchive = function() {
  return 'www.google.com';
};
// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

// Only workers should use these functions
readListOfUrls = function(){
};

addUrlToList = function(){
};

downloadUrls = function(){
};

isURLArchived = function(){
  return true;
};

isUrlInList = function(){
  // read file
  // if google is in file
  return true;
};

// exports.readListOfUrls = function(){
// };

// exports.addUrlToList = function(){
// };

// exports.downloadUrls = function(){
// };

// exports.isURLArchived = function(){
//   return true;
// };

// exports.isUrlInList = function(){
//   // read file
//   // if google is in file
//   return true;
// };
