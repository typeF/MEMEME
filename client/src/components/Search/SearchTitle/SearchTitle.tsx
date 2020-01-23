import React from "react";
import styled from "styled-components";

const SearchTitleSpan = styled.div`
  grid-area: search-title;
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 1.5rem;
`;

const SearchTitle = ({ title }: { title: string }): JSX.Element => {
  return <SearchTitleSpan>{title}</SearchTitleSpan>;
};

export default SearchTitle;
