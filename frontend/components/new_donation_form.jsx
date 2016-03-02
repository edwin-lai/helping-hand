var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DonationUtil = require('../util/donation_util.js');
var FundraiserUtil = require('../util/fundraiser_util.js');
var ErrorStore = require('../stores/error.js');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      amount: 0,
      user_id: window.currentUserId,
      fundraiser_id: this.props.fundraiserId,
      comment: '',
      visible: true
    };
  },

  componentDidMount: function () {
    this.listener = ErrorStore.addListener(function () {
      this.setState({ error: ErrorStore.get() });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  createDonation: function (event) {
    event.preventDefault();
    var that = this;
    DonationUtil.createDonation(this.state, function () {
      FundraiserUtil.fetchSingleFundraiser(
        that.props.fundraiserId,
        function () {
          that.props.closeModal();
        }
      );
    });
  },

  render: function () {
    return <form className="form donation-form" onSubmit={this.createDonation}>
      <label htmlFor="donation-amount" className="long-label">
        <h1>Enter your donation</h1>
      </label>
      <div className="error">
        {this.state.error}
      </div>
      <br />
      <input
        type="number"
        id="donation-amount"
        className="huge-box"
        valueLink={this.linkState('amount')}>
      </input>
      <br />
      <label htmlFor="comment" className="long-label">Leave a Comment</label>
      <br />
      <textarea id="comment" valueLink={this.linkState('comment')} />
      <br />
      <label htmlFor="visible">Public</label>
      <input
        type="checkbox"
        id="visible"
        checkedLink={this.linkState('visible')}
      />
      <br />
      <input type="submit" className="submit" value="Donate!" />
    </form>;
  }
});
