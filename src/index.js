import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import routes from './routes/routes';

const app = (
  <Router>
    {routes}
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));