import styled from "styled-components";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare, FaLinkedin } from 'react-icons/fa' 

const Container = styled.div`
height: 55vh;
background-color: #8652D1;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
`;
const ContainerOne = styled.div`
height:25vh;
width:70%;
display:flex;
align-items:center;
justify-content:space-around;
`;
const InsideContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
width:35%;
`;
const Heading = styled.div`
height:8vh;
width:70%;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:white;
font-size:1.2rem;
font-family: montserrat;
`;
const Span = styled.span`
border-left: 1.5px solid white;
height: 150px;
position:absolute;
left: 50%;
`;
const InOne = styled.p`
font-size: 3rem;
color:white;
font-family: montserrat;
`;
const InTwo = styled.p`
font-size: 1.8rem;
color:white;
font-family: montserrat;
margin-bottom:2vh;
`;
const InFour = styled.p`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`;

export default function Footer() {
    return (
        <Container>
            <ContainerOne>
                <InsideContainer>
                    <InOne>STAY TUNED</InOne>
                    <InTwo>FOR MORE UPDATES</InTwo>
                </InsideContainer>
                <Span></Span>
                <InsideContainer>
                    <InTwo>CONTACT US</InTwo>
                    <InFour>
                        <FaInstagramSquare size={35} color="white" style={{"cursor":"pointer"}}/>
                        <FaFacebook size={35} color="white" style={{"cursor":"pointer"}}/>
                        <FaTwitterSquare size={35} color="white" style={{"cursor":"pointer"}}/>
                        <FaLinkedin size={35} color="white" style={{"cursor":"pointer"}}/>
                    </InFour>
                </InsideContainer>
            </ContainerOne>
            <Heading>Copyright © 2021 Vortex. All rights reserved.</Heading>
        </Container>
    )
}
