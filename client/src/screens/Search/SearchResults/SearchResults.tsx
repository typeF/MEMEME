import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchResultsContainer = styled.div`
  grid-area: search-results;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Placeholder = styled.span`
`;

const SearchResults = ({ results } : { results: any}) => {
  return (
    <Fragment>
      <SearchResultsContainer>
        {results.map((result: any) => (
          <Placeholder>
            {result}
          </Placeholder>
        ))}
      </SearchResultsContainer>
    </Fragment>
  )
};

export default SearchResults;