# JavaScript Number Guessing Game – Notes 📝

## What is this Program?

This program creates a **Number Guessing Game** where:

* A random number is generated between **1 and 100**.
* The user keeps guessing until the correct number is entered.
* The program tells whether the guess is **too high**, **too low**, or **correct**.
* It also counts the number of attempts.

---

# Step 1: Set the Range

```javascript
const minNum = 1;
const maxNum = 100;
```

* `minNum` → Lowest possible number.
* `maxNum` → Highest possible number.

---

# Step 2: Generate a Random Number

```javascript
const answer =
Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
```

### How it Works

### `Math.random()`

Generates a random decimal between **0 (inclusive)** and **1 (exclusive)**.

Example:

```text
0.23
0.78
0.04
```

---

### Multiply

```javascript
Math.random() * (maxNum - minNum + 1)
```

```text
0.56 × 100 = 56
```

---

### `Math.floor()`

Removes the decimal.

```javascript
Math.floor(56.89)
```

Output

```text
56
```

---

### Add `minNum`

```javascript
+ minNum
```

Final random number:

```text
1 to 100
```

### Memory Trick 🧠

```text
Random Decimal
      ↓
Multiply
      ↓
Remove Decimal
      ↓
Add Minimum Number
```

---

# Step 3: Variables

```javascript
let attempts = 0;
let guess;
let running = true;
```

### Explanation

* `attempts` → Counts guesses.
* `guess` → Stores the user's input.
* `running` → Controls the game loop.

---

# Step 4: Repeat Until Correct

```javascript
while(running){
```

The game keeps running while `running` is `true`.

When the correct answer is guessed:

```javascript
running = false;
```

The loop stops.

---

# Step 5: Get User Input

```javascript
guess = window.prompt(
`Guess a number between ${minNum} - ${maxNum}`
);

guess = Number(guess);
```

### Why `Number()`?

`prompt()` always returns a **string**.

Example

```text
"25"
```

`Number()` converts it into

```text
25
```

---

# Step 6: Check for Invalid Input

### Not a Number

```javascript
if(isNaN(guess)){
```

Example

```text
abc
hello
@
```

Output

```text
Please enter a valid number
```

---

### Outside the Range

```javascript
else if(
guess < minNum ||
guess > maxNum
)
```

Example

```text
-5
150
```

Output

```text
Please enter a valid number
```

---

# Step 7: Count Attempts

```javascript
attempts++;
```

Every valid guess increases the counter.

Example

```text
Guess 1 → attempts = 1

Guess 2 → attempts = 2
```

---

# Step 8: Compare the Guess

### Too Low

```javascript
if(guess < answer){
```

Output

```text
TOO LOW! TRY AGAIN!
```

---

### Too High

```javascript
else if(guess > answer){
```

Output

```text
TOO HIGH! TRY AGAIN!
```

---

### Correct Guess

```javascript
else{
```

Output

```javascript
CORRECT!
The answer was 45.
It took you 6 attempts.
```

Then

```javascript
running = false;
```

The game ends.

---

# Program Flow

```text
Start
   ↓
Generate Random Number
   ↓
Ask User for Guess
   ↓
Valid Input?
   ↓
 No → Show Error
   ↓
 Yes
   ↓
Increase Attempts
   ↓
Guess < Answer?
   ↓
Yes → Too Low
   ↓
No
   ↓
Guess > Answer?
   ↓
Yes → Too High
   ↓
No
   ↓
Correct!
   ↓
End Game
```

---

# Functions Used

| Function          | Purpose                        |
| ----------------- | ------------------------------ |
| `Math.random()`   | Generate a random decimal      |
| `Math.floor()`    | Remove decimal part            |
| `window.prompt()` | Get user input                 |
| `Number()`        | Convert string to number       |
| `isNaN()`         | Check if input is not a number |

---

# Quick Revision 🚀

| Code              | Purpose                  |
| ----------------- | ------------------------ |
| `Math.random()`   | Random decimal (0–1)     |
| `Math.floor()`    | Remove decimal           |
| `Number()`        | Convert string to number |
| `isNaN()`         | Check invalid number     |
| `while(running)`  | Repeat until game ends   |
| `attempts++`      | Increase attempt count   |
| `running = false` | Stop the loop            |

---

## Easy Tricks 🎯

* **`Math.random()`** → Random number.
* **`Math.floor()`** → Remove decimal.
* **`Number()`** → String ➜ Number.
* **`isNaN()`** → Check if input is **Not a Number**.
* **`attempts++`** → Add **1** after each valid guess.
* **`running = false`** → End the game.

### One-Line Rule

> **The game keeps asking for guesses until the user enters the correct random number, while validating the input and counting the number of attempts.**
