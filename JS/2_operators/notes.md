# JavaScript Arithmetic Operators – Notes 📝

## What are Arithmetic Operators?

**Arithmetic operators** are symbols used to perform **mathematical calculations** on values or variables.

For example:

```javascript
let x = 10 + 5;
```

Here:

* `10` and `5` are **operands** (values).
* `+` is the **operator**.

Result:

```text
15
```

---

# Syntax

```javascript
operand operator operand
```

Example:

```javascript
let result = 20 - 5;
```

---

## Memory Trick 🧠

> **Operands = Numbers**
>
> **Operators = Actions**

Think of basic math:

```text
5 + 3

5 and 3 → Operands

+ → Operator
```

---

# Your Code

```javascript
let students = 30;
```

Initially:

```text
students = 30
```

---

# Addition Operator (`+`)

```javascript
students = students + 1;
```

Calculation:

```text
30 + 1

↓

31
```

Now:

```text
students = 31
```

---

# Subtraction Operator (`-`)

```javascript
students = students - 1;
```

Calculation:

```text
30 - 1

↓

29
```

---

# Multiplication Operator (`*`)

```javascript
students = students * 2;
```

Calculation:

```text
30 × 2

↓

60
```

---

# Division Operator (`/`)

```javascript
students = students / 2;
```

Calculation:

```text
30 ÷ 2

↓

15
```

---

# Exponent Operator (`**`)

The exponent operator raises a number to a power.

```javascript
students = students ** 2;
```

Calculation:

```text
30²

↓

900
```

Another example:

```javascript
console.log(2 ** 3);
```

Output:

```text
8
```

Because:

```text
2 × 2 × 2 = 8
```

---

# Modulus Operator (`%`)

The modulus operator returns the **remainder** after division.

```javascript
let extraStudents = students % 3;
```

Example:

```text
30 ÷ 3

↓

10 remainder 0
```

Output:

```text
0
```

Another example:

```javascript
console.log(10 % 3);
```

Calculation:

```text
10 ÷ 3

↓

3 remainder 1
```

Output:

```text
1
```

---

## Why is `%` Useful?

Checking if a number is **even**:

```javascript
if(number % 2 === 0){
    console.log("Even");
}
```

Checking if a number is **odd**:

```javascript
if(number % 2 !== 0){
    console.log("Odd");
}
```

---

# Printing the Value

```javascript
console.log(students);
```

Displays the current value of `students`.

---

# Augmented Assignment Operators

Instead of writing:

```javascript
students = students + 1;
```

You can write:

```javascript
students += 1;
```

Both do the same thing.

---

## `+=`

```javascript
students += 1;
```

Equivalent to:

```javascript
students = students + 1;
```

---

## `-=`

```javascript
students -= 1;
```

Equivalent to:

```javascript
students = students - 1;
```

---

## `*=`

```javascript
students *= 2;
```

Equivalent to:

```javascript
students = students * 2;
```

---

## `/=`

```javascript
students /= 2;
```

Equivalent to:

```javascript
students = students / 2;
```

---

## `**=`

```javascript
students **= 2;
```

Equivalent to:

```javascript
students = students ** 2;
```

---

## `%=`

```javascript
students %= 2;
```

Equivalent to:

```javascript
students = students % 2;
```

---

# Increment Operator (`++`)

```javascript
students++;
```

This increases the value by **1**.

Example:

```text
30

↓

31
```

Equivalent to:

```javascript
students = students + 1;
```

or

```javascript
students += 1;
```

---

# Decrement Operator (`--`)

```javascript
students--;
```

This decreases the value by **1**.

Example:

```text
30

↓

29
```

Equivalent to:

```javascript
students = students - 1;
```

---

# Important Note

In your code:

```javascript
students++;
students--;
```

Execution:

```text
students = 30

↓

students++

↓

31

↓

students--

↓

30
```

So the final value is still:

```text
30
```

---

# Operator Precedence

When JavaScript evaluates an expression, it follows a specific order.

```text
1. Parentheses ()
2. Exponents **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -
```

---

# Your Example

```javascript
let result = 1 + 2 * 3 + 4 ** 2;
```

Let's solve it step by step.

---

## Step 1: Exponent

```text
4²

↓

16
```

Expression becomes:

```text
1 + 2 × 3 + 16
```

---

## Step 2: Multiplication

```text
2 × 3

↓

6
```

Expression becomes:

```text
1 + 6 + 16
```

---

## Step 3: Addition

```text
1 + 6

↓

7
```

Expression becomes:

```text
7 + 16
```

---

## Step 4: Final Answer

```text
23
```

So:

```javascript
console.log(result);
```

Output:

```text
23
```

---

# Another Example

```javascript
let answer = (1 + 2) * 3;
```

Without parentheses:

```text
1 + 2 × 3

↓

7
```

With parentheses:

```text
(1 + 2) × 3

↓

3 × 3

↓

9
```

Parentheses are evaluated first.

---

# Program Flow

```text
students = 30
      ↓
Apply Arithmetic Operator
      ↓
New Value Generated
      ↓
Store Back into students
      ↓
Print Result
```

---

# Arithmetic Operators Summary

| Operator | Meaning        | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `5 + 2`  | `7`    |
| `-`      | Subtraction    | `5 - 2`  | `3`    |
| `*`      | Multiplication | `5 * 2`  | `10`   |
| `/`      | Division       | `10 / 2` | `5`    |
| `**`     | Exponent       | `2 ** 3` | `8`    |
| `%`      | Remainder      | `10 % 3` | `1`    |

---

# Assignment Operator Shortcuts

| Shortcut | Equivalent       |
| -------- | ---------------- |
| `+=`     | `x = x + value`  |
| `-=`     | `x = x - value`  |
| `*=`     | `x = x * value`  |
| `/=`     | `x = x / value`  |
| `**=`    | `x = x ** value` |
| `%=`     | `x = x % value`  |

---

# Quick Revision 🚀

| Code | Purpose             |
| ---- | ------------------- |
| `+`  | Add                 |
| `-`  | Subtract            |
| `*`  | Multiply            |
| `/`  | Divide              |
| `**` | Raise to a power    |
| `%`  | Get remainder       |
| `++` | Increase by 1       |
| `--` | Decrease by 1       |
| `+=` | Add and assign      |
| `-=` | Subtract and assign |

---

## Easy Tricks 🎯

* **`+`** → Add numbers.
* **`-`** → Subtract numbers.
* **`*`** → Multiply numbers.
* **`/`** → Divide numbers.
* **`**`** → Power (square, cube, etc.).
* **`%`** → Remainder after division.
* **`++`** → Increase by 1.
* **`--`** → Decrease by 1.
* Use **augmented assignment operators** (`+=`, `-=`, etc.) to write shorter and cleaner code.
* Remember **PEMDAS** (Parentheses, Exponents, Multiplication/Division/Modulus, Addition/Subtraction) for operator precedence.

### One-Line Rule

> **Arithmetic operators perform mathematical operations on values or variables, while JavaScript evaluates expressions using operator precedence (Parentheses → Exponents → Multiplication/Division/Modulus → Addition/Subtraction).**
