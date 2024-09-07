
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





