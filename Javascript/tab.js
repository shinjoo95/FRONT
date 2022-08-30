
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
for(let i = 0; i < 3; i++){                     
$('.tab-button').eq(i).on('click', function(){   
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
});
}