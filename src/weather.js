const weather = (() => {
    const API_KEY = 'd3d83fbc7cd370385cd75c9f3c64ea18';

    function parseWeather(response) {
        const responseJson = response.json();
        return responseJson
            .then((json) => {
                const result = [];
                result['cityName'] = json['name'];
                result['mainWeather'] = json['weather'][0]['main'];
                result['weatherDescription'] = json['weather'][0]['description'];
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

    return { getWeather };
})();

export default weather.getWeather;