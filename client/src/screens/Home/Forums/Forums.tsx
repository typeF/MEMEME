import React, { Fragment } from 'react';
import { Query, Mutation } from "react-apollo";
import TestGraphQL from '../../../components/TestGraphQL';
import gql from "graphql-tag";
import { Route, Link, Switch } from 'react-router-dom';
import './Forums.scss';

const getForums = gql`
  {
    forums {
      id
      name
      threads(first: 1) {
        threadnumber
        title
        posts(first: 1) {
          createdAt
          author {
            username
          }
          content
        }
      }
    }
  }
`;

const Forums = () => (
  <Fragment>
    <Query query={ getForums }>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return `${error}`;

      return (
          <div className="forums">
            Forums
            {data.forums.map((forum: any) => (
              <Link 
                key={forum.id}
                to={`/forums/${forum.name}`}
              >
                {forum.name} 
                  &nbsp;- {forum.threads[0].posts[0].content}
                  &nbsp;- Last post by {forum.threads[0].posts[0].author.username} @ {forum.threads[0].posts[0].createdAt}
              </Link>
            ))}

          </div>
      )
      }}
    </Query>
  </Fragment>
);
export default Forums;