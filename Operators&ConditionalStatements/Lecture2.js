
// Lecture 2 : Operators and Conditional Statements | JavaScript 

// Comments in  JavaScript
    //  01) Signle Line Comments
    //  This symbol is used for single line comments
    //  02) Double line Comments  
    /* This symbol is used for double line comments */ 

/*  Operators in JS
    Used to perform some operations in JS
    01- Modulus Operator: e.g., a%b, 5%3 = 2, reminder(2)
    02- Exponentionl Operator: e.g, a**b, 5**2 = 25 
    03- Unary Operators : it has 2 operators 
    a) Increment operator: a++ or ++a (a + 1) 5++
    a++ = post increment
    ++a = pre increment

    b) Decrement operator: b++ (b - 1) 5--
    a-- = post decrement
    --a = pre decrement
    04) Arithemetic Operators:  +, -, *, /
    05) Assignments operators: =, +=, -=, *=, %=, **= 
    06) Comparison operators: 
    a) Equal to : ==
    b) Equal to & type: ===
    c) Not equal to !=
    d) Not equal to & type !==
    07) Logical Operators
    a) logical AND operator &&
    b) Logical OR operator ||
    c) Logical NOT !



*/
    //  Arithemetic Operators
/*    let a = 4;
    let b = 5;
    console.log("a = ", a, "&" , "b = ", b)
    console.log("a + B =",a + b);
    console.log("a - B =",a - b);
    console.log("a * B =",a * b);
    console.log("a / B =",a / b);
    console.log("a % B =",a % b);
    console.log("a ** B =",a ** b);
*/

// Unary Operators
/* let a = 3;
let b = 5;
console.log("a =",a, "& b =", b);
a++;
b--;
console.log(a);
console.log(b);
*/

// Pre and Post Concept 
// Pre increment and decrement
/* let a = 4;
let b = 5;
console.log("a =",a, "& b =", b);
console.log("++a =", ++a);
console.log("a = ", a);
console.log("--b =", --b);
console.log("b = ", b);
// Post Increment & Decrement
console.log("a++ =", a++);
console.log("a = ", a);
console.log("b-- =", b--);
console.log("b = ", b);
*/

// Assignments Operators
// =, +=, -=, *=, %=, **= 
/*let a = 10;
let b = 5;
let c = 2;
let d = 8;
console.log("a =", a,"b =",b,"c =",c,"d =",d)
a += 6; // a = a + 1;
b *= 6; // a = a * 1;
c %= 6; // a = a % 1;
d **= 6; // a = a ** 1;
console.log("a =", a,"b =",b,"c =",c,"d =",d);
*/

// Comparison operators
/* let a = 10;
let b = 5;
console.log("a == b", a == b); // eual to
console.log("a != b", a != b); // nor equal to
console.log("a === b", a === b); // equal to & type     ( stricter version of comparison)
console.log("a !== b", a !== b); // not equal to & type ( stricter version of comparison)
*/

// Logical Operators In JS
/*let a = 5;
let b = 6;
 cond1 = a < b;
 cond2 = a != b;
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("!(cond1)", !(cond1));
*/





// CONDITIONAL STATEMENTS
// 01) If-statement
// 02) if-else statement
// 03) else-if statement
// 04) 

/* 01) & 02) if and if-else statement
let age = 10;
if(age >= 18) {
    console.log(" You can Vote");
}
else{
    console.log(" You cannot Vote")
}

let num = 10;
if (num % 2 === 0){
    console.log(num,"is even")
}
else{
    console.log(num, " is odd")
}
*/

//03 else-if statement 
/* let mode = "dark";
let color;

if (mode === "dark"){
   color = "black";
}
else if (mode === "blue"){
color = "blue";
}
else if (mode === "white"){
color = "white";
}
else{
    color = "gray";
}
console.log("color", color);
*/

// Special operator OR Ternary Operator
   
/* let age = 25;
let result = age>18 ? "Adult" : "Not adult";
console.log(result); 
// OR 
age > 18 ? console.log("Adult") :console.log("Not an Adult");
*/


// Switch Statement



// Prompt concept
/*let name = prompt("hello!");
console.log(name);
*/

// Practise Questions
// (Q1) Get user ti input a number using prompt ("Enter a number"). Check if the number is multiple of 5 or not?
/*
let num = prompt("Enter a number:");
if (num % 5 === 0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num, "is not multiple of 5");
}
*/

// (Q2) Write a code which can give grades to a students
/*
    90-100,    A
    70-89,     B
    60-69,     C
    50-59,     D
    0-49,      F
*/
let score = prompt("Enter Marks: ");

if(score >= 90 && score <= 100 ){
    console.log(" Grade A");
}
else if(score >= 70 && score <= 89){
    console.log("Grade B")
}
else if(score >= 60 && score <= 79){
    console.log("Grade C")
}
else if(score >= 50 && score <= 69){
    console.log("Grade D")
}
else if(score >= 0 && score <= 49){
    console.log("Grade F")
}
 












