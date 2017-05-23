import React, { Component } from 'react';
import logo from './logo.svg';
import Img from './Img.js';
import Bad from './Bad.js';
import Basic from './Basic.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Img />
      
      <Basic />
      </div>
    );
  }
}

export default App;
