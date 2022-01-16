import React, { useState } from "react";
import styled from "styled-components";
import Arr from "../../assets/Union.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  border: 2px solid white;
  border-radius: 5px;
  padding: 1vh;
  overflow: hidden;
  margin: 1vh;
`;
const Que = styled.p`
  color: white;
  font-family: montserrat;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Arrow = styled.img`
  cursor: pointer;
`;
const Answer = styled.p`
  color: white;
  font-family: montserrat;
`;
const HelperOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1vh;
`;
const HelperTwo = styled.div``;
export default function Question(props) {
  const [open, setOpen] = useState(false);

  const handler = () => {
      setOpen(state => !state);
  }

  return (
    <Container>
      {/* {props.question.que} */}
      <HelperOne>
        <Que>{props.question.que}</Que>
        <Arrow src={Arr} alt="arrow" onClick={handler} />
      </HelperOne>
      {open && (
        <HelperTwo>
          <Answer>{props.question.ans}</Answer>
        </HelperTwo>
      )}
    </Container>
  );
}
