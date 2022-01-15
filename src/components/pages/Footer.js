import styled from "styled-components";

const Container = styled.div`
height: 45vh;
background-color: red;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
`;
const ContainerOne = styled.div`
height:25vh;
width:80%;
background-color: green;

`;
const InsideContainer = styled.div``;
const Heading = styled.div`
height:8vh;
width:80%;
display:flex;
align-items:center;
justify-content:center;
background-color: blue;
`;

export default function Footer() {
    return (
        <Container>
            <ContainerOne>
                <InsideContainer></InsideContainer>
                <InsideContainer></InsideContainer>
            </ContainerOne>
            <Heading>Copyright © 2021 Vortex. All rights reserved.</Heading>
        </Container>
    )
}
