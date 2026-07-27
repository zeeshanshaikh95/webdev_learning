# JavaScript Objects – Notes 📝

## What is an Object?

An **object** is a collection of **related properties (data)** and **methods (functions)** that represent a real-world entity.

Think of an object as a **container** that stores information and actions about something.

Examples:

* 👤 Person
* 🚗 Car
* 📱 Mobile Phone
* 🐶 Pet
* 🛒 Product

---

# Syntax

```javascript
const objectName = {
    key: value,
    key: value,

    methodName: function(){
        // code
    }
};
```

Example:

```javascript
const person = {
    firstName: "John",
    age: 25,

    sayHello: function(){
        console.log("Hello!");
    }
};
```

---

## Memory Trick 🧠

> **Object = A thing with information + actions**

Think of a person.

```text
Person
│
├── Name
├── Age
├── Job
├── Walk()
├── Eat()
└── Sleep()
```

The **information** is stored as **properties**, and the **actions** are stored as **methods**.

---

# Your Object

```javascript
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,

    sayHello: function(){
        console.log("Hi! I am Spongebob!");
    },

    eat: function(){
        console.log("I am eating a Krabby Patty");
    }
};
```

This object represents one person.

---

# Properties

Properties store information.

```javascript
firstName: "Spongebob"
```

Property:

```text
firstName
```

Value:

```text
Spongebob
```

---

Another property:

```javascript
age: 30
```

Property:

```text
age
```

Value:

```text
30
```

---

Complete Properties

| Property     | Value           |
| ------------ | --------------- |
| `firstName`  | `"Spongebob"`   |
| `lastName`   | `"Squarepants"` |
| `age`        | `30`            |
| `isEmployed` | `true`          |

---

# Methods

Methods are functions stored inside an object.

Example:

```javascript
sayHello: function(){
    console.log("Hi! I am Spongebob!");
}
```

This is called a **method**.

It performs an action.

---

Another method:

```javascript
eat: function(){
    console.log("I am eating a Krabby Patty");
}
```

---

# Second Object

```javascript
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,

    sayHello: () => console.log("Hey, I'm Patrick..."),

    eat: () =>
        console.log("I am eating roast beef, chicken, and pizza"),
};
```

This object represents another person.

Properties:

| Property     | Value       |
| ------------ | ----------- |
| `firstName`  | `"Patrick"` |
| `lastName`   | `"Star"`    |
| `age`        | `42`        |
| `isEmployed` | `false`     |

Methods:

* `sayHello()`
* `eat()`

---

# Accessing Properties

Use **dot notation**.

```javascript
console.log(person1.firstName);
```

Output:

```text
Spongebob
```

---

Another example:

```javascript
console.log(person2.age);
```

Output:

```text
42
```

---

# Calling Methods

Methods are called just like normal functions.

```javascript
person1.eat();
```

JavaScript looks inside `person1` for the `eat` method.

It executes:

```javascript
function(){
    console.log("I am eating a Krabby Patty");
}
```

Output:

```text
I am eating a Krabby Patty
```

---

Second method:

```javascript
person2.eat();
```

Output:

```text
I am eating roast beef, chicken, and pizza
```

---

# Final Output

```text
I am eating a Krabby Patty
I am eating roast beef, chicken, and pizza
```

---

# Function Expression vs Arrow Function in Objects

## Normal Method

```javascript
sayHello: function(){
    console.log("Hi!");
}
```

---

## Arrow Method

```javascript
sayHello: () => console.log("Hi!");
```

Both work in your example.

However, **normal functions are generally preferred for object methods**, especially when using `this`.

---

# Why Prefer Normal Functions?

Consider this object:

```javascript
const person = {
    firstName: "John",

    sayHello: function(){
        console.log(this.firstName);
    }
};

person.sayHello();
```

Output:

```text
John
```

Now with an arrow function:

```javascript
const person = {
    firstName: "John",

    sayHello: () => {
        console.log(this.firstName);
    }
};
```

Output:

```text
undefined
```

### Why?

Arrow functions **do not have their own `this`**. They inherit `this` from the surrounding scope, which is usually **not** the object itself.

> **Best Practice:** Use **normal functions** for object methods unless you specifically need an arrow function.

---

# Objects Represent Real-World Things

## Car

```javascript
const car = {
    brand: "Toyota",
    color: "Black",

    start: function(){
        console.log("Car Started");
    }
};
```

---

## Student

```javascript
const student = {
    name: "Zeeshan",
    age: 22,

    study: function(){
        console.log("Studying JavaScript");
    }
};
```

---

## Mobile

```javascript
const phone = {
    brand: "Samsung",
    price: 25000,

    call: function(){
        console.log("Calling...");
    }
};
```

---

# Visual Representation

```text
person1
│
├── firstName → "Spongebob"
├── lastName → "Squarepants"
├── age → 30
├── isEmployed → true
├── sayHello()
└── eat()
```

---

# Program Flow

```text
Create Object
      ↓
Store Properties
      ↓
Store Methods
      ↓
Access Property (.)
      ↓
Call Method ()
      ↓
Execute Code
```

---

# Object vs Array

| Object                                    | Array                           |
| ----------------------------------------- | ------------------------------- |
| Stores related data using key-value pairs | Stores ordered values           |
| Uses keys like `firstName`                | Uses indexes like `0`, `1`, `2` |
| Represents a real-world object            | Represents a list of items      |

Example:

```javascript
const person = {
    name: "John",
    age: 25
};
```

```javascript
const fruits = ["Apple", "Orange", "Banana"];
```

---

# Important Notes ⚠️

* An object stores **properties** (data) and **methods** (functions).
* Access properties using **dot notation** (`person.name`).
* Call methods using parentheses (`person.eat()`).
* Prefer **normal functions** for object methods because they work correctly with `this`.

---

# Quick Revision 🚀

| Code                   | Purpose                                               |
| ---------------------- | ----------------------------------------------------- |
| `{}`                   | Create an object                                      |
| `key: value`           | Define a property                                     |
| `method: function(){}` | Define a method                                       |
| `person.name`          | Access a property                                     |
| `person.eat()`         | Call a method                                         |
| `this`                 | Refers to the current object (inside a normal method) |

---

## Easy Tricks 🎯

* **Object** → Represents a real-world thing.
* **Property** → Information about the object.
* **Method** → Action the object can perform.
* **`.` (dot notation)** → Access properties and methods.
* Use **normal functions** for methods if you need `this`.
* Use **arrow functions** mainly for callbacks, not object methods.

### One-Line Rule

> **An object is a collection of related properties (data) and methods (functions) that work together to represent a real-world entity, with properties accessed using dot notation and methods called like regular functions.**
