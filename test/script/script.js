const spanEl = document.querySelector("main h2 span")
const txtArr =['프론트엔드 개발자를 꿈꾸는 신주용입니다', '하루하루 발전하는 사람이 되겠습니다!', '잘 봐주세요😃']
let index=0;
let currentTxt = txtArr[index].split("");
function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !==0){
        setTimeout(writeTxt, Math.floor(Math.random()%100));
    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
writeTxt();
