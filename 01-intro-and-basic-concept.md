## Introduction of ES6
---

### 1. "use strict" :
* The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

* It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. Strict mode is enabled by placing "use strict" at the top of a script or function. Several language features, like “classes” and “modules”, enable strict mode automatically.

* Strict mode is supported by all modern browsers.

* _How to use it:_

    ```javascript
    "use strict";
    ```

---

### 2. Declearation & Defination :
* Declearation -&nbsp; When ask the complier or interprater to create a new veriable and give it to a name.
* Defination -&nbsp; When you assign a value in the decleared veriable.

    ```javascript
    var sayHelloString;  // declearation
        sayHelloString = "Hello World! This is a string"; // defination
    ```
---

### 3. Opreator ( = , == , == , ** )

| Type | Usage |
| --- | --- |
| == | Assignment Operator |
| == | Comparisons ( _Formerly Compares Variable_ ). |
| === | Strict equality ( _Checks the equality with type of value_ ). |
| ** | Exponentiation Operator, It's a recent addition to the language. For a natural number b, the result of _a ** b is a multiplied by itself b times_. |