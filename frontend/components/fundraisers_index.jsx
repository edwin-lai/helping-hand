var React = require('react');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var Link = require('react-router').Link;
var NewFundraiserForm = require('./new_fundraiser_form.jsx');
var Modal = require('react-modal');

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return {
      fundraisers: FundraiserStore.all().filter(function (fundraiser) {
        return fundraiser.user_id === window.currentUserId;
      }),
      modalIsOpen: false
    };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = FundraiserStore.addListener(function () {
      that.setState({
        fundraisers: FundraiserStore.all().filter(function (fundraiser) {
          return fundraiser.user_id === window.currentUserId;
        })
      });
    });
    FundraiserUtil.fetchFundraisers();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  fundraisers: function () {
    return this.state.fundraisers.map(function (obj, idx) {
      return <FundraiserIndexItem key={idx} fundraiser={obj} source='idx' />;
    });
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
  },

  newFundraiserButton: function () {
    return <div>
      <button onClick={this.openModal}>New Fundraiser</button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}>
        <button onClick={this.closeModal}>Close</button>
        <NewFundraiserForm />
      </Modal>
    </div>;
  },

  render: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      window.location.assign('/');
    }
    return <ul className="my-fundraisers">
      <header>
        <h1>My Fundraisers</h1>
        {this.newFundraiserButton()}
      </header>
      <br />
      {this.fundraisers()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
