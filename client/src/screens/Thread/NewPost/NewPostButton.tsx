import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const NewPostButton = ({ newPost } : { newPost: any }) => {
  return (
    <StyledButton onClick={() => newPost()}>
      Reply
    </StyledButton>
  )
}

export default NewPostButton;