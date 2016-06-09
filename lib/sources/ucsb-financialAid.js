var cheerio = require('cheerio');
var request = require('request');

function getUcsbFinancialAid(question, callback)
{
  var url = 'https://ucsb.intelliresponse.com/?requestType=NormalRequest&source=3&id=55&sessionId=8692cbce-24fa-11e6-a261-7b067d6ed0eb&question=How+do+I+apply+for+financial+aid';

  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);

      callback( $('#irResponse').text());

    });
}

module.exports = getUcsbFinancialAid;
