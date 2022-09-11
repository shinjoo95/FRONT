import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import bg from './react-shoe.png';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
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
      <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
