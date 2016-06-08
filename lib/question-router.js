var ucsbAnswers = require('./sources/ucsb-answers');
var ucsbEvents = require('./sources/ucsb-events');

/*
class questionRouter {

    constructor(question) {
        var question = question;
        route(question);
    }
*/

    function route(question, callback){

      // UCSB Answers is the default source
      var source = ucsbAnswers;

      // UCSB Events
      if(question.match(/event/ig))
      {
        source = ucsbEvents;
      }

      source(question, function(answer) {
        callback(answer);
      });

      /*
        if(question.tolower().contains("what")){

        }
        if(question.tolower().contains("where")){

        }
        if(question.tolower().contains("when")){

        }
        if(question.tolower().contains("why")){

        }
        if(question.tolower().contains("how")){

        }
        */
      }
/*
    }
}
*/

module.exports = route;
