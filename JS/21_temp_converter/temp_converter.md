# JavaScript Temperature Converter – Notes 📝

## What is this Program?

This program converts temperature between:

* 🌡️ **Celsius → Fahrenheit**
* 🌡️ **Fahrenheit → Celsius**

The user:

1. Enters a temperature.
2. Selects a conversion using a radio button.
3. Clicks a button.
4. Sees the converted result.

---

# Step 1: Select HTML Elements

```javascript
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
```

### Explanation

These variables store references to HTML elements.

| Variable       | Purpose                           |
| -------------- | --------------------------------- |
| `textBox`      | Gets the user's temperature input |
| `toFahrenheit` | Fahrenheit radio button           |
| `toCelsius`    | Celsius radio button              |
| `result`       | Displays the output               |

---

# Step 2: Create a Variable

```javascript
let temp;
```

This variable stores the temperature during the conversion.

---

# Step 3: Create the Function

```javascript
function convert(){
```

The `convert()` function runs when the user clicks the **Convert** button.

---

# Step 4: Check if Fahrenheit is Selected

```javascript
if(toFahrenheit.checked){
```

### What is `.checked`?

`.checked` returns:

* `true` ✅ → Radio button is selected.
* `false` ❌ → Radio button is not selected.

Example:

```javascript
toFahrenheit.checked
```

Output:

```text
true
```

or

```text
false
```

**Memory Trick 🧠**

> **`.checked` = Is the radio button selected?**

---

# Step 5: Get the Input

```javascript
temp = Number(textBox.value);
```

### Explanation

`textBox.value`

Returns the input as a **string**.

Example

```text
"25"
```

`Number()`

Converts it into

```text
25
```

---

# Step 6: Celsius → Fahrenheit

```javascript
temp = temp * 9 / 5 + 32;
```

Formula:

```text
°F = (°C × 9/5) + 32
```

Example:

```text
25°C

↓

25 × 9/5 + 32

↓

77°F
```

---

# Step 7: Show the Result

```javascript
result.textContent =
temp.toFixed(1) + "°F";
```

Output:

```text
77.0°F
```

---

# Step 8: What is `toFixed()`?

```javascript
temp.toFixed(1)
```

### Definition

`toFixed()` formats a number by **rounding it to a fixed number of decimal places**.

### Syntax

```javascript
number.toFixed(digits);
```

### Examples

```javascript
let num = 25.6789;

console.log(num.toFixed(1));
```

Output:

```text
25.7
```

---

```javascript
console.log(num.toFixed(2));
```

Output:

```text
25.68
```

---

```javascript
console.log(num.toFixed(0));
```

Output:

```text
26
```

### Important

`toFixed()` returns a **string**, not a number.

**Memory Trick 🧠**

> **`toFixed()` = Fix the number of decimal places**

---

# Step 9: Fahrenheit → Celsius

```javascript
else if(toCelsius.checked){
```

If the Celsius radio button is selected:

```javascript
temp = Number(textBox.value);

temp = (temp - 32) * (5/9);
```

Formula:

```text
°C = (°F − 32) × 5/9
```

Example:

```text
86°F

↓

(86 − 32) × 5/9

↓

30°C
```

Display:

```javascript
result.textContent =
temp.toFixed(1) + "°C";
```

Output:

```text
30.0°C
```

---

# Step 10: No Radio Button Selected

```javascript
else{
    result.textContent = "Select a unit";
}
```

If neither radio button is selected, the program shows:

```text
Select a unit
```

---

# Program Flow

```text
Start
   ↓
Enter Temperature
   ↓
Click Convert
   ↓
Fahrenheit Selected?
   ↓
Yes → Convert °C → °F
   ↓
Display Result
   ↓
No
   ↓
Celsius Selected?
   ↓
Yes → Convert °F → °C
   ↓
Display Result
   ↓
No
   ↓
"Select a unit"
```

---

# Methods & Properties Used

| Method/Property    | Purpose                           |
| ------------------ | --------------------------------- |
| `getElementById()` | Select an HTML element            |
| `.value`           | Get user input                    |
| `Number()`         | Convert string to number          |
| `.checked`         | Check if radio button is selected |
| `.textContent`     | Display text on the webpage       |
| `.toFixed()`       | Round to fixed decimal places     |

---

# Quick Revision 🚀

| Code                | Purpose                     |
| ------------------- | --------------------------- |
| `.value`            | Get textbox value           |
| `Number()`          | Convert string to number    |
| `.checked`          | Check selected radio button |
| `.textContent`      | Display result              |
| `.toFixed(1)`       | Show one decimal place      |
| `* 9/5 + 32`        | Celsius → Fahrenheit        |
| `(temp - 32) * 5/9` | Fahrenheit → Celsius        |

---

## Easy Tricks 🎯

* **`.value`** → Read textbox input.
* **`Number()`** → Convert text to a number.
* **`.checked`** → Check if a radio button is selected.
* **`.textContent`** → Update webpage text.
* **`.toFixed(1)`** → Keep **1 decimal place**.

### Conversion Formulas

```text
°C → °F
(°C × 9/5) + 32
```

```text
°F → °C
(°F − 32) × 5/9
```

### One-Line Rule

> **The program reads a temperature, checks which conversion the user selected using `.checked`, converts it with the correct formula, rounds it using `.toFixed()`, and displays the result on the webpage.**
