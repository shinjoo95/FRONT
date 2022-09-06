
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  let post = '강남 우동 맛집';  //자료 잠깐 저장할 땐 변수
  let[글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);
  let[logo, setLogo] = useState('ReactBlog');
  let[좋아요, 좋아요수] = useState(0);
  //state 쓰는 이유 - 자주 변경될 것 같은 Html부분을 state로 만들어 놓기
  //일반 변수가 갑자기 변경이 되면 자동변경이 불가능함 
  //state는 갑자기 변경되면 자동으로 html에 재렌더링이 됨
  
  let [modal, setModal] = useState(false);    // state 저장


  function 함수(){
    좋아요수(좋아요+1);
  }


  // let num = [1, 2];   Destructuring 문법
  // let [a, c] = [1,2];
  
  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      <div className="black-nav">
        <h4 >{logo}</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);

      }}>가나다순정렬</button>


      <button onClick={()=>{       //기존 state == 신규 state의 경우 변경안해줌 / array, object는 reference data type이라서 그럼 
        let copy = [...글제목];     //... <- 괄호 벗겨주세요, 다시 괄호를 씌워 독립적인 어레이 사본이 생김, 새로운 화살표를 저장함 
        copy[0] = '여자코트 추천';    //원본 데이터 보호하기 위해 카피본 생성
        글제목변경(copy);            //state가 array/object면 독립적 shallow카피본을 만들어 수정해야됨 
      }}>글수정</button>


      <div className="list">
      <h4> {글제목[0]} <span onClick={함수}>👍🏻</span> {좋아요} </h4>   
      <p>8월 5일 발행</p>
      </div>
      <div className="list">
      <h4> {글제목[1]}</h4>
      <p>8월 5일 발행</p>
      </div>
      <div className="list">
      <h4 onClick={()=>{ setModal(!modal) }}> {글제목[2]}</h4>
      <p>8월 5일 발행</p>
      </div>

      {/* 동적인 ui 만드는 step
      1. html css로 미리 디자인 완성
      2. ui 현재 상태를 state로 저장
      3. state에 따라 ui가 어떻게 보일지 작성  */}
      {
        //삼항 연산자 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드 
        modal == true ? <Modal/> : null
      }
    </div>
  );
}
        /* 컴포넌트 만드는 법
        function을 만들고 return()안에 html담기 
        <함수명></함수명>쓰기 
        컴포넌트 만들면 좋은 점
        1. 반복적인 html 축약할 때
        2. 큰 페이지에서 용이
        3. 자주 변경되는 UI들 (성능향상) 
        단점 : state 가져다쓸 때 문제생김, A함수에 있던 변수는 B함수에서 마음대로 가져다 쓸 수 없음 */

  
  function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

//JSX 문법
//class 넣을 땐 className
//변수 넣을 땐 {중괄호} - 데이터 바인딩
//style 넣을 땐 style={{스타일명 : '값'}}

//return() 안에는 병렬로 태그 2개 이상 기입금지 

// 1. import { useState }
// 2. useState(보관할 자료)
// 3. let[작명1, 작명2])  작명1 : state에 보관했던 자료 / 작명2 : state 변경을 도와주는 함수 

// onClick = {}안엔 함수이름을 넣어야됨

