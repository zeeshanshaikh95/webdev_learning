# JavaScript Arrow Functions (`=>`) – Notes 📝

## What are Arrow Functions?

**Arrow functions** are a **shorter and cleaner way to write function expressions**.

They are mainly used for:

* ✅ Small functions
* ✅ Callback functions
* ✅ One-time functions
* ✅ Methods like `.map()`, `.filter()`, `.reduce()`
* ✅ `setTimeout()`

Arrow functions were introduced in **ES6 (ECMAScript 2015)**.

---

# Syntax

### Normal Function Expression

```javascript
const hello = function(name){
    console.log(`Hello ${name}`);
};
```

---

### Arrow Function

```javascript
const hello = (name) => {
    console.log(`Hello ${name}`);
};
```

Both do the **same thing**.

---

## Memory Trick 🧠

> **Arrow Function = "Replace `function` with `=>`."**

Think of it like:

```text
Normal Function
        ↓
Short Version
        ↓
Arrow Function
```

---

# Your First Example

```javascript
const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};

hello("Bro", 25);
```

---

# Step 1: Create an Arrow Function

```javascript
const hello = (name, age) => {
```

This creates a function and stores it inside the variable:

```text
hello
```

Parameters:

| Parameter | Value   |
| --------- | ------- |
| `name`    | `"Bro"` |
| `age`     | `25`    |

---

# Step 2: Call the Function

```javascript
hello("Bro",25);
```

JavaScript assigns:

```text
name = "Bro"

age = 25
```

---

# Step 3: Print the Values

```javascript
console.log(`Hello ${name}`);
```

Output:

```text
Hello Bro
```

Next,

```javascript
console.log(`You are ${age} years old`);
```

Output:

```text
You are 25 years old
```

---

# Final Output

```text
Hello Bro
You are 25 years old
```

---

# Example 2: `setTimeout()`

```javascript
setTimeout(() => console.log("Hello"),3000);
```

### What Happens?

`setTimeout()` waits **3000 milliseconds (3 seconds)** before running the callback.

JavaScript flow:

```text
Program Starts
       ↓
Wait 3 Seconds
       ↓
Execute Arrow Function
       ↓
Print Hello
```

Output after 3 seconds:

```text
Hello
```

---

# Why Arrow Functions Are Great for Callbacks

Instead of writing:

```javascript
setTimeout(function(){
    console.log("Hello");
},3000);
```

You can simply write:

```javascript
setTimeout(() => console.log("Hello"),3000);
```

Much shorter and easier to read.

---

# Arrow Function with `.map()`

## Original Array

```javascript
const numbers = [1,2,3,4,5];
```

---

## Square Every Number

```javascript
const squares =
numbers.map((element) => Math.pow(element,2));
```

JavaScript automatically runs:

```text
1 → 1

2 → 4

3 → 9

4 → 16

5 → 25
```

New array:

```text
[1,4,9,16,25]
```

---

# Cube Every Number

```javascript
const cubes =
numbers.map((element) => Math.pow(element,3));
```

Output:

```text
[1,8,27,64,125]
```

---

# Arrow Function with `.filter()`

## Even Numbers

```javascript
const evenNums =
numbers.filter((element) => element % 2 === 0);
```

JavaScript checks:

```text
1 → false ❌

2 → true ✅

3 → false ❌

4 → true ✅

5 → false ❌
```

Output:

```text
[2,4]
```

---

## Odd Numbers

```javascript
const oddNums =
numbers.filter((element) => element % 2 !== 0);
```

Output:

```text
[1,3,5]
```

---

# Arrow Function with `.reduce()`

```javascript
const total =
numbers.reduce(
(accumulator, element) =>
accumulator + element
);
```

Let's understand it.

### Initial Array

```text
[1,2,3,4,5]
```

---

### Iteration 1

```text
accumulator = 1

element = 2
```

Calculation:

```text
1 + 2 = 3
```

---

### Iteration 2

```text
3 + 3 = 6
```

---

### Iteration 3

```text
6 + 4 = 10
```

---

### Iteration 4

```text
10 + 5 = 15
```

Final Result:

```text
15
```

Output:

```javascript
console.log(total);
```

```text
15
```

---

# Arrow Function Syntax Rules

## 1. No Parameters

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

## 2. One Parameter

Parentheses are optional.

```javascript
const square = number => number * number;
```

or

```javascript
const square = (number) => number * number;
```

Both are correct.

---

## 3. Multiple Parameters

Parentheses are required.

```javascript
const add = (a,b) => a + b;
```

---

## 4. One Statement

Braces `{}` and `return` can be omitted.

Normal:

```javascript
const square = (x) => {
    return x * x;
};
```

Short version:

```javascript
const square = x => x * x;
```

JavaScript automatically returns the expression.

---

## 5. Multiple Statements

Use braces `{}`.

```javascript
const hello = (name) => {
    console.log(name);
    console.log("Welcome");
};
```

---

# Normal Function vs Arrow Function

## Normal Function

```javascript
const square = function(x){
    return x * x;
};
```

---

## Arrow Function

```javascript
const square = x => x * x;
```

Same output.

---

# Visual Flow

```text
Array
      ↓
Arrow Function
      ↓
Process Element
      ↓
Return Result
      ↓
New Array / Final Value
```

---

# Real-Life Example

Imagine a teacher increasing every student's marks by 5.

Marks:

```text
50
60
70
```

Using `.map()` with an arrow function:

```javascript
const updated = marks.map(mark => mark + 5);
```

Result:

```text
55
65
75
```

---

# Function Expression vs Arrow Function

| Function Expression         | Arrow Function                                                     |
| --------------------------- | ------------------------------------------------------------------ |
| `function(){}`              | `()=>{}`                                                           |
| Longer syntax               | Shorter syntax                                                     |
| Good for reusable functions | Great for short callbacks                                          |
| Has its own `this`          | Does **not** have its own `this` (inherits from surrounding scope) |

> **Note:** One important difference is that arrow functions **do not have their own `this`**. They inherit `this` from the surrounding scope. For beginners, you'll encounter this more when working with objects and classes.

---

# Program Flow

```text
Create Arrow Function
          ↓
Pass as Callback
          ↓
JavaScript Calls It
          ↓
Process Data
          ↓
Return Result
```

---

# When Should You Use Arrow Functions?

Arrow functions are commonly used with:

* `setTimeout()`
* `setInterval()`
* `.map()`
* `.filter()`
* `.reduce()`
* Event listeners
* Small helper functions

---

# Quick Revision 🚀

| Code                      | Purpose                        |
| ------------------------- | ------------------------------ |
| `() => {}`                | Arrow function                 |
| `x => x * x`              | One parameter, implicit return |
| `(a,b) => a+b`            | Multiple parameters            |
| `() => console.log("Hi")` | No parameters                  |
| `.map(x => ...)`          | Transform elements             |
| `.filter(x => ...)`       | Filter elements                |
| `.reduce((a,b) => ...)`   | Reduce to one value            |

---

## Easy Tricks 🎯

* **Replace `function` with `=>`** for a shorter function expression.
* **One parameter** → Parentheses are optional.
* **Multiple parameters** → Parentheses are required.
* **One expression** → `return` is automatic.
* **Multiple statements** → Use `{}` and write `return` yourself if needed.
* Arrow functions are perfect for **callbacks** and **simple functions used once**.

### One-Line Rule

> **Arrow functions (`=>`) are a shorter syntax for function expressions, making callback functions cleaner and easier to write, especially with methods like `.map()`, `.filter()`, `.reduce()`, and functions like `setTimeout()`.**
