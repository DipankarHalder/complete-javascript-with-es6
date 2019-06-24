## **Concept of Array**

* Arrays are like boxes that contain stuff inside them.
* It's a **global object** that is used in the construction of arrays.
* You can **add items, remove items** or **manipulate items** in an array.


&nbsp;
### 1. Create an Array :

```javascript
// 1. Shorthand, most common
const arr = [];
const arr2 = [1, 2, 3, 4];

// 2. Array is basically an Object whose keys are indexes and elements as values
const arrExp = {
    "0": 1,
    "1": 2,
    "2": 3
};

// 3. Array with a lenght of 30 *empty* elements
const arrLenght = Array(30);

// [NOTE: new is not required here don't do this]
const arr = newArray();
```

&nbsp;
### 2. Array Methods :

#### _* Array.isArray()_
* **Array.isArray()** function determines whether the **value passed to this function is an array or not**. 
* This function returns **true** if the argument passed is array else it returns **false**.
    ```javascript
    const arr = ['item1', 'item2', 'item3', 'item4'];

    // JS (IE9+, Ch5+, FF4+, Saf5+, Opera10.5+)
    console.log(Array.isArray(arr)); 
    ```
    ```javascript
    //JS (new and older browsers):
    function isArray(arr) {
        return arr.constructor.toString().indexOf("Array") > -1;
    }

    isArray(arr);
    ```
    ```javascript
    // OR
    function isArray(arr) {
        return arr instanceof Array;
    }

    isArray(arr);
    ```
    ```javascript
    // OR
    function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }

    isArray(arr);
    ```
---
#### _* Array.concat()_
* **Array.concat()** function is used to merge two or more arrays together.
* This method **does not change the existing arrays**, but instead returns a **new array**.
* Syntaxt - 
    ```javascript
    var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
    ```
* Examples - 
    ```javascript
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];

    // ES6 version use destructuring
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);


    // ES5 version
    var arr3 = arr1.concat(arr2);
    console.log(arr3);


    // One way to manually
    Array.prototype.unique = function() {
        var a = this.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j]) { a.splice(j--, 1); }
            }
        }
        return a;
    };
    var arr3 = arr1.concat(arr2).unique();
    console.log(arr3);


    // Two way to manually
    function arrayUnique(array) {
    var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j]) { a.splice(j--, 1) };
            }
        }
        return a;
    }
    var arr3 = arrayUnique(arr1.concat(arr2));
    console.log(arr3);
    ```

---
#### _* Array.forEach()_
* The **forEach()** method executes a provided function once for each array element.
* Syntaxt - 
    ```javascript
    arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
    ```
* Examples - 
    ```javascript
    // 1. Converting a for loop to forEach ------------
    const items = ['item1', 'item2', 'item3'];
    const copy = [];

    // Previous version of js
    for (let i=0; i<items.length; i++) {
        copy.push(items[i]);
    }

    // latest version of js
    items.forEach(function(item){ 
        copy.push(item); 
    });
    ```
    ```javascript
    // 2. Printing the contents of an array ------------
    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
    }

    [2, 5, , 9].forEach(logArrayElements);
    ```
    ```javascript
    // 3. Using thisArg ------------
    function Counter() {
        this.sum = 0;
        this.count = 0;
    }

    Counter.prototype.add = function(array) {
        array.forEach(function(entry) {
            this.sum += entry;
            ++this.count;
        }, this);
    };

    const obj = new Counter();
    obj.add([2, 5, 9]);
    obj.count;
    obj.sum;
    ```
    ```javascript
    // 4. If the array is modified during iteration, other elements might be skipped.
    var words = ['one', 'two', 'three', 'four'];
    words.forEach(function(word) {
        console.log(word);
        if (word === 'two') {
            words.shift();
        }
    }); // one, two, four
    ```
---
#### _* Array.of()_
* The **array.of()** function is an inbuilt function in JavaScript which creates a new array instance with variables present as the argument of the function.
* Syntaxt - 
    ```javascript
    Array.of(element0, element1, ....)
    ```
* Examples - 
    ```javascript
    Array.of(10, 20, 30) // Output - Array [10, 20, 30]
    ```
---
#### _* Array.find()_
* The **array.find()** method returns the value of the first element in the array that satisfies the provided testing function. Otherwise _undefined_ is returned.
* Syntaxt - 
    ```javascript
    arr.find(function(element, index, array), thisValue)
    ```
* Examples - 
    ```javascript
    // Example - 1
    var array = [2, 7, 8, 9]; 
    var found = array.find(function(element) { 
        return element > 4; 
    }); 
    console.log(found); // 7


    // Example - 2
    function isOdd(element, index, array) {
        return (element%2 == 1);
    }
    const fst = [4, 6, 8, 12]
    console.log(fst.find(isOdd));  // Output: undefined

    const sec = [4, 5, 8, 11]
    console.log(sec.find(isOdd));  // Output: 5
    ```
