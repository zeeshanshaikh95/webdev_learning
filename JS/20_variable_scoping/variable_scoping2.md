# JavaScript Variable Scope (Global Variable) – Notes 📝

## What is a Global Variable?

A **global variable** is a variable declared **outside all functions**. It can be **accessed from anywhere** in the program.

---

## Example

```javascript
let x = 3;   // Global Variable

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}

function2();
```

### Explanation

* `x` is declared **outside** the functions.
* Therefore, both `function1()` and `function2()` can use it.

When `function2()` is called:

```javascript
function2();
```

It prints:

```text
3
```

If you call:

```javascript
function1();
function2();
```

Output:

```text
3
3
```

---

## How it Works

```text
Global Variable (x = 3)
        │
   ┌────┴────┐
   │         │
function1() function2()
   │         │
console.log(x)
```

Both functions can access the same variable.

---

## Local vs Global

| Local Variable                       | Global Variable                |
| ------------------------------------ | ------------------------------ |
| Declared inside a function           | Declared outside all functions |
| Accessible only inside that function | Accessible everywhere          |
| Destroyed after the function ends    | Exists throughout the program  |

---

## Memory Trick 🧠

Think of a **school** 🏫

* **Global Variable** = **School Notice Board** → Everyone can read it.
* **Local Variable** = **Classroom Whiteboard** → Only students in that classroom can use it.

---

## When to Use

✅ Use **global variables** for values that need to be shared across multiple functions.

❌ Avoid creating too many global variables because:

* They can be changed from anywhere.
* They make debugging harder.
* They may cause naming conflicts.

---

# Quick Revision 🚀

| Scope  | Accessible Where?                  |
| ------ | ---------------------------------- |
| Local  | Inside its own function/block only |
| Global | Anywhere in the program            |

---

## Easy Tricks 🎯

* **Inside function** → **Local Variable**
* **Outside function** → **Global Variable**
* All functions can access a **global variable**.
* A **local variable** cannot be accessed outside its function.

### One-Line Rule

> **A global variable is declared outside all functions and can be accessed from anywhere in the program.**
