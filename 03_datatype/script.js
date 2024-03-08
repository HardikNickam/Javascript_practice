//Date Types

//Numbers

let num = 3.323;
let num1=  22;

console.log(num+num1);

// automatic implicite typecasting



//Strings

const name ="Hardik";  //String in single or double  quotes
const Lastname='Nikam';
console.log(name + " "+ Lastname);


//Booleans
let Isloggnedin = true;

//NULL

// let Lastlogindate=null;

//can be anything  but null means nothing is there
//we can change it to string or integer etc 

let Lastlogindate=undefined;
// console.log(Isloggnedin)
//used to delete from from the memory



//Objects
//**very diff than other language **

const person = {
    first_name:"hardik",
    last_name: "Nikam",
    age:21,
    isLOggedin:false,
}

console.log(person)
console.log(person.first_name)
console.log(person.first_name,person.age)


if(1) {
    console.log(true)
}

// true=1
// false=0

//   ** Bollean values are internally 1 and 0 respectively so if we add 10+true ans is 11 similarly false + 10 ans is 10 as false is 0**
//console.log(true * 10)



//              ***     some weird JS logic     ***

//  String '1' +'1'  - string
//  string +number   -string
//  string * number  - number
//  'a' * 1          - Nan  not a number
//  'a' + 1         - a1 - string 


//              Typeof operator

console.log(typeof person.age)