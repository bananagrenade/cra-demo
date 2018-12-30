import React from "react";
import { Link } from "react-router-dom";

import logo from './logo.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-ul">
        <li>
          <img src={logo} className="nav-bar-logo" alt="logo" />
        </li>
        <li className="nav-bar-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-bar-li">
          <Link to="/first">First</Link>
        </li>
        <li className="nav-bar-li">
          <Link to="/second">Second</Link>
        </li>
        <li className="nav-bar-li">
          <Link to="/third">Third</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;