var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var App = require('./components/app.jsx');
var AllFundraisersIndex = require('./components/all_fundraisers_index.jsx');
var FundraisersIndex = require('./components/fundraisers_index.jsx');
var Fundraiser = require('./components/fundraiser.jsx');
var NavBar = require('./components/navbar.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

document.addEventListener('DOMContentLoaded', function () {
  var appElement = document.getElementById('root');

  Modal.setAppElement(appElement);

  ReactDOM.render(
    <Router history = {hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={AllFundraisersIndex} />
        <Route path='fundraisers' component={FundraisersIndex} />
        <Route path='fundraisers/:id' component={Fundraiser} />
      </Route>
    </Router>,
    appElement
  );
});
