//Functions


function sayHello(name) {
console.log("hello via function");
}

sayHello()  //calling of function
sayHello()
sayHello()
sayHello()



function add(a,b){      // arguments
    // console.log(a+b)    //never console.log ** always return the value
    ans=a+b;
    return ans
}

let aa= add(5,6);   //Parameters
console.log("hey the result is "+ aa)

function mul(a,b){
    console.log(a*b);
}

mul(3,3)


//  *** GOOD EXERCISE

//***   taking n inputs as argumentswithout  without defining arguments ***

function addition(){
    console.log(arguments)
    sum=0;
    for(let i =0;i<arguments.length;i++){
        sum+=arguments[i];

    }
    return sum;
}   

//***   ALternate way to solve this question

function additionwothalternatemethod(...numbers){
    // console.log(arguments)
    sum=0;
    for(let i =0;i<numbers.length;i++){ 
        sum+=numbers[i];

    }
    return sum;
} 

aaa=addition(1,2,3,4,5);

console.log(aaa)

aaa1=additionwothalternatemethod(1,2,3,4,5);

console.log(aaa1)











