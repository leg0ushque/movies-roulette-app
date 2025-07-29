---
sidebar_position: 5
sidebar_label: "💻 TASK"
title: "Home Task Module #4. React Forms."
---

In this task, you will create various React forms using built-in hooks to handle form state, validation and errors and custom libraries such as React Hook Form and Formik.
To start your work, go to the template and open the `src/module-3/AppModule3.tsx` and follow instructions.
Form's tasks are stored in `reactForms` array.

## Common requirements

1. Create form with the following fields:
   - Name (input tag, string, required, data-testid="nameField")
   - Email (input tag (pls do not use input="email"), string, required, email format, data-testid="emailField")
   - Passport ID (string, required, MM000000 format, data-testid="passportIDField")
   - Gender (select tag, string, required, no default value, data-testid="genderField")
   - Size (select tag, string, required, no default value, data-testid="sizeField")
   - Color (select tag multiple, string[], required, no default value, data-testid="colorsField")
   - Birth Date (input tag, date, required, no default value, data-testid="birthDateField")
   - Height (input tag type='range', number, required, default value - 0, min=0, max=250. Valid value from 50 to 210,data-testid="heightField")
2. Use `colors`, `genders`, `sizes` values from `src/module-3/forms/contants` for select fields;
3. Add submit button. Validate all fields on submit.
   If all fields are valid, call onSubmit function from props.
   Submit data structure - FormSubmitDataType from `src/module-3/forms/types.ts` file
4. Add validation for all fields (required, email format, MM000000 format, etc.)
   Remove validation error on field change.
   Yup library (already installed) can be used for validation, but it is not required.
5. Add error message for all fields (if field is empty or invalid)
   Error message for all validation errors should be the same - "Field is empty or invalid"

:::note
Don't forget to add `data-testid` attributes to all form elements (eg `<input data-testid="nameField" />`)
:::

## Native Forms

- use common requirements
- use native HTML form elements (input, select, button)
- use onChange and onSubmit events to handle form state
- use useState hook to manage form state, errors etc.

:::note
Don't install additional libraries, you already have all needed dependencies
:::

## React Hook Form

- use common requirements
- use useForm hook from "react-hook-form" library
- register inputs with validation rules
- handle form state and errors using useForm hook

## Formik

- use common requirements
- use Formik component from "formik" library
- use Form, Field and ErrorMessage components
- handle form state and errors using Formik

## Local home task check

run command in terminal `npm run test:local:m4`
