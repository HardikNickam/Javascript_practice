// function add(a,b,c){
//     return a+b+c;
// }

// console.log(add(1,5,7));

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(6));
add(2)(3)(6);


// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending email to ${to} with subject ${subject}:${body} `);
//     }

// }
// }
//same code in cs6

//code in cs6

const sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending email to ${to} with subject ${subject}:${body} `);


let step1 = sendAutoEmail("hardiknikam7@gmail.com");
let step2 = step1("New order conformation from amazon");
step2("Please check your email for more details");