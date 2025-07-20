---
sidebar_position: 4
sidebar_label: 'React Custom Hooks'
title: 'React Custom Hooks'
---

**Custom hooks** are one of the most powerful concepts in React, enabling developers to separate and reuse logic efficiently. They are simply JavaScript functions, but when they use React’s built-in hooks like `useState`, `useEffect`, or `useContext`, they unlock the ability to encapsulate complex behaviors in an easily reusable and shareable way.

The main rule for custom hooks is that they must be called exclusively inside React components or other hooks. This ensures React's hook rules are followed.

## Benefits of Custom Hooks

1. **Cleaner Code**: Move logic out of components to keep them focused and tidy.
2. **Abstraction**: Hide complex logic behind a simple and reusable interface.
3. **Reusability**: Share logic across multiple components without duplicating code.
4. **Consistency**: Standardize coding practices for state management, API calls, or side effects.
5. **Enhanced Development**: Encourages modular and fun coding practices.


## Popular Libraries Using Custom Hooks

Many libraries provide custom hooks to simplify development. For example:
- **`react-redux`**: Offers hooks like `useSelector` and `useDispatch`.
- **`react-router-dom`**: Provides `useNavigate` and `useParams` for routing logic.
- **Custom NPM Libraries**: There are numerous production-ready custom hooks available for various purposes, from form handling to data fetching.


## Example of a Custom Hook

Here’s an example of a custom hook for fetching data:

```tsx
import { useState, useEffect } from 'react';

// Custom hook to fetch data
const useFetch = (url: string) => {
  const [data, setData] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Example usage
const DataDisplay: React.FC = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataDisplay;
```

---

### Key Points

1. Custom hooks must follow React's **rules of hooks**:
  - Only call hooks at the top level.
  - Only call hooks from React functions (components or other hooks).
  - Hook names always start with `use`.
2. They allow developers to encapsulate any logic, making applications more modular and maintainable.

With custom hooks, you can significantly enhance your development process, making code cleaner, reusable, and more efficient.
