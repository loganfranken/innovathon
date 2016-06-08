var cheerio = require('cheerio');
var request = require('request');

function getUcsbExam(question, callback)
{
  var url = 'https://registrar.sa.ucsb.edu/finals-fall.aspx';


  request.get(url,
    function (error, response, body) {

      var $ = cheerio.load(body);

       callback($("table").html());

    });
  }

module.exports = getUcsbExam;
