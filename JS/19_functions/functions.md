# JavaScript Functions – Notes 📝

## What is a Function?

A **function** is a **block of reusable code**. You write the code **once** and **call** it whenever you need it.

---

## Syntax

```javascript
function functionName(parameters){
    // code
}
```

To run the function:

```javascript
functionName(arguments);
```

### Memory Trick 🧠

> **Function = Write Once → Use Many Times**

```text
Create Function
      ↓
Call Function
      ↓
Code Executes
```

---

# Example 1: Function with Parameters

```javascript
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}
```

### Function Call

```javascript
happyBirthday("Bro", 20);
happyBirthday("Sister", 30);
```

### Explanation

* `username` and `age` are **parameters**.
* `"Bro"` and `20` are **arguments** passed to the function.

Output:

```text
Happy birthday dear Bro!
You are 20 years old

Happy birthday dear Sister!
You are 30 years old
```

---

# Parameters vs Arguments

| Parameter                            | Argument                             |
| ------------------------------------ | ------------------------------------ |
| Variables in the function definition | Actual values passed to the function |
| `username`, `age`                    | `"Bro"`, `20`                        |

**Memory Trick:**

* **Parameter = Placeholder**
* **Argument = Actual Value**

---

# Example 2: Function with `return`

```javascript
function addNumbers(num1, num2){
    return num1 + num2;
}

let sum = addNumbers(5, 10);
console.log(sum);
```

### Explanation

```text
5 + 10 = 15
```

Output:

```text
15
```

### `return`

* Sends a value back to where the function was called.
* Ends the function immediately.

**Memory Trick:**

> **`return` = Give Back the Result**

---

# Example 3: Check Even Number

```javascript
function isEven(num){
    return num % 2 == 0 ? true : false;
}

console.log(isEven(4));
```

### Explanation

```text
4 % 2 = 0
0 == 0 ✅

Result → true
```

Output:

```text
true
```

> **Shortcut:** You can simply write:

```javascript
function isEven(num){
    return num % 2 === 0;
}
```

---

# Example 4: Validate Email

```javascript
function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("user@example.com"));
```

### Explanation

* Checks if the email contains `"@"`.
* If yes → `true`
* Otherwise → `false`

Output:

```text
true
```

> **Shortcut:** You can simply write:

```javascript
function isValidEmail(email){
    return email.includes("@");
}
```

---

# When to Use Functions

✅ Reuse code multiple times.

✅ Make programs shorter and organized.

✅ Avoid writing the same code again and again.

---

# Quick Revision 🚀

| Keyword/Concept | Purpose                           |
| --------------- | --------------------------------- |
| `function`      | Create a function                 |
| Parameters      | Inputs in the function definition |
| Arguments       | Values passed to the function     |
| `return`        | Send a value back                 |
| Function Call   | Execute the function              |

---

## Easy Tricks 🎯

* **Function** → Reusable block of code.
* **Parameters** → Placeholders.
* **Arguments** → Real values.
* **`return`** → Gives the result back.
* **Call Function** → Runs the code.

### One-Line Rule

> **A function is a reusable block of code that runs when called and can take inputs (parameters) and return a result.**
