# JavaScript Callbacks (with Parameters) – Notes 📝

## What is a Callback?

A **callback** is a **function passed as an argument to another function** so that it can be executed **after a task is completed**.

It allows one function to say:

> **"When you're done, call this function."**

Callbacks are commonly used for **asynchronous operations**, such as:

* 📄 Reading a file
* 🌐 Network/API requests
* 🗄️ Database operations
* ⏳ Timers (`setTimeout`)
* 🖱️ Button click events

---

# Syntax

```javascript
function first(callback){
    // do some work

    callback();
}
```

---

## Memory Trick 🧠

> **Callback = "Call me back when you're finished."**

Imagine a restaurant 🍕:

```text
Place Order
      ↓
Chef Cooks Food
      ↓
Food Ready
      ↓
Chef Calls You
```

The chef doesn't call you immediately—only **after** the food is ready.

Similarly:

```text
Function A
     ↓
Completes its work
     ↓
Calls Function B (Callback)
```

---

# Your Code

```javascript
sum(displayConsole, 1, 2);
```

Here,

* `displayConsole` is the callback function.
* `1` and `2` are the numbers to add.

Notice:

```javascript
displayConsole
```

has **no parentheses**.

That means you're **passing the function**, not calling it.

---

# Step 1: Call the Function

```javascript
sum(displayConsole, 1, 2);
```

JavaScript passes:

```text
callback = displayConsole

x = 1

y = 2
```

---

# Step 2: Function Definition

```javascript
function sum(callback, x, y){
```

The parameters receive:

| Parameter  | Value            |
| ---------- | ---------------- |
| `callback` | `displayConsole` |
| `x`        | `1`              |
| `y`        | `2`              |

---

# Step 3: Add the Numbers

```javascript
let result = x + y;
```

Calculation:

```text
1 + 2

↓

3
```

Now:

```text
result = 3
```

---

# Step 4: Execute the Callback

```javascript
callback(result);
```

Since

```text
callback = displayConsole
```

JavaScript actually executes:

```javascript
displayConsole(3);
```

---

# Step 5: `displayConsole()` Runs

```javascript
function displayConsole(result){
    console.log(result);
}
```

Now:

```javascript
console.log(3);
```

Output:

```text
3
```

---

# Visual Flow

```text
sum(displayConsole,1,2)
            │
            ▼
callback = displayConsole
x = 1
y = 2
            │
            ▼
result = 1 + 2
            │
            ▼
result = 3
            │
            ▼
callback(result)
            │
            ▼
displayConsole(3)
            │
            ▼
Print 3
```

---

# Why Pass the Result?

Instead of returning the result:

```javascript
return result;
```

the function **gives the result to another function**.

```javascript
callback(result);
```

This lets different callback functions handle the result in different ways.

---

# Example 1: Display on Console

```javascript
function displayConsole(result){
    console.log(result);
}

sum(displayConsole,5,10);
```

Output:

```text
15
```

---

# Example 2: Display on Webpage

```javascript
function displayPage(result){
    document.getElementById("output").textContent = result;
}

sum(displayPage,5,10);
```

Output on webpage:

```text
15
```

Notice that `sum()` didn't change.

Only the callback changed.

---

# Why Use Callbacks?

Without callbacks:

```javascript
let result = x + y;

console.log(result);
```

The function always prints to the console.

With callbacks:

```javascript
callback(result);
```

The caller decides what happens next.

For example:

* Print it
* Display it on a webpage
* Save it to a database
* Send it to an API

This makes the function **more reusable and flexible**.

---

# Real-Life Example

Imagine a teacher grading an exam.

```text
Student submits paper
        ↓
Teacher checks answers
        ↓
Teacher gets score
        ↓
Teacher tells parent
```

The teacher first finishes grading, then **calls** the parent with the result.

That's exactly what callbacks do.

---

# Program Flow

```text
Call sum(displayConsole,1,2)
            ↓
Receive callback and numbers
            ↓
Calculate result
            ↓
result = 3
            ↓
Call callback(result)
            ↓
displayConsole(3)
            ↓
Print 3
```

---

# Callback vs Return

| `return`                       | Callback                                                |
| ------------------------------ | ------------------------------------------------------- |
| Sends value back to the caller | Sends value to another function                         |
| Ends the function immediately  | Lets another function decide what to do next            |
| One direct receiver            | Can perform different actions depending on the callback |

---

# Quick Revision 🚀

| Code                      | Purpose                         |
| ------------------------- | ------------------------------- |
| `callback`                | Stores a function               |
| `callback(result)`        | Executes the callback with data |
| `sum(displayConsole,1,2)` | Passes a callback and arguments |
| `displayConsole(result)`  | Receives and uses the result    |

---

## Easy Tricks 🎯

* **Callback** → Function passed to another function.
* **No parentheses (`displayConsole`)** → Pass the function.
* **With parentheses (`displayConsole()`)** → Call the function immediately.
* **`callback(result)`** → Execute the callback and pass data.
* Callbacks make functions **flexible** because different callback functions can handle the same result differently.

### One-Line Rule

> **A callback is a function passed as an argument to another function, allowing that function to execute it later and optionally pass data (such as a result) to it.**
