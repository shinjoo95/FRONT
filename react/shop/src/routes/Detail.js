import { useParams } from "react-router-dom";
import styled from "styled-components";
//js파일이 복잡해짐 
//중복 스타일은 컴포넌트 간 import 하는데 css파일과 다를게 없음
//협업 시 css 담당의 숙련도 이슈 
let YellowBtn = styled.button`
background : ${props => props.bg};
color : ${props => props.bg == 'blue' ? 'white' : 'black'};
padding:10px; 
`
let Box = styled.div
`
background : grey;
padding : 20px;
`
let NewBtn = styled.button(YellowBtn)  //기존 스타일 복사 가능
function Detail(props){

  // 유저가 Url 파라미터에 입력한거 가져오기
  let{id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  return (
    <div className="container">
      <Box>
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail;