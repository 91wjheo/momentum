const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // 텍스트를 보여줄거면 폼을 숨겨야한다. 이게 무슨말?
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =  `Hello, ${text}`;
}
function handleSubmit(event){
    event.preventDefault(); // form이 전송될때 즉, submit될때의 기본 이벤트작동방식인 action 경로로 요청날리는걸 막아줌.
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //  보여주지 않음
        askForName();
    }else{
        // 로컬스토리지에 사용자 이름이 있을경우 보여줌
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();