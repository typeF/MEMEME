import React, { Fragment, useState } from 'react';
import Button from '../../../components/Button';
import SearchModal from '../../../components/SearchModal';
import styled from 'styled-components';

const NewPostButton = ({ newPost, thread } : { newPost: any, thread: String }) => {
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  }

  const closeModal = () => {
    setActiveModal(false);
  }

  return (
    <Fragment>
      <SearchModal 
        closeModal={closeModal} 
        active={activeModal}
        thread={thread}
        newPost={newPost}
      />
      <Button 
        clickHandler={openModal}
        text="REPLY"
      />
    </Fragment>
  )
}

export default NewPostButton;