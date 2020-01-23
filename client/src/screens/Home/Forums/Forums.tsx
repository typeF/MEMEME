import React, { Fragment } from "react";
import { Query } from "react-apollo";
import getForumsQuery from "./ForumsGetQuery";
import styled from "styled-components";
import Forum from "./Forum";
import "./Forums.scss";

const ForumsContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  min-height: 0;
  min-width: 0;
`;

const Forums = () => (
  <Fragment>
    <Query query={getForumsQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return `${error}`;

        return (
          <ForumsContainer>
            {data.forums.map((forum: any) => (
              <Forum key={forum.id} forum={forum} />
            ))}
          </ForumsContainer>
        );
      }}
    </Query>
  </Fragment>
);
export default Forums;
