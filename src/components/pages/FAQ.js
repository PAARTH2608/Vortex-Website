import styled from "styled-components";
import { faqData } from '../data/faqData';
import Question from "../utils/Question";
import Rect1 from "../../assets/PageSVGs/FAQ/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/FAQ/Rect2.svg";

const Container = styled.div`
  height: 100vh;
  background-color:red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position:relative;
`;
const Heading = styled.h1`
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto;
  text-align:right;
  color:white;
  font-size:2.5rem;
  z-index: 2;
`;
const Helper = styled.div`
height:55vh;
width:80%;
margin:0 auto;
background-color:green;

`;
const Img = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;
`;
export default function FAQ() {
    // console.log(faqData)
    return (
        <Container>
            <Img src={Rect1} alt="rect1" top={"12%"} right={"12%"} height={"6vh"} />
            <Img src={Rect2} alt="rect2" top={"82%"} left={"12%"} height={"5vh"} />
            <Heading>FAQ'S</Heading>
            <Helper>
                {faqData.map(ques => (
                    <Question question={ques} />
                ))}
            </Helper>
        </Container>
    )
}
