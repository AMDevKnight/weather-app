const initialState = { "success": false }
const weatherDetail = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_WEATHER_DETAILS":
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=59e8ba76cd8850ac16aff135aa2f6c85&units=metric`)
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'city not found') {
                        state.success = false
                    }
                    else if (data.message === undefined) {
                        state.data = data
                        state.success = true
                    }
                })
            return state;
        default:
            return state;
    }
}
export default weatherDetail;