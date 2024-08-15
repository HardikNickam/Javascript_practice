// alert("hi")
// ---------current time----------------


// function showTime(){
//     const time = new Date();
//     console.log(time)
//     const currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
//     console.log(currentTime)
//     const displatTime = document.getElementById("time");
//     displatTime.innerHTML = currentTime;
// }



// setTimeout(()=>{
//     console.log("hello");
// }, 5000);

// let interval = setInterval(()=>{
//     showTime();
// },1000)

// function stopTime(){
//     const displatTime = document.getElementById("time");
//     clearInterval(interval);

// }

// const button = document.getElementById("stopbutton");
// button.addEventListener("click", stopTime);



// --------------Assignment(STOP WATCH) -------------------

const txttime = document.getElementById("Time");
const button = document.getElementById("start");
const display = document.getElementById("display");

function showTime(){
    const txtime = document.getElementById("Time");
    var time = txtime.value;
    let interval = setInterval(()=>{
        if(time>=0){
            display.innerHTML = time;
            time--;
        }
        else{
            display.innerHTML = "Time's Up";
            clearInterval(interval);
        }

    },1500)
   
    display.innerHTML = time;

}

// setInterval(()=>{
//     showTime();
// }, 1000);

button.addEventListener("click",showTime);