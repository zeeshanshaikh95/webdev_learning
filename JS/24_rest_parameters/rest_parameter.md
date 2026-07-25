# JavaScript Rest Parameters (`...rest`) – Notes 📝

## What are Rest Parameters?

**Rest parameters (`...rest`)** allow a function to accept a **variable number of arguments** and **bundle them into a single array**.

### Syntax

```javascript
function functionName(...rest){
    // code
}
```

---

## Spread vs Rest

Although both use **`...`**, they do opposite things.

| Spread Operator                               | Rest Parameter                                 |
| --------------------------------------------- | ---------------------------------------------- |
| **Expands** an array into individual elements | **Bundles** individual arguments into an array |
| Used while calling a function                 | Used while defining a function                 |

### Memory Trick 🧠

```text
Spread (...)
📦 → 🍎 🍌 🍇
(Unpack)

Rest (...)
🍎 🍌 🍇 → 📦
(Pack)
```

> **Spread = Unpack**
> **Rest = Pack**

---

# Your Code

```javascript
function openFridge(...foods){
    console.log(...foods);
}
```

### Explanation

Here,

```javascript
...foods
```

is a **rest parameter**.

No matter how many arguments you pass, JavaScript stores them inside an array called `foods`.

---

# Passing Arguments

```javascript
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
```

Function call:

```javascript
openFridge(food1, food2, food3, food4, food5);
```

JavaScript automatically creates:

```javascript
foods = [
    "pizza",
    "hamburger",
    "hotdog",
    "sushi",
    "ramen"
];
```

---

# Why `console.log(...foods)`?

```javascript
console.log(...foods);
```

Here, `foods` is already an array.

The **spread operator** unpacks it.

JavaScript changes:

```javascript
console.log(...foods);
```

into

```javascript
console.log(
    "pizza",
    "hamburger",
    "hotdog",
    "sushi",
    "ramen"
);
```

Output:

```text
pizza hamburger hotdog sushi ramen
```

---

# What if You Write

```javascript
console.log(foods);
```

Output:

```text
[
  "pizza",
  "hamburger",
  "hotdog",
  "sushi",
  "ramen"
]
```

Because it prints the entire array.

---

# Rest Parameter Example

```javascript
function add(...numbers){
    let total = 0;

    for(let number of numbers){
        total += number;
    }

    return total;
}

console.log(add(10,20,30,40));
```

Output:

```text
100
```

Here,

```javascript
add(10,20,30,40);
```

becomes

```javascript
numbers = [10,20,30,40];
```

---

# Another Example

```javascript
function greet(firstName, ...hobbies){
    console.log(firstName);
    console.log(hobbies);
}

greet("Zee", "Coding", "Gym", "Gaming");
```

Output:

```text
Zee
["Coding", "Gym", "Gaming"]
```

Notice:

* `firstName` gets the **first argument**.
* `...hobbies` collects **all remaining arguments** into an array.

---

# Program Flow

```text
Arguments
   ↓
pizza
hamburger
hotdog
sushi
ramen
   ↓
Rest Parameter (...foods)
   ↓
[
 pizza,
 hamburger,
 hotdog,
 sushi,
 ramen
]
   ↓
Use Array Inside Function
```

---

# Rest vs Spread

| Feature | Rest (`...`)                   | Spread (`...`)                           |
| ------- | ------------------------------ | ---------------------------------------- |
| Purpose | Bundle arguments into an array | Expand an array into individual elements |
| Used In | Function parameters            | Function calls, arrays, objects          |
| Result  | Array                          | Individual values                        |

---

# Quick Revision 🚀

| Code                    | Purpose                         |
| ----------------------- | ------------------------------- |
| `function(...rest)`     | Accept unlimited arguments      |
| `...foods` (parameter)  | Bundle arguments into an array  |
| `console.log(...foods)` | Expand the array while printing |
| `console.log(foods)`    | Print the entire array          |

---

## Easy Tricks 🎯

* **Rest (`...`)** → **Pack** values into an array.
* **Spread (`...`)** → **Unpack** an array into values.
* Rest parameters **must be the last parameter** in the function definition.
* Use rest parameters when you don't know how many arguments will be passed.

### One-Line Rule

> **Rest parameters (`...rest`) collect multiple function arguments into a single array, while the spread operator (`...`) expands an array into individual elements.**
