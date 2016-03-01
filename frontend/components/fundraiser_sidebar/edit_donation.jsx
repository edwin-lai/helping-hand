var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DonationUtil = require('../../util/donation_util.js');
var FundraiserUtil = require('../../util/fundraiser_util.js');
var DonationStore = require('../../stores/donation.js');

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

  updateDonation: function (event) {
    event.preventDefault();
    var that = this;
    DonationUtil.updateDonation(this.state, function () {
      FundraiserUtil.fetchSingleFundraiser(DonationStore.get().fundraiser_id,
      function () {
        that.context.router.push('/fundraisers/' + that.props.params.id);
      });
    });
  },

  render: function () {
    return <form className="form" onSubmit={this.createDonation}>
      <label htmlFor="comment" className="long-label">Edit Your Comment</label>
      <br />
      <textarea id="comment" valueLink={this.linkState('comment')} />
      <br />
      <input type="submit" className="submit" value="Edit Comment" />
    </form>;
  }
});
