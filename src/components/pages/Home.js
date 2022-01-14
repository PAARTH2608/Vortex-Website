import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  background-color: #553d76;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContOne = styled.div`
  height: 40vh;
  width: 40%;
  background-color: black;
`;
const ContTwo = styled.div`
  height: 40vh;
  width: 40%;
  background-color: black;
`;
const ContThree = styled.div`
  height: 10vh;
  width: 40%;
  background-color: black;
`;
const Helper = styled.div`
display:flex;
flex-direction:column;
align-items-center;
justify-content:center;
`;

export default function Home() {
  return (
    <Container>
      <ContOne />
      <Helper>
        <ContTwo />
        <ContThree />
      </Helper>
    </Container>
  );
}
