const age=34;

if(age>=18){
    console.log("You are eligible to vote")
}else if(age>=80){
    console.log("You are adult")
}
else{
    console.log("You are not Eligible to vote")     
}

//One else if is executed it skips other  condition


//          Terninary Operator

//      ** if you have exact two condition **

const age1 = 90;

let result = age1>=18 ? 'Yes' : 'No'

console.log(result) //output will be Yes because we used



//        Switch Statement


const  opyion = 5;

switch(opyion){
    case 1: console.log('Hello')
    break;      
    case 2: console.log('Namaste')
    break;
    case 3: console.log('chuss')
    break;
    default:console.log('Invalid option')
}


let a = 3;
let opt = '/';
let b = 4;

switch(opt){
    case '-':console.log(a-b)
    break;
    case '+':console.log(a+b)
    break;
    case '/':console.log(a/b)
    break;
    case '*':console.log(a*b)
    break;
    default: console.log('invalid option')
}



// Conditoin based work we can use ternery operators and if,else

// work with many cases use switch case
