import React from 'react';
import styled from 'styled-components';
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
