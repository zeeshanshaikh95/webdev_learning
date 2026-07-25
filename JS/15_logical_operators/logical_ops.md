# JavaScript Logical Operators – Notes 📝

## What are Logical Operators?

**Logical operators** are used to **combine or manipulate boolean values (`true` or `false`)**.

There are **3 logical operators**:

* `&&` → **AND**
* `||` → **OR**
* `!` → **NOT**

---

# 1. AND (`&&`)

The **AND (`&&`)** operator returns **true only if both conditions are true**.

### Syntax

```javascript
condition1 && condition2
```

### Memory Trick 🧠

> **AND = Both must be true**

```text
True  && True  → True ✅
True  && False → False ❌
False && True  → False ❌
False && False → False ❌
```

### Example

```javascript
let temp = 20;

if (temp > 0 && temp < 30) {
    console.log("The weather is GOOD");
} else {
    console.log("The weather is BAD");
}
```

### Explanation

```
temp = 20

20 > 0   ✅
20 < 30  ✅

Both conditions are true
```

Output:

```text
The weather is GOOD
```

---

# 2. OR (`||`)

The **OR (`||`)** operator returns **true if at least one condition is true**.

### Syntax

```javascript
condition1 || condition2
```

### Memory Trick 🧠

> **OR = Any one condition can be true**

```text
True  || True  → True ✅
True  || False → True ✅
False || True  → True ✅
False || False → False ❌
```

### Example

```javascript
temp = 100;

if (temp < 0 || temp > 30) {
    console.log("The weather is BAD");
} else {
    console.log("The weather is GOOD");
}
```

### Explanation

```
temp = 100

100 < 0   ❌
100 > 30  ✅

One condition is true
```

Output:

```text
The weather is BAD
```

---

# 3. NOT (`!`)

The **NOT (`!`)** operator **reverses** a boolean value.

* `true` → `false`
* `false` → `true`

### Syntax

```javascript
!condition
```

### Memory Trick 🧠

> **NOT = Opposite**

```text
!true  → false
!false → true
```

### Example

```javascript
const isSunny = true;

if (!isSunny) {
    console.log("It is NOT sunny outside");
} else {
    console.log("It is sunny outside");
}
```

### Explanation

```
isSunny = true

!true = false
```

So the `if` condition is false, and the `else` block runs.

Output:

```text
It is sunny outside
```

---

# When to Use

✅ **`&&` (AND)** → When **all conditions** must be true.

✅ **`||` (OR)** → When **at least one condition** must be true.

✅ **`!` (NOT)** → When you want the **opposite** of a boolean value.

---

# Quick Revision 🚀

| Operator | Meaning | Returns `true` When         |    |                                |
| -------- | ------- | --------------------------- | -- | ------------------------------ |
| `&&`     | AND     | Both conditions are true    |    |                                |
| `        |         | `                           | OR | At least one condition is true |
| `!`      | NOT     | Reverses `true` and `false` |    |                                |

---

## Easy Tricks 🎯

* **`&&` = BOTH** ✔️
* **`||` = EITHER ONE** ✔️
* **`!` = OPPOSITE** ✔️

### One-Line Rule

> **Logical operators are used to combine or reverse boolean (`true`/`false`) conditions.**
