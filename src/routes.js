import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}/>
        <Route component={AboutPage} path='about'/>
    </Route>
)
