import React from 'react';

import NavBar from '../NavBar';

import './BasePage.css';

const BasePage = (props) => {
  return (
    <div>
      <NavBar />
      <div className="base-page__children">
        {props.children}
      </div>
    </div>
  );
};

export default BasePage;