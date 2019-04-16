## ES6 Template Literals & Tag Functions

## **1. &nbsp; Template Literal** 
_**A template literal is a way to concatenate strings while allowing embedded expressions and improving readability.**_

We normally use single ( ‘ ) or double ( “ ) quotes for writing string in JavaScript. Like :

``` javascript
let string_1 = 'Hello String One';
let strring_2 = "Hello String Two";
```

But with _**ES6 template literals**_, we use enclosing back-ticks ( ` ) instead. 

``` javascript
const str3 = `Hello World`;
```
Few Code:

``` javascript
// String Concatenation
var person = {
    name: 'Alfred',
    nn: 'Alfy',
};

console.log('Hi, I\'m ' + p.name + '! Call me "' + p.nn + '".');    // previous version
console.log(`Hi, I'm ${p.name}! Call me "${p.nn}".`);               // with ES6 Template Literal
// Output - Hi, I'm Alfred! Call me "Alfy".

// Calculations
console.log('Three plus six is ' + (3 + 6) + '.');                  // previous version
console.log(`Three plus six is ${3 + 6}.`);                         // with ES6 Template Literal
// Output - Three plus six is 9.
```

&nbsp;

## **2. &nbsp; Tag Functions**
_**A tagged template is a function call that uses a template literal from which to get its arguments.**_

It's super confusing, check the example -

``` javascript
const people = [
  {name: 'Alfred', age: 47},
  {name: 'George', age: 27},
  {name: 'Regina', age: 31},
  {name: 'Trisha', age: 30}
]
function greet(arr, n, a) {
  console.log(arr[0] + n + arr[1] + a + arr[2]);
}
people.forEach((p) => {
  greet`Woah, ${p.name} is ${p.age}?`;
});

// Woah, Alfred is 47?
// Woah, George is 27?
// Woah, Regina is 31?
// Woah, Trisha is 30?

```