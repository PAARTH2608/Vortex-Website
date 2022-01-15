import styled from "styled-components";
import TimelineImg from '../../assets/Timeline.svg'

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
text-align:right;
color:white;
font-size:2.5rem;
`;
const TimeLineContainer = styled.div`
height:250vh;
width: 80%;
background-color: red;
margin:10vh auto 0 auto;
display:flex;
align-items:center;
justify-content:center;
`;
const Image = styled.img`
height:1800px;

`;

export default function Timeline() {
    return (
        <Container>
            <Heading>TIMELINE</Heading>
            <TimeLineContainer>
                <Image src={TimelineImg} alt="timeline"/>
            </TimeLineContainer>
        </Container>
    )
}
