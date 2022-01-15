import styled from "styled-components";
import { speakersList } from "../data/speakerData";
import Speaker from "../utils/Speaker";

const Container = styled.div`
  height: 100vh;
  background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled.h1`
  height: 10vh;
  width: 70%;
  padding: 0;
  margin: 0;
  margin-bottom: 2vh;
  color:white;
  font-size:2.5rem;
`;
const SpeakersContainer = styled.div`
  height: 60vh;
  width: 80%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default function Speakers() {
  // console.log(speakersList)
  return (
    <Container>
      <Heading>SPEAKERS</Heading>
      <SpeakersContainer>
        {speakersList.map((speaker) => (
          <Speaker speaker={speaker} />
        ))}
      </SpeakersContainer>
    </Container>
  );
}
