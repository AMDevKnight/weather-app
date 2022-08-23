import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux';

import Banner from './components/banner';
import Sidebar from './components/sidebar';

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Banner></Banner>
          <Sidebar></Sidebar>
        </div>
      </Provider>
    )
  }
}

