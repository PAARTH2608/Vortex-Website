import styled from "styled-components";

const Container = styled.div`
height: 100vh;
background-color: purple;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`;
const Heading = styled.h1`
background-color:blue;
height:10vh;
width:80%;
padding:0;
margin:0;
margin-bottom:10vh
`;
const MoleculeContainer = styled.div`
background-color: black;
height:60vh;
width:80%;
padding:0;
margin:0
`;
export default function Domains() {
    return (
        <Container>
            <Heading>Domains</Heading>
            <MoleculeContainer></MoleculeContainer>
        </Container>
    )
}
