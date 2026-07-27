# JavaScript Counter Program – Notes 📝

## What is a Counter Program?

A **Counter Program** is a simple JavaScript application that **increases, decreases, or resets a number** when buttons are clicked.

It teaches important JavaScript concepts like:

* ✅ DOM Manipulation
* ✅ Event Handling
* ✅ Variables
* ✅ Updating Webpage Content
* ✅ Functions

---

# How the Program Works

```text
          User Clicks Button
                  │
                  ▼
        JavaScript Event Runs
                  │
                  ▼
         Update count Variable
                  │
                  ▼
      Update Label on Webpage
```

---

# Your Code

```javascript
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
```

---

# Step 1: Selecting HTML Elements

```javascript
const decreaseBtn = document.getElementById("decreaseBtn");
```

### What does `getElementById()` do?

It finds an HTML element using its `id`.

Example HTML:

```html
<button id="decreaseBtn">Decrease</button>
```

JavaScript:

```javascript
const decreaseBtn = document.getElementById("decreaseBtn");
```

Now the variable points to the button.

The same happens for:

```javascript
const resetBtn = document.getElementById("resetBtn");

const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");
```

---

# Why are Buttons Stored in `const`?

```javascript
const increaseBtn = ...
```

Because the button itself **never changes**.

We don't replace the button with another button.

We only use it.

So `const` is the correct choice.

✅ Good

```javascript
const increaseBtn = ...
```

❌ Unnecessary

```javascript
let increaseBtn = ...
```

---

# Step 2: Creating the Counter Variable

```javascript
let count = 0;
```

Initially,

```text
count = 0
```

Why `let`?

Because the value changes.

Example:

```text
0

↓

1

↓

2

↓

3

↓

2

↓

1

↓

0
```

Since it changes, we use `let`.

---

# Step 3: Increase Button

```javascript
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
```

This means:

> "When the Increase button is clicked, run this function."

---

## What is `.onclick`?

`.onclick` is an **event**.

It waits until the user clicks.

```text
User Click

↓

Function Executes
```

---

## First Line

```javascript
count++;
```

Equivalent to:

```javascript
count = count + 1;
```

Example:

Before:

```text
count = 0
```

After click:

```text
count = 1
```

Another click:

```text
count = 2
```

---

## Second Line

```javascript
countLabel.textContent = count;
```

Updates the label on the webpage.

Before:

```html
<h1>0</h1>
```

After clicking:

```html
<h1>1</h1>
```

Then

```html
<h1>2</h1>
```

Then

```html
<h1>3</h1>
```

---

# Step 4: Decrease Button

```javascript
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
```

`count--`

means

```javascript
count = count - 1;
```

Example

Before:

```text
count = 5
```

Click

↓

```text
count = 4
```

Label updates automatically.

---

# Step 5: Reset Button

```javascript
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
```

Regardless of the current value:

```text
10

↓

0
```

or

```text
-5

↓

0
```

The label is updated to show:

```text
0
```

---

# Program Flow

## When Increase is Clicked

```text
User Clicks +

↓

onclick Event Fires

↓

count++

↓

countLabel.textContent = count

↓

Label Updated
```

---

## When Decrease is Clicked

```text
User Clicks -

↓

onclick Event Fires

↓

count--

↓

Update Label

↓

Display New Count
```

---

## When Reset is Clicked

```text
User Clicks Reset

↓

count = 0

↓

Update Label

↓

Display 0
```

---

# Example Execution

Initial

```text
count = 0
```

Click Increase

```text
count = 1
```

Click Increase

```text
count = 2
```

Click Increase

```text
count = 3
```

Click Decrease

```text
count = 2
```

Click Reset

```text
count = 0
```

---

# Visual Representation

```text
        Counter
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
Decrease Reset Increase
     │      │      │
     ▼      ▼      ▼
 count-- count=0 count++
     │      │      │
     └──────┼──────┘
            ▼
 Update countLabel
            ▼
 Show New Number
```

---

# Understanding `.textContent`

Suppose HTML is:

```html
<h1 id="countLabel">0</h1>
```

JavaScript:

```javascript
countLabel.textContent = 5;
```

Webpage becomes:

```html
<h1>5</h1>
```

`.textContent` changes the text inside an element.

---

# Why Update `textContent` Every Time?

Changing the variable alone:

```javascript
count++;
```

changes only the value in JavaScript memory.

The webpage **doesn't know** it changed.

So we must also do:

```javascript
countLabel.textContent = count;
```

This updates what the user sees.

---

# Real-Life Example

Imagine an attendance counter.

Initial:

```text
People = 0
```

Someone enters:

```text
Increase

↓

1
```

Another enters:

```text
Increase

↓

2
```

Someone leaves:

```text
Decrease

↓

1
```

End of the day:

```text
Reset

↓

0
```

---

# Important Notes ⚠️

* `const` is used for elements because the references don't change.
* `let` is used for `count` because its value changes.
* `.onclick` runs a function when the user clicks.
* `.textContent` updates the displayed text.
* `count++` increases by **1**.
* `count--` decreases by **1**.

---

# Quick Revision 🚀

| Code                        | Purpose                           |
| --------------------------- | --------------------------------- |
| `document.getElementById()` | Select an HTML element            |
| `const`                     | Variable reference doesn't change |
| `let`                       | Variable value can change         |
| `.onclick`                  | Handle click events               |
| `count++`                   | Increase by 1                     |
| `count--`                   | Decrease by 1                     |
| `count = 0`                 | Reset value                       |
| `.textContent`              | Update text on the webpage        |

---

## Easy Tricks 🎯

* **`const`** → HTML elements (they don't change).
* **`let`** → Counter value (it changes).
* **`.onclick`** → Runs code when clicked.
* **`count++`** → Add 1.
* **`count--`** → Subtract 1.
* **`.textContent`** → Refresh the displayed number after every change.

---

# Complete Program Flow

```text
Page Loads
     │
     ▼
Select Buttons & Label
     │
     ▼
count = 0
     │
     ▼
Wait for User Click
     │
 ┌───┼───────────────┐
 ▼   ▼               ▼
+   Reset            -
 │    │              │
 ▼    ▼              ▼
count++ count=0   count--
 │    │              │
 └────┴──────┬───────┘
             ▼
Update textContent
             ▼
Display New Count
```

### One-Line Rule

> **A counter program uses event handlers (`onclick`) to update a variable and then refresh the webpage by setting an element's `.textContent` to the new value.**
