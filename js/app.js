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
};