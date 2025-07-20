---
sidebar_position: 3
sidebar_label: 'React Final Form'
title: 'React Final Form'
---

# React Final Form

React Final Form is a library designed to help you manage form state in React applications. It wraps around the core Final Form library, providing a simple and efficient way to handle forms. React Final Form is known for its high performance, as it only re-renders the parts of the form that need updating, making it very efficient.

- React-Final-Form is built by the same author as Redux Form.
- React community moved away from Redux Form in search of more lightweight and performant alternatives.
- Unlike Redux Form, Final-Form is a zero dependency solution.

React Final Form Goals:

- **Strongly Typed** - Provides strong typing via both Flow and Typescript to let you catch bugs on coding time.
- **Modularity** - It is highly modular, allowing you to use only the parts you need.
- **Zero Dependencies** - The library does not have any dependencies, making it lightweight and easy to integrate into your project.
- **High Performance** - React Final Form is designed to be fast and efficient. It only re-renders the components that need to be updated, which improves performance.
- **React Hooks Compatible** - It works well with React Hooks, making it easy to use in modern React applications

![React Final Form](./images/react-final-form.png)

The primary difference with Redux Form is that, rather than "decorate" your form component with a Higher Order Component, you use React Final Form’s
`<Form/>` component to give you all your form state via a render prop.

And that is how React Final Form looks:

```jsx
import React from "react";
import { Form, Field } from "react-final-form";

const MyForm = () => (
  <Form
    onSubmit={(formValues) => {
      alert(JSON.stringify(formValues, null, 2));
    }}
    validate={(values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      }
      return errors;
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  />
);

export default MyForm;
```

In this example, we use the Form component from React Final Form to manage the form state and handle submission. The Field component connects an input field to the form state. We also define a validate function to check the form values and return any errors. The onSubmit function handles form submission and displays the form values in an alert.

React Final Form simplifies building and managing forms in React by handling common tasks for you, allowing you to focus on the specific functionality of your form.
