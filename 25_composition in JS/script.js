function add(a,b){
    return a+b;
}

function sqr(val){
    return val*val;
}

// const addResult = add(2,4);
// console.log(sqr(addResult));

// function addtwoandSquare(a,b){
//     return sqr(add(a,b));
// }

// function compoose(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b));
//     };

// }


const compoose = (fn1,fn2)=>(a,b)=> fn2(fn1(a,b));




//-----------unlimited functions -------------------

function unlimitedfunction(...fns){
    return function(...value){
        return fns.reduce((a,b) => b(a), value);
    };
}


const task = compoose(add,sqr);

console.log(task(2,3));