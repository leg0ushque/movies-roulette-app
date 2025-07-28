---
sidebar_position: 7
sidebar_label: 'Code splitting'
title: 'Code splitting'
---

[Back to Contents](../../README.md#module-1)\

# Code splitting

Why do we need code splitting?

Imagine we have a large application, and we have lots of components in it, some of them are stateless, some of them are stateful and in the end, it gets bundled into the file, typically one big chunk of code that gets downloaded once a user visits a website. The user might visit only one or two pages of our application however, we download the whole application for him.

Is there a way for us to give the user only the components he needs now?

Yes, this is what is code splitting.

**Code splitting is the practice of only loading the JavaScript you need the moment when you need it.**

This improves:

- the performance of your app
- the impact on memory, and so battery usage on mobile devices
- the downloaded app size

`React.lazy` and `Suspense` form the perfect way to lazily load a dependency and only load it when needed.

Let's see an example.

```javascript
import React from "react";

const MovieList = React.lazy(() => import("./MovieList"));

export default () => {
  return (
    <>
      <MovieList />
    </>
  );
};
```

`MovieList` component will be dynamically added to the output as soon as it's available. Webpack will create a separate bundle for it and will take care of loading it when necessary.

Suspense is just a Higher-Order Component (HOC). If we have components that need to be lazy loaded, we should wrap them in `React.Suspense`.

```javascript
import React from "react";

const MovieList = React.lazy(() => import("./MovieList"));

export default () => {
  return (
    <React.Suspense>
      <MovieList />
    </React.Suspense>
  );
};
```

Suspense also provides fallback options (components or JSX). Fallback will be shown unit `MovieList` component becomes available.

```javascript
import React from "react";

const MovieList = React.lazy(() => import("./MovieList"));

export default () => {
  return (
    <React.Suspense fallback={<h3>Loading... Please wait</h3>}>
      <MovieList />
    </React.Suspense>
  );
};
```

Code splitting is a powerful technique to optimize the performance of React applications. By splitting your code into smaller chunks and loading them on-demand, you can significantly reduce load times and provide a better user experience. React provides built-in tools like React.lazy() and Suspense, along with the support of tools like Webpack and Vite, to make code splitting easy to implement.
