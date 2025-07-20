---
sidebar_position: 5
sidebar_label: "💻 TASK"
title: "Home Task Module #5. React Router."
---

## Common Requirements

In this task, you will create two variants of an application using the react-router library.<br/>
To start working, go to the template and open the `src/module-4/AppModule4.tsx` file. Follow the instructions provided in the file.

### Application routing structure:

- **'/'** - Home page
- **'/products'** - Page showing a list of products
  - **'?search=red'** - Query parameter for filtering products.
- **'/products/cart'** - Route for the Cart popup (nested route under the Products page).
- **'/products/:id'** - Route for viewing a specific product's details.
- **'/edit/:id'** - Route for editing a product. This is a protected page visible only to authenticated users.

### Header

1. Render the `Home` link and `Products` link. If the cart is not empty, render a link to the `Cart`.
2. Render the `AuthBlock` component (pre-implemented component).
3. Retrieve `isAuth`, `handleAuthChange`, and `cart` data using the `useAppContext` hook.

### Products page

1. Load the list of products using the `useLoadProducts` hook.
2. Retrieve `isAuth` and `addToCart` from the app context using the `useAppContext` hook.
3. Use the `useSearchParams` hook from react-router to manage query parameters for the product filter.
4. Dynamically update the `search` query parameter when typing in the input field.
5. Display the `View details` link for all users.
6. Display the `Edit product` link only for authenticated users.
7. Attach the `addToCart` method to the `Add to cart` button. Pass the selected product as a parameter.
8. If no products are found, display the text `No products found`.
9. Implement loading and error states.

### Product page / Edit product page

1. Load product details with the `useLoadProduct` hook.
2. Use react-router `useParams` hook to retrieve `id` param.
3. Implement loading and error states.

### Cart

1. Render a list of cart items. If the cart is empty, display the text `Your cart is empty`.
2. Retrieve cart items using the `useAppContext` hook.
3. Use react-router `useNavigate` hook to close the cart by navigating back.

### Protected route

1. Check if the user is authenticated. Use the `useAppContext` hook.
2. Use the react-router `Navigate` component to redirect non-authenticated users to the Home page.
3. Render the protected page if the user is authenticated.

## Task #1 React router - declarative mode

Use react-router `Routes` and `Route` components for implementing application routing. Refer to the <a href="#common-requirements">Common Requirements</a> section.

## Task #1 React router - data mode

Use react-router `RouterProvider` component and `createBrowserRouter` method for implementing application routing. Refer to the <a href="#common-requirements">Common Requirements</a> section.
