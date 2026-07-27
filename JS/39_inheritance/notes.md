# JavaScript Inheritance – Notes 📝

## What is Inheritance?

**Inheritance** is an **OOP (Object-Oriented Programming)** feature that allows one class (**child class**) to **inherit** the properties and methods of another class (**parent class**).

This helps avoid writing the same code repeatedly.

> **Simple Definition:**
>
> **Inheritance allows a child class to reuse the properties and methods of its parent class.**

---

# Why Do We Use Inheritance?

Imagine you have three animals:

* 🐇 Rabbit
* 🐟 Fish
* 🦅 Hawk

All of them:

* Eat
* Sleep
* Are alive

Instead of writing the same code three times, create one parent class (`Animal`) and let the others inherit from it.

---

# Memory Trick 🧠

> **Inheritance = Child inherits from Parent 👨‍👦**

```text
        Animal (Parent)
      alive
      eat()
      sleep()
          │
   ┌──────┼──────┐
   ▼      ▼      ▼
Rabbit   Fish   Hawk
 run()   swim()  fly()
```

One parent → Many children.

---

# Syntax

```javascript
class Parent {

}

class Child extends Parent {

}
```

The keyword **`extends`** tells JavaScript:

> "Child class inherits everything from Parent class."

---

# Parent Class

```javascript
class Animal {

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
```

This class contains everything **common** to all animals.

### Properties

```javascript
alive = true;
```

Every animal starts as alive.

### Methods

```javascript
eat()
sleep()
```

Every animal can eat and sleep.

---

# Child Class: Rabbit

```javascript
class Rabbit extends Animal {

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }

}
```

## What does `extends Animal` mean?

It means Rabbit automatically gets:

* ✅ `alive`
* ✅ `eat()`
* ✅ `sleep()`

You only need to add what's unique to a rabbit.

```javascript
run()
```

---

# Child Class: Fish

```javascript
class Fish extends Animal {

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }

}
```

Fish inherits:

* alive
* eat()
* sleep()

and adds:

```javascript
swim()
```

---

# Child Class: Hawk

```javascript
class Hawk extends Animal {

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }

}
```

Hawk inherits:

* alive
* eat()
* sleep()

and adds:

```javascript
fly()
```

---

# Creating Objects

```javascript
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
```

JavaScript creates three objects.

```text
rabbit

alive = true

name = rabbit

eat()

sleep()

run()
```

---

```text
fish

alive = true

name = fish

eat()

sleep()

swim()
```

---

```text
hawk

alive = true

name = hawk

eat()

sleep()

fly()
```

---

# Understanding `rabbit.alive`

```javascript
console.log(rabbit.alive);
```

Does Rabbit have `alive`?

No.

JavaScript looks in Rabbit.

```text
Rabbit

name
run()
```

Not found.

Then it checks the parent.

```text
Animal

alive
eat()
sleep()
```

Found!

Output:

```text
true
```

---

# Understanding `rabbit.eat()`

```javascript
rabbit.eat();
```

Rabbit doesn't have its own `eat()` method.

JavaScript goes to the parent class.

```javascript
eat(){
    console.log(`This ${this.name} is eating`);
}
```

Here

```text
this = rabbit
```

and

```text
this.name = rabbit
```

Output

```text
This rabbit is eating
```

---

# Understanding `rabbit.sleep()`

```javascript
rabbit.sleep();
```

Output

```text
This rabbit is sleeping
```

---

# Understanding `rabbit.run()`

```javascript
rabbit.run();
```

This method belongs only to Rabbit.

Output

```text
This rabbit is running
```

---

# Fish Example

```javascript
console.log(fish.alive);
```

Output

```text
true
```

---

```javascript
fish.eat();
```

Output

```text
This fish is eating
```

---

```javascript
fish.sleep();
```

Output

```text
This fish is sleeping
```

---

```javascript
fish.swim();
```

Output

```text
This fish is swimming
```

---

# Hawk Example

```javascript
console.log(hawk.alive);
```

Output

```text
true
```

---

```javascript
hawk.eat();
```

Output

```text
This hawk is eating
```

