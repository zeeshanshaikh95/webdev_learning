# JavaScript Classes – Notes 📝

## What is a Class?

A **class** is an **ES6 feature** that provides a **cleaner and more organized way to create objects**.

Think of a class as a **blueprint (template)** from which multiple objects can be created.

A class can contain:

* ✅ Properties (data)
* ✅ Methods (functions)
* ✅ Constructor (initializes object values)

> **Simple Definition:**
>
> **A class is a blueprint used to create objects with the same properties and methods.**

---

# Why Do We Use Classes?

Before ES6, we used **constructor functions**.

```javascript
function Car(make, model){
    this.make = make;
    this.model = model;
}
```

After ES6, we use **classes**, which are easier to read.

```javascript
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
```

Both create objects, but **classes have cleaner syntax**.

---

# Syntax

```javascript
class ClassName{

    constructor(parameter1, parameter2){
        this.property1 = parameter1;
        this.property2 = parameter2;
    }

    methodName(){
        // code
    }
}
```

Creating an object:

```javascript
const obj = new ClassName(value1, value2);
```

---

## Memory Trick 🧠

> **Class = Blueprint 🏗️**
>
> **Object = House 🏠**

```text
            Product Class
                 │
          Blueprint (Template)
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
 Product1    Product2    Product3
```

One blueprint creates many objects.

---

# Your Class

```javascript
class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
```

This class describes how every **Product** should look.

Every product will have:

* name
* price
* displayProduct()
* calculateTotal()

---

# Understanding the Constructor

```javascript
constructor(name, price){
    this.name = name;
    this.price = price;
}
```

The constructor runs **automatically** whenever you create a new object.

Example:

```javascript
const product1 = new Product("Shirt",19.99);
```

JavaScript internally does:

```text
this.name = "Shirt"

this.price = 19.99
```

Now `product1` becomes:

```text
product1

name  → Shirt

price → 19.99
```

---

# Creating Objects

## Product 1

```javascript
const product1 =
new Product("Shirt",19.99);
```

Creates

```text
name

↓

Shirt

price

↓

19.99
```

---

## Product 2

```javascript
const product2 =
new Product("Pants",22.50);
```

Creates

```text
name

↓

Pants

price

↓

22.50
```

---

## Product 3

```javascript
const product3 =
new Product("Underwear",100.00);
```

Creates

```text
name

↓

Underwear

price

↓

100
```

---

# Calling a Method

```javascript
product3.displayProduct();
```

JavaScript enters

```javascript
displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
}
```

Since

```text
this = product3
```

It becomes

```javascript
console.log("Product: Underwear");
console.log("Price: $100.00");
```

Output

```text
Product: Underwear
Price: $100.00
```

---

# Understanding `.toFixed(2)`

```javascript
this.price.toFixed(2)
```

Formats the number to **2 decimal places**.

Example:

```javascript
100.toFixed(2)
```

Output

```text
100.00
```

---

# Understanding `calculateTotal()`

```javascript
calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
}
```

Purpose:

Calculate the price **after adding tax**.

---

# Your Tax

```javascript
const salesTax = 0.05;
```

Meaning:

```text
5%
```

---

# Calling the Method

```javascript
const total =
product3.calculateTotal(salesTax);
```

Here

```text
this.price

↓

100
```

Calculation

```text
100 × 0.05

↓

5
```

Then

```text
100 + 5

↓

105
```

Return

```text
105
```

---

# Printing Total

```javascript
console.log(
`Total price (with tax): $${total.toFixed(2)}`
);
```

Output

```text
Total price (with tax): $105.00
```

---

# Final Output

```text
Product: Underwear
Price: $100.00
Total price (with tax): $105.00
```

---

# Visual Representation

```text
Product Class
│
├── constructor()
├── displayProduct()
└── calculateTotal()

        │
        ▼

product3
│
├── name → Underwear
├── price → 100
├── displayProduct()
└── calculateTotal()
```

---

# How `new` Works

When JavaScript sees:

```javascript
new Product("Shirt",19.99);
```

It automatically:

### Step 1

Creates an empty object.

```text
{}
```

↓

### Step 2

Sets

```text
this
```

to the new object.

↓

### Step 3

Runs

```javascript
constructor(name,price)
```

↓

### Step 4

Assigns

```text
name

price
```

↓

### Step 5

Returns the object.

---

# Class vs Constructor Function

## Constructor Function

```javascript
function Product(name, price){
    this.name = name;
    this.price = price;
}
```

---

## Class

```javascript
class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

}
```

Both work similarly, but **classes are easier to read and maintain**.

---

# Why Use Classes?

Without classes:

```javascript
const shirt = {
    name: "Shirt",
    price: 20
};

const pants = {
    name: "Pants",
    price: 30
};
```

Lots of repeated code.

---

With a class:

```javascript
const shirt = new Product("Shirt",20);
const pants = new Product("Pants",30);
```

Much cleaner.

---

# Real-Life Example

Imagine an online shopping website.

Every product has:

* Name
* Price
* Display details
* Calculate total with tax

Instead of writing every product separately, create one class.

```javascript
class Product{

}
```

Now create hundreds of products easily.

---

# Program Flow

```text
Create Class
      ↓
Create Constructor
      ↓
Add Methods
      ↓
Create Object using new
      ↓
Constructor Executes
      ↓
Object Created
      ↓
Call Methods
```

---

# Visual Flow

```text
Product Class
       │
       ▼
new Product()

       │
       ▼

Object Created

       │
       ▼

Call Method

       │
       ▼

Output
```

---

# Important Notes ⚠️

* A **class is a blueprint**, not an object.
* Use the **`new`** keyword to create objects.
* The **constructor** runs automatically when an object is created.
* `this` refers to the object being created or the object calling the method.
* Methods inside a class are written **without** the `function` keyword.

---

# Class vs Object vs Constructor

| Term            | Meaning                                           |
| --------------- | ------------------------------------------------- |
| **Class**       | Blueprint/template for objects                    |
| **Object**      | Instance created from a class                     |
| **Constructor** | Special method that initializes object properties |
| **Method**      | Function inside a class                           |

---

# Quick Revision 🚀

| Code               | Purpose                          |
| ------------------ | -------------------------------- |
| `class Product {}` | Create a class                   |
| `constructor()`    | Initialize object properties     |
| `new Product()`    | Create an object                 |
| `this.name`        | Access current object's property |
| `displayProduct()` | Class method                     |
| `calculateTotal()` | Calculate price with tax         |
| `.toFixed(2)`      | Show 2 decimal places            |

---

## Easy Tricks 🎯

* **Class** → Blueprint.
* **Object** → Product made from the blueprint.
* **`constructor()`** → Runs automatically when `new` is used.
* **`this`** → Refers to the current object.
* **Methods** inside classes do **not** use the `function` keyword.
* Use classes when creating **many similar objects**.

---

# Constructor Function vs Class

| Constructor Function                        | Class                                 |
| ------------------------------------------- | ------------------------------------- |
| `function Product(){}`                      | `class Product{}`                     |
| Uses `this`                                 | Uses `this`                           |
| Uses `new`                                  | Uses `new`                            |
| Methods usually assigned inside constructor | Methods defined directly in the class |
| Older ES5 syntax                            | Cleaner ES6 syntax                    |

---

### One-Line Rule

> **A class is an ES6 blueprint for creating objects, where the `constructor()` initializes properties and methods define the behavior shared by all objects created from that class.**
