[⬅️ Prop Drilling](prop-drilling.md)

[Back to Contents 📑](../../README.md#module-3-4)

# Render Props

## What is Render Props?

A **Render Prop** is a simple and powerful React pattern used for sharing logic between components. It involves passing a function as a prop to a component, where the function dictates how the component should render. This pattern makes it easy to reuse functionality while maintaining flexibility in how UI is structured.

Think of it as a way for a component to "delegate" how it renders some part of its output, based on what the parent provides.

## Use Cases for Render Props

Render Props are particularly useful when:

• You need to share behavior between components without duplicating code.

• You want to make components highly customizable for rendering.

• You are dealing with complex logic (e.g., animations, form handling, or data fetching) that multiple components can share.

### Example 1: A Basic Render Props Pattern

Let’s say we want to track the mouse position within a component. Here’s how Render Props can help:

```jsx
import React, { useState } from "react";

const MouseTracker = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: "200px", border: "1px solid black" }} onMouseMove={handleMouseMove}>
      {render(mousePosition)}
    </div>
  );
};

// Using the MouseTracker component
const App = () => {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          Mouse position: ({x}, {y})
        </h1>
      )}
    />
  );
};

export default App;
```

#### What’s Happening Here?

1. MouseTracker encapsulates the logic for tracking mouse position.

2. The render prop allows the parent component to decide how to display the mouse position.

### Example 2: Conditional Rendering with Render Props

Render Props can also be used to implement conditional rendering. For example:

```jsx
const Toggle = ({ render }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prevState) => !prevState);

  return <div>{render(isOn, toggle)}</div>;
};

// Using the Toggle component
const App = () => {
  return (
    <Toggle
      render={(isOn, toggle) => (
        <div>
          <p>The toggle is {isOn ? "ON" : "OFF"}</p>
          <button onClick={toggle}>Toggle</button>
        </div>
      )}
    />
  );
};

export default App;
```

#### Why Use This Pattern?

• Toggle manages the state and exposes it via the render function.

• The parent component controls how to display the toggle state, making it flexible and reusable.

## When to Use Render Props Today

While Render Props is a powerful pattern, with the introduction of hooks in React, many of its use cases have been replaced by **custom hooks**. For example, the examples above could be rewritten with hooks to achieve the same functionality with cleaner syntax.

### When to still use Render Props

• When working with class components or legacy codebases.

• When you need dynamic control over rendering that can’t be easily achieved with hooks.

Render Props provide a flexible way to handle shared logic, making your components more reusable and customizable. However, always evaluate whether modern alternatives like hooks might be a better fit for your use case.
