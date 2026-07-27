# JavaScript `forEach()` with Strings – Notes 📝

## What Does This Program Do?

This program uses **`forEach()`** to modify every string in an array.

It demonstrates how to:

* ✅ Convert all text to uppercase
* ✅ Convert all text to lowercase
* ✅ Capitalize the first letter of each word
* ✅ Display the updated array

---

# Initial Array

```javascript
let fruits = ["apple", "orange", "banana", "coconut"];
```

Initial Array:

```text
Index:   0        1         2         3
        ----------------------------------
        apple   orange   banana   coconut
```

---

# Step 1: Call `forEach()`

```javascript
fruits.forEach(capitalize);
```

### Explanation

`forEach()` loops through every element in the array.

JavaScript automatically calls:

```javascript
capitalize("apple", 0, fruits);
capitalize("orange", 1, fruits);
capitalize("banana", 2, fruits);
capitalize("coconut", 3, fruits);
```

Notice:

```javascript
capitalize
```

has **no parentheses** because we're passing the function as a callback.

---

# Step 2: Display the Array

```javascript
fruits.forEach(display);
```

JavaScript automatically calls:

```javascript
display("Apple");
display("Orange");
display("Banana");
display("Coconut");
```

Output:

```text
Apple
Orange
Banana
Coconut
```

---

# Callback Parameters

Every callback receives three values automatically.

```javascript
function callback(element, index, array){
}
```

| Parameter | Meaning          |
| --------- | ---------------- |
| `element` | Current value    |
| `index`   | Current position |
| `array`   | Original array   |

Example (first iteration):

```text
element = "apple"

index = 0

array = ["apple","orange","banana","coconut"]
```

---

# Function 1: `upperCase()`

```javascript
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
```

## What is `.toUpperCase()`?

Converts every letter to uppercase.

Example:

```javascript
"apple".toUpperCase();
```

Output:

```text
APPLE
```

---

### Before

```text
apple
orange
banana
```

### After

```text
APPLE
ORANGE
BANANA
```

---

# Function 2: `lowerCase()`

```javascript
function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
```

## What is `.toLowerCase()`?

Converts every letter to lowercase.

Example:

```javascript
"APPLE".toLowerCase();
```

Output:

```text
apple
```

---

### Before

```text
APPLE
ORANGE
BANANA
```

### After

```text
apple
orange
banana
```

---

# Function 3: `capitalize()`

```javascript
function capitalize(element, index, array){
    array[index] =
        element.charAt(0).toUpperCase() +
        element.slice(1);
}
```

This is the most important function.

Let's break it down.

---

## Part 1: `charAt(0)`

```javascript
element.charAt(0)
```

Returns the first character.

Example:

```javascript
"apple".charAt(0);
```

Output:

```text
a
```

---

## Part 2: `toUpperCase()`

```javascript
element.charAt(0).toUpperCase();
```

Example:

```text
a

↓

A
```

---

## Part 3: `slice(1)`

```javascript
element.slice(1);
```

Returns everything after index `0`.

Example:

```javascript
"apple".slice(1);
```

Output:

```text
pple
```

---

## Part 4: Combine Them

```javascript
element.charAt(0).toUpperCase()
+
element.slice(1);
```

Example:

```text
A

+

pple

↓

Apple
```

So:

```javascript
array[index] = "Apple";
```

---

# Example

Before:

```text
apple
```

Step 1

```javascript
charAt(0)
```

Output

```text
a
```

Step 2

```javascript
toUpperCase()
```

Output

```text
A
```

Step 3

```javascript
slice(1)
```

Output

```text
pple
```

Step 4

Combine

```text
Apple
```

---

# Why Use `array[index]`?

Correct:

```javascript
array[index] =
element.toUpperCase();
```

This replaces the value inside the array.

Before:

```text
["apple","orange"]
```

After:

```text
["APPLE","ORANGE"]
```

---

# Why Doesn't This Work?

```javascript
function capitalize(element, index, array){
    element = element.toUpperCase();
}
```

### Reason

`element` is only a **local variable**.

When JavaScript calls:

```javascript
capitalize("apple",0,fruits);
```

It creates:

```text
element = "apple"
```

Then:

```javascript
element = element.toUpperCase();
```

becomes:

```text
element = "APPLE"
```

Only the **local variable** changes.

The array still contains:

```text
["apple","orange","banana","coconut"]
```

Nothing is updated.

---

## Correct Way

```javascript
array[index] =
element.toUpperCase();
```

Now JavaScript changes:

```javascript
array[0] = "APPLE";
```

So the array becomes:

```text
["APPLE","orange","banana","coconut"]
```

---

# Visual Comparison

### ❌ Wrong

```javascript
element = "APPLE";
```

```text
Array

apple

↓

apple
```

Nothing changes.

---

### ✅ Correct

```javascript
array[index] = "APPLE";
```

```text
Array

apple

↓

APPLE
```

The array is updated.

---

# Program Flow

```text
Array
   ↓
forEach()
   ↓
capitalize()
   ↓
Get First Letter
   ↓
Convert to Uppercase
   ↓
Get Remaining Letters
   ↓
Join Both Parts
   ↓
Replace Array Element
   ↓
Display Updated Array
```

---

# String Methods Used

| Method           | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| `.toUpperCase()` | Convert all letters to uppercase                 |
| `.toLowerCase()` | Convert all letters to lowercase                 |
| `.charAt(index)` | Get the character at a specific index            |
| `.slice(start)`  | Get part of a string starting from a given index |

---

# Quick Revision 🚀

| Code                 | Purpose                    |
| -------------------- | -------------------------- |
| `forEach()`          | Loop through every element |
| `.toUpperCase()`     | Uppercase all letters      |
| `.toLowerCase()`     | Lowercase all letters      |
| `.charAt(0)`         | First character            |
| `.slice(1)`          | Remaining characters       |
| `array[index] = ...` | Update the array element   |

---

## Easy Tricks 🎯

* **`forEach()`** → Process every element.
* **`.toUpperCase()`** → ALL CAPITAL LETTERS.
* **`.toLowerCase()`** → all lowercase letters.
* **`.charAt(0)`** → First letter.
* **`.slice(1)`** → Everything except the first letter.
* **`array[index] = ...`** → Actually updates the array.
* **Changing only `element`** → Does **not** change the original array.

### One-Line Rule

> **`forEach()` processes each array element, and to permanently modify the array, you must update `array[index]`; changing only the local `element` variable does not affect the original array.**
