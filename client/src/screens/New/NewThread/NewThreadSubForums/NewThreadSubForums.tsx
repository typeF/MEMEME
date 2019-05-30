import React from 'react';
import styled from 'styled-components';
import { Query } from "react-apollo";
import getForumsQuery from '../../../Home/Forums/ForumsGetQuery';
import Button from '../../../../components/Button';

const SubForumsContainer = styled.div`
  grid-area: content;
  grid-gap: 35px;
`;

const SubForumsTitle = styled.span`
  color: white;
  font-size: 2rem;
  font-family: "Righteous", sans-serif;
  margin-bottom: 300px;
`;

const SubForumsButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 35px;
  margin-top: 10px;
`;

const NewThreadSubForums = ({ setForum } : { setForum: any}) => {
  return (
    <SubForumsContainer>
      <SubForumsTitle>
        Subforum
      </SubForumsTitle>
      <Query query={getForumsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return `${error}`;

          return (
            <SubForumsButtonContainer>
              {data.forums.map((forum: any) => (
                <Button
                  key={forum.id}
                  text={forum.name}
                  clickHandler={() => setForum(forum.name)}
                />
              ))}
            </SubForumsButtonContainer>
          )
        }}
      </Query>
    </SubForumsContainer>
  )
}

export default NewThreadSubForums;