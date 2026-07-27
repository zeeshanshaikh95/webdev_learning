# JavaScript Password Generator – Notes 📝

## What Does This Program Do?

This program generates a **random password** based on the user's preferences.

You can choose:

* ✅ Password length
* ✅ Lowercase letters (`a-z`)
* ✅ Uppercase letters (`A-Z`)
* ✅ Numbers (`0-9`)
* ✅ Symbols (`!@#$...`)

The program randomly picks characters from the selected character sets to create a secure password.

> **Note:** There is a small typo in your code:
>
> ```javascript
> const numberChars = "0123456789";z
> ```
>
> The extra **`z`** should be removed:
>
> ```javascript
> const numberChars = "0123456789";
> ```

---

# Program Flow

```text
User Selects:
Password Length
Include Lowercase?
Include Uppercase?
Include Numbers?
Include Symbols?
          ↓
Build Allowed Characters
          ↓
Generate Random Characters
          ↓
Create Password
          ↓
Return Password
          ↓
Display Password
```

---

# Step 1: Create the Function

```javascript
function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
){
```

### Parameters

| Parameter          | Purpose                    |
| ------------------ | -------------------------- |
| `length`           | Password length            |
| `includeLowercase` | Include lowercase letters  |
| `includeUppercase` | Include uppercase letters  |
| `includeNumbers`   | Include digits             |
| `includeSymbols`   | Include special characters |

Example:

```javascript
generatePassword(12, true, true, true, true);
```

means

```text
Length = 12

✔ Lowercase

✔ Uppercase

✔ Numbers

✔ Symbols
```

---

# Step 2: Character Sets

```javascript
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+-=";
```

These strings contain all the possible characters that can appear in the password.

---

# Step 3: Create Empty Variables

```javascript
let allowedChars = "";

let password = "";
```

Initially:

```text
allowedChars = ""

password = ""
```

---

# Step 4: Build the Allowed Characters

```javascript
allowedChars += includeLowercase
? lowercaseChars
: "";
```

### What is the Ternary Operator?

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Meaning:

If

```javascript
includeLowercase == true
```

then

```javascript
allowedChars += lowercaseChars;
```

Otherwise

```javascript
allowedChars += "";
```

(nothing)

---

The same logic is repeated:

```javascript
allowedChars += includeUppercase
? uppercaseChars
: "";
```

```javascript
allowedChars += includeNumbers
? numberChars
: "";
```

```javascript
allowedChars += includeSymbols
? symbolChars
: "";
```

---

### Example

If

```javascript
includeLowercase = true;
includeUppercase = false;
includeNumbers = true;
includeSymbols = false;
```

Then

```text
allowedChars

↓

abcdefghijklmnopqrstuvwxyz0123456789
```

Only lowercase letters and numbers are included.

---

# Step 5: Validate Password Length

```javascript
if(length <= 0){
    return "(password length must be at least 1)";
}
```

If the user enters:

```text
0
```

Output:

```text
(password length must be at least 1)
```

---

# Step 6: Validate Character Selection

```javascript
if(allowedChars.length === 0){
```

Suppose:

```javascript
includeLowercase = false;
includeUppercase = false;
includeNumbers = false;
includeSymbols = false;
```

Then

```text
allowedChars = ""
```

Length:

```text
0
```

Output:

```text
(At least 1 set of character needs to be selected)
```

---

# Step 7: Generate the Password

```javascript
for(let i = 0; i < length; i++){
```

If

```javascript
length = 12;
```

The loop runs:

```text
12 times
```

---

# Step 8: Pick a Random Character

```javascript
const randomIndex =
Math.floor(
Math.random() * allowedChars.length
);
```

### Example

Suppose

```text
allowedChars

↓

abcABC123
```

Length:

```text
9
```

Random number:

```text
0.65
```

Calculation:

```text
0.65 × 9

↓

5.85
```

Using

```javascript
Math.floor()
```

Result:

```text
5
```

Character at index 5:

```text
C
```

---

# Step 9: Add Character to Password

```javascript
password += allowedChars[randomIndex];
```

Suppose:

```text
password = "aB9"
```

Random character:

```text
@
```

After adding:

```text
password

↓

aB9@
```

The loop keeps repeating until the required length is reached.

---

# Step 10: Return the Password

```javascript
return password;
```

The function sends the generated password back.

---

# Step 11: User Settings

```javascript
const passwordLength = 12;

const includeLowercase = true;

const includeUppercase = true;

const includeNumbers = true;

const includeSymbols = true;
```

Meaning:

```text
Password Length = 12

✔ Lowercase

✔ Uppercase

✔ Numbers

✔ Symbols
```

---

# Step 12: Generate the Password

```javascript
const password =
generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);
```

Example output:

```text
aB8#K2@mP1$x
```

Every execution produces a different password because `Math.random()` generates different random values.

---

# Step 13: Display the Password

```javascript
console.log(`Generated password: ${password}`);
```

Example Output:

```text
Generated password: aB8#K2@mP1$x
```

---

# How the Password is Built

Suppose:

```text
Allowed Characters

↓

abcABC123@
```

Loop:

```text
Random Index → Character

4 → B

1 → b

7 → 3

9 → @

2 → c
```

Password:

```text
Bb3@c
```

---

# Important Note ⚠️

This generator **chooses characters completely at random** from the selected character sets.

That means if you enable lowercase, uppercase, numbers, and symbols, the password **might not contain at least one of each type**. It only guarantees that it uses the **combined allowed character set**.

For example, even with all options enabled, a generated password could accidentally contain only letters.

A stronger password generator would first ensure at least one character from each selected category, then fill the remaining characters randomly and shuffle the result.

---

# Methods & Properties Used

| Method/Property  | Purpose                    |
| ---------------- | -------------------------- |
| `Math.random()`  | Generate random decimal    |
| `Math.floor()`   | Convert decimal to integer |
| `.length`        | Number of characters       |
| `+=`             | Append characters          |
| `return`         | Return the password        |
| Template Literal | Display the password       |

---

# Quick Revision 🚀

| Code              | Purpose              |
| ----------------- | -------------------- |
| `Math.random()`   | Random decimal       |
| `Math.floor()`    | Whole number index   |
| `.length`         | Count characters     |
| `allowedChars +=` | Build character pool |
| `password +=`     | Add random character |
| `return`          | Send password back   |

---

## Easy Tricks 🎯

* **Character sets** → Store all available characters.
* **`allowedChars`** → Contains only the selected character types.
* **`Math.random()`** → Picks a random position.
* **`Math.floor()`** → Converts it into a valid array/string index.
* **`password +=`** → Builds the password one character at a time.
* **`return`** → Gives the completed password back to the caller.

### One-Line Rule

> **The password generator creates a random password by building a pool of allowed characters based on the user's choices, randomly selecting characters from that pool, and repeating the process until the desired password length is reached.**
