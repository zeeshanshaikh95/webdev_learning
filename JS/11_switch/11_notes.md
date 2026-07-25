# Switch Statement – Notes 📝

## What is a Switch Statement?

A **`switch` statement** is an alternative to writing many `if...else if...else` statements. It checks a value and executes the matching `case`.

---

## Syntax

```javascript
switch(expression){
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

### Memory Trick 🧠

Think of it like this:

> **"Check the value → Find the matching case → Execute it → Stop (`break`)".**

```
switch(value)
      ↓
   case 1
   case 2
   case 3
      ↓
 Matching case runs
```

---

# Example 1 (Days)

```javascript
let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
```

### How it works

* `day = 2`
* JavaScript checks:

  * Is `2 === 1`? ❌
  * Is `2 === 2`? ✅
* Output:

```
Tuesday
```

---

## Why do we use `break`?

`break` **stops the switch statement** after a matching case is found.

Without `break`, JavaScript continues executing the next cases (**fall-through**).

Example:

```javascript
let day = 2;

switch(day){
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");
}
```

Output:

```
Tuesday
Wednesday
```

Because there is **no `break`** after `case 2`.

---

# `switch(true)` Explained

Normally, `switch` compares values using **strict equality (`===`)**.

Example:

```javascript
switch(day)
```

means:

```javascript
day === caseValue
```

But when you write:

```javascript
switch(true)
```

JavaScript checks **which case expression becomes `true`**.

Think of it like:

> **"Find the first case whose condition is true."**

---

# Example (Grades)

```javascript
let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;

    case testScore >= 80:
        letterGrade = "B";
        break;

    case testScore >= 70:
        letterGrade = "C";
        break;

    case testScore >= 60:
        letterGrade = "D";
        break;

    default:
        letterGrade = "F";
}
```

### Step-by-Step

```
testScore = 33

33 >= 90 ❌
33 >= 80 ❌
33 >= 70 ❌
33 >= 60 ❌

No case matched
↓
default runs
```

Output:

```
F
```

---

### If `testScore = 85`

```
85 >= 90 ❌
85 >= 80 ✅
```

The first true condition is found.

Output:

```
B
```

---

## `if...else` vs `switch`

### Using `if...else`

```javascript
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "F";
}
```

### Using `switch(true)`

```javascript
switch(true){
    case score >= 90:
        grade = "A";
        break;

    case score >= 80:
        grade = "B";
        break;

    default:
        grade = "F";
}
```

Both produce the same result.

---

## When to Use

✅ Use `switch` when:

* Comparing one value with many options.
* Replacing long `if...else if` chains.
* Handling menus, days, months, grades, etc.

❌ Avoid `switch` for very complex conditions.

---

# Quick Revision 🚀

### Normal Switch

```javascript
switch(value){
    case value1:
        // code
        break;

    default:
        // code
}
```

### `switch(true)`

```javascript
switch(true){
    case condition1:
        // code
        break;

    case condition2:
        // code
        break;

    default:
        // code
}
```

### Easy Tricks 🎯

* **`switch(value)`** → Compare **values** (`===`).
* **`switch(true)`** → Compare **conditions** (find the first one that is `true`).
* **`break`** → Stop the switch.
* **`default`** → Runs when no case matches.

### One-Line Rule

> **Switch = Choose one case from many options.**
> **`switch(true)` = Choose the first condition that becomes `true`.**
