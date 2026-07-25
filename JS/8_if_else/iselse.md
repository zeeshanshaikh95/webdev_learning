# JavaScript `if`, `else if`, and `else` Statements – Notes 📝

## What are `if` Statements?

An **`if` statement** is used to make decisions in JavaScript.

It checks a condition.

* ✅ If the condition is **true**, it executes the code.
* ❌ If the condition is **false**, it skips that code.

---

# Syntax

## `if`

```javascript
if(condition){
    // code
}
```

---

## `if...else`

```javascript
if(condition){
    // if condition is true
}
else{
    // if condition is false
}
```

---

## `if...else if...else`

```javascript
if(condition1){
    // executes if condition1 is true
}
else if(condition2){
    // executes if condition2 is true
}
else{
    // executes if all conditions are false
}
```

---

## Memory Trick 🧠

Think of it like asking questions:

```text
Is Condition 1 true?
        ↓
      Yes → Stop
        ↓
      No
        ↓
Is Condition 2 true?
        ↓
      Yes → Stop
        ↓
      No
        ↓
Run else
```

---

# Example 1: Nested `if`

```javascript
let age = 18;
let hasLicense = true;

if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("You do not have your license yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}
```

### Explanation

First JavaScript checks:

```javascript
age >= 16
```

If **true**, it enters the first `if`.

Then it checks:

```javascript
hasLicense
```

If `true`

Output:

```text
You are old enough to drive
You have your license!
```

If `false`

Output:

```text
You are old enough to drive
You do not have your license yet!
```

If age is below 16

Output:

```text
You must be 16+ to have a license
```

---

# What is a Nested `if`?

A **nested `if`** means placing one `if` statement **inside another `if` statement**.

Example:

```javascript
if(age >= 16){

    if(hasLicense){
        // code
    }

}
```

---

# Example 2: Age Checker Program

## Step 1: Select HTML Elements

```javascript
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
```

### Explanation

| Variable        | Purpose             |
| --------------- | ------------------- |
| `myText`        | Gets the user's age |
| `mySubmit`      | Submit button       |
| `resultElement` | Displays the result |

---

# Step 2: Create Variable

```javascript
let age;
```

Stores the user's age.

---

# Step 3: Button Click Event

```javascript
mySubmit.onclick = function(){
```

This function runs when the user clicks the **Submit** button.

---

# Step 4: Read User Input

```javascript
age = myText.value;
```

Suppose the user types:

```text
25
```

`.value` returns

```text
"25"
```

which is a **string**.

---

# Step 5: Convert to Number

```javascript
age = Number(age);
```

Now

```text
"25"
```

becomes

```text
25
```

(number)

---

# Step 6: Check Conditions

## Condition 1

```javascript
if(age >= 100){
```

If age is 100 or more

Output

```text
You are TOO OLD to enter this site
```

---

## Condition 2

```javascript
else if(age == 0){
```

If age is 0

Output

```text
You can't enter. You were just born.
```

---

## Condition 3

```javascript
else if(age >= 18){
```

If age is 18 or more

Output

```text
You are old enough to enter this site
```

---

## Condition 4

```javascript
else if(age < 0){
```

If the user enters a negative age

Output

```text
Your age can't be below 0
```

---

## Final `else`

```javascript
else{
```

Runs when **none** of the above conditions are true.

Output

```text
You must be 18+ to enter this site
```

---

# Important: Order of Conditions ⚠️

The order of `else if` statements matters because JavaScript checks them **from top to bottom** and stops at the **first true condition**.

Example:

```javascript
if(age >= 18){
```

If the user enters:

```text
150
```

This condition is already **true**, so JavaScript would stop here and never reach:

```javascript
if(age >= 100)
```

That is why your code correctly checks:

```javascript
if(age >= 100)
```

**before**

```javascript
else if(age >= 18)
```

---

# Program Flow

```text
User Enters Age
        ↓
Click Submit
        ↓
Convert to Number
        ↓
Age ≥ 100 ?
   ↓          ↓
 Yes         No
  ↓           ↓
Too Old    Age == 0 ?
               ↓
          Yes      No
           ↓        ↓
      Just Born   Age ≥ 18 ?
                     ↓
               Yes        No
                ↓          ↓
          Allowed     Age < 0 ?
                         ↓
                    Yes      No
                     ↓        ↓
              Invalid Age   Under 18
```

---

# Comparison Operators Used

| Operator | Meaning                   |
| -------- | ------------------------- |
| `>=`     | Greater than or equal to  |
| `<`      | Less than                 |
| `==`     | Equal to (loose equality) |

> **Note:** In modern JavaScript, `===` (strict equality) is generally preferred over `==` because it compares both **value and type**.

Example:

```javascript
0 === 0   // true
"0" === 0 // false
```

---

# Properties & Methods Used

| Property/Method    | Purpose                     |
| ------------------ | --------------------------- |
| `getElementById()` | Select an HTML element      |
| `.value`           | Get textbox input           |
| `Number()`         | Convert string to number    |
| `.onclick`         | Run code on button click    |
| `.textContent`     | Display text on the webpage |

---

# Quick Revision 🚀

| Statement      | Purpose                                       |
| -------------- | --------------------------------------------- |
| `if`           | Check first condition                         |
| `else if`      | Check another condition if previous was false |
| `else`         | Run when all conditions are false             |
| `Number()`     | Convert string to number                      |
| `.value`       | Read user input                               |
| `.textContent` | Display output                                |

---

## Easy Tricks 🎯

* **`if`** → Check a condition.
* **`else if`** → Check another condition.
* **`else`** → Default case.
* JavaScript checks conditions **top to bottom**.
* It **stops at the first condition that is true**.
* Place **more specific conditions before broader ones** (e.g., `age >= 100` before `age >= 18`).

### One-Line Rule

> **An `if...else if...else` statement checks conditions in order, executes the first matching block of code, and ignores the remaining conditions.**
