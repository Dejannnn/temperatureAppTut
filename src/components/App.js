import React, { Component } from 'react';
import '../App.css';
import SearchBr from '../contaniers/SearchBar';
import WeatherList from '../contaniers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
          <SearchBr/>
          <WeatherList/>
      </div>
    );
  }
}

export default App;
