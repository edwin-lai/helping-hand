var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var App = require('./components/app.jsx');
var AllFundraisersIndex = require('./components/all_fundraisers_index.jsx');
var FundraisersIndex = require('./components/fundraisers_index.jsx');
var NewUserForm = require('./components/new_user_form.jsx');
var NewSessionForm = require('./components/new_session_form.jsx');
var NewFundraiserForm = require('./components/new_fundraiser_form.jsx');
var EditFundraiserForm = require('./components/edit_fundraiser_form.jsx');
var Fundraiser = require('./components/fundraiser.jsx');
var NavBar = require('./components/navbar.jsx');
var DonationForm = require('./components/new_donation_form.jsx');
var EditDonationForm = require('./components/fundraiser_sidebar/edit_donation.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

window.userUtil = require('./util/user_util.js');
window.userStore = require('./stores/user.js');
window.sessionUtil = require('./util/session_util.js');

Modal.setAppElement(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Router history = {hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={AllFundraisersIndex} />
        <Route path='fundraisers' component={FundraisersIndex} />
        <Route path='fundraisers/new' component={NewFundraiserForm} />
        <Route path='fundraisers/:id' component={Fundraiser} />
        <Route path='fundraisers/:id/edit' component={EditFundraiserForm} />
        <Route path='fundraisers/:id/donate' component={DonationForm} />
        <Route path='donations/:id/edit' component={EditDonationForm} />
        <Route path='users/new' component={NewUserForm} />
        <Route path='login' component={NewSessionForm} />
      </Route>
    </Router>,
    document.getElementById('root')
  );
});
