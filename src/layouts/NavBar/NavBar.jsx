import React from "react";
import { Link } from "react-router-dom";

import * as routes from '../../routes/routes';

import logo from './logo.svg';
import './NavBar.css';

// todo: figure out hashtag-less refs
const NavBar = (props) => {
  return (
    <ul className="nav-bar">
      <li className="nav-bar-li">
        <Link to="/">
          <img src={logo} className="nav-bar-logo" alt="logo" />
          Home
        </Link> 
      </li>
      <li className="nav-bar-li">
        <a href="/#profile">
          <img src={logo} className="nav-bar-logo" alt="logo" />
          Profile
        </a>
      </li>
      <li className="nav-bar-li">
        <a href="/#projects">
          <img src={logo} className="nav-bar-logo" alt="logo" />
          Project
        </a>
      </li>
      <li className="nav-bar-li">
        <a href="/#contact">
          <img src={logo} className="nav-bar-logo" alt="logo" />
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;