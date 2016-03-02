var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var NewUserForm = require('./new_user_form.jsx');
var SearchBar = require('./fundraiser_search_bar.jsx');

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return {
      fundraisers: FundraiserStore.all(),
      signUpModalOpen: false
    };
  },

  componentDidMount: function () {
    this.listener = FundraiserStore.addListener(function () {
      this.setState({ fundraisers: FundraiserStore.all() });
    }.bind(this));
    FundraiserUtil.fetchFundraisers();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  giantButtonLink: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      return "/users/new";
    } else {
      return "/fundraisers/new";
    }
  },

  giantButtonText: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      return "Sign Up Today!";
    } else {
      return "Make a New Fundraiser!";
    }
  },

  openSignUpModal: function () {
    this.setState({signUpModalOpen: true});
  },

  closeSignUpModal: function () {
    this.setState({signUpModalOpen: false});
  },

  signUpButton: function () {
    return <h1>
      <button onClick={this.openSignUpModal} className="giant-button">
        {this.giantButtonText()}
      </button>
      <Modal
        isOpen={this.state.signUpModalOpen}
        onRequestClose={this.closeSignUpModal}>
          <button onClick={this.closeSignUpModal}>Close</button>
          <NewUserForm />
      </Modal>
    </h1>;
  },

  render: function () {
    return <ul className="index">
      <h1 className="tagline">Show That You Care</h1>
      {this.signUpButton()}
      <SearchBar fundraisers={this.state.fundraisers} />
    </ul>;
  }
});

module.exports = FundraisersIndex;
