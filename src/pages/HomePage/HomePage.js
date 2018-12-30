import React, { Component } from 'react';

import NavBar from '../../layouts/NavBar/NavBar';
import logo from './logo.svg';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <header className="HomePage-header">
          <img src={logo} className="HomePage-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="HomePage-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default HomePage;
