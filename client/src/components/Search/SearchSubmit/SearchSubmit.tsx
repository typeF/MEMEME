import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

const SearchSubmitContainer = styled.div`
  grid-area: search-submit;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

const SearchSubmitButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  height: 2.5rem;
  font-size: 1.5rem;
  color: white;
  padding: 0.3rem 0;
  font-family: "Righteous", sans-serif;
  cursor: pointer;
  grid-column: 5;
`;

const SearchCancelButton = styled(SearchSubmitButton)`
  grid-column: 4;
`;

const SearchSubmit = ({ cancel, submit }: { cancel: any, submit: any }) => {
  return (
    <SearchSubmitContainer>
      <Button
        isLoading={false}
        isSelected={false}
        onClick={() => { }}
        text={"SUBMIT"}
      />
      <SearchCancelButton>
        CANCEL
      </SearchCancelButton>
      <SearchSubmitButton onClick={() => submit()}>
        SUBMIT
      </SearchSubmitButton>
    </SearchSubmitContainer>
  )
};

export default SearchSubmit;