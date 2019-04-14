import React from 'react';
import renderer from 'react-test-renderer';
import waait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Thread from './Thread';
import GetThread from './ThreadGetQuery';
import LoginStatusQuery from '../../../graphQL/LoginStatusQuery';

const mocks = [
  {
    request: {
      query: GetThread,
      variables: {
        threadId: "A"
      }
    },
    result: {
      data: {
        thread: {
          title: "Test thread",
          author: {
            username: "Bob"
          },
          posts: [
            {
              id: "Post #1",
              postnumber: 1,
              author: {
                username: "A"
              },
              content: "Post1 Content",
              createdAt: "2019-01-01 00:00:00"
            }, 
          ]
        }
      }
    }
  }, {
    request: {
      query: LoginStatusQuery,
    },
    result: {
      data: {
        isLoggedIn: true
      }
    }
  }
];

const match = {
  url: "/localhost:3000/thread/A"
};


// As of Apollo-Client 2.5.1 MockedProvider's ability to provide

it('should render Thread loading component initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={ mocks } addTypename={ false }>
      <Thread match={ match }/>
    </MockedProvider>);

    const tree = component.toJSON();
    expect(tree && tree.children).toContain("Loading...");
});

it('should render Thread', async () => {
  const component = renderer.create(
    <MockedProvider mocks={ mocks } addTypename={ false }>
      <Thread match={ match }/>
    </MockedProvider>);

    await waait(0);

    const div = component.root.findByType('div');
    const li = component.root.findByType('li');
    expect(div.children).toContain('Test thread');
    expect(li.children).toContain('Post1 Content');

// As of Apollo Client 2.5.1, MockedProvider does not provide @client queries
// properly so this test will not work yet

//     const button = component.root.findByType('button');
//     expect(button.children).toContain('New Thread');
});
