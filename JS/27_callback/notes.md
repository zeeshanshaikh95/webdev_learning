# JavaScript Callback Functions – Notes 📝

## What is a Callback Function?

A **callback** is a **function that is passed as an argument to another function** and is executed **later** by that function.

Instead of calling the function immediately, we **give the function to another function**, which decides **when to execute it**.

---

# Syntax

```javascript
function first(callback){
    // do something

    callback();
}
```

Calling the function:

```javascript
first(second);

function second(){
    console.log("Hello");
}
```

---

## Memory Trick 🧠

> **Callback = "Call me back later."**

Think of ordering food 🍕.

```text
You place an order
        ↓
Restaurant cooks food
        ↓
Restaurant calls you back
```

The restaurant doesn't call you immediately—it calls you **later** when the food is ready.

Similarly:

```text
Function A
      ↓
Does its work
      ↓
Calls Function B (Callback)
```

---

# Your Code

```javascript
hello(goodbye);
```

### Explanation

Here,

```javascript
goodbye
```

is **not being called immediately**.

Instead, it is **passed as an argument** to `hello()`.

Notice:

```javascript
hello(goodbye);
```

There are **no parentheses** after `goodbye`.

That means:

> "Pass the function itself."

---

# Step 1: Call `hello()`

```javascript
hello(goodbye);
```

JavaScript sends the `goodbye` function into `hello()`.

So inside `hello()`:

```javascript
callback = goodbye;
```

---

# Step 2: Function Definition

```javascript
function hello(callback){
```

The parameter

```javascript
callback
```

stores the function that was passed.

In this case:

```javascript
callback = goodbye
```

---

# Step 3: Print "Hello!"

```javascript
console.log("Hello!");
```

Output:

```text
Hello!
```

---

# Step 4: Execute the Callback

```javascript
callback();
```

Since

```javascript
callback = goodbye
```

JavaScript executes:

```javascript
goodbye();
```

---

# Step 5: `goodbye()` Runs

```javascript
function goodbye(){
    console.log("Goodbye!");
}
```

Output:

```text
Goodbye!
```

---

# Final Output

```text
Hello!
Goodbye!
```

---

# Why Don't We Write `goodbye()`?

### Correct

```javascript
hello(goodbye);
```

This passes the function.

---

### Incorrect

```javascript
hello(goodbye());
```

Here,

```javascript
goodbye()
```

runs **immediately**.

Output becomes:

```text
Goodbye!
Hello!
```

Also,

`goodbye()` returns `undefined`, so `hello()` receives `undefined` instead of a function.

Then this line:

```javascript
callback();
```

tries to execute:

```javascript
undefined();
```

which causes an error:

```text
TypeError: callback is not a function
```

---

# Visual Flow

```text
hello(goodbye)
        │
        ▼
callback = goodbye
        │
        ▼
Print "Hello!"
        │
        ▼
callback()
        │
        ▼
goodbye()
        │
        ▼
Print "Goodbye!"
```

---

# Another Example

```javascript
function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

function sayBye(){
    console.log("Bye!");
}

greet("Zee", sayBye);
```

Output:

```text
Hello Zee
Bye!
```

---

# Real-Life Uses of Callbacks

Callbacks are commonly used for:

* Button click events (`onclick`)
* Timers (`setTimeout()`)
* Animations
* Loading data from a server
* Reading files
* API requests

Example:

```javascript
setTimeout(function(){
    console.log("3 seconds passed");
}, 3000);
```

Here, the function is executed **after 3 seconds**.

---

# Program Flow

```text
Call hello(goodbye)
          ↓
Pass goodbye as callback
          ↓
hello() starts
          ↓
Print "Hello!"
          ↓
Execute callback()
          ↓
goodbye() runs
          ↓
Print "Goodbye!"
```

---

# Important Points

| Code               | Meaning                       |
| ------------------ | ----------------------------- |
| `hello(goodbye)`   | Pass the function             |
| `hello(goodbye())` | Call the function immediately |
| `callback()`       | Execute the passed function   |

---

# Quick Revision 🚀

| Concept            | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| Callback           | Function passed as an argument                       |
| `callback()`       | Executes the callback function                       |
| `hello(goodbye)`   | Passes a function                                    |
| `hello(goodbye())` | Calls the function immediately (usually not desired) |

---

## Easy Tricks 🎯

* **Callback** → A function passed to another function.
* **No parentheses (`goodbye`)** → Pass the function.
* **With parentheses (`goodbye()`)** → Execute the function immediately.
* The receiving function decides **when** to run the callback.

### One-Line Rule

> **A callback is a function passed as an argument to another function, allowing the receiving function to execute it at the appropriate time.**
