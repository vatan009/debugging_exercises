````md id="s9k2qx"
# useEffect Mastery Practice

This folder contains progressive exercises to fully understand `useEffect` in React.

---

# Core Mental Model

```txt
render
↓
screen updates
↓
useEffect runs
````

`useEffect` is used for:

* API calls
* timers
* event listeners
* localStorage
* subscriptions
* DOM updates
* cleanup work

---

# IMPORTANT RULE

`useEffect` is for:

```txt
SIDE EFFECTS
```

Things that happen OUTSIDE React rendering.

Examples:

* fetching data
* updating document title
* starting timers
* listening to window resize

---

# Folder Structure

```txt
Question1.jsx
Question2.jsx
Question3.jsx
...
Question25.jsx
```

---

# Practice Order

| Question | Topic                 |
| -------- | --------------------- |
| 1        | render vs effect      |
| 2        | dependency []         |
| 3        | dependency array      |
| 4        | multiple dependencies |
| 5        | input tracking        |
| 6        | document.title        |
| 7        | timer                 |
| 8        | cleanup               |
| 9        | start/stop timer      |
| 10       | resize listener       |
| 11       | remove listener       |
| 12       | API fetching          |
| 13       | loading state         |
| 14       | error handling        |
| 15       | search API            |
| 16       | debouncing            |
| 17       | infinite loop bug     |
| 18       | localStorage save     |
| 19       | localStorage load     |
| 20       | dark mode             |
| 21       | cleanup order         |
| 22       | multiple effects      |
| 23       | subscriptions         |
| 24       | custom hook           |
| 25       | master challenge      |

---

# Most Important Concepts

---

## 1. Effects run AFTER render

```jsx
useEffect(() => {
   console.log("effect");
});
```

Flow:

```txt
render
↓
effect
```

---

## 2. Empty dependency array

```jsx
useEffect(() => {
   console.log("mounted");
}, []);
```

Means:

```txt
run only once
```

---

## 3. Dependency array

```jsx
useEffect(() => {
   console.log("count changed");
}, [count]);
```

Means:

```txt
run when count changes
```

---

## 4. Cleanup function

```jsx
useEffect(() => {

   const id = setInterval(() => {
      console.log("running");
   }, 1000);

   return () => {
      clearInterval(id);
   };

}, []);
```

Cleanup prevents:

* memory leaks
* duplicate listeners
* multiple intervals

---

# Common Beginner Mistakes

---

## Mistake 1

```jsx
useEffect(() => {
   setCount(count + 1);
}, [count]);
```

This creates:

```txt
infinite rerender loop
```

Why?

```txt
effect changes state
↓
state rerenders
↓
effect runs again
```

---

## Mistake 2

Forgetting cleanup.

Bad:

```jsx
setInterval(...)
```

without:

```jsx
clearInterval(...)
```

---

## Mistake 3

Putting everything in one effect.

Better:

```txt
one effect = one responsibility
```

---

# Golden Rule

Ask yourself:

```txt
"Does this code need to happen AFTER rendering?"
```

If YES:

```txt
probably useEffect
```

If NO:

```txt
probably NOT useEffect
```

---

# Final Goal

After these exercises you should understand:

* render cycle
* dependency arrays
* cleanup
* async effects
* event listeners
* timers
* localStorage
* subscriptions
* debouncing
* infinite loop bugs

At that point `useEffect` stops feeling random.

```
```
