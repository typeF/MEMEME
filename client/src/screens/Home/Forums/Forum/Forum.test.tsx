import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Forum from "./Forum";

const props = {
  name: "Advice",
  title: "Advice Thread 1",
  content: "https://images.unsplash.com/photo-1556647034-7aa9a4ea7437?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
  author: "Alice",
  createdAt: "2019-01-01 00:00:00"
};

it("should render all Forum props", async () => {
  const component = renderer.create(
    <BrowserRouter>
      <Forum forum={props} />
    </BrowserRouter>
  );

  const span = component.root.findAllByType("span");
  expect(span[0].children).toContain(props.name);
  expect(span[1].children).toContain(props.author);
  expect(span[1].children).toContain(props.title);
});
