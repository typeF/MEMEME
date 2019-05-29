import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  height: 2.5rem;
  // margin: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  padding: 0.3rem 0;
  font-family: "Righteous", sans-serif;
  cursor: pointer;
`;

const Button = ({ text, clickHandler } : { text: string, clickHandler: any}) => {
  return (
    <StyledButton
      onClick={() => clickHandler()}
    >
      {text}
    </StyledButton>
  )
}

export default Button;