import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import LoginStatusQuery from '../../../graphQL/LoginStatusQuery';
import NewThread from './NewThread';

const NewThreadContainer = ({ match } : { match: any}) => {
  return (
    <Fragment>
      <Query query={ LoginStatusQuery }>
        {({ data }) => (data.isLoggedIn && <NewThread forum={ match.url.split("/")[2]}/>)} 
      </Query>
    </Fragment>
  )
};

export default NewThreadContainer;