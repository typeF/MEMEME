import React, { Fragment, useState } from "react";
import ButtonBasic from "../../../components/ButtonBasic";
import SearchModal from "../../../components/SearchModal";

const NewPostButton = ({
  newPost,
  thread,
  threadTitle
}: {
  newPost: any;
  thread: string;
  threadTitle: string;
}): JSX.Element => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Fragment>
      <SearchModal
        closeModal={() => setActiveModal(false)}
        active={activeModal}
        thread={thread}
        threadTitle={threadTitle}
        submitFunction={newPost}
      />
      <ButtonBasic clickHandler={() => setActiveModal(true)} text="REPLY" />
    </Fragment>
  );
};

export default NewPostButton;
