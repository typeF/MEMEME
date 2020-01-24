import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import LoginStatusQuery from "../../../graphQL/LoginStatusQuery";
import NewThreadSubForums from "./NewThreadSubForums";
import NewThreadPost from "./NewThreadPost";
import NewThreadTitle from "./NewThreadTitle";
import NewThreadSubmit from "./NewThreadSubmit";
import NotLoggedIn from "./NotLoggedIn";
import { createBrowserHistory } from "history";

const NewThreadContainer = styled.div`
  grid-area: content;
  grid-gap: 35px;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
`;

const NewThread = ({ mutation }: { mutation: any }): JSX.Element => {
  const [forum, setForum] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const history = createBrowserHistory();

  const contentNotEmpty = (): boolean => {
    if (content === "") return false;
    if (forum === "") return false;
    if (title === "") return false;
    return true;
  };

  const postThread = (): void => {
    if (contentNotEmpty()) {
      mutation({
        variables: {
          forum,
          title,
          content
        }
      });
    }
  };

  const removeHighlightsFromUnselected = (): void => {
    const unselectedSubForums = document.querySelectorAll(
      `.subForum-btn:not(.forum-${forum}`
    );
    console.log(unselectedSubForums);
    unselectedSubForums.forEach(subForumBtn => {
      subForumBtn.classList.remove("is-selected");
    });
  };

  useEffect((): void => {
    removeHighlightsFromUnselected();
  });

  return (
    <Query query={LoginStatusQuery}>
      {({ data }): JSX.Element => {
        return (
          <Fragment>
            {data.isLoggedIn ? (
              <NewThreadContainer>
                <NewThreadSubForums forum={forum} setForum={setForum} />
                <NewThreadTitle setTitle={setTitle} />
                <NewThreadPost content={content} setContent={setContent} />
                <NewThreadSubmit cancel={history.goBack} submit={postThread} />
              </NewThreadContainer>
            ) : (
              <NotLoggedIn />
            )}
          </Fragment>
        );
      }}
    </Query>
  );
};

export default NewThread;
