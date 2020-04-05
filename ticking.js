const tickingContainer = document.querySelector('.js-audio');
const tickingCheckBox = document.querySelector('#cb-tick');
var timerId;
function playSound(){
    tickingContainer.currentTime = 0;
    tickingContainer.play();
}

function offSound(timerId){
    tickingContainer.pause();
    timerId === null ? clearInterval() : clearInterval(timerId);
}

function onOffSound(event){
    if(event.target.checked){
        console.log('check');
        timerId = setInterval(playSound, 1000);

    }else{
        console.log('uncheck');
        offSound(timerId);
    }
}

function init(){
    tickingCheckBox.addEventListener('change', onOffSound);

    //setInterval(playSound, 1000);

}

init();
