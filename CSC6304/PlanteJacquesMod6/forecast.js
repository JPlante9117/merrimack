const displayWeather = (data) => {
    let weatherInfo = document.getElementById('weather-info');
     weatherInfo.innerHTML = '';
    if (data.type === "Feature") {
        let period      = data.properties.periods[0].name,
            temperature = data.properties.periods[0].temperature,
            trend       = data.properties.periods[0].temperatureTrend,
            windSpeed   = data.properties.periods[0].windSpeed,
            direction   = data.properties.periods[0].windDirection,
            forecast    = data.properties.periods[0].detailedForecast,
            weatherHtml = `
            <h2>Weather Forecast for ${period}</h2>
            <p>Temperature: ${temperature} &#8457;</p>
            <p>Trend: ${trend}</p>
            <p>Wind Speed: ${windSpeed} ${direction}</p>
            <h3> Forecast </h3>
            <p>${forecast}</p>
        `;
        weatherInfo.innerHTML = weatherHtml;
    } else {
        weatherInfo.innerHTML = '<p>Failed to retrieve weather information.</p>';
    }
}

const setLoading = () => {
    let weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        Getting Weather Information <div class="anim-dot">.</div><div class="anim-dot">.</div><div class="anim-dot">.</div>
    `;
}

//Used for Async/Await Example 
const getWeatherAwait = async (office,gridX,gridY) => {
    let url      = 'https://api.weather.gov/gridpoints/' + office + '/' + gridX + "," + gridY + "/forecast",
        response = await fetch(url),
        data     = await response.json();

    return displayWeather(data);
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => { permissionReceived(position); },
            (e) => { permissionDenied() },
            { enableHighAccuracy: true });
    } else { 
        let weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = '&nbsp Geolocation is not supported by this browser.';
    }
}

const permissionReceived = async (position) => {
    setLoading();
    let lat      = position.coords.latitude,
        lng      = position.coords.longitude,
        gridJson = await fetch(`https://api.weather.gov/points/${lat},${lng}`).then(resp => resp.json()),
        office   = gridJson.properties?.gridId,
        x        = gridJson.properties?.gridX,
        y        = gridJson.properties?.gridY;

    return getWeatherAwait(office, x, y);
}

const permissionDenied = () => {
    let weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        &nbsp Geolocation was not allowed by the user.
        This may be a one-time refusal or you need to
        check the Location Services on your Settings.
    `;
}

const handleClickAwait = (event) => {
    event.preventDefault();
    let city = document.getElementById('city').value;
    if (city == 'New York') {
        getWeatherAwait('OKX', 33, 35);
    } else if (city == 'Boston') {
        getWeatherAwait('BOX', 71, 90);
    } else if (city == 'Orlando') {
        getWeatherAwait('MLB', 26, 68);
    } else if (city == 'Chicago') {
        getWeatherAwait('LOT', 76, 73);
    } else if (city == 'Washington') {
        getWeatherAwait('LWX', 96, 72);
    } else if (city == 'Atlanta') {
        getWeatherAwait('FFC', 51, 87);
    } else if (city == 'Seattle') {
        getWeatherAwait('SEW', 125, 68);
    } else if (city == 'San Francisco') {
        getWeatherAwait('MTR', 85, 105);
    } else if (city == 'Los Angeles') {
        getWeatherAwait('LOX', 155, 45);
    } else if (city == 'Current Location') {
        getLocation();
    }
}

document.getElementById('weather-form').addEventListener('submit', handleClickAwait);