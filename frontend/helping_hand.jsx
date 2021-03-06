var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var App = require('./components/app.jsx');
var Index = require('./components/index/index.jsx');
var FundraisersIndex = require('./components/fundraiser/fundraisers_index.jsx');
var Fundraiser = require('./components/fundraiser/fundraiser.jsx');
var NavBar = require('./components/navbar.jsx');
var MyDonations = require('./components/donation/my_donations.jsx');
var ReceivedDonations = require('./components/donation/received_donations.jsx');

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
        <IndexRoute component={Index} />
        <Route path='fundraisers' component={FundraisersIndex} />
        <Route path='fundraisers/:id' component={Fundraiser} />
        <Route path='my_donations' component={MyDonations} />
        <Route path='received_donations' component={ReceivedDonations} />
      </Route>
    </Router>,
    appElement
  );
});
