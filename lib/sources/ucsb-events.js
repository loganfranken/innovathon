var cheerio = require('cheerio');
var request = require('request');

function getUcsbAnswer(question, callback)
{
  var url = 'https://events.ucsb.edu/this-weeks-events/';

  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);
       callback($('.mini-boxX h2').text());
        callback($('.mini-date-time').text());
    });
}

getUcsbAnswer('this weeks events?', function(answer) {
  console.log(answer);
});
