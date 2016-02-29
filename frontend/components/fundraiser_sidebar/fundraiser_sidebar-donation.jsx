var React = require('react');

module.exports = React.createClass({

  render: function() {
    return <li className="donation">
      <content className="amount">{this.props.donation.amount}</content>
    </li>;
  }
});
