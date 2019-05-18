import React from 'react';
import styled from 'styled-components';
import MemeCardSquare from '../../../components/MemeCardSquare';
import MemeCardStretch from '../../../components/MemeCardStretch';

const SearchResultContainer = styled.div`
  grid-area: search-select;
  display: flex;
`;

const SearchResultBackground = styled.div`
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  height: 90%;
  width: 59%;
  background: rgba(0, 0, 0, 0.1);
`;

const SearchSelect = ({ src } : { src: string }) => {
  return (
    <SearchResultContainer>
      <SearchResultBackground>
        {src !== "" && 
          <MemeCardStretch
            key={src}
            img={src}
          />
        }
      </SearchResultBackground>
    </SearchResultContainer>
  )
};

export default SearchSelect;