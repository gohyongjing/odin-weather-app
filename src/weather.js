const Weather = (() => {
    const API_KEY = 'd3d83fbc7cd370385cd75c9f3c64ea18';

    function convertCelsiusToFarenheit(temp) {
        return temp * 1.8 + 32;
    }

    function convertFarenheitToCelsius(temp) {
        return (temp - 32) / 1.8;
    }
   
    function convertKelvinToCelsius(temp) {
        return temp - 273.15;
    }

    function parseWeather(response) {
        const responseJson = response.json();
        return responseJson
            .then((json) => {
                const result = [];
                result['cityName'] = json['name'];
                result['mainWeather'] = json['weather'][0]['main'];
                result['weatherDescription'] = json['weather'][0]['description'];
                result['temperature'] = convertKelvinToCelsius(json['main']['temp']);
                result['feelsLike'] = convertKelvinToCelsius(json['main']['feels_like']);
                result['pressure'] = json['main']['pressure'];
                result['humidity'] = json['main']['humidity'];
                return result;
            })
            .catch(handleError);
    }

    function handleError(err) {
        console.log(err);
        return null;
    }

    function getWeather(location = 'Singapore,sg') {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
            { mode: 'cors' })
            .then(parseWeather);
    }

    return { getWeather, convertCelsiusToFarenheit};
})();

export default Weather;