console.log("You will get through this!")
//on page loading, write a fetch call that grabs the parks info from JSON.
//parse the results.
//Loop over the array of objects, saying for each object... 
//display the park name and the state the park is located in in this HTML string. then...
//take the HTML string and put it in this div tag on the DOM. 



const parkResultsToHtml = (parkObj) => {
  return  `
<article id=${className}>
    <h3>${parkObj.name}</h3>
    <p>${parkObj.state}</p>
    <ul></ul>
</article>
`

}


let parkListToHtml = "";
const parksDisplay = (parksResultsArray) => {
    const divThatListWillGoIn = document.querySelector("#parks-list");
  //  console.log(divThatListWillGoIn)
    parksResultsArray.forEach(park => {
     //   console.log(park)
        parkListToHtml += parkResultsToHtml(park)
        divThatListWillGoIn.innerHTML = parkListToHtml
        addClassNameToElement(park);
        fetchWeatherData(`${park.latitude}, ${park.longitude}`)
        console.log(park.latitude, park.longitude)
    })
}


let className = ""
const addClassNameToElement = (parkObj) => {
    if (parkObj.visited) {
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