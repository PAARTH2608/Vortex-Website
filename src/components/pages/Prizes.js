import styled from "styled-components";
import SVG from "../../assets/Domain.svg";
import Parallel from "../../assets/PageSVGs/Prizes/Parallel.svg";
import Rect1 from "../../assets/PageSVGs/Prizes/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/Prizes/Rect2.svg";

const Container = styled.div`
  height: 300vh;
  background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled.h1`
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-family: montserrat;
  font-size: 2.5rem;
`;
const ContainerOne = styled.div`
  height: 180vh;
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;
const ContainerTwo = styled.div`
  height: 120vh;
  width: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Helper = styled.div`
  height: 30vh;
  width: 60%;
  margin: 2vh auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InsideHelper = styled.div`
  height: 30vh;
  width: 80%;
  display: flex;
  margin: 0 auto;
`;
const Strip = styled.div`
  height: 60vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StripOne = styled.div`
  height: 2rem;
  background-color: #6809ac;
  width: 100%;
  margin-bottom: 1vh;
`;
const StripTwo = styled.div`
  height: 30vh;
  background-color: #6809ac;
  width: 100%;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PrizeOne = styled.div`
  width: 50%;
  position: relative;
`;
const PrizeTwo = styled.div`
  width: 50%;
  position: relative;
`;
const Header = styled.h1`
  font-size: 3rem;
  color: white;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;
const Prize = styled.h2`
  font-size: 3rem;
  color: #a979ef;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  font-weight: 900;
  font-family: montserrat;
`;
const DivOne = styled.div`
  color: white;
  font-size: 2.5rem;
  font-family: montserrat;
  margin-bottom: 2vh;
`;
const Hr = styled.hr`
  color: white;
  width: 10rem;
  margin-bottom: 2vh;
`;
const DivThree = styled.div`
  color: white;
  font-size: 2rem;
  font-family: montserrat;
  margin-bottom: 2vh;
`;
const Image = styled.img`
  width: 100%;
  height: 30vh;
`;
const Img = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;
`;
export default function Prizes() {
  return (
    <Container>
      <ContainerOne>
        <Img
          src={Parallel}
          alt="parallel"
          top={"60%"}
          left={"0%"}
          height={"80vh"}
        />
        <Img src={Rect1} alt="rect1" top={"110%"} right={"0%"} height={"8vh"} />
        <Heading>PRIZES</Heading>
        <Strip>
          <StripOne></StripOne>
          <StripTwo>
            <DivOne>PRIZE POOL</DivOne>
            <Hr />
            <DivThree>₹ 55000 +</DivThree>
          </StripTwo>
          <StripOne></StripOne>
        </Strip>
        <InsideHelper>
          <PrizeOne>
            <Header top={"0"}>FIRST PRIZE</Header>
            <Prize top={"60px"}>₹ 7000</Prize>
          </PrizeOne>
          <PrizeTwo>
            <Header top={"170px"} right={"0"}>
              SECOND PRIZE
            </Header>
            <Prize top={"230px"} right={"0"}>
              ₹ 7000
            </Prize>
          </PrizeTwo>
        </InsideHelper>
      </ContainerOne>
      <ContainerTwo>
        <Img src={Rect2} alt="rect2" top={"80%"} left={"5%"} height={"4vh"} />
        <Helper>
          <Image src={SVG} alt="domain-name" />
        </Helper>
        <Helper>
          <Image src={SVG} alt="domain-name" />
          <Image src={SVG} alt="domain-name" />
        </Helper>
      </ContainerTwo>
    </Container>
  );
}