---
#### _* Array.join()_
* The **join()** method creates and returns a new string by concatenating all of the elements in an array, 
* It's separated by commas or a specified separator string.
* If the array has only one item, then that item will be returned without using the separator.
* Syntaxt - 
    ```javascript
    arr.join([separator])
    ```
* Examples - 
    ```javascript
    var elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());  // output: "Fire,Air,Water"
    console.log(elements.join(''));  // output: "FireAirWater"
    console.log(elements.join('_-_'));  // output: "Fire_Air_Water"
    ```
---
#### _* Array.keys()_
* The **keys()** method returns a new Array Iterator object that contains the keys for each index in the array.
* Syntaxt - 
    ```javascript
    arr.keys()
    ```
* Examples - 
    ```javascript
    var array1 = ['a', 'b', 'c'];
    var iterator = array1.keys();
    for (let key of iterator) {
        console.log(key);  // output: 0 1 2
    }
    ```
---
#### _* Array.unshift()_
* The **unshift()** method adds one or more elements to the beginning of an array and returns the new length of the array.
* Syntaxt - 
    ```javascript
    arr.unshift(element1[, ...[, elementN]])
    ```
* Examples - 
    ```javascript
    var array1 = [1, 2, 3];
    console.log(array1.unshift(4, 5));  // output: 5
    console.log(array1);  // output: Array [4, 5, 1, 2, 3]
    ```
---
#### _* Array.push()_
* The **push()** method adds one or more elements to the end of an array and returns the new length of the array.
* Syntaxt - 
    ```javascript
    arr.push(element1[, ...[, elementN]])
    ```
* Examples - 
    ```javascript
    var animals = ['pigs', 'goats', 'sheep'];
    console.log(animals.push('cows'));  // expected output: 4
    console.log(animals);  // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push('chickens');
    console.log(animals);  // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]
    ```
---
#### _* Array.shift()_
* The **shift()** method removes the first element from an array and returns that removed element. This method changes the length of the array.
* Syntaxt - 
    ```javascript
    arr.shift()
    ```
* Examples - 
    ```javascript
    var array1 = [1, 2, 3];
    var firstElement = array1.shift();
    console.log(array1);  // output: Array [2, 3]
    console.log(firstElement);  // output: 1
    ```
---
#### _* Array.pop()_
* The **pop()** method removes the last element from an array and returns that element. This method changes the length of the array.
* Syntaxt - 
    ```javascript
    arr.pop()
    ```
* Examples - 
    ```javascript
    var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    console.log(plants.pop());  // output: "tomato"
    console.log(plants);  // output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

    plants.pop();
    console.log(plants);  // output: Array ["broccoli", "cauliflower", "cabbage"]
    ```
---
#### _* Array.reverse()_
* The **reverse()** method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
* Syntaxt - 
    ```javascript
    arr.reverse()
    ```
* Examples - 
    ```javascript
    var array1 = ['one', 'two', 'three'];
    console.log('array1: ', array1);  // output: Array ['one', 'two', 'three']

    var reversed = array1.reverse(); 
    console.log('reversed: ', reversed);  // output: Array ['three', 'two', 'one']
    console.log('array1: ', array1);  // output: Array ['three', 'two', 'one']
    ```
---
#### _* Array.sort()_
* The **sort()** method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
* Syntaxt - 
    ```javascript
    arr.sort([compareFunction])
    ```
* Examples - 
    ```javascript
    // String sort
    var strings = ['C', 'B', 'D', 'A'];
    strings.sort();
    console.log(strings);  // output: Array ["A", "B", "C", "D"]

    // Number sort
    var array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);  // output: Array [1, 100000, 21, 30, 4]
    ```
---
#### _* Array.splice()_
* The **splice()** method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
* Syntaxt - 
    ```javascript
    var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

    // start : The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. If negative, it will begin that many elements from the end of the array
    // deleteCount : An integer indicating the number of elements in the array to remove from start
    ```
* Examples - 
    ```javascript
    // String sort
    var months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');  // inserts at index 1
    console.log(months);  // output: Array ['Jan', 'Feb', 'March', 'April', 'June']

    months.splice(4, 1, 'May'); // replaces 1 element at index 4
    console.log(months); // output: Array ['Jan', 'Feb', 'March', 'April', 'May']

    ```
---
#### _* Array.slice()_
* The **slice()** method returns a shallow copy of a portion of an array into a new array object selected from begin to end. The original array will not be modified.
* Syntaxt - 
    ```javascript
    arr.slice([begin[, end]])
    ```
* Examples - 
    ```javascript
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));  // output: Array ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4));  // output: Array ["camel", "duck"]
    console.log(animals.slice(1, 5));  // output: Array ["bison", "camel", "duck", "elephant"]
    ```
---





### 3. Array Properties :
#### * Array.lenght 
The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

```javascript
var arr = ['item1', 'item2', 'item3', 'item4'];
console.log(arr.length);  // output: 4
```
