import styled from "styled-components";

const Container = styled.div`
  height: 200vh;
  background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled.h1`
  background-color: blue;
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto;
`;
const ContainerOne = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
`;
const ContainerTwo = styled.div`
  height: 100vh;
  width: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Helper = styled.div`
  height: 30vh;
  width: 80%;
  margin: 2vh auto;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InsideHelper = styled.div`
  height: 50vh;
  width: 80%;
  display: flex;
  background-color: blue;
  margin:0 auto;
`;
const Strip = styled.div`
  height: 10vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PrizeOne = styled.div`
background-color: pink;
// margin:2px;
width:50%;
`;
const PrizeTwo = styled.div`
background-color: pink;
// margin:2px;
width:50%;
`;
export default function Prizes() {
  return (
    <Container>
      <ContainerOne>
        <Heading>Prizes</Heading>
        <Strip>prize pool</Strip>
        <InsideHelper>
          <PrizeOne>first prize</PrizeOne>
          <PrizeTwo>second prize</PrizeTwo>
        </InsideHelper>
      </ContainerOne>
      <ContainerTwo>
        <Helper></Helper>
        <Helper></Helper>
      </ContainerTwo>
    </Container>
  );
}
