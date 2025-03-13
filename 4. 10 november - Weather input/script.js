// Objective: Build a website to display current weather data for a city input.

// Requirements:
// 1. Core Features: Search bar and display for temperature and weather conditions.
// 2. Styling: Basic responsive layout, icons for weather conditions.
// 3. Optional: Additional features like temperature conversion or a simple 3-day forecast.


document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'd4008dc8911146618eb0807c62c18fcc'; 
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const temperatureDisplay = document.getElementById('temperature');
    const weatherConditionDisplay = document.getElementById('weatherCondition');
    const forecastDisplay = document.getElementById('forecast');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name!');
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
            } else {
                const temp = data.main.temp;
                const condition = data.weather[0].description;
                const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                weatherInfo.innerHTML = `<img src="${icon}" alt="${condition}" /><h2>${city}</h2>`;
                temperatureDisplay.innerHTML = `<strong>${temp}°C</strong>`;
                weatherConditionDisplay.innerHTML = `<em>${condition}</em>`;

                // Optional: Fetch 3-day forecast
                fetchForecastData(city);
            }
        } catch (error) {
            weatherInfo.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
        }
    }

    async function fetchForecastData(city) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === '200') {
                let forecastHTML = '<h3>3-Day Forecast</h3>';
                for (let i = 0; i < 3; i++) {
                    const day = data.list[i * 8]; // Every 8th entry is the next day's forecast
                    const temp = day.main.temp;
                    const condition = day.weather[0].description;
                    const icon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;

                    forecastHTML += `
                        <div class="forecast-day">
                            <img src="${icon}" alt="${condition}" />
                            <p>${temp}°C</p>
                            <p>${condition}</p>
                        </div>
                    `;
                }
                forecastDisplay.innerHTML = forecastHTML;
            }
        } catch (error) {
            forecastDisplay.innerHTML = `<p>Error fetching forecast data.</p>`;
        }
    }
});
