# JavaScript Rest Parameters with `sum()` – Notes 📝

## What Does This Program Do?

This program:

* Accepts **any number of arguments** using a **rest parameter (`...numbers`)**.
* Adds all the numbers together.
* Returns the total.
* Prints the result using different methods.

---

# Step 1: Function Definition

```javascript
function sum(...numbers){
```

### Explanation

`...numbers` is a **rest parameter**.

It collects all arguments into an array.

Example:

```javascript
sum(1,2,3,4,5);
```

JavaScript automatically creates:

```javascript
numbers = [1,2,3,4,5];
```

### Memory Trick 🧠

> **Rest (`...`) = Pack multiple values into one array**

---

# Step 2: Create a Total Variable

```javascript
let result = 0;
```

This variable stores the running total.

Initially:

```text
result = 0
```

---

# Step 3: Loop Through the Array

```javascript
for(let number of numbers){
    result += number;
}
```

### How it Works

The `for...of` loop visits every number one by one.

Example:

```text
numbers = [1,2,3,4,5]
```

| Loop  | number | result |
| ----- | ------ | ------ |
| Start | -      | 0      |
| 1     | 1      | 1      |
| 2     | 2      | 3      |
| 3     | 3      | 6      |
| 4     | 4      | 10     |
| 5     | 5      | 15     |

Final result:

```text
15
```

---

# Step 4: Return the Result

```javascript
return result;
```

The function gives the final sum back.

---

# Step 5: Call the Function

```javascript
const result = sum(1,2,3,4,5);
```

JavaScript executes:

```text
1 + 2 + 3 + 4 + 5
```

Result:

```text
15
```

So,

```javascript
result = 15;
```

---

# Step 6: String Concatenation

```javascript
console.log("The sum is:" + result);
```

Output:

```text
The sum is:15
```

Here, `+` joins the string and the number.

---

# Step 7: Why This Doesn't Work

```javascript
console.log("The sum is:+$${result}");
```

Output:

```text
The sum is:+$${result}
```

### Why?

Because you used **double quotes (`" "`)**.

JavaScript treats everything inside double quotes as **plain text**.

It **does not** replace `${result}` with the variable value.

---

# Step 8: Template Literals ✅

```javascript
console.log(`The sum is: ${result}`);
```

Output:

```text
The sum is: 15
```

### Why Does It Work?

Because template literals use **backticks (` `)** instead of quotes.

Anything inside:

```javascript
${}
```

is evaluated as JavaScript code.

---

# Difference Between Quotes and Backticks

### Double Quotes

```javascript
console.log("${result}");
```

Output:

```text
${result}
```

JavaScript prints the text exactly as written.

---

### Backticks

```javascript
console.log(`${result}`);
```

Output:

```text
15
```

JavaScript replaces `${result}` with the value stored in the variable.

---

# Memory Trick 🧠

```text
" "   → Plain Text

` `   → Smart String

${}   → Insert Variable
```

Think:

* **Quotes** = Photograph 📷 (can't change)
* **Backticks** = Live Screen 📺 (updates with variable values)

---

# Program Flow

```text
Call sum(1,2,3,4,5)
        ↓
numbers = [1,2,3,4,5]
        ↓
Loop Through Array
        ↓
Add Every Number
        ↓
Total = 15
        ↓
Return 15
        ↓
Print Result
```

---

# Rest Parameter Recap

```javascript
function sum(...numbers)
```

becomes

```javascript
numbers = [1,2,3,4,5]
```

---

# Quick Revision 🚀

| Code                          | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| `...numbers`                  | Collect arguments into an array              |
| `for...of`                    | Loop through the array                       |
| `result += number`            | Add each number                              |
| `return result`               | Return the total                             |
| `"text" + result`             | Concatenate string and value                 |
| `` `The sum is: ${result}` `` | Template literal with variable interpolation |

---

## Easy Tricks 🎯

* **Rest (`...`)** → Pack arguments into an array.
* **`for...of`** → Visit each array element.
* **`+=`** → Add and store the result.
* **`return`** → Send the result back.
* **`+`** → Join strings and values.
* **Backticks (` `)** → Enable template literals.
* **`${}`** → Insert a variable or expression into a string.

### One-Line Rule

> **The `sum()` function uses a rest parameter to collect any number of arguments into an array, adds them using a `for...of` loop, returns the total, and template literals (`\`${}``) display the result dynamically.**
