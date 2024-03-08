function add(a,b,cb){
    // return a+b; 

    result=a+b;
    cb(result);
}

add(2,4,function (val){
    console.log(val)
});




function addother(a,b,cb){
    res=a+b;
    cb(res);

    return () => console.log(res + " from function to function");

}

// function showres(res){
//     console.log(res+" is the sum of other two numbers");
// }
// add(22,44,showres);

let resukt = addother(22,5,() =>{});
resukt();