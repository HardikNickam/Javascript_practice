const button = document.getElementById("button");
const input = document.getElementById("city");
const cityname = document.getElementById("cityname");
const citytime = document.getElementById("citytime");
const temp = document.getElementById("temp");

async function getData(city_name){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0eaff171a2414eaf90c204732241408&q=${city_name}&aqi=yes`
    )
    return await promise.json();

}
button.addEventListener("click", async ()=>{
    console.log(input.value);
    const value = input.value;
    const result = await getData(value);
    console.log(result)
    // const ff = "http://api.weatherapi.com/v1/current.json?key=0eaff171a2414eaf90c204732241408&q="+input.value+"&aqi=yes";
    // console.log(ff.temp_c);
    cityname.innerText = `${result.location.name}, ${result.location.region}`
    citytime.innerText = result.location.localtime;
    temp.innerText= result.current.temp_c;
});

//http://api.weatherapi.com/v1/current.json?key=0eaff171a2414eaf90c204732241408&q=London&aqi=yes