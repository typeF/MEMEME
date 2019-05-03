import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  width: 100%;
  height: 2.5rem;
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  padding: 0.3rem 0;
  font-family: "Righteous", sans-serif;
  cursor: pointer;
`;

const NavBarMenuItem = () => {
  return (
    <StyledButton
      className="navbar-menu-button"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
    >
      HELLO
    </StyledButton>
  );
};

export default NavBarMenuItem;
