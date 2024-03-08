//  1. Syntax

//accepting arguments and parameters in JS 

const sayHello = () => {
    console.log("Hello");
};

sayHello( );



// const add = (a,b) => {
//     return a+b;     
// };

// console.log(add(4,5))



// if we directly returning like above arrow function can be made in opne line (** use only when there is one line in body **)
const add = (a,b) => a+b;

console.log(add(2,3));


//  2. 'arguments' keyword

// in arrow function we dont have the 'arguments' keyword/objects like funciton so we will have to use alternate method to take various inputes as paraemters without defining the arguments


// use ...nums  which is a spread operator

const add1 = (...nums) => {
    console.log(nums)    
};

add1(1,2,3,4,5)



//  3.Hoisting

// *** Hoisiting-> access function before defining the function

hoisting();

function hoisting(){
    console.log("hello via hoisting")       // ***  But doesnt work for arrow function
};


//  4.This keyword

// Scope of arrow function is global so 'this' keyword refers to  window which points global function 


const obj ={
    value:22,
    myfunction: () => {
        console.log(this);
    },

};

obj.myfunction();






