import Weather from "./weather.js";

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
    const tempContainer = document.createElement('div');
    const feelsLikeDiv = document.createElement('div');
    const pressureDiv = document.createElement('div');
    const humidityDiv = document.createElement('div');

    function displayWebPage() {
        cityLabel.innerText = 'Enter city';
        cityLabel.for = 'city';

        cityInput.id = 'city';

        submitButton.type = 'button';
        submitButton.value = 'Get Weather!';
        submitButton.addEventListener('click', (e) => {
            displayWeather(Weather.getWeather(cityInput.value));
        });

        form.appendChild(cityLabel);
        form.appendChild(cityInput);
        form.appendChild(submitButton);

        content.classList.add('content');
        content.appendChild(form);

        weatherDiv.classList.add('weather');
        weatherDiv.appendChild(cityNameDiv);
        weatherDiv.appendChild(mainWeatherDiv);
        weatherDiv.appendChild(descriptionDiv);
        weatherDiv.appendChild(tempContainer);
        weatherDiv.appendChild(feelsLikeDiv);
        weatherDiv.appendChild(pressureDiv);
        weatherDiv.appendChild(humidityDiv);

        content.appendChild(weatherDiv);

        body.appendChild(content);

        displayWeather(Weather.getWeather('Singapore,sg'));
    }

    function displayWeather(weather) {
        tempContainer.innerHTML = "";
        weather.then((weather) => {
            if (weather !== null) {
                const tempDiv = document.createElement('div');
                const tempUnitButton = document.createElement('input');

                cityNameDiv.innerText = weather['cityName'];
                mainWeatherDiv.innerText = weather['mainWeather'];
                descriptionDiv.innerText = weather['weatherDescription'];

                tempDiv.innerText = `Temp: ${weather['temperature'].toFixed(2)}`;
                tempUnitButton.type = 'button';
                tempUnitButton.value = '°C';
                tempUnitButton.addEventListener('click', (e) => {
                    if (tempUnitButton.value === '°C') {
                        tempDiv.innerText = `Temp: ${Weather.convertCelsiusToFarenheit(weather['temperature']).toFixed(2)}`;
                        tempUnitButton.value = '°F';
                        feelsLikeDiv.innerText = `Feels like: ${Weather.convertCelsiusToFarenheit(weather['feelsLike']).toFixed(2)} °C`;
                    } else {
                        tempDiv.innerText = `Temp: ${weather['temperature'].toFixed(2)}`;
                        tempUnitButton.value = '°C';
                        feelsLikeDiv.innerText = `Feels like: ${weather['feelsLike'].toFixed(2)} °C`;
                    }
                });

                tempContainer.appendChild(tempDiv);
                tempContainer.appendChild(tempUnitButton);

                feelsLikeDiv.innerText = `Feels like: ${weather['feelsLike'].toFixed(2)} °C`;
                pressureDiv.innerText = `Pressure: ${weather['pressure']} hPa`;
                humidityDiv.innerText = `Humidity: ${weather['humidity']}%`;
            } else {
                cityNameDiv.innerText = "";
                mainWeatherDiv.innerText = "";
                descriptionDiv.innerText = 'City not found, please enter "City", "City,State" or "City,Country"';
                feelsLikeDiv.innerText = "";
                pressureDiv.innerText = "";
                humidityDiv.innerText = "";
            }
        });
    }

    return { displayWebPage };
})();

export default dom.displayWebPage;