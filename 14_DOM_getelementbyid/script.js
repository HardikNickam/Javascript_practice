// continuation of previous dom lecture


// getElementById
const ele = document.getElementById("username")
console.log(ele);
// console.log(ele.innerText)
ele.innerText = "John Doe";

//add classes with the help of javascript


ele.classList.add('red-color','italic') 

console.log(ele.classList)  // returns  a DOMTokenList object containing class names in the
 


//Inline Style Using Javascript

ele.style.textDecoration = "underline";
ele.style.color = "blue"
console.log(ele.parentElement)
ele.parentElement.style.background = "purple"

//set Attribute

ele.setAttribute("aria","123")


//Remove element from DOM
ele.remove();
// Rmoving a class from a Classlist

// function myFunction(a){
//     let aa = a.length;
//     aa=aa/2;
//     let aaa ;
//     for ( let i = 0 ; i <aa ; i++){
//        aaa.push(a[i]);
//     }
    
//     return aaa;
// }

// let ii = "1233";
// let il = myFunction(ii);
// // console.log(ii.length)
// console.log(il);