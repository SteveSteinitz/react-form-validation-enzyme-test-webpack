// Created by steinitz on 06 Jul 2016

// Created by steinitz on 01 Jul 2016

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CakeEnquiry from './components/CakeEnquiry';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="enquiry" component={CakeEnquiry} />
   <Route path="about" component={AboutPage} />
 </Route>
);
