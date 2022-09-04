document.getElementById('btn-submit').addEventListener('click', () => {
    cityNameFunction();
});

document.getElementById('input-city-name').addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        cityNameFunction();
        document.getElementById('input-city-name').blur();
    };
});

const cityNameFunction = () => {
    const cityName = document.getElementById('city-name');
    const inputCityName = document.getElementById('input-city-name').value;
    cityName.innerText = inputCityName;
    dataFunction(inputCityName);
};

const dataLoad = cityName => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=be2b4ca2346532c1ed7d05af38762007&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(response => displayData(response))
        .catch(err => console.error(err));
};

const displayData = data => {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2 id="city-name">${data.name ? data.name : 'This city not listed'}</h2>
        <h3 id="city-temperature">Temperature: ${data.main.temp}<sup>0</sup>C</h3>
        <h4 id="city-weather">Weather: ${data.weather[0].main}</h4>
        <h4 id="city-weather-details">Details: ${data.weather[0].description}</h4>
    `;
};

const dataFunction = cityName => {
    dataLoad(cityName);
};

dataFunction('rangpur');