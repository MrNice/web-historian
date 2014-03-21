var helpers = require('../helpers/archive-helpers.js');
var CronJob = require('cron').CronJob;
var async = require('async');

new CronJob('*/4 * * * * * *', function(){
  helpers.readListOfUrls(function(list){
    var iterator = function(item, callback){
      helpers.isURLArchived(item,
      function(item) { 
        console.log('Oh yeah We have this already: ', item);
      },
      function(item) {
        helpers.downloadUrl(item);
      });
    };
    var callback = function(){};

    //Async each
    async.each(list, iterator, callback);
  });
}, null, true, "America/Los_Angeles");
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
