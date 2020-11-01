import React, { Component } from 'react';

import BasePage from '../../layouts/BasePage';
import Main from '../../layouts/Main';
import Section from '../../layouts/Section';

import logo from './logo.svg';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <BasePage className="home-page">
        <Section className="home-page__hero">
          <h2>Title</h2>
        </Section>
        <Main className="home-page__main">
          <Section 
            className="home-page__section-a"
            id="profile"
          >
            Profile           
          </Section>
          <Section
           className="home-page__section-b"
           id="projects"
          >
            Projects             
          </Section>
          <Section 
            className="home-page__section-a"
            id="contact"
          >
            Contact             
          </Section>
        </Main>
      </BasePage>
    );
  }
}

export default HomePage;
