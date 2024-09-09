
// ARRAYS IN JS
// Arrays store same type of data/ collection of data 

/*
let marks = [ 45,67,89,99,90,78];
console.log(marks);
console.log(marks.length);
marks[4] = 92;
console.log(marks);
*/

// Arrays indices   --> plural of index
// arr[0], arr[1], arr[2] etc

// Looping over an array
// print all elements of an array

// for loop
/*let stds = ["saba","ali","khan","ramish"];
for( let i = 0; i <= stds.length; i++){
    console.log(stds[i]);
}
*/

// for-of loop
/*
for(let std of stds){
    console.log(std)
}
*/
// example 2
/*
let cities =["isb","pindi","lahore","karachi","peshawar","Gilgit","multan"];
for( let city of cities){
    console.log(city);
}
*/


// Practise Questions
// (Q1) For a given  array with marks of  students [85,97,44,37,76,60]
//Find the average marks of ht e=entire class

/*
let marks = [85,97,44,37,76,60];
let sum = 0;
for( let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(` average marks of the class = ${avg}`);
*/

// OR 
/*
let marks = [85,97,44,37,76,60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log('The sum of all numbers in the array is:', sum);
*/


// (Q2)For a given array with prices of 5 items --> [ 250, 645, 300, 900, 50]
// All items have an offer of 10% off on them. Change the array to store final price 
// after applying offer.

// Using for-of loop
/*
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items){
    console.log(`The value at index ${i} = ${val}`);
    let offer = val / 10 ;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}
*/

// Or using for loop

/*
let items = [250, 645, 300, 900, 50];
for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
*/


// Array Methods   -> all methods always starts with small letter

// 01) push() adds value to end of an array -> foodItems.push("chips", buger);
// 02) pop() delete vlaues from end of an array & returns value -> foodItems.push();
// 03) toString() converts an array to string  
// e.g., console.log(foodItems.toString());

// 04) Concat() Join multiple arrays and return result
// e.g., final = first. concat(second, third);

// 05) unshift add value to the start of an array
// e.g, foodItems.unshift("chips", buger);

// 05) shift delete value from  the start of an array
// e.g, foodItems.shift("chips", buger);

// 05) slice: returns a piece of an array
// e.g, console.log(foodItems.slice(1,4));  last index will not be included

// 06) splice: change original array(add, remove, replace)
// syntax: splice(startindex,deletecount,newElement);
//e.g, console.log(foodItems.splice(1,2,222,333));




