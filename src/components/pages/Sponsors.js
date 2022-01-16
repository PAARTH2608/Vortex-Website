import styled from "styled-components";
import Union from '../../assets/PageSVGs/Timeline/Union.svg';
import Rect1 from '../../assets/PageSVGs/Timeline/Rect2.svg';
import Rect2 from '../../assets/PageSVGs/Timeline/Rect1.svg';
import Rect3 from '../../assets/PageSVGs/Timeline/Rect3.svg';

const Container = styled.div`
  height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position:relative;
`;
const Heading = styled.h1`
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto 8vh auto;
  text-align: center;
  color: white;
  z-index:2;
`;
const ContainerOne = styled.div`
  height: 55vh;
  width: 80%;
  margin: 0 auto;
  background-color: pink;
  display: flex;
  flex: wrap;
`;
const Sponsor = styled.div`
  height: 20%;
  background-color: green;
  margin: 4px;
  width: 33%;
`;
const Img = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;
`;

export default function Sponsors() {
  return (
    <Container>
      <Img src={Union} alt="union" top={"10%"} left={"35%"} height={"16vh"} />
      <Img src={Rect1} alt="rect1" top={"18%"} right={"7%"} height={"4vh"} />
      <Img src={Rect3} alt="rect1" top={"60%"} right={"0%"} height={"4vh"} />
      <Img src={Rect2} alt="rect1" top={"68%"} left={"0%"} height={"4vh"} />
      <Heading>SPONSOR AND PARTNERS</Heading>
      <ContainerOne>
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
      </ContainerOne>
    </Container>
  );
}
