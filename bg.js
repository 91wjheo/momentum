const body = document.querySelector("body");

const IMG_NUMBER_MAX = 3
    ,IMG_NUMBER_MIN = 1;

function paintImage(imgNumber){
        const image = new Image();
        image.src = `images/${imgNumber}.jpeg`;
        body.appendChild(image);
        image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER_MAX) + IMG_NUMBER_MIN;
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init();