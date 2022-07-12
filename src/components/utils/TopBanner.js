import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MainContainer = styled.div`
  height: 5vh;
  width: 100%;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    94deg,
    rgba(217, 21, 250, 0.95) 38%,
    rgba(41, 25, 249, 0.95) 100%
  );
  padding: 0 1rem;
  border-radius: 0 0 1rem 1rem;
`;
const Header = styled.h1`
  color: #fff;
  font-size: 1rem;
`;
const TopBanner = (props) => {
    const [show, setShow] = useState(true);
  const style = {
    right: "3%",
    cursor: "pointer",
    color: "#fff",
  };
  return (
    <>{show && <MainContainer>
      <Header>UPCOMING EVENTS</Header>
      <AiOutlineClose
        style={style}
        size={24}
        color="#fff"
        onClick={() => setShow(false)}
      />
    </MainContainer>}</>
  );
};

export default TopBanner;
