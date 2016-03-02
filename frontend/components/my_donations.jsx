var React = require('react');
var DonationStore = require('../stores/donation.js');
var DonationUtil = require('../util/donation_util.js');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var Link = require('react-router').Link;
var NewFundraiserForm = require('./new_fundraiser_form.jsx');
var Modal = require('react-modal');

var FundraisersIndex = React.createClass({
  getInitialState: function () {
    return {donations: DonationStore.userDonations()};
  },

  componentDidMount: function () {
    var that = this;
    this.listener = DonationStore.addListener(function () {
      that.setState({donations: DonationStore.userDonations()});
    });
    DonationUtil.fetchCurrentUserDonations();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  donation: function (donations) {
    return donations.map(function (donation) {
      return <li className="my-donations-item">
        <Link to={"/fundraisers/" + donation.fundraiser.id}>
          {donation.fundraiser.title}
        </Link>
        <content className="donation-amount">
          {donation.amount} CareCoins
        </content>
      </li>;
    });
  },

  donations: function () {
    if (this.state.donations.length) {
      return this.donation(this.state.donations);
    } else {
      return <content className="no-donations">
        You haven't donated to anyone yet.
        <br />
        <Link className="giant-button" to="/">Discover Fundraisers</Link>
        </content>;
    }
  },

  render: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      window.location.assign('/');
    }
    return <ul className="my-fundraisers">
      <h1>My Donations</h1>
      <br />
      {this.donations()}
    </ul>;
  }
});

module.exports = FundraisersIndex;
