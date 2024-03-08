
//          AND OR AND NOT

const age = 30;

const gender = 'male';

if(age>=18 && gender == 'male'){
    console.log("you can vote and are adult male")
}

// == -> returns boolean value

if(age>=18 || gender=='female'){
    console.log("you are adult")
}


//      *** not ***

number=40;

if(number % 2==0){
    console.log('even')

}


num1 = 65

if(num1%2 != 0){
    console.log('not even')
}


//      other way to write not statement 


if(!(num1%2 == 0)){
    console.log('not even')
}