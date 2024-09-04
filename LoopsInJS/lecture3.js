
// LOOPS IN JAVASCRIPT

/* 01) For Loop8
For Loop Syntax
for(let i=1; i<=5; i++){
console.log("Malaika Saba")
}
*/
/*for( count = 1; count<=5; i++){
    console.log("Malaika Saba")
}
*/

/* Calculate Sum of 1 to 5 
let sum = 0;
for( i = 1; i<=5; i++){
sum = sum + 1;
}
console.log("Sum =", sum);
*/
/*for( i=1; i<=5; i++){
    console.log("i =", i)
}
for(y=1; y<=5; y++){
    console.log(y, "SABA")
*/


// WHILE LOOP
// While loop synatax
// while(condtion){
// do some work
// }

// Number 1 to 5
/* let i = 1;
while(i<5){
    console.log("i =", i);
    i++;
*/

// DO WHILE LOOP
// DO while loop runs atleast one time 

/*let i = 20;
do {
    console.log("Saba");
    i++;
}
while(i<=10);
*/

// Number from 1 to 5 using do while loop
/* let i = 1;
do {
    console.log("i =",i);
    i++;
}while(i<=5);
*/


// FOR-OF LOOP    it is used for special purpose , e.g., on stings or Arrays
// Syntax of fo-of loop
// for(let varl of strVar){
// do some work
// }


/* let str = "MalaikaSaba";
let size = 0;

for (let i of str){ // iterator -> characters
console.log("i =",i);
size++;
}
console.log("Strong Size = ", size);
*/

// For-in LOOP
// Syntax
// for(let key in objVar){
    // do some work
// }

/*
let student = {
    name: "Malaika",
    age: "20",
    cgpa:"3.1"
};
for(let key in student){
    console.log("key = ", key, "value = ", student[key]);
}
*/


// Practise Questions
// Print all the even numbers from 0 to 100
// Qno 1

/* for (let num = 0; num<=100; num++)
{
    if(num%2 == 0){
        console.log("num = ", num);
    }
}
*/
 

// Create a game umber where you start with any random game number.
// Ask the user to keep guessing the number until the user enters the correct number.

/* let gamNum = 25;
let userNum = prompt(" Guess the Game Number : ");
while(userNum != gamNum ){
userNum = prompt("You entered wrong number, Guess again: ");
}
console.log("Congrats! You guessed the right number");
*/


// Strings in JavaScript
// Strings are textual information

// String Properties
//  (01)Stirng length
// str.length


// (02) Accessing individual character of a string
// Str[0], Str[1], Str[2], etc

// let str = "Ariyan";
// console.log(str[4]);


// Template Literals
// special type of string used to write objects and vairables in a sinlge string.

/* let obj = 
{
    item:"pen",
    price: 20,
};
let output = `The price of ${obj.item} is ${obj.price} rupees`;
console.log(output);
*/


// Escape Characters (count as single character)
// \n -> next line
// \t -> tab space b/w words


// String Methods
/*
(01) str.toUpperCase()
(02) str.toLowerCase()
(03) str.trim()   removes the starting & ending extra spaces
(04)
(05)
(06)
 
*/
/*  (01) str.toUpperCase() // storing vale to the new string without changing to the original string.
let str = "malaikaSaba";
let newStr = str.toUpperCase(); 
console.log(str);
console.log(newStr);
*/


/*  (02) str.toLowerCase() // Changed the original string
let str = "malaikaSaba";
str = str.toLowerCase(); 
console.log(str);
*/

/*  (03) str.trim() // removes extra space from start & end
let str = "           malaika Saba            ";
str = str.trim();   
console.log(str);
*/

/*  (04) str.slice // returns some part of string
let str = "malaika Saba";
str = str.slice(1, 5);  // start with 1 and ends on 5 but ending index will be non inc 
console.log(str);

*/


/*  (05) str.concat // Join two strings 
let str1 = "malaika";
let str2 = "Saba";

let output = str1.concat(str2);
console.log(output);
*/


/*  (06)str.replace  // Replacing character or word with another

let str = "malaika";

console.log(str.replace("malaika","saba"));
*/

/*  (07) str.charAt // ffinding character through index number

let str = "Hello World";
console.log(str.charAt(4));
*/

















