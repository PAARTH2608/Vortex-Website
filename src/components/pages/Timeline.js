import styled from "styled-components";
import TimelineImg from '../../assets/Timeline.svg'
import Union from '../../assets/PageSVGs/Timeline/Union.svg';
import Circle from '../../assets/PageSVGs/Timeline/Circle.svg';
import Rect1 from '../../assets/PageSVGs/Timeline/Rect1.svg';
import Rect2 from '../../assets/PageSVGs/Timeline/Rect2.svg';
import Rect3 from '../../assets/PageSVGs/Timeline/Rect3.svg';
import Rect4 from '../../assets/PageSVGs/Timeline/Rect4.svg';
import Rect5 from '../../assets/PageSVGs/Timeline/Rect5.svg';
import Design from '../../assets/PageSVGs/Timeline/DESIGN.svg';
import Tech from '../../assets/PageSVGs/Timeline/TECH.svg';

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
            <Img src={Union} alt="hex" top={"3.7%"} right={"16%"} height={"15vh"}/>
            <Img src={Circle} alt="circle" top={"-2%"} left={"0%"} height={"30vh"}/>
            <Img src={Rect1} alt="rect1" top={"10%"} left={"14%"} height={"4vh"}/>
            <Img src={Rect2} alt="rect2" top={"20%"} right={"0%"} height={"4vh"}/>
            <Img src={Rect3} alt="rect3" top={"50%"} right={"0%"} height={"4vh"}/>
            <Img src={Rect4} alt="rect4" top={"55%"} left={"10%"} height={"6vh"}/>
            <Img src={Rect5} alt="rect5" top={"73%"} right={"25%"} height={"3vh"}/>
            <Img src={Rect4} alt="rect4" top={"85%"} left={"5%"} height={"6vh"}/>
            <Img src={Design} alt="design" top={"25%"} left={"0%"} height={"15vh"}/>
            <Img src={Tech} alt="design" top={"88%"} right={"0%"} height={"15vh"}/>
            <Heading>TIMELINE</Heading>
            <TimeLineContainer>
                <Image src={TimelineImg} alt="timeline"/>
            </TimeLineContainer>
        </Container>
    )
}
