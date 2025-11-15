// Drum Machine - JavaScript

let drumPadList = document.querySelectorAll(".drum-pad");


function playDrum(pad){
    let audioElement = pad.querySelector("audio");
    audioElement.currentTime = 0;
    audioElement.play();
    let displayElement = document.getElementById("display");
    displayElement.innerText = pad.getAttribute("id");
}

drumPadList.forEach(function(pad){
    pad.addEventListener("click", function(){
        playDrum(pad);
    });
});

document.addEventListener("keydown", function(event){
    let key = event.key.toUpperCase();
    let audioElement = document.getElementById(key);
    if(audioElement){
        playDrum(audioElement.parentElement);
    }
});