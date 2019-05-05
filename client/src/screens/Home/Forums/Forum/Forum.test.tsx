import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Forum from "./Forum";

const props = {
  id: "123",
  name: "Advice",
  threads: [
    {
      title: "Advice Thread 1",
      posts: [
        {
          author: {
            username: "Alice"
          },
          content: "https://images.unsplash.com/photo-1556647034-7aa9a4ea7437?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
          createdAt: "2019-01-01 00:00:00"
        }
      ]
    }
  ],
};

it("should render all Forum props", async () => {
  const component = renderer.create(
    <BrowserRouter>
      <Forum forum={props} />
    </BrowserRouter>
  );

  const a = component.root.findAllByType("a");
  expect(a[0].children).toContain(props.name);

  const span = component.root.findAllByType("span");
  expect(span[0].children).toContain(props.threads[0].posts[0].author.username);
  expect(span[0].children).toContain(props.threads[0].title);
});
