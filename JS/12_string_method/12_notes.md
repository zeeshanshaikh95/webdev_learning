# JavaScript String Methods – Notes 📝

## What are String Methods?

**String methods** are built-in functions that let you **manipulate (change), search, and work with text (strings).**

---

## 1. `charAt()`

Returns the character at a specific index.

```javascript
let userName = "BroCode";

console.log(userName.charAt(0));
```

Output:

```text
B
```

**Memory Trick:**
👉 **"Character At Index"**

---

## 2. `indexOf()`

Returns the **first index** of a character or substring.

```javascript
console.log(userName.indexOf("o"));
```

Output:

```text
2
```

**Memory Trick:**
👉 **"First occurrence"**

---

## 3. `lastIndexOf()`

Returns the **last index** of a character.

```javascript
console.log(userName.lastIndexOf("o"));
```

Output:

```text
5
```

**Memory Trick:**
👉 **"Last occurrence"**

---

## 4. `length`

Returns the total number of characters.

```javascript
console.log(userName.length);
```

Output:

```text
7
```

**Memory Trick:**
👉 **"Length = Total characters"**

---

## 5. `trim()`

Removes spaces from the **beginning and end** of a string.

```javascript
let userName = " BroCode ";

console.log(userName.trim());
```

Output:

```text
BroCode
```

**Memory Trick:**
👉 **Trim = Cut extra spaces**

---

## 6. `toLowerCase()`

Converts all letters to lowercase.

```javascript
console.log(userName.toLowerCase());
```

Output:

```text
brocode
```

---

## 7. `toUpperCase()`

Converts all letters to uppercase.

```javascript
console.log(userName.toUpperCase());
```

Output:

```text
BROCODE
```

**Memory Trick:**
👉 **Lower → small letters**
👉 **Upper → CAPITAL letters**

---

## 8. `repeat()`

Repeats the string a specified number of times.

```javascript
console.log(userName.repeat(3));
```

Output:

```text
BroCodeBroCodeBroCode
```

**Memory Trick:**
👉 **Repeat = Copy multiple times**

---

## 9. `startsWith()`

Checks if a string starts with a specific character or text.

Returns **`true`** or **`false`**.

```javascript
let userName = " BroCode";

console.log(userName.startsWith(" "));
```

Output:

```text
true
```

**Memory Trick:**
👉 **Starts With = Beginning**

---

## 10. `endsWith()`

Checks if a string ends with a specific character.

```javascript
let userName = "BroCode ";

console.log(userName.endsWith(" "));
```

Output:

```text
true
```

**Memory Trick:**
👉 **Ends With = Ending**

---

## 11. `includes()`

Checks whether a string contains a specific value.

```javascript
let userName = "Bro Code";

console.log(userName.includes(" "));
```

Output:

```text
true
```

**Memory Trick:**
👉 **Includes = Contains**

---

## 12. `replaceAll()`

Replaces **all** occurrences of a value.

```javascript
let phone = "123-456-7890";

console.log(phone.replaceAll("-", "/"));
```

Output:

```text
123/456/7890
```

**Memory Trick:**
👉 **Replace All = Change every match**

---

## 13. `padStart()`

Adds characters to the **beginning** until the string reaches the given length.

```javascript
let phone = "123-456-7890";

console.log(phone.padStart(15, "0"));
```

Output:

```text
00123-456-7890
```

**Memory Trick:**
👉 **Pad Start = Add at the front**

---

## 14. `padEnd()`

Adds characters to the **end** until the string reaches the given length.

```javascript
let phone = "123-456-7890";

console.log(phone.padEnd(15, "0"));
```

Output:

```text
123-456-789000
```

**Memory Trick:**
👉 **Pad End = Add at the back**

---

# Quick Revision 🚀

| Method                   | Purpose                          |
| ------------------------ | -------------------------------- |
| `charAt(index)`          | Get character at an index        |
| `indexOf(value)`         | First occurrence index           |
| `lastIndexOf(value)`     | Last occurrence index            |
| `length`                 | Total number of characters       |
| `trim()`                 | Remove spaces from start and end |
| `toLowerCase()`          | Convert to lowercase             |
| `toUpperCase()`          | Convert to uppercase             |
| `repeat(n)`              | Repeat string `n` times          |
| `startsWith()`           | Checks beginning                 |
| `endsWith()`             | Checks ending                    |
| `includes()`             | Checks if text exists            |
| `replaceAll()`           | Replace all matching values      |
| `padStart(length, char)` | Add characters at the beginning  |
| `padEnd(length, char)`   | Add characters at the end        |

## Easy Tricks to Remember 🎯

* **`charAt()`** → Character at index.
* **`indexOf()`** → First position.
* **`lastIndexOf()`** → Last position.
* **`trim()`** → Remove outer spaces.
* **`toLowerCase()` / `toUpperCase()`** → Change letter case.
* **`repeat()`** → Duplicate text.
* **`startsWith()`** → Check the beginning.
* **`endsWith()`** → Check the ending.
* **`includes()`** → Check if it contains something.
* **`replaceAll()`** → Replace every match.
* **`padStart()`** → Add at the front.
* **`padEnd()`** → Add at the back.

### One-Line Rule

> **String methods help you search, modify, format, and manipulate text easily.**
