import styled from "styled-components";
import Defence from '../../assets/Molecules/defence.svg';
import HealthCare from '../../assets/Molecules/healthcare.svg';
import Space from '../../assets/Molecules/space.svg';
import CommunityHelp from '../../assets/Molecules/community_help.svg';
import Agriculture from '../../assets/Molecules/agriculture.svg';
import OpenInnovation from '../../assets/Molecules/open_innovation.svg';

const Container = styled.div`
height: 100vh;
background-color: purple;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`;
const Heading = styled.h1`
height:10vh;
width:80%;
padding:0;
margin:0;
margin-bottom:6vh;
text-align:right;
color:white;
font-size:2.5rem;
`;
const MoleculeContainer = styled.div`
height:60vh;
width:90%;
padding:0;
margin:0;
position:relative;
`;
const Img = styled.img`
height: ${props => props.size};
position:absolute;
top: ${props => props.top};
left: ${props => props.left};
`;
export default function Domains() {
    return (
        <Container>
            <Heading>DOMAINS</Heading>
            <MoleculeContainer>
                <Img src={Defence} alt="def" size={"150px"} top={"50px"} left={"40px"}/>
                <Img src={HealthCare} alt="hltc" size={"200px"} top={"170px"} left={"240px"}/>
                <Img src={Space} alt="space" size={"100px"} top={"20px"} left={"430px"}/>
                <Img src={CommunityHelp} alt="commhelp" size={"170px"} top={"30px"} left={"640px"}/>
                <Img src={Agriculture} alt="agrc" size={"130px"} top={"180px"} left={"890px"}/>
                <Img src={OpenInnovation} alt="openinn" size={"200px"} top={"5px"} left={"1040px"}/>
            </MoleculeContainer>
        </Container>
    )
}
