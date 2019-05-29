import React from 'react';
import Search from '../Search';
import styled from 'styled-components';

const ModalContent = styled.div`
  width: 80vw;
  height: 80vh;
`;

const SearchModal = ({ active, closeModal, thread, newPost } : { active: boolean, closeModal: any, thread: String, newPost: any }) => {
  return (
    <div className={active ? "modal is-active" : "modal"}>
      <div 
        className="modal-background"
        onClick={() => closeModal()}
      > </div>
      <ModalContent className="modal-content">
        <Search postId={thread} mutation={newPost}/>
      </ModalContent>
      <button 
        className="modal-close is-large" 
        aria-label="close"
        onClick={() => closeModal()}
      >
      </button>
    </div>
  )
}

export default SearchModal;