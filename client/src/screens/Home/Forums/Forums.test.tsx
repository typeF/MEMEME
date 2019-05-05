import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "react-apollo/test-utils";
import waait from "waait";
import { BrowserRouter } from "react-router-dom";
import Forums from "./Forums";
import ForumsGetQuery from "./ForumsGetQuery";

const generalTitle = "General Thread Title 1";
const adviceTitle = "Advice Thread Title 1";

const mocks = [
  {
    request: {
      query: ForumsGetQuery
    },
    result: {
      data: {
        forums: [
          {
            id: "General Id1",
            name: "General",
            threads: [
              {
                id: 123,
                threadnumber: 1,
                title: generalTitle,
                posts: [
                  {
                    createdAt: "2010-01-01 00:00:00",
                    author: {
                      username: "Alice"
                    },
                    content: "General Content 1"
                  }
                ]
              }
            ]
          },
          {
            id: "Advice Id1",
            name: "Advice",
            threads: [
              {
                id: 456,
                threadnumber: 1,
                title: adviceTitle,
                posts: [
                  {
                    createdAt: "2010-01-01 00:00:00",
                    author: {
                      username: "Bob"
                    },
                    content: "Advice Content 1"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
];

it("should render Forum loading component initially", () => {
  const component = renderer.create(
    <BrowserRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Forums />
      </MockedProvider>
    </BrowserRouter>
  );

  const tree = component.toJSON();
  expect(tree && tree.children).toContain("Loading...");
});

it("should render all Forums", async () => {
  const component = renderer.create(
    <BrowserRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Forums />
      </MockedProvider>
    </BrowserRouter>
  );

  await waait(1000);

  const forums = mocks[0].result.data.forums;

  const div = component.root.findAllByType("a");
  expect(div[0].children).toContain(forums[0].name);
  expect(div[2].children).toContain(forums[1].name);
});
