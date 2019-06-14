import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  // margin: 0.5rem 1rem;
  background: transparent;
  border-radius: 3px;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: "Righteous", sans-serif;
  font-size: 1.5rem;
  height: 2.5rem;
  padding: 0.3rem 0.5rem;
`;

const Button = ({ text, clickHandler }: { text: string, clickHandler: any }) => {
  return (
    <StyledButton
      onClick={() => clickHandler()}
    >
      {text}
    </StyledButton>
  )
}

export default Button;