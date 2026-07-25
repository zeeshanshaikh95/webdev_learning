# JavaScript Arrays – Notes 📝

## What is an Array?

An **array** is a special variable that can **store multiple values** in a single variable.

Instead of creating many variables:

```javascript
let fruit1 = "apple";
let fruit2 = "orange";
let fruit3 = "banana";
```

You can use one array:

```javascript
let fruits = ["apple", "orange", "banana"];
```

---

## Syntax

```javascript
let arrayName = [value1, value2, value3];
```

### Example

```javascript
let fruits = ["apple", "orange", "banana"];
```

### Memory Trick 🧠

> **Array = One Box 📦 → Many Values**

---

# Access Array Elements

Each item has an **index**.

```text
Index:    0        1         2
        --------------------------
        apple   orange   banana
```

Example:

```javascript
console.log(fruits[0]);
```

Output

```text
apple
```

---

# `.push()`

Adds an element to the **end** of the array.

### Syntax

```javascript
array.push(value);
```

### Example

```javascript
fruits.push("coconut");
```

Before:

```text
["apple", "orange", "banana"]
```

After:

```text
["apple", "orange", "banana", "coconut"]
```

---

# `.pop()`

Removes the **last** element.

### Syntax

```javascript
array.pop();
```

Example

Before:

```text
["apple", "orange", "banana"]
```

After:

```text
["apple", "orange"]
```

---

# `.unshift()`

Adds one or more elements to the **beginning** of the array.

### Syntax

```javascript
array.unshift(value);
```

Example

```javascript
fruits.unshift("mango");
```

Before

```text
["apple", "orange", "banana"]
```

After

```text
["mango", "apple", "orange", "banana"]
```

**Memory Trick 🧠**

> **Unshift = Add at the Front**

---

# `.shift()`

Removes the **first** element.

### Syntax

```javascript
array.shift();
```

Before

```text
["apple", "orange", "banana"]
```

After

```text
["orange", "banana"]
```

**Memory Trick 🧠**

> **Shift = Remove from the Front**

---

# Loop Through an Array

## `for...of` Loop

```javascript
for(let fruit of fruits){
    console.log(fruit);
}
```

Output

```text
apple
orange
banana
```

### Explanation

`fruit` stores each element one by one.

```text
1st → apple

2nd → orange

3rd → banana
```

---

## Normal `for` Loop

```javascript
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
```

Here:

* `i` is the index.
* `fruits[i]` gets the element at that index.

---

# `.sort()`

Sorts the array in **alphabetical order**.

### Example

```javascript
fruits.sort();
```

Before

```text
["apple", "orange", "banana"]
```

After

```text
["apple", "banana", "orange"]
```

---

# `.reverse()`

Reverses the order of the array.

### Example

```javascript
fruits.sort().reverse();
```

Step 1 (`sort()`)

```text
["apple", "banana", "orange"]
```

Step 2 (`reverse()`)

```text
["orange", "banana", "apple"]
```

**Method Chaining**

```javascript
fruits.sort().reverse();
```

means:

```text
Sort
   ↓
Reverse
```

---

# `.length`

Returns the total number of elements.

### Example

```javascript
let numOfFruits = fruits.length;
```

Output

```text
3
```

---

# `.indexOf()`

Returns the **index** of an element.

### Syntax

```javascript
array.indexOf(value);
```

Example

```javascript
let index = fruits.indexOf("banana");
```

Output

```text
2
```

If the item is **not found**:

```javascript
fruits.indexOf("grapes");
```

Output

```text
-1
```

---

# Program Flow

```text
Create Array
      ↓
Add/Remove Elements
      ↓
Loop Through Array
      ↓
Sort Array
      ↓
Reverse Array
      ↓
Find Length
      ↓
Find Index
```

---

# Array Methods Summary

| Method       | Purpose                   |
| ------------ | ------------------------- |
| `.push()`    | Add to the end            |
| `.pop()`     | Remove from the end       |
| `.unshift()` | Add to the beginning      |
| `.shift()`   | Remove from the beginning |
| `.sort()`    | Sort alphabetically       |
| `.reverse()` | Reverse the order         |
| `.length`    | Count elements            |
| `.indexOf()` | Find an element's index   |

---

# Quick Revision 🚀

| Code           | Purpose              |
| -------------- | -------------------- |
| `array[index]` | Access an element    |
| `.push()`      | Add at end           |
| `.pop()`       | Remove last element  |
| `.unshift()`   | Add at beginning     |
| `.shift()`     | Remove first element |
| `for...of`     | Loop through values  |
| `.sort()`      | Alphabetical order   |
| `.reverse()`   | Reverse order        |
| `.length`      | Total elements       |
| `.indexOf()`   | Find index           |

---

## Easy Tricks 🎯

* **Array** → One variable, many values.
* **`push()`** → Add to the **end**.
* **`pop()`** → Remove from the **end**.
* **`unshift()`** → Add to the **front**.
* **`shift()`** → Remove from the **front**.
* **`sort()`** → Alphabetical order.
* **`reverse()`** → Opposite order.
* **`length`** → Count items.
* **`indexOf()`** → Find the position of an item.
* **`for...of`** → Loop through every value directly.

### One-Line Rule

> **An array stores multiple values in a single variable, and JavaScript provides methods like `push()`, `pop()`, `shift()`, `unshift()`, `sort()`, `reverse()`, `length`, and `indexOf()` to manage and access those values efficiently.**
