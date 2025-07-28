[Project Setup ➡️](project-setup.md)

[Back to Contents 📑](../../README.md#module-1)

# Prerequisites

Before you start, here are a few things you need to know. Since React is a JavaScript library, you should be familiar with HTML and JavaScript.
We will commonly use JavaScript ES6+ features in this program, so please refresh you knowledge on the following concepts if you haven't already:

- ES6 classes
- Arrow functions
- Let/const
- Template strings
- Spread/Rest operators
- Destructuring
- Map, Reduce and Filter
- Ternary operator
- Import and Export statements
- Promises
- Async Functions
- Default parameters etc

Additionally, you will need a package manager like NPM or YARN to install React and related libraries.

## Recommendations:

### JavaScript (ES6+) Refresh Plan

- Variable Declarations 
- - let and const (block-scoped variables and immutability concepts)
- Arrow Functions
- - Syntax and usage differences from traditional functions
- - Lexical this behavior in arrow functions
- Classes
- - ES6 class syntax: constructors, methods
- - Differences between ES6 classes and traditional function constructors
- Template Strings
- - Using template literals for string interpolation and multiline strings
- Spread and Rest Operators
- - Spread (...) to expand arrays/objects
- - Rest operator (...) in function parameters
- Destructuring
- - Array and object destructuring syntax for extracting values
- Array Methods 
- - map, reduce, filter
- - How to use these for transforming data and rendering lists in React (task 1)
- Ternary Operator
- - Conditional expressions for inline conditional rendering (task 1)
- Modules 
- - Import and export syntax (import, export, default export)
- - Understanding named vs default exports
- Promises and Async/Await 
- - Promise creation and chaining (.then(), .catch()) (later)
- - Async functions and await for asynchronous code handling (later)
- Default Parameters
- - Providing default values in function parameters

### TypeScript Refresh Plan (focused on React needs) (needed for task 1)

- Basic Types 
- - string, number, boolean, any, void, null, undefined
- Interfaces and Types
- - Defining object shapes for props and state using interface and type
- - Optional and readonly properties
- Union and Intersection Types
- - Handling variables or props that may have multiple types
- Enums
- - Using enums for fixed set of named constants
- Functions in TypeScript
- - Typed function parameters and return types
- - Function types and signatures
- Generics
- - Writing reusable components and functions with generic types
- Type Inference
- - How TypeScript infers types where explicit annotation is omitted
- JSX and TSX
- - Using .tsx files for components that include JSX
- - Typing component props and state
- Type Checking React Props
- - Prop types with interfaces or type
- - Using optional props and default props typings

#### Why This Refresh Is Important for React/TS Course
- - Your React course relies heavily on functional components, hooks, and advanced patterns requiring deep ES6+ knowledge like destructuring, spread/rest operators, and arrow functions.
- - Managing component props and state benefits from solid understanding of object destructuring, array methods, and ternary expressions.
•
TypeScript knowledge enhances your ability to write typed React components, making code more robust and maintainable.
• Async programming with Promises and async/await is essential for handling data fetching and side effects in React. (later)
By following this detailed refresh plan, you will solidify your JavaScript foundation and acquire the crucial TypeScript skills you'll apply throughout the React course, matching even advanced modules like hooks, routing, state management, and testing.
