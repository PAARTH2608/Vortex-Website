import styled from "styled-components";

const Container = styled.div`
height: 100vh;
background-color: black;
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
  margin: 0 auto 8vh auto;
`;
const ContainerOne = styled.div`
  height: 55vh;
  width: 80%;
  margin:0 auto;
  background-color: pink;
  display:flex;
  flex:wrap;
`;
const Sponsor = styled.div`
height:20%;
background-color:green;
margin: 4px;
width:33%;
`;

export default function Sponsors() {
    return (
        <Container>
            <Heading>SPONSOR AND PARTNERS</Heading>
            <ContainerOne>
                <Sponsor/>
                <Sponsor/>
                <Sponsor/>
                <Sponsor/>
                <Sponsor/>
            </ContainerOne>
        </Container>
    )
}
