var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserUtil = require('../util/user_util.js');
var UserStore = require('../stores/user.js');
var UserActions = require('../actions/user_actions.js')

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      id: window.currentUserId,
      bank: UserStore.currentUser().bank
    };
  },

  addToBank: function (event) {
    event.preventDefault();
    var that = this;
    UserUtil.addToBank(this.state, function () {
      FundraiserUtil.fetchSingleFundraiser(that.props.fundraiser.id,
      function () {
        that.context.router.push('/fundraisers/' + that.props.fundraiser.id);
      });
    });
  },

  render: function () {
    return <form className="form" onSubmit={this.updateDonation}>
      <label htmlFor="comment" className="long-label">Edit Your Comment</label>
      <br />
      <textarea id="comment" valueLink={this.linkState('comment')} />
      <br />
      <input type="submit" className="submit" value="Edit Comment" />
    </form>;
  }
});
