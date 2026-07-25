# JavaScript Variable Shadowing (Local vs Global) – Notes 📝

## What Happens Here?

```javascript
let x = 3;   // Global Variable

function1();

function function1(){
    let x = 1;
    console.log(x);   // 1
}

function function2(){
    let x = 2;
    console.log(x);   // 2
}
```

Even though there is a **global variable** `x = 3`, each function creates its **own local variable** named `x`.

The **local variable hides (shadows)** the global variable inside that function.

---

# Step-by-Step Explanation

## Step 1: Global Variable

```javascript
let x = 3;
```

A global variable `x` is created.

```text
Global x = 3
```

---

## Step 2: Call `function1()`

```javascript
function1();
```

Inside `function1()`:

```javascript
let x = 1;
```

A **new local variable** is created.

Now JavaScript finds **two variables** named `x`:

```text
Global x = 3

Local x = 1
```

JavaScript always uses the **nearest variable**.

So,

```javascript
console.log(x);
```

prints

```text
1
```

---

## Step 3: What About the Global Variable?

The global variable is **still there**.

```text
Global x = 3
```

It is simply **hidden inside the function**.

Outside the function:

```javascript
console.log(x);
```

Output:

```text
3
```

---

## Step 4: `function2()`

```javascript
function function2(){
    let x = 2;
    console.log(x);
}
```

If you call:

```javascript
function2();
```

Output:

```text
2
```

Again, the local variable is used instead of the global one.

---

# Variable Shadowing

This is called **Variable Shadowing**.

A local variable with the same name **shadows (hides)** the global variable inside that scope.

Example:

```javascript
let x = 3;

function test(){
    let x = 100;
    console.log(x);
}

test();

console.log(x);
```

Output:

```text
100
3
```

The local `x` only exists inside `test()`.

---

# Memory Trick 🧠

Imagine a **father and son** both named **John**.

```text
Global John
       │
   Function
       │
Local John
```

Inside the house (function), if someone says **"John"**, everyone thinks of the **local John**, not the father.

The global John still exists, but he is hidden inside that scope.

---

# Why Does JavaScript Do This?

JavaScript always looks for variables in this order:

1. Local Scope ✅
2. Parent Scope
3. Global Scope

This is called the **Scope Chain**.

---

# Local vs Global Priority

| Variable        | Priority                              |
| --------------- | ------------------------------------- |
| Local Variable  | ✅ Highest                             |
| Global Variable | Used only if no local variable exists |

---

# Quick Revision 🚀

| Code                              | Meaning             |
| --------------------------------- | ------------------- |
| `let x = 3;`                      | Global variable     |
| `let x = 1;`                      | Local variable      |
| Same variable name                | Local hides global  |
| `console.log(x)` inside function  | Prints local value  |
| `console.log(x)` outside function | Prints global value |

---

## Easy Tricks 🎯

* **Local variable wins** over the global variable inside the same function.
* The global variable is **not deleted**—it is only **hidden**.
* If there is **no local variable**, JavaScript uses the global variable.

### One-Line Rule

> **If a local and a global variable have the same name, JavaScript uses the local variable inside that function because it has higher priority in that scope.**
