# JavaScript `.checked` Property – Notes 📝

## What is `.checked`?

The **`.checked`** property is used to determine whether an **HTML checkbox** or **radio button** is selected.

It returns:

* ✅ `true` → Checked/Selected
* ❌ `false` → Not Checked/Not Selected

---

## Syntax

```javascript
element.checked
```

Example:

```javascript
if(myCheckBox.checked){
    console.log("Checked");
}
```

---

## Memory Trick 🧠

> **`.checked` = "Is this selected?"**

```text
Checkbox

☑ Checked  → true

☐ Unchecked → false
```

---

# Step 1: Get HTML Elements

```javascript
const myCheckBox = document.getElementById("myCheckBox");

const visaBtn = document.getElementById("visaBtn");

const masterCardBtn = document.getElementById("masterCardBtn");

const paypalBtn = document.getElementById("paypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");

const paymentResult = document.getElementById("paymentResult");
```

## Explanation

These variables store references to HTML elements.

| Variable        | Purpose                   |
| --------------- | ------------------------- |
| `myCheckBox`    | Subscription checkbox     |
| `visaBtn`       | Visa radio button         |
| `masterCardBtn` | MasterCard radio button   |
| `paypalBtn`     | PayPal radio button       |
| `mySubmit`      | Submit button             |
| `subResult`     | Shows subscription result |
| `paymentResult` | Shows payment result      |

---

# Step 2: Button Click Event

```javascript
mySubmit.onclick = function(){
```

### Explanation

This function runs whenever the **Submit** button is clicked.

Program flow:

```text
Click Submit
      ↓
Run Function
      ↓
Check Checkbox
      ↓
Check Radio Buttons
      ↓
Display Result
```

---

# Step 3: Check the Checkbox

```javascript
if(myCheckBox.checked){
    subResult.textContent = `You are subscribed!`;
}
else{
    subResult.textContent = `You are NOT subscribed!`;
}
```

### How It Works

If the checkbox is checked:

```text
☑ Newsletter
```

Then:

```javascript
myCheckBox.checked
```

returns

```text
true
```

Output:

```text
You are subscribed!
```

---

If the checkbox is not checked:

```text
☐ Newsletter
```

Then:

```javascript
myCheckBox.checked
```

returns

```text
false
```

Output:

```text
You are NOT subscribed!
```

---

# Step 4: Display the Message

```javascript
subResult.textContent =
`You are subscribed!`;
```

### `.textContent`

Updates the text inside an HTML element.

Example:

```javascript
subResult.textContent = "Hello";
```

The webpage becomes:

```text
Hello
```

---

# Step 5: Check Radio Buttons

```javascript
if(visaBtn.checked){
```

### Explanation

Checks whether the Visa radio button is selected.

If selected:

```text
Visa ●
```

Output:

```text
You are paying with Visa
```

---

# Step 6: Check MasterCard

```javascript
else if(masterCardBtn.checked){
```

If MasterCard is selected:

Output:

```text
You are paying with MasterCard
```

---

# Step 7: Check PayPal

```javascript
else if(paypalBtn.checked){
```

If PayPal is selected:

Output:

```text
You are paying with PayPal
```

---

# Step 8: No Payment Selected

```javascript
else{
    paymentResult.textContent =
    `You must select a payment type`;
}
```

If no radio button is selected:

Output:

```text
You must select a payment type
```

---

# Why Use `else if`?

Only **one radio button** can be selected at a time.

Example:

```text
(●) Visa

( ) MasterCard

( ) PayPal
```

Only Visa is checked.

So JavaScript stops after finding the first `true` condition.

---

# Checkbox vs Radio Button

| Checkbox                           | Radio Button                                     |
| ---------------------------------- | ------------------------------------------------ |
| Multiple checkboxes can be checked | Only one radio button in a group can be selected |
| Independent                        | Mutually exclusive                               |
| Returns `true` or `false`          | Returns `true` or `false`                        |

---

# Program Flow

```text
User Clicks Submit
        ↓
Check Subscription Checkbox
        ↓
Checked?
   ↓           ↓
Yes          No
 ↓            ↓
Subscribed   Not Subscribed
        ↓
Check Visa?
        ↓
Yes → Visa
        ↓
No
        ↓
Check MasterCard?
        ↓
Yes → MasterCard
        ↓
No
        ↓
Check PayPal?
        ↓
Yes → PayPal
        ↓
No
        ↓
Select Payment Type
```

---

# Properties & Methods Used

| Property/Method    | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `getElementById()` | Select an HTML element                               |
| `.checked`         | Check whether a checkbox or radio button is selected |
| `.onclick`         | Run code when a button is clicked                    |
| `.textContent`     | Display text on the webpage                          |

---

# Quick Revision 🚀

| Code           | Purpose                       |
| -------------- | ----------------------------- |
| `.checked`     | Returns `true` or `false`     |
| `.onclick`     | Executes code on button click |
| `.textContent` | Updates webpage text          |
| `if`           | Check first condition         |
| `else if`      | Check additional conditions   |
| `else`         | Run when no condition is true |

---

## Easy Tricks 🎯

* **`.checked`** → Is the checkbox/radio button selected?
* **Checkbox** → Can have multiple selections (if there are multiple checkboxes).
* **Radio Button** → Only one option can be selected in a group.
* **`.onclick`** → Runs when the button is clicked.
* **`.textContent`** → Changes the displayed text.

### One-Line Rule

> **The `.checked` property returns `true` if a checkbox or radio button is selected and `false` otherwise, making it useful for validating user choices and displaying appropriate messages.**
