# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the JEST test runner with coverage results showed for every file\

### `npm storybook`

Runs the Storybook
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## E2E Tests

E2E testing is currently available for MovieList page.
Before running e2e, please, make sure you've Backend API running at https://localhost:4000 (see the 'Backend API' docs below)

To run e2e tests, use *npm start* command first - that will launch the application. Then use

### `npm run wdio`

E2E tests will be run using Chromedriver.

## Backend API

1. Clone the backend repository from\
https://github.com/VarvaraZadnepriak/MoviesAPI.ReactJS

2. Navigate to the cloned repository folder and run "npm install" to install dependencies.

3. Run "npm start" command to start the backend server. It will start on https://localhost:4000 .

4. Make sure Swagger is available at http://localhost:4000/api-docs
