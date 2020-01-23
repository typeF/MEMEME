import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "react-apollo/test-utils";
import waait from "waait";
import { BrowserRouter } from "react-router-dom";
import Threads from "./Threads";
import GetThreads from "./ThreadsGetQuery";
import LoginStatusQuery from "../../graphQL/LoginStatusQuery";

const title1 = "General Test1 title";
const thread1Id = "Thread1-ABCDE";
const postContent1 = "General Thread1 post1 content";
const postContent2 = "General Thread1 post2 content";

const title2 = "General Test2 title";
const thread2Id = "Thread2-FGHIJ";
const postContent3 = "General Thread2 post3 content";
const postContent4 = "General Thread2 post4 content";

const createdAt = "2010-01-01 00:00:00";

const posts1 = [
  {
    author: {
      username: "Bob"
    },
    id: "Post1 ID",
    content: postContent1,
    createdAt: createdAt
  },
  {
    author: {
      username: "Alice"
    },
    id: "Post2 ID",
    content: postContent2,
    createdAt: createdAt
  }
];

const posts2 = [
  {
    author: {
      username: "Alice"
    },
    id: "Post3 ID",
    content: postContent3,
    createdAt: createdAt
  },
  {
    author: {
      username: "Bob"
    },
    id: "Post4 ID",
    content: postContent4,
    createdAt: createdAt
  }
];

const match = {
  url: "/localhost:3000/general/"
};

const forum = match.url.split("/")[2];

const mocks = [
  {
    request: {
      query: GetThreads,
      variables: {
        forum
      }
    },
    result: {
      data: {
        threads: [
          {
            id: thread1Id,
            title: title1,
            author: {
              username: "Bob"
            },
            posts: posts1
          },
          {
            id: thread2Id,
            title: title2,
            author: {
              username: "Alice"
            },
            posts: posts2
          }
        ]
      }
    }
  },
  {
    request: {
      query: LoginStatusQuery
    },
    result: {
      data: {
        isLoggedIn: true
      }
    }
  }
];

it("should render Threads loading component initially", () => {
  const component = renderer.create(
    <BrowserRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Threads match={match} />
      </MockedProvider>
    </BrowserRouter>
  );

  const tree = component.toJSON();
  expect(tree && tree.children).toContain("Loading...");
});

it("should render correct links for Threads", async () => {
  const component = renderer.create(
    <BrowserRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Threads match={match} />
      </MockedProvider>
    </BrowserRouter>
  );

  await waait(0);

  const links = component.root.findAllByType("a");
  expect(links[0].props.href).toContain(match.url + "/" + thread1Id);
  expect(links[1].props.href).toContain(match.url + "/" + thread2Id);
});

// As of Apollo Client 2.5.1, MockedProvider does not provide @client queries
// properly so this test will not work yet

// it('should render New Thread button if logged in', async () => {
// const component = renderer.create(
//   <BrowserRouter>
//     <MockedProvider mocks={ mocks } addTypename={ false }>
//       <Threads match={ match }/>
//     </MockedProvider>
//   </BrowserRouter>);
//
//     await waait(0);

//     const button = component.root.findByType('button');
//     expect(button.children).toContain('New Thread');
// });
