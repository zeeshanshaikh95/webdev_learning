# JavaScript `this` Keyword – Notes 📝

## What is `this`?

The **`this`** keyword is a special reference that points to **the object that is currently calling the method**.

It allows an object to access **its own properties and methods** without hardcoding the object's name.

> **Simple Definition:**
>
> **`this` = "the current object that is executing the method."**

---

# Syntax

```javascript
const object = {
    property: value,

    method: function(){
        console.log(this.property);
    }
};
```

---

## Memory Trick 🧠

> **`this` = "Me" or "Myself"**

Imagine a person saying:

```text
My name is John.
```

Instead of saying:

```text
John's name is John.
```

the object says:

```javascript
this.name
```

which means:

```text
"My name"
```

---

# Your Example

```javascript
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",

    sayHello: function(){
        console.log(`Hi! I am ${this.favFood}`);
    },

    eat: function(){
        console.log(`${this.name} is eating ${this.favFood}`);
    }
};
```

---

# Understanding `this.name`

```javascript
this.name
```

means:

```javascript
person1.name
```

because `eat()` is called using:

```javascript
person1.eat();
```

So JavaScript automatically sets:

```text
this = person1
```

Therefore:

```javascript
this.name
```

becomes

```javascript
person1.name
```

which is

```text
Spongebob
```

---

# Understanding `this.favFood`

```javascript
this.favFood
```

means

```javascript
person1.favFood
```

Value:

```text
hamburgers
```

---

# Step-by-Step Execution

When JavaScript sees:

```javascript
person1.eat();
```

it does this internally:

### Step 1

```text
this = person1
```

---

### Step 2

Replace:

```javascript
this.name
```

with

```javascript
person1.name
```

↓

```text
Spongebob
```

---

### Step 3

Replace:

```javascript
this.favFood
```

with

```javascript
person1.favFood
```

↓

```text
hamburgers
```

---

### Final Output

```text
Spongebob is eating hamburgers
```

---

# Second Object

```javascript
const person2 = {
    name: "Patrick",
    favFood: "pizza",

    eat: function(){
        console.log(`${this.name} is eating ${this.favFood}`);
    }
};
```

Calling:

```javascript
person2.eat();
```

JavaScript sets

```text
this = person2
```

Now

```javascript
this.name
```

↓

```text
Patrick
```

and

```javascript
this.favFood
```

↓

```text
pizza
```

Output:

```text
Patrick is eating pizza
```

---

# Final Output

```text
Spongebob is eating hamburgers
Patrick is eating pizza
```

---

# Why Use `this`?

Without `this`:

```javascript
const person = {
    name: "John",

    eat: function(){
        console.log(person.name);
    }
};
```

Works...

But what if you copy the object?

```javascript
const person2 = person;
```

Now the function still refers to:

```javascript
person.name
```

instead of

```javascript
person2.name
```

Using `this` solves this problem.

```javascript
console.log(this.name);
```

Now whichever object calls the method becomes `this`.

---

# Visual Representation

```text
person1
│
├── name → Spongebob
├── favFood → hamburgers
└── eat()
      │
      ▼
this
      │
      ▼
person1
```

---

# Another Example

```javascript
const car = {
    brand: "BMW",

    start: function(){
        console.log(`${this.brand} started`);
    }
};

car.start();
```

Output

```text
BMW started
```

---

# Another Example

```javascript
const student = {
    name: "Zeeshan",

    study: function(){
        console.log(`${this.name} is studying`);
    }
};

student.study();
```

Output

```text
Zeeshan is studying
```

---

# `this` Does NOT Work the Same with Arrow Functions

❌ Wrong

```javascript
const person = {
    name: "John",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();
```

Output:

```text
undefined
```

Why?

Arrow functions **do not create their own `this`**.

They inherit `this` from the surrounding scope.

---

## Correct Way

```javascript
const person = {
    name: "John",

    greet: function(){
        console.log(this.name);
    }
};

person.greet();
```

Output:

```text
John
```

> **Rule:** Use **normal functions** for object methods when you need `this`.

---

# `this` Changes Depending on the Caller

```javascript
const person1 = {
    name: "Spongebob",
    greet: function(){
        console.log(this.name);
    }
};

const person2 = {
    name: "Patrick",
    greet: person1.greet
};

person1.greet();
person2.greet();
```

Output:

```text
Spongebob
Patrick
```

Even though both use the **same function**, `this` changes because the **calling object** changes.

---

# Program Flow

```text
Object Calls Method
        ↓
JavaScript Sets "this"
        ↓
this → Calling Object
        ↓
Access Properties
        ↓
Execute Function
```

---

# Visual Flow

```text
person1.eat()

↓

this = person1

↓

this.name

↓

"Spongebob"

↓

Print
```

---

# Real-Life Example

Imagine two employees.

```text
Employee A
Name = Alex

Employee B
Name = Sam
```

Both have the same method:

```javascript
introduce()
```

When Alex calls it:

```text
this = Alex
```

When Sam calls it:

```text
this = Sam
```

So the same method works correctly for both people.

---

# Important Notes ⚠️

* `this` refers to the **object that calls the method**.
* It allows methods to access the object's own properties.
* **Arrow functions do not have their own `this`**.
* Prefer **normal functions** for object methods.

---

# Quick Revision 🚀

| Code                    | Meaning                                   |
| ----------------------- | ----------------------------------------- |
| `this.name`             | Current object's name                     |
| `this.favFood`          | Current object's favorite food            |
| `person.eat()`          | Calls the object's method                 |
| `this`                  | Refers to the calling object              |
| Arrow function + `this` | ❌ Usually not suitable for object methods |

---

## Easy Tricks 🎯

* **`this` = "my own object."**
* `this.property` → Access the current object's property.
* `this.method()` → Call another method of the same object.
* The value of `this` depends on **how the function is called**, not where it is written.
* **Never use arrow functions for object methods if you need `this`.**

### One-Line Rule

> **`this` refers to the object that is currently calling the method, allowing the method to access that object's own properties and methods; use normal functions (not arrow functions) when relying on `this`.**
