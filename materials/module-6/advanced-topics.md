[⬅️ React Router Hooks](react-router-hooks.md)  

[Back to Contents 📑](../../README.md#module-6)

# Advanced Topics

## Nested Routes

Nested routes allow you to define routes within routes, which is useful for creating layouts that are shared across multiple pages.

### Example - Nested Routes

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

In this example, the `Dashboard` component acts as a parent route, and `Settings` and `Profile` are nested routes. When users navigate to `/dashboard/settings`, both the `Dashboard` and `Settings` components are rendered.

### Using Outlet for Nested Routes

An `Outlet` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

```js
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
```

In this setup, the `Dashboard` component includes an `Outlet` component. When a nested route is matched, the corresponding child component will be rendered inside the `Outlet`.

## Code Splitting and Lazy Loading with Routes

As your application grows, you may not want to load all the components at once, especially for routes that users may not visit immediately. **Code splitting** and **lazy loading** allow you to split your code into smaller bundles that can be loaded on demand, improving performance and user experience.

React provides the built-in **`React.lazy()`** function to load components dynamically. Combined with **`Suspense`**, it helps you display a fallback UI while the component is being loaded.

### Example - Lazy Loading Routes

```js
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Movies = React.lazy(() => import("./Movies"));
const MoviesForm = React.lazy(() => import("./MoviesForm"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/add" element={<MoviesForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
```

In this example, the `Movies` and `MoviesForm` components are loaded only when the user navigates to their respective routes. The `Suspense` component displays a loading indicator while the components are being fetched.

## Route Guards and Private Routes

Route guards are used to protect certain routes based on conditions like user authentication. Private routes ensure that only authenticated users can access specific parts of your application.

### Example - Private Route

```js
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = useAuth(); // Custom hook to check authentication

  return isAuthenticated ? children : <Navigate to="/login" />;
}
```

In this example, the user will be redirected to the login page if they try to access a protected route without being authenticated.

### Example - Role-Based Route Guard

You can also create route guards based on user roles or permissions. Here is an example of a route guard that checks if the user has the required role:

```js
import { Navigate } from "react-router-dom";

function RoleBasedRoute({ children, requiredRole }) {
  const { isAuthenticated, userRole } = useAuth(); // Custom hook to check authentication and user role

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
```

In this example, the `RoleBasedRoute` component checks if the user is authenticated and if the user has the required role. If the user is not authenticated, they are redirected to the login page. If the user does not have the required role, they are redirected to an unauthorized page.

## Using createBrowserRouter (Router 6.26.0)

The [`createBrowserRouter`](https://reactrouter.com/en/main/start/tutorial) function is a utility provided by React Router to create a router instance with a more declarative approach. It simplifies the setup of routes and navigation in your application.

### Example - Using createBrowserRouter

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

In this example, we used `createBrowserRouter` as a alternative approach to handle routing.

[//]: # (:::warning)

[//]: # (Do not use version 6.26.0 or above of React Router in your Home Task.)

[//]: # (:::)

## Conclusion

Advanced routing topics like code splitting, nested routes, private routes are essential for building large-scale, performant React applications. By utilizing these features, developers can create highly optimized SPAs with improved performance, security, and scalability.

With React Router, you can take full control over navigation, authentication, and error handling, whether you’re building a small app or a large enterprise application
