const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById("searchBtn");
const weatherImg =document.querySelector('.weather-img');
const temperature =document.querySelector(".temperature");
const description =document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");
const searchCity= document.querySelector(".search-city");
const locationEl=document.querySelector(".location-name")
async function cheackWeather(city){
     const apiKey="f5e1579e2e609c5dc2b3956b1dec38ce"
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

     const weatherData = await fetch(`${url}`).then
     (response => response.json());
     console.log(weatherData);

     if(weatherData.cod === "404"){
          locationNotFound.style.display = "flex";
          weatherBody.style.display = "none";
          searchCity.style.display ="none";
     }else{
        weatherBody.style.display = "flex"
        locationNotFound.style.display = "none";
        searchCity.style.display ="none"
     }

     if(inputBox.value===""){
        searchCity.style.display="block";
        weatherBody.style.display = "none";

     }
     



     temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
     description.innerHTML = `${weatherData.weather[0].description}`;
     humidity.innerHTML =`${weatherData.main.humidity}`
     windSpeed.innerHTML = `${weatherData.wind.speed}Km/h`;
     locationEl.innerHTML = `${inputBox.value}`

     switch(weatherData.weather[0].main){
        case "Clouds":
            weatherImg.src = "/assets/cloud.png";
            break
        case "Clear":
            weatherImg.src = "/assets/clear.png";
            break
        case "Rain":
            weatherImg.src = "/assets/rain.png";
            break
        case "Mist":
            weatherImg.src = "/assets/mist.png";
            break
        case "Snow":
            weatherImg.src = "/assets/snow.png";
     }
}
searchBtn.addEventListener("click" , ()=>{
    cheackWeather(inputBox.value);
})