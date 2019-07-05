import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

const SearchSubmitContainer = styled.div`
  grid-area: search-submit;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

const SearchCancelDiv = styled.div`
  grid-column: 4;
`;

const SearchSubmitDiv = styled.div`
  grid-column: 5;
`;

const SearchSubmit = ({ cancel, submit }: { cancel: any, submit: any }) => {
  return (
    <SearchSubmitContainer>
      <SearchCancelDiv>
        <Button
          isLoading={false}
          isSelectable={false}
          onClick={() => { }}
          text={"Cancel"}
        />
      </SearchCancelDiv>
      <SearchSubmitDiv>
        <Button
          isLoading={false}
          isSelectable={false}
          onClick={() => submit()}
          text={"Submit"}
        />
      </SearchSubmitDiv>
    </SearchSubmitContainer>
  )
};

export default SearchSubmit;