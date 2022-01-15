import styled from "styled-components";

const Container = styled.div`
height: 100vh;
background-color: red;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`;
const InsideContainer = styled.p`
height: 45vh;
width:80%;
`;
const Heading = styled.h1`
  height: 8vh;
  width: 80%;
  padding: 0;
  margin-bottom: 3vh;
  color:white;
  font-size: 2rem;
`;
const Para = styled.p`
width: 70%;
color:white;
font-size: 1.5rem;
font-family:montserrat;
`;
export default function About() {
    return (
        <Container>
            <Heading >ABOUT US</Heading>
            <InsideContainer><Para>VORTEX 360 is a 30 days online  CAD modelling 
                hack organized by RoboVITics, the official RObotics Club of VIT, and powered 
                by AutoDesk. This hack aims to provide a platform where you can unwrap your 
                skills and discover the extent of yor abilities. RoboVITics team cordially 
                invites you to be a part of this endeavour to showcase and emrich your skills, 
                grab your opportunity and unleash the vortex within.</Para></InsideContainer>
        </Container>
    )
}
