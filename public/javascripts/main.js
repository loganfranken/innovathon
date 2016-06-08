$(function() {

  $('#question-form').on('submit', function(event) {

    event.preventDefault();

    var question = $('#question').val();

    $.get('/answers?question=' + question, function(data) {
      $('#response').html(data);
    });

  });

});
