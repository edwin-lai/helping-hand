var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var NewUserForm = require('./new_user_form.jsx');

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return {
      fundraisers: FundraiserStore.all(),
      signUpModalOpen: false
    };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = FundraiserStore.addListener(function () {
      that.setState({ fundraisers: FundraiserStore.all() });
    });
    FundraiserUtil.fetchFundraisers();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  fundraisers: function () {
    return this.state.fundraisers.map(function (obj, idx) {
      return <FundraiserIndexItem key={idx} fundraiser={obj} userId={obj.user}/>;
    });
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
      {this.fundraisers()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
