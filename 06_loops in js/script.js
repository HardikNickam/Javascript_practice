//Loops

for (let i=1 ; i<=10 ; i=i+2){
    console.log('hardik nikam', i)
}


// while

let initialPosition = 0;
let house = 100;

// while(initialPosition != house){
//     initialPosition = initialPosition+1;
//     console.log('step taken ' + initialPosition);
// }



//  Do While 

// do{
//     initialPosition = initialPosition+1;
//     console.log('step taken ' + initialPosition);
// }while(initialPosition<=house)


let num =30;
let guess = 0;
do{
    guess = parseInt(prompt('Guess a number'));
    if(guess== num){
        alert('Winner')
        break;
    }
}while(guess !=0)
