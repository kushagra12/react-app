import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route component={AboutPage} path="about"/>
        <Route component={CoursesPage} path="courses"/>
    </Route>
);
