const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

// 시, 분, 초 구하는 함수
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML =  `${hours}:${minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;




}// getTime()

function init() {
    setInterval(getTime, 1000);
}// init()

init();