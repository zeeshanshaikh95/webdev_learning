# JavaScript `Math` Object – Notes 📝

## What is the `Math` Object?

The **`Math` object** is a built-in JavaScript object that provides **mathematical properties and methods**.

You can use it to:

* ➕ Perform calculations
* 🔢 Round numbers
* 📐 Find square roots
* 📊 Find maximum and minimum values
* 📏 Use trigonometric functions
* 🔥 Generate random numbers

> **Note:** `Math` is an object, **not a function**, so you don't create it with `new Math()`.

---

# Syntax

```javascript
Math.method(value);
```

or

```javascript
Math.property
```

Example:

```javascript
Math.sqrt(25);
```

```javascript
Math.PI
```

---

## Memory Trick 🧠

> **Math = JavaScript's Calculator 🧮**

---

# Your Variables

```javascript
let x = 3;
let y = 2;
let z = 1;
```

Initially:

```text
x = 3
y = 2
z = 1
```

---

# `Math.PI`

```javascript
console.log(Math.PI);
```

### What is `Math.PI`?

`Math.PI` is a property that stores the value of **π (Pi)**.

Output:

```text
3.141592653589793
```

Used for:

* Circles
* Radius
* Area
* Circumference

Example:

```javascript
let radius = 5;

let area = Math.PI * radius * radius;

console.log(area);
```

Output:

```text
78.53981633974483
```

---

# `Math.round()`

Rounds to the **nearest whole number**.

### Syntax

```javascript
Math.round(number);
```

Example

```javascript
Math.round(3.4);
```

Output

```text
3
```

---

```javascript
Math.round(3.7);
```

Output

```text
4
```

---

# `Math.floor()`

Always rounds **down**.

### Syntax

```javascript
Math.floor(number);
```

Example

```javascript
Math.floor(3.9);
```

Output

```text
3
```

---

# `Math.ceil()`

Always rounds **up**.

### Syntax

```javascript
Math.ceil(number);
```

Example

```javascript
Math.ceil(3.1);
```

Output

```text
4
```

---

# `Math.trunc()`

Removes the decimal part without rounding.

### Syntax

```javascript
Math.trunc(number);
```

Example

```javascript
Math.trunc(3.99);
```

Output

```text
3
```

---

```javascript
Math.trunc(-3.99);
```

Output

```text
-3
```

---

# `Math.pow()`

Raises a number to a power.

### Syntax

```javascript
Math.pow(base, exponent);
```

Example

```javascript
Math.pow(3,2);
```

Output

```text
9
```

Because

```text
3² = 9
```

---

# `Math.sqrt()`

Returns the square root.

### Syntax

```javascript
Math.sqrt(number);
```

Example

```javascript
Math.sqrt(25);
```

Output

```text
5
```

---

# `Math.log()`

Returns the natural logarithm (base **e**).

### Syntax

```javascript
Math.log(number);
```

Example

```javascript
Math.log(10);
```

Output (approximately)

```text
2.302585092994046
```

---

# `Math.sin()`

Returns the sine of an angle in **radians**.

### Syntax

```javascript
Math.sin(angle);
```

Example

```javascript
Math.sin(Math.PI / 2);
```

Output

```text
1
```

---

# `Math.cos()`

Returns the cosine of an angle.

Example

```javascript
Math.cos(0);
```

Output

```text
1
```

---

# `Math.tan()`

Returns the tangent of an angle.

Example

```javascript
Math.tan(0);
```

Output

```text
0
```

---

## Note on Trigonometric Functions

`Math.sin()`, `Math.cos()`, and `Math.tan()` expect the angle in **radians**, not degrees.

Example:

```javascript
Math.sin(90);      // ❌ 90 is treated as radians
Math.sin(Math.PI/2); // ✅ 90° converted to radians
```

---

# `Math.abs()`

Returns the absolute (positive) value.

### Syntax

```javascript
Math.abs(number);
```

Example

```javascript
Math.abs(-15);
```

Output

```text
15
```

---

```javascript
Math.abs(20);
```

Output

```text
20
```

---

# `Math.sign()`

Returns the sign of a number.

### Syntax

```javascript
Math.sign(number);
```

Examples

```javascript
Math.sign(5);
```

Output

```text
1
```

---

```javascript
Math.sign(-5);
```

Output

```text
-1
```

---

```javascript
Math.sign(0);
```

Output

```text
0
```

---

# `Math.max()`

Returns the largest value.

### Syntax

```javascript
Math.max(num1, num2, ...);
```

Example

```javascript
Math.max(3,2,1);
```

Output

```text
3
```

---

# `Math.min()`

Returns the smallest value.

### Syntax

```javascript
Math.min(num1, num2, ...);
```

Example

```javascript
let min = Math.min(x, y, z);

console.log(min);
```

Output

```text
1
```

---

# Comparison of Rounding Methods

| Method            | Example              | Output |
| ----------------- | -------------------- | -----: |
| `Math.round(3.6)` | Nearest whole number |    `4` |
| `Math.floor(3.6)` | Round down           |    `3` |
| `Math.ceil(3.1)`  | Round up             |    `4` |
| `Math.trunc(3.9)` | Remove decimal       |    `3` |

---

# Program Flow

```text
Numbers
   ↓
Choose Math Method
   ↓
Perform Calculation
   ↓
Return Result
   ↓
Display Output
```

---

# Common Math Methods

| Method/Property | Purpose                       |
| --------------- | ----------------------------- |
| `Math.PI`       | Value of π                    |
| `Math.round()`  | Round to nearest whole number |
| `Math.floor()`  | Round down                    |
| `Math.ceil()`   | Round up                      |
| `Math.trunc()`  | Remove decimal                |
| `Math.pow()`    | Raise to a power              |
| `Math.sqrt()`   | Square root                   |
| `Math.log()`    | Natural logarithm             |
| `Math.sin()`    | Sine (radians)                |
| `Math.cos()`    | Cosine (radians)              |
| `Math.tan()`    | Tangent (radians)             |
| `Math.abs()`    | Absolute value                |
| `Math.sign()`   | Sign of a number              |
| `Math.max()`    | Largest value                 |
| `Math.min()`    | Smallest value                |

---

# Quick Revision 🚀

| Code           | Purpose              |
| -------------- | -------------------- |
| `Math.PI`      | Value of π           |
| `Math.round()` | Nearest whole number |
| `Math.floor()` | Round down           |
| `Math.ceil()`  | Round up             |
| `Math.trunc()` | Remove decimal       |
| `Math.pow()`   | Power                |
| `Math.sqrt()`  | Square root          |
| `Math.log()`   | Natural logarithm    |
| `Math.abs()`   | Positive value       |
| `Math.sign()`  | Check sign           |
| `Math.max()`   | Largest number       |
| `Math.min()`   | Smallest number      |

---

## Easy Tricks 🎯

* **`Math.PI`** → π (3.14159...)
* **`round()`** → Nearest whole number.
* **`floor()`** → Always **down**.
* **`ceil()`** → Always **up**.
* **`trunc()`** → Cut off the decimal.
* **`pow(a, b)`** → `a` raised to the power `b`.
* **`sqrt()`** → Square root.
* **`abs()`** → Always positive.
* **`sign()`** → `-1`, `0`, or `1`.
* **`max()`** → Biggest value.
* **`min()`** → Smallest value.

### One-Line Rule

> **The `Math` object provides built-in properties and methods for performing mathematical calculations such as rounding numbers, finding powers, square roots, trigonometric values, absolute values, and the maximum or minimum of a set of numbers.**
