var request = require('request');

function getUcsbLocation(question, callback)
{
  var url = 'http://map.geog.ucsb.edu/api?action=searchMap&searchText=' + question;

  request.get(url,
    function (error, response, body) {

      var results = JSON.parse(body);
      callback(results.results ? results.results[0] : '');

    });
}

module.exports = getUcsbLocation;
