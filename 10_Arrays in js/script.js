//Arrays

const students = ['hardik','nikam','jaydeep','abdul'];
console.log(students.length);
console.log(students[3])

students[3]="manan";
 console.log(students)

 // even if the array defined is const we can make changes to the values inside the array 
 //but not been able to make changes to the variable like we cant reinitialize the array with diferent va;
 

 //         *** cannot change the varible conts but can change the values inside the array ***


 //Array push

 students.push('rohit');
 console.log(students)

 // Array in JS are not homogeneous : any data type can be stored in array in js  ** usually arrays are homogeneous but not in JS **
 // *** Heterogeneous arrays in JS
 // ** can also have objects in arrays in js
//eg
const varjs=['hardik',11,true,"even emojis","🫣"]
console.log(varjs)

varjs.push({name:"hardik nikam"});
console.log(varjs)


//Array index

console.log(varjs.indexOf(true))


//Array POP

students.pop();
console.log(students)

//Array Revese
 console.log(students.reverse())

