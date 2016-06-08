var express = require('express');
var router = express.Router();
var questionRouter = require('../lib/question-router')

router.get('/', function(req, res) {

  var question = req.query['question'];

  questionRouter(question, function(answer) {
    res.send(answer);
  });

});

module.exports = router;
