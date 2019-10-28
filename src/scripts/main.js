console.log("You will get through this!")
//on page loading, write a fetch call that grabs the parks info from JSON.
//parse the results.
//Loop over the array of objects, saying for each object... 
//display the park name and the state the park is located in in this HTML string. then...
//take the HTML string and put it in this div tag on the DOM. 


//This function creates a string that will be rendered to the DOM as HTML with certain features of the park results objects.
const parkResultsToHtml = parkObj => {
  return  `
<article id=${className}>
    <h3>${parkObj.name}</h3>
    <p>${parkObj.state}</p>
    <h4>Weather</h4>
    <ul></ul>
</article>
    `
}

//This function creates a string which will be converted to HTML on the DOM. Each object will pass through as an argument, and the interpolation will target certain weather features to insert into the <ul> tags from the above parkResultsToHtml function.
const weatherResultsToHtml = weatherObj => {
    return `
    <li>Currently: ${weatherObj.currently.summary}</li>
    <li>Today: ${weatherObj.hourly.summary}</li>
    <li>Week: ${weatherObj.daily.summary}</li>
    `
}

let weatherFeaturesToHtml = "";
const addWeatherInfoToEachPark = (weatherResultsObjects) => {
    const divThatWeatherWillGoIn = document.querySelector("ul")
    weatherResultsObjects.forEach(place => {
        console.log(place)
        weatherFeaturesToHtml += weatherResultsToHtml(place)
        divThatWeatherWillGoIn.innerHTML = weatherFeaturesToHtml
    })
}

let parkListToHtml = "";
const parksDisplay = (parksResultsArray) => {
    const divThatListWillGoIn = document.querySelector("#parks-list");
  //  console.log(divThatListWillGoIn)
    parksResultsArray.forEach(park => {
     //   console.log(park)
        parkListToHtml += parkResultsToHtml(park)
        addClassNameToElement(park);
        divThatListWillGoIn.innerHTML = parkListToHtml
        fetchWeatherData(park.latitude, park.longitude)
        console.log(park.latitude, park.longitude)
        
    })
};




let className = ""
const addClassNameToElement = (parkObj) => {
    if(parkObj.visited) {
        className = "visited"
    } else {
        className = "not-visited"
    }
}

fetchNationalParksData();
// addClassNameToElement();




//fetch data from weather API using lat and long from parks data
//Needed: Currently: locationObj.currently.summary, Today: locationObj.hourly.summary, and Week: locationObj.daily.summary. <li> in <ul>
//iterate over results, add the stuff I want to a variable.
//take the stuff in the variable and put it in an empty container created in parkResultsToHtml.