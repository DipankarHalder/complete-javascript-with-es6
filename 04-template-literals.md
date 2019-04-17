## ES6 Template Literals & Tag Functions

## **1. &nbsp; Template Literal** 
_**A template literal is a way to concatenate strings while allowing embedded expressions and improving readability.**_

We normally use single ( ‘ ) or double ( “ ) quotes for writing string in JavaScript. Like :

``` javascript
// Example - veriable
let string_1 = 'Hello String One';    //single quote
let string_2 = "Hello String Two";    //double quote.

// Example - HTML templates
function personTemplate(person){
  return "<article class='person'>" +
            "<h3>" + person.name + "</h3>" +   
            "<p> Hobbies: " + person.hobbies +  "</p>" +
            "<p> Current job: " + person.job + "</p>" +                         
          "</article>";
}
```

But with _**ES6 template literals**_, we use enclosing back-ticks ( ` ) instead. 

``` javascript
// Example - veriable
const string_3 = `Hello World`;

// Example - HTML templates
function personTemplate({name, hobbies, job}){
   return `<article class="person">
            <h3>${name}</h3>
            <div>
                <div>Hobbies:</div>
                <ul>
                    ${hobbies.map(hobby => `<li>${hobby}</li>`).join(" ")}
                </ul>
            </div>
            <p>Current job: ${job}</p>
          </article>`;
}
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