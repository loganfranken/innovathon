var cheerio = require('cheerio');
var request = require('request');

function getUcsbEvents(question, callback)
{
  var url = 'https://events.ucsb.edu/';

  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);

         callback("Event name: "+  $('.mini-box h3').first().text() + "<br/>"+ "Location: " + $('.mini-category').first().text() + "<br/>"+
                  "Time:  " + $('.mini-date-time').first().text() );
   });

}

module.exports = getUcsbEvents;
