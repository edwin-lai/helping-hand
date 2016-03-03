var React = require('react');
var DonationStore = require('../stores/donation.js');
var DonationUtil = require('../util/donation_util.js');
var FundraiserStore = require('../stores/fundraiser.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var FundraiserIndexItem = require('./fundraiser_index_item.jsx');
var Link = require('react-router').Link;
var NewFundraiserForm = require('./new_fundraiser_form.jsx');
var Modal = require('react-modal');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      donations: DonationStore.userDonations(),
      modalIsOpen: false
    };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = DonationStore.addListener(function () {
      that.setState({donations: DonationStore.userDonations()});
    });
    DonationUtil.fetchReceivedDonations();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  donation: function (donations) {
    var donor;
    var units;

    return donations.map(function (donation) {
      donor = donation.user;
      if (donation.amount === 1) {
        units = ' CareCoin ';
      } else {
        units = ' CareCoins ';
      }

      return <li className="my-donations-item" key={donation.id}>
        <Link to={"/fundraisers/" + donation.fundraiser.id}>
          {donation.fundraiser.title}
        </Link>
        <content className="donation-amount">
          {donation.amount + units + 'from '
            + donor.first_name + ' ' + donor.last_name}
        </content>
      </li>;
    });
  },

  donations: function () {
    if (this.state.donations.length) {
      return this.donation(this.state.donations);
    } else {
      return <content className="no-donations">
        You haven't received any donations yet.
        <br />
        <button className="giant-button" onClick={this.openModal}>
          Make a Fundraiser
        </button>
      </content>;
    }
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
  },

  render: function () {
    if (window.currentUserId === -1 || window.currentUserId === undefined) {
      window.location.assign('/');
    }
    return <ul className="my-fundraisers">
      <h1>Received Donations</h1>
      <br />
      {this.donations()}
    </ul>;
  }
});
