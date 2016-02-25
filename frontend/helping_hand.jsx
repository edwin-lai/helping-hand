var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.jsx');
var AllFundraisersIndex = require('./components/all_fundraisers_index.jsx');
var FundraisersIndex = require('./components/fundraisers_index.jsx');
var NewUserForm = require('./components/new_user_form.jsx');
var NewSessionForm = require('./components/new_session_form.jsx');
var NewFundraiserForm = require('./components/new_fundraiser_form.jsx');
var EditFundraiserForm = require('./components/edit_fundraiser_form.jsx');
var Fundraiser = require('./components/fundraiser.jsx');
var NavBar = require('./components/navbar.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

window.userUtil = require('./util/user_util.js');
window.userStore = require('./stores/user.js');
window.sessionUtil = require('./util/session_util.js');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Router history = {hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={AllFundraisersIndex} />
        <Route path='fundraisers' component={FundraisersIndex} />
        <Route path='fundraisers/new' component={NewFundraiserForm} />
        <Route path='fundraisers/:id' component={Fundraiser} />
        <Route path='fundraisers/:id/edit' component={EditFundraiserForm} />
        <Route path='users/new' component={NewUserForm} />
        <Route path='login' component={NewSessionForm} />
      </Route>
    </Router>,
    document.getElementById('root')
  );
});
