---
sidebar_position: 5
sidebar_label: 'React Testing Library'
title: 'React Testing Library'
---
# React Testing Library

React testing library is a set of helper functions that allows you to test react components without relying on the internal implementation.
Let's take a look at some methods.

```js
import { render } from "@testing-library/react";

render(<div />);
```

One of them is `render` method.
It creates `div` element using `document.createElement()` then uses a react-dom `render` to render data.

First example what will consider how to test our component in general.

```js
import { App } from "./app";

describe("App", () => {
  it("render app by text", () => {
    const { getByText } = render(<App />);
    const element = getByText(/hello/i);
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});
```

Firstly, we need to write `describe`, and first argument is a name of our test, and then callback.
We call method `render` and pass it with our component.
And if you want to find some element which we want to test, we can use destruction and get our method from this render.
For example here we use method `getByText`.
It tells us that we will find our element in our `App` component by text 'hello'.
And here we create variable, and in `expect` we are expecting that our element will be placed in the document and if we run it, we will see our element.
Also, we have an object `screen`, which has some methods.
In this case, we use `screen.debug()`, if we use this, we will see all markup of a component, and it will be really easier to debug, and see what happening in our component.

Let's go next, and we will consider snapshot example.

```js title="app.js"
import React from "react";

const title = "Hello";

function App() {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default App;
```

We can see a simple component, it renders just some text.

```js
import React from "react";
import { render } from "@testing-library/react";
import { App } from "./app";

describe("App", () => {
  test("render App snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
```

If you want to test this component with snapshot, we also render our `App`, from `render` we get method `asFragment`, and here we passed with also with our component.
And here in `expect` we call our method to match snapshot.

Next example is how we can find our elements in component.

```js
import { App } from "./app";

describe("Search", () => {
  it("find elements", async () => {
    render(<App />);
    expect(screen.getByText("Search:")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("find item")).toBeInTheDocument();
    expect(screen.getByAltText("cats")).toBeInTheDocument();
    expect(screen.getByDisplayValue("value")).toBeInTheDocument();
    expect(screen.getByText(/Search for React/i)).toBeNull();
    expect(screen.queryByText(/Search for React/i)).toBeNull();
    expect(screen.queryByText(/Singed in as/i)).toBeNull();
    expect(await screen.findByText("find item")).toBeInTheDocument();
  });
});
```

Let's summarize it, if you want to find element what will be in the document, we use `get`.
If we know that this element will not be in the document, we use `query`.
And if we want to say that at first this element will not be in the document, and after asynchronous action it will be placed in the document, we use `findByText`.
If we want to find more than one element, we can use `getAllBy...`.

The next example is firing events.

```js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./app";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    // screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    expect(screen.getByDisplayValue("JavaScript")).toBeInTheDocument();
    // screen.debug();
  });
});
```

If you want to test when component has been changed after some events, we use `fireEvent`.
So first of all, in our test we render component `App`, after that, we import `fireEvent` from React testing library, and we can fire `change` event.
We find an element with `getByRole`, and pass some target value.
After that, we expect that we will get a new value in input, and it will be in the document.
If we, for example, use screen debug, we will see how it will change.

The next it will be `userEvents`.

```js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./app";

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);

    await screen.findByText(/Signed in as/i);

    expect(screen.queryByText(/Search for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    expect(screen.getByText("Search for JavaScript")).toBeInTheDocument();
  });
});
```

`userEvent` tries to simulate real events that can happen in browser, when the user interacts with it.
For example, `click` is actually `mousemove`, and `mouseover` target, followed by `mousedown`, `focus`, and `mouseup`, and finally `click` event.
If you were only simulating the click event, you would be missing all this previous events that happens in real life situation, and this could make your test invalid.
In addition, browsers have default behavior that occurs on certain events that may not be present, such as hovering, focus on elements, `onmouseclick`, and toggling checkboxes, `onclick`.
The best way to deal with this event to use `user-event` library.
If you use this library instead of manually triggering events your test will simulate real world behavior.

