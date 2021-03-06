import React, { Component } from 'react';
import './App.css';
import Vader from './Vader.js';
import Cards from './Cards.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';

class App extends Component {
  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar />
        <Vader />
        <Cards />
      </div>
    );
  }
}

export default App;
