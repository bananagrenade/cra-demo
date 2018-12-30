import React from 'react';

import NavBar from '../NavBar/NavBar';

const BasePage = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    );
};

export default BasePage;