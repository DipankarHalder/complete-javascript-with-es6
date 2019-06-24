## **Concept of Array.map()**
* **map()** function creates a new array with each element being the result of callback function.
* This function calls the argument function once for each element of the given array in order.

* Syntaxt - 
    ```javascript
    // One way to write syntaxt
    let newArray = arr.map(
        function callback(currentValue[, index[, array]]) {
            // type code
        }[, thisArg]
    )

    // Two way to write syntaxt
    let newArray = arr.map((currentValue, index, array) => {
        // type code
    });
    ```
* **callback** - Function that produces an element of the new Array, taking _three arguments_:
    * **newArray** - the array that is returned
    * **currentValue** - The current element being processed.
    * **index** (optional) - The index of the current element being processed.
    * **array** (optional) - the array on which the map method is called
    * **thisArg** (optional) - Value to use as this when executing callback.

&nbsp;
* Examples -
    ```javascript
    // Examples using map()
    // Dividing the numbers ----------
    let arrs = [2, 56, 78, 34, 65];

    let new_arr = arrs.map(function(arr) {
        return arr / 2;
    });

    console.log(new_arr);  
    // [1, 28, 39, 17, 32.5]
    ```

    ```javascript
    // Square Roots of the numbers ----------
    let arr = [10, 64, 121, 23];
    let new_arr = arr.map(Math.sqrt);
    console.log(new_arr);  
    // [3.1622776601683795, 8, 11, 4.795831523312719]
    ```

    ```javascript
    // Square Roots of the odd numbers ----------
    const numbers = [4, 9, 36, 49];

    let oddSquareRoots = numbers.map((num) => {
       return num % 2 !== 0 ? Math.sqrt(num) : num;
    });

    console.log(oddSquareRoots);  
    // [4, 3, 36, 7]
    ```

    ```javascript
    // Square ----------
    const array = [2, 5, 9];
    let squares = array.map((num) => num * num);
    console.log(squares); 
    // [4, 25, 81]
    ```

    ```javascript
    // Extracting values from an array of objects ----------
    let officers = [
        { id: 20, name: 'Captain' },
        { id: 24, name: 'General' },
        { id: 56, name: 'Admiral' },
        { id: 88, name: 'Commander' }
    ];

    // 1. normal using function
    let officersIds = officers.map(function (officer) {
        return officer.id
    });  
    // [20, 24, 56, 88]

    // 2. using arrow function
    const officersIds = officers.map(officer => officer.id); 
    // [20, 24, 56, 88]


    ```