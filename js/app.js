const loadData = cityName => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=be2b4ca2346532c1ed7d05af38762007&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
        .catch(err => {
            console.log(err);
            document.getElementById('city-name').innerText = 'No Data Found';
            document.getElementById('weather-information').classList.add('invisible');
        });
};

const display = data => {
    const infoContainer = document.getElementById('weather-info');
    infoContainer.innerHTML = `
        <h2 id="city-name">${data.name}</h2>
        <div id='weather-information'>
            <h3 id="city-temperature">Temperature: ${data.main.temp}<sup>0</sup>C</h3>
            <h4>Weather: ${data.weather[0].main}</h4>
            <h4>Details: ${data.weather[0].description}</h4>
        </div>
    `;
    document.getElementById('input-city-name').value = '';
};

document.getElementById('btn-submit').addEventListener('click', () => {
    const inputCityName = document.getElementById('input-city-name').value;
    document.getElementById('weather-info').innerHTML = "";
    loadData(inputCityName);
});

document.getElementById('input-city-name').addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        const inputCityName = document.getElementById('input-city-name').value;
        document.getElementById('weather-info').innerHTML = "";
        loadData(inputCityName);
    };
});

loadData('rangpur');

const toggleSpinner = isSpin => {
    const spinner = document.getElementById('spinner');
    if(isSpin) {
        spinner.classList.remove('d-none');
    } else {
        spinner.classList.add('d-none');
    }
};