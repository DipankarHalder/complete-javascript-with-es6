## Concept of Var, Let & Const


### Var :
* Declarations are **global scoped** or **functionally scoped**.
* It can be **redeclared** and **updated**.
* Can be declared without being initialized

    ```javascript
    var sayhello = "Hello World";

    
    function helloWorld(){
        // 1. insight function it's work as a global scope,
        console.log(sayhello);          // Output - Hello World;


        // 2. overwrite the value of "sayhello" veriable because its redeclared
        // function scope
        var sayhello = "Hello insight function";
        console.log(sayhello);          // output - Hello insight function
    }


    // global scope
    console.log(sayhello);              // Output - Hello World;
    helloWorld();
    ```

&nbsp;
&nbsp;

### Let :
* Declarations are **block scoped** ( only available for **use within curly braces { } block** ).
* It can be **updated** or **reinitialized**, but **not redeclared**.

    ```javascript
    let sayhello = "Hello World";
        sayhello = 30;              // can updated or reinitialized
        sayhello = true;            // can updated or reinitialized
    

    // we can't redeclared the value of veriable when we using "let"
    let sayhello = "Hello GitHub";

    
    function helloWorld(){
        // block scope
        let a = "Hello JavaScript";
        console.log(a);
    }
    console.log(a);     // output - undefined 
    helloWorld();       // output - Hello JavaScript
    ```

&nbsp;
&nbsp;

### Const :
* Declarations are **block scoped**.
* It cannot **updated** or **reinitialized** and **not redeclared**.
* Note - This behavior is somehow different when it comes to objects declared with const. While a **const object cannot be updated, But the properties of this objects can be updated**.

    ```javascript
    // In simple variable
    const sayhello = "Hello JavaScript";


    const sayhello = "Hello Github";        // can't re-declared
          sayhello = 30;                    // can't updated or reinitialized
    

    // In object or array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
          fruits.push("Kiwi"); 
    const changeObject = fruits;
    console.log(changeObject);              // output - Banana, Orange, Apple, Mango, Kiwi
    ```

&nbsp;
&nbsp;

### In short of Var, Let & Const : 
var | let | const
--- | --- | ---
Global or function scoped | Block scoped | Block scoped
updated and re-declared within its scope | Updated/reinitialized, but not re-declared | Neither be updated/reinitialized nor re-declared
Can be declared without being initialized | Can be declared without being initialized | Must be initialized during declaration
In hoisting - variables are initialized with undefined | In hoisting - variables are not initialized | In hoisting - variables are not initialized
