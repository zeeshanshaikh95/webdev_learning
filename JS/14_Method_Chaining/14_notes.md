# Method Chaining – Notes 📝

## What is Method Chaining?

**Method Chaining** means **calling one method after another in a single line of code**. The output of one method becomes the input for the next method.

---

## Syntax

```javascript
object.method1().method2().method3();
```

### Memory Trick 🧠

Think of it like a **chain**:

```
Object
   ↓
Method 1
   ↓
Method 2
   ↓
Method 3
   ↓
Final Result
```

Or simply remember:

> **One object → Many methods → One line**

---

## Without Method Chaining

```javascript
let username = window.prompt("Enter your username");

username = username.trim();

let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let remainingLetters = username.slice(1);
remainingLetters = remainingLetters.toLowerCase();

username = firstLetter + remainingLetters;

console.log(username);
```

Here, every step is written separately.

---

## With Method Chaining

```javascript
username =
username.trim().charAt(0).toUpperCase() +
username.trim().slice(1).toLowerCase();
```

This does the same work in fewer lines.

---

## Step-by-Step

Suppose the input is:

```text
"   zEeshAn   "
```

### First Part

```javascript
username.trim()
```

Output:

```text
"zEeshAn"
```

↓

```javascript
.charAt(0)
```

Output:

```text
"z"
```

↓

```javascript
.toUpperCase()
```

Output:

```text
"Z"
```

---

### Second Part

```javascript
username.trim()
```

↓

```javascript
.slice(1)
```

Output:

```text
"EeshAn"
```

↓

```javascript
.toLowerCase()
```

Output:

```text
"eeshan"
```

---

### Final Result

```javascript
"Z" + "eeshan"
```

Output:

```text
"Zeeshan"
```

---

## Methods Used

| Method          | Purpose                                   |
| --------------- | ----------------------------------------- |
| `trim()`        | Removes spaces from the beginning and end |
| `charAt(0)`     | Gets the first character                  |
| `toUpperCase()` | Converts text to uppercase                |
| `slice(1)`      | Gets the string from index 1 to the end   |
| `toLowerCase()` | Converts text to lowercase                |

---

## When to Use

✅ When multiple methods are applied to the same object.

❌ Avoid very long chains because they become harder to read and debug.

---

## Quick Revision 🚀

```javascript
object.method1().method2().method3();
```

**Remember:**

* `.` → Connects methods
* Each method uses the result of the previous method.
* Makes code **shorter, cleaner, and easier to read**.

### One-Line Rule 🎯

> **Method Chaining = Calling multiple methods on the same object in one continuous line.**
