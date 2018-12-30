import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FirstPage from '../pages/FirstPage/FirstPage';
import SecondPage from '../pages/SecondPage/SecondPage';
import ThirdPage from '../pages/ThirdPage/ThirdPage';
import HomePage from '../pages/HomePage/HomePage';

const routes = (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/first" component={FirstPage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
    </Switch>
);

export default routes;