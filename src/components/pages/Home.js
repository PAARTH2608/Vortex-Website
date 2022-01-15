import styled from "styled-components";
import img1 from '../../assets/logo.svg';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope,  } from 'react-icons/fa'
import Counter from "../utils/Counter";
import '../component-styles/Home.css';

const Container = styled.div`
  height: 90vh;
  background-color: #553d76;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContOne = styled.div`
  width:20%;
`;
const ContTwo = styled.div`
  height: 40vh;
  width: 100%;
  margin-bottom:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;
const ContThree = styled.div`
  height: 10vh;
  width: 100%;
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
height:10vh;
width:100%;
color: #BA8AFF;
font-family: montserrat;
`;
const BoxTwo = styled.h1`
height:20vh;
width:100%
`;
const BoxThree = styled.h1`
height:10vh;
width:100%
`;
const ButtonOne = styled.button`
width:40%;
height:100%;
`;
const ButtonTwo = styled.button`
width:40%;
height:100%;
`;
export default function Home() {
  return (
    <Container>
      <ContOne >
        <Img src={img1} alt="logo-vortex"/>
      </ContOne>
      <Helper>
        <ContTwo >
          <BoxOne>Oct 29, 2021 09: 00 pm IST</BoxOne>
          <BoxTwo><Counter countdownTimestampMs={1645983662000}/></BoxTwo>
          <BoxThree>
            <ButtonOne />
            <ButtonTwo />
          </BoxThree>
        </ContTwo>
        <ContThree>
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
          <FaEnvelope />
        </ContThree>
      </Helper>
    </Container>
  );
}
