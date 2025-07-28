[⬅️ Modal Component](../component-types/modal-component.md)  
[Default Prop ➡️](default-prop.md)

[Back to Contents 📑](../../../README.md#module-2)

# Props

## What are Props?

Props, short for 'properties,' are a JavaScript object.
They are read-only and hold information passed from a 'parent' component to its corresponding 'child.'

## How to use Props?

For example you need to render MovieCard with title and description.
Best practice here to use destructuring assignment inside function arguments.

```jsx
const MovieCard = ({ title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>;
);

const element = <MovieCard title="Movie" description="Short description" />;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
```

Usually you don’t need the whole props object itself, so you destructure it into individual props.
For example, let's add an `<img />` element to `<MovieCard />` and destruct only movie props. You can call `imgProps` as you wish - it can be `props`, `ohterProps` etc.

```jsx
const MovieCard = ({ title, description, ...imgProps }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <img {...imgProps} />
  </div>;
);

const element = <MovieCard title="Movie" description="Short description" src="./movie.jpg" alt="poster" />;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
```

