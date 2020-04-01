const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = []; // 할 일 목록 저장할 배열

function deleteLSToDo(id){
    // 로컬db에 있는것도 지워야함.
    let toDos = JSON.parse(localStorage.getItem(TODOS_LS));
    for(key in toDos){
        if(toDos[key].id == id){
            console.log(toDos[key]);
            toDos.splice(key, 1);
        }
    }
    // 삭제한 todo항목을 다시 로컬db에 세팅해줌.
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function deleteToDo(event){

    // html요소에서 삭제
    console.log(event.target.parentNode.id);
    const delId = event.target.parentNode.id;
    const delTarget = document.getElementById(delId);
    console.log(delTarget);
    delTarget.remove();

    // 로컬db에서 삭제
    deleteLSToDo(delId);
}



function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){

        const parsedToDos = JSON.parse(loadedToDos);
        // 배열에 있는 함수중에 하나인 forEach
        // forEach함수는 배열의 각 원소에 대해서 매번 파라미터의 함수를 호출시켜준다.
        parsedToDos.forEach(function(toDo){
           paintTodo(toDo.text);
        });
    }
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+ 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id  : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();