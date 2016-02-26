var React = require('react');
var SessionUtil = require('../util/session_util.js');
var UserUtil = require('../util/user_util.js');
var UserActions = require('../actions/user_actions.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NewSessionForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      email: '',
      password: '',
    };
  },

  login: function (event) {
    event.preventDefault();
    SessionUtil.signIn(this.state, function (user) {
      window.currentUserId = user.id;
      UserActions.receiveCurrentUser(user);
      this.context.router.push('/fundraisers');
    }.bind(this));
  },

  render: function () {
    return <form onSubmit={this.login}>
      <h1>Log In</h1>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" valueLink={this.linkState('email')} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" valueLink={this.linkState('password')} />
      <input type="submit" value="Log In" />
    </form>;
  }
});

module.exports = NewSessionForm;
