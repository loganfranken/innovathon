require(["esri/geometry/webMercatorUtils"], function(webMercatorUtils) {

  $(function() {

    $('#question-form').on('submit', function(event) {

      var $response = $('#response');
      $response.fadeOut();

      event.preventDefault();

      var question = $('#question').val();

      $.get('/answers?question=' + question, function(data) {

        var jsonData = JSON.stringify(data);
        if(jsonData.match(/fid/ig))
        {
          var coordinates = /-?[0-9]+.[0-9]+,-?[0-9]+.[0-9]+/.exec(jsonData)[0].split(',');
          var latLong = webMercatorUtils.xyToLngLat(coordinates[0], coordinates[1]);
          speak('Here is a map of ' + data.label);
          $response.html('<iframe width="100%" height="500" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBjpNq9goKydvdeU63xYsbUAVETtwQJNs4&center=' + latLong[1] + ',' + latLong[0] + '&zoom=19">');
        }
        else {
          $response.html(data);
          speak(data);
        }

        $response.fadeIn();

      });

    });

  });

});

function speak(message)
{
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 2; //0 to 2
  msg.text = message;
  msg.lang = 'en-US';

  speechSynthesis.speak(msg);
}
