import styled from "styled-components";

const Container = styled.div`
height: 300vh;
background-color: pink;
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
`;
const TimeLineContainer = styled.div`
height:250vh;
width: 80%;
background-color: red;
margin:10vh auto 0 auto;
`;

export default function Timeline() {
    return (
        <Container>
            <Heading>Timeline</Heading>
            <TimeLineContainer></TimeLineContainer>
        </Container>
    )
}
