# JavaScript String Slicing – Notes 📝

## What is String Slicing?

**String slicing** means **creating a new string (substring) from a part of another string.**

---

## Syntax

```javascript
string.slice(start, end);
```

* **`start`** → Starting index (**included**).
* **`end`** → Ending index (**not included**).

> **Remember:** `end` is **exclusive** (it is not included).

---

## Memory Trick 🧠

Think:

```text
slice(start, end)

✔ Start = Included
❌ End = Excluded
```

Or simply:

> **Start Included, End Excluded (SIE)**

---

## Example 1

```javascript
const fullName = "Broseph Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);
```

### Explanation

```text
Broseph Code
012345678901
```

```javascript
slice(0,3)
```

Gets characters at index **0, 1, 2**

Output:

```text
Bro
```

```javascript
slice(4,8)
```

Gets characters at index **4, 5, 6, 7**

Output:

```text
eph
```

---

## Example 2 (Negative Index)

```javascript
let lastChar = fullName.slice(-1);
```

Negative index starts counting **from the end**.

Output:

```text
e
```

**Memory Trick:**

* Positive index → Left ➜ Right
* Negative index → Right ➜ Left

---

## Example 3 (Using `indexOf()`)

```javascript
let firstName = fullName.slice(0, fullName.indexOf(" "));
```

### Explanation

```text
Broseph Code
       ↑
     Space
```

`indexOf(" ")` returns **7**

So,

```javascript
slice(0, 7)
```

Output:

```text
Broseph
```

---

## Example 4

```javascript
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
```

### Explanation

`+1` skips the space.

```javascript
slice(8)
```

If only the **start** index is given, `slice()` goes **until the end** of the string.

Output:

```text
Code
```

---

## Example 5 (Email)

```javascript
const email = "zee@gmail.com";

let user = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
```

### Explanation

```text
zee@gmail.com
   ↑
   @
```

Username:

```javascript
slice(0,3)
```

Output:

```text
zee
```

Extension:

```javascript
slice(4)
```

Output:

```text
gmail.com
```

---

## When to Use

✅ Extract first name and last name.

✅ Get username from an email.

✅ Remove unwanted characters.

✅ Get part of any string.

---

# Quick Revision 🚀

| Method              | Purpose                         |
| ------------------- | ------------------------------- |
| `slice(start, end)` | Extract part of a string        |
| `slice(start)`      | Extract from `start` to the end |
| `slice(-1)`         | Get the last character          |
| `indexOf()`         | Find the index of a character   |

---

## Easy Tricks 🎯

* **`slice(start, end)`** → Start included, End excluded.
* **No `end`** → Goes till the end.
* **Negative index (`-1`)** → Count from the end.
* **`indexOf()` + `slice()`** → Great for extracting names, emails, etc.

### One-Line Rule

> **`slice()` extracts a portion of a string by using the start index (included) and end index (excluded).**
