import React, { Component } from 'react'
import { Search } from 'react-bootstrap-icons';
export default class sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='searchbar'>
          <input type='text' placeholder='location' ></input>
          <button ><Search width='1.5em' height='1.5em' /></button>
        </div>
        <div className='weather_stats'>

          <hr />
          <h4>Weather Details</h4>
          <table className='stats_table' cellSpacing='40px' cellpadding="100px">
            <tr>
              <th>Cloudy</th>
              <td>86%</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>86%</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>86%</td>
            </tr>
          </table>

          <hr />
        </div>
      </div >
    )
  }
}
