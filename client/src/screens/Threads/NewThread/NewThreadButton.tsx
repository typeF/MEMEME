import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const NewThreadButton = ({ newThread } : { newThread : any }) => {
  return (
    <StyledButton onClick={() => newThread()}>
      New Thread
    </StyledButton>
  )
}

export default NewThreadButton;
