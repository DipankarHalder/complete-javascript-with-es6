## **Concept of Arrow Functions**

* Arrow functions – also called **fat arrow** functions.
* Make our code **more concise** and **simplify function scoping**.
* Arrow functions are **anonymous**.
* The **this** keyword works differently in arrow functions.
* The methods **call()**, **apply()**, and **bind()** will not change the value of this in arrow functions.
* By using arrow functions, we avoid having to type the **function** keyword, **return** keyword and **curly brackets**.

&nbsp;
#### 1. Basic Syntax with One Parameter - 
* Parentheses are optional when only one parameter is present
* Curly brackets aren’t required if only one expression is present
* return keyword is not required

```javascript
// in ES5
var singleES5 = function(x) {
  return x;
};

// in ES6
const singleES6 = x =>  x;
```

&nbsp;
#### 2. Basic Syntax with Multiple Parameters -
* Curly brackets are required, if present more than one expression
* return keyword is not required

```javascript
// in ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// in ES6
const multiplyES6 = (x, y) => { return x * y };
// also use
const multiplyES6 = (x, y) => x * y;
```

&nbsp;
#### 3. No Parameters -
* Parentheses are required when no parameters are present.

```javascript
// in ES5
var docLogEs5 = function() { console.log("This is ES5"); };
docLogEs5();

// in ES6
var docLogEs6 = () => { console.log("This is ES6"); };
docLogEs6();
```

&nbsp;
#### 4. Object Literal Syntax -

```javascript
// in ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};

// in ES6
var setNameIdsEs6 = (id, name) => ({ 
    id: id, 
    name: name 
});
console.log(setNameIdsEs6 (4, "Kyle"));
```

&nbsp;
#### 5. Use Cases for Arrow Functions

```javascript
//Example ------------------------ 1
const smartPhones = [
  { name:'iphone', price:649 },
  { name:'Galaxy S6', price:576 },
  { name:'Galaxy Note 5', price:489 }
];

// in ES5
var ES5prices = smartPhones.map(function(smartPhone) {
  return smartPhone.price;
});
console.log(ES5prices);

// in ES6
const ES6prices = smartPhones.map(smartPhone => smartPhone.price);
console.log(ES6prices);


//Example ------------------------ 2
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5
var divisibleByThrreeES5 = array.filter(function (v){
  return v % 3 === 0;
});

// ES6
const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);
console.log(divisibleByThrreeES6);
```

&nbsp;
#### 6. Promises and Callbacks

```javascript
// in ES5
aAsync().then(function() {
  returnbAsync();
}).then(function() {
  returncAsync();
}).done(function() {
  finish();
});

// in ES6
aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);
```

&nbsp;
#### 7. Main benefit: No binding of ‘this’
In classic function expressions, the **this** keyword is bound to different values based on the **context** in which it is called. With arrow functions however, **this** is **lexically bound**. It means that it usesthis from the code that contains the arrow function.

```javascript
// in ES5
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};
// In the ES5 example, ".bind(this)" is required to help pass the "this" context into the function. Otherwise, by default "this" would be undefined.

// in ES6
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
// ES6 arrow functions can’t be bound to a **this** keyword, so it will lexically go up a scope, and use the value of **this** in the scope in which it was defined.
```

&nbsp;
#### 8. When you should not use Arrow Functions
**1. Constructors :**
Arrow functions can’t be used as **constructors** as other functions can. Don’t use them to create similar objects as you would with other functions. If you attempt to use **new** with an arrow function, **it will throw an error**. Arrow functions, like **built-in functions**, don’t have a **prototype property or other internal methods**. Because constructors are generally used to create class-like objects in JavaScript, you should use the new ES6 classes instead.

```javascript
// When you call cat.jumps, the number of lives does not decrease. It is because this is not bound to anything, and will inherit the value of this from its parent scope.
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
```

&nbsp;
**2. Callback functions with dynamic context**
```javascript
// If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
// If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.
```

&nbsp;
**3. Generators :**
Arrow functions are designed to be lightweight and can’t be used as generators. Using the ***yield** keyword in ES6 will throw an error. Use ES6 generators instead.






