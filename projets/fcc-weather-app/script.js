

// Ton code JavaScript ici
// affichage
const weatherIcon= document.getElementById('weather-icon');
const mainTemperature = document.getElementById('main-temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const windGust = document.getElementById('wind-gust');
const weatherMain= document.getElementById('weather-main');
const currentLocation = document.getElementById('location');
// inputs
const getWeatherBtn = document.getElementById('get-weather-btn');
const citySelect = document.getElementById('city-select');


async function getWeather(city) {
    try {
       const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
       return await response.json();
    }
    catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

async function showWeather(city) {
    try {
        const data = await getWeather(city);
        console.log('Réponse reçue:', data);
        weatherIcon.src = data.weather[0].icon? data.weather[0].icon : 'N/A';
        mainTemperature.innerText = data.main.temp? `${data.main.temp} °C` : 'N/A';
        feelsLike.innerText = data.main.feels_like? `Feels like: ${data.main.feels_like} °C` : 'N/A';
        humidity.innerText = data.main.humidity? `Humidity: ${data.main.humidity} %` : 'N/A';
        wind.innerText = data.wind.speed? `Wind speed: ${data.wind.speed} m/s` : 'N/A';
        windGust.innerText = data.wind.gust? `Wind gust: ${data.wind.gust} m/s` : 'N/A';
        weatherMain.innerText = data.weather[0].main? data.weather[0].main : 'N/A';
        currentLocation.innerText = `${data.name}, ${data.sys.country}`;
    } catch (error) {
        console.error('Erreur:', error.message);
        alert('Something went wrong, please try again later');
    }   
}


getWeatherBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    showWeather(selectedCity);
});