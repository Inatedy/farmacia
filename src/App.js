import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        
        <ul className="navbar">
          <li>
              Home
          </li>
          <li>
              Products
          </li>
          <li>
              Info
          </li>
        </ul>
        <div className="components">
          <h1></h1>
          <Home/>
          <h1></h1>
          <Products></Products>
          <h1></h1>
          <Info/>
          </div>
      </div>
      
    );
  }
}

export default App;
