import React from 'react';
import styled from 'styled-components';

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
  // margin: 0.5rem 1rem;
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

const SearchSubmit = ({ clickHandler } : { clickHandler: any}) => {
  return (
    <SearchSubmitContainer>
      <SearchCancelButton>
        CANCEL
      </SearchCancelButton>
      <SearchSubmitButton onClick={() => clickHandler()}>
        SUBMIT
      </SearchSubmitButton>
    </SearchSubmitContainer>
  )
};

export default SearchSubmit;