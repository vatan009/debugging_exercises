````md
# React Debugging Notes – Key Concepts

## 1. `useReducer`

`useReducer` is a React Hook used for managing state.
It is an alternative to `useState`, especially useful when state logic is complex.

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
````

### Returns an Array with Two Values

* `state` → current state value
* `dispatch` → function used to send actions

### Example

```jsx
const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
```

If `initialState = 0`, then initially:

```jsx
state = 0
```

### How it Works

* `dispatch()` sends an action to reducer
* `reducer(state, action)` receives:

  * current state
  * action object
* returns new updated state

---

## 2. Updating Array State in React

Wrong:

```jsx
arr.push(input);
```

Why wrong?

* `push()` mutates original array
* React state should be immutable

Correct:

```jsx
setArr([...arr, input]);
```

Creates a new array and adds `input`.

---

## 3. `setCount(count + 1)` vs `setCount(c => c + 1)`

These are **not always equal**.

### Functional Update (Recommended)

```jsx
setCount(c => c + 1);
```

Use when next state depends on previous state.

### Direct Update

```jsx
setCount(count + 1);
```

Uses current render value.

### Example

```jsx
setCount(count + 1);
setCount(count + 1);
```

Result:

```jsx
+1
```

Because both use same old value.

But:

```jsx
setCount(c => c + 1);
setCount(c => c + 1);
```

Result:

```jsx
+2
```

Each gets latest state.

### Rule

Use functional update for:

* increment
* decrement
* toggle
* multiple updates
* async callbacks

Use direct update for fixed values:

```jsx
setCount(10);
setCount(user.age);
```

---

## 4. `onClick={handleSubmit()}` vs `onClick={() => handleSubmit()}`

### Wrong

```jsx
onClick={handleSubmit()}
```

Runs immediately during render.

### Correct

```jsx
onClick={() => handleSubmit()}
```

Runs only when clicked.

If no argument needed:

```jsx
onClick={handleSubmit}
```

---

## 5. Updating Object Inside Array State

### Example

```jsx
function handleVote(id) {
  const target = options.find((o) => o.id === id);

  setOptions((options) =>
    options.map((item) =>
      item === target
        ? { ...item, score: item.score + 1 }
        : item
    )
  );
}
```

### Why Good?

* Uses `map()` to create new array
* Uses spread operator `{...item}` for new object
* Avoids mutation

### Wrong Way

```jsx
target.score += 1;
```

Mutates state directly.

---

# Quick Rules

* Never mutate React state directly
* Use spread operator for arrays/objects
* Use functional updates when based on old state
* Event handlers should pass function, not execute immediately
* Use `useReducer` for complex state logic

```
```
