import React, { Component } from 'react';

import BasePage from '../../layouts/BasePage';
import logo from './logo.svg';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <BasePage>
        <div className="home-page">
          <header className="home-page__header">
            <img src={logo} className="home-page__logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="home-page__link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </BasePage>
    );
  }
}

export default HomePage;
