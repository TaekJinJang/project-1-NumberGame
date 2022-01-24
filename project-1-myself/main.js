// 게임 종료 시 버튼 비활성화 clear
// 입력받은 숫자에 대해 업 다운이라고 알려줌 clear
// 총 5번 기회 clear
// 리셋버튼 누를 시 모두 초기화 clear
// 1~100까지 숫자가 아닐 시 경고메세지 clear
// 중복값 경고 
// 랜덤번호 지정 clear

let randomNum = 0;
let chance = 5;
let history = []
function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

let updownText = document.getElementById("updown-text");
let chanceText = document.getElementById("chance-text");
let userNum = document.getElementById("user-num");
let btnGo = document.getElementById("btn-go");
let btnReset = document.getElementById("btn-reset");

userNum.addEventListener("focus", function () {
    userNum.value = "";
})
btnGo.addEventListener("click", btnGo_Click);
btnReset.addEventListener("click", btnReset_click);
function btnGo_Click() {
  let userNum_value = userNum.value;
  if(userNum_value < 1 || userNum_value > 100 || userNum_value == "") {
    updownText.textContent = "1~100까지 숫자를 입력해주세요"
    return;
}
if (history.includes(userNum_value)){
    updownText.textContent = "중복된 값입니다."
    return;
}
  chance--;
  chanceText.textContent = `남은 기회 : ${chance}회입니다.` 

  if (chance < 1) {
      btnGo.disabled = true;
      return;
  }
  if (userNum_value == randomNum) {
    updownText.textContent = "정답입니다!! ";
    btnGo.disabled = true;

  } else if (userNum_value > randomNum) {
    updownText.textContent = "DOWN !!";

  } else if (userNum_value < randomNum) {
    updownText.textContent = "UP !!";

  }
  history.push(userNum_value)
  
}
function btnReset_click() {
    chance = 5;
    userNum.value = "";
    chanceText.textContent = `남은 기회 : ${chance}회입니다.`;
    pickRandomNum();
    updownText.textContent = "1~100까지 숫자를 맞춰주세요"
    btnGo.disabled = false;
}

pickRandomNum();
