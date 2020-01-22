import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

const SearchSubmitContainer = styled.div`
  grid-area: search-submit;
  display: flex;
  justify-content: flex-end;
  // grid-template-columns: repeat(5, 1fr);
  // grid-gap: 20px;
`;

const SearchCancelDiv = styled.div`
`;

const SearchSubmitDiv = styled.div`
  margin-left: 20px;
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