// OpenWeatherMap API key
const apiKey = '66f5836c76e8f5ea0dae08aa7834ee0c';
const latitude = 29.53901;
const longitude = -95.53499;

// Function to fetch weather data
async function fetchWeatherData() {
    try {
        // Fetch current weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);
        const currentWeatherData = await response.json();

        // Fetch three-day forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);
        const forecastData = await forecastResponse.json();
        //console.log(forecastData);

        // Extract required information
        const currentTemperature = currentWeatherData.main.temp;
        const currentWeatherDescription = currentWeatherData.weather[0].description;
        const threeDayForecast = forecastData.list.slice(0, 8 * 2); // Get first 3 days (3 * 8 data points per day)


        // Display weather information
        const weatherInfoContainer = document.getElementById('weather-info');
        weatherInfoContainer.innerHTML = `
             <p>Current Temperature: ${currentTemperature}&#x2109;</p>
             <p>Description: ${currentWeatherDescription}</p>
             <h2>Three Day Forecast:</h2>
             <p>${forecastData.city.name}, ${forecastData.city.country}</p>
             <p>
                 ${threeDayForecast.map(item => `<p>Date:${item.dt_txt}  Temp:${item.main.temp} &#x2109; Description:${item.weather[0].description} </p>`).join('')}
             </p>
         `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}



// Get the button and div elements
const toggleButton = document.getElementById('weather-show');
const container = document.getElementById('weather-info');

// Hide the container on page load
container.style.display = 'none';

// Add event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the div container
    if (container.style.display === 'none') {
        container.style.display = 'block'; // Show the div
        toggleButton.innerHTML = "Hide Weather Info";
    } else {
        container.style.display = 'none'; // Hide the div
        toggleButton.innerHTML = "Show Weather Info";

    }
});




//const apiKey = '66f5836c76e8f5ea0dae08aa7834ee0c';
//const city = 'sienna plantation, Tx';
//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
///const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

///const getCurrentWeather = async () => {
try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById('currentTemperature').innerText = `Temperature: ${data.main.temp} °F`;
    document.getElementById('currentDescription').innerText = `Description: ${data.weather[0].description}`;
} catch (error) {
    console.error('Error fetching current weather:', error);
}
//};

//const getThreeDayForecast = async () => {
//    try {
//        const response = await fetch(forecastUrl);
//        const data = await response.json();
//        const forecastList = data.list.slice(0, 8);

//        const forecastUl = document.getElementById('forecastList');
//        forecastList.forEach(entry => {
//            const listItem = document.createElement('li');
//            listItem.innerText = `${entry.dt_txt}: ${entry.main.temp} °F`;
//            forecastUl.appendChild(listItem);
//        });
//    } catch (error) {
//        console.error('Error fetching forecast:', error);
//    }
//};

//getCurrentWeather();
//getThreeDayForecast();