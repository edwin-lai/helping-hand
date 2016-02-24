var React = require('react');
var ReactDOM = require('react-dom');
var FundraisersIndex = require('./components/fundraisers_index.jsx');
var NewUserForm = require('./components/new_user_form.jsx');
var NewSessionForm = require('./components/new_session_form.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    /*<Router history={hashHistory}>
         <Route path='/' component={FundraisersIndex} />
        /* <Route path='/signup' component={NewUserForm} />
        <Route path='/signin' component={NewSessionForm} />
    </Router>*/ <div></div>,
    document.getElementById('root')
  );
});
