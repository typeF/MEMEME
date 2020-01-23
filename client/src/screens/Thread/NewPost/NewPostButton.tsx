import React, { Fragment, useState } from "react";
import ButtonBasic from "../../../components/ButtonBasic";
import SearchModal from "../../../components/SearchModal";

const NewPostButton = ({
  newPost,
  thread
}: {
  newPost: any;
  thread: String;
}) => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Fragment>
      <SearchModal
        closeModal={() => setActiveModal(false)}
        active={activeModal}
        thread={thread}
        submitFunction={newPost}
      />
      <ButtonBasic clickHandler={() => setActiveModal(true)} text="REPLY" />
    </Fragment>
  );
};

export default NewPostButton;
