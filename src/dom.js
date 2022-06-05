import getWeather from "./weather.js";

const dom = (() => {
    const body = document.querySelector('body');
    const content = document.createElement('div');
    const form = document.createElement('form');
    const cityLabel = document.createElement('label');
    const cityInput = document.createElement('input');
    const submitButton = document.createElement('input');

    const weatherDiv = document.createElement('div');
    const cityNameDiv = document.createElement('div');
    const mainWeatherDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');

    function displayWebPage() {
        cityLabel.innerText = 'Enter city';
        cityLabel.for = 'city';

        cityInput.id = 'city';

        submitButton.type = 'button';
        submitButton.value = 'Get Weather!';
        submitButton.addEventListener('click', (e) => {
            displayWeather(getWeather(cityInput.value));
        });

        form.appendChild(cityLabel);
        form.appendChild(cityInput);
        form.appendChild(submitButton);

        weatherDiv.classList.add('weather');
        weatherDiv.appendChild(cityNameDiv);
        weatherDiv.appendChild(mainWeatherDiv);
        weatherDiv.appendChild(descriptionDiv);

        content.classList.add('content');
        content.appendChild(form);
        content.appendChild(weatherDiv);

        body.appendChild(content);

        displayWeather(getWeather('Singapore,sg'));
    }

    function displayWeather(weather) {
        weather.then((weather) => {
            if (weather !== null) {
                cityNameDiv.innerText = weather['cityName'];
                mainWeatherDiv.innerText = weather['mainWeather'];
                descriptionDiv.innerText = weather['weatherDescription'];
            } else {
                cityNameDiv.innerText = "";
                mainWeatherDiv.innerText = "";
                descriptionDiv.innerText = 'City not found, please enter "City", "City,State" or "City,Country"';
            }
        });
    }

    return { displayWebPage };
})();

export default dom.displayWebPage;