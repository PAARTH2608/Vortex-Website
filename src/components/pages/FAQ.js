import styled from "styled-components";
import { faqData } from '../faqData'
import Question from "../Question";

const Container = styled.div`
  height: 100vh;
  background-color:red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
const Heading = styled.h1`
  background-color: blue;
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto;
`;
const Helper = styled.div`
height:55vh;
width:80%;
margin:0 auto;
background-color:green;

`;

export default function FAQ() {
    // console.log(faqData)
    return (
        <Container>
            <Heading>FAQ's</Heading>
            <Helper>
                {faqData.map(ques => (
                    <Question question={ques} />
                ))}
            </Helper>
        </Container>
    )
}
