import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchResults from './SearchResults';
import SearchSelect from './SearchSelect';
import SearchTitle from './SearchTitle';
import SearchSubmit from './SearchSubmit';

const SearchContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-area: content;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "search-title search-title"
    "search-results search-select"
    "search-bar search-bar"
    "search-submit search-submit";
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
        limit: 9,
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
    setSearchSelect(src);
  }

  return (
    <SearchContainer>
      <SearchTitle title="Search Title"/>
      <SearchSelect src={searchSelect}/>
      <SearchInput
        className="input"
        type="text"
        placeholder="GIPHY Search"
        onKeyPress={e => handleKeyPress(e.key)}
        onChange={e => { setSearchTerms(e.target.value); }}
      />
      <SearchResults handleSelect={handleSelect} results={results}/>
      <SearchSubmit mutation=""/>
    </SearchContainer>
  )
};

export default Search;