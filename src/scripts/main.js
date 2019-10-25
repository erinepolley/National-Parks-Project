console.log("You will get through this!")
//on page loading, write a fetch call that grabs the parks info from JSON.
//parse the results.
//Loop over the array of objects, saying for each object... 
//display the park name and the state the park is located in in this HTML string. then...
//take the HTML string and put it in this div tag on the DOM. 




const parkResultsToHtml = (parkObj) => {
    let parkInHtml = `
<article>
    <h3>${parkObj.name}</h3>
    <p>${parkObj.state}</p>
</article>
`
    return parkInHtml;

}


let parkListToHtml = "";
const parksDisplay = (parksResultsArray) => {
    const divThatListWillGoIn = document.querySelector("#parks-list");
    console.log(divThatListWillGoIn)
    parksResultsArray.forEach(park => {
        console.log(park)
        parkListToHtml += parkResultsToHtml(park)
        divThatListWillGoIn.innerHTML = parkListToHtml
        addClassNameToElement(park);




    })

}


const fetchNationalParksData = () => {
    fetch("http://localhost:8088/parks")
        .then(response => response.json())
        .then(parsedParks => parksDisplay(parsedParks))
}

const addClassNameToElement = (parkObj) => {
    let articleOnDom = document.querySelector("article")
    if (parkObj.visited) {
        articleOnDom.classList.add("visited")
    } else {
        articleOnDom.classList.add("not-visited")
    }
}

fetchNationalParksData();
// addClassNameToElement();



        // const parkDisplay = (parkSearchResultsArray) => {
        //     let parksHtml = ""
        //     const parkResultsOnDom = document.querySelector(".container__results")
        //     parkSearchResultsArray.forEach(park => {
        //       parksHtml += parkResultsToHtml(park)
        //       parkResultsOnDom.innerHTML = parksHtml;
        //       // attachEventListenerToSaveButton(park)
        //     });