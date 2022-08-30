
//0을 누르면 
//모든 버튼에 붙은 orange 클래스명 제거 
//버튼0에 orange 클래스명 추가
//모든 div에 붙은 show 클래스명 제거 
//div0에 show 클래스명 추가 

// $('.tab-button').eq(0).on('click', function(){    //$표시는 다 찾아줌 아무버튼이나 눌러도 코드실행하는 현상 발생 .eq(n) n번째 찾기
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).on('click', function(){    
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })
// //좋은 관습
// //자주 쓰는 셀렉터 변수에 넣어 쓰기 
// var 버튼 = $('.tab-button');
// 버튼.eq(2).on('click', function(){    
//     버튼.removeClass('orange');
//     버튼.eq(2).addClass('orange');
//     버튼.removeClass('show');
//     버튼.eq(2).addClass('show');
// })
//자주 쓰는 셀렉터 변수에 넣어 쓰기 

//for 반복문 
//i 가 0부터 3이 되기 전까지 1씩 더해주세요 
for(var i = 0; i < 3; i++){
    console.log('ㅎㅇ')
}
console.log('ㅎㅇ');

// 반복문 안에 있는 변수를 만들 때는 변수는 let
// var 변수는 범위가 function, let 변수는 범위가 {}
// for(let i = 0; i < 3; i++){                     
// $('.tab-button').eq(i).on('click', function(){   
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(i).addClass('show');
// });
// }

//함수 축약하기
//축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘됨
// for(let i = 0; i < 3; i++){                 
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     })
// } 

//탭 기능 다르게 만들기 
//이벤트리스너 1개만 쓰기 -> 이벤트리스너가 줄어들면 줄어들 수록 램 용량 증가, 성능 향상 
//이벤트버블링을 알고 있으면 이벤트리스너가 많이 필요없음.
// $('.list').click(function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         탭열기(0);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         탭열기(1);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         탭열기(2);
//     }
// })

//html 태그에 몰래 정보 숨기기 가능
//data-자료이름-"값"
//숨겼던 자료 출력은 셀렉터.dataset.자료이름
$('.list').click(function(e){
    console.log(e.target.dataset.id)
    //탭열기(지금누른버튼에 숨겨져 있는 data-id)
    탭열기(e.target.dataset.id)
})

function 탭열기(숫자){   
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}
//1. 함수로 축약할 때 변수 같은게 있으면 파라미터로 바꾸는게 좋음 
//2. 이벤트리스너 줄이면 이점이 있음
//3. dataset 알면 이벤트리스너 적게 사용할 때 내가 뭘 눌렀는 지 쉽게 파악 가능 