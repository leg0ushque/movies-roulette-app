---
sidebar_position: 2
sidebar_label: 'Config File'
title: 'Config File'
---

# Config File

What is inside the configuration file?

```jsx title="webpack.config.js"
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
};
```

- **Entry Point** - This is the starting point of your application. Webpack begins its process from this file and builds a dependency graph of the entire application. In a React app, this is typically the index.js file.
- **Output** - This is where Webpack bundles your code and assets. The output is usually a single file (or a few files) that can be included in your HTML. The default output file is bundle.js.
- **Loaders** - Webpack uses loaders to transform files into modules. For example, babel-loader is used to transpile modern JavaScript (ES6+) and JSX syntax into a format that browsers can understand.
- **Plugins** - Plugins extend Webpack's functionality. They can perform a wide range of tasks like optimizing bundles, managing assets, and injecting environment variables. Common plugins include HtmlWebpackPlugin for generating HTML files and MiniCssExtractPlugin for extracting CSS into separate files.
- **Mode** - Webpack can run in different modes: development, production, and none. Each mode optimizes the build for different purposes. For example, production mode enables optimizations like minification and tree-shaking.

**Multiple entry points:**

Webpack allows you to define multiple entry points in your configuration, which is useful for splitting your application into separate bundles. This can be particularly beneficial for large applications where different parts of the app can be loaded independently.

```js title="webpack.config.js"
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
};
```

- **Entry Points** - The entry property is an object where each key represents a bundle name and its value is the path to the entry file. In this example, app and admin are two separate entry points.
- **Output** - The output property uses [name] to dynamically name the output files based on the entry point names. This results in app.bundle.js and admin.bundle.js.

## Benefits of Multiple Entry Points

- **Improved Load Times** - By splitting your application into smaller bundles, you can reduce the initial load time and only load the necessary code when needed.
- **Better Caching** - Different parts of your application can be cached separately, reducing the need to re-download unchanged code.
- **Modular Development** - It allows for a more modular approach to development, where different teams can work on different parts of the application independently.


**Common Chunks:**

```js title="webpack.config.js"
module.exports = {
    ...,
    optimization: {
        splitChunks: {
            cacheGroups: {
                name: "commoms",
                chunks: "all",
                minSize: 0,
                minChunks: 2
            }
        }
    }
}
```

- **cacheGroups** - This option allows you to define groups of chunks that should be split. Each group can have its own configuration.
- **name** - This specifies the name of the chunk. In this case, the chunk is named "commons".
- **chunks** - This option determines which chunks will be selected for optimization. The value "all" means that both initial and dynamically imported chunks will be considered.
- **minSize** - This sets the minimum size (in bytes) for a chunk to be generated. A value of 0 means that any size is acceptable, so even the smallest modules can be split into separate chunks.
- **minChunks** - This specifies the minimum number of chunks that must share a module before splitting. A value of 2 means that a module must be shared by at least two chunks before it is moved to the "commons" chunk.

## How It Works

**Shared Modules:** When multiple entry points or dynamically imported modules share the same dependencies, those dependencies can be extracted into a separate chunk. This avoids duplication and reduces the overall size of the bundles.

**On-Demand Loading:**  By splitting your code into smaller chunks, you can load only the necessary parts of your application when needed, rather than loading everything upfront.

**Improved Caching:** Separate chunks can be cached independently. If a chunk doesn't change, it can be served from the cache, reducing the need to download unchanged code.

## Example Scenario

Imagine you have two entry points, app.js and admin.js, both of which import a large library like lodash. Without splitChunks, lodash would be included in both bundles, increasing the overall size. With splitChunks, lodash can be extracted into a separate "commons" chunk, which both app.js and admin.js can share. This configuration helps optimize your application by reducing redundancy and improving load times.
