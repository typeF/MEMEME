import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchResults from "./SearchResults";
import SearchSelect from "./SearchSelect";
import SearchTitle from "./SearchTitle";
import SearchSubmit from "./SearchSubmit";

const SearchContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  padding: 35px;
  height: 100%;
  background-image: linear-gradient(to bottom right, #335ca1, #ec51c085);
  display: grid;
  grid-gap: 35px;
  // grid-area: content;
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
  border-color: rgba(0, 0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 1.5em;
`;

const Search = ({
  postId,
  threadTitle,
  submitFunction
}: {
  postId: string;
  threadTitle: string;
  submitFunction: any;
}): JSX.Element => {
  const [searchTerms, setSearchTerms] = useState("");
  const [searchSelect, setSearchSelect] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const getGifs = async () => {
    setLoading(true);

    await axios({
      method: "get",
      baseURL: "https://api.giphy.com/v1/gifs/search",
      params: {
        api_key: "RsdXP2ToCVtMi8vC5bq7SkVg8q8NxKli",
        q: searchTerms,
        limit: 9
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
  };

  const handleKeyPress = (key: string) => {
    if (key === "Enter") getGifs();
  };

  const handleSelect = (src: string) => {
    setSearchSelect(src);
  };

  const submit = () => {
    submitFunction({
      variables: {
        thread: postId,
        content: searchSelect
      }
    });
  };

  return (
    <SearchContainer>
      <SearchTitle title={threadTitle} />
      <SearchSelect src={searchSelect} />
      <SearchInput
        className="input"
        type="text"
        placeholder="GIPHY Search"
        onKeyPress={e => handleKeyPress(e.key)}
        onChange={e => {
          setSearchTerms(e.target.value);
        }}
      />
      <SearchResults handleSelect={handleSelect} results={results} />
      <SearchSubmit cancel="" submit={submit} />
    </SearchContainer>
  );
};

export default Search;
