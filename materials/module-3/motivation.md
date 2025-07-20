---
sidebar_position: 1
sidebar_label: 'Motivation'
title: 'Motivation'
---

# Motivation

## Definition

In React, **hooks** are special functions that allow you to use state and other React features (like lifecycle methods) in **functional components**. They simplify component logic and help avoid using class components. The most common hooks include:

1. **useState**: Allows you to add state to a functional component. You can declare state variables and update them directly within the component.
   ```js
   const [count, setCount] = useState(0);
   ```
   Here, `count` is the state variable, and `setCount` is the function to update it.

2. **useEffect**: Runs side effects (like data fetching or DOM manipulation) after rendering. It combines lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.
   ```js
   useEffect(() => {
     document.title = `You clicked ${count} times`;
   }, [count]);
   ```
   The second argument `[count]` ensures the effect runs only when `count` changes.

3. **useContext**: Enables the use of React context to share data globally without passing props down manually.
   ```js
   const value = useContext(MyContext);
   ```

4. **useReducer**: An alternative to `useState`, useful for managing more complex state logic in a component by dispatching actions.
   ```js
   const [state, dispatch] = useReducer(reducer, initialState);
   ```

5. **useRef**: Creates a mutable object that persists across renders. Commonly used to directly access DOM elements or persist a value without re-rendering.
   ```js
   const inputRef = useRef();
   ```

6. **Custom Hooks**: You can also create your own custom hooks by combining built-in hooks, enabling code reuse across components.


## Why we need hooks

Main reasons of introducing hooks:

😎 Reusing logic.

   When you write your code using Class components it is hard to reuse logic that is written inside lifecycle methods or that is dedicated to state. That was partially solved with HOCs.

😎 Giant components.

   Class components have lifecycle methods and a lot of boilerplate around state management (set initial state, write functions to modify the state, etc.). We end up with a huge component mostly consisting of boilerplate.

😎 Confusing classes (for both, humans and machines).

   Classes can be a large barrier to learning React. You have to understand how `this` works in JavaScript, which is very different from how it works in most languages. Also, there are lots of disputes between developers about when to use Functional and when Class components.
