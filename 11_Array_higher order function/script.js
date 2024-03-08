//  Array higher order function
const students = ['hardik','nikam','jaydeep','abdul'];


//** forEach() -> higher order function as -> it is a function that takes function as an argument

function print (n){
    console.log(n);
}


//students.forEach(print);    //takes one element of the array and takes the function as an argument and this argument can be used according to your use

students.forEach((n)=>{       // arrow function as callback
    console.log(n)
})





//**map() => returns new array

console.log("using .map")

students.map((val)=>console.log(val));

    //diff btw .map and .froEach
    //.map returns new array while forEach doesnt anything


const number=[1, 2, 3, 4, 5, 6, 7];
    //if you want to return twice of each number in array and ans should be in array form

//using froEach
newarr=[];
number.forEach((num)=>newarr.push(num*2));
console.log(newarr)

//USING .map
function double(n){
    return n*2;
}

let newArr= number.map(double);   //returns [2,4,6,8,10,12,14]
console.log(newArr)                     //gives same output but using map is more efficient


//**.find() ->

let asn = number.find((num)=> num === 4);

console.log(asn);
//find()Index()
let ans = number.findIndex((num)=> num === 4);
console.log(ans);
console.log(number[ans]);

//**.include() -> returns boolean values 

let as = number.includes(3);
console.log(as);

let ass = number.includes(30);
console.log(ass);


//** filter() -> filter out array according to the consition
 newArray = number.filter((num) => num % 2==0)
 console.log(newArray);


 //**slice()-> want a subpart of the array

    //  let new_arr = number.slice(1,5);
    //  console.log(new_arr)


    // let new_arr = number.slice(1);
    //  console.log(new_arr)

    let new_arr = number.slice(0,5);
    console.log(new_arr)

//**splice()-> removes an elements in array but returns it in new array

let new_arra = number.splice(1,5);  // deletes num from range(1,5) in the numbers array
console.log(new_arra)
console.log(number)   