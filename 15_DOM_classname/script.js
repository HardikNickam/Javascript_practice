//Selecting via classname

const ele = document.getElementsByClassName("block")
console.log(ele)  // We get HTML Collection of elements with the specified class name

for (let i = 0 ; i<ele.length ; i++){
    console.log(ele[i])// Print each element in
    ele.item(i).style.background = "blue";         // change color of all the class named block
    // ele[i].remove()
    let element = ele[0];
    
    console.log(element);
    element.remove();

    
}

console.log(ele.length)
// ele[0].remove()  // remove third block from the list
// ele[1].remove()
// ele[2].remove()
// ele[3].remove()
// ele[4].remove()






//returns multiple elements so you have to loop over it to perform or access any element