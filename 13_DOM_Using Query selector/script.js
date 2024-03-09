//Query selector

/*Selector's
    -tag name
    -id #
    -class .

    */


//Query selector using tag name -> **selects the first appearnig query 
//if there are more than one tags with same name querySelector selects the first appearing tag


const body = document.querySelector("body");   // can change from body to div to other tag name
// body.innerHTML='<h1>hello from query selector DOM </h1>';   // change the html content 

console.log(body.innerHTML);  //retruned string which is our actual code

// const body1 = document.querySelector("div");
// body1.innerHTML="<p>Hello From Paragraph</p>"
//querySelectorALL

//Query selector using id (#)


const username = document.querySelector("#username");
console.log(username.innerText) ;

username.innerText = " Bond James Bond"



//Query selector using class  (.)




// accessing child nodes and parent node
const ele = document.querySelector("div");
// console.log(ele.innerHTML);


//child node
console.log(ele.children);
console.log(ele.parentNode.children)


const element = document.querySelectorAll(".block")
element.forEach((e) => {
    console.log(e.innerHTML)
})





const all = document.querySelector("code");
all.innerHTML="<h1>alert hello</h1>"

console.log()