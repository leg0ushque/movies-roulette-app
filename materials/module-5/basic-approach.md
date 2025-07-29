[⬅️ Motivation](motivation.md)  
[Built-in Hooks ➡️](built-in-hooks.md)

[Back to Contents 📑](../../README.md#module-5)

# Basic Approach

When 3 main problems of React at that time became obvious to Facebook team, they decided to take the next steps:

❌ Move away from classes  
✅ Write declarative code  
🌊 Do not introduce breaking changes  

Alongside that concept, React team introduced **3 main rules** of writing and using hooks.

1️⃣ **Only call hooks from a top level,** which means never calling a hook inside conditional statements or loops.
|

2️⃣ **Only call hooks inside React functions,** which means that you cannot use this API anywhere outside components.


3️⃣ **ALWAYS call your custom hooks starting from the "use" keyword.** This naming convention helps React to identify hooks and allows you to use other hooks inside your custom hook. It also helps visually separate hook-based logic from everything else.
