import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions'

class banner extends Component {

    checkData() {
        let data = this.props.data
        if (data === null || data.length === 0) {
            return false
        }
        else {
            return true
        }
    }

    render() {
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

        return (
            <div className='banner'>
                <p className='logo'>the.weather</p>
                <div className='weather_details'>
                    <p className='degree_info'>{this.checkData() ? <td>{this.props.data.main.temp}<sup>o</sup>c</td> : <td>NULL</td>}</p>
                    <div>
                        <p className='location_info'>{this.checkData() ? <td>{this.props.data.name} </td> : <td>NULL</td>}</p>
                        <p className='time_info'>{formatAMPM(new Date())}</p>
                    </div>
                    <div className='weather_type'>
                        <p>{this.checkData() ? <td><div style={{ backgroundImage: `url("https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png")`, height: '100px ', width: '100px' }} /> </td> : <td>NULL</td>}</p>
                        <p>{this.checkData() ? <td>{this.props.data.weather[0].main} </td> : <td>NULL</td>}</p>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.weather.data
})

export default connect(mapStateToProps, { fetchWeather })(banner);