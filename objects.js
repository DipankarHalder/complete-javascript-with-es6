/*    
    *****************************************************
    $  Object Concept
    *****************************************************
        - An objects are used to store keyed collections of various data and more complex entities. An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
        - We can created empty object using one of two syntaxes:

        Example  -
        ----------
            let user = {};              // "Object literal" syntax
            let user = new Object();    // "Object constructor" syntax


        Use literals and properties -
        -------------------------
            let user = {            // an object
                name: "John Doe",   // by key "name" store value "John"
                age: 20             // by key "age" store value 30
            };

            - Print the user object in console,
            - Object property values are accessible using the "dot notation",
            Example  -
            ----------
                console.log(user.name);
                console.log(user.age);
                

            ADD  :   We can add the new property with value in user object,
            Example  -
            ----------
                user.isAdmin = true;
                console.log(user);


            DELETE  :   We can delete any property form user object,
            Example  -
            ----------
                delete user.age;
                console.log(user);


            MULTIWORD  :   We can use multiword property in user object using "" (quote),
            Example  -
            ----------
            let user = {
                name: "John Doe",
                age: 20,
                "likes birds": false   // multiword property name must be quoted
            };

            - But we have a problem in multiword property. It's can't access to works using the dot notation. That’s because the dot requires the key to be a valid variable identifier. that is no spaces and other limitations.
            Example  -
            ---------- 
                user.likes birds = true     // this would give a syntax error

            - We can overcome this kind of senerio using “square bracket notation” that works with any string,
            Example  -
            ----------
                user["likes birds"] = true;
                console.log(user);

                // SAME AS
                let keyValue = "likes birds";
                user[keyValue] = true;

                delete user["likes birds"];     //delete the multiword property
                console.log(user);

            
            COMPUTED PROPERTIES  :   We can use square brackets in an object literal. That’s called "Computed Properties".
            Example  -
            ----------
                let fruit = prompt("Which fruit to buy?", "apple");
                let bag = {
                    [fruit]: 5,       // the name of the property is taken from the variable fruit
                };
                alert( bag.apple );   // 5 if fruit="apple"

                // SAME AS
                let fruit = prompt("Which fruit to buy?", "apple");
                let bag = {};
                bag[fruit] = 5;       // take property name from the fruit variable


            [ NOET:  
                -  Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more difficult to write.
                -  So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets. ]

            
            PROPERTY VALUE SHORTHAND  :
            Example  -
            ----------
                function makeUser(name, age) {          ||  function makeUser(name, age) {
                    return {                            ||      return {
                        name: name,                     ||          name,
                        age: age                        ||          age
                    };                                  ||      };
                }                                       ||  }

                let user = makeUser("John", 30);
                alert(user.name);

                
*/