---
sidebar_position: 7
sidebar_label: 'Components'
title: 'Components'
---

[Back to Contents](../../README.md#module-1)

# Components

### React Components

React components are the building blocks of a React application. They allow you to split the user interface into reusable, independent pieces, making your code easier to maintain and develop. Each component represents a part of the UI and can be reused across the application.

There are two main types of React components:
1. **Functional Components:** These are simple JavaScript functions that accept props as an argument and return JSX to define the UI. They are lightweight and often used for presentational purposes.
2. **Class Components:** These are ES6 classes that extend `React.Component`. They can manage state and lifecycle methods, though they are less common with the advent of React Hooks.

React components use **props** (short for "properties") to pass data from one component to another and **state** to manage local data.

#### Example of a Functional Component

Below is an example of a functional component that displays a greeting message:

```tsx
import React from 'react';

// A functional component that accepts props
const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <h1>Hello, {name}! Welcome to React.</h1>;
};

// Example usage of the Greeting component
const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

export default App;
```

In this example:
- The `Greeting` component is a functional component that receives `name` as a prop.
- The `App` component uses the `Greeting` component multiple times with different props, demonstrating reusability.

By combining functional components like this, you can build complex UIs from smaller, manageable pieces.  
We will look at the Components in details in the [next module](/category/module-2---react-components-1-done)
