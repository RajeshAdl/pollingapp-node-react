import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

// var App = require('./components/App');
// var Audience = require('./components/Audience');
// var Speaker = require('./components/Speaker');
// var Board = require('./components/Board');


import App from './components/App';
import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';
import NotFound from './components/NotFound';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Audience} />
      <Route path="speaker" component={Speaker} />
      <Route path="board" component={Board} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('react-container')
)