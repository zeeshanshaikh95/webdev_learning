# JavaScript `static` Keyword – Notes 📝

## What is the `static` Keyword?

The **`static`** keyword is used to create **properties or methods that belong to the class itself**, **not** to the objects (instances) created from that class.

This means:

* ✅ Access using the **class name**
* ❌ Do **not** access using an object

> **Simple Definition:**
>
> **`static` makes a property or method belong to the class instead of its objects.**

---

# Why Do We Use `static`?

Sometimes a value or method is **common to all objects** and should exist only **once**.

Examples:

* π (PI)
* Total users online
* App version
* Utility functions

Instead of storing these in every object, we store them in the class.

---

# Memory Trick 🧠

> **`static` = Shared by the Class 🏢**

Think of a school.

```text
School
│
├── Principal (1)
├── School Name (1)
└── Total Students (1)

Students
├── Student1
├── Student2
└── Student3
```

The **school name** belongs to the school, not to each student.

Similarly:

* `static` → belongs to the class.
* Non-static → belongs to each object.

---

# Syntax

## Static Property

```javascript
class ClassName{
    static property = value;
}
```

---

## Static Method

```javascript
class ClassName{

    static methodName(){

    }

}
```

Access using:

```javascript
ClassName.property;

ClassName.method();
```

---

# Example 1: Math Utility Class

```javascript
class MathUtil{

    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

}
```

This class is never meant to create objects.

Instead, it provides utility values and functions.

---

# Static Property

```javascript
static PI = 3.14159;
```

There is only **one** `PI`.

It belongs to:

```text
MathUtil
```

not

```text
mathObject
```

---

## Accessing It

```javascript
console.log(MathUtil.PI);
```

Output

```text
3.14159
```

Notice:

✅ Correct

```javascript
MathUtil.PI
```

❌ Wrong

```javascript
const math = new MathUtil();

math.PI
```

`PI` belongs to the **class**, not the object.

---

# Static Method

```javascript
static getDiameter(radius){
    return radius * 2;
}
```

Call it like this:

```javascript
MathUtil.getDiameter(10);
```

Calculation

```text
10 × 2

↓

20
```

Output

```text
20
```

---

# Understanding `this.PI`

```javascript
static getCircumference(radius){
    return 2 * this.PI * radius;
}
```

Inside a **static method**,

```text
this
```

refers to the **class**, not an object.

So

```javascript
this.PI
```

becomes

```javascript
MathUtil.PI
```

Example:

```javascript
MathUtil.getCircumference(10);
```

Calculation

```text
2 × 3.14159 × 10

↓

62.8318
```

---

# Example 2: User Class

```javascript
class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }

}
```

This example shows the difference between **static** and **instance** members.

---

# Static Property: `userCount`

```javascript
static userCount = 0;
```

Initially

```text
User.userCount = 0
```

---

# Constructor

```javascript
constructor(username){

    this.username = username;

    User.userCount++;

}
```

Whenever a new user is created:

```javascript
new User(...)
```

the constructor runs automatically.

It stores the username and increases the total user count.

---

# Creating Objects

```javascript
const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");
```

### After `user1`

```text
username = Spongebob

User.userCount = 1
```

---

### After `user2`

```text
username = Patrick

User.userCount = 2
```

---

### After `user3`

```text
username = Sandy

User.userCount = 3
```

---

# Instance Method

```javascript
sayHello(){
    console.log(`Hello, my username is ${this.username}`);
}
```

This method belongs to **each object**.

Call it using:

```javascript
user1.sayHello();
```

Output

```text
Hello, my username is Spongebob
```

Similarly,

```javascript
user2.sayHello();
```

Output

```text
Hello, my username is Patrick
```

---

```javascript
user3.sayHello();
```

Output

```text
Hello, my username is Sandy
```

---

# Static Method

```javascript
static getUserCount(){

    console.log(
        `There are ${User.userCount} users online`
    );

}
```

Call it using:

```javascript
User.getUserCount();
```

Output

```text
There are 3 users online
```

Notice:

✅ Correct

```javascript
User.getUserCount();
```

❌ Wrong

```javascript
user1.getUserCount();
```

Because it belongs to the class.

---

# Final Output

```text
3.14159
20
Hello, my username is Spongebob
Hello, my username is Patrick
Hello, my username is Sandy
There are 3 users online
```

---

# Class vs Object Ownership

```text
                User Class
        ┌─────────────────────┐
        │ static userCount     │
        │ static getUserCount()│
        └──────────┬───────────┘
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
     user1      user2      user3
     username   username   username
     sayHello() sayHello() sayHello()
```

---

# Program Flow

```text
Create Class
      │
      ▼
Static Members Created
      │
      ▼
Create Objects
      │
      ▼
Constructor Runs
      │
      ▼
Increase userCount
      │
      ▼
Call Instance Methods
      │
      ▼
Call Static Method
```

---

# `static` vs Normal Members

| Feature                  | Static                         | Non-static               |
| ------------------------ | ------------------------------ | ------------------------ |
| Belongs to               | Class                          | Object                   |
| Accessed by              | `ClassName.member`             | `object.member`          |
| Number of copies         | One                            | One per object           |
| Can use `this.username`? | ❌ (unless `this` is the class) | ✅                        |
| Example                  | `PI`, `userCount`              | `username`, `sayHello()` |

---

# Real-Life Example

Imagine a shopping website.

Every customer has:

* Name
* Email

But the website also wants to know:

* Total registered users

```text
Website
│
├── Total Users (static)
│
├── User1
├── User2
└── User3
```

The total user count belongs to the **website**, not to individual users.

---

# Important Notes ⚠️

* `static` members belong to the **class**, not its objects.
* Access static members using the **class name**.
* Instance methods and properties belong to each object.
* Static properties are shared among all objects.
* Inside a static method, `this` refers to the **class itself**.

---

# Quick Revision 🚀

| Code                       | Purpose                |
| -------------------------- | ---------------------- |
| `static PI = 3.14159`      | Static property        |
| `static getDiameter()`     | Static method          |
| `MathUtil.PI`              | Access static property |
| `MathUtil.getDiameter(10)` | Call static method     |
| `static userCount`         | Shared user counter    |
| `User.userCount++`         | Increment shared count |
| `User.getUserCount()`      | Call static method     |
| `user1.sayHello()`         | Call instance method   |

---

## Easy Tricks 🎯

* **`static`** → Belongs to the **class**.
* **No `static`** → Belongs to the **object**.
* Use the **class name** to access static members.
* Use the **object name** to access instance members.
* Static members are shared by all objects.

---

# Instance vs Static

| Instance                   | Static                      |
| -------------------------- | --------------------------- |
| `this.username`            | `User.userCount`            |
| `user1.sayHello()`         | `User.getUserCount()`       |
| Different for every object | Same for all objects        |
| Created with each object   | Created once with the class |

---

### One-Line Rule

> **The `static` keyword creates properties and methods that belong to the class itself rather than individual objects, making them shared across all instances and accessible using the class name.**
