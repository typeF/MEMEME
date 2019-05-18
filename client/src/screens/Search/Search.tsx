import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchResults from './SearchResults';
import SearchSelect from './SearchSelect';

const SearchContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-area: content;
  grid-template-areas:
    "search-select"
    "search-bar"
    "search-results";
  grid-template-rows: 4fr 1fr;
`;

const SearchInput = styled.input`
  grid-area: search-bar;
  height: 100%;
  &::placeholder {
    color: white;
  } 
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: unset;
  border-color: rgba(0, 0, 0, 0.0);
  text-align: center;
  text-transform: uppercase;
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 1.5em;
`;

const Search = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [searchSelect, setSearchSelect] = useState("");
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

  const handleKeyPress = (key: String) => {
    if (key === 'Enter') getGifs();
  }

  const handleSelect = (src: string) => {
    console.log("src is: " + src);
    setSearchSelect(src);
  }

  return (
    <SearchContainer>
      <SearchSelect src={searchSelect}/>
      <SearchInput
        className="input"
        type="text"
        placeholder="GIPHY Search"
        onKeyPress={e => handleKeyPress(e.key)}
        onChange={e => { setSearchTerms(e.target.value); }}
      />
      <SearchResults handleSelect={handleSelect} results={results}/>
    </SearchContainer>
  )
};

export default Search;