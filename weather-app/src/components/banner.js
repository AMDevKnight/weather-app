import React, { Component } from 'react'

export default class banner extends Component {
    render() {
        return (
            <div className='banner'>
                <p className='logo'>the.weather</p>
                <div className='weather_details'>
                    <p className='degree_info'>16</p>
                    <div>
                        <p className='location_info'>London</p>
                        <p className='time_info'>06:09 - Monday, 9 Sep'19</p>
                    </div>
                    <div className='weather_type'>
                        <p>icon</p>
                        <p>Cloudy</p>
                    </div>
                </div>
            </div >
        )
    }
}
