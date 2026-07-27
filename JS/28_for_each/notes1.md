# JavaScript `forEach()` Method – Notes 📝

## What is `forEach()`?

The **`forEach()`** method is used to **iterate (loop) through every element of an array** and execute a **callback function** for each element.

Unlike a normal `for` loop, you don't need to manage the index yourself.

---

# Syntax

```javascript
array.forEach(callback);
```

The callback function can receive **three arguments**:

```javascript
function callback(element, index, array){
    // code
}
```

| Parameter | Meaning                                 |
| --------- | --------------------------------------- |
| `element` | Current element of the array            |
| `index`   | Current index of the element            |
| `array`   | The original array being looped through |

> These three values are automatically provided by JavaScript every time `forEach()` runs.

---

## Memory Trick 🧠

> **`forEach()` = "For every element, do this."**

```text
Array
 ↓
1
 ↓
2
 ↓
3
 ↓
4
 ↓
5
```

The callback function runs once for each value.

---

# Your Array

```javascript
let numbers = [1,2,3,4,5];
```

Initially:

```text
Index:    0  1  2  3  4
Value:    1  2  3  4  5
```

---

# Step 1: Call `forEach()`

```javascript
numbers.forEach(square);
```

### Explanation

Here,

```javascript
square
```

is a **callback function**.

JavaScript automatically calls it once for every element.

It behaves like this:

```javascript
square(1, 0, numbers);

square(2, 1, numbers);

square(3, 2, numbers);

square(4, 3, numbers);

square(5, 4, numbers);
```

Notice:

There are **no parentheses** after `square`.

```javascript
numbers.forEach(square);
```

This **passes the function**.

If you wrote:

```javascript
numbers.forEach(square());
```

it would execute immediately and cause an error because `forEach()` expects a function reference.

---

# Step 2: Square Function

```javascript
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
```

### Parameters

| Parameter | Value            |
| --------- | ---------------- |
| `element` | Current number   |
| `index`   | Current position |
| `array`   | Original array   |

---

### First Iteration

```text
element = 1

index = 0
```

Calculation:

```javascript
Math.pow(1,2)
```

Output:

```text
1
```

Array becomes:

```text
[1,2,3,4,5]
```

(No visible change because 1² = 1.)

---

### Second Iteration

```text
element = 2

index = 1
```

Calculation:

```javascript
Math.pow(2,2)
```

Output:

```text
4
```

Array becomes:

```text
[1,4,3,4,5]
```

---

### Third Iteration

```text
element = 3

index = 2
```

Output:

```text
9
```

Array becomes:

```text
[1,4,9,4,5]
```

---

### Fourth Iteration

```text
element = 4
```

Output:

```text
16
```

Array:

```text
[1,4,9,16,5]
```

---

### Fifth Iteration

```text
element = 5
```

Output:

```text
25
```

Final array:

```text
[1,4,9,16,25]
```

---

# Why Use `array[index]`?

```javascript
array[index] = Math.pow(element,2);
```

This replaces the current value with its square.

Example:

Before:

```text
[1,2,3]
```

When:

```text
index = 1
```

JavaScript does:

```javascript
array[1] = 4;
```

After:

```text
[1,4,3]
```

---

# Step 3: Display the Array

```javascript
numbers.forEach(display);
```

JavaScript automatically calls:

```javascript
display(1);

display(4);

display(9);

display(16);

display(25);
```

---

# Display Function

```javascript
function display(element){
    console.log(element);
}
```

Output:

```text
1
4
9
16
25
```

---

# Other Callback Functions

## Double

```javascript
function double(element, index, array){
    array[index] = element * 2;
}
```

Example:

Before:

```text
[1,2,3]
```

After:

```text
[2,4,6]
```

---

## Triple

```javascript
function triple(element, index, array){
    array[index] = element * 3;
}
```

Before:

```text
[1,2,3]
```

After:

```text
[3,6,9]
```

---

## Cube

```javascript
function cube(element, index, array){
    array[index] = Math.pow(element,3);
}
```

Before:

```text
[1,2,3]
```

After:

```text
[1,8,27]
```

---

# How `forEach()` Works Internally

When you write:

```javascript
numbers.forEach(square);
```

JavaScript behaves similarly to:

```javascript
for(let i = 0; i < numbers.length; i++){
    square(numbers[i], i, numbers);
}
```

This is why the callback automatically receives:

* Current element
* Current index
* Original array

---

# Program Flow

```text
Array
 ↓
forEach()
 ↓
Call Callback
 ↓
Process Element
 ↓
Update Array
 ↓
Next Element
 ↓
Display Result
```

---

# `forEach()` vs `for...of`

| `forEach()`                                            | `for...of`                                                      |
| ------------------------------------------------------ | --------------------------------------------------------------- |
| Uses a callback                                        | Uses a loop                                                     |
| Automatically provides element, index, and array       | Gives only the element (unless you manage the index separately) |
| Great for applying the same operation to every element | Great for simple iteration                                      |

---

# Important Notes ⚠️

* `forEach()` **does not return a new array**.
* It loops through the existing array.
* If you modify `array[index]`, the original array changes.
* `forEach()` always processes every element; you cannot stop it early with `break` or `continue`.

---

# Quick Revision 🚀

| Code                      | Purpose                    |
| ------------------------- | -------------------------- |
| `array.forEach(callback)` | Loop through every element |
| `element`                 | Current value              |
| `index`                   | Current position           |
| `array`                   | Original array             |
| `array[index] = ...`      | Modify the current element |
| `display(element)`        | Print each element         |

---

## Easy Tricks 🎯

* **`forEach()`** → Loop through every array element.
* **Callback** → Runs once for each element.
* **`element`** → Current value.
* **`index`** → Position of the value.
* **`array`** → The original array.
* Use `array[index] = ...` when you want to update elements.
* Use `display()` when you only want to print values.

### One-Line Rule

> **`forEach()` loops through every element of an array and executes a callback function, automatically providing the current element, its index, and the original array on each iteration.**
