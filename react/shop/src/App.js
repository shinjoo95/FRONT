import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import bg from './react-shoe.png';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
// import 작명 from './data.js';              //data.js 데이터를 가져옴
import data from './data.js';
import { Route, Routes, Link} from 'react-router-dom'
function App() {

  let [shoes] = useState(data)

  return (

    <div className="App">
      {/* 페이지 나누는 법 */}
      <Routes>
        <Route path='/' element={<div>메인페이지임</div>}/>
        <Route path='/detail' element={<div>상세페이지임</div>}/>
      </Routes>
      <Link to="/">메인페이지</Link>
      <Link to="/detail">상세페이지</Link>

      {/* 대문자는 컴포넌트 */}
      <Navbar bg="dark" variant="dark"> 
        <Container>
          <Navbar.Brand href="#home">ShinShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 이미지 넣는 법 */}
      {/* html에서 public 폴더 이미지 사용할 땐 그냥/이미지경로
      <img src='/logo192.png'/> 
      경로 지정 권장 방식 
      <img src={process.env.PUBLIC_URL + '/logo192.png'} /> */}
      <div className='main-bg'></div>
      {/* html에서 src폴더의 이미지 넣을 경우 
        import도 추가해야 됨 */}
      {/* <div className='main-bg' style={{backgroundImage: 'url('+bg+')'}}></div> */}
      <Container>
      <Row>
      {/* 컴포넌트 활용하기 */}
      {/* <Card shoes={shoes[0]} i={1}></Card>
      <Card shoes={shoes[1]} i={2}></Card>
      <Card shoes={shoes[2]} i={3}></Card> */}
        {/* <Col>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
        <h4>{shoes[1].title}</h4>
        <p>{shoes[1].price}</p>
        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
        <h4>{shoes[2].title}</h4>
        <p>{shoes[2].price}</p>
        </Col> */}
        {/* 반복문 map 활용하기 */}
        {
          shoes.map((a, i)=>{
            return(
              <Card shoes={shoes[0]} i={i+1}></Card>
            )
          })
        }

      </Row>
      </Container>
    </div>
  );
}
//컴포넌트 만들기
function Card(props){
  return(
<Col>
  <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%"/>
  <h4>{props.shoes.title}</h4>
  <p>{props.shoes.price}</p>
  </Col>  
  )
}

//페이지 나누는 법 (라우터)
//1. 컴포넌트를 만들어서 상세페이지 내용을 채움
//2. 누가 /detail 접속하면 그 컴포넌트를 보여줌
//npm install react-router-dom@6 
export default App;
