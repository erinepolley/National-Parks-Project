

console.log("Modularizing, y'all")

//called on main.js upon page load. Calling National Parks data from JSON server.
const fetchNationalParksData = () => {
    fetch("http://localhost:8088/parks")
        .then(response => response.json())
        .then(parsedParks => parksDisplay(parsedParks))
}


const fetchWeatherData = (latitude, longitude) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${yourKeyHere}/${latitude},${longitude}`)
       .then(response => response.json())
       .then(parsedWeather => addWeatherInfoToEachPark(parsedWeather))
}