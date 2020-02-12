# National Parks

This project offered practice using external APIs. Instructions are below. 

## Instructions for Viewing the Project

1. Clone down this repo.
2. `cd` into the repo.
    a. `cd` into the `api` directory
    b. Run `json-server -w database.json -p 8088`

3. You will also need to use http-server:
    a. `cd` into the `src` directory
    b. Run `http-server`

## A List of National Parks

### MVP

Build an application that gets data about national parks from your json-server API and displays the list of national parks on the DOM. Each national park should be formatted in HTML like below:

```html
<article>
    <h3>Park Name</h3>
    <p>State the park in located in</p>
</article>
```
If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.

### Stretch Goal

For each of the national parks, use the latitude and longitude to get the weather in that area using this API: https://darksky.net/dev. From the data coming back from the Dark Sky API, you are going to use `summary` listed under `currently`, `hourly` and `daily`. Change the html so it looks like this:

```html
<article>
    <h3>Park Name</h3>
    <p>State the park</p>
    <p>Weather:</p>
    <ul>
    <li>Currently: Summary from currently in API Data</li>
    <li>Today: Summary from hourly in API Data</li>
    <li>Week: Summary from daily in API Data</li>
    </ul>
</article>
```

If you encounter CORS issues with the Dark Sky API, you can add this to the front of you URL: `https://cors-anywhere.herokuapp.com/`
