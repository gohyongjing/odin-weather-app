/*import "./style.css";

const webPage = (() => {
    const API_KEY = 'd3d83fbc7cd370385cd75c9f3c64ea18';

    const body = document.querySelector('body');
    const content = document.createElement('div');
    const form = document.createElement('form');
    const cityLabel = document.createElement('label');
    const cityInput = document.createElement('input');
    const submitButton = document.createElement('input');
    const weatherDiv = document.createElement('div');

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

        content.classList.add('content');
        content.appendChild(form);
        content.appendChild(weatherDiv);

        body.appendChild(content);

        displayWeather(getWeather('Singapore,sg'));
    }

    function parseWeather(response) {
        const result = response.json();
        console.log(result);
        return result;
    }

    function handleError(err) {
        console.log(err);
        return err;
    }

    function getWeather(location = 'Singapore,sg') {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
            { mode: 'cors' })
            .then(parseWeather)
            .catch(handleError);
    }

    function displayWeather(weather) {
        const citynameDiv = document.createElement('div');
        const mainWeatherDiv = document.createElement('div');
        const descriptionDiv = document.createElement('div');

        weather.then((weather) => {
            citynameDiv.innerText = weather['name'];
        }).catch(handleError)

        weather.then((weather) => {
            mainWeatherDiv.innerText = weather['weather'][0]['main'];
        }).catch(handleError)
    
        weather.then((weather) => {
            descriptionDiv.innerText = weather['weather'][0]['description'];
        }).catch(handleError)
    
        weatherDiv.appendChild(citynameDiv);
        weatherDiv.appendChild(mainWeatherDiv);
        weatherDiv.appendChild(descriptionDiv);        
    }

    displayWebPage();
})();*/




import displayWebPage from "./dom.js";
import "./style.css";

const webPage = (() => {
    displayWebPage();
})();
