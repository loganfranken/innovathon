var request = require('request');

function getUcsbAnswer(question, callback)
{
  var url = 'https://ucsb.intelliresponse.com/index.jsp?question=' + question + '&interfaceID=1&id=-1&requestType=NormalRequest&source=1';

  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);
      callback($('#irResponse').text());

    });
}

module.exports = getUcsbAnswer;
