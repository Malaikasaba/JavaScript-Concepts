// We use console.log to print any message
console.log("Malaika Saba");

// Variables in JavaScript
name = "Malaika Saba";
age = 20;
x = null;      //empty 
y = undefined; //value not defined
isFollow = false; // Boolean values 
console.log(name);

// Variable Rules
// 01) variables names are CaseSensitive: a and A is different
// 02) Only letters, digits and underscore(_) and $ is allowed.(not even space)
// 03) Only a letter, underscore(_) or $ should be Ist character.
// 04) reserved words cannot be variable names.

// Cases
// 01) fullName----------Camel case
// 02) full-name----------Kabab case
// 03) full_name---------Snake case
// 04) FullName---------Pascal case
// 01) fullname--------General case

// Keywords
// 01 Var------can be redeckared and update
// 02 Let------cannot be redeckared but can be update  (most used) a/c to ES6-215
// 03 const------cannot be redeckared and update       (most used) a/c to ES6-215


// Examples
{
let age = 20;
age = 21;
age = 22;
let y = symbol("hello");
console.log(age);
}
{
const PI = 3.14;
console.log(PI);
}
{
var a = 20;
var a = 21;
var a = 22;
console.log(a);
}

/*
Datatypes in JavaScript
 Two types of datatypes in JS

 A) Primitive Datatypes
 01- String             02- Number
 03- Boolean            04- Null
 05- Undefined          06- Bigint
 07- Symbol

 B) Non-Primitive Datatypes
 Objects: Collection of well defined values/datatypes Or key value pairs.
 Objects are categorized into Arrays and functions.
 e.g., 
 let const student = {
    fullName:"Malaikan saba";
    age:20;
    cgpa:3.15;
    isPass:true;
    }
console.log(student["age"]);
OR
console.log(student.cgpa);
If want to change the any value then,
student["age"] = student ["age"] + 1;
student["name"] = "Micheal";
*/

/*
Practise Questions 
const product = {
    title:"Black School bag",
    ratings:4,
    offer:5,
    price:300,
    isDeal:true
};
console.log(product);
*/










