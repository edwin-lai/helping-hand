var React = require('react');
var Donation = require('./fundraiser_sidebar_donation.jsx');

module.exports = React.createClass({
  donations: function () {
    return this.props.fundraiser.donations.map(function (donation) {
      return <Donation donation={donation} />;
    });
  },

  render: function() {
    return <section className="donations">
      <content className="num-donations">
        {this.props.fundraiser.donations.length}
      </content>
      <ul>{this.donations}</ul>
    </section>;
  }
});
