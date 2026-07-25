# JavaScript Basics – Notes 📝

## 1. `console.log()`

`console.log()` is used to **display output in the browser's Console** (Developer Tools).

### Syntax

```javascript
console.log("Hello");
```

### Example

```javascript
console.log("Hello");
console.log("I like pizza!");
```

Output:

```text
Hello
I like pizza!
```

**Memory Trick 🧠**

> **`console.log()` = Print in the Console**

---

# 2. `window.alert()`

`window.alert()` displays a **popup alert box** in the browser.

### Syntax

```javascript
window.alert("Message");
```

### Example

```javascript
window.alert("This is an alert!");
```

Output:

```text
┌────────────────────┐
│ This is an alert!  │
│         OK         │
└────────────────────┘
```

**Memory Trick 🧠**

> **`alert()` = Popup Message**

---

# 3. `document.getElementById()`

Used to **select an HTML element by its `id`**.

### Syntax

```javascript
document.getElementById("idName");
```

### Example

```javascript
document.getElementById("myH1").textContent = "Hello";
```

It changes the text inside the HTML element whose `id` is `myH1`.

**Memory Trick 🧠**

> **Get Element → By ID**

---

# 4. `textContent`

`textContent` is used to **change or display text** inside an HTML element.

### Example

```javascript
document.getElementById("myP").textContent = "I like pizza!";
```

Output on the webpage:

```text
I like pizza!
```

---

# 5. Comments

Comments are **ignored by JavaScript**. They are used to explain the code.

### Single-line Comment

```javascript
// This is a comment
```

### Multi-line Comment

```javascript
/*
This
is
a
comment
*/
```

**Memory Trick 🧠**

> **Comments are for humans, not for JavaScript.**

---

# 6. Variables

A **variable** is a **container that stores a value**.

### Steps

1. Declare
2. Assign

```javascript
let age = 25;
```

### Syntax

```javascript
let variableName = value;
```

**Memory Trick 🧠**

> **Variable = Box that stores data**

---

# 7. Data Types

## (a) Number

Stores numbers.

```javascript
let age = 25;
let price = 10.99;
let gpa = 2.1;
```

Check the data type:

```javascript
console.log(typeof gpa);
```

Output:

```text
number
```

---

## (b) String

Stores text inside quotes.

```javascript
let firstName = "Bro";
let favoriteFood = "Pizza";
let email = "bro@gmail.com";
```

Output:

```javascript
console.log(`Your name is ${firstName}`);
```

```text
Your name is Bro
```

Check the type:

```javascript
console.log(typeof firstName);
```

Output:

```text
string
```

---

## (c) Boolean

Stores only **`true`** or **`false`**.

```javascript
let isStudent = false;
let online = true;
```

Output:

```text
Enrolled: false
```

Check the type:

```javascript
console.log(typeof isStudent);
```

Output:

```text
boolean
```

**Memory Trick 🧠**

* Number → `25`
* String → `"Bro"`
* Boolean → `true` / `false`

---

# 8. `typeof`

`typeof` tells you the **data type** of a variable.

### Example

```javascript
console.log(typeof age);
```

Output:

```text
number
```

Other examples:

```javascript
typeof "Hello"   → string
typeof true      → boolean
typeof 10        → number
```

---

# 9. Template Literals (`` ` ` ``)

Template literals allow you to **insert variables into strings** using `${}`.

### Syntax

```javascript
`Hello ${name}`
```

### Example

```javascript
let age = 25;

console.log(`You are ${age} years old`);
```

Output:

```text
You are 25 years old
```

**Memory Trick 🧠**

> **Backticks (` `) + `${}` = Insert Variables Easily**

---

# 10. Display Data on the Webpage

```javascript
let fullName = "Bro";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
```

Output on the webpage:

```text
Your name is Bro
You are 25 years old
Enrolled: false
```

---

# Quick Revision 🚀

| Concept                     | Purpose                      |
| --------------------------- | ---------------------------- |
| `console.log()`             | Print output in the Console  |
| `window.alert()`            | Show a popup message         |
| `document.getElementById()` | Select an HTML element by ID |
| `textContent`               | Change/display text in HTML  |
| `//`                        | Single-line comment          |
| `/* */`                     | Multi-line comment           |
| `let`                       | Declare a variable           |
| `typeof`                    | Check the data type          |
| Number                      | Stores numbers               |
| String                      | Stores text                  |
| Boolean                     | Stores `true` or `false`     |
| Template Literal            | Insert variables using `${}` |

---

## Easy Tricks 🎯

* **`console.log()`** → Print in Console.
* **`window.alert()`** → Popup message.
* **`getElementById()`** → Find HTML element by ID.
* **`textContent`** → Change webpage text.
* **`let`** → Create a variable.
* **`typeof`** → Check the variable's type.
* **`` ` ${} ` ``** → Insert variables into strings.

### One-Line Rule

> **JavaScript variables store data, `console.log()` prints to the console, `document.getElementById().textContent` updates webpage content, and `typeof` tells you the data type.**
