import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import waait from 'waait';
import Thread from './Thread';
import GetThread from './ThreadGetQuery';
import LoginStatusQuery from '../../graphQL/LoginStatusQuery';

const title = "Test title"
const content = "Post 1 Content"

const match = {
  url: "/localhost:3000/General/ABC123"
};

const threadId = match.url.split("/")[3]

const mocks = [
  {
    request: {
      query: GetThread,
      variables: {
        threadId,
      }
    },
    result: {
      data: {
        thread: {
          title,
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
              content,
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
    expect(div.children).toContain(title);
    expect(li.children).toContain(content);

});

// As of Apollo Client 2.5.1, MockedProvider does not provide @client queries
// properly so this test will not work yet

// it('should render reply button if logged in', async () => {
//   const component = renderer.create(
//     <MockedProvider mocks={ mocks } addTypename={ false }>
//       <Thread match={ match }/>
//     </MockedProvider>);

//     await waait(0);

//     const button = component.root.findByType('button');
//     expect(button.children).toContain('Reply');
// });