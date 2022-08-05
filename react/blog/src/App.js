
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
      <h4> {글제목[2]}</h4>
      <p>8월 5일 발행</p>
      </div>
    </div>
  );
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

