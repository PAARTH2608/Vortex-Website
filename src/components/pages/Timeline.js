import styled from "styled-components";
import TimelineImg from '../../assets/Timeline.svg'
import Union from '../../assets/PageSVGs/Timeline/Union.svg';

const Container = styled.div`
height: 300vh;
background-color: pink;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
position:relative;
`;
const Heading = styled.h1`
height:10vh;
width:80%;
padding:0;
margin:0;
text-align:right;
color:white;
font-size:2.5rem;
z-index:2;
`;
const TimeLineContainer = styled.div`
height:250vh;
width: 80%;
margin:10vh auto 0 auto;
display:flex;
align-items:center;
justify-content:center;
`;
const Image = styled.img`
height:1800px;

`;
const Img = styled.img`
position:absolute;
top:${props => props.top};
left:${props => props.left};
height:${props => props.height};
right:${props => props.right};
z-index:1;
`;

export default function Timeline() {
    return (
        <Container>
            <Img src={Union} alt="circle" top={"3.7%"} right={"16%"} height={"15vh"}/>
            <Heading>TIMELINE</Heading>
            <TimeLineContainer>
                <Image src={TimelineImg} alt="timeline"/>
            </TimeLineContainer>
        </Container>
    )
}
