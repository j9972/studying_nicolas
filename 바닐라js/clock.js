const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// 현재 시간에 대한 함수
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();   
    const seconds = date.getSeconds();
    // 초가 나타내는 숫자가 10보다 적을 경우 0~9로 표현되는 이를 00 ~09로 표현하기 위해 삼항연산자 사용 > 같은 방법으로 시와 분도 적용
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
}

// 보고 싶은 함수를 나타내는 함수
function init() {
    getTime();
    setInterval(getTime, 1000);
    // setInterval함수로 1초의 갭을 둬서 1초마다 시간이 올라가게끔 만들어 놨음
};

//init함수 실행
init();