// function name(name){
//     function sayMyName(){
//         console.log(name);
//     }
//     return sayMyName;
// }

// let nameHardik = name("hardik");
// nameHardik(); // Output: hardik nikam
// nameHardik();
// nameHardik();
// console.log(nameHardik);
// inner function is callled closure( function sayMyName)



//-----------------adding using closure---------------


// function adder(num){
//     function add(b){
//         console.log(num+b);
// }
// return add;
// }

// let addTo5 = adder(5);
// let addTo10 = adder(10);
// addTo10(33);
// addTo5(11); //utility function is created which keeps on adding a number to 5

//---------------
const myName = document.getElementById("name");

function makeTextSizer(size){

    function fontSize(){
        myName.style.fontSize = `${size}px`;
    }
    return fontSize;
}

const size12 = makeTextSizer(12);
const size23 = makeTextSizer(23);
const size43 = makeTextSizer(43);
const size34 = makeTextSizer(34);

const btn = document.getElementById("button");

btn.addEventListener("click",size23)
