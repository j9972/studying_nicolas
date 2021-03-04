const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    // target을 통해 어떤것을 눌렀는지 알 수 있게끔 해준다. parentnode로 그 요소의 부모가 누구인지도 알수있음
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
    //JSON.stringify은 obj를 string으로 바꿔준다.

}

function paintToDo(text) {
    //li 이라는 태그 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    // newId 로 const로 생성한 li의 id갑을 자동적으로 주어진다.
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // parse는 obj로 만들어 준다.
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
}

init(); 