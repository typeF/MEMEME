import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import MemeCardSquare from '../../../components/MemeCardSquare';

const SearchResultsContainer = styled.div`
  grid-area: search-results;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

const SearchResults = ({ results }: { results: any }) => {
  return (
    <Fragment>
      <SearchResultsContainer>
        {results.map((result: any) => (
           <MemeCardSquare
             key={result}
             img={result}
             counter=""
           />
        ))}
      </SearchResultsContainer>
    </Fragment>
  )
};

export default SearchResults;