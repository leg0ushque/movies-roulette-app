# Movies-roulette App

## Available Scripts

First run: do not forget to ensure all deps are downloaded. Please, run 

### `npm install`

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

## Contents:

### Help Module
- [Useful Links](./materials/help-module/useful-links.md)

### HT
- [Description and Criteria](./materials/HT/description-and-criteria.md)
- [Task](./materials/HT/task.md)

### Module 1
- [Advantages of React](./materials/module-1/advantages-of-react.md)
- [Components](./materials/module-1/components.md)
- [Elements and JSX](./materials/module-1/elements-and-jsx.md)
- [Functional Paradigm](./materials/module-1/functional-paradigm.md)
- [History of React](./materials/module-1/history-of-react.md)
- [Prerequisites](./materials/module-1/prerequisites.md)
- [Project Setup](./materials/module-1/project-setup.md)
- [Task](./materials/module-1/task.md)
- [Virtual DOM](./materials/module-1/virtual-dom.md)

### Module 2
- [Application Structure](./materials/module-2/application-structure.md)
- [Code Splitting](./materials/module-2/code-splitting.md)
- [Components](./materials/module-2/components.md)
- [State](./materials/module-2/state.md)
- [Strict Mode](./materials/module-2/strict-mode.md)
- [Task](./materials/module-2/task.md)

#### Component Types
- [Error Boundaries](./materials/module-2/component-types/error-boundaries.md)
- [Higher-Order Components](./materials/module-2/component-types/higher-order-components.md)
- [Layout Component](./materials/module-2/component-types/layout-component.md)
- [Modal Component](./materials/module-2/component-types/modal-component.md)
- [Parent and Child](./materials/module-2/component-types/parent-and-child.md)

#### Props
- [Default Prop](./materials/module-2/props/default-prop.md)
- [Prop Drilling](./materials/module-2/props/prop-drilling.md)
- [Props](./materials/module-2/props/props.md)
- [Render Props](./materials/module-2/props/render-props.md)

#### Styling
- [Advanced Styling](./materials/module-2/styling/advanced-styling.md)
- [Styling](./materials/module-2/styling/styling.md)

#### Type Checking
- [Advanced Type Checking](./materials/module-2/type-checking/advanced-type-checking.md)
- [Prop Types](./materials/module-2/type-checking/prop-types.md)

### Module 3
- [Basic Approach](./materials/module-3/basic-approach.md)
- [Built-in Hooks](./materials/module-3/built-in-hooks.md)
- [Custom Hooks](./materials/module-3/custom-hooks.md)
- [Motivation](./materials/module-3/motivation.md)
- [Performance Optimization](./materials/module-3/performance-optimization.md)
- [Task](./materials/module-3/task.md)

### Module 4
- [Formik](./materials/module-4/formik.md)
- [Overview](./materials/module-4/overview.md)
- [React Final Form](./materials/module-4/react-final-form.md)
- [React Hook Form](./materials/module-4/react-hook-form.md)
- [Task](./materials/module-4/task.md)

### Module 5
- [Advanced Topics](./materials/module-5/advanced-topics.md)
- [Intro to Routing in SPA](./materials/module-5/intro-to-routing-in-SPA.md)
- [React Router Basics](./materials/module-5/react-router-basics.md)
- [React Router Hooks](./materials/module-5/react-router-hooks.md)
- [Task](./materials/module-5/task.md)

### Module 6
- [Alternative Libraries](./materials/module-6/alternative-libraries.md)
- [Context](./materials/module-6/context.md)
- [Redux Toolkit](./materials/module-6/redux-toolkit.md)
- [Task](./materials/module-6/task.md)

### Module 7
- [Best Practices](./materials/module-7/best-practices.md)
- [Blackbox and Whitebox Testing](./materials/module-7/blackbox-and-whitebox-testing.md)
- [Introduction](./materials/module-7/introduction.md)
- [Jest](./materials/module-7/jest.md)
- [Popular Libraries](./materials/module-7/popular-libraries.md)
- [React Testing Library](./materials/module-7/react-testing-library.md)
- [Task](./materials/module-7/task.md)
- [Testing Pyramid](./materials/module-7/testing-pyramid.md)

### Module 8
- [Config File](./materials/module-8/config-file.md)
- [Dev Server](./materials/module-8/dev-server.md)
- [Loaders](./materials/module-8/loaders.md)
- [Overview](./materials/module-8/overview.md)
- [Plugins](./materials/module-8/plugins.md)
- [Source Maps](./materials/module-8/source-maps.md)
