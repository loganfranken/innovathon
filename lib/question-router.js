var ucsbAnswers = require('./sources/ucsb-answers');
var ucsbEvents = require('./sources/ucsb-events');
var ucsbLocations = require('./sources/ucsb-locations');
var ucsbFinancialAid = require('./sources/ucsb-financialAid');
var ivFood = require('./sources/ucsb-food');
var ucsbSurf = require('./sources/ucsb-surf');
var diningCommons = require('./sources/ucsb-dining-commons');
var ucsbExam = require('./sources/ucsb-exam');
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

      // UCSB Locations
      if(question.match(/where/ig))
      {
        source = ucsbLocations;
      }

      // UCSB Financial Aid
      if(question.match(/financial aid/ig))
      {
        source = ucsbFinancialAid;
      }

      // IV Food
      if(question.match(/food/ig))
      {
        source = ivFood;
      }

      // UCSB Surf
      if(question.match(/surf/ig))
      {
        source = ucsbSurf;
      }

      // Dining Commons
      if(question.match(/dining common/ig))
      {
        source = diningCommons;

      }

      // UCSB Exam
      if(question.match(/exam/ig))
      {
        source = ucsbExam;

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
