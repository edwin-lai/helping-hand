var React = require('react');
var DonationBox = require('./fundraiser_sidebar_donation_box.jsx');
var Recipient = require('./fundraiser_sidebar_recipient.jsx');
var Donations = require('./fundraiser_sidebar_donations.jsx');

module.exports = React.createClass({
  render: function () {
    return <section className="fundraiser-sidebar">
      <DonationBox fundraiser={this.props.fundraiser} />
      <Recipient fundraiser={this.props.fundraiser} />
      <Donations
        fundraiser={this.props.fundraiser}
        donations={this.props.fundraiser.donations} />
    </section>;
  }
});
