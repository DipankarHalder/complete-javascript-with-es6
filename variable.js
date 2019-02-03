/*
    *****************************************************
    $  var, let & const
    *****************************************************
        1.  var - 
                --> Scope essentially means where these variables are available for use.
                    var declarations are "globally scoped or function/locally scoped". It is globally scoped 
                    when a var variable is declared outside a function. This means that any variable that is 
                    declared with var outside a function block is available for use in the whole window.
                    var is function scoped when it is declared within a function. This means that it is available 
                    and can be accessed only within that function.
                
                --> var variables can be re-declared and updated -> That means that we can do this within the 
                    same scope and won't get an error.
                
                --> Hoisting of var -> Hoisting is a JavaScript mechanism where variables and function declarations 
                    are moved to the top of their scope before code execution. What this means is that if we do this:
                    Example:
                    --------
                        console.log (greeter);
                        var greeter = "say hello"


        2.  let -
                --> A block is chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces 
                    is a block. So a variable declared in a block with the let is only available for use within that block.

                --> let can be updated but not re-declared -> Just like var, a variable declared with let can be updated 
                    within its scope. Unlikevar, a let variable cannot be re-declared within its scope.

                --> Hoisting of let -> Just like var, let declarations are hoisted to the top. Unlike var which is 
                    initialized as undefined, the let keyword is not initialized. So if you try to use a let variable 
                    before declaration, you'll get a Reference Error.


        3. const -
                --> const declarations are block scoped -> Like let declarations, const declarations can only be accessed 
                    within the block it was declared.

                --> const cannot be updated or re-declared -> This means that the value of a variable declared with const 
                    remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable 
                    with const, we can neither do this.

                --> Hoisting of const -> Just like let, const declarations are hoisted to the top but are not initialized.

                --> [NOTE - This behavior is somehow different when it comes to objects declared with const. While a const 
                    object cannot be updated, the properties of this objects can be updated. ]


        In short
        -------------------
            1. var        
                --> Globally or function scoped
                --> updated and re-declared within its scope
                --> For hoisting - variables are initialized with undefined
                --> Can be declared without being initialized

            2. let
                --> Block scoped
                --> Updated but not re-declared
                --> For hoisting - variables are not initialized
                --> Can be declared without being initialized        

            3. const
                --> Block scoped
                --> Neither be updated nor re-declared
                --> For hoisting - variables are not initialized
                --> Must be initialized during declaration


*/