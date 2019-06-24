## **Concept of Array.filter()**

* **arr.filter()** function is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument function..

* Syntaxt - 
    ```javascript
    let newArray = arr.filter(callback(element[, index[, array]])[, thisArg]);
    ```
* **callback** - Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. 
_It accepts three arguments:_
    * **newArray** - the array that is returned
    * **element** - The current element being processed in the array.
    * **index** (optional) - The index of the current element being processed in the array.
    * **array** (optional) - The array filter was called upon.
    * **thisArg** (optional) - Value to use as this when executing callback.
    
&nbsp;
* Examples -
    ```javascript
    // find the numbers when satisfy the condition ----------
    let arrs = [112, 52, 0, -1, 944];

    let isPositive = (value) => {
        return value > 0;
    }

    let output = arr.filter(isPositive);
    console.log(output);  // [112, 52, 944]
    ```

    ```javascript
    // find even numbers when satisfy the condition ----------
    let arr = [11, 98, 31, 23, 944];

    let isEven = (value) => {
        return value % 2 == 0;
    }

    let output = arr.filter(isEven);
    console.log(output);  // [98,944]
    ```
    
    ```javascript
    // filtering invalid entries from JSON ----------
    let arr = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        { },
        { id: null },
        { id: NaN },
        { id: 'undefined' }
    ];

    let invalidEntries = 0;

    function isNumber(obj) {
        return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
    }

    function filterByID(item) {
        if (isNumber(item.id) && item.id !== 0) { 
            return true; 
        } 
        invalidEntries++;
        return false; 
    }

    let arrByID = arr.filter(filterByID);

    console.log('Filtered Array\n', arrByID);  
    // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

    console.log('Number of Invalid Entries = ', invalidEntries);  
    // Number of Invalid Entries = 5
    ```
    
    ```javascript
    // Searching in array ----------
    var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    // One way
    function filterItems(arr, query) {
        return arr.filter(function(el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
    }
    
    // Two way
    const filterItems = (arr, query) => {
        return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    };

    console.log(filterItems(fruits, 'ap'));  // ['apple', 'grapes']
    console.log(filterItems(fruits, 'an'));  // ['banana', 'mango', 'orange']
    ```
---
