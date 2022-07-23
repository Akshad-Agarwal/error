var speechRecognition = window.webkitSpeechRecognition;
var recongnition = new speechRecognition();
var synth = window.speechSynthesis;
var img_id = "";

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.attach('#camera');


function start() {
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}

recongnition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    content = content.toLowerCase();
    document.getElementById("textbox").innerHTML = content;
    if (content == "picture activate") {
        speak_data = "System starting in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);


        setTimeout(function () {
            img_id = "selfie1";
            takepicture();
            speak_data = "Taking your next selfie in 5 seconds";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
        }, 5000);
    
    }

    else {
        speak_data = "Try again";
    }
}

function takepicture() {

    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selife1") {
            document.getElementById("result1").innerHTML = '<img id="selife1" src="' + data_uri + '"/>';
        }

        if (img_id == "selife2") {
            document.getElementById("result2").innerHTML = '<img id="selife2" src="' + data_uri + '"/>';
        }

        if (img_id == "selife3") {
            document.getElementById("result3").innerHTML = '<img id="selife3" src="' + data_uri + '"/>';
        }
    });

    // setTimeout(function () {
    //     img_id = "selfie1";
    //     takepicture();
    //     speak_data = "Taking you next selfie in 10 seconds";
    //     var utterThis = new SpeechSynthesisUtterance(speak_data);
    //     synth.speak(utterThis);
    // }, 5000);
}