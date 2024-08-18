// IIFE - Immediately Invoked Fucntion Expression

(function add(a,b){
    console.log( a + b);
})(34,4);
const add = ((a,b)=>console.log(a+b))(2,2) //4
// add

const value = (()=>100)();
console.log(value); // 100

// global variable is not populated
// execute asun function
//  const fetchDate = (async()=> await fetch())() ////
//Module pattern ==== create orivate and public variable

//

const atm =function money(balance){
    let amt = balance;
    function witdraw(amount){
        if(amount > amt){
            return "insufficient balance";
        }
        else{
            amt -= amount;
            return amt
        }
    }
    return {witdraw};
};


const hardik = atm(1000);
console.log(hardik.witdraw(500)); // 500
console.log(hardik.witdraw(500)); 
console.log(hardik.witdraw(500)); 
