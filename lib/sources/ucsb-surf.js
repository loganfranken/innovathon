var cheerio = require('cheerio');
var request = require('request');

function getUcsbSurf(question, callback)
{
  var url = 'http://www.surfline.com/surf-forecasts/southern-california/santa-barbara_2141';

  request.get(url,
      function (error, response, body) {

      var $ = cheerio.load(body);

       callback($('.forecast-outlook p').text());

    });
}

module.exports = getUcsbSurf;
