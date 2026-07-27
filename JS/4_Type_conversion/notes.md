# JavaScript Type Conversion & `const` – Notes 📝

## What is Type Conversion?

**Type Conversion** means **changing the data type of a value into another data type**.

JavaScript can convert values between:

* 🔤 String → Number
* 🔢 Number → String
* ✅ Boolean → Number
* 🔤 String → Boolean
* 🔢 Number → Boolean

> **Simple Definition:**
>
> **Type Conversion is the process of converting one data type into another.**

---

# Why Do We Need Type Conversion?

User input from:

```javascript
window.prompt()
```

or

```javascript
<input>
```

is **always a string**.

Example:

```javascript
let age = window.prompt("Enter your age");
```

If the user enters:

```text
20
```

JavaScript stores it as:

```text
"20"
```

**Not**

```text
20
```

---

# Memory Trick 🧠

> **User Input = String by Default**

Remember:

```text
Keyboard
   ↓
Input
   ↓
String
```

If you want to perform calculations, convert it to a **Number** first.

---

# Example 1: Without Type Conversion

```javascript
let age = window.prompt("Enter your age");

age += 1;

console.log(age);
```

Suppose the user enters:

```text
20
```

JavaScript stores:

```text
age = "20"
```

Now:

```javascript
age += 1;
```

becomes:

```text
"20" + 1

↓

"201"
```

Output:

```text
201
```

This is called **string concatenation**, not addition.

---

# Example 2: With Type Conversion

```javascript
let age = window.prompt("Enter your age");

age = Number(age);

age += 1;

console.log(age);
```

User enters:

```text
20
```

Step 1

```text
"20"
```

↓

```javascript
Number("20")
```

↓

```text
20
```

Now

```javascript
20 + 1
```

↓

```text
21
```

Output

```text
21
```

---

# Number()

## Syntax

```javascript
Number(value);
```

Converts a value into a number.

Example:

```javascript
Number("25");
```

Output:

```text
25
```

---

# String()

## Syntax

```javascript
String(value);
```

Converts a value into a string.

Example:

```javascript
String(100);
```

Output:

```text
"100"
```

---

# Boolean()

## Syntax

```javascript
Boolean(value);
```

Converts a value into `true` or `false`.

---

# Example 3: `"pizza"`

```javascript
let x1 = "pizza";
let y1 = "pizza";
let z1 = "pizza";

x1 = Number(x1);
y1 = String(y1);
z1 = Boolean(z1);
```

---

## Number("pizza")

```javascript
Number("pizza")
```

JavaScript cannot convert `"pizza"` into a number.

Output:

```text
NaN
```

`NaN` means:

> **Not a Number**

Output:

```text
NaN "number"
```

> **Note:** `typeof NaN` is `"number"` in JavaScript, even though it represents an invalid numeric result.

---

## String("pizza")

Already a string.

Output:

```text
pizza
```

Type:

```text
string
```

---

## Boolean("pizza")

Since `"pizza"` is **not empty**, JavaScript treats it as **true**.

Output:

```text
true
```

---

# Example 4: `"0"`

```javascript
let x2 = "0";
let y2 = "0";
let z2 = "0";
```

---

## Number("0")

```javascript
Number("0")
```

Output:

```text
0
```

---

## String("0")

Already a string.

Output:

```text
"0"
```

---

## Boolean("0")

```javascript
Boolean("0")
```

Output:

```text
true
```

⚠️ Many beginners expect `false`, but **any non-empty string is truthy**, including `"0"`.

---

# Example 5: Empty String

```javascript
let x3 = "";
let y3 = "";
let z3 = "";
```

---

## Number("")

```javascript
Number("")
```

Output:

```text
0
```

JavaScript converts an empty string to **0**.

---

## String("")

Output:

```text
""
```

Still an empty string.

---

## Boolean("")

```javascript
Boolean("")
```

Output:

```text
false
```

An **empty string** is considered **falsy**.

---

# Conversion Summary

| Original Value | `Number()` | `String()` | `Boolean()` |
| -------------- | ---------: | ---------- | ----------- |
| `"25"`         |       `25` | `"25"`     | `true`      |
| `"0"`          |        `0` | `"0"`      | `true`      |
| `""`           |        `0` | `""`       | `false`     |
| `"pizza"`      |      `NaN` | `"pizza"`  | `true`      |

