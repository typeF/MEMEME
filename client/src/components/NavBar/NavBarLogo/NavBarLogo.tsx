import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../../assets/images/logo.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 5vmin;
  pointer-events: none;
`;

const NavBarLogo = () => {
  return (
    <div>
      <AppLogo src={logo}></AppLogo>
    </div>
  );
};

export default NavBarLogo;
