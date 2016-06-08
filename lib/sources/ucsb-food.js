var cheerio = require('cheerio');
var request = require('request');

function getUcsbEvents(question, callback)
{
  var url = 'http://www.yelp.com/search?find_desc=restaurants+open+late&find_loc=Isla+Vista,+CA+93117&start=0&attrs=Open24Hours';

  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);

       callback($('.indexed-biz-name span').text() + "<br/>"+ $('.secondary-attributes address').text() );

    });
}

module.exports = getUcsbEvents;
