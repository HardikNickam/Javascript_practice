// alert("alert")

const button = document.getElementById("location")

async function getData(lat,lon){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0eaff171a2414eaf90c204732241408&q=${lat},${lon}&aqi=yes`
    )
    return await promise.json();

}

async function gotLocation(position){
    const res = await getData(position.coords.latitude,position.coords.longitude)
    console.log(res);
    
    const ele = document.getElementById("mycontainer");
    ele.innerHTML = `<h1>your location is ${res.location.name}</h1>`
   
    

}

function failedLocation(){
    console.log("issue to find the location")
}
button.addEventListener("click",async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedLocation);//callback one is succesfull function other is failed function
})
