## ES6 Default Parameters & Property Shorthands

### Default Parameters :

In the old JavaScript version, We can't set **default values with parameters** in function and without assigning variable if we call the function, got an error ( like - NaN, undefined ).

```javascript
function multiply(a, b) {
    return a * b;
}

multiply(5, 2);     // Output - 10
multiply(5);        // Output - NaN!
```

But we can overcome the problem like the way mentioned below:

```javascript
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

multiply(5, 2);     // Output - 10
multiply(5);        // Output - 5
```

It's a great feature With **ES5/ES6 called Default Parameters**, where the function body are no longer required. Now, We can **assign the default value with parameters in function head**. The code mentioned below:

```javascript
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2);     // Output - 10
multiply(5);        // Output - 5
```

&nbsp;
&nbsp;

### Property Shorthands :

If a method accepts large configuration objects as an argument, your code can become quite large. It’s common to prepare some variables and add them to said object. Property shorthands are syntactic sugar to make this step shorter and more readable.

```javascript
// With previous version of JavaScript              // With ES6 JavaScript
// properties                                       // properties
var foo = {                                         var foo = {x, y, z};
    x: x,
    y: y,
    z: z,
};
// methods                                          // methods
var foo = {                                         var foo = {
    a: function() {},                                   a() {},
    b: function() {}                                    b() {}
};                                                  };
```