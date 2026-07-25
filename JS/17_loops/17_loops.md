# JavaScript `while` & `do...while` Loops – Notes 📝

## What is a Loop?

A **loop** is used to **repeat a block of code** until a condition becomes `false`.

---

# 1. `while` Loop

A **`while` loop** checks the condition **before** running the code.

### Syntax

```javascript
while(condition){
    // code
}
```

### Memory Trick 🧠

> **Check First → Run Later**

If the condition is **false**, the loop **doesn't run even once**.

---

## Example

```javascript
let loggedIn = false;

while(!loggedIn){
    // Ask for username and password
}
```

### Explanation

* `loggedIn = false`
* `!loggedIn` becomes `true`
* Loop starts.
* If username and password are correct:

  * `loggedIn = true`
  * Loop stops.

---

# 2. `do...while` Loop

A **`do...while` loop** runs the code **at least once**, then checks the condition.

### Syntax

```javascript
do{
    // code
}while(condition);
```

### Memory Trick 🧠

> **Run First → Check Later**

Even if the condition is false, the code executes **one time**.

---

## Example

```javascript
let username;

do{
    username = window.prompt("Enter your name");
}while(username === "" || username === null);

console.log(`Hello ${username}`);
```

### Explanation

* Ask the user to enter a name.
* If the user enters:

  * Empty string (`""`) ❌
  * Clicks Cancel (`null`) ❌
* Ask again.
* Stop only when a valid name is entered.

---

# Login Example (`while`)

```javascript
let loggedIn = false;
let username;
let password;

while(!loggedIn){

    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" &&
       password === "myPassword"){

        loggedIn = true;
        console.log("You are logged in!");

    } else {

        console.log("Invalid credentials! Please try again");
    }
}
```

### How it works

```text
loggedIn = false
        ↓
Ask username & password
        ↓
Correct?
     /      \
   Yes       No
    ↓         ↓
loggedIn=true  Try Again
    ↓
Loop Stops
```

---

# `while` vs `do...while`

| `while`                                                    | `do...while`                                         |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| Checks condition first                                     | Runs code first                                      |
| May run **0 times**                                        | Runs **at least 1 time**                             |
| Used when the condition should be checked before execution | Used when the code must execute once before checking |

---

# When to Use

✅ **`while`**

* Login systems
* Waiting for a valid input
* Repeating until a condition changes

✅ **`do...while`**

* User input validation
* Menus
* Games where the first action must happen before checking

---

# Quick Revision 🚀

### `while`

```javascript
while(condition){
    // code
}
```

* ✔️ Checks first
* ✔️ Runs only if condition is true

---

### `do...while`

```javascript
do{
    // code
}while(condition);
```

* ✔️ Runs first
* ✔️ Checks later
* ✔️ Executes at least once

---

## Easy Tricks 🎯

* **`while`** → **Check ➜ Run**
* **`do...while`** → **Run ➜ Check**
* `!` means **NOT** (opposite of a boolean).
* `||` means **OR** (any one condition is true).
* `&&` means **AND** (both conditions must be true).

### One-Line Rule

> **`while` checks the condition before running, while `do...while` always runs once before checking the condition.**
