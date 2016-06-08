var ucsbAnswers = require('./sources/ucsb-answers');

/*
class questionRouter {

    constructor(question) {
        var question = question;
        route(question);
    }
*/

    function route(question, callback){

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

        ucsbAnswers(question, function(answer) {
          callback(answer);
        });
      }
/*
    }
}
*/

module.exports = route;
