var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onStart = function(){
    if (recognizing) {
        recognition.stop();
        return;
    }
    recognizing = true;
}

recognition.onresult = function(event) {
    var final_transcript = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        }
        else {
        	final_transcript += event.results[i][0].transcript;
      }
    }
    if(final_transcript == ""){
        $("#question").val("no results :(");
    }
    else{
        $("#question").val(final_transcript);
        recognition.stop();
    }
};

recognition.onend = function(event){
    recStop();
    $("#question-form").submit();
};

function startSpeechRec(){
    if($("#isRecording").val() == "true"){
        recognition.stop();
    }
    else{
        
        $("body").css("background-color", "pink");
        $("#isRecording").val("true")
        recognition.lang = "en-US";
        recognition.start();
    }
}

function recStop(){
        $("#isRecording").val("false")
        $("body").css("background-color", "white");
}