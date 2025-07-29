[⬅️ Source Maps](source-maps.md)  
[Dev Server ➡️](dev-server.md)  

[Back to Contents 📑](../../README.md#module-8)

# Loaders

Loaders in Webpack are essential tools that transform files into modules that Webpack can process. They allow you to preprocess files as you import or load them, enabling you to handle various types of assets beyond JavaScript, such as CSS, images, and more.

```js title="webpack.config.js"
const path = require("path");
module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    home: "./Home",
    order: "./Order",
  },
  output: {
    path: path.join(__dirname, "built"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        options: {
          useCache: true,
        },
      },
    ],
  },
};
```

In much simpler terms,
it means we load something into the build.
Webpack works with just JavaScript.
So we need to include other files into the build somehow.
We can specify - just copy the folders and that's it.
But what if we need to do something with them too?
Because webpack changes JavaScript and maybe changes the names for paths.
We might use other technologies, for example, CSS technologies like Less or Sass, and some preprocessors, that are not directly available in the browser.
Typical workflow working with the CSS preprocessors: we are downloading some code, that enables this preprocessing thing, but before shipping a project, we run these preprocessors to get the CSS out of SCSS or Less.
So we can specify webpack to do the same thing.

## Typescript Loader

We can say: webpack, before you bundle the whole JavaScript, you just go a step above and transpile from TypeScript to JavaScript.

```js title="webpack.config.js"
module.exports = {
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
};
```

## Babel Loader

Transpiles modern JavaScript (ES6+) and JSX into a format that browsers can understand.

```js title="webpack.config.js"
module.exports = {
  // Currently we need to add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // Add the loader for .js files.
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
};
```

## The typical structure

First, a loader is that we're writing the module rules.
So, module rules are an array of objects, each object specifies one loader, one step that needs to be taken.
A typical structure of these objects is `test` - webpack needs to find all TS files.
And then apply to these files that it found the loader with some options.
The `options` property is just an object that the loader will use.
So when we have, for example, a Babel loader, please find the nice cool syntax that React provides us to ask all the files and just transform them.
CSS is the same thing:

## CSS

In order to use CSS you have to use 2 loaders: `style-loader` and `css-loader` and one more plugin `MiniCssExtractPlugin`.
It is not the case for preprocessing, however, we see that in CSS we have a minifier, so we just do the same job that we're doing with JavaScript.
Interprets `@import` and `url()` like `import/require()` and resolves them.

```js title="webpack.config.js"
module.exports = {
  ...,
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    }]
  },
  plugings: [
    new MiniCssExtractPlugin(...)
  ]
}
```

## LESS

You can see, an array of `use` keys should have some order.
Webpack looks at the loader, finds all `.less` files, and it applies `use` array in order from right to left, from bottom to top.
Just remember, when we do some minification for `less` files, we need to go and transform Less into CSS, CSS to like a transformed version, and after CSS loader we pipe it into minify CSS.

```js title="webpack.config.js"
module.exports = {
  ...,
  module: {
    rules: [{
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }]
  }
}
```

## Exports Loader

Some loaders can be used as plugins, used to do both things differently, so expose loader can take the different files and pipe them into other files, like import/export things.

```js title="webpack.config.js"
module.exports = {
  ...,
  module: {
    rules: [{
      test: /\b.js/,
      loader: 'exports-loader?hiddenVar'
    }]
  }
}
```

```js title="b.js"
const hiddenVar = 5;
```

```js title="a.js"
import b from "./b";
console.log(b);
```

## Expose Loader

Expose loader is the same thing as a plugin, bundles a library and provides the for the library.
We can do the same thing, like expose the library to our code.

```js title="webpack.config.js"
module.exports = {
  ...,
  entry: {
    main: ['lodash', "./a"],
  },
  module: {
    rules: [{
      test: require.resolve('lodash'),
      loader: 'expose-loader?lodash'
    }]
  }
}
```

```js title="a.js"
console.log(_);
```

## File Loader

File loader is one of the important.
Typical loader that is used for pictures, fonts, and other plain files.
A typical option as you can see, we can specify a name.
As you can see we are using a webpack notation, that enables us to say - use path, where you found the file, then concat it with the name dot extension, and then after the question, mark a hash.
Resolves `import/require()` on a file into a URL and emits the file into the output directory.
So these are the ways to tell webpack what to do, and the path name extension and hash are the variables that you can specify inside the strings, and webpack will understand it.

```js title="webpack.config.js"
const path = require('path');
module.exports = {
  ...,
  module: {
    rules: [{
      test: /\.(ttf|eot|svg|woff|png)$/,
      loader: "file-loader",
      options: {
        name: '[path][name].[ext]?[hash]'
      }
    }]
  }
}
```