In our example, firstly, we find text 'Signed in as', shown after the asynchronous code.
Then we expect that 'Search for JavaScript' will not be in the document.
And after firing event `userEvent`, we pass with a new value 'JavaScript', and we expect that new value will be on the document.

So this next example how we can test callbacks.

```js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./app";

describe("Search", () => {
  it("calls the onChange callback handler", () => {
    const onChange = jest.fn();
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
```

For example, we want to make sure that, callbacks are calling.
We create our fake function with `jest.fn()`.
After that, we render component `Search`, and pass here with new fake function `onChange`, and after that, we fire event `change`, get element `getByRole`, and get our input, after that pass with new value 'JavaScript', and expect that our `onChange` function has been called one time.

The next we will see how to test asynchronous components.
For example, we have a simple component that has some request for another URL, and after that we get some new data, we save it in state, and we render data as a list.

```js
describe("App", () => {
  it("fetch stories from an API and display them", async () => {
    const stories = [
      { objectId: "1", title: "Hello" },
      { objectId: "2", title: "React" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );
    render(<App />);

    await fireEvent.click(screen.getByRole("button"));

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});
```

Firstly, we create mock data.
After that, we mock axios `mockImplementationOnce`, and resolve `Promise` with our data.
Then we render our component, fire events by click, get our element by roll `button`.
After asynchronous action, we expect to see all elements `findAllByRole('listitem')`, and we expect that we will see that length is 2 of the array of these elements.

In the next example we will see how to test `Context`.

```js
import React from "react";
import { render, screen } from "@testing-library/react";
import { UserGreeter, Usercontext } from "./app";

function renderUserGreeter(user) {
  return render(
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
}

test("UserGreeter salutes an anonymous user", () => {
  renderUserGreeter(null);
  expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
});

test("UserGreeter salutes a user", () => {
  const user = { name: "Serhii" };
  renderUserGreeter(user);
  expect(screen.getByText(`Hello ${user.name}!`)).toBeInTheDocument();
});
```

Firstly, we create a helper `renderUserGreeter` that renders our component with this context.
In the first test we pass it without user, and try to find element by text 'Hello Stranger'.
In the second test we create mock user, call our `renderUserGreeter` with this user, and we expect that a `user.name` will be in the document.

Next example is how to test a router.
For example, we have a simple component, and after clicking on the link on the page, we want
to see new user ID.

```js
import React from "react";
import { MemoryRouter, Route } from "react-router";
import { render, fireEvent, screen } from "@testing-library/react";
import { UserWithRouter } from "./app";

//Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ userId }) =>
  render(
    <MemoryRouter initialEntries={[`/users/${userId}`]}>
      <Route path="/users/:userId">
        <UserWithRouter />
      </Route>
    </MemoryRouter>
  );

it("renders initial user id", () => {
  const { getByText } = renderComponent({ userId: 5 });
  expect(getByText(/user #5/i)).toBeInTheDocument();
});

it("renders next user id", () => {
  const { getByText } = renderComponent({ userId: 5 });
  screen.debug();
  fireEvent.click(getByText(/next user/i));
  screen.debug();
  expect(getByText(/user #6/i)).toBeInTheDocument();
});
```

Here we also can create a helper `renderComponent` that will render component with the new user ID.
For testing, we can use `MemoryRouter`, it do not push any new query.
So, in the first test we will render our component and pass with user ID as 5, getting our element `getByText` with 'user #5', and expect that it will be in the document.
In the next test we render our component with default user ID, we fire events by click, and we expect that new user ID will be on the document.

And one more test.

```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Example } from "./app";

it("shoes success message after confirm button is clicked", () => {
  const { getByText } = render(<Example />);
  expect(getByText(/waiting/i)).toBeInTheDocument();
  fireEvent.click(getByText("Confirm"));
  expect(getByText("Confirmed")).toBeInTheDocument();
});
```

We checked that after we fire event `click`, state 'Confirmed' will be placed in the document.
