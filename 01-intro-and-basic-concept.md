## Introduction of ES6

---

### 1. "use strict" :

- When it is located at the top of a script, the whole script works the **“modern”** way, like **“classes”** and **“modules”**, enable strict mode automatically.

- It is not a statement, but a literal expression, ignored by earlier versions of JavaScript..

  ```javascript
  "use strict";
  ```

&nbsp;

---

&nbsp;

### 2. Operator ( = , == , == , \*\* ) :

| Type | Usage |
| ---- | ------------------- |
| ==   | Assignment Operator |
| ==   | Comparisons ( **_Formerly Compares Variable_** ) |
| ===  | Strict equality ( **_Checks the equality with type of value_** ) |
| \*\* | Exponentiation Operator, It's a recent addition to the language. For **a** natural number **b**, the result of **_a \*\* b_** is a multiplied by itself **b** times |

&nbsp;

---

&nbsp;

### 3. Declaration & Definition :

- Declaration - &nbsp; When ask the interpreter to create a new variable and give it to a name.
- Definition - &nbsp; When you assign a value in the declared variable.

  ```javascript
  var sayHelloString;                                           // Declaration
      sayHelloString = "Hello World! This is a string";         // Definition
  ```
