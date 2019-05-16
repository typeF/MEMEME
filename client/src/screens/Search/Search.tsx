import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchContainer = styled.div`
  grid-area: content;
`;

const SearchInput = styled.input`

`;

const SearchSubmit = styled.button`
  margin-top: 30px;
`;

const Search = () => {
  const [searchTerms, setSearchTerms] = useState("");

  const getGifs = (searchTerms: String) => axios({
    method: 'get',
    baseURL:'https://api.giphy.com/v1/gifs/search',
    params: {
      api_key: "RsdXP2ToCVtMi8vC5bq7SkVg8q8NxKli",
      q: searchTerms,
      limit: 10,
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 

  return (
    <SearchContainer>
      <SearchInput
        className="input"
        type="text"
        placeholder="GIFHY Search"
        onChange={e => {setSearchTerms(e.target.value); }}
      />
      <SearchSubmit 
        className="button"
        onClick={() => getGifs(searchTerms)}
      >
        Submit
      </SearchSubmit>

    </SearchContainer>
  )
};

export default Search;