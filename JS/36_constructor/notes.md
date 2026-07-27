# JavaScript Constructor Functions – Notes 📝

## What is a Constructor Function?

A **constructor function** is a special function used to **create multiple objects with the same structure**.

Instead of writing many similar objects manually, you create a **blueprint (template)** once and use it to create as many objects as you need.

> **Simple Definition:**
>
> **A constructor function is a template for creating objects.**

---

# Syntax

```javascript
function ConstructorName(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;

    this.method = function(){
        // code
    };
}
```

Create objects using the `new` keyword:

```javascript
const obj = new ConstructorName(value1, value2);
```

---

## Memory Trick 🧠

> **Constructor = Object Factory 🏭**

Think of a car factory.

```text
          Car Blueprint
               │
        Constructor Function
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
   Car1      Car2      Car3
```

One blueprint creates many cars.

---

# Your Constructor

```javascript
function Car(make, model, year, color){

    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    };
}
```

Here,

`Car()` is **not creating one car**.

It is creating a **template** for cars.

---

# Understanding `this`

Inside a constructor:

```javascript
this.make = make;
```

means:

> "Store the value passed into the object's `make` property."

For example,

```javascript
new Car("Ford", ...)
```

becomes

```javascript
this.make = "Ford";
```

---

# Creating Objects

## Car 1

```javascript
const car1 =
new Car("Ford", "Mustang", 2024, "red");
```

JavaScript internally does something like:

```javascript
const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",

    drive: function(){
        console.log(`You drive the Mustang`);
    }
};
```

---

## Car 2

```javascript
const car2 =
new Car("Chevrolet", "Camaro", 2025, "blue");
```

Creates:

```text
make  → Chevrolet

model → Camaro

year  → 2025

color → blue
```

---

## Car 3

```javascript
const car3 =
new Car("Dodge", "Charger", 2026, "silver");
```

Creates:

```text
make  → Dodge

model → Charger

year  → 2026

color → silver
```

---

# What Does `new` Do?

When you write:

```javascript
new Car(...)
```

JavaScript automatically:

### Step 1

Creates a new empty object.

```text
{}
```

↓

### Step 2

Sets `this` to that object.

```text
this = {}
```

↓

### Step 3

Executes the constructor.

```javascript
this.make = "Ford";
```

↓

### Step 4

Returns the new object.

---

# Calling a Method

```javascript
car1.drive();
```

JavaScript finds:

```javascript
this.drive = function(){
    console.log(`You drive the ${this.model}`);
}
```

Since

```text
this = car1
```

it becomes:

```javascript
console.log("You drive the Mustang");
```

Output:

```text
You drive the Mustang
```

---

## Car 2

```javascript
car2.drive();
```

Output:

```text
You drive the Camaro
```

---

## Car 3

```javascript
car3.drive();
```

Output:

```text
You drive the Charger
```

---

# Final Output

```text
You drive the Mustang
You drive the Camaro
You drive the Charger
Mustang
```

---

# Accessing Properties

```javascript
console.log(car1.model);
```

JavaScript looks inside `car1`.

```text
car1
│
├── make → Ford
├── model → Mustang
├── year → 2024
└── color → red
```

Output:

```text
Mustang
```

---

# Visual Representation

```text
Car Constructor
        │
        ▼
 ┌───────────────┐
 │ make          │
 │ model         │
 │ year          │
 │ color         │
 │ drive()       │
 └───────────────┘
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
car1   car2   car3
```

---

# Why Use Constructors?

### Without Constructor

```javascript
const car1 = {
    make: "Ford",
    model: "Mustang"
};

const car2 = {
    make: "Chevrolet",
    model: "Camaro"
};

const car3 = {
    make: "Dodge",
    model: "Charger"
};
```

Lots of repeated code.

---

### With Constructor

```javascript
const car1 = new Car(...);
const car2 = new Car(...);
const car3 = new Car(...);
```

Much shorter and easier to maintain.

---

# Real-Life Example

Imagine a company issuing employee ID cards.

Every employee has:

* Name
* Employee ID
* Department

Instead of designing each ID card manually, the company uses one template.

```javascript
function Employee(name, id, department){
    this.name = name;
    this.id = id;
    this.department = department;
}
```

Now you can create many employees quickly:

```javascript
const emp1 = new Employee("Zeeshan", 101, "IT");
const emp2 = new Employee("Ali", 102, "HR");
```

---

# Constructor vs Object Literal

## Object Literal

```javascript
const car = {
    make: "Ford",
    model: "Mustang"
};
```

Creates **one object**.

---

## Constructor

```javascript
function Car(make, model){
    this.make = make;
    this.model = model;
}
```

Creates **many objects**.

---

# Program Flow

```text
Call new Car()
        ↓
Create Empty Object
        ↓
this → New Object
        ↓
Assign Properties
        ↓
Assign Methods
        ↓
Return Object
```

---

# Important Notes ⚠️

* Constructor functions usually start with a **capital letter** (`Car`, `Person`, `Student`) by convention.
* Always use the **`new`** keyword with constructor functions.
* Inside a constructor, `this` refers to the **new object being created**.
* Constructor functions help avoid repeating the same object structure.

> **Note:** In modern JavaScript (ES6+), **classes** are generally preferred over constructor functions because they provide cleaner syntax. However, constructor functions are still important to understand because many existing codebases use them.

---

# Quick Revision 🚀

| Code                        | Purpose                  |
| --------------------------- | ------------------------ |
| `function Car(){}`          | Constructor function     |
| `new Car()`                 | Create a new object      |
| `this.make = make`          | Assign a property        |
| `this.drive = function(){}` | Add a method             |
| `car1.drive()`              | Call the object's method |
| `car1.model`                | Access a property        |

---

## Easy Tricks 🎯

* **Constructor** = Blueprint for objects.
* **`new`** = Creates a new object from the blueprint.
* **`this`** = Refers to the object currently being created.
* Use constructors when many objects share the same properties and methods.
* By convention, constructor names start with a **capital letter**.

### One-Line Rule

> **A constructor function is a blueprint that uses the `new` keyword and `this` to create multiple objects with the same properties and methods.**
