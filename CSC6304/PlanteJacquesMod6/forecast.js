document.getElementById('weather-form').addEventListener('submit', handleClickAwait);

function displayWeather(data) {
    var weatherInfo = document.getElementById('weather-info');
     weatherInfo.innerHTML = '';
    if (data.type === "Feature") {
        var period = data.properties.periods[0].name;
        var temperature = data.properties.periods[0].temperature;
        var trend = data.properties.periods[0].temperatureTrend;
        var windSpeed = data.properties.periods[0].windSpeed;
        var direction = data.properties.periods[0].windDirection;
        var forecast = data.properties.periods[0].detailedForecast;
        var weatherHtml = '<h2>Weather Forecast for ' + period + '</h2>' +
            '<p>Temperature: ' + temperature + ' &#8451;</p>' +
            '<p>Trend: ' + trend + '</p>' +
            '<p>Wind Speed: ' + windSpeed + ' m/s ' + direction + '</p>' +
            '<h3> Forecast </h3>' +
            '<p>' + forecast + '</p>';
        weatherInfo.innerHTML = weatherHtml;
    } else {
        weatherInfo.innerHTML = '<p>Failed to retrieve weather information.</p>';
    }
}

//Used for Async/Await Example 
async function getWeatherAwait(office,gridX,gridY) {
    let url = 'https://api.weather.gov/gridpoints/' + office + '/' + gridX + "," + gridY + "/forecast";
    let response = await fetch(url);
    let data = await response.json();
    return displayWeather(data);
       
}

function handleClickAwait(event) {
    event.preventDefault();
    var city = document.getElementById('city').value;
    if (city == "New York") {
        getWeatherAwait("OKX", 33, 35);
    } else if (city == "Boston") {
        getWeatherAwait("BOX", 71, 90);
    } else if (city == "Orlando") {
        getWeatherAwait("MLB", 26, 68);
    } else if (city == "Chicago") {
        getWeatherAwait("LOT", 76, 73);
    } else if (city == "Washington") {
        getWeatherAwait("LWX", 96, 72);
    } else if (city == "Atlanta") {
        getWeatherAwait("FFC", 51, 87);
    } else if (city == "Seattle") {
        getWeatherAwait("SEW", 125, 68);
    } else if (city == "San Francisco") {
        getWeatherAwait("MTR", 85, 105);
    } else if (city == "Los Angeles") {
        getWeatherAwait("LOX", 155, 45);
    } else if (city == "my_location") {
        let coords = navigator.geolocation;
        console.log(coords);
    }
}