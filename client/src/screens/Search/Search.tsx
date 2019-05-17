import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchResults from './SearchResults';

const SearchContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-areas:
    "selected-meme"
    "search-bar"
    "search-results";
  grid-template-rows: 4fr 1fr 4fr;
`;

const SearchInput = styled.input`
  grid-area: search-bar;
`;

const SearchSubmit = styled.button`
  grid-area: search-results;
  margin-top: 30px;
`;

const Search = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const getGifs = async () => {
    setLoading(true);

    await axios({
      method: 'get',
      baseURL: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: "RsdXP2ToCVtMi8vC5bq7SkVg8q8NxKli",
        q: searchTerms,
        limit: 10,
      }
    })
    .then(results => {
      const memesArray = results.data.data.map((result: any) => {
        return result.images.original.url;
      });
      setResults(memesArray);
      return memesArray;
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {
      setLoading(false);
    }); 
  }

  return (
    <SearchContainer>
      <SearchInput
        className="input"
        type="text"
        placeholder="GIPHY Search"
        onChange={e => { setSearchTerms(e.target.value); }}
      />
      <SearchSubmit
        className="button"
        onClick={() => getGifs()}
      >
        Submit
      </SearchSubmit>
      {/* <SearchResults results={searchResults}/> */}

    </SearchContainer>
  )
};

export default Search;