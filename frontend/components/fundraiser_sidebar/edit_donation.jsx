var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DonationUtil = require('../../util/donation_util.js');
var FundraiserUtil = require('../../util/fundraiser_util.js');
var DonationStore = require('../../stores/donation.js');
var ErrorStore = require('../../stores/error.js');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      id: this.props.donation.id,
      comment: this.props.donation.comment
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

  updateDonation: function (event) {
    event.preventDefault();
    var that = this;
    DonationUtil.updateDonation(this.state, function () {
      FundraiserUtil.fetchSingleFundraiser(that.props.fundraiser.id,
      function () {
        that.props.closeModal();
      });
    });
  },

  render: function () {
    return <form className="form" onSubmit={this.updateDonation}>
      <label htmlFor="comment" className="long-label">
        <h1>Edit Your Comment</h1>
      </label>
      <br />
      <div className="error">
        {this.state.error}
      </div>
      <textarea
        id="comment"
        valueLink={this.linkState('comment')}
        placeholder="Leave a comment..."
      />
      <br />
      <input type="submit" className="submit" value="Edit Comment" />
    </form>;
  }
});