---

```javascript
hawk.sleep();
```

Output

```text
This hawk is sleeping
```

---

```javascript
hawk.fly();
```

Output

```text
This hawk is flying
```

---

# Final Output

```text
true
This rabbit is eating
This rabbit is sleeping
This rabbit is running
----------------
true
This fish is eating
This fish is sleeping
This fish is swimming
----------------
true
This hawk is eating
This hawk is sleeping
This hawk is flying
```

---

# Program Flow

```text
Create Animal Class
        │
        ▼
Create Rabbit, Fish, Hawk
using extends
        │
        ▼
Create Objects
        │
        ▼
Child gets Parent's
properties & methods
        │
        ▼
Call Methods
        │
        ▼
Display Output
```

---

# Visual Representation

```text
                 Animal
        ┌────────────────────┐
        │ alive = true       │
        │ eat()              │
        │ sleep()            │
        └─────────┬──────────┘
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
   Rabbit       Fish        Hawk
   name         name        name
   run()        swim()      fly()
```

---

# How JavaScript Finds a Property or Method

When you write:

```javascript
rabbit.eat();
```

JavaScript searches like this:

```text
rabbit Object
     │
     ▼
Has eat()?
     │
   No ❌
     │
     ▼
Animal Class
     │
Has eat()?
     │
   Yes ✅
     │
     ▼
Execute eat()
```

The same happens for `alive` and `sleep()`.

---

# Why Use Inheritance?

### Without Inheritance

```javascript
class Rabbit{

    alive = true;

    eat(){}

    sleep(){}

}
```

```javascript
class Fish{

    alive = true;

    eat(){}

    sleep(){}

}
```

```javascript
class Hawk{

    alive = true;

    eat(){}

    sleep(){}

}
```

The same code is repeated.

---

### With Inheritance

```javascript
class Animal{

}
```

```javascript
class Rabbit extends Animal{

}
```

```javascript
class Fish extends Animal{

}
```

```javascript
class Hawk extends Animal{

}
```

Much cleaner and easier to maintain.

---

# Real-Life Example

Imagine a school.

Every student has:

* Name
* Roll Number
* Attend Class

Instead of writing these in every class:

```text
Student
│
├── name
├── rollNo
└── attendClass()
```

Then create:

```text
EngineeringStudent
MedicalStudent
CommerceStudent
```

Each inherits from `Student` and adds its own special behavior.

---

# Important Notes ⚠️

* **Parent class** contains common properties and methods.
* **Child class** inherits them using `extends`.
* Child classes can also define their own unique properties and methods.
* JavaScript first looks in the child object. If it doesn't find the property or method, it searches the parent class.

---

# Parent vs Child Class

| Parent Class            | Child Class          |
| ----------------------- | -------------------- |
| General/common features | Specific features    |
| Can be inherited        | Inherits from parent |
| Example: `Animal`       | Example: `Rabbit`    |

---

# Quick Revision 🚀

| Code              | Purpose                |
| ----------------- | ---------------------- |
| `class Animal {}` | Parent class           |
| `extends Animal`  | Inherit from `Animal`  |
| `alive = true`    | Shared property        |
| `eat()`           | Shared method          |
| `sleep()`         | Shared method          |
| `run()`           | Rabbit-only method     |
| `swim()`          | Fish-only method       |
| `fly()`           | Hawk-only method       |
| `new Rabbit()`    | Create a Rabbit object |

---

## Easy Tricks 🎯

* **Parent** → Common features.
* **Child** → Inherits common features and adds its own.
* **`extends`** → Creates the inheritance relationship.
* JavaScript checks the **child first**, then the **parent** if needed.
* Inheritance reduces code duplication and improves reusability.

---

# Constructor vs Inheritance vs Class

| Feature                     | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| **Class**                   | Blueprint for creating objects                   |
| **Constructor**             | Initializes object properties                    |
| **Inheritance (`extends`)** | Reuses properties and methods from another class |

---

### One-Line Rule

> **Inheritance allows a child class to reuse the properties and methods of a parent class using the `extends` keyword, making code more reusable and easier to maintain.**
