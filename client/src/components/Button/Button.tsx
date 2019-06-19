import React, { useState } from 'react';
import styled from 'styled-components';
import "./Button.scss";

const StyledButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  font-family: "Righteous", sans-serif;
  font-size: 1.3rem;
  height: 2.5rem;
  padding: 0.3rem 0.5rem;
  &:focus:not(:active) {
    border-color: white;
    box-shadow: none;
  }
`;

const Button = ({ isLoading, isSelected, onClick, text }: { isLoading: boolean, isSelected: boolean, onClick: any, text: string }) => {
  const className = "button is-inverted"
    + (isLoading ? " is-loading" : "")
    + (isSelected ? " is-selected" : "");

  return (
    <StyledButton
      className={className}
      onClick={onClick()}
    >
      {text}
    </StyledButton>
  )
}

export default Button;