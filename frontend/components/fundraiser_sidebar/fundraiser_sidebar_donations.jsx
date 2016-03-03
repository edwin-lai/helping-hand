var React = require('react');
var Donation = require('./fundraiser_sidebar_donation.jsx');
var UserUtil = require('../../util/user_util.js');
var UserStore = require('../../stores/user.js');

module.exports = React.createClass({

  donations: function () {
    return this.props.donations.reverse().map(function (donation) {
      return <Donation
        key={donation.id}
        donation={donation}
        fundraiser={this.props.fundraiser}
      />;
    }.bind(this));
  },

  render: function() {
    return <section className="donations">
      <content className="num-donations">
        {this.props.donations.length} Donations
      </content>
      <ul>{this.donations()}</ul>
    </section>;
  }
});
