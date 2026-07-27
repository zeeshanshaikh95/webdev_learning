# JavaScript `.filter()` Method – Notes 📝

## What is `.filter()`?

The **`.filter()`** method is used to **create a new array** that contains **only the elements that satisfy a condition**.

The callback function must return:

* ✅ `true` → Keep the element.
* ❌ `false` → Remove the element.

Unlike `forEach()`, `.filter()` **does not modify the original array**.

---

# Syntax

```javascript
const newArray = array.filter(callback);
```

Callback syntax:

```javascript
function callback(element, index, array){
    return condition;
}
```

| Parameter            | Meaning         |
| -------------------- | --------------- |
| `element`            | Current element |
| `index` *(optional)* | Current index   |
| `array` *(optional)* | Original array  |

---

## Memory Trick 🧠

> **`.filter()` = "Keep only what matches the condition."**

Think of a sieve (filter):

```text
Original Array
↓
[1,2,3,4,5,6]
      ↓
Filter (Even Numbers)
      ↓
[2,4,6]
```

Everything that doesn't satisfy the condition is removed.

---

# Example 1: Filter Even & Odd Numbers

## Your Array

```javascript
let numbers = [1,2,3,4,5,6,7,8,9,10];
```

Initial array:

```text
[1,2,3,4,5,6,7,8,9,10]
```

---

## Filter Even Numbers

```javascript
let evenNums = numbers.filter(isEven);
```

JavaScript automatically calls:

```javascript
isEven(1);
isEven(2);
isEven(3);
...
isEven(10);
```

---

## Callback Function

```javascript
function isEven(element){
    return element % 2 === 0;
}
```

### How it Works

### First Iteration

```text
element = 1
```

Calculation:

```text
1 % 2

↓

1
```

Condition:

```javascript
1 === 0
```

Result:

```text
false
```

So `1` is **not added**.

---

### Second Iteration

```text
element = 2
```

Calculation:

```text
2 % 2

↓

0
```

Condition:

```javascript
0 === 0
```

Result:

```text
true
```

So `2` is **added**.

---

### Final Result

```text
[2,4,6,8,10]
```

---

# Filter Odd Numbers

```javascript
let oddNums = numbers.filter(isOdd);
```

Callback:

```javascript
function isOdd(element){
    return element % 2 !== 0;
}
```

### Output

```text
[1,3,5,7,9]
```

---

# Visual Flow

```text
1 → false ❌
2 → true  ✅
3 → false ❌
4 → true  ✅
5 → false ❌
6 → true  ✅
7 → false ❌
8 → true  ✅
9 → false ❌
10 → true ✅
```

New array:

```text
[2,4,6,8,10]
```

---

# Example 2: Filter Adults

## Array

```javascript
const ages = [11,17,18,20,22];
```

---

## Filter

```javascript
const adults = ages.filter(isAdult);
```

JavaScript calls:

```javascript
isAdult(11);
isAdult(17);
isAdult(18);
isAdult(20);
isAdult(22);
```

---

## Callback

```javascript
function isAdult(element){
    return element >= 18;
}
```

### Iterations

| Age | Condition | Keep? |
| --- | --------- | ----- |
| 11  | 11 >= 18  | ❌     |
| 17  | 17 >= 18  | ❌     |
| 18  | 18 >= 18  | ✅     |
| 20  | 20 >= 18  | ✅     |
| 22  | 22 >= 18  | ✅     |

Output:

```text
[18,20,22]
```

---

# Example 3: Filter Short Words

## Array

```javascript
const words = [
    "apple",
    "orange",
    "banana",
    "kiwi",
    "pomegranate",
    "coconut"
];
```

---

## Filter

```javascript
const shortWords = words.filter(getShortWords);
```

---

## Callback

```javascript
function getShortWords(element){
    return element.length <= 6;
}
```

### How `.length` Works

```javascript
"apple".length
```

Output:

```text
5
```

---

### Iterations

| Word        | Length | Keep? |
| ----------- | ------ | ----- |
| apple       | 5      | ✅     |
| orange      | 6      | ✅     |
| banana      | 6      | ✅     |
| kiwi        | 4      | ✅     |
| pomegranate | 11     | ❌     |
| coconut     | 7      | ❌     |

Output:

```text
["apple","orange","banana","kiwi"]
```

---

# How `.filter()` Works Internally

When you write:

```javascript
const evenNums = numbers.filter(isEven);
```

JavaScript behaves similarly to:

```javascript
const evenNums = [];

for(let i = 0; i < numbers.length; i++){

    if(isEven(numbers[i])){
        evenNums.push(numbers[i]);
    }

}
```

`.filter()` automatically creates the new array for you.

---

# Why Do We Use `return`?

`.filter()` keeps an element only when the callback returns `true`.

Example:

```javascript
function isEven(element){
    return element % 2 === 0;
}
```

```text
true

↓

Keep the element
```

```text
false

↓

Discard the element
```

---

# What Happens If You Don't Return?

```javascript
function isEven(element){
    element % 2 === 0;
}
```

Nothing is returned.

Every call returns:

```text
undefined
```

`undefined` is treated as **false**.

Result:

```text
[]
```

No elements are kept.

---

# `.filter()` vs `.map()` vs `forEach()`

| Method      | Returns New Array? | Purpose                            |
| ----------- | ------------------ | ---------------------------------- |
| `forEach()` | ❌ No               | Perform an action for each element |
| `.map()`    | ✅ Yes              | Transform every element            |
| `.filter()` | ✅ Yes              | Keep only matching elements        |

---

# Visual Comparison

## `forEach()`

```text
Array
 ↓
Do Something
 ↓
Same Array
```

---

## `.map()`

```text
Array
 ↓
Transform Every Element
 ↓
New Array
```

---

## `.filter()`

```text
Array
 ↓
Check Condition
 ↓
Keep Matching Elements
 ↓
New Array
```

---

# Program Flow

```text
Original Array
       ↓
.filter()
       ↓
Callback Runs
       ↓
Condition Checked
       ↓
true → Keep
false → Discard
       ↓
Repeat
       ↓
Return New Array
```

---

# Real-Life Example

Imagine a classroom:

```text
Students' Marks

40
75
90
55
82
```

You only want students who scored **60 or above**.

```javascript
const passed = marks.filter(mark => mark >= 60);
```

Result:

```text
Original

40 75 90 55 82

↓

Passed

75 90 82
```

The original array stays unchanged.

---

# Important Notes ⚠️

* `.filter()` **always returns a new array**.
* The **original array is not modified**.
* The callback **must return `true` or `false`**.
* If `true` → element is kept.
* If `false` → element is removed.

---

# Quick Revision 🚀

| Code                     | Purpose                 |
| ------------------------ | ----------------------- |
| `array.filter(callback)` | Create a filtered array |
| `return true`            | Keep the element        |
| `return false`           | Remove the element      |
| `% 2 === 0`              | Check for even numbers  |
| `% 2 !== 0`              | Check for odd numbers   |
| `.length`                | Get string length       |

---

## Easy Tricks 🎯

* **`.filter()`** → Creates a **new array**.
* **`true`** → Keep the element.
* **`false`** → Remove the element.
* **Original array** → Never changes.
* Use `.filter()` when you want to **select** specific items from an array.

### One-Line Rule

> **`.filter()` loops through an array, checks each element against a condition, and returns a new array containing only the elements for which the callback returns `true`.**
