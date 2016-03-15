var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var NewUserForm = require('./new_user_form.jsx');
var SearchBar = require('./fundraiser_search_bar.jsx');
var NewFundraiserForm = require('./new_fundraiser_form.jsx');

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return {
      fundraisers: FundraiserStore.all(),
      signUpModalOpen: false,
      newFundraiserModalOpen: false
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

  openNewFundraiserModal: function () {
    this.setState({newFundraiserModalOpen: true});
  },

  closeNewFundraiserModal: function () {
    this.setState({newFundraiserModalOpen: false});
  },

  signUpButton: function () {
    return <h1>
      <button onClick={this.openSignUpModal} className="giant-button">
        {this.giantButtonText()}
      </button>
      <Modal
        isOpen={this.state.signUpModalOpen}
        onRequestClose={this.closeSignUpModal}>
          <button
            className="close-button"
            onClick={this.closeSignUpModal}>
            ✕
          </button>
          <NewUserForm />
      </Modal>
    </h1>;
  },

  newFundraiserButton: function () {
    return <h1>
      <br />
      <button onClick={this.openNewFundraiserModal} className="giant-button">
        {this.giantButtonText()}
      </button>
      <Modal
        isOpen={this.state.newFundraiserModalOpen}
        onRequestClose={this.closeNewFundraiserModal}>
          <button
            className="close-button"
            onClick={this.closeNewFundraiserModal}>
            ✕
          </button>
          <NewFundraiserForm />
      </Modal>
    </h1>;
  },

  render: function () {
    var button;
    if (window.currentUserId > 0) {
      button = this.newFundraiserButton;
    } else {
      button = this.signUpButton;
    }

    return <ul className="index">
      <h1 className="tagline">Lend a Hand</h1>
      {button()}
      <SearchBar fundraisers={this.state.fundraisers} />
    </ul>;
  }
});

module.exports = FundraisersIndex;
