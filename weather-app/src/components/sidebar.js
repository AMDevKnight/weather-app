import React, { Component } from 'react'
import { Search } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions'

class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      weather: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.checkData = this.checkData.bind(this);
  }

  onChange(e) {
    this.setState({ search: e.target.value })
  }

  onClick() {
    this.props.fetchWeather(this.state.search)
  }

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
    return (
      <div className='sidebar'>
        <div className='searchbar'>
          <input type='text' placeholder='location' onChange={this.onChange}></input>
          <button onClick={this.onClick}><Search width='1.5em' height='1.5em' /></button>
        </div>
        <div className='weather_stats'>
          <hr />
          <h4>Weather Details</h4>
          <table className='stats_table' >
            <tbody>
              <tr>
                <th>Cloudy</th>
                {this.checkData() ? <td>{this.props.data.clouds.all} %</td> : <td>NULL</td>}
              </tr>
              <tr>
                <th>Humidity</th>
                {this.checkData() ? <td>{this.props.data.main.humidity} %</td> : <td>NULL</td>}
              </tr>
              <tr>
                <th>Wind</th>
                {this.checkData() ? <td>{this.props.data.wind.speed}km/h</td> : <td>NULL</td>}
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.weather.data
})

export default connect(mapStateToProps, { fetchWeather })(sidebar);