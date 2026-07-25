# JavaScript Variable Scope – Notes 📝

## What is Variable Scope?

**Variable scope** means **where a variable can be accessed (used) in a program**.

There are **2 types of scope**:

* **Local Scope**
* **Global Scope**

---

# 1. Local Scope

A **local variable** is declared **inside a function or block**. It can **only be used inside that function**.

### Example

```javascript
function function1(){
    let x = 1;
    console.log(x);
}

function1();
```

Output:

```text
1
```

Here, `x` exists **only inside `function1()`**.

---

# 2. Global Scope

A **global variable** is declared **outside all functions**. It can be accessed **from anywhere** in the program.

### Example

```javascript
let x = 10;

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}
```

Output:

```text
10
10
```

Here, `x` is available to both functions.

---

# Your Code Explained

```javascript
function1();

function function1(){
    let x = 1;
    console.log(y);
}

function function2(){
    let y = 2;
    console.log(x);
}
```

### Problem ❌

* `x` is **local to `function1()`**.
* `y` is **local to `function2()`**.

So:

```javascript
console.log(y);
```

inside `function1()` gives:

```text
ReferenceError: y is not defined
```

Similarly,

```javascript
console.log(x);
```

inside `function2()` also gives:

```text
ReferenceError: x is not defined
```

Because each variable is only visible inside its own function.

---

# Local vs Global

| Local Variable                       | Global Variable                |
| ------------------------------------ | ------------------------------ |
| Declared inside a function           | Declared outside all functions |
| Accessible only inside that function | Accessible anywhere            |
| Exists only while the function runs  | Exists until the program ends  |

---

# Memory Trick 🧠

Think of a **house** 🏠.

* **Global Variable** = Living Room → Everyone in the house can use it.
* **Local Variable** = Bedroom → Only the person inside that room can use it.

---

# Quick Revision 🚀

| Scope  | Accessible Where?              |
| ------ | ------------------------------ |
| Local  | Only inside its function/block |
| Global | Anywhere in the program        |

---

## Easy Tricks 🎯

* **Local** → **Inside** a function only.
* **Global** → **Outside** all functions.
* Variables created with `let` inside a function **cannot be accessed outside** that function.

### One-Line Rule

> **Variable scope determines where a variable can be accessed: local variables stay inside their function, while global variables can be used throughout the program.**
