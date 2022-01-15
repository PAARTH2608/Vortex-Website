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
  background-color: blue;
  height: 10vh;
  width: 80%;
  padding: 0;
  margin: 0;
  margin-bottom: 10vh;
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
      <Heading>Speakers</Heading>
      <SpeakersContainer>
        {speakersList.map((speaker) => (
          <Speaker speaker={speaker} />
        ))}
      </SpeakersContainer>
    </Container>
  );
}
