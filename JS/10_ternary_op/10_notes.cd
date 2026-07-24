# Ternary Operator (`? :`) – Easy Notes 📝

## What is a Ternary Operator?

A **ternary operator** is a **short way of writing an `if...else` statement**.

Instead of writing 5–6 lines of code, you can write it in **one line**.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Think of it like this:

> **Question ? Yes : No**

or

> **Condition ? True Part : False Part**

---

# Easy Formula to Remember ⭐

```
Condition ?
    True Answer
:
    False Answer
```

Example:

```javascript
age >= 18 ? "Adult" : "Minor";
```

Read it in English:

> Is age greater than or equal to 18?
>
> ✅ Yes → "Adult"
>
> ❌ No → "Minor"

---

# Example 1

```javascript
let age = 12;

let message = age >= 18
    ? "You're an adult"
    : "You're a minor";

console.log(message);
```

### Step-by-step

```
age = 12

12 >= 18 ?

No ❌

Result:
"You're a minor"
```

Output

```
You're a minor
```

---

# Example 2

```javascript
let time = 9;

let greeting = time < 12
    ? "Good morning!"
    : "Good afternoon!";
```

### Step-by-step

```
time = 9

9 < 12 ?

Yes ✅

Result:
"Good morning!"
```

Output

```
Good morning!
```

---

# Example 3

```javascript
let isStudent = false;

let message = isStudent
    ? "You are a student"
    : "You are NOT a student";
```

### Step-by-step

```
isStudent = false

false ?

Condition is false ❌

Result:
"You are NOT a student"
```

Output

```
You are NOT a student
```

---

# Example 4 (Discount)

```javascript
let purchaseAmount = 99;

let discount = purchaseAmount >= 100 ? 10 : 0;
```

### Step 1

```
purchaseAmount = 99

99 >= 100 ?

No ❌
```

So,

```
discount = 0
```

---

### Step 2

```javascript
purchaseAmount - purchaseAmount * (discount / 100)
```

Substitute the values

```
99 - 99 × (0 / 100)

99 - 99 × 0

99 - 0

99
```

Output

```
Your total is $99
```

---

### If purchaseAmount = 150

```
150 >= 100 ?

Yes ✅

discount = 10
```

Calculation

```
150 - 150 × (10/100)

150 - 15

135
```

Output

```
Your total is $135
```

---

# Why use Ternary Operator?

Instead of this:

```javascript
let message;

if (age >= 18) {
    message = "Adult";
}
else {
    message = "Minor";
}
```

You can write:

```javascript
let message = age >= 18 ? "Adult" : "Minor";
```

Less code.
Cleaner code.
Easier to read (for simple conditions).

---

# Memory Trick 🧠

Imagine this sentence:

> **"If yes, then this. Otherwise, that."**

```
condition ? this : that
```

Example:

```
Rain?

Yes → Take umbrella

No → Wear sunglasses
```

JavaScript:

```javascript
let weather = "rain";

let item = weather === "rain"
    ? "Umbrella"
    : "Sunglasses";
```

---

# Another Trick 🎯

Remember:

```
? = THEN

: = ELSE
```

So whenever you see

```javascript
condition ? value1 : value2
```

Think

```
IF condition
THEN value1
ELSE value2
```

---

# When should you use it?

✅ Good for:

* Assigning a variable
* Displaying a message
* Choosing between two values
* Returning one of two values

Example:

```javascript
let marks = 80;

let result = marks >= 35 ? "Pass" : "Fail";
```

---

# When NOT to use it?

❌ Don't use ternary operators for long or complicated logic.

Bad:

```javascript
condition1
    ? condition2
        ? value1
        : value2
    : condition3
        ? value3
        : value4;
```

In such cases, use `if...else` because it's much easier to understand.

---

# Common Mistakes ❌

### 1. Forgetting the `:`

Wrong

```javascript
age >= 18 ? "Adult";
```

Correct

```javascript
age >= 18 ? "Adult" : "Minor";
```

---

### 2. Using `=` instead of `===`

Wrong

```javascript
age = 18 ? "Adult" : "Minor";
```

Correct

```javascript
age === 18 ? "Exactly 18" : "Not 18";
```

---

### 3. Forgetting to store the result

Wrong

```javascript
age >= 18 ? "Adult" : "Minor";
```

Correct

```javascript
let message = age >= 18 ? "Adult" : "Minor";
```

---

# Quick Revision 🚀

**Syntax**

```javascript
condition ? valueIfTrue : valueIfFalse;
```

**Meaning**

```
IF condition
    return first value
ELSE
    return second value
```

**Remember**

* `?` → **Then / If True**
* `:` → **Else / If False**

**Mental Formula**

```
Question ❓

YES ✅ → Left of :

NO ❌ → Right of :
```

---

## Practice Questions

Try solving these yourself:

```javascript
// 1
let marks = 55;

// Output should be:
// "Pass" if marks >= 35
// Otherwise "Fail"
```

```javascript
// 2
let number = 8;

// Output:
// "Even" or "Odd"
```

```javascript
// 3
let temperature = 30;

// Output:
// "Hot" if >= 25
// Otherwise "Cold"
```

```javascript
// 4
let loggedIn = true;

// Output:
// "Welcome!"
// Otherwise "Please Login"
```

---

## One-line Rule to Remember 🎉

> **Ternary Operator = `if...else` in one line.**
> **Read it as:** **Condition ? If True : If False**
