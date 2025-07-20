---
sidebar_position: 4
sidebar_label: "Prop Drilling"
title: "Prop drilling"
---

# Prop drilling

We have functional component that stores the state, and we have lots of functional components that receive or expect to receive some part of that state.

```jsx
import React, { useState } from "react";
import Header from "./Header";
import MoviesList from "./MoviesList";

export default function App() {
  const [state, setState] = useState({
    movies: [
      { id: "1", title: "Movie 1" },
      { id: "2", title: "Movie 2" },
      { id: "3", title: "Movie 3" },
    ],
    app: { title: "Movie app", profileData: "profile data" },
  });

  return (
    <div>
      <Header app={state.app} />
      <MoviesList movies={state.movies} />
    </div>
  );
}

export const ProfileData = ({ profileData }) => <p>{profileData}</p>;
export const Header = ({ app }) => (
  <div>
    <h1>{app.title}</h1>
    <ProfileData profileData={app.profileData} />
  </div>
);

export const MovieCard = ({ movie }) => <h3>{movie.title}</h3>;
export const MoviesList = ({ movies }) => (
  <div>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
```

So imagine we have changes made in the state of the `App` class component. And we want these changes to appear somewhere down in the movie card. In the current situation, we just have one layer (`App > MovieList > MovieCard`). But imagine there are much more layers (components) between `App` component and `MovieCard`. This is called prop drilling.

**Prop drilling is when data needs to be passed from a root component down to deeply-nested components.**

The problem of prop drilling is that most of the components through which this data is passed don't actually need this data.

**How to Overcome Prop Drilling**

1. **Context API:** React's Context API allows you to share data across the component tree without explicitly passing props through each level of the hierarchy.
2. **State Management Libraries:** Using state management libraries like Redux or MobX can help centralize and manage application state, reducing the need for prop drilling.
3. **React Hooks:** Hooks allow you to use state and other React features directly in functional components, eliminating the need for prop drilling.
4. **Higher-Order Components (HOCs):** HOCs are functions that accept a component as input and return a new component with additional props or functionality.
5. **Render Props:** Render props is a technique for sharing code between React components using a prop whose value is a function.

We will see how to use most of these mechanics during the next modules.
