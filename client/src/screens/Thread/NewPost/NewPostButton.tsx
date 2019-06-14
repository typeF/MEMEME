import React, { Fragment, useState } from 'react';
import Button from '../../../components/Button';
import SearchModal from '../../../components/SearchModal';
import styled from 'styled-components';

const NewPostButton = ({ newPost, thread }: { newPost: any, thread: String }) => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Fragment>
      <SearchModal
        closeModal={() => setActiveModal(false)}
        active={activeModal}
        thread={thread}
        submitFunction={newPost}
      />
      <Button
        clickHandler={() => setActiveModal(true)}
        text="REPLY"
      />
    </Fragment>
  )
}

export default NewPostButton;