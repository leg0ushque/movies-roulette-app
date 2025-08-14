# Movies-roulette App

## Contents:

### Useful links
1. [Figma Link](https://www.figma.com/design/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0-1&node-type=canvas&t=3qab9fApk1C8RVpq-0)
2. [React dev notes](https://react.dev/)
3. [Old React dev notes](https://ru.legacy.reactjs.org/)
4. [React JS Youtube videos](https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)

### Home works
- [Preview](./materials/hw.md)
- [DOCX File](./materials/hw.docx)

### Module 1 - Core concepts
- [Advantages of React](./materials/module-1/advantages-of-react.md)
- [Components](./materials/module-1/components.md)
- [Elements and JSX](./materials/module-1/elements-and-jsx.md)
- [Functional Paradigm](./materials/module-1/functional-paradigm.md)
- [History of React](./materials/module-1/history-of-react.md)
- [Prerequisites](./materials/module-1/prerequisites.md)
- [Project Setup](./materials/module-1/project-setup.md)
- [Virtual DOM](./materials/module-1/virtual-dom.md)

### Module 2 - Testing
- [Best Practices](./materials/module-2/best-practices.md)
- [Blackbox and Whitebox Testing](./materials/module-2/blackbox-and-whitebox-testing.md)
- [Introduction](./materials/module-2/introduction.md)
- [Jest](./materials/module-2/jest.md)
- [Popular Libraries](./materials/module-2/popular-libraries.md)
- [React Testing Library](./materials/module-2/react-testing-library.md)
- [Task](./materials/module-2/task.md)
- [Testing Pyramid](./materials/module-2/testing-pyramid.md)

### Module 3-4 - Components. Advanced components

- [Application Structure](./materials/module-3-4/application-structure.md)
- [Code Splitting](./materials/module-3-4/code-splitting.md)
- [Components](./materials/module-3-4/components.md)
- [State](./materials/module-3-4/state.md)
- [Strict Mode](./materials/module-3-4/strict-mode.md)
- [Task](./materials/module-3-4/task.md)

#### Component Types
- [Error Boundaries](./materials/module-3-4/component-types/error-boundaries.md)
- [Higher-Order Components](./materials/module-3-4/component-types/higher-order-components.md)
- [Layout Component](./materials/module-3-4/component-types/layout-component.md)
- [Modal Component](./materials/module-3-4/component-types/modal-component.md)
- [Parent and Child](./materials/module-3-4/component-types/parent-and-child.md)

#### Props
- [Default Prop](./materials/module-3-4/props/default-prop.md)
- [Prop Drilling](./materials/module-3-4/props/prop-drilling.md)
- [Props](./materials/module-3-4/props/props.md)
- [Render Props](./materials/module-3-4/props/render-props.md)

#### Styling
- [Advanced Styling](./materials/module-3-4/styling/advanced-styling.md)
- [Styling](./materials/module-3-4/styling/styling.md)

#### Type Checking
- [Advanced Type Checking](./materials/module-3-4/type-checking/advanced-type-checking.md)
- [Prop Types](./materials/module-3-4/type-checking/prop-types.md)

### Module 5 - React Hooks
- [Basic Approach](./materials/module-5/basic-approach.md)
- [Built-in Hooks](./materials/module-5/built-in-hooks.md)
- [Custom Hooks](./materials/module-5/custom-hooks.md)
- [Motivation](./materials/module-5/motivation.md)
- [Performance Optimization](./materials/module-5/performance-optimization.md)

### Module 6 - React router
- [Advanced Topics](./materials/module-6/advanced-topics.md)
- [Intro to Routing in SPA](./materials/module-6/intro-to-routing-in-SPA.md)
- [React Router Basics](./materials/module-6/react-router-basics.md)
- [React Router Hooks](./materials/module-6/react-router-hooks.md)

### Module 7 - Forms
- [Formik](./materials/module-7/formik.md)
- [Overview](./materials/module-7/overview.md)
- [React Final Form](./materials/module-7/react-final-form.md)
- [React Hook Form](./materials/module-7/react-hook-form.md)

### Module 8
- [Config File](./materials/module-8/config-file.md)
- [Dev Server](./materials/module-8/dev-server.md)
- [Loaders](./materials/module-8/loaders.md)
- [Overview](./materials/module-8/overview.md)
- [Plugins](./materials/module-8/plugins.md)
- [Source Maps](./materials/module-8/source-maps.md)

### Additional materials module
- [Alternative Libraries](./materials/module-additional/alternative-libraries.md)
- [Context](./materials/module-additional/context.md)
- [Redux Toolkit](./materials/module-additional/redux-toolkit.md)

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the JEST test runner with coverage results showed for every file\

### `npm run storybook`

Runs the Storybook
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## E2E Tests

E2E testing is currently available for MovieList page.
Before running e2e, please, make sure you've Backend API running at https://localhost:4000 (see the 'Backend API' docs below)

To run e2e tests, use *npm start* command first - that will launch the application. Then use

### `npm run wdio`

E2E tests will be run using Chromedriver.

**Note: Remember that the opened Chrome window should be active in your OS to allow tests pass correctly. Please, don't let the e2e pass in the background (inactive Chrome window) - in this case the results may be faulty.**

## Backend API

1. Clone the backend repository from\
https://github.com/VarvaraZadnepriak/MoviesAPI.ReactJS

2. Navigate to the cloned repository folder and run "npm install" to install dependencies.

3. Run "npm start" command to start the backend server. It will start on https://localhost:4000 .

4. Make sure Swagger is available at http://localhost:4000/api-docs
