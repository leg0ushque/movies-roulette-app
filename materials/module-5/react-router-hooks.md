---
sidebar_position: 3
sidebar_label: 'React Router Hooks'
title: 'React Router Hooks'
---


# React Router Hooks

## Overview of React Router Hooks

React Router provides several hooks that allow developers to interact with route data, URL parameters, and navigate programmatically. These hooks offer greater flexibility and control when handling routing in a React application.

### List of Key Hooks

- **useParams**: Access route parameters from dynamic segments of the URL.
- **useNavigate**: Navigate programmatically to different routes.
- **useLocation**: Access information about the current location (URL).
- **useRoutes**: Define routes declaratively within your components using JavaScript objects instead of JSX.
- **useSearchParams**: Manage query parameters within the URL.
- **useResolvedPath**: Resolve relative paths against the current location.

Each of these hooks plays a crucial role in managing client-side routing with React Router. Let’s dive into the most common ones and their advanced usage.

## useParams Hook

The **useParams** hook allows you to access the dynamic parameters of the current route. It returns an object of key/value pairs representing the parameters defined in the route’s path.

In a route with dynamic segments (like `"/movies/:movieId"`), you can access the dynamic `movieId` using the `useParams` hook:

```js
import { useParams } from "react-router-dom";

function Movie() {
  const { movieId } = useParams(); // Access the movieId from the URL

  return <h2>Movie ID: {movieId}</h2>;
}
```

In this example, if the user navigates to /movies/123, the Movie component will display "Movie ID: 123".

You can use `useParams` with nested routes or when you need to work with multiple parameters:

```js
<Route path="/movies/:movieId" element={<Movie />} />
```

```js
import { useParams } from "react-router-dom";

function Movie() {
  const { userId, movieId } = useParams(); // Access both userId and movieId

  return (
    <div>
      <h2>User ID: {userId}</h2>
      <h3>Movie ID: {movieId}</h3>
    </div>
  );
}
```

This allows you to access multiple dynamic segments from the URL in more complex scenarios.

## useNavigate Hook

The **useNavigate** hook is a powerful tool for navigating programmatically between routes. It returns a function that can be used to navigate to different routes, either by specifying a new path or by manipulating the browser’s history stack.

The simplest way to navigate programmatically is by using `useNavigate`:

```js
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // After a successful login, redirect the user to the dashboard
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

In this example, once the user clicks the "Login" button, they will be redirected to the /dashboard route.

The `navigate` function accepts an additional options object with properties like `replace` and `state`:

```js
navigate("/dashboard", { replace: true, state: { from: "login" } });
```

- `replace: true`: Replaces the current entry in the browser’s history stack, preventing the user from navigating back to the previous page.
- `state`: Passes data (like `from: 'login'`) to the new route, which can be accessed via the location object in the new component.

### Navigate Using History

You can also use `navigate` to go back or forward in the browser’s history by passing a negative or positive number:

```js
navigate(-1); // Go back to the previous page
navigate(1); // Go forward in history
```

This allows you to control navigation based on user actions or app state, providing a seamless user experience.

## useLocation Hook

The **useLocation** hook returns the location object that represents the current URL. This can be useful for tracking changes in the URL and responding to them in your components.

The location object contains information such as the pathname, search (query string), and hash. Here’s a simple example of how to use `useLocation`:

```js
import { useLocation } from "react-router-dom";

function ShowLocation() {
  const location = useLocation();

  return (
    <div>
      <h2>Current Pathname: {location.pathname}</h2>
      <p>Query String: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}
```

In this example, navigating to /profile?edit=true#section2 would result in the following output:

- Pathname: /profile
- Search: ?edit=true
- Hash: #section2

### Using useLocation for Side Effects

You can combine `useLocation` with `useEffect` to trigger side effects whenever the location changes. For instance, you might want to scroll to the top of the page when a user navigates to a new route:

```js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the location changes
  }, [location]);

  return null;
}
```

This is useful in scenarios where you need to perform specific actions when a user navigates between routes.

## Other React Router Hooks

### useRoutes

The **useRoutes** hook allows you to define routes programmatically using JavaScript objects instead of JSX. This is helpful for creating more dynamic route structures.

Example:

```js
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes([
    { path: "/", element: <Movies /> },
    { path: "/add", element: <MoviesForm /> },
    { path: "/profile/:userId", element: <Profile /> },
  ]);

  return element;
}
```

In this example, the routes are defined as objects rather than JSX components, allowing for more flexibility when configuring routes.

### useSearchParams

The **useSearchParams** hook allows you to manage query strings within your URL. You can use it to read, update, and manipulate search parameters.

Example:

```js
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (filter) => {
    setSearchParams({ filter });
  };

  return (
    <div>
      <h2>Current Filter: {searchParams.get("filter")}</h2>
      <button onClick={() => handleFilterChange("active")}>Active</button>
      <button onClick={() => handleFilterChange("completed")}>Completed</button>
    </div>
  );
}
```

In this example, the query string will be updated dynamically based on the filter the user selects, and the UI will reflect the current filter state.

## Conclusion

React Router’s hooks offer a powerful and flexible way to manage routing, URL parameters, and navigation in your React applications. Whether you need to access dynamic route parameters using `useParams`, perform programmatic navigation with `useNavigate`, or track changes in the current location using `useLocation`, these hooks provide an efficient solution for handling advanced routing scenarios.

In the next section, we’ll explore Advanced Topics, including route protection and lazy loading.
