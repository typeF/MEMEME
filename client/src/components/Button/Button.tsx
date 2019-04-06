import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const Button = ({ text } : { text: string}) => {
  return (
    <StyledButton className='button is-success is-outlined'>
      { text }
    </StyledButton>
  )
}

export default Button;