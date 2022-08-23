import { FETCH_WEATHER_DETAILS } from './types';

export const fetchWeather = (location) => dispatch => {
    console.log(location)
    if (location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=59e8ba76cd8850ac16aff135aa2f6c85&units=metric`)
            .then(res => res.json())
            .then(data => dispatch({
                type: FETCH_WEATHER_DETAILS,
                payload: data
            }))
    }
    else {
        dispatch({ type: FETCH_WEATHER_DETAILS, payload: null })
    }
}
