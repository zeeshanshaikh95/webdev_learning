# JavaScript `.map()` Method – Notes 📝

## What is `.map()`?

The **`.map()`** method is used to **loop through every element of an array, apply a callback function to each element, and return a brand-new array**.

Unlike `forEach()`, **`.map()` does NOT modify the original array** (unless you explicitly change it).

---

# Syntax

```javascript
const newArray = array.map(callback);
```

Callback syntax:

```javascript
function callback(element, index, array){
    return modifiedValue;
}
```

| Parameter | Meaning                     |
| --------- | --------------------------- |
| `element` | Current element             |
| `index`   | Current index *(optional)*  |
| `array`   | Original array *(optional)* |

> **Important:** The callback **must return a value** because that returned value becomes an element in the new array.

---

# Memory Trick 🧠

> **`.map()` = "Map old values to new values."**

```text
Original Array
      ↓
Apply Function
      ↓
New Array
```

Think of a factory 🏭

```text
Raw Material
      ↓
Machine
      ↓
Finished Product
```

The original material is not destroyed—it creates a new product.

---

# Your Code (Corrected)

Your second example is missing the `students` array. It should be:

```javascript
const numbers = [1,2,3,4,5];

const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}
```

---

# Example 1: Square Numbers

```javascript
const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
```

Initial array:

```text
[1,2,3,4,5]
```

JavaScript automatically calls:

```javascript
square(1);
square(2);
square(3);
square(4);
square(5);
```

---

# Step 1: Callback Function

```javascript
function square(element){
    return Math.pow(element,2);
}
```

Each element is squared.

---

### First Iteration

```text
element = 1
```

Calculation:

```javascript
Math.pow(1,2)
```

Result:

```text
1
```

---

### Second Iteration

```text
element = 2
```

Calculation:

```javascript
Math.pow(2,2)
```

Result:

```text
4
```

---

### Third Iteration

```text
element = 3
```

Result:

```text
9
```

---

### Fourth Iteration

```text
element = 4
```

Result:

```text
16
```

---

### Fifth Iteration

```text
element = 5
```

Result:

```text
25
```

---

### New Array Created

```text
Original
↓

[1,2,3,4,5]

New
↓

[1,4,9,16,25]
```

Notice:

The original array is **unchanged**.

---

# Output

```javascript
console.log(squares);
```

Output

```text
[1,4,9,16,25]
```

---

# Example 2: Cube Numbers

```javascript
const cubes = numbers.map(cube);
```

Callback:

```javascript
function cube(element){
    return Math.pow(element,3);
}
```

Output:

```text
[1,8,27,64,125]
```

---

# Example 3: Uppercase Student Names

```javascript
const students =
["Spongebob","Patrick","Squidward","Sandy"];
```

Using

```javascript
const studentsUpper =
students.map(upperCase);
```

JavaScript automatically calls:

```javascript
upperCase("Spongebob");
upperCase("Patrick");
upperCase("Squidward");
upperCase("Sandy");
```

---

### Callback

```javascript
function upperCase(element){
    return element.toUpperCase();
}
```

Output:

```text
[
"SPONGEBOB",
"PATRICK",
"SQUIDWARD",
"SANDY"
]
```

---

# Lowercase Example

```javascript
const studentsLower =
students.map(lowerCase);
```

Callback

```javascript
function lowerCase(element){
    return element.toLowerCase();
}
```

Output

```text
[
"spongebob",
"patrick",
"squidward",
"sandy"
]
```

---

# Why Do We Use `return`?

`.map()` builds the new array using whatever you return.

Example:

```javascript
function square(element){
    return element * element;
}
```

JavaScript stores the returned value.

```text
Return 1

↓

Return 4

↓

Return 9

↓

Return 16

↓

Return 25
```

New array:

```text
[1,4,9,16,25]
```

---

# What Happens If You Don't Return?

```javascript
function square(element){
    Math.pow(element,2);
}
```

Nothing is returned.

Output:

```text
[undefined,
 undefined,
 undefined,
 undefined,
 undefined]
```

Because `.map()` uses the returned value to build the new array.

---

# `.map()` vs `forEach()`

## `forEach()`

```javascript
numbers.forEach(square);
```

Example callback:

```javascript
function square(element,index,array){
    array[index] = element * element;
}
```

Original array:

```text
[1,2,3]
```

After:

```text
[1,4,9]
```

The original array is modified.

---

## `.map()`

```javascript
const squares = numbers.map(square);
```

Original:

```text
[1,2,3]
```

New:

```text
[1,4,9]
```

Original remains:

```text
[1,2,3]
```

---

# Visual Comparison

## `forEach()`

```text
Original Array
      ↓
Modify Elements
      ↓
Same Array Changes
```

---

## `.map()`

```text
Original Array
      ↓
Apply Callback
      ↓
Create New Array
```

---

# Program Flow

```text
Original Array
       ↓
.map()
       ↓
Callback Runs
       ↓
Return New Value
       ↓
Store in New Array
       ↓
Repeat for Every Element
       ↓
Return New Array
```

---

# Real-Life Example

Imagine a class of students with marks:

```text
50
60
70
80
```

You want to add **5 bonus marks** without changing the original marks.

Using `.map()`:

```javascript
const bonusMarks = marks.map(mark => mark + 5);
```

Result:

```text
Original
↓

50 60 70 80

New
↓

55 65 75 85
```

The original marks stay the same.

---

# `.map()` vs `forEach()`

| Feature                | `.map()`                         | `forEach()`                                  |
| ---------------------- | -------------------------------- | -------------------------------------------- |
| Returns a new array    | ✅ Yes                            | ❌ No                                         |
| Changes original array | ❌ No (unless you do it manually) | ✅ Often used to modify it                    |
| Requires `return`      | ✅ Yes                            | ❌ No                                         |
| Best for               | Transforming data                | Performing actions like printing or updating |

---

# Quick Revision 🚀

| Code                  | Purpose                        |
| --------------------- | ------------------------------ |
| `array.map(callback)` | Create a new transformed array |
| `return value`        | Value stored in the new array  |
| `.toUpperCase()`      | Convert text to uppercase      |
| `.toLowerCase()`      | Convert text to lowercase      |
| `Math.pow(x,2)`       | Square a number                |
| `Math.pow(x,3)`       | Cube a number                  |

---

## Easy Tricks 🎯

* **`.map()`** → Creates a **new array**.
* **Original array** → Remains unchanged.
* **`return`** → Required to build the new array.
* **Best use** → Transform values (square numbers, capitalize names, convert currencies, etc.).
* **`forEach()`** → Mainly for performing actions or modifying the existing array.

### One-Line Rule

> **`.map()` loops through an array, applies a callback function to each element, and returns a brand-new array containing the transformed values without modifying the original array.**
