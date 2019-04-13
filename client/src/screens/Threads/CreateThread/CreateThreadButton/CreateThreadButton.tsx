import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const CreateThreadButton = ({ createThread } : { createThread : any }) => {
  return (
    <StyledButton onClick={e => {e.preventDefault(); createThread() }}>
      Create thread
    </StyledButton>
  )
}

export default CreateThreadButton;
