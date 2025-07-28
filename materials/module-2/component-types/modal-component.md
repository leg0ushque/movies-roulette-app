[⬅️ Higher-Order Components](higher-order-components.md)  
[Props ➡️](../props/props.md)

[Back to Contents 📑](../../../README.md#module-2)

# Modal Component in React

In React, the `<App />` component is rendered inside a single `<div>` element with the id `#root`. However, nesting modals within other components can lead to issues like conflicting CSS styles (e.g., padding, margins, or positioning) that distort the modal's appearance or behavior.

To avoid these issues, **modals should be rendered directly in the HTML `<body>`**. This ensures cleaner behavior, reduces styling conflicts, and improves accessibility.

React provides a feature called **React Portals** to handle this use case effectively.

---

## What Are React Portals?

React Portals allow you to render a component outside of its parent DOM hierarchy. This is particularly useful for modals, tooltips, and other UI elements that need to "float" above the rest of the application.

### Benefits of Using React Portals:
- Prevents CSS conflicts by isolating the modal from parent styles.
- Simplifies accessibility management (e.g., focus trapping).
- Ensures predictable behavior for components that need to overlay other content.

---

## Implementing a Modal with React Portals

Here’s an example of how to create a modal using React Portals:

```jsx
import { useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ closeModal }) =>
  createPortal(
    <div className="modal">
      <div>That is a modal content</div>
      <button onClick={closeModal}>Close Modal</button>
    </div>,
    document.body // Render modal directly in the <body>
  );

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
};
```

## Use cases of React Portals

1. **Tooltips**: Similar to modals, tooltips need to "float" over other UI elements. They often need to be positioned in a way that is contextual to a triggering element but should not be cut off or obscured by overflow rules. Rendering a tooltip via a Portal can help manage these positioning challenges.

2. **Notifications or Toasts**: Notifications or toasts need to render on top of other elements without disrupting the existing DOM structure. Often displayed at the top or bottom of the view, and at a higher z-index, portals prevent deep nesting and z-index issues, and make it easier to manage multiple notifications.

3. **Fullscreen overlays**: Sometimes, applications feature components or elements that the user can expand into a fullscreen mode, like images or videos. Using a Portal can make this functionality easier to implement since the fullscreen element can be rendered outside of its normal hierarchy.

4. **Third-party widget integrations**: When integrating third-party widgets (like a chatbot interface), you might not have control over the styles used by those widgets and can potentially face styling conflicts. Portals can help by isolating these widgets in the DOM, minimizing potential style or script conflicts.

5. **Drag-and-Drop components**: In complex UIs, draggable elements can be obscured or clipped by their container elements. Portals help render these draggable elements at a higher stack order, ensuring that drag-and-drop UIs are smooth and more user-friendly.
