// Functions in JS
// Functions are block of code that perform specific tasks/
// can be invoked/called whenever needed.


// Function Syntax
/*
function functionName () {
 block of code
}
functionName();
*/

// function parameters are like local variables of function (block scope)

// Example
function myFunction (){
    console.log("My first function");
    console.log("Hello World");
    
}
myFunction (); 
// OR
function myFunction (msg){ // parameter --> input
    console.log(msg);
}
myFunction ("I love JavaScript"); // argument 

// Function to calculate sum of 2 numbers
function sum (a, b){
    //local variables --> scope
s = a + b;
return
}
sum(); 

// multiplication function
function mul(a,b){
    m = a * b;
    return
}
mul();

            // Arrow Functions
// synatx            
// const functionName = (param1, pararm2) => { do some work}

// example
const arrowSum = (a,b) => {
    console.log(a + b);
}
arrowSum ();

// Practise Questions 

function countVowel (str){
    let count = 0;
    for (const char of str){
        if(char === "a" ||
           char === "e" || 
           char === "i" ||
           char ==="o" || 
           char === "u")
        {
            count ++;
        }
    }
    
    return count;
}

// For-each loop in Array (Call back functions)
// A callback is a function passed as an argument to another function.

// Example
arrowSum.forEach(function printVal(val){
    console.log(val);
});

//OR 
let arr = ["pindi", "punjab","Islamabad"];
arr.forEach((val) =>{
    console.log(val);
});






