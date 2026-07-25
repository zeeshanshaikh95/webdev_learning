# JavaScript Random Number Generator 🎲 – Notes 📝

## What is a Random Number Generator?

A **Random Number Generator (RNG)** creates a random number each time the program runs.

In JavaScript, we use:

```javascript
Math.random()
```

to generate random numbers.

---

# What is `Math.random()`?

`Math.random()` generates a **pseudo-random decimal number** that is:

* ✅ Greater than or equal to `0`
* ✅ Less than `1`

Range:

```text
0 ≤ Math.random() < 1
```

Example outputs:

```text
0.245673

0.987654

0.001245

0.563421
```

Notice:

* It **never returns 1**.
* It always returns a **decimal (floating-point) number**.

---

## Syntax

```javascript
Math.random();
```

Example:

```javascript
console.log(Math.random());
```

Possible Output:

```text
0.736421
```

---

## Memory Trick 🧠

> **`Math.random()` = Random decimal between 0 and 1 (excluding 1).**

---

# Step 1: Select HTML Elements

```javascript
const myButton = document.getElementById("myButton");

const label1 = document.getElementById("label1");

const label2 = document.getElementById("label2");

const label3 = document.getElementById("label3");
```

### Explanation

| Variable   | Purpose                              |
| ---------- | ------------------------------------ |
| `myButton` | Button that generates random numbers |
| `label1`   | Displays first number                |
| `label2`   | Displays second number               |
| `label3`   | Displays third number                |

---

# Step 2: Define Minimum and Maximum

```javascript
const min = 1;
const max = 6;
```

### Meaning

You want numbers from:

```text
1
2
3
4
5
6
```

Like rolling a dice 🎲.

---

# Step 3: Create Variables

```javascript
let randomNum1;
let randomNum2;
let randomNum3;
```

These variables will store the generated random numbers.

---

# Step 4: Button Click Event

```javascript
myButton.onclick = function(){
```

Whenever the button is clicked:

```text
Click Button
      ↓
Generate 3 Random Numbers
      ↓
Display Them
```

---

# Step 5: Generate a Random Number

```javascript
randomNum1 =
Math.floor(Math.random() * max) + min;
```

Let's understand this **step by step**.

---

## Step A: `Math.random()`

Suppose JavaScript generates:

```text
0.63
```

---

## Step B: Multiply by `max`

```javascript
Math.random() * max
```

Since

```javascript
max = 6
```

Result:

```text
0.63 × 6

↓

3.78
```

Possible range:

```text
0.00

↓

5.99
```

---

## Step C: `Math.floor()`

```javascript
Math.floor(3.78)
```

Output:

```text
3
```

### What is `Math.floor()`?

It removes the decimal part and rounds **down** to the nearest whole number.

Examples:

```javascript
Math.floor(5.9)
```

Output:

```text
5
```

---

```javascript
Math.floor(2.2)
```

Output:

```text
2
```

---

So now the possible numbers are:

```text
0
1
2
3
4
5
```

---

## Step D: Add `min`

```javascript
+ min
```

Since

```javascript
min = 1
```

Numbers become:

```text
1
2
3
4
5
6
```

Exactly what we want!

---

# Formula Explained

```javascript
Math.floor(Math.random() * max) + min;
```

For:

```javascript
min = 1
max = 6
```

The formula generates:

```text
1 → 6
```

### More General Formula

If you want a random integer between **`min` and `max` (inclusive)**, use:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

Example:

```javascript
const min = 10;
const max = 20;

let random =
Math.floor(Math.random() * (max - min + 1)) + min;
```

Possible outputs:

```text
10
11
12
...
20
```

---

# Step 6: Generate Three Numbers

```javascript
randomNum1 = Math.floor(Math.random() * max) + min;

randomNum2 = Math.floor(Math.random() * max) + min;

randomNum3 = Math.floor(Math.random() * max) + min;
```

Each call to `Math.random()` generates a new random number.

Example:

```text
2

5

1
```

---

# Step 7: Display the Numbers

```javascript
label1.textContent = randomNum1;

label2.textContent = randomNum2;

label3.textContent = randomNum3;
```

Example Output:

```text
2

5

1
```

---

# Program Flow

```text
Click Button
      ↓
Generate Decimal
(Math.random)
      ↓
Multiply by 6
      ↓
Remove Decimal
(Math.floor)
      ↓
Add 1
      ↓
Random Number (1–6)
      ↓
Display on Screen
```

---

# Methods & Properties Used

| Method/Property | Purpose                                     |
| --------------- | ------------------------------------------- |
| `Math.random()` | Generate a random decimal between 0 and 1   |
| `Math.floor()`  | Round down to the nearest whole number      |
| `.onclick`      | Run code when the button is clicked         |
| `.textContent`  | Display the generated number on the webpage |

---

# Quick Revision 🚀

| Code            | Purpose                    |
| --------------- | -------------------------- |
| `Math.random()` | Random decimal (0 ≤ n < 1) |
| `Math.floor()`  | Round down                 |
| `* max`         | Scale the random number    |
| `+ min`         | Shift the range            |
| `.onclick`      | Button click event         |
| `.textContent`  | Display result             |

---

## Easy Tricks 🎯

* **`Math.random()`** → Random decimal.
* **`Math.floor()`** → Remove the decimal by rounding down.
* **`* max`** → Increase the range.
* **`+ min`** → Start from the minimum value.
* Use the general formula when `min` is not `1`:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

This works for **any** range.

### One-Line Rule

> **`Math.random()` generates a random decimal, `Math.floor()` converts it into a whole number, and the formula `Math.floor(Math.random() * (max - min + 1)) + min` generates a random integer within a specified range.**
