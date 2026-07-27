# JavaScript Function Expressions – Notes 📝

## What is a Function Expression?

A **function expression** is a way of creating a function and **storing it inside a variable**.

Since functions are **first-class objects** in JavaScript, they can be:

* ✅ Stored in variables
* ✅ Passed as arguments
* ✅ Returned from other functions
* ✅ Stored in arrays or objects

Unlike a **function declaration**, a function expression is treated like a value.

---

# Syntax

## Function Declaration

```javascript
function hello(){
    console.log("Hello");
}
```

---

## Function Expression

```javascript
const hello = function(){
    console.log("Hello");
};
```

Call it:

```javascript
hello();
```

Output:

```text
Hello
```

---

# Memory Trick 🧠

> **Function Declaration = Create a function directly.**
>
> **Function Expression = Store a function inside a variable.**

Think of it like this:

```text
Declaration

Function
   ↓
hello()
```

```text
Expression

Variable
   ↓
Stores Function
```

---

# Function Declaration

```javascript
function hello(){
    console.log("Hello");
}
```

### Explanation

JavaScript creates a function named:

```text
hello
```

Later we can call it:

```javascript
hello();
```

Output:

```text
Hello
```

---

# Function Expression

```javascript
const hello = function(){
    console.log("Hello");
};
```

### Explanation

Step 1

Create an anonymous function.

```javascript
function(){
    console.log("Hello");
}
```

Notice:

There is **no function name**.

This is called an **anonymous function**.

---

Step 2

Store it inside the variable.

```javascript
const hello =
function(){
    console.log("Hello");
};
```

Now:

```text
hello
      ↓
Anonymous Function
```

Calling:

```javascript
hello();
```

Output:

```text
Hello
```

---

# Why End with a Semicolon?

Function expressions are assigned to variables.

```javascript
const hello = function(){
    console.log("Hello");
};
```

Think of it as:

```javascript
const x = 10;
```

Since it's a variable assignment, we end it with:

```javascript
;
```

---

# Example 1: `setTimeout()`

```javascript
setTimeout(function(){
    console.log("Hello");
}, 3000);
```

### What is `setTimeout()`?

`setTimeout()` waits for a specified amount of time and then executes a callback function.

Syntax:

```javascript
setTimeout(callback, delay);
```

| Parameter  | Meaning                   |
| ---------- | ------------------------- |
| `callback` | Function to execute later |
| `delay`    | Time in milliseconds      |

---

### Your Example

```javascript
setTimeout(function(){
    console.log("Hello");
},3000);
```

JavaScript works like this:

```text
Start Program
      ↓
Wait 3000 ms (3 seconds)
      ↓
Run Callback Function
      ↓
Print "Hello"
```

Output after 3 seconds:

```text
Hello
```

This is an example of a **callback function**, because the function is passed as an argument and executed later.

---

# Example 2: `.map()`

```javascript
const numbers = [1,2,3,4,5];

const squares = numbers.map(function(element){
    return Math.pow(element,2);
});
```

Instead of writing:

```javascript
function square(element){
    return Math.pow(element,2);
}

const squares = numbers.map(square);
```

you write the function directly inside `.map()`.

---

### JavaScript Automatically Calls

```javascript
function(element){
    return Math.pow(element,2);
}
```

for every element:

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

# Example 3: `.filter()`

```javascript
const evenNums = numbers.filter(function(element){
    return element % 2 == 0;
});
```

JavaScript automatically checks:

```text
1 → false ❌

2 → true ✅

3 → false ❌

4 → true ✅

5 → false ❌
```

Result:

```text
[2,4]
```

---

# Why Use Function Expressions?

Instead of creating a separate function:

```javascript
function isEven(element){
    return element % 2 === 0;
}

const even = numbers.filter(isEven);
```

You can write:

```javascript
const even = numbers.filter(function(element){
    return element % 2 === 0;
});
```

Everything is in one place.

This is useful when the function is only needed once.

---

# Function Declaration vs Function Expression

## Function Declaration

```javascript
function greet(){
    console.log("Hi");
}
```

Call:

```javascript
greet();
```

---

## Function Expression

```javascript
const greet = function(){
    console.log("Hi");
};

greet();
```

Both produce:

```text
Hi
```

---

# Major Difference: Hoisting

## Function Declaration

```javascript
sayHello();

function sayHello(){
    console.log("Hello");
}
```

✅ Works.

JavaScript **hoists** function declarations.

---

## Function Expression

```javascript
sayHello();

const sayHello = function(){
    console.log("Hello");
};
```

❌ Error:

```text
ReferenceError:
Cannot access 'sayHello' before initialization
```

Because only the variable declaration is hoisted, **not** its assigned function value.

---

# Visual Flow

```text
Function Expression

Anonymous Function
        ↓
Store in Variable
        ↓
Call Variable
        ↓
Execute Function
```

---

# When Should You Use Function Expressions?

They are commonly used with:

* `setTimeout()`
* `setInterval()`
* `.map()`
* `.filter()`
* `.reduce()`
* Event listeners (`addEventListener()`)
* Callbacks

---

# Program Flow

```text
Create Function Expression
          ↓
Store in Variable
          ↓
Pass as Callback (optional)
          ↓
Function Called
          ↓
Code Executes
```

---

# Function Declaration vs Function Expression

| Feature                  | Function Declaration | Function Expression         |
| ------------------------ | -------------------- | --------------------------- |
| Has a name               | ✅ Yes                | ❌ Usually anonymous         |
| Stored in variable       | ❌ No                 | ✅ Yes                       |
| Can be passed as a value | ✅ Yes                | ✅ Yes                       |
| Hoisted                  | ✅ Yes                | ❌ No                        |
| Ends with `;`            | ❌ No                 | ✅ Yes (variable assignment) |

---

# Real-Life Example

Imagine ordering food online.

```text
Restaurant receives order
        ↓
Food is prepared
        ↓
Delivery person arrives
        ↓
Calls you
```

The delivery person's call is like a **callback function**. You don't call them—they call you **after** the work is done.

---

# Quick Revision 🚀

| Code                            | Purpose                      |
| ------------------------------- | ---------------------------- |
| `function hello(){}`            | Function declaration         |
| `const hello = function(){}`    | Function expression          |
| `setTimeout(function(){},3000)` | Run callback after 3 seconds |
| `array.map(function(){})`       | Transform every element      |
| `array.filter(function(){})`    | Keep matching elements       |
| Anonymous function              | Function without a name      |

---

## Easy Tricks 🎯

* **Function Declaration** → Define a reusable named function.
* **Function Expression** → Store a function in a variable.
* **Anonymous Function** → A function without a name.
* Use function expressions when the function is **used only once** (callbacks).
* Function declarations are **hoisted**; function expressions are **not**.

### One-Line Rule

> **A function expression creates a function as a value, usually stores it in a variable, and is commonly used as a callback for methods like `setTimeout()`, `.map()`, and `.filter()`.**
