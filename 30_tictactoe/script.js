
let currentplayer = "X";
let arr =Array(9).fill(null);
// console.log(arr)
function checkWinner(){
    if(
        (arr[0]!== null && arr[0]==arr[1]&& arr[1]==arr[2])||
        (arr[3]!== null && arr[3]==arr[4]&& arr[4]==arr[5])||
        (arr[6]!== null && arr[6]==arr[7]&& arr[7]==arr[8])||
        (arr[0]!== null && arr[0]==arr[3]&& arr[3]==arr[6])||
        (arr[1]!== null && arr[1]==arr[4]&& arr[4]==arr[7])||
        (arr[2]!== null && arr[2]==arr[5]&& arr[1]==arr[8])||
        (arr[0]!== null && arr[0]==arr[4]&& arr[4]==arr[8])||
        (arr[2]!== null && arr[2]==arr[4]&& arr[4]==arr[6])
    ){
        console.log("you won "+currentplayer)
        document.write(`Winner is player ${currentplayer}`)
}
if(!arr.some(e=>e===null)){
    document.write(`Draw`)
}

}
function handleClick(ele){
    // console.log(ele);
    const id = Number(ele.id);
    if(arr[id]!==null) return;
    console.log(id);
    arr[id] = currentplayer;
    console.log(arr)
    ele.innerText = currentplayer;
    checkWinner();
    currentplayer = currentplayer === 'X'? "O" :'X';
    
    
}