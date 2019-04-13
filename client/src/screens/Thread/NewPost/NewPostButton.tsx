import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const NewPostButton = ({ newPost } : { newPost: any }) => {
  return (
    <StyledButton onClick={e => {e.preventDefault(); newPost() }}>
      Reply
    </StyledButton>
  )
}

export default NewPostButton;