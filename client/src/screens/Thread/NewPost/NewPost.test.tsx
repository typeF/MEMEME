import React from "react";
import renderer from "react-test-renderer";
import waait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import NewPost from "./NewPost";
import NewPostMutation from "./NewPostMutation";

const threadId = "12345";

const mocks = [
  {
    request: {
      query: NewPostMutation,
      variables: {
        thread: threadId,
        content: "PewPewPew!"
      }
    },
    result: {
      data: {
        createPost: {
          postnumber: 777,
          content: "PowWow"
        }
      }
    }
  }
];

it("should render loading state", () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <NewPost thread={threadId} />
    </MockedProvider>
  );

  const button = component.root.findByType("button");
  button.props.onClick();

  const tree = component.toJSON();
  expect(tree && tree.children).toContain("Loading...");
});

it("should make a new post and give visual feedback", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <NewPost thread={threadId} />
    </MockedProvider>
  );

  const button = component.root.findByType("button");
  button.props.onClick();

  await waait(100);

  const tree = component.toJSON();
  expect(tree && tree.children).toContain("Posted!");
});
