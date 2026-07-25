# JavaScript Comparison Operators – Notes 📝

## What are Comparison Operators?

**Comparison operators** are used to **compare two values**. They return either **`true`** or **`false`**.

---

## Types of Comparison Operators

| Operator | Meaning                                          |
| -------- | ------------------------------------------------ |
| `=`      | Assignment Operator                              |
| `==`     | Equal to (checks only value)                     |
| `===`    | Strict Equal to (checks value and data type)     |
| `!=`     | Not Equal to (checks only value)                 |
| `!==`    | Strict Not Equal to (checks value and data type) |

---

# 1. Assignment Operator (`=`)

Used to **assign (store) a value** in a variable.

### Example

```javascript
let x = 10;
```

**Memory Trick 🧠**

> **`=` = Put a value into a variable.**

---

# 2. Equal To (`==`)

Checks **only the value**, **not the data type**.

### Example

```javascript
const PI = 3.14;

if (PI == "3.14") {
    console.log("That is Pi");
}
```

### Explanation

```text
3.14 == "3.14"

Value → Same ✅
Data Type → Different ❌

Result → true
```

Output:

```text
That is Pi
```

**Memory Trick**

> **`==` = Value only**

---

# 3. Strict Equal To (`===`)

Checks **both value and data type**.

### Example

```javascript
if (PI === "3.14") {
    console.log("That is Pi");
} else {
    console.log("That is NOT Pi");
}
```

### Explanation

```text
3.14 === "3.14"

Value → Same ✅
Data Type → Different ❌

Result → false
```

Output:

```text
That is NOT Pi
```

**Memory Trick**

> **`===` = Value + Data Type**

---

# 4. Not Equal To (`!=`)

Checks if **values are different** (ignores data type).

### Example

```javascript
if (PI != "3.14") {
    console.log("That is NOT Pi");
} else {
    console.log("That is Pi");
}
```

### Explanation

```text
3.14 != "3.14"

Value → Same

Result → false
```

Output:

```text
That is Pi
```

**Memory Trick**

> **`!=` = Value is NOT equal**

---

# 5. Strict Not Equal To (`!==`)

Checks if **value OR data type is different**.

### Example

```javascript
if (PI !== "3.14") {
    console.log("That is NOT Pi");
}
```

### Explanation

```text
3.14 !== "3.14"

Value → Same ✅
Data Type → Different ❌

Result → true
```

Output:

```text
That is NOT Pi
```

**Memory Trick**

> **`!==` = Value OR Data Type is different**

---

# `==` vs `===`

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

### Explanation

* `==` → Checks only the **value**.
* `===` → Checks **value + data type**.

---

# `!=` vs `!==`

```javascript
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
```

### Explanation

* `!=` → Checks only the **value**.
* `!==` → Checks **value + data type**.

---

# When to Use

✅ Use **`===`** and **`!==`** in most JavaScript programs because they are safer and avoid unexpected type conversion.

⚠️ Use **`==`** and **`!=`** only when you intentionally want type conversion.

---

# Quick Revision 🚀

| Operator | Checks                       | Example               |
| -------- | ---------------------------- | --------------------- |
| `=`      | Assign value                 | `x = 10`              |
| `==`     | Value only                   | `5 == "5"` → `true`   |
| `===`    | Value + Data Type            | `5 === "5"` → `false` |
| `!=`     | Value not equal              | `5 != "5"` → `false`  |
| `!==`    | Value or Data Type not equal | `5 !== "5"` → `true`  |

---

## Easy Tricks 🎯

* `=` → **Assign**
* `==` → **Value only**
* `===` → **Value + Type**
* `!=` → **Not Equal (Value only)**
* `!==` → **Not Equal (Value + Type)**

### One-Line Rule

> **`==` and `!=` compare only values, while `===` and `!==` compare both values and data types.**
