import styled from "styled-components";
import Defence from "../../assets/Molecules/defence.svg";
import HealthCare from "../../assets/Molecules/healthcare.svg";
import Space from "../../assets/Molecules/space.svg";
import CommunityHelp from "../../assets/Molecules/community_help.svg";
import Agriculture from "../../assets/Molecules/agriculture.svg";
import OpenInnovation from "../../assets/Molecules/open_innovation.svg";
import Rect1 from "../../assets/PageSVGs/Domain/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/Domain/Rect2.svg";
import CAD from "../../assets/PageSVGs/Domain/CAD.svg";

// BUG - CAD Missing
const Container = styled.div`
  height: 100vh;
  background-color: green;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const Heading = styled.h1`
  height: 10vh;
  width: 80%;
  padding: 0;
  margin: 0;
  margin-bottom: 6vh;
  text-align: right;
  color: white;
  font-size: 2.5rem;
`;
const MoleculeContainer = styled.div`
  height: 60vh;
  width: 90%;
  padding: 0;
  margin: 0;
  position: relative;
`;
const Img = styled.img`
  height: ${(props) => props.size};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
`;
export default function Domains() {
  return (
    <Container>
      <Image src={Rect1} alt="rect1" top={"10%"} left={"40%"} height={"3vh"} />
      <Image src={Rect2} alt="rect2" top={"75%"} height={"6vh"} right={"0%"}/>
      <Image src={CAD} alt="cad" top={"0%"} left={"10%"} height={"25vh"} />
      <Heading>DOMAINS</Heading>
      <MoleculeContainer>
        <Img
          src={Defence}
          alt="def"
          size={"150px"}
          top={"50px"}
          left={"40px"}
        />
        <Img
          src={HealthCare}
          alt="hltc"
          size={"200px"}
          top={"170px"}
          left={"240px"}
        />
        <Img
          src={Space}
          alt="space"
          size={"100px"}
          top={"20px"}
          left={"430px"}
        />
        <Img
          src={CommunityHelp}
          alt="commhelp"
          size={"170px"}
          top={"30px"}
          left={"640px"}
        />
        <Img
          src={Agriculture}
          alt="agrc"
          size={"130px"}
          top={"180px"}
          left={"890px"}
        />
        <Img
          src={OpenInnovation}
          alt="openinn"
          size={"200px"}
          top={"5px"}
          left={"1040px"}
        />
      </MoleculeContainer>
    </Container>
  );
}
