# JavaScript `.reduce()` Method – Notes 📝

## What is `.reduce()`?

The **`.reduce()`** method is used to **reduce all the elements of an array into a single value**.

That single value can be:

* ➕ Sum of all numbers
* 🔢 Maximum value
* 🔽 Minimum value
* 🔤 A single string
* 🛒 Total bill
* 📊 Any calculated result

Unlike `.map()` and `.filter()`, which return **arrays**, `.reduce()` returns **one final value**.

---

# Syntax

```javascript
const result = array.reduce(callback);
```

Callback syntax:

```javascript
function callback(accumulator, element){
    return updatedAccumulator;
}
```

Or with all parameters:

```javascript
function callback(accumulator, element, index, array){
    return updatedAccumulator;
}
```

| Parameter            | Meaning                   |
| -------------------- | ------------------------- |
| `accumulator`        | Stores the running result |
| `element`            | Current array element     |
| `index` *(optional)* | Current index             |
| `array` *(optional)* | Original array            |

---

# Memory Trick 🧠

> **`.reduce()` = "Reduce many values into one value."**

Imagine adding coins into a piggy bank 🐷

```text
1
2
3
4
5
 ↓
Keep adding
 ↓
15
```

Many numbers become **one total**.

---

# Example 1: Sum of Prices

## Array

```javascript
const prices = [1,2,3,4,5];
```

Initial array:

```text
[1,2,3,4,5]
```

---

## Using `.reduce()`

```javascript
const total = prices.reduce(sum);
```

JavaScript automatically calls the callback multiple times.

---

# Callback Function

```javascript
function sum(accumulator, element){
    return accumulator + element;
}
```

The returned value becomes the **new accumulator** for the next iteration.

---

# How `.reduce()` Works Step by Step

### Initial State

Without an initial value, JavaScript automatically uses:

```text
accumulator = first element = 1

element = second element = 2
```

---

### First Iteration

```text
accumulator = 1

element = 2
```

Calculation:

```text
1 + 2 = 3
```

Return:

```text
3
```

Now

```text
accumulator = 3
```

---

### Second Iteration

```text
accumulator = 3

element = 3
```

Calculation

```text
3 + 3 = 6
```

Return

```text
6
```

---

### Third Iteration

```text
accumulator = 6

element = 4
```

Calculation

```text
6 + 4 = 10
```

---

### Fourth Iteration

```text
accumulator = 10

element = 5
```

Calculation

```text
10 + 5 = 15
```

Final result

```text
15
```

---

# Visual Flow

```text
Array

[1,2,3,4,5]

↓

1 + 2 = 3

↓

3 + 3 = 6

↓

6 + 4 = 10

↓

10 + 5 = 15

↓

Final Answer = 15
```

---

# Printing the Total

```javascript
console.log(`$${total.toFixed(2)}`);
```

### What is `.toFixed(2)`?

It formats a number to **2 decimal places**.

Example:

```javascript
15 .toFixed(2)
```

Output:

```text
15.00
```

Console Output:

```text
$15.00
```

---

# Example 2: Maximum Value

## Array

```javascript
const grades = [75,80,85,90,95];
```

---

## Using `.reduce()`

```javascript
const maximum = grades.reduce(getMax);
```

---

# Callback

```javascript
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
```

---

## Step-by-Step

### First Iteration

```text
accumulator = 75

element = 80
```

```javascript
Math.max(75,80)
```

Result

```text
80
```

---

### Second Iteration

```text
accumulator = 80

element = 85
```

Result

```text
85
```

---

### Third Iteration

```text
accumulator = 85

element = 90
```

Result

```text
90
```

---

### Fourth Iteration

```text
accumulator = 90

element = 95
```

Result

```text
95
```

Final Answer

```text
95
```

Output

```text
95
```

---

# Example 3: Minimum Value

```javascript
const minimum = grades.reduce(getMin);
```

Callback

```javascript
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
```

---

### Step-by-Step

```text
Math.min(75,80)

↓

75
```

```text
Math.min(75,85)

↓

75
```

```text
Math.min(75,90)

↓

75
```

```text
Math.min(75,95)

↓

75
```

Final Result

```text
75
```

---

# Visual Flow for Maximum

```text
75

↓

Compare with 80

↓

80

↓

Compare with 85

↓

85

↓

Compare with 90

↓

90

↓

Compare with 95

↓

95
```

---

# Visual Flow for Minimum

```text
75

↓

Compare with 80

↓

75

↓

Compare with 85

↓

75

↓

Compare with 90

↓

75

↓

Compare with 95

↓

75
```

---

# Why is it Called "Accumulator"?

The **accumulator** stores the running result.

Example:

```text
Array

[5,10,15]

↓

Accumulator = 5

↓

5 + 10 = 15

↓

Accumulator = 15

↓

15 + 15 = 30

↓

Final Answer = 30
```

The accumulator keeps **accumulating** values.

---

# What Happens If You Provide an Initial Value?

Syntax:

```javascript
const total = prices.reduce(sum, 100);
```

Here:

```text
accumulator = 100
```

Iterations:

```text
100 + 1 = 101

↓

101 + 2 = 103

↓

103 + 3 = 106

↓

106 + 4 = 110

↓

110 + 5 = 115
```

Final Answer:

```text
115
```

Providing an initial value changes where the accumulation starts.

---

# `.reduce()` vs `.map()` vs `.filter()`

| Method      | Returns      | Purpose                          |
| ----------- | ------------ | -------------------------------- |
| `forEach()` | Nothing      | Perform an action                |
| `.map()`    | New Array    | Transform every element          |
| `.filter()` | New Array    | Keep matching elements           |
| `.reduce()` | Single Value | Combine elements into one result |

---

# Real-Life Example

Imagine a shopping cart:

```text
$20
$35
$15
$10
```

Using `.reduce()`:

```javascript
const total = prices.reduce(sum);
```

Calculation:

```text
20 + 35

↓

55 + 15

↓

70 + 10

↓

80
```

Total:

```text
$80
```

---

# Program Flow

```text
Array
      ↓
.reduce()
      ↓
Take First Value
      ↓
Compare/Calculate
      ↓
Return New Accumulator
      ↓
Repeat
      ↓
One Final Value
```

---

# Important Notes ⚠️

* `.reduce()` returns **one value**, not an array.
* The callback **must return** the updated accumulator.
* The returned value becomes the accumulator in the next iteration.
* You can use `.reduce()` for sums, averages, maximums, minimums, object building, string concatenation, and more.

---

# Quick Revision 🚀

| Code                           | Purpose                           |
| ------------------------------ | --------------------------------- |
| `array.reduce(callback)`       | Reduce an array to one value      |
| `accumulator`                  | Running result                    |
| `element`                      | Current value                     |
| `return accumulator + element` | Sum values                        |
| `Math.max()`                   | Largest value                     |
| `Math.min()`                   | Smallest value                    |
| `.toFixed(2)`                  | Format number to 2 decimal places |

---

## Easy Tricks 🎯

* **`.reduce()`** → Many values ➜ One value.
* **Accumulator** → Remembers the running result.
* **`return`** → Updates the accumulator for the next iteration.
* **No initial value** → First array element becomes the accumulator.
* **Initial value provided** → Accumulator starts from that value.
* Great for totals, maximums, minimums, averages, and combining data.

### One-Line Rule

> **`.reduce()` processes every element of an array, repeatedly updates an accumulator using a callback function, and returns a single final value.**
