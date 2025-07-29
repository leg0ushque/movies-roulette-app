[⬅️ Overview](overview.md)  
[React Final Form ➡️](react-final-form.md)  

[Back to Contents 📑](../../README.md#module-7)

# Formik

Formik is a popular library that helps you manage forms in React. It simplifies handling form state, validation, and submission. With Formik, you don't have to manually manage the state of each input field. Instead, Formik keeps track of all the form values, errors, and touched fields for you. It also makes it easy to add validation and handle form submissions.

![Formik](./images/formik-logo.png)

A Formik implementation with React looks something like this:

```jsx
// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
```

In this example, we're using Formik to create a simple form in React. Formik is a library that helps manage form state, validation, and submission, making it easier to work with forms in React.

First, we import React and the Formik component from the Formik library. The Formik component is the core of Formik and provides all the functionality we need to manage our form.

The FormFormik component is where we define our form. Inside this component, we use the Formik component to manage the form state. We pass several props to Formik:

- `initialValues` sets the initial values for the form fields. In this case, we have two fields: email and password, both initialized to empty strings.
- `validate` is a function that checks the form values for errors. It takes the form values as an argument and returns an object containing any validation errors. In this example, it checks if the email field is empty or if it contains an invalid email address.
- `onSubmit` is a function that handles form submission. It takes the form values and a setSubmitting function as arguments. Inside the function, we use setTimeout to simulate an asynchronous operation, like a server request. After a short delay, we display an alert with the form values and set setSubmitting to false to indicate that the form submission is complete.

Inside the Formik component, we use a render props pattern to access the form state and helper methods. The function inside the curly braces receives an object with several properties, including isSubmitting.

We then return a Form component, which is a wrapper around the HTML form element. Inside the form, we have two Field components for the email and password fields. The Field component is a wrapper around the HTML input element and connects it to Formik's state. The type and name props specify the type of input and the name of the field.

We also use the ErrorMessage component to display validation errors. The name prop specifies the field for which the error message should be displayed, and the component prop specifies the HTML element to use for the error message.

Finally, we have a submit button that is disabled while the form is being submitted. This is controlled by the isSubmitting flag provided by Formik.

In summary, this code sets up a form using Formik, initializes the form with empty values for email and password, validates the form on submission, and displays an alert with the form values. The form inputs for email and password are controlled by Formik, and error messages are conditionally displayed if there are validation errors. The submit button is disabled while the form is being submitted.

Since form state is inherently local and ephemeral, Formik does not use external state management libraries like Redux or MobX. This also makes Formik easy to adopt incrementally and keeps bundle size to a minimum.
