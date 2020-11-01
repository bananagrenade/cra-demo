import React, { memo } from 'react';

import NavBar from '../NavBar';
import Header from '../Header';

import './BasePage.css';

const BasePage = (props) => {
  return (
    <div>
      <Header />
      <div className="base-page__children">
        {props.children}
      </div>
    </div>
  );
};

export default memo(BasePage);