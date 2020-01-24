import React from "react";
import SearchSubmit from "../../../../components/Search/SearchSubmit";

const NewThreadSubmit = ({
  cancel,
  submit
}: {
  cancel: any;
  submit: any;
}): JSX.Element => {
  return <SearchSubmit cancel={cancel} submit={submit} />;
};

export default NewThreadSubmit;
