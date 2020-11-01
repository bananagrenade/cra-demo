import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import HomePage from '../pages/HomePage/HomePage';

export const profilePagePath = "/profile";
export const projectsPagePath = "/projects";
export const contactPagePath = "/contact";

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path={profilePagePath} component={ProfilePage} />
    <Route exact path={projectsPagePath} component={ProjectsPage} />
    <Route exact path={contactPagePath} component={ContactPage} />
  </Switch>
);

export default routes;