---

# Truthy vs Falsy 🧠

## Truthy Values

These become `true` when converted to Boolean.

```text
"pizza"
"0"
"hello"
25
-5
[]
{}
```

---

## Falsy Values

These become `false`.

```text
false
0
""
null
undefined
NaN
```

---

# What is `const`?

`const` is used to declare a variable **whose value cannot be reassigned**.

Syntax:

```javascript
const PI = 3.14159;
```

After this:

```javascript
PI = 5;
```

❌ Error

Because `const` values cannot be reassigned.

---

# Why is `PI` Written in Capital Letters?

```javascript
const PI = 3.14159;
```

Using **UPPERCASE** for constants is a common JavaScript convention.

It tells other developers:

> "This value should never change."

Examples:

```javascript
const PI = 3.14159;
const MAX_USERS = 100;
const TAX_RATE = 0.18;
```

---

# Example: Circumference Calculator

## Code

```javascript
const PI = 3.14159;

let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){

    radius = document.getElementById("myText").value;

    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent =
    circumference + " cm";
}
```

---

# Step-by-Step Execution

### HTML Input

Suppose the user types:

```text
5
```

---

### Step 1

```javascript
radius =
document.getElementById("myText").value;
```

Input value:

```text
"5"
```

Notice it's a **string**.

---

### Step 2

```javascript
radius = Number(radius);
```

Now:

```text
5
```

becomes a **number**.

---

### Step 3

Formula

```javascript
circumference = 2 * PI * radius;
```

Calculation:

```text
2 × 3.14159 × 5

↓

31.4159
```

---

### Step 4

```javascript
document.getElementById("myH3").textContent =
circumference + " cm";
```

Webpage displays:

```text
31.4159 cm
```

---

# Program Flow

```text
User Enters Radius
        │
        ▼
Input is a String
        │
        ▼
Number(radius)
        │
        ▼
Calculate Circumference
        │
        ▼
Update textContent
        │
        ▼
Display Result
```

---

# Visual Representation

```text
User Input

"5"

↓

Number()

↓

5

↓

2 × π × r

↓

31.4159

↓

Display
```

---

# Real-Life Example

Imagine a calculator app.

You type:

```text
10
```

The keyboard sends:

```text
"10"
```

JavaScript converts it:

```javascript
Number("10")
```

↓

```text
10
```

Now it can calculate:

```text
10 + 5 = 15
```

Without conversion:

```text
"10" + 5

↓

"105"
```

---

# Important Notes ⚠️

* User input from `prompt()` and `<input>` is always a **string**.
* Use `Number()` before doing arithmetic.
* `NaN` means **Not a Number**.
* `Boolean("")` is `false`.
* Any **non-empty string** (even `"0"`) is `true`.
* Use `const` for values that should never be reassigned.

---

# Quick Revision 🚀

| Code                 | Purpose                         |
| -------------------- | ------------------------------- |
| `Number(value)`      | Convert to number               |
| `String(value)`      | Convert to string               |
| `Boolean(value)`     | Convert to boolean              |
| `NaN`                | Invalid numeric result          |
| `const PI = 3.14159` | Constant value                  |
| `.value`             | Read input from an HTML element |
| `.textContent`       | Update text on the webpage      |

---

## Easy Tricks 🎯

* **User input = String** (always).
* **Need math?** → Use `Number()`.
* **Need text?** → Use `String()`.
* **Need true/false?** → Use `Boolean()`.
* **Empty string (`""`)** → `false`.
* **Non-empty string (`"pizza"`, `"0"`)** → `true`.
* Use **`const`** for values that shouldn't be reassigned.

---

# Number vs String vs Boolean

| Conversion         | Example   | Output  |
| ------------------ | --------- | ------- |
| `Number("25")`     | `"25"`    | `25`    |
| `Number("pizza")`  | `"pizza"` | `NaN`   |
| `String(25)`       | `25`      | `"25"`  |
| `Boolean("hello")` | `"hello"` | `true`  |
| `Boolean("")`      | `""`      | `false` |

### One-Line Rule

> **Type conversion changes a value from one data type to another using `Number()`, `String()`, or `Boolean()`, while `const` is used for variables whose values should not be reassigned.**
