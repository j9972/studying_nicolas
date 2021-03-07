const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    // for saving what i write it
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    // 이렇게 default값을 줌으로써 초반에 enter누르면 input창에 뭘써도 사라지는것을 방지 -> event를 금지시캄
    event.preventDefault(); 
    // 내가 적는것을 통해 greeting.innerText작동
    const currentValue = input.value;
    paintGreeting(currentValue);
    // 문제점은 내가 작성한것을 기억하지 못한다는 점이 있다.
    saveName(currentValue); // -> 해결
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//localstroage 기능을 하는 함수
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {  // user가 없을때.
        askForName();
    } else { // => means if user exist in the localStorage then what happen
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}

init();