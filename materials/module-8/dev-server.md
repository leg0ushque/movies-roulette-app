---
sidebar_position: 6
sidebar_label: 'Dev Server'
title: 'Dev Server'
---

# Dev Server

The Webpack Dev Server is a powerful tool that provides a development server with live reloading capabilities, making it easier to develop and test your application locally

## Key Features of Webpack Dev Server

- **Live Reloading** - Automatically reloads the page whenever you make changes to your source files, providing immediate feedback and speeding up the development process.

- **Hot Module Replacement (HMR)** - Allows you to update modules in the browser at runtime without a full page reload. This is particularly useful for maintaining the application state while making changes.

- **Serving Static Files** - Serves your bundled files from memory, which means you don't need to write them to disk. This improves performance during development.

- **Proxying API Requests** - Can proxy API requests to a backend server, allowing you to avoid CORS issues and simulate a production environment.

- **Configurable** - Offers a wide range of configuration options to customize its behavior, such as specifying the port, enabling HTTPS, and setting up custom middleware.

## Basic Configuration

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
  mode: 'development',
};
```

## How to use

First, install the Webpack Dev Server:

```sh
npm install --save-dev webpack-dev-server
```

Add a script to your `package.json` to start the server:

```js
"scripts": {
  "start": "webpack serve --open"
}
```

Run the server using:
```sh
npm start
```

## Hot module replacement

```js title="webpack.config.js"
module.exports = {
  ...,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
  }
}
```

Hot Module Replacement (HMR) exchanges, adds and removes modules while an application is running without a page reload.

## Benefits of using Dev Server
- **Faster Development** - Live reloading and HMR significantly speed up the development process by providing instant feedback.
- **Convenience** - Serves your files from memory, reducing the need for manual file management.
- **Flexibility** - Highly configurable to suit various development needs, such as proxying API requests and serving static files.
