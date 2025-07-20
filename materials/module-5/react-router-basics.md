---
sidebar_position: 2
sidebar_label: 'React Router Basics'
title: 'React Router Basics'
---

# React Router Basics

## What is React Router?

[**React Router**](https://reactrouter.com/en/main) is a library designed to manage navigation in **Single Page Applications (SPAs)**. It allows users to change the browser's URL and navigate through different views within the application without refreshing the page. React Router operates entirely on the **client-side**, which means users experience seamless transitions between different pages without making additional requests to the server.

The core components of React Router include:

- **`BrowserRouter`**: Manages the routing history and URL changes.
- **`Routes`** and **`Route`**: Define which component should be rendered for a specific path.
- **`Link`**: A React component that renders as an anchor tag (`<a>`) to allow navigation without reloading the page.

### Installing React Router

You can install React Router by running the following command:

```bash
npm install react-router-dom
```

[//]: # (:::warning)

[//]: # (Do not install additional libraries, you already have all needed dependencies.)

[//]: # (:::)

This command installs the react-router-dom package, which contains all the tools needed for web-based routing in React.

To install a specific version of React Router, append @[version] to the command, such as:

```bash
npm install react-router-dom@6
```

[//]: # (:::warning)

[//]: # (Do not install additional libraries, you already have all needed dependencies.)

[//]: # (:::)

### Setting Up React Router

Once React Router is installed, you need to connect it to your application. To do this, wrap your entire app in the BrowserRouter component, typically in the entry point of your application (src/index.js):

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

This setup ensures that React Router can manage the navigation across your entire application.

## Creating Basic Routes

Once React Router is set up, you can define routes in your app. Each Route component specifies a path and the element to be rendered when that path is matched.

Here’s a simple example of defining routes:

```js
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/add" element={<MovieForm />} />
    </Routes>
  );
}

export default App;
```

In this example:

- Navigating to / renders the `Movies` component.
- Navigating to /about renders the `MovieForm` component.

**Important Points:**

- **Routes**: The parent component that wraps all Route components. It ensures that only one route is rendered at a time.
- **Route**: Defines the mapping between a URL path and the component to be rendered.
- **element**: Specifies which component to render when the path is matched.

### Dynamic Routing

Dynamic routes allow you to capture parts of the URL and use them in your components. For example, if you have a movies database and want to display individual movies based on their ID, you can create a dynamic route.

Here’s how you define dynamic segments in the path:

```js
<Route path="/movies/:movieId" element={<Movie />} />
```

## Optional Parameters and Redirects

Dynamic parameters can also be optional by appending a ? at the end of the path:

```js
<Route path="/movies/:movieId?" element={<Movies />} />
```

Additionally, you can redirect users programmatically or for invalid routes using Navigate:

```js
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/add" element={<MoviesFrom />} />
      {/* Redirect all unknown routes to movies page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
```

## Programmatic navigation with `Link` component

The `Link` component in React Router is used to create navigational links in your application. It allows you to navigate to different routes without reloading the page, providing a seamless user experience. The `Link` component renders an anchor (`<a>`) tag and accepts a `to` prop that specifies the path to navigate to.

### Example - Using `Link` Component

```js
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

## Conclusion

React Router simplifies navigation in React applications with its powerful features and understanding the basics of setting up routes and handling navigation is essential for building complex SPAs.

In the next section, we will dive deeper into React Router Hooks, which provide advanced control over navigation, URL parameters, and more.
