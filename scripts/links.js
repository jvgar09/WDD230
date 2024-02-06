//const baseURL = "https://yourgithubusername.github.io/wdd230/";

//const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";
//
//async function getLinks() {
//    const response = await fetch(linksURL);
//    const data = await response.json();
    //console.log(data);//
//    displayLinks(data);
//  }
  
//  getLinks();



// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=29.90&lon=-95.61&appid=66f5836c76e8f5ea0dae08aa7834ee0c';


//const latitude = 29.80;
//const longitude = -95.61;


//const queryParam = `?lat=${latitude}&lon=${longitude}&units=imperial&appid=66f5836c76e8f5ea0dae08aa7834ee0c`;


//const fullUrl = `${url}${queryParam}`;


async function apiFetch() {
    try {
        const response = await fetch(fullUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
