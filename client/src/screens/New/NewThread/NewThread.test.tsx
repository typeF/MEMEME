import React from "react";
import renderer from "react-test-renderer";
import waait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import NewThread from "./NewThread";
import NewThreadMutation from "./NewThreadMutation";

const forum = "General";

const mocks = [
  {
    request: {
      query: NewThreadMutation,
      variables: {
        forum,
        title: "Thread 3",
        content: "Post ZZZ"
      }
    },
    result: {
      data: {
        createThread: {
          title: "Thread 3",
          threadnumber: 888
        }
      }
    }
  }
];

it("should render NewThread loading state", () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <NewThread forum={forum} />
    </MockedProvider>
  );

  const button = component.root.findByType("button");
  button.props.onClick();

  const tree = component.toJSON();
  expect(tree && tree.children).toContain("Loading...");
});

it("should make a new thread and give visual feedback", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <NewThread forum={forum} />
    </MockedProvider>
  );

  const button = component.root.findByType("button");
  button.props.onClick();

  await waait(100);

  const tree = component.toJSON();
  expect(tree && tree.children).toContain("Created thread!");
});
