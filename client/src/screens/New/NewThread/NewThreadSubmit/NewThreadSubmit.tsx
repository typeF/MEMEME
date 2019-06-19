import React from 'react';
import SearchSubmit from '../../../../components/Search/SearchSubmit';

const NewThreadTitle = ({ submit }: { submit: any }) => {
  return (
    <SearchSubmit
      cancel=""
      submit={submit}
    />
  )
}

export default NewThreadTitle;
