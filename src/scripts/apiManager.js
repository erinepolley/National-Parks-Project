//called on main.js upon page load.

console.log("Modularizing, y'all")

const fetchNationalParksData = () => {
    fetch("http://localhost:8088/parks")
        .then(response => response.json())
        .then(parsedParks => parksDisplay(parsedParks))
}


const fetchWeatherData = (latitude, longitude) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${yourKeyHere}/${latitude},${longitude}`)
        .then(response => response.json())
       .then(parsedWeather => console.log(parsedWeather))
        //getWeather(parsedWeather))
}