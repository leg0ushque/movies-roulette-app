---
sidebar_position: 4
sidebar_label: 'React Hook Form'
title: 'React Hook Form'
---

# React Hook Form

React Hook Form is a library that simplifies the process of building and managing forms in React. It leverages React hooks to handle form state, validation, and submission, making it both efficient and easy to use. One of its key advantages is that it uses uncontrolled components and refs (references) to manage form inputs, which helps improve performance by reducing the number of re-renders.

Key Feature:

- **Performance** - By using uncontrolled components, React Hook Form minimizes re-renders, making your forms faster.
- **Simplicity** - It has a straightforward API that is easy to learn and use, requiring fewer lines of code compared to other form libraries.
- **Validation** - You can easily add validation rules to your form fields using HTML standard validation attributes or custom validation functions.

Basic usage example:

```jsx
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    firstName: "Jon",
    lastName: "Smith",
  });

  const onSubmit = (data) => console.log(data);

  console.log(watch("firstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: "This field is required" })} placeholder="First Name" />
      {errors.name && <p>{errors.name?.message}</p>}

      <input {...register("lastName")} placeholder="Last Name" />

      <input type="submit" />
    </form>
  );
};
```

`register`, this method allows you to register an input or select element and apply validation rules to React Hook Form. The validation rules are based on HTML standard:

- required
- min
- max
- minLength
- maxLength
- pattern
- validate

It also supports schema-based form validation with Yup, Zod, Superstruct and Joi, where you can pass your schema to `useForm` as an optional config.

```jsx
<input {...register("firstName", { required: "This field is required" })} placeholder="First Name" />
```

`watch`, this method will watch specified inputs an return their values. It is useful to render input value and for determining what to render by condition.

```jsx
const watchFirstName = watch("firstName", false); // you can supply default value as second argument
const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
const watchFields = watch(["firstName", "lastName"]); // you can also target specific fields by their names
```

`handleSubmit`, this function will receive the form data when you submit it and the data validation is successful.

```jsx
const onSubmit = (data) => console.log(data);
handleSubmit(onSubmit);
```

**Handle errors**, React Hook Form provides an _errors_ object to show you the errors in the form, the following code excerpt showcase a required validation rule:

```jsx
<input {...register("firstName", { required: "This field is required" })} placeholder="First Name" />;
{
  errors.name && <p>{errors.name?.message}</p>;
}
```

In summary, React Hook Form makes it easy to build and manage forms in React by handling common tasks such as state management, validation, and submission. It uses uncontrolled components and refs to improve performance and reduce re-renders. The library's straightforward API and support for both standard and custom validation make it a powerful tool for building complex forms with minimal code.
