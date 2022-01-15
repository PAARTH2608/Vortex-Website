import styled from "styled-components";
import img1 from "../../assets/logo.svg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";
import Counter from "../utils/Counter";
import "../component-styles/Home.css";

const Container = styled.div`
  height: 90vh;
  background-color: #553d76;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContOne = styled.div`
  width: 20%;
`;
const ContTwo = styled.div`
  height: 40vh;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3vh;
`;
const ContThree = styled.div`
  height: 10vh;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Helper = styled.div`
height: 35vh;
width: 40%;
display:flex;
flex-direction:column;
align-items-center;
justify-content:center;
`;
const Img = styled.img`
  height: 35vh;
`;
const BoxOne = styled.h1`
  height: 10vh;
  width: 100%;
  color: #ba8aff;
`;
const BoxTwo = styled.h1`
  height: 20vh;
  width: 100%;
`;
const BoxThree = styled.h1`
  height: 10vh;
  width: 100%;
`;
const ButtonOne = styled.button`
  width: 42%;
  height: 90%;
  margin-right: 0.3rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: 4px solid #8341e1;
  color: white;
  box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);

  &:hover{
    background-color: #8341e1;
  }
`;
const ButtonTwo = styled.button`
  width: 42%;
  height: 90%;
  font-size: 1.5rem;
  background-color: #8341e1;
  border: 4px solid #8341e1;
  color: white;
  box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);

  &:hover{
    background-color: transparent;
  }
`;
const Span = styled.span`
  color: #8341e1;
  height:200px
`;
export default function Home() {
  return (
    <Container>
      <ContOne>
        <Img src={img1} alt="logo-vortex" />
      </ContOne>
      <Helper>
        <ContTwo>
          <BoxOne>
            Oct 29, 2021 <Span>|</Span> 09: 00 pm IST
          </BoxOne>
          <BoxTwo>
            <Counter countdownTimestampMs={1645983662000} />
          </BoxTwo>
          <BoxThree>
            <ButtonOne>REGISTER</ButtonOne>
            <ButtonTwo>
              <FaDiscord /> DISCORD
            </ButtonTwo>
          </BoxThree>
        </ContTwo>
        <ContThree>
          <FaInstagram size={35} color="white" style={{"cursor":"pointer"}} />
          <FaFacebook size={35} color="white" style={{"cursor":"pointer"}}/>
          <FaEnvelope size={35} color="white" style={{"cursor":"pointer"}}/>
          <FaLinkedin size={35} color="white" style={{"cursor":"pointer"}}/>
        </ContThree>
      </Helper>
    </Container>
  );
}
