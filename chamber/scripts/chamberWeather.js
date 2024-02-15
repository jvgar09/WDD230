
const apiKey = '66f5836c76e8f5ea0dae08aa7834ee0c';
const city = 'sienna plantation, Tx';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

const getCurrentWeather = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('currentTemperature').innerText = `Temperature: ${data.main.temp} °F`;
        document.getElementById('currentDescription').innerText = `Description: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
};

const getThreeDayForecast = async () => {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        const forecastList = data.list.slice(0, 8);

        const forecastUl = document.getElementById('forecastList');
        forecastList.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.innerText = `${entry.dt_txt}: ${entry.main.temp} °F`;
            forecastUl.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
};

getCurrentWeather();
getThreeDayForecast();


// Get the button and div elements
const toggleButton = document.getElementById('forecast');
const container = document.getElementById('forecastList');

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