---
sidebar_position: 6
sidebar_label: "💻 TASK"
title: "Home Task Module #3. React Hooks"
---

In this task, you will create various React components using built-in and custom hooks.
To start your work, go to the template and open the `src/module-3/AppModule3.tsx` and follow instructions.
Hook's tasks are stored in `reactHooks` array.

## Built-in Hooks

### useEffect hook

Use `React.useEffect` to implement 3 features:

**1. Timer**

- component act as a timer.
- start timer on `Start` button click and stop timer on `Stop` button click.
- render current time in the `p` tag.

**2. Fetch**

- component should fetch data from the API.
- render fetched data in the list.
- handle loading and error state.

**3. Resize**

- component should track window size.
- add `resize` event listener on mount and remove on unmount.
- render current window size in the `p` tag.

### useContext hook

Use `React.useContext` hook to implement 1 feature:

**1. Theme**

- implement components given in the template - ThemeComponent, ThemeProvider and ThemeToggler, context - ThemeContext and useTheme hook.
- for light theme use `#141414` text color and `#ECECEC` background, for dark theme use `#ECECEC` text color and `#141414` background.
- render current theme in the `h3` tag.

### useReducer hook

Use `React.useReducer` hook to implement 1 feature:

**1. TodoList**

- implement components given in the template - ToDoComponent and reducer.
- render current todo list in the `ul` tag.
- implement reducer actions - ADD_TODO, TOGGLE_TODO and REMOVE_TODO.
- clear the input value after adding new item to the list.

## Custom Hooks

Create 3 custom hooks:

**1. useOutsideClick**

- implement DropDownComponent given in the template.
- on `Open dropdown` button click, dropdown should open and close on click outside the dropdown.
- use useRef hook to get the dropdown element.
- implement useOutsideClick hook.
- add mousedown event listener on mount and remove on unmount.
- check if the dropdown element contains the event target or not and close the dropdown if it does not contain the target.

**2. useKeyBoardPress**

- implement AccordionComponent given in the template.
- on `Enter` and `+` key press open accordion content, on `Escape` and `-` key press close accordion content.
- implement useKeyBoardPress hook.
- add keydown event listener on mount and remove on unmount.
- check if a pressed key is one of the allowed keys and call the appropriate callback.

**3. useScrollPosition**

- implement ScrollComponent given in the template.
- render current scroll vertical and horizontal position in the `p` tag.
- implement useScrollPosition hook.
- add scroll event listener on mount and remove on unmount.
- check if the scroll position has changed and update the state.


## Local home task check

run command in terminal `npm run test:local:m3`
