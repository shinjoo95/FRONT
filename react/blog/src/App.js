import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red',fontSize:'18px'}}>블로그</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;

//JSX 문법
//class 넣을 땐 className
//변수 넣을 땐 {중괄호} - 데이터 바인딩
//style 넣을 땐 style={{스타일명 : '값'}}
