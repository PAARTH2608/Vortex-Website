import styled from "styled-components";

const Container = styled.div`
height: 100vh;
background-color: red;
display:flex;
align-items:center;

`;
const InsideContainer = styled.div`
height: 45vh;
width:80%;
background-color: black;
margin:auto;
`;
export default function About() {
    return (
        <Container>
            <InsideContainer />
        </Container>
    )
}
