var ucsbAnswers = require('./sources/ucsb-answers');
var ucsbEvents = require('./sources/ucsb-events');
var ucsbLocations = require('./sources/ucsb-locations');
var ucsbFinancialAid = require('./sources/ucsb-financialAid');
var ivFood = require('./sources/ucsb-food');
var ucsbSurf = require('./sources/ucsb-surf');
var diningCommons = require('./sources/ucsb-dining-commons');

    function route(question, callback){

      var cleanedQuestion = question.replace(/[^0-9A-Za-z ]/gi, '');

      // UCSB Answers is the default source
      var source = ucsbAnswers;

      // UCSB Events
      if(cleanedQuestion.match(/event/ig))
      {
        source = ucsbEvents;
      }

      // UCSB Locations
      if(cleanedQuestion.match(/where/ig))
      {
        source = ucsbLocations;
      }

      // UCSB Financial Aid
      if(cleanedQuestion.match(/financial aid/ig))
      {
        source = ucsbFinancialAid;
      }

      // IV Food
      if(cleanedQuestion.match(/food/ig))
      {
        source = ivFood;
      }

      // UCSB Surf
      if(cleanedQuestion.match(/surf/ig))
      {
        source = ucsbSurf;
      }

      // Dining Commons
      if(cleanedQuestion.match(/dining common/ig))
      {
        source = diningCommons;

      }

      source(cleanedQuestion, function(answer) {
        callback(answer);
      });
      }

module.exports = route;
