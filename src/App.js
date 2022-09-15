import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from "react-redux";
import { FETCH_WEATHER_DETAILS } from "./actions"
import './App.css';

function App() {
  const [search, setSearch] = useState("")
  const [success, setSuccess] = useState()
  const myState = useSelector((state) => state.weatherDetail)

  console.log(myState)
  const dispatch = useDispatch()
  dispatch(FETCH_WEATHER_DETAILS(search))

  function formatAMPM(date) {
    var hours = date.getHours();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var minutes = date.getMinutes();
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    var dd = date.getDate()
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var dayName = days[date.getDay()];
    var strTime = hours + ':' + minutes + ' ' + ampm + ' - ' + dayName + ' , ' + month + '/' + dd + '/' + year;
    return strTime;
  }
  function handleChange(event) {
    setSearch(event.target.value)
    if (success === true) {
      setSuccess(false)
    }
  }
  function weatherDetail() {
    dispatch(FETCH_WEATHER_DETAILS(search))
    if (myState.success === true) {
      setSuccess(true)
    }
    else if (myState.success === false) {
      setSuccess(false)
    }
    console.log(success)
  }

  return (
    <div className="App">
      <div className='banner'>
        <p className='logo'>the.weather</p>
        {success ?
          <div className='weather_details'>
            <p className='degree_info'>{myState.data.main.temp}<sup>o</sup>c </p>
            <div>
              <p className='location_info'>{myState.data.name}  </p>
              <p className='time_info'>{formatAMPM(new Date())}</p>
            </div>
            <div className='weather_type'>
              <p><div style={{ backgroundImage: `url(https://openweathermap.org/img/wn/${myState.data.weather[0].icon}@2x.png) `, height: '100px ', width: '100px' }} />  </p>
              <p>{myState.data.weather[0].main}
              </p>
            </div>
          </div>
          :
          <div className='weather_details'>
            <p className='degree_info'>NULL</p>
            <div>
              <p className='location_info'>NULL</p>
              <p className='time_info'>{formatAMPM(new Date())}</p>
            </div>
            <div className='weather_type'>
              <p>NULL</p>
              <p>NULL</p>
            </div>
          </div>
        }
      </div >

      <div className='sidebar'>
        <div className='searchbar'>
          <input type='text' placeholder='location' onChange={handleChange}></input>
          <button onClick={weatherDetail} ><Search width='1.5em' height='1.5em' /></button>
        </div>
        <div className='weather_stats'>
          <hr />
          <h4>Weather Details</h4>
          <table className='stats_table' >

            {!success ?
              <tbody id="weather__info">
                <tr>
                  <th>Cloudy</th>
                  <td>NULL</td>
                </tr>
                <tr>
                  <th>Humidity</th>
                  <td>NULL</td>
                </tr>
                <tr>
                  <th>Wind</th>
                  <td>NULL</td>
                </tr>
              </tbody>
              :
              <tbody id="weather__info">
                <tr>
                  <th> Cloudy</th>
                  <td>{myState.data.clouds.all}</td>
                </tr>
                <tr>
                  <th>Humidity</th>
                  <td>{myState.data.main.humidity}</td>
                </tr>
                <tr>
                  <th>Wind</th>
                  <td>{myState.data.wind.speed}km/h</td>
                </tr>

              </tbody>
            }
          </table>
          <hr />
        </div>
      </div >
    </div>
  )
}

export default App