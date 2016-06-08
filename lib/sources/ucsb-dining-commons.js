var cheerio = require('cheerio');
var request = require('request');

function getDiningCommonMenu(question, callback)
{
  var url = 'https://appl.housing.ucsb.edu/menu';

  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);
      callback($('#Carrillo-Dinner-Hours').closest('.meal-panel').find('.panel-body').text());

    });
}

module.exports = getDiningCommonMenu;
