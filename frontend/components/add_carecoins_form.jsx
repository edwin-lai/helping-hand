var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserUtil = require('../util/user_util.js');
var UserStore = require('../stores/user.js');
var UserActions = require('../actions/user_actions.js');
var ErrorStore = require('../stores/error.js');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      id: window.currentUserId,
      add: undefined
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

  addToBank: function (event) {
    event.preventDefault();
    UserUtil.addToBank(this.state, function (user) {
      UserActions.receiveCurrentUser(user);
      this.props.closeModal();
    }.bind(this));
  },

  render: function () {
    return <form className="form" onSubmit={this.addToBank}>
      <label htmlFor="add-carecoins" className="long-label">
        <h1>Add CareCoins</h1>
      </label>
      <br />
      <div className="error">
        {this.state.error}
      </div>
      <input
        id="add-carecoins"
        valueLink={this.linkState('add')}
        placeholder="0"
      />
      <br />
      <input type="submit" className="submit" value="Add CareCoins" />
    </form>;
  }
});
