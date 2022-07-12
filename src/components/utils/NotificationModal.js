import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const NotificationContainer = styled.div`
  height: 40vh;
  width: 35%;
  position: fixed;
  top: 30%;
  left: 30%;
  z-index: 100;

  backdrop-filter: blur(0px) saturate(200%);
  -webkit-backdrop-filter: blur(8px) saturate(200%);

  background: linear-gradient(
    94deg,
    rgba(217, 21, 250, 0.95) 38%,
    rgba(41, 25, 249, 0.95) 100%
  );

  border-radius: 12px;
  border: 3px solid linear-gradient(
    94deg,
    rgba(41, 25, 249, 0.95) 100%,
    rgba(217, 21, 250, 0.95) 38%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  text-align: center;

  @media (max-width: 920px) {
    width: 60%;
    height: 40%;
    top: 20%;
    left: 20%;
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 40%;
    top: 20%;
    left: 10%;
  }
`;
const Header = styled.h1`
  color: #fff;

  @media (max-width: 920px) {
    font-size: 2.3rem;
  }
  @media (max-width: 920px) {
    font-size: 1.6rem;
  }
`;
const Info = styled.p`
  color: #fff;
  @media (max-width: 920px) {
    font-size: 1.6rem;
  }
  @media (max-width: 920px) {
    font-size: 1.2rem;
  }
`;
const HighLight = styled.span`
  font-style: montserrat;
  font-weight: bold;
  color: #fff;
`;
const NotificationModal = props => {
  const style = {
    position: "absolute",
    top: "5%",
    right: "5%",
    cursor: "pointer",
    color: "#fff"
  };
  return (
    <NotificationContainer>
      <AiOutlineClose style={style} size={24} color="#fff" onClick={props.onClick} />
      <Header>UPCOMING EVENTS</Header>
      <Info>
        <HighLight>VORTEX 360 </HighLight>is a 30 days online CAD modelling hack
        organized by RoboVITics, the official Robotics Club of VIT, and powered
        by AutoDesk.
      </Info>
    </NotificationContainer>
  );
};

export default NotificationModal;